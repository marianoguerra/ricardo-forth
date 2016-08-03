#include <stdio.h>
#include <stdlib.h>
#include <string.h>

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
		case 5:
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
                r(w + 2);
            } else {
                append_to_dict(2);
                append_to_dict(atoi(str_mem));
            }

			break;
		case 12:
			program_counter = m[m[1]--];
			break;
		case 15:
			top_of_stack = stack_ptr[-top_of_stack];
			break;
		case 1:
			append_to_dict(x);
			break;
		case 9:
			top_of_stack *= *stack_ptr--;
			break;
		case 7:
			m[top_of_stack] = *stack_ptr--;
			top_of_stack = *stack_ptr--;
			break;
		case 0:
			*++stack_ptr = top_of_stack;
			top_of_stack = m[program_counter++];
			break;
		case 8:
			top_of_stack = *stack_ptr-- - top_of_stack;
			break;
		case 2:
			m[++m[1]] = program_counter;
			program_counter = x;
			break;
		case 11:
			top_of_stack = 0 > top_of_stack;
			break;
		case 4:
			*m -= 2;
			append_to_dict(2);
			break;
		case 6:
			top_of_stack = m[top_of_stack];
			break;
		case 10:
			top_of_stack = *stack_ptr-- / top_of_stack;
			break;
		case 3:
			def_word(1);
			append_to_dict(2);
			break;
		case 13:
			putchar(top_of_stack);
			top_of_stack = *stack_ptr--;
			break;
		case 14:
			*++stack_ptr = top_of_stack;
			top_of_stack = getchar();
	}
}

void main()
{
    def_word(3);
    def_word(4);
    def_word(1);
    w = *m;
    append_to_dict(5);
    append_to_dict(2);
    program_counter = *m;
    append_to_dict(w);
    append_to_dict(program_counter - 1);

    for (w = 6; w < 16;) {
        def_word(1);
        append_to_dict(w++);
    }

    m[1] = *m;
    *m += 512;

    while(1) {
        r(m[program_counter++]);
    }
}
