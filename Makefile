BINARYEN_PATH ?= $(HOME)/soft/binaryen/

all: first first.wasm first-emcc first-binaryen

first:
	gcc src/buzzard.c -o bin/first

first.wasm:
	wasm-as src/first.wast -o bin/first.wasm

first-emcc:
	emcc --pre-js src/buzzard-emcc.pre.js --separate-asm src/buzzard.c -o bin/buzzard-emcc.html
	@cp src/buzzard-emcc.html bin/

first-binaryen:
	emcc -Os -s BINARYEN=1 -s "BINARYEN_METHOD='native-wasm'" -s MODULARIZE=1 -s "EXPORT_NAME='main'" src/buzzard.c -o bin/buzzard-binaryen.js
	@cp src/buzzard-binaryen.html bin/

first-demo:
	cat ./examples/demo1.1st | ./bin/first

first-min:
	cat ./examples/min.1st | ./bin/first

second:
	echo help | cat examples/third docs/help.th - | ./bin/first

demo1:
	cat ./examples/third ./examples/demo1.th | ./bin/first

demo2:
	cat ./examples/third ./examples/demo2.th | ./bin/first

demo3:
	cat ./examples/third ./examples/demo3.th | ./bin/first

demo4:
	cat ./examples/third ./examples/demo4.th | ./bin/first

demo5:
	cat ./examples/third ./examples/demo5.th | ./bin/first

demos: demo1 demo2 demo3 demo4 demo5

third:
	cat ./examples/third ./docs/help.th - | ./bin/first

index:
	rst2html5 --embed-content --stylesheet-path resources/style.css resources/index.rst index.html

hello-emcc:
	emcc --separate-asm resources/hello.c -o resources/hello-emcc.html

hello-binaryen:
	emcc -Os -s BINARYEN=1 -s "BINARYEN_METHOD='native-wasm'" -s "EXPORT_NAME='main'" resources/hello.c -o resources/hello-binaryen.html

slides:

	rst2html5 --embed-images --jquery --reveal-js --stylesheet-path resources/slides.css --reveal-js-opts theme=serif resources/slides.rst > resources/slides.html
