Ricardo Forth
=============

A Forth dialect implemented in C, Javascript, WebAssembly and compiled from C
to asm.js and WebAssembly.

This project is based on the 1992 `IOCCC <http://ioccc.org/>`_ entry `buzzard.2 <http://ftp.funet.fi/pub/doc/IOCCC/1992/buzzard.2.orig.c>`_ (design notes: `buzzard.2.design <http://ftp.funet.fi/pub/doc/IOCCC/1992/buzzard.2.design>`_),
prettified and then compiled to:

* `asmjs <http://asmjs.org/spec/latest/>`_ using `emscripten <http://kripken.github.io/emscripten-site/>`_
* `WebAssembly <https://webassembly.github.io/>`_ using `Binaryen <https://github.com/WebAssembly/binaryen/>`_

Also reimplemented by translating the C code into Javascript and WebAssebly.

For instructions to setup the dev environment yourself check the `README <https://github.com/marianoguerra/ricardo-forth>`_.

Try it!
-------

* `Handwritten WebAssembly using the WebAssembly text format and wasm-as <bin/first.wasm.html>`_
* `Handwritten Javascript <bin/first.js.html>`_
* `C compiled to WebAssembly using Binaryen <bin/buzzard-binaryen.html>`_
* `C compiled to asm.js using emscripten <bin/buzzard-emcc.html>`_

Read the Code
-------------

* `Project on github <https://github.com/marianoguerra/ricardo-forth>`_

* `WebAssembly version <https://github.com/marianoguerra/ricardo-forth/blob/master/src/first.wast>`_
* `Javascript version <https://github.com/marianoguerra/ricardo-forth/blob/master/src/buzzard.js>`_
* `C version prettified <https://github.com/marianoguerra/ricardo-forth/blob/master/src/buzzard.c>`_
* `C version (IOCC entry) <http://ftp.funet.fi/pub/doc/IOCCC/1992/buzzard.2.orig.c>`_

To read the process of prettifying the C code follow the `buzzard.c commits <https://github.com/marianoguerra/ricardo-forth/commits/master/src/buzzard.c>`_ in chronological order.
