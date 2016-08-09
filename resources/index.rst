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

Simpler Examples
----------------

Here we compile a simple C program to asmjs and WebAssembly to make it easier
to follow the generated code for a minimal example that does function calls,
local variables and I/O:

* `hello.c file <https://github.com/marianoguerra/ricardo-forth/blob/master/resources/hello.c>`_
* `hello-binaryen <resources/hello-binaryen.html>`_: hello.c compiled to WebAssembly using binaryen
* `hello-emcc <resources/hello-emcc.html>`_: hello.c compiled to asmjs using emscripten
* `the resources folder <https://github.com/marianoguerra/ricardo-forth/tree/master/resources>`_ has all the generated files if you want to read them

Read the Code
-------------

* `Project on github <https://github.com/marianoguerra/ricardo-forth>`_

* `WebAssembly version <https://github.com/marianoguerra/ricardo-forth/blob/master/src/first.wast>`_
* `Javascript version <https://github.com/marianoguerra/ricardo-forth/blob/master/src/buzzard.js>`_
* `C version prettified <https://github.com/marianoguerra/ricardo-forth/blob/master/src/buzzard.c>`_
* `C version (IOCC entry) <http://ftp.funet.fi/pub/doc/IOCCC/1992/buzzard.2.orig.c>`_

To read the process of prettifying the C code follow the `buzzard.c commits <https://github.com/marianoguerra/ricardo-forth/commits/master/src/buzzard.c>`_ in chronological order.

Presentation
------------

Slides from a presentation I gave at StuttgartJS (August 10th, 2016) are available here: `WebAssembly Presentation at StuttgartJS <resources/slides.html>`_

WebAssembly Resources
---------------------

* `WebAssembly demos <http://webassembly.github.io/demo/>`_
* `WebAssembly Explorer <http://mbebenita.github.io/WasmExplorer/>`_
* `ast.run WebAssembly playground <http://ast.run/>`_
* `Prototype Spec in Markdown <https://github.com/WebAssembly/spec/blob/md-proto/md-proto/WebAssembly.md>`_
* `Wasm example and instructions to build on windows <https://github.com/qis/wasm>`_
* emscripten's `emsdk/src/settings.js <https://github.com/kripken/emscripten/blob/master/src/settings.js>`_ contains docs about the flags that can be passed to emcc

* `Future of Binaryen in a stack machine world? <https://github.com/WebAssembly/binaryen/issues/663>`_

  + `Slides where it was decided to switch from being an AST to being a stack machine <https://docs.google.com/presentation/d/1dRsN5lKY60d3IOILi4bttJXOX4ge-2tA1PaEX-d5So0/edit?pref=2&pli=1#slide=id.g156cf85f39_1_274>`_
  + `Structured code for the stack machine <https://github.com/WebAssembly/design/issues/753>`_

* `Luke Wagner -on- WebAssembly: A New Compiler Target For The Web <https://www.youtube.com/watch?v=RByPdCN1RQ4>`_
* `Ben Titzer @ VMSS16: A Little on V8 and WebAssembly <https://www.youtube.com/watch?v=BRNxM8szTPA&feature=youtu.be>`_
* `Emscripten and WebAssembly by Alon Zakai / @kripken <https://kripken.github.io/talks/wasm.html#/>`_
* `Build Your First Thing With WebAssembly <http://cultureofdevelopment.com/blog/build-your-first-thing-with-web-assembly/>`_
* `A Particle System experiment designed to benchmark web technologies from a non trivial piece of code: ES6, Emscripten and Web Assembly <https://github.com/leefsmp/Particle-System>`_
* `SHA-3 (Keccak padding) in WebAssembly WAST <https://github.com/axic/keccak-wasm>`_
* `Experimental programming language that compiles to both WebAssembly and JavaScript <https://evanw.github.io/thinscript/>`_
* `Oryol 3D Engine Demos in asm.js and wasm <http://floooh.github.io/oryol-samples/>`_
