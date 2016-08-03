
first:
	gcc src/buzzard.c -o bin/first

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
