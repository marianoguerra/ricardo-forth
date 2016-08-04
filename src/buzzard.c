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

// if we encounter a 2 and we call r with it, it will lookup the codeword
// stored at m[2] which is 0, which means pushint
#define ADDR_OF_PUSHINT 2

char str_mem[5000];
// m[0] = 32 so that the first dictionary append is at index 32
int  m[20000] = { 32 },
     // when defining the first word (CW_DEFINE), address of prev word will be
     // 1 which is used to know if we are at the first (last) dictionary
     // definition when doing lookup on _read
     last_dict_entry = 1,
     program_counter,
     stack[500],
     stack_ptr = 0,
     // strings start at index 64 since first 64 bytes are used to read user
     // input
     last_str_entry = 64,
     top_of_stack;

// m[0]: dictionary pointer
// m[1]: return stack index

void append_to_dict(int val) {
    int addr = m[0];
    m[addr] = val;
    m[0] += 1;
}

void def_word(int codeword)
{
    append_to_dict(last_dict_entry);
    last_dict_entry = m[0] - 1;
    append_to_dict(last_str_entry);
    append_to_dict(codeword);
    scanf("%s", str_mem + last_str_entry);
    last_str_entry += strlen(str_mem + last_str_entry) + 1;
}

void r(int word_addr)
{
    int read_count, val, entry_addr, entry_data_addr;
    int next_word = word_addr + 1;
    int codeword = m[word_addr];
    switch (codeword) {
        case CW__READ: // _read
            // first 64 bytes of str_mem are used to read user input, if
            // word is larger than that it will overwrite word names
            read_count = scanf("%s", str_mem);

            if (read_count < 1) {
                exit(0);
            } else {
                entry_addr = last_dict_entry;
            }

            // entry_addr will start from the end of the dictionary,
            // pointing to the beginning of the entry, it will get the value
            // of m[entry_addr + 1] (entry_addr + 1 points to the address of
            // the word name in str_mem)
            // then we will use that address to get the address of the name on
            // str_mem and compare it against str_mem
            // (remember that first 64 bytes of str_mem are used for user
            // input)
            // if strings are the same, that is, the word the user entered is
            // the same as the name of the word we are pointing with entry_addr
            // then strcmp will return 0 and we will exit the loop
            // if it's not equal we will move to the previous entry which
            // is stored at entry_addr + 0
            //
            // the interesting part happens when we are at the first entry and
            // it doesn't match, the address of the previous entry for the
            // first entry is set to 1 (the initial value of last_dict_entry at
            // the top of the file), which is the fake address of the
            // pushint word, when we try to get the string address of the
            // pushint word (m[entry_addr + 1], which is m[2]) the value of
            // m[2] is always 0, which makes str_mem[0] and of course
            // strcmp(str_mem, &str_mem[0]) == 0 because a string is equal to
            // itself and we exit the loop, now entry_addr is 1 and we can
            // use that to check if we found the word or not.
            while (strcmp(str_mem, &str_mem[m[entry_addr + 1]])) {
                entry_addr = m[entry_addr];
            }

            // if entry_addr != 1 then the word the user entered exists, so
            // we run it
            if (entry_addr != 1) {
                // we calculate the address of the data for the entry
                entry_data_addr = entry_addr + 2;
                // and run it
                r(entry_data_addr);
            } else {
                // if we didn't find the entry we assume it's a number we
                // append the addr of pushint instruction and then the number
                append_to_dict(ADDR_OF_PUSHINT);
                val = atoi(str_mem);
                append_to_dict(val);
            }

            break;
        case CW_EXIT: // exit
            // leave the current function: pop the return stack into the
            // program counter
            program_counter = m[m[1]];
            m[1] -= 1;
            break;
        case CW__PICK: // _pick
            top_of_stack = stack[stack_ptr - top_of_stack];
            break;
        case CW_COMPILE: // compile code
            // a pointer to the next word is appended to the dictionary
            append_to_dict(next_word);
            break;
        case CW_MUL: // *
            top_of_stack *= stack[stack_ptr];
            stack_ptr -= 1;
            break;
        case CW_STORE: // !
            m[top_of_stack] = stack[stack_ptr];
            stack_ptr -= 1;
            top_of_stack = stack[stack_ptr];
            stack_ptr -= 1;
            break;
        case CW_PUSHINT: // pushint
            stack_ptr += 1;
            stack[stack_ptr] = top_of_stack;
            top_of_stack = m[program_counter];
            program_counter += 1;
            break;
        case CW_SUB: // -
            top_of_stack = stack[stack_ptr] - top_of_stack;
            stack_ptr -= 1;
            break;
        case CW_RUN: // run code
            // push program counter into return stack
            m[1] += 1;
            m[m[1]] = program_counter;
            // jump to the address of the next word
            program_counter = next_word;
            break;
        case CW_LT0: // <0
            top_of_stack = 0 > top_of_stack;
            break;
        case CW_IMMED: // immediate
            m[0] -= 2;
            append_to_dict(CW_RUN);
            break;
        case CW_FETCH: // @
            top_of_stack = m[top_of_stack];
            break;
        case CW_DIV: // /
            top_of_stack = stack[stack_ptr] / top_of_stack;
            stack_ptr -= 1;
            break;
        case CW_DEFINE: // :
            def_word(CW_COMPILE);
            append_to_dict(CW_RUN);
            break;
        case CW_ECHO: // echo
            putchar(top_of_stack);
            top_of_stack = *stack_ptr;
            stack_ptr -= 1;
            break;
        case CW_KEY: // key
            stack_ptr += 1;
            *stack_ptr = top_of_stack;
            top_of_stack = getchar();
    }
}

void main()
{
    int i, tmp1, word_to_execute;
    // : (codeword 3) 0, 1 and 2 are internal words with no names
    // 0: pushint
    // 1: compile
    // 2: run
    def_word(CW_DEFINE);
    // immediate (codeword 4)
    def_word(CW_IMMED);

    // define the read loop, by defining the word _read as
    // 40: CW_COMPILE
    // 41: CW__READ
    // 42: CW_RUN
    // 43: 41
    // 44: 42
    //
    // from the design file: FIRST builds a very small word internally that it
    // executes as its main loop.  This word calls _read and then calls itself.
    // Each time it calls itself, it uses up a word on the return stack, so it
    // will eventually trash things.
    def_word(CW_COMPILE);
    tmp1 = m[0];
    append_to_dict(CW__READ);
    append_to_dict(CW_RUN);
    program_counter = m[0];
    // appends 41
    append_to_dict(tmp1);
    // appends 42
    append_to_dict(program_counter - 1);

    // define the rest of builtin words
    // they will have two instructions
    // CW_COMPILE and the builtin codeword for them, a number from 6 to 15
    // 6: @ 7: ! 8: - 9: * 10: / 11: <0 12: exit 13: echo 14: key 15: _pick
    for (i = 6; i < 16; i += 1) {
        def_word(CW_COMPILE);
        append_to_dict(i);
    }

    // top of return stack (grows upwards)
    m[1] = m[0];
    // reserve 512 ints for stack, skip stack space in dict pointer
    m[0] += 512;

    // at the beginning of the loop program_counter points to 43
    // which will call read and then call itself for the loop
    while(1) {
        word_to_execute = m[program_counter];
        program_counter += 1;
        r(word_to_execute);
    }
}
