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
 var t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0;
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
 var $ = env.___syscall6;
 var aa = env.___setErrNo;
 var ba = env._llvm_cttz_i32;
 var ca = env._sbrk;
 var da = env._llvm_fabs_f64;
 var ea = env._pthread_cleanup_push;
 var fa = env._emscripten_memcpy_big;
 var ga = env.___syscall54;
 var ha = env.___syscall140;
 var ia = env._exit;
 var ja = env.__exit;
 var ka = env.___syscall145;
 var la = env.___syscall146;
 var ma = 0;
 
// EMSCRIPTEN_START_FUNCS
function qa(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0;
 D = i;
 i = i + 16 | 0;
 p = D;
 do if (a >>> 0 < 245) {
  q = a >>> 0 < 11 ? 16 : a + 11 & -8;
  a = q >>> 3;
  k = c[20962] | 0;
  b = k >>> a;
  if (b & 3 | 0) {
   b = (b & 1 ^ 1) + a | 0;
   d = 83888 + (b << 1 << 2) | 0;
   e = d + 8 | 0;
   f = c[e >> 2] | 0;
   g = f + 8 | 0;
   h = c[g >> 2] | 0;
   do if ((d | 0) == (h | 0)) c[20962] = k & ~(1 << b); else {
    if (h >>> 0 < (c[20966] | 0) >>> 0) _();
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
  h = c[20964] | 0;
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
    d = 83888 + (b << 1 << 2) | 0;
    e = d + 8 | 0;
    g = c[e >> 2] | 0;
    j = g + 8 | 0;
    f = c[j >> 2] | 0;
    do if ((d | 0) == (f | 0)) {
     c[20962] = k & ~(1 << b);
     l = h;
    } else {
     if (f >>> 0 < (c[20966] | 0) >>> 0) _();
     a = f + 12 | 0;
     if ((c[a >> 2] | 0) == (g | 0)) {
      c[a >> 2] = d;
      c[e >> 2] = f;
      l = c[20964] | 0;
      break;
     } else _();
    } while (0);
    h = (b << 3) - q | 0;
    c[g + 4 >> 2] = q | 3;
    e = g + q | 0;
    c[e + 4 >> 2] = h | 1;
    c[e + h >> 2] = h;
    if (l | 0) {
     f = c[20967] | 0;
     b = l >>> 3;
     d = 83888 + (b << 1 << 2) | 0;
     a = c[20962] | 0;
     b = 1 << b;
     if (!(a & b)) {
      c[20962] = a | b;
      m = d + 8 | 0;
      n = d;
     } else {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      if (b >>> 0 < (c[20966] | 0) >>> 0) _(); else {
       m = a;
       n = b;
      }
     }
     c[m >> 2] = f;
     c[n + 12 >> 2] = f;
     c[f + 8 >> 2] = n;
     c[f + 12 >> 2] = d;
    }
    c[20964] = h;
    c[20967] = e;
    C = j;
    i = D;
    return C | 0;
   }
   a = c[20963] | 0;
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
    e = c[84152 + ((A | B | C | b | e) + (d >>> e) << 2) >> 2] | 0;
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
    g = c[20966] | 0;
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
     b = 84152 + (a << 2) | 0;
     if ((k | 0) == (c[b >> 2] | 0)) {
      c[b >> 2] = o;
      if (!o) {
       c[20963] = c[20963] & ~(1 << a);
       break;
      }
     } else {
      if (h >>> 0 < (c[20966] | 0) >>> 0) _();
      a = h + 16 | 0;
      if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = o; else c[h + 20 >> 2] = o;
      if (!o) break;
     }
     b = c[20966] | 0;
     if (o >>> 0 < b >>> 0) _();
     c[o + 24 >> 2] = h;
     a = c[k + 16 >> 2] | 0;
     do if (a | 0) if (a >>> 0 < b >>> 0) _(); else {
      c[o + 16 >> 2] = a;
      c[a + 24 >> 2] = o;
      break;
     } while (0);
     a = c[k + 20 >> 2] | 0;
     if (a | 0) if (a >>> 0 < (c[20966] | 0) >>> 0) _(); else {
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
     a = c[20964] | 0;
     if (a | 0) {
      f = c[20967] | 0;
      b = a >>> 3;
      e = 83888 + (b << 1 << 2) | 0;
      a = c[20962] | 0;
      b = 1 << b;
      if (!(a & b)) {
       c[20962] = a | b;
       r = e + 8 | 0;
       s = e;
      } else {
       a = e + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 < (c[20966] | 0) >>> 0) _(); else {
        r = a;
        s = b;
       }
      }
      c[r >> 2] = f;
      c[s + 12 >> 2] = f;
      c[f + 8 >> 2] = s;
      c[f + 12 >> 2] = e;
     }
     c[20964] = d;
     c[20967] = j;
    }
    C = k + 8 | 0;
    i = D;
    return C | 0;
   }
  }
 } else if (a >>> 0 > 4294967231) q = -1; else {
  a = a + 11 | 0;
  q = a & -8;
  k = c[20963] | 0;
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
   b = c[84152 + (j << 2) >> 2] | 0;
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
     a = c[84152 + ((m | n | o | r | a) + (s >>> a) << 2) >> 2] | 0;
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
   if (k) if (h >>> 0 < ((c[20964] | 0) - q | 0) >>> 0) {
    f = c[20966] | 0;
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
     b = 84152 + (a << 2) | 0;
     if ((k | 0) == (c[b >> 2] | 0)) {
      c[b >> 2] = t;
      if (!t) {
       c[20963] = c[20963] & ~(1 << a);
       break;
      }
     } else {
      if (g >>> 0 < (c[20966] | 0) >>> 0) _();
      a = g + 16 | 0;
      if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = t; else c[g + 20 >> 2] = t;
      if (!t) break;
     }
     b = c[20966] | 0;
     if (t >>> 0 < b >>> 0) _();
     c[t + 24 >> 2] = g;
     a = c[k + 16 >> 2] | 0;
     do if (a | 0) if (a >>> 0 < b >>> 0) _(); else {
      c[t + 16 >> 2] = a;
      c[a + 24 >> 2] = t;
      break;
     } while (0);
     a = c[k + 20 >> 2] | 0;
     if (a | 0) if (a >>> 0 < (c[20966] | 0) >>> 0) _(); else {
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
      d = 83888 + (a << 1 << 2) | 0;
      b = c[20962] | 0;
      a = 1 << a;
      if (!(b & a)) {
       c[20962] = b | a;
       u = d + 8 | 0;
       v = d;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 < (c[20966] | 0) >>> 0) _(); else {
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
     e = 84152 + (d << 2) | 0;
     c[j + 28 >> 2] = d;
     a = j + 16 | 0;
     c[a + 4 >> 2] = 0;
     c[a >> 2] = 0;
     a = c[20963] | 0;
     b = 1 << d;
     if (!(a & b)) {
      c[20963] = a | b;
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
     if ((w | 0) == 145) if (b >>> 0 < (c[20966] | 0) >>> 0) _(); else {
      c[b >> 2] = j;
      c[j + 24 >> 2] = a;
      c[j + 12 >> 2] = j;
      c[j + 8 >> 2] = j;
      break;
     } else if ((w | 0) == 148) {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      C = c[20966] | 0;
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
 d = c[20964] | 0;
 if (d >>> 0 >= q >>> 0) {
  a = d - q | 0;
  b = c[20967] | 0;
  if (a >>> 0 > 15) {
   C = b + q | 0;
   c[20967] = C;
   c[20964] = a;
   c[C + 4 >> 2] = a | 1;
   c[C + a >> 2] = a;
   c[b + 4 >> 2] = q | 3;
  } else {
   c[20964] = 0;
   c[20967] = 0;
   c[b + 4 >> 2] = d | 3;
   C = b + d + 4 | 0;
   c[C >> 2] = c[C >> 2] | 1;
  }
  C = b + 8 | 0;
  i = D;
  return C | 0;
 }
 a = c[20965] | 0;
 if (a >>> 0 > q >>> 0) {
  A = a - q | 0;
  c[20965] = A;
  C = c[20968] | 0;
  B = C + q | 0;
  c[20968] = B;
  c[B + 4 >> 2] = A | 1;
  c[C + 4 >> 2] = q | 3;
  C = C + 8 | 0;
  i = D;
  return C | 0;
 }
 if (!(c[21080] | 0)) {
  c[21082] = 4096;
  c[21081] = 4096;
  c[21083] = -1;
  c[21084] = -1;
  c[21085] = 0;
  c[21073] = 0;
  v = p & -16 ^ 1431655768;
  c[p >> 2] = v;
  c[21080] = v;
 }
 h = q + 48 | 0;
 g = c[21082] | 0;
 j = q + 47 | 0;
 f = g + j | 0;
 g = 0 - g | 0;
 k = f & g;
 if (k >>> 0 <= q >>> 0) {
  C = 0;
  i = D;
  return C | 0;
 }
 a = c[21072] | 0;
 if (a | 0) {
  u = c[21070] | 0;
  v = u + k | 0;
  if (v >>> 0 <= u >>> 0 | v >>> 0 > a >>> 0) {
   C = 0;
   i = D;
   return C | 0;
  }
 }
 b : do if (!(c[21073] & 4)) {
  a = c[20968] | 0;
  c : do if (!a) w = 171; else {
   e = 84296;
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
   a = f - (c[20965] | 0) & g;
   if (a >>> 0 < 2147483647) {
    b = ca(a | 0) | 0;
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
   f = ca(0) | 0;
   if ((f | 0) != (-1 | 0)) {
    a = f;
    b = c[21081] | 0;
    d = b + -1 | 0;
    if (!(d & a)) a = k; else a = k - a + (d + a & 0 - b) | 0;
    b = c[21070] | 0;
    d = b + a | 0;
    if (a >>> 0 > q >>> 0 & a >>> 0 < 2147483647) {
     e = c[21072] | 0;
     if (e | 0) if (d >>> 0 <= b >>> 0 | d >>> 0 > e >>> 0) break;
     b = ca(a | 0) | 0;
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
    b = c[21082] | 0;
    b = j - a + b & 0 - b;
    if (b >>> 0 < 2147483647) if ((ca(b | 0) | 0) == (-1 | 0)) {
     ca(d | 0) | 0;
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
  c[21073] = c[21073] | 4;
  w = 188;
 } else w = 188; while (0);
 if ((w | 0) == 188) if (k >>> 0 < 2147483647) {
  b = ca(k | 0) | 0;
  a = ca(0) | 0;
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
  a = (c[21070] | 0) + h | 0;
  c[21070] = a;
  if (a >>> 0 > (c[21071] | 0) >>> 0) c[21071] = a;
  j = c[20968] | 0;
  do if (!j) {
   C = c[20966] | 0;
   if ((C | 0) == 0 | f >>> 0 < C >>> 0) c[20966] = f;
   c[21074] = f;
   c[21075] = h;
   c[21077] = 0;
   c[20971] = c[21080];
   c[20970] = -1;
   a = 0;
   do {
    C = 83888 + (a << 1 << 2) | 0;
    c[C + 12 >> 2] = C;
    c[C + 8 >> 2] = C;
    a = a + 1 | 0;
   } while ((a | 0) != 32);
   C = f + 8 | 0;
   C = (C & 7 | 0) == 0 ? 0 : 0 - C & 7;
   B = f + C | 0;
   C = h + -40 - C | 0;
   c[20968] = B;
   c[20965] = C;
   c[B + 4 >> 2] = C | 1;
   c[B + C + 4 >> 2] = 40;
   c[20969] = c[21084];
  } else {
   b = 84296;
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
    C = h - C + (c[20965] | 0) | 0;
    c[20968] = B;
    c[20965] = C;
    c[B + 4 >> 2] = C | 1;
    c[B + C + 4 >> 2] = 40;
    c[20969] = c[21084];
    break;
   }
   a = c[20966] | 0;
   if (f >>> 0 < a >>> 0) {
    c[20966] = f;
    k = f;
   } else k = a;
   d = f + h | 0;
   a = 84296;
   while (1) {
    if ((c[a >> 2] | 0) == (d | 0)) {
     b = a;
     w = 209;
     break;
    }
    a = c[a + 8 >> 2] | 0;
    if (!a) {
     b = 84296;
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
     C = (c[20965] | 0) + g | 0;
     c[20965] = C;
     c[20968] = l;
     c[l + 4 >> 2] = C | 1;
    } else {
     if ((a | 0) == (c[20967] | 0)) {
      C = (c[20964] | 0) + g | 0;
      c[20964] = C;
      c[20967] = l;
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
       b = 83888 + (f << 1 << 2) | 0;
       do if ((d | 0) != (b | 0)) {
        if (d >>> 0 < k >>> 0) _();
        if ((c[d + 12 >> 2] | 0) == (a | 0)) break;
        _();
       } while (0);
       if ((e | 0) == (d | 0)) {
        c[20962] = c[20962] & ~(1 << f);
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
       d = 84152 + (b << 2) | 0;
       do if ((a | 0) == (c[d >> 2] | 0)) {
        c[d >> 2] = A;
        if (A | 0) break;
        c[20963] = c[20963] & ~(1 << b);
        break e;
       } else {
        if (h >>> 0 < (c[20966] | 0) >>> 0) _();
        b = h + 16 | 0;
        if ((c[b >> 2] | 0) == (a | 0)) c[b >> 2] = A; else c[h + 20 >> 2] = A;
        if (!A) break e;
       } while (0);
       e = c[20966] | 0;
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
       if (b >>> 0 < (c[20966] | 0) >>> 0) _(); else {
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
      d = 83888 + (a << 1 << 2) | 0;
      b = c[20962] | 0;
      a = 1 << a;
      do if (!(b & a)) {
       c[20962] = b | a;
       B = d + 8 | 0;
       C = d;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 >= (c[20966] | 0) >>> 0) {
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
     e = 84152 + (d << 2) | 0;
     c[l + 28 >> 2] = d;
     a = l + 16 | 0;
     c[a + 4 >> 2] = 0;
     c[a >> 2] = 0;
     a = c[20963] | 0;
     b = 1 << d;
     if (!(a & b)) {
      c[20963] = a | b;
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
     if ((w | 0) == 276) if (b >>> 0 < (c[20966] | 0) >>> 0) _(); else {
      c[b >> 2] = l;
      c[l + 24 >> 2] = a;
      c[l + 12 >> 2] = l;
      c[l + 8 >> 2] = l;
      break;
     } else if ((w | 0) == 279) {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      C = c[20966] | 0;
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
   } else b = 84296;
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
   c[20968] = C;
   c[20965] = e;
   c[C + 4 >> 2] = e | 1;
   c[C + e + 4 >> 2] = 40;
   c[20969] = c[21084];
   e = d + 4 | 0;
   c[e >> 2] = 27;
   c[b >> 2] = c[21074];
   c[b + 4 >> 2] = c[21075];
   c[b + 8 >> 2] = c[21076];
   c[b + 12 >> 2] = c[21077];
   c[21074] = f;
   c[21075] = h;
   c[21077] = 0;
   c[21076] = b;
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
     d = 83888 + (a << 1 << 2) | 0;
     b = c[20962] | 0;
     a = 1 << a;
     if (!(b & a)) {
      c[20962] = b | a;
      y = d + 8 | 0;
      z = d;
     } else {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      if (b >>> 0 < (c[20966] | 0) >>> 0) _(); else {
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
    f = 84152 + (d << 2) | 0;
    c[j + 28 >> 2] = d;
    c[j + 20 >> 2] = 0;
    c[g >> 2] = 0;
    a = c[20963] | 0;
    b = 1 << d;
    if (!(a & b)) {
     c[20963] = a | b;
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
    if ((w | 0) == 302) if (b >>> 0 < (c[20966] | 0) >>> 0) _(); else {
     c[b >> 2] = j;
     c[j + 24 >> 2] = a;
     c[j + 12 >> 2] = j;
     c[j + 8 >> 2] = j;
     break;
    } else if ((w | 0) == 305) {
     a = d + 8 | 0;
     b = c[a >> 2] | 0;
     C = c[20966] | 0;
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
  a = c[20965] | 0;
  if (a >>> 0 > q >>> 0) {
   A = a - q | 0;
   c[20965] = A;
   C = c[20968] | 0;
   B = C + q | 0;
   c[20968] = B;
   c[B + 4 >> 2] = A | 1;
   c[C + 4 >> 2] = q | 3;
   C = C + 8 | 0;
   i = D;
   return C | 0;
  }
 }
 c[(ib() | 0) >> 2] = 12;
 C = 0;
 i = D;
 return C | 0;
}

function ra(b, e, f) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 var g = 0.0, h = 0, j = 0.0, k = 0, l = 0, m = 0.0, n = 0, o = 0, p = 0, q = 0.0, t = 0, u = 0, v = 0.0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, D = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0.0;
 M = i;
 i = i + 512 | 0;
 I = M;
 switch (e | 0) {
 case 0:
  {
   L = 24;
   J = -149;
   z = 4;
   break;
  }
 case 1:
  {
   L = 53;
   J = -1074;
   z = 4;
   break;
  }
 case 2:
  {
   L = 53;
   J = -1074;
   z = 4;
   break;
  }
 default:
  g = 0.0;
 }
 a : do if ((z | 0) == 4) {
  F = b + 4 | 0;
  D = b + 100 | 0;
  do {
   e = c[F >> 2] | 0;
   if (e >>> 0 < (c[D >> 2] | 0) >>> 0) {
    c[F >> 2] = e + 1;
    e = d[e >> 0] | 0;
   } else e = Ea(b) | 0;
  } while ((rb(e) | 0) != 0);
  b : do switch (e | 0) {
  case 43:
  case 45:
   {
    h = 1 - (((e | 0) == 45 & 1) << 1) | 0;
    e = c[F >> 2] | 0;
    if (e >>> 0 < (c[D >> 2] | 0) >>> 0) {
     c[F >> 2] = e + 1;
     e = d[e >> 0] | 0;
     K = h;
     break b;
    } else {
     e = Ea(b) | 0;
     K = h;
     break b;
    }
   }
  default:
   K = 1;
  } while (0);
  h = e;
  e = 0;
  do {
   if ((h | 32 | 0) != (a[81769 + e >> 0] | 0)) break;
   do if (e >>> 0 < 7) {
    h = c[F >> 2] | 0;
    if (h >>> 0 < (c[D >> 2] | 0) >>> 0) {
     c[F >> 2] = h + 1;
     h = d[h >> 0] | 0;
     break;
    } else {
     h = Ea(b) | 0;
     break;
    }
   } while (0);
   e = e + 1 | 0;
  } while (e >>> 0 < 8);
  c : do switch (e | 0) {
  case 8:
   break;
  case 3:
   {
    z = 23;
    break;
   }
  default:
   {
    k = (f | 0) != 0;
    if (k & e >>> 0 > 3) if ((e | 0) == 8) break c; else {
     z = 23;
     break c;
    }
    d : do if (!e) {
     e = 0;
     do {
      if ((h | 32 | 0) != (a[81778 + e >> 0] | 0)) break d;
      do if (e >>> 0 < 2) {
       h = c[F >> 2] | 0;
       if (h >>> 0 < (c[D >> 2] | 0) >>> 0) {
        c[F >> 2] = h + 1;
        h = d[h >> 0] | 0;
        break;
       } else {
        h = Ea(b) | 0;
        break;
       }
      } while (0);
      e = e + 1 | 0;
     } while (e >>> 0 < 3);
    } while (0);
    switch (e | 0) {
    case 3:
     {
      e = c[F >> 2] | 0;
      if (e >>> 0 < (c[D >> 2] | 0) >>> 0) {
       c[F >> 2] = e + 1;
       e = d[e >> 0] | 0;
      } else e = Ea(b) | 0;
      if ((e | 0) == 40) e = 1; else {
       if (!(c[D >> 2] | 0)) {
        g = r;
        break a;
       }
       c[F >> 2] = (c[F >> 2] | 0) + -1;
       g = r;
       break a;
      }
      while (1) {
       h = c[F >> 2] | 0;
       if (h >>> 0 < (c[D >> 2] | 0) >>> 0) {
        c[F >> 2] = h + 1;
        h = d[h >> 0] | 0;
       } else h = Ea(b) | 0;
       if (!((h + -48 | 0) >>> 0 < 10 | (h + -65 | 0) >>> 0 < 26)) if (!((h | 0) == 95 | (h + -97 | 0) >>> 0 < 26)) break;
       e = e + 1 | 0;
      }
      if ((h | 0) == 41) {
       g = r;
       break a;
      }
      h = (c[D >> 2] | 0) == 0;
      if (!h) c[F >> 2] = (c[F >> 2] | 0) + -1;
      if (!k) {
       c[(ib() | 0) >> 2] = 22;
       Ya(b, 0);
       g = 0.0;
       break a;
      }
      if (!e) {
       g = r;
       break a;
      }
      while (1) {
       e = e + -1 | 0;
       if (!h) c[F >> 2] = (c[F >> 2] | 0) + -1;
       if (!e) {
        g = r;
        break a;
       }
      }
     }
    case 0:
     {
      do if ((h | 0) == 48) {
       e = c[F >> 2] | 0;
       if (e >>> 0 < (c[D >> 2] | 0) >>> 0) {
        c[F >> 2] = e + 1;
        e = d[e >> 0] | 0;
       } else e = Ea(b) | 0;
       if ((e | 32 | 0) != 120) {
        if (!(c[D >> 2] | 0)) {
         e = 48;
         break;
        }
        c[F >> 2] = (c[F >> 2] | 0) + -1;
        e = 48;
        break;
       }
       e = c[F >> 2] | 0;
       if (e >>> 0 < (c[D >> 2] | 0) >>> 0) {
        c[F >> 2] = e + 1;
        e = d[e >> 0] | 0;
        k = 0;
       } else {
        e = Ea(b) | 0;
        k = 0;
       }
       e : while (1) {
        switch (e | 0) {
        case 46:
         {
          z = 74;
          break e;
         }
        case 48:
         break;
        default:
         {
          y = 0;
          l = 0;
          x = 0;
          h = 0;
          n = k;
          o = 0;
          w = 0;
          m = 1.0;
          k = 0;
          g = 0.0;
          break e;
         }
        }
        e = c[F >> 2] | 0;
        if (e >>> 0 < (c[D >> 2] | 0) >>> 0) {
         c[F >> 2] = e + 1;
         e = d[e >> 0] | 0;
         k = 1;
         continue;
        } else {
         e = Ea(b) | 0;
         k = 1;
         continue;
        }
       }
       if ((z | 0) == 74) {
        e = c[F >> 2] | 0;
        if (e >>> 0 < (c[D >> 2] | 0) >>> 0) {
         c[F >> 2] = e + 1;
         e = d[e >> 0] | 0;
        } else e = Ea(b) | 0;
        if ((e | 0) == 48) {
         k = 0;
         h = 0;
         do {
          e = c[F >> 2] | 0;
          if (e >>> 0 < (c[D >> 2] | 0) >>> 0) {
           c[F >> 2] = e + 1;
           e = d[e >> 0] | 0;
          } else e = Ea(b) | 0;
          k = fb(k | 0, h | 0, -1, -1) | 0;
          h = C;
         } while ((e | 0) == 48);
         y = 0;
         l = 0;
         x = k;
         n = 1;
         o = 1;
         w = 0;
         m = 1.0;
         k = 0;
         g = 0.0;
        } else {
         y = 0;
         l = 0;
         x = 0;
         h = 0;
         n = k;
         o = 1;
         w = 0;
         m = 1.0;
         k = 0;
         g = 0.0;
        }
       }
       while (1) {
        t = e + -48 | 0;
        p = e | 32;
        if (t >>> 0 < 10) z = 86; else {
         u = (e | 0) == 46;
         if (!(u | (p + -97 | 0) >>> 0 < 6)) {
          p = x;
          t = y;
          break;
         }
         if (u) if (!o) {
          u = l;
          h = y;
          t = y;
          o = 1;
          p = w;
          j = m;
         } else {
          p = x;
          t = y;
          e = 46;
          break;
         } else z = 86;
        }
        if ((z | 0) == 86) {
         z = 0;
         e = (e | 0) > 57 ? p + -87 | 0 : t;
         do if ((y | 0) < 0 | (y | 0) == 0 & l >>> 0 < 8) {
          p = w;
          j = m;
          k = e + (k << 4) | 0;
         } else {
          if ((y | 0) < 0 | (y | 0) == 0 & l >>> 0 < 14) {
           v = m * .0625;
           p = w;
           j = v;
           g = g + v * +(e | 0);
           break;
          }
          if ((w | 0) != 0 | (e | 0) == 0) {
           p = w;
           j = m;
          } else {
           p = 1;
           j = m;
           g = g + m * .5;
          }
         } while (0);
         l = fb(l | 0, y | 0, 1, 0) | 0;
         u = x;
         t = C;
         n = 1;
        }
        e = c[F >> 2] | 0;
        if (e >>> 0 < (c[D >> 2] | 0) >>> 0) {
         c[F >> 2] = e + 1;
         y = t;
         x = u;
         e = d[e >> 0] | 0;
         w = p;
         m = j;
         continue;
        } else {
         y = t;
         x = u;
         e = Ea(b) | 0;
         w = p;
         m = j;
         continue;
        }
       }
       if (!n) {
        e = (c[D >> 2] | 0) == 0;
        if (!e) c[F >> 2] = (c[F >> 2] | 0) + -1;
        if (!f) Ya(b, 0); else if (!e) {
         e = c[F >> 2] | 0;
         c[F >> 2] = e + -1;
         if (o | 0) c[F >> 2] = e + -2;
        }
        g = +(K | 0) * 0.0;
        break a;
       }
       n = (o | 0) == 0;
       o = n ? l : p;
       n = n ? t : h;
       if ((t | 0) < 0 | (t | 0) == 0 & l >>> 0 < 8) {
        h = t;
        do {
         k = k << 4;
         l = fb(l | 0, h | 0, 1, 0) | 0;
         h = C;
        } while ((h | 0) < 0 | (h | 0) == 0 & l >>> 0 < 8);
       }
       if ((e | 32 | 0) == 112) {
        h = Aa(b, f) | 0;
        e = C;
        if ((h | 0) == 0 & (e | 0) == -2147483648) {
         if (!f) {
          Ya(b, 0);
          g = 0.0;
          break a;
         }
         if (!(c[D >> 2] | 0)) {
          h = 0;
          e = 0;
         } else {
          c[F >> 2] = (c[F >> 2] | 0) + -1;
          h = 0;
          e = 0;
         }
        }
       } else if (!(c[D >> 2] | 0)) {
        h = 0;
        e = 0;
       } else {
        c[F >> 2] = (c[F >> 2] | 0) + -1;
        h = 0;
        e = 0;
       }
       I = ab(o | 0, n | 0, 2) | 0;
       I = fb(I | 0, C | 0, -32, -1) | 0;
       e = fb(I | 0, C | 0, h | 0, e | 0) | 0;
       h = C;
       if (!k) {
        g = +(K | 0) * 0.0;
        break a;
       }
       if ((h | 0) > 0 | (h | 0) == 0 & e >>> 0 > (0 - J | 0) >>> 0) {
        c[(ib() | 0) >> 2] = 34;
        g = +(K | 0) * 1797693134862315708145274.0e284 * 1797693134862315708145274.0e284;
        break a;
       }
       I = J + -106 | 0;
       H = ((I | 0) < 0) << 31 >> 31;
       if ((h | 0) < (H | 0) | (h | 0) == (H | 0) & e >>> 0 < I >>> 0) {
        c[(ib() | 0) >> 2] = 34;
        g = +(K | 0) * 2.2250738585072014e-308 * 2.2250738585072014e-308;
        break a;
       }
       if ((k | 0) > -1) {
        do {
         H = !(g >= .5);
         I = H & 1 | k << 1;
         k = I ^ 1;
         g = g + (H ? g : g + -1.0);
         e = fb(e | 0, h | 0, -1, -1) | 0;
         h = C;
        } while ((I | 0) > -1);
        l = e;
        m = g;
       } else {
        l = e;
        m = g;
       }
       e = db(32, 0, J | 0, ((J | 0) < 0) << 31 >> 31 | 0) | 0;
       e = fb(l | 0, h | 0, e | 0, C | 0) | 0;
       J = C;
       if (0 > (J | 0) | 0 == (J | 0) & L >>> 0 > e >>> 0) if ((e | 0) < 0) {
        e = 0;
        z = 127;
       } else z = 125; else {
        e = L;
        z = 125;
       }
       if ((z | 0) == 125) if ((e | 0) < 53) z = 127; else {
        h = e;
        j = +(K | 0);
        g = 0.0;
       }
       if ((z | 0) == 127) {
        g = +(K | 0);
        h = e;
        j = g;
        g = +ub(+Ja(1.0, 84 - e | 0), g);
       }
       L = (k & 1 | 0) == 0 & (m != 0.0 & (h | 0) < 32);
       g = j * (L ? 0.0 : m) + (g + j * +(((L & 1) + k | 0) >>> 0)) - g;
       if (!(g != 0.0)) c[(ib() | 0) >> 2] = 34;
       g = +vb(g, l);
       break a;
      } else e = h; while (0);
      G = J + L | 0;
      H = 0 - G | 0;
      k = 0;
      f : while (1) {
       switch (e | 0) {
       case 46:
        {
         z = 138;
         break f;
        }
       case 48:
        break;
       default:
        {
         h = 0;
         p = 0;
         o = 0;
         break f;
        }
       }
       e = c[F >> 2] | 0;
       if (e >>> 0 < (c[D >> 2] | 0) >>> 0) {
        c[F >> 2] = e + 1;
        e = d[e >> 0] | 0;
        k = 1;
        continue;
       } else {
        e = Ea(b) | 0;
        k = 1;
        continue;
       }
      }
      if ((z | 0) == 138) {
       e = c[F >> 2] | 0;
       if (e >>> 0 < (c[D >> 2] | 0) >>> 0) {
        c[F >> 2] = e + 1;
        e = d[e >> 0] | 0;
       } else e = Ea(b) | 0;
       if ((e | 0) == 48) {
        h = 0;
        e = 0;
        while (1) {
         h = fb(h | 0, e | 0, -1, -1) | 0;
         k = C;
         e = c[F >> 2] | 0;
         if (e >>> 0 < (c[D >> 2] | 0) >>> 0) {
          c[F >> 2] = e + 1;
          e = d[e >> 0] | 0;
         } else e = Ea(b) | 0;
         if ((e | 0) == 48) e = k; else {
          p = k;
          k = 1;
          o = 1;
          break;
         }
        }
       } else {
        h = 0;
        p = 0;
        o = 1;
       }
      }
      c[I >> 2] = 0;
      n = e + -48 | 0;
      l = (e | 0) == 46;
      g : do if (l | n >>> 0 < 10) {
       B = I + 496 | 0;
       y = 0;
       u = 0;
       w = l;
       A = p;
       t = k;
       z = o;
       k = 0;
       l = 0;
       o = 0;
       h : while (1) {
        do if (w) if (!z) {
         h = y;
         p = u;
         z = 1;
        } else {
         p = A;
         e = y;
         n = u;
         break h;
        } else {
         w = fb(y | 0, u | 0, 1, 0) | 0;
         u = C;
         x = (e | 0) != 48;
         if ((l | 0) >= 125) {
          if (!x) {
           p = A;
           y = w;
           break;
          }
          c[B >> 2] = c[B >> 2] | 1;
          p = A;
          y = w;
          break;
         }
         p = I + (l << 2) | 0;
         if (k) n = e + -48 + ((c[p >> 2] | 0) * 10 | 0) | 0;
         c[p >> 2] = n;
         k = k + 1 | 0;
         n = (k | 0) == 9;
         p = A;
         y = w;
         t = 1;
         k = n ? 0 : k;
         l = (n & 1) + l | 0;
         o = x ? w : o;
        } while (0);
        e = c[F >> 2] | 0;
        if (e >>> 0 < (c[D >> 2] | 0) >>> 0) {
         c[F >> 2] = e + 1;
         e = d[e >> 0] | 0;
        } else e = Ea(b) | 0;
        n = e + -48 | 0;
        w = (e | 0) == 46;
        if (!(w | n >>> 0 < 10)) {
         n = z;
         z = 161;
         break g;
        } else A = p;
       }
       t = (t | 0) != 0;
       z = 169;
      } else {
       y = 0;
       u = 0;
       t = k;
       n = o;
       k = 0;
       l = 0;
       o = 0;
       z = 161;
      } while (0);
      do if ((z | 0) == 161) {
       B = (n | 0) == 0;
       h = B ? y : h;
       p = B ? u : p;
       t = (t | 0) != 0;
       if (!((e | 32 | 0) == 101 & t)) if ((e | 0) > -1) {
        e = y;
        n = u;
        z = 169;
        break;
       } else {
        e = y;
        n = u;
        z = 171;
        break;
       }
       n = Aa(b, f) | 0;
       e = C;
       if ((n | 0) == 0 & (e | 0) == -2147483648) {
        if (!f) {
         Ya(b, 0);
         g = 0.0;
         break;
        }
        if (!(c[D >> 2] | 0)) {
         n = 0;
         e = 0;
        } else {
         c[F >> 2] = (c[F >> 2] | 0) + -1;
         n = 0;
         e = 0;
        }
       }
       h = fb(n | 0, e | 0, h | 0, p | 0) | 0;
       t = y;
       p = C;
       n = u;
       z = 173;
      } while (0);
      if ((z | 0) == 169) if (!(c[D >> 2] | 0)) z = 171; else {
       c[F >> 2] = (c[F >> 2] | 0) + -1;
       if (t) {
        t = e;
        z = 173;
       } else z = 172;
      }
      if ((z | 0) == 171) if (t) {
       t = e;
       z = 173;
      } else z = 172;
      do if ((z | 0) == 172) {
       c[(ib() | 0) >> 2] = 22;
       Ya(b, 0);
       g = 0.0;
      } else if ((z | 0) == 173) {
       e = c[I >> 2] | 0;
       if (!e) {
        g = +(K | 0) * 0.0;
        break;
       }
       if (((n | 0) < 0 | (n | 0) == 0 & t >>> 0 < 10) & ((h | 0) == (t | 0) & (p | 0) == (n | 0))) if (L >>> 0 > 30 | (e >>> L | 0) == 0) {
        g = +(K | 0) * +(e >>> 0);
        break;
       }
       b = (J | 0) / -2 | 0;
       F = ((b | 0) < 0) << 31 >> 31;
       if ((p | 0) > (F | 0) | (p | 0) == (F | 0) & h >>> 0 > b >>> 0) {
        c[(ib() | 0) >> 2] = 34;
        g = +(K | 0) * 1797693134862315708145274.0e284 * 1797693134862315708145274.0e284;
        break;
       }
       b = J + -106 | 0;
       F = ((b | 0) < 0) << 31 >> 31;
       if ((p | 0) < (F | 0) | (p | 0) == (F | 0) & h >>> 0 < b >>> 0) {
        c[(ib() | 0) >> 2] = 34;
        g = +(K | 0) * 2.2250738585072014e-308 * 2.2250738585072014e-308;
        break;
       }
       if (k) {
        if ((k | 0) < 9) {
         n = I + (l << 2) | 0;
         e = c[n >> 2] | 0;
         do {
          e = e * 10 | 0;
          k = k + 1 | 0;
         } while ((k | 0) != 9);
         c[n >> 2] = e;
        }
        l = l + 1 | 0;
       }
       if ((o | 0) < 9) if ((o | 0) <= (h | 0) & (h | 0) < 18) {
        if ((h | 0) == 9) {
         g = +(K | 0) * +((c[I >> 2] | 0) >>> 0);
         break;
        }
        if ((h | 0) < 9) {
         g = +(K | 0) * +((c[I >> 2] | 0) >>> 0) / +(c[81468 + (8 - h << 2) >> 2] | 0);
         break;
        }
        b = L + 27 + (R(h, -3) | 0) | 0;
        e = c[I >> 2] | 0;
        if ((b | 0) > 30 | (e >>> b | 0) == 0) {
         g = +(K | 0) * +(e >>> 0) * +(c[81468 + (h + -10 << 2) >> 2] | 0);
         break;
        }
       }
       e = (h | 0) % 9 | 0;
       if (!e) {
        k = 0;
        e = 0;
       } else {
        t = (h | 0) > -1 ? e : e + 9 | 0;
        n = c[81468 + (8 - t << 2) >> 2] | 0;
        if (!l) {
         k = 0;
         l = 0;
        } else {
         o = 1e9 / (n | 0) | 0;
         k = 0;
         e = 0;
         p = 0;
         do {
          D = I + (p << 2) | 0;
          F = c[D >> 2] | 0;
          b = ((F >>> 0) / (n >>> 0) | 0) + e | 0;
          c[D >> 2] = b;
          e = R((F >>> 0) % (n >>> 0) | 0, o) | 0;
          b = (p | 0) == (k | 0) & (b | 0) == 0;
          p = p + 1 | 0;
          h = b ? h + -9 | 0 : h;
          k = b ? p & 127 : k;
         } while ((p | 0) != (l | 0));
         if (e) {
          c[I + (l << 2) >> 2] = e;
          l = l + 1 | 0;
         }
        }
        e = 0;
        h = 9 - t + h | 0;
       }
       i : while (1) {
        u = (h | 0) < 18;
        w = (h | 0) == 18;
        x = I + (k << 2) | 0;
        do {
         if (!u) {
          if (!w) {
           y = l;
           break i;
          }
          if ((c[x >> 2] | 0) >>> 0 >= 9007199) {
           h = 18;
           y = l;
           break i;
          }
         }
         n = 0;
         o = l + 127 | 0;
         while (1) {
          t = o & 127;
          p = I + (t << 2) | 0;
          o = ab(c[p >> 2] | 0, 0, 29) | 0;
          o = fb(o | 0, C | 0, n | 0, 0) | 0;
          n = C;
          if (n >>> 0 > 0 | (n | 0) == 0 & o >>> 0 > 1e9) {
           b = kb(o | 0, n | 0, 1e9, 0) | 0;
           o = Za(o | 0, n | 0, 1e9, 0) | 0;
           n = b;
          } else n = 0;
          c[p >> 2] = o;
          b = (t | 0) == (k | 0);
          l = (t | 0) != (l + 127 & 127 | 0) | b ? l : (o | 0) == 0 ? t : l;
          if (b) break; else o = t + -1 | 0;
         }
         e = e + -29 | 0;
        } while ((n | 0) == 0);
        k = k + 127 & 127;
        if ((k | 0) == (l | 0)) {
         b = l + 127 & 127;
         l = I + ((l + 126 & 127) << 2) | 0;
         c[l >> 2] = c[l >> 2] | c[I + (b << 2) >> 2];
         l = b;
        }
        c[I + (k << 2) >> 2] = n;
        h = h + 9 | 0;
       }
       j : while (1) {
        l = y + 1 & 127;
        x = I + ((y + 127 & 127) << 2) | 0;
        while (1) {
         u = (h | 0) == 18;
         w = (h | 0) > 27 ? 9 : 1;
         t = u ^ 1;
         while (1) {
          o = k & 127;
          p = (o | 0) == (y | 0);
          do if (p) z = 219; else {
           n = c[I + (o << 2) >> 2] | 0;
           if (n >>> 0 < 9007199) {
            z = 219;
            break;
           }
           if (n >>> 0 > 9007199) break;
           n = k + 1 & 127;
           if ((n | 0) == (y | 0)) {
            z = 219;
            break;
           }
           n = c[I + (n << 2) >> 2] | 0;
           if (n >>> 0 < 254740991) {
            z = 219;
            break;
           }
           if (!(n >>> 0 > 254740991 | t)) {
            h = o;
            l = y;
            break j;
           }
          } while (0);
          if ((z | 0) == 219) {
           z = 0;
           if (u) {
            z = 220;
            break j;
           }
          }
          e = e + w | 0;
          if ((k | 0) == (y | 0)) k = y; else break;
         }
         t = (1 << w) + -1 | 0;
         u = 1e9 >>> w;
         o = k;
         n = 0;
         p = k;
         while (1) {
          F = I + (p << 2) | 0;
          b = c[F >> 2] | 0;
          k = (b >>> w) + n | 0;
          c[F >> 2] = k;
          n = R(b & t, u) | 0;
          k = (p | 0) == (o | 0) & (k | 0) == 0;
          p = p + 1 & 127;
          h = k ? h + -9 | 0 : h;
          k = k ? p : o;
          if ((p | 0) == (y | 0)) break; else o = k;
         }
         if (!n) continue;
         if ((l | 0) != (k | 0)) break;
         c[x >> 2] = c[x >> 2] | 1;
        }
        c[I + (y << 2) >> 2] = n;
        y = l;
       }
       if ((z | 0) == 220) if (p) {
        c[I + (l + -1 << 2) >> 2] = 0;
        h = y;
       } else {
        h = o;
        l = y;
       }
       g = +((c[I + (h << 2) >> 2] | 0) >>> 0);
       h = k + 1 & 127;
       if ((h | 0) == (l | 0)) {
        l = k + 2 & 127;
        c[I + (l + -1 << 2) >> 2] = 0;
       }
       v = +(K | 0);
       j = v * (g * 1.0e9 + +((c[I + (h << 2) >> 2] | 0) >>> 0));
       u = e + 53 | 0;
       p = u - J | 0;
       t = (p | 0) < (L | 0);
       h = t & 1;
       o = t ? ((p | 0) < 0 ? 0 : p) : L;
       if ((o | 0) < 53) {
        N = +ub(+Ja(1.0, 105 - o | 0), j);
        m = +xb(j, +Ja(1.0, 53 - o | 0));
        q = N;
        g = m;
        m = N + (j - m);
       } else {
        q = 0.0;
        g = 0.0;
        m = j;
       }
       n = k + 2 & 127;
       do if ((n | 0) == (l | 0)) j = g; else {
        n = c[I + (n << 2) >> 2] | 0;
        do if (n >>> 0 < 5e8) {
         if (!n) if ((k + 3 & 127 | 0) == (l | 0)) break;
         g = v * .25 + g;
        } else {
         if (n >>> 0 > 5e8) {
          g = v * .75 + g;
          break;
         }
         if ((k + 3 & 127 | 0) == (l | 0)) {
          g = v * .5 + g;
          break;
         } else {
          g = v * .75 + g;
          break;
         }
        } while (0);
        if ((53 - o | 0) <= 1) {
         j = g;
         break;
        }
        if (+xb(g, 1.0) != 0.0) {
         j = g;
         break;
        }
        j = g + 1.0;
       } while (0);
       g = m + j - q;
       do if ((u & 2147483647 | 0) > (-2 - G | 0)) {
        if (+E(+g) >= 9007199254740992.0) {
         h = t & (o | 0) == (p | 0) ? 0 : h;
         e = e + 1 | 0;
         g = g * .5;
        }
        if ((e + 50 | 0) <= (H | 0)) if (!(j != 0.0 & (h | 0) != 0)) break;
        c[(ib() | 0) >> 2] = 34;
       } while (0);
       g = +vb(g, e);
      } while (0);
      break a;
     }
    default:
     {
      if (c[D >> 2] | 0) c[F >> 2] = (c[F >> 2] | 0) + -1;
      c[(ib() | 0) >> 2] = 22;
      Ya(b, 0);
      g = 0.0;
      break a;
     }
    }
   }
  } while (0);
  if ((z | 0) == 23) {
   h = (c[D >> 2] | 0) == 0;
   if (!h) c[F >> 2] = (c[F >> 2] | 0) + -1;
   if ((f | 0) != 0 & e >>> 0 > 3) do {
    if (!h) c[F >> 2] = (c[F >> 2] | 0) + -1;
    e = e + -1 | 0;
   } while (e >>> 0 > 3);
  }
  g = +(K | 0) * s;
 } while (0);
 i = M;
 return +g;
}

function sa(e, f, j) {
 e = e | 0;
 f = f | 0;
 j = j | 0;
 var k = 0, l = 0, m = 0, n = 0, o = 0, p = 0.0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0;
 P = i;
 i = i + 304 | 0;
 H = P + 16 | 0;
 J = P + 8 | 0;
 I = P + 33 | 0;
 K = P;
 y = P + 32 | 0;
 if ((c[e + 76 >> 2] | 0) > -1) O = Db(e) | 0; else O = 0;
 k = a[f >> 0] | 0;
 a : do if (!(k << 24 >> 24)) k = 0; else {
  L = e + 4 | 0;
  M = e + 100 | 0;
  G = e + 108 | 0;
  z = e + 8 | 0;
  A = I + 10 | 0;
  B = I + 33 | 0;
  D = J + 4 | 0;
  E = I + 46 | 0;
  F = I + 94 | 0;
  m = k;
  k = 0;
  n = f;
  s = 0;
  l = 0;
  f = 0;
  b : while (1) {
   c : do if (!(rb(m & 255) | 0)) {
    m = (a[n >> 0] | 0) == 37;
    d : do if (m) {
     q = n + 1 | 0;
     o = a[q >> 0] | 0;
     e : do switch (o << 24 >> 24) {
     case 37:
      break d;
     case 42:
      {
       x = 0;
       o = n + 2 | 0;
       break;
      }
     default:
      {
       o = (o & 255) + -48 | 0;
       if (o >>> 0 < 10) if ((a[n + 2 >> 0] | 0) == 36) {
        c[H >> 2] = c[j >> 2];
        while (1) {
         x = (c[H >> 2] | 0) + (4 - 1) & ~(4 - 1);
         m = c[x >> 2] | 0;
         c[H >> 2] = x + 4;
         if (o >>> 0 > 1) o = o + -1 | 0; else break;
        }
        x = m;
        o = n + 3 | 0;
        break e;
       }
       o = (c[j >> 2] | 0) + (4 - 1) & ~(4 - 1);
       x = c[o >> 2] | 0;
       c[j >> 2] = o + 4;
       o = q;
      }
     } while (0);
     m = a[o >> 0] | 0;
     n = m & 255;
     if ((n + -48 | 0) >>> 0 < 10) {
      m = 0;
      while (1) {
       q = (m * 10 | 0) + -48 + n | 0;
       o = o + 1 | 0;
       m = a[o >> 0] | 0;
       n = m & 255;
       if ((n + -48 | 0) >>> 0 >= 10) break; else m = q;
      }
     } else q = 0;
     if (m << 24 >> 24 == 109) {
      o = o + 1 | 0;
      r = a[o >> 0] | 0;
      m = (x | 0) != 0 & 1;
      l = 0;
      f = 0;
     } else {
      r = m;
      m = 0;
     }
     n = o + 1 | 0;
     switch (r & 255 | 0) {
     case 104:
      {
       w = (a[n >> 0] | 0) == 104;
       n = w ? o + 2 | 0 : n;
       o = w ? -2 : -1;
       break;
      }
     case 108:
      {
       w = (a[n >> 0] | 0) == 108;
       n = w ? o + 2 | 0 : n;
       o = w ? 3 : 1;
       break;
      }
     case 106:
      {
       o = 3;
       break;
      }
     case 116:
     case 122:
      {
       o = 1;
       break;
      }
     case 76:
      {
       o = 2;
       break;
      }
     case 110:
     case 112:
     case 67:
     case 83:
     case 91:
     case 99:
     case 115:
     case 88:
     case 71:
     case 70:
     case 69:
     case 65:
     case 103:
     case 102:
     case 101:
     case 97:
     case 120:
     case 117:
     case 111:
     case 105:
     case 100:
      {
       n = o;
       o = 0;
       break;
      }
     default:
      {
       N = 154;
       break b;
      }
     }
     r = d[n >> 0] | 0;
     t = (r & 47 | 0) == 3;
     r = t ? r | 32 : r;
     t = t ? 1 : o;
     switch (r | 0) {
     case 99:
      {
       w = s;
       v = (q | 0) < 1 ? 1 : q;
       break;
      }
     case 91:
      {
       w = s;
       v = q;
       break;
      }
     case 110:
      {
       if (!x) {
        o = s;
        break c;
       }
       switch (t | 0) {
       case -2:
        {
         a[x >> 0] = s;
         o = s;
         break c;
        }
       case -1:
        {
         b[x >> 1] = s;
         o = s;
         break c;
        }
       case 0:
        {
         c[x >> 2] = s;
         o = s;
         break c;
        }
       case 1:
        {
         c[x >> 2] = s;
         o = s;
         break c;
        }
       case 3:
        {
         o = x;
         c[o >> 2] = s;
         c[o + 4 >> 2] = ((s | 0) < 0) << 31 >> 31;
         o = s;
         break c;
        }
       default:
        {
         o = s;
         break c;
        }
       }
      }
     default:
      {
       Ya(e, 0);
       do {
        o = c[L >> 2] | 0;
        if (o >>> 0 < (c[M >> 2] | 0) >>> 0) {
         c[L >> 2] = o + 1;
         o = d[o >> 0] | 0;
        } else o = Ea(e) | 0;
       } while ((rb(o) | 0) != 0);
       if (!(c[M >> 2] | 0)) o = c[L >> 2] | 0; else {
        o = (c[L >> 2] | 0) + -1 | 0;
        c[L >> 2] = o;
       }
       w = (c[G >> 2] | 0) + s + o - (c[z >> 2] | 0) | 0;
       v = q;
      }
     }
     Ya(e, v);
     o = c[L >> 2] | 0;
     q = c[M >> 2] | 0;
     if (o >>> 0 < q >>> 0) c[L >> 2] = o + 1; else {
      if ((Ea(e) | 0) < 0) {
       N = 154;
       break b;
      }
      q = c[M >> 2] | 0;
     }
     if (q | 0) c[L >> 2] = (c[L >> 2] | 0) + -1;
     f : do switch (r | 0) {
     case 91:
     case 99:
     case 115:
      {
       u = (r | 0) == 99;
       g : do if ((r | 16 | 0) == 115) {
        Qa(I | 0, -1, 257) | 0;
        a[I >> 0] = 0;
        if ((r | 0) == 115) {
         a[B >> 0] = 0;
         a[A >> 0] = 0;
         a[A + 1 >> 0] = 0;
         a[A + 2 >> 0] = 0;
         a[A + 3 >> 0] = 0;
         a[A + 4 >> 0] = 0;
        }
       } else {
        r = n + 1 | 0;
        s = (a[r >> 0] | 0) == 94;
        o = s & 1;
        n = s ? n + 2 | 0 : r;
        Qa(I | 0, s & 1 | 0, 257) | 0;
        a[I >> 0] = 0;
        switch (a[n >> 0] | 0) {
        case 45:
         {
          s = (o ^ 1) & 255;
          a[E >> 0] = s;
          n = n + 1 | 0;
          break;
         }
        case 93:
         {
          s = (o ^ 1) & 255;
          a[F >> 0] = s;
          n = n + 1 | 0;
          break;
         }
        default:
         s = (o ^ 1) & 255;
        }
        while (1) {
         o = a[n >> 0] | 0;
         h : do switch (o << 24 >> 24) {
         case 0:
          {
           N = 154;
           break b;
          }
         case 93:
          break g;
         case 45:
          {
           r = n + 1 | 0;
           o = a[r >> 0] | 0;
           switch (o << 24 >> 24) {
           case 93:
           case 0:
            {
             o = 45;
             break h;
            }
           default:
            {}
           }
           n = a[n + -1 >> 0] | 0;
           if ((n & 255) < (o & 255)) {
            n = n & 255;
            do {
             n = n + 1 | 0;
             a[I + n >> 0] = s;
             o = a[r >> 0] | 0;
            } while ((n | 0) < (o & 255 | 0));
            n = r;
           } else n = r;
           break;
          }
         default:
          {}
         } while (0);
         a[I + ((o & 255) + 1) >> 0] = s;
         n = n + 1 | 0;
        }
       } while (0);
       r = u ? v + 1 | 0 : 31;
       s = (t | 0) == 1;
       t = (m | 0) != 0;
       i : do if (s) {
        if (t) {
         f = qa(r << 2) | 0;
         if (!f) {
          l = 0;
          N = 154;
          break b;
         }
        } else f = x;
        c[J >> 2] = 0;
        c[D >> 2] = 0;
        l = 0;
        j : while (1) {
         q = (f | 0) == 0;
         do {
          k : while (1) {
           o = c[L >> 2] | 0;
           if (o >>> 0 < (c[M >> 2] | 0) >>> 0) {
            c[L >> 2] = o + 1;
            o = d[o >> 0] | 0;
           } else o = Ea(e) | 0;
           if (!(a[I + (o + 1) >> 0] | 0)) break j;
           a[y >> 0] = o;
           switch (Ca(K, y, 1, J) | 0) {
           case -1:
            {
             l = 0;
             N = 154;
             break b;
            }
           case -2:
            break;
           default:
            break k;
           }
          }
          if (!q) {
           c[f + (l << 2) >> 2] = c[K >> 2];
           l = l + 1 | 0;
          }
         } while (!(t & (l | 0) == (r | 0)));
         l = r << 1 | 1;
         o = Na(f, l << 2) | 0;
         if (!o) {
          l = 0;
          N = 154;
          break b;
         } else {
          q = r;
          r = l;
          f = o;
          l = q;
         }
        }
        if (!(lb(J) | 0)) {
         l = 0;
         N = 154;
         break b;
        } else {
         q = l;
         l = 0;
        }
       } else {
        if (t) {
         l = qa(r) | 0;
         if (!l) {
          l = 0;
          f = 0;
          N = 154;
          break b;
         } else o = 0;
         while (1) {
          do {
           f = c[L >> 2] | 0;
           if (f >>> 0 < (c[M >> 2] | 0) >>> 0) {
            c[L >> 2] = f + 1;
            f = d[f >> 0] | 0;
           } else f = Ea(e) | 0;
           if (!(a[I + (f + 1) >> 0] | 0)) {
            q = o;
            f = 0;
            break i;
           }
           a[l + o >> 0] = f;
           o = o + 1 | 0;
          } while ((o | 0) != (r | 0));
          f = r << 1 | 1;
          o = Na(l, f) | 0;
          if (!o) {
           f = 0;
           N = 154;
           break b;
          } else {
           q = r;
           r = f;
           l = o;
           o = q;
          }
         }
        }
        if (!x) {
         l = q;
         while (1) {
          f = c[L >> 2] | 0;
          if (f >>> 0 < l >>> 0) {
           c[L >> 2] = f + 1;
           f = d[f >> 0] | 0;
          } else f = Ea(e) | 0;
          if (!(a[I + (f + 1) >> 0] | 0)) {
           q = 0;
           l = 0;
           f = 0;
           break i;
          }
          l = c[M >> 2] | 0;
         }
        } else {
         l = 0;
         while (1) {
          f = c[L >> 2] | 0;
          if (f >>> 0 < q >>> 0) {
           c[L >> 2] = f + 1;
           f = d[f >> 0] | 0;
          } else f = Ea(e) | 0;
          if (!(a[I + (f + 1) >> 0] | 0)) {
           q = l;
           l = x;
           f = 0;
           break i;
          }
          a[x + l >> 0] = f;
          q = c[M >> 2] | 0;
          l = l + 1 | 0;
         }
        }
       } while (0);
       if (!(c[M >> 2] | 0)) o = c[L >> 2] | 0; else {
        o = (c[L >> 2] | 0) + -1 | 0;
        c[L >> 2] = o;
       }
       o = o - (c[z >> 2] | 0) + (c[G >> 2] | 0) | 0;
       if (!o) break b;
       if (!((o | 0) == (v | 0) | u ^ 1)) break b;
       do if (t) if (s) {
        c[x >> 2] = f;
        break;
       } else {
        c[x >> 2] = l;
        break;
       } while (0);
       if (!u) {
        if (f | 0) c[f + (q << 2) >> 2] = 0;
        if (!l) {
         l = 0;
         break f;
        }
        a[l + q >> 0] = 0;
       }
       break;
      }
     case 120:
     case 88:
     case 112:
      {
       o = 16;
       N = 136;
       break;
      }
     case 111:
      {
       o = 8;
       N = 136;
       break;
      }
     case 117:
     case 100:
      {
       o = 10;
       N = 136;
       break;
      }
     case 105:
      {
       o = 0;
       N = 136;
       break;
      }
     case 71:
     case 103:
     case 70:
     case 102:
     case 69:
     case 101:
     case 65:
     case 97:
      {
       p = +ra(e, t, 0);
       if ((c[G >> 2] | 0) == ((c[z >> 2] | 0) - (c[L >> 2] | 0) | 0)) break b;
       if (x) switch (t | 0) {
       case 0:
        {
         g[x >> 2] = p;
         break f;
        }
       case 1:
        {
         h[x >> 3] = p;
         break f;
        }
       case 2:
        {
         h[x >> 3] = p;
         break f;
        }
       default:
        break f;
       }
       break;
      }
     default:
      {}
     } while (0);
     l : do if ((N | 0) == 136) {
      N = 0;
      o = va(e, o, 0, -1, -1) | 0;
      if ((c[G >> 2] | 0) == ((c[z >> 2] | 0) - (c[L >> 2] | 0) | 0)) break b;
      if ((x | 0) != 0 & (r | 0) == 112) {
       c[x >> 2] = o;
       break;
      }
      if (x) switch (t | 0) {
      case -2:
       {
        a[x >> 0] = o;
        break l;
       }
      case -1:
       {
        b[x >> 1] = o;
        break l;
       }
      case 0:
       {
        c[x >> 2] = o;
        break l;
       }
      case 1:
       {
        c[x >> 2] = o;
        break l;
       }
      case 3:
       {
        v = x;
        c[v >> 2] = o;
        c[v + 4 >> 2] = C;
        break l;
       }
      default:
       break l;
      }
     } while (0);
     k = ((x | 0) != 0 & 1) + k | 0;
     o = (c[G >> 2] | 0) + w + (c[L >> 2] | 0) - (c[z >> 2] | 0) | 0;
     break c;
    } while (0);
    n = n + (m & 1) | 0;
    Ya(e, 0);
    m = c[L >> 2] | 0;
    if (m >>> 0 < (c[M >> 2] | 0) >>> 0) {
     c[L >> 2] = m + 1;
     m = d[m >> 0] | 0;
    } else m = Ea(e) | 0;
    if ((m | 0) != (d[n >> 0] | 0)) {
     N = 22;
     break b;
    }
    o = s + 1 | 0;
   } else {
    while (1) {
     m = n + 1 | 0;
     if (!(rb(d[m >> 0] | 0) | 0)) break; else n = m;
    }
    Ya(e, 0);
    do {
     m = c[L >> 2] | 0;
     if (m >>> 0 < (c[M >> 2] | 0) >>> 0) {
      c[L >> 2] = m + 1;
      m = d[m >> 0] | 0;
     } else m = Ea(e) | 0;
    } while ((rb(m) | 0) != 0);
    if (!(c[M >> 2] | 0)) m = c[L >> 2] | 0; else {
     m = (c[L >> 2] | 0) + -1 | 0;
     c[L >> 2] = m;
    }
    o = (c[G >> 2] | 0) + s + m - (c[z >> 2] | 0) | 0;
   } while (0);
   n = n + 1 | 0;
   m = a[n >> 0] | 0;
   if (!(m << 24 >> 24)) break a; else s = o;
  }
  if ((N | 0) == 22) {
   if (c[M >> 2] | 0) c[L >> 2] = (c[L >> 2] | 0) + -1;
   if ((k | 0) != 0 | (m | 0) > -1) break; else {
    k = 0;
    N = 155;
   }
  } else if ((N | 0) == 154) if (!k) {
   k = m;
   N = 155;
  }
  if ((N | 0) == 155) {
   m = k;
   k = -1;
  }
  if (m) {
   ta(l);
   ta(f);
  }
 } while (0);
 if (O | 0) Cb(e);
 i = P;
 return k | 0;
}

function ta(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 if (!a) return;
 d = a + -8 | 0;
 h = c[20966] | 0;
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
  if ((k | 0) == (c[20967] | 0)) {
   a = m + 4 | 0;
   b = c[a >> 2] | 0;
   if ((b & 3 | 0) != 3) {
    q = k;
    g = j;
    break;
   }
   c[20964] = j;
   c[a >> 2] = b & -2;
   c[k + 4 >> 2] = j | 1;
   c[k + j >> 2] = j;
   return;
  }
  e = a >>> 3;
  if (a >>> 0 < 256) {
   b = c[k + 8 >> 2] | 0;
   d = c[k + 12 >> 2] | 0;
   a = 83888 + (e << 1 << 2) | 0;
   if ((b | 0) != (a | 0)) {
    if (b >>> 0 < h >>> 0) _();
    if ((c[b + 12 >> 2] | 0) != (k | 0)) _();
   }
   if ((d | 0) == (b | 0)) {
    c[20962] = c[20962] & ~(1 << e);
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
   b = 84152 + (a << 2) | 0;
   if ((k | 0) == (c[b >> 2] | 0)) {
    c[b >> 2] = i;
    if (!i) {
     c[20963] = c[20963] & ~(1 << a);
     q = k;
     g = j;
     break;
    }
   } else {
    if (f >>> 0 < (c[20966] | 0) >>> 0) _();
    a = f + 16 | 0;
    if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = i; else c[f + 20 >> 2] = i;
    if (!i) {
     q = k;
     g = j;
     break;
    }
   }
   d = c[20966] | 0;
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
   } else if (a >>> 0 < (c[20966] | 0) >>> 0) _(); else {
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
  if ((m | 0) == (c[20968] | 0)) {
   p = (c[20965] | 0) + g | 0;
   c[20965] = p;
   c[20968] = q;
   c[q + 4 >> 2] = p | 1;
   if ((q | 0) != (c[20967] | 0)) return;
   c[20967] = 0;
   c[20964] = 0;
   return;
  }
  if ((m | 0) == (c[20967] | 0)) {
   p = (c[20964] | 0) + g | 0;
   c[20964] = p;
   c[20967] = q;
   c[q + 4 >> 2] = p | 1;
   c[q + p >> 2] = p;
   return;
  }
  g = (b & -8) + g | 0;
  e = b >>> 3;
  do if (b >>> 0 < 256) {
   b = c[m + 8 >> 2] | 0;
   d = c[m + 12 >> 2] | 0;
   a = 83888 + (e << 1 << 2) | 0;
   if ((b | 0) != (a | 0)) {
    if (b >>> 0 < (c[20966] | 0) >>> 0) _();
    if ((c[b + 12 >> 2] | 0) != (m | 0)) _();
   }
   if ((d | 0) == (b | 0)) {
    c[20962] = c[20962] & ~(1 << e);
    break;
   }
   if ((d | 0) == (a | 0)) l = d + 8 | 0; else {
    if (d >>> 0 < (c[20966] | 0) >>> 0) _();
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
    if (b >>> 0 < (c[20966] | 0) >>> 0) _(); else {
     c[b >> 2] = 0;
     n = a;
     break;
    }
   } else {
    b = c[m + 8 >> 2] | 0;
    if (b >>> 0 < (c[20966] | 0) >>> 0) _();
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
    b = 84152 + (a << 2) | 0;
    if ((m | 0) == (c[b >> 2] | 0)) {
     c[b >> 2] = n;
     if (!n) {
      c[20963] = c[20963] & ~(1 << a);
      break;
     }
    } else {
     if (f >>> 0 < (c[20966] | 0) >>> 0) _();
     a = f + 16 | 0;
     if ((c[a >> 2] | 0) == (m | 0)) c[a >> 2] = n; else c[f + 20 >> 2] = n;
     if (!n) break;
    }
    d = c[20966] | 0;
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
    if (a | 0) if (a >>> 0 < (c[20966] | 0) >>> 0) _(); else {
     c[n + 20 >> 2] = a;
     c[a + 24 >> 2] = n;
     break;
    }
   }
  } while (0);
  c[q + 4 >> 2] = g | 1;
  c[q + g >> 2] = g;
  if ((q | 0) == (c[20967] | 0)) {
   c[20964] = g;
   return;
  }
 } else {
  c[a >> 2] = b & -2;
  c[q + 4 >> 2] = g | 1;
  c[q + g >> 2] = g;
 }
 a = g >>> 3;
 if (g >>> 0 < 256) {
  d = 83888 + (a << 1 << 2) | 0;
  b = c[20962] | 0;
  a = 1 << a;
  if (!(b & a)) {
   c[20962] = b | a;
   o = d + 8 | 0;
   p = d;
  } else {
   a = d + 8 | 0;
   b = c[a >> 2] | 0;
   if (b >>> 0 < (c[20966] | 0) >>> 0) _(); else {
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
 e = 84152 + (d << 2) | 0;
 c[q + 28 >> 2] = d;
 c[q + 20 >> 2] = 0;
 c[q + 16 >> 2] = 0;
 a = c[20963] | 0;
 b = 1 << d;
 do if (!(a & b)) {
  c[20963] = a | b;
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
  if ((e | 0) == 127) if (b >>> 0 < (c[20966] | 0) >>> 0) _(); else {
   c[b >> 2] = q;
   c[q + 24 >> 2] = a;
   c[q + 12 >> 2] = q;
   c[q + 8 >> 2] = q;
   break;
  } else if ((e | 0) == 130) {
   a = d + 8 | 0;
   b = c[a >> 2] | 0;
   p = c[20966] | 0;
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
 q = (c[20970] | 0) + -1 | 0;
 c[20970] = q;
 if (!q) a = 84304; else return;
 while (1) {
  a = c[a >> 2] | 0;
  if (!a) break; else a = a + 8 | 0;
 }
 c[20970] = -1;
 return;
}

function ua(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 o = a + b | 0;
 d = c[a + 4 >> 2] | 0;
 do if (!(d & 1)) {
  f = c[a >> 2] | 0;
  if (!(d & 3)) return;
  l = a + (0 - f) | 0;
  k = f + b | 0;
  i = c[20966] | 0;
  if (l >>> 0 < i >>> 0) _();
  if ((l | 0) == (c[20967] | 0)) {
   a = o + 4 | 0;
   d = c[a >> 2] | 0;
   if ((d & 3 | 0) != 3) {
    r = l;
    g = k;
    break;
   }
   c[20964] = k;
   c[a >> 2] = d & -2;
   c[l + 4 >> 2] = k | 1;
   c[l + k >> 2] = k;
   return;
  }
  e = f >>> 3;
  if (f >>> 0 < 256) {
   a = c[l + 8 >> 2] | 0;
   b = c[l + 12 >> 2] | 0;
   d = 83888 + (e << 1 << 2) | 0;
   if ((a | 0) != (d | 0)) {
    if (a >>> 0 < i >>> 0) _();
    if ((c[a + 12 >> 2] | 0) != (l | 0)) _();
   }
   if ((b | 0) == (a | 0)) {
    c[20962] = c[20962] & ~(1 << e);
    r = l;
    g = k;
    break;
   }
   if ((b | 0) == (d | 0)) h = b + 8 | 0; else {
    if (b >>> 0 < i >>> 0) _();
    d = b + 8 | 0;
    if ((c[d >> 2] | 0) == (l | 0)) h = d; else _();
   }
   c[a + 12 >> 2] = b;
   c[h >> 2] = a;
   r = l;
   g = k;
   break;
  }
  f = c[l + 24 >> 2] | 0;
  b = c[l + 12 >> 2] | 0;
  do if ((b | 0) == (l | 0)) {
   a = l + 16 | 0;
   b = a + 4 | 0;
   d = c[b >> 2] | 0;
   if (!d) {
    d = c[a >> 2] | 0;
    if (!d) {
     j = 0;
     break;
    }
   } else a = b;
   while (1) {
    b = d + 20 | 0;
    e = c[b >> 2] | 0;
    if (e | 0) {
     d = e;
     a = b;
     continue;
    }
    b = d + 16 | 0;
    e = c[b >> 2] | 0;
    if (!e) break; else {
     d = e;
     a = b;
    }
   }
   if (a >>> 0 < i >>> 0) _(); else {
    c[a >> 2] = 0;
    j = d;
    break;
   }
  } else {
   e = c[l + 8 >> 2] | 0;
   if (e >>> 0 < i >>> 0) _();
   d = e + 12 | 0;
   if ((c[d >> 2] | 0) != (l | 0)) _();
   a = b + 8 | 0;
   if ((c[a >> 2] | 0) == (l | 0)) {
    c[d >> 2] = b;
    c[a >> 2] = e;
    j = b;
    break;
   } else _();
  } while (0);
  if (!f) {
   r = l;
   g = k;
  } else {
   d = c[l + 28 >> 2] | 0;
   a = 84152 + (d << 2) | 0;
   if ((l | 0) == (c[a >> 2] | 0)) {
    c[a >> 2] = j;
    if (!j) {
     c[20963] = c[20963] & ~(1 << d);
     r = l;
     g = k;
     break;
    }
   } else {
    if (f >>> 0 < (c[20966] | 0) >>> 0) _();
    d = f + 16 | 0;
    if ((c[d >> 2] | 0) == (l | 0)) c[d >> 2] = j; else c[f + 20 >> 2] = j;
    if (!j) {
     r = l;
     g = k;
     break;
    }
   }
   b = c[20966] | 0;
   if (j >>> 0 < b >>> 0) _();
   c[j + 24 >> 2] = f;
   d = l + 16 | 0;
   a = c[d >> 2] | 0;
   do if (a | 0) if (a >>> 0 < b >>> 0) _(); else {
    c[j + 16 >> 2] = a;
    c[a + 24 >> 2] = j;
    break;
   } while (0);
   d = c[d + 4 >> 2] | 0;
   if (!d) {
    r = l;
    g = k;
   } else if (d >>> 0 < (c[20966] | 0) >>> 0) _(); else {
    c[j + 20 >> 2] = d;
    c[d + 24 >> 2] = j;
    r = l;
    g = k;
    break;
   }
  }
 } else {
  r = a;
  g = b;
 } while (0);
 h = c[20966] | 0;
 if (o >>> 0 < h >>> 0) _();
 d = o + 4 | 0;
 a = c[d >> 2] | 0;
 if (!(a & 2)) {
  if ((o | 0) == (c[20968] | 0)) {
   q = (c[20965] | 0) + g | 0;
   c[20965] = q;
   c[20968] = r;
   c[r + 4 >> 2] = q | 1;
   if ((r | 0) != (c[20967] | 0)) return;
   c[20967] = 0;
   c[20964] = 0;
   return;
  }
  if ((o | 0) == (c[20967] | 0)) {
   q = (c[20964] | 0) + g | 0;
   c[20964] = q;
   c[20967] = r;
   c[r + 4 >> 2] = q | 1;
   c[r + q >> 2] = q;
   return;
  }
  g = (a & -8) + g | 0;
  e = a >>> 3;
  do if (a >>> 0 < 256) {
   a = c[o + 8 >> 2] | 0;
   b = c[o + 12 >> 2] | 0;
   d = 83888 + (e << 1 << 2) | 0;
   if ((a | 0) != (d | 0)) {
    if (a >>> 0 < h >>> 0) _();
    if ((c[a + 12 >> 2] | 0) != (o | 0)) _();
   }
   if ((b | 0) == (a | 0)) {
    c[20962] = c[20962] & ~(1 << e);
    break;
   }
   if ((b | 0) == (d | 0)) m = b + 8 | 0; else {
    if (b >>> 0 < h >>> 0) _();
    d = b + 8 | 0;
    if ((c[d >> 2] | 0) == (o | 0)) m = d; else _();
   }
   c[a + 12 >> 2] = b;
   c[m >> 2] = a;
  } else {
   f = c[o + 24 >> 2] | 0;
   b = c[o + 12 >> 2] | 0;
   do if ((b | 0) == (o | 0)) {
    a = o + 16 | 0;
    b = a + 4 | 0;
    d = c[b >> 2] | 0;
    if (!d) {
     d = c[a >> 2] | 0;
     if (!d) {
      n = 0;
      break;
     }
    } else a = b;
    while (1) {
     b = d + 20 | 0;
     e = c[b >> 2] | 0;
     if (e | 0) {
      d = e;
      a = b;
      continue;
     }
     b = d + 16 | 0;
     e = c[b >> 2] | 0;
     if (!e) break; else {
      d = e;
      a = b;
     }
    }
    if (a >>> 0 < h >>> 0) _(); else {
     c[a >> 2] = 0;
     n = d;
     break;
    }
   } else {
    e = c[o + 8 >> 2] | 0;
    if (e >>> 0 < h >>> 0) _();
    d = e + 12 | 0;
    if ((c[d >> 2] | 0) != (o | 0)) _();
    a = b + 8 | 0;
    if ((c[a >> 2] | 0) == (o | 0)) {
     c[d >> 2] = b;
     c[a >> 2] = e;
     n = b;
     break;
    } else _();
   } while (0);
   if (f | 0) {
    d = c[o + 28 >> 2] | 0;
    a = 84152 + (d << 2) | 0;
    if ((o | 0) == (c[a >> 2] | 0)) {
     c[a >> 2] = n;
     if (!n) {
      c[20963] = c[20963] & ~(1 << d);
      break;
     }
    } else {
     if (f >>> 0 < (c[20966] | 0) >>> 0) _();
     d = f + 16 | 0;
     if ((c[d >> 2] | 0) == (o | 0)) c[d >> 2] = n; else c[f + 20 >> 2] = n;
     if (!n) break;
    }
    b = c[20966] | 0;
    if (n >>> 0 < b >>> 0) _();
    c[n + 24 >> 2] = f;
    d = o + 16 | 0;
    a = c[d >> 2] | 0;
    do if (a | 0) if (a >>> 0 < b >>> 0) _(); else {
     c[n + 16 >> 2] = a;
     c[a + 24 >> 2] = n;
     break;
    } while (0);
    d = c[d + 4 >> 2] | 0;
    if (d | 0) if (d >>> 0 < (c[20966] | 0) >>> 0) _(); else {
     c[n + 20 >> 2] = d;
     c[d + 24 >> 2] = n;
     break;
    }
   }
  } while (0);
  c[r + 4 >> 2] = g | 1;
  c[r + g >> 2] = g;
  if ((r | 0) == (c[20967] | 0)) {
   c[20964] = g;
   return;
  }
 } else {
  c[d >> 2] = a & -2;
  c[r + 4 >> 2] = g | 1;
  c[r + g >> 2] = g;
 }
 d = g >>> 3;
 if (g >>> 0 < 256) {
  b = 83888 + (d << 1 << 2) | 0;
  a = c[20962] | 0;
  d = 1 << d;
  if (!(a & d)) {
   c[20962] = a | d;
   p = b + 8 | 0;
   q = b;
  } else {
   d = b + 8 | 0;
   a = c[d >> 2] | 0;
   if (a >>> 0 < (c[20966] | 0) >>> 0) _(); else {
    p = d;
    q = a;
   }
  }
  c[p >> 2] = r;
  c[q + 12 >> 2] = r;
  c[r + 8 >> 2] = q;
  c[r + 12 >> 2] = b;
  return;
 }
 d = g >>> 8;
 if (!d) b = 0; else if (g >>> 0 > 16777215) b = 31; else {
  p = (d + 1048320 | 0) >>> 16 & 8;
  q = d << p;
  o = (q + 520192 | 0) >>> 16 & 4;
  q = q << o;
  b = (q + 245760 | 0) >>> 16 & 2;
  b = 14 - (o | p | b) + (q << b >>> 15) | 0;
  b = g >>> (b + 7 | 0) & 1 | b << 1;
 }
 e = 84152 + (b << 2) | 0;
 c[r + 28 >> 2] = b;
 c[r + 20 >> 2] = 0;
 c[r + 16 >> 2] = 0;
 d = c[20963] | 0;
 a = 1 << b;
 if (!(d & a)) {
  c[20963] = d | a;
  c[e >> 2] = r;
  c[r + 24 >> 2] = e;
  c[r + 12 >> 2] = r;
  c[r + 8 >> 2] = r;
  return;
 }
 f = g << ((b | 0) == 31 ? 0 : 25 - (b >>> 1) | 0);
 d = c[e >> 2] | 0;
 while (1) {
  if ((c[d + 4 >> 2] & -8 | 0) == (g | 0)) {
   b = d;
   e = 127;
   break;
  }
  a = d + 16 + (f >>> 31 << 2) | 0;
  b = c[a >> 2] | 0;
  if (!b) {
   e = 124;
   break;
  } else {
   f = f << 1;
   d = b;
  }
 }
 if ((e | 0) == 124) {
  if (a >>> 0 < (c[20966] | 0) >>> 0) _();
  c[a >> 2] = r;
  c[r + 24 >> 2] = d;
  c[r + 12 >> 2] = r;
  c[r + 8 >> 2] = r;
  return;
 } else if ((e | 0) == 127) {
  d = b + 8 | 0;
  a = c[d >> 2] | 0;
  q = c[20966] | 0;
  if (!(a >>> 0 >= q >>> 0 & b >>> 0 >= q >>> 0)) _();
  c[a + 12 >> 2] = r;
  c[d >> 2] = r;
  c[r + 8 >> 2] = a;
  c[r + 12 >> 2] = b;
  c[r + 24 >> 2] = 0;
  return;
 }
}

function va(b, e, f, g, h) {
 b = b | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 a : do if (e >>> 0 > 36) {
  c[(ib() | 0) >> 2] = 22;
  h = 0;
  g = 0;
 } else {
  r = b + 4 | 0;
  q = b + 100 | 0;
  do {
   i = c[r >> 2] | 0;
   if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
    c[r >> 2] = i + 1;
    i = d[i >> 0] | 0;
   } else i = Ea(b) | 0;
  } while ((rb(i) | 0) != 0);
  b : do switch (i | 0) {
  case 43:
  case 45:
   {
    j = ((i | 0) == 45) << 31 >> 31;
    i = c[r >> 2] | 0;
    if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
     c[r >> 2] = i + 1;
     i = d[i >> 0] | 0;
     p = j;
     break b;
    } else {
     i = Ea(b) | 0;
     p = j;
     break b;
    }
   }
  default:
   p = 0;
  } while (0);
  j = (e | 0) == 0;
  do if ((e | 16 | 0) == 16 & (i | 0) == 48) {
   i = c[r >> 2] | 0;
   if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
    c[r >> 2] = i + 1;
    i = d[i >> 0] | 0;
   } else i = Ea(b) | 0;
   if ((i | 32 | 0) != 120) if (j) {
    e = 8;
    n = 46;
    break;
   } else {
    n = 32;
    break;
   }
   e = c[r >> 2] | 0;
   if (e >>> 0 < (c[q >> 2] | 0) >>> 0) {
    c[r >> 2] = e + 1;
    i = d[e >> 0] | 0;
   } else i = Ea(b) | 0;
   if ((d[81504 + i >> 0] | 0) > 15) {
    g = (c[q >> 2] | 0) == 0;
    if (!g) c[r >> 2] = (c[r >> 2] | 0) + -1;
    if (!f) {
     Ya(b, 0);
     h = 0;
     g = 0;
     break a;
    }
    if (g) {
     h = 0;
     g = 0;
     break a;
    }
    c[r >> 2] = (c[r >> 2] | 0) + -1;
    h = 0;
    g = 0;
    break a;
   } else {
    e = 16;
    n = 46;
   }
  } else {
   e = j ? 10 : e;
   if ((d[81504 + i >> 0] | 0) >>> 0 < e >>> 0) n = 32; else {
    if (c[q >> 2] | 0) c[r >> 2] = (c[r >> 2] | 0) + -1;
    Ya(b, 0);
    c[(ib() | 0) >> 2] = 22;
    h = 0;
    g = 0;
    break a;
   }
  } while (0);
  if ((n | 0) == 32) if ((e | 0) == 10) {
   e = i + -48 | 0;
   if (e >>> 0 < 10) {
    i = 0;
    while (1) {
     j = (i * 10 | 0) + e | 0;
     e = c[r >> 2] | 0;
     if (e >>> 0 < (c[q >> 2] | 0) >>> 0) {
      c[r >> 2] = e + 1;
      i = d[e >> 0] | 0;
     } else i = Ea(b) | 0;
     e = i + -48 | 0;
     if (!(e >>> 0 < 10 & j >>> 0 < 429496729)) {
      e = j;
      break;
     } else i = j;
    }
    j = 0;
   } else {
    e = 0;
    j = 0;
   }
   f = i + -48 | 0;
   if (f >>> 0 < 10) {
    while (1) {
     k = _a(e | 0, j | 0, 10, 0) | 0;
     l = C;
     m = ((f | 0) < 0) << 31 >> 31;
     o = ~m;
     if (l >>> 0 > o >>> 0 | (l | 0) == (o | 0) & k >>> 0 > ~f >>> 0) {
      k = e;
      break;
     }
     e = fb(k | 0, l | 0, f | 0, m | 0) | 0;
     j = C;
     i = c[r >> 2] | 0;
     if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
      c[r >> 2] = i + 1;
      i = d[i >> 0] | 0;
     } else i = Ea(b) | 0;
     f = i + -48 | 0;
     if (!(f >>> 0 < 10 & (j >>> 0 < 429496729 | (j | 0) == 429496729 & e >>> 0 < 2576980378))) {
      k = e;
      break;
     }
    }
    if (f >>> 0 > 9) {
     i = k;
     e = p;
    } else {
     e = 10;
     n = 72;
    }
   } else {
    i = e;
    e = p;
   }
  } else n = 46;
  c : do if ((n | 0) == 46) {
   if (!(e + -1 & e)) {
    n = a[81760 + ((e * 23 | 0) >>> 5 & 7) >> 0] | 0;
    j = a[81504 + i >> 0] | 0;
    f = j & 255;
    if (f >>> 0 < e >>> 0) {
     i = 0;
     while (1) {
      k = f | i << n;
      i = c[r >> 2] | 0;
      if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
       c[r >> 2] = i + 1;
       i = d[i >> 0] | 0;
      } else i = Ea(b) | 0;
      j = a[81504 + i >> 0] | 0;
      f = j & 255;
      if (!(k >>> 0 < 134217728 & f >>> 0 < e >>> 0)) break; else i = k;
     }
     f = 0;
    } else {
     f = 0;
     k = 0;
    }
    l = bb(-1, -1, n | 0) | 0;
    m = C;
    if ((j & 255) >>> 0 >= e >>> 0 | (f >>> 0 > m >>> 0 | (f | 0) == (m | 0) & k >>> 0 > l >>> 0)) {
     j = f;
     n = 72;
     break;
    } else i = f;
    while (1) {
     k = ab(k | 0, i | 0, n | 0) | 0;
     f = C;
     k = j & 255 | k;
     i = c[r >> 2] | 0;
     if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
      c[r >> 2] = i + 1;
      i = d[i >> 0] | 0;
     } else i = Ea(b) | 0;
     j = a[81504 + i >> 0] | 0;
     if ((j & 255) >>> 0 >= e >>> 0 | (f >>> 0 > m >>> 0 | (f | 0) == (m | 0) & k >>> 0 > l >>> 0)) {
      j = f;
      n = 72;
      break c;
     } else i = f;
    }
   }
   j = a[81504 + i >> 0] | 0;
   f = j & 255;
   if (f >>> 0 < e >>> 0) {
    i = 0;
    while (1) {
     k = f + (R(i, e) | 0) | 0;
     i = c[r >> 2] | 0;
     if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
      c[r >> 2] = i + 1;
      i = d[i >> 0] | 0;
     } else i = Ea(b) | 0;
     j = a[81504 + i >> 0] | 0;
     f = j & 255;
     if (!(k >>> 0 < 119304647 & f >>> 0 < e >>> 0)) break; else i = k;
    }
    f = 0;
   } else {
    k = 0;
    f = 0;
   }
   if ((j & 255) >>> 0 < e >>> 0) {
    n = kb(-1, -1, e | 0, 0) | 0;
    o = C;
    m = f;
    while (1) {
     if (m >>> 0 > o >>> 0 | (m | 0) == (o | 0) & k >>> 0 > n >>> 0) {
      j = m;
      n = 72;
      break c;
     }
     f = _a(k | 0, m | 0, e | 0, 0) | 0;
     l = C;
     j = j & 255;
     if (l >>> 0 > 4294967295 | (l | 0) == -1 & f >>> 0 > ~j >>> 0) {
      j = m;
      n = 72;
      break c;
     }
     k = fb(j | 0, 0, f | 0, l | 0) | 0;
     f = C;
     i = c[r >> 2] | 0;
     if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
      c[r >> 2] = i + 1;
      i = d[i >> 0] | 0;
     } else i = Ea(b) | 0;
     j = a[81504 + i >> 0] | 0;
     if ((j & 255) >>> 0 >= e >>> 0) {
      j = f;
      n = 72;
      break;
     } else m = f;
    }
   } else {
    j = f;
    n = 72;
   }
  } while (0);
  if ((n | 0) == 72) if ((d[81504 + i >> 0] | 0) >>> 0 < e >>> 0) {
   do {
    i = c[r >> 2] | 0;
    if (i >>> 0 < (c[q >> 2] | 0) >>> 0) {
     c[r >> 2] = i + 1;
     i = d[i >> 0] | 0;
    } else i = Ea(b) | 0;
   } while ((d[81504 + i >> 0] | 0) >>> 0 < e >>> 0);
   c[(ib() | 0) >> 2] = 34;
   j = h;
   i = g;
   e = (g & 1 | 0) == 0 & 0 == 0 ? p : 0;
  } else {
   i = k;
   e = p;
  }
  if (c[q >> 2] | 0) c[r >> 2] = (c[r >> 2] | 0) + -1;
  if (!(j >>> 0 < h >>> 0 | (j | 0) == (h | 0) & i >>> 0 < g >>> 0)) {
   if (!((g & 1 | 0) != 0 | 0 != 0 | (e | 0) != 0)) {
    c[(ib() | 0) >> 2] = 34;
    g = fb(g | 0, h | 0, -1, -1) | 0;
    h = C;
    break;
   }
   if (j >>> 0 > h >>> 0 | (j | 0) == (h | 0) & i >>> 0 > g >>> 0) {
    c[(ib() | 0) >> 2] = 34;
    break;
   }
  }
  g = ((e | 0) < 0) << 31 >> 31;
  g = db(i ^ e | 0, j ^ g | 0, e | 0, g | 0) | 0;
  h = C;
 } while (0);
 C = h;
 return g | 0;
}

function wa(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 n = a + 4 | 0;
 o = c[n >> 2] | 0;
 d = o & -8;
 k = a + d | 0;
 i = c[20966] | 0;
 e = o & 3;
 if (!((e | 0) != 1 & a >>> 0 >= i >>> 0 & a >>> 0 < k >>> 0)) _();
 f = c[k + 4 >> 2] | 0;
 if (!(f & 1)) _();
 if (!e) {
  if (b >>> 0 < 256) {
   a = 0;
   return a | 0;
  }
  if (d >>> 0 >= (b + 4 | 0) >>> 0) if ((d - b | 0) >>> 0 <= c[21082] << 1 >>> 0) return a | 0;
  a = 0;
  return a | 0;
 }
 if (d >>> 0 >= b >>> 0) {
  d = d - b | 0;
  if (d >>> 0 <= 15) return a | 0;
  m = a + b | 0;
  c[n >> 2] = o & 1 | b | 2;
  c[m + 4 >> 2] = d | 3;
  b = m + d + 4 | 0;
  c[b >> 2] = c[b >> 2] | 1;
  ua(m, d);
  return a | 0;
 }
 if ((k | 0) == (c[20968] | 0)) {
  d = (c[20965] | 0) + d | 0;
  if (d >>> 0 <= b >>> 0) {
   a = 0;
   return a | 0;
  }
  m = d - b | 0;
  l = a + b | 0;
  c[n >> 2] = o & 1 | b | 2;
  c[l + 4 >> 2] = m | 1;
  c[20968] = l;
  c[20965] = m;
  return a | 0;
 }
 if ((k | 0) == (c[20967] | 0)) {
  e = (c[20964] | 0) + d | 0;
  if (e >>> 0 < b >>> 0) {
   a = 0;
   return a | 0;
  }
  d = e - b | 0;
  if (d >>> 0 > 15) {
   e = a + b | 0;
   m = e + d | 0;
   c[n >> 2] = o & 1 | b | 2;
   c[e + 4 >> 2] = d | 1;
   c[m >> 2] = d;
   b = m + 4 | 0;
   c[b >> 2] = c[b >> 2] & -2;
  } else {
   c[n >> 2] = o & 1 | e | 2;
   e = a + e + 4 | 0;
   c[e >> 2] = c[e >> 2] | 1;
   e = 0;
   d = 0;
  }
  c[20964] = d;
  c[20967] = e;
  return a | 0;
 }
 if (f & 2 | 0) {
  a = 0;
  return a | 0;
 }
 l = (f & -8) + d | 0;
 if (l >>> 0 < b >>> 0) {
  a = 0;
  return a | 0;
 }
 m = l - b | 0;
 g = f >>> 3;
 do if (f >>> 0 < 256) {
  e = c[k + 8 >> 2] | 0;
  f = c[k + 12 >> 2] | 0;
  d = 83888 + (g << 1 << 2) | 0;
  if ((e | 0) != (d | 0)) {
   if (e >>> 0 < i >>> 0) _();
   if ((c[e + 12 >> 2] | 0) != (k | 0)) _();
  }
  if ((f | 0) == (e | 0)) {
   c[20962] = c[20962] & ~(1 << g);
   break;
  }
  if ((f | 0) == (d | 0)) h = f + 8 | 0; else {
   if (f >>> 0 < i >>> 0) _();
   d = f + 8 | 0;
   if ((c[d >> 2] | 0) == (k | 0)) h = d; else _();
  }
  c[e + 12 >> 2] = f;
  c[h >> 2] = e;
 } else {
  h = c[k + 24 >> 2] | 0;
  f = c[k + 12 >> 2] | 0;
  do if ((f | 0) == (k | 0)) {
   e = k + 16 | 0;
   f = e + 4 | 0;
   d = c[f >> 2] | 0;
   if (!d) {
    d = c[e >> 2] | 0;
    if (!d) {
     j = 0;
     break;
    }
   } else e = f;
   while (1) {
    f = d + 20 | 0;
    g = c[f >> 2] | 0;
    if (g | 0) {
     d = g;
     e = f;
     continue;
    }
    f = d + 16 | 0;
    g = c[f >> 2] | 0;
    if (!g) break; else {
     d = g;
     e = f;
    }
   }
   if (e >>> 0 < i >>> 0) _(); else {
    c[e >> 2] = 0;
    j = d;
    break;
   }
  } else {
   g = c[k + 8 >> 2] | 0;
   if (g >>> 0 < i >>> 0) _();
   d = g + 12 | 0;
   if ((c[d >> 2] | 0) != (k | 0)) _();
   e = f + 8 | 0;
   if ((c[e >> 2] | 0) == (k | 0)) {
    c[d >> 2] = f;
    c[e >> 2] = g;
    j = f;
    break;
   } else _();
  } while (0);
  if (h | 0) {
   d = c[k + 28 >> 2] | 0;
   e = 84152 + (d << 2) | 0;
   if ((k | 0) == (c[e >> 2] | 0)) {
    c[e >> 2] = j;
    if (!j) {
     c[20963] = c[20963] & ~(1 << d);
     break;
    }
   } else {
    if (h >>> 0 < (c[20966] | 0) >>> 0) _();
    d = h + 16 | 0;
    if ((c[d >> 2] | 0) == (k | 0)) c[d >> 2] = j; else c[h + 20 >> 2] = j;
    if (!j) break;
   }
   f = c[20966] | 0;
   if (j >>> 0 < f >>> 0) _();
   c[j + 24 >> 2] = h;
   d = k + 16 | 0;
   e = c[d >> 2] | 0;
   do if (e | 0) if (e >>> 0 < f >>> 0) _(); else {
    c[j + 16 >> 2] = e;
    c[e + 24 >> 2] = j;
    break;
   } while (0);
   d = c[d + 4 >> 2] | 0;
   if (d | 0) if (d >>> 0 < (c[20966] | 0) >>> 0) _(); else {
    c[j + 20 >> 2] = d;
    c[d + 24 >> 2] = j;
    break;
   }
  }
 } while (0);
 if (m >>> 0 < 16) {
  c[n >> 2] = l | o & 1 | 2;
  b = a + l + 4 | 0;
  c[b >> 2] = c[b >> 2] | 1;
  return a | 0;
 } else {
  l = a + b | 0;
  c[n >> 2] = o & 1 | b | 2;
  c[l + 4 >> 2] = m | 3;
  b = l + m + 4 | 0;
  c[b >> 2] = c[b >> 2] | 1;
  ua(l, m);
  return a | 0;
 }
 return 0;
}

function xa(a, b, d, e, f) {
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
   f = k >>> ((ba(i | 0) | 0) >>> 0);
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
   p = ba(h | 0) | 0;
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
  k = fb(m | 0, l | 0, -1, -1) | 0;
  d = C;
  j = i;
  i = 0;
  do {
   e = j;
   j = g >>> 31 | j << 1;
   g = i | g << 1;
   e = a << 1 | e >>> 31 | 0;
   n = a >>> 31 | b << 1 | 0;
   db(k | 0, d | 0, e | 0, n | 0) | 0;
   p = C;
   o = p >> 31 | ((p | 0) < 0 ? -1 : 0) << 1;
   i = o & 1;
   a = db(e | 0, n | 0, o & m | 0, (((p | 0) < 0 ? -1 : 0) >> 31 | ((p | 0) < 0 ? -1 : 0) << 1) & l | 0) | 0;
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

function ya(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0;
 e = i;
 i = i + 16 | 0;
 b = e;
 a : while (1) {
  switch (c[1024 + (a << 2) >> 2] | 0) {
  case 12:
   {
    d = 9;
    break a;
   }
  case 15:
   {
    d = 10;
    break a;
   }
  case 1:
   {
    d = 11;
    break a;
   }
  case 9:
   {
    d = 12;
    break a;
   }
  case 7:
   {
    d = 13;
    break a;
   }
  case 0:
   {
    d = 14;
    break a;
   }
  case 8:
   {
    d = 15;
    break a;
   }
  case 2:
   {
    d = 16;
    break a;
   }
  case 11:
   {
    d = 17;
    break a;
   }
  case 4:
   {
    d = 18;
    break a;
   }
  case 6:
   {
    d = 19;
    break a;
   }
  case 10:
   {
    d = 20;
    break a;
   }
  case 3:
   {
    d = 21;
    break a;
   }
  case 13:
   {
    d = 22;
    break a;
   }
  case 14:
   {
    d = 23;
    break a;
   }
  case 5:
   break;
  default:
   break a;
  }
  c[b >> 2] = 84344;
  if ((eb(81500, b) | 0) < 1) {
   d = 5;
   break;
  }
  a = c[20256] | 0;
  if (Ua(84344, 84344 + (c[1024 + (a + 1 << 2) >> 2] | 0) | 0) | 0) do a = c[1024 + (a << 2) >> 2] | 0; while ((Ua(84344, 84344 + (c[1024 + (a + 1 << 2) >> 2] | 0) | 0) | 0) != 0);
  if ((a | 0) == 1) {
   d = 8;
   break;
  } else a = a + 2 | 0;
 }
 switch (d | 0) {
 case 5:
  {
   ia(0);
   break;
  }
 case 8:
  {
   c[1024 + (c[256] << 2) >> 2] = 2;
   d = (c[256] | 0) + 1 | 0;
   c[256] = d;
   c[1024 + (d << 2) >> 2] = Ia(84344) | 0;
   c[256] = (c[256] | 0) + 1;
   break;
  }
 case 9:
  {
   d = c[257] | 0;
   c[20447] = c[1024 + (d << 2) >> 2];
   c[257] = d + -1;
   break;
  }
 case 10:
  {
   c[20448] = c[81796 + ((c[20446] | 0) - (c[20448] | 0) << 2) >> 2];
   break;
  }
 case 11:
  {
   c[1024 + (c[256] << 2) >> 2] = a + 1;
   c[256] = (c[256] | 0) + 1;
   break;
  }
 case 12:
  {
   d = c[20446] | 0;
   c[20448] = R(c[20448] | 0, c[81796 + (d << 2) >> 2] | 0) | 0;
   c[20446] = d + -1;
   break;
  }
 case 13:
  {
   d = c[20446] | 0;
   c[1024 + (c[20448] << 2) >> 2] = c[81796 + (d << 2) >> 2];
   c[20448] = c[81796 + (d + -1 << 2) >> 2];
   c[20446] = d + -2;
   break;
  }
 case 14:
  {
   d = (c[20446] | 0) + 1 | 0;
   c[20446] = d;
   c[81796 + (d << 2) >> 2] = c[20448];
   d = c[20447] | 0;
   c[20448] = c[1024 + (d << 2) >> 2];
   c[20447] = d + 1;
   break;
  }
 case 15:
  {
   d = c[20446] | 0;
   c[20448] = (c[81796 + (d << 2) >> 2] | 0) - (c[20448] | 0);
   c[20446] = d + -1;
   break;
  }
 case 16:
  {
   d = (c[257] | 0) + 1 | 0;
   c[257] = d;
   c[1024 + (d << 2) >> 2] = c[20447];
   c[20447] = a + 1;
   break;
  }
 case 17:
  {
   c[20448] = (c[20448] | 0) >>> 31;
   break;
  }
 case 18:
  {
   d = (c[256] | 0) + -2 | 0;
   c[256] = d;
   c[1024 + (d << 2) >> 2] = 2;
   c[256] = (c[256] | 0) + 1;
   break;
  }
 case 19:
  {
   c[20448] = c[1024 + (c[20448] << 2) >> 2];
   break;
  }
 case 20:
  {
   d = c[20446] | 0;
   c[20448] = (c[81796 + (d << 2) >> 2] | 0) / (c[20448] | 0) | 0;
   c[20446] = d + -1;
   break;
  }
 case 21:
  {
   Pa(1);
   c[1024 + (c[256] << 2) >> 2] = 2;
   c[256] = (c[256] | 0) + 1;
   break;
  }
 case 22:
  {
   wb(c[20448] | 0) | 0;
   d = c[20446] | 0;
   c[20448] = c[81796 + (d << 2) >> 2];
   c[20446] = d + -1;
   break;
  }
 case 23:
  {
   d = (c[20446] | 0) + 1 | 0;
   c[20446] = d;
   c[81796 + (d << 2) >> 2] = c[20448];
   c[20448] = yb() | 0;
   break;
  }
 }
 i = e;
 return;
}

function za(a, b) {
 a = +a;
 b = +b;
 var d = 0, e = 0, f = 0, g = 0, i = 0, j = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0.0;
 h[k >> 3] = a;
 d = c[k >> 2] | 0;
 m = c[k + 4 >> 2] | 0;
 h[k >> 3] = b;
 n = c[k >> 2] | 0;
 o = c[k + 4 >> 2] | 0;
 e = bb(d | 0, m | 0, 52) | 0;
 e = e & 2047;
 j = bb(n | 0, o | 0, 52) | 0;
 j = j & 2047;
 p = m & -2147483648;
 i = ab(n | 0, o | 0, 1) | 0;
 l = C;
 a : do if ((i | 0) == 0 & (l | 0) == 0) q = 3; else {
  r = +E(+b);
  h[k >> 3] = r;
  g = c[k + 4 >> 2] | 0;
  if (g >>> 0 > 2146435072 | (g | 0) == 2146435072 & (c[k >> 2] | 0) >>> 0 > 0 | (e | 0) == 2047) q = 3; else {
   f = ab(d | 0, m | 0, 1) | 0;
   g = C;
   if (!(g >>> 0 > l >>> 0 | (g | 0) == (l | 0) & f >>> 0 > i >>> 0)) return +((f | 0) == (i | 0) & (g | 0) == (l | 0) ? a * 0.0 : a);
   if (!e) {
    e = ab(d | 0, m | 0, 12) | 0;
    f = C;
    if ((f | 0) > -1 | (f | 0) == -1 & e >>> 0 > 4294967295) {
     g = e;
     e = 0;
     do {
      e = e + -1 | 0;
      g = ab(g | 0, f | 0, 1) | 0;
      f = C;
     } while ((f | 0) > -1 | (f | 0) == -1 & g >>> 0 > 4294967295);
    } else e = 0;
    d = ab(d | 0, m | 0, 1 - e | 0) | 0;
    f = C;
   } else f = m & 1048575 | 1048576;
   if (!j) {
    g = ab(n | 0, o | 0, 12) | 0;
    i = C;
    if ((i | 0) > -1 | (i | 0) == -1 & g >>> 0 > 4294967295) {
     j = 0;
     do {
      j = j + -1 | 0;
      g = ab(g | 0, i | 0, 1) | 0;
      i = C;
     } while ((i | 0) > -1 | (i | 0) == -1 & g >>> 0 > 4294967295);
    } else j = 0;
    n = ab(n | 0, o | 0, 1 - j | 0) | 0;
    m = C;
   } else m = o & 1048575 | 1048576;
   l = db(d | 0, f | 0, n | 0, m | 0) | 0;
   i = C;
   g = (i | 0) > -1 | (i | 0) == -1 & l >>> 0 > 4294967295;
   b : do if ((e | 0) > (j | 0)) {
    while (1) {
     if (g) if ((d | 0) == (n | 0) & (f | 0) == (m | 0)) break; else {
      d = l;
      f = i;
     }
     d = ab(d | 0, f | 0, 1) | 0;
     f = C;
     e = e + -1 | 0;
     l = db(d | 0, f | 0, n | 0, m | 0) | 0;
     i = C;
     g = (i | 0) > -1 | (i | 0) == -1 & l >>> 0 > 4294967295;
     if ((e | 0) <= (j | 0)) break b;
    }
    b = a * 0.0;
    break a;
   } while (0);
   if (g) if ((d | 0) == (n | 0) & (f | 0) == (m | 0)) {
    b = a * 0.0;
    break;
   } else {
    f = i;
    d = l;
   }
   if (f >>> 0 < 1048576 | (f | 0) == 1048576 & d >>> 0 < 0) do {
    d = ab(d | 0, f | 0, 1) | 0;
    f = C;
    e = e + -1 | 0;
   } while (f >>> 0 < 1048576 | (f | 0) == 1048576 & d >>> 0 < 0);
   if ((e | 0) > 0) {
    o = fb(d | 0, f | 0, 0, -1048576) | 0;
    d = C;
    e = ab(e | 0, 0, 52) | 0;
    d = d | C;
    e = o | e;
   } else {
    e = bb(d | 0, f | 0, 1 - e | 0) | 0;
    d = C;
   }
   c[k >> 2] = e;
   c[k + 4 >> 2] = d | p;
   b = +h[k >> 3];
  }
 } while (0);
 if ((q | 0) == 3) {
  b = a * b;
  b = b / b;
 }
 return +b;
}

function Aa(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 i = a + 4 | 0;
 e = c[i >> 2] | 0;
 j = a + 100 | 0;
 if (e >>> 0 < (c[j >> 2] | 0) >>> 0) {
  c[i >> 2] = e + 1;
  e = d[e >> 0] | 0;
 } else e = Ea(a) | 0;
 switch (e | 0) {
 case 43:
 case 45:
  {
   f = (e | 0) == 45 & 1;
   e = c[i >> 2] | 0;
   if (e >>> 0 < (c[j >> 2] | 0) >>> 0) {
    c[i >> 2] = e + 1;
    e = d[e >> 0] | 0;
   } else e = Ea(a) | 0;
   if ((b | 0) != 0 & (e + -48 | 0) >>> 0 > 9) if (!(c[j >> 2] | 0)) h = f; else {
    c[i >> 2] = (c[i >> 2] | 0) + -1;
    h = f;
   } else h = f;
   break;
  }
 default:
  h = 0;
 }
 if ((e + -48 | 0) >>> 0 > 9) if (!(c[j >> 2] | 0)) {
  f = -2147483648;
  e = 0;
 } else {
  c[i >> 2] = (c[i >> 2] | 0) + -1;
  f = -2147483648;
  e = 0;
 } else {
  f = 0;
  do {
   f = e + -48 + (f * 10 | 0) | 0;
   e = c[i >> 2] | 0;
   if (e >>> 0 < (c[j >> 2] | 0) >>> 0) {
    c[i >> 2] = e + 1;
    e = d[e >> 0] | 0;
   } else e = Ea(a) | 0;
  } while ((e + -48 | 0) >>> 0 < 10 & (f | 0) < 214748364);
  b = ((f | 0) < 0) << 31 >> 31;
  if ((e + -48 | 0) >>> 0 < 10) {
   do {
    b = _a(f | 0, b | 0, 10, 0) | 0;
    f = C;
    e = fb(e | 0, ((e | 0) < 0) << 31 >> 31 | 0, -48, -1) | 0;
    f = fb(e | 0, C | 0, b | 0, f | 0) | 0;
    b = C;
    e = c[i >> 2] | 0;
    if (e >>> 0 < (c[j >> 2] | 0) >>> 0) {
     c[i >> 2] = e + 1;
     e = d[e >> 0] | 0;
    } else e = Ea(a) | 0;
   } while ((e + -48 | 0) >>> 0 < 10 & ((b | 0) < 21474836 | (b | 0) == 21474836 & f >>> 0 < 2061584302));
   g = f;
  } else g = f;
  if ((e + -48 | 0) >>> 0 < 10) do {
   e = c[i >> 2] | 0;
   if (e >>> 0 < (c[j >> 2] | 0) >>> 0) {
    c[i >> 2] = e + 1;
    e = d[e >> 0] | 0;
   } else e = Ea(a) | 0;
  } while ((e + -48 | 0) >>> 0 < 10);
  if (c[j >> 2] | 0) c[i >> 2] = (c[i >> 2] | 0) + -1;
  a = (h | 0) != 0;
  e = db(0, 0, g | 0, b | 0) | 0;
  f = a ? C : b;
  e = a ? e : g;
 }
 C = f;
 return e | 0;
}

function Ba(a, b, d) {
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
  if (!(c[20949] | 0)) {
   c[n >> 2] = c[k >> 2];
   c[n + 4 >> 2] = e;
   c[n + 8 >> 2] = b;
   h = hb(la(146, n | 0) | 0) | 0;
  } else {
   ea(1, a | 0);
   c[m >> 2] = c[k >> 2];
   c[m + 4 >> 2] = e;
   c[m + 8 >> 2] = b;
   h = hb(la(146, m | 0) | 0) | 0;
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

function Ca(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0;
 l = i;
 i = i + 16 | 0;
 g = l;
 j = (f | 0) == 0 ? 83844 : f;
 f = c[j >> 2] | 0;
 a : do if (!d) if (!f) f = 0; else k = 15; else {
  h = (b | 0) == 0 ? g : b;
  if (!e) f = -2; else {
   if (!f) {
    f = a[d >> 0] | 0;
    g = f & 255;
    if (f << 24 >> 24 > -1) {
     c[h >> 2] = g;
     f = f << 24 >> 24 != 0 & 1;
     break;
    }
    f = g + -194 | 0;
    if (f >>> 0 > 50) {
     k = 15;
     break;
    }
    f = c[81264 + (f << 2) >> 2] | 0;
    g = e + -1 | 0;
    if (g) {
     d = d + 1 | 0;
     k = 9;
    }
   } else {
    g = e;
    k = 9;
   }
   b : do if ((k | 0) == 9) {
    b = a[d >> 0] | 0;
    m = (b & 255) >>> 3;
    if ((m + -16 | m + (f >> 26)) >>> 0 > 7) {
     k = 15;
     break a;
    }
    while (1) {
     d = d + 1 | 0;
     f = (b & 255) + -128 | f << 6;
     g = g + -1 | 0;
     if ((f | 0) >= 0) break;
     if (!g) break b;
     b = a[d >> 0] | 0;
     if ((b & -64) << 24 >> 24 != -128) {
      k = 15;
      break a;
     }
    }
    c[j >> 2] = 0;
    c[h >> 2] = f;
    f = e - g | 0;
    break a;
   } while (0);
   c[j >> 2] = f;
   f = -2;
  }
 } while (0);
 if ((k | 0) == 15) {
  c[j >> 2] = 0;
  c[(ib() | 0) >> 2] = 84;
  f = -1;
 }
 i = l;
 return f | 0;
}

function Da(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 m = i;
 i = i + 48 | 0;
 h = m + 16 | 0;
 g = m;
 f = m + 32 | 0;
 c[f >> 2] = d;
 j = f + 4 | 0;
 l = b + 48 | 0;
 n = c[l >> 2] | 0;
 c[j >> 2] = e - ((n | 0) != 0 & 1);
 k = b + 44 | 0;
 c[f + 8 >> 2] = c[k >> 2];
 c[f + 12 >> 2] = n;
 if (!(c[20949] | 0)) {
  c[h >> 2] = c[b + 60 >> 2];
  c[h + 4 >> 2] = f;
  c[h + 8 >> 2] = 2;
  f = hb(ka(145, h | 0) | 0) | 0;
 } else {
  ea(2, b | 0);
  c[g >> 2] = c[b + 60 >> 2];
  c[g + 4 >> 2] = f;
  c[g + 8 >> 2] = 2;
  f = hb(ka(145, g | 0) | 0) | 0;
  Z(0);
 }
 if ((f | 0) < 1) {
  c[b >> 2] = c[b >> 2] | f & 48 ^ 16;
  c[b + 8 >> 2] = 0;
  c[b + 4 >> 2] = 0;
 } else {
  j = c[j >> 2] | 0;
  if (f >>> 0 > j >>> 0) {
   g = c[k >> 2] | 0;
   h = b + 4 | 0;
   c[h >> 2] = g;
   c[b + 8 >> 2] = g + (f - j);
   if (!(c[l >> 2] | 0)) f = e; else {
    c[h >> 2] = g + 1;
    a[d + (e + -1) >> 0] = a[g >> 0] | 0;
    f = e;
   }
  }
 }
 i = m;
 return f | 0;
}

function Ea(b) {
 b = b | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0, j = 0;
 f = b + 104 | 0;
 e = c[f >> 2] | 0;
 if (!e) j = 3; else if ((c[b + 108 >> 2] | 0) < (e | 0)) j = 3; else j = 4;
 if ((j | 0) == 3) {
  e = Va(b) | 0;
  if ((e | 0) < 0) j = 4; else {
   f = c[f >> 2] | 0;
   i = c[b + 8 >> 2] | 0;
   if (!f) {
    g = i;
    j = 9;
   } else {
    h = c[b + 4 >> 2] | 0;
    f = f - (c[b + 108 >> 2] | 0) | 0;
    g = i;
    if ((i - h | 0) < (f | 0)) j = 9; else c[b + 100 >> 2] = h + (f + -1);
   }
   if ((j | 0) == 9) c[b + 100 >> 2] = i;
   f = b + 4 | 0;
   if (!g) f = c[f >> 2] | 0; else {
    f = c[f >> 2] | 0;
    b = b + 108 | 0;
    c[b >> 2] = g + 1 - f + (c[b >> 2] | 0);
   }
   f = f + -1 | 0;
   if ((d[f >> 0] | 0 | 0) != (e | 0)) a[f >> 0] = e;
  }
 }
 if ((j | 0) == 4) {
  c[b + 100 >> 2] = 0;
  e = -1;
 }
 return e | 0;
}

function Fa(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 if ((c[d + 76 >> 2] | 0) < 0) g = 3; else if (!(Db(d) | 0)) g = 3; else {
  if ((a[d + 75 >> 0] | 0) == (b | 0)) g = 10; else {
   e = d + 20 | 0;
   f = c[e >> 2] | 0;
   if (f >>> 0 < (c[d + 16 >> 2] | 0) >>> 0) {
    c[e >> 2] = f + 1;
    a[f >> 0] = b;
    e = b & 255;
   } else g = 10;
  }
  if ((g | 0) == 10) e = Ha(d, b) | 0;
  Cb(d);
 }
 do if ((g | 0) == 3) {
  if ((a[d + 75 >> 0] | 0) != (b | 0)) {
   f = d + 20 | 0;
   e = c[f >> 2] | 0;
   if (e >>> 0 < (c[d + 16 >> 2] | 0) >>> 0) {
    c[f >> 2] = e + 1;
    a[e >> 0] = b;
    e = b & 255;
    break;
   }
  }
  e = Ha(d, b) | 0;
 } while (0);
 return e | 0;
}

function Ga() {
 var a = 0, b = 0, d = 0;
 Pa(3);
 Pa(4);
 Pa(1);
 a = c[256] | 0;
 c[1024 + (a << 2) >> 2] = 5;
 b = (c[256] | 0) + 1 | 0;
 c[256] = b;
 c[1024 + (b << 2) >> 2] = 2;
 b = c[256] | 0;
 d = b + 1 | 0;
 c[256] = d;
 c[20447] = d;
 c[1024 + (d << 2) >> 2] = a;
 d = (c[256] | 0) + 1 | 0;
 c[256] = d;
 c[1024 + (d << 2) >> 2] = b;
 c[256] = (c[256] | 0) + 1;
 d = 6;
 do {
  Pa(1);
  c[1024 + (c[256] << 2) >> 2] = d;
  b = c[256] | 0;
  a = b + 1 | 0;
  c[256] = a;
  d = d + 1 | 0;
 } while ((d | 0) != 16);
 c[257] = a;
 c[256] = b + 513;
 while (1) {
  b = c[20447] | 0;
  d = c[1024 + (b << 2) >> 2] | 0;
  c[20447] = b + 1;
  ya(d);
 }
 return 0;
}

function Ha(b, e) {
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0;
 m = i;
 i = i + 16 | 0;
 l = m;
 k = e & 255;
 a[l >> 0] = k;
 f = b + 16 | 0;
 g = c[f >> 2] | 0;
 if (!g) if (!(Ta(b) | 0)) {
  g = c[f >> 2] | 0;
  h = 4;
 } else f = -1; else h = 4;
 do if ((h | 0) == 4) {
  h = b + 20 | 0;
  j = c[h >> 2] | 0;
  if (j >>> 0 < g >>> 0) {
   f = e & 255;
   if ((f | 0) != (a[b + 75 >> 0] | 0)) {
    c[h >> 2] = j + 1;
    a[j >> 0] = k;
    break;
   }
  }
  if ((oa[c[b + 36 >> 2] & 7](b, l, 1) | 0) == 1) f = d[l >> 0] | 0; else f = -1;
 } while (0);
 i = m;
 return f | 0;
}

function Ia(b) {
 b = b | 0;
 var c = 0, d = 0, e = 0, f = 0;
 while (1) {
  c = b + 1 | 0;
  if (!(rb(a[b >> 0] | 0) | 0)) break; else b = c;
 }
 d = a[b >> 0] | 0;
 switch (d << 24 >> 24 | 0) {
 case 45:
  {
   e = 1;
   f = 5;
   break;
  }
 case 43:
  {
   e = 0;
   f = 5;
   break;
  }
 default:
  e = 0;
 }
 if ((f | 0) == 5) {
  b = c;
  d = a[c >> 0] | 0;
 }
 c = (d << 24 >> 24) + -48 | 0;
 if (c >>> 0 < 10) {
  d = b;
  b = 0;
  do {
   d = d + 1 | 0;
   b = (b * 10 | 0) - c | 0;
   c = (a[d >> 0] | 0) + -48 | 0;
  } while (c >>> 0 < 10);
 } else b = 0;
 return (e | 0 ? b : 0 - b | 0) | 0;
}

function Ja(a, b) {
 a = +a;
 b = b | 0;
 var d = 0;
 if ((b | 0) > 1023) {
  a = a * 8988465674311579538646525.0e283;
  d = b + -1023 | 0;
  if ((d | 0) > 1023) {
   d = b + -2046 | 0;
   d = (d | 0) > 1023 ? 1023 : d;
   a = a * 8988465674311579538646525.0e283;
  }
 } else if ((b | 0) < -1022) {
  a = a * 2.2250738585072014e-308;
  d = b + 1022 | 0;
  if ((d | 0) < -1022) {
   d = b + 2044 | 0;
   d = (d | 0) < -1022 ? -1022 : d;
   a = a * 2.2250738585072014e-308;
  }
 } else d = b;
 d = ab(d + 1023 | 0, 0, 52) | 0;
 b = C;
 c[k >> 2] = d;
 c[k + 4 >> 2] = b;
 return +(a * +h[k >> 3]);
}

function Oa(b, d, e) {
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

function La(a) {
 a = a | 0;
 var b = 0, e = 0, f = 0;
 if ((c[a + 76 >> 2] | 0) < 0) f = 3; else if (!(Db(a) | 0)) f = 3; else {
  b = a + 4 | 0;
  e = c[b >> 2] | 0;
  if (e >>> 0 < (c[a + 8 >> 2] | 0) >>> 0) {
   c[b >> 2] = e + 1;
   b = d[e >> 0] | 0;
  } else b = Va(a) | 0;
  Cb(a);
 }
 do if ((f | 0) == 3) {
  b = a + 4 | 0;
  e = c[b >> 2] | 0;
  if (e >>> 0 < (c[a + 8 >> 2] | 0) >>> 0) {
   c[b >> 2] = e + 1;
   b = d[e >> 0] | 0;
   break;
  } else {
   b = Va(a) | 0;
   break;
  }
 } while (0);
 return b | 0;
}

function Na(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 if (!a) {
  a = qa(b) | 0;
  return a | 0;
 }
 if (b >>> 0 > 4294967231) {
  c[(ib() | 0) >> 2] = 12;
  a = 0;
  return a | 0;
 }
 d = wa(a + -8 | 0, b >>> 0 < 11 ? 16 : b + 11 & -8) | 0;
 if (d | 0) {
  a = d + 8 | 0;
  return a | 0;
 }
 d = qa(b) | 0;
 if (!d) {
  a = 0;
  return a | 0;
 }
 e = c[a + -4 >> 2] | 0;
 e = (e & -8) - ((e & 3 | 0) == 0 ? 8 : 4) | 0;
 Oa(d | 0, a | 0, (e >>> 0 < b >>> 0 ? e : b) | 0) | 0;
 ta(a);
 a = d;
 return a | 0;
}

function Ka(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0;
 f = b;
 a : do if (!(f & 3)) e = 4; else {
  d = b;
  b = f;
  while (1) {
   if (!(a[d >> 0] | 0)) break a;
   d = d + 1 | 0;
   b = d;
   if (!(b & 3)) {
    b = d;
    e = 4;
    break;
   }
  }
 } while (0);
 if ((e | 0) == 4) {
  while (1) {
   d = c[b >> 2] | 0;
   if (!((d & -2139062144 ^ -2139062144) & d + -16843009)) b = b + 4 | 0; else break;
  }
  if ((d & 255) << 24 >> 24) do b = b + 1 | 0; while ((a[b >> 0] | 0) != 0);
 }
 return b - f | 0;
}

function Ma(b) {
 b = b | 0;
 var d = 0, e = 0;
 d = b + 74 | 0;
 e = a[d >> 0] | 0;
 a[d >> 0] = e + 255 | e;
 d = b + 20 | 0;
 e = b + 44 | 0;
 if ((c[d >> 2] | 0) >>> 0 > (c[e >> 2] | 0) >>> 0) oa[c[b + 36 >> 2] & 7](b, 0, 0) | 0;
 c[b + 16 >> 2] = 0;
 c[b + 28 >> 2] = 0;
 c[d >> 2] = 0;
 d = c[b >> 2] | 0;
 if (!(d & 20)) {
  d = c[e >> 2] | 0;
  c[b + 8 >> 2] = d;
  c[b + 4 >> 2] = d;
  d = 0;
 } else if (!(d & 4)) d = -1; else {
  c[b >> 2] = d | 32;
  d = -1;
 }
 return d | 0;
}

function Qa(b, d, e) {
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

function Pa(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0;
 b = i;
 i = i + 16 | 0;
 d = b;
 c[1024 + (c[256] << 2) >> 2] = c[20256];
 e = c[256] | 0;
 f = e + 1 | 0;
 c[256] = f;
 c[20256] = e;
 e = c[20257] | 0;
 c[1024 + (f << 2) >> 2] = e;
 f = (c[256] | 0) + 1 | 0;
 c[256] = f;
 c[1024 + (f << 2) >> 2] = a;
 c[256] = (c[256] | 0) + 1;
 c[d >> 2] = 84344 + e;
 eb(81500, d) | 0;
 a = c[20257] | 0;
 c[20257] = a + 1 + (Ka(84344 + a | 0) | 0);
 i = b;
 return;
}

function Ua(b, c) {
 b = b | 0;
 c = c | 0;
 var d = 0, e = 0;
 e = a[b >> 0] | 0;
 d = a[c >> 0] | 0;
 if (e << 24 >> 24 == 0 ? 1 : e << 24 >> 24 != d << 24 >> 24) c = e; else {
  do {
   b = b + 1 | 0;
   c = c + 1 | 0;
   e = a[b >> 0] | 0;
   d = a[c >> 0] | 0;
  } while (!(e << 24 >> 24 == 0 ? 1 : e << 24 >> 24 != d << 24 >> 24));
  c = e;
 }
 return (c & 255) - (d & 255) | 0;
}

function Ta(b) {
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

function Ra(a, b, d) {
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
 if ((hb(ha(140, g | 0) | 0) | 0) < 0) {
  c[e >> 2] = -1;
  a = -1;
 } else a = c[e >> 2] | 0;
 i = f;
 return a | 0;
}

function Sa(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 g = i;
 i = i + 80 | 0;
 f = g;
 c[b + 36 >> 2] = 4;
 if (!(c[b >> 2] & 64)) {
  c[f >> 2] = c[b + 60 >> 2];
  c[f + 4 >> 2] = 21505;
  c[f + 8 >> 2] = g + 12;
  if (ga(54, f | 0) | 0) a[b + 75 >> 0] = -1;
 }
 f = Ba(b, d, e) | 0;
 i = g;
 return f | 0;
}

function Wa(a, b) {
 a = a | 0;
 b = b | 0;
 var c = 0, d = 0, e = 0, f = 0;
 f = a & 65535;
 e = b & 65535;
 c = R(e, f) | 0;
 d = a >>> 16;
 a = (c >>> 16) + (R(e, d) | 0) | 0;
 e = b >>> 16;
 b = R(e, f) | 0;
 return (C = (a >>> 16) + (R(e, d) | 0) + (((a & 65535) + b | 0) >>> 16) | 0, a + b << 16 | c & 65535 | 0) | 0;
}

function Va(a) {
 a = a | 0;
 var b = 0, e = 0, f = 0;
 f = i;
 i = i + 16 | 0;
 b = f;
 if (!(c[a + 8 >> 2] | 0)) if (!(Ma(a) | 0)) e = 3; else b = -1; else e = 3;
 if ((e | 0) == 3) if ((oa[c[a + 32 >> 2] & 7](a, b, 1) | 0) == 1) b = d[b >> 0] | 0; else b = -1;
 i = f;
 return b | 0;
}

function Ya(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 c[a + 104 >> 2] = b;
 d = c[a + 8 >> 2] | 0;
 e = c[a + 4 >> 2] | 0;
 f = d - e | 0;
 c[a + 108 >> 2] = f;
 if ((b | 0) != 0 & (f | 0) > (b | 0)) c[a + 100 >> 2] = e + b; else c[a + 100 >> 2] = d;
 return;
}

function Xa(a, b) {
 a = +a;
 b = +b;
 var d = 0;
 h[k >> 3] = b;
 d = c[k + 4 >> 2] | 0;
 b = +E(+a);
 h[k >> 3] = b;
 d = d & -2147483648 | c[k + 4 >> 2];
 c[k >> 2] = c[k >> 2];
 c[k + 4 >> 2] = d;
 return +(+h[k >> 3]);
}

function Za(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 g = i;
 i = i + 16 | 0;
 f = g | 0;
 xa(a, b, d, e, f) | 0;
 i = g;
 return (C = c[f + 4 >> 2] | 0, c[f >> 2] | 0) | 0;
}

function _a(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0, f = 0;
 e = a;
 f = c;
 c = Wa(e, f) | 0;
 a = C;
 return (C = (R(b, f) | 0) + (R(d, e) | 0) + a | a & 0, c | 0 | 0) | 0;
}

function ab(a, b, c) {
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

function bb(a, b, c) {
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

function cb() {}
function db(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 d = b - d - (c >>> 0 > a >>> 0 | 0) >>> 0;
 return (C = d, a - c >>> 0 | 0) | 0;
}

function $a(a) {
 a = a | 0;
 var b = 0, d = 0;
 b = i;
 i = i + 16 | 0;
 d = b;
 c[d >> 2] = c[a + 60 >> 2];
 a = hb($(6, d | 0) | 0) | 0;
 i = b;
 return a | 0;
}

function fb(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 c = a + c >>> 0;
 return (C = b + d + (c >>> 0 < a >>> 0 | 0) >>> 0, c | 0) | 0;
}

function eb(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 d = i;
 i = i + 16 | 0;
 e = d;
 c[e >> 2] = b;
 b = pb(a, e) | 0;
 i = d;
 return b | 0;
}

function gb(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return oa[a & 7](b | 0, c | 0, d | 0) | 0;
}

function hb(a) {
 a = a | 0;
 if (a >>> 0 > 4294963200) {
  c[(ib() | 0) >> 2] = 0 - a;
  a = -1;
 }
 return a | 0;
}

function kb(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return xa(a, b, c, d, 0) | 0;
}

function ib() {
 var a = 0;
 if (!0) a = 83840; else a = c[(Hb() | 0) + 64 >> 2] | 0;
 return a | 0;
}

function jb(a) {
 a = a | 0;
 var b = 0;
 b = i;
 i = i + a | 0;
 i = i + 15 & -16;
 return b | 0;
}

function lb(a) {
 a = a | 0;
 if (!a) a = 1; else a = (c[a >> 2] | 0) == 0;
 return a & 1 | 0;
}

function rb(a) {
 a = a | 0;
 return ((a | 0) == 32 | (a + -9 | 0) >>> 0 < 5) & 1 | 0;
}

function pb(a, b) {
 a = a | 0;
 b = b | 0;
 return sa(c[20287] | 0, a, b) | 0;
}

function tb(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 U(1);
 return 0;
}

function mb(a, b) {
 a = a | 0;
 b = b | 0;
 if (!n) {
  n = a;
  o = b;
 }
}

function ob(a, b) {
 a = a | 0;
 b = b | 0;
 return na[a & 1](b | 0) | 0;
}

function nb(a) {
 a = a | 0;
 if (!(c[a + 68 >> 2] | 0)) Cb(a);
 return;
}

function vb(a, b) {
 a = +a;
 b = b | 0;
 return +(+Ja(a, b));
}

function sb(a, b) {
 a = a | 0;
 b = b | 0;
 pa[a & 3](b | 0);
}

function wb(a) {
 a = a | 0;
 return Fa(a, c[20258] | 0) | 0;
}

function xb(a, b) {
 a = +a;
 b = +b;
 return +(+za(a, b));
}

function ub(a, b) {
 a = +a;
 b = +b;
 return +(+Xa(a, b));
}

function qb(a, b) {
 a = a | 0;
 b = b | 0;
 i = a;
 j = b;
}

function Bb(a) {
 a = a | 0;
 U(0);
 return 0;
}

function yb() {
 return La(c[20287] | 0) | 0;
}

function Db(a) {
 a = a | 0;
 return 0;
}

function Cb(a) {
 a = a | 0;
 return;
}

function zb(a) {
 a = a | 0;
 i = a;
}

function Ab(a) {
 a = a | 0;
 C = a;
}

function Gb(a) {
 a = a | 0;
 U(2);
}

function Fb() {
 return i | 0;
}

function Eb() {
 return C | 0;
}

function Hb() {
 return 0;
}

// EMSCRIPTEN_END_FUNCS

 var na = [ Bb, $a ];
 var oa = [ tb, Sa, Ra, Da, Ba, tb, tb, tb ];
 var pa = [ Gb, nb, nb, Gb ];
 return {
  ___muldsi3: Wa,
  _i64Subtract: db,
  _free: ta,
  _main: Ga,
  _i64Add: fb,
  _pthread_self: Hb,
  _memset: Qa,
  ___udivdi3: kb,
  _malloc: qa,
  _memcpy: Oa,
  ___muldi3: _a,
  _bitshift64Lshr: bb,
  _bitshift64Shl: ab,
  ___uremdi3: Za,
  ___errno_location: ib,
  ___udivmoddi4: xa,
  runPostSets: cb,
  stackAlloc: jb,
  stackSave: Fb,
  stackRestore: zb,
  establishStackSpace: qb,
  setThrew: mb,
  setTempRet0: Ab,
  getTempRet0: Eb,
  dynCall_ii: ob,
  dynCall_iiii: gb,
  dynCall_vi: sb
 };
})


;