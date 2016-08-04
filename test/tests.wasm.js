/*globals QUnit, assert, window, console, Ricardo*/
function __testBuzzard(t, module, helloWorld, third, demo1, demo2, demo3, demo4, demo5) {
    'use strict';
    var minProg = ": immediate _read @ ! - * / <0 exit echo key _pick";

    console.log("module", module);

    function newBuzzard() {
        return module.newInstance();
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
            console.log(vm.lib.dumpInfo());
            assert.ok(error instanceof Error);
            assert.equal(error.message, "EOF");
            assert.equal(vm.lib.getOutput(), "Hello World!\n\0\0\0\0");
            return true;
        });
    });

    t("third + demo5 works", function (assert) {
        var vm = newBuzzard();
        vm.lib.appendInput(third + "\n" + demo5);
        assert.throws(vm.main, function (error) {
            assert.ok(error instanceof Error);
            assert.equal(error.message, "EOF");
            assert.equal(vm.lib.getOutput(), "Welcome to THIRD.\nOk.\nThe factorial of 3 is: 6 \nThe factorial of 5 is: 120 \n");
            return true;
        });
    });
}

(function () {
    'use strict';
    var args = [QUnit.test.bind(QUnit)],
        prom = Ricardo.init().then(function (module) {
            args.push(module);
        }),
        files = ["../examples/demo1.1st",
            "../examples/third",
            "../examples/demo1.th",
            "../examples/demo2.th",
            "../examples/demo3.th",
            "../examples/demo4.th",
            "../examples/demo5.th"];


    files.forEach(function (path) {
        var req = window.fetch(path);

        prom = prom.then(function () {
            return req;
        });

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
