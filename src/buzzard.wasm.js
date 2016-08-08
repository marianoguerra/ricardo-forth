/*global window, console*/
(function (global, console) {
    'use strict';
    var api = {};

    function makeLib() {
        var m,
            lib,
            readIndex = 0,
            toRead = "",
            output = "";

        function init(exports) {
            lib = exports;
            m = new global.Uint8Array(lib.memory);
        }

        function getchar() {
            if (readIndex >= toRead.length) {
                throw Error("EOF");
            } else {
                var c = toRead.charCodeAt(readIndex);
                readIndex += 1;
                return c;
            }
        }

        function putchar(c) {
            output += String.fromCharCode(c);
        }

        function readWordInto(offset) {
            var c = getchar(),
                charsRead = 0;

            // skip trailing blank
            while (c === 32 || c === 10 || c === 9) {
                c = getchar();
            }

            while (c !== 32 && c !== 10 && c !== 9 && offset < m.length) {
                m[offset] = c;
                offset += 1;
                charsRead += 1;
                c = getchar();
            }

            readIndex -= 1;
            m[offset] = 0;

            return charsRead;
        }

        function atoi(offset) {
            var accum = "",
                s = m,
                i, c;

                for (i = offset, c = s[i]; c !== 0; i += 1, c = s[i]) {
                    accum += String.fromCharCode(c);
                }

                return parseInt(accum, 10);
        }

        function strcmp(offset1, offset2) {
            var c1, c2,
                s1 = m, s2 = m;

            do {
                c1 = s1[offset1];
                c2 = s2[offset2];
                offset1 += 1;
                offset2 += 1;
            } while (c1 === c2 && c1 !== 0 && offset1 < s1.length && offset2 < s2.length);

            if (c1 === c2){
                return 0;
            } else {
                return 1;
            }
        }

        function signalError(code1, code2) {
            console.error("Error signaled", code1, code2);
            throw Error("Error Signaled " + code1 + " " + code2);
        }

        function debug(code1, code2) {
            console.info("debug:", code1, code2);
        }

        function getOutput() {
            return output;
        }

        function appendInput(text) {
            toRead += text;
        }

        function lastStrEntry() {
            return lib.loadI32(88);
        }

        function lastDictEntry() {
            return lib.loadI32(76);
        }

        function dumpRegisters() {
            return {
                "dictPtr": lib.loadI32(0),
                "retStackIdx": lib.loadI32(4),
                "ignore": lib.loadI32(8),
                "_x": lib.loadI32(12),
                "_y": lib.loadI32(16),
                "lastDictEntry": lastDictEntry(),
                "programCounter": lib.loadI32(16),
                "stackPtr": lib.loadI32(84),
                "lastStrEntry": lastStrEntry(),
                "topOfStack": lib.loadI32(92)
            };
        }

        function dumpNames() {
            var names = [],
                accum = [],
                c;

            for(var i = lastStrEntry() - 1; i > 20063; i -= 1) {
                c = lib.loadU8(i);
                if (c === 0) {
                    if (accum.length > 0) {
                        accum.reverse();
                        names.push(accum.join(""));
                        accum = [];
                    }
                } else {
                    accum.push(String.fromCharCode(c));
                }
            }

            if (accum.length > 0) {
                accum.reverse();
                names.push(accum.join(""));
            }

            names.reverse();
            return names;
        }

        function readCString(addr) {
            var c = lib.loadU8(addr),
                accum = "";

            while (c !== 0) {
                accum += String.fromCharCode(c);
                addr += 1;
                c = lib.loadU8(addr);
            }

            return accum;
        }

        function readEntry(addr) {
            var nameAddr = lib.loadI32(addr + 4);
            return {
                address: addr,
                prev: lib.loadI32(addr),
                nameAddr: nameAddr,
                name: readCString(nameAddr),
                codeword: lib.loadI32(addr + 8),
                nextWords: [1, 2, 3, 4, 5].map(function (i) {
                    return lib.loadI32(addr + 8 + (4 * i));
                })
            };
        }

        function dumpDict() {
            var entryAddr = lastDictEntry(),
                accum = [],
                entry,
                maxEntries = 0;

            do {
                entry = readEntry(entryAddr);
                accum.push(entry);
                maxEntries += 1;

                if (maxEntries > 1000) {
                    throw Error("too many entries");
                }

                entryAddr = entry.prev;
            } while (entryAddr !== 8);

            accum.reverse();
            return accum;
        }

        function dumpInfo() {
            return {
                regs: dumpRegisters(),
                names: dumpNames(),
                dict: dumpDict()
            };
        }

        return {
            readWordInto: readWordInto,
            getchar: getchar,
            putchar: putchar,
            atoi: atoi,
            strcmp: strcmp,
            signalError: signalError,
            debug: debug,

            init: init,
            getOutput: getOutput,
            appendInput: appendInput,

            dumpInfo: dumpInfo,
            dumpRegisters: dumpRegisters
        };
    }

    api.init = function () {
        return global.fetch("../bin/first.wasm")
        .then(function(response) {
            return response.arrayBuffer();
        })
        .then(function(buffer) {
            var moduleBufferView = new global.Uint8Array(buffer);

            function newInstance() {
                var imports = makeLib(),
                    dependencies = {
                    "global": {},
                    "env": {}
                };

                dependencies.lib = imports;
                var module = global.Wasm.instantiateModule(moduleBufferView, dependencies);
                var lib = module.exports;

                imports.init(lib);

                return {
                    module: module,
                    main: lib.main,
                    lib: imports
                };
            }

            return {newInstance: newInstance};
        });
    };

    global.Ricardo = api;

}(window, console));

