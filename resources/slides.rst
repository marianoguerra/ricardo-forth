WebAssembly
-----------

`Mariano Guerra <http://marianoguerra.github.io/>`_ (`@warianoguerra <https://twitter.com/warianoguerra>`_)

Co-founder `event-fabric.com <https://event-fabric.com>`_

StuttgartJS, August 2016

Vocabulary
----------

Assembly
--------

The real one, often abbreviated asm:

* Low-level programming language
* Very strong (generally 1 to 1) correspondence between

  + The language
  + and the architecture's machine code instructions

Projects implemented completely in assembly
-------------------------------------------

* `Transport Tycoon <https://en.wikipedia.org/wiki/Transport_Tycoon>`_
* `Roller Coster Tycoon <https://en.wikipedia.org/wiki/RollerCoaster_Tycoon>`_

* `KolibriOS <http://kolibrios.org>`_
* `MenuetOS <http://www.menuetos.net>`_

LLVM
----

* Collection of modular and reusable compiler and toolchain technologies 
* Used to develop compiler front ends and back ends

`llvm.org <http://llvm.org/>`_

LLVM Frontends
--------------

    Source Code -> LLVM IR\*



\* IR: intermediate representation

LLVM Backends
-------------

    LLVM IR -> CPU specific binary\* 



\* ARM, x86, MIPS, PowerPC etc.

asm.js
------

Optimizable low-level subset of JavaScript\*


\* Not for humans

WebAssembly
-----------

* Portable
* Size- and load-time-efficient format 
* Suitable for compilation to the web

Examples
--------

* `AngryBots <http://webassembly.github.io/demo/>`_
* `BananaBread <https://kripken.github.io/BananaBread/wasm-demo/index.html>`_
* `Oryol 3D Engine Demos in asm.js and wasm <http://floooh.github.io/oryol-samples/>`_

Wasm Binary Format
------------------

* Can be natively decoded much faster than JavaScript can be parsed

  + Experiments show more than 20X faster

Wasm Binary Format
------------------

* Must be

  + Portable
  + Stable
  + Small
  + Fast to decode
  + Fast to compile

Wasm Text Format
----------------

* For "view source"
* For tools, experiments, debugging, optimization
* Equivalent and isomorphic to the binary format
* Standardized only for tooling purposes
* Nested statements 

  + Instead of linear list like in asm

Wasm Text Format
----------------

* Prototypes use s-expression based syntax
* Currently no final, official, text format

  + `JS-like proposal <https://github.com/WebAssembly/design/pull/704>`_ from FF Nightly

Wasm Status
-----------

Getting to MVP

* `Future of Binaryen in a stack machine world? <https://github.com/WebAssembly/binaryen/issues/663>`_

  + `Slides where it was decided to switch from being an AST to being a stack machine <https://docs.google.com/presentation/d/1dRsN5lKY60d3IOILi4bttJXOX4ge-2tA1PaEX-d5So0/edit?pref=2&pli=1#slide=id.g156cf85f39_1_274>`_
  + `spec branch with stack changes <https://github.com/WebAssembly/spec/commits/stack>`_
  + `Patch to chromium <https://codereview.chromium.org/2176653002/>`_

* `Structured code for the stack machine <https://github.com/WebAssembly/design/issues/753>`_

Wasm Status
-----------

* LLVM backend upstream
* Lots of tools
* Reference implementation (`spec <https://github.com/WebAssembly/spec/>`_) in Ocaml

Wasm Status
-----------

* 3 Browser engines have native support in various stages

  + Google Chrome Beta: fully spec compliant on all architectures, behind a flag
  + Mozilla Firefox: optimized for ia32 and x64, behind a flag
  + Microsoft Edge: support in an experimental build

* MVP (Version 1.0) expected to be shipped this summer
* Standardization expected by the end of the year

Wasm Status
-----------

======================== ========================= ==========================
Browser                  Wasm Support              View Source
======================== ========================= ==========================
Firefox Stable (44)      No                        No
Firefos Nightly          Yes                       Yes[1]
Chrome Stable (52)       Yes                       No
Chrome Canary            Yes                       No
Edge
======================== ========================= ==========================

(as of August 10th, 2016)

[1] Custom Format (js-like, not s-expression based)

Wasm Roadmap
------------

* MVP
* Post-MVP
* Future

Wasm MVP
--------

* Will contain features which are available today in modern web browsers
* Which perform well even on mobile devices
* Leads to roughly the same functionality as asm.js

Wasm MVP
--------

* Module
* AST
* Binary format
* Text format
* To be implemented by

  + Web browsers
  + Completely different execution environments

Wasm in a Nutshell
------------------

From `Ben Titzer @ VMSS16's slides <https://ia601503.us.archive.org/32/items/vmss16/titzer.pdf>`_

Wasm Data Types
---------------

* void
* i32
* i64
* f32
* f64

Wasm Functions
--------------

* Flat, single global table
* Static binding
* Indirect calls through table

State
-----

* Linear memory

  + Large, bounds-checked array

Data Operations
---------------

* i32: + - * / % << >> >>> etc
* i64: + - * / % << >> >>> etc
* f32: + - * / sqrt ceil floor
* f64: + - * / sqrt ceil floor
* conversions
* load store
* call_direct call_indirect

Structured Control Flow
-----------------------

* if
* loop
* block
* br
* switch

Wasm Module
-----------

* Memory
* Data

* Imports
* Exports

* Start function

Wasm Module
-----------

* Global variables

* Tables
* Elements

* Functions
* Code


Imports
-------

* Provided, at instantiation time, by the host environment
* Similar to a native syscall
* Wasm doesn't know about Javascript or the DOM
* Can import functions, globals, memory, tables

Export
------

* Returned at instantiation time to the host environment
* Can export functions, globals, memory, tables
* Can share with another Wasm instance

Start function
--------------

* Called after module loading and before any call to the module function

Global variables
----------------

Memory
------

* Definition of zero or more linear memories
* in the MVP it's limited to 1

Data
----

* Analogous to the .data section of native executables
* Initializes memory

Tables
------

* Zero or more definitions of distinct tables
* In the MVP it's limited to 1
* Table of pointer to provided opaque functions

  + called with *call_indirect*

Elements
--------

* Like data section but for tables

Functions
---------

* Declares the signatures of each internal function

Code
----

* Contains the function body of each function declared by the function section

Index Spaces
------------

* Function Index Space
* Global Index Space
* Linear Memory Index Space
* Table Index Space

Wasm Post-MVP
-------------

* Threads
* SIMD
* Zero-cost Exception Handling
* Feature Testing

Wasm Future
-----------

* Finer-grained control over memory
* Large page support
* More expressive control flow

  + goto, tail calls

Wasm Future
-----------

* GC
* Source maps integration
* Coroutines
* Platform-independent JIT compilation

Wasm Future
-----------

* Multiprocess support
* Additional float operators
* Additional integer operators

  + min
  + max
  + abs

Wasm Future
-----------

* Integer Overflow Detection
* Better feature testing support
* Mutable global variables
* Streaming Compilation
* Multiple Tables and Memories

What Wasm isn't
---------------

* It's not a replacement for js
* It's not a programming language
* It's not a separate VM

* It's a complement to JS

Tools
-----

Emscripten
----------

C/C++ -> llvm\*  -> asm.js

\* LLVM Emscripten backend

Binaryen
--------

* Compiler and toolchain infrastructure library for Wasm
* Written in C++

Binaryen does
-------------

* wast -> wasm
* Interpret wasm
* asm.js -> wasm
* Polyfill wasm

Yo dawg
-------

    Binaryen (C++) -> Emscripten -> asm.js wasm polyfill

Example Time!
-------------

Hello world
-----------

Let's translate `hello.c <https://github.com/marianoguerra/ricardo-forth/blob/master/resources/hello.c>`_ to asm.js and Wasm.


Setting up the environment
--------------------------

* Attempt 1: apt install emscripten

  + Ubuntu 16.04
  + FAIL: weird version errors

* Attempt 2: emsdk

  + FAIL: no support for binaryen yet

Setting up the environment
--------------------------

* Attempt 3: compile from source

  + FAIL: no support for binaryen yet (WAT?)

* Attempt 4: compile from source (incoming branch of emscripten)

  + SUCCESS!
  + Thanks to `gh/qis <https://github.com/qis/wasm>`_ for the tip

  + Instructions `for linux <https://github.com/marianoguerra/ricardo-forth#setup-dev-environment>`_ and `for windows <https://github.com/qis/wasm>`_


What can I do with this?
------------------------

* I like minimal simple things
* I convert any problem into a "I need to build/implement" a programming language problem

Idea
----

`A sometimes minimal FORTH compiler and tutorial for Linux <http://www.eecs.wsu.edu/~hauser/teaching/Arch-F07/handouts/jonesforth.s.txt>`_ but in WebAssembly!

Problem
-------

No easy translation from asm to Wasm

wasm vs asm
-----------

* Code is not stored on the same memory as data
* Can't implement the `threaded code <https://en.wikipedia.org/wiki/Threaded_code>`_ technique

Alternative
-----------

Translate the C version mentioned in the comments.

Problem II
----------

The code was a little unreadable: http://ftp.funet.fi/pub/doc/IOCCC/1992/buzzard.2.orig.c

Solution
--------

First deobfuscated it

Then
----

* Compile the C version to asmjs and wasm
* Translate it to Javascript by hand
* Translate the C to the text format of wasm by hand

Result
------

`Ricardo Forth <https://marianoguerra.github.io/ricardo-forth/>`_

* A Forth dialect base on `buzzard.2 <http://ftp.funet.fi/pub/doc/IOCCC/1992/buzzard.2.orig.c>`_
* Implemented in C, Javascript and WebAssembly 
* Compiled from C to

  + asm.js (using emscripten) 

    - `run <https://github.com/marianoguerra/ricardo-forth/blob/master/bin/buzzard-binaryen.asm.js#L4922>`_, `def_word <https://github.com/marianoguerra/ricardo-forth/blob/master/bin/buzzard-binaryen.asm.js#L5285>`_, `r <https://github.com/marianoguerra/ricardo-forth/blob/master/bin/buzzard-binaryen.asm.js#L4231>`_, `inlines append_to_dict <https://github.com/marianoguerra/ricardo-forth/blob/master/bin/buzzard-binaryen.asm.js#L4944>`_

  + Wasm (using binaryen)

    - `$run <https://github.com/marianoguerra/ricardo-forth/blob/master/bin/buzzard-binaryen.wast#L22702>`_, `$def_word <https://github.com/marianoguerra/ricardo-forth/blob/master/bin/buzzard-binaryen.wast#L24312>`_, `$r <https://github.com/marianoguerra/ricardo-forth/blob/master/bin/buzzard-binaryen.wast#L19506>`_, `inlines $append_to_dict <https://github.com/marianoguerra/ricardo-forth/blob/master/bin/buzzard-binaryen.wast#L22814>`_

Result
------

====================== ====== =========== ================
Version                SLOC   Boilerplate Total SLOC
====================== ====== =========== ================
C                      229    0           229
JS   (me)              241    0           241
Wasm (me)              425    0           425
Wasm[1] (Binaryen)     25626  5162        30788
asmjs[2] (Emscripten)  10322  4740        15062
====================== ====== =========== ================

[1] I close parenthesis the lisp way, binaryen doesn't

[2] `"almost wasm" <https://github.com/marianoguerra/ricardo-forth/blob/master/bin/buzzard-emcc.asm.js#L2>`_

Demo
----

Resources
---------

* `Prototype Spec in Markdown <https://github.com/WebAssembly/spec/blob/md-proto/md-proto/WebAssembly.md>`_
* `WebAssembly Explorer <http://mbebenita.github.io/WasmExplorer/>`_
* `ast.run WebAssembly playground <http://ast.run/>`_
* `WASM Pilot Text Format Playground <http://people.mozilla.org/%7Eydelendik/tmp/waseditor/>`_
* `gh/drom wasm/wast related projects <https://github.com/search?q=user%3Adrom+was>`_
* emscripten's `emsdk/src/settings.js <https://github.com/kripken/emscripten/blob/master/src/settings.js>`_ contains docs about the flags that can be passed to emcc

Videos
------

* `Luke Wagner -on- WebAssembly: A New Compiler Target For The Web <https://www.youtube.com/watch?v=RByPdCN1RQ4>`_
* `Ben Titzer @ VMSS16: A Little on V8 and WebAssembly <https://www.youtube.com/watch?v=BRNxM8szTPA&feature=youtu.be>`_

More Resources
--------------

* `Emscripten and WebAssembly by Alon Zakai / @kripken <https://kripken.github.io/talks/wasm.html#/>`_
* `A Particle System experiment designed to benchmark web technologies from a non trivial piece of code: ES6, Emscripten and Web Assembly <https://github.com/leefsmp/Particle-System>`_
* `SHA-3 (Keccak padding) in WebAssembly WAST <https://github.com/axic/keccak-wasm>`_
* `Experimental programming language that compiles to both WebAssembly and JavaScript <https://evanw.github.io/thinscript/>`_
* `Build Your First Thing With WebAssembly <http://cultureofdevelopment.com/blog/build-your-first-thing-with-web-assembly/>`_
* `Wasm example and instructions to build on windows <https://github.com/qis/wasm>`_

Thanks!
-------
