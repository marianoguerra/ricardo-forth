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

void a(int x)
{
    m[m[0]++] = last_dict_entry;
    last_dict_entry = *m - 1;
    m[m[0]++] = last_str_entry;
    m[m[0]++] = x;
    scanf("%s", str_mem + last_str_entry);
    last_str_entry += strlen(str_mem + last_str_entry) + 1;
}

void r(int x)
{
	switch (m[x++]) {
		case 5:
			for (w = scanf("%s", str_mem) < 1 ? exit(0), 0 : last_dict_entry;
					strcmp(str_mem, &str_mem[m[w + 1]]); w = m[w]);
			w - 1 ? r(w + 2) : (m[m[0]++] = 2, m[m[0]++] = atoi(str_mem));
			break;
		case 12:
			program_counter = m[m[1]--];
			break;
		case 15:
			top_of_stack = stack_ptr[-top_of_stack];
			break;
		case 1:
			m[m[0]++] = x;
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
			m[m[0]++] = 2;
			break;
		case 6:
			top_of_stack = m[top_of_stack];
			break;
		case 10:
			top_of_stack = *stack_ptr-- / top_of_stack;
			break;
		case 3:
			a(1);
			m[m[0]++] = 2;
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
    a(3);
    a(4);
    a(1);
    w = *m;
    m[m[0]++] = 5;
    m[m[0]++] = 2;
    program_counter = *m;
    m[m[0]++] = w;
    m[m[0]++] = program_counter - 1;
    for (w = 6; w < 16;)
	a(1), m[m[0]++] = w++;
    m[1] = *m;
    for (*m += 512;; r(m[program_counter++]));
}
