
first:
	gcc src/buzzard.c -o bin/first

second:
	echo help | cat examples/third docs/help.th - | ./bin/first

demo5:
	cat ./examples/third ./examples/demo5.th | ./bin/first

third:
	cat ./examples/third ./docs/help.th - | ./bin/first

