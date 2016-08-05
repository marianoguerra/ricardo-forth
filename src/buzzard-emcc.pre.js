/*globals Module, FS*/

Module['noInitialRun'] = true;
Module['_buzzardInput'] = '';
Module['_buzzardInputIndex'] = 0;
Module['_buzzardAppendInput'] = function (text) {
    Module['_buzzardInput'] += text;
};
Module['preInit'] = function () {
    function stdin() {
        var toRead = Module['_buzzardInput'],
            readIndex = Module['_buzzardInputIndex'];

        if (readIndex >= toRead.length) {
            return null;
        } else {
            var c = toRead.charCodeAt(readIndex);
            Module['_buzzardInputIndex'] += 1;
            return c;
        }
    }

    FS.init(stdin);
};
