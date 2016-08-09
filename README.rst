Ricardo Forth
=============

A Forth dialect implemented in C, Javascript, WebAssembly and compiled from C
to asm.js and WebAssembly.

This project is based on the 1992 `IOCCC <http://ioccc.org/>`_ entry `buzzard.2 <http://ftp.funet.fi/pub/doc/IOCCC/1992/buzzard.2.orig.c>`_ (design notes: `buzzard.2.design <http://ftp.funet.fi/pub/doc/IOCCC/1992/buzzard.2.design>`_),
prettified and then compiled to:

* `asmjs <http://asmjs.org/spec/latest/>`_ using `emscripten <http://kripken.github.io/emscripten-site/>`_
* `WebAssembly <https://webassembly.github.io/>`_ using `Binaryen <https://github.com/WebAssembly/binaryen/>`_

Also reimplemented by translating the C code into Javascript and WebAssebly.

To read the process of prettifying the C code follow the `buzzard.c commits <https://github.com/marianoguerra/ricardo-forth/commits/master/src/buzzard.c>`_ in chronological order.

Setup Dev Environment
---------------------

Pre setup (I assume ubuntu or debian derivative, `see here for instructions to build on windows <https://github.com/qis/wasm>`_)::

    sudo apt-get update

    sudo apt-get -y install build-essential cmake nodejs default-jre

::

    git clone -b incoming --depth 1 https://github.com/kripken/emscripten-fastcomp llvm
    git clone -b incoming --depth 1 https://github.com/kripken/emscripten-fastcomp-clang llvm/tools/clang
    git clone -b incoming --depth 1 https://github.com/kripken/emscripten emsdk
    git clone --depth 1 https://github.com/WebAssembly/binaryen binaryen

    mkdir llvm/build
    mkdir binaryen/build

    cd llvm/build

    cmake .. -DCMAKE_INSTALL_PREFIX=.. \
      -DCMAKE_BUILD_TYPE=Release -DLLVM_TARGETS_TO_BUILD="X86;JSBackend" \
      -DLLVM_EXPERIMENTAL_TARGETS_TO_BUILD="WebAssembly" -DLLVM_INCLUDE_EXAMPLES=OFF \
      -DLLVM_INCLUDE_TESTS=OFF -DCLANG_INCLUDE_EXAMPLES=OFF -DCLANG_INCLUDE_TESTS=OFF

    cmake --build . --target install --config Release

    cd ../../binaryen/build
    cmake .. -DCMAKE_INSTALL_PREFIX=.. -DBUILD_STATIC_LIB=ON
    cmake --build . --target install --config Release

    cd ../../
    # this should go in a more permanent place like .bashrc or equivalent
    export PATH=$PATH:$PWD/llvm/bin/:$PWD/emsdk/:$PWD/binaryen/bin/

    # Run the command so it generates basic configuration
    em++

Now edit emscripten configuration file::

    edit $HOME/.emscripten

Try one example
---------------

::

    git clone https://github.com/qis/wasm wasm-example
    cd wasm-example

    em++ -Os -std=c++14 -s BINARYEN=1 -s "BINARYEN_METHOD='native-wasm'" \
      --memory-init-file 1 -s ELIMINATE_DUPLICATE_FUNCTIONS=1 -s MODULARIZE=1 \
        -s "EXPORT_NAME='main'" -s NO_EXIT_RUNTIME=1 -s USE_GLFW=3 main.cc -o main.js

    python -m SimpleHTTPServer

    firefox http://localhost:8000/

Build
-----

::

    make all

Files
-----

src/buzzard.c
    Prettified version of original `buzzard.2.orig.c <http://ftp.funet.fi/pub/doc/IOCCC/1992/buzzard.2.orig.c>`_.
    Used to generate the native binary, asmjs and wasm versions.

src/buzzard.js
    Translation of buzzard.c by hand to vanilla js

src/first.wast
    Translation of buzzard.c by hand to WebAssembly text format

src/clib.js
    JS implementations of c functions from buzzard.c too simulate i/o

src/buzzard-emcc.html
    HTML page used to run the asmjs version, allows input in text area

src/buzzard-emcc.pre.js
    Initialization code for buzzard-emcc.html

src/buzzard-binaryen.html
    HTML page used to run the wasm version, allows input in text area

test/index.html
    Unit tests for buzzard.js

test/tests.js
    Unit tests for buzzard.js

examples/demo1.1st
    Hello world program

examples/min.1st
    Simplest program that runs to completion

examples/third
    Implementation of the forth dialect bootstraping from minimal interpreter

examples/demo[1-5].th
    5 Demos that run on top of third
    (third must be provided as input before this examples)

docs/*
    Documentation about buzzard from the IOCCC site, kept here too to have all
    the info in the repo

Files on the build folder
.........................

This files are generated during *make all*.

bin/first
    binary from buzzard.c

bin/first.wasm
    WebAssembly version of src/first.wast, compiled with wasm-as

bin/buzzard-binaryen.*
    Files from c -> wasm translation

bin/buzzard-emcc.*
    Files from c -> asmjs translation

Resources
---------

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

TODO
----

* Clean, extract, reuse code from bin/\*.html files
* Create some micro benchmarks and benchmark tooling to compare execution time



Copyright Notice
----------------

The following files are copyright Landon Curt Noll & Larry Bassel. See
COPYRIGHT for more details:

* src/buzzard.c
* examples/*
* docs/*

All other files were created by Mariano Guerra,
licensed under `MIT License <https://opensource.org/licenses/MIT>`_
