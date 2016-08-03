/*globals QUnit, assert, __buzzard, __clib, window, console*/
function __testBuzzard(t, helloWorld, third, demo1, demo2, demo3, demo4, demo5) {
    'use strict';
    var minProg = ": immediate _read @ ! - * / <0 exit echo key _pick";

    function newBuzzard() {
        var clib = __clib(function (c) {
                clib.output += c;
            });

        clib.output = "";

        return __buzzard(window, clib);
    }

    // assumes well formed string in mem
    function readCString(mem, offset) {
        var accum = "",
            c = mem[offset];

        while (c !== 0) {
            accum += String.fromCodePoint(c);
            offset += 1;
            c = mem[offset];
        }

        return accum;

    }

    function readEntry(vm, ptr) {

        return {
            prev: vm.m[ptr],
            name: readCString(vm.str_mem, vm.m[ptr + 1]),
            addr: ptr
        };
    }

    function readDict(vm) {
        var last_dict_entry = vm.last_dict_entry(),
            entries = [],
            entry;

        do {
            entry = readEntry(vm, last_dict_entry);
            entries.push(entry);
            last_dict_entry = entry.prev;
        } while(last_dict_entry !== 1);

        entries.reverse();

        return entries;
    }

    t("constructor works", function (assert) {
        var vm = newBuzzard();
        assert.ok(true, "vm created");
    });

    t("running main with empty input throws EOF", function (assert) {
        var vm = newBuzzard();
        assert.throws(vm.main, function (error) {
            assert.ok(error instanceof Error);
            assert.equal(error.message, "EOF");
            return true;
        });
    });

    t("running main with min program works", function (assert) {
        var vm = newBuzzard();
        vm.lib.appendInput(minProg);
        assert.throws(vm.main, function (error) {
            assert.ok(error instanceof Error);
            assert.equal(error.message, "EOF");
            return true;
        });
    });

    t("running main with hello wold works", function (assert) {
        var vm = newBuzzard();
        vm.lib.appendInput(helloWorld);
        assert.throws(vm.main, function (error) {
            assert.ok(error instanceof Error);
            assert.equal(error.message, "EOF");
            assert.equal(vm.lib.output, "Hello World!\n\0\0\0\0");
            return true;
        });
    });

    t("third + demo5 works", function (assert) {
        var vm = newBuzzard();
        vm.lib.appendInput(third + "\n" + demo5);
        assert.throws(vm.main, function (error) {
            assert.ok(error instanceof Error);
            assert.equal(error.message, "EOF");
            console.log(readDict(vm));
            assert.equal(vm.lib.output, "Welcome to THIRD.\nOk.\nThe factorial of 3 is: 6 \nThe factorial of 5 is: 120 \n");
            return true;
        });
    });
}

(function () {
    'use strict';
    var args = [QUnit.test.bind(QUnit)],
        prom,
        files = ["../examples/demo1.1st",
            "../examples/third",
            "../examples/demo1.th",
            "../examples/demo2.th",
            "../examples/demo3.th",
            "../examples/demo4.th",
            "../examples/demo5.th"];


    files.forEach(function (path) {
        var req = window.fetch(path);

        if (!prom) {
            prom = req;
        } else {
            prom = prom.then(function () {
                return req;
            });
        }

        prom = prom.then(function(response) {
            return response.text();
        })
        .then(function(text) {
            args.push(text);
            return args;
        });
    });

    prom.then(function (args) {
        __testBuzzard.apply(null, args);
    });
}());
