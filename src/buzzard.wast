(module
    (memory 1 1) ;; 64k
    ;; memory layout:
    ;; see register section below for register layout
    ;; m[128-2176]: return stack (512 i32 word)
    ;; m[544-20000]: dictionary
    ;; m[20000-20064]: space reserved for user input
    ;; m[20064-25000]: str_mem (5000 u8 chars)
    ;; m[25000-65535]: stack (the rest)

    (export "m" memory)
    (export "main" $main)
    (export "loadI32" $load-i32)
    (export "loadU8" $load-u8)

    (import $read-word-into "lib" "readWordInto" (param i32) (result i32))
    (import $getchar "lib" "getchar" (result i32))
    (import $putchar "lib" "putchar" (param i32))
    (import $atoi "lib" "atoi" (param i32) (result i32))

    ;; strcmp(offset1, offset2) (offsets into m)
    (import $strcmp "lib" "strcmp" (param i32 i32) (result i32))
    (import $signal-error "lib" "signalError" (param i32 i32))
    (import $debug "lib" "debug" (param i32 i32))

    ;; Start registers section

    ;; m[0]:	i32 dictionary pointer
    ;; m[4]:	i32 return stack index
    ;; m[8]:	i32 always 0 (fake pushing instruction)
    ;; m[12]:	i32 last_dict_entry
    ;; m[16]:	i32 program_counter
    ;; m[20]:	i32 stack_ptr
    ;; m[24]:	i32 last_str_entry
    ;; m[28]:	i32 top_of_stack

    (func $dict-ptr (result i32)
      (i32.load (i32.const 0)))

    (func $set-dict-ptr (param $val i32)
      (i32.store (i32.const 0) (get_local $val)))


    (func $ret-stack-idx (result i32)
      (i32.load (i32.const 4)))

    (func $set-ret-stack-idx (param $val i32)
      (i32.store (i32.const 4) (get_local $val)))


    (func $last-dict-entry (result i32)
      (i32.load (i32.const 12)))

    (func $set-last-dict-entry (param $val i32)
      (i32.store (i32.const 12) (get_local $val)))


    (func $program-counter (result i32)
      (i32.load (i32.const 16)))

    (func $set-program-counter (param $val i32)
      (i32.store (i32.const 16) (get_local $val)))


    (func $stack-ptr (result i32)
      (i32.load (i32.const 20)))

    (func $set-stack-ptr (param $val i32)
      (i32.store (i32.const 20) (get_local $val)))


    (func $last-str-entry (result i32)
      (i32.load (i32.const 24)))

    (func $set-last-str-entry (param $val i32)
      (i32.store (i32.const 24) (get_local $val)))


    (func $top-of-stack (result i32)
      (i32.load (i32.const 28)))

    (func $set-top-of-stack (param $val i32)
      (i32.store (i32.const 28) (get_local $val)))


    ;; End registers section

    ;; utility for debugging
    (func $load-i32 (param $addr i32) (result i32)
        (i32.load (get_local $addr)))

    (func $load-u8 (param $addr i32) (result i32)
        (i32.load8_u (get_local $addr)))

    (func $append-to-dict (param $val i32)
        ;; int addr;
        (local $addr i32)

        ;; addr = m[0];
        (set_local $addr (call $dict-ptr))

        ;; m[addr] = val;
        (i32.store (get_local $addr) (get_local $val))

        ;; m[0] += 1;
        (call $set-dict-ptr (i32.add (call $dict-ptr) (i32.const 4))))

    (func $def-word (param $codeword i32)
        ;; int read-len;
        (local $read-len i32)

        ;; append_to_dict(last_dict_entry);
        (call $append-to-dict (call $last-dict-entry))

        ;; last_dict_entry = m[0] - 1;
        (call $set-last-dict-entry (i32.sub (call $dict-ptr) (i32.const 4)))

        ;; append_to_dict(last_str_entry);
        (call $append-to-dict (call $last-str-entry))

        ;; append_to_dict(codeword);
        (call $append-to-dict (get_local $codeword))

        ;; next two lines aren't direct translation
        ;; scanf("%s", str_mem + last_str_entry);
        (set_local $read-len
            (call_import $read-word-into (call $last-str-entry)))

        ;; last_str_entry += strlen(str_mem + last_str_entry) + 1;
        (call $set-last-str-entry (i32.add (call $last-str-entry)
                                   (i32.add (get_local $read-len)
                                    (i32.const 1)))))

    (func $r (param $word-addr i32)
        ;; int read_count, val, entry_addr, entry_data_addr, codeword;
        (local $read-count i32)
        (local $val i32)
        (local $entry-addr i32)
        (local $entry-data-addr i32)
        (local $codeword i32)

        ;; int next_word = word_addr + 1;
        (local $next-word i32)
        (set_local $next-word (i32.add (get_local $word-addr) (i32.const 4)))

        ;; codeword = m[word_addr];
        (set_local $codeword (i32.load (get_local $word-addr)))

        ;; label to implement break out of cases
        (block $break
        ;; case 0
        (block $cw_pushint
        ;; case 1
        (block $cw_compile
        ;; case 2
        (block $cw_run
        ;; case 3
        (block $cw_define
        ;; case 4
        (block $cw_immed
        ;; case 5
        (block $cw__read
        ;; case 6
        (block $cw_fetch
        ;; case 7
        (block $cw_store
        ;; case 8
        (block $cw_sub
        ;; case 9
        (block $cw_mul
        ;; case 10
        (block $cw_div
        ;; case 11
        (block $cw_lt0
        ;; case 12
        (block $cw_exit
        ;; case 13
        (block $cw_echo
        ;; case 14
        (block $cw_key
        ;; case 15
        (block $cw__pick
        ;; default:
        (block $cw_not_found

        (br_table
            $cw_pushint
            $cw_compile
            $cw_run
            $cw_define
            $cw_immed
            $cw__read
            $cw_fetch
            $cw_store
            $cw_sub
            $cw_mul
            $cw_div
            $cw_lt0
            $cw_exit
            $cw_echo
            $cw_key
            $cw__pick

            $cw_not_found

            (get_local $codeword)))

            ;; $cw_not_found
                ;; ERROR 1 CODEWORD: codeword not found
                (call_import $debug (i32.const 1) (get_local $word-addr))
                (call_import $debug (i32.const 1) (get_local $codeword))
                (call_import $signal-error (i32.const 1) (get_local $codeword))

                ;; break
                (br $break))


            ;; $cw__pick

                ;; top_of_stack = stack_ptr[-top_of_stack];
                (call $set-top-of-stack (i32.load (i32.sub (call $stack-ptr)
                                                   (call $top-of-stack))))

                ;; break
                (br $break))

            ;; $cw_key
                ;; stack_ptr += 1;
                (call $set-stack-ptr (i32.add (call $stack-ptr) (i32.const 4)))

                ;; *stack_ptr = top_of_stack;
                (i32.store (call $stack-ptr) (call $top-of-stack))

                ;; top_of_stack = getchar();
                (call $set-top-of-stack (call_import $getchar))

                ;; break
                (br $break))

            ;; $cw_echo
                ;; putchar(top_of_stack);
                (call_import $putchar (call $top-of-stack))

                ;; top_of_stack = *stack_ptr;
                (call $set-top-of-stack (i32.load (call $stack-ptr)))

                ;; stack_ptr -= 1;
                (call $set-stack-ptr (i32.sub (call $stack-ptr) (i32.const 4)))

                ;; break
                (br $break))

            ;; $cw_exit
                ;; program_counter = m[m[1]];
                (call $set-program-counter (i32.load (call $ret-stack-idx)))

                ;; m[1] -= 1;
                (call $set-ret-stack-idx (i32.sub (call $ret-stack-idx)
                                          (i32.const 4)))

                ;; break
                (br $break))

            ;; $cw_lt0
                ;; top_of_stack = 0 > top_of_stack;
                ;; won't translate it as yoda
                (call $set-top-of-stack (i32.lt_s (call $top-of-stack)
                                         (i32.const 0)))

                ;; break
                (br $break))

            ;; $cw_div
                ;; top_of_stack = *stack_ptr / top_of_stack;
                (call $set-top-of-stack (i32.mul (i32.load (call $stack-ptr))
                                         (call $top-of-stack)))
                ;; stack_ptr -= 1;
                (call $set-stack-ptr (i32.sub (call $stack-ptr) (i32.const 4)))

                ;; break
                (br $break))

            ;; $cw_mul
                ;; top_of_stack *= *stack_ptr;
                (call $set-top-of-stack (i32.mul (call $top-of-stack)
                                         (i32.load (call $stack-ptr))))
                ;; stack_ptr -= 1;
                (call $set-stack-ptr (i32.sub (call $stack-ptr) (i32.const 4)))

                ;; break
                (br $break))

            ;; $cw_sub
                ;; top_of_stack = *stack_ptr - top_of_stack;
                (call $set-top-of-stack (i32.sub (i32.load (call $stack-ptr))
                                         (call $top-of-stack)))
                ;; stack_ptr -= 1;
                (call $set-stack-ptr (i32.sub (call $stack-ptr) (i32.const 4)))

                ;; break
                (br $break))

            ;; $cw_store
                ;; m[top_of_stack] = *stack_ptr;

                (i32.store (call $top-of-stack) (i32.load (call $stack-ptr)))

                ;; stack_ptr -= 1;
                (call $set-stack-ptr (i32.sub (call $stack-ptr) (i32.const 4)))

                ;; top_of_stack = *stack_ptr;
                (call $set-top-of-stack (i32.load (call $stack-ptr)))

                ;; stack_ptr -= 1;
                (call $set-stack-ptr (i32.sub (call $stack-ptr) (i32.const 4)))

                ;; break
                (br $break))

            ;; $cw_fetch
                ;; top_of_stack = m[top_of_stack];
                (call $set-top-of-stack (i32.load (call $top-of-stack)))

                ;; break
                (br $break))

            ;; $cw__read
                ;; read_count = scanf("%s", str_mem);
                (set_local $read-count (call_import $read-word-into (i32.const 20000)))

                ;; if (read_count < 1) {
                (if (i32.lt_s (get_local $read-count) (i32.const 1))

                 ;; exit(0);
                 ;; ERROR 2 0: exit with status 0
                 (call_import $signal-error (i32.const 2) (i32.const 0))

                 ;; } else {
                 ;;   entry_addr = last_dict_entry;
                 (set_local $entry-addr (call $last-dict-entry)))

                ;;}

                ;; while (strcmp(str_mem, &str_mem[m[entry_addr + 1]])) {
                (loop $exit-while $next-while
                    (br_if $exit-while
                     (call_import $strcmp
                      ;; offset of str_mem (user input)
                      (i32.const 20000)
                      ;; address in memory of the start of the name of this entry
                      (i32.load (i32.add (get_local $entry-addr)
                                 (i32.const 4)))))

                    ;; entry_addr = m[entry_addr];
                    (set_local $entry-addr (i32.load (get_local $entry-addr)))

                    (br $next-while))
                ;; }


                ;; if (entry_addr != 1) {
                (if (i32.ne (get_local $entry-addr) (i32.const 1))
                    (block
                ;;     entry_data_addr = entry_addr + 2;
                        (set_local $entry-data-addr
                            (i32.add (get_local $entry-addr) (i32.const 8)))

                ;;     r(entry_data_addr);
                        (call $r (get_local $entry-data-addr)))


                ;; } else {
                    (block
                ;;     append_to_dict(ADDR_OF_PUSHINT);
                        (call $append-to-dict (i32.const 2))
                ;;     val = atoi(str_mem);
                        (set_local $val (call_import $atoi (i32.const 20000)))
                ;;     append_to_dict(val);
                        (call $append-to-dict (get_local $val))))
                ;; }

                ;; break
                (br $break))

            ;; cw_immed
                ;; m[0] -= 2;
                (call $set-dict-ptr (i32.sub (call $dict-ptr) (i32.const 8)))

                ;; append_to_dict(CW_RUN);
                (call $append-to-dict (i32.const 2))

                ;; break
                (br $break))

            ;; $cw_define
                ;; def_word(CW_COMPILE);
                (call $def-word (i32.const 1))

                ;; append_to_dict(CW_RUN);
                (call $append-to-dict (i32.const 2))

                ;; break
                (br $break))

            ;; $cw_run
                ;; m[1] += 1;

                (call $set-ret-stack-idx (i32.add (call $ret-stack-idx)
                                          (i32.const 4)))

                ;; m[m[1]] = program_counter;
                ;; program_counter = next_word;

                ;; break
                (br $break))

            ;; $cw_compile
                ;; append_to_dict(next_word);
                (call $append-to-dict (get_local $next-word))

                ;; break
                (br $break))

            ;; $cw_pushint
                ;; stack_ptr += 1;
                (call $set-stack-ptr (i32.add (call $stack-ptr) (i32.const 4)))

                ;; *stack_ptr = top_of_stack;
                (i32.store (call $stack-ptr) (call $top-of-stack))

                ;; top_of_stack = m[program_counter];
                (call $set-top-of-stack (i32.load (call $program-counter)))

                ;; program_counter += 1;
                (call $set-program-counter (i32.add (call $program-counter)
                                            (i32.const 1)))

                ;; break
                (br $break)))

    (func $main
        ;; int i, tmp1, word_to_execute;
        (local $i i32)
        (local $tmp1 i32)
        (local $word-to-execute i32)

        ;; init the dict-ptr, in c it's 32 since we later jump over the return
        ;; stack, here we have the return stack before the whole dict
        (call $set-dict-ptr (i32.const 544))
        (call $set-last-str-entry (i32.const 20064))
        (call $set-stack-ptr (i32.const 25000))
        (call $set-last-dict-entry (i32.const 4))

        ;; def_word(CW_DEFINE);
        (call $def-word (i32.const 3))

        ;; def_word(CW_IMMED);
        (call $def-word (i32.const 4))

        ;; def_word(CW_COMPILE);
        (call $def-word (i32.const 1))

        ;;tmp1 = m[0];
        (set_local $tmp1 (call $dict-ptr))

        ;; append_to_dict(CW__READ);
        (call $append-to-dict (i32.const 5))

        ;; append_to_dict(CW_RUN);
        (call $append-to-dict (i32.const 2))

        ;; program_counter = m[0];
        (call $set-program-counter (call $dict-ptr))

        ;; appends 41
        ;; append_to_dict(tmp1);
        (call $append-to-dict (get_local $tmp1))

        ;; appends 42
        ;; append_to_dict(program_counter - 1);
        (call $append-to-dict (i32.sub (call $program-counter)
                               (i32.const 1)))

        ;; for (i = 6; i < 16; i += 1) {
        (set_local $i (i32.const 6))

        (loop $break $top
            (br_if $break (i32.ge_s (get_local $i) (i32.const 16)))

            ;; def_word(CW_COMPILE);
            (call $def-word (i32.const 1))

            ;; append_to_dict(i);
            (call $append-to-dict (get_local $i))

            (set_local $i (i32.add (get_local $i) (i32.const 1)))
            (br $top))

        ;; }

        ;; m[1] = m[0];
        (call $set-ret-stack-idx (call $dict-ptr))

        ;; NOTE: we don't do the return stack jump in the next line since
        ;; we have the return stack before the beginning of the dictionary
        ;; m[0] += 512;

        ;; while(1) {
        (loop $break1 $top1
            ;; word_to_execute = m[program_counter];
            (set_local $word-to-execute (i32.load (call $program-counter)))

            ;; program_counter += 1;
            (call $set-program-counter (i32.add (call $program-counter)
                                        (i32.const 1)))

            ;; r(word_to_execute);
            (call $r (get_local $word-to-execute))

            (br $top1))
        ;; }
        )
)
