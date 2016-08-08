(module
  (memory 2) ;; 64k * 2
  ;; memory layout in 32bit words (i32)
  ;; 0: m[0]: dictionary pointer
  ;; 1: m[1]: return stack index
  ;; 2: fake pushint codeword, always 0
  ;; 3: _x in third (temp variable, used for words like swap)
  ;; 4: _y in third (temp variable)
  ;; 5: temp variable in third
  ;; 6-32: reserved (third seems to write at least in 7, 8 and 9)

  ;; 32-85: first part of dictionary
  ;; 85-597: return stack (512 words after end of first part of dict)

  ;; 597-20000: dict mem
  ;; 20000-20500: stack
  ;; 20500-21750: str_mem (5000 / 4)

  ;; 22000: last_dict_entry
  ;; 22001: program_counter
  ;; 22002: stack_ptr
  ;; 22003: last_str_entry
  ;; 22004: top_of_stack

  ;; start wasm utilities

  (export "m" memory)
  (export "main" $main)
  (export "loadI32" $fetch)
  (export "loadU8" $load-u8)

  (import $read-word-into "lib" "readWordInto" (param i32) (result i32))
  (import $getchar "lib" "getchar" (result i32))
  (import $putchar "lib" "putchar" (param i32))
  (import $atoi "lib" "atoi" (param i32) (result i32))

  ;; strcmp(offset1, offset2) (offsets into m)
  (import $strcmp "lib" "strcmp" (param i32 i32) (result i32))
  (import $signal-error "lib" "signalError" (param i32 i32))
  (import $debug "lib" "debug" (param i32 i32))

  ;; utility for debugging
  (func $load-u8 (param $addr i32) (result i32)
   (i32.load8_u (get_local $addr)))

  (func $fetch (param $addr i32) (result i32)
   (i32.load (i32.mul (get_local $addr) (i32.const 4))))

  (func $store (param $addr i32) (param $val i32)
    (i32.store (i32.mul (get_local $addr) (i32.const 4)) (get_local $val)))

  (func $incr-addr (param $addr i32)
    (call $store (get_local $addr)
      (i32.add (call $fetch (get_local $addr)) (i32.const 1))))

  (func $decr-addr (param $addr i32)
    (call $store (get_local $addr)
      (i32.sub (call $fetch (get_local $addr)) (i32.const 1))))

  (func $store-stack (param $stack-addr i32) (param $val i32)
    (i32.store (i32.add (i32.const 20000)
                (i32.mul (get_local $stack-addr) (i32.const 4)))
               (get_local $val)))

  (func $fetch-stack (param $stack-addr i32) (result i32)
   (i32.load (i32.add (i32.const 20000)
              (i32.mul (get_local $stack-addr) (i32.const 4)))))

  (func $m0 (result i32)
    (call $fetch (i32.const 0)))

  (func $set-m0 (param $val i32)
    (call $store (i32.const 0) (get_local $val)))

  (func $incr-m0
    (call $incr-addr (i32.const 0)))

  (func $m1 (result i32)
    (call $fetch (i32.const 1)))

  (func $set-m1 (param $val i32)
    (call $store (i32.const 1) (get_local $val)))

  (func $incr-m1
    (call $incr-addr (i32.const 1)))

  (func $decr-m1
    (call $decr-addr (i32.const 1)))

  ;; 22000: last_dict_entry
  (func $last_dict_entry (result i32)
    (call $fetch (i32.const 22000)))

  (func $set-last_dict_entry (param $val i32)
    (call $store (i32.const 22000) (get_local $val)))

  ;; 22001: program_counter
  (func $program_counter (result i32)
    (call $fetch (i32.const 22001)))

  (func $set-program_counter (param $val i32)
    (call $store (i32.const 22001) (get_local $val)))

  (func $incr-program_counter
    (call $incr-addr (i32.const 22001)))

  ;; 22002: stack_ptr
  (func $stack_ptr (result i32)
    (call $fetch (i32.const 22002)))

  (func $set-stack_ptr (param $val i32)
    (call $store (i32.const 22002) (get_local $val)))

  (func $incr-stack_ptr
    (call $incr-addr (i32.const 22002)))

  (func $decr-stack_ptr
    (call $decr-addr (i32.const 22002)))

  ;; 22003: last_str_entry
  (func $last_str_entry (result i32)
    (call $fetch (i32.const 22003)))

  (func $set-last_str_entry (param $val i32)
    (call $store (i32.const 22003) (get_local $val)))

  ;; 22004: top_of_stack
  (func $top_of_stack (result i32)
    (call $fetch (i32.const 22004)))

  (func $set-top_of_stack (param $val i32)
    (call $store (i32.const 22004) (get_local $val)))

  (func $str_mem (result i32)
   (i32.const 20500))

  ;; end  wasm utilities


  ;; void append_to_dict(int val) {
  (func $append_to_dict (param $val i32)
    ;; int addr = m[0];
    (local $addr i32)
    (set_local $addr (call $m0))

    ;; m[addr] = val;
    (call $store (get_local $addr) (get_local $val))

    ;; m[0] += 1;
    (call $incr-m0))
  ;; }

  ;;void def_word(int codeword)
  (func $def_word (param $codeword i32)
    (local $read-len i32)
  ;;{
  ;;    append_to_dict(last_dict_entry);
    (call $append_to_dict (call $last_dict_entry))

  ;;    last_dict_entry = m[0] - 1;
    (call $set-last_dict_entry (i32.sub (call $m0) (i32.const 1)))
  
  ;;    append_to_dict(last_str_entry);
    (call $append_to_dict (call $last_str_entry))
  
  ;;    append_to_dict(codeword);
    (call $append_to_dict (get_local $codeword))
  
  ;; next two lines aren't direct translation
  ;;    scanf("%s", str_mem + last_str_entry);
    (set_local $read-len
      (call_import $read-word-into
        (i32.add (call $str_mem) (call $last_str_entry))))
  
  ;;    last_str_entry += strlen(str_mem + last_str_entry) + 1;
    (call $set-last_str_entry (i32.add (call $last_str_entry)
                               (i32.add (get_local $read-len) (i32.const 1)))))
  
  ;;}

  ;; void r(int word_addr) {
  (func $r (param $word_addr i32)
  ;;     int read_count, val, entry_addr, entry_data_addr;
    (local $read_count i32)
    (local $val i32)
    (local $entry_addr i32)
    (local $entry_data_addr i32)
    (local $next_word i32)
    (local $codeword i32)

  ;;     int next_word = word_addr + 1;
    (set_local $next_word (i32.add (get_local $word_addr) (i32.const 1)))

  ;;     int codeword = m[word_addr];
    (set_local $codeword (call $fetch (get_local $word_addr)))

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
            (call_import $signal-error (i32.const 1) (get_local $codeword))

            ;; break
            (br $break))


        ;; $cw__pick

            ;; top_of_stack = stack[stack_ptr - top_of_stack];
            (call $set-top_of_stack (call $fetch-stack
                                     (i32.sub (call $stack_ptr) (call $top_of_stack))))

            ;; break
            (br $break))

        ;; $cw_key

            ;; stack_ptr += 1;
            (call $incr-stack_ptr)

            ;; stack[stack_ptr] = top_of_stack;
            (call $store-stack (call $stack_ptr) (call $top_of_stack))

            ;;top_of_stack = getchar();
            (call $set-top_of_stack (call_import $getchar))

            ;; break
            (br $break))

        ;; $cw_echo

            ;; putchar(top_of_stack);
            (call_import $putchar (call $top_of_stack))

            ;; top_of_stack = stack[stack_ptr];
            (call $set-top_of_stack (call $fetch-stack (call $stack_ptr)))

            ;; stack_ptr -= 1;
            (call $decr-stack_ptr)

            ;; break
            (br $break))

        ;; $cw_exit

            ;; program_counter = m[m[1]];
            (call $set-program_counter (call $fetch (call $m1)))

            ;; m[1] -= 1;
            (call $decr-m1)

            ;; break
            (br $break))

        ;; $cw_lt0

            ;; top_of_stack = 0 > top_of_stack;
            (call $set-top_of_stack
             (i32.gt_s (i32.const 0) (call $top_of_stack)))

            ;; break
            (br $break))

        ;; $cw_div

            ;; top_of_stack = stack[stack_ptr] / top_of_stack;
            (call $set-top_of_stack
             (i32.div_s (call $fetch-stack (call $stack_ptr))
              (call $top_of_stack)))

            ;; stack_ptr -= 1;
            (call $decr-stack_ptr)

            ;; break
            (br $break))

        ;; $cw_mul

            ;; top_of_stack *= stack[stack_ptr];
            (call $set-top_of_stack
             (i32.mul (call $top_of_stack)
              (call $fetch-stack (call $stack_ptr))))

            ;; stack_ptr -= 1;
            (call $decr-stack_ptr)

            ;; break
            (br $break))

        ;; $cw_sub

            ;; top_of_stack = stack[stack_ptr] - top_of_stack;
            (call $set-top_of_stack
             (i32.sub (call $fetch-stack (call $stack_ptr))
              (call $top_of_stack)))

            ;; stack_ptr -= 1;
            (call $decr-stack_ptr)

            ;; break
            (br $break))

        ;; $cw_store

            ;; m[top_of_stack] = stack[stack_ptr];
            (call $store (call $top_of_stack) (call $fetch-stack (call $stack_ptr)))

            ;; stack_ptr -= 1;
            (call $decr-stack_ptr)

            ;; top_of_stack = stack[stack_ptr];
            (call $set-top_of_stack (call $fetch-stack (call $stack_ptr)))

            ;; stack_ptr -= 1;
            (call $decr-stack_ptr)

            ;; break
            (br $break))

        ;; $cw_fetch

            ;; top_of_stack = m[top_of_stack];
            (call $set-top_of_stack (call $fetch (call $top_of_stack)))

            ;; break
            (br $break))

        ;; $cw__read

            ;; read_count = scanf("%s", str_mem);
            (set_local $read_count (call_import $read-word-into (call $str_mem)))

            ;; if (read_count < 1) {
            (if (i32.lt_s (get_local $read_count) (i32.const 1))

            ;; exit(0);
            ;; ERROR 2 0: exit with status 0
              (call_import $signal-error (i32.const 2) (i32.const 0))

            ;;} else {

            ;; entry_addr = last_dict_entry;
               (set_local $entry_addr (call $last_dict_entry)))
            ;;}

            (loop $exit-while $next-while
            ;; while (strcmp(str_mem, &str_mem[m[entry_addr + 1]])) {
              (br_if $exit-while (i32.eq (i32.const 0)
                (call_import $strcmp (call $str_mem)
                    (i32.add (call $str_mem)
                        (call $fetch (i32.add (get_local $entry_addr) (i32.const 1)))))))

            ;; entry_addr = m[entry_addr];
             (set_local $entry_addr (call $fetch (get_local $entry_addr)))

             (br $next-while))
            ;;}

            ;; if (entry_addr != 1) {
            (if (i32.ne (get_local $entry_addr) (i32.const 1))
              (block
               ;; entry_data_addr = entry_addr + 2;
               (set_local $entry_data_addr (i32.add (get_local $entry_addr) (i32.const 2)))
               ;; r(entry_data_addr);
               (call $r (get_local $entry_data_addr)))

            ;;} else {
              (block
               ;; append_to_dict(ADDR_OF_PUSHINT);
               (call $append_to_dict (i32.const 2))

               ;; val = atoi(str_mem);
               (set_local $val (call_import $atoi (call $str_mem)))

               ;; append_to_dict(val);
               (call $append_to_dict (get_local $val))))
            ;;}

            ;; break
            (br $break))

        ;; cw_immed

            ;; m[0] -= 2;
            (call $set-m0 (i32.sub (call $m0) (i32.const 2)))

            ;; append_to_dict(CW_RUN);
            (call $append_to_dict (i32.const 2))

            ;; break
            (br $break))

        ;; $cw_define

            ;; def_word(CW_COMPILE);
            (call $def_word (i32.const 1))

            ;; append_to_dict(CW_RUN);
            (call $append_to_dict (i32.const 2))

            ;; break
            (br $break))

        ;; $cw_run

            ;; m[1] += 1;
            (call $incr-m1)

            ;; m[m[1]] = program_counter;
            (call $store (call $m1) (call $program_counter))

            ;; program_counter = next_word;
            (call $set-program_counter (get_local $next_word))

            ;; break
            (br $break))

        ;; $cw_compile

            ;; append_to_dict(next_word);
            (call $append_to_dict (get_local $next_word))

            ;; break
            (br $break))

        ;; $cw_pushint

            ;; stack_ptr += 1;
            (call $incr-stack_ptr)

            ;; stack[stack_ptr] = top_of_stack;
            (call $store-stack (call $stack_ptr) (call $top_of_stack))

            ;; top_of_stack = m[program_counter];
            (call $set-top_of_stack (call $fetch (call $program_counter)))

            ;; program_counter += 1;
            (call $incr-program_counter)

            ;; break
            (br $break)))
  ;; }
  ;; 
  ;; int main() {
  (func $main

  ;; int i, tmp1, word_to_execute;
  (local $i i32)
  (local $tmp1 i32)
  (local $word_to_execute i32)

  (call $set-m0 (i32.const 32))
  (call $set-last_str_entry (i32.const 64))
  (call $set-stack_ptr (i32.const 0))
  (call $set-last_dict_entry (i32.const 1))

  ;; def_word(CW_DEFINE);
  (call $def_word (i32.const 3))

  ;; def_word(CW_IMMED);
  (call $def_word (i32.const 4))

  ;; def_word(CW_COMPILE);
  (call $def_word (i32.const 1))

  ;; tmp1 = m[0];
  (set_local $tmp1 (call $m0))

  ;; append_to_dict(CW__READ);
  (call $append_to_dict (i32.const 5))

  ;; append_to_dict(CW_RUN);
  (call $append_to_dict (i32.const 2))

  ;; program_counter = m[0];
  (call $set-program_counter (call $m0))

  ;; // appends 41
  ;; append_to_dict(tmp1);
  (call $append_to_dict (get_local $tmp1))

  ;; // appends 42
  ;; append_to_dict(program_counter - 1);
  (call $append_to_dict (i32.sub (call $program_counter) (i32.const 1)))

  ;; for (i = 6; i < 16; i += 1) {
  (set_local $i (i32.const 6))
  (loop $break $top
   (br_if $break (i32.ge_s (get_local $i) (i32.const 16)))

   ;; def_word(CW_COMPILE);
   (call $def_word (i32.const 1))

   ;; append_to_dict(i);
   (call $append_to_dict (get_local $i))

   (set_local $i (i32.add (get_local $i) (i32.const 1)))
   (br $top))
  ;; }

  ;; // top of return stack (grows upwards)
  ;; m[1] = m[0];
  (call $set-m1 (call $m0))
    
  ;; // reserve 512 ints for stack, skip stack space in dict pointer
  ;; m[0] += 512;
  (call $set-m0 (i32.add (call $m0) (i32.const 512)))

  ;; while(1) {
  (loop $break1 $top1
   ;; word_to_execute = m[program_counter];
   (set_local $word_to_execute (call $fetch (call $program_counter)))

   ;; program_counter += 1;
   (call $incr-program_counter)

   ;; r(word_to_execute);
   (call $r (get_local $word_to_execute))

   (br $top1)))

  ;; return 0;
  ;; }

)
