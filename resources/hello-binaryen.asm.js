Module["asm"] =  (function(global,env,buffer) {

 "use asm";
 var a = new global.Int8Array(buffer);
 var b = new global.Int16Array(buffer);
 var c = new global.Int32Array(buffer);
 var d = new global.Uint8Array(buffer);
 var e = new global.Uint16Array(buffer);
 var f = new global.Uint32Array(buffer);
 var g = new global.Float32Array(buffer);
 var h = new global.Float64Array(buffer);
 var i = env.STACKTOP | 0;
 var j = env.STACK_MAX | 0;
 var k = env.tempDoublePtr | 0;
 var l = env.ABORT | 0;
 var m = env.cttz_i8 | 0;
 var n = 0;
 var o = 0;
 var p = 0;
 var q = 0;
 var r = global.NaN, s = global.Infinity;
 var t = 0, u = 0, v = 0, w = 0, x = 0.0, y = 0, z = 0, A = 0, B = 0.0;
 var C = 0;
 var D = global.Math.floor;
 var E = global.Math.abs;
 var F = global.Math.sqrt;
 var G = global.Math.pow;
 var H = global.Math.cos;
 var I = global.Math.sin;
 var J = global.Math.tan;
 var K = global.Math.acos;
 var L = global.Math.asin;
 var M = global.Math.atan;
 var N = global.Math.atan2;
 var O = global.Math.exp;
 var P = global.Math.log;
 var Q = global.Math.ceil;
 var R = global.Math.imul;
 var S = global.Math.min;
 var T = global.Math.clz32;
 var U = env.abort;
 var V = env.assert;
 var W = env.invoke_ii;
 var X = env.invoke_iiii;
 var Y = env.invoke_vi;
 var Z = env._pthread_cleanup_pop;
 var _ = env._abort;
 var $ = env.___lock;
 var aa = env.___syscall6;
 var ba = env._pthread_cleanup_push;
 var ca = env._llvm_cttz_i32;
 var da = env._sbrk;
 var ea = env.___syscall140;
 var fa = env._emscripten_memcpy_big;
 var ga = env.___syscall54;
 var ha = env.___unlock;
 var ia = env.___syscall146;
 var ja = 0.0;
 
// EMSCRIPTEN_START_FUNCS

function Ua(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0;
 D = i;
 i = i + 16 | 0;
 p = D;
 do if (a >>> 0 < 245) {
  q = a >>> 0 < 11 ? 16 : a + 11 & -8;
  a = q >>> 3;
  k = c[909] | 0;
  b = k >>> a;
  if (b & 3 | 0) {
   b = (b & 1 ^ 1) + a | 0;
   d = 3676 + (b << 1 << 2) | 0;
   e = d + 8 | 0;
   f = c[e >> 2] | 0;
   g = f + 8 | 0;
   h = c[g >> 2] | 0;
   do if ((d | 0) == (h | 0)) c[909] = k & ~(1 << b); else {
    if (h >>> 0 < (c[913] | 0) >>> 0) _();
    a = h + 12 | 0;
    if ((c[a >> 2] | 0) == (f | 0)) {
     c[a >> 2] = d;
     c[e >> 2] = h;
     break;
    } else _();
   } while (0);
   C = b << 3;
   c[f + 4 >> 2] = C | 3;
   C = f + C + 4 | 0;
   c[C >> 2] = c[C >> 2] | 1;
   C = g;
   i = D;
   return C | 0;
  }
  h = c[911] | 0;
  if (q >>> 0 > h >>> 0) {
   if (b | 0) {
    d = 2 << a;
    d = b << a & (d | 0 - d);
    d = (d & 0 - d) + -1 | 0;
    j = d >>> 12 & 16;
    d = d >>> j;
    f = d >>> 5 & 8;
    d = d >>> f;
    g = d >>> 2 & 4;
    d = d >>> g;
    e = d >>> 1 & 2;
    d = d >>> e;
    b = d >>> 1 & 1;
    b = (f | j | g | e | b) + (d >>> b) | 0;
    d = 3676 + (b << 1 << 2) | 0;
    e = d + 8 | 0;
    g = c[e >> 2] | 0;
    j = g + 8 | 0;
    f = c[j >> 2] | 0;
    do if ((d | 0) == (f | 0)) {
     c[909] = k & ~(1 << b);
     l = h;
    } else {
     if (f >>> 0 < (c[913] | 0) >>> 0) _();
     a = f + 12 | 0;
     if ((c[a >> 2] | 0) == (g | 0)) {
      c[a >> 2] = d;
      c[e >> 2] = f;
      l = c[911] | 0;
      break;
     } else _();
    } while (0);
    h = (b << 3) - q | 0;
    c[g + 4 >> 2] = q | 3;
    e = g + q | 0;
    c[e + 4 >> 2] = h | 1;
    c[e + h >> 2] = h;
    if (l | 0) {
     f = c[914] | 0;
     b = l >>> 3;
     d = 3676 + (b << 1 << 2) | 0;
     a = c[909] | 0;
     b = 1 << b;
     if (!(a & b)) {
      c[909] = a | b;
      m = d + 8 | 0;
      n = d;
     } else {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      if (b >>> 0 < (c[913] | 0) >>> 0) _(); else {
       m = a;
       n = b;
      }
     }
     c[m >> 2] = f;
     c[n + 12 >> 2] = f;
     c[f + 8 >> 2] = n;
     c[f + 12 >> 2] = d;
    }
    c[911] = h;
    c[914] = e;
    C = j;
    i = D;
    return C | 0;
   }
   a = c[910] | 0;
   if (a) {
    d = (a & 0 - a) + -1 | 0;
    B = d >>> 12 & 16;
    d = d >>> B;
    A = d >>> 5 & 8;
    d = d >>> A;
    C = d >>> 2 & 4;
    d = d >>> C;
    b = d >>> 1 & 2;
    d = d >>> b;
    e = d >>> 1 & 1;
    e = c[3940 + ((A | B | C | b | e) + (d >>> e) << 2) >> 2] | 0;
    d = (c[e + 4 >> 2] & -8) - q | 0;
    b = e;
    while (1) {
     a = c[b + 16 >> 2] | 0;
     if (!a) {
      a = c[b + 20 >> 2] | 0;
      if (!a) {
       k = e;
       break;
      }
     }
     b = (c[a + 4 >> 2] & -8) - q | 0;
     C = b >>> 0 < d >>> 0;
     d = C ? b : d;
     b = a;
     e = C ? a : e;
    }
    g = c[913] | 0;
    if (k >>> 0 < g >>> 0) _();
    j = k + q | 0;
    if (k >>> 0 >= j >>> 0) _();
    h = c[k + 24 >> 2] | 0;
    e = c[k + 12 >> 2] | 0;
    do if ((e | 0) == (k | 0)) {
     b = k + 20 | 0;
     a = c[b >> 2] | 0;
     if (!a) {
      b = k + 16 | 0;
      a = c[b >> 2] | 0;
      if (!a) {
       o = 0;
       break;
      }
     }
     while (1) {
      e = a + 20 | 0;
      f = c[e >> 2] | 0;
      if (f | 0) {
       a = f;
       b = e;
       continue;
      }
      e = a + 16 | 0;
      f = c[e >> 2] | 0;
      if (!f) break; else {
       a = f;
       b = e;
      }
     }
     if (b >>> 0 < g >>> 0) _(); else {
      c[b >> 2] = 0;
      o = a;
      break;
     }
    } else {
     f = c[k + 8 >> 2] | 0;
     if (f >>> 0 < g >>> 0) _();
     a = f + 12 | 0;
     if ((c[a >> 2] | 0) != (k | 0)) _();
     b = e + 8 | 0;
     if ((c[b >> 2] | 0) == (k | 0)) {
      c[a >> 2] = e;
      c[b >> 2] = f;
      o = e;
      break;
     } else _();
    } while (0);
    do if (h | 0) {
     a = c[k + 28 >> 2] | 0;
     b = 3940 + (a << 2) | 0;
     if ((k | 0) == (c[b >> 2] | 0)) {
      c[b >> 2] = o;
      if (!o) {
       c[910] = c[910] & ~(1 << a);
       break;
      }
     } else {
      if (h >>> 0 < (c[913] | 0) >>> 0) _();
      a = h + 16 | 0;
      if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = o; else c[h + 20 >> 2] = o;
      if (!o) break;
     }
     b = c[913] | 0;
     if (o >>> 0 < b >>> 0) _();
     c[o + 24 >> 2] = h;
     a = c[k + 16 >> 2] | 0;
     do if (a | 0) if (a >>> 0 < b >>> 0) _(); else {
      c[o + 16 >> 2] = a;
      c[a + 24 >> 2] = o;
      break;
     } while (0);
     a = c[k + 20 >> 2] | 0;
     if (a | 0) if (a >>> 0 < (c[913] | 0) >>> 0) _(); else {
      c[o + 20 >> 2] = a;
      c[a + 24 >> 2] = o;
      break;
     }
    } while (0);
    if (d >>> 0 < 16) {
     C = d + q | 0;
     c[k + 4 >> 2] = C | 3;
     C = k + C + 4 | 0;
     c[C >> 2] = c[C >> 2] | 1;
    } else {
     c[k + 4 >> 2] = q | 3;
     c[j + 4 >> 2] = d | 1;
     c[j + d >> 2] = d;
     a = c[911] | 0;
     if (a | 0) {
      f = c[914] | 0;
      b = a >>> 3;
      e = 3676 + (b << 1 << 2) | 0;
      a = c[909] | 0;
      b = 1 << b;
      if (!(a & b)) {
       c[909] = a | b;
       r = e + 8 | 0;
       s = e;
      } else {
       a = e + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 < (c[913] | 0) >>> 0) _(); else {
        r = a;
        s = b;
       }
      }
      c[r >> 2] = f;
      c[s + 12 >> 2] = f;
      c[f + 8 >> 2] = s;
      c[f + 12 >> 2] = e;
     }
     c[911] = d;
     c[914] = j;
    }
    C = k + 8 | 0;
    i = D;
    return C | 0;
   }
  }
 } else if (a >>> 0 > 4294967231) q = -1; else {
  a = a + 11 | 0;
  q = a & -8;
  k = c[910] | 0;
  if (k) {
   d = 0 - q | 0;
   a = a >>> 8;
   if (!a) j = 0; else if (q >>> 0 > 16777215) j = 31; else {
    s = (a + 1048320 | 0) >>> 16 & 8;
    w = a << s;
    r = (w + 520192 | 0) >>> 16 & 4;
    w = w << r;
    j = (w + 245760 | 0) >>> 16 & 2;
    j = 14 - (r | s | j) + (w << j >>> 15) | 0;
    j = q >>> (j + 7 | 0) & 1 | j << 1;
   }
   b = c[3940 + (j << 2) >> 2] | 0;
   a : do if (!b) {
    a = 0;
    b = 0;
    w = 86;
   } else {
    f = d;
    a = 0;
    g = q << ((j | 0) == 31 ? 0 : 25 - (j >>> 1) | 0);
    h = b;
    b = 0;
    while (1) {
     e = c[h + 4 >> 2] & -8;
     d = e - q | 0;
     if (d >>> 0 < f >>> 0) if ((e | 0) == (q | 0)) {
      a = h;
      b = h;
      w = 90;
      break a;
     } else b = h; else d = f;
     e = c[h + 20 >> 2] | 0;
     h = c[h + 16 + (g >>> 31 << 2) >> 2] | 0;
     a = (e | 0) == 0 | (e | 0) == (h | 0) ? a : e;
     e = (h | 0) == 0;
     if (e) {
      w = 86;
      break;
     } else {
      f = d;
      g = g << (e & 1 ^ 1);
     }
    }
   } while (0);
   if ((w | 0) == 86) {
    if ((a | 0) == 0 & (b | 0) == 0) {
     a = 2 << j;
     a = k & (a | 0 - a);
     if (!a) break;
     s = (a & 0 - a) + -1 | 0;
     n = s >>> 12 & 16;
     s = s >>> n;
     m = s >>> 5 & 8;
     s = s >>> m;
     o = s >>> 2 & 4;
     s = s >>> o;
     r = s >>> 1 & 2;
     s = s >>> r;
     a = s >>> 1 & 1;
     a = c[3940 + ((m | n | o | r | a) + (s >>> a) << 2) >> 2] | 0;
    }
    if (!a) {
     h = d;
     k = b;
    } else w = 90;
   }
   if ((w | 0) == 90) while (1) {
    w = 0;
    s = (c[a + 4 >> 2] & -8) - q | 0;
    e = s >>> 0 < d >>> 0;
    d = e ? s : d;
    b = e ? a : b;
    e = c[a + 16 >> 2] | 0;
    if (e | 0) {
     a = e;
     w = 90;
     continue;
    }
    a = c[a + 20 >> 2] | 0;
    if (!a) {
     h = d;
     k = b;
     break;
    } else w = 90;
   }
   if (k) if (h >>> 0 < ((c[911] | 0) - q | 0) >>> 0) {
    f = c[913] | 0;
    if (k >>> 0 < f >>> 0) _();
    j = k + q | 0;
    if (k >>> 0 >= j >>> 0) _();
    g = c[k + 24 >> 2] | 0;
    d = c[k + 12 >> 2] | 0;
    do if ((d | 0) == (k | 0)) {
     b = k + 20 | 0;
     a = c[b >> 2] | 0;
     if (!a) {
      b = k + 16 | 0;
      a = c[b >> 2] | 0;
      if (!a) {
       t = 0;
       break;
      }
     }
     while (1) {
      d = a + 20 | 0;
      e = c[d >> 2] | 0;
      if (e | 0) {
       a = e;
       b = d;
       continue;
      }
      d = a + 16 | 0;
      e = c[d >> 2] | 0;
      if (!e) break; else {
       a = e;
       b = d;
      }
     }
     if (b >>> 0 < f >>> 0) _(); else {
      c[b >> 2] = 0;
      t = a;
      break;
     }
    } else {
     e = c[k + 8 >> 2] | 0;
     if (e >>> 0 < f >>> 0) _();
     a = e + 12 | 0;
     if ((c[a >> 2] | 0) != (k | 0)) _();
     b = d + 8 | 0;
     if ((c[b >> 2] | 0) == (k | 0)) {
      c[a >> 2] = d;
      c[b >> 2] = e;
      t = d;
      break;
     } else _();
    } while (0);
    do if (g | 0) {
     a = c[k + 28 >> 2] | 0;
     b = 3940 + (a << 2) | 0;
     if ((k | 0) == (c[b >> 2] | 0)) {
      c[b >> 2] = t;
      if (!t) {
       c[910] = c[910] & ~(1 << a);
       break;
      }
     } else {
      if (g >>> 0 < (c[913] | 0) >>> 0) _();
      a = g + 16 | 0;
      if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = t; else c[g + 20 >> 2] = t;
      if (!t) break;
     }
     b = c[913] | 0;
     if (t >>> 0 < b >>> 0) _();
     c[t + 24 >> 2] = g;
     a = c[k + 16 >> 2] | 0;
     do if (a | 0) if (a >>> 0 < b >>> 0) _(); else {
      c[t + 16 >> 2] = a;
      c[a + 24 >> 2] = t;
      break;
     } while (0);
     a = c[k + 20 >> 2] | 0;
     if (a | 0) if (a >>> 0 < (c[913] | 0) >>> 0) _(); else {
      c[t + 20 >> 2] = a;
      c[a + 24 >> 2] = t;
      break;
     }
    } while (0);
    do if (h >>> 0 < 16) {
     C = h + q | 0;
     c[k + 4 >> 2] = C | 3;
     C = k + C + 4 | 0;
     c[C >> 2] = c[C >> 2] | 1;
    } else {
     c[k + 4 >> 2] = q | 3;
     c[j + 4 >> 2] = h | 1;
     c[j + h >> 2] = h;
     a = h >>> 3;
     if (h >>> 0 < 256) {
      d = 3676 + (a << 1 << 2) | 0;
      b = c[909] | 0;
      a = 1 << a;
      if (!(b & a)) {
       c[909] = b | a;
       u = d + 8 | 0;
       v = d;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 < (c[913] | 0) >>> 0) _(); else {
        u = a;
        v = b;
       }
      }
      c[u >> 2] = j;
      c[v + 12 >> 2] = j;
      c[j + 8 >> 2] = v;
      c[j + 12 >> 2] = d;
      break;
     }
     a = h >>> 8;
     if (!a) d = 0; else if (h >>> 0 > 16777215) d = 31; else {
      B = (a + 1048320 | 0) >>> 16 & 8;
      C = a << B;
      A = (C + 520192 | 0) >>> 16 & 4;
      C = C << A;
      d = (C + 245760 | 0) >>> 16 & 2;
      d = 14 - (A | B | d) + (C << d >>> 15) | 0;
      d = h >>> (d + 7 | 0) & 1 | d << 1;
     }
     e = 3940 + (d << 2) | 0;
     c[j + 28 >> 2] = d;
     a = j + 16 | 0;
     c[a + 4 >> 2] = 0;
     c[a >> 2] = 0;
     a = c[910] | 0;
     b = 1 << d;
     if (!(a & b)) {
      c[910] = a | b;
      c[e >> 2] = j;
      c[j + 24 >> 2] = e;
      c[j + 12 >> 2] = j;
      c[j + 8 >> 2] = j;
      break;
     }
     f = h << ((d | 0) == 31 ? 0 : 25 - (d >>> 1) | 0);
     a = c[e >> 2] | 0;
     while (1) {
      if ((c[a + 4 >> 2] & -8 | 0) == (h | 0)) {
       d = a;
       w = 148;
       break;
      }
      b = a + 16 + (f >>> 31 << 2) | 0;
      d = c[b >> 2] | 0;
      if (!d) {
       w = 145;
       break;
      } else {
       f = f << 1;
       a = d;
      }
     }
     if ((w | 0) == 145) if (b >>> 0 < (c[913] | 0) >>> 0) _(); else {
      c[b >> 2] = j;
      c[j + 24 >> 2] = a;
      c[j + 12 >> 2] = j;
      c[j + 8 >> 2] = j;
      break;
     } else if ((w | 0) == 148) {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      C = c[913] | 0;
      if (b >>> 0 >= C >>> 0 & d >>> 0 >= C >>> 0) {
       c[b + 12 >> 2] = j;
       c[a >> 2] = j;
       c[j + 8 >> 2] = b;
       c[j + 12 >> 2] = d;
       c[j + 24 >> 2] = 0;
       break;
      } else _();
     }
    } while (0);
    C = k + 8 | 0;
    i = D;
    return C | 0;
   }
  }
 } while (0);
 d = c[911] | 0;
 if (d >>> 0 >= q >>> 0) {
  a = d - q | 0;
  b = c[914] | 0;
  if (a >>> 0 > 15) {
   C = b + q | 0;
   c[914] = C;
   c[911] = a;
   c[C + 4 >> 2] = a | 1;
   c[C + a >> 2] = a;
   c[b + 4 >> 2] = q | 3;
  } else {
   c[911] = 0;
   c[914] = 0;
   c[b + 4 >> 2] = d | 3;
   C = b + d + 4 | 0;
   c[C >> 2] = c[C >> 2] | 1;
  }
  C = b + 8 | 0;
  i = D;
  return C | 0;
 }
 a = c[912] | 0;
 if (a >>> 0 > q >>> 0) {
  A = a - q | 0;
  c[912] = A;
  C = c[915] | 0;
  B = C + q | 0;
  c[915] = B;
  c[B + 4 >> 2] = A | 1;
  c[C + 4 >> 2] = q | 3;
  C = C + 8 | 0;
  i = D;
  return C | 0;
 }
 if (!(c[1027] | 0)) {
  c[1029] = 4096;
  c[1028] = 4096;
  c[1030] = -1;
  c[1031] = -1;
  c[1032] = 0;
  c[1020] = 0;
  v = p & -16 ^ 1431655768;
  c[p >> 2] = v;
  c[1027] = v;
 }
 h = q + 48 | 0;
 g = c[1029] | 0;
 j = q + 47 | 0;
 f = g + j | 0;
 g = 0 - g | 0;
 k = f & g;
 if (k >>> 0 <= q >>> 0) {
  C = 0;
  i = D;
  return C | 0;
 }
 a = c[1019] | 0;
 if (a | 0) {
  u = c[1017] | 0;
  v = u + k | 0;
  if (v >>> 0 <= u >>> 0 | v >>> 0 > a >>> 0) {
   C = 0;
   i = D;
   return C | 0;
  }
 }
 b : do if (!(c[1020] & 4)) {
  a = c[915] | 0;
  c : do if (!a) w = 171; else {
   e = 4084;
   while (1) {
    b = c[e >> 2] | 0;
    if (b >>> 0 <= a >>> 0) {
     d = e + 4 | 0;
     if ((b + (c[d >> 2] | 0) | 0) >>> 0 > a >>> 0) break;
    }
    e = c[e + 8 >> 2] | 0;
    if (!e) {
     w = 171;
     break c;
    }
   }
   a = f - (c[912] | 0) & g;
   if (a >>> 0 < 2147483647) {
    b = da(a | 0) | 0;
    if ((b | 0) == ((c[e >> 2] | 0) + (c[d >> 2] | 0) | 0)) {
     if ((b | 0) != (-1 | 0)) {
      f = b;
      h = a;
      w = 191;
      break b;
     }
    } else {
     e = b;
     w = 181;
    }
   }
  } while (0);
  do if ((w | 0) == 171) {
   f = da(0) | 0;
   if ((f | 0) != (-1 | 0)) {
    a = f;
    b = c[1028] | 0;
    d = b + -1 | 0;
    if (!(d & a)) a = k; else a = k - a + (d + a & 0 - b) | 0;
    b = c[1017] | 0;
    d = b + a | 0;
    if (a >>> 0 > q >>> 0 & a >>> 0 < 2147483647) {
     e = c[1019] | 0;
     if (e | 0) if (d >>> 0 <= b >>> 0 | d >>> 0 > e >>> 0) break;
     b = da(a | 0) | 0;
     if ((b | 0) == (f | 0)) {
      h = a;
      w = 191;
      break b;
     } else {
      e = b;
      w = 181;
     }
    }
   }
  } while (0);
  d : do if ((w | 0) == 181) {
   d = 0 - a | 0;
   do if (h >>> 0 > a >>> 0 & (a >>> 0 < 2147483647 & (e | 0) != (-1 | 0))) {
    b = c[1029] | 0;
    b = j - a + b & 0 - b;
    if (b >>> 0 < 2147483647) if ((da(b | 0) | 0) == (-1 | 0)) {
     da(d | 0) | 0;
     break d;
    } else {
     a = b + a | 0;
     break;
    }
   } while (0);
   if ((e | 0) != (-1 | 0)) {
    f = e;
    h = a;
    w = 191;
    break b;
   }
  } while (0);
  c[1020] = c[1020] | 4;
  w = 188;
 } else w = 188; while (0);
 if ((w | 0) == 188) if (k >>> 0 < 2147483647) {
  b = da(k | 0) | 0;
  a = da(0) | 0;
  if (b >>> 0 < a >>> 0 & ((b | 0) != (-1 | 0) & (a | 0) != (-1 | 0))) {
   a = a - b | 0;
   if (a >>> 0 > (q + 40 | 0) >>> 0) {
    f = b;
    h = a;
    w = 191;
   }
  }
 }
 if ((w | 0) == 191) {
  a = (c[1017] | 0) + h | 0;
  c[1017] = a;
  if (a >>> 0 > (c[1018] | 0) >>> 0) c[1018] = a;
  j = c[915] | 0;
  do if (!j) {
   C = c[913] | 0;
   if ((C | 0) == 0 | f >>> 0 < C >>> 0) c[913] = f;
   c[1021] = f;
   c[1022] = h;
   c[1024] = 0;
   c[918] = c[1027];
   c[917] = -1;
   a = 0;
   do {
    C = 3676 + (a << 1 << 2) | 0;
    c[C + 12 >> 2] = C;
    c[C + 8 >> 2] = C;
    a = a + 1 | 0;
   } while ((a | 0) != 32);
   C = f + 8 | 0;
   C = (C & 7 | 0) == 0 ? 0 : 0 - C & 7;
   B = f + C | 0;
   C = h + -40 - C | 0;
   c[915] = B;
   c[912] = C;
   c[B + 4 >> 2] = C | 1;
   c[B + C + 4 >> 2] = 40;
   c[916] = c[1031];
  } else {
   b = 4084;
   do {
    a = c[b >> 2] | 0;
    e = b + 4 | 0;
    d = c[e >> 2] | 0;
    if ((f | 0) == (a + d | 0)) {
     w = 201;
     break;
    }
    b = c[b + 8 >> 2] | 0;
   } while ((b | 0) != 0);
   if ((w | 0) == 201) if (!(c[b + 12 >> 2] & 8)) if (j >>> 0 < f >>> 0 & j >>> 0 >= a >>> 0) {
    c[e >> 2] = d + h;
    C = j + 8 | 0;
    C = (C & 7 | 0) == 0 ? 0 : 0 - C & 7;
    B = j + C | 0;
    C = h - C + (c[912] | 0) | 0;
    c[915] = B;
    c[912] = C;
    c[B + 4 >> 2] = C | 1;
    c[B + C + 4 >> 2] = 40;
    c[916] = c[1031];
    break;
   }
   a = c[913] | 0;
   if (f >>> 0 < a >>> 0) {
    c[913] = f;
    k = f;
   } else k = a;
   d = f + h | 0;
   a = 4084;
   while (1) {
    if ((c[a >> 2] | 0) == (d | 0)) {
     b = a;
     w = 209;
     break;
    }
    a = c[a + 8 >> 2] | 0;
    if (!a) {
     b = 4084;
     break;
    }
   }
   if ((w | 0) == 209) if (!(c[a + 12 >> 2] & 8)) {
    c[b >> 2] = f;
    m = a + 4 | 0;
    c[m >> 2] = (c[m >> 2] | 0) + h;
    m = f + 8 | 0;
    m = f + ((m & 7 | 0) == 0 ? 0 : 0 - m & 7) | 0;
    a = d + 8 | 0;
    a = d + ((a & 7 | 0) == 0 ? 0 : 0 - a & 7) | 0;
    l = m + q | 0;
    g = a - m - q | 0;
    c[m + 4 >> 2] = q | 3;
    do if ((a | 0) == (j | 0)) {
     C = (c[912] | 0) + g | 0;
     c[912] = C;
     c[915] = l;
     c[l + 4 >> 2] = C | 1;
    } else {
     if ((a | 0) == (c[914] | 0)) {
      C = (c[911] | 0) + g | 0;
      c[911] = C;
      c[914] = l;
      c[l + 4 >> 2] = C | 1;
      c[l + C >> 2] = C;
      break;
     }
     b = c[a + 4 >> 2] | 0;
     if ((b & 3 | 0) == 1) {
      j = b & -8;
      f = b >>> 3;
      e : do if (b >>> 0 < 256) {
       d = c[a + 8 >> 2] | 0;
       e = c[a + 12 >> 2] | 0;
       b = 3676 + (f << 1 << 2) | 0;
       do if ((d | 0) != (b | 0)) {
        if (d >>> 0 < k >>> 0) _();
        if ((c[d + 12 >> 2] | 0) == (a | 0)) break;
        _();
       } while (0);
       if ((e | 0) == (d | 0)) {
        c[909] = c[909] & ~(1 << f);
        break;
       }
       do if ((e | 0) == (b | 0)) x = e + 8 | 0; else {
        if (e >>> 0 < k >>> 0) _();
        b = e + 8 | 0;
        if ((c[b >> 2] | 0) == (a | 0)) {
         x = b;
         break;
        }
        _();
       } while (0);
       c[d + 12 >> 2] = e;
       c[x >> 2] = d;
      } else {
       h = c[a + 24 >> 2] | 0;
       e = c[a + 12 >> 2] | 0;
       do if ((e | 0) == (a | 0)) {
        d = a + 16 | 0;
        e = d + 4 | 0;
        b = c[e >> 2] | 0;
        if (!b) {
         b = c[d >> 2] | 0;
         if (!b) {
          A = 0;
          break;
         }
        } else d = e;
        while (1) {
         e = b + 20 | 0;
         f = c[e >> 2] | 0;
         if (f | 0) {
          b = f;
          d = e;
          continue;
         }
         e = b + 16 | 0;
         f = c[e >> 2] | 0;
         if (!f) break; else {
          b = f;
          d = e;
         }
        }
        if (d >>> 0 < k >>> 0) _(); else {
         c[d >> 2] = 0;
         A = b;
         break;
        }
       } else {
        f = c[a + 8 >> 2] | 0;
        if (f >>> 0 < k >>> 0) _();
        b = f + 12 | 0;
        if ((c[b >> 2] | 0) != (a | 0)) _();
        d = e + 8 | 0;
        if ((c[d >> 2] | 0) == (a | 0)) {
         c[b >> 2] = e;
         c[d >> 2] = f;
         A = e;
         break;
        } else _();
       } while (0);
       if (!h) break;
       b = c[a + 28 >> 2] | 0;
       d = 3940 + (b << 2) | 0;
       do if ((a | 0) == (c[d >> 2] | 0)) {
        c[d >> 2] = A;
        if (A | 0) break;
        c[910] = c[910] & ~(1 << b);
        break e;
       } else {
        if (h >>> 0 < (c[913] | 0) >>> 0) _();
        b = h + 16 | 0;
        if ((c[b >> 2] | 0) == (a | 0)) c[b >> 2] = A; else c[h + 20 >> 2] = A;
        if (!A) break e;
       } while (0);
       e = c[913] | 0;
       if (A >>> 0 < e >>> 0) _();
       c[A + 24 >> 2] = h;
       b = a + 16 | 0;
       d = c[b >> 2] | 0;
       do if (d | 0) if (d >>> 0 < e >>> 0) _(); else {
        c[A + 16 >> 2] = d;
        c[d + 24 >> 2] = A;
        break;
       } while (0);
       b = c[b + 4 >> 2] | 0;
       if (!b) break;
       if (b >>> 0 < (c[913] | 0) >>> 0) _(); else {
        c[A + 20 >> 2] = b;
        c[b + 24 >> 2] = A;
        break;
       }
      } while (0);
      a = a + j | 0;
      g = j + g | 0;
     }
     a = a + 4 | 0;
     c[a >> 2] = c[a >> 2] & -2;
     c[l + 4 >> 2] = g | 1;
     c[l + g >> 2] = g;
     a = g >>> 3;
     if (g >>> 0 < 256) {
      d = 3676 + (a << 1 << 2) | 0;
      b = c[909] | 0;
      a = 1 << a;
      do if (!(b & a)) {
       c[909] = b | a;
       B = d + 8 | 0;
       C = d;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 >= (c[913] | 0) >>> 0) {
        B = a;
        C = b;
        break;
       }
       _();
      } while (0);
      c[B >> 2] = l;
      c[C + 12 >> 2] = l;
      c[l + 8 >> 2] = C;
      c[l + 12 >> 2] = d;
      break;
     }
     a = g >>> 8;
     do if (!a) d = 0; else {
      if (g >>> 0 > 16777215) {
       d = 31;
       break;
      }
      B = (a + 1048320 | 0) >>> 16 & 8;
      C = a << B;
      A = (C + 520192 | 0) >>> 16 & 4;
      C = C << A;
      d = (C + 245760 | 0) >>> 16 & 2;
      d = 14 - (A | B | d) + (C << d >>> 15) | 0;
      d = g >>> (d + 7 | 0) & 1 | d << 1;
     } while (0);
     e = 3940 + (d << 2) | 0;
     c[l + 28 >> 2] = d;
     a = l + 16 | 0;
     c[a + 4 >> 2] = 0;
     c[a >> 2] = 0;
     a = c[910] | 0;
     b = 1 << d;
     if (!(a & b)) {
      c[910] = a | b;
      c[e >> 2] = l;
      c[l + 24 >> 2] = e;
      c[l + 12 >> 2] = l;
      c[l + 8 >> 2] = l;
      break;
     }
     f = g << ((d | 0) == 31 ? 0 : 25 - (d >>> 1) | 0);
     a = c[e >> 2] | 0;
     while (1) {
      if ((c[a + 4 >> 2] & -8 | 0) == (g | 0)) {
       d = a;
       w = 279;
       break;
      }
      b = a + 16 + (f >>> 31 << 2) | 0;
      d = c[b >> 2] | 0;
      if (!d) {
       w = 276;
       break;
      } else {
       f = f << 1;
       a = d;
      }
     }
     if ((w | 0) == 276) if (b >>> 0 < (c[913] | 0) >>> 0) _(); else {
      c[b >> 2] = l;
      c[l + 24 >> 2] = a;
      c[l + 12 >> 2] = l;
      c[l + 8 >> 2] = l;
      break;
     } else if ((w | 0) == 279) {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      C = c[913] | 0;
      if (b >>> 0 >= C >>> 0 & d >>> 0 >= C >>> 0) {
       c[b + 12 >> 2] = l;
       c[a >> 2] = l;
       c[l + 8 >> 2] = b;
       c[l + 12 >> 2] = d;
       c[l + 24 >> 2] = 0;
       break;
      } else _();
     }
    } while (0);
    C = m + 8 | 0;
    i = D;
    return C | 0;
   } else b = 4084;
   while (1) {
    a = c[b >> 2] | 0;
    if (a >>> 0 <= j >>> 0) {
     a = a + (c[b + 4 >> 2] | 0) | 0;
     if (a >>> 0 > j >>> 0) break;
    }
    b = c[b + 8 >> 2] | 0;
   }
   g = a + -47 | 0;
   d = g + 8 | 0;
   d = g + ((d & 7 | 0) == 0 ? 0 : 0 - d & 7) | 0;
   g = j + 16 | 0;
   d = d >>> 0 < g >>> 0 ? j : d;
   b = d + 8 | 0;
   e = f + 8 | 0;
   e = (e & 7 | 0) == 0 ? 0 : 0 - e & 7;
   C = f + e | 0;
   e = h + -40 - e | 0;
   c[915] = C;
   c[912] = e;
   c[C + 4 >> 2] = e | 1;
   c[C + e + 4 >> 2] = 40;
   c[916] = c[1031];
   e = d + 4 | 0;
   c[e >> 2] = 27;
   c[b >> 2] = c[1021];
   c[b + 4 >> 2] = c[1022];
   c[b + 8 >> 2] = c[1023];
   c[b + 12 >> 2] = c[1024];
   c[1021] = f;
   c[1022] = h;
   c[1024] = 0;
   c[1023] = b;
   b = d + 24 | 0;
   do {
    b = b + 4 | 0;
    c[b >> 2] = 7;
   } while ((b + 4 | 0) >>> 0 < a >>> 0);
   if ((d | 0) != (j | 0)) {
    h = d - j | 0;
    c[e >> 2] = c[e >> 2] & -2;
    c[j + 4 >> 2] = h | 1;
    c[d >> 2] = h;
    a = h >>> 3;
    if (h >>> 0 < 256) {
     d = 3676 + (a << 1 << 2) | 0;
     b = c[909] | 0;
     a = 1 << a;
     if (!(b & a)) {
      c[909] = b | a;
      y = d + 8 | 0;
      z = d;
     } else {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      if (b >>> 0 < (c[913] | 0) >>> 0) _(); else {
       y = a;
       z = b;
      }
     }
     c[y >> 2] = j;
     c[z + 12 >> 2] = j;
     c[j + 8 >> 2] = z;
     c[j + 12 >> 2] = d;
     break;
    }
    a = h >>> 8;
    if (!a) d = 0; else if (h >>> 0 > 16777215) d = 31; else {
     B = (a + 1048320 | 0) >>> 16 & 8;
     C = a << B;
     A = (C + 520192 | 0) >>> 16 & 4;
     C = C << A;
     d = (C + 245760 | 0) >>> 16 & 2;
     d = 14 - (A | B | d) + (C << d >>> 15) | 0;
     d = h >>> (d + 7 | 0) & 1 | d << 1;
    }
    f = 3940 + (d << 2) | 0;
    c[j + 28 >> 2] = d;
    c[j + 20 >> 2] = 0;
    c[g >> 2] = 0;
    a = c[910] | 0;
    b = 1 << d;
    if (!(a & b)) {
     c[910] = a | b;
     c[f >> 2] = j;
     c[j + 24 >> 2] = f;
     c[j + 12 >> 2] = j;
     c[j + 8 >> 2] = j;
     break;
    }
    e = h << ((d | 0) == 31 ? 0 : 25 - (d >>> 1) | 0);
    a = c[f >> 2] | 0;
    while (1) {
     if ((c[a + 4 >> 2] & -8 | 0) == (h | 0)) {
      d = a;
      w = 305;
      break;
     }
     b = a + 16 + (e >>> 31 << 2) | 0;
     d = c[b >> 2] | 0;
     if (!d) {
      w = 302;
      break;
     } else {
      e = e << 1;
      a = d;
     }
    }
    if ((w | 0) == 302) if (b >>> 0 < (c[913] | 0) >>> 0) _(); else {
     c[b >> 2] = j;
     c[j + 24 >> 2] = a;
     c[j + 12 >> 2] = j;
     c[j + 8 >> 2] = j;
     break;
    } else if ((w | 0) == 305) {
     a = d + 8 | 0;
     b = c[a >> 2] | 0;
     C = c[913] | 0;
     if (b >>> 0 >= C >>> 0 & d >>> 0 >= C >>> 0) {
      c[b + 12 >> 2] = j;
      c[a >> 2] = j;
      c[j + 8 >> 2] = b;
      c[j + 12 >> 2] = d;
      c[j + 24 >> 2] = 0;
      break;
     } else _();
    }
   }
  } while (0);
  a = c[912] | 0;
  if (a >>> 0 > q >>> 0) {
   A = a - q | 0;
   c[912] = A;
   C = c[915] | 0;
   B = C + q | 0;
   c[915] = B;
   c[B + 4 >> 2] = A | 1;
   c[C + 4 >> 2] = q | 3;
   C = C + 8 | 0;
   i = D;
   return C | 0;
  }
 }
 c[(xa() | 0) >> 2] = 12;
 C = 0;
 i = D;
 return C | 0;
}

function La(e, f, g, j, l) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 j = j | 0;
 l = l | 0;
 var m = 0, n = 0, o = 0, p = 0, q = 0.0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0.0, y = 0, z = 0, A = 0, B = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, $ = 0, aa = 0, ba = 0, ca = 0, da = 0, ea = 0, fa = 0, ga = 0, ha = 0, ia = 0;
 ia = i;
 i = i + 624 | 0;
 da = ia + 24 | 0;
 fa = ia + 16 | 0;
 ea = ia + 588 | 0;
 aa = ia + 576 | 0;
 ca = ia;
 X = ia + 536 | 0;
 ha = ia + 8 | 0;
 ga = ia + 528 | 0;
 M = (e | 0) != 0;
 N = X + 40 | 0;
 W = N;
 X = X + 39 | 0;
 Y = ha + 4 | 0;
 Z = ea;
 _ = 0 - Z | 0;
 $ = aa + 12 | 0;
 aa = aa + 11 | 0;
 ba = $;
 O = ba - Z | 0;
 P = -2 - Z | 0;
 Q = ba + 2 | 0;
 S = da + 288 | 0;
 T = ea + 9 | 0;
 U = T;
 V = ea + 8 | 0;
 m = 0;
 o = 0;
 n = 0;
 y = f;
 a : while (1) {
  do if ((m | 0) > -1) if ((o | 0) > (2147483647 - m | 0)) {
   c[(xa() | 0) >> 2] = 75;
   m = -1;
   break;
  } else {
   m = o + m | 0;
   break;
  } while (0);
  f = a[y >> 0] | 0;
  if (!(f << 24 >> 24)) {
   L = 244;
   break;
  } else o = y;
  b : while (1) {
   switch (f << 24 >> 24) {
   case 37:
    {
     f = o;
     L = 9;
     break b;
    }
   case 0:
    {
     f = o;
     break b;
    }
   default:
    {}
   }
   K = o + 1 | 0;
   f = a[K >> 0] | 0;
   o = K;
  }
  c : do if ((L | 0) == 9) while (1) {
   L = 0;
   if ((a[f + 1 >> 0] | 0) != 37) break c;
   o = o + 1 | 0;
   f = f + 2 | 0;
   if ((a[f >> 0] | 0) == 37) L = 9; else break;
  } while (0);
  w = o - y | 0;
  if (M) if (!(c[e >> 2] & 32)) Ma(y, w, e) | 0;
  if ((o | 0) != (y | 0)) {
   o = w;
   y = f;
   continue;
  }
  r = f + 1 | 0;
  o = a[r >> 0] | 0;
  p = (o << 24 >> 24) + -48 | 0;
  if (p >>> 0 < 10) {
   K = (a[f + 2 >> 0] | 0) == 36;
   r = K ? f + 3 | 0 : r;
   o = a[r >> 0] | 0;
   u = K ? p : -1;
   n = K ? 1 : n;
  } else u = -1;
  f = o << 24 >> 24;
  d : do if ((f & -32 | 0) == 32) {
   p = 0;
   while (1) {
    if (!(1 << f + -32 & 75913)) {
     s = p;
     break d;
    }
    p = 1 << (o << 24 >> 24) + -32 | p;
    r = r + 1 | 0;
    o = a[r >> 0] | 0;
    f = o << 24 >> 24;
    if ((f & -32 | 0) != 32) {
     s = p;
     break;
    }
   }
  } else s = 0; while (0);
  do if (o << 24 >> 24 == 42) {
   o = r + 1 | 0;
   f = (a[o >> 0] | 0) + -48 | 0;
   if (f >>> 0 < 10) if ((a[r + 2 >> 0] | 0) == 36) {
    c[l + (f << 2) >> 2] = 10;
    n = 1;
    r = r + 3 | 0;
    f = c[j + ((a[o >> 0] | 0) + -48 << 3) >> 2] | 0;
   } else L = 24; else L = 24;
   if ((L | 0) == 24) {
    L = 0;
    if (n | 0) {
     m = -1;
     break a;
    }
    if (!M) {
     v = s;
     n = 0;
     r = o;
     K = 0;
     break;
    }
    n = (c[g >> 2] | 0) + (4 - 1) & ~(4 - 1);
    f = c[n >> 2] | 0;
    c[g >> 2] = n + 4;
    n = 0;
    r = o;
   }
   if ((f | 0) < 0) {
    v = s | 8192;
    K = 0 - f | 0;
   } else {
    v = s;
    K = f;
   }
  } else {
   p = (o << 24 >> 24) + -48 | 0;
   if (p >>> 0 < 10) {
    f = r;
    o = 0;
    do {
     o = (o * 10 | 0) + p | 0;
     f = f + 1 | 0;
     p = (a[f >> 0] | 0) + -48 | 0;
    } while (p >>> 0 < 10);
    if ((o | 0) < 0) {
     m = -1;
     break a;
    } else {
     v = s;
     r = f;
     K = o;
    }
   } else {
    v = s;
    K = 0;
   }
  } while (0);
  e : do if ((a[r >> 0] | 0) == 46) {
   f = r + 1 | 0;
   o = a[f >> 0] | 0;
   if (o << 24 >> 24 != 42) {
    p = (o << 24 >> 24) + -48 | 0;
    if (p >>> 0 < 10) o = 0; else {
     s = 0;
     break;
    }
    while (1) {
     o = (o * 10 | 0) + p | 0;
     f = f + 1 | 0;
     p = (a[f >> 0] | 0) + -48 | 0;
     if (p >>> 0 >= 10) {
      s = o;
      break e;
     }
    }
   }
   f = r + 2 | 0;
   o = (a[f >> 0] | 0) + -48 | 0;
   if (o >>> 0 < 10) if ((a[r + 3 >> 0] | 0) == 36) {
    c[l + (o << 2) >> 2] = 10;
    s = c[j + ((a[f >> 0] | 0) + -48 << 3) >> 2] | 0;
    f = r + 4 | 0;
    break;
   }
   if (n | 0) {
    m = -1;
    break a;
   }
   if (M) {
    J = (c[g >> 2] | 0) + (4 - 1) & ~(4 - 1);
    s = c[J >> 2] | 0;
    c[g >> 2] = J + 4;
   } else s = 0;
  } else {
   s = -1;
   f = r;
  } while (0);
  t = 0;
  while (1) {
   o = (a[f >> 0] | 0) + -65 | 0;
   if (o >>> 0 > 57) {
    m = -1;
    break a;
   }
   p = f + 1 | 0;
   o = a[3052 + (t * 58 | 0) + o >> 0] | 0;
   r = o & 255;
   if ((r + -1 | 0) >>> 0 < 8) {
    f = p;
    t = r;
   } else {
    J = p;
    break;
   }
  }
  if (!(o << 24 >> 24)) {
   m = -1;
   break;
  }
  p = (u | 0) > -1;
  do if (o << 24 >> 24 == 19) if (p) {
   m = -1;
   break a;
  } else L = 52; else {
   if (p) {
    c[l + (u << 2) >> 2] = r;
    H = j + (u << 3) | 0;
    I = c[H + 4 >> 2] | 0;
    L = ca;
    c[L >> 2] = c[H >> 2];
    c[L + 4 >> 2] = I;
    L = 52;
    break;
   }
   if (!M) {
    m = 0;
    break a;
   }
   Oa(ca, r, g);
  } while (0);
  if ((L | 0) == 52) {
   L = 0;
   if (!M) {
    o = w;
    y = J;
    continue;
   }
  }
  u = a[f >> 0] | 0;
  u = (t | 0) != 0 & (u & 15 | 0) == 3 ? u & -33 : u;
  p = v & -65537;
  I = (v & 8192 | 0) == 0 ? v : p;
  f : do switch (u | 0) {
  case 110:
   switch (t | 0) {
   case 0:
    {
     c[c[ca >> 2] >> 2] = m;
     o = w;
     y = J;
     continue a;
    }
   case 1:
    {
     c[c[ca >> 2] >> 2] = m;
     o = w;
     y = J;
     continue a;
    }
   case 2:
    {
     o = c[ca >> 2] | 0;
     c[o >> 2] = m;
     c[o + 4 >> 2] = ((m | 0) < 0) << 31 >> 31;
     o = w;
     y = J;
     continue a;
    }
   case 3:
    {
     b[c[ca >> 2] >> 1] = m;
     o = w;
     y = J;
     continue a;
    }
   case 4:
    {
     a[c[ca >> 2] >> 0] = m;
     o = w;
     y = J;
     continue a;
    }
   case 6:
    {
     c[c[ca >> 2] >> 2] = m;
     o = w;
     y = J;
     continue a;
    }
   case 7:
    {
     o = c[ca >> 2] | 0;
     c[o >> 2] = m;
     c[o + 4 >> 2] = ((m | 0) < 0) << 31 >> 31;
     o = w;
     y = J;
     continue a;
    }
   default:
    {
     o = w;
     y = J;
     continue a;
    }
   }
  case 112:
   {
    t = I | 8;
    s = s >>> 0 > 8 ? s : 8;
    u = 120;
    L = 64;
    break;
   }
  case 88:
  case 120:
   {
    t = I;
    L = 64;
    break;
   }
  case 111:
   {
    p = ca;
    o = c[p >> 2] | 0;
    p = c[p + 4 >> 2] | 0;
    if ((o | 0) == 0 & (p | 0) == 0) f = N; else {
     f = N;
     do {
      f = f + -1 | 0;
      a[f >> 0] = o & 7 | 48;
      o = _a(o | 0, p | 0, 3) | 0;
      p = C;
     } while (!((o | 0) == 0 & (p | 0) == 0));
    }
    if (!(I & 8)) {
     o = I;
     t = 0;
     r = 3532;
     L = 77;
    } else {
     t = W - f | 0;
     o = I;
     s = (s | 0) > (t | 0) ? s : t + 1 | 0;
     t = 0;
     r = 3532;
     L = 77;
    }
    break;
   }
  case 105:
  case 100:
   {
    o = ca;
    f = c[o >> 2] | 0;
    o = c[o + 4 >> 2] | 0;
    if ((o | 0) < 0) {
     f = Xa(0, 0, f | 0, o | 0) | 0;
     o = C;
     p = ca;
     c[p >> 2] = f;
     c[p + 4 >> 2] = o;
     p = 1;
     r = 3532;
     L = 76;
     break f;
    }
    if (!(I & 2048)) {
     r = I & 1;
     p = r;
     r = (r | 0) == 0 ? 3532 : 3534;
     L = 76;
    } else {
     p = 1;
     r = 3533;
     L = 76;
    }
    break;
   }
  case 117:
   {
    o = ca;
    f = c[o >> 2] | 0;
    o = c[o + 4 >> 2] | 0;
    p = 0;
    r = 3532;
    L = 76;
    break;
   }
  case 99:
   {
    a[X >> 0] = c[ca >> 2];
    f = X;
    u = 1;
    w = 0;
    v = 3532;
    o = N;
    break;
   }
  case 109:
   {
    o = Da(c[(xa() | 0) >> 2] | 0) | 0;
    L = 82;
    break;
   }
  case 115:
   {
    o = c[ca >> 2] | 0;
    o = o | 0 ? o : 3542;
    L = 82;
    break;
   }
  case 67:
   {
    c[ha >> 2] = c[ca >> 2];
    c[Y >> 2] = 0;
    c[ca >> 2] = ha;
    f = ha;
    s = -1;
    L = 86;
    break;
   }
  case 83:
   {
    f = c[ca >> 2] | 0;
    if (!s) {
     Qa(e, 32, K, 0, I);
     f = 0;
     L = 97;
    } else L = 86;
    break;
   }
  case 65:
  case 71:
  case 70:
  case 69:
  case 97:
  case 103:
  case 102:
  case 101:
   {
    q = +h[ca >> 3];
    c[fa >> 2] = 0;
    h[k >> 3] = q;
    if ((c[k + 4 >> 2] | 0) < 0) {
     q = -q;
     G = 1;
     H = 3549;
    } else if (!(I & 2048)) {
     H = I & 1;
     G = H;
     H = (H | 0) == 0 ? 3550 : 3555;
    } else {
     G = 1;
     H = 3552;
    }
    h[k >> 3] = q;
    F = c[k + 4 >> 2] & 2146435072;
    do if (F >>> 0 < 2146435072 | (F | 0) == 2146435072 & 0 < 0) {
     x = +Fa(q, fa) * 2.0;
     o = x != 0.0;
     if (o) c[fa >> 2] = (c[fa >> 2] | 0) + -1;
     D = u | 32;
     if ((D | 0) == 97) {
      v = u & 32;
      y = (v | 0) == 0 ? H : H + 9 | 0;
      w = G | 2;
      f = 12 - s | 0;
      do if (s >>> 0 > 11 | (f | 0) == 0) q = x; else {
       q = 8.0;
       do {
        f = f + -1 | 0;
        q = q * 16.0;
       } while ((f | 0) != 0);
       if ((a[y >> 0] | 0) == 45) {
        q = -(q + (-x - q));
        break;
       } else {
        q = x + q - q;
        break;
       }
      } while (0);
      o = c[fa >> 2] | 0;
      f = (o | 0) < 0 ? 0 - o | 0 : o;
      f = Pa(f, ((f | 0) < 0) << 31 >> 31, $) | 0;
      if ((f | 0) == ($ | 0)) {
       a[aa >> 0] = 48;
       f = aa;
      }
      a[f + -1 >> 0] = (o >> 31 & 2) + 43;
      t = f + -2 | 0;
      a[t >> 0] = u + 15;
      r = (s | 0) < 1;
      p = (I & 8 | 0) == 0;
      o = ea;
      while (1) {
       H = ~~q;
       f = o + 1 | 0;
       a[o >> 0] = d[3516 + H >> 0] | v;
       q = (q - +(H | 0)) * 16.0;
       do if ((f - Z | 0) == 1) {
        if (p & (r & q == 0.0)) break;
        a[f >> 0] = 46;
        f = o + 2 | 0;
       } while (0);
       if (!(q != 0.0)) break; else o = f;
      }
      p = t;
      s = (s | 0) != 0 & (P + f | 0) < (s | 0) ? Q + s - p | 0 : O - p + f | 0;
      r = s + w | 0;
      Qa(e, 32, K, r, I);
      if (!(c[e >> 2] & 32)) Ma(y, w, e) | 0;
      Qa(e, 48, K, r, I ^ 65536);
      o = f - Z | 0;
      if (!(c[e >> 2] & 32)) Ma(ea, o, e) | 0;
      f = ba - p | 0;
      Qa(e, 48, s - (o + f) | 0, 0, 0);
      if (!(c[e >> 2] & 32)) Ma(t, f, e) | 0;
      Qa(e, 32, K, r, I ^ 8192);
      f = (r | 0) < (K | 0) ? K : r;
      break;
     }
     f = (s | 0) < 0 ? 6 : s;
     if (o) {
      o = (c[fa >> 2] | 0) + -28 | 0;
      c[fa >> 2] = o;
      q = x * 268435456.0;
     } else {
      q = x;
      o = c[fa >> 2] | 0;
     }
     F = (o | 0) < 0 ? da : S;
     E = F;
     o = F;
     do {
      B = ~~q >>> 0;
      c[o >> 2] = B;
      o = o + 4 | 0;
      q = (q - +(B >>> 0)) * 1.0e9;
     } while (q != 0.0);
     p = o;
     o = c[fa >> 2] | 0;
     if ((o | 0) > 0) {
      s = F;
      while (1) {
       t = (o | 0) > 29 ? 29 : o;
       r = p + -4 | 0;
       do if (r >>> 0 < s >>> 0) r = s; else {
        o = 0;
        do {
         B = $a(c[r >> 2] | 0, 0, t | 0) | 0;
         B = Ya(B | 0, C | 0, o | 0, 0) | 0;
         o = C;
         A = cb(B | 0, o | 0, 1e9, 0) | 0;
         c[r >> 2] = A;
         o = bb(B | 0, o | 0, 1e9, 0) | 0;
         r = r + -4 | 0;
        } while (r >>> 0 >= s >>> 0);
        if (!o) {
         r = s;
         break;
        }
        r = s + -4 | 0;
        c[r >> 2] = o;
       } while (0);
       while (1) {
        if (p >>> 0 <= r >>> 0) break;
        o = p + -4 | 0;
        if (!(c[o >> 2] | 0)) p = o; else break;
       }
       o = (c[fa >> 2] | 0) - t | 0;
       c[fa >> 2] = o;
       if ((o | 0) > 0) s = r; else break;
      }
     } else r = F;
     if ((o | 0) < 0) {
      y = ((f + 25 | 0) / 9 | 0) + 1 | 0;
      z = (D | 0) == 102;
      v = r;
      while (1) {
       w = 0 - o | 0;
       w = (w | 0) > 9 ? 9 : w;
       do if (v >>> 0 < p >>> 0) {
        o = (1 << w) + -1 | 0;
        s = 1e9 >>> w;
        r = 0;
        t = v;
        do {
         B = c[t >> 2] | 0;
         c[t >> 2] = (B >>> w) + r;
         r = R(B & o, s) | 0;
         t = t + 4 | 0;
        } while (t >>> 0 < p >>> 0);
        o = (c[v >> 2] | 0) == 0 ? v + 4 | 0 : v;
        if (!r) {
         r = o;
         break;
        }
        c[p >> 2] = r;
        r = o;
        p = p + 4 | 0;
       } else r = (c[v >> 2] | 0) == 0 ? v + 4 | 0 : v; while (0);
       o = z ? F : r;
       p = (p - o >> 2 | 0) > (y | 0) ? o + (y << 2) | 0 : p;
       o = (c[fa >> 2] | 0) + w | 0;
       c[fa >> 2] = o;
       if ((o | 0) >= 0) {
        z = r;
        break;
       } else v = r;
      }
     } else z = r;
     do if (z >>> 0 < p >>> 0) {
      o = (E - z >> 2) * 9 | 0;
      s = c[z >> 2] | 0;
      if (s >>> 0 < 10) break; else r = 10;
      do {
       r = r * 10 | 0;
       o = o + 1 | 0;
      } while (s >>> 0 >= r >>> 0);
     } else o = 0; while (0);
     A = (D | 0) == 103;
     B = (f | 0) != 0;
     r = f - ((D | 0) != 102 ? o : 0) + ((B & A) << 31 >> 31) | 0;
     if ((r | 0) < (((p - E >> 2) * 9 | 0) + -9 | 0)) {
      t = r + 9216 | 0;
      r = F + 4 + (((t | 0) / 9 | 0) + -1024 << 2) | 0;
      t = ((t | 0) % 9 | 0) + 1 | 0;
      if ((t | 0) < 9) {
       s = 10;
       do {
        s = s * 10 | 0;
        t = t + 1 | 0;
       } while ((t | 0) != 9);
      } else s = 10;
      w = c[r >> 2] | 0;
      y = (w >>> 0) % (s >>> 0) | 0;
      t = (r + 4 | 0) == (p | 0);
      do if (t & (y | 0) == 0) s = z; else {
       x = (((w >>> 0) / (s >>> 0) | 0) & 1 | 0) == 0 ? 9007199254740992.0 : 9007199254740994.0;
       v = (s | 0) / 2 | 0;
       if (y >>> 0 < v >>> 0) q = .5; else q = t & (y | 0) == (v | 0) ? 1.0 : 1.5;
       do if (G) {
        if ((a[H >> 0] | 0) != 45) break;
        x = -x;
        q = -q;
       } while (0);
       t = w - y | 0;
       c[r >> 2] = t;
       if (!(x + q != x)) {
        s = z;
        break;
       }
       D = t + s | 0;
       c[r >> 2] = D;
       if (D >>> 0 > 999999999) {
        o = z;
        while (1) {
         s = r + -4 | 0;
         c[r >> 2] = 0;
         if (s >>> 0 < o >>> 0) {
          o = o + -4 | 0;
          c[o >> 2] = 0;
         }
         D = (c[s >> 2] | 0) + 1 | 0;
         c[s >> 2] = D;
         if (D >>> 0 > 999999999) r = s; else {
          v = o;
          r = s;
          break;
         }
        }
       } else v = z;
       o = (E - v >> 2) * 9 | 0;
       t = c[v >> 2] | 0;
       if (t >>> 0 < 10) {
        s = v;
        break;
       } else s = 10;
       do {
        s = s * 10 | 0;
        o = o + 1 | 0;
       } while (t >>> 0 >= s >>> 0);
       s = v;
      } while (0);
      D = r + 4 | 0;
      z = s;
      p = p >>> 0 > D >>> 0 ? D : p;
     }
     w = 0 - o | 0;
     while (1) {
      if (p >>> 0 <= z >>> 0) {
       y = 0;
       D = p;
       break;
      }
      r = p + -4 | 0;
      if (!(c[r >> 2] | 0)) p = r; else {
       y = 1;
       D = p;
       break;
      }
     }
     do if (A) {
      f = (B & 1 ^ 1) + f | 0;
      if ((f | 0) > (o | 0) & (o | 0) > -5) {
       u = u + -1 | 0;
       f = f + -1 - o | 0;
      } else {
       u = u + -2 | 0;
       f = f + -1 | 0;
      }
      p = I & 8;
      if (p | 0) break;
      do if (y) {
       p = c[D + -4 >> 2] | 0;
       if (!p) {
        r = 9;
        break;
       }
       if (!((p >>> 0) % 10 | 0)) {
        s = 10;
        r = 0;
       } else {
        r = 0;
        break;
       }
       do {
        s = s * 10 | 0;
        r = r + 1 | 0;
       } while (!((p >>> 0) % (s >>> 0) | 0 | 0));
      } else r = 9; while (0);
      p = ((D - E >> 2) * 9 | 0) + -9 | 0;
      if ((u | 32 | 0) == 102) {
       p = p - r | 0;
       p = (p | 0) < 0 ? 0 : p;
       f = (f | 0) < (p | 0) ? f : p;
       p = 0;
       break;
      } else {
       p = p + o - r | 0;
       p = (p | 0) < 0 ? 0 : p;
       f = (f | 0) < (p | 0) ? f : p;
       p = 0;
       break;
      }
     } else p = I & 8; while (0);
     v = f | p;
     s = (v | 0) != 0 & 1;
     t = (u | 32 | 0) == 102;
     if (t) {
      o = (o | 0) > 0 ? o : 0;
      u = 0;
     } else {
      r = (o | 0) < 0 ? w : o;
      r = Pa(r, ((r | 0) < 0) << 31 >> 31, $) | 0;
      if ((ba - r | 0) < 2) do {
       r = r + -1 | 0;
       a[r >> 0] = 48;
      } while ((ba - r | 0) < 2);
      a[r + -1 >> 0] = (o >> 31 & 2) + 43;
      E = r + -2 | 0;
      a[E >> 0] = u;
      o = ba - E | 0;
      u = E;
     }
     w = G + 1 + f + s + o | 0;
     Qa(e, 32, K, w, I);
     if (!(c[e >> 2] & 32)) Ma(H, G, e) | 0;
     Qa(e, 48, K, w, I ^ 65536);
     do if (t) {
      r = z >>> 0 > F >>> 0 ? F : z;
      o = r;
      do {
       p = Pa(c[o >> 2] | 0, 0, T) | 0;
       do if ((o | 0) == (r | 0)) {
        if ((p | 0) != (T | 0)) break;
        a[V >> 0] = 48;
        p = V;
       } else {
        if (p >>> 0 <= ea >>> 0) break;
        Za(ea | 0, 48, p - Z | 0) | 0;
        do p = p + -1 | 0; while (p >>> 0 > ea >>> 0);
       } while (0);
       if (!(c[e >> 2] & 32)) Ma(p, U - p | 0, e) | 0;
       o = o + 4 | 0;
      } while (o >>> 0 <= F >>> 0);
      do if (v | 0) {
       if (c[e >> 2] & 32 | 0) break;
       Ma(3584, 1, e) | 0;
      } while (0);
      if ((f | 0) > 0 & o >>> 0 < D >>> 0) {
       p = o;
       while (1) {
        o = Pa(c[p >> 2] | 0, 0, T) | 0;
        if (o >>> 0 > ea >>> 0) {
         Za(ea | 0, 48, o - Z | 0) | 0;
         do o = o + -1 | 0; while (o >>> 0 > ea >>> 0);
        }
        if (!(c[e >> 2] & 32)) Ma(o, (f | 0) > 9 ? 9 : f, e) | 0;
        p = p + 4 | 0;
        o = f + -9 | 0;
        if (!((f | 0) > 9 & p >>> 0 < D >>> 0)) {
         f = o;
         break;
        } else f = o;
       }
      }
      Qa(e, 48, f + 9 | 0, 9, 0);
     } else {
      t = y ? D : z + 4 | 0;
      if ((f | 0) > -1) {
       s = (p | 0) == 0;
       r = z;
       do {
        o = Pa(c[r >> 2] | 0, 0, T) | 0;
        if ((o | 0) == (T | 0)) {
         a[V >> 0] = 48;
         o = V;
        }
        do if ((r | 0) == (z | 0)) {
         p = o + 1 | 0;
         if (!(c[e >> 2] & 32)) Ma(o, 1, e) | 0;
         if (s & (f | 0) < 1) {
          o = p;
          break;
         }
         if (c[e >> 2] & 32 | 0) {
          o = p;
          break;
         }
         Ma(3584, 1, e) | 0;
         o = p;
        } else {
         if (o >>> 0 <= ea >>> 0) break;
         Za(ea | 0, 48, o + _ | 0) | 0;
         do o = o + -1 | 0; while (o >>> 0 > ea >>> 0);
        } while (0);
        p = U - o | 0;
        if (!(c[e >> 2] & 32)) Ma(o, (f | 0) > (p | 0) ? p : f, e) | 0;
        f = f - p | 0;
        r = r + 4 | 0;
       } while (r >>> 0 < t >>> 0 & (f | 0) > -1);
      }
      Qa(e, 48, f + 18 | 0, 18, 0);
      if (c[e >> 2] & 32 | 0) break;
      Ma(u, ba - u | 0, e) | 0;
     } while (0);
     Qa(e, 32, K, w, I ^ 8192);
     f = (w | 0) < (K | 0) ? K : w;
    } else {
     t = (u & 32 | 0) != 0;
     s = q != q | 0.0 != 0.0;
     o = s ? 0 : G;
     r = o + 3 | 0;
     Qa(e, 32, K, r, p);
     f = c[e >> 2] | 0;
     if (!(f & 32)) {
      Ma(H, o, e) | 0;
      f = c[e >> 2] | 0;
     }
     if (!(f & 32)) Ma(s ? (t ? 3576 : 3580) : t ? 3568 : 3572, 3, e) | 0;
     Qa(e, 32, K, r, I ^ 8192);
     f = (r | 0) < (K | 0) ? K : r;
    } while (0);
    o = f;
    y = J;
    continue a;
   }
  default:
   {
    f = y;
    p = I;
    u = s;
    w = 0;
    v = 3532;
    o = N;
   }
  } while (0);
  g : do if ((L | 0) == 64) {
   p = ca;
   o = c[p >> 2] | 0;
   p = c[p + 4 >> 2] | 0;
   r = u & 32;
   if ((o | 0) == 0 & (p | 0) == 0) {
    f = N;
    o = t;
    t = 0;
    r = 3532;
    L = 77;
   } else {
    f = N;
    do {
     f = f + -1 | 0;
     a[f >> 0] = d[3516 + (o & 15) >> 0] | r;
     o = _a(o | 0, p | 0, 4) | 0;
     p = C;
    } while (!((o | 0) == 0 & (p | 0) == 0));
    L = ca;
    if ((t & 8 | 0) == 0 | (c[L >> 2] | 0) == 0 & (c[L + 4 >> 2] | 0) == 0) {
     o = t;
     t = 0;
     r = 3532;
     L = 77;
    } else {
     o = t;
     t = 2;
     r = 3532 + (u >> 4) | 0;
     L = 77;
    }
   }
  } else if ((L | 0) == 76) {
   f = Pa(f, o, N) | 0;
   o = I;
   t = p;
   L = 77;
  } else if ((L | 0) == 82) {
   L = 0;
   I = Ga(o, 0, s) | 0;
   H = (I | 0) == 0;
   f = o;
   u = H ? s : I - o | 0;
   w = 0;
   v = 3532;
   o = H ? o + s | 0 : I;
  } else if ((L | 0) == 86) {
   L = 0;
   p = 0;
   o = 0;
   t = f;
   while (1) {
    r = c[t >> 2] | 0;
    if (!r) break;
    o = Ra(ga, r) | 0;
    if ((o | 0) < 0 | o >>> 0 > (s - p | 0) >>> 0) break;
    p = o + p | 0;
    if (s >>> 0 > p >>> 0) t = t + 4 | 0; else break;
   }
   if ((o | 0) < 0) {
    m = -1;
    break a;
   }
   Qa(e, 32, K, p, I);
   if (!p) {
    f = 0;
    L = 97;
   } else {
    r = 0;
    while (1) {
     o = c[f >> 2] | 0;
     if (!o) {
      f = p;
      L = 97;
      break g;
     }
     o = Ra(ga, o) | 0;
     r = o + r | 0;
     if ((r | 0) > (p | 0)) {
      f = p;
      L = 97;
      break g;
     }
     if (!(c[e >> 2] & 32)) Ma(ga, o, e) | 0;
     if (r >>> 0 >= p >>> 0) {
      f = p;
      L = 97;
      break;
     } else f = f + 4 | 0;
    }
   }
  } while (0);
  if ((L | 0) == 97) {
   L = 0;
   Qa(e, 32, K, f, I ^ 8192);
   o = (K | 0) > (f | 0) ? K : f;
   y = J;
   continue;
  }
  if ((L | 0) == 77) {
   L = 0;
   p = (s | 0) > -1 ? o & -65537 : o;
   o = ca;
   o = (c[o >> 2] | 0) != 0 | (c[o + 4 >> 2] | 0) != 0;
   if ((s | 0) != 0 | o) {
    u = (o & 1 ^ 1) + (W - f) | 0;
    u = (s | 0) > (u | 0) ? s : u;
    w = t;
    v = r;
    o = N;
   } else {
    f = N;
    u = 0;
    w = t;
    v = r;
    o = N;
   }
  }
  t = o - f | 0;
  r = (u | 0) < (t | 0) ? t : u;
  s = w + r | 0;
  o = (K | 0) < (s | 0) ? s : K;
  Qa(e, 32, o, s, p);
  if (!(c[e >> 2] & 32)) Ma(v, w, e) | 0;
  Qa(e, 48, o, s, p ^ 65536);
  Qa(e, 48, r, t, 0);
  if (!(c[e >> 2] & 32)) Ma(f, t, e) | 0;
  Qa(e, 32, o, s, p ^ 8192);
  y = J;
 }
 h : do if ((L | 0) == 244) if (!e) if (!n) m = 0; else {
  m = 1;
  while (1) {
   n = c[l + (m << 2) >> 2] | 0;
   if (!n) break;
   Oa(j + (m << 3) | 0, n, g);
   m = m + 1 | 0;
   if ((m | 0) >= 10) {
    m = 1;
    break h;
   }
  }
  if ((m | 0) < 10) while (1) {
   if (c[l + (m << 2) >> 2] | 0) {
    m = -1;
    break h;
   }
   m = m + 1 | 0;
   if ((m | 0) >= 10) {
    m = 1;
    break;
   }
  } else m = 1;
 } while (0);
 i = ia;
 return m | 0;
}

function Va(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 if (!a) return;
 d = a + -8 | 0;
 h = c[913] | 0;
 if (d >>> 0 < h >>> 0) _();
 a = c[a + -4 >> 2] | 0;
 b = a & 3;
 if ((b | 0) == 1) _();
 e = a & -8;
 m = d + e | 0;
 do if (!(a & 1)) {
  a = c[d >> 2] | 0;
  if (!b) return;
  k = d + (0 - a) | 0;
  j = a + e | 0;
  if (k >>> 0 < h >>> 0) _();
  if ((k | 0) == (c[914] | 0)) {
   a = m + 4 | 0;
   b = c[a >> 2] | 0;
   if ((b & 3 | 0) != 3) {
    q = k;
    g = j;
    break;
   }
   c[911] = j;
   c[a >> 2] = b & -2;
   c[k + 4 >> 2] = j | 1;
   c[k + j >> 2] = j;
   return;
  }
  e = a >>> 3;
  if (a >>> 0 < 256) {
   b = c[k + 8 >> 2] | 0;
   d = c[k + 12 >> 2] | 0;
   a = 3676 + (e << 1 << 2) | 0;
   if ((b | 0) != (a | 0)) {
    if (b >>> 0 < h >>> 0) _();
    if ((c[b + 12 >> 2] | 0) != (k | 0)) _();
   }
   if ((d | 0) == (b | 0)) {
    c[909] = c[909] & ~(1 << e);
    q = k;
    g = j;
    break;
   }
   if ((d | 0) == (a | 0)) f = d + 8 | 0; else {
    if (d >>> 0 < h >>> 0) _();
    a = d + 8 | 0;
    if ((c[a >> 2] | 0) == (k | 0)) f = a; else _();
   }
   c[b + 12 >> 2] = d;
   c[f >> 2] = b;
   q = k;
   g = j;
   break;
  }
  f = c[k + 24 >> 2] | 0;
  d = c[k + 12 >> 2] | 0;
  do if ((d | 0) == (k | 0)) {
   b = k + 16 | 0;
   d = b + 4 | 0;
   a = c[d >> 2] | 0;
   if (!a) {
    a = c[b >> 2] | 0;
    if (!a) {
     i = 0;
     break;
    }
   } else b = d;
   while (1) {
    d = a + 20 | 0;
    e = c[d >> 2] | 0;
    if (e | 0) {
     a = e;
     b = d;
     continue;
    }
    d = a + 16 | 0;
    e = c[d >> 2] | 0;
    if (!e) break; else {
     a = e;
     b = d;
    }
   }
   if (b >>> 0 < h >>> 0) _(); else {
    c[b >> 2] = 0;
    i = a;
    break;
   }
  } else {
   e = c[k + 8 >> 2] | 0;
   if (e >>> 0 < h >>> 0) _();
   a = e + 12 | 0;
   if ((c[a >> 2] | 0) != (k | 0)) _();
   b = d + 8 | 0;
   if ((c[b >> 2] | 0) == (k | 0)) {
    c[a >> 2] = d;
    c[b >> 2] = e;
    i = d;
    break;
   } else _();
  } while (0);
  if (!f) {
   q = k;
   g = j;
  } else {
   a = c[k + 28 >> 2] | 0;
   b = 3940 + (a << 2) | 0;
   if ((k | 0) == (c[b >> 2] | 0)) {
    c[b >> 2] = i;
    if (!i) {
     c[910] = c[910] & ~(1 << a);
     q = k;
     g = j;
     break;
    }
   } else {
    if (f >>> 0 < (c[913] | 0) >>> 0) _();
    a = f + 16 | 0;
    if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = i; else c[f + 20 >> 2] = i;
    if (!i) {
     q = k;
     g = j;
     break;
    }
   }
   d = c[913] | 0;
   if (i >>> 0 < d >>> 0) _();
   c[i + 24 >> 2] = f;
   a = k + 16 | 0;
   b = c[a >> 2] | 0;
   do if (b | 0) if (b >>> 0 < d >>> 0) _(); else {
    c[i + 16 >> 2] = b;
    c[b + 24 >> 2] = i;
    break;
   } while (0);
   a = c[a + 4 >> 2] | 0;
   if (!a) {
    q = k;
    g = j;
   } else if (a >>> 0 < (c[913] | 0) >>> 0) _(); else {
    c[i + 20 >> 2] = a;
    c[a + 24 >> 2] = i;
    q = k;
    g = j;
    break;
   }
  }
 } else {
  q = d;
  g = e;
 } while (0);
 if (q >>> 0 >= m >>> 0) _();
 a = m + 4 | 0;
 b = c[a >> 2] | 0;
 if (!(b & 1)) _();
 if (!(b & 2)) {
  if ((m | 0) == (c[915] | 0)) {
   p = (c[912] | 0) + g | 0;
   c[912] = p;
   c[915] = q;
   c[q + 4 >> 2] = p | 1;
   if ((q | 0) != (c[914] | 0)) return;
   c[914] = 0;
   c[911] = 0;
   return;
  }
  if ((m | 0) == (c[914] | 0)) {
   p = (c[911] | 0) + g | 0;
   c[911] = p;
   c[914] = q;
   c[q + 4 >> 2] = p | 1;
   c[q + p >> 2] = p;
   return;
  }
  g = (b & -8) + g | 0;
  e = b >>> 3;
  do if (b >>> 0 < 256) {
   b = c[m + 8 >> 2] | 0;
   d = c[m + 12 >> 2] | 0;
   a = 3676 + (e << 1 << 2) | 0;
   if ((b | 0) != (a | 0)) {
    if (b >>> 0 < (c[913] | 0) >>> 0) _();
    if ((c[b + 12 >> 2] | 0) != (m | 0)) _();
   }
   if ((d | 0) == (b | 0)) {
    c[909] = c[909] & ~(1 << e);
    break;
   }
   if ((d | 0) == (a | 0)) l = d + 8 | 0; else {
    if (d >>> 0 < (c[913] | 0) >>> 0) _();
    a = d + 8 | 0;
    if ((c[a >> 2] | 0) == (m | 0)) l = a; else _();
   }
   c[b + 12 >> 2] = d;
   c[l >> 2] = b;
  } else {
   f = c[m + 24 >> 2] | 0;
   a = c[m + 12 >> 2] | 0;
   do if ((a | 0) == (m | 0)) {
    b = m + 16 | 0;
    d = b + 4 | 0;
    a = c[d >> 2] | 0;
    if (!a) {
     a = c[b >> 2] | 0;
     if (!a) {
      n = 0;
      break;
     }
    } else b = d;
    while (1) {
     d = a + 20 | 0;
     e = c[d >> 2] | 0;
     if (e | 0) {
      a = e;
      b = d;
      continue;
     }
     d = a + 16 | 0;
     e = c[d >> 2] | 0;
     if (!e) break; else {
      a = e;
      b = d;
     }
    }
    if (b >>> 0 < (c[913] | 0) >>> 0) _(); else {
     c[b >> 2] = 0;
     n = a;
     break;
    }
   } else {
    b = c[m + 8 >> 2] | 0;
    if (b >>> 0 < (c[913] | 0) >>> 0) _();
    d = b + 12 | 0;
    if ((c[d >> 2] | 0) != (m | 0)) _();
    e = a + 8 | 0;
    if ((c[e >> 2] | 0) == (m | 0)) {
     c[d >> 2] = a;
     c[e >> 2] = b;
     n = a;
     break;
    } else _();
   } while (0);
   if (f | 0) {
    a = c[m + 28 >> 2] | 0;
    b = 3940 + (a << 2) | 0;
    if ((m | 0) == (c[b >> 2] | 0)) {
     c[b >> 2] = n;
     if (!n) {
      c[910] = c[910] & ~(1 << a);
      break;
     }
    } else {
     if (f >>> 0 < (c[913] | 0) >>> 0) _();
     a = f + 16 | 0;
     if ((c[a >> 2] | 0) == (m | 0)) c[a >> 2] = n; else c[f + 20 >> 2] = n;
     if (!n) break;
    }
    d = c[913] | 0;
    if (n >>> 0 < d >>> 0) _();
    c[n + 24 >> 2] = f;
    a = m + 16 | 0;
    b = c[a >> 2] | 0;
    do if (b | 0) if (b >>> 0 < d >>> 0) _(); else {
     c[n + 16 >> 2] = b;
     c[b + 24 >> 2] = n;
     break;
    } while (0);
    a = c[a + 4 >> 2] | 0;
    if (a | 0) if (a >>> 0 < (c[913] | 0) >>> 0) _(); else {
     c[n + 20 >> 2] = a;
     c[a + 24 >> 2] = n;
     break;
    }
   }
  } while (0);
  c[q + 4 >> 2] = g | 1;
  c[q + g >> 2] = g;
  if ((q | 0) == (c[914] | 0)) {
   c[911] = g;
   return;
  }
 } else {
  c[a >> 2] = b & -2;
  c[q + 4 >> 2] = g | 1;
  c[q + g >> 2] = g;
 }
 a = g >>> 3;
 if (g >>> 0 < 256) {
  d = 3676 + (a << 1 << 2) | 0;
  b = c[909] | 0;
  a = 1 << a;
  if (!(b & a)) {
   c[909] = b | a;
   o = d + 8 | 0;
   p = d;
  } else {
   a = d + 8 | 0;
   b = c[a >> 2] | 0;
   if (b >>> 0 < (c[913] | 0) >>> 0) _(); else {
    o = a;
    p = b;
   }
  }
  c[o >> 2] = q;
  c[p + 12 >> 2] = q;
  c[q + 8 >> 2] = p;
  c[q + 12 >> 2] = d;
  return;
 }
 a = g >>> 8;
 if (!a) d = 0; else if (g >>> 0 > 16777215) d = 31; else {
  o = (a + 1048320 | 0) >>> 16 & 8;
  p = a << o;
  n = (p + 520192 | 0) >>> 16 & 4;
  p = p << n;
  d = (p + 245760 | 0) >>> 16 & 2;
  d = 14 - (n | o | d) + (p << d >>> 15) | 0;
  d = g >>> (d + 7 | 0) & 1 | d << 1;
 }
 e = 3940 + (d << 2) | 0;
 c[q + 28 >> 2] = d;
 c[q + 20 >> 2] = 0;
 c[q + 16 >> 2] = 0;
 a = c[910] | 0;
 b = 1 << d;
 do if (!(a & b)) {
  c[910] = a | b;
  c[e >> 2] = q;
  c[q + 24 >> 2] = e;
  c[q + 12 >> 2] = q;
  c[q + 8 >> 2] = q;
 } else {
  f = g << ((d | 0) == 31 ? 0 : 25 - (d >>> 1) | 0);
  a = c[e >> 2] | 0;
  while (1) {
   if ((c[a + 4 >> 2] & -8 | 0) == (g | 0)) {
    d = a;
    e = 130;
    break;
   }
   b = a + 16 + (f >>> 31 << 2) | 0;
   d = c[b >> 2] | 0;
   if (!d) {
    e = 127;
    break;
   } else {
    f = f << 1;
    a = d;
   }
  }
  if ((e | 0) == 127) if (b >>> 0 < (c[913] | 0) >>> 0) _(); else {
   c[b >> 2] = q;
   c[q + 24 >> 2] = a;
   c[q + 12 >> 2] = q;
   c[q + 8 >> 2] = q;
   break;
  } else if ((e | 0) == 130) {
   a = d + 8 | 0;
   b = c[a >> 2] | 0;
   p = c[913] | 0;
   if (b >>> 0 >= p >>> 0 & d >>> 0 >= p >>> 0) {
    c[b + 12 >> 2] = q;
    c[a >> 2] = q;
    c[q + 8 >> 2] = b;
    c[q + 12 >> 2] = d;
    c[q + 24 >> 2] = 0;
    break;
   } else _();
  }
 } while (0);
 q = (c[917] | 0) + -1 | 0;
 c[917] = q;
 if (!q) a = 4092; else return;
 while (1) {
  a = c[a >> 2] | 0;
  if (!a) break; else a = a + 8 | 0;
 }
 c[917] = -1;
 return;
}

function ab(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 l = a;
 j = b;
 k = j;
 h = d;
 n = e;
 i = n;
 if (!k) {
  g = (f | 0) != 0;
  if (!i) {
   if (g) {
    c[f >> 2] = (l >>> 0) % (h >>> 0);
    c[f + 4 >> 2] = 0;
   }
   n = 0;
   f = (l >>> 0) / (h >>> 0) >>> 0;
   return (C = n, f) | 0;
  } else {
   if (!g) {
    n = 0;
    f = 0;
    return (C = n, f) | 0;
   }
   c[f >> 2] = a | 0;
   c[f + 4 >> 2] = b & 0;
   n = 0;
   f = 0;
   return (C = n, f) | 0;
  }
 }
 g = (i | 0) == 0;
 do if (!h) {
  if (g) {
   if (f | 0) {
    c[f >> 2] = (k >>> 0) % (h >>> 0);
    c[f + 4 >> 2] = 0;
   }
   n = 0;
   f = (k >>> 0) / (h >>> 0) >>> 0;
   return (C = n, f) | 0;
  }
  if (!l) {
   if (f | 0) {
    c[f >> 2] = 0;
    c[f + 4 >> 2] = (k >>> 0) % (i >>> 0);
   }
   n = 0;
   f = (k >>> 0) / (i >>> 0) >>> 0;
   return (C = n, f) | 0;
  }
  g = i - 1 | 0;
  if (!(g & i)) {
   if (f | 0) {
    c[f >> 2] = a | 0;
    c[f + 4 >> 2] = g & k | b & 0;
   }
   n = 0;
   f = k >>> ((ca(i | 0) | 0) >>> 0);
   return (C = n, f) | 0;
  }
  g = (T(i | 0) | 0) - (T(k | 0) | 0) | 0;
  if (g >>> 0 <= 30) {
   b = g + 1 | 0;
   i = 31 - g | 0;
   h = b;
   a = k << i | l >>> (b >>> 0);
   b = k >>> (b >>> 0);
   g = 0;
   i = l << i;
   break;
  }
  if (!f) {
   n = 0;
   f = 0;
   return (C = n, f) | 0;
  }
  c[f >> 2] = a | 0;
  c[f + 4 >> 2] = j | b & 0;
  n = 0;
  f = 0;
  return (C = n, f) | 0;
 } else {
  if (!g) {
   g = (T(i | 0) | 0) - (T(k | 0) | 0) | 0;
   if (g >>> 0 <= 31) {
    m = g + 1 | 0;
    i = 31 - g | 0;
    b = g - 31 >> 31;
    h = m;
    a = l >>> (m >>> 0) & b | k << i;
    b = k >>> (m >>> 0) & b;
    g = 0;
    i = l << i;
    break;
   }
   if (!f) {
    n = 0;
    f = 0;
    return (C = n, f) | 0;
   }
   c[f >> 2] = a | 0;
   c[f + 4 >> 2] = j | b & 0;
   n = 0;
   f = 0;
   return (C = n, f) | 0;
  }
  g = h - 1 | 0;
  if (g & h | 0) {
   i = (T(h | 0) | 0) + 33 - (T(k | 0) | 0) | 0;
   p = 64 - i | 0;
   m = 32 - i | 0;
   j = m >> 31;
   o = i - 32 | 0;
   b = o >> 31;
   h = i;
   a = m - 1 >> 31 & k >>> (o >>> 0) | (k << m | l >>> (i >>> 0)) & b;
   b = b & k >>> (i >>> 0);
   g = l << p & j;
   i = (k << p | l >>> (o >>> 0)) & j | l << m & i - 33 >> 31;
   break;
  }
  if (f | 0) {
   c[f >> 2] = g & l;
   c[f + 4 >> 2] = 0;
  }
  if ((h | 0) == 1) {
   o = j | b & 0;
   p = a | 0 | 0;
   return (C = o, p) | 0;
  } else {
   p = ca(h | 0) | 0;
   o = k >>> (p >>> 0) | 0;
   p = k << 32 - p | l >>> (p >>> 0) | 0;
   return (C = o, p) | 0;
  }
 } while (0);
 if (!h) {
  k = i;
  j = 0;
  i = 0;
 } else {
  m = d | 0 | 0;
  l = n | e & 0;
  k = Ya(m | 0, l | 0, -1, -1) | 0;
  d = C;
  j = i;
  i = 0;
  do {
   e = j;
   j = g >>> 31 | j << 1;
   g = i | g << 1;
   e = a << 1 | e >>> 31 | 0;
   n = a >>> 31 | b << 1 | 0;
   Xa(k | 0, d | 0, e | 0, n | 0) | 0;
   p = C;
   o = p >> 31 | ((p | 0) < 0 ? -1 : 0) << 1;
   i = o & 1;
   a = Xa(e | 0, n | 0, o & m | 0, (((p | 0) < 0 ? -1 : 0) >> 31 | ((p | 0) < 0 ? -1 : 0) << 1) & l | 0) | 0;
   b = C;
   h = h - 1 | 0;
  } while ((h | 0) != 0);
  k = j;
  j = 0;
 }
 h = 0;
 if (f | 0) {
  c[f >> 2] = a;
  c[f + 4 >> 2] = b;
 }
 o = (g | 0) >>> 31 | (k | h) << 1 | (h << 1 | g >>> 31) & 0 | j;
 p = (g << 1 | 0 >>> 31) & -2 | i;
 return (C = o, p) | 0;
}

function Oa(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0.0;
 a : do if (b >>> 0 <= 20) do switch (b | 0) {
 case 9:
  {
   e = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   b = c[e >> 2] | 0;
   c[d >> 2] = e + 4;
   c[a >> 2] = b;
   break a;
  }
 case 10:
  {
   e = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   b = c[e >> 2] | 0;
   c[d >> 2] = e + 4;
   e = a;
   c[e >> 2] = b;
   c[e + 4 >> 2] = ((b | 0) < 0) << 31 >> 31;
   break a;
  }
 case 11:
  {
   e = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   b = c[e >> 2] | 0;
   c[d >> 2] = e + 4;
   e = a;
   c[e >> 2] = b;
   c[e + 4 >> 2] = 0;
   break a;
  }
 case 12:
  {
   e = (c[d >> 2] | 0) + (8 - 1) & ~(8 - 1);
   b = e;
   f = c[b >> 2] | 0;
   b = c[b + 4 >> 2] | 0;
   c[d >> 2] = e + 8;
   e = a;
   c[e >> 2] = f;
   c[e + 4 >> 2] = b;
   break a;
  }
 case 13:
  {
   f = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   e = c[f >> 2] | 0;
   c[d >> 2] = f + 4;
   e = (e & 65535) << 16 >> 16;
   f = a;
   c[f >> 2] = e;
   c[f + 4 >> 2] = ((e | 0) < 0) << 31 >> 31;
   break a;
  }
 case 14:
  {
   f = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   e = c[f >> 2] | 0;
   c[d >> 2] = f + 4;
   f = a;
   c[f >> 2] = e & 65535;
   c[f + 4 >> 2] = 0;
   break a;
  }
 case 15:
  {
   f = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   e = c[f >> 2] | 0;
   c[d >> 2] = f + 4;
   e = (e & 255) << 24 >> 24;
   f = a;
   c[f >> 2] = e;
   c[f + 4 >> 2] = ((e | 0) < 0) << 31 >> 31;
   break a;
  }
 case 16:
  {
   f = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   e = c[f >> 2] | 0;
   c[d >> 2] = f + 4;
   f = a;
   c[f >> 2] = e & 255;
   c[f + 4 >> 2] = 0;
   break a;
  }
 case 17:
  {
   f = (c[d >> 2] | 0) + (8 - 1) & ~(8 - 1);
   g = +h[f >> 3];
   c[d >> 2] = f + 8;
   h[a >> 3] = g;
   break a;
  }
 case 18:
  {
   f = (c[d >> 2] | 0) + (8 - 1) & ~(8 - 1);
   g = +h[f >> 3];
   c[d >> 2] = f + 8;
   h[a >> 3] = g;
   break a;
  }
 default:
  break a;
 } while (0); while (0);
 return;
}

function ya(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 q = i;
 i = i + 48 | 0;
 n = q + 16 | 0;
 m = q;
 e = q + 32 | 0;
 o = a + 28 | 0;
 f = c[o >> 2] | 0;
 c[e >> 2] = f;
 p = a + 20 | 0;
 f = (c[p >> 2] | 0) - f | 0;
 c[e + 4 >> 2] = f;
 c[e + 8 >> 2] = b;
 c[e + 12 >> 2] = d;
 k = a + 60 | 0;
 l = a + 44 | 0;
 b = 2;
 f = f + d | 0;
 while (1) {
  if (!(c[897] | 0)) {
   c[n >> 2] = c[k >> 2];
   c[n + 4 >> 2] = e;
   c[n + 8 >> 2] = b;
   h = wa(ia(146, n | 0) | 0) | 0;
  } else {
   ba(1, a | 0);
   c[m >> 2] = c[k >> 2];
   c[m + 4 >> 2] = e;
   c[m + 8 >> 2] = b;
   h = wa(ia(146, m | 0) | 0) | 0;
   Z(0);
  }
  if ((f | 0) == (h | 0)) {
   f = 6;
   break;
  }
  if ((h | 0) < 0) {
   f = 8;
   break;
  }
  f = f - h | 0;
  g = c[e + 4 >> 2] | 0;
  if (h >>> 0 > g >>> 0) {
   j = c[l >> 2] | 0;
   c[o >> 2] = j;
   c[p >> 2] = j;
   j = c[e + 12 >> 2] | 0;
   h = h - g | 0;
   e = e + 8 | 0;
   b = b + -1 | 0;
  } else if ((b | 0) == 2) {
   c[o >> 2] = (c[o >> 2] | 0) + h;
   j = g;
   b = 2;
  } else j = g;
  c[e >> 2] = (c[e >> 2] | 0) + h;
  c[e + 4 >> 2] = j - h;
 }
 if ((f | 0) == 6) {
  n = c[l >> 2] | 0;
  c[a + 16 >> 2] = n + (c[a + 48 >> 2] | 0);
  a = n;
  c[o >> 2] = a;
  c[p >> 2] = a;
 } else if ((f | 0) == 8) {
  c[a + 16 >> 2] = 0;
  c[o >> 2] = 0;
  c[p >> 2] = 0;
  c[a >> 2] = c[a >> 2] | 32;
  if ((b | 0) == 2) d = 0; else d = d - (c[e + 4 >> 2] | 0) | 0;
 }
 i = q;
 return d | 0;
}

function Ka(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0;
 s = i;
 i = i + 224 | 0;
 o = s + 120 | 0;
 r = s + 80 | 0;
 q = s;
 p = s + 136 | 0;
 f = r;
 g = f + 40 | 0;
 do {
  c[f >> 2] = 0;
  f = f + 4 | 0;
 } while ((f | 0) < (g | 0));
 c[o >> 2] = c[e >> 2];
 if ((La(0, d, o, q, r) | 0) < 0) e = -1; else {
  if ((c[b + 76 >> 2] | 0) > -1) m = Ha(b) | 0; else m = 0;
  e = c[b >> 2] | 0;
  n = e & 32;
  if ((a[b + 74 >> 0] | 0) < 1) c[b >> 2] = e & -33;
  e = b + 48 | 0;
  if (!(c[e >> 2] | 0)) {
   g = b + 44 | 0;
   h = c[g >> 2] | 0;
   c[g >> 2] = p;
   j = b + 28 | 0;
   c[j >> 2] = p;
   k = b + 20 | 0;
   c[k >> 2] = p;
   c[e >> 2] = 80;
   l = b + 16 | 0;
   c[l >> 2] = p + 80;
   f = La(b, d, o, q, r) | 0;
   if (h) {
    la[c[b + 36 >> 2] & 3](b, 0, 0) | 0;
    f = (c[k >> 2] | 0) == 0 ? -1 : f;
    c[g >> 2] = h;
    c[e >> 2] = 0;
    c[l >> 2] = 0;
    c[j >> 2] = 0;
    c[k >> 2] = 0;
   }
  } else f = La(b, d, o, q, r) | 0;
  e = c[b >> 2] | 0;
  c[b >> 2] = e | n;
  if (m | 0) Aa(b);
  e = (e & 32 | 0) == 0 ? f : -1;
 }
 i = s;
 return e | 0;
}

function Ga(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 h = d & 255;
 f = (e | 0) != 0;
 a : do if (f & (b & 3 | 0) != 0) {
  g = d & 255;
  while (1) {
   if ((a[b >> 0] | 0) == g << 24 >> 24) {
    i = 6;
    break a;
   }
   b = b + 1 | 0;
   e = e + -1 | 0;
   f = (e | 0) != 0;
   if (!(f & (b & 3 | 0) != 0)) {
    i = 5;
    break;
   }
  }
 } else i = 5; while (0);
 if ((i | 0) == 5) if (f) i = 6; else e = 0;
 b : do if ((i | 0) == 6) {
  g = d & 255;
  if ((a[b >> 0] | 0) != g << 24 >> 24) {
   f = R(h, 16843009) | 0;
   c : do if (e >>> 0 > 3) while (1) {
    h = c[b >> 2] ^ f;
    if ((h & -2139062144 ^ -2139062144) & h + -16843009 | 0) break;
    b = b + 4 | 0;
    e = e + -4 | 0;
    if (e >>> 0 <= 3) {
     i = 11;
     break c;
    }
   } else i = 11; while (0);
   if ((i | 0) == 11) if (!e) {
    e = 0;
    break;
   }
   while (1) {
    if ((a[b >> 0] | 0) == g << 24 >> 24) break b;
    b = b + 1 | 0;
    e = e + -1 | 0;
    if (!e) {
     e = 0;
     break;
    }
   }
  }
 } while (0);
 return (e | 0 ? b : 0) | 0;
}

function Ma(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 f = e + 16 | 0;
 g = c[f >> 2] | 0;
 if (!g) if (!(Na(e) | 0)) {
  g = c[f >> 2] | 0;
  h = 5;
 } else f = 0; else h = 5;
 a : do if ((h | 0) == 5) {
  i = e + 20 | 0;
  f = c[i >> 2] | 0;
  h = f;
  if ((g - f | 0) >>> 0 < d >>> 0) {
   f = la[c[e + 36 >> 2] & 3](e, b, d) | 0;
   break;
  }
  b : do if ((a[e + 75 >> 0] | 0) > -1) {
   f = d;
   while (1) {
    if (!f) {
     g = h;
     f = 0;
     break b;
    }
    g = f + -1 | 0;
    if ((a[b + g >> 0] | 0) == 10) break; else f = g;
   }
   if ((la[c[e + 36 >> 2] & 3](e, b, f) | 0) >>> 0 < f >>> 0) break a;
   d = d - f | 0;
   b = b + f | 0;
   g = c[i >> 2] | 0;
  } else {
   g = h;
   f = 0;
  } while (0);
  db(g | 0, b | 0, d | 0) | 0;
  c[i >> 2] = (c[i >> 2] | 0) + d;
  f = f + d | 0;
 } while (0);
 return f | 0;
}

function Sa(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 do if (!b) b = 1; else {
  if (d >>> 0 < 128) {
   a[b >> 0] = d;
   b = 1;
   break;
  }
  if (d >>> 0 < 2048) {
   a[b >> 0] = d >>> 6 | 192;
   a[b + 1 >> 0] = d & 63 | 128;
   b = 2;
   break;
  }
  if (d >>> 0 < 55296 | (d & -8192 | 0) == 57344) {
   a[b >> 0] = d >>> 12 | 224;
   a[b + 1 >> 0] = d >>> 6 & 63 | 128;
   a[b + 2 >> 0] = d & 63 | 128;
   b = 3;
   break;
  }
  if ((d + -65536 | 0) >>> 0 < 1048576) {
   a[b >> 0] = d >>> 18 | 240;
   a[b + 1 >> 0] = d >>> 12 & 63 | 128;
   a[b + 2 >> 0] = d >>> 6 & 63 | 128;
   a[b + 3 >> 0] = d & 63 | 128;
   b = 4;
   break;
  } else {
   c[(xa() | 0) >> 2] = 84;
   b = -1;
   break;
  }
 } while (0);
 return b | 0;
}

function Qa(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0;
 j = i;
 i = i + 256 | 0;
 h = j;
 do if ((d | 0) > (e | 0) & (f & 73728 | 0) == 0) {
  f = d - e | 0;
  Za(h | 0, b | 0, (f >>> 0 > 256 ? 256 : f) | 0) | 0;
  b = c[a >> 2] | 0;
  g = (b & 32 | 0) == 0;
  if (f >>> 0 > 255) {
   e = d - e | 0;
   do {
    if (g) {
     Ma(h, 256, a) | 0;
     b = c[a >> 2] | 0;
    }
    f = f + -256 | 0;
    g = (b & 32 | 0) == 0;
   } while (f >>> 0 > 255);
   if (g) f = e & 255; else break;
  } else if (!g) break;
  Ma(h, f, a) | 0;
 } while (0);
 i = j;
 return;
}

function Ia(a) {
 a = a | 0;
 var b = 0, d = 0;
 do if (!a) {
  if (!(c[285] | 0)) b = 0; else b = Ia(c[285] | 0) | 0;
  $(3616);
  a = c[903] | 0;
  if (a) do {
   if ((c[a + 76 >> 2] | 0) > -1) d = Ha(a) | 0; else d = 0;
   if ((c[a + 20 >> 2] | 0) >>> 0 > (c[a + 28 >> 2] | 0) >>> 0) b = Ja(a) | 0 | b;
   if (d | 0) Aa(a);
   a = c[a + 56 >> 2] | 0;
  } while ((a | 0) != 0);
  ha(3616);
 } else {
  if ((c[a + 76 >> 2] | 0) <= -1) {
   b = Ja(a) | 0;
   break;
  }
  d = (Ha(a) | 0) == 0;
  b = Ja(a) | 0;
  if (!d) Aa(a);
 } while (0);
 return b | 0;
}

function Ja(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0;
 g = a + 20 | 0;
 h = a + 28 | 0;
 if ((c[g >> 2] | 0) >>> 0 > (c[h >> 2] | 0) >>> 0) {
  la[c[a + 36 >> 2] & 3](a, 0, 0) | 0;
  if (!(c[g >> 2] | 0)) b = -1; else d = 3;
 } else d = 3;
 if ((d | 0) == 3) {
  f = a + 4 | 0;
  b = c[f >> 2] | 0;
  d = a + 8 | 0;
  e = c[d >> 2] | 0;
  if (b >>> 0 < e >>> 0) la[c[a + 40 >> 2] & 3](a, b - e | 0, 1) | 0;
  c[a + 16 >> 2] = 0;
  c[h >> 2] = 0;
  c[g >> 2] = 0;
  c[d >> 2] = 0;
  c[f >> 2] = 0;
  b = 0;
 }
 return b | 0;
}

function db(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 if ((e | 0) >= 4096) return fa(b | 0, d | 0, e | 0) | 0;
 f = b | 0;
 if ((b & 3) == (d & 3)) {
  while (b & 3) {
   if (!e) return f | 0;
   a[b >> 0] = a[d >> 0] | 0;
   b = b + 1 | 0;
   d = d + 1 | 0;
   e = e - 1 | 0;
  }
  while ((e | 0) >= 4) {
   c[b >> 2] = c[d >> 2];
   b = b + 4 | 0;
   d = d + 4 | 0;
   e = e - 4 | 0;
  }
 }
 while ((e | 0) > 0) {
  a[b >> 0] = a[d >> 0] | 0;
  b = b + 1 | 0;
  d = d + 1 | 0;
  e = e - 1 | 0;
 }
 return f | 0;
}

function Pa(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 if (c >>> 0 > 0 | (c | 0) == 0 & b >>> 0 > 4294967295) while (1) {
  e = cb(b | 0, c | 0, 10, 0) | 0;
  d = d + -1 | 0;
  a[d >> 0] = e | 48;
  e = bb(b | 0, c | 0, 10, 0) | 0;
  if (c >>> 0 > 9 | (c | 0) == 9 & b >>> 0 > 4294967295) {
   b = e;
   c = C;
  } else {
   b = e;
   break;
  }
 }
 if (b) while (1) {
  d = d + -1 | 0;
  a[d >> 0] = (b >>> 0) % 10 | 0 | 48;
  if (b >>> 0 < 10) break; else b = (b >>> 0) / 10 | 0;
 }
 return d | 0;
}

function Ea(a, b) {
 a = +a;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 h[k >> 3] = a;
 d = c[k >> 2] | 0;
 e = c[k + 4 >> 2] | 0;
 f = _a(d | 0, e | 0, 52) | 0;
 f = f & 2047;
 switch (f | 0) {
 case 0:
  {
   if (a != 0.0) {
    a = +Ea(a * 18446744073709551616.0, b);
    d = (c[b >> 2] | 0) + -64 | 0;
   } else d = 0;
   c[b >> 2] = d;
   break;
  }
 case 2047:
  break;
 default:
  {
   c[b >> 2] = f + -1022;
   c[k >> 2] = d;
   c[k + 4 >> 2] = e & -2146435073 | 1071644672;
   a = +h[k >> 3];
  }
 }
 return +a;
}

function Da(b) {
 b = b | 0;
 var c = 0, e = 0;
 c = 0;
 while (1) {
  if ((d[1160 + c >> 0] | 0) == (b | 0)) {
   e = 2;
   break;
  }
  c = c + 1 | 0;
  if ((c | 0) == 87) {
   c = 87;
   b = 1248;
   e = 5;
   break;
  }
 }
 if ((e | 0) == 2) if (!c) b = 1248; else {
  b = 1248;
  e = 5;
 }
 if ((e | 0) == 5) while (1) {
  e = b;
  while (1) {
   b = e + 1 | 0;
   if (!(a[e >> 0] | 0)) break; else e = b;
  }
  c = c + -1 | 0;
  if (!c) break; else e = 5;
 }
 return b | 0;
}

function Za(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 f = b + e | 0;
 if ((e | 0) >= 20) {
  d = d & 255;
  h = b & 3;
  i = d | d << 8 | d << 16 | d << 24;
  g = f & ~3;
  if (h) {
   h = b + 4 - h | 0;
   while ((b | 0) < (h | 0)) {
    a[b >> 0] = d;
    b = b + 1 | 0;
   }
  }
  while ((b | 0) < (g | 0)) {
   c[b >> 2] = i;
   b = b + 4 | 0;
  }
 }
 while ((b | 0) < (f | 0)) {
  a[b >> 0] = d;
  b = b + 1 | 0;
 }
 return b - e | 0;
}

function Na(b) {
 b = b | 0;
 var d = 0, e = 0;
 d = b + 74 | 0;
 e = a[d >> 0] | 0;
 a[d >> 0] = e + 255 | e;
 d = c[b >> 2] | 0;
 if (!(d & 8)) {
  c[b + 8 >> 2] = 0;
  c[b + 4 >> 2] = 0;
  d = c[b + 44 >> 2] | 0;
  c[b + 28 >> 2] = d;
  c[b + 20 >> 2] = d;
  c[b + 16 >> 2] = d + (c[b + 48 >> 2] | 0);
  d = 0;
 } else {
  c[b >> 2] = d | 32;
  d = -1;
 }
 return d | 0;
}

function Ba(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 f = i;
 i = i + 32 | 0;
 g = f;
 e = f + 20 | 0;
 c[g >> 2] = c[a + 60 >> 2];
 c[g + 4 >> 2] = 0;
 c[g + 8 >> 2] = b;
 c[g + 12 >> 2] = e;
 c[g + 16 >> 2] = d;
 if ((wa(ea(140, g | 0) | 0) | 0) < 0) {
  c[e >> 2] = -1;
  a = -1;
 } else a = c[e >> 2] | 0;
 i = f;
 return a | 0;
}

function Ca(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 g = i;
 i = i + 80 | 0;
 f = g;
 c[b + 36 >> 2] = 3;
 if (!(c[b >> 2] & 64)) {
  c[f >> 2] = c[b + 60 >> 2];
  c[f + 4 >> 2] = 21505;
  c[f + 8 >> 2] = g + 12;
  if (ga(54, f | 0) | 0) a[b + 75 >> 0] = -1;
 }
 f = ya(b, d, e) | 0;
 i = g;
 return f | 0;
}

function cb(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 g = i;
 i = i + 16 | 0;
 f = g | 0;
 ab(a, b, d, e, f) | 0;
 i = g;
 return (C = c[f + 4 >> 2] | 0, c[f >> 2] | 0) | 0;
}

function $a(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c | 0) < 32) {
  C = b << c | (a & (1 << c) - 1 << 32 - c) >>> 32 - c;
  return a << c;
 }
 C = a << c - 32;
 return 0;
}

function _a(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c | 0) < 32) {
  C = b >>> c;
  return a >>> c | (b & (1 << c) - 1) << 32 - c;
 }
 C = 0;
 return b >>> c - 32 | 0;
}

function Wa() {}
function Xa(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 d = b - d - (c >>> 0 > a >>> 0 | 0) >>> 0;
 return (C = d, a - c >>> 0 | 0) | 0;
}

function Ta(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 d = i;
 i = i + 16 | 0;
 e = d;
 c[e >> 2] = b;
 b = Ka(c[256] | 0, a, e) | 0;
 i = d;
 return b | 0;
}

function va(a) {
 a = a | 0;
 var b = 0, d = 0;
 b = i;
 i = i + 16 | 0;
 d = b;
 c[d >> 2] = c[a + 60 >> 2];
 a = wa(aa(6, d | 0) | 0) | 0;
 i = b;
 return a | 0;
}

function Ya(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 c = a + c >>> 0;
 return (C = b + d + (c >>> 0 < a >>> 0 | 0) >>> 0, c | 0) | 0;
}

function ua(a, b) {
 a = a | 0;
 b = b | 0;
 b = i;
 i = i + 16 | 0;
 a = b;
 c[a >> 2] = 5555;
 Ta(1144, a) | 0;
 i = b;
 return 0;
}

function gb(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return la[a & 3](b | 0, c | 0, d | 0) | 0;
}

function wa(a) {
 a = a | 0;
 if (a >>> 0 > 4294963200) {
  c[(xa() | 0) >> 2] = 0 - a;
  a = -1;
 }
 return a | 0;
}

function xa() {
 var a = 0;
 if (!(c[897] | 0)) a = 3632; else a = c[(eb() | 0) + 64 >> 2] | 0;
 return a | 0;
}

function bb(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return ab(a, b, c, d, 0) | 0;
}

function Ra(a, b) {
 a = a | 0;
 b = b | 0;
 if (!a) a = 0; else a = Sa(a, b, 0) | 0;
 return a | 0;
}
function na(a) {
 a = a | 0;
 var b = 0;
 b = i;
 i = i + a | 0;
 i = i + 15 & -16;
 return b | 0;
}

function jb(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 U(1);
 return 0;
}

function ra(a, b) {
 a = a | 0;
 b = b | 0;
 if (!n) {
  n = a;
  o = b;
 }
}

function fb(a, b) {
 a = a | 0;
 b = b | 0;
 return ka[a & 1](b | 0) | 0;
}

function za(a) {
 a = a | 0;
 if (!(c[a + 68 >> 2] | 0)) Aa(a);
 return;
}

function hb(a, b) {
 a = a | 0;
 b = b | 0;
 ma[a & 1](b | 0);
}

function Fa(a, b) {
 a = +a;
 b = b | 0;
 return +(+Ea(a, b));
}

function qa(a, b) {
 a = a | 0;
 b = b | 0;
 i = a;
 j = b;
}

function ib(a) {
 a = a | 0;
 U(0);
 return 0;
}

function Ha(a) {
 a = a | 0;
 return 0;
}

function Aa(a) {
 a = a | 0;
 return;
}

function sa(a) {
 a = a | 0;
 C = a;
}

function pa(a) {
 a = a | 0;
 i = a;
}

function kb(a) {
 a = a | 0;
 U(2);
}

function ta() {
 return C | 0;
}

function oa() {
 return i | 0;
}

function eb() {
 return 0;
}

// EMSCRIPTEN_END_FUNCS

 var ka = [ ib, va ];
 var la = [ jb, Ca, Ba, ya ];
 var ma = [ kb, za ];
 return {
  _i64Subtract: Xa,
  _free: Va,
  _main: ua,
  _i64Add: Ya,
  _pthread_self: eb,
  _memset: Za,
  ___udivdi3: bb,
  _malloc: Ua,
  _memcpy: db,
  _bitshift64Lshr: _a,
  _fflush: Ia,
  _bitshift64Shl: $a,
  ___uremdi3: cb,
  ___errno_location: xa,
  ___udivmoddi4: ab,
  runPostSets: Wa,
  stackAlloc: na,
  stackSave: oa,
  stackRestore: pa,
  establishStackSpace: qa,
  setThrew: ra,
  setTempRet0: sa,
  getTempRet0: ta,
  dynCall_ii: fb,
  dynCall_iiii: gb,
  dynCall_vi: hb
 };
})


;