function __clib(writeChar) {
    'use strict';
    var readIndex = 0,
        toRead = "";

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
        writeChar(String.fromCharCode(c));
    }

    function readWordInto(array, offset) {
        var c = getchar(),
            charsRead = 0;

        // skip trailing blank
        while (c === 32 || c === 10 || c === 9) {
            c = getchar();
        }

        while (c !== 32 && c !== 10 && c !== 9 && offset < array.length) {
            array[offset] = c;
            offset += 1;
            charsRead += 1;
            c = getchar();
        }

        readIndex -= 1;
        array[offset] = 0;

        return charsRead;
    }

    function appendInput(text) {
        toRead += text;
    }

    function exit(status) {
        throw Error("exit: " + status);
    }

    function strcmp(s1, offset1, s2, offset2) {
        var c1, c2;

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

    function atoi(s) {
        var accum = "",
            i, c;

        for (i = 0, c = s[i]; c !== 0; i += 1, c = s[i]) {
            accum += String.fromCharCode(c);
        }

        return parseInt(accum, 10);
    }

    return {
        appendInput: appendInput,
        getchar: getchar,
        putchar: putchar,
        exit: exit,
        atoi: atoi,
        strcmp: strcmp,
        readWordInto: readWordInto
    };
}
