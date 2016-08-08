Module["asm"] =  (function(global, env, buffer) {
  'almost asm';
  
  
  var HEAP8 = new global.Int8Array(buffer);
  var HEAP16 = new global.Int16Array(buffer);
  var HEAP32 = new global.Int32Array(buffer);
  var HEAPU8 = new global.Uint8Array(buffer);
  var HEAPU16 = new global.Uint16Array(buffer);
  var HEAPU32 = new global.Uint32Array(buffer);
  var HEAPF32 = new global.Float32Array(buffer);
  var HEAPF64 = new global.Float64Array(buffer);


  var STACKTOP=env.STACKTOP|0;
  var STACK_MAX=env.STACK_MAX|0;
  var tempDoublePtr=env.tempDoublePtr|0;
  var ABORT=env.ABORT|0;
  var cttz_i8=env.cttz_i8|0;

  var __THREW__ = 0;
  var threwValue = 0;
  var setjmpId = 0;
  var undef = 0;
  var nan = global.NaN, inf = global.Infinity;
  var tempInt = 0, tempBigInt = 0, tempBigIntP = 0, tempBigIntS = 0, tempBigIntR = 0.0, tempBigIntI = 0, tempBigIntD = 0, tempValue = 0, tempDouble = 0.0;
  var tempRet0 = 0;

  var Math_floor=global.Math.floor;
  var Math_abs=global.Math.abs;
  var Math_sqrt=global.Math.sqrt;
  var Math_pow=global.Math.pow;
  var Math_cos=global.Math.cos;
  var Math_sin=global.Math.sin;
  var Math_tan=global.Math.tan;
  var Math_acos=global.Math.acos;
  var Math_asin=global.Math.asin;
  var Math_atan=global.Math.atan;
  var Math_atan2=global.Math.atan2;
  var Math_exp=global.Math.exp;
  var Math_log=global.Math.log;
  var Math_ceil=global.Math.ceil;
  var Math_imul=global.Math.imul;
  var Math_min=global.Math.min;
  var Math_clz32=global.Math.clz32;
  var abort=env.abort;
  var assert=env.assert;
  var abortStackOverflow=env.abortStackOverflow;
  var nullFunc_ii=env.nullFunc_ii;
  var nullFunc_iiii=env.nullFunc_iiii;
  var nullFunc_vi=env.nullFunc_vi;
  var invoke_ii=env.invoke_ii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_vi=env.invoke_vi;
  var _pthread_cleanup_pop=env._pthread_cleanup_pop;
  var ___lock=env.___lock;
  var _abort=env._abort;
  var ___setErrNo=env.___setErrNo;
  var ___syscall6=env.___syscall6;
  var _sbrk=env._sbrk;
  var ___syscall140=env.___syscall140;
  var _llvm_fabs_f64=env._llvm_fabs_f64;
  var _pthread_cleanup_push=env._pthread_cleanup_push;
  var _emscripten_memcpy_big=env._emscripten_memcpy_big;
  var ___syscall54=env.___syscall54;
  var ___unlock=env.___unlock;
  var _exit=env._exit;
  var __exit=env.__exit;
  var ___syscall145=env.___syscall145;
  var ___syscall146=env.___syscall146;
  var tempFloat = 0.0;

// EMSCRIPTEN_START_FUNCS

function stackAlloc(size) {
  size = size|0;
  var ret = 0;
  ret = STACKTOP;
  STACKTOP = (STACKTOP + size)|0;
  STACKTOP = (STACKTOP + 15)&-16;
  if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(size|0);

  return ret|0;
}
function stackSave() {
  return STACKTOP|0;
}
function stackRestore(top) {
  top = top|0;
  STACKTOP = top;
}
function establishStackSpace(stackBase, stackMax) {
  stackBase = stackBase|0;
  stackMax = stackMax|0;
  STACKTOP = stackBase;
  STACK_MAX = stackMax;
}

function setThrew(threw, value) {
  threw = threw|0;
  value = value|0;
  if ((__THREW__|0) == 0) {
    __THREW__ = threw;
    threwValue = value;
  }
}

function setTempRet0(value) {
  value = value|0;
  tempRet0 = value;
}
function getTempRet0() {
  return tempRet0|0;
}

function _append_to_dict($val) {
 $val = $val|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $addr = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = $val;
 $1 = HEAP32[2]|0;
 $addr = $1;
 $2 = $0;
 $3 = $addr;
 $4 = (8 + ($3<<2)|0);
 HEAP32[$4>>2] = $2;
 $5 = HEAP32[2]|0;
 $6 = (($5) + 1)|0;
 HEAP32[2] = $6;
 STACKTOP = sp;return;
}
function _def_word($codeword) {
 $codeword = $codeword|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer = sp;
 $0 = $codeword;
 $1 = HEAP32[20002]|0;
 _append_to_dict($1);
 $2 = HEAP32[2]|0;
 $3 = (($2) - 1)|0;
 HEAP32[20002] = $3;
 $4 = HEAP32[20003]|0;
 _append_to_dict($4);
 $5 = $0;
 _append_to_dict($5);
 $6 = HEAP32[20003]|0;
 $7 = (83332 + ($6)|0);
 HEAP32[$vararg_buffer>>2] = $7;
 (_scanf(80488,$vararg_buffer)|0);
 $8 = HEAP32[20003]|0;
 $9 = (83332 + ($8)|0);
 $10 = (_strlen($9)|0);
 $11 = (($10) + 1)|0;
 $12 = HEAP32[20003]|0;
 $13 = (($12) + ($11))|0;
 HEAP32[20003] = $13;
 STACKTOP = sp;return;
}
function _r($word_addr) {
 $word_addr = $word_addr|0;
 var $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0;
 var $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0;
 var $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0;
 var $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0;
 var $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0;
 var $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $codeword = 0, $entry_addr = 0, $entry_data_addr = 0, $next_word = 0, $read_count = 0, $val = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer = sp;
 $0 = $word_addr;
 $1 = $0;
 $2 = (($1) + 1)|0;
 $next_word = $2;
 $3 = $0;
 $4 = (8 + ($3<<2)|0);
 $5 = HEAP32[$4>>2]|0;
 $codeword = $5;
 $6 = $codeword;
 do {
  switch ($6|0) {
  case 5:  {
   HEAP32[$vararg_buffer>>2] = 83332;
   $7 = (_scanf(80488,$vararg_buffer)|0);
   $read_count = $7;
   $8 = $read_count;
   $9 = ($8|0)<(1);
   if ($9) {
    _exit(0);
    // unreachable;
   }
   $10 = HEAP32[20002]|0;
   $entry_addr = $10;
   while(1) {
    $11 = $entry_addr;
    $12 = (($11) + 1)|0;
    $13 = (8 + ($12<<2)|0);
    $14 = HEAP32[$13>>2]|0;
    $15 = (83332 + ($14)|0);
    $16 = (_strcmp(83332,$15)|0);
    $17 = ($16|0)!=(0);
    $18 = $entry_addr;
    if (!($17)) {
     break;
    }
    $19 = (8 + ($18<<2)|0);
    $20 = HEAP32[$19>>2]|0;
    $entry_addr = $20;
   }
   $21 = ($18|0)!=(1);
   if ($21) {
    $22 = $entry_addr;
    $23 = (($22) + 2)|0;
    $entry_data_addr = $23;
    $24 = $entry_data_addr;
    _r($24);
    STACKTOP = sp;return;
   } else {
    _append_to_dict(2);
    $25 = (_atoi(83332)|0);
    $val = $25;
    $26 = $val;
    _append_to_dict($26);
    STACKTOP = sp;return;
   }
   break;
  }
  case 12:  {
   $27 = HEAP32[(12)>>2]|0;
   $28 = (8 + ($27<<2)|0);
   $29 = HEAP32[$28>>2]|0;
   HEAP32[20194] = $29;
   $30 = HEAP32[(12)>>2]|0;
   $31 = (($30) - 1)|0;
   HEAP32[(12)>>2] = $31;
   STACKTOP = sp;return;
   break;
  }
  case 15:  {
   $32 = HEAP32[20193]|0;
   $33 = HEAP32[20195]|0;
   $34 = (($32) - ($33))|0;
   $35 = (80784 + ($34<<2)|0);
   $36 = HEAP32[$35>>2]|0;
   HEAP32[20195] = $36;
   STACKTOP = sp;return;
   break;
  }
  case 1:  {
   $37 = $next_word;
   _append_to_dict($37);
   STACKTOP = sp;return;
   break;
  }
  case 9:  {
   $38 = HEAP32[20193]|0;
   $39 = (80784 + ($38<<2)|0);
   $40 = HEAP32[$39>>2]|0;
   $41 = HEAP32[20195]|0;
   $42 = Math_imul($41, $40)|0;
   HEAP32[20195] = $42;
   $43 = HEAP32[20193]|0;
   $44 = (($43) - 1)|0;
   HEAP32[20193] = $44;
   STACKTOP = sp;return;
   break;
  }
  case 7:  {
   $45 = HEAP32[20193]|0;
   $46 = (80784 + ($45<<2)|0);
   $47 = HEAP32[$46>>2]|0;
   $48 = HEAP32[20195]|0;
   $49 = (8 + ($48<<2)|0);
   HEAP32[$49>>2] = $47;
   $50 = HEAP32[20193]|0;
   $51 = (($50) - 1)|0;
   HEAP32[20193] = $51;
   $52 = HEAP32[20193]|0;
   $53 = (80784 + ($52<<2)|0);
   $54 = HEAP32[$53>>2]|0;
   HEAP32[20195] = $54;
   $55 = HEAP32[20193]|0;
   $56 = (($55) - 1)|0;
   HEAP32[20193] = $56;
   STACKTOP = sp;return;
   break;
  }
  case 0:  {
   $57 = HEAP32[20193]|0;
   $58 = (($57) + 1)|0;
   HEAP32[20193] = $58;
   $59 = HEAP32[20195]|0;
   $60 = HEAP32[20193]|0;
   $61 = (80784 + ($60<<2)|0);
   HEAP32[$61>>2] = $59;
   $62 = HEAP32[20194]|0;
   $63 = (8 + ($62<<2)|0);
   $64 = HEAP32[$63>>2]|0;
   HEAP32[20195] = $64;
   $65 = HEAP32[20194]|0;
   $66 = (($65) + 1)|0;
   HEAP32[20194] = $66;
   STACKTOP = sp;return;
   break;
  }
  case 8:  {
   $67 = HEAP32[20193]|0;
   $68 = (80784 + ($67<<2)|0);
   $69 = HEAP32[$68>>2]|0;
   $70 = HEAP32[20195]|0;
   $71 = (($69) - ($70))|0;
   HEAP32[20195] = $71;
   $72 = HEAP32[20193]|0;
   $73 = (($72) - 1)|0;
   HEAP32[20193] = $73;
   STACKTOP = sp;return;
   break;
  }
  case 2:  {
   $74 = HEAP32[(12)>>2]|0;
   $75 = (($74) + 1)|0;
   HEAP32[(12)>>2] = $75;
   $76 = HEAP32[20194]|0;
   $77 = HEAP32[(12)>>2]|0;
   $78 = (8 + ($77<<2)|0);
   HEAP32[$78>>2] = $76;
   $79 = $next_word;
   HEAP32[20194] = $79;
   STACKTOP = sp;return;
   break;
  }
  case 11:  {
   $80 = HEAP32[20195]|0;
   $81 = (0)>($80|0);
   $82 = $81&1;
   HEAP32[20195] = $82;
   STACKTOP = sp;return;
   break;
  }
  case 4:  {
   $83 = HEAP32[2]|0;
   $84 = (($83) - 2)|0;
   HEAP32[2] = $84;
   _append_to_dict(2);
   STACKTOP = sp;return;
   break;
  }
  case 6:  {
   $85 = HEAP32[20195]|0;
   $86 = (8 + ($85<<2)|0);
   $87 = HEAP32[$86>>2]|0;
   HEAP32[20195] = $87;
   STACKTOP = sp;return;
   break;
  }
  case 10:  {
   $88 = HEAP32[20193]|0;
   $89 = (80784 + ($88<<2)|0);
   $90 = HEAP32[$89>>2]|0;
   $91 = HEAP32[20195]|0;
   $92 = (($90|0) / ($91|0))&-1;
   HEAP32[20195] = $92;
   $93 = HEAP32[20193]|0;
   $94 = (($93) - 1)|0;
   HEAP32[20193] = $94;
   STACKTOP = sp;return;
   break;
  }
  case 3:  {
   _def_word(1);
   _append_to_dict(2);
   STACKTOP = sp;return;
   break;
  }
  case 13:  {
   $95 = HEAP32[20195]|0;
   (_putchar($95)|0);
   $96 = HEAP32[20193]|0;
   $97 = (80784 + ($96<<2)|0);
   $98 = HEAP32[$97>>2]|0;
   HEAP32[20195] = $98;
   $99 = HEAP32[20193]|0;
   $100 = (($99) - 1)|0;
   HEAP32[20193] = $100;
   STACKTOP = sp;return;
   break;
  }
  case 14:  {
   $101 = HEAP32[20193]|0;
   $102 = (($101) + 1)|0;
   HEAP32[20193] = $102;
   $103 = HEAP32[20195]|0;
   $104 = HEAP32[20193]|0;
   $105 = (80784 + ($104<<2)|0);
   HEAP32[$105>>2] = $103;
   $106 = (_getchar()|0);
   HEAP32[20195] = $106;
   STACKTOP = sp;return;
   break;
  }
  default: {
   STACKTOP = sp;return;
  }
  }
 } while(0);
}
function _main() {
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 var $i = 0, $tmp1 = 0, $word_to_execute = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $0 = 0;
 _def_word(3);
 _def_word(4);
 _def_word(1);
 $1 = HEAP32[2]|0;
 $tmp1 = $1;
 _append_to_dict(5);
 _append_to_dict(2);
 $2 = HEAP32[2]|0;
 HEAP32[20194] = $2;
 $3 = $tmp1;
 _append_to_dict($3);
 $4 = HEAP32[20194]|0;
 $5 = (($4) - 1)|0;
 _append_to_dict($5);
 $i = 6;
 while(1) {
  $6 = $i;
  $7 = ($6|0)<(16);
  if (!($7)) {
   break;
  }
  _def_word(1);
  $8 = $i;
  _append_to_dict($8);
  $9 = $i;
  $10 = (($9) + 1)|0;
  $i = $10;
 }
 $11 = HEAP32[2]|0;
 HEAP32[(12)>>2] = $11;
 $12 = HEAP32[2]|0;
 $13 = (($12) + 512)|0;
 HEAP32[2] = $13;
 while(1) {
  $14 = HEAP32[20194]|0;
  $15 = (8 + ($14<<2)|0);
  $16 = HEAP32[$15>>2]|0;
  $word_to_execute = $16;
  $17 = HEAP32[20194]|0;
  $18 = (($17) + 1)|0;
  HEAP32[20194] = $18;
  $19 = $word_to_execute;
  _r($19);
 }
 return (0)|0;
}
function ___stdio_close($f) {
 $f = $f|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer = sp;
 $0 = ((($f)) + 60|0);
 $1 = HEAP32[$0>>2]|0;
 HEAP32[$vararg_buffer>>2] = $1;
 $2 = (___syscall6(6,($vararg_buffer|0))|0);
 $3 = (___syscall_ret($2)|0);
 STACKTOP = sp;return ($3|0);
}
function ___syscall_ret($r) {
 $r = $r|0;
 var $$0 = 0, $0 = 0, $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ($r>>>0)>(4294963200);
 if ($0) {
  $1 = (0 - ($r))|0;
  $2 = (___errno_location()|0);
  HEAP32[$2>>2] = $1;
  $$0 = -1;
 } else {
  $$0 = $r;
 }
 return ($$0|0);
}
function ___errno_location() {
 var $$0 = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = HEAP32[20696]|0;
 $1 = ($0|0)==(0|0);
 if ($1) {
  $$0 = 82828;
 } else {
  $2 = (_pthread_self()|0);
  $3 = ((($2)) + 64|0);
  $4 = HEAP32[$3>>2]|0;
  $$0 = $4;
 }
 return ($$0|0);
}
function ___stdio_write($f,$buf,$len) {
 $f = $f|0;
 $buf = $buf|0;
 $len = $len|0;
 var $$0 = 0, $$phi$trans$insert = 0, $$pre = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0;
 var $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0;
 var $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $cnt$0 = 0, $cnt$1 = 0, $iov$0 = 0, $iov$0$lcssa11 = 0, $iov$1 = 0, $iovcnt$0 = 0, $iovcnt$0$lcssa12 = 0;
 var $iovcnt$1 = 0, $iovs = 0, $rem$0 = 0, $vararg_buffer = 0, $vararg_buffer3 = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $vararg_ptr6 = 0, $vararg_ptr7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer3 = sp + 16|0;
 $vararg_buffer = sp;
 $iovs = sp + 32|0;
 $0 = ((($f)) + 28|0);
 $1 = HEAP32[$0>>2]|0;
 HEAP32[$iovs>>2] = $1;
 $2 = ((($iovs)) + 4|0);
 $3 = ((($f)) + 20|0);
 $4 = HEAP32[$3>>2]|0;
 $5 = (($4) - ($1))|0;
 HEAP32[$2>>2] = $5;
 $6 = ((($iovs)) + 8|0);
 HEAP32[$6>>2] = $buf;
 $7 = ((($iovs)) + 12|0);
 HEAP32[$7>>2] = $len;
 $8 = (($5) + ($len))|0;
 $9 = ((($f)) + 60|0);
 $10 = ((($f)) + 44|0);
 $iov$0 = $iovs;$iovcnt$0 = 2;$rem$0 = $8;
 while(1) {
  $11 = HEAP32[20696]|0;
  $12 = ($11|0)==(0|0);
  if ($12) {
   $16 = HEAP32[$9>>2]|0;
   HEAP32[$vararg_buffer3>>2] = $16;
   $vararg_ptr6 = ((($vararg_buffer3)) + 4|0);
   HEAP32[$vararg_ptr6>>2] = $iov$0;
   $vararg_ptr7 = ((($vararg_buffer3)) + 8|0);
   HEAP32[$vararg_ptr7>>2] = $iovcnt$0;
   $17 = (___syscall146(146,($vararg_buffer3|0))|0);
   $18 = (___syscall_ret($17)|0);
   $cnt$0 = $18;
  } else {
   _pthread_cleanup_push((5|0),($f|0));
   $13 = HEAP32[$9>>2]|0;
   HEAP32[$vararg_buffer>>2] = $13;
   $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
   HEAP32[$vararg_ptr1>>2] = $iov$0;
   $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
   HEAP32[$vararg_ptr2>>2] = $iovcnt$0;
   $14 = (___syscall146(146,($vararg_buffer|0))|0);
   $15 = (___syscall_ret($14)|0);
   _pthread_cleanup_pop(0);
   $cnt$0 = $15;
  }
  $19 = ($rem$0|0)==($cnt$0|0);
  if ($19) {
   label = 6;
   break;
  }
  $26 = ($cnt$0|0)<(0);
  if ($26) {
   $iov$0$lcssa11 = $iov$0;$iovcnt$0$lcssa12 = $iovcnt$0;
   label = 8;
   break;
  }
  $34 = (($rem$0) - ($cnt$0))|0;
  $35 = ((($iov$0)) + 4|0);
  $36 = HEAP32[$35>>2]|0;
  $37 = ($cnt$0>>>0)>($36>>>0);
  if ($37) {
   $38 = HEAP32[$10>>2]|0;
   HEAP32[$0>>2] = $38;
   HEAP32[$3>>2] = $38;
   $39 = (($cnt$0) - ($36))|0;
   $40 = ((($iov$0)) + 8|0);
   $41 = (($iovcnt$0) + -1)|0;
   $$phi$trans$insert = ((($iov$0)) + 12|0);
   $$pre = HEAP32[$$phi$trans$insert>>2]|0;
   $49 = $$pre;$cnt$1 = $39;$iov$1 = $40;$iovcnt$1 = $41;
  } else {
   $42 = ($iovcnt$0|0)==(2);
   if ($42) {
    $43 = HEAP32[$0>>2]|0;
    $44 = (($43) + ($cnt$0)|0);
    HEAP32[$0>>2] = $44;
    $49 = $36;$cnt$1 = $cnt$0;$iov$1 = $iov$0;$iovcnt$1 = 2;
   } else {
    $49 = $36;$cnt$1 = $cnt$0;$iov$1 = $iov$0;$iovcnt$1 = $iovcnt$0;
   }
  }
  $45 = HEAP32[$iov$1>>2]|0;
  $46 = (($45) + ($cnt$1)|0);
  HEAP32[$iov$1>>2] = $46;
  $47 = ((($iov$1)) + 4|0);
  $48 = (($49) - ($cnt$1))|0;
  HEAP32[$47>>2] = $48;
  $iov$0 = $iov$1;$iovcnt$0 = $iovcnt$1;$rem$0 = $34;
 }
 if ((label|0) == 6) {
  $20 = HEAP32[$10>>2]|0;
  $21 = ((($f)) + 48|0);
  $22 = HEAP32[$21>>2]|0;
  $23 = (($20) + ($22)|0);
  $24 = ((($f)) + 16|0);
  HEAP32[$24>>2] = $23;
  $25 = $20;
  HEAP32[$0>>2] = $25;
  HEAP32[$3>>2] = $25;
  $$0 = $len;
 }
 else if ((label|0) == 8) {
  $27 = ((($f)) + 16|0);
  HEAP32[$27>>2] = 0;
  HEAP32[$0>>2] = 0;
  HEAP32[$3>>2] = 0;
  $28 = HEAP32[$f>>2]|0;
  $29 = $28 | 32;
  HEAP32[$f>>2] = $29;
  $30 = ($iovcnt$0$lcssa12|0)==(2);
  if ($30) {
   $$0 = 0;
  } else {
   $31 = ((($iov$0$lcssa11)) + 4|0);
   $32 = HEAP32[$31>>2]|0;
   $33 = (($len) - ($32))|0;
   $$0 = $33;
  }
 }
 STACKTOP = sp;return ($$0|0);
}
function _cleanup_417($p) {
 $p = $p|0;
 var $0 = 0, $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($p)) + 68|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = ($1|0)==(0);
 if ($2) {
  ___unlockfile($p);
 }
 return;
}
function ___unlockfile($f) {
 $f = $f|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return;
}
function ___stdio_seek($f,$off,$whence) {
 $f = $f|0;
 $off = $off|0;
 $whence = $whence|0;
 var $$pre = 0, $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $ret = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $vararg_ptr3 = 0, $vararg_ptr4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer = sp;
 $ret = sp + 20|0;
 $0 = ((($f)) + 60|0);
 $1 = HEAP32[$0>>2]|0;
 HEAP32[$vararg_buffer>>2] = $1;
 $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
 HEAP32[$vararg_ptr1>>2] = 0;
 $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
 HEAP32[$vararg_ptr2>>2] = $off;
 $vararg_ptr3 = ((($vararg_buffer)) + 12|0);
 HEAP32[$vararg_ptr3>>2] = $ret;
 $vararg_ptr4 = ((($vararg_buffer)) + 16|0);
 HEAP32[$vararg_ptr4>>2] = $whence;
 $2 = (___syscall140(140,($vararg_buffer|0))|0);
 $3 = (___syscall_ret($2)|0);
 $4 = ($3|0)<(0);
 if ($4) {
  HEAP32[$ret>>2] = -1;
  $5 = -1;
 } else {
  $$pre = HEAP32[$ret>>2]|0;
  $5 = $$pre;
 }
 STACKTOP = sp;return ($5|0);
}
function ___stdout_write($f,$buf,$len) {
 $f = $f|0;
 $buf = $buf|0;
 $len = $len|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $tio = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 80|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer = sp;
 $tio = sp + 12|0;
 $0 = ((($f)) + 36|0);
 HEAP32[$0>>2] = 6;
 $1 = HEAP32[$f>>2]|0;
 $2 = $1 & 64;
 $3 = ($2|0)==(0);
 if ($3) {
  $4 = ((($f)) + 60|0);
  $5 = HEAP32[$4>>2]|0;
  HEAP32[$vararg_buffer>>2] = $5;
  $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
  HEAP32[$vararg_ptr1>>2] = 21505;
  $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
  HEAP32[$vararg_ptr2>>2] = $tio;
  $6 = (___syscall54(54,($vararg_buffer|0))|0);
  $7 = ($6|0)==(0);
  if (!($7)) {
   $8 = ((($f)) + 75|0);
   HEAP8[$8>>0] = -1;
  }
 }
 $9 = (___stdio_write($f,$buf,$len)|0);
 STACKTOP = sp;return ($9|0);
}
function ___stdio_read($f,$buf,$len) {
 $f = $f|0;
 $buf = $buf|0;
 $len = $len|0;
 var $$0 = 0, $$cast = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
 var $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
 var $8 = 0, $9 = 0, $cnt$0 = 0, $iov = 0, $vararg_buffer = 0, $vararg_buffer3 = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $vararg_ptr6 = 0, $vararg_ptr7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $vararg_buffer3 = sp + 16|0;
 $vararg_buffer = sp;
 $iov = sp + 32|0;
 HEAP32[$iov>>2] = $buf;
 $0 = ((($iov)) + 4|0);
 $1 = ((($f)) + 48|0);
 $2 = HEAP32[$1>>2]|0;
 $3 = ($2|0)!=(0);
 $4 = $3&1;
 $5 = (($len) - ($4))|0;
 HEAP32[$0>>2] = $5;
 $6 = ((($iov)) + 8|0);
 $7 = ((($f)) + 44|0);
 $8 = HEAP32[$7>>2]|0;
 HEAP32[$6>>2] = $8;
 $9 = ((($iov)) + 12|0);
 HEAP32[$9>>2] = $2;
 $10 = HEAP32[20696]|0;
 $11 = ($10|0)==(0|0);
 if ($11) {
  $16 = ((($f)) + 60|0);
  $17 = HEAP32[$16>>2]|0;
  HEAP32[$vararg_buffer3>>2] = $17;
  $vararg_ptr6 = ((($vararg_buffer3)) + 4|0);
  HEAP32[$vararg_ptr6>>2] = $iov;
  $vararg_ptr7 = ((($vararg_buffer3)) + 8|0);
  HEAP32[$vararg_ptr7>>2] = 2;
  $18 = (___syscall145(145,($vararg_buffer3|0))|0);
  $19 = (___syscall_ret($18)|0);
  $cnt$0 = $19;
 } else {
  _pthread_cleanup_push((7|0),($f|0));
  $12 = ((($f)) + 60|0);
  $13 = HEAP32[$12>>2]|0;
  HEAP32[$vararg_buffer>>2] = $13;
  $vararg_ptr1 = ((($vararg_buffer)) + 4|0);
  HEAP32[$vararg_ptr1>>2] = $iov;
  $vararg_ptr2 = ((($vararg_buffer)) + 8|0);
  HEAP32[$vararg_ptr2>>2] = 2;
  $14 = (___syscall145(145,($vararg_buffer|0))|0);
  $15 = (___syscall_ret($14)|0);
  _pthread_cleanup_pop(0);
  $cnt$0 = $15;
 }
 $20 = ($cnt$0|0)<(1);
 if ($20) {
  $21 = $cnt$0 & 48;
  $22 = $21 ^ 16;
  $23 = HEAP32[$f>>2]|0;
  $24 = $23 | $22;
  HEAP32[$f>>2] = $24;
  $25 = ((($f)) + 8|0);
  HEAP32[$25>>2] = 0;
  $26 = ((($f)) + 4|0);
  HEAP32[$26>>2] = 0;
  $$0 = $cnt$0;
 } else {
  $27 = HEAP32[$0>>2]|0;
  $28 = ($cnt$0>>>0)>($27>>>0);
  if ($28) {
   $29 = (($cnt$0) - ($27))|0;
   $30 = HEAP32[$7>>2]|0;
   $31 = ((($f)) + 4|0);
   HEAP32[$31>>2] = $30;
   $$cast = $30;
   $32 = (($$cast) + ($29)|0);
   $33 = ((($f)) + 8|0);
   HEAP32[$33>>2] = $32;
   $34 = HEAP32[$1>>2]|0;
   $35 = ($34|0)==(0);
   if ($35) {
    $$0 = $len;
   } else {
    $36 = ((($$cast)) + 1|0);
    HEAP32[$31>>2] = $36;
    $37 = HEAP8[$$cast>>0]|0;
    $38 = (($len) + -1)|0;
    $39 = (($buf) + ($38)|0);
    HEAP8[$39>>0] = $37;
    $$0 = $len;
   }
  } else {
   $$0 = $cnt$0;
  }
 }
 STACKTOP = sp;return ($$0|0);
}
function _cleanup($p) {
 $p = $p|0;
 var $0 = 0, $1 = 0, $2 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($p)) + 68|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = ($1|0)==(0);
 if ($2) {
  ___unlockfile($p);
 }
 return;
}
function _scalbn($x,$n) {
 $x = +$x;
 $n = $n|0;
 var $$ = 0, $$0 = 0, $$1 = 0, $0 = 0, $1 = 0.0, $10 = 0, $11 = 0.0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0.0, $18 = 0.0, $2 = 0, $3 = 0, $4 = 0.0, $5 = 0, $6 = 0, $7 = 0;
 var $8 = 0.0, $9 = 0, $y$0 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ($n|0)>(1023);
 if ($0) {
  $1 = $x * 8.9884656743115795E+307;
  $2 = (($n) + -1023)|0;
  $3 = ($2|0)>(1023);
  if ($3) {
   $4 = $1 * 8.9884656743115795E+307;
   $5 = (($n) + -2046)|0;
   $6 = ($5|0)>(1023);
   $$ = $6 ? 1023 : $5;
   $$0 = $$;$y$0 = $4;
  } else {
   $$0 = $2;$y$0 = $1;
  }
 } else {
  $7 = ($n|0)<(-1022);
  if ($7) {
   $8 = $x * 2.2250738585072014E-308;
   $9 = (($n) + 1022)|0;
   $10 = ($9|0)<(-1022);
   if ($10) {
    $11 = $8 * 2.2250738585072014E-308;
    $12 = (($n) + 2044)|0;
    $13 = ($12|0)<(-1022);
    $$1 = $13 ? -1022 : $12;
    $$0 = $$1;$y$0 = $11;
   } else {
    $$0 = $9;$y$0 = $8;
   }
  } else {
   $$0 = $n;$y$0 = $x;
  }
 }
 $14 = (($$0) + 1023)|0;
 $15 = (_bitshift64Shl(($14|0),0,52)|0);
 $16 = tempRet0;
 HEAP32[tempDoublePtr>>2] = $15;HEAP32[tempDoublePtr+4>>2] = $16;$17 = +HEAPF64[tempDoublePtr>>3];
 $18 = $y$0 * $17;
 return (+$18);
}
function _scalbnl($x,$n) {
 $x = +$x;
 $n = $n|0;
 var $0 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (+_scalbn($x,$n));
 return (+$0);
}
function _fmod($x,$y) {
 $x = +$x;
 $y = +$y;
 var $$0 = 0.0, $$lcssa7 = 0, $$x = 0.0, $0 = 0, $1 = 0, $10 = 0, $100 = 0.0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0;
 var $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0.0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0;
 var $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0;
 var $15 = 0, $150 = 0, $151 = 0.0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0.0, $25 = 0.0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0.0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0;
 var $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0;
 var $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0;
 var $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0;
 var $99 = 0, $ex$0$lcssa = 0, $ex$026 = 0, $ex$1 = 0, $ex$2$lcssa = 0, $ex$212 = 0, $ex$3$lcssa = 0, $ex$39 = 0, $ey$0$lcssa = 0, $ey$020 = 0, $ey$1$ph = 0, $fabs = 0.0, $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 HEAPF64[tempDoublePtr>>3] = $x;$0 = HEAP32[tempDoublePtr>>2]|0;
 $1 = HEAP32[tempDoublePtr+4>>2]|0;
 HEAPF64[tempDoublePtr>>3] = $y;$2 = HEAP32[tempDoublePtr>>2]|0;
 $3 = HEAP32[tempDoublePtr+4>>2]|0;
 $4 = (_bitshift64Lshr(($0|0),($1|0),52)|0);
 $5 = tempRet0;
 $6 = $4 & 2047;
 $7 = (_bitshift64Lshr(($2|0),($3|0),52)|0);
 $8 = tempRet0;
 $9 = $7 & 2047;
 $10 = $1 & -2147483648;
 $11 = (_bitshift64Shl(($2|0),($3|0),1)|0);
 $12 = tempRet0;
 $13 = ($11|0)==(0);
 $14 = ($12|0)==(0);
 $15 = $13 & $14;
 L1: do {
  if ($15) {
   label = 3;
  } else {
   $fabs = (+Math_abs((+$y)));
   HEAPF64[tempDoublePtr>>3] = $fabs;$16 = HEAP32[tempDoublePtr>>2]|0;
   $17 = HEAP32[tempDoublePtr+4>>2]|0;
   $18 = ($17>>>0)>(2146435072);
   $19 = ($16>>>0)>(0);
   $20 = ($17|0)==(2146435072);
   $21 = $20 & $19;
   $22 = $18 | $21;
   $23 = ($6|0)==(2047);
   $or$cond = $22 | $23;
   if ($or$cond) {
    label = 3;
   } else {
    $26 = (_bitshift64Shl(($0|0),($1|0),1)|0);
    $27 = tempRet0;
    $28 = ($27>>>0)>($12>>>0);
    $29 = ($26>>>0)>($11>>>0);
    $30 = ($27|0)==($12|0);
    $31 = $30 & $29;
    $32 = $28 | $31;
    if (!($32)) {
     $33 = ($26|0)==($11|0);
     $34 = ($27|0)==($12|0);
     $35 = $33 & $34;
     $36 = $x * 0.0;
     $$x = $35 ? $36 : $x;
     return (+$$x);
    }
    $37 = ($6|0)==(0);
    if ($37) {
     $38 = (_bitshift64Shl(($0|0),($1|0),12)|0);
     $39 = tempRet0;
     $40 = ($39|0)>(-1);
     $41 = ($38>>>0)>(4294967295);
     $42 = ($39|0)==(-1);
     $43 = $42 & $41;
     $44 = $40 | $43;
     if ($44) {
      $46 = $38;$47 = $39;$ex$026 = 0;
      while(1) {
       $45 = (($ex$026) + -1)|0;
       $48 = (_bitshift64Shl(($46|0),($47|0),1)|0);
       $49 = tempRet0;
       $50 = ($49|0)>(-1);
       $51 = ($48>>>0)>(4294967295);
       $52 = ($49|0)==(-1);
       $53 = $52 & $51;
       $54 = $50 | $53;
       if ($54) {
        $46 = $48;$47 = $49;$ex$026 = $45;
       } else {
        $ex$0$lcssa = $45;
        break;
       }
      }
     } else {
      $ex$0$lcssa = 0;
     }
     $55 = (1 - ($ex$0$lcssa))|0;
     $56 = (_bitshift64Shl(($0|0),($1|0),($55|0))|0);
     $57 = tempRet0;
     $84 = $56;$85 = $57;$ex$1 = $ex$0$lcssa;
    } else {
     $58 = $1 & 1048575;
     $59 = $58 | 1048576;
     $84 = $0;$85 = $59;$ex$1 = $6;
    }
    $60 = ($9|0)==(0);
    if ($60) {
     $61 = (_bitshift64Shl(($2|0),($3|0),12)|0);
     $62 = tempRet0;
     $63 = ($62|0)>(-1);
     $64 = ($61>>>0)>(4294967295);
     $65 = ($62|0)==(-1);
     $66 = $65 & $64;
     $67 = $63 | $66;
     if ($67) {
      $69 = $61;$70 = $62;$ey$020 = 0;
      while(1) {
       $68 = (($ey$020) + -1)|0;
       $71 = (_bitshift64Shl(($69|0),($70|0),1)|0);
       $72 = tempRet0;
       $73 = ($72|0)>(-1);
       $74 = ($71>>>0)>(4294967295);
       $75 = ($72|0)==(-1);
       $76 = $75 & $74;
       $77 = $73 | $76;
       if ($77) {
        $69 = $71;$70 = $72;$ey$020 = $68;
       } else {
        $ey$0$lcssa = $68;
        break;
       }
      }
     } else {
      $ey$0$lcssa = 0;
     }
     $78 = (1 - ($ey$0$lcssa))|0;
     $79 = (_bitshift64Shl(($2|0),($3|0),($78|0))|0);
     $80 = tempRet0;
     $86 = $79;$87 = $80;$ey$1$ph = $ey$0$lcssa;
    } else {
     $81 = $3 & 1048575;
     $82 = $81 | 1048576;
     $86 = $2;$87 = $82;$ey$1$ph = $9;
    }
    $83 = ($ex$1|0)>($ey$1$ph|0);
    $88 = (_i64Subtract(($84|0),($85|0),($86|0),($87|0))|0);
    $89 = tempRet0;
    $90 = ($89|0)>(-1);
    $91 = ($88>>>0)>(4294967295);
    $92 = ($89|0)==(-1);
    $93 = $92 & $91;
    $94 = $90 | $93;
    L23: do {
     if ($83) {
      $153 = $94;$154 = $88;$155 = $89;$95 = $84;$97 = $85;$ex$212 = $ex$1;
      while(1) {
       if ($153) {
        $96 = ($95|0)==($86|0);
        $98 = ($97|0)==($87|0);
        $99 = $96 & $98;
        if ($99) {
         break;
        } else {
         $101 = $154;$102 = $155;
        }
       } else {
        $101 = $95;$102 = $97;
       }
       $103 = (_bitshift64Shl(($101|0),($102|0),1)|0);
       $104 = tempRet0;
       $105 = (($ex$212) + -1)|0;
       $106 = ($105|0)>($ey$1$ph|0);
       $107 = (_i64Subtract(($103|0),($104|0),($86|0),($87|0))|0);
       $108 = tempRet0;
       $109 = ($108|0)>(-1);
       $110 = ($107>>>0)>(4294967295);
       $111 = ($108|0)==(-1);
       $112 = $111 & $110;
       $113 = $109 | $112;
       if ($106) {
        $153 = $113;$154 = $107;$155 = $108;$95 = $103;$97 = $104;$ex$212 = $105;
       } else {
        $$lcssa7 = $113;$114 = $103;$116 = $104;$156 = $107;$157 = $108;$ex$2$lcssa = $105;
        break L23;
       }
      }
      $100 = $x * 0.0;
      $$0 = $100;
      break L1;
     } else {
      $$lcssa7 = $94;$114 = $84;$116 = $85;$156 = $88;$157 = $89;$ex$2$lcssa = $ex$1;
     }
    } while(0);
    if ($$lcssa7) {
     $115 = ($114|0)==($86|0);
     $117 = ($116|0)==($87|0);
     $118 = $115 & $117;
     if ($118) {
      $126 = $x * 0.0;
      $$0 = $126;
      break;
     } else {
      $119 = $157;$121 = $156;
     }
    } else {
     $119 = $116;$121 = $114;
    }
    $120 = ($119>>>0)<(1048576);
    $122 = ($121>>>0)<(0);
    $123 = ($119|0)==(1048576);
    $124 = $123 & $122;
    $125 = $120 | $124;
    if ($125) {
     $127 = $121;$128 = $119;$ex$39 = $ex$2$lcssa;
     while(1) {
      $129 = (_bitshift64Shl(($127|0),($128|0),1)|0);
      $130 = tempRet0;
      $131 = (($ex$39) + -1)|0;
      $132 = ($130>>>0)<(1048576);
      $133 = ($129>>>0)<(0);
      $134 = ($130|0)==(1048576);
      $135 = $134 & $133;
      $136 = $132 | $135;
      if ($136) {
       $127 = $129;$128 = $130;$ex$39 = $131;
      } else {
       $138 = $129;$139 = $130;$ex$3$lcssa = $131;
       break;
      }
     }
    } else {
     $138 = $121;$139 = $119;$ex$3$lcssa = $ex$2$lcssa;
    }
    $137 = ($ex$3$lcssa|0)>(0);
    if ($137) {
     $140 = (_i64Add(($138|0),($139|0),0,-1048576)|0);
     $141 = tempRet0;
     $142 = (_bitshift64Shl(($ex$3$lcssa|0),0,52)|0);
     $143 = tempRet0;
     $144 = $140 | $142;
     $145 = $141 | $143;
     $150 = $145;$152 = $144;
    } else {
     $146 = (1 - ($ex$3$lcssa))|0;
     $147 = (_bitshift64Lshr(($138|0),($139|0),($146|0))|0);
     $148 = tempRet0;
     $150 = $148;$152 = $147;
    }
    $149 = $150 | $10;
    HEAP32[tempDoublePtr>>2] = $152;HEAP32[tempDoublePtr+4>>2] = $149;$151 = +HEAPF64[tempDoublePtr>>3];
    $$0 = $151;
   }
  }
 } while(0);
 if ((label|0) == 3) {
  $24 = $x * $y;
  $25 = $24 / $24;
  $$0 = $25;
 }
 return (+$$0);
}
function _copysign($x,$y) {
 $x = +$x;
 $y = +$y;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0.0, $fabs = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 HEAPF64[tempDoublePtr>>3] = $y;$0 = HEAP32[tempDoublePtr>>2]|0;
 $1 = HEAP32[tempDoublePtr+4>>2]|0;
 $fabs = (+Math_abs((+$x)));
 HEAPF64[tempDoublePtr>>3] = $fabs;$2 = HEAP32[tempDoublePtr>>2]|0;
 $3 = HEAP32[tempDoublePtr+4>>2]|0;
 $4 = $1 & -2147483648;
 $5 = $4 | $3;
 HEAP32[tempDoublePtr>>2] = $2;HEAP32[tempDoublePtr+4>>2] = $5;$6 = +HEAPF64[tempDoublePtr>>3];
 return (+$6);
}
function _copysignl($x,$y) {
 $x = +$x;
 $y = +$y;
 var $0 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (+_copysign($x,$y));
 return (+$0);
}
function _fmodl($x,$y) {
 $x = +$x;
 $y = +$y;
 var $0 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (+_fmod($x,$y));
 return (+$0);
}
function _strlen($s) {
 $s = $s|0;
 var $$0 = 0, $$01$lcssa = 0, $$014 = 0, $$1$lcssa = 0, $$lcssa20 = 0, $$pn = 0, $$pn15 = 0, $$pre = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0;
 var $2 = 0, $20 = 0, $21 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $w$0 = 0, $w$0$lcssa = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = $s;
 $1 = $0 & 3;
 $2 = ($1|0)==(0);
 L1: do {
  if ($2) {
   $$01$lcssa = $s;
   label = 4;
  } else {
   $$014 = $s;$21 = $0;
   while(1) {
    $3 = HEAP8[$$014>>0]|0;
    $4 = ($3<<24>>24)==(0);
    if ($4) {
     $$pn = $21;
     break L1;
    }
    $5 = ((($$014)) + 1|0);
    $6 = $5;
    $7 = $6 & 3;
    $8 = ($7|0)==(0);
    if ($8) {
     $$01$lcssa = $5;
     label = 4;
     break;
    } else {
     $$014 = $5;$21 = $6;
    }
   }
  }
 } while(0);
 if ((label|0) == 4) {
  $w$0 = $$01$lcssa;
  while(1) {
   $9 = HEAP32[$w$0>>2]|0;
   $10 = (($9) + -16843009)|0;
   $11 = $9 & -2139062144;
   $12 = $11 ^ -2139062144;
   $13 = $12 & $10;
   $14 = ($13|0)==(0);
   $15 = ((($w$0)) + 4|0);
   if ($14) {
    $w$0 = $15;
   } else {
    $$lcssa20 = $9;$w$0$lcssa = $w$0;
    break;
   }
  }
  $16 = $$lcssa20&255;
  $17 = ($16<<24>>24)==(0);
  if ($17) {
   $$1$lcssa = $w$0$lcssa;
  } else {
   $$pn15 = $w$0$lcssa;
   while(1) {
    $18 = ((($$pn15)) + 1|0);
    $$pre = HEAP8[$18>>0]|0;
    $19 = ($$pre<<24>>24)==(0);
    if ($19) {
     $$1$lcssa = $18;
     break;
    } else {
     $$pn15 = $18;
    }
   }
  }
  $20 = $$1$lcssa;
  $$pn = $20;
 }
 $$0 = (($$pn) - ($0))|0;
 return ($$0|0);
}
function ___lockfile($f) {
 $f = $f|0;
 var label = 0, sp = 0;
 sp = STACKTOP;
 return 0;
}
function _fflush($f) {
 $f = $f|0;
 var $$0 = 0, $$01 = 0, $$012 = 0, $$014 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0;
 var $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $phitmp = 0, $r$0$lcssa = 0, $r$03 = 0, $r$1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ($f|0)==(0|0);
 do {
  if ($0) {
   $7 = HEAP32[20033]|0;
   $8 = ($7|0)==(0|0);
   if ($8) {
    $27 = 0;
   } else {
    $9 = HEAP32[20033]|0;
    $10 = (_fflush($9)|0);
    $27 = $10;
   }
   ___lock(((82812)|0));
   $$012 = HEAP32[(82808)>>2]|0;
   $11 = ($$012|0)==(0|0);
   if ($11) {
    $r$0$lcssa = $27;
   } else {
    $$014 = $$012;$r$03 = $27;
    while(1) {
     $12 = ((($$014)) + 76|0);
     $13 = HEAP32[$12>>2]|0;
     $14 = ($13|0)>(-1);
     if ($14) {
      $15 = (___lockfile($$014)|0);
      $23 = $15;
     } else {
      $23 = 0;
     }
     $16 = ((($$014)) + 20|0);
     $17 = HEAP32[$16>>2]|0;
     $18 = ((($$014)) + 28|0);
     $19 = HEAP32[$18>>2]|0;
     $20 = ($17>>>0)>($19>>>0);
     if ($20) {
      $21 = (___fflush_unlocked($$014)|0);
      $22 = $21 | $r$03;
      $r$1 = $22;
     } else {
      $r$1 = $r$03;
     }
     $24 = ($23|0)==(0);
     if (!($24)) {
      ___unlockfile($$014);
     }
     $25 = ((($$014)) + 56|0);
     $$01 = HEAP32[$25>>2]|0;
     $26 = ($$01|0)==(0|0);
     if ($26) {
      $r$0$lcssa = $r$1;
      break;
     } else {
      $$014 = $$01;$r$03 = $r$1;
     }
    }
   }
   ___unlock(((82812)|0));
   $$0 = $r$0$lcssa;
  } else {
   $1 = ((($f)) + 76|0);
   $2 = HEAP32[$1>>2]|0;
   $3 = ($2|0)>(-1);
   if (!($3)) {
    $4 = (___fflush_unlocked($f)|0);
    $$0 = $4;
    break;
   }
   $5 = (___lockfile($f)|0);
   $phitmp = ($5|0)==(0);
   $6 = (___fflush_unlocked($f)|0);
   if ($phitmp) {
    $$0 = $6;
   } else {
    ___unlockfile($f);
    $$0 = $6;
   }
  }
 } while(0);
 return ($$0|0);
}
function ___fflush_unlocked($f) {
 $f = $f|0;
 var $$0 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
 var $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($f)) + 20|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = ((($f)) + 28|0);
 $3 = HEAP32[$2>>2]|0;
 $4 = ($1>>>0)>($3>>>0);
 if ($4) {
  $5 = ((($f)) + 36|0);
  $6 = HEAP32[$5>>2]|0;
  (FUNCTION_TABLE_iiii[$6 & 7]($f,0,0)|0);
  $7 = HEAP32[$0>>2]|0;
  $8 = ($7|0)==(0|0);
  if ($8) {
   $$0 = -1;
  } else {
   label = 3;
  }
 } else {
  label = 3;
 }
 if ((label|0) == 3) {
  $9 = ((($f)) + 4|0);
  $10 = HEAP32[$9>>2]|0;
  $11 = ((($f)) + 8|0);
  $12 = HEAP32[$11>>2]|0;
  $13 = ($10>>>0)<($12>>>0);
  if ($13) {
   $14 = ((($f)) + 40|0);
   $15 = HEAP32[$14>>2]|0;
   $16 = $10;
   $17 = $12;
   $18 = (($16) - ($17))|0;
   (FUNCTION_TABLE_iiii[$15 & 7]($f,$18,1)|0);
  }
  $19 = ((($f)) + 16|0);
  HEAP32[$19>>2] = 0;
  HEAP32[$2>>2] = 0;
  HEAP32[$0>>2] = 0;
  HEAP32[$11>>2] = 0;
  HEAP32[$9>>2] = 0;
  $$0 = 0;
 }
 return ($$0|0);
}
function ___uflow($f) {
 $f = $f|0;
 var $$0 = 0, $0 = 0, $1 = 0, $10 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $c = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $c = sp;
 $0 = ((($f)) + 8|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = ($1|0)==(0|0);
 if ($2) {
  $3 = (___toread($f)|0);
  $4 = ($3|0)==(0);
  if ($4) {
   label = 3;
  } else {
   $$0 = -1;
  }
 } else {
  label = 3;
 }
 if ((label|0) == 3) {
  $5 = ((($f)) + 32|0);
  $6 = HEAP32[$5>>2]|0;
  $7 = (FUNCTION_TABLE_iiii[$6 & 7]($f,$c,1)|0);
  $8 = ($7|0)==(1);
  if ($8) {
   $9 = HEAP8[$c>>0]|0;
   $10 = $9&255;
   $$0 = $10;
  } else {
   $$0 = -1;
  }
 }
 STACKTOP = sp;return ($$0|0);
}
function ___toread($f) {
 $f = $f|0;
 var $$0 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $3 = 0, $4 = 0;
 var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($f)) + 74|0);
 $1 = HEAP8[$0>>0]|0;
 $2 = $1 << 24 >> 24;
 $3 = (($2) + 255)|0;
 $4 = $3 | $2;
 $5 = $4&255;
 HEAP8[$0>>0] = $5;
 $6 = ((($f)) + 20|0);
 $7 = HEAP32[$6>>2]|0;
 $8 = ((($f)) + 44|0);
 $9 = HEAP32[$8>>2]|0;
 $10 = ($7>>>0)>($9>>>0);
 if ($10) {
  $11 = ((($f)) + 36|0);
  $12 = HEAP32[$11>>2]|0;
  (FUNCTION_TABLE_iiii[$12 & 7]($f,0,0)|0);
 }
 $13 = ((($f)) + 16|0);
 HEAP32[$13>>2] = 0;
 $14 = ((($f)) + 28|0);
 HEAP32[$14>>2] = 0;
 HEAP32[$6>>2] = 0;
 $15 = HEAP32[$f>>2]|0;
 $16 = $15 & 20;
 $17 = ($16|0)==(0);
 if ($17) {
  $21 = HEAP32[$8>>2]|0;
  $22 = ((($f)) + 8|0);
  HEAP32[$22>>2] = $21;
  $23 = ((($f)) + 4|0);
  HEAP32[$23>>2] = $21;
  $$0 = 0;
 } else {
  $18 = $15 & 4;
  $19 = ($18|0)==(0);
  if ($19) {
   $$0 = -1;
  } else {
   $20 = $15 | 32;
   HEAP32[$f>>2] = $20;
   $$0 = -1;
  }
 }
 return ($$0|0);
}
function _vfscanf($f,$fmt,$ap) {
 $f = $f|0;
 $fmt = $fmt|0;
 $ap = $ap|0;
 var $$ = 0, $$11 = 0, $$12 = 0, $$13 = 0, $$14 = 0, $$lcssa = 0, $$lcssa386 = 0, $$lcssa40 = 0, $$not = 0, $$old4 = 0, $$pre = 0, $$pre$phi184Z2D = 0, $$pre173 = 0, $$pre175 = 0, $$pre177 = 0, $$pre179 = 0, $$pre180 = 0, $$pre181 = 0, $$pre182 = 0, $$pre183 = 0;
 var $$size$0 = 0, $$width$0 = 0, $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0;
 var $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0;
 var $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0;
 var $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0;
 var $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0;
 var $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0;
 var $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0;
 var $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0;
 var $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0;
 var $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0;
 var $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0;
 var $295 = 0, $296 = 0, $297 = 0, $298 = 0, $299 = 0, $3 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0.0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0;
 var $312 = 0, $313 = 0, $314 = 0.0, $315 = 0, $316 = 0, $317 = 0, $318 = 0, $319 = 0, $32 = 0, $320 = 0, $321 = 0, $322 = 0, $323 = 0, $324 = 0, $325 = 0, $326 = 0, $327 = 0, $33 = 0, $34 = 0, $35 = 0;
 var $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0;
 var $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0;
 var $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0;
 var $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $alloc$0 = 0, $alloc$0402 = 0, $alloc$1 = 0, $alloc$2 = 0, $ap2$i = 0, $arglist_current = 0, $arglist_current2 = 0, $arglist_next = 0, $arglist_next3 = 0, $base$0 = 0;
 var $c$0102 = 0, $dest$0 = 0, $expanded = 0, $expanded10 = 0, $expanded11 = 0, $expanded13 = 0, $expanded14 = 0, $expanded15 = 0, $expanded4 = 0, $expanded6 = 0, $expanded7 = 0, $expanded8 = 0, $factor = 0, $factor18 = 0, $i$0$i = 0, $i$0$ph = 0, $i$0$ph$phi = 0, $i$0$ph22 = 0, $i$0$ph22$lcssa = 0, $i$1 = 0;
 var $i$2 = 0, $i$2$ph = 0, $i$2$ph$phi = 0, $i$3 = 0, $i$4 = 0, $invert$0 = 0, $isdigit = 0, $isdigit8 = 0, $isdigit897 = 0, $isdigittmp = 0, $isdigittmp7 = 0, $isdigittmp796 = 0, $k$0$ph = 0, $k$1$ph = 0, $matches$0$ = 0, $matches$0107 = 0, $matches$0107$lcssa = 0, $matches$0107371 = 0, $matches$1 = 0, $matches$2 = 0;
 var $matches$3 = 0, $not$ = 0, $or$cond = 0, $or$cond10 = 0, $or$cond3 = 0, $or$cond5 = 0, $p$0110 = 0, $p$1 = 0, $p$1$lcssa = 0, $p$10 = 0, $p$11 = 0, $p$2 = 0, $p$3$lcssa = 0, $p$398 = 0, $p$4 = 0, $p$5 = 0, $p$6 = 0, $p$7 = 0, $p$7$ph = 0, $p$8 = 0;
 var $p$9 = 0, $pos$0111 = 0, $pos$1 = 0, $pos$2 = 0, $s$0105 = 0, $s$0105$lcssa = 0, $s$1 = 0, $s$2$ph = 0, $s$4 = 0, $s$5 = 0, $s$6 = 0, $s$7 = 0, $s$8 = 0, $s$9 = 0, $scanset = 0, $size$0 = 0, $st = 0, $vacopy_currentptr = 0, $wc = 0, $wcs$0106 = 0;
 var $wcs$0106$lcssa = 0, $wcs$1 = 0, $wcs$10 = 0, $wcs$2 = 0, $wcs$3$ph = 0, $wcs$3$ph$lcssa = 0, $wcs$5 = 0, $wcs$6 = 0, $wcs$7 = 0, $wcs$8 = 0, $wcs$9 = 0, $width$0$lcssa = 0, $width$099 = 0, $width$1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 304|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $ap2$i = sp + 16|0;
 $st = sp + 8|0;
 $scanset = sp + 33|0;
 $wc = sp;
 $0 = sp + 32|0;
 $1 = ((($f)) + 76|0);
 $2 = HEAP32[$1>>2]|0;
 $3 = ($2|0)>(-1);
 if ($3) {
  $4 = (___lockfile($f)|0);
  $326 = $4;
 } else {
  $326 = 0;
 }
 $5 = HEAP8[$fmt>>0]|0;
 $6 = ($5<<24>>24)==(0);
 L4: do {
  if ($6) {
   $matches$3 = 0;
  } else {
   $7 = ((($f)) + 4|0);
   $8 = ((($f)) + 100|0);
   $9 = ((($f)) + 108|0);
   $10 = ((($f)) + 8|0);
   $11 = ((($scanset)) + 10|0);
   $12 = ((($scanset)) + 33|0);
   $13 = ((($st)) + 4|0);
   $14 = ((($scanset)) + 46|0);
   $15 = ((($scanset)) + 94|0);
   $17 = $5;$matches$0107 = 0;$p$0110 = $fmt;$pos$0111 = 0;$s$0105 = 0;$wcs$0106 = 0;
   L6: while(1) {
    $16 = $17&255;
    $18 = (_isspace($16)|0);
    $19 = ($18|0)==(0);
    L8: do {
     if ($19) {
      $46 = HEAP8[$p$0110>>0]|0;
      $47 = ($46<<24>>24)==(37);
      L10: do {
       if ($47) {
        $48 = ((($p$0110)) + 1|0);
        $49 = HEAP8[$48>>0]|0;
        L12: do {
         switch ($49<<24>>24) {
         case 37:  {
          break L10;
          break;
         }
         case 42:  {
          $70 = ((($p$0110)) + 2|0);
          $dest$0 = 0;$p$2 = $70;
          break;
         }
         default: {
          $71 = $49&255;
          $isdigittmp = (($71) + -48)|0;
          $isdigit = ($isdigittmp>>>0)<(10);
          if ($isdigit) {
           $72 = ((($p$0110)) + 2|0);
           $73 = HEAP8[$72>>0]|0;
           $74 = ($73<<24>>24)==(36);
           if ($74) {
            $vacopy_currentptr = HEAP32[$ap>>2]|0;
            HEAP32[$ap2$i>>2] = $vacopy_currentptr;
            $i$0$i = $isdigittmp;
            while(1) {
             $75 = ($i$0$i>>>0)>(1);
             $arglist_current = HEAP32[$ap2$i>>2]|0;
             $76 = $arglist_current;
             $77 = ((0) + 4|0);
             $expanded4 = $77;
             $expanded = (($expanded4) - 1)|0;
             $78 = (($76) + ($expanded))|0;
             $79 = ((0) + 4|0);
             $expanded8 = $79;
             $expanded7 = (($expanded8) - 1)|0;
             $expanded6 = $expanded7 ^ -1;
             $80 = $78 & $expanded6;
             $81 = $80;
             $82 = HEAP32[$81>>2]|0;
             $arglist_next = ((($81)) + 4|0);
             HEAP32[$ap2$i>>2] = $arglist_next;
             $83 = (($i$0$i) + -1)|0;
             if ($75) {
              $i$0$i = $83;
             } else {
              $$lcssa = $82;
              break;
             }
            }
            $84 = ((($p$0110)) + 3|0);
            $dest$0 = $$lcssa;$p$2 = $84;
            break L12;
           }
          }
          $arglist_current2 = HEAP32[$ap>>2]|0;
          $85 = $arglist_current2;
          $86 = ((0) + 4|0);
          $expanded11 = $86;
          $expanded10 = (($expanded11) - 1)|0;
          $87 = (($85) + ($expanded10))|0;
          $88 = ((0) + 4|0);
          $expanded15 = $88;
          $expanded14 = (($expanded15) - 1)|0;
          $expanded13 = $expanded14 ^ -1;
          $89 = $87 & $expanded13;
          $90 = $89;
          $91 = HEAP32[$90>>2]|0;
          $arglist_next3 = ((($90)) + 4|0);
          HEAP32[$ap>>2] = $arglist_next3;
          $dest$0 = $91;$p$2 = $48;
         }
         }
        } while(0);
        $92 = HEAP8[$p$2>>0]|0;
        $93 = $92&255;
        $isdigittmp796 = (($93) + -48)|0;
        $isdigit897 = ($isdigittmp796>>>0)<(10);
        if ($isdigit897) {
         $97 = $93;$p$398 = $p$2;$width$099 = 0;
         while(1) {
          $94 = ($width$099*10)|0;
          $95 = (($94) + -48)|0;
          $96 = (($95) + ($97))|0;
          $98 = ((($p$398)) + 1|0);
          $99 = HEAP8[$98>>0]|0;
          $100 = $99&255;
          $isdigittmp7 = (($100) + -48)|0;
          $isdigit8 = ($isdigittmp7>>>0)<(10);
          if ($isdigit8) {
           $97 = $100;$p$398 = $98;$width$099 = $96;
          } else {
           $$lcssa40 = $99;$p$3$lcssa = $98;$width$0$lcssa = $96;
           break;
          }
         }
        } else {
         $$lcssa40 = $92;$p$3$lcssa = $p$2;$width$0$lcssa = 0;
        }
        $101 = ($$lcssa40<<24>>24)==(109);
        if ($101) {
         $102 = ($dest$0|0)!=(0|0);
         $103 = $102&1;
         $104 = ((($p$3$lcssa)) + 1|0);
         $$pre173 = HEAP8[$104>>0]|0;
         $107 = $$pre173;$alloc$0 = $103;$p$4 = $104;$s$1 = 0;$wcs$1 = 0;
        } else {
         $107 = $$lcssa40;$alloc$0 = 0;$p$4 = $p$3$lcssa;$s$1 = $s$0105;$wcs$1 = $wcs$0106;
        }
        $105 = ((($p$4)) + 1|0);
        $106 = $107&255;
        switch ($106|0) {
        case 104:  {
         $108 = HEAP8[$105>>0]|0;
         $109 = ($108<<24>>24)==(104);
         $110 = ((($p$4)) + 2|0);
         $$11 = $109 ? $110 : $105;
         $$12 = $109 ? -2 : -1;
         $p$5 = $$11;$size$0 = $$12;
         break;
        }
        case 108:  {
         $111 = HEAP8[$105>>0]|0;
         $112 = ($111<<24>>24)==(108);
         $113 = ((($p$4)) + 2|0);
         $$13 = $112 ? $113 : $105;
         $$14 = $112 ? 3 : 1;
         $p$5 = $$13;$size$0 = $$14;
         break;
        }
        case 106:  {
         $p$5 = $105;$size$0 = 3;
         break;
        }
        case 116: case 122:  {
         $p$5 = $105;$size$0 = 1;
         break;
        }
        case 76:  {
         $p$5 = $105;$size$0 = 2;
         break;
        }
        case 110: case 112: case 67: case 83: case 91: case 99: case 115: case 88: case 71: case 70: case 69: case 65: case 103: case 102: case 101: case 97: case 120: case 117: case 111: case 105: case 100:  {
         $p$5 = $p$4;$size$0 = 0;
         break;
        }
        default: {
         $alloc$0402 = $alloc$0;$matches$0107371 = $matches$0107;$s$7 = $s$1;$wcs$8 = $wcs$1;
         label = 154;
         break L6;
        }
        }
        $114 = HEAP8[$p$5>>0]|0;
        $115 = $114&255;
        $116 = $115 & 47;
        $117 = ($116|0)==(3);
        $118 = $115 | 32;
        $$ = $117 ? $118 : $115;
        $$size$0 = $117 ? 1 : $size$0;
        switch ($$|0) {
        case 99:  {
         $119 = ($width$0$lcssa|0)<(1);
         $$width$0 = $119 ? 1 : $width$0$lcssa;
         $pos$1 = $pos$0111;$width$1 = $$width$0;
         break;
        }
        case 91:  {
         $pos$1 = $pos$0111;$width$1 = $width$0$lcssa;
         break;
        }
        case 110:  {
         $120 = ($pos$0111|0)<(0);
         $121 = $120 << 31 >> 31;
         $122 = ($dest$0|0)==(0|0);
         if ($122) {
          $matches$1 = $matches$0107;$p$11 = $p$5;$pos$2 = $pos$0111;$s$6 = $s$1;$wcs$7 = $wcs$1;
          break L8;
         }
         switch ($$size$0|0) {
         case -2:  {
          $123 = $pos$0111&255;
          HEAP8[$dest$0>>0] = $123;
          $matches$1 = $matches$0107;$p$11 = $p$5;$pos$2 = $pos$0111;$s$6 = $s$1;$wcs$7 = $wcs$1;
          break L8;
          break;
         }
         case -1:  {
          $124 = $pos$0111&65535;
          HEAP16[$dest$0>>1] = $124;
          $matches$1 = $matches$0107;$p$11 = $p$5;$pos$2 = $pos$0111;$s$6 = $s$1;$wcs$7 = $wcs$1;
          break L8;
          break;
         }
         case 0:  {
          HEAP32[$dest$0>>2] = $pos$0111;
          $matches$1 = $matches$0107;$p$11 = $p$5;$pos$2 = $pos$0111;$s$6 = $s$1;$wcs$7 = $wcs$1;
          break L8;
          break;
         }
         case 1:  {
          HEAP32[$dest$0>>2] = $pos$0111;
          $matches$1 = $matches$0107;$p$11 = $p$5;$pos$2 = $pos$0111;$s$6 = $s$1;$wcs$7 = $wcs$1;
          break L8;
          break;
         }
         case 3:  {
          $125 = $dest$0;
          $126 = $125;
          HEAP32[$126>>2] = $pos$0111;
          $127 = (($125) + 4)|0;
          $128 = $127;
          HEAP32[$128>>2] = $121;
          $matches$1 = $matches$0107;$p$11 = $p$5;$pos$2 = $pos$0111;$s$6 = $s$1;$wcs$7 = $wcs$1;
          break L8;
          break;
         }
         default: {
          $matches$1 = $matches$0107;$p$11 = $p$5;$pos$2 = $pos$0111;$s$6 = $s$1;$wcs$7 = $wcs$1;
          break L8;
         }
         }
         break;
        }
        default: {
         ___shlim($f,0);
         while(1) {
          $129 = HEAP32[$7>>2]|0;
          $130 = HEAP32[$8>>2]|0;
          $131 = ($129>>>0)<($130>>>0);
          if ($131) {
           $132 = ((($129)) + 1|0);
           HEAP32[$7>>2] = $132;
           $133 = HEAP8[$129>>0]|0;
           $134 = $133&255;
           $136 = $134;
          } else {
           $135 = (___shgetc($f)|0);
           $136 = $135;
          }
          $137 = (_isspace($136)|0);
          $138 = ($137|0)==(0);
          if ($138) {
           break;
          }
         }
         $139 = HEAP32[$8>>2]|0;
         $140 = ($139|0)==(0|0);
         if ($140) {
          $$pre175 = HEAP32[$7>>2]|0;
          $148 = $$pre175;
         } else {
          $141 = HEAP32[$7>>2]|0;
          $142 = ((($141)) + -1|0);
          HEAP32[$7>>2] = $142;
          $143 = $142;
          $148 = $143;
         }
         $144 = HEAP32[$9>>2]|0;
         $145 = HEAP32[$10>>2]|0;
         $146 = (($144) + ($pos$0111))|0;
         $147 = (($146) + ($148))|0;
         $149 = (($147) - ($145))|0;
         $pos$1 = $149;$width$1 = $width$0$lcssa;
        }
        }
        ___shlim($f,$width$1);
        $150 = HEAP32[$7>>2]|0;
        $151 = HEAP32[$8>>2]|0;
        $152 = ($150>>>0)<($151>>>0);
        if ($152) {
         $153 = ((($150)) + 1|0);
         HEAP32[$7>>2] = $153;
         $156 = $151;
        } else {
         $154 = (___shgetc($f)|0);
         $155 = ($154|0)<(0);
         if ($155) {
          $alloc$0402 = $alloc$0;$matches$0107371 = $matches$0107;$s$7 = $s$1;$wcs$8 = $wcs$1;
          label = 154;
          break L6;
         }
         $$pre177 = HEAP32[$8>>2]|0;
         $156 = $$pre177;
        }
        $157 = ($156|0)==(0|0);
        if (!($157)) {
         $158 = HEAP32[$7>>2]|0;
         $159 = ((($158)) + -1|0);
         HEAP32[$7>>2] = $159;
        }
        L68: do {
         switch ($$|0) {
         case 91: case 99: case 115:  {
          $160 = ($$|0)==(99);
          $161 = $$ | 16;
          $162 = ($161|0)==(115);
          L70: do {
           if ($162) {
            $163 = ($$|0)==(115);
            _memset(($scanset|0),-1,257)|0;
            HEAP8[$scanset>>0] = 0;
            if ($163) {
             HEAP8[$12>>0] = 0;
             ;HEAP8[$11>>0]=0|0;HEAP8[$11+1>>0]=0|0;HEAP8[$11+2>>0]=0|0;HEAP8[$11+3>>0]=0|0;HEAP8[$11+4>>0]=0|0;
             $p$9 = $p$5;
            } else {
             $p$9 = $p$5;
            }
           } else {
            $164 = ((($p$5)) + 1|0);
            $165 = HEAP8[$164>>0]|0;
            $166 = ($165<<24>>24)==(94);
            $167 = ((($p$5)) + 2|0);
            $invert$0 = $166&1;
            $p$6 = $166 ? $167 : $164;
            $168 = $166&1;
            _memset(($scanset|0),($168|0),257)|0;
            HEAP8[$scanset>>0] = 0;
            $169 = HEAP8[$p$6>>0]|0;
            switch ($169<<24>>24) {
            case 45:  {
             $170 = ((($p$6)) + 1|0);
             $171 = $invert$0 ^ 1;
             $172 = $171&255;
             HEAP8[$14>>0] = $172;
             $$pre$phi184Z2D = $172;$p$7$ph = $170;
             break;
            }
            case 93:  {
             $173 = ((($p$6)) + 1|0);
             $174 = $invert$0 ^ 1;
             $175 = $174&255;
             HEAP8[$15>>0] = $175;
             $$pre$phi184Z2D = $175;$p$7$ph = $173;
             break;
            }
            default: {
             $$pre182 = $invert$0 ^ 1;
             $$pre183 = $$pre182&255;
             $$pre$phi184Z2D = $$pre183;$p$7$ph = $p$6;
            }
            }
            $p$7 = $p$7$ph;
            while(1) {
             $176 = HEAP8[$p$7>>0]|0;
             L81: do {
              switch ($176<<24>>24) {
              case 0:  {
               $alloc$0402 = $alloc$0;$matches$0107371 = $matches$0107;$s$7 = $s$1;$wcs$8 = $wcs$1;
               label = 154;
               break L6;
               break;
              }
              case 93:  {
               $p$9 = $p$7;
               break L70;
               break;
              }
              case 45:  {
               $177 = ((($p$7)) + 1|0);
               $178 = HEAP8[$177>>0]|0;
               switch ($178<<24>>24) {
               case 93: case 0:  {
                $189 = 45;$p$8 = $p$7;
                break L81;
                break;
               }
               default: {
               }
               }
               $179 = ((($p$7)) + -1|0);
               $180 = HEAP8[$179>>0]|0;
               $181 = ($180&255)<($178&255);
               if ($181) {
                $182 = $180&255;
                $c$0102 = $182;
                while(1) {
                 $183 = (($c$0102) + 1)|0;
                 $184 = (($scanset) + ($183)|0);
                 HEAP8[$184>>0] = $$pre$phi184Z2D;
                 $185 = HEAP8[$177>>0]|0;
                 $186 = $185&255;
                 $187 = ($183|0)<($186|0);
                 if ($187) {
                  $c$0102 = $183;
                 } else {
                  $189 = $185;$p$8 = $177;
                  break;
                 }
                }
               } else {
                $189 = $178;$p$8 = $177;
               }
               break;
              }
              default: {
               $189 = $176;$p$8 = $p$7;
              }
              }
             } while(0);
             $188 = $189&255;
             $190 = (($188) + 1)|0;
             $191 = (($scanset) + ($190)|0);
             HEAP8[$191>>0] = $$pre$phi184Z2D;
             $192 = ((($p$8)) + 1|0);
             $p$7 = $192;
            }
           }
          } while(0);
          $193 = (($width$1) + 1)|0;
          $194 = $160 ? $193 : 31;
          $195 = ($$size$0|0)==(1);
          $196 = ($alloc$0|0)!=(0);
          L89: do {
           if ($195) {
            if ($196) {
             $197 = $194 << 2;
             $198 = (_malloc($197)|0);
             $199 = ($198|0)==(0|0);
             if ($199) {
              $alloc$0402 = $alloc$0;$matches$0107371 = $matches$0107;$s$7 = 0;$wcs$8 = $198;
              label = 154;
              break L6;
             } else {
              $wcs$2 = $198;
             }
            } else {
             $wcs$2 = $dest$0;
            }
            HEAP32[$st>>2] = 0;
            HEAP32[$13>>2] = 0;
            $i$0$ph = 0;$k$0$ph = $194;$wcs$3$ph = $wcs$2;
            L95: while(1) {
             $200 = ($wcs$3$ph|0)==(0|0);
             $i$0$ph22 = $i$0$ph;
             while(1) {
              L99: while(1) {
               $201 = HEAP32[$7>>2]|0;
               $202 = HEAP32[$8>>2]|0;
               $203 = ($201>>>0)<($202>>>0);
               if ($203) {
                $204 = ((($201)) + 1|0);
                HEAP32[$7>>2] = $204;
                $205 = HEAP8[$201>>0]|0;
                $206 = $205&255;
                $209 = $206;
               } else {
                $207 = (___shgetc($f)|0);
                $209 = $207;
               }
               $208 = (($209) + 1)|0;
               $210 = (($scanset) + ($208)|0);
               $211 = HEAP8[$210>>0]|0;
               $212 = ($211<<24>>24)==(0);
               if ($212) {
                $i$0$ph22$lcssa = $i$0$ph22;$wcs$3$ph$lcssa = $wcs$3$ph;
                break L95;
               }
               $213 = $209&255;
               HEAP8[$0>>0] = $213;
               $214 = (_mbrtowc($wc,$0,1,$st)|0);
               switch ($214|0) {
               case -1:  {
                $alloc$0402 = $alloc$0;$matches$0107371 = $matches$0107;$s$7 = 0;$wcs$8 = $wcs$3$ph;
                label = 154;
                break L6;
                break;
               }
               case -2:  {
                break;
               }
               default: {
                break L99;
               }
               }
              }
              if ($200) {
               $i$1 = $i$0$ph22;
              } else {
               $215 = HEAP32[$wc>>2]|0;
               $216 = (($i$0$ph22) + 1)|0;
               $217 = (($wcs$3$ph) + ($i$0$ph22<<2)|0);
               HEAP32[$217>>2] = $215;
               $i$1 = $216;
              }
              $218 = ($i$1|0)==($k$0$ph|0);
              $or$cond = $196 & $218;
              if ($or$cond) {
               break;
              } else {
               $i$0$ph22 = $i$1;
              }
             }
             $factor = $k$0$ph << 1;
             $219 = $factor | 1;
             $220 = $219 << 2;
             $221 = (_realloc($wcs$3$ph,$220)|0);
             $222 = ($221|0)==(0|0);
             if ($222) {
              $alloc$0402 = $alloc$0;$matches$0107371 = $matches$0107;$s$7 = 0;$wcs$8 = $wcs$3$ph;
              label = 154;
              break L6;
             } else {
              $i$0$ph$phi = $k$0$ph;$k$0$ph = $219;$wcs$3$ph = $221;$i$0$ph = $i$0$ph$phi;
             }
            }
            $223 = (_mbsinit($st)|0);
            $224 = ($223|0)==(0);
            if ($224) {
             $alloc$0402 = $alloc$0;$matches$0107371 = $matches$0107;$s$7 = 0;$wcs$8 = $wcs$3$ph$lcssa;
             label = 154;
             break L6;
            } else {
             $i$4 = $i$0$ph22$lcssa;$s$4 = 0;$wcs$5 = $wcs$3$ph$lcssa;
            }
           } else {
            if ($196) {
             $225 = (_malloc($194)|0);
             $226 = ($225|0)==(0|0);
             if ($226) {
              $alloc$0402 = $alloc$0;$matches$0107371 = $matches$0107;$s$7 = 0;$wcs$8 = 0;
              label = 154;
              break L6;
             } else {
              $i$2$ph = 0;$k$1$ph = $194;$s$2$ph = $225;
             }
             while(1) {
              $i$2 = $i$2$ph;
              while(1) {
               $227 = HEAP32[$7>>2]|0;
               $228 = HEAP32[$8>>2]|0;
               $229 = ($227>>>0)<($228>>>0);
               if ($229) {
                $230 = ((($227)) + 1|0);
                HEAP32[$7>>2] = $230;
                $231 = HEAP8[$227>>0]|0;
                $232 = $231&255;
                $235 = $232;
               } else {
                $233 = (___shgetc($f)|0);
                $235 = $233;
               }
               $234 = (($235) + 1)|0;
               $236 = (($scanset) + ($234)|0);
               $237 = HEAP8[$236>>0]|0;
               $238 = ($237<<24>>24)==(0);
               if ($238) {
                $i$4 = $i$2;$s$4 = $s$2$ph;$wcs$5 = 0;
                break L89;
               }
               $239 = $235&255;
               $240 = (($i$2) + 1)|0;
               $241 = (($s$2$ph) + ($i$2)|0);
               HEAP8[$241>>0] = $239;
               $242 = ($240|0)==($k$1$ph|0);
               if ($242) {
                break;
               } else {
                $i$2 = $240;
               }
              }
              $factor18 = $k$1$ph << 1;
              $243 = $factor18 | 1;
              $244 = (_realloc($s$2$ph,$243)|0);
              $245 = ($244|0)==(0|0);
              if ($245) {
               $alloc$0402 = $alloc$0;$matches$0107371 = $matches$0107;$s$7 = $s$2$ph;$wcs$8 = 0;
               label = 154;
               break L6;
              } else {
               $i$2$ph$phi = $k$1$ph;$k$1$ph = $243;$s$2$ph = $244;$i$2$ph = $i$2$ph$phi;
              }
             }
            }
            $246 = ($dest$0|0)==(0|0);
            if ($246) {
             $264 = $156;
             while(1) {
              $262 = HEAP32[$7>>2]|0;
              $263 = ($262>>>0)<($264>>>0);
              if ($263) {
               $265 = ((($262)) + 1|0);
               HEAP32[$7>>2] = $265;
               $266 = HEAP8[$262>>0]|0;
               $267 = $266&255;
               $270 = $267;
              } else {
               $268 = (___shgetc($f)|0);
               $270 = $268;
              }
              $269 = (($270) + 1)|0;
              $271 = (($scanset) + ($269)|0);
              $272 = HEAP8[$271>>0]|0;
              $273 = ($272<<24>>24)==(0);
              if ($273) {
               $i$4 = 0;$s$4 = 0;$wcs$5 = 0;
               break L89;
              }
              $$pre180 = HEAP32[$8>>2]|0;
              $264 = $$pre180;
             }
            } else {
             $249 = $156;$i$3 = 0;
             while(1) {
              $247 = HEAP32[$7>>2]|0;
              $248 = ($247>>>0)<($249>>>0);
              if ($248) {
               $250 = ((($247)) + 1|0);
               HEAP32[$7>>2] = $250;
               $251 = HEAP8[$247>>0]|0;
               $252 = $251&255;
               $255 = $252;
              } else {
               $253 = (___shgetc($f)|0);
               $255 = $253;
              }
              $254 = (($255) + 1)|0;
              $256 = (($scanset) + ($254)|0);
              $257 = HEAP8[$256>>0]|0;
              $258 = ($257<<24>>24)==(0);
              if ($258) {
               $i$4 = $i$3;$s$4 = $dest$0;$wcs$5 = 0;
               break L89;
              }
              $259 = $255&255;
              $260 = (($i$3) + 1)|0;
              $261 = (($dest$0) + ($i$3)|0);
              HEAP8[$261>>0] = $259;
              $$pre179 = HEAP32[$8>>2]|0;
              $249 = $$pre179;$i$3 = $260;
             }
            }
           }
          } while(0);
          $274 = HEAP32[$8>>2]|0;
          $275 = ($274|0)==(0|0);
          if ($275) {
           $$pre181 = HEAP32[$7>>2]|0;
           $282 = $$pre181;
          } else {
           $276 = HEAP32[$7>>2]|0;
           $277 = ((($276)) + -1|0);
           HEAP32[$7>>2] = $277;
           $278 = $277;
           $282 = $278;
          }
          $279 = HEAP32[$9>>2]|0;
          $280 = HEAP32[$10>>2]|0;
          $281 = (($282) - ($280))|0;
          $283 = (($281) + ($279))|0;
          $284 = ($283|0)==(0);
          if ($284) {
           $alloc$2 = $alloc$0;$matches$2 = $matches$0107;$s$9 = $s$4;$wcs$10 = $wcs$5;
           break L6;
          }
          $$not = $160 ^ 1;
          $285 = ($283|0)==($width$1|0);
          $or$cond10 = $285 | $$not;
          if (!($or$cond10)) {
           $alloc$2 = $alloc$0;$matches$2 = $matches$0107;$s$9 = $s$4;$wcs$10 = $wcs$5;
           break L6;
          }
          do {
           if ($196) {
            if ($195) {
             HEAP32[$dest$0>>2] = $wcs$5;
             break;
            } else {
             HEAP32[$dest$0>>2] = $s$4;
             break;
            }
           }
          } while(0);
          if ($160) {
           $p$10 = $p$9;$s$5 = $s$4;$wcs$6 = $wcs$5;
          } else {
           $286 = ($wcs$5|0)==(0|0);
           if (!($286)) {
            $287 = (($wcs$5) + ($i$4<<2)|0);
            HEAP32[$287>>2] = 0;
           }
           $288 = ($s$4|0)==(0|0);
           if ($288) {
            $p$10 = $p$9;$s$5 = 0;$wcs$6 = $wcs$5;
            break L68;
           }
           $289 = (($s$4) + ($i$4)|0);
           HEAP8[$289>>0] = 0;
           $p$10 = $p$9;$s$5 = $s$4;$wcs$6 = $wcs$5;
          }
          break;
         }
         case 120: case 88: case 112:  {
          $base$0 = 16;
          label = 136;
          break;
         }
         case 111:  {
          $base$0 = 8;
          label = 136;
          break;
         }
         case 117: case 100:  {
          $base$0 = 10;
          label = 136;
          break;
         }
         case 105:  {
          $base$0 = 0;
          label = 136;
          break;
         }
         case 71: case 103: case 70: case 102: case 69: case 101: case 65: case 97:  {
          $307 = (+___floatscan($f,$$size$0,0));
          $308 = HEAP32[$9>>2]|0;
          $309 = HEAP32[$7>>2]|0;
          $310 = HEAP32[$10>>2]|0;
          $311 = (($310) - ($309))|0;
          $312 = ($308|0)==($311|0);
          if ($312) {
           $alloc$2 = $alloc$0;$matches$2 = $matches$0107;$s$9 = $s$1;$wcs$10 = $wcs$1;
           break L6;
          }
          $313 = ($dest$0|0)==(0|0);
          if ($313) {
           $p$10 = $p$5;$s$5 = $s$1;$wcs$6 = $wcs$1;
          } else {
           switch ($$size$0|0) {
           case 0:  {
            $314 = $307;
            HEAPF32[$dest$0>>2] = $314;
            $p$10 = $p$5;$s$5 = $s$1;$wcs$6 = $wcs$1;
            break L68;
            break;
           }
           case 1:  {
            HEAPF64[$dest$0>>3] = $307;
            $p$10 = $p$5;$s$5 = $s$1;$wcs$6 = $wcs$1;
            break L68;
            break;
           }
           case 2:  {
            HEAPF64[$dest$0>>3] = $307;
            $p$10 = $p$5;$s$5 = $s$1;$wcs$6 = $wcs$1;
            break L68;
            break;
           }
           default: {
            $p$10 = $p$5;$s$5 = $s$1;$wcs$6 = $wcs$1;
            break L68;
           }
           }
          }
          break;
         }
         default: {
          $p$10 = $p$5;$s$5 = $s$1;$wcs$6 = $wcs$1;
         }
         }
        } while(0);
        L169: do {
         if ((label|0) == 136) {
          label = 0;
          $290 = (___intscan($f,$base$0,0,-1,-1)|0);
          $291 = tempRet0;
          $292 = HEAP32[$9>>2]|0;
          $293 = HEAP32[$7>>2]|0;
          $294 = HEAP32[$10>>2]|0;
          $295 = (($294) - ($293))|0;
          $296 = ($292|0)==($295|0);
          if ($296) {
           $alloc$2 = $alloc$0;$matches$2 = $matches$0107;$s$9 = $s$1;$wcs$10 = $wcs$1;
           break L6;
          }
          $297 = ($$|0)==(112);
          $298 = ($dest$0|0)!=(0|0);
          $or$cond3 = $298 & $297;
          if ($or$cond3) {
           $299 = $290;
           HEAP32[$dest$0>>2] = $299;
           $p$10 = $p$5;$s$5 = $s$1;$wcs$6 = $wcs$1;
           break;
          }
          $300 = ($dest$0|0)==(0|0);
          if ($300) {
           $p$10 = $p$5;$s$5 = $s$1;$wcs$6 = $wcs$1;
          } else {
           switch ($$size$0|0) {
           case -2:  {
            $301 = $290&255;
            HEAP8[$dest$0>>0] = $301;
            $p$10 = $p$5;$s$5 = $s$1;$wcs$6 = $wcs$1;
            break L169;
            break;
           }
           case -1:  {
            $302 = $290&65535;
            HEAP16[$dest$0>>1] = $302;
            $p$10 = $p$5;$s$5 = $s$1;$wcs$6 = $wcs$1;
            break L169;
            break;
           }
           case 0:  {
            HEAP32[$dest$0>>2] = $290;
            $p$10 = $p$5;$s$5 = $s$1;$wcs$6 = $wcs$1;
            break L169;
            break;
           }
           case 1:  {
            HEAP32[$dest$0>>2] = $290;
            $p$10 = $p$5;$s$5 = $s$1;$wcs$6 = $wcs$1;
            break L169;
            break;
           }
           case 3:  {
            $303 = $dest$0;
            $304 = $303;
            HEAP32[$304>>2] = $290;
            $305 = (($303) + 4)|0;
            $306 = $305;
            HEAP32[$306>>2] = $291;
            $p$10 = $p$5;$s$5 = $s$1;$wcs$6 = $wcs$1;
            break L169;
            break;
           }
           default: {
            $p$10 = $p$5;$s$5 = $s$1;$wcs$6 = $wcs$1;
            break L169;
           }
           }
          }
         }
        } while(0);
        $315 = HEAP32[$9>>2]|0;
        $316 = HEAP32[$7>>2]|0;
        $317 = HEAP32[$10>>2]|0;
        $318 = (($315) + ($pos$1))|0;
        $319 = (($318) + ($316))|0;
        $320 = (($319) - ($317))|0;
        $not$ = ($dest$0|0)!=(0|0);
        $321 = $not$&1;
        $matches$0$ = (($321) + ($matches$0107))|0;
        $matches$1 = $matches$0$;$p$11 = $p$10;$pos$2 = $320;$s$6 = $s$5;$wcs$7 = $wcs$6;
        break L8;
       }
      } while(0);
      $50 = $47&1;
      $51 = (($p$0110) + ($50)|0);
      ___shlim($f,0);
      $52 = HEAP32[$7>>2]|0;
      $53 = HEAP32[$8>>2]|0;
      $54 = ($52>>>0)<($53>>>0);
      if ($54) {
       $55 = ((($52)) + 1|0);
       HEAP32[$7>>2] = $55;
       $56 = HEAP8[$52>>0]|0;
       $57 = $56&255;
       $61 = $57;
      } else {
       $58 = (___shgetc($f)|0);
       $61 = $58;
      }
      $59 = HEAP8[$51>>0]|0;
      $60 = $59&255;
      $62 = ($61|0)==($60|0);
      if (!($62)) {
       $$lcssa386 = $61;$matches$0107$lcssa = $matches$0107;$s$0105$lcssa = $s$0105;$wcs$0106$lcssa = $wcs$0106;
       label = 22;
       break L6;
      }
      $69 = (($pos$0111) + 1)|0;
      $matches$1 = $matches$0107;$p$11 = $51;$pos$2 = $69;$s$6 = $s$0105;$wcs$7 = $wcs$0106;
     } else {
      $p$1 = $p$0110;
      while(1) {
       $20 = ((($p$1)) + 1|0);
       $21 = HEAP8[$20>>0]|0;
       $22 = $21&255;
       $23 = (_isspace($22)|0);
       $24 = ($23|0)==(0);
       if ($24) {
        $p$1$lcssa = $p$1;
        break;
       } else {
        $p$1 = $20;
       }
      }
      ___shlim($f,0);
      while(1) {
       $25 = HEAP32[$7>>2]|0;
       $26 = HEAP32[$8>>2]|0;
       $27 = ($25>>>0)<($26>>>0);
       if ($27) {
        $28 = ((($25)) + 1|0);
        HEAP32[$7>>2] = $28;
        $29 = HEAP8[$25>>0]|0;
        $30 = $29&255;
        $32 = $30;
       } else {
        $31 = (___shgetc($f)|0);
        $32 = $31;
       }
       $33 = (_isspace($32)|0);
       $34 = ($33|0)==(0);
       if ($34) {
        break;
       }
      }
      $35 = HEAP32[$8>>2]|0;
      $36 = ($35|0)==(0|0);
      if ($36) {
       $$pre = HEAP32[$7>>2]|0;
       $44 = $$pre;
      } else {
       $37 = HEAP32[$7>>2]|0;
       $38 = ((($37)) + -1|0);
       HEAP32[$7>>2] = $38;
       $39 = $38;
       $44 = $39;
      }
      $40 = HEAP32[$9>>2]|0;
      $41 = HEAP32[$10>>2]|0;
      $42 = (($40) + ($pos$0111))|0;
      $43 = (($42) + ($44))|0;
      $45 = (($43) - ($41))|0;
      $matches$1 = $matches$0107;$p$11 = $p$1$lcssa;$pos$2 = $45;$s$6 = $s$0105;$wcs$7 = $wcs$0106;
     }
    } while(0);
    $322 = ((($p$11)) + 1|0);
    $323 = HEAP8[$322>>0]|0;
    $324 = ($323<<24>>24)==(0);
    if ($324) {
     $matches$3 = $matches$1;
     break L4;
    } else {
     $17 = $323;$matches$0107 = $matches$1;$p$0110 = $322;$pos$0111 = $pos$2;$s$0105 = $s$6;$wcs$0106 = $wcs$7;
    }
   }
   if ((label|0) == 22) {
    $63 = HEAP32[$8>>2]|0;
    $64 = ($63|0)==(0|0);
    if (!($64)) {
     $65 = HEAP32[$7>>2]|0;
     $66 = ((($65)) + -1|0);
     HEAP32[$7>>2] = $66;
    }
    $67 = ($$lcssa386|0)>(-1);
    $68 = ($matches$0107$lcssa|0)!=(0);
    $or$cond5 = $68 | $67;
    if ($or$cond5) {
     $matches$3 = $matches$0107$lcssa;
     break;
    } else {
     $alloc$1 = 0;$s$8 = $s$0105$lcssa;$wcs$9 = $wcs$0106$lcssa;
     label = 155;
    }
   }
   else if ((label|0) == 154) {
    $$old4 = ($matches$0107371|0)==(0);
    if ($$old4) {
     $alloc$1 = $alloc$0402;$s$8 = $s$7;$wcs$9 = $wcs$8;
     label = 155;
    } else {
     $alloc$2 = $alloc$0402;$matches$2 = $matches$0107371;$s$9 = $s$7;$wcs$10 = $wcs$8;
    }
   }
   if ((label|0) == 155) {
    $alloc$2 = $alloc$1;$matches$2 = -1;$s$9 = $s$8;$wcs$10 = $wcs$9;
   }
   $325 = ($alloc$2|0)==(0);
   if ($325) {
    $matches$3 = $matches$2;
   } else {
    _free($s$9);
    _free($wcs$10);
    $matches$3 = $matches$2;
   }
  }
 } while(0);
 $327 = ($326|0)==(0);
 if (!($327)) {
  ___unlockfile($f);
 }
 STACKTOP = sp;return ($matches$3|0);
}
function _isspace($c) {
 $c = $c|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ($c|0)==(32);
 $1 = (($c) + -9)|0;
 $2 = ($1>>>0)<(5);
 $3 = $0 | $2;
 $4 = $3&1;
 return ($4|0);
}
function ___shlim($f,$lim) {
 $f = $f|0;
 $lim = $lim|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($f)) + 104|0);
 HEAP32[$0>>2] = $lim;
 $1 = ((($f)) + 8|0);
 $2 = HEAP32[$1>>2]|0;
 $3 = ((($f)) + 4|0);
 $4 = HEAP32[$3>>2]|0;
 $5 = (($2) - ($4))|0;
 $6 = ((($f)) + 108|0);
 HEAP32[$6>>2] = $5;
 $7 = ($lim|0)!=(0);
 $8 = ($5|0)>($lim|0);
 $or$cond = $7 & $8;
 if ($or$cond) {
  $9 = $4;
  $10 = (($9) + ($lim)|0);
  $11 = ((($f)) + 100|0);
  HEAP32[$11>>2] = $10;
 } else {
  $12 = ((($f)) + 100|0);
  HEAP32[$12>>2] = $2;
 }
 return;
}
function ___shgetc($f) {
 $f = $f|0;
 var $$0 = 0, $$phi$trans$insert = 0, $$phi$trans$insert3 = 0, $$pre = 0, $$pre4 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0;
 var $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0;
 var $40 = 0, $41 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($f)) + 104|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = ($1|0)==(0);
 if ($2) {
  label = 3;
 } else {
  $3 = ((($f)) + 108|0);
  $4 = HEAP32[$3>>2]|0;
  $5 = ($4|0)<($1|0);
  if ($5) {
   label = 3;
  } else {
   label = 4;
  }
 }
 if ((label|0) == 3) {
  $6 = (___uflow($f)|0);
  $7 = ($6|0)<(0);
  if ($7) {
   label = 4;
  } else {
   $9 = HEAP32[$0>>2]|0;
   $10 = ($9|0)==(0);
   $$phi$trans$insert = ((($f)) + 8|0);
   $$pre = HEAP32[$$phi$trans$insert>>2]|0;
   if ($10) {
    $11 = $$pre;
    $41 = $11;
    label = 9;
   } else {
    $12 = ((($f)) + 4|0);
    $13 = HEAP32[$12>>2]|0;
    $14 = $13;
    $15 = (($$pre) - ($14))|0;
    $16 = ((($f)) + 108|0);
    $17 = HEAP32[$16>>2]|0;
    $18 = (($9) - ($17))|0;
    $19 = ($15|0)<($18|0);
    $20 = $$pre;
    if ($19) {
     $41 = $20;
     label = 9;
    } else {
     $21 = (($18) + -1)|0;
     $22 = (($13) + ($21)|0);
     $23 = ((($f)) + 100|0);
     HEAP32[$23>>2] = $22;
     $25 = $20;
    }
   }
   if ((label|0) == 9) {
    $24 = ((($f)) + 100|0);
    HEAP32[$24>>2] = $$pre;
    $25 = $41;
   }
   $26 = ($25|0)==(0|0);
   $$phi$trans$insert3 = ((($f)) + 4|0);
   if ($26) {
    $$pre4 = HEAP32[$$phi$trans$insert3>>2]|0;
    $36 = $$pre4;
   } else {
    $27 = HEAP32[$$phi$trans$insert3>>2]|0;
    $28 = $25;
    $29 = ((($f)) + 108|0);
    $30 = HEAP32[$29>>2]|0;
    $31 = (($28) + 1)|0;
    $32 = (($31) - ($27))|0;
    $33 = (($32) + ($30))|0;
    HEAP32[$29>>2] = $33;
    $34 = $27;
    $36 = $34;
   }
   $35 = ((($36)) + -1|0);
   $37 = HEAP8[$35>>0]|0;
   $38 = $37&255;
   $39 = ($38|0)==($6|0);
   if ($39) {
    $$0 = $6;
   } else {
    $40 = $6&255;
    HEAP8[$35>>0] = $40;
    $$0 = $6;
   }
  }
 }
 if ((label|0) == 4) {
  $8 = ((($f)) + 100|0);
  HEAP32[$8>>2] = 0;
  $$0 = -1;
 }
 return ($$0|0);
}
function _mbrtowc($wc,$src,$n,$st) {
 $wc = $wc|0;
 $src = $src|0;
 $n = $n|0;
 $st = $st|0;
 var $$0 = 0, $$024 = 0, $$1 = 0, $$lcssa = 0, $$lcssa35 = 0, $$st = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0;
 var $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0;
 var $4 = 0, $40 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $c$05 = 0, $c$1 = 0, $c$2 = 0, $dummy = 0, $dummy$wc = 0, $s$06 = 0, $s$1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $dummy = sp;
 $0 = ($st|0)==(0|0);
 $$st = $0 ? 82832 : $st;
 $1 = HEAP32[$$st>>2]|0;
 $2 = ($src|0)==(0|0);
 L1: do {
  if ($2) {
   $3 = ($1|0)==(0);
   if ($3) {
    $$0 = 0;
   } else {
    label = 15;
   }
  } else {
   $4 = ($wc|0)==(0|0);
   $dummy$wc = $4 ? $dummy : $wc;
   $5 = ($n|0)==(0);
   if ($5) {
    $$0 = -2;
   } else {
    $6 = ($1|0)==(0);
    if ($6) {
     $7 = HEAP8[$src>>0]|0;
     $8 = $7&255;
     $9 = ($7<<24>>24)>(-1);
     if ($9) {
      HEAP32[$dummy$wc>>2] = $8;
      $10 = ($7<<24>>24)!=(0);
      $11 = $10&1;
      $$0 = $11;
      break;
     }
     $12 = (($8) + -194)|0;
     $13 = ($12>>>0)>(50);
     if ($13) {
      label = 15;
      break;
     }
     $14 = ((($src)) + 1|0);
     $15 = (80252 + ($12<<2)|0);
     $16 = HEAP32[$15>>2]|0;
     $17 = (($n) + -1)|0;
     $18 = ($17|0)==(0);
     if ($18) {
      $c$2 = $16;
     } else {
      $$024 = $17;$c$05 = $16;$s$06 = $14;
      label = 9;
     }
    } else {
     $$024 = $n;$c$05 = $1;$s$06 = $src;
     label = 9;
    }
    L11: do {
     if ((label|0) == 9) {
      $19 = HEAP8[$s$06>>0]|0;
      $20 = $19&255;
      $21 = $20 >>> 3;
      $22 = (($21) + -16)|0;
      $23 = $c$05 >> 26;
      $24 = (($21) + ($23))|0;
      $25 = $22 | $24;
      $26 = ($25>>>0)>(7);
      if ($26) {
       label = 15;
       break L1;
      } else {
       $$1 = $$024;$30 = $19;$c$1 = $c$05;$s$1 = $s$06;
      }
      while(1) {
       $27 = $c$1 << 6;
       $28 = ((($s$1)) + 1|0);
       $29 = $30&255;
       $31 = (($29) + -128)|0;
       $32 = $31 | $27;
       $33 = (($$1) + -1)|0;
       $34 = ($32|0)<(0);
       if (!($34)) {
        $$lcssa = $32;$$lcssa35 = $33;
        break;
       }
       $36 = ($33|0)==(0);
       if ($36) {
        $c$2 = $32;
        break L11;
       }
       $37 = HEAP8[$28>>0]|0;
       $38 = $37 & -64;
       $39 = ($38<<24>>24)==(-128);
       if ($39) {
        $$1 = $33;$30 = $37;$c$1 = $32;$s$1 = $28;
       } else {
        label = 15;
        break L1;
       }
      }
      HEAP32[$$st>>2] = 0;
      HEAP32[$dummy$wc>>2] = $$lcssa;
      $35 = (($n) - ($$lcssa35))|0;
      $$0 = $35;
      break L1;
     }
    } while(0);
    HEAP32[$$st>>2] = $c$2;
    $$0 = -2;
   }
  }
 } while(0);
 if ((label|0) == 15) {
  HEAP32[$$st>>2] = 0;
  $40 = (___errno_location()|0);
  HEAP32[$40>>2] = 84;
  $$0 = -1;
 }
 STACKTOP = sp;return ($$0|0);
}
function _mbsinit($st) {
 $st = $st|0;
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ($st|0)==(0|0);
 if ($0) {
  $4 = 1;
 } else {
  $1 = HEAP32[$st>>2]|0;
  $2 = ($1|0)==(0);
  $4 = $2;
 }
 $3 = $4&1;
 return ($3|0);
}
function ___intscan($f,$base,$pok,$0,$1) {
 $f = $f|0;
 $base = $base|0;
 $pok = $pok|0;
 $0 = $0|0;
 $1 = $1|0;
 var $$1 = 0, $$115 = 0, $$116 = 0, $$base14 = 0, $$lcssa = 0, $$lcssa108 = 0, $$lcssa109 = 0, $$lcssa110 = 0, $$lcssa111 = 0, $$lcssa112 = 0, $$lcssa113 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0;
 var $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0;
 var $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0;
 var $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0;
 var $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0;
 var $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0;
 var $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0;
 var $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0;
 var $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0;
 var $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0;
 var $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0;
 var $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0;
 var $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0;
 var $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0;
 var $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0;
 var $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $c$0 = 0, $c$1 = 0, $c$117 = 0, $c$2$be = 0, $c$2$be$lcssa = 0, $c$2$lcssa = 0, $c$3$be = 0, $c$3$lcssa = 0, $c$359 = 0, $c$4$be = 0, $c$4$be$lcssa = 0, $c$4$lcssa = 0, $c$5$be = 0, $c$6$be = 0, $c$6$be$lcssa = 0;
 var $c$6$lcssa = 0, $c$7$be = 0, $c$742 = 0, $c$8 = 0, $c$9$be = 0, $neg$0 = 0, $neg$0$ = 0, $neg$1 = 0, $or$cond = 0, $or$cond12 = 0, $or$cond31 = 0, $or$cond5 = 0, $or$cond7 = 0, $x$070 = 0, $x$136 = 0, $x$254 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $2 = ($base>>>0)>(36);
 L1: do {
  if ($2) {
   $5 = (___errno_location()|0);
   HEAP32[$5>>2] = 22;
   $286 = 0;$287 = 0;
  } else {
   $3 = ((($f)) + 4|0);
   $4 = ((($f)) + 100|0);
   while(1) {
    $6 = HEAP32[$3>>2]|0;
    $7 = HEAP32[$4>>2]|0;
    $8 = ($6>>>0)<($7>>>0);
    if ($8) {
     $9 = ((($6)) + 1|0);
     HEAP32[$3>>2] = $9;
     $10 = HEAP8[$6>>0]|0;
     $11 = $10&255;
     $13 = $11;
    } else {
     $12 = (___shgetc($f)|0);
     $13 = $12;
    }
    $14 = (_isspace($13)|0);
    $15 = ($14|0)==(0);
    if ($15) {
     $$lcssa113 = $13;
     break;
    }
   }
   $16 = ($$lcssa113|0)==(45);
   L11: do {
    switch ($$lcssa113|0) {
    case 43: case 45:  {
     $17 = $16 << 31 >> 31;
     $18 = HEAP32[$3>>2]|0;
     $19 = HEAP32[$4>>2]|0;
     $20 = ($18>>>0)<($19>>>0);
     if ($20) {
      $21 = ((($18)) + 1|0);
      HEAP32[$3>>2] = $21;
      $22 = HEAP8[$18>>0]|0;
      $23 = $22&255;
      $c$0 = $23;$neg$0 = $17;
      break L11;
     } else {
      $24 = (___shgetc($f)|0);
      $c$0 = $24;$neg$0 = $17;
      break L11;
     }
     break;
    }
    default: {
     $c$0 = $$lcssa113;$neg$0 = 0;
    }
    }
   } while(0);
   $25 = ($base|0)==(0);
   $26 = $base | 16;
   $27 = ($26|0)==(16);
   $28 = ($c$0|0)==(48);
   $or$cond5 = $27 & $28;
   do {
    if ($or$cond5) {
     $29 = HEAP32[$3>>2]|0;
     $30 = HEAP32[$4>>2]|0;
     $31 = ($29>>>0)<($30>>>0);
     if ($31) {
      $32 = ((($29)) + 1|0);
      HEAP32[$3>>2] = $32;
      $33 = HEAP8[$29>>0]|0;
      $34 = $33&255;
      $37 = $34;
     } else {
      $35 = (___shgetc($f)|0);
      $37 = $35;
     }
     $36 = $37 | 32;
     $38 = ($36|0)==(120);
     if (!($38)) {
      if ($25) {
       $$116 = 8;$c$117 = $37;
       label = 46;
       break;
      } else {
       $$1 = $base;$c$1 = $37;
       label = 32;
       break;
      }
     }
     $39 = HEAP32[$3>>2]|0;
     $40 = HEAP32[$4>>2]|0;
     $41 = ($39>>>0)<($40>>>0);
     if ($41) {
      $42 = ((($39)) + 1|0);
      HEAP32[$3>>2] = $42;
      $43 = HEAP8[$39>>0]|0;
      $44 = $43&255;
      $47 = $44;
     } else {
      $45 = (___shgetc($f)|0);
      $47 = $45;
     }
     $46 = ((80492) + ($47)|0);
     $48 = HEAP8[$46>>0]|0;
     $49 = ($48&255)>(15);
     if ($49) {
      $50 = HEAP32[$4>>2]|0;
      $51 = ($50|0)==(0|0);
      if (!($51)) {
       $52 = HEAP32[$3>>2]|0;
       $53 = ((($52)) + -1|0);
       HEAP32[$3>>2] = $53;
      }
      $54 = ($pok|0)==(0);
      if ($54) {
       ___shlim($f,0);
       $286 = 0;$287 = 0;
       break L1;
      }
      if ($51) {
       $286 = 0;$287 = 0;
       break L1;
      }
      $55 = HEAP32[$3>>2]|0;
      $56 = ((($55)) + -1|0);
      HEAP32[$3>>2] = $56;
      $286 = 0;$287 = 0;
      break L1;
     } else {
      $$116 = 16;$c$117 = $47;
      label = 46;
     }
    } else {
     $$base14 = $25 ? 10 : $base;
     $57 = ((80492) + ($c$0)|0);
     $58 = HEAP8[$57>>0]|0;
     $59 = $58&255;
     $60 = ($59>>>0)<($$base14>>>0);
     if ($60) {
      $$1 = $$base14;$c$1 = $c$0;
      label = 32;
     } else {
      $61 = HEAP32[$4>>2]|0;
      $62 = ($61|0)==(0|0);
      if (!($62)) {
       $63 = HEAP32[$3>>2]|0;
       $64 = ((($63)) + -1|0);
       HEAP32[$3>>2] = $64;
      }
      ___shlim($f,0);
      $65 = (___errno_location()|0);
      HEAP32[$65>>2] = 22;
      $286 = 0;$287 = 0;
      break L1;
     }
    }
   } while(0);
   if ((label|0) == 32) {
    $66 = ($$1|0)==(10);
    if ($66) {
     $67 = (($c$1) + -48)|0;
     $68 = ($67>>>0)<(10);
     if ($68) {
      $71 = $67;$x$070 = 0;
      while(1) {
       $69 = ($x$070*10)|0;
       $70 = (($69) + ($71))|0;
       $72 = HEAP32[$3>>2]|0;
       $73 = HEAP32[$4>>2]|0;
       $74 = ($72>>>0)<($73>>>0);
       if ($74) {
        $75 = ((($72)) + 1|0);
        HEAP32[$3>>2] = $75;
        $76 = HEAP8[$72>>0]|0;
        $77 = $76&255;
        $c$2$be = $77;
       } else {
        $78 = (___shgetc($f)|0);
        $c$2$be = $78;
       }
       $79 = (($c$2$be) + -48)|0;
       $80 = ($79>>>0)<(10);
       $81 = ($70>>>0)<(429496729);
       $82 = $80 & $81;
       if ($82) {
        $71 = $79;$x$070 = $70;
       } else {
        $$lcssa112 = $70;$c$2$be$lcssa = $c$2$be;
        break;
       }
      }
      $288 = $$lcssa112;$289 = 0;$c$2$lcssa = $c$2$be$lcssa;
     } else {
      $288 = 0;$289 = 0;$c$2$lcssa = $c$1;
     }
     $83 = (($c$2$lcssa) + -48)|0;
     $84 = ($83>>>0)<(10);
     if ($84) {
      $85 = $288;$86 = $289;$89 = $83;$c$359 = $c$2$lcssa;
      while(1) {
       $87 = (___muldi3(($85|0),($86|0),10,0)|0);
       $88 = tempRet0;
       $90 = ($89|0)<(0);
       $91 = $90 << 31 >> 31;
       $92 = $89 ^ -1;
       $93 = $91 ^ -1;
       $94 = ($88>>>0)>($93>>>0);
       $95 = ($87>>>0)>($92>>>0);
       $96 = ($88|0)==($93|0);
       $97 = $96 & $95;
       $98 = $94 | $97;
       if ($98) {
        $$lcssa = $89;$290 = $85;$291 = $86;$c$3$lcssa = $c$359;
        break;
       }
       $99 = (_i64Add(($87|0),($88|0),($89|0),($91|0))|0);
       $100 = tempRet0;
       $101 = HEAP32[$3>>2]|0;
       $102 = HEAP32[$4>>2]|0;
       $103 = ($101>>>0)<($102>>>0);
       if ($103) {
        $104 = ((($101)) + 1|0);
        HEAP32[$3>>2] = $104;
        $105 = HEAP8[$101>>0]|0;
        $106 = $105&255;
        $c$3$be = $106;
       } else {
        $107 = (___shgetc($f)|0);
        $c$3$be = $107;
       }
       $108 = (($c$3$be) + -48)|0;
       $109 = ($108>>>0)<(10);
       $110 = ($100>>>0)<(429496729);
       $111 = ($99>>>0)<(2576980378);
       $112 = ($100|0)==(429496729);
       $113 = $112 & $111;
       $114 = $110 | $113;
       $or$cond7 = $109 & $114;
       if ($or$cond7) {
        $85 = $99;$86 = $100;$89 = $108;$c$359 = $c$3$be;
       } else {
        $$lcssa = $108;$290 = $99;$291 = $100;$c$3$lcssa = $c$3$be;
        break;
       }
      }
      $115 = ($$lcssa>>>0)>(9);
      if ($115) {
       $259 = $291;$261 = $290;$neg$1 = $neg$0;
      } else {
       $$115 = 10;$292 = $290;$293 = $291;$c$8 = $c$3$lcssa;
       label = 72;
      }
     } else {
      $259 = $289;$261 = $288;$neg$1 = $neg$0;
     }
    } else {
     $$116 = $$1;$c$117 = $c$1;
     label = 46;
    }
   }
   L63: do {
    if ((label|0) == 46) {
     $116 = (($$116) + -1)|0;
     $117 = $116 & $$116;
     $118 = ($117|0)==(0);
     if ($118) {
      $123 = ($$116*23)|0;
      $124 = $123 >>> 5;
      $125 = $124 & 7;
      $126 = (80748 + ($125)|0);
      $127 = HEAP8[$126>>0]|0;
      $128 = $127 << 24 >> 24;
      $129 = ((80492) + ($c$117)|0);
      $130 = HEAP8[$129>>0]|0;
      $131 = $130&255;
      $132 = ($131>>>0)<($$116>>>0);
      if ($132) {
       $135 = $131;$x$136 = 0;
       while(1) {
        $133 = $x$136 << $128;
        $134 = $135 | $133;
        $136 = HEAP32[$3>>2]|0;
        $137 = HEAP32[$4>>2]|0;
        $138 = ($136>>>0)<($137>>>0);
        if ($138) {
         $139 = ((($136)) + 1|0);
         HEAP32[$3>>2] = $139;
         $140 = HEAP8[$136>>0]|0;
         $141 = $140&255;
         $c$4$be = $141;
        } else {
         $142 = (___shgetc($f)|0);
         $c$4$be = $142;
        }
        $143 = ((80492) + ($c$4$be)|0);
        $144 = HEAP8[$143>>0]|0;
        $145 = $144&255;
        $146 = ($145>>>0)<($$116>>>0);
        $147 = ($134>>>0)<(134217728);
        $148 = $147 & $146;
        if ($148) {
         $135 = $145;$x$136 = $134;
        } else {
         $$lcssa108 = $134;$$lcssa109 = $144;$c$4$be$lcssa = $c$4$be;
         break;
        }
       }
       $152 = $$lcssa109;$154 = 0;$156 = $$lcssa108;$c$4$lcssa = $c$4$be$lcssa;
      } else {
       $152 = $130;$154 = 0;$156 = 0;$c$4$lcssa = $c$117;
      }
      $149 = (_bitshift64Lshr(-1,-1,($128|0))|0);
      $150 = tempRet0;
      $151 = $152&255;
      $153 = ($151>>>0)>=($$116>>>0);
      $155 = ($154>>>0)>($150>>>0);
      $157 = ($156>>>0)>($149>>>0);
      $158 = ($154|0)==($150|0);
      $159 = $158 & $157;
      $160 = $155 | $159;
      $or$cond31 = $153 | $160;
      if ($or$cond31) {
       $$115 = $$116;$292 = $156;$293 = $154;$c$8 = $c$4$lcssa;
       label = 72;
       break;
      } else {
       $161 = $156;$162 = $154;$166 = $152;
      }
      while(1) {
       $163 = (_bitshift64Shl(($161|0),($162|0),($128|0))|0);
       $164 = tempRet0;
       $165 = $166&255;
       $167 = $165 | $163;
       $168 = HEAP32[$3>>2]|0;
       $169 = HEAP32[$4>>2]|0;
       $170 = ($168>>>0)<($169>>>0);
       if ($170) {
        $171 = ((($168)) + 1|0);
        HEAP32[$3>>2] = $171;
        $172 = HEAP8[$168>>0]|0;
        $173 = $172&255;
        $c$5$be = $173;
       } else {
        $174 = (___shgetc($f)|0);
        $c$5$be = $174;
       }
       $175 = ((80492) + ($c$5$be)|0);
       $176 = HEAP8[$175>>0]|0;
       $177 = $176&255;
       $178 = ($177>>>0)>=($$116>>>0);
       $179 = ($164>>>0)>($150>>>0);
       $180 = ($167>>>0)>($149>>>0);
       $181 = ($164|0)==($150|0);
       $182 = $181 & $180;
       $183 = $179 | $182;
       $or$cond = $178 | $183;
       if ($or$cond) {
        $$115 = $$116;$292 = $167;$293 = $164;$c$8 = $c$5$be;
        label = 72;
        break L63;
       } else {
        $161 = $167;$162 = $164;$166 = $176;
       }
      }
     }
     $119 = ((80492) + ($c$117)|0);
     $120 = HEAP8[$119>>0]|0;
     $121 = $120&255;
     $122 = ($121>>>0)<($$116>>>0);
     if ($122) {
      $186 = $121;$x$254 = 0;
      while(1) {
       $184 = Math_imul($x$254, $$116)|0;
       $185 = (($186) + ($184))|0;
       $187 = HEAP32[$3>>2]|0;
       $188 = HEAP32[$4>>2]|0;
       $189 = ($187>>>0)<($188>>>0);
       if ($189) {
        $190 = ((($187)) + 1|0);
        HEAP32[$3>>2] = $190;
        $191 = HEAP8[$187>>0]|0;
        $192 = $191&255;
        $c$6$be = $192;
       } else {
        $193 = (___shgetc($f)|0);
        $c$6$be = $193;
       }
       $194 = ((80492) + ($c$6$be)|0);
       $195 = HEAP8[$194>>0]|0;
       $196 = $195&255;
       $197 = ($196>>>0)<($$116>>>0);
       $198 = ($185>>>0)<(119304647);
       $199 = $198 & $197;
       if ($199) {
        $186 = $196;$x$254 = $185;
       } else {
        $$lcssa110 = $185;$$lcssa111 = $195;$c$6$be$lcssa = $c$6$be;
        break;
       }
      }
      $201 = $$lcssa111;$294 = $$lcssa110;$295 = 0;$c$6$lcssa = $c$6$be$lcssa;
     } else {
      $201 = $120;$294 = 0;$295 = 0;$c$6$lcssa = $c$117;
     }
     $200 = $201&255;
     $202 = ($200>>>0)<($$116>>>0);
     if ($202) {
      $203 = (___udivdi3(-1,-1,($$116|0),0)|0);
      $204 = tempRet0;
      $205 = $295;$207 = $294;$215 = $201;$c$742 = $c$6$lcssa;
      while(1) {
       $206 = ($205>>>0)>($204>>>0);
       $208 = ($207>>>0)>($203>>>0);
       $209 = ($205|0)==($204|0);
       $210 = $209 & $208;
       $211 = $206 | $210;
       if ($211) {
        $$115 = $$116;$292 = $207;$293 = $205;$c$8 = $c$742;
        label = 72;
        break L63;
       }
       $212 = (___muldi3(($207|0),($205|0),($$116|0),0)|0);
       $213 = tempRet0;
       $214 = $215&255;
       $216 = $214 ^ -1;
       $217 = ($213>>>0)>(4294967295);
       $218 = ($212>>>0)>($216>>>0);
       $219 = ($213|0)==(-1);
       $220 = $219 & $218;
       $221 = $217 | $220;
       if ($221) {
        $$115 = $$116;$292 = $207;$293 = $205;$c$8 = $c$742;
        label = 72;
        break L63;
       }
       $222 = (_i64Add(($214|0),0,($212|0),($213|0))|0);
       $223 = tempRet0;
       $224 = HEAP32[$3>>2]|0;
       $225 = HEAP32[$4>>2]|0;
       $226 = ($224>>>0)<($225>>>0);
       if ($226) {
        $227 = ((($224)) + 1|0);
        HEAP32[$3>>2] = $227;
        $228 = HEAP8[$224>>0]|0;
        $229 = $228&255;
        $c$7$be = $229;
       } else {
        $230 = (___shgetc($f)|0);
        $c$7$be = $230;
       }
       $231 = ((80492) + ($c$7$be)|0);
       $232 = HEAP8[$231>>0]|0;
       $233 = $232&255;
       $234 = ($233>>>0)<($$116>>>0);
       if ($234) {
        $205 = $223;$207 = $222;$215 = $232;$c$742 = $c$7$be;
       } else {
        $$115 = $$116;$292 = $222;$293 = $223;$c$8 = $c$7$be;
        label = 72;
        break;
       }
      }
     } else {
      $$115 = $$116;$292 = $294;$293 = $295;$c$8 = $c$6$lcssa;
      label = 72;
     }
    }
   } while(0);
   if ((label|0) == 72) {
    $235 = ((80492) + ($c$8)|0);
    $236 = HEAP8[$235>>0]|0;
    $237 = $236&255;
    $238 = ($237>>>0)<($$115>>>0);
    if ($238) {
     while(1) {
      $239 = HEAP32[$3>>2]|0;
      $240 = HEAP32[$4>>2]|0;
      $241 = ($239>>>0)<($240>>>0);
      if ($241) {
       $242 = ((($239)) + 1|0);
       HEAP32[$3>>2] = $242;
       $243 = HEAP8[$239>>0]|0;
       $244 = $243&255;
       $c$9$be = $244;
      } else {
       $245 = (___shgetc($f)|0);
       $c$9$be = $245;
      }
      $246 = ((80492) + ($c$9$be)|0);
      $247 = HEAP8[$246>>0]|0;
      $248 = $247&255;
      $249 = ($248>>>0)<($$115>>>0);
      if (!($249)) {
       break;
      }
     }
     $250 = (___errno_location()|0);
     HEAP32[$250>>2] = 34;
     $251 = $0 & 1;
     $252 = ($251|0)==(0);
     $253 = (0)==(0);
     $254 = $252 & $253;
     $neg$0$ = $254 ? $neg$0 : 0;
     $259 = $1;$261 = $0;$neg$1 = $neg$0$;
    } else {
     $259 = $293;$261 = $292;$neg$1 = $neg$0;
    }
   }
   $255 = HEAP32[$4>>2]|0;
   $256 = ($255|0)==(0|0);
   if (!($256)) {
    $257 = HEAP32[$3>>2]|0;
    $258 = ((($257)) + -1|0);
    HEAP32[$3>>2] = $258;
   }
   $260 = ($259>>>0)<($1>>>0);
   $262 = ($261>>>0)<($0>>>0);
   $263 = ($259|0)==($1|0);
   $264 = $263 & $262;
   $265 = $260 | $264;
   if (!($265)) {
    $266 = $0 & 1;
    $267 = ($266|0)!=(0);
    $268 = (0)!=(0);
    $269 = $267 | $268;
    $270 = ($neg$1|0)!=(0);
    $or$cond12 = $269 | $270;
    if (!($or$cond12)) {
     $271 = (___errno_location()|0);
     HEAP32[$271>>2] = 34;
     $272 = (_i64Add(($0|0),($1|0),-1,-1)|0);
     $273 = tempRet0;
     $286 = $273;$287 = $272;
     break;
    }
    $274 = ($259>>>0)>($1>>>0);
    $275 = ($261>>>0)>($0>>>0);
    $276 = ($259|0)==($1|0);
    $277 = $276 & $275;
    $278 = $274 | $277;
    if ($278) {
     $279 = (___errno_location()|0);
     HEAP32[$279>>2] = 34;
     $286 = $1;$287 = $0;
     break;
    }
   }
   $280 = ($neg$1|0)<(0);
   $281 = $280 << 31 >> 31;
   $282 = $261 ^ $neg$1;
   $283 = $259 ^ $281;
   $284 = (_i64Subtract(($282|0),($283|0),($neg$1|0),($281|0))|0);
   $285 = tempRet0;
   $286 = $285;$287 = $284;
  }
 } while(0);
 tempRet0 = ($286);
 return ($287|0);
}
function ___floatscan($f,$prec,$pok) {
 $f = $f|0;
 $prec = $prec|0;
 $pok = $pok|0;
 var $$$i = 0, $$0 = 0.0, $$010$i = 0, $$012$i = 0, $$07$i = 0, $$0710$i = 0, $$0711$i = 0, $$1$i = 0.0, $$111$be$i = 0, $$111$ph$i = 0, $$16$i = 0, $$2$i = 0, $$24$i = 0, $$3$be$i = 0, $$3$lcssa$i = 0, $$3112$i = 0, $$in = 0, $$k$0$i = 0, $$lcssa = 0, $$lcssa258 = 0;
 var $$lcssa258$lcssa = 0, $$lcssa259 = 0, $$lcssa259$lcssa = 0, $$lcssa265 = 0, $$lcssa266 = 0, $$lcssa267 = 0, $$lcssa277 = 0, $$lnz$0$i = 0, $$neg$i = 0, $$neg40$i = 0, $$not$i = 0, $$old8 = 0, $$pn$i = 0.0, $$pre$i = 0, $$pre$i17 = 0, $$pre$phi43$iZ2D = 0.0, $$pre42$i = 0.0, $$promoted$i = 0, $$sink$off0$i = 0, $0 = 0;
 var $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0;
 var $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0;
 var $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0;
 var $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0;
 var $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0.0, $183 = 0.0, $184 = 0.0, $185 = 0.0, $186 = 0, $187 = 0, $188 = 0.0, $189 = 0.0;
 var $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0;
 var $207 = 0, $208 = 0, $209 = 0.0, $21 = 0, $210 = 0.0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0;
 var $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0;
 var $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0.0, $259 = 0.0, $26 = 0, $260 = 0;
 var $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0.0, $268 = 0.0, $269 = 0.0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0;
 var $28 = 0, $280 = 0.0, $281 = 0.0, $282 = 0.0, $283 = 0, $284 = 0, $285 = 0.0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0;
 var $298 = 0, $299 = 0, $3 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0.0, $31 = 0, $310 = 0.0, $311 = 0.0, $312 = 0, $313 = 0, $314 = 0;
 var $315 = 0, $316 = 0, $317 = 0.0, $318 = 0.0, $319 = 0.0, $32 = 0, $320 = 0.0, $321 = 0.0, $322 = 0.0, $323 = 0, $324 = 0, $325 = 0.0, $326 = 0, $327 = 0, $328 = 0, $329 = 0, $33 = 0, $330 = 0, $331 = 0, $332 = 0;
 var $333 = 0, $334 = 0, $335 = 0, $336 = 0, $337 = 0, $338 = 0, $339 = 0, $34 = 0, $340 = 0, $341 = 0, $342 = 0, $343 = 0, $344 = 0, $345 = 0, $346 = 0, $347 = 0, $348 = 0, $349 = 0, $35 = 0, $350 = 0;
 var $351 = 0, $352 = 0, $353 = 0, $354 = 0, $355 = 0, $356 = 0, $357 = 0, $358 = 0, $359 = 0, $36 = 0, $360 = 0, $361 = 0, $362 = 0, $363 = 0, $364 = 0, $365 = 0, $366 = 0, $367 = 0, $368 = 0, $369 = 0;
 var $37 = 0, $370 = 0, $371 = 0, $372 = 0, $373 = 0, $374 = 0, $375 = 0, $376 = 0, $377 = 0, $378 = 0, $379 = 0, $38 = 0, $380 = 0, $381 = 0, $382 = 0, $383 = 0, $384 = 0, $385 = 0, $386 = 0, $387 = 0;
 var $388 = 0, $389 = 0, $39 = 0, $390 = 0, $391 = 0, $392 = 0, $393 = 0, $394 = 0, $395 = 0, $396 = 0, $397 = 0, $398 = 0, $399 = 0, $4 = 0, $40 = 0, $400 = 0, $401 = 0, $402 = 0, $403 = 0, $404 = 0;
 var $405 = 0, $406 = 0, $407 = 0, $408 = 0, $409 = 0, $41 = 0, $410 = 0, $411 = 0, $412 = 0, $413 = 0, $414 = 0, $415 = 0, $416 = 0, $417 = 0, $418 = 0, $419 = 0, $42 = 0, $420 = 0, $421 = 0, $422 = 0;
 var $423 = 0, $424 = 0.0, $425 = 0.0, $426 = 0, $427 = 0, $428 = 0, $429 = 0, $43 = 0, $430 = 0, $431 = 0, $432 = 0, $433 = 0, $434 = 0, $435 = 0, $436 = 0, $437 = 0, $438 = 0, $439 = 0, $44 = 0, $440 = 0;
 var $441 = 0.0, $442 = 0.0, $443 = 0.0, $444 = 0, $445 = 0, $446 = 0, $447 = 0, $448 = 0, $449 = 0, $45 = 0, $450 = 0, $451 = 0, $452 = 0, $453 = 0.0, $454 = 0.0, $455 = 0.0, $456 = 0, $457 = 0, $458 = 0, $459 = 0;
 var $46 = 0, $460 = 0, $461 = 0, $462 = 0, $463 = 0, $464 = 0, $465 = 0.0, $466 = 0.0, $467 = 0.0, $468 = 0, $469 = 0, $47 = 0, $470 = 0, $471 = 0, $472 = 0, $473 = 0, $474 = 0, $475 = 0, $476 = 0, $477 = 0;
 var $478 = 0, $479 = 0.0, $48 = 0, $480 = 0, $481 = 0.0, $482 = 0.0, $483 = 0, $484 = 0.0, $485 = 0, $486 = 0.0, $487 = 0.0, $488 = 0, $489 = 0, $49 = 0, $490 = 0, $491 = 0.0, $492 = 0.0, $493 = 0, $494 = 0, $495 = 0;
 var $496 = 0, $497 = 0.0, $498 = 0.0, $499 = 0.0, $5 = 0, $50 = 0.0, $500 = 0, $501 = 0, $502 = 0, $503 = 0.0, $504 = 0.0, $505 = 0, $506 = 0, $507 = 0, $508 = 0, $509 = 0, $51 = 0.0, $510 = 0, $511 = 0, $512 = 0;
 var $513 = 0, $514 = 0, $515 = 0, $516 = 0, $517 = 0, $518 = 0, $519 = 0, $52 = 0.0, $520 = 0, $521 = 0, $522 = 0, $523 = 0, $524 = 0, $525 = 0, $526 = 0, $527 = 0, $528 = 0, $529 = 0, $53 = 0, $530 = 0;
 var $531 = 0, $532 = 0, $533 = 0, $534 = 0, $535 = 0, $536 = 0, $537 = 0, $538 = 0, $539 = 0, $54 = 0, $540 = 0, $541 = 0, $542 = 0, $543 = 0, $544 = 0, $545 = 0, $546 = 0, $547 = 0, $548 = 0, $549 = 0;
 var $55 = 0, $550 = 0, $551 = 0, $552 = 0, $553 = 0, $554 = 0, $555 = 0, $556 = 0, $557 = 0, $558 = 0, $559 = 0, $56 = 0, $560 = 0, $561 = 0, $562 = 0, $563 = 0, $564 = 0, $565 = 0, $566 = 0, $567 = 0;
 var $568 = 0, $569 = 0, $57 = 0, $570 = 0, $571 = 0, $572 = 0, $573 = 0, $574 = 0, $575 = 0, $576 = 0, $577 = 0, $578 = 0, $579 = 0, $58 = 0, $580 = 0, $581 = 0, $582 = 0, $583 = 0, $584 = 0, $585 = 0;
 var $586 = 0, $587 = 0, $588 = 0, $589 = 0, $59 = 0, $590 = 0, $591 = 0, $592 = 0, $593 = 0, $594 = 0, $595 = 0, $596 = 0, $597 = 0, $598 = 0, $599 = 0, $6 = 0, $60 = 0, $600 = 0, $601 = 0, $602 = 0;
 var $603 = 0, $604 = 0, $605 = 0, $606 = 0, $607 = 0, $608 = 0, $609 = 0, $61 = 0, $610 = 0, $611 = 0, $612 = 0, $613 = 0, $614 = 0, $615 = 0, $616 = 0, $617 = 0, $618 = 0.0, $619 = 0, $62 = 0, $620 = 0;
 var $621 = 0, $622 = 0, $623 = 0.0, $624 = 0.0, $625 = 0.0, $626 = 0, $627 = 0.0, $628 = 0.0, $629 = 0.0, $63 = 0, $630 = 0.0, $631 = 0, $632 = 0, $633 = 0, $634 = 0, $635 = 0, $636 = 0, $637 = 0, $638 = 0, $639 = 0;
 var $64 = 0, $640 = 0, $641 = 0.0, $642 = 0.0, $643 = 0.0, $644 = 0, $645 = 0.0, $646 = 0.0, $647 = 0, $648 = 0, $649 = 0, $65 = 0, $650 = 0.0, $651 = 0.0, $652 = 0.0, $653 = 0.0, $654 = 0, $655 = 0, $656 = 0.0, $657 = 0;
 var $658 = 0.0, $659 = 0.0, $66 = 0, $660 = 0.0, $661 = 0, $662 = 0, $663 = 0, $664 = 0, $665 = 0.0, $666 = 0, $667 = 0, $668 = 0, $669 = 0, $67 = 0, $670 = 0.0, $671 = 0, $672 = 0, $673 = 0, $674 = 0, $675 = 0;
 var $676 = 0, $677 = 0.0, $678 = 0, $679 = 0, $68 = 0, $680 = 0, $681 = 0, $682 = 0.0, $683 = 0, $684 = 0, $685 = 0.0, $686 = 0.0, $687 = 0, $688 = 0, $689 = 0, $69 = 0, $690 = 0, $691 = 0, $692 = 0, $693 = 0;
 var $694 = 0, $695 = 0, $696 = 0, $697 = 0, $698 = 0, $699 = 0, $7 = 0, $70 = 0, $700 = 0, $701 = 0, $702 = 0, $703 = 0, $704 = 0, $705 = 0, $706 = 0, $707 = 0, $708 = 0, $709 = 0, $71 = 0, $710 = 0;
 var $711 = 0, $712 = 0, $713 = 0, $714 = 0, $715 = 0, $716 = 0, $717 = 0, $718 = 0, $719 = 0, $72 = 0, $720 = 0, $721 = 0, $722 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0;
 var $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0;
 var $98 = 0, $99 = 0, $a$0$lcssa161$i = 0, $a$093$i = 0, $a$1$i = 0, $a$1$i$lcssa = 0, $a$2$ph46$i = 0, $a$4$i = 0, $a$4$i$lcssa250 = 0, $a$4$i251 = 0, $a$4$ph$i = 0, $a$4$ph167$i = 0, $a$586$i = 0, $a$6$i = 0, $a$6$i$lcssa = 0, $a$6$i$lcssa$lcssa = 0, $bias$0$i = 0.0, $bias$0$i25 = 0.0, $bits$0$ph = 0, $brmerge$i28 = 0;
 var $c$0 = 0, $c$0$i = 0, $c$1$lcssa = 0, $c$1$ph$i = 0, $c$179 = 0, $c$2 = 0, $c$2$i = 0, $c$2$lcssa$i = 0, $c$377 = 0, $c$4 = 0, $c$5 = 0, $c$6 = 0, $carry$095$i = 0, $carry1$0$i = 0, $carry1$1$i = 0, $carry1$1$i$lcssa = 0, $carry1$1$i$lcssa$lcssa = 0, $carry4$089$i = 0, $cond$i = 0, $d$0$i = 0;
 var $denormal$0$i = 0, $denormal$1$i = 0, $denormal$2$i = 0, $e2$0$i19 = 0, $e2$0$ph$i = 0, $e2$1$i = 0, $e2$1$i248 = 0, $e2$1$ph$i = 0, $e2$1$ph166$i = 0, $e2$3$i = 0, $e2$4$i = 0, $emin$0$ph = 0, $exitcond151$i = 0, $frac$0$i = 0.0, $frac$1$i = 0.0, $frac$3$i = 0.0, $gotdig$0$i = 0, $gotdig$0$i$lcssa244 = 0, $gotdig$0$i12 = 0, $gotdig$0$i12$lcssa275 = 0;
 var $gotdig$2$i = 0, $gotdig$2$i$lcssa = 0, $gotdig$2$i13 = 0, $gotdig$3$i = 0, $gotdig$3$lcssa$i = 0, $gotdig$3108$i = 0, $gotdig$3108$i$lcssa = 0, $gotdig$4$i = 0, $gotrad$0$i = 0, $gotrad$0$i$lcssa = 0, $gotrad$0$i14 = 0, $gotrad$1$i = 0, $gotrad$1$lcssa$i = 0, $gotrad$1109$i = 0, $gotrad$2$i = 0, $gottail$0$i = 0, $gottail$1$i = 0, $gottail$2$i = 0, $i$0$lcssa = 0, $i$078 = 0;
 var $i$1 = 0, $i$276 = 0, $i$3 = 0, $i$4 = 0, $i$4$lcssa = 0, $j$0$lcssa$i = 0, $j$0111$i = 0, $j$0111$i$lcssa = 0, $j$075$i = 0, $j$076$i = 0, $j$077$i = 0, $j$2$i = 0, $j$3102$i = 0, $k$0$lcssa$i = 0, $k$0110$i = 0, $k$0110$i$lcssa = 0, $k$071$i = 0, $k$072$i = 0, $k$073$i = 0, $k$2$i = 0;
 var $k$3$i = 0, $k$494$i = 0, $k$5$i = 0, $k$5$in$i = 0, $k$5$z$2$i = 0, $k$687$i = 0, $lnz$0$lcssa$i = 0, $lnz$0107$i = 0, $lnz$0107$i$lcssa = 0, $lnz$065$i = 0, $lnz$066$i = 0, $lnz$067$i = 0, $lnz$2$i = 0, $or$cond = 0, $or$cond$i = 0, $or$cond$i16 = 0, $or$cond18$i = 0, $or$cond192$i = 0, $or$cond20$i = 0, $or$cond21$i = 0;
 var $or$cond22$i = 0, $or$cond25$i = 0, $or$cond26$i = 0, $or$cond3$i = 0, $or$cond4$i = 0, $or$cond5 = 0, $or$cond6$i = 0, $or$cond7 = 0, $or$cond9 = 0, $or$cond9$i = 0, $or$cond9$i27 = 0, $rp$0$lcssa162$i = 0, $rp$092$i = 0, $rp$1$i18 = 0, $rp$1$i18$lcssa = 0, $rp$2$ph44$i = 0, $rp$4$ph$i = 0, $rp$4$ph42$i = 0, $rp$585$i = 0, $rp$6$i = 0;
 var $rp$6$i$lcssa = 0, $rp$6$i$lcssa$lcssa = 0, $scale$0$i = 0.0, $scale$1$i = 0.0, $scale$2$i = 0.0, $sign$0 = 0, $storemerge$i = 0, $sum$i = 0, $x$0$i = 0, $x$0$i$lcssa = 0, $x$1$i = 0, $x$2$i = 0, $x$3$lcssa$i = 0, $x$324$i = 0, $x$4$lcssa$i = 0, $x$419$i = 0, $x$5$i = 0, $x$6$i = 0, $x$i = 0, $y$0$i = 0.0;
 var $y$0$i$lcssa = 0.0, $y$1$i = 0.0, $y$1$i24 = 0.0, $y$2$i = 0.0, $y$2$i26 = 0.0, $y$3$i = 0.0, $y$3$lcssa$i = 0.0, $y$320$i = 0.0, $y$4$i = 0.0, $y$5$i = 0.0, $z$0$i = 0, $z$1$i = 0, $z$1$ph45$i = 0, $z$10$1$i = 0, $z$10$i = 0, $z$2$i = 0, $z$3$i = 0, $z$3$i$lcssa = 0, $z$3$i$lcssa$lcssa = 0, $z$4$i = 0;
 var $z$6$ph$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 512|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $x$i = sp;
 switch ($prec|0) {
 case 0:  {
  $bits$0$ph = 24;$emin$0$ph = -149;
  label = 4;
  break;
 }
 case 1:  {
  $bits$0$ph = 53;$emin$0$ph = -1074;
  label = 4;
  break;
 }
 case 2:  {
  $bits$0$ph = 53;$emin$0$ph = -1074;
  label = 4;
  break;
 }
 default: {
  $$0 = 0.0;
 }
 }
 L4: do {
  if ((label|0) == 4) {
   $0 = ((($f)) + 4|0);
   $1 = ((($f)) + 100|0);
   while(1) {
    $2 = HEAP32[$0>>2]|0;
    $3 = HEAP32[$1>>2]|0;
    $4 = ($2>>>0)<($3>>>0);
    if ($4) {
     $5 = ((($2)) + 1|0);
     HEAP32[$0>>2] = $5;
     $6 = HEAP8[$2>>0]|0;
     $7 = $6&255;
     $9 = $7;
    } else {
     $8 = (___shgetc($f)|0);
     $9 = $8;
    }
    $10 = (_isspace($9)|0);
    $11 = ($10|0)==(0);
    if ($11) {
     $$lcssa277 = $9;
     break;
    }
   }
   $12 = ($$lcssa277|0)==(45);
   L13: do {
    switch ($$lcssa277|0) {
    case 43: case 45:  {
     $13 = $12&1;
     $14 = $13 << 1;
     $15 = (1 - ($14))|0;
     $16 = HEAP32[$0>>2]|0;
     $17 = HEAP32[$1>>2]|0;
     $18 = ($16>>>0)<($17>>>0);
     if ($18) {
      $19 = ((($16)) + 1|0);
      HEAP32[$0>>2] = $19;
      $20 = HEAP8[$16>>0]|0;
      $21 = $20&255;
      $c$0 = $21;$sign$0 = $15;
      break L13;
     } else {
      $22 = (___shgetc($f)|0);
      $c$0 = $22;$sign$0 = $15;
      break L13;
     }
     break;
    }
    default: {
     $c$0 = $$lcssa277;$sign$0 = 1;
    }
    }
   } while(0);
   $c$179 = $c$0;$i$078 = 0;
   while(1) {
    $23 = $c$179 | 32;
    $24 = (80757 + ($i$078)|0);
    $25 = HEAP8[$24>>0]|0;
    $26 = $25 << 24 >> 24;
    $27 = ($23|0)==($26|0);
    if (!($27)) {
     $c$1$lcssa = $c$179;$i$0$lcssa = $i$078;
     break;
    }
    $28 = ($i$078>>>0)<(7);
    do {
     if ($28) {
      $29 = HEAP32[$0>>2]|0;
      $30 = HEAP32[$1>>2]|0;
      $31 = ($29>>>0)<($30>>>0);
      if ($31) {
       $32 = ((($29)) + 1|0);
       HEAP32[$0>>2] = $32;
       $33 = HEAP8[$29>>0]|0;
       $34 = $33&255;
       $c$2 = $34;
       break;
      } else {
       $35 = (___shgetc($f)|0);
       $c$2 = $35;
       break;
      }
     } else {
      $c$2 = $c$179;
     }
    } while(0);
    $36 = (($i$078) + 1)|0;
    $37 = ($36>>>0)<(8);
    if ($37) {
     $c$179 = $c$2;$i$078 = $36;
    } else {
     $c$1$lcssa = $c$2;$i$0$lcssa = $36;
     break;
    }
   }
   L29: do {
    switch ($i$0$lcssa|0) {
    case 8:  {
     break;
    }
    case 3:  {
     label = 23;
     break;
    }
    default: {
     $38 = ($i$0$lcssa>>>0)>(3);
     $39 = ($pok|0)!=(0);
     $or$cond5 = $39 & $38;
     if ($or$cond5) {
      $40 = ($i$0$lcssa|0)==(8);
      if ($40) {
       break L29;
      } else {
       label = 23;
       break L29;
      }
     }
     $53 = ($i$0$lcssa|0)==(0);
     L34: do {
      if ($53) {
       $c$377 = $c$1$lcssa;$i$276 = 0;
       while(1) {
        $54 = $c$377 | 32;
        $55 = (80766 + ($i$276)|0);
        $56 = HEAP8[$55>>0]|0;
        $57 = $56 << 24 >> 24;
        $58 = ($54|0)==($57|0);
        if (!($58)) {
         $c$5 = $c$377;$i$3 = $i$276;
         break L34;
        }
        $59 = ($i$276>>>0)<(2);
        do {
         if ($59) {
          $60 = HEAP32[$0>>2]|0;
          $61 = HEAP32[$1>>2]|0;
          $62 = ($60>>>0)<($61>>>0);
          if ($62) {
           $63 = ((($60)) + 1|0);
           HEAP32[$0>>2] = $63;
           $64 = HEAP8[$60>>0]|0;
           $65 = $64&255;
           $c$4 = $65;
           break;
          } else {
           $66 = (___shgetc($f)|0);
           $c$4 = $66;
           break;
          }
         } else {
          $c$4 = $c$377;
         }
        } while(0);
        $67 = (($i$276) + 1)|0;
        $68 = ($67>>>0)<(3);
        if ($68) {
         $c$377 = $c$4;$i$276 = $67;
        } else {
         $c$5 = $c$4;$i$3 = $67;
         break;
        }
       }
      } else {
       $c$5 = $c$1$lcssa;$i$3 = $i$0$lcssa;
      }
     } while(0);
     switch ($i$3|0) {
     case 3:  {
      $69 = HEAP32[$0>>2]|0;
      $70 = HEAP32[$1>>2]|0;
      $71 = ($69>>>0)<($70>>>0);
      if ($71) {
       $72 = ((($69)) + 1|0);
       HEAP32[$0>>2] = $72;
       $73 = HEAP8[$69>>0]|0;
       $74 = $73&255;
       $76 = $74;
      } else {
       $75 = (___shgetc($f)|0);
       $76 = $75;
      }
      $77 = ($76|0)==(40);
      if ($77) {
       $i$4 = 1;
      } else {
       $78 = HEAP32[$1>>2]|0;
       $79 = ($78|0)==(0|0);
       if ($79) {
        $$0 = nan;
        break L4;
       }
       $80 = HEAP32[$0>>2]|0;
       $81 = ((($80)) + -1|0);
       HEAP32[$0>>2] = $81;
       $$0 = nan;
       break L4;
      }
      while(1) {
       $82 = HEAP32[$0>>2]|0;
       $83 = HEAP32[$1>>2]|0;
       $84 = ($82>>>0)<($83>>>0);
       if ($84) {
        $85 = ((($82)) + 1|0);
        HEAP32[$0>>2] = $85;
        $86 = HEAP8[$82>>0]|0;
        $87 = $86&255;
        $90 = $87;
       } else {
        $88 = (___shgetc($f)|0);
        $90 = $88;
       }
       $89 = (($90) + -48)|0;
       $91 = ($89>>>0)<(10);
       $92 = (($90) + -65)|0;
       $93 = ($92>>>0)<(26);
       $or$cond = $91 | $93;
       if (!($or$cond)) {
        $94 = (($90) + -97)|0;
        $95 = ($94>>>0)<(26);
        $96 = ($90|0)==(95);
        $or$cond7 = $96 | $95;
        if (!($or$cond7)) {
         $$lcssa = $90;$i$4$lcssa = $i$4;
         break;
        }
       }
       $108 = (($i$4) + 1)|0;
       $i$4 = $108;
      }
      $97 = ($$lcssa|0)==(41);
      if ($97) {
       $$0 = nan;
       break L4;
      }
      $98 = HEAP32[$1>>2]|0;
      $99 = ($98|0)==(0|0);
      if (!($99)) {
       $100 = HEAP32[$0>>2]|0;
       $101 = ((($100)) + -1|0);
       HEAP32[$0>>2] = $101;
      }
      if (!($39)) {
       $103 = (___errno_location()|0);
       HEAP32[$103>>2] = 22;
       ___shlim($f,0);
       $$0 = 0.0;
       break L4;
      }
      $102 = ($i$4$lcssa|0)==(0);
      if ($102) {
       $$0 = nan;
       break L4;
      } else {
       $$in = $i$4$lcssa;
      }
      while(1) {
       $104 = (($$in) + -1)|0;
       if (!($99)) {
        $105 = HEAP32[$0>>2]|0;
        $106 = ((($105)) + -1|0);
        HEAP32[$0>>2] = $106;
       }
       $107 = ($104|0)==(0);
       if ($107) {
        $$0 = nan;
        break L4;
       } else {
        $$in = $104;
       }
      }
      break;
     }
     case 0:  {
      $114 = ($c$5|0)==(48);
      do {
       if ($114) {
        $115 = HEAP32[$0>>2]|0;
        $116 = HEAP32[$1>>2]|0;
        $117 = ($115>>>0)<($116>>>0);
        if ($117) {
         $118 = ((($115)) + 1|0);
         HEAP32[$0>>2] = $118;
         $119 = HEAP8[$115>>0]|0;
         $120 = $119&255;
         $123 = $120;
        } else {
         $121 = (___shgetc($f)|0);
         $123 = $121;
        }
        $122 = $123 | 32;
        $124 = ($122|0)==(120);
        if (!($124)) {
         $326 = HEAP32[$1>>2]|0;
         $327 = ($326|0)==(0|0);
         if ($327) {
          $c$6 = 48;
          break;
         }
         $328 = HEAP32[$0>>2]|0;
         $329 = ((($328)) + -1|0);
         HEAP32[$0>>2] = $329;
         $c$6 = 48;
         break;
        }
        $125 = HEAP32[$0>>2]|0;
        $126 = HEAP32[$1>>2]|0;
        $127 = ($125>>>0)<($126>>>0);
        if ($127) {
         $128 = ((($125)) + 1|0);
         HEAP32[$0>>2] = $128;
         $129 = HEAP8[$125>>0]|0;
         $130 = $129&255;
         $c$0$i = $130;$gotdig$0$i = 0;
        } else {
         $131 = (___shgetc($f)|0);
         $c$0$i = $131;$gotdig$0$i = 0;
        }
        L94: while(1) {
         switch ($c$0$i|0) {
         case 46:  {
          $gotdig$0$i$lcssa244 = $gotdig$0$i;
          label = 74;
          break L94;
          break;
         }
         case 48:  {
          break;
         }
         default: {
          $168 = 0;$170 = 0;$693 = 0;$694 = 0;$c$2$i = $c$0$i;$gotdig$2$i = $gotdig$0$i;$gotrad$0$i = 0;$gottail$0$i = 0;$scale$0$i = 1.0;$x$0$i = 0;$y$0$i = 0.0;
          break L94;
         }
         }
         $132 = HEAP32[$0>>2]|0;
         $133 = HEAP32[$1>>2]|0;
         $134 = ($132>>>0)<($133>>>0);
         if ($134) {
          $135 = ((($132)) + 1|0);
          HEAP32[$0>>2] = $135;
          $136 = HEAP8[$132>>0]|0;
          $137 = $136&255;
          $c$0$i = $137;$gotdig$0$i = 1;
          continue;
         } else {
          $138 = (___shgetc($f)|0);
          $c$0$i = $138;$gotdig$0$i = 1;
          continue;
         }
        }
        if ((label|0) == 74) {
         $139 = HEAP32[$0>>2]|0;
         $140 = HEAP32[$1>>2]|0;
         $141 = ($139>>>0)<($140>>>0);
         if ($141) {
          $142 = ((($139)) + 1|0);
          HEAP32[$0>>2] = $142;
          $143 = HEAP8[$139>>0]|0;
          $144 = $143&255;
          $c$1$ph$i = $144;
         } else {
          $145 = (___shgetc($f)|0);
          $c$1$ph$i = $145;
         }
         $146 = ($c$1$ph$i|0)==(48);
         if ($146) {
          $154 = 0;$155 = 0;
          while(1) {
           $147 = HEAP32[$0>>2]|0;
           $148 = HEAP32[$1>>2]|0;
           $149 = ($147>>>0)<($148>>>0);
           if ($149) {
            $150 = ((($147)) + 1|0);
            HEAP32[$0>>2] = $150;
            $151 = HEAP8[$147>>0]|0;
            $152 = $151&255;
            $158 = $152;
           } else {
            $153 = (___shgetc($f)|0);
            $158 = $153;
           }
           $156 = (_i64Add(($154|0),($155|0),-1,-1)|0);
           $157 = tempRet0;
           $159 = ($158|0)==(48);
           if ($159) {
            $154 = $156;$155 = $157;
           } else {
            $168 = 0;$170 = 0;$693 = $156;$694 = $157;$c$2$i = $158;$gotdig$2$i = 1;$gotrad$0$i = 1;$gottail$0$i = 0;$scale$0$i = 1.0;$x$0$i = 0;$y$0$i = 0.0;
            break;
           }
          }
         } else {
          $168 = 0;$170 = 0;$693 = 0;$694 = 0;$c$2$i = $c$1$ph$i;$gotdig$2$i = $gotdig$0$i$lcssa244;$gotrad$0$i = 1;$gottail$0$i = 0;$scale$0$i = 1.0;$x$0$i = 0;$y$0$i = 0.0;
         }
        }
        while(1) {
         $160 = (($c$2$i) + -48)|0;
         $161 = ($160>>>0)<(10);
         $$pre$i = $c$2$i | 32;
         if ($161) {
          label = 86;
         } else {
          $162 = (($$pre$i) + -97)|0;
          $163 = ($162>>>0)<(6);
          $164 = ($c$2$i|0)==(46);
          $or$cond6$i = $164 | $163;
          if (!($or$cond6$i)) {
           $212 = $693;$213 = $170;$215 = $694;$216 = $168;$c$2$lcssa$i = $c$2$i;$gotdig$2$i$lcssa = $gotdig$2$i;$gotrad$0$i$lcssa = $gotrad$0$i;$x$0$i$lcssa = $x$0$i;$y$0$i$lcssa = $y$0$i;
           break;
          }
          if ($164) {
           $165 = ($gotrad$0$i|0)==(0);
           if ($165) {
            $695 = $170;$696 = $168;$697 = $170;$698 = $168;$gotdig$3$i = $gotdig$2$i;$gotrad$1$i = 1;$gottail$2$i = $gottail$0$i;$scale$2$i = $scale$0$i;$x$2$i = $x$0$i;$y$2$i = $y$0$i;
           } else {
            $212 = $693;$213 = $170;$215 = $694;$216 = $168;$c$2$lcssa$i = 46;$gotdig$2$i$lcssa = $gotdig$2$i;$gotrad$0$i$lcssa = $gotrad$0$i;$x$0$i$lcssa = $x$0$i;$y$0$i$lcssa = $y$0$i;
            break;
           }
          } else {
           label = 86;
          }
         }
         if ((label|0) == 86) {
          label = 0;
          $166 = ($c$2$i|0)>(57);
          $167 = (($$pre$i) + -87)|0;
          $d$0$i = $166 ? $167 : $160;
          $169 = ($168|0)<(0);
          $171 = ($170>>>0)<(8);
          $172 = ($168|0)==(0);
          $173 = $172 & $171;
          $174 = $169 | $173;
          do {
           if ($174) {
            $175 = $x$0$i << 4;
            $176 = (($d$0$i) + ($175))|0;
            $gottail$1$i = $gottail$0$i;$scale$1$i = $scale$0$i;$x$1$i = $176;$y$1$i = $y$0$i;
           } else {
            $177 = ($168|0)<(0);
            $178 = ($170>>>0)<(14);
            $179 = ($168|0)==(0);
            $180 = $179 & $178;
            $181 = $177 | $180;
            if ($181) {
             $182 = (+($d$0$i|0));
             $183 = $scale$0$i * 0.0625;
             $184 = $183 * $182;
             $185 = $y$0$i + $184;
             $gottail$1$i = $gottail$0$i;$scale$1$i = $183;$x$1$i = $x$0$i;$y$1$i = $185;
             break;
            }
            $186 = ($d$0$i|0)==(0);
            $187 = ($gottail$0$i|0)!=(0);
            $or$cond$i = $187 | $186;
            if ($or$cond$i) {
             $gottail$1$i = $gottail$0$i;$scale$1$i = $scale$0$i;$x$1$i = $x$0$i;$y$1$i = $y$0$i;
            } else {
             $188 = $scale$0$i * 0.5;
             $189 = $y$0$i + $188;
             $gottail$1$i = 1;$scale$1$i = $scale$0$i;$x$1$i = $x$0$i;$y$1$i = $189;
            }
           }
          } while(0);
          $190 = (_i64Add(($170|0),($168|0),1,0)|0);
          $191 = tempRet0;
          $695 = $693;$696 = $694;$697 = $190;$698 = $191;$gotdig$3$i = 1;$gotrad$1$i = $gotrad$0$i;$gottail$2$i = $gottail$1$i;$scale$2$i = $scale$1$i;$x$2$i = $x$1$i;$y$2$i = $y$1$i;
         }
         $192 = HEAP32[$0>>2]|0;
         $193 = HEAP32[$1>>2]|0;
         $194 = ($192>>>0)<($193>>>0);
         if ($194) {
          $195 = ((($192)) + 1|0);
          HEAP32[$0>>2] = $195;
          $196 = HEAP8[$192>>0]|0;
          $197 = $196&255;
          $168 = $698;$170 = $697;$693 = $695;$694 = $696;$c$2$i = $197;$gotdig$2$i = $gotdig$3$i;$gotrad$0$i = $gotrad$1$i;$gottail$0$i = $gottail$2$i;$scale$0$i = $scale$2$i;$x$0$i = $x$2$i;$y$0$i = $y$2$i;
          continue;
         } else {
          $198 = (___shgetc($f)|0);
          $168 = $698;$170 = $697;$693 = $695;$694 = $696;$c$2$i = $198;$gotdig$2$i = $gotdig$3$i;$gotrad$0$i = $gotrad$1$i;$gottail$0$i = $gottail$2$i;$scale$0$i = $scale$2$i;$x$0$i = $x$2$i;$y$0$i = $y$2$i;
          continue;
         }
        }
        $199 = ($gotdig$2$i$lcssa|0)==(0);
        if ($199) {
         $200 = HEAP32[$1>>2]|0;
         $201 = ($200|0)==(0|0);
         if (!($201)) {
          $202 = HEAP32[$0>>2]|0;
          $203 = ((($202)) + -1|0);
          HEAP32[$0>>2] = $203;
         }
         $204 = ($pok|0)==(0);
         if ($204) {
          ___shlim($f,0);
         } else {
          if (!($201)) {
           $205 = HEAP32[$0>>2]|0;
           $206 = ((($205)) + -1|0);
           HEAP32[$0>>2] = $206;
           $207 = ($gotrad$0$i$lcssa|0)==(0);
           if (!($207)) {
            $208 = ((($205)) + -2|0);
            HEAP32[$0>>2] = $208;
           }
          }
         }
         $209 = (+($sign$0|0));
         $210 = $209 * 0.0;
         $$0 = $210;
         break L4;
        }
        $211 = ($gotrad$0$i$lcssa|0)==(0);
        $214 = $211 ? $213 : $212;
        $217 = $211 ? $216 : $215;
        $218 = ($216|0)<(0);
        $219 = ($213>>>0)<(8);
        $220 = ($216|0)==(0);
        $221 = $220 & $219;
        $222 = $218 | $221;
        if ($222) {
         $224 = $213;$225 = $216;$x$324$i = $x$0$i$lcssa;
         while(1) {
          $223 = $x$324$i << 4;
          $226 = (_i64Add(($224|0),($225|0),1,0)|0);
          $227 = tempRet0;
          $228 = ($227|0)<(0);
          $229 = ($226>>>0)<(8);
          $230 = ($227|0)==(0);
          $231 = $230 & $229;
          $232 = $228 | $231;
          if ($232) {
           $224 = $226;$225 = $227;$x$324$i = $223;
          } else {
           $x$3$lcssa$i = $223;
           break;
          }
         }
        } else {
         $x$3$lcssa$i = $x$0$i$lcssa;
        }
        $233 = $c$2$lcssa$i | 32;
        $234 = ($233|0)==(112);
        if ($234) {
         $235 = (_scanexp($f,$pok)|0);
         $236 = tempRet0;
         $237 = ($235|0)==(0);
         $238 = ($236|0)==(-2147483648);
         $239 = $237 & $238;
         if ($239) {
          $240 = ($pok|0)==(0);
          if ($240) {
           ___shlim($f,0);
           $$0 = 0.0;
           break L4;
          }
          $241 = HEAP32[$1>>2]|0;
          $242 = ($241|0)==(0|0);
          if ($242) {
           $253 = 0;$254 = 0;
          } else {
           $243 = HEAP32[$0>>2]|0;
           $244 = ((($243)) + -1|0);
           HEAP32[$0>>2] = $244;
           $253 = 0;$254 = 0;
          }
         } else {
          $253 = $235;$254 = $236;
         }
        } else {
         $245 = HEAP32[$1>>2]|0;
         $246 = ($245|0)==(0|0);
         if ($246) {
          $253 = 0;$254 = 0;
         } else {
          $247 = HEAP32[$0>>2]|0;
          $248 = ((($247)) + -1|0);
          HEAP32[$0>>2] = $248;
          $253 = 0;$254 = 0;
         }
        }
        $249 = (_bitshift64Shl(($214|0),($217|0),2)|0);
        $250 = tempRet0;
        $251 = (_i64Add(($249|0),($250|0),-32,-1)|0);
        $252 = tempRet0;
        $255 = (_i64Add(($251|0),($252|0),($253|0),($254|0))|0);
        $256 = tempRet0;
        $257 = ($x$3$lcssa$i|0)==(0);
        if ($257) {
         $258 = (+($sign$0|0));
         $259 = $258 * 0.0;
         $$0 = $259;
         break L4;
        }
        $260 = (0 - ($emin$0$ph))|0;
        $261 = ($256|0)>(0);
        $262 = ($255>>>0)>($260>>>0);
        $263 = ($256|0)==(0);
        $264 = $263 & $262;
        $265 = $261 | $264;
        if ($265) {
         $266 = (___errno_location()|0);
         HEAP32[$266>>2] = 34;
         $267 = (+($sign$0|0));
         $268 = $267 * 1.7976931348623157E+308;
         $269 = $268 * 1.7976931348623157E+308;
         $$0 = $269;
         break L4;
        }
        $270 = (($emin$0$ph) + -106)|0;
        $271 = ($270|0)<(0);
        $272 = $271 << 31 >> 31;
        $273 = ($256|0)<($272|0);
        $274 = ($255>>>0)<($270>>>0);
        $275 = ($256|0)==($272|0);
        $276 = $275 & $274;
        $277 = $273 | $276;
        if ($277) {
         $279 = (___errno_location()|0);
         HEAP32[$279>>2] = 34;
         $280 = (+($sign$0|0));
         $281 = $280 * 2.2250738585072014E-308;
         $282 = $281 * 2.2250738585072014E-308;
         $$0 = $282;
         break L4;
        }
        $278 = ($x$3$lcssa$i|0)>(-1);
        if ($278) {
         $288 = $255;$289 = $256;$x$419$i = $x$3$lcssa$i;$y$320$i = $y$0$i$lcssa;
         while(1) {
          $283 = !($y$320$i >= 0.5);
          $284 = $x$419$i << 1;
          $285 = $y$320$i + -1.0;
          $286 = $283&1;
          $287 = $286 | $284;
          $x$5$i = $287 ^ 1;
          $$pn$i = $283 ? $y$320$i : $285;
          $y$4$i = $y$320$i + $$pn$i;
          $290 = (_i64Add(($288|0),($289|0),-1,-1)|0);
          $291 = tempRet0;
          $292 = ($287|0)>(-1);
          if ($292) {
           $288 = $290;$289 = $291;$x$419$i = $x$5$i;$y$320$i = $y$4$i;
          } else {
           $297 = $290;$298 = $291;$x$4$lcssa$i = $x$5$i;$y$3$lcssa$i = $y$4$i;
           break;
          }
         }
        } else {
         $297 = $255;$298 = $256;$x$4$lcssa$i = $x$3$lcssa$i;$y$3$lcssa$i = $y$0$i$lcssa;
        }
        $293 = ($emin$0$ph|0)<(0);
        $294 = $293 << 31 >> 31;
        $295 = (_i64Subtract(32,0,($emin$0$ph|0),($294|0))|0);
        $296 = tempRet0;
        $299 = (_i64Add(($297|0),($298|0),($295|0),($296|0))|0);
        $300 = tempRet0;
        $301 = (0)>($300|0);
        $302 = ($bits$0$ph>>>0)>($299>>>0);
        $303 = (0)==($300|0);
        $304 = $303 & $302;
        $305 = $301 | $304;
        if ($305) {
         $306 = ($299|0)<(0);
         if ($306) {
          $$0710$i = 0;
          label = 127;
         } else {
          $$07$i = $299;
          label = 125;
         }
        } else {
         $$07$i = $bits$0$ph;
         label = 125;
        }
        if ((label|0) == 125) {
         $307 = ($$07$i|0)<(53);
         if ($307) {
          $$0710$i = $$07$i;
          label = 127;
         } else {
          $$pre42$i = (+($sign$0|0));
          $$0711$i = $$07$i;$$pre$phi43$iZ2D = $$pre42$i;$bias$0$i = 0.0;
         }
        }
        if ((label|0) == 127) {
         $308 = (84 - ($$0710$i))|0;
         $309 = (+_scalbn(1.0,$308));
         $310 = (+($sign$0|0));
         $311 = (+_copysignl($309,$310));
         $$0711$i = $$0710$i;$$pre$phi43$iZ2D = $310;$bias$0$i = $311;
        }
        $312 = ($$0711$i|0)<(32);
        $313 = $y$3$lcssa$i != 0.0;
        $or$cond4$i = $313 & $312;
        $314 = $x$4$lcssa$i & 1;
        $315 = ($314|0)==(0);
        $or$cond9$i = $315 & $or$cond4$i;
        $316 = $or$cond9$i&1;
        $x$6$i = (($316) + ($x$4$lcssa$i))|0;
        $y$5$i = $or$cond9$i ? 0.0 : $y$3$lcssa$i;
        $317 = (+($x$6$i>>>0));
        $318 = $$pre$phi43$iZ2D * $317;
        $319 = $bias$0$i + $318;
        $320 = $$pre$phi43$iZ2D * $y$5$i;
        $321 = $320 + $319;
        $322 = $321 - $bias$0$i;
        $323 = $322 != 0.0;
        if (!($323)) {
         $324 = (___errno_location()|0);
         HEAP32[$324>>2] = 34;
        }
        $325 = (+_scalbnl($322,$297));
        $$0 = $325;
        break L4;
       } else {
        $c$6 = $c$5;
       }
      } while(0);
      $sum$i = (($emin$0$ph) + ($bits$0$ph))|0;
      $330 = (0 - ($sum$i))|0;
      $$010$i = $c$6;$gotdig$0$i12 = 0;
      L184: while(1) {
       switch ($$010$i|0) {
       case 46:  {
        $gotdig$0$i12$lcssa275 = $gotdig$0$i12;
        label = 138;
        break L184;
        break;
       }
       case 48:  {
        break;
       }
       default: {
        $$2$i = $$010$i;$699 = 0;$700 = 0;$gotdig$2$i13 = $gotdig$0$i12;$gotrad$0$i14 = 0;
        break L184;
       }
       }
       $331 = HEAP32[$0>>2]|0;
       $332 = HEAP32[$1>>2]|0;
       $333 = ($331>>>0)<($332>>>0);
       if ($333) {
        $334 = ((($331)) + 1|0);
        HEAP32[$0>>2] = $334;
        $335 = HEAP8[$331>>0]|0;
        $336 = $335&255;
        $$010$i = $336;$gotdig$0$i12 = 1;
        continue;
       } else {
        $337 = (___shgetc($f)|0);
        $$010$i = $337;$gotdig$0$i12 = 1;
        continue;
       }
      }
      if ((label|0) == 138) {
       $338 = HEAP32[$0>>2]|0;
       $339 = HEAP32[$1>>2]|0;
       $340 = ($338>>>0)<($339>>>0);
       if ($340) {
        $341 = ((($338)) + 1|0);
        HEAP32[$0>>2] = $341;
        $342 = HEAP8[$338>>0]|0;
        $343 = $342&255;
        $$111$ph$i = $343;
       } else {
        $344 = (___shgetc($f)|0);
        $$111$ph$i = $344;
       }
       $345 = ($$111$ph$i|0)==(48);
       if ($345) {
        $346 = 0;$347 = 0;
        while(1) {
         $348 = (_i64Add(($346|0),($347|0),-1,-1)|0);
         $349 = tempRet0;
         $350 = HEAP32[$0>>2]|0;
         $351 = HEAP32[$1>>2]|0;
         $352 = ($350>>>0)<($351>>>0);
         if ($352) {
          $353 = ((($350)) + 1|0);
          HEAP32[$0>>2] = $353;
          $354 = HEAP8[$350>>0]|0;
          $355 = $354&255;
          $$111$be$i = $355;
         } else {
          $356 = (___shgetc($f)|0);
          $$111$be$i = $356;
         }
         $357 = ($$111$be$i|0)==(48);
         if ($357) {
          $346 = $348;$347 = $349;
         } else {
          $$2$i = $$111$be$i;$699 = $348;$700 = $349;$gotdig$2$i13 = 1;$gotrad$0$i14 = 1;
          break;
         }
        }
       } else {
        $$2$i = $$111$ph$i;$699 = 0;$700 = 0;$gotdig$2$i13 = $gotdig$0$i12$lcssa275;$gotrad$0$i14 = 1;
       }
      }
      HEAP32[$x$i>>2] = 0;
      $358 = (($$2$i) + -48)|0;
      $359 = ($358>>>0)<(10);
      $360 = ($$2$i|0)==(46);
      $361 = $360 | $359;
      L203: do {
       if ($361) {
        $362 = ((($x$i)) + 496|0);
        $$3112$i = $$2$i;$365 = 0;$366 = 0;$701 = $360;$702 = $358;$703 = $699;$704 = $700;$gotdig$3108$i = $gotdig$2$i13;$gotrad$1109$i = $gotrad$0$i14;$j$0111$i = 0;$k$0110$i = 0;$lnz$0107$i = 0;
        L205: while(1) {
         do {
          if ($701) {
           $cond$i = ($gotrad$1109$i|0)==(0);
           if ($cond$i) {
            $705 = $365;$706 = $366;$707 = $365;$708 = $366;$gotdig$4$i = $gotdig$3108$i;$gotrad$2$i = 1;$j$2$i = $j$0111$i;$k$2$i = $k$0110$i;$lnz$2$i = $lnz$0107$i;
           } else {
            $709 = $703;$710 = $704;$711 = $365;$712 = $366;$gotdig$3108$i$lcssa = $gotdig$3108$i;$j$0111$i$lcssa = $j$0111$i;$k$0110$i$lcssa = $k$0110$i;$lnz$0107$i$lcssa = $lnz$0107$i;
            break L205;
           }
          } else {
           $364 = ($k$0110$i|0)<(125);
           $367 = (_i64Add(($365|0),($366|0),1,0)|0);
           $368 = tempRet0;
           $369 = ($$3112$i|0)!=(48);
           if (!($364)) {
            if (!($369)) {
             $705 = $703;$706 = $704;$707 = $367;$708 = $368;$gotdig$4$i = $gotdig$3108$i;$gotrad$2$i = $gotrad$1109$i;$j$2$i = $j$0111$i;$k$2$i = $k$0110$i;$lnz$2$i = $lnz$0107$i;
             break;
            }
            $379 = HEAP32[$362>>2]|0;
            $380 = $379 | 1;
            HEAP32[$362>>2] = $380;
            $705 = $703;$706 = $704;$707 = $367;$708 = $368;$gotdig$4$i = $gotdig$3108$i;$gotrad$2$i = $gotrad$1109$i;$j$2$i = $j$0111$i;$k$2$i = $k$0110$i;$lnz$2$i = $lnz$0107$i;
            break;
           }
           $$lnz$0$i = $369 ? $367 : $lnz$0107$i;
           $370 = ($j$0111$i|0)==(0);
           $371 = (($x$i) + ($k$0110$i<<2)|0);
           if ($370) {
            $storemerge$i = $702;
           } else {
            $372 = HEAP32[$371>>2]|0;
            $373 = ($372*10)|0;
            $374 = (($$3112$i) + -48)|0;
            $375 = (($374) + ($373))|0;
            $storemerge$i = $375;
           }
           HEAP32[$371>>2] = $storemerge$i;
           $376 = (($j$0111$i) + 1)|0;
           $377 = ($376|0)==(9);
           $378 = $377&1;
           $$k$0$i = (($378) + ($k$0110$i))|0;
           $$16$i = $377 ? 0 : $376;
           $705 = $703;$706 = $704;$707 = $367;$708 = $368;$gotdig$4$i = 1;$gotrad$2$i = $gotrad$1109$i;$j$2$i = $$16$i;$k$2$i = $$k$0$i;$lnz$2$i = $$lnz$0$i;
          }
         } while(0);
         $381 = HEAP32[$0>>2]|0;
         $382 = HEAP32[$1>>2]|0;
         $383 = ($381>>>0)<($382>>>0);
         if ($383) {
          $384 = ((($381)) + 1|0);
          HEAP32[$0>>2] = $384;
          $385 = HEAP8[$381>>0]|0;
          $386 = $385&255;
          $$3$be$i = $386;
         } else {
          $387 = (___shgetc($f)|0);
          $$3$be$i = $387;
         }
         $388 = (($$3$be$i) + -48)|0;
         $389 = ($388>>>0)<(10);
         $390 = ($$3$be$i|0)==(46);
         $391 = $390 | $389;
         if ($391) {
          $$3112$i = $$3$be$i;$365 = $707;$366 = $708;$701 = $390;$702 = $388;$703 = $705;$704 = $706;$gotdig$3108$i = $gotdig$4$i;$gotrad$1109$i = $gotrad$2$i;$j$0111$i = $j$2$i;$k$0110$i = $k$2$i;$lnz$0107$i = $lnz$2$i;
         } else {
          $$3$lcssa$i = $$3$be$i;$393 = $705;$394 = $707;$396 = $706;$397 = $708;$gotdig$3$lcssa$i = $gotdig$4$i;$gotrad$1$lcssa$i = $gotrad$2$i;$j$0$lcssa$i = $j$2$i;$k$0$lcssa$i = $k$2$i;$lnz$0$lcssa$i = $lnz$2$i;
          label = 161;
          break L203;
         }
        }
        $363 = ($gotdig$3108$i$lcssa|0)!=(0);
        $713 = $711;$714 = $712;$715 = $709;$716 = $710;$717 = $363;$j$077$i = $j$0111$i$lcssa;$k$073$i = $k$0110$i$lcssa;$lnz$067$i = $lnz$0107$i$lcssa;
        label = 169;
       } else {
        $$3$lcssa$i = $$2$i;$393 = $699;$394 = 0;$396 = $700;$397 = 0;$gotdig$3$lcssa$i = $gotdig$2$i13;$gotrad$1$lcssa$i = $gotrad$0$i14;$j$0$lcssa$i = 0;$k$0$lcssa$i = 0;$lnz$0$lcssa$i = 0;
        label = 161;
       }
      } while(0);
      do {
       if ((label|0) == 161) {
        $392 = ($gotrad$1$lcssa$i|0)==(0);
        $395 = $392 ? $394 : $393;
        $398 = $392 ? $397 : $396;
        $399 = ($gotdig$3$lcssa$i|0)!=(0);
        $400 = $$3$lcssa$i | 32;
        $401 = ($400|0)==(101);
        $or$cond18$i = $401 & $399;
        if (!($or$cond18$i)) {
         $416 = ($$3$lcssa$i|0)>(-1);
         if ($416) {
          $713 = $394;$714 = $397;$715 = $395;$716 = $398;$717 = $399;$j$077$i = $j$0$lcssa$i;$k$073$i = $k$0$lcssa$i;$lnz$067$i = $lnz$0$lcssa$i;
          label = 169;
          break;
         } else {
          $718 = $394;$719 = $397;$720 = $399;$721 = $395;$722 = $398;$j$076$i = $j$0$lcssa$i;$k$072$i = $k$0$lcssa$i;$lnz$066$i = $lnz$0$lcssa$i;
          label = 171;
          break;
         }
        }
        $402 = (_scanexp($f,$pok)|0);
        $403 = tempRet0;
        $404 = ($402|0)==(0);
        $405 = ($403|0)==(-2147483648);
        $406 = $404 & $405;
        if ($406) {
         $407 = ($pok|0)==(0);
         if ($407) {
          ___shlim($f,0);
          $$1$i = 0.0;
          break;
         }
         $408 = HEAP32[$1>>2]|0;
         $409 = ($408|0)==(0|0);
         if ($409) {
          $412 = 0;$413 = 0;
         } else {
          $410 = HEAP32[$0>>2]|0;
          $411 = ((($410)) + -1|0);
          HEAP32[$0>>2] = $411;
          $412 = 0;$413 = 0;
         }
        } else {
         $412 = $402;$413 = $403;
        }
        $414 = (_i64Add(($412|0),($413|0),($395|0),($398|0))|0);
        $415 = tempRet0;
        $426 = $414;$428 = $394;$429 = $415;$431 = $397;$j$075$i = $j$0$lcssa$i;$k$071$i = $k$0$lcssa$i;$lnz$065$i = $lnz$0$lcssa$i;
        label = 173;
       }
      } while(0);
      if ((label|0) == 169) {
       $417 = HEAP32[$1>>2]|0;
       $418 = ($417|0)==(0|0);
       if ($418) {
        $718 = $713;$719 = $714;$720 = $717;$721 = $715;$722 = $716;$j$076$i = $j$077$i;$k$072$i = $k$073$i;$lnz$066$i = $lnz$067$i;
        label = 171;
       } else {
        $419 = HEAP32[$0>>2]|0;
        $420 = ((($419)) + -1|0);
        HEAP32[$0>>2] = $420;
        if ($717) {
         $426 = $715;$428 = $713;$429 = $716;$431 = $714;$j$075$i = $j$077$i;$k$071$i = $k$073$i;$lnz$065$i = $lnz$067$i;
         label = 173;
        } else {
         label = 172;
        }
       }
      }
      if ((label|0) == 171) {
       if ($720) {
        $426 = $721;$428 = $718;$429 = $722;$431 = $719;$j$075$i = $j$076$i;$k$071$i = $k$072$i;$lnz$065$i = $lnz$066$i;
        label = 173;
       } else {
        label = 172;
       }
      }
      do {
       if ((label|0) == 172) {
        $421 = (___errno_location()|0);
        HEAP32[$421>>2] = 22;
        ___shlim($f,0);
        $$1$i = 0.0;
       }
       else if ((label|0) == 173) {
        $422 = HEAP32[$x$i>>2]|0;
        $423 = ($422|0)==(0);
        if ($423) {
         $424 = (+($sign$0|0));
         $425 = $424 * 0.0;
         $$1$i = $425;
         break;
        }
        $427 = ($426|0)==($428|0);
        $430 = ($429|0)==($431|0);
        $432 = $427 & $430;
        $433 = ($431|0)<(0);
        $434 = ($428>>>0)<(10);
        $435 = ($431|0)==(0);
        $436 = $435 & $434;
        $437 = $433 | $436;
        $or$cond$i16 = $437 & $432;
        if ($or$cond$i16) {
         $438 = ($bits$0$ph>>>0)>(30);
         $439 = $422 >>> $bits$0$ph;
         $440 = ($439|0)==(0);
         $or$cond20$i = $438 | $440;
         if ($or$cond20$i) {
          $441 = (+($sign$0|0));
          $442 = (+($422>>>0));
          $443 = $441 * $442;
          $$1$i = $443;
          break;
         }
        }
        $444 = (($emin$0$ph|0) / -2)&-1;
        $445 = ($444|0)<(0);
        $446 = $445 << 31 >> 31;
        $447 = ($429|0)>($446|0);
        $448 = ($426>>>0)>($444>>>0);
        $449 = ($429|0)==($446|0);
        $450 = $449 & $448;
        $451 = $447 | $450;
        if ($451) {
         $452 = (___errno_location()|0);
         HEAP32[$452>>2] = 34;
         $453 = (+($sign$0|0));
         $454 = $453 * 1.7976931348623157E+308;
         $455 = $454 * 1.7976931348623157E+308;
         $$1$i = $455;
         break;
        }
        $456 = (($emin$0$ph) + -106)|0;
        $457 = ($456|0)<(0);
        $458 = $457 << 31 >> 31;
        $459 = ($429|0)<($458|0);
        $460 = ($426>>>0)<($456>>>0);
        $461 = ($429|0)==($458|0);
        $462 = $461 & $460;
        $463 = $459 | $462;
        if ($463) {
         $464 = (___errno_location()|0);
         HEAP32[$464>>2] = 34;
         $465 = (+($sign$0|0));
         $466 = $465 * 2.2250738585072014E-308;
         $467 = $466 * 2.2250738585072014E-308;
         $$1$i = $467;
         break;
        }
        $468 = ($j$075$i|0)==(0);
        if ($468) {
         $k$3$i = $k$071$i;
        } else {
         $469 = ($j$075$i|0)<(9);
         if ($469) {
          $470 = (($x$i) + ($k$071$i<<2)|0);
          $$promoted$i = HEAP32[$470>>2]|0;
          $472 = $$promoted$i;$j$3102$i = $j$075$i;
          while(1) {
           $471 = ($472*10)|0;
           $473 = (($j$3102$i) + 1)|0;
           $exitcond151$i = ($473|0)==(9);
           if ($exitcond151$i) {
            $$lcssa267 = $471;
            break;
           } else {
            $472 = $471;$j$3102$i = $473;
           }
          }
          HEAP32[$470>>2] = $$lcssa267;
         }
         $474 = (($k$071$i) + 1)|0;
         $k$3$i = $474;
        }
        $475 = ($lnz$065$i|0)<(9);
        if ($475) {
         $476 = ($lnz$065$i|0)<=($426|0);
         $477 = ($426|0)<(18);
         $or$cond3$i = $476 & $477;
         if ($or$cond3$i) {
          $478 = ($426|0)==(9);
          if ($478) {
           $479 = (+($sign$0|0));
           $480 = HEAP32[$x$i>>2]|0;
           $481 = (+($480>>>0));
           $482 = $479 * $481;
           $$1$i = $482;
           break;
          }
          $483 = ($426|0)<(9);
          if ($483) {
           $484 = (+($sign$0|0));
           $485 = HEAP32[$x$i>>2]|0;
           $486 = (+($485>>>0));
           $487 = $484 * $486;
           $488 = (8 - ($426))|0;
           $489 = (80456 + ($488<<2)|0);
           $490 = HEAP32[$489>>2]|0;
           $491 = (+($490|0));
           $492 = $487 / $491;
           $$1$i = $492;
           break;
          }
          $$neg$i = Math_imul($426, -3)|0;
          $$neg40$i = (($bits$0$ph) + 27)|0;
          $493 = (($$neg40$i) + ($$neg$i))|0;
          $494 = ($493|0)>(30);
          $$pre$i17 = HEAP32[$x$i>>2]|0;
          $495 = $$pre$i17 >>> $493;
          $496 = ($495|0)==(0);
          $or$cond192$i = $494 | $496;
          if ($or$cond192$i) {
           $497 = (+($sign$0|0));
           $498 = (+($$pre$i17>>>0));
           $499 = $497 * $498;
           $500 = (($426) + -10)|0;
           $501 = (80456 + ($500<<2)|0);
           $502 = HEAP32[$501>>2]|0;
           $503 = (+($502|0));
           $504 = $499 * $503;
           $$1$i = $504;
           break;
          }
         }
        }
        $505 = (($426|0) % 9)&-1;
        $506 = ($505|0)==(0);
        if ($506) {
         $a$2$ph46$i = 0;$e2$0$ph$i = 0;$rp$2$ph44$i = $426;$z$1$ph45$i = $k$3$i;
        } else {
         $507 = ($426|0)>(-1);
         $508 = (($505) + 9)|0;
         $509 = $507 ? $505 : $508;
         $510 = (8 - ($509))|0;
         $511 = (80456 + ($510<<2)|0);
         $512 = HEAP32[$511>>2]|0;
         $513 = ($k$3$i|0)==(0);
         if ($513) {
          $a$0$lcssa161$i = 0;$rp$0$lcssa162$i = $426;$z$0$i = 0;
         } else {
          $514 = (1000000000 / ($512|0))&-1;
          $a$093$i = 0;$carry$095$i = 0;$k$494$i = 0;$rp$092$i = $426;
          while(1) {
           $515 = (($x$i) + ($k$494$i<<2)|0);
           $516 = HEAP32[$515>>2]|0;
           $517 = (($516>>>0) % ($512>>>0))&-1;
           $518 = (($516>>>0) / ($512>>>0))&-1;
           $519 = (($518) + ($carry$095$i))|0;
           HEAP32[$515>>2] = $519;
           $520 = Math_imul($517, $514)|0;
           $521 = ($k$494$i|0)==($a$093$i|0);
           $522 = ($519|0)==(0);
           $or$cond21$i = $521 & $522;
           $523 = (($k$494$i) + 1)|0;
           $524 = $523 & 127;
           $525 = (($rp$092$i) + -9)|0;
           $rp$1$i18 = $or$cond21$i ? $525 : $rp$092$i;
           $a$1$i = $or$cond21$i ? $524 : $a$093$i;
           $526 = ($523|0)==($k$3$i|0);
           if ($526) {
            $$lcssa266 = $520;$a$1$i$lcssa = $a$1$i;$rp$1$i18$lcssa = $rp$1$i18;
            break;
           } else {
            $a$093$i = $a$1$i;$carry$095$i = $520;$k$494$i = $523;$rp$092$i = $rp$1$i18;
           }
          }
          $527 = ($$lcssa266|0)==(0);
          if ($527) {
           $a$0$lcssa161$i = $a$1$i$lcssa;$rp$0$lcssa162$i = $rp$1$i18$lcssa;$z$0$i = $k$3$i;
          } else {
           $528 = (($k$3$i) + 1)|0;
           $529 = (($x$i) + ($k$3$i<<2)|0);
           HEAP32[$529>>2] = $$lcssa266;
           $a$0$lcssa161$i = $a$1$i$lcssa;$rp$0$lcssa162$i = $rp$1$i18$lcssa;$z$0$i = $528;
          }
         }
         $530 = (9 - ($509))|0;
         $531 = (($530) + ($rp$0$lcssa162$i))|0;
         $a$2$ph46$i = $a$0$lcssa161$i;$e2$0$ph$i = 0;$rp$2$ph44$i = $531;$z$1$ph45$i = $z$0$i;
        }
        L284: while(1) {
         $532 = ($rp$2$ph44$i|0)<(18);
         $533 = ($rp$2$ph44$i|0)==(18);
         $534 = (($x$i) + ($a$2$ph46$i<<2)|0);
         $e2$0$i19 = $e2$0$ph$i;$z$1$i = $z$1$ph45$i;
         while(1) {
          if (!($532)) {
           if (!($533)) {
            $a$4$ph$i = $a$2$ph46$i;$e2$1$ph$i = $e2$0$i19;$rp$4$ph42$i = $rp$2$ph44$i;$z$6$ph$i = $z$1$i;
            break L284;
           }
           $535 = HEAP32[$534>>2]|0;
           $536 = ($535>>>0)<(9007199);
           if (!($536)) {
            $a$4$ph$i = $a$2$ph46$i;$e2$1$ph$i = $e2$0$i19;$rp$4$ph42$i = 18;$z$6$ph$i = $z$1$i;
            break L284;
           }
          }
          $537 = (($z$1$i) + 127)|0;
          $carry1$0$i = 0;$k$5$in$i = $537;$z$2$i = $z$1$i;
          while(1) {
           $k$5$i = $k$5$in$i & 127;
           $538 = (($x$i) + ($k$5$i<<2)|0);
           $539 = HEAP32[$538>>2]|0;
           $540 = (_bitshift64Shl(($539|0),0,29)|0);
           $541 = tempRet0;
           $542 = (_i64Add(($540|0),($541|0),($carry1$0$i|0),0)|0);
           $543 = tempRet0;
           $544 = ($543>>>0)>(0);
           $545 = ($542>>>0)>(1000000000);
           $546 = ($543|0)==(0);
           $547 = $546 & $545;
           $548 = $544 | $547;
           if ($548) {
            $549 = (___udivdi3(($542|0),($543|0),1000000000,0)|0);
            $550 = tempRet0;
            $551 = (___uremdi3(($542|0),($543|0),1000000000,0)|0);
            $552 = tempRet0;
            $$sink$off0$i = $551;$carry1$1$i = $549;
           } else {
            $$sink$off0$i = $542;$carry1$1$i = 0;
           }
           HEAP32[$538>>2] = $$sink$off0$i;
           $553 = (($z$2$i) + 127)|0;
           $554 = $553 & 127;
           $555 = ($k$5$i|0)!=($554|0);
           $556 = ($k$5$i|0)==($a$2$ph46$i|0);
           $or$cond22$i = $555 | $556;
           $557 = ($$sink$off0$i|0)==(0);
           $k$5$z$2$i = $557 ? $k$5$i : $z$2$i;
           $z$3$i = $or$cond22$i ? $z$2$i : $k$5$z$2$i;
           $558 = (($k$5$i) + -1)|0;
           if ($556) {
            $carry1$1$i$lcssa = $carry1$1$i;$z$3$i$lcssa = $z$3$i;
            break;
           } else {
            $carry1$0$i = $carry1$1$i;$k$5$in$i = $558;$z$2$i = $z$3$i;
           }
          }
          $559 = (($e2$0$i19) + -29)|0;
          $560 = ($carry1$1$i$lcssa|0)==(0);
          if ($560) {
           $e2$0$i19 = $559;$z$1$i = $z$3$i$lcssa;
          } else {
           $$lcssa265 = $559;$carry1$1$i$lcssa$lcssa = $carry1$1$i$lcssa;$z$3$i$lcssa$lcssa = $z$3$i$lcssa;
           break;
          }
         }
         $561 = (($rp$2$ph44$i) + 9)|0;
         $562 = (($a$2$ph46$i) + 127)|0;
         $563 = $562 & 127;
         $564 = ($563|0)==($z$3$i$lcssa$lcssa|0);
         if ($564) {
          $565 = (($z$3$i$lcssa$lcssa) + 127)|0;
          $566 = $565 & 127;
          $567 = (($x$i) + ($566<<2)|0);
          $568 = HEAP32[$567>>2]|0;
          $569 = (($z$3$i$lcssa$lcssa) + 126)|0;
          $570 = $569 & 127;
          $571 = (($x$i) + ($570<<2)|0);
          $572 = HEAP32[$571>>2]|0;
          $573 = $572 | $568;
          HEAP32[$571>>2] = $573;
          $z$4$i = $566;
         } else {
          $z$4$i = $z$3$i$lcssa$lcssa;
         }
         $574 = (($x$i) + ($563<<2)|0);
         HEAP32[$574>>2] = $carry1$1$i$lcssa$lcssa;
         $a$2$ph46$i = $563;$e2$0$ph$i = $$lcssa265;$rp$2$ph44$i = $561;$z$1$ph45$i = $z$4$i;
        }
        L302: while(1) {
         $605 = (($z$6$ph$i) + 1)|0;
         $602 = $605 & 127;
         $606 = (($z$6$ph$i) + 127)|0;
         $607 = $606 & 127;
         $608 = (($x$i) + ($607<<2)|0);
         $a$4$ph167$i = $a$4$ph$i;$e2$1$ph166$i = $e2$1$ph$i;$rp$4$ph$i = $rp$4$ph42$i;
         while(1) {
          $609 = ($rp$4$ph$i|0)==(18);
          $610 = ($rp$4$ph$i|0)>(27);
          $$24$i = $610 ? 9 : 1;
          $$not$i = $609 ^ 1;
          $a$4$i = $a$4$ph167$i;$e2$1$i = $e2$1$ph166$i;
          while(1) {
           $575 = $a$4$i & 127;
           $576 = ($575|0)==($z$6$ph$i|0);
           do {
            if ($576) {
             label = 219;
            } else {
             $577 = (($x$i) + ($575<<2)|0);
             $578 = HEAP32[$577>>2]|0;
             $579 = ($578>>>0)<(9007199);
             if ($579) {
              label = 219;
              break;
             }
             $580 = ($578>>>0)>(9007199);
             if ($580) {
              break;
             }
             $581 = (($a$4$i) + 1)|0;
             $582 = $581 & 127;
             $583 = ($582|0)==($z$6$ph$i|0);
             if ($583) {
              label = 219;
              break;
             }
             $689 = (($x$i) + ($582<<2)|0);
             $690 = HEAP32[$689>>2]|0;
             $691 = ($690>>>0)<(254740991);
             if ($691) {
              label = 219;
              break;
             }
             $692 = ($690>>>0)>(254740991);
             $brmerge$i28 = $692 | $$not$i;
             if (!($brmerge$i28)) {
              $616 = $575;$a$4$i251 = $a$4$i;$e2$1$i248 = $e2$1$i;$z$10$i = $z$6$ph$i;
              break L302;
             }
            }
           } while(0);
           if ((label|0) == 219) {
            label = 0;
            if ($609) {
             label = 220;
             break L302;
            }
           }
           $584 = (($e2$1$i) + ($$24$i))|0;
           $585 = ($a$4$i|0)==($z$6$ph$i|0);
           if ($585) {
            $a$4$i = $z$6$ph$i;$e2$1$i = $584;
           } else {
            $$lcssa258 = $584;$a$4$i$lcssa250 = $a$4$i;
            break;
           }
          }
          $586 = 1 << $$24$i;
          $587 = (($586) + -1)|0;
          $588 = 1000000000 >>> $$24$i;
          $a$586$i = $a$4$i$lcssa250;$carry4$089$i = 0;$k$687$i = $a$4$i$lcssa250;$rp$585$i = $rp$4$ph$i;
          while(1) {
           $589 = (($x$i) + ($k$687$i<<2)|0);
           $590 = HEAP32[$589>>2]|0;
           $591 = $590 & $587;
           $592 = $590 >>> $$24$i;
           $593 = (($592) + ($carry4$089$i))|0;
           HEAP32[$589>>2] = $593;
           $594 = Math_imul($591, $588)|0;
           $595 = ($k$687$i|0)==($a$586$i|0);
           $596 = ($593|0)==(0);
           $or$cond25$i = $595 & $596;
           $597 = (($k$687$i) + 1)|0;
           $598 = $597 & 127;
           $599 = (($rp$585$i) + -9)|0;
           $rp$6$i = $or$cond25$i ? $599 : $rp$585$i;
           $a$6$i = $or$cond25$i ? $598 : $a$586$i;
           $600 = ($598|0)==($z$6$ph$i|0);
           if ($600) {
            $$lcssa259 = $594;$a$6$i$lcssa = $a$6$i;$rp$6$i$lcssa = $rp$6$i;
            break;
           } else {
            $a$586$i = $a$6$i;$carry4$089$i = $594;$k$687$i = $598;$rp$585$i = $rp$6$i;
           }
          }
          $601 = ($$lcssa259|0)==(0);
          if ($601) {
           $a$4$ph167$i = $a$6$i$lcssa;$e2$1$ph166$i = $$lcssa258;$rp$4$ph$i = $rp$6$i$lcssa;
           continue;
          }
          $603 = ($602|0)==($a$6$i$lcssa|0);
          if (!($603)) {
           $$lcssa258$lcssa = $$lcssa258;$$lcssa259$lcssa = $$lcssa259;$a$6$i$lcssa$lcssa = $a$6$i$lcssa;$rp$6$i$lcssa$lcssa = $rp$6$i$lcssa;
           break;
          }
          $611 = HEAP32[$608>>2]|0;
          $612 = $611 | 1;
          HEAP32[$608>>2] = $612;
          $a$4$ph167$i = $a$6$i$lcssa;$e2$1$ph166$i = $$lcssa258;$rp$4$ph$i = $rp$6$i$lcssa;
         }
         $604 = (($x$i) + ($z$6$ph$i<<2)|0);
         HEAP32[$604>>2] = $$lcssa259$lcssa;
         $a$4$ph$i = $a$6$i$lcssa$lcssa;$e2$1$ph$i = $$lcssa258$lcssa;$rp$4$ph42$i = $rp$6$i$lcssa$lcssa;$z$6$ph$i = $602;
        }
        if ((label|0) == 220) {
         if ($576) {
          $613 = (($602) + -1)|0;
          $614 = (($x$i) + ($613<<2)|0);
          HEAP32[$614>>2] = 0;
          $616 = $z$6$ph$i;$a$4$i251 = $a$4$i;$e2$1$i248 = $e2$1$i;$z$10$i = $602;
         } else {
          $616 = $575;$a$4$i251 = $a$4$i;$e2$1$i248 = $e2$1$i;$z$10$i = $z$6$ph$i;
         }
        }
        $615 = (($x$i) + ($616<<2)|0);
        $617 = HEAP32[$615>>2]|0;
        $618 = (+($617>>>0));
        $619 = (($a$4$i251) + 1)|0;
        $620 = $619 & 127;
        $621 = ($620|0)==($z$10$i|0);
        if ($621) {
         $678 = (($a$4$i251) + 2)|0;
         $679 = $678 & 127;
         $680 = (($679) + -1)|0;
         $681 = (($x$i) + ($680<<2)|0);
         HEAP32[$681>>2] = 0;
         $z$10$1$i = $679;
        } else {
         $z$10$1$i = $z$10$i;
        }
        $682 = $618 * 1.0E+9;
        $683 = (($x$i) + ($620<<2)|0);
        $684 = HEAP32[$683>>2]|0;
        $685 = (+($684>>>0));
        $686 = $682 + $685;
        $642 = (+($sign$0|0));
        $624 = $642 * $686;
        $662 = (($e2$1$i248) + 53)|0;
        $668 = (($662) - ($emin$0$ph))|0;
        $669 = ($668|0)<($bits$0$ph|0);
        $687 = ($668|0)<(0);
        $$$i = $687 ? 0 : $668;
        $denormal$0$i = $669&1;
        $$012$i = $669 ? $$$i : $bits$0$ph;
        $688 = ($$012$i|0)<(53);
        if ($688) {
         $622 = (105 - ($$012$i))|0;
         $623 = (+_scalbn(1.0,$622));
         $625 = (+_copysignl($623,$624));
         $626 = (53 - ($$012$i))|0;
         $627 = (+_scalbn(1.0,$626));
         $628 = (+_fmodl($624,$627));
         $629 = $624 - $628;
         $630 = $625 + $629;
         $bias$0$i25 = $625;$frac$0$i = $628;$y$1$i24 = $630;
        } else {
         $bias$0$i25 = 0.0;$frac$0$i = 0.0;$y$1$i24 = $624;
        }
        $631 = (($a$4$i251) + 2)|0;
        $632 = $631 & 127;
        $633 = ($632|0)==($z$10$1$i|0);
        do {
         if ($633) {
          $frac$3$i = $frac$0$i;
         } else {
          $634 = (($x$i) + ($632<<2)|0);
          $635 = HEAP32[$634>>2]|0;
          $636 = ($635>>>0)<(500000000);
          do {
           if ($636) {
            $637 = ($635|0)==(0);
            if ($637) {
             $638 = (($a$4$i251) + 3)|0;
             $639 = $638 & 127;
             $640 = ($639|0)==($z$10$1$i|0);
             if ($640) {
              $frac$1$i = $frac$0$i;
              break;
             }
            }
            $641 = $642 * 0.25;
            $643 = $641 + $frac$0$i;
            $frac$1$i = $643;
           } else {
            $644 = ($635>>>0)>(500000000);
            if ($644) {
             $645 = $642 * 0.75;
             $646 = $645 + $frac$0$i;
             $frac$1$i = $646;
             break;
            }
            $647 = (($a$4$i251) + 3)|0;
            $648 = $647 & 127;
            $649 = ($648|0)==($z$10$1$i|0);
            if ($649) {
             $650 = $642 * 0.5;
             $651 = $650 + $frac$0$i;
             $frac$1$i = $651;
             break;
            } else {
             $652 = $642 * 0.75;
             $653 = $652 + $frac$0$i;
             $frac$1$i = $653;
             break;
            }
           }
          } while(0);
          $654 = (53 - ($$012$i))|0;
          $655 = ($654|0)>(1);
          if (!($655)) {
           $frac$3$i = $frac$1$i;
           break;
          }
          $656 = (+_fmodl($frac$1$i,1.0));
          $657 = $656 != 0.0;
          if ($657) {
           $frac$3$i = $frac$1$i;
           break;
          }
          $658 = $frac$1$i + 1.0;
          $frac$3$i = $658;
         }
        } while(0);
        $659 = $y$1$i24 + $frac$3$i;
        $660 = $659 - $bias$0$i25;
        $661 = $662 & 2147483647;
        $663 = (-2 - ($sum$i))|0;
        $664 = ($661|0)>($663|0);
        do {
         if ($664) {
          $665 = (+Math_abs((+$660)));
          $666 = !($665 >= 9007199254740992.0);
          if ($666) {
           $denormal$2$i = $denormal$0$i;$e2$3$i = $e2$1$i248;$y$2$i26 = $660;
          } else {
           $667 = ($$012$i|0)==($668|0);
           $or$cond26$i = $669 & $667;
           $denormal$1$i = $or$cond26$i ? 0 : $denormal$0$i;
           $670 = $660 * 0.5;
           $671 = (($e2$1$i248) + 1)|0;
           $denormal$2$i = $denormal$1$i;$e2$3$i = $671;$y$2$i26 = $670;
          }
          $672 = (($e2$3$i) + 50)|0;
          $673 = ($672|0)>($330|0);
          if (!($673)) {
           $674 = ($denormal$2$i|0)!=(0);
           $675 = $frac$3$i != 0.0;
           $or$cond9$i27 = $675 & $674;
           if (!($or$cond9$i27)) {
            $e2$4$i = $e2$3$i;$y$3$i = $y$2$i26;
            break;
           }
          }
          $676 = (___errno_location()|0);
          HEAP32[$676>>2] = 34;
          $e2$4$i = $e2$3$i;$y$3$i = $y$2$i26;
         } else {
          $e2$4$i = $e2$1$i248;$y$3$i = $660;
         }
        } while(0);
        $677 = (+_scalbnl($y$3$i,$e2$4$i));
        $$1$i = $677;
       }
      } while(0);
      $$0 = $$1$i;
      break L4;
      break;
     }
     default: {
      $109 = HEAP32[$1>>2]|0;
      $110 = ($109|0)==(0|0);
      if (!($110)) {
       $111 = HEAP32[$0>>2]|0;
       $112 = ((($111)) + -1|0);
       HEAP32[$0>>2] = $112;
      }
      $113 = (___errno_location()|0);
      HEAP32[$113>>2] = 22;
      ___shlim($f,0);
      $$0 = 0.0;
      break L4;
     }
     }
    }
    }
   } while(0);
   if ((label|0) == 23) {
    $41 = HEAP32[$1>>2]|0;
    $42 = ($41|0)==(0|0);
    if (!($42)) {
     $43 = HEAP32[$0>>2]|0;
     $44 = ((($43)) + -1|0);
     HEAP32[$0>>2] = $44;
    }
    $45 = ($pok|0)!=(0);
    $46 = ($i$0$lcssa>>>0)>(3);
    $or$cond9 = $45 & $46;
    if ($or$cond9) {
     $i$1 = $i$0$lcssa;
     while(1) {
      if (!($42)) {
       $47 = HEAP32[$0>>2]|0;
       $48 = ((($47)) + -1|0);
       HEAP32[$0>>2] = $48;
      }
      $49 = (($i$1) + -1)|0;
      $$old8 = ($49>>>0)>(3);
      if ($$old8) {
       $i$1 = $49;
      } else {
       break;
      }
     }
    }
   }
   $50 = (+($sign$0|0));
   $51 = $50 * inf;
   $52 = $51;
   $$0 = $52;
  }
 } while(0);
 STACKTOP = sp;return (+$$0);
}
function _scanexp($f,$pok) {
 $f = $f|0;
 $pok = $pok|0;
 var $$lcssa22 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0;
 var $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0;
 var $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0;
 var $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0;
 var $99 = 0, $c$0 = 0, $c$1$be = 0, $c$1$be$lcssa = 0, $c$112 = 0, $c$2$be = 0, $c$2$lcssa = 0, $c$27 = 0, $c$3$be = 0, $neg$0 = 0, $or$cond3 = 0, $x$013 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($f)) + 4|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = ((($f)) + 100|0);
 $3 = HEAP32[$2>>2]|0;
 $4 = ($1>>>0)<($3>>>0);
 if ($4) {
  $5 = ((($1)) + 1|0);
  HEAP32[$0>>2] = $5;
  $6 = HEAP8[$1>>0]|0;
  $7 = $6&255;
  $9 = $7;
 } else {
  $8 = (___shgetc($f)|0);
  $9 = $8;
 }
 $10 = ($9|0)==(45);
 switch ($9|0) {
 case 43: case 45:  {
  $11 = $10&1;
  $12 = HEAP32[$0>>2]|0;
  $13 = HEAP32[$2>>2]|0;
  $14 = ($12>>>0)<($13>>>0);
  if ($14) {
   $15 = ((($12)) + 1|0);
   HEAP32[$0>>2] = $15;
   $16 = HEAP8[$12>>0]|0;
   $17 = $16&255;
   $20 = $17;
  } else {
   $18 = (___shgetc($f)|0);
   $20 = $18;
  }
  $19 = (($20) + -48)|0;
  $21 = ($19>>>0)>(9);
  $22 = ($pok|0)!=(0);
  $or$cond3 = $22 & $21;
  if ($or$cond3) {
   $23 = HEAP32[$2>>2]|0;
   $24 = ($23|0)==(0|0);
   if ($24) {
    $c$0 = $20;$neg$0 = $11;
   } else {
    $25 = HEAP32[$0>>2]|0;
    $26 = ((($25)) + -1|0);
    HEAP32[$0>>2] = $26;
    $c$0 = $20;$neg$0 = $11;
   }
  } else {
   $c$0 = $20;$neg$0 = $11;
  }
  break;
 }
 default: {
  $c$0 = $9;$neg$0 = 0;
 }
 }
 $27 = (($c$0) + -48)|0;
 $28 = ($27>>>0)>(9);
 if ($28) {
  $29 = HEAP32[$2>>2]|0;
  $30 = ($29|0)==(0|0);
  if ($30) {
   $98 = -2147483648;$99 = 0;
  } else {
   $31 = HEAP32[$0>>2]|0;
   $32 = ((($31)) + -1|0);
   HEAP32[$0>>2] = $32;
   $98 = -2147483648;$99 = 0;
  }
 } else {
  $c$112 = $c$0;$x$013 = 0;
  while(1) {
   $33 = ($x$013*10)|0;
   $34 = (($c$112) + -48)|0;
   $35 = (($34) + ($33))|0;
   $36 = HEAP32[$0>>2]|0;
   $37 = HEAP32[$2>>2]|0;
   $38 = ($36>>>0)<($37>>>0);
   if ($38) {
    $39 = ((($36)) + 1|0);
    HEAP32[$0>>2] = $39;
    $40 = HEAP8[$36>>0]|0;
    $41 = $40&255;
    $c$1$be = $41;
   } else {
    $42 = (___shgetc($f)|0);
    $c$1$be = $42;
   }
   $43 = (($c$1$be) + -48)|0;
   $44 = ($43>>>0)<(10);
   $45 = ($35|0)<(214748364);
   $46 = $44 & $45;
   if ($46) {
    $c$112 = $c$1$be;$x$013 = $35;
   } else {
    $$lcssa22 = $35;$c$1$be$lcssa = $c$1$be;
    break;
   }
  }
  $47 = ($$lcssa22|0)<(0);
  $48 = $47 << 31 >> 31;
  $49 = (($c$1$be$lcssa) + -48)|0;
  $50 = ($49>>>0)<(10);
  if ($50) {
   $53 = $$lcssa22;$54 = $48;$c$27 = $c$1$be$lcssa;
   while(1) {
    $55 = (___muldi3(($53|0),($54|0),10,0)|0);
    $56 = tempRet0;
    $57 = ($c$27|0)<(0);
    $58 = $57 << 31 >> 31;
    $59 = (_i64Add(($c$27|0),($58|0),-48,-1)|0);
    $60 = tempRet0;
    $61 = (_i64Add(($59|0),($60|0),($55|0),($56|0))|0);
    $62 = tempRet0;
    $63 = HEAP32[$0>>2]|0;
    $64 = HEAP32[$2>>2]|0;
    $65 = ($63>>>0)<($64>>>0);
    if ($65) {
     $66 = ((($63)) + 1|0);
     HEAP32[$0>>2] = $66;
     $67 = HEAP8[$63>>0]|0;
     $68 = $67&255;
     $c$2$be = $68;
    } else {
     $69 = (___shgetc($f)|0);
     $c$2$be = $69;
    }
    $70 = (($c$2$be) + -48)|0;
    $71 = ($70>>>0)<(10);
    $72 = ($62|0)<(21474836);
    $73 = ($61>>>0)<(2061584302);
    $74 = ($62|0)==(21474836);
    $75 = $74 & $73;
    $76 = $72 | $75;
    $77 = $71 & $76;
    if ($77) {
     $53 = $61;$54 = $62;$c$27 = $c$2$be;
    } else {
     $92 = $61;$93 = $62;$c$2$lcssa = $c$2$be;
     break;
    }
   }
  } else {
   $92 = $$lcssa22;$93 = $48;$c$2$lcssa = $c$1$be$lcssa;
  }
  $51 = (($c$2$lcssa) + -48)|0;
  $52 = ($51>>>0)<(10);
  if ($52) {
   while(1) {
    $78 = HEAP32[$0>>2]|0;
    $79 = HEAP32[$2>>2]|0;
    $80 = ($78>>>0)<($79>>>0);
    if ($80) {
     $81 = ((($78)) + 1|0);
     HEAP32[$0>>2] = $81;
     $82 = HEAP8[$78>>0]|0;
     $83 = $82&255;
     $c$3$be = $83;
    } else {
     $84 = (___shgetc($f)|0);
     $c$3$be = $84;
    }
    $85 = (($c$3$be) + -48)|0;
    $86 = ($85>>>0)<(10);
    if (!($86)) {
     break;
    }
   }
  }
  $87 = HEAP32[$2>>2]|0;
  $88 = ($87|0)==(0|0);
  if (!($88)) {
   $89 = HEAP32[$0>>2]|0;
   $90 = ((($89)) + -1|0);
   HEAP32[$0>>2] = $90;
  }
  $91 = ($neg$0|0)!=(0);
  $94 = (_i64Subtract(0,0,($92|0),($93|0))|0);
  $95 = tempRet0;
  $96 = $91 ? $94 : $92;
  $97 = $91 ? $95 : $93;
  $98 = $97;$99 = $96;
 }
 tempRet0 = ($98);
 return ($99|0);
}
function ___towrite($f) {
 $f = $f|0;
 var $$0 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
 var $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($f)) + 74|0);
 $1 = HEAP8[$0>>0]|0;
 $2 = $1 << 24 >> 24;
 $3 = (($2) + 255)|0;
 $4 = $3 | $2;
 $5 = $4&255;
 HEAP8[$0>>0] = $5;
 $6 = HEAP32[$f>>2]|0;
 $7 = $6 & 8;
 $8 = ($7|0)==(0);
 if ($8) {
  $10 = ((($f)) + 8|0);
  HEAP32[$10>>2] = 0;
  $11 = ((($f)) + 4|0);
  HEAP32[$11>>2] = 0;
  $12 = ((($f)) + 44|0);
  $13 = HEAP32[$12>>2]|0;
  $14 = ((($f)) + 28|0);
  HEAP32[$14>>2] = $13;
  $15 = ((($f)) + 20|0);
  HEAP32[$15>>2] = $13;
  $16 = $13;
  $17 = ((($f)) + 48|0);
  $18 = HEAP32[$17>>2]|0;
  $19 = (($16) + ($18)|0);
  $20 = ((($f)) + 16|0);
  HEAP32[$20>>2] = $19;
  $$0 = 0;
 } else {
  $9 = $6 | 32;
  HEAP32[$f>>2] = $9;
  $$0 = -1;
 }
 return ($$0|0);
}
function _strcmp($l,$r) {
 $l = $l|0;
 $r = $r|0;
 var $$014 = 0, $$05 = 0, $$lcssa = 0, $$lcssa2 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, $or$cond3 = 0, label = 0;
 var sp = 0;
 sp = STACKTOP;
 $0 = HEAP8[$l>>0]|0;
 $1 = HEAP8[$r>>0]|0;
 $2 = ($0<<24>>24)!=($1<<24>>24);
 $3 = ($0<<24>>24)==(0);
 $or$cond3 = $3 | $2;
 if ($or$cond3) {
  $$lcssa = $0;$$lcssa2 = $1;
 } else {
  $$014 = $l;$$05 = $r;
  while(1) {
   $4 = ((($$014)) + 1|0);
   $5 = ((($$05)) + 1|0);
   $6 = HEAP8[$4>>0]|0;
   $7 = HEAP8[$5>>0]|0;
   $8 = ($6<<24>>24)!=($7<<24>>24);
   $9 = ($6<<24>>24)==(0);
   $or$cond = $9 | $8;
   if ($or$cond) {
    $$lcssa = $6;$$lcssa2 = $7;
    break;
   } else {
    $$014 = $4;$$05 = $5;
   }
  }
 }
 $10 = $$lcssa&255;
 $11 = $$lcssa2&255;
 $12 = (($10) - ($11))|0;
 return ($12|0);
}
function ___overflow($f,$_c) {
 $f = $f|0;
 $_c = $_c|0;
 var $$0 = 0, $$pre = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $3 = 0, $4 = 0, $5 = 0;
 var $6 = 0, $7 = 0, $8 = 0, $9 = 0, $c = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $c = sp;
 $0 = $_c&255;
 HEAP8[$c>>0] = $0;
 $1 = ((($f)) + 16|0);
 $2 = HEAP32[$1>>2]|0;
 $3 = ($2|0)==(0|0);
 if ($3) {
  $4 = (___towrite($f)|0);
  $5 = ($4|0)==(0);
  if ($5) {
   $$pre = HEAP32[$1>>2]|0;
   $9 = $$pre;
   label = 4;
  } else {
   $$0 = -1;
  }
 } else {
  $9 = $2;
  label = 4;
 }
 do {
  if ((label|0) == 4) {
   $6 = ((($f)) + 20|0);
   $7 = HEAP32[$6>>2]|0;
   $8 = ($7>>>0)<($9>>>0);
   if ($8) {
    $10 = $_c & 255;
    $11 = ((($f)) + 75|0);
    $12 = HEAP8[$11>>0]|0;
    $13 = $12 << 24 >> 24;
    $14 = ($10|0)==($13|0);
    if (!($14)) {
     $15 = ((($7)) + 1|0);
     HEAP32[$6>>2] = $15;
     HEAP8[$7>>0] = $0;
     $$0 = $10;
     break;
    }
   }
   $16 = ((($f)) + 36|0);
   $17 = HEAP32[$16>>2]|0;
   $18 = (FUNCTION_TABLE_iiii[$17 & 7]($f,$c,1)|0);
   $19 = ($18|0)==(1);
   if ($19) {
    $20 = HEAP8[$c>>0]|0;
    $21 = $20&255;
    $$0 = $21;
   } else {
    $$0 = -1;
   }
  }
 } while(0);
 STACKTOP = sp;return ($$0|0);
}
function _fputc($c,$f) {
 $c = $c|0;
 $f = $f|0;
 var $$0 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0;
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($f)) + 76|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = ($1|0)<(0);
 if ($2) {
  label = 3;
 } else {
  $3 = (___lockfile($f)|0);
  $4 = ($3|0)==(0);
  if ($4) {
   label = 3;
  } else {
   $18 = ((($f)) + 75|0);
   $19 = HEAP8[$18>>0]|0;
   $20 = $19 << 24 >> 24;
   $21 = ($20|0)==($c|0);
   if ($21) {
    label = 10;
   } else {
    $22 = ((($f)) + 20|0);
    $23 = HEAP32[$22>>2]|0;
    $24 = ((($f)) + 16|0);
    $25 = HEAP32[$24>>2]|0;
    $26 = ($23>>>0)<($25>>>0);
    if ($26) {
     $27 = $c&255;
     $28 = ((($23)) + 1|0);
     HEAP32[$22>>2] = $28;
     HEAP8[$23>>0] = $27;
     $29 = $c & 255;
     $31 = $29;
    } else {
     label = 10;
    }
   }
   if ((label|0) == 10) {
    $30 = (___overflow($f,$c)|0);
    $31 = $30;
   }
   ___unlockfile($f);
   $$0 = $31;
  }
 }
 do {
  if ((label|0) == 3) {
   $5 = ((($f)) + 75|0);
   $6 = HEAP8[$5>>0]|0;
   $7 = $6 << 24 >> 24;
   $8 = ($7|0)==($c|0);
   if (!($8)) {
    $9 = ((($f)) + 20|0);
    $10 = HEAP32[$9>>2]|0;
    $11 = ((($f)) + 16|0);
    $12 = HEAP32[$11>>2]|0;
    $13 = ($10>>>0)<($12>>>0);
    if ($13) {
     $14 = $c&255;
     $15 = ((($10)) + 1|0);
     HEAP32[$9>>2] = $15;
     HEAP8[$10>>0] = $14;
     $16 = $c & 255;
     $$0 = $16;
     break;
    }
   }
   $17 = (___overflow($f,$c)|0);
   $$0 = $17;
  }
 } while(0);
 return ($$0|0);
}
function _getchar() {
 var $0 = 0, $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = HEAP32[20034]|0;
 $1 = (_fgetc($0)|0);
 return ($1|0);
}
function _fgetc($f) {
 $f = $f|0;
 var $$0 = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $3 = 0, $4 = 0;
 var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($f)) + 76|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = ($1|0)<(0);
 if ($2) {
  label = 3;
 } else {
  $3 = (___lockfile($f)|0);
  $4 = ($3|0)==(0);
  if ($4) {
   label = 3;
  } else {
   $14 = ((($f)) + 4|0);
   $15 = HEAP32[$14>>2]|0;
   $16 = ((($f)) + 8|0);
   $17 = HEAP32[$16>>2]|0;
   $18 = ($15>>>0)<($17>>>0);
   if ($18) {
    $19 = ((($15)) + 1|0);
    HEAP32[$14>>2] = $19;
    $20 = HEAP8[$15>>0]|0;
    $21 = $20&255;
    $23 = $21;
   } else {
    $22 = (___uflow($f)|0);
    $23 = $22;
   }
   ___unlockfile($f);
   $$0 = $23;
  }
 }
 do {
  if ((label|0) == 3) {
   $5 = ((($f)) + 4|0);
   $6 = HEAP32[$5>>2]|0;
   $7 = ((($f)) + 8|0);
   $8 = HEAP32[$7>>2]|0;
   $9 = ($6>>>0)<($8>>>0);
   if ($9) {
    $10 = ((($6)) + 1|0);
    HEAP32[$5>>2] = $10;
    $11 = HEAP8[$6>>0]|0;
    $12 = $11&255;
    $$0 = $12;
    break;
   } else {
    $13 = (___uflow($f)|0);
    $$0 = $13;
    break;
   }
  }
 } while(0);
 return ($$0|0);
}
function _vscanf($fmt,$ap) {
 $fmt = $fmt|0;
 $ap = $ap|0;
 var $0 = 0, $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = HEAP32[20034]|0;
 $1 = (_vfscanf($0,$fmt,$ap)|0);
 return ($1|0);
}
function _scanf($fmt,$varargs) {
 $fmt = $fmt|0;
 $varargs = $varargs|0;
 var $0 = 0, $ap = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $ap = sp;
 HEAP32[$ap>>2] = $varargs;
 $0 = (_vscanf($fmt,$ap)|0);
 STACKTOP = sp;return ($0|0);
}
function _putchar($c) {
 $c = $c|0;
 var $0 = 0, $1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = HEAP32[20004]|0;
 $1 = (_fputc($c,$0)|0);
 return ($1|0);
}
function _atoi($s) {
 $s = $s|0;
 var $$0 = 0, $$0$lcssa = 0, $$1$ph = 0, $$13 = 0, $$lcssa9 = 0, $$pre = 0, $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
 var $7 = 0, $8 = 0, $9 = 0, $isdigit = 0, $isdigit2 = 0, $isdigittmp = 0, $isdigittmp1 = 0, $isdigittmp5 = 0, $n$0$lcssa = 0, $n$04 = 0, $neg$0 = 0, $neg$1$ph = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $$0 = $s;
 while(1) {
  $0 = HEAP8[$$0>>0]|0;
  $1 = $0 << 24 >> 24;
  $2 = (_isspace($1)|0);
  $3 = ($2|0)==(0);
  $4 = ((($$0)) + 1|0);
  if ($3) {
   $$0$lcssa = $$0;$$lcssa9 = $4;
   break;
  } else {
   $$0 = $4;
  }
 }
 $5 = HEAP8[$$0$lcssa>>0]|0;
 $6 = $5 << 24 >> 24;
 switch ($6|0) {
 case 45:  {
  $neg$0 = 1;
  label = 5;
  break;
 }
 case 43:  {
  $neg$0 = 0;
  label = 5;
  break;
 }
 default: {
  $$1$ph = $$0$lcssa;$8 = $5;$neg$1$ph = 0;
 }
 }
 if ((label|0) == 5) {
  $$pre = HEAP8[$$lcssa9>>0]|0;
  $$1$ph = $$lcssa9;$8 = $$pre;$neg$1$ph = $neg$0;
 }
 $7 = $8 << 24 >> 24;
 $isdigittmp1 = (($7) + -48)|0;
 $isdigit2 = ($isdigittmp1>>>0)<(10);
 if ($isdigit2) {
  $$13 = $$1$ph;$isdigittmp5 = $isdigittmp1;$n$04 = 0;
  while(1) {
   $9 = ($n$04*10)|0;
   $10 = ((($$13)) + 1|0);
   $11 = (($9) - ($isdigittmp5))|0;
   $12 = HEAP8[$10>>0]|0;
   $13 = $12 << 24 >> 24;
   $isdigittmp = (($13) + -48)|0;
   $isdigit = ($isdigittmp>>>0)<(10);
   if ($isdigit) {
    $$13 = $10;$isdigittmp5 = $isdigittmp;$n$04 = $11;
   } else {
    $n$0$lcssa = $11;
    break;
   }
  }
 } else {
  $n$0$lcssa = 0;
 }
 $14 = ($neg$1$ph|0)!=(0);
 $15 = (0 - ($n$0$lcssa))|0;
 $16 = $14 ? $n$0$lcssa : $15;
 return ($16|0);
}
function _malloc($bytes) {
 $bytes = $bytes|0;
 var $$0 = 0, $$lcssa = 0, $$lcssa141 = 0, $$lcssa142 = 0, $$lcssa144 = 0, $$lcssa147 = 0, $$lcssa149 = 0, $$lcssa151 = 0, $$lcssa153 = 0, $$lcssa155 = 0, $$lcssa157 = 0, $$not$i = 0, $$pre = 0, $$pre$i = 0, $$pre$i$i = 0, $$pre$i13 = 0, $$pre$i16$i = 0, $$pre$phi$i$iZ2D = 0, $$pre$phi$i14Z2D = 0, $$pre$phi$i17$iZ2D = 0;
 var $$pre$phi$iZ2D = 0, $$pre$phi10$i$iZ2D = 0, $$pre$phiZ2D = 0, $$pre71 = 0, $$pre9$i$i = 0, $$rsize$0$i = 0, $$rsize$4$i = 0, $$v$0$i = 0, $0 = 0, $1 = 0, $10 = 0, $100 = 0, $1000 = 0, $1001 = 0, $1002 = 0, $1003 = 0, $1004 = 0, $1005 = 0, $1006 = 0, $1007 = 0;
 var $1008 = 0, $1009 = 0, $101 = 0, $1010 = 0, $1011 = 0, $1012 = 0, $1013 = 0, $1014 = 0, $1015 = 0, $1016 = 0, $1017 = 0, $1018 = 0, $1019 = 0, $102 = 0, $1020 = 0, $1021 = 0, $1022 = 0, $1023 = 0, $1024 = 0, $1025 = 0;
 var $1026 = 0, $1027 = 0, $1028 = 0, $1029 = 0, $103 = 0, $1030 = 0, $1031 = 0, $1032 = 0, $1033 = 0, $1034 = 0, $1035 = 0, $1036 = 0, $1037 = 0, $1038 = 0, $1039 = 0, $104 = 0, $1040 = 0, $1041 = 0, $1042 = 0, $1043 = 0;
 var $1044 = 0, $1045 = 0, $1046 = 0, $1047 = 0, $1048 = 0, $1049 = 0, $105 = 0, $1050 = 0, $1051 = 0, $1052 = 0, $1053 = 0, $1054 = 0, $1055 = 0, $1056 = 0, $1057 = 0, $1058 = 0, $1059 = 0, $106 = 0, $107 = 0, $108 = 0;
 var $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0;
 var $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0;
 var $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0;
 var $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0;
 var $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0;
 var $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0;
 var $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0;
 var $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0;
 var $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0;
 var $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0;
 var $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0, $299 = 0, $3 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0;
 var $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0, $314 = 0, $315 = 0, $316 = 0, $317 = 0, $318 = 0, $319 = 0, $32 = 0, $320 = 0, $321 = 0, $322 = 0, $323 = 0, $324 = 0;
 var $325 = 0, $326 = 0, $327 = 0, $328 = 0, $329 = 0, $33 = 0, $330 = 0, $331 = 0, $332 = 0, $333 = 0, $334 = 0, $335 = 0, $336 = 0, $337 = 0, $338 = 0, $339 = 0, $34 = 0, $340 = 0, $341 = 0, $342 = 0;
 var $343 = 0, $344 = 0, $345 = 0, $346 = 0, $347 = 0, $348 = 0, $349 = 0, $35 = 0, $350 = 0, $351 = 0, $352 = 0, $353 = 0, $354 = 0, $355 = 0, $356 = 0, $357 = 0, $358 = 0, $359 = 0, $36 = 0, $360 = 0;
 var $361 = 0, $362 = 0, $363 = 0, $364 = 0, $365 = 0, $366 = 0, $367 = 0, $368 = 0, $369 = 0, $37 = 0, $370 = 0, $371 = 0, $372 = 0, $373 = 0, $374 = 0, $375 = 0, $376 = 0, $377 = 0, $378 = 0, $379 = 0;
 var $38 = 0, $380 = 0, $381 = 0, $382 = 0, $383 = 0, $384 = 0, $385 = 0, $386 = 0, $387 = 0, $388 = 0, $389 = 0, $39 = 0, $390 = 0, $391 = 0, $392 = 0, $393 = 0, $394 = 0, $395 = 0, $396 = 0, $397 = 0;
 var $398 = 0, $399 = 0, $4 = 0, $40 = 0, $400 = 0, $401 = 0, $402 = 0, $403 = 0, $404 = 0, $405 = 0, $406 = 0, $407 = 0, $408 = 0, $409 = 0, $41 = 0, $410 = 0, $411 = 0, $412 = 0, $413 = 0, $414 = 0;
 var $415 = 0, $416 = 0, $417 = 0, $418 = 0, $419 = 0, $42 = 0, $420 = 0, $421 = 0, $422 = 0, $423 = 0, $424 = 0, $425 = 0, $426 = 0, $427 = 0, $428 = 0, $429 = 0, $43 = 0, $430 = 0, $431 = 0, $432 = 0;
 var $433 = 0, $434 = 0, $435 = 0, $436 = 0, $437 = 0, $438 = 0, $439 = 0, $44 = 0, $440 = 0, $441 = 0, $442 = 0, $443 = 0, $444 = 0, $445 = 0, $446 = 0, $447 = 0, $448 = 0, $449 = 0, $45 = 0, $450 = 0;
 var $451 = 0, $452 = 0, $453 = 0, $454 = 0, $455 = 0, $456 = 0, $457 = 0, $458 = 0, $459 = 0, $46 = 0, $460 = 0, $461 = 0, $462 = 0, $463 = 0, $464 = 0, $465 = 0, $466 = 0, $467 = 0, $468 = 0, $469 = 0;
 var $47 = 0, $470 = 0, $471 = 0, $472 = 0, $473 = 0, $474 = 0, $475 = 0, $476 = 0, $477 = 0, $478 = 0, $479 = 0, $48 = 0, $480 = 0, $481 = 0, $482 = 0, $483 = 0, $484 = 0, $485 = 0, $486 = 0, $487 = 0;
 var $488 = 0, $489 = 0, $49 = 0, $490 = 0, $491 = 0, $492 = 0, $493 = 0, $494 = 0, $495 = 0, $496 = 0, $497 = 0, $498 = 0, $499 = 0, $5 = 0, $50 = 0, $500 = 0, $501 = 0, $502 = 0, $503 = 0, $504 = 0;
 var $505 = 0, $506 = 0, $507 = 0, $508 = 0, $509 = 0, $51 = 0, $510 = 0, $511 = 0, $512 = 0, $513 = 0, $514 = 0, $515 = 0, $516 = 0, $517 = 0, $518 = 0, $519 = 0, $52 = 0, $520 = 0, $521 = 0, $522 = 0;
 var $523 = 0, $524 = 0, $525 = 0, $526 = 0, $527 = 0, $528 = 0, $529 = 0, $53 = 0, $530 = 0, $531 = 0, $532 = 0, $533 = 0, $534 = 0, $535 = 0, $536 = 0, $537 = 0, $538 = 0, $539 = 0, $54 = 0, $540 = 0;
 var $541 = 0, $542 = 0, $543 = 0, $544 = 0, $545 = 0, $546 = 0, $547 = 0, $548 = 0, $549 = 0, $55 = 0, $550 = 0, $551 = 0, $552 = 0, $553 = 0, $554 = 0, $555 = 0, $556 = 0, $557 = 0, $558 = 0, $559 = 0;
 var $56 = 0, $560 = 0, $561 = 0, $562 = 0, $563 = 0, $564 = 0, $565 = 0, $566 = 0, $567 = 0, $568 = 0, $569 = 0, $57 = 0, $570 = 0, $571 = 0, $572 = 0, $573 = 0, $574 = 0, $575 = 0, $576 = 0, $577 = 0;
 var $578 = 0, $579 = 0, $58 = 0, $580 = 0, $581 = 0, $582 = 0, $583 = 0, $584 = 0, $585 = 0, $586 = 0, $587 = 0, $588 = 0, $589 = 0, $59 = 0, $590 = 0, $591 = 0, $592 = 0, $593 = 0, $594 = 0, $595 = 0;
 var $596 = 0, $597 = 0, $598 = 0, $599 = 0, $6 = 0, $60 = 0, $600 = 0, $601 = 0, $602 = 0, $603 = 0, $604 = 0, $605 = 0, $606 = 0, $607 = 0, $608 = 0, $609 = 0, $61 = 0, $610 = 0, $611 = 0, $612 = 0;
 var $613 = 0, $614 = 0, $615 = 0, $616 = 0, $617 = 0, $618 = 0, $619 = 0, $62 = 0, $620 = 0, $621 = 0, $622 = 0, $623 = 0, $624 = 0, $625 = 0, $626 = 0, $627 = 0, $628 = 0, $629 = 0, $63 = 0, $630 = 0;
 var $631 = 0, $632 = 0, $633 = 0, $634 = 0, $635 = 0, $636 = 0, $637 = 0, $638 = 0, $639 = 0, $64 = 0, $640 = 0, $641 = 0, $642 = 0, $643 = 0, $644 = 0, $645 = 0, $646 = 0, $647 = 0, $648 = 0, $649 = 0;
 var $65 = 0, $650 = 0, $651 = 0, $652 = 0, $653 = 0, $654 = 0, $655 = 0, $656 = 0, $657 = 0, $658 = 0, $659 = 0, $66 = 0, $660 = 0, $661 = 0, $662 = 0, $663 = 0, $664 = 0, $665 = 0, $666 = 0, $667 = 0;
 var $668 = 0, $669 = 0, $67 = 0, $670 = 0, $671 = 0, $672 = 0, $673 = 0, $674 = 0, $675 = 0, $676 = 0, $677 = 0, $678 = 0, $679 = 0, $68 = 0, $680 = 0, $681 = 0, $682 = 0, $683 = 0, $684 = 0, $685 = 0;
 var $686 = 0, $687 = 0, $688 = 0, $689 = 0, $69 = 0, $690 = 0, $691 = 0, $692 = 0, $693 = 0, $694 = 0, $695 = 0, $696 = 0, $697 = 0, $698 = 0, $699 = 0, $7 = 0, $70 = 0, $700 = 0, $701 = 0, $702 = 0;
 var $703 = 0, $704 = 0, $705 = 0, $706 = 0, $707 = 0, $708 = 0, $709 = 0, $71 = 0, $710 = 0, $711 = 0, $712 = 0, $713 = 0, $714 = 0, $715 = 0, $716 = 0, $717 = 0, $718 = 0, $719 = 0, $72 = 0, $720 = 0;
 var $721 = 0, $722 = 0, $723 = 0, $724 = 0, $725 = 0, $726 = 0, $727 = 0, $728 = 0, $729 = 0, $73 = 0, $730 = 0, $731 = 0, $732 = 0, $733 = 0, $734 = 0, $735 = 0, $736 = 0, $737 = 0, $738 = 0, $739 = 0;
 var $74 = 0, $740 = 0, $741 = 0, $742 = 0, $743 = 0, $744 = 0, $745 = 0, $746 = 0, $747 = 0, $748 = 0, $749 = 0, $75 = 0, $750 = 0, $751 = 0, $752 = 0, $753 = 0, $754 = 0, $755 = 0, $756 = 0, $757 = 0;
 var $758 = 0, $759 = 0, $76 = 0, $760 = 0, $761 = 0, $762 = 0, $763 = 0, $764 = 0, $765 = 0, $766 = 0, $767 = 0, $768 = 0, $769 = 0, $77 = 0, $770 = 0, $771 = 0, $772 = 0, $773 = 0, $774 = 0, $775 = 0;
 var $776 = 0, $777 = 0, $778 = 0, $779 = 0, $78 = 0, $780 = 0, $781 = 0, $782 = 0, $783 = 0, $784 = 0, $785 = 0, $786 = 0, $787 = 0, $788 = 0, $789 = 0, $79 = 0, $790 = 0, $791 = 0, $792 = 0, $793 = 0;
 var $794 = 0, $795 = 0, $796 = 0, $797 = 0, $798 = 0, $799 = 0, $8 = 0, $80 = 0, $800 = 0, $801 = 0, $802 = 0, $803 = 0, $804 = 0, $805 = 0, $806 = 0, $807 = 0, $808 = 0, $809 = 0, $81 = 0, $810 = 0;
 var $811 = 0, $812 = 0, $813 = 0, $814 = 0, $815 = 0, $816 = 0, $817 = 0, $818 = 0, $819 = 0, $82 = 0, $820 = 0, $821 = 0, $822 = 0, $823 = 0, $824 = 0, $825 = 0, $826 = 0, $827 = 0, $828 = 0, $829 = 0;
 var $83 = 0, $830 = 0, $831 = 0, $832 = 0, $833 = 0, $834 = 0, $835 = 0, $836 = 0, $837 = 0, $838 = 0, $839 = 0, $84 = 0, $840 = 0, $841 = 0, $842 = 0, $843 = 0, $844 = 0, $845 = 0, $846 = 0, $847 = 0;
 var $848 = 0, $849 = 0, $85 = 0, $850 = 0, $851 = 0, $852 = 0, $853 = 0, $854 = 0, $855 = 0, $856 = 0, $857 = 0, $858 = 0, $859 = 0, $86 = 0, $860 = 0, $861 = 0, $862 = 0, $863 = 0, $864 = 0, $865 = 0;
 var $866 = 0, $867 = 0, $868 = 0, $869 = 0, $87 = 0, $870 = 0, $871 = 0, $872 = 0, $873 = 0, $874 = 0, $875 = 0, $876 = 0, $877 = 0, $878 = 0, $879 = 0, $88 = 0, $880 = 0, $881 = 0, $882 = 0, $883 = 0;
 var $884 = 0, $885 = 0, $886 = 0, $887 = 0, $888 = 0, $889 = 0, $89 = 0, $890 = 0, $891 = 0, $892 = 0, $893 = 0, $894 = 0, $895 = 0, $896 = 0, $897 = 0, $898 = 0, $899 = 0, $9 = 0, $90 = 0, $900 = 0;
 var $901 = 0, $902 = 0, $903 = 0, $904 = 0, $905 = 0, $906 = 0, $907 = 0, $908 = 0, $909 = 0, $91 = 0, $910 = 0, $911 = 0, $912 = 0, $913 = 0, $914 = 0, $915 = 0, $916 = 0, $917 = 0, $918 = 0, $919 = 0;
 var $92 = 0, $920 = 0, $921 = 0, $922 = 0, $923 = 0, $924 = 0, $925 = 0, $926 = 0, $927 = 0, $928 = 0, $929 = 0, $93 = 0, $930 = 0, $931 = 0, $932 = 0, $933 = 0, $934 = 0, $935 = 0, $936 = 0, $937 = 0;
 var $938 = 0, $939 = 0, $94 = 0, $940 = 0, $941 = 0, $942 = 0, $943 = 0, $944 = 0, $945 = 0, $946 = 0, $947 = 0, $948 = 0, $949 = 0, $95 = 0, $950 = 0, $951 = 0, $952 = 0, $953 = 0, $954 = 0, $955 = 0;
 var $956 = 0, $957 = 0, $958 = 0, $959 = 0, $96 = 0, $960 = 0, $961 = 0, $962 = 0, $963 = 0, $964 = 0, $965 = 0, $966 = 0, $967 = 0, $968 = 0, $969 = 0, $97 = 0, $970 = 0, $971 = 0, $972 = 0, $973 = 0;
 var $974 = 0, $975 = 0, $976 = 0, $977 = 0, $978 = 0, $979 = 0, $98 = 0, $980 = 0, $981 = 0, $982 = 0, $983 = 0, $984 = 0, $985 = 0, $986 = 0, $987 = 0, $988 = 0, $989 = 0, $99 = 0, $990 = 0, $991 = 0;
 var $992 = 0, $993 = 0, $994 = 0, $995 = 0, $996 = 0, $997 = 0, $998 = 0, $999 = 0, $F$0$i$i = 0, $F1$0$i = 0, $F4$0 = 0, $F4$0$i$i = 0, $F5$0$i = 0, $I1$0$i$i = 0, $I7$0$i = 0, $I7$0$i$i = 0, $K12$0$i = 0, $K2$0$i$i = 0, $K8$0$i$i = 0, $R$1$i = 0;
 var $R$1$i$i = 0, $R$1$i$i$lcssa = 0, $R$1$i$lcssa = 0, $R$1$i9 = 0, $R$1$i9$lcssa = 0, $R$3$i = 0, $R$3$i$i = 0, $R$3$i11 = 0, $RP$1$i = 0, $RP$1$i$i = 0, $RP$1$i$i$lcssa = 0, $RP$1$i$lcssa = 0, $RP$1$i8 = 0, $RP$1$i8$lcssa = 0, $T$0$i = 0, $T$0$i$i = 0, $T$0$i$i$lcssa = 0, $T$0$i$i$lcssa140 = 0, $T$0$i$lcssa = 0, $T$0$i$lcssa156 = 0;
 var $T$0$i18$i = 0, $T$0$i18$i$lcssa = 0, $T$0$i18$i$lcssa139 = 0, $br$2$ph$i = 0, $cond$i = 0, $cond$i$i = 0, $cond$i12 = 0, $exitcond$i$i = 0, $i$01$i$i = 0, $idx$0$i = 0, $magic$i$i = 0, $nb$0 = 0, $not$$i$i = 0, $not$$i20$i = 0, $not$7$i = 0, $oldfirst$0$i$i = 0, $or$cond$i = 0, $or$cond$i17 = 0, $or$cond1$i = 0, $or$cond1$i16 = 0;
 var $or$cond10$i = 0, $or$cond11$i = 0, $or$cond2$i = 0, $or$cond48$i = 0, $or$cond5$i = 0, $or$cond7$i = 0, $or$cond8$i = 0, $p$0$i$i = 0, $qsize$0$i$i = 0, $rsize$0$i = 0, $rsize$0$i$lcssa = 0, $rsize$0$i5 = 0, $rsize$1$i = 0, $rsize$3$i = 0, $rsize$4$lcssa$i = 0, $rsize$412$i = 0, $rst$0$i = 0, $rst$1$i = 0, $sizebits$0$$i = 0, $sizebits$0$i = 0;
 var $sp$0$i$i = 0, $sp$0$i$i$i = 0, $sp$068$i = 0, $sp$068$i$lcssa = 0, $sp$167$i = 0, $sp$167$i$lcssa = 0, $ssize$0$i = 0, $ssize$2$ph$i = 0, $ssize$5$i = 0, $t$0$i = 0, $t$0$i4 = 0, $t$2$i = 0, $t$4$ph$i = 0, $t$4$v$4$i = 0, $t$411$i = 0, $tbase$746$i = 0, $tsize$745$i = 0, $v$0$i = 0, $v$0$i$lcssa = 0, $v$0$i6 = 0;
 var $v$1$i = 0, $v$3$i = 0, $v$4$lcssa$i = 0, $v$413$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abort();
 $magic$i$i = sp;
 $0 = ($bytes>>>0)<(245);
 do {
  if ($0) {
   $1 = ($bytes>>>0)<(11);
   $2 = (($bytes) + 11)|0;
   $3 = $2 & -8;
   $4 = $1 ? 16 : $3;
   $5 = $4 >>> 3;
   $6 = HEAP32[20709]|0;
   $7 = $6 >>> $5;
   $8 = $7 & 3;
   $9 = ($8|0)==(0);
   if (!($9)) {
    $10 = $7 & 1;
    $11 = $10 ^ 1;
    $12 = (($11) + ($5))|0;
    $13 = $12 << 1;
    $14 = (82876 + ($13<<2)|0);
    $15 = ((($14)) + 8|0);
    $16 = HEAP32[$15>>2]|0;
    $17 = ((($16)) + 8|0);
    $18 = HEAP32[$17>>2]|0;
    $19 = ($14|0)==($18|0);
    do {
     if ($19) {
      $20 = 1 << $12;
      $21 = $20 ^ -1;
      $22 = $6 & $21;
      HEAP32[20709] = $22;
     } else {
      $23 = HEAP32[(82852)>>2]|0;
      $24 = ($18>>>0)<($23>>>0);
      if ($24) {
       _abort();
       // unreachable;
      }
      $25 = ((($18)) + 12|0);
      $26 = HEAP32[$25>>2]|0;
      $27 = ($26|0)==($16|0);
      if ($27) {
       HEAP32[$25>>2] = $14;
       HEAP32[$15>>2] = $18;
       break;
      } else {
       _abort();
       // unreachable;
      }
     }
    } while(0);
    $28 = $12 << 3;
    $29 = $28 | 3;
    $30 = ((($16)) + 4|0);
    HEAP32[$30>>2] = $29;
    $31 = (($16) + ($28)|0);
    $32 = ((($31)) + 4|0);
    $33 = HEAP32[$32>>2]|0;
    $34 = $33 | 1;
    HEAP32[$32>>2] = $34;
    $$0 = $17;
    STACKTOP = sp;return ($$0|0);
   }
   $35 = HEAP32[(82844)>>2]|0;
   $36 = ($4>>>0)>($35>>>0);
   if ($36) {
    $37 = ($7|0)==(0);
    if (!($37)) {
     $38 = $7 << $5;
     $39 = 2 << $5;
     $40 = (0 - ($39))|0;
     $41 = $39 | $40;
     $42 = $38 & $41;
     $43 = (0 - ($42))|0;
     $44 = $42 & $43;
     $45 = (($44) + -1)|0;
     $46 = $45 >>> 12;
     $47 = $46 & 16;
     $48 = $45 >>> $47;
     $49 = $48 >>> 5;
     $50 = $49 & 8;
     $51 = $50 | $47;
     $52 = $48 >>> $50;
     $53 = $52 >>> 2;
     $54 = $53 & 4;
     $55 = $51 | $54;
     $56 = $52 >>> $54;
     $57 = $56 >>> 1;
     $58 = $57 & 2;
     $59 = $55 | $58;
     $60 = $56 >>> $58;
     $61 = $60 >>> 1;
     $62 = $61 & 1;
     $63 = $59 | $62;
     $64 = $60 >>> $62;
     $65 = (($63) + ($64))|0;
     $66 = $65 << 1;
     $67 = (82876 + ($66<<2)|0);
     $68 = ((($67)) + 8|0);
     $69 = HEAP32[$68>>2]|0;
     $70 = ((($69)) + 8|0);
     $71 = HEAP32[$70>>2]|0;
     $72 = ($67|0)==($71|0);
     do {
      if ($72) {
       $73 = 1 << $65;
       $74 = $73 ^ -1;
       $75 = $6 & $74;
       HEAP32[20709] = $75;
       $89 = $35;
      } else {
       $76 = HEAP32[(82852)>>2]|0;
       $77 = ($71>>>0)<($76>>>0);
       if ($77) {
        _abort();
        // unreachable;
       }
       $78 = ((($71)) + 12|0);
       $79 = HEAP32[$78>>2]|0;
       $80 = ($79|0)==($69|0);
       if ($80) {
        HEAP32[$78>>2] = $67;
        HEAP32[$68>>2] = $71;
        $$pre = HEAP32[(82844)>>2]|0;
        $89 = $$pre;
        break;
       } else {
        _abort();
        // unreachable;
       }
      }
     } while(0);
     $81 = $65 << 3;
     $82 = (($81) - ($4))|0;
     $83 = $4 | 3;
     $84 = ((($69)) + 4|0);
     HEAP32[$84>>2] = $83;
     $85 = (($69) + ($4)|0);
     $86 = $82 | 1;
     $87 = ((($85)) + 4|0);
     HEAP32[$87>>2] = $86;
     $88 = (($85) + ($82)|0);
     HEAP32[$88>>2] = $82;
     $90 = ($89|0)==(0);
     if (!($90)) {
      $91 = HEAP32[(82856)>>2]|0;
      $92 = $89 >>> 3;
      $93 = $92 << 1;
      $94 = (82876 + ($93<<2)|0);
      $95 = HEAP32[20709]|0;
      $96 = 1 << $92;
      $97 = $95 & $96;
      $98 = ($97|0)==(0);
      if ($98) {
       $99 = $95 | $96;
       HEAP32[20709] = $99;
       $$pre71 = ((($94)) + 8|0);
       $$pre$phiZ2D = $$pre71;$F4$0 = $94;
      } else {
       $100 = ((($94)) + 8|0);
       $101 = HEAP32[$100>>2]|0;
       $102 = HEAP32[(82852)>>2]|0;
       $103 = ($101>>>0)<($102>>>0);
       if ($103) {
        _abort();
        // unreachable;
       } else {
        $$pre$phiZ2D = $100;$F4$0 = $101;
       }
      }
      HEAP32[$$pre$phiZ2D>>2] = $91;
      $104 = ((($F4$0)) + 12|0);
      HEAP32[$104>>2] = $91;
      $105 = ((($91)) + 8|0);
      HEAP32[$105>>2] = $F4$0;
      $106 = ((($91)) + 12|0);
      HEAP32[$106>>2] = $94;
     }
     HEAP32[(82844)>>2] = $82;
     HEAP32[(82856)>>2] = $85;
     $$0 = $70;
     STACKTOP = sp;return ($$0|0);
    }
    $107 = HEAP32[(82840)>>2]|0;
    $108 = ($107|0)==(0);
    if ($108) {
     $nb$0 = $4;
    } else {
     $109 = (0 - ($107))|0;
     $110 = $107 & $109;
     $111 = (($110) + -1)|0;
     $112 = $111 >>> 12;
     $113 = $112 & 16;
     $114 = $111 >>> $113;
     $115 = $114 >>> 5;
     $116 = $115 & 8;
     $117 = $116 | $113;
     $118 = $114 >>> $116;
     $119 = $118 >>> 2;
     $120 = $119 & 4;
     $121 = $117 | $120;
     $122 = $118 >>> $120;
     $123 = $122 >>> 1;
     $124 = $123 & 2;
     $125 = $121 | $124;
     $126 = $122 >>> $124;
     $127 = $126 >>> 1;
     $128 = $127 & 1;
     $129 = $125 | $128;
     $130 = $126 >>> $128;
     $131 = (($129) + ($130))|0;
     $132 = (83140 + ($131<<2)|0);
     $133 = HEAP32[$132>>2]|0;
     $134 = ((($133)) + 4|0);
     $135 = HEAP32[$134>>2]|0;
     $136 = $135 & -8;
     $137 = (($136) - ($4))|0;
     $rsize$0$i = $137;$t$0$i = $133;$v$0$i = $133;
     while(1) {
      $138 = ((($t$0$i)) + 16|0);
      $139 = HEAP32[$138>>2]|0;
      $140 = ($139|0)==(0|0);
      if ($140) {
       $141 = ((($t$0$i)) + 20|0);
       $142 = HEAP32[$141>>2]|0;
       $143 = ($142|0)==(0|0);
       if ($143) {
        $rsize$0$i$lcssa = $rsize$0$i;$v$0$i$lcssa = $v$0$i;
        break;
       } else {
        $145 = $142;
       }
      } else {
       $145 = $139;
      }
      $144 = ((($145)) + 4|0);
      $146 = HEAP32[$144>>2]|0;
      $147 = $146 & -8;
      $148 = (($147) - ($4))|0;
      $149 = ($148>>>0)<($rsize$0$i>>>0);
      $$rsize$0$i = $149 ? $148 : $rsize$0$i;
      $$v$0$i = $149 ? $145 : $v$0$i;
      $rsize$0$i = $$rsize$0$i;$t$0$i = $145;$v$0$i = $$v$0$i;
     }
     $150 = HEAP32[(82852)>>2]|0;
     $151 = ($v$0$i$lcssa>>>0)<($150>>>0);
     if ($151) {
      _abort();
      // unreachable;
     }
     $152 = (($v$0$i$lcssa) + ($4)|0);
     $153 = ($v$0$i$lcssa>>>0)<($152>>>0);
     if (!($153)) {
      _abort();
      // unreachable;
     }
     $154 = ((($v$0$i$lcssa)) + 24|0);
     $155 = HEAP32[$154>>2]|0;
     $156 = ((($v$0$i$lcssa)) + 12|0);
     $157 = HEAP32[$156>>2]|0;
     $158 = ($157|0)==($v$0$i$lcssa|0);
     do {
      if ($158) {
       $168 = ((($v$0$i$lcssa)) + 20|0);
       $169 = HEAP32[$168>>2]|0;
       $170 = ($169|0)==(0|0);
       if ($170) {
        $171 = ((($v$0$i$lcssa)) + 16|0);
        $172 = HEAP32[$171>>2]|0;
        $173 = ($172|0)==(0|0);
        if ($173) {
         $R$3$i = 0;
         break;
        } else {
         $R$1$i = $172;$RP$1$i = $171;
        }
       } else {
        $R$1$i = $169;$RP$1$i = $168;
       }
       while(1) {
        $174 = ((($R$1$i)) + 20|0);
        $175 = HEAP32[$174>>2]|0;
        $176 = ($175|0)==(0|0);
        if (!($176)) {
         $R$1$i = $175;$RP$1$i = $174;
         continue;
        }
        $177 = ((($R$1$i)) + 16|0);
        $178 = HEAP32[$177>>2]|0;
        $179 = ($178|0)==(0|0);
        if ($179) {
         $R$1$i$lcssa = $R$1$i;$RP$1$i$lcssa = $RP$1$i;
         break;
        } else {
         $R$1$i = $178;$RP$1$i = $177;
        }
       }
       $180 = ($RP$1$i$lcssa>>>0)<($150>>>0);
       if ($180) {
        _abort();
        // unreachable;
       } else {
        HEAP32[$RP$1$i$lcssa>>2] = 0;
        $R$3$i = $R$1$i$lcssa;
        break;
       }
      } else {
       $159 = ((($v$0$i$lcssa)) + 8|0);
       $160 = HEAP32[$159>>2]|0;
       $161 = ($160>>>0)<($150>>>0);
       if ($161) {
        _abort();
        // unreachable;
       }
       $162 = ((($160)) + 12|0);
       $163 = HEAP32[$162>>2]|0;
       $164 = ($163|0)==($v$0$i$lcssa|0);
       if (!($164)) {
        _abort();
        // unreachable;
       }
       $165 = ((($157)) + 8|0);
       $166 = HEAP32[$165>>2]|0;
       $167 = ($166|0)==($v$0$i$lcssa|0);
       if ($167) {
        HEAP32[$162>>2] = $157;
        HEAP32[$165>>2] = $160;
        $R$3$i = $157;
        break;
       } else {
        _abort();
        // unreachable;
       }
      }
     } while(0);
     $181 = ($155|0)==(0|0);
     do {
      if (!($181)) {
       $182 = ((($v$0$i$lcssa)) + 28|0);
       $183 = HEAP32[$182>>2]|0;
       $184 = (83140 + ($183<<2)|0);
       $185 = HEAP32[$184>>2]|0;
       $186 = ($v$0$i$lcssa|0)==($185|0);
       if ($186) {
        HEAP32[$184>>2] = $R$3$i;
        $cond$i = ($R$3$i|0)==(0|0);
        if ($cond$i) {
         $187 = 1 << $183;
         $188 = $187 ^ -1;
         $189 = HEAP32[(82840)>>2]|0;
         $190 = $189 & $188;
         HEAP32[(82840)>>2] = $190;
         break;
        }
       } else {
        $191 = HEAP32[(82852)>>2]|0;
        $192 = ($155>>>0)<($191>>>0);
        if ($192) {
         _abort();
         // unreachable;
        }
        $193 = ((($155)) + 16|0);
        $194 = HEAP32[$193>>2]|0;
        $195 = ($194|0)==($v$0$i$lcssa|0);
        if ($195) {
         HEAP32[$193>>2] = $R$3$i;
        } else {
         $196 = ((($155)) + 20|0);
         HEAP32[$196>>2] = $R$3$i;
        }
        $197 = ($R$3$i|0)==(0|0);
        if ($197) {
         break;
        }
       }
       $198 = HEAP32[(82852)>>2]|0;
       $199 = ($R$3$i>>>0)<($198>>>0);
       if ($199) {
        _abort();
        // unreachable;
       }
       $200 = ((($R$3$i)) + 24|0);
       HEAP32[$200>>2] = $155;
       $201 = ((($v$0$i$lcssa)) + 16|0);
       $202 = HEAP32[$201>>2]|0;
       $203 = ($202|0)==(0|0);
       do {
        if (!($203)) {
         $204 = ($202>>>0)<($198>>>0);
         if ($204) {
          _abort();
          // unreachable;
         } else {
          $205 = ((($R$3$i)) + 16|0);
          HEAP32[$205>>2] = $202;
          $206 = ((($202)) + 24|0);
          HEAP32[$206>>2] = $R$3$i;
          break;
         }
        }
       } while(0);
       $207 = ((($v$0$i$lcssa)) + 20|0);
       $208 = HEAP32[$207>>2]|0;
       $209 = ($208|0)==(0|0);
       if (!($209)) {
        $210 = HEAP32[(82852)>>2]|0;
        $211 = ($208>>>0)<($210>>>0);
        if ($211) {
         _abort();
         // unreachable;
        } else {
         $212 = ((($R$3$i)) + 20|0);
         HEAP32[$212>>2] = $208;
         $213 = ((($208)) + 24|0);
         HEAP32[$213>>2] = $R$3$i;
         break;
        }
       }
      }
     } while(0);
     $214 = ($rsize$0$i$lcssa>>>0)<(16);
     if ($214) {
      $215 = (($rsize$0$i$lcssa) + ($4))|0;
      $216 = $215 | 3;
      $217 = ((($v$0$i$lcssa)) + 4|0);
      HEAP32[$217>>2] = $216;
      $218 = (($v$0$i$lcssa) + ($215)|0);
      $219 = ((($218)) + 4|0);
      $220 = HEAP32[$219>>2]|0;
      $221 = $220 | 1;
      HEAP32[$219>>2] = $221;
     } else {
      $222 = $4 | 3;
      $223 = ((($v$0$i$lcssa)) + 4|0);
      HEAP32[$223>>2] = $222;
      $224 = $rsize$0$i$lcssa | 1;
      $225 = ((($152)) + 4|0);
      HEAP32[$225>>2] = $224;
      $226 = (($152) + ($rsize$0$i$lcssa)|0);
      HEAP32[$226>>2] = $rsize$0$i$lcssa;
      $227 = HEAP32[(82844)>>2]|0;
      $228 = ($227|0)==(0);
      if (!($228)) {
       $229 = HEAP32[(82856)>>2]|0;
       $230 = $227 >>> 3;
       $231 = $230 << 1;
       $232 = (82876 + ($231<<2)|0);
       $233 = HEAP32[20709]|0;
       $234 = 1 << $230;
       $235 = $233 & $234;
       $236 = ($235|0)==(0);
       if ($236) {
        $237 = $233 | $234;
        HEAP32[20709] = $237;
        $$pre$i = ((($232)) + 8|0);
        $$pre$phi$iZ2D = $$pre$i;$F1$0$i = $232;
       } else {
        $238 = ((($232)) + 8|0);
        $239 = HEAP32[$238>>2]|0;
        $240 = HEAP32[(82852)>>2]|0;
        $241 = ($239>>>0)<($240>>>0);
        if ($241) {
         _abort();
         // unreachable;
        } else {
         $$pre$phi$iZ2D = $238;$F1$0$i = $239;
        }
       }
       HEAP32[$$pre$phi$iZ2D>>2] = $229;
       $242 = ((($F1$0$i)) + 12|0);
       HEAP32[$242>>2] = $229;
       $243 = ((($229)) + 8|0);
       HEAP32[$243>>2] = $F1$0$i;
       $244 = ((($229)) + 12|0);
       HEAP32[$244>>2] = $232;
      }
      HEAP32[(82844)>>2] = $rsize$0$i$lcssa;
      HEAP32[(82856)>>2] = $152;
     }
     $245 = ((($v$0$i$lcssa)) + 8|0);
     $$0 = $245;
     STACKTOP = sp;return ($$0|0);
    }
   } else {
    $nb$0 = $4;
   }
  } else {
   $246 = ($bytes>>>0)>(4294967231);
   if ($246) {
    $nb$0 = -1;
   } else {
    $247 = (($bytes) + 11)|0;
    $248 = $247 & -8;
    $249 = HEAP32[(82840)>>2]|0;
    $250 = ($249|0)==(0);
    if ($250) {
     $nb$0 = $248;
    } else {
     $251 = (0 - ($248))|0;
     $252 = $247 >>> 8;
     $253 = ($252|0)==(0);
     if ($253) {
      $idx$0$i = 0;
     } else {
      $254 = ($248>>>0)>(16777215);
      if ($254) {
       $idx$0$i = 31;
      } else {
       $255 = (($252) + 1048320)|0;
       $256 = $255 >>> 16;
       $257 = $256 & 8;
       $258 = $252 << $257;
       $259 = (($258) + 520192)|0;
       $260 = $259 >>> 16;
       $261 = $260 & 4;
       $262 = $261 | $257;
       $263 = $258 << $261;
       $264 = (($263) + 245760)|0;
       $265 = $264 >>> 16;
       $266 = $265 & 2;
       $267 = $262 | $266;
       $268 = (14 - ($267))|0;
       $269 = $263 << $266;
       $270 = $269 >>> 15;
       $271 = (($268) + ($270))|0;
       $272 = $271 << 1;
       $273 = (($271) + 7)|0;
       $274 = $248 >>> $273;
       $275 = $274 & 1;
       $276 = $275 | $272;
       $idx$0$i = $276;
      }
     }
     $277 = (83140 + ($idx$0$i<<2)|0);
     $278 = HEAP32[$277>>2]|0;
     $279 = ($278|0)==(0|0);
     L123: do {
      if ($279) {
       $rsize$3$i = $251;$t$2$i = 0;$v$3$i = 0;
       label = 86;
      } else {
       $280 = ($idx$0$i|0)==(31);
       $281 = $idx$0$i >>> 1;
       $282 = (25 - ($281))|0;
       $283 = $280 ? 0 : $282;
       $284 = $248 << $283;
       $rsize$0$i5 = $251;$rst$0$i = 0;$sizebits$0$i = $284;$t$0$i4 = $278;$v$0$i6 = 0;
       while(1) {
        $285 = ((($t$0$i4)) + 4|0);
        $286 = HEAP32[$285>>2]|0;
        $287 = $286 & -8;
        $288 = (($287) - ($248))|0;
        $289 = ($288>>>0)<($rsize$0$i5>>>0);
        if ($289) {
         $290 = ($287|0)==($248|0);
         if ($290) {
          $rsize$412$i = $288;$t$411$i = $t$0$i4;$v$413$i = $t$0$i4;
          label = 90;
          break L123;
         } else {
          $rsize$1$i = $288;$v$1$i = $t$0$i4;
         }
        } else {
         $rsize$1$i = $rsize$0$i5;$v$1$i = $v$0$i6;
        }
        $291 = ((($t$0$i4)) + 20|0);
        $292 = HEAP32[$291>>2]|0;
        $293 = $sizebits$0$i >>> 31;
        $294 = (((($t$0$i4)) + 16|0) + ($293<<2)|0);
        $295 = HEAP32[$294>>2]|0;
        $296 = ($292|0)==(0|0);
        $297 = ($292|0)==($295|0);
        $or$cond1$i = $296 | $297;
        $rst$1$i = $or$cond1$i ? $rst$0$i : $292;
        $298 = ($295|0)==(0|0);
        $299 = $298&1;
        $300 = $299 ^ 1;
        $sizebits$0$$i = $sizebits$0$i << $300;
        if ($298) {
         $rsize$3$i = $rsize$1$i;$t$2$i = $rst$1$i;$v$3$i = $v$1$i;
         label = 86;
         break;
        } else {
         $rsize$0$i5 = $rsize$1$i;$rst$0$i = $rst$1$i;$sizebits$0$i = $sizebits$0$$i;$t$0$i4 = $295;$v$0$i6 = $v$1$i;
        }
       }
      }
     } while(0);
     if ((label|0) == 86) {
      $301 = ($t$2$i|0)==(0|0);
      $302 = ($v$3$i|0)==(0|0);
      $or$cond$i = $301 & $302;
      if ($or$cond$i) {
       $303 = 2 << $idx$0$i;
       $304 = (0 - ($303))|0;
       $305 = $303 | $304;
       $306 = $249 & $305;
       $307 = ($306|0)==(0);
       if ($307) {
        $nb$0 = $248;
        break;
       }
       $308 = (0 - ($306))|0;
       $309 = $306 & $308;
       $310 = (($309) + -1)|0;
       $311 = $310 >>> 12;
       $312 = $311 & 16;
       $313 = $310 >>> $312;
       $314 = $313 >>> 5;
       $315 = $314 & 8;
       $316 = $315 | $312;
       $317 = $313 >>> $315;
       $318 = $317 >>> 2;
       $319 = $318 & 4;
       $320 = $316 | $319;
       $321 = $317 >>> $319;
       $322 = $321 >>> 1;
       $323 = $322 & 2;
       $324 = $320 | $323;
       $325 = $321 >>> $323;
       $326 = $325 >>> 1;
       $327 = $326 & 1;
       $328 = $324 | $327;
       $329 = $325 >>> $327;
       $330 = (($328) + ($329))|0;
       $331 = (83140 + ($330<<2)|0);
       $332 = HEAP32[$331>>2]|0;
       $t$4$ph$i = $332;
      } else {
       $t$4$ph$i = $t$2$i;
      }
      $333 = ($t$4$ph$i|0)==(0|0);
      if ($333) {
       $rsize$4$lcssa$i = $rsize$3$i;$v$4$lcssa$i = $v$3$i;
      } else {
       $rsize$412$i = $rsize$3$i;$t$411$i = $t$4$ph$i;$v$413$i = $v$3$i;
       label = 90;
      }
     }
     if ((label|0) == 90) {
      while(1) {
       label = 0;
       $334 = ((($t$411$i)) + 4|0);
       $335 = HEAP32[$334>>2]|0;
       $336 = $335 & -8;
       $337 = (($336) - ($248))|0;
       $338 = ($337>>>0)<($rsize$412$i>>>0);
       $$rsize$4$i = $338 ? $337 : $rsize$412$i;
       $t$4$v$4$i = $338 ? $t$411$i : $v$413$i;
       $339 = ((($t$411$i)) + 16|0);
       $340 = HEAP32[$339>>2]|0;
       $341 = ($340|0)==(0|0);
       if (!($341)) {
        $rsize$412$i = $$rsize$4$i;$t$411$i = $340;$v$413$i = $t$4$v$4$i;
        label = 90;
        continue;
       }
       $342 = ((($t$411$i)) + 20|0);
       $343 = HEAP32[$342>>2]|0;
       $344 = ($343|0)==(0|0);
       if ($344) {
        $rsize$4$lcssa$i = $$rsize$4$i;$v$4$lcssa$i = $t$4$v$4$i;
        break;
       } else {
        $rsize$412$i = $$rsize$4$i;$t$411$i = $343;$v$413$i = $t$4$v$4$i;
        label = 90;
       }
      }
     }
     $345 = ($v$4$lcssa$i|0)==(0|0);
     if ($345) {
      $nb$0 = $248;
     } else {
      $346 = HEAP32[(82844)>>2]|0;
      $347 = (($346) - ($248))|0;
      $348 = ($rsize$4$lcssa$i>>>0)<($347>>>0);
      if ($348) {
       $349 = HEAP32[(82852)>>2]|0;
       $350 = ($v$4$lcssa$i>>>0)<($349>>>0);
       if ($350) {
        _abort();
        // unreachable;
       }
       $351 = (($v$4$lcssa$i) + ($248)|0);
       $352 = ($v$4$lcssa$i>>>0)<($351>>>0);
       if (!($352)) {
        _abort();
        // unreachable;
       }
       $353 = ((($v$4$lcssa$i)) + 24|0);
       $354 = HEAP32[$353>>2]|0;
       $355 = ((($v$4$lcssa$i)) + 12|0);
       $356 = HEAP32[$355>>2]|0;
       $357 = ($356|0)==($v$4$lcssa$i|0);
       do {
        if ($357) {
         $367 = ((($v$4$lcssa$i)) + 20|0);
         $368 = HEAP32[$367>>2]|0;
         $369 = ($368|0)==(0|0);
         if ($369) {
          $370 = ((($v$4$lcssa$i)) + 16|0);
          $371 = HEAP32[$370>>2]|0;
          $372 = ($371|0)==(0|0);
          if ($372) {
           $R$3$i11 = 0;
           break;
          } else {
           $R$1$i9 = $371;$RP$1$i8 = $370;
          }
         } else {
          $R$1$i9 = $368;$RP$1$i8 = $367;
         }
         while(1) {
          $373 = ((($R$1$i9)) + 20|0);
          $374 = HEAP32[$373>>2]|0;
          $375 = ($374|0)==(0|0);
          if (!($375)) {
           $R$1$i9 = $374;$RP$1$i8 = $373;
           continue;
          }
          $376 = ((($R$1$i9)) + 16|0);
          $377 = HEAP32[$376>>2]|0;
          $378 = ($377|0)==(0|0);
          if ($378) {
           $R$1$i9$lcssa = $R$1$i9;$RP$1$i8$lcssa = $RP$1$i8;
           break;
          } else {
           $R$1$i9 = $377;$RP$1$i8 = $376;
          }
         }
         $379 = ($RP$1$i8$lcssa>>>0)<($349>>>0);
         if ($379) {
          _abort();
          // unreachable;
         } else {
          HEAP32[$RP$1$i8$lcssa>>2] = 0;
          $R$3$i11 = $R$1$i9$lcssa;
          break;
         }
        } else {
         $358 = ((($v$4$lcssa$i)) + 8|0);
         $359 = HEAP32[$358>>2]|0;
         $360 = ($359>>>0)<($349>>>0);
         if ($360) {
          _abort();
          // unreachable;
         }
         $361 = ((($359)) + 12|0);
         $362 = HEAP32[$361>>2]|0;
         $363 = ($362|0)==($v$4$lcssa$i|0);
         if (!($363)) {
          _abort();
          // unreachable;
         }
         $364 = ((($356)) + 8|0);
         $365 = HEAP32[$364>>2]|0;
         $366 = ($365|0)==($v$4$lcssa$i|0);
         if ($366) {
          HEAP32[$361>>2] = $356;
          HEAP32[$364>>2] = $359;
          $R$3$i11 = $356;
          break;
         } else {
          _abort();
          // unreachable;
         }
        }
       } while(0);
       $380 = ($354|0)==(0|0);
       do {
        if (!($380)) {
         $381 = ((($v$4$lcssa$i)) + 28|0);
         $382 = HEAP32[$381>>2]|0;
         $383 = (83140 + ($382<<2)|0);
         $384 = HEAP32[$383>>2]|0;
         $385 = ($v$4$lcssa$i|0)==($384|0);
         if ($385) {
          HEAP32[$383>>2] = $R$3$i11;
          $cond$i12 = ($R$3$i11|0)==(0|0);
          if ($cond$i12) {
           $386 = 1 << $382;
           $387 = $386 ^ -1;
           $388 = HEAP32[(82840)>>2]|0;
           $389 = $388 & $387;
           HEAP32[(82840)>>2] = $389;
           break;
          }
         } else {
          $390 = HEAP32[(82852)>>2]|0;
          $391 = ($354>>>0)<($390>>>0);
          if ($391) {
           _abort();
           // unreachable;
          }
          $392 = ((($354)) + 16|0);
          $393 = HEAP32[$392>>2]|0;
          $394 = ($393|0)==($v$4$lcssa$i|0);
          if ($394) {
           HEAP32[$392>>2] = $R$3$i11;
          } else {
           $395 = ((($354)) + 20|0);
           HEAP32[$395>>2] = $R$3$i11;
          }
          $396 = ($R$3$i11|0)==(0|0);
          if ($396) {
           break;
          }
         }
         $397 = HEAP32[(82852)>>2]|0;
         $398 = ($R$3$i11>>>0)<($397>>>0);
         if ($398) {
          _abort();
          // unreachable;
         }
         $399 = ((($R$3$i11)) + 24|0);
         HEAP32[$399>>2] = $354;
         $400 = ((($v$4$lcssa$i)) + 16|0);
         $401 = HEAP32[$400>>2]|0;
         $402 = ($401|0)==(0|0);
         do {
          if (!($402)) {
           $403 = ($401>>>0)<($397>>>0);
           if ($403) {
            _abort();
            // unreachable;
           } else {
            $404 = ((($R$3$i11)) + 16|0);
            HEAP32[$404>>2] = $401;
            $405 = ((($401)) + 24|0);
            HEAP32[$405>>2] = $R$3$i11;
            break;
           }
          }
         } while(0);
         $406 = ((($v$4$lcssa$i)) + 20|0);
         $407 = HEAP32[$406>>2]|0;
         $408 = ($407|0)==(0|0);
         if (!($408)) {
          $409 = HEAP32[(82852)>>2]|0;
          $410 = ($407>>>0)<($409>>>0);
          if ($410) {
           _abort();
           // unreachable;
          } else {
           $411 = ((($R$3$i11)) + 20|0);
           HEAP32[$411>>2] = $407;
           $412 = ((($407)) + 24|0);
           HEAP32[$412>>2] = $R$3$i11;
           break;
          }
         }
        }
       } while(0);
       $413 = ($rsize$4$lcssa$i>>>0)<(16);
       do {
        if ($413) {
         $414 = (($rsize$4$lcssa$i) + ($248))|0;
         $415 = $414 | 3;
         $416 = ((($v$4$lcssa$i)) + 4|0);
         HEAP32[$416>>2] = $415;
         $417 = (($v$4$lcssa$i) + ($414)|0);
         $418 = ((($417)) + 4|0);
         $419 = HEAP32[$418>>2]|0;
         $420 = $419 | 1;
         HEAP32[$418>>2] = $420;
        } else {
         $421 = $248 | 3;
         $422 = ((($v$4$lcssa$i)) + 4|0);
         HEAP32[$422>>2] = $421;
         $423 = $rsize$4$lcssa$i | 1;
         $424 = ((($351)) + 4|0);
         HEAP32[$424>>2] = $423;
         $425 = (($351) + ($rsize$4$lcssa$i)|0);
         HEAP32[$425>>2] = $rsize$4$lcssa$i;
         $426 = $rsize$4$lcssa$i >>> 3;
         $427 = ($rsize$4$lcssa$i>>>0)<(256);
         if ($427) {
          $428 = $426 << 1;
          $429 = (82876 + ($428<<2)|0);
          $430 = HEAP32[20709]|0;
          $431 = 1 << $426;
          $432 = $430 & $431;
          $433 = ($432|0)==(0);
          if ($433) {
           $434 = $430 | $431;
           HEAP32[20709] = $434;
           $$pre$i13 = ((($429)) + 8|0);
           $$pre$phi$i14Z2D = $$pre$i13;$F5$0$i = $429;
          } else {
           $435 = ((($429)) + 8|0);
           $436 = HEAP32[$435>>2]|0;
           $437 = HEAP32[(82852)>>2]|0;
           $438 = ($436>>>0)<($437>>>0);
           if ($438) {
            _abort();
            // unreachable;
           } else {
            $$pre$phi$i14Z2D = $435;$F5$0$i = $436;
           }
          }
          HEAP32[$$pre$phi$i14Z2D>>2] = $351;
          $439 = ((($F5$0$i)) + 12|0);
          HEAP32[$439>>2] = $351;
          $440 = ((($351)) + 8|0);
          HEAP32[$440>>2] = $F5$0$i;
          $441 = ((($351)) + 12|0);
          HEAP32[$441>>2] = $429;
          break;
         }
         $442 = $rsize$4$lcssa$i >>> 8;
         $443 = ($442|0)==(0);
         if ($443) {
          $I7$0$i = 0;
         } else {
          $444 = ($rsize$4$lcssa$i>>>0)>(16777215);
          if ($444) {
           $I7$0$i = 31;
          } else {
           $445 = (($442) + 1048320)|0;
           $446 = $445 >>> 16;
           $447 = $446 & 8;
           $448 = $442 << $447;
           $449 = (($448) + 520192)|0;
           $450 = $449 >>> 16;
           $451 = $450 & 4;
           $452 = $451 | $447;
           $453 = $448 << $451;
           $454 = (($453) + 245760)|0;
           $455 = $454 >>> 16;
           $456 = $455 & 2;
           $457 = $452 | $456;
           $458 = (14 - ($457))|0;
           $459 = $453 << $456;
           $460 = $459 >>> 15;
           $461 = (($458) + ($460))|0;
           $462 = $461 << 1;
           $463 = (($461) + 7)|0;
           $464 = $rsize$4$lcssa$i >>> $463;
           $465 = $464 & 1;
           $466 = $465 | $462;
           $I7$0$i = $466;
          }
         }
         $467 = (83140 + ($I7$0$i<<2)|0);
         $468 = ((($351)) + 28|0);
         HEAP32[$468>>2] = $I7$0$i;
         $469 = ((($351)) + 16|0);
         $470 = ((($469)) + 4|0);
         HEAP32[$470>>2] = 0;
         HEAP32[$469>>2] = 0;
         $471 = HEAP32[(82840)>>2]|0;
         $472 = 1 << $I7$0$i;
         $473 = $471 & $472;
         $474 = ($473|0)==(0);
         if ($474) {
          $475 = $471 | $472;
          HEAP32[(82840)>>2] = $475;
          HEAP32[$467>>2] = $351;
          $476 = ((($351)) + 24|0);
          HEAP32[$476>>2] = $467;
          $477 = ((($351)) + 12|0);
          HEAP32[$477>>2] = $351;
          $478 = ((($351)) + 8|0);
          HEAP32[$478>>2] = $351;
          break;
         }
         $479 = HEAP32[$467>>2]|0;
         $480 = ($I7$0$i|0)==(31);
         $481 = $I7$0$i >>> 1;
         $482 = (25 - ($481))|0;
         $483 = $480 ? 0 : $482;
         $484 = $rsize$4$lcssa$i << $483;
         $K12$0$i = $484;$T$0$i = $479;
         while(1) {
          $485 = ((($T$0$i)) + 4|0);
          $486 = HEAP32[$485>>2]|0;
          $487 = $486 & -8;
          $488 = ($487|0)==($rsize$4$lcssa$i|0);
          if ($488) {
           $T$0$i$lcssa = $T$0$i;
           label = 148;
           break;
          }
          $489 = $K12$0$i >>> 31;
          $490 = (((($T$0$i)) + 16|0) + ($489<<2)|0);
          $491 = $K12$0$i << 1;
          $492 = HEAP32[$490>>2]|0;
          $493 = ($492|0)==(0|0);
          if ($493) {
           $$lcssa157 = $490;$T$0$i$lcssa156 = $T$0$i;
           label = 145;
           break;
          } else {
           $K12$0$i = $491;$T$0$i = $492;
          }
         }
         if ((label|0) == 145) {
          $494 = HEAP32[(82852)>>2]|0;
          $495 = ($$lcssa157>>>0)<($494>>>0);
          if ($495) {
           _abort();
           // unreachable;
          } else {
           HEAP32[$$lcssa157>>2] = $351;
           $496 = ((($351)) + 24|0);
           HEAP32[$496>>2] = $T$0$i$lcssa156;
           $497 = ((($351)) + 12|0);
           HEAP32[$497>>2] = $351;
           $498 = ((($351)) + 8|0);
           HEAP32[$498>>2] = $351;
           break;
          }
         }
         else if ((label|0) == 148) {
          $499 = ((($T$0$i$lcssa)) + 8|0);
          $500 = HEAP32[$499>>2]|0;
          $501 = HEAP32[(82852)>>2]|0;
          $502 = ($500>>>0)>=($501>>>0);
          $not$7$i = ($T$0$i$lcssa>>>0)>=($501>>>0);
          $503 = $502 & $not$7$i;
          if ($503) {
           $504 = ((($500)) + 12|0);
           HEAP32[$504>>2] = $351;
           HEAP32[$499>>2] = $351;
           $505 = ((($351)) + 8|0);
           HEAP32[$505>>2] = $500;
           $506 = ((($351)) + 12|0);
           HEAP32[$506>>2] = $T$0$i$lcssa;
           $507 = ((($351)) + 24|0);
           HEAP32[$507>>2] = 0;
           break;
          } else {
           _abort();
           // unreachable;
          }
         }
        }
       } while(0);
       $508 = ((($v$4$lcssa$i)) + 8|0);
       $$0 = $508;
       STACKTOP = sp;return ($$0|0);
      } else {
       $nb$0 = $248;
      }
     }
    }
   }
  }
 } while(0);
 $509 = HEAP32[(82844)>>2]|0;
 $510 = ($509>>>0)<($nb$0>>>0);
 if (!($510)) {
  $511 = (($509) - ($nb$0))|0;
  $512 = HEAP32[(82856)>>2]|0;
  $513 = ($511>>>0)>(15);
  if ($513) {
   $514 = (($512) + ($nb$0)|0);
   HEAP32[(82856)>>2] = $514;
   HEAP32[(82844)>>2] = $511;
   $515 = $511 | 1;
   $516 = ((($514)) + 4|0);
   HEAP32[$516>>2] = $515;
   $517 = (($514) + ($511)|0);
   HEAP32[$517>>2] = $511;
   $518 = $nb$0 | 3;
   $519 = ((($512)) + 4|0);
   HEAP32[$519>>2] = $518;
  } else {
   HEAP32[(82844)>>2] = 0;
   HEAP32[(82856)>>2] = 0;
   $520 = $509 | 3;
   $521 = ((($512)) + 4|0);
   HEAP32[$521>>2] = $520;
   $522 = (($512) + ($509)|0);
   $523 = ((($522)) + 4|0);
   $524 = HEAP32[$523>>2]|0;
   $525 = $524 | 1;
   HEAP32[$523>>2] = $525;
  }
  $526 = ((($512)) + 8|0);
  $$0 = $526;
  STACKTOP = sp;return ($$0|0);
 }
 $527 = HEAP32[(82848)>>2]|0;
 $528 = ($527>>>0)>($nb$0>>>0);
 if ($528) {
  $529 = (($527) - ($nb$0))|0;
  HEAP32[(82848)>>2] = $529;
  $530 = HEAP32[(82860)>>2]|0;
  $531 = (($530) + ($nb$0)|0);
  HEAP32[(82860)>>2] = $531;
  $532 = $529 | 1;
  $533 = ((($531)) + 4|0);
  HEAP32[$533>>2] = $532;
  $534 = $nb$0 | 3;
  $535 = ((($530)) + 4|0);
  HEAP32[$535>>2] = $534;
  $536 = ((($530)) + 8|0);
  $$0 = $536;
  STACKTOP = sp;return ($$0|0);
 }
 $537 = HEAP32[20827]|0;
 $538 = ($537|0)==(0);
 if ($538) {
  HEAP32[(83316)>>2] = 4096;
  HEAP32[(83312)>>2] = 4096;
  HEAP32[(83320)>>2] = -1;
  HEAP32[(83324)>>2] = -1;
  HEAP32[(83328)>>2] = 0;
  HEAP32[(83280)>>2] = 0;
  $539 = $magic$i$i;
  $540 = $539 & -16;
  $541 = $540 ^ 1431655768;
  HEAP32[$magic$i$i>>2] = $541;
  HEAP32[20827] = $541;
 }
 $542 = (($nb$0) + 48)|0;
 $543 = HEAP32[(83316)>>2]|0;
 $544 = (($nb$0) + 47)|0;
 $545 = (($543) + ($544))|0;
 $546 = (0 - ($543))|0;
 $547 = $545 & $546;
 $548 = ($547>>>0)>($nb$0>>>0);
 if (!($548)) {
  $$0 = 0;
  STACKTOP = sp;return ($$0|0);
 }
 $549 = HEAP32[(83276)>>2]|0;
 $550 = ($549|0)==(0);
 if (!($550)) {
  $551 = HEAP32[(83268)>>2]|0;
  $552 = (($551) + ($547))|0;
  $553 = ($552>>>0)<=($551>>>0);
  $554 = ($552>>>0)>($549>>>0);
  $or$cond1$i16 = $553 | $554;
  if ($or$cond1$i16) {
   $$0 = 0;
   STACKTOP = sp;return ($$0|0);
  }
 }
 $555 = HEAP32[(83280)>>2]|0;
 $556 = $555 & 4;
 $557 = ($556|0)==(0);
 L254: do {
  if ($557) {
   $558 = HEAP32[(82860)>>2]|0;
   $559 = ($558|0)==(0|0);
   L256: do {
    if ($559) {
     label = 171;
    } else {
     $sp$0$i$i = (83284);
     while(1) {
      $560 = HEAP32[$sp$0$i$i>>2]|0;
      $561 = ($560>>>0)>($558>>>0);
      if (!($561)) {
       $562 = ((($sp$0$i$i)) + 4|0);
       $563 = HEAP32[$562>>2]|0;
       $564 = (($560) + ($563)|0);
       $565 = ($564>>>0)>($558>>>0);
       if ($565) {
        $$lcssa153 = $sp$0$i$i;$$lcssa155 = $562;
        break;
       }
      }
      $566 = ((($sp$0$i$i)) + 8|0);
      $567 = HEAP32[$566>>2]|0;
      $568 = ($567|0)==(0|0);
      if ($568) {
       label = 171;
       break L256;
      } else {
       $sp$0$i$i = $567;
      }
     }
     $591 = HEAP32[(82848)>>2]|0;
     $592 = (($545) - ($591))|0;
     $593 = $592 & $546;
     $594 = ($593>>>0)<(2147483647);
     if ($594) {
      $595 = (_sbrk(($593|0))|0);
      $596 = HEAP32[$$lcssa153>>2]|0;
      $597 = HEAP32[$$lcssa155>>2]|0;
      $598 = (($596) + ($597)|0);
      $599 = ($595|0)==($598|0);
      if ($599) {
       $600 = ($595|0)==((-1)|0);
       if (!($600)) {
        $tbase$746$i = $595;$tsize$745$i = $593;
        label = 191;
        break L254;
       }
      } else {
       $br$2$ph$i = $595;$ssize$2$ph$i = $593;
       label = 181;
      }
     }
    }
   } while(0);
   do {
    if ((label|0) == 171) {
     $569 = (_sbrk(0)|0);
     $570 = ($569|0)==((-1)|0);
     if (!($570)) {
      $571 = $569;
      $572 = HEAP32[(83312)>>2]|0;
      $573 = (($572) + -1)|0;
      $574 = $573 & $571;
      $575 = ($574|0)==(0);
      if ($575) {
       $ssize$0$i = $547;
      } else {
       $576 = (($573) + ($571))|0;
       $577 = (0 - ($572))|0;
       $578 = $576 & $577;
       $579 = (($547) - ($571))|0;
       $580 = (($579) + ($578))|0;
       $ssize$0$i = $580;
      }
      $581 = HEAP32[(83268)>>2]|0;
      $582 = (($581) + ($ssize$0$i))|0;
      $583 = ($ssize$0$i>>>0)>($nb$0>>>0);
      $584 = ($ssize$0$i>>>0)<(2147483647);
      $or$cond$i17 = $583 & $584;
      if ($or$cond$i17) {
       $585 = HEAP32[(83276)>>2]|0;
       $586 = ($585|0)==(0);
       if (!($586)) {
        $587 = ($582>>>0)<=($581>>>0);
        $588 = ($582>>>0)>($585>>>0);
        $or$cond2$i = $587 | $588;
        if ($or$cond2$i) {
         break;
        }
       }
       $589 = (_sbrk(($ssize$0$i|0))|0);
       $590 = ($589|0)==($569|0);
       if ($590) {
        $tbase$746$i = $569;$tsize$745$i = $ssize$0$i;
        label = 191;
        break L254;
       } else {
        $br$2$ph$i = $589;$ssize$2$ph$i = $ssize$0$i;
        label = 181;
       }
      }
     }
    }
   } while(0);
   L276: do {
    if ((label|0) == 181) {
     $601 = (0 - ($ssize$2$ph$i))|0;
     $602 = ($br$2$ph$i|0)!=((-1)|0);
     $603 = ($ssize$2$ph$i>>>0)<(2147483647);
     $or$cond7$i = $603 & $602;
     $604 = ($542>>>0)>($ssize$2$ph$i>>>0);
     $or$cond8$i = $604 & $or$cond7$i;
     do {
      if ($or$cond8$i) {
       $605 = HEAP32[(83316)>>2]|0;
       $606 = (($544) - ($ssize$2$ph$i))|0;
       $607 = (($606) + ($605))|0;
       $608 = (0 - ($605))|0;
       $609 = $607 & $608;
       $610 = ($609>>>0)<(2147483647);
       if ($610) {
        $611 = (_sbrk(($609|0))|0);
        $612 = ($611|0)==((-1)|0);
        if ($612) {
         (_sbrk(($601|0))|0);
         break L276;
        } else {
         $613 = (($609) + ($ssize$2$ph$i))|0;
         $ssize$5$i = $613;
         break;
        }
       } else {
        $ssize$5$i = $ssize$2$ph$i;
       }
      } else {
       $ssize$5$i = $ssize$2$ph$i;
      }
     } while(0);
     $614 = ($br$2$ph$i|0)==((-1)|0);
     if (!($614)) {
      $tbase$746$i = $br$2$ph$i;$tsize$745$i = $ssize$5$i;
      label = 191;
      break L254;
     }
    }
   } while(0);
   $615 = HEAP32[(83280)>>2]|0;
   $616 = $615 | 4;
   HEAP32[(83280)>>2] = $616;
   label = 188;
  } else {
   label = 188;
  }
 } while(0);
 if ((label|0) == 188) {
  $617 = ($547>>>0)<(2147483647);
  if ($617) {
   $618 = (_sbrk(($547|0))|0);
   $619 = (_sbrk(0)|0);
   $620 = ($618|0)!=((-1)|0);
   $621 = ($619|0)!=((-1)|0);
   $or$cond5$i = $620 & $621;
   $622 = ($618>>>0)<($619>>>0);
   $or$cond10$i = $622 & $or$cond5$i;
   if ($or$cond10$i) {
    $623 = $619;
    $624 = $618;
    $625 = (($623) - ($624))|0;
    $626 = (($nb$0) + 40)|0;
    $$not$i = ($625>>>0)>($626>>>0);
    if ($$not$i) {
     $tbase$746$i = $618;$tsize$745$i = $625;
     label = 191;
    }
   }
  }
 }
 if ((label|0) == 191) {
  $627 = HEAP32[(83268)>>2]|0;
  $628 = (($627) + ($tsize$745$i))|0;
  HEAP32[(83268)>>2] = $628;
  $629 = HEAP32[(83272)>>2]|0;
  $630 = ($628>>>0)>($629>>>0);
  if ($630) {
   HEAP32[(83272)>>2] = $628;
  }
  $631 = HEAP32[(82860)>>2]|0;
  $632 = ($631|0)==(0|0);
  do {
   if ($632) {
    $633 = HEAP32[(82852)>>2]|0;
    $634 = ($633|0)==(0|0);
    $635 = ($tbase$746$i>>>0)<($633>>>0);
    $or$cond11$i = $634 | $635;
    if ($or$cond11$i) {
     HEAP32[(82852)>>2] = $tbase$746$i;
    }
    HEAP32[(83284)>>2] = $tbase$746$i;
    HEAP32[(83288)>>2] = $tsize$745$i;
    HEAP32[(83296)>>2] = 0;
    $636 = HEAP32[20827]|0;
    HEAP32[(82872)>>2] = $636;
    HEAP32[(82868)>>2] = -1;
    $i$01$i$i = 0;
    while(1) {
     $637 = $i$01$i$i << 1;
     $638 = (82876 + ($637<<2)|0);
     $639 = ((($638)) + 12|0);
     HEAP32[$639>>2] = $638;
     $640 = ((($638)) + 8|0);
     HEAP32[$640>>2] = $638;
     $641 = (($i$01$i$i) + 1)|0;
     $exitcond$i$i = ($641|0)==(32);
     if ($exitcond$i$i) {
      break;
     } else {
      $i$01$i$i = $641;
     }
    }
    $642 = (($tsize$745$i) + -40)|0;
    $643 = ((($tbase$746$i)) + 8|0);
    $644 = $643;
    $645 = $644 & 7;
    $646 = ($645|0)==(0);
    $647 = (0 - ($644))|0;
    $648 = $647 & 7;
    $649 = $646 ? 0 : $648;
    $650 = (($tbase$746$i) + ($649)|0);
    $651 = (($642) - ($649))|0;
    HEAP32[(82860)>>2] = $650;
    HEAP32[(82848)>>2] = $651;
    $652 = $651 | 1;
    $653 = ((($650)) + 4|0);
    HEAP32[$653>>2] = $652;
    $654 = (($650) + ($651)|0);
    $655 = ((($654)) + 4|0);
    HEAP32[$655>>2] = 40;
    $656 = HEAP32[(83324)>>2]|0;
    HEAP32[(82864)>>2] = $656;
   } else {
    $sp$068$i = (83284);
    while(1) {
     $657 = HEAP32[$sp$068$i>>2]|0;
     $658 = ((($sp$068$i)) + 4|0);
     $659 = HEAP32[$658>>2]|0;
     $660 = (($657) + ($659)|0);
     $661 = ($tbase$746$i|0)==($660|0);
     if ($661) {
      $$lcssa147 = $657;$$lcssa149 = $658;$$lcssa151 = $659;$sp$068$i$lcssa = $sp$068$i;
      label = 201;
      break;
     }
     $662 = ((($sp$068$i)) + 8|0);
     $663 = HEAP32[$662>>2]|0;
     $664 = ($663|0)==(0|0);
     if ($664) {
      break;
     } else {
      $sp$068$i = $663;
     }
    }
    if ((label|0) == 201) {
     $665 = ((($sp$068$i$lcssa)) + 12|0);
     $666 = HEAP32[$665>>2]|0;
     $667 = $666 & 8;
     $668 = ($667|0)==(0);
     if ($668) {
      $669 = ($631>>>0)>=($$lcssa147>>>0);
      $670 = ($631>>>0)<($tbase$746$i>>>0);
      $or$cond48$i = $670 & $669;
      if ($or$cond48$i) {
       $671 = (($$lcssa151) + ($tsize$745$i))|0;
       HEAP32[$$lcssa149>>2] = $671;
       $672 = HEAP32[(82848)>>2]|0;
       $673 = ((($631)) + 8|0);
       $674 = $673;
       $675 = $674 & 7;
       $676 = ($675|0)==(0);
       $677 = (0 - ($674))|0;
       $678 = $677 & 7;
       $679 = $676 ? 0 : $678;
       $680 = (($631) + ($679)|0);
       $681 = (($tsize$745$i) - ($679))|0;
       $682 = (($681) + ($672))|0;
       HEAP32[(82860)>>2] = $680;
       HEAP32[(82848)>>2] = $682;
       $683 = $682 | 1;
       $684 = ((($680)) + 4|0);
       HEAP32[$684>>2] = $683;
       $685 = (($680) + ($682)|0);
       $686 = ((($685)) + 4|0);
       HEAP32[$686>>2] = 40;
       $687 = HEAP32[(83324)>>2]|0;
       HEAP32[(82864)>>2] = $687;
       break;
      }
     }
    }
    $688 = HEAP32[(82852)>>2]|0;
    $689 = ($tbase$746$i>>>0)<($688>>>0);
    if ($689) {
     HEAP32[(82852)>>2] = $tbase$746$i;
     $753 = $tbase$746$i;
    } else {
     $753 = $688;
    }
    $690 = (($tbase$746$i) + ($tsize$745$i)|0);
    $sp$167$i = (83284);
    while(1) {
     $691 = HEAP32[$sp$167$i>>2]|0;
     $692 = ($691|0)==($690|0);
     if ($692) {
      $$lcssa144 = $sp$167$i;$sp$167$i$lcssa = $sp$167$i;
      label = 209;
      break;
     }
     $693 = ((($sp$167$i)) + 8|0);
     $694 = HEAP32[$693>>2]|0;
     $695 = ($694|0)==(0|0);
     if ($695) {
      $sp$0$i$i$i = (83284);
      break;
     } else {
      $sp$167$i = $694;
     }
    }
    if ((label|0) == 209) {
     $696 = ((($sp$167$i$lcssa)) + 12|0);
     $697 = HEAP32[$696>>2]|0;
     $698 = $697 & 8;
     $699 = ($698|0)==(0);
     if ($699) {
      HEAP32[$$lcssa144>>2] = $tbase$746$i;
      $700 = ((($sp$167$i$lcssa)) + 4|0);
      $701 = HEAP32[$700>>2]|0;
      $702 = (($701) + ($tsize$745$i))|0;
      HEAP32[$700>>2] = $702;
      $703 = ((($tbase$746$i)) + 8|0);
      $704 = $703;
      $705 = $704 & 7;
      $706 = ($705|0)==(0);
      $707 = (0 - ($704))|0;
      $708 = $707 & 7;
      $709 = $706 ? 0 : $708;
      $710 = (($tbase$746$i) + ($709)|0);
      $711 = ((($690)) + 8|0);
      $712 = $711;
      $713 = $712 & 7;
      $714 = ($713|0)==(0);
      $715 = (0 - ($712))|0;
      $716 = $715 & 7;
      $717 = $714 ? 0 : $716;
      $718 = (($690) + ($717)|0);
      $719 = $718;
      $720 = $710;
      $721 = (($719) - ($720))|0;
      $722 = (($710) + ($nb$0)|0);
      $723 = (($721) - ($nb$0))|0;
      $724 = $nb$0 | 3;
      $725 = ((($710)) + 4|0);
      HEAP32[$725>>2] = $724;
      $726 = ($718|0)==($631|0);
      do {
       if ($726) {
        $727 = HEAP32[(82848)>>2]|0;
        $728 = (($727) + ($723))|0;
        HEAP32[(82848)>>2] = $728;
        HEAP32[(82860)>>2] = $722;
        $729 = $728 | 1;
        $730 = ((($722)) + 4|0);
        HEAP32[$730>>2] = $729;
       } else {
        $731 = HEAP32[(82856)>>2]|0;
        $732 = ($718|0)==($731|0);
        if ($732) {
         $733 = HEAP32[(82844)>>2]|0;
         $734 = (($733) + ($723))|0;
         HEAP32[(82844)>>2] = $734;
         HEAP32[(82856)>>2] = $722;
         $735 = $734 | 1;
         $736 = ((($722)) + 4|0);
         HEAP32[$736>>2] = $735;
         $737 = (($722) + ($734)|0);
         HEAP32[$737>>2] = $734;
         break;
        }
        $738 = ((($718)) + 4|0);
        $739 = HEAP32[$738>>2]|0;
        $740 = $739 & 3;
        $741 = ($740|0)==(1);
        if ($741) {
         $742 = $739 & -8;
         $743 = $739 >>> 3;
         $744 = ($739>>>0)<(256);
         L328: do {
          if ($744) {
           $745 = ((($718)) + 8|0);
           $746 = HEAP32[$745>>2]|0;
           $747 = ((($718)) + 12|0);
           $748 = HEAP32[$747>>2]|0;
           $749 = $743 << 1;
           $750 = (82876 + ($749<<2)|0);
           $751 = ($746|0)==($750|0);
           do {
            if (!($751)) {
             $752 = ($746>>>0)<($753>>>0);
             if ($752) {
              _abort();
              // unreachable;
             }
             $754 = ((($746)) + 12|0);
             $755 = HEAP32[$754>>2]|0;
             $756 = ($755|0)==($718|0);
             if ($756) {
              break;
             }
             _abort();
             // unreachable;
            }
           } while(0);
           $757 = ($748|0)==($746|0);
           if ($757) {
            $758 = 1 << $743;
            $759 = $758 ^ -1;
            $760 = HEAP32[20709]|0;
            $761 = $760 & $759;
            HEAP32[20709] = $761;
            break;
           }
           $762 = ($748|0)==($750|0);
           do {
            if ($762) {
             $$pre9$i$i = ((($748)) + 8|0);
             $$pre$phi10$i$iZ2D = $$pre9$i$i;
            } else {
             $763 = ($748>>>0)<($753>>>0);
             if ($763) {
              _abort();
              // unreachable;
             }
             $764 = ((($748)) + 8|0);
             $765 = HEAP32[$764>>2]|0;
             $766 = ($765|0)==($718|0);
             if ($766) {
              $$pre$phi10$i$iZ2D = $764;
              break;
             }
             _abort();
             // unreachable;
            }
           } while(0);
           $767 = ((($746)) + 12|0);
           HEAP32[$767>>2] = $748;
           HEAP32[$$pre$phi10$i$iZ2D>>2] = $746;
          } else {
           $768 = ((($718)) + 24|0);
           $769 = HEAP32[$768>>2]|0;
           $770 = ((($718)) + 12|0);
           $771 = HEAP32[$770>>2]|0;
           $772 = ($771|0)==($718|0);
           do {
            if ($772) {
             $782 = ((($718)) + 16|0);
             $783 = ((($782)) + 4|0);
             $784 = HEAP32[$783>>2]|0;
             $785 = ($784|0)==(0|0);
             if ($785) {
              $786 = HEAP32[$782>>2]|0;
              $787 = ($786|0)==(0|0);
              if ($787) {
               $R$3$i$i = 0;
               break;
              } else {
               $R$1$i$i = $786;$RP$1$i$i = $782;
              }
             } else {
              $R$1$i$i = $784;$RP$1$i$i = $783;
             }
             while(1) {
              $788 = ((($R$1$i$i)) + 20|0);
              $789 = HEAP32[$788>>2]|0;
              $790 = ($789|0)==(0|0);
              if (!($790)) {
               $R$1$i$i = $789;$RP$1$i$i = $788;
               continue;
              }
              $791 = ((($R$1$i$i)) + 16|0);
              $792 = HEAP32[$791>>2]|0;
              $793 = ($792|0)==(0|0);
              if ($793) {
               $R$1$i$i$lcssa = $R$1$i$i;$RP$1$i$i$lcssa = $RP$1$i$i;
               break;
              } else {
               $R$1$i$i = $792;$RP$1$i$i = $791;
              }
             }
             $794 = ($RP$1$i$i$lcssa>>>0)<($753>>>0);
             if ($794) {
              _abort();
              // unreachable;
             } else {
              HEAP32[$RP$1$i$i$lcssa>>2] = 0;
              $R$3$i$i = $R$1$i$i$lcssa;
              break;
             }
            } else {
             $773 = ((($718)) + 8|0);
             $774 = HEAP32[$773>>2]|0;
             $775 = ($774>>>0)<($753>>>0);
             if ($775) {
              _abort();
              // unreachable;
             }
             $776 = ((($774)) + 12|0);
             $777 = HEAP32[$776>>2]|0;
             $778 = ($777|0)==($718|0);
             if (!($778)) {
              _abort();
              // unreachable;
             }
             $779 = ((($771)) + 8|0);
             $780 = HEAP32[$779>>2]|0;
             $781 = ($780|0)==($718|0);
             if ($781) {
              HEAP32[$776>>2] = $771;
              HEAP32[$779>>2] = $774;
              $R$3$i$i = $771;
              break;
             } else {
              _abort();
              // unreachable;
             }
            }
           } while(0);
           $795 = ($769|0)==(0|0);
           if ($795) {
            break;
           }
           $796 = ((($718)) + 28|0);
           $797 = HEAP32[$796>>2]|0;
           $798 = (83140 + ($797<<2)|0);
           $799 = HEAP32[$798>>2]|0;
           $800 = ($718|0)==($799|0);
           do {
            if ($800) {
             HEAP32[$798>>2] = $R$3$i$i;
             $cond$i$i = ($R$3$i$i|0)==(0|0);
             if (!($cond$i$i)) {
              break;
             }
             $801 = 1 << $797;
             $802 = $801 ^ -1;
             $803 = HEAP32[(82840)>>2]|0;
             $804 = $803 & $802;
             HEAP32[(82840)>>2] = $804;
             break L328;
            } else {
             $805 = HEAP32[(82852)>>2]|0;
             $806 = ($769>>>0)<($805>>>0);
             if ($806) {
              _abort();
              // unreachable;
             }
             $807 = ((($769)) + 16|0);
             $808 = HEAP32[$807>>2]|0;
             $809 = ($808|0)==($718|0);
             if ($809) {
              HEAP32[$807>>2] = $R$3$i$i;
             } else {
              $810 = ((($769)) + 20|0);
              HEAP32[$810>>2] = $R$3$i$i;
             }
             $811 = ($R$3$i$i|0)==(0|0);
             if ($811) {
              break L328;
             }
            }
           } while(0);
           $812 = HEAP32[(82852)>>2]|0;
           $813 = ($R$3$i$i>>>0)<($812>>>0);
           if ($813) {
            _abort();
            // unreachable;
           }
           $814 = ((($R$3$i$i)) + 24|0);
           HEAP32[$814>>2] = $769;
           $815 = ((($718)) + 16|0);
           $816 = HEAP32[$815>>2]|0;
           $817 = ($816|0)==(0|0);
           do {
            if (!($817)) {
             $818 = ($816>>>0)<($812>>>0);
             if ($818) {
              _abort();
              // unreachable;
             } else {
              $819 = ((($R$3$i$i)) + 16|0);
              HEAP32[$819>>2] = $816;
              $820 = ((($816)) + 24|0);
              HEAP32[$820>>2] = $R$3$i$i;
              break;
             }
            }
           } while(0);
           $821 = ((($815)) + 4|0);
           $822 = HEAP32[$821>>2]|0;
           $823 = ($822|0)==(0|0);
           if ($823) {
            break;
           }
           $824 = HEAP32[(82852)>>2]|0;
           $825 = ($822>>>0)<($824>>>0);
           if ($825) {
            _abort();
            // unreachable;
           } else {
            $826 = ((($R$3$i$i)) + 20|0);
            HEAP32[$826>>2] = $822;
            $827 = ((($822)) + 24|0);
            HEAP32[$827>>2] = $R$3$i$i;
            break;
           }
          }
         } while(0);
         $828 = (($718) + ($742)|0);
         $829 = (($742) + ($723))|0;
         $oldfirst$0$i$i = $828;$qsize$0$i$i = $829;
        } else {
         $oldfirst$0$i$i = $718;$qsize$0$i$i = $723;
        }
        $830 = ((($oldfirst$0$i$i)) + 4|0);
        $831 = HEAP32[$830>>2]|0;
        $832 = $831 & -2;
        HEAP32[$830>>2] = $832;
        $833 = $qsize$0$i$i | 1;
        $834 = ((($722)) + 4|0);
        HEAP32[$834>>2] = $833;
        $835 = (($722) + ($qsize$0$i$i)|0);
        HEAP32[$835>>2] = $qsize$0$i$i;
        $836 = $qsize$0$i$i >>> 3;
        $837 = ($qsize$0$i$i>>>0)<(256);
        if ($837) {
         $838 = $836 << 1;
         $839 = (82876 + ($838<<2)|0);
         $840 = HEAP32[20709]|0;
         $841 = 1 << $836;
         $842 = $840 & $841;
         $843 = ($842|0)==(0);
         do {
          if ($843) {
           $844 = $840 | $841;
           HEAP32[20709] = $844;
           $$pre$i16$i = ((($839)) + 8|0);
           $$pre$phi$i17$iZ2D = $$pre$i16$i;$F4$0$i$i = $839;
          } else {
           $845 = ((($839)) + 8|0);
           $846 = HEAP32[$845>>2]|0;
           $847 = HEAP32[(82852)>>2]|0;
           $848 = ($846>>>0)<($847>>>0);
           if (!($848)) {
            $$pre$phi$i17$iZ2D = $845;$F4$0$i$i = $846;
            break;
           }
           _abort();
           // unreachable;
          }
         } while(0);
         HEAP32[$$pre$phi$i17$iZ2D>>2] = $722;
         $849 = ((($F4$0$i$i)) + 12|0);
         HEAP32[$849>>2] = $722;
         $850 = ((($722)) + 8|0);
         HEAP32[$850>>2] = $F4$0$i$i;
         $851 = ((($722)) + 12|0);
         HEAP32[$851>>2] = $839;
         break;
        }
        $852 = $qsize$0$i$i >>> 8;
        $853 = ($852|0)==(0);
        do {
         if ($853) {
          $I7$0$i$i = 0;
         } else {
          $854 = ($qsize$0$i$i>>>0)>(16777215);
          if ($854) {
           $I7$0$i$i = 31;
           break;
          }
          $855 = (($852) + 1048320)|0;
          $856 = $855 >>> 16;
          $857 = $856 & 8;
          $858 = $852 << $857;
          $859 = (($858) + 520192)|0;
          $860 = $859 >>> 16;
          $861 = $860 & 4;
          $862 = $861 | $857;
          $863 = $858 << $861;
          $864 = (($863) + 245760)|0;
          $865 = $864 >>> 16;
          $866 = $865 & 2;
          $867 = $862 | $866;
          $868 = (14 - ($867))|0;
          $869 = $863 << $866;
          $870 = $869 >>> 15;
          $871 = (($868) + ($870))|0;
          $872 = $871 << 1;
          $873 = (($871) + 7)|0;
          $874 = $qsize$0$i$i >>> $873;
          $875 = $874 & 1;
          $876 = $875 | $872;
          $I7$0$i$i = $876;
         }
        } while(0);
        $877 = (83140 + ($I7$0$i$i<<2)|0);
        $878 = ((($722)) + 28|0);
        HEAP32[$878>>2] = $I7$0$i$i;
        $879 = ((($722)) + 16|0);
        $880 = ((($879)) + 4|0);
        HEAP32[$880>>2] = 0;
        HEAP32[$879>>2] = 0;
        $881 = HEAP32[(82840)>>2]|0;
        $882 = 1 << $I7$0$i$i;
        $883 = $881 & $882;
        $884 = ($883|0)==(0);
        if ($884) {
         $885 = $881 | $882;
         HEAP32[(82840)>>2] = $885;
         HEAP32[$877>>2] = $722;
         $886 = ((($722)) + 24|0);
         HEAP32[$886>>2] = $877;
         $887 = ((($722)) + 12|0);
         HEAP32[$887>>2] = $722;
         $888 = ((($722)) + 8|0);
         HEAP32[$888>>2] = $722;
         break;
        }
        $889 = HEAP32[$877>>2]|0;
        $890 = ($I7$0$i$i|0)==(31);
        $891 = $I7$0$i$i >>> 1;
        $892 = (25 - ($891))|0;
        $893 = $890 ? 0 : $892;
        $894 = $qsize$0$i$i << $893;
        $K8$0$i$i = $894;$T$0$i18$i = $889;
        while(1) {
         $895 = ((($T$0$i18$i)) + 4|0);
         $896 = HEAP32[$895>>2]|0;
         $897 = $896 & -8;
         $898 = ($897|0)==($qsize$0$i$i|0);
         if ($898) {
          $T$0$i18$i$lcssa = $T$0$i18$i;
          label = 279;
          break;
         }
         $899 = $K8$0$i$i >>> 31;
         $900 = (((($T$0$i18$i)) + 16|0) + ($899<<2)|0);
         $901 = $K8$0$i$i << 1;
         $902 = HEAP32[$900>>2]|0;
         $903 = ($902|0)==(0|0);
         if ($903) {
          $$lcssa = $900;$T$0$i18$i$lcssa139 = $T$0$i18$i;
          label = 276;
          break;
         } else {
          $K8$0$i$i = $901;$T$0$i18$i = $902;
         }
        }
        if ((label|0) == 276) {
         $904 = HEAP32[(82852)>>2]|0;
         $905 = ($$lcssa>>>0)<($904>>>0);
         if ($905) {
          _abort();
          // unreachable;
         } else {
          HEAP32[$$lcssa>>2] = $722;
          $906 = ((($722)) + 24|0);
          HEAP32[$906>>2] = $T$0$i18$i$lcssa139;
          $907 = ((($722)) + 12|0);
          HEAP32[$907>>2] = $722;
          $908 = ((($722)) + 8|0);
          HEAP32[$908>>2] = $722;
          break;
         }
        }
        else if ((label|0) == 279) {
         $909 = ((($T$0$i18$i$lcssa)) + 8|0);
         $910 = HEAP32[$909>>2]|0;
         $911 = HEAP32[(82852)>>2]|0;
         $912 = ($910>>>0)>=($911>>>0);
         $not$$i20$i = ($T$0$i18$i$lcssa>>>0)>=($911>>>0);
         $913 = $912 & $not$$i20$i;
         if ($913) {
          $914 = ((($910)) + 12|0);
          HEAP32[$914>>2] = $722;
          HEAP32[$909>>2] = $722;
          $915 = ((($722)) + 8|0);
          HEAP32[$915>>2] = $910;
          $916 = ((($722)) + 12|0);
          HEAP32[$916>>2] = $T$0$i18$i$lcssa;
          $917 = ((($722)) + 24|0);
          HEAP32[$917>>2] = 0;
          break;
         } else {
          _abort();
          // unreachable;
         }
        }
       }
      } while(0);
      $1048 = ((($710)) + 8|0);
      $$0 = $1048;
      STACKTOP = sp;return ($$0|0);
     } else {
      $sp$0$i$i$i = (83284);
     }
    }
    while(1) {
     $918 = HEAP32[$sp$0$i$i$i>>2]|0;
     $919 = ($918>>>0)>($631>>>0);
     if (!($919)) {
      $920 = ((($sp$0$i$i$i)) + 4|0);
      $921 = HEAP32[$920>>2]|0;
      $922 = (($918) + ($921)|0);
      $923 = ($922>>>0)>($631>>>0);
      if ($923) {
       $$lcssa142 = $922;
       break;
      }
     }
     $924 = ((($sp$0$i$i$i)) + 8|0);
     $925 = HEAP32[$924>>2]|0;
     $sp$0$i$i$i = $925;
    }
    $926 = ((($$lcssa142)) + -47|0);
    $927 = ((($926)) + 8|0);
    $928 = $927;
    $929 = $928 & 7;
    $930 = ($929|0)==(0);
    $931 = (0 - ($928))|0;
    $932 = $931 & 7;
    $933 = $930 ? 0 : $932;
    $934 = (($926) + ($933)|0);
    $935 = ((($631)) + 16|0);
    $936 = ($934>>>0)<($935>>>0);
    $937 = $936 ? $631 : $934;
    $938 = ((($937)) + 8|0);
    $939 = ((($937)) + 24|0);
    $940 = (($tsize$745$i) + -40)|0;
    $941 = ((($tbase$746$i)) + 8|0);
    $942 = $941;
    $943 = $942 & 7;
    $944 = ($943|0)==(0);
    $945 = (0 - ($942))|0;
    $946 = $945 & 7;
    $947 = $944 ? 0 : $946;
    $948 = (($tbase$746$i) + ($947)|0);
    $949 = (($940) - ($947))|0;
    HEAP32[(82860)>>2] = $948;
    HEAP32[(82848)>>2] = $949;
    $950 = $949 | 1;
    $951 = ((($948)) + 4|0);
    HEAP32[$951>>2] = $950;
    $952 = (($948) + ($949)|0);
    $953 = ((($952)) + 4|0);
    HEAP32[$953>>2] = 40;
    $954 = HEAP32[(83324)>>2]|0;
    HEAP32[(82864)>>2] = $954;
    $955 = ((($937)) + 4|0);
    HEAP32[$955>>2] = 27;
    ;HEAP32[$938>>2]=HEAP32[(83284)>>2]|0;HEAP32[$938+4>>2]=HEAP32[(83284)+4>>2]|0;HEAP32[$938+8>>2]=HEAP32[(83284)+8>>2]|0;HEAP32[$938+12>>2]=HEAP32[(83284)+12>>2]|0;
    HEAP32[(83284)>>2] = $tbase$746$i;
    HEAP32[(83288)>>2] = $tsize$745$i;
    HEAP32[(83296)>>2] = 0;
    HEAP32[(83292)>>2] = $938;
    $p$0$i$i = $939;
    while(1) {
     $956 = ((($p$0$i$i)) + 4|0);
     HEAP32[$956>>2] = 7;
     $957 = ((($956)) + 4|0);
     $958 = ($957>>>0)<($$lcssa142>>>0);
     if ($958) {
      $p$0$i$i = $956;
     } else {
      break;
     }
    }
    $959 = ($937|0)==($631|0);
    if (!($959)) {
     $960 = $937;
     $961 = $631;
     $962 = (($960) - ($961))|0;
     $963 = HEAP32[$955>>2]|0;
     $964 = $963 & -2;
     HEAP32[$955>>2] = $964;
     $965 = $962 | 1;
     $966 = ((($631)) + 4|0);
     HEAP32[$966>>2] = $965;
     HEAP32[$937>>2] = $962;
     $967 = $962 >>> 3;
     $968 = ($962>>>0)<(256);
     if ($968) {
      $969 = $967 << 1;
      $970 = (82876 + ($969<<2)|0);
      $971 = HEAP32[20709]|0;
      $972 = 1 << $967;
      $973 = $971 & $972;
      $974 = ($973|0)==(0);
      if ($974) {
       $975 = $971 | $972;
       HEAP32[20709] = $975;
       $$pre$i$i = ((($970)) + 8|0);
       $$pre$phi$i$iZ2D = $$pre$i$i;$F$0$i$i = $970;
      } else {
       $976 = ((($970)) + 8|0);
       $977 = HEAP32[$976>>2]|0;
       $978 = HEAP32[(82852)>>2]|0;
       $979 = ($977>>>0)<($978>>>0);
       if ($979) {
        _abort();
        // unreachable;
       } else {
        $$pre$phi$i$iZ2D = $976;$F$0$i$i = $977;
       }
      }
      HEAP32[$$pre$phi$i$iZ2D>>2] = $631;
      $980 = ((($F$0$i$i)) + 12|0);
      HEAP32[$980>>2] = $631;
      $981 = ((($631)) + 8|0);
      HEAP32[$981>>2] = $F$0$i$i;
      $982 = ((($631)) + 12|0);
      HEAP32[$982>>2] = $970;
      break;
     }
     $983 = $962 >>> 8;
     $984 = ($983|0)==(0);
     if ($984) {
      $I1$0$i$i = 0;
     } else {
      $985 = ($962>>>0)>(16777215);
      if ($985) {
       $I1$0$i$i = 31;
      } else {
       $986 = (($983) + 1048320)|0;
       $987 = $986 >>> 16;
       $988 = $987 & 8;
       $989 = $983 << $988;
       $990 = (($989) + 520192)|0;
       $991 = $990 >>> 16;
       $992 = $991 & 4;
       $993 = $992 | $988;
       $994 = $989 << $992;
       $995 = (($994) + 245760)|0;
       $996 = $995 >>> 16;
       $997 = $996 & 2;
       $998 = $993 | $997;
       $999 = (14 - ($998))|0;
       $1000 = $994 << $997;
       $1001 = $1000 >>> 15;
       $1002 = (($999) + ($1001))|0;
       $1003 = $1002 << 1;
       $1004 = (($1002) + 7)|0;
       $1005 = $962 >>> $1004;
       $1006 = $1005 & 1;
       $1007 = $1006 | $1003;
       $I1$0$i$i = $1007;
      }
     }
     $1008 = (83140 + ($I1$0$i$i<<2)|0);
     $1009 = ((($631)) + 28|0);
     HEAP32[$1009>>2] = $I1$0$i$i;
     $1010 = ((($631)) + 20|0);
     HEAP32[$1010>>2] = 0;
     HEAP32[$935>>2] = 0;
     $1011 = HEAP32[(82840)>>2]|0;
     $1012 = 1 << $I1$0$i$i;
     $1013 = $1011 & $1012;
     $1014 = ($1013|0)==(0);
     if ($1014) {
      $1015 = $1011 | $1012;
      HEAP32[(82840)>>2] = $1015;
      HEAP32[$1008>>2] = $631;
      $1016 = ((($631)) + 24|0);
      HEAP32[$1016>>2] = $1008;
      $1017 = ((($631)) + 12|0);
      HEAP32[$1017>>2] = $631;
      $1018 = ((($631)) + 8|0);
      HEAP32[$1018>>2] = $631;
      break;
     }
     $1019 = HEAP32[$1008>>2]|0;
     $1020 = ($I1$0$i$i|0)==(31);
     $1021 = $I1$0$i$i >>> 1;
     $1022 = (25 - ($1021))|0;
     $1023 = $1020 ? 0 : $1022;
     $1024 = $962 << $1023;
     $K2$0$i$i = $1024;$T$0$i$i = $1019;
     while(1) {
      $1025 = ((($T$0$i$i)) + 4|0);
      $1026 = HEAP32[$1025>>2]|0;
      $1027 = $1026 & -8;
      $1028 = ($1027|0)==($962|0);
      if ($1028) {
       $T$0$i$i$lcssa = $T$0$i$i;
       label = 305;
       break;
      }
      $1029 = $K2$0$i$i >>> 31;
      $1030 = (((($T$0$i$i)) + 16|0) + ($1029<<2)|0);
      $1031 = $K2$0$i$i << 1;
      $1032 = HEAP32[$1030>>2]|0;
      $1033 = ($1032|0)==(0|0);
      if ($1033) {
       $$lcssa141 = $1030;$T$0$i$i$lcssa140 = $T$0$i$i;
       label = 302;
       break;
      } else {
       $K2$0$i$i = $1031;$T$0$i$i = $1032;
      }
     }
     if ((label|0) == 302) {
      $1034 = HEAP32[(82852)>>2]|0;
      $1035 = ($$lcssa141>>>0)<($1034>>>0);
      if ($1035) {
       _abort();
       // unreachable;
      } else {
       HEAP32[$$lcssa141>>2] = $631;
       $1036 = ((($631)) + 24|0);
       HEAP32[$1036>>2] = $T$0$i$i$lcssa140;
       $1037 = ((($631)) + 12|0);
       HEAP32[$1037>>2] = $631;
       $1038 = ((($631)) + 8|0);
       HEAP32[$1038>>2] = $631;
       break;
      }
     }
     else if ((label|0) == 305) {
      $1039 = ((($T$0$i$i$lcssa)) + 8|0);
      $1040 = HEAP32[$1039>>2]|0;
      $1041 = HEAP32[(82852)>>2]|0;
      $1042 = ($1040>>>0)>=($1041>>>0);
      $not$$i$i = ($T$0$i$i$lcssa>>>0)>=($1041>>>0);
      $1043 = $1042 & $not$$i$i;
      if ($1043) {
       $1044 = ((($1040)) + 12|0);
       HEAP32[$1044>>2] = $631;
       HEAP32[$1039>>2] = $631;
       $1045 = ((($631)) + 8|0);
       HEAP32[$1045>>2] = $1040;
       $1046 = ((($631)) + 12|0);
       HEAP32[$1046>>2] = $T$0$i$i$lcssa;
       $1047 = ((($631)) + 24|0);
       HEAP32[$1047>>2] = 0;
       break;
      } else {
       _abort();
       // unreachable;
      }
     }
    }
   }
  } while(0);
  $1049 = HEAP32[(82848)>>2]|0;
  $1050 = ($1049>>>0)>($nb$0>>>0);
  if ($1050) {
   $1051 = (($1049) - ($nb$0))|0;
   HEAP32[(82848)>>2] = $1051;
   $1052 = HEAP32[(82860)>>2]|0;
   $1053 = (($1052) + ($nb$0)|0);
   HEAP32[(82860)>>2] = $1053;
   $1054 = $1051 | 1;
   $1055 = ((($1053)) + 4|0);
   HEAP32[$1055>>2] = $1054;
   $1056 = $nb$0 | 3;
   $1057 = ((($1052)) + 4|0);
   HEAP32[$1057>>2] = $1056;
   $1058 = ((($1052)) + 8|0);
   $$0 = $1058;
   STACKTOP = sp;return ($$0|0);
  }
 }
 $1059 = (___errno_location()|0);
 HEAP32[$1059>>2] = 12;
 $$0 = 0;
 STACKTOP = sp;return ($$0|0);
}
function _free($mem) {
 $mem = $mem|0;
 var $$lcssa = 0, $$pre = 0, $$pre$phi41Z2D = 0, $$pre$phi43Z2D = 0, $$pre$phiZ2D = 0, $$pre40 = 0, $$pre42 = 0, $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0;
 var $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0;
 var $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0;
 var $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0;
 var $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0;
 var $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0;
 var $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0;
 var $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0;
 var $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0;
 var $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0;
 var $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0;
 var $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0, $299 = 0, $3 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0;
 var $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0, $314 = 0, $315 = 0, $316 = 0, $317 = 0, $318 = 0, $319 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0;
 var $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0;
 var $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0;
 var $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0;
 var $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $F18$0 = 0, $I20$0 = 0, $K21$0 = 0, $R$1 = 0, $R$1$lcssa = 0, $R$3 = 0, $R8$1 = 0, $R8$1$lcssa = 0, $R8$3 = 0, $RP$1 = 0, $RP$1$lcssa = 0, $RP10$1 = 0, $RP10$1$lcssa = 0;
 var $T$0 = 0, $T$0$lcssa = 0, $T$0$lcssa48 = 0, $cond20 = 0, $cond21 = 0, $not$ = 0, $p$1 = 0, $psize$1 = 0, $psize$2 = 0, $sp$0$i = 0, $sp$0$in$i = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ($mem|0)==(0|0);
 if ($0) {
  return;
 }
 $1 = ((($mem)) + -8|0);
 $2 = HEAP32[(82852)>>2]|0;
 $3 = ($1>>>0)<($2>>>0);
 if ($3) {
  _abort();
  // unreachable;
 }
 $4 = ((($mem)) + -4|0);
 $5 = HEAP32[$4>>2]|0;
 $6 = $5 & 3;
 $7 = ($6|0)==(1);
 if ($7) {
  _abort();
  // unreachable;
 }
 $8 = $5 & -8;
 $9 = (($1) + ($8)|0);
 $10 = $5 & 1;
 $11 = ($10|0)==(0);
 do {
  if ($11) {
   $12 = HEAP32[$1>>2]|0;
   $13 = ($6|0)==(0);
   if ($13) {
    return;
   }
   $14 = (0 - ($12))|0;
   $15 = (($1) + ($14)|0);
   $16 = (($12) + ($8))|0;
   $17 = ($15>>>0)<($2>>>0);
   if ($17) {
    _abort();
    // unreachable;
   }
   $18 = HEAP32[(82856)>>2]|0;
   $19 = ($15|0)==($18|0);
   if ($19) {
    $104 = ((($9)) + 4|0);
    $105 = HEAP32[$104>>2]|0;
    $106 = $105 & 3;
    $107 = ($106|0)==(3);
    if (!($107)) {
     $p$1 = $15;$psize$1 = $16;
     break;
    }
    HEAP32[(82844)>>2] = $16;
    $108 = $105 & -2;
    HEAP32[$104>>2] = $108;
    $109 = $16 | 1;
    $110 = ((($15)) + 4|0);
    HEAP32[$110>>2] = $109;
    $111 = (($15) + ($16)|0);
    HEAP32[$111>>2] = $16;
    return;
   }
   $20 = $12 >>> 3;
   $21 = ($12>>>0)<(256);
   if ($21) {
    $22 = ((($15)) + 8|0);
    $23 = HEAP32[$22>>2]|0;
    $24 = ((($15)) + 12|0);
    $25 = HEAP32[$24>>2]|0;
    $26 = $20 << 1;
    $27 = (82876 + ($26<<2)|0);
    $28 = ($23|0)==($27|0);
    if (!($28)) {
     $29 = ($23>>>0)<($2>>>0);
     if ($29) {
      _abort();
      // unreachable;
     }
     $30 = ((($23)) + 12|0);
     $31 = HEAP32[$30>>2]|0;
     $32 = ($31|0)==($15|0);
     if (!($32)) {
      _abort();
      // unreachable;
     }
    }
    $33 = ($25|0)==($23|0);
    if ($33) {
     $34 = 1 << $20;
     $35 = $34 ^ -1;
     $36 = HEAP32[20709]|0;
     $37 = $36 & $35;
     HEAP32[20709] = $37;
     $p$1 = $15;$psize$1 = $16;
     break;
    }
    $38 = ($25|0)==($27|0);
    if ($38) {
     $$pre42 = ((($25)) + 8|0);
     $$pre$phi43Z2D = $$pre42;
    } else {
     $39 = ($25>>>0)<($2>>>0);
     if ($39) {
      _abort();
      // unreachable;
     }
     $40 = ((($25)) + 8|0);
     $41 = HEAP32[$40>>2]|0;
     $42 = ($41|0)==($15|0);
     if ($42) {
      $$pre$phi43Z2D = $40;
     } else {
      _abort();
      // unreachable;
     }
    }
    $43 = ((($23)) + 12|0);
    HEAP32[$43>>2] = $25;
    HEAP32[$$pre$phi43Z2D>>2] = $23;
    $p$1 = $15;$psize$1 = $16;
    break;
   }
   $44 = ((($15)) + 24|0);
   $45 = HEAP32[$44>>2]|0;
   $46 = ((($15)) + 12|0);
   $47 = HEAP32[$46>>2]|0;
   $48 = ($47|0)==($15|0);
   do {
    if ($48) {
     $58 = ((($15)) + 16|0);
     $59 = ((($58)) + 4|0);
     $60 = HEAP32[$59>>2]|0;
     $61 = ($60|0)==(0|0);
     if ($61) {
      $62 = HEAP32[$58>>2]|0;
      $63 = ($62|0)==(0|0);
      if ($63) {
       $R$3 = 0;
       break;
      } else {
       $R$1 = $62;$RP$1 = $58;
      }
     } else {
      $R$1 = $60;$RP$1 = $59;
     }
     while(1) {
      $64 = ((($R$1)) + 20|0);
      $65 = HEAP32[$64>>2]|0;
      $66 = ($65|0)==(0|0);
      if (!($66)) {
       $R$1 = $65;$RP$1 = $64;
       continue;
      }
      $67 = ((($R$1)) + 16|0);
      $68 = HEAP32[$67>>2]|0;
      $69 = ($68|0)==(0|0);
      if ($69) {
       $R$1$lcssa = $R$1;$RP$1$lcssa = $RP$1;
       break;
      } else {
       $R$1 = $68;$RP$1 = $67;
      }
     }
     $70 = ($RP$1$lcssa>>>0)<($2>>>0);
     if ($70) {
      _abort();
      // unreachable;
     } else {
      HEAP32[$RP$1$lcssa>>2] = 0;
      $R$3 = $R$1$lcssa;
      break;
     }
    } else {
     $49 = ((($15)) + 8|0);
     $50 = HEAP32[$49>>2]|0;
     $51 = ($50>>>0)<($2>>>0);
     if ($51) {
      _abort();
      // unreachable;
     }
     $52 = ((($50)) + 12|0);
     $53 = HEAP32[$52>>2]|0;
     $54 = ($53|0)==($15|0);
     if (!($54)) {
      _abort();
      // unreachable;
     }
     $55 = ((($47)) + 8|0);
     $56 = HEAP32[$55>>2]|0;
     $57 = ($56|0)==($15|0);
     if ($57) {
      HEAP32[$52>>2] = $47;
      HEAP32[$55>>2] = $50;
      $R$3 = $47;
      break;
     } else {
      _abort();
      // unreachable;
     }
    }
   } while(0);
   $71 = ($45|0)==(0|0);
   if ($71) {
    $p$1 = $15;$psize$1 = $16;
   } else {
    $72 = ((($15)) + 28|0);
    $73 = HEAP32[$72>>2]|0;
    $74 = (83140 + ($73<<2)|0);
    $75 = HEAP32[$74>>2]|0;
    $76 = ($15|0)==($75|0);
    if ($76) {
     HEAP32[$74>>2] = $R$3;
     $cond20 = ($R$3|0)==(0|0);
     if ($cond20) {
      $77 = 1 << $73;
      $78 = $77 ^ -1;
      $79 = HEAP32[(82840)>>2]|0;
      $80 = $79 & $78;
      HEAP32[(82840)>>2] = $80;
      $p$1 = $15;$psize$1 = $16;
      break;
     }
    } else {
     $81 = HEAP32[(82852)>>2]|0;
     $82 = ($45>>>0)<($81>>>0);
     if ($82) {
      _abort();
      // unreachable;
     }
     $83 = ((($45)) + 16|0);
     $84 = HEAP32[$83>>2]|0;
     $85 = ($84|0)==($15|0);
     if ($85) {
      HEAP32[$83>>2] = $R$3;
     } else {
      $86 = ((($45)) + 20|0);
      HEAP32[$86>>2] = $R$3;
     }
     $87 = ($R$3|0)==(0|0);
     if ($87) {
      $p$1 = $15;$psize$1 = $16;
      break;
     }
    }
    $88 = HEAP32[(82852)>>2]|0;
    $89 = ($R$3>>>0)<($88>>>0);
    if ($89) {
     _abort();
     // unreachable;
    }
    $90 = ((($R$3)) + 24|0);
    HEAP32[$90>>2] = $45;
    $91 = ((($15)) + 16|0);
    $92 = HEAP32[$91>>2]|0;
    $93 = ($92|0)==(0|0);
    do {
     if (!($93)) {
      $94 = ($92>>>0)<($88>>>0);
      if ($94) {
       _abort();
       // unreachable;
      } else {
       $95 = ((($R$3)) + 16|0);
       HEAP32[$95>>2] = $92;
       $96 = ((($92)) + 24|0);
       HEAP32[$96>>2] = $R$3;
       break;
      }
     }
    } while(0);
    $97 = ((($91)) + 4|0);
    $98 = HEAP32[$97>>2]|0;
    $99 = ($98|0)==(0|0);
    if ($99) {
     $p$1 = $15;$psize$1 = $16;
    } else {
     $100 = HEAP32[(82852)>>2]|0;
     $101 = ($98>>>0)<($100>>>0);
     if ($101) {
      _abort();
      // unreachable;
     } else {
      $102 = ((($R$3)) + 20|0);
      HEAP32[$102>>2] = $98;
      $103 = ((($98)) + 24|0);
      HEAP32[$103>>2] = $R$3;
      $p$1 = $15;$psize$1 = $16;
      break;
     }
    }
   }
  } else {
   $p$1 = $1;$psize$1 = $8;
  }
 } while(0);
 $112 = ($p$1>>>0)<($9>>>0);
 if (!($112)) {
  _abort();
  // unreachable;
 }
 $113 = ((($9)) + 4|0);
 $114 = HEAP32[$113>>2]|0;
 $115 = $114 & 1;
 $116 = ($115|0)==(0);
 if ($116) {
  _abort();
  // unreachable;
 }
 $117 = $114 & 2;
 $118 = ($117|0)==(0);
 if ($118) {
  $119 = HEAP32[(82860)>>2]|0;
  $120 = ($9|0)==($119|0);
  if ($120) {
   $121 = HEAP32[(82848)>>2]|0;
   $122 = (($121) + ($psize$1))|0;
   HEAP32[(82848)>>2] = $122;
   HEAP32[(82860)>>2] = $p$1;
   $123 = $122 | 1;
   $124 = ((($p$1)) + 4|0);
   HEAP32[$124>>2] = $123;
   $125 = HEAP32[(82856)>>2]|0;
   $126 = ($p$1|0)==($125|0);
   if (!($126)) {
    return;
   }
   HEAP32[(82856)>>2] = 0;
   HEAP32[(82844)>>2] = 0;
   return;
  }
  $127 = HEAP32[(82856)>>2]|0;
  $128 = ($9|0)==($127|0);
  if ($128) {
   $129 = HEAP32[(82844)>>2]|0;
   $130 = (($129) + ($psize$1))|0;
   HEAP32[(82844)>>2] = $130;
   HEAP32[(82856)>>2] = $p$1;
   $131 = $130 | 1;
   $132 = ((($p$1)) + 4|0);
   HEAP32[$132>>2] = $131;
   $133 = (($p$1) + ($130)|0);
   HEAP32[$133>>2] = $130;
   return;
  }
  $134 = $114 & -8;
  $135 = (($134) + ($psize$1))|0;
  $136 = $114 >>> 3;
  $137 = ($114>>>0)<(256);
  do {
   if ($137) {
    $138 = ((($9)) + 8|0);
    $139 = HEAP32[$138>>2]|0;
    $140 = ((($9)) + 12|0);
    $141 = HEAP32[$140>>2]|0;
    $142 = $136 << 1;
    $143 = (82876 + ($142<<2)|0);
    $144 = ($139|0)==($143|0);
    if (!($144)) {
     $145 = HEAP32[(82852)>>2]|0;
     $146 = ($139>>>0)<($145>>>0);
     if ($146) {
      _abort();
      // unreachable;
     }
     $147 = ((($139)) + 12|0);
     $148 = HEAP32[$147>>2]|0;
     $149 = ($148|0)==($9|0);
     if (!($149)) {
      _abort();
      // unreachable;
     }
    }
    $150 = ($141|0)==($139|0);
    if ($150) {
     $151 = 1 << $136;
     $152 = $151 ^ -1;
     $153 = HEAP32[20709]|0;
     $154 = $153 & $152;
     HEAP32[20709] = $154;
     break;
    }
    $155 = ($141|0)==($143|0);
    if ($155) {
     $$pre40 = ((($141)) + 8|0);
     $$pre$phi41Z2D = $$pre40;
    } else {
     $156 = HEAP32[(82852)>>2]|0;
     $157 = ($141>>>0)<($156>>>0);
     if ($157) {
      _abort();
      // unreachable;
     }
     $158 = ((($141)) + 8|0);
     $159 = HEAP32[$158>>2]|0;
     $160 = ($159|0)==($9|0);
     if ($160) {
      $$pre$phi41Z2D = $158;
     } else {
      _abort();
      // unreachable;
     }
    }
    $161 = ((($139)) + 12|0);
    HEAP32[$161>>2] = $141;
    HEAP32[$$pre$phi41Z2D>>2] = $139;
   } else {
    $162 = ((($9)) + 24|0);
    $163 = HEAP32[$162>>2]|0;
    $164 = ((($9)) + 12|0);
    $165 = HEAP32[$164>>2]|0;
    $166 = ($165|0)==($9|0);
    do {
     if ($166) {
      $177 = ((($9)) + 16|0);
      $178 = ((($177)) + 4|0);
      $179 = HEAP32[$178>>2]|0;
      $180 = ($179|0)==(0|0);
      if ($180) {
       $181 = HEAP32[$177>>2]|0;
       $182 = ($181|0)==(0|0);
       if ($182) {
        $R8$3 = 0;
        break;
       } else {
        $R8$1 = $181;$RP10$1 = $177;
       }
      } else {
       $R8$1 = $179;$RP10$1 = $178;
      }
      while(1) {
       $183 = ((($R8$1)) + 20|0);
       $184 = HEAP32[$183>>2]|0;
       $185 = ($184|0)==(0|0);
       if (!($185)) {
        $R8$1 = $184;$RP10$1 = $183;
        continue;
       }
       $186 = ((($R8$1)) + 16|0);
       $187 = HEAP32[$186>>2]|0;
       $188 = ($187|0)==(0|0);
       if ($188) {
        $R8$1$lcssa = $R8$1;$RP10$1$lcssa = $RP10$1;
        break;
       } else {
        $R8$1 = $187;$RP10$1 = $186;
       }
      }
      $189 = HEAP32[(82852)>>2]|0;
      $190 = ($RP10$1$lcssa>>>0)<($189>>>0);
      if ($190) {
       _abort();
       // unreachable;
      } else {
       HEAP32[$RP10$1$lcssa>>2] = 0;
       $R8$3 = $R8$1$lcssa;
       break;
      }
     } else {
      $167 = ((($9)) + 8|0);
      $168 = HEAP32[$167>>2]|0;
      $169 = HEAP32[(82852)>>2]|0;
      $170 = ($168>>>0)<($169>>>0);
      if ($170) {
       _abort();
       // unreachable;
      }
      $171 = ((($168)) + 12|0);
      $172 = HEAP32[$171>>2]|0;
      $173 = ($172|0)==($9|0);
      if (!($173)) {
       _abort();
       // unreachable;
      }
      $174 = ((($165)) + 8|0);
      $175 = HEAP32[$174>>2]|0;
      $176 = ($175|0)==($9|0);
      if ($176) {
       HEAP32[$171>>2] = $165;
       HEAP32[$174>>2] = $168;
       $R8$3 = $165;
       break;
      } else {
       _abort();
       // unreachable;
      }
     }
    } while(0);
    $191 = ($163|0)==(0|0);
    if (!($191)) {
     $192 = ((($9)) + 28|0);
     $193 = HEAP32[$192>>2]|0;
     $194 = (83140 + ($193<<2)|0);
     $195 = HEAP32[$194>>2]|0;
     $196 = ($9|0)==($195|0);
     if ($196) {
      HEAP32[$194>>2] = $R8$3;
      $cond21 = ($R8$3|0)==(0|0);
      if ($cond21) {
       $197 = 1 << $193;
       $198 = $197 ^ -1;
       $199 = HEAP32[(82840)>>2]|0;
       $200 = $199 & $198;
       HEAP32[(82840)>>2] = $200;
       break;
      }
     } else {
      $201 = HEAP32[(82852)>>2]|0;
      $202 = ($163>>>0)<($201>>>0);
      if ($202) {
       _abort();
       // unreachable;
      }
      $203 = ((($163)) + 16|0);
      $204 = HEAP32[$203>>2]|0;
      $205 = ($204|0)==($9|0);
      if ($205) {
       HEAP32[$203>>2] = $R8$3;
      } else {
       $206 = ((($163)) + 20|0);
       HEAP32[$206>>2] = $R8$3;
      }
      $207 = ($R8$3|0)==(0|0);
      if ($207) {
       break;
      }
     }
     $208 = HEAP32[(82852)>>2]|0;
     $209 = ($R8$3>>>0)<($208>>>0);
     if ($209) {
      _abort();
      // unreachable;
     }
     $210 = ((($R8$3)) + 24|0);
     HEAP32[$210>>2] = $163;
     $211 = ((($9)) + 16|0);
     $212 = HEAP32[$211>>2]|0;
     $213 = ($212|0)==(0|0);
     do {
      if (!($213)) {
       $214 = ($212>>>0)<($208>>>0);
       if ($214) {
        _abort();
        // unreachable;
       } else {
        $215 = ((($R8$3)) + 16|0);
        HEAP32[$215>>2] = $212;
        $216 = ((($212)) + 24|0);
        HEAP32[$216>>2] = $R8$3;
        break;
       }
      }
     } while(0);
     $217 = ((($211)) + 4|0);
     $218 = HEAP32[$217>>2]|0;
     $219 = ($218|0)==(0|0);
     if (!($219)) {
      $220 = HEAP32[(82852)>>2]|0;
      $221 = ($218>>>0)<($220>>>0);
      if ($221) {
       _abort();
       // unreachable;
      } else {
       $222 = ((($R8$3)) + 20|0);
       HEAP32[$222>>2] = $218;
       $223 = ((($218)) + 24|0);
       HEAP32[$223>>2] = $R8$3;
       break;
      }
     }
    }
   }
  } while(0);
  $224 = $135 | 1;
  $225 = ((($p$1)) + 4|0);
  HEAP32[$225>>2] = $224;
  $226 = (($p$1) + ($135)|0);
  HEAP32[$226>>2] = $135;
  $227 = HEAP32[(82856)>>2]|0;
  $228 = ($p$1|0)==($227|0);
  if ($228) {
   HEAP32[(82844)>>2] = $135;
   return;
  } else {
   $psize$2 = $135;
  }
 } else {
  $229 = $114 & -2;
  HEAP32[$113>>2] = $229;
  $230 = $psize$1 | 1;
  $231 = ((($p$1)) + 4|0);
  HEAP32[$231>>2] = $230;
  $232 = (($p$1) + ($psize$1)|0);
  HEAP32[$232>>2] = $psize$1;
  $psize$2 = $psize$1;
 }
 $233 = $psize$2 >>> 3;
 $234 = ($psize$2>>>0)<(256);
 if ($234) {
  $235 = $233 << 1;
  $236 = (82876 + ($235<<2)|0);
  $237 = HEAP32[20709]|0;
  $238 = 1 << $233;
  $239 = $237 & $238;
  $240 = ($239|0)==(0);
  if ($240) {
   $241 = $237 | $238;
   HEAP32[20709] = $241;
   $$pre = ((($236)) + 8|0);
   $$pre$phiZ2D = $$pre;$F18$0 = $236;
  } else {
   $242 = ((($236)) + 8|0);
   $243 = HEAP32[$242>>2]|0;
   $244 = HEAP32[(82852)>>2]|0;
   $245 = ($243>>>0)<($244>>>0);
   if ($245) {
    _abort();
    // unreachable;
   } else {
    $$pre$phiZ2D = $242;$F18$0 = $243;
   }
  }
  HEAP32[$$pre$phiZ2D>>2] = $p$1;
  $246 = ((($F18$0)) + 12|0);
  HEAP32[$246>>2] = $p$1;
  $247 = ((($p$1)) + 8|0);
  HEAP32[$247>>2] = $F18$0;
  $248 = ((($p$1)) + 12|0);
  HEAP32[$248>>2] = $236;
  return;
 }
 $249 = $psize$2 >>> 8;
 $250 = ($249|0)==(0);
 if ($250) {
  $I20$0 = 0;
 } else {
  $251 = ($psize$2>>>0)>(16777215);
  if ($251) {
   $I20$0 = 31;
  } else {
   $252 = (($249) + 1048320)|0;
   $253 = $252 >>> 16;
   $254 = $253 & 8;
   $255 = $249 << $254;
   $256 = (($255) + 520192)|0;
   $257 = $256 >>> 16;
   $258 = $257 & 4;
   $259 = $258 | $254;
   $260 = $255 << $258;
   $261 = (($260) + 245760)|0;
   $262 = $261 >>> 16;
   $263 = $262 & 2;
   $264 = $259 | $263;
   $265 = (14 - ($264))|0;
   $266 = $260 << $263;
   $267 = $266 >>> 15;
   $268 = (($265) + ($267))|0;
   $269 = $268 << 1;
   $270 = (($268) + 7)|0;
   $271 = $psize$2 >>> $270;
   $272 = $271 & 1;
   $273 = $272 | $269;
   $I20$0 = $273;
  }
 }
 $274 = (83140 + ($I20$0<<2)|0);
 $275 = ((($p$1)) + 28|0);
 HEAP32[$275>>2] = $I20$0;
 $276 = ((($p$1)) + 16|0);
 $277 = ((($p$1)) + 20|0);
 HEAP32[$277>>2] = 0;
 HEAP32[$276>>2] = 0;
 $278 = HEAP32[(82840)>>2]|0;
 $279 = 1 << $I20$0;
 $280 = $278 & $279;
 $281 = ($280|0)==(0);
 do {
  if ($281) {
   $282 = $278 | $279;
   HEAP32[(82840)>>2] = $282;
   HEAP32[$274>>2] = $p$1;
   $283 = ((($p$1)) + 24|0);
   HEAP32[$283>>2] = $274;
   $284 = ((($p$1)) + 12|0);
   HEAP32[$284>>2] = $p$1;
   $285 = ((($p$1)) + 8|0);
   HEAP32[$285>>2] = $p$1;
  } else {
   $286 = HEAP32[$274>>2]|0;
   $287 = ($I20$0|0)==(31);
   $288 = $I20$0 >>> 1;
   $289 = (25 - ($288))|0;
   $290 = $287 ? 0 : $289;
   $291 = $psize$2 << $290;
   $K21$0 = $291;$T$0 = $286;
   while(1) {
    $292 = ((($T$0)) + 4|0);
    $293 = HEAP32[$292>>2]|0;
    $294 = $293 & -8;
    $295 = ($294|0)==($psize$2|0);
    if ($295) {
     $T$0$lcssa = $T$0;
     label = 130;
     break;
    }
    $296 = $K21$0 >>> 31;
    $297 = (((($T$0)) + 16|0) + ($296<<2)|0);
    $298 = $K21$0 << 1;
    $299 = HEAP32[$297>>2]|0;
    $300 = ($299|0)==(0|0);
    if ($300) {
     $$lcssa = $297;$T$0$lcssa48 = $T$0;
     label = 127;
     break;
    } else {
     $K21$0 = $298;$T$0 = $299;
    }
   }
   if ((label|0) == 127) {
    $301 = HEAP32[(82852)>>2]|0;
    $302 = ($$lcssa>>>0)<($301>>>0);
    if ($302) {
     _abort();
     // unreachable;
    } else {
     HEAP32[$$lcssa>>2] = $p$1;
     $303 = ((($p$1)) + 24|0);
     HEAP32[$303>>2] = $T$0$lcssa48;
     $304 = ((($p$1)) + 12|0);
     HEAP32[$304>>2] = $p$1;
     $305 = ((($p$1)) + 8|0);
     HEAP32[$305>>2] = $p$1;
     break;
    }
   }
   else if ((label|0) == 130) {
    $306 = ((($T$0$lcssa)) + 8|0);
    $307 = HEAP32[$306>>2]|0;
    $308 = HEAP32[(82852)>>2]|0;
    $309 = ($307>>>0)>=($308>>>0);
    $not$ = ($T$0$lcssa>>>0)>=($308>>>0);
    $310 = $309 & $not$;
    if ($310) {
     $311 = ((($307)) + 12|0);
     HEAP32[$311>>2] = $p$1;
     HEAP32[$306>>2] = $p$1;
     $312 = ((($p$1)) + 8|0);
     HEAP32[$312>>2] = $307;
     $313 = ((($p$1)) + 12|0);
     HEAP32[$313>>2] = $T$0$lcssa;
     $314 = ((($p$1)) + 24|0);
     HEAP32[$314>>2] = 0;
     break;
    } else {
     _abort();
     // unreachable;
    }
   }
  }
 } while(0);
 $315 = HEAP32[(82868)>>2]|0;
 $316 = (($315) + -1)|0;
 HEAP32[(82868)>>2] = $316;
 $317 = ($316|0)==(0);
 if ($317) {
  $sp$0$in$i = (83292);
 } else {
  return;
 }
 while(1) {
  $sp$0$i = HEAP32[$sp$0$in$i>>2]|0;
  $318 = ($sp$0$i|0)==(0|0);
  $319 = ((($sp$0$i)) + 8|0);
  if ($318) {
   break;
  } else {
   $sp$0$in$i = $319;
  }
 }
 HEAP32[(82868)>>2] = -1;
 return;
}
function _realloc($oldmem,$bytes) {
 $oldmem = $oldmem|0;
 $bytes = $bytes|0;
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
 var $7 = 0, $8 = 0, $9 = 0, $mem$1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ($oldmem|0)==(0|0);
 if ($0) {
  $1 = (_malloc($bytes)|0);
  $mem$1 = $1;
  return ($mem$1|0);
 }
 $2 = ($bytes>>>0)>(4294967231);
 if ($2) {
  $3 = (___errno_location()|0);
  HEAP32[$3>>2] = 12;
  $mem$1 = 0;
  return ($mem$1|0);
 }
 $4 = ($bytes>>>0)<(11);
 $5 = (($bytes) + 11)|0;
 $6 = $5 & -8;
 $7 = $4 ? 16 : $6;
 $8 = ((($oldmem)) + -8|0);
 $9 = (_try_realloc_chunk($8,$7)|0);
 $10 = ($9|0)==(0|0);
 if (!($10)) {
  $11 = ((($9)) + 8|0);
  $mem$1 = $11;
  return ($mem$1|0);
 }
 $12 = (_malloc($bytes)|0);
 $13 = ($12|0)==(0|0);
 if ($13) {
  $mem$1 = 0;
  return ($mem$1|0);
 }
 $14 = ((($oldmem)) + -4|0);
 $15 = HEAP32[$14>>2]|0;
 $16 = $15 & -8;
 $17 = $15 & 3;
 $18 = ($17|0)==(0);
 $19 = $18 ? 8 : 4;
 $20 = (($16) - ($19))|0;
 $21 = ($20>>>0)<($bytes>>>0);
 $22 = $21 ? $20 : $bytes;
 _memcpy(($12|0),($oldmem|0),($22|0))|0;
 _free($oldmem);
 $mem$1 = $12;
 return ($mem$1|0);
}
function _try_realloc_chunk($p,$nb) {
 $p = $p|0;
 $nb = $nb|0;
 var $$pre = 0, $$pre$phiZ2D = 0, $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0;
 var $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0;
 var $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0;
 var $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0;
 var $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0;
 var $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0;
 var $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0;
 var $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0;
 var $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $R$1 = 0, $R$1$lcssa = 0;
 var $R$3 = 0, $RP$1 = 0, $RP$1$lcssa = 0, $cond = 0, $newp$2 = 0, $notlhs = 0, $notrhs = 0, $or$cond$not = 0, $or$cond3 = 0, $storemerge = 0, $storemerge1 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = ((($p)) + 4|0);
 $1 = HEAP32[$0>>2]|0;
 $2 = $1 & -8;
 $3 = (($p) + ($2)|0);
 $4 = HEAP32[(82852)>>2]|0;
 $5 = $1 & 3;
 $notlhs = ($p>>>0)>=($4>>>0);
 $notrhs = ($5|0)!=(1);
 $or$cond$not = $notrhs & $notlhs;
 $6 = ($p>>>0)<($3>>>0);
 $or$cond3 = $or$cond$not & $6;
 if (!($or$cond3)) {
  _abort();
  // unreachable;
 }
 $7 = ((($3)) + 4|0);
 $8 = HEAP32[$7>>2]|0;
 $9 = $8 & 1;
 $10 = ($9|0)==(0);
 if ($10) {
  _abort();
  // unreachable;
 }
 $11 = ($5|0)==(0);
 if ($11) {
  $12 = ($nb>>>0)<(256);
  if ($12) {
   $newp$2 = 0;
   return ($newp$2|0);
  }
  $13 = (($nb) + 4)|0;
  $14 = ($2>>>0)<($13>>>0);
  if (!($14)) {
   $15 = (($2) - ($nb))|0;
   $16 = HEAP32[(83316)>>2]|0;
   $17 = $16 << 1;
   $18 = ($15>>>0)>($17>>>0);
   if (!($18)) {
    $newp$2 = $p;
    return ($newp$2|0);
   }
  }
  $newp$2 = 0;
  return ($newp$2|0);
 }
 $19 = ($2>>>0)<($nb>>>0);
 if (!($19)) {
  $20 = (($2) - ($nb))|0;
  $21 = ($20>>>0)>(15);
  if (!($21)) {
   $newp$2 = $p;
   return ($newp$2|0);
  }
  $22 = (($p) + ($nb)|0);
  $23 = $1 & 1;
  $24 = $23 | $nb;
  $25 = $24 | 2;
  HEAP32[$0>>2] = $25;
  $26 = ((($22)) + 4|0);
  $27 = $20 | 3;
  HEAP32[$26>>2] = $27;
  $28 = (($22) + ($20)|0);
  $29 = ((($28)) + 4|0);
  $30 = HEAP32[$29>>2]|0;
  $31 = $30 | 1;
  HEAP32[$29>>2] = $31;
  _dispose_chunk($22,$20);
  $newp$2 = $p;
  return ($newp$2|0);
 }
 $32 = HEAP32[(82860)>>2]|0;
 $33 = ($3|0)==($32|0);
 if ($33) {
  $34 = HEAP32[(82848)>>2]|0;
  $35 = (($34) + ($2))|0;
  $36 = ($35>>>0)>($nb>>>0);
  if (!($36)) {
   $newp$2 = 0;
   return ($newp$2|0);
  }
  $37 = (($35) - ($nb))|0;
  $38 = (($p) + ($nb)|0);
  $39 = $1 & 1;
  $40 = $39 | $nb;
  $41 = $40 | 2;
  HEAP32[$0>>2] = $41;
  $42 = ((($38)) + 4|0);
  $43 = $37 | 1;
  HEAP32[$42>>2] = $43;
  HEAP32[(82860)>>2] = $38;
  HEAP32[(82848)>>2] = $37;
  $newp$2 = $p;
  return ($newp$2|0);
 }
 $44 = HEAP32[(82856)>>2]|0;
 $45 = ($3|0)==($44|0);
 if ($45) {
  $46 = HEAP32[(82844)>>2]|0;
  $47 = (($46) + ($2))|0;
  $48 = ($47>>>0)<($nb>>>0);
  if ($48) {
   $newp$2 = 0;
   return ($newp$2|0);
  }
  $49 = (($47) - ($nb))|0;
  $50 = ($49>>>0)>(15);
  if ($50) {
   $51 = (($p) + ($nb)|0);
   $52 = (($51) + ($49)|0);
   $53 = $1 & 1;
   $54 = $53 | $nb;
   $55 = $54 | 2;
   HEAP32[$0>>2] = $55;
   $56 = ((($51)) + 4|0);
   $57 = $49 | 1;
   HEAP32[$56>>2] = $57;
   HEAP32[$52>>2] = $49;
   $58 = ((($52)) + 4|0);
   $59 = HEAP32[$58>>2]|0;
   $60 = $59 & -2;
   HEAP32[$58>>2] = $60;
   $storemerge = $51;$storemerge1 = $49;
  } else {
   $61 = $1 & 1;
   $62 = $61 | $47;
   $63 = $62 | 2;
   HEAP32[$0>>2] = $63;
   $64 = (($p) + ($47)|0);
   $65 = ((($64)) + 4|0);
   $66 = HEAP32[$65>>2]|0;
   $67 = $66 | 1;
   HEAP32[$65>>2] = $67;
   $storemerge = 0;$storemerge1 = 0;
  }
  HEAP32[(82844)>>2] = $storemerge1;
  HEAP32[(82856)>>2] = $storemerge;
  $newp$2 = $p;
  return ($newp$2|0);
 }
 $68 = $8 & 2;
 $69 = ($68|0)==(0);
 if (!($69)) {
  $newp$2 = 0;
  return ($newp$2|0);
 }
 $70 = $8 & -8;
 $71 = (($70) + ($2))|0;
 $72 = ($71>>>0)<($nb>>>0);
 if ($72) {
  $newp$2 = 0;
  return ($newp$2|0);
 }
 $73 = (($71) - ($nb))|0;
 $74 = $8 >>> 3;
 $75 = ($8>>>0)<(256);
 do {
  if ($75) {
   $76 = ((($3)) + 8|0);
   $77 = HEAP32[$76>>2]|0;
   $78 = ((($3)) + 12|0);
   $79 = HEAP32[$78>>2]|0;
   $80 = $74 << 1;
   $81 = (82876 + ($80<<2)|0);
   $82 = ($77|0)==($81|0);
   if (!($82)) {
    $83 = ($77>>>0)<($4>>>0);
    if ($83) {
     _abort();
     // unreachable;
    }
    $84 = ((($77)) + 12|0);
    $85 = HEAP32[$84>>2]|0;
    $86 = ($85|0)==($3|0);
    if (!($86)) {
     _abort();
     // unreachable;
    }
   }
   $87 = ($79|0)==($77|0);
   if ($87) {
    $88 = 1 << $74;
    $89 = $88 ^ -1;
    $90 = HEAP32[20709]|0;
    $91 = $90 & $89;
    HEAP32[20709] = $91;
    break;
   }
   $92 = ($79|0)==($81|0);
   if ($92) {
    $$pre = ((($79)) + 8|0);
    $$pre$phiZ2D = $$pre;
   } else {
    $93 = ($79>>>0)<($4>>>0);
    if ($93) {
     _abort();
     // unreachable;
    }
    $94 = ((($79)) + 8|0);
    $95 = HEAP32[$94>>2]|0;
    $96 = ($95|0)==($3|0);
    if ($96) {
     $$pre$phiZ2D = $94;
    } else {
     _abort();
     // unreachable;
    }
   }
   $97 = ((($77)) + 12|0);
   HEAP32[$97>>2] = $79;
   HEAP32[$$pre$phiZ2D>>2] = $77;
  } else {
   $98 = ((($3)) + 24|0);
   $99 = HEAP32[$98>>2]|0;
   $100 = ((($3)) + 12|0);
   $101 = HEAP32[$100>>2]|0;
   $102 = ($101|0)==($3|0);
   do {
    if ($102) {
     $112 = ((($3)) + 16|0);
     $113 = ((($112)) + 4|0);
     $114 = HEAP32[$113>>2]|0;
     $115 = ($114|0)==(0|0);
     if ($115) {
      $116 = HEAP32[$112>>2]|0;
      $117 = ($116|0)==(0|0);
      if ($117) {
       $R$3 = 0;
       break;
      } else {
       $R$1 = $116;$RP$1 = $112;
      }
     } else {
      $R$1 = $114;$RP$1 = $113;
     }
     while(1) {
      $118 = ((($R$1)) + 20|0);
      $119 = HEAP32[$118>>2]|0;
      $120 = ($119|0)==(0|0);
      if (!($120)) {
       $R$1 = $119;$RP$1 = $118;
       continue;
      }
      $121 = ((($R$1)) + 16|0);
      $122 = HEAP32[$121>>2]|0;
      $123 = ($122|0)==(0|0);
      if ($123) {
       $R$1$lcssa = $R$1;$RP$1$lcssa = $RP$1;
       break;
      } else {
       $R$1 = $122;$RP$1 = $121;
      }
     }
     $124 = ($RP$1$lcssa>>>0)<($4>>>0);
     if ($124) {
      _abort();
      // unreachable;
     } else {
      HEAP32[$RP$1$lcssa>>2] = 0;
      $R$3 = $R$1$lcssa;
      break;
     }
    } else {
     $103 = ((($3)) + 8|0);
     $104 = HEAP32[$103>>2]|0;
     $105 = ($104>>>0)<($4>>>0);
     if ($105) {
      _abort();
      // unreachable;
     }
     $106 = ((($104)) + 12|0);
     $107 = HEAP32[$106>>2]|0;
     $108 = ($107|0)==($3|0);
     if (!($108)) {
      _abort();
      // unreachable;
     }
     $109 = ((($101)) + 8|0);
     $110 = HEAP32[$109>>2]|0;
     $111 = ($110|0)==($3|0);
     if ($111) {
      HEAP32[$106>>2] = $101;
      HEAP32[$109>>2] = $104;
      $R$3 = $101;
      break;
     } else {
      _abort();
      // unreachable;
     }
    }
   } while(0);
   $125 = ($99|0)==(0|0);
   if (!($125)) {
    $126 = ((($3)) + 28|0);
    $127 = HEAP32[$126>>2]|0;
    $128 = (83140 + ($127<<2)|0);
    $129 = HEAP32[$128>>2]|0;
    $130 = ($3|0)==($129|0);
    if ($130) {
     HEAP32[$128>>2] = $R$3;
     $cond = ($R$3|0)==(0|0);
     if ($cond) {
      $131 = 1 << $127;
      $132 = $131 ^ -1;
      $133 = HEAP32[(82840)>>2]|0;
      $134 = $133 & $132;
      HEAP32[(82840)>>2] = $134;
      break;
     }
    } else {
     $135 = HEAP32[(82852)>>2]|0;
     $136 = ($99>>>0)<($135>>>0);
     if ($136) {
      _abort();
      // unreachable;
     }
     $137 = ((($99)) + 16|0);
     $138 = HEAP32[$137>>2]|0;
     $139 = ($138|0)==($3|0);
     if ($139) {
      HEAP32[$137>>2] = $R$3;
     } else {
      $140 = ((($99)) + 20|0);
      HEAP32[$140>>2] = $R$3;
     }
     $141 = ($R$3|0)==(0|0);
     if ($141) {
      break;
     }
    }
    $142 = HEAP32[(82852)>>2]|0;
    $143 = ($R$3>>>0)<($142>>>0);
    if ($143) {
     _abort();
     // unreachable;
    }
    $144 = ((($R$3)) + 24|0);
    HEAP32[$144>>2] = $99;
    $145 = ((($3)) + 16|0);
    $146 = HEAP32[$145>>2]|0;
    $147 = ($146|0)==(0|0);
    do {
     if (!($147)) {
      $148 = ($146>>>0)<($142>>>0);
      if ($148) {
       _abort();
       // unreachable;
      } else {
       $149 = ((($R$3)) + 16|0);
       HEAP32[$149>>2] = $146;
       $150 = ((($146)) + 24|0);
       HEAP32[$150>>2] = $R$3;
       break;
      }
     }
    } while(0);
    $151 = ((($145)) + 4|0);
    $152 = HEAP32[$151>>2]|0;
    $153 = ($152|0)==(0|0);
    if (!($153)) {
     $154 = HEAP32[(82852)>>2]|0;
     $155 = ($152>>>0)<($154>>>0);
     if ($155) {
      _abort();
      // unreachable;
     } else {
      $156 = ((($R$3)) + 20|0);
      HEAP32[$156>>2] = $152;
      $157 = ((($152)) + 24|0);
      HEAP32[$157>>2] = $R$3;
      break;
     }
    }
   }
  }
 } while(0);
 $158 = ($73>>>0)<(16);
 if ($158) {
  $159 = $1 & 1;
  $160 = $71 | $159;
  $161 = $160 | 2;
  HEAP32[$0>>2] = $161;
  $162 = (($p) + ($71)|0);
  $163 = ((($162)) + 4|0);
  $164 = HEAP32[$163>>2]|0;
  $165 = $164 | 1;
  HEAP32[$163>>2] = $165;
  $newp$2 = $p;
  return ($newp$2|0);
 } else {
  $166 = (($p) + ($nb)|0);
  $167 = $1 & 1;
  $168 = $167 | $nb;
  $169 = $168 | 2;
  HEAP32[$0>>2] = $169;
  $170 = ((($166)) + 4|0);
  $171 = $73 | 3;
  HEAP32[$170>>2] = $171;
  $172 = (($166) + ($73)|0);
  $173 = ((($172)) + 4|0);
  $174 = HEAP32[$173>>2]|0;
  $175 = $174 | 1;
  HEAP32[$173>>2] = $175;
  _dispose_chunk($166,$73);
  $newp$2 = $p;
  return ($newp$2|0);
 }
 return (0)|0;
}
function _dispose_chunk($p,$psize) {
 $p = $p|0;
 $psize = $psize|0;
 var $$1 = 0, $$14 = 0, $$2 = 0, $$lcssa = 0, $$pre = 0, $$pre$phi22Z2D = 0, $$pre$phi24Z2D = 0, $$pre$phiZ2D = 0, $$pre21 = 0, $$pre23 = 0, $0 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0;
 var $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0;
 var $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0;
 var $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0;
 var $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0;
 var $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0;
 var $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0;
 var $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0;
 var $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0;
 var $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0;
 var $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0;
 var $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0, $299 = 0, $3 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0;
 var $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0;
 var $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0;
 var $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0;
 var $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $F17$0 = 0, $I20$0 = 0, $K21$0 = 0, $R$1 = 0, $R$1$lcssa = 0;
 var $R$3 = 0, $R7$1 = 0, $R7$1$lcssa = 0, $R7$3 = 0, $RP$1 = 0, $RP$1$lcssa = 0, $RP9$1 = 0, $RP9$1$lcssa = 0, $T$0 = 0, $T$0$lcssa = 0, $T$0$lcssa30 = 0, $cond = 0, $cond16 = 0, $not$ = 0, label = 0, sp = 0;
 sp = STACKTOP;
 $0 = (($p) + ($psize)|0);
 $1 = ((($p)) + 4|0);
 $2 = HEAP32[$1>>2]|0;
 $3 = $2 & 1;
 $4 = ($3|0)==(0);
 do {
  if ($4) {
   $5 = HEAP32[$p>>2]|0;
   $6 = $2 & 3;
   $7 = ($6|0)==(0);
   if ($7) {
    return;
   }
   $8 = (0 - ($5))|0;
   $9 = (($p) + ($8)|0);
   $10 = (($5) + ($psize))|0;
   $11 = HEAP32[(82852)>>2]|0;
   $12 = ($9>>>0)<($11>>>0);
   if ($12) {
    _abort();
    // unreachable;
   }
   $13 = HEAP32[(82856)>>2]|0;
   $14 = ($9|0)==($13|0);
   if ($14) {
    $99 = ((($0)) + 4|0);
    $100 = HEAP32[$99>>2]|0;
    $101 = $100 & 3;
    $102 = ($101|0)==(3);
    if (!($102)) {
     $$1 = $9;$$14 = $10;
     break;
    }
    HEAP32[(82844)>>2] = $10;
    $103 = $100 & -2;
    HEAP32[$99>>2] = $103;
    $104 = $10 | 1;
    $105 = ((($9)) + 4|0);
    HEAP32[$105>>2] = $104;
    $106 = (($9) + ($10)|0);
    HEAP32[$106>>2] = $10;
    return;
   }
   $15 = $5 >>> 3;
   $16 = ($5>>>0)<(256);
   if ($16) {
    $17 = ((($9)) + 8|0);
    $18 = HEAP32[$17>>2]|0;
    $19 = ((($9)) + 12|0);
    $20 = HEAP32[$19>>2]|0;
    $21 = $15 << 1;
    $22 = (82876 + ($21<<2)|0);
    $23 = ($18|0)==($22|0);
    if (!($23)) {
     $24 = ($18>>>0)<($11>>>0);
     if ($24) {
      _abort();
      // unreachable;
     }
     $25 = ((($18)) + 12|0);
     $26 = HEAP32[$25>>2]|0;
     $27 = ($26|0)==($9|0);
     if (!($27)) {
      _abort();
      // unreachable;
     }
    }
    $28 = ($20|0)==($18|0);
    if ($28) {
     $29 = 1 << $15;
     $30 = $29 ^ -1;
     $31 = HEAP32[20709]|0;
     $32 = $31 & $30;
     HEAP32[20709] = $32;
     $$1 = $9;$$14 = $10;
     break;
    }
    $33 = ($20|0)==($22|0);
    if ($33) {
     $$pre23 = ((($20)) + 8|0);
     $$pre$phi24Z2D = $$pre23;
    } else {
     $34 = ($20>>>0)<($11>>>0);
     if ($34) {
      _abort();
      // unreachable;
     }
     $35 = ((($20)) + 8|0);
     $36 = HEAP32[$35>>2]|0;
     $37 = ($36|0)==($9|0);
     if ($37) {
      $$pre$phi24Z2D = $35;
     } else {
      _abort();
      // unreachable;
     }
    }
    $38 = ((($18)) + 12|0);
    HEAP32[$38>>2] = $20;
    HEAP32[$$pre$phi24Z2D>>2] = $18;
    $$1 = $9;$$14 = $10;
    break;
   }
   $39 = ((($9)) + 24|0);
   $40 = HEAP32[$39>>2]|0;
   $41 = ((($9)) + 12|0);
   $42 = HEAP32[$41>>2]|0;
   $43 = ($42|0)==($9|0);
   do {
    if ($43) {
     $53 = ((($9)) + 16|0);
     $54 = ((($53)) + 4|0);
     $55 = HEAP32[$54>>2]|0;
     $56 = ($55|0)==(0|0);
     if ($56) {
      $57 = HEAP32[$53>>2]|0;
      $58 = ($57|0)==(0|0);
      if ($58) {
       $R$3 = 0;
       break;
      } else {
       $R$1 = $57;$RP$1 = $53;
      }
     } else {
      $R$1 = $55;$RP$1 = $54;
     }
     while(1) {
      $59 = ((($R$1)) + 20|0);
      $60 = HEAP32[$59>>2]|0;
      $61 = ($60|0)==(0|0);
      if (!($61)) {
       $R$1 = $60;$RP$1 = $59;
       continue;
      }
      $62 = ((($R$1)) + 16|0);
      $63 = HEAP32[$62>>2]|0;
      $64 = ($63|0)==(0|0);
      if ($64) {
       $R$1$lcssa = $R$1;$RP$1$lcssa = $RP$1;
       break;
      } else {
       $R$1 = $63;$RP$1 = $62;
      }
     }
     $65 = ($RP$1$lcssa>>>0)<($11>>>0);
     if ($65) {
      _abort();
      // unreachable;
     } else {
      HEAP32[$RP$1$lcssa>>2] = 0;
      $R$3 = $R$1$lcssa;
      break;
     }
    } else {
     $44 = ((($9)) + 8|0);
     $45 = HEAP32[$44>>2]|0;
     $46 = ($45>>>0)<($11>>>0);
     if ($46) {
      _abort();
      // unreachable;
     }
     $47 = ((($45)) + 12|0);
     $48 = HEAP32[$47>>2]|0;
     $49 = ($48|0)==($9|0);
     if (!($49)) {
      _abort();
      // unreachable;
     }
     $50 = ((($42)) + 8|0);
     $51 = HEAP32[$50>>2]|0;
     $52 = ($51|0)==($9|0);
     if ($52) {
      HEAP32[$47>>2] = $42;
      HEAP32[$50>>2] = $45;
      $R$3 = $42;
      break;
     } else {
      _abort();
      // unreachable;
     }
    }
   } while(0);
   $66 = ($40|0)==(0|0);
   if ($66) {
    $$1 = $9;$$14 = $10;
   } else {
    $67 = ((($9)) + 28|0);
    $68 = HEAP32[$67>>2]|0;
    $69 = (83140 + ($68<<2)|0);
    $70 = HEAP32[$69>>2]|0;
    $71 = ($9|0)==($70|0);
    if ($71) {
     HEAP32[$69>>2] = $R$3;
     $cond = ($R$3|0)==(0|0);
     if ($cond) {
      $72 = 1 << $68;
      $73 = $72 ^ -1;
      $74 = HEAP32[(82840)>>2]|0;
      $75 = $74 & $73;
      HEAP32[(82840)>>2] = $75;
      $$1 = $9;$$14 = $10;
      break;
     }
    } else {
     $76 = HEAP32[(82852)>>2]|0;
     $77 = ($40>>>0)<($76>>>0);
     if ($77) {
      _abort();
      // unreachable;
     }
     $78 = ((($40)) + 16|0);
     $79 = HEAP32[$78>>2]|0;
     $80 = ($79|0)==($9|0);
     if ($80) {
      HEAP32[$78>>2] = $R$3;
     } else {
      $81 = ((($40)) + 20|0);
      HEAP32[$81>>2] = $R$3;
     }
     $82 = ($R$3|0)==(0|0);
     if ($82) {
      $$1 = $9;$$14 = $10;
      break;
     }
    }
    $83 = HEAP32[(82852)>>2]|0;
    $84 = ($R$3>>>0)<($83>>>0);
    if ($84) {
     _abort();
     // unreachable;
    }
    $85 = ((($R$3)) + 24|0);
    HEAP32[$85>>2] = $40;
    $86 = ((($9)) + 16|0);
    $87 = HEAP32[$86>>2]|0;
    $88 = ($87|0)==(0|0);
    do {
     if (!($88)) {
      $89 = ($87>>>0)<($83>>>0);
      if ($89) {
       _abort();
       // unreachable;
      } else {
       $90 = ((($R$3)) + 16|0);
       HEAP32[$90>>2] = $87;
       $91 = ((($87)) + 24|0);
       HEAP32[$91>>2] = $R$3;
       break;
      }
     }
    } while(0);
    $92 = ((($86)) + 4|0);
    $93 = HEAP32[$92>>2]|0;
    $94 = ($93|0)==(0|0);
    if ($94) {
     $$1 = $9;$$14 = $10;
    } else {
     $95 = HEAP32[(82852)>>2]|0;
     $96 = ($93>>>0)<($95>>>0);
     if ($96) {
      _abort();
      // unreachable;
     } else {
      $97 = ((($R$3)) + 20|0);
      HEAP32[$97>>2] = $93;
      $98 = ((($93)) + 24|0);
      HEAP32[$98>>2] = $R$3;
      $$1 = $9;$$14 = $10;
      break;
     }
    }
   }
  } else {
   $$1 = $p;$$14 = $psize;
  }
 } while(0);
 $107 = HEAP32[(82852)>>2]|0;
 $108 = ($0>>>0)<($107>>>0);
 if ($108) {
  _abort();
  // unreachable;
 }
 $109 = ((($0)) + 4|0);
 $110 = HEAP32[$109>>2]|0;
 $111 = $110 & 2;
 $112 = ($111|0)==(0);
 if ($112) {
  $113 = HEAP32[(82860)>>2]|0;
  $114 = ($0|0)==($113|0);
  if ($114) {
   $115 = HEAP32[(82848)>>2]|0;
   $116 = (($115) + ($$14))|0;
   HEAP32[(82848)>>2] = $116;
   HEAP32[(82860)>>2] = $$1;
   $117 = $116 | 1;
   $118 = ((($$1)) + 4|0);
   HEAP32[$118>>2] = $117;
   $119 = HEAP32[(82856)>>2]|0;
   $120 = ($$1|0)==($119|0);
   if (!($120)) {
    return;
   }
   HEAP32[(82856)>>2] = 0;
   HEAP32[(82844)>>2] = 0;
   return;
  }
  $121 = HEAP32[(82856)>>2]|0;
  $122 = ($0|0)==($121|0);
  if ($122) {
   $123 = HEAP32[(82844)>>2]|0;
   $124 = (($123) + ($$14))|0;
   HEAP32[(82844)>>2] = $124;
   HEAP32[(82856)>>2] = $$1;
   $125 = $124 | 1;
   $126 = ((($$1)) + 4|0);
   HEAP32[$126>>2] = $125;
   $127 = (($$1) + ($124)|0);
   HEAP32[$127>>2] = $124;
   return;
  }
  $128 = $110 & -8;
  $129 = (($128) + ($$14))|0;
  $130 = $110 >>> 3;
  $131 = ($110>>>0)<(256);
  do {
   if ($131) {
    $132 = ((($0)) + 8|0);
    $133 = HEAP32[$132>>2]|0;
    $134 = ((($0)) + 12|0);
    $135 = HEAP32[$134>>2]|0;
    $136 = $130 << 1;
    $137 = (82876 + ($136<<2)|0);
    $138 = ($133|0)==($137|0);
    if (!($138)) {
     $139 = ($133>>>0)<($107>>>0);
     if ($139) {
      _abort();
      // unreachable;
     }
     $140 = ((($133)) + 12|0);
     $141 = HEAP32[$140>>2]|0;
     $142 = ($141|0)==($0|0);
     if (!($142)) {
      _abort();
      // unreachable;
     }
    }
    $143 = ($135|0)==($133|0);
    if ($143) {
     $144 = 1 << $130;
     $145 = $144 ^ -1;
     $146 = HEAP32[20709]|0;
     $147 = $146 & $145;
     HEAP32[20709] = $147;
     break;
    }
    $148 = ($135|0)==($137|0);
    if ($148) {
     $$pre21 = ((($135)) + 8|0);
     $$pre$phi22Z2D = $$pre21;
    } else {
     $149 = ($135>>>0)<($107>>>0);
     if ($149) {
      _abort();
      // unreachable;
     }
     $150 = ((($135)) + 8|0);
     $151 = HEAP32[$150>>2]|0;
     $152 = ($151|0)==($0|0);
     if ($152) {
      $$pre$phi22Z2D = $150;
     } else {
      _abort();
      // unreachable;
     }
    }
    $153 = ((($133)) + 12|0);
    HEAP32[$153>>2] = $135;
    HEAP32[$$pre$phi22Z2D>>2] = $133;
   } else {
    $154 = ((($0)) + 24|0);
    $155 = HEAP32[$154>>2]|0;
    $156 = ((($0)) + 12|0);
    $157 = HEAP32[$156>>2]|0;
    $158 = ($157|0)==($0|0);
    do {
     if ($158) {
      $168 = ((($0)) + 16|0);
      $169 = ((($168)) + 4|0);
      $170 = HEAP32[$169>>2]|0;
      $171 = ($170|0)==(0|0);
      if ($171) {
       $172 = HEAP32[$168>>2]|0;
       $173 = ($172|0)==(0|0);
       if ($173) {
        $R7$3 = 0;
        break;
       } else {
        $R7$1 = $172;$RP9$1 = $168;
       }
      } else {
       $R7$1 = $170;$RP9$1 = $169;
      }
      while(1) {
       $174 = ((($R7$1)) + 20|0);
       $175 = HEAP32[$174>>2]|0;
       $176 = ($175|0)==(0|0);
       if (!($176)) {
        $R7$1 = $175;$RP9$1 = $174;
        continue;
       }
       $177 = ((($R7$1)) + 16|0);
       $178 = HEAP32[$177>>2]|0;
       $179 = ($178|0)==(0|0);
       if ($179) {
        $R7$1$lcssa = $R7$1;$RP9$1$lcssa = $RP9$1;
        break;
       } else {
        $R7$1 = $178;$RP9$1 = $177;
       }
      }
      $180 = ($RP9$1$lcssa>>>0)<($107>>>0);
      if ($180) {
       _abort();
       // unreachable;
      } else {
       HEAP32[$RP9$1$lcssa>>2] = 0;
       $R7$3 = $R7$1$lcssa;
       break;
      }
     } else {
      $159 = ((($0)) + 8|0);
      $160 = HEAP32[$159>>2]|0;
      $161 = ($160>>>0)<($107>>>0);
      if ($161) {
       _abort();
       // unreachable;
      }
      $162 = ((($160)) + 12|0);
      $163 = HEAP32[$162>>2]|0;
      $164 = ($163|0)==($0|0);
      if (!($164)) {
       _abort();
       // unreachable;
      }
      $165 = ((($157)) + 8|0);
      $166 = HEAP32[$165>>2]|0;
      $167 = ($166|0)==($0|0);
      if ($167) {
       HEAP32[$162>>2] = $157;
       HEAP32[$165>>2] = $160;
       $R7$3 = $157;
       break;
      } else {
       _abort();
       // unreachable;
      }
     }
    } while(0);
    $181 = ($155|0)==(0|0);
    if (!($181)) {
     $182 = ((($0)) + 28|0);
     $183 = HEAP32[$182>>2]|0;
     $184 = (83140 + ($183<<2)|0);
     $185 = HEAP32[$184>>2]|0;
     $186 = ($0|0)==($185|0);
     if ($186) {
      HEAP32[$184>>2] = $R7$3;
      $cond16 = ($R7$3|0)==(0|0);
      if ($cond16) {
       $187 = 1 << $183;
       $188 = $187 ^ -1;
       $189 = HEAP32[(82840)>>2]|0;
       $190 = $189 & $188;
       HEAP32[(82840)>>2] = $190;
       break;
      }
     } else {
      $191 = HEAP32[(82852)>>2]|0;
      $192 = ($155>>>0)<($191>>>0);
      if ($192) {
       _abort();
       // unreachable;
      }
      $193 = ((($155)) + 16|0);
      $194 = HEAP32[$193>>2]|0;
      $195 = ($194|0)==($0|0);
      if ($195) {
       HEAP32[$193>>2] = $R7$3;
      } else {
       $196 = ((($155)) + 20|0);
       HEAP32[$196>>2] = $R7$3;
      }
      $197 = ($R7$3|0)==(0|0);
      if ($197) {
       break;
      }
     }
     $198 = HEAP32[(82852)>>2]|0;
     $199 = ($R7$3>>>0)<($198>>>0);
     if ($199) {
      _abort();
      // unreachable;
     }
     $200 = ((($R7$3)) + 24|0);
     HEAP32[$200>>2] = $155;
     $201 = ((($0)) + 16|0);
     $202 = HEAP32[$201>>2]|0;
     $203 = ($202|0)==(0|0);
     do {
      if (!($203)) {
       $204 = ($202>>>0)<($198>>>0);
       if ($204) {
        _abort();
        // unreachable;
       } else {
        $205 = ((($R7$3)) + 16|0);
        HEAP32[$205>>2] = $202;
        $206 = ((($202)) + 24|0);
        HEAP32[$206>>2] = $R7$3;
        break;
       }
      }
     } while(0);
     $207 = ((($201)) + 4|0);
     $208 = HEAP32[$207>>2]|0;
     $209 = ($208|0)==(0|0);
     if (!($209)) {
      $210 = HEAP32[(82852)>>2]|0;
      $211 = ($208>>>0)<($210>>>0);
      if ($211) {
       _abort();
       // unreachable;
      } else {
       $212 = ((($R7$3)) + 20|0);
       HEAP32[$212>>2] = $208;
       $213 = ((($208)) + 24|0);
       HEAP32[$213>>2] = $R7$3;
       break;
      }
     }
    }
   }
  } while(0);
  $214 = $129 | 1;
  $215 = ((($$1)) + 4|0);
  HEAP32[$215>>2] = $214;
  $216 = (($$1) + ($129)|0);
  HEAP32[$216>>2] = $129;
  $217 = HEAP32[(82856)>>2]|0;
  $218 = ($$1|0)==($217|0);
  if ($218) {
   HEAP32[(82844)>>2] = $129;
   return;
  } else {
   $$2 = $129;
  }
 } else {
  $219 = $110 & -2;
  HEAP32[$109>>2] = $219;
  $220 = $$14 | 1;
  $221 = ((($$1)) + 4|0);
  HEAP32[$221>>2] = $220;
  $222 = (($$1) + ($$14)|0);
  HEAP32[$222>>2] = $$14;
  $$2 = $$14;
 }
 $223 = $$2 >>> 3;
 $224 = ($$2>>>0)<(256);
 if ($224) {
  $225 = $223 << 1;
  $226 = (82876 + ($225<<2)|0);
  $227 = HEAP32[20709]|0;
  $228 = 1 << $223;
  $229 = $227 & $228;
  $230 = ($229|0)==(0);
  if ($230) {
   $231 = $227 | $228;
   HEAP32[20709] = $231;
   $$pre = ((($226)) + 8|0);
   $$pre$phiZ2D = $$pre;$F17$0 = $226;
  } else {
   $232 = ((($226)) + 8|0);
   $233 = HEAP32[$232>>2]|0;
   $234 = HEAP32[(82852)>>2]|0;
   $235 = ($233>>>0)<($234>>>0);
   if ($235) {
    _abort();
    // unreachable;
   } else {
    $$pre$phiZ2D = $232;$F17$0 = $233;
   }
  }
  HEAP32[$$pre$phiZ2D>>2] = $$1;
  $236 = ((($F17$0)) + 12|0);
  HEAP32[$236>>2] = $$1;
  $237 = ((($$1)) + 8|0);
  HEAP32[$237>>2] = $F17$0;
  $238 = ((($$1)) + 12|0);
  HEAP32[$238>>2] = $226;
  return;
 }
 $239 = $$2 >>> 8;
 $240 = ($239|0)==(0);
 if ($240) {
  $I20$0 = 0;
 } else {
  $241 = ($$2>>>0)>(16777215);
  if ($241) {
   $I20$0 = 31;
  } else {
   $242 = (($239) + 1048320)|0;
   $243 = $242 >>> 16;
   $244 = $243 & 8;
   $245 = $239 << $244;
   $246 = (($245) + 520192)|0;
   $247 = $246 >>> 16;
   $248 = $247 & 4;
   $249 = $248 | $244;
   $250 = $245 << $248;
   $251 = (($250) + 245760)|0;
   $252 = $251 >>> 16;
   $253 = $252 & 2;
   $254 = $249 | $253;
   $255 = (14 - ($254))|0;
   $256 = $250 << $253;
   $257 = $256 >>> 15;
   $258 = (($255) + ($257))|0;
   $259 = $258 << 1;
   $260 = (($258) + 7)|0;
   $261 = $$2 >>> $260;
   $262 = $261 & 1;
   $263 = $262 | $259;
   $I20$0 = $263;
  }
 }
 $264 = (83140 + ($I20$0<<2)|0);
 $265 = ((($$1)) + 28|0);
 HEAP32[$265>>2] = $I20$0;
 $266 = ((($$1)) + 16|0);
 $267 = ((($$1)) + 20|0);
 HEAP32[$267>>2] = 0;
 HEAP32[$266>>2] = 0;
 $268 = HEAP32[(82840)>>2]|0;
 $269 = 1 << $I20$0;
 $270 = $268 & $269;
 $271 = ($270|0)==(0);
 if ($271) {
  $272 = $268 | $269;
  HEAP32[(82840)>>2] = $272;
  HEAP32[$264>>2] = $$1;
  $273 = ((($$1)) + 24|0);
  HEAP32[$273>>2] = $264;
  $274 = ((($$1)) + 12|0);
  HEAP32[$274>>2] = $$1;
  $275 = ((($$1)) + 8|0);
  HEAP32[$275>>2] = $$1;
  return;
 }
 $276 = HEAP32[$264>>2]|0;
 $277 = ($I20$0|0)==(31);
 $278 = $I20$0 >>> 1;
 $279 = (25 - ($278))|0;
 $280 = $277 ? 0 : $279;
 $281 = $$2 << $280;
 $K21$0 = $281;$T$0 = $276;
 while(1) {
  $282 = ((($T$0)) + 4|0);
  $283 = HEAP32[$282>>2]|0;
  $284 = $283 & -8;
  $285 = ($284|0)==($$2|0);
  if ($285) {
   $T$0$lcssa = $T$0;
   label = 127;
   break;
  }
  $286 = $K21$0 >>> 31;
  $287 = (((($T$0)) + 16|0) + ($286<<2)|0);
  $288 = $K21$0 << 1;
  $289 = HEAP32[$287>>2]|0;
  $290 = ($289|0)==(0|0);
  if ($290) {
   $$lcssa = $287;$T$0$lcssa30 = $T$0;
   label = 124;
   break;
  } else {
   $K21$0 = $288;$T$0 = $289;
  }
 }
 if ((label|0) == 124) {
  $291 = HEAP32[(82852)>>2]|0;
  $292 = ($$lcssa>>>0)<($291>>>0);
  if ($292) {
   _abort();
   // unreachable;
  }
  HEAP32[$$lcssa>>2] = $$1;
  $293 = ((($$1)) + 24|0);
  HEAP32[$293>>2] = $T$0$lcssa30;
  $294 = ((($$1)) + 12|0);
  HEAP32[$294>>2] = $$1;
  $295 = ((($$1)) + 8|0);
  HEAP32[$295>>2] = $$1;
  return;
 }
 else if ((label|0) == 127) {
  $296 = ((($T$0$lcssa)) + 8|0);
  $297 = HEAP32[$296>>2]|0;
  $298 = HEAP32[(82852)>>2]|0;
  $299 = ($297>>>0)>=($298>>>0);
  $not$ = ($T$0$lcssa>>>0)>=($298>>>0);
  $300 = $299 & $not$;
  if (!($300)) {
   _abort();
   // unreachable;
  }
  $301 = ((($297)) + 12|0);
  HEAP32[$301>>2] = $$1;
  HEAP32[$296>>2] = $$1;
  $302 = ((($$1)) + 8|0);
  HEAP32[$302>>2] = $297;
  $303 = ((($$1)) + 12|0);
  HEAP32[$303>>2] = $T$0$lcssa;
  $304 = ((($$1)) + 24|0);
  HEAP32[$304>>2] = 0;
  return;
 }
}
function runPostSets() {
}
function _i64Subtract(a, b, c, d) {
    a = a|0; b = b|0; c = c|0; d = d|0;
    var l = 0, h = 0;
    l = (a - c)>>>0;
    h = (b - d)>>>0;
    h = (b - d - (((c>>>0) > (a>>>0))|0))>>>0; // Borrow one from high word to low word on underflow.
    return ((tempRet0 = h,l|0)|0);
}
function _i64Add(a, b, c, d) {
    /*
      x = a + b*2^32
      y = c + d*2^32
      result = l + h*2^32
    */
    a = a|0; b = b|0; c = c|0; d = d|0;
    var l = 0, h = 0;
    l = (a + c)>>>0;
    h = (b + d + (((l>>>0) < (a>>>0))|0))>>>0; // Add carry from low word to high word on overflow.
    return ((tempRet0 = h,l|0)|0);
}
function _memset(ptr, value, num) {
    ptr = ptr|0; value = value|0; num = num|0;
    var stop = 0, value4 = 0, stop4 = 0, unaligned = 0;
    stop = (ptr + num)|0;
    if ((num|0) >= 20) {
      // This is unaligned, but quite large, so work hard to get to aligned settings
      value = value & 0xff;
      unaligned = ptr & 3;
      value4 = value | (value << 8) | (value << 16) | (value << 24);
      stop4 = stop & ~3;
      if (unaligned) {
        unaligned = (ptr + 4 - unaligned)|0;
        while ((ptr|0) < (unaligned|0)) { // no need to check for stop, since we have large num
          HEAP8[((ptr)>>0)]=value;
          ptr = (ptr+1)|0;
        }
      }
      while ((ptr|0) < (stop4|0)) {
        HEAP32[((ptr)>>2)]=value4;
        ptr = (ptr+4)|0;
      }
    }
    while ((ptr|0) < (stop|0)) {
      HEAP8[((ptr)>>0)]=value;
      ptr = (ptr+1)|0;
    }
    return (ptr-num)|0;
}
function _bitshift64Lshr(low, high, bits) {
    low = low|0; high = high|0; bits = bits|0;
    var ander = 0;
    if ((bits|0) < 32) {
      ander = ((1 << bits) - 1)|0;
      tempRet0 = high >>> bits;
      return (low >>> bits) | ((high&ander) << (32 - bits));
    }
    tempRet0 = 0;
    return (high >>> (bits - 32))|0;
}
function _bitshift64Shl(low, high, bits) {
    low = low|0; high = high|0; bits = bits|0;
    var ander = 0;
    if ((bits|0) < 32) {
      ander = ((1 << bits) - 1)|0;
      tempRet0 = (high << bits) | ((low&(ander << (32 - bits))) >>> (32 - bits));
      return low << bits;
    }
    tempRet0 = low << (bits - 32);
    return 0;
}
function ___muldsi3($a, $b) {
    $a = $a | 0;
    $b = $b | 0;
    var $1 = 0, $2 = 0, $3 = 0, $6 = 0, $8 = 0, $11 = 0, $12 = 0;
    $1 = $a & 65535;
    $2 = $b & 65535;
    $3 = Math_imul($2, $1) | 0;
    $6 = $a >>> 16;
    $8 = ($3 >>> 16) + (Math_imul($2, $6) | 0) | 0;
    $11 = $b >>> 16;
    $12 = Math_imul($11, $1) | 0;
    return (tempRet0 = (($8 >>> 16) + (Math_imul($11, $6) | 0) | 0) + ((($8 & 65535) + $12 | 0) >>> 16) | 0, 0 | ($8 + $12 << 16 | $3 & 65535)) | 0;
}
function ___muldi3($a$0, $a$1, $b$0, $b$1) {
    $a$0 = $a$0 | 0;
    $a$1 = $a$1 | 0;
    $b$0 = $b$0 | 0;
    $b$1 = $b$1 | 0;
    var $x_sroa_0_0_extract_trunc = 0, $y_sroa_0_0_extract_trunc = 0, $1$0 = 0, $1$1 = 0, $2 = 0;
    $x_sroa_0_0_extract_trunc = $a$0;
    $y_sroa_0_0_extract_trunc = $b$0;
    $1$0 = ___muldsi3($x_sroa_0_0_extract_trunc, $y_sroa_0_0_extract_trunc) | 0;
    $1$1 = tempRet0;
    $2 = Math_imul($a$1, $y_sroa_0_0_extract_trunc) | 0;
    return (tempRet0 = ((Math_imul($b$1, $x_sroa_0_0_extract_trunc) | 0) + $2 | 0) + $1$1 | $1$1 & 0, 0 | $1$0 & -1) | 0;
}
function _llvm_cttz_i32(x) {
    x = x|0;
    var ret = 0;
    ret = ((HEAP8[(((cttz_i8)+(x & 0xff))>>0)])|0);
    if ((ret|0) < 8) return ret|0;
    ret = ((HEAP8[(((cttz_i8)+((x >> 8)&0xff))>>0)])|0);
    if ((ret|0) < 8) return (ret + 8)|0;
    ret = ((HEAP8[(((cttz_i8)+((x >> 16)&0xff))>>0)])|0);
    if ((ret|0) < 8) return (ret + 16)|0;
    return (((HEAP8[(((cttz_i8)+(x >>> 24))>>0)])|0) + 24)|0;
}
function ___udivmoddi4($a$0, $a$1, $b$0, $b$1, $rem) {
    $a$0 = $a$0 | 0;
    $a$1 = $a$1 | 0;
    $b$0 = $b$0 | 0;
    $b$1 = $b$1 | 0;
    $rem = $rem | 0;
    var $n_sroa_0_0_extract_trunc = 0, $n_sroa_1_4_extract_shift$0 = 0, $n_sroa_1_4_extract_trunc = 0, $d_sroa_0_0_extract_trunc = 0, $d_sroa_1_4_extract_shift$0 = 0, $d_sroa_1_4_extract_trunc = 0, $4 = 0, $17 = 0, $37 = 0, $49 = 0, $51 = 0, $57 = 0, $58 = 0, $66 = 0, $78 = 0, $86 = 0, $88 = 0, $89 = 0, $91 = 0, $92 = 0, $95 = 0, $105 = 0, $117 = 0, $119 = 0, $125 = 0, $126 = 0, $130 = 0, $q_sroa_1_1_ph = 0, $q_sroa_0_1_ph = 0, $r_sroa_1_1_ph = 0, $r_sroa_0_1_ph = 0, $sr_1_ph = 0, $d_sroa_0_0_insert_insert99$0 = 0, $d_sroa_0_0_insert_insert99$1 = 0, $137$0 = 0, $137$1 = 0, $carry_0203 = 0, $sr_1202 = 0, $r_sroa_0_1201 = 0, $r_sroa_1_1200 = 0, $q_sroa_0_1199 = 0, $q_sroa_1_1198 = 0, $147 = 0, $149 = 0, $r_sroa_0_0_insert_insert42$0 = 0, $r_sroa_0_0_insert_insert42$1 = 0, $150$1 = 0, $151$0 = 0, $152 = 0, $154$0 = 0, $r_sroa_0_0_extract_trunc = 0, $r_sroa_1_4_extract_trunc = 0, $155 = 0, $carry_0_lcssa$0 = 0, $carry_0_lcssa$1 = 0, $r_sroa_0_1_lcssa = 0, $r_sroa_1_1_lcssa = 0, $q_sroa_0_1_lcssa = 0, $q_sroa_1_1_lcssa = 0, $q_sroa_0_0_insert_ext75$0 = 0, $q_sroa_0_0_insert_ext75$1 = 0, $q_sroa_0_0_insert_insert77$1 = 0, $_0$0 = 0, $_0$1 = 0;
    $n_sroa_0_0_extract_trunc = $a$0;
    $n_sroa_1_4_extract_shift$0 = $a$1;
    $n_sroa_1_4_extract_trunc = $n_sroa_1_4_extract_shift$0;
    $d_sroa_0_0_extract_trunc = $b$0;
    $d_sroa_1_4_extract_shift$0 = $b$1;
    $d_sroa_1_4_extract_trunc = $d_sroa_1_4_extract_shift$0;
    if (($n_sroa_1_4_extract_trunc | 0) == 0) {
      $4 = ($rem | 0) != 0;
      if (($d_sroa_1_4_extract_trunc | 0) == 0) {
        if ($4) {
          HEAP32[$rem >> 2] = ($n_sroa_0_0_extract_trunc >>> 0) % ($d_sroa_0_0_extract_trunc >>> 0);
          HEAP32[$rem + 4 >> 2] = 0;
        }
        $_0$1 = 0;
        $_0$0 = ($n_sroa_0_0_extract_trunc >>> 0) / ($d_sroa_0_0_extract_trunc >>> 0) >>> 0;
        return (tempRet0 = $_0$1, $_0$0) | 0;
      } else {
        if (!$4) {
          $_0$1 = 0;
          $_0$0 = 0;
          return (tempRet0 = $_0$1, $_0$0) | 0;
        }
        HEAP32[$rem >> 2] = $a$0 & -1;
        HEAP32[$rem + 4 >> 2] = $a$1 & 0;
        $_0$1 = 0;
        $_0$0 = 0;
        return (tempRet0 = $_0$1, $_0$0) | 0;
      }
    }
    $17 = ($d_sroa_1_4_extract_trunc | 0) == 0;
    do {
      if (($d_sroa_0_0_extract_trunc | 0) == 0) {
        if ($17) {
          if (($rem | 0) != 0) {
            HEAP32[$rem >> 2] = ($n_sroa_1_4_extract_trunc >>> 0) % ($d_sroa_0_0_extract_trunc >>> 0);
            HEAP32[$rem + 4 >> 2] = 0;
          }
          $_0$1 = 0;
          $_0$0 = ($n_sroa_1_4_extract_trunc >>> 0) / ($d_sroa_0_0_extract_trunc >>> 0) >>> 0;
          return (tempRet0 = $_0$1, $_0$0) | 0;
        }
        if (($n_sroa_0_0_extract_trunc | 0) == 0) {
          if (($rem | 0) != 0) {
            HEAP32[$rem >> 2] = 0;
            HEAP32[$rem + 4 >> 2] = ($n_sroa_1_4_extract_trunc >>> 0) % ($d_sroa_1_4_extract_trunc >>> 0);
          }
          $_0$1 = 0;
          $_0$0 = ($n_sroa_1_4_extract_trunc >>> 0) / ($d_sroa_1_4_extract_trunc >>> 0) >>> 0;
          return (tempRet0 = $_0$1, $_0$0) | 0;
        }
        $37 = $d_sroa_1_4_extract_trunc - 1 | 0;
        if (($37 & $d_sroa_1_4_extract_trunc | 0) == 0) {
          if (($rem | 0) != 0) {
            HEAP32[$rem >> 2] = 0 | $a$0 & -1;
            HEAP32[$rem + 4 >> 2] = $37 & $n_sroa_1_4_extract_trunc | $a$1 & 0;
          }
          $_0$1 = 0;
          $_0$0 = $n_sroa_1_4_extract_trunc >>> ((_llvm_cttz_i32($d_sroa_1_4_extract_trunc | 0) | 0) >>> 0);
          return (tempRet0 = $_0$1, $_0$0) | 0;
        }
        $49 = Math_clz32($d_sroa_1_4_extract_trunc | 0) | 0;
        $51 = $49 - (Math_clz32($n_sroa_1_4_extract_trunc | 0) | 0) | 0;
        if ($51 >>> 0 <= 30) {
          $57 = $51 + 1 | 0;
          $58 = 31 - $51 | 0;
          $sr_1_ph = $57;
          $r_sroa_0_1_ph = $n_sroa_1_4_extract_trunc << $58 | $n_sroa_0_0_extract_trunc >>> ($57 >>> 0);
          $r_sroa_1_1_ph = $n_sroa_1_4_extract_trunc >>> ($57 >>> 0);
          $q_sroa_0_1_ph = 0;
          $q_sroa_1_1_ph = $n_sroa_0_0_extract_trunc << $58;
          break;
        }
        if (($rem | 0) == 0) {
          $_0$1 = 0;
          $_0$0 = 0;
          return (tempRet0 = $_0$1, $_0$0) | 0;
        }
        HEAP32[$rem >> 2] = 0 | $a$0 & -1;
        HEAP32[$rem + 4 >> 2] = $n_sroa_1_4_extract_shift$0 | $a$1 & 0;
        $_0$1 = 0;
        $_0$0 = 0;
        return (tempRet0 = $_0$1, $_0$0) | 0;
      } else {
        if (!$17) {
          $117 = Math_clz32($d_sroa_1_4_extract_trunc | 0) | 0;
          $119 = $117 - (Math_clz32($n_sroa_1_4_extract_trunc | 0) | 0) | 0;
          if ($119 >>> 0 <= 31) {
            $125 = $119 + 1 | 0;
            $126 = 31 - $119 | 0;
            $130 = $119 - 31 >> 31;
            $sr_1_ph = $125;
            $r_sroa_0_1_ph = $n_sroa_0_0_extract_trunc >>> ($125 >>> 0) & $130 | $n_sroa_1_4_extract_trunc << $126;
            $r_sroa_1_1_ph = $n_sroa_1_4_extract_trunc >>> ($125 >>> 0) & $130;
            $q_sroa_0_1_ph = 0;
            $q_sroa_1_1_ph = $n_sroa_0_0_extract_trunc << $126;
            break;
          }
          if (($rem | 0) == 0) {
            $_0$1 = 0;
            $_0$0 = 0;
            return (tempRet0 = $_0$1, $_0$0) | 0;
          }
          HEAP32[$rem >> 2] = 0 | $a$0 & -1;
          HEAP32[$rem + 4 >> 2] = $n_sroa_1_4_extract_shift$0 | $a$1 & 0;
          $_0$1 = 0;
          $_0$0 = 0;
          return (tempRet0 = $_0$1, $_0$0) | 0;
        }
        $66 = $d_sroa_0_0_extract_trunc - 1 | 0;
        if (($66 & $d_sroa_0_0_extract_trunc | 0) != 0) {
          $86 = (Math_clz32($d_sroa_0_0_extract_trunc | 0) | 0) + 33 | 0;
          $88 = $86 - (Math_clz32($n_sroa_1_4_extract_trunc | 0) | 0) | 0;
          $89 = 64 - $88 | 0;
          $91 = 32 - $88 | 0;
          $92 = $91 >> 31;
          $95 = $88 - 32 | 0;
          $105 = $95 >> 31;
          $sr_1_ph = $88;
          $r_sroa_0_1_ph = $91 - 1 >> 31 & $n_sroa_1_4_extract_trunc >>> ($95 >>> 0) | ($n_sroa_1_4_extract_trunc << $91 | $n_sroa_0_0_extract_trunc >>> ($88 >>> 0)) & $105;
          $r_sroa_1_1_ph = $105 & $n_sroa_1_4_extract_trunc >>> ($88 >>> 0);
          $q_sroa_0_1_ph = $n_sroa_0_0_extract_trunc << $89 & $92;
          $q_sroa_1_1_ph = ($n_sroa_1_4_extract_trunc << $89 | $n_sroa_0_0_extract_trunc >>> ($95 >>> 0)) & $92 | $n_sroa_0_0_extract_trunc << $91 & $88 - 33 >> 31;
          break;
        }
        if (($rem | 0) != 0) {
          HEAP32[$rem >> 2] = $66 & $n_sroa_0_0_extract_trunc;
          HEAP32[$rem + 4 >> 2] = 0;
        }
        if (($d_sroa_0_0_extract_trunc | 0) == 1) {
          $_0$1 = $n_sroa_1_4_extract_shift$0 | $a$1 & 0;
          $_0$0 = 0 | $a$0 & -1;
          return (tempRet0 = $_0$1, $_0$0) | 0;
        } else {
          $78 = _llvm_cttz_i32($d_sroa_0_0_extract_trunc | 0) | 0;
          $_0$1 = 0 | $n_sroa_1_4_extract_trunc >>> ($78 >>> 0);
          $_0$0 = $n_sroa_1_4_extract_trunc << 32 - $78 | $n_sroa_0_0_extract_trunc >>> ($78 >>> 0) | 0;
          return (tempRet0 = $_0$1, $_0$0) | 0;
        }
      }
    } while (0);
    if (($sr_1_ph | 0) == 0) {
      $q_sroa_1_1_lcssa = $q_sroa_1_1_ph;
      $q_sroa_0_1_lcssa = $q_sroa_0_1_ph;
      $r_sroa_1_1_lcssa = $r_sroa_1_1_ph;
      $r_sroa_0_1_lcssa = $r_sroa_0_1_ph;
      $carry_0_lcssa$1 = 0;
      $carry_0_lcssa$0 = 0;
    } else {
      $d_sroa_0_0_insert_insert99$0 = 0 | $b$0 & -1;
      $d_sroa_0_0_insert_insert99$1 = $d_sroa_1_4_extract_shift$0 | $b$1 & 0;
      $137$0 = _i64Add($d_sroa_0_0_insert_insert99$0 | 0, $d_sroa_0_0_insert_insert99$1 | 0, -1, -1) | 0;
      $137$1 = tempRet0;
      $q_sroa_1_1198 = $q_sroa_1_1_ph;
      $q_sroa_0_1199 = $q_sroa_0_1_ph;
      $r_sroa_1_1200 = $r_sroa_1_1_ph;
      $r_sroa_0_1201 = $r_sroa_0_1_ph;
      $sr_1202 = $sr_1_ph;
      $carry_0203 = 0;
      while (1) {
        $147 = $q_sroa_0_1199 >>> 31 | $q_sroa_1_1198 << 1;
        $149 = $carry_0203 | $q_sroa_0_1199 << 1;
        $r_sroa_0_0_insert_insert42$0 = 0 | ($r_sroa_0_1201 << 1 | $q_sroa_1_1198 >>> 31);
        $r_sroa_0_0_insert_insert42$1 = $r_sroa_0_1201 >>> 31 | $r_sroa_1_1200 << 1 | 0;
        _i64Subtract($137$0 | 0, $137$1 | 0, $r_sroa_0_0_insert_insert42$0 | 0, $r_sroa_0_0_insert_insert42$1 | 0) | 0;
        $150$1 = tempRet0;
        $151$0 = $150$1 >> 31 | (($150$1 | 0) < 0 ? -1 : 0) << 1;
        $152 = $151$0 & 1;
        $154$0 = _i64Subtract($r_sroa_0_0_insert_insert42$0 | 0, $r_sroa_0_0_insert_insert42$1 | 0, $151$0 & $d_sroa_0_0_insert_insert99$0 | 0, ((($150$1 | 0) < 0 ? -1 : 0) >> 31 | (($150$1 | 0) < 0 ? -1 : 0) << 1) & $d_sroa_0_0_insert_insert99$1 | 0) | 0;
        $r_sroa_0_0_extract_trunc = $154$0;
        $r_sroa_1_4_extract_trunc = tempRet0;
        $155 = $sr_1202 - 1 | 0;
        if (($155 | 0) == 0) {
          break;
        } else {
          $q_sroa_1_1198 = $147;
          $q_sroa_0_1199 = $149;
          $r_sroa_1_1200 = $r_sroa_1_4_extract_trunc;
          $r_sroa_0_1201 = $r_sroa_0_0_extract_trunc;
          $sr_1202 = $155;
          $carry_0203 = $152;
        }
      }
      $q_sroa_1_1_lcssa = $147;
      $q_sroa_0_1_lcssa = $149;
      $r_sroa_1_1_lcssa = $r_sroa_1_4_extract_trunc;
      $r_sroa_0_1_lcssa = $r_sroa_0_0_extract_trunc;
      $carry_0_lcssa$1 = 0;
      $carry_0_lcssa$0 = $152;
    }
    $q_sroa_0_0_insert_ext75$0 = $q_sroa_0_1_lcssa;
    $q_sroa_0_0_insert_ext75$1 = 0;
    $q_sroa_0_0_insert_insert77$1 = $q_sroa_1_1_lcssa | $q_sroa_0_0_insert_ext75$1;
    if (($rem | 0) != 0) {
      HEAP32[$rem >> 2] = 0 | $r_sroa_0_1_lcssa;
      HEAP32[$rem + 4 >> 2] = $r_sroa_1_1_lcssa | 0;
    }
    $_0$1 = (0 | $q_sroa_0_0_insert_ext75$0) >>> 31 | $q_sroa_0_0_insert_insert77$1 << 1 | ($q_sroa_0_0_insert_ext75$1 << 1 | $q_sroa_0_0_insert_ext75$0 >>> 31) & 0 | $carry_0_lcssa$1;
    $_0$0 = ($q_sroa_0_0_insert_ext75$0 << 1 | 0 >>> 31) & -2 | $carry_0_lcssa$0;
    return (tempRet0 = $_0$1, $_0$0) | 0;
}
function ___udivdi3($a$0, $a$1, $b$0, $b$1) {
    $a$0 = $a$0 | 0;
    $a$1 = $a$1 | 0;
    $b$0 = $b$0 | 0;
    $b$1 = $b$1 | 0;
    var $1$0 = 0;
    $1$0 = ___udivmoddi4($a$0, $a$1, $b$0, $b$1, 0) | 0;
    return $1$0 | 0;
}
function ___uremdi3($a$0, $a$1, $b$0, $b$1) {
    $a$0 = $a$0 | 0;
    $a$1 = $a$1 | 0;
    $b$0 = $b$0 | 0;
    $b$1 = $b$1 | 0;
    var $rem = 0, __stackBase__ = 0;
    __stackBase__ = STACKTOP;
    STACKTOP = STACKTOP + 16 | 0;
    $rem = __stackBase__ | 0;
    ___udivmoddi4($a$0, $a$1, $b$0, $b$1, $rem) | 0;
    STACKTOP = __stackBase__;
    return (tempRet0 = HEAP32[$rem + 4 >> 2] | 0, HEAP32[$rem >> 2] | 0) | 0;
}
function _memcpy(dest, src, num) {
    dest = dest|0; src = src|0; num = num|0;
    var ret = 0;
    if ((num|0) >= 4096) return _emscripten_memcpy_big(dest|0, src|0, num|0)|0;
    ret = dest|0;
    if ((dest&3) == (src&3)) {
      while (dest & 3) {
        if ((num|0) == 0) return ret|0;
        HEAP8[((dest)>>0)]=((HEAP8[((src)>>0)])|0);
        dest = (dest+1)|0;
        src = (src+1)|0;
        num = (num-1)|0;
      }
      while ((num|0) >= 4) {
        HEAP32[((dest)>>2)]=((HEAP32[((src)>>2)])|0);
        dest = (dest+4)|0;
        src = (src+4)|0;
        num = (num-4)|0;
      }
    }
    while ((num|0) > 0) {
      HEAP8[((dest)>>0)]=((HEAP8[((src)>>0)])|0);
      dest = (dest+1)|0;
      src = (src+1)|0;
      num = (num-1)|0;
    }
    return ret|0;
}
function _pthread_self() {
    return 0;
}

  
function dynCall_ii(index,a1) {
  index = index|0;
  a1=a1|0;
  return FUNCTION_TABLE_ii[index&1](a1|0)|0;
}


function dynCall_iiii(index,a1,a2,a3) {
  index = index|0;
  a1=a1|0; a2=a2|0; a3=a3|0;
  return FUNCTION_TABLE_iiii[index&7](a1|0,a2|0,a3|0)|0;
}


function dynCall_vi(index,a1) {
  index = index|0;
  a1=a1|0;
  FUNCTION_TABLE_vi[index&7](a1|0);
}

function b0(p0) {
 p0 = p0|0; nullFunc_ii(0);return 0;
}
function b1(p0,p1,p2) {
 p0 = p0|0;p1 = p1|0;p2 = p2|0; nullFunc_iiii(1);return 0;
}
function b2(p0) {
 p0 = p0|0; nullFunc_vi(2);
}

// EMSCRIPTEN_END_FUNCS
var FUNCTION_TABLE_ii = [b0,___stdio_close];
var FUNCTION_TABLE_iiii = [b1,b1,___stdout_write,___stdio_seek,___stdio_read,b1,___stdio_write,b1];
var FUNCTION_TABLE_vi = [b2,b2,b2,b2,b2,_cleanup_417,b2,_cleanup];

  return { ___muldsi3: ___muldsi3, _i64Subtract: _i64Subtract, _free: _free, _main: _main, _i64Add: _i64Add, _pthread_self: _pthread_self, _memset: _memset, _llvm_cttz_i32: _llvm_cttz_i32, _malloc: _malloc, _memcpy: _memcpy, ___muldi3: ___muldi3, _bitshift64Shl: _bitshift64Shl, _bitshift64Lshr: _bitshift64Lshr, _fflush: _fflush, ___udivdi3: ___udivdi3, ___uremdi3: ___uremdi3, ___errno_location: ___errno_location, ___udivmoddi4: ___udivmoddi4, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, establishStackSpace: establishStackSpace, setThrew: setThrew, setTempRet0: setTempRet0, getTempRet0: getTempRet0, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_vi: dynCall_vi };
})
;