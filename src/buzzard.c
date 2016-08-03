#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define CW_PUSHINT  0
#define CW_COMPILE  1
#define CW_RUN      2

#define CW_DEFINE   3
#define CW_IMMED    4
#define CW__READ    5
#define CW_FETCH    6
#define CW_STORE    7
#define CW_SUB      8
#define CW_MUL      9
#define CW_DIV      10
#define CW_LT0      11
#define CW_EXIT     12
#define CW_ECHO     13
#define CW_KEY      14
#define CW__PICK    15

char str_mem[5000];
int  m[20000] = { 32 },
	 last_dict_entry = 1,
     program_counter,
     stack[500],
     *stack_ptr = stack,
     last_str_entry = 64,
     w,
     top_of_stack;

// m[0]: dictionary pointer
// m[1]: return stack index

void append_to_dict(int val) {
    m[m[0]++] = val;
}

void def_word(int codeword)
{
    append_to_dict(last_dict_entry);
    last_dict_entry = *m - 1;
    append_to_dict(last_str_entry);
    append_to_dict(codeword);
    scanf("%s", str_mem + last_str_entry);
    last_str_entry += strlen(str_mem + last_str_entry) + 1;
}

void r(int x)
{
    int read_count;
	switch (m[x++]) {
		case CW__READ: // _read
            read_count = scanf("%s", str_mem);

            if (read_count < 1) {
                exit(0);
            } else {
                w = last_dict_entry;
            }

            while (strcmp(str_mem, &str_mem[m[w + 1]])) {
                w = m[w];
            }

            if (w - 1) {
                printf("w - 1: %d, r(%d)\n", w - 1, w + 2);
                r(w + 2);
            } else {
                append_to_dict(CW_RUN);
                append_to_dict(atoi(str_mem));
            }

			break;
		case CW_EXIT: // exit
			program_counter = m[m[1]--];
			break;
		case CW__PICK: // _pick
			top_of_stack = stack_ptr[-top_of_stack];
			break;
		case CW_COMPILE: // compile code
			append_to_dict(x);
			break;
		case CW_MUL: // *
			top_of_stack *= *stack_ptr--;
			break;
		case CW_STORE: // !
			m[top_of_stack] = *stack_ptr--;
			top_of_stack = *stack_ptr--;
			break;
		case CW_PUSHINT: // pushint
			*++stack_ptr = top_of_stack;
			top_of_stack = m[program_counter++];
			break;
		case CW_SUB: // -
			top_of_stack = *stack_ptr-- - top_of_stack;
			break;
		case CW_RUN: // run code
            // push program counter into return stack
			m[++m[1]] = program_counter;
            // jump to the address of the data field for this word
			program_counter = x;
			break;
		case CW_LT0: // <0
			top_of_stack = 0 > top_of_stack;
			break;
		case CW_IMMED: // immediate
			*m -= 2;
			append_to_dict(CW_RUN);
			break;
		case CW_FETCH: // @
			top_of_stack = m[top_of_stack];
			break;
		case CW_DIV: // /
			top_of_stack = *stack_ptr-- / top_of_stack;
			break;
        case CW_DEFINE: // :
			def_word(CW_COMPILE);
			append_to_dict(CW_RUN);
			break;
		case CW_ECHO: // echo
			putchar(top_of_stack);
			top_of_stack = *stack_ptr--;
			break;
		case CW_KEY: // key
			*++stack_ptr = top_of_stack;
			top_of_stack = getchar();
	}
}

void main()
{
    // :
    def_word(CW_DEFINE);
    // immediate
    def_word(CW_IMMED);
    // _read
    def_word(CW_COMPILE);
    w = m[0];
    append_to_dict(CW__READ);
    append_to_dict(CW_RUN);
    program_counter = m[0];
    // appends 41
    append_to_dict(w);
    // appends 42
    append_to_dict(program_counter - 1);

    for (w = 6; w < 16;) {
        def_word(CW_COMPILE);
        append_to_dict(w++);
    }

    m[1] = m[0];
    // skip stack
    m[0] += 512;

    while(1) {
        r(m[program_counter++]);
    }
}
