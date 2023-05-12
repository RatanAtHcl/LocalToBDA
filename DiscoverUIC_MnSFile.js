// Prod
// 22 August 22

/*pako 1.0.10 nodeca/pako */
!(function (t) {
  if ("object" == typeof exports && "undefined" != typeof module)
    module.exports = t();
  else if ("function" == typeof define && define.amd) define([], t);
  else {
    ("undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : this
    ).pako = t();
  }
})(function () {
  return (function i(s, h, l) {
    function o(e, t) {
      if (!h[e]) {
        if (!s[e]) {
          var a = "function" == typeof require && require;
          if (!t && a) return a(e, !0);
          if (_) return _(e, !0);
          var n = new Error("Cannot find module '" + e + "'");
          throw ((n.code = "MODULE_NOT_FOUND"), n);
        }
        var r = (h[e] = { exports: {} });
        s[e][0].call(
          r.exports,
          function (t) {
            return o(s[e][1][t] || t);
          },
          r,
          r.exports,
          i,
          s,
          h,
          l
        );
      }
      return h[e].exports;
    }
    for (
      var _ = "function" == typeof require && require, t = 0;
      t < l.length;
      t++
    )
      o(l[t]);
    return o;
  })(
    {
      1: [
        function (t, e, a) {
          "use strict";
          var n =
            "undefined" != typeof Uint8Array &&
            "undefined" != typeof Uint16Array &&
            "undefined" != typeof Int32Array;
          (a.assign = function (t) {
            for (
              var e, a, n = Array.prototype.slice.call(arguments, 1);
              n.length;

            ) {
              var r = n.shift();
              if (r) {
                if ("object" != typeof r)
                  throw new TypeError(r + "must be non-object");
                for (var i in r)
                  (e = r),
                    (a = i),
                    Object.prototype.hasOwnProperty.call(e, a) && (t[i] = r[i]);
              }
            }
            return t;
          }),
            (a.shrinkBuf = function (t, e) {
              return t.length === e
                ? t
                : t.subarray
                ? t.subarray(0, e)
                : ((t.length = e), t);
            });
          var r = {
              arraySet: function (t, e, a, n, r) {
                if (e.subarray && t.subarray) t.set(e.subarray(a, a + n), r);
                else for (var i = 0; i < n; i++) t[r + i] = e[a + i];
              },
              flattenChunks: function (t) {
                var e, a, n, r, i, s;
                for (e = n = 0, a = t.length; e < a; e++) n += t[e].length;
                for (s = new Uint8Array(n), e = r = 0, a = t.length; e < a; e++)
                  (i = t[e]), s.set(i, r), (r += i.length);
                return s;
              },
            },
            i = {
              arraySet: function (t, e, a, n, r) {
                for (var i = 0; i < n; i++) t[r + i] = e[a + i];
              },
              flattenChunks: function (t) {
                return [].concat.apply([], t);
              },
            };
          (a.setTyped = function (t) {
            t
              ? ((a.Buf8 = Uint8Array),
                (a.Buf16 = Uint16Array),
                (a.Buf32 = Int32Array),
                a.assign(a, r))
              : ((a.Buf8 = Array),
                (a.Buf16 = Array),
                (a.Buf32 = Array),
                a.assign(a, i));
          }),
            a.setTyped(n);
        },
        {},
      ],
      2: [
        function (t, e, a) {
          "use strict";
          var l = t("./common"),
            r = !0,
            i = !0;
          try {
            String.fromCharCode.apply(null, [0]);
          } catch (t) {
            r = !1;
          }
          try {
            String.fromCharCode.apply(null, new Uint8Array(1));
          } catch (t) {
            i = !1;
          }
          for (var o = new l.Buf8(256), n = 0; n < 256; n++)
            o[n] =
              252 <= n
                ? 6
                : 248 <= n
                ? 5
                : 240 <= n
                ? 4
                : 224 <= n
                ? 3
                : 192 <= n
                ? 2
                : 1;
          function _(t, e) {
            if (e < 65534 && ((t.subarray && i) || (!t.subarray && r)))
              return String.fromCharCode.apply(null, l.shrinkBuf(t, e));
            for (var a = "", n = 0; n < e; n++) a += String.fromCharCode(t[n]);
            return a;
          }
          (o[254] = o[254] = 1),
            (a.string2buf = function (t) {
              var e,
                a,
                n,
                r,
                i,
                s = t.length,
                h = 0;
              for (r = 0; r < s; r++)
                55296 == (64512 & (a = t.charCodeAt(r))) &&
                  r + 1 < s &&
                  56320 == (64512 & (n = t.charCodeAt(r + 1))) &&
                  ((a = 65536 + ((a - 55296) << 10) + (n - 56320)), r++),
                  (h += a < 128 ? 1 : a < 2048 ? 2 : a < 65536 ? 3 : 4);
              for (e = new l.Buf8(h), r = i = 0; i < h; r++)
                55296 == (64512 & (a = t.charCodeAt(r))) &&
                  r + 1 < s &&
                  56320 == (64512 & (n = t.charCodeAt(r + 1))) &&
                  ((a = 65536 + ((a - 55296) << 10) + (n - 56320)), r++),
                  a < 128
                    ? (e[i++] = a)
                    : (a < 2048
                        ? (e[i++] = 192 | (a >>> 6))
                        : (a < 65536
                            ? (e[i++] = 224 | (a >>> 12))
                            : ((e[i++] = 240 | (a >>> 18)),
                              (e[i++] = 128 | ((a >>> 12) & 63))),
                          (e[i++] = 128 | ((a >>> 6) & 63))),
                      (e[i++] = 128 | (63 & a)));
              return e;
            }),
            (a.buf2binstring = function (t) {
              return _(t, t.length);
            }),
            (a.binstring2buf = function (t) {
              for (
                var e = new l.Buf8(t.length), a = 0, n = e.length;
                a < n;
                a++
              )
                e[a] = t.charCodeAt(a);
              return e;
            }),
            (a.buf2string = function (t, e) {
              var a,
                n,
                r,
                i,
                s = e || t.length,
                h = new Array(2 * s);
              for (a = n = 0; a < s; )
                if ((r = t[a++]) < 128) h[n++] = r;
                else if (4 < (i = o[r])) (h[n++] = 65533), (a += i - 1);
                else {
                  for (r &= 2 === i ? 31 : 3 === i ? 15 : 7; 1 < i && a < s; )
                    (r = (r << 6) | (63 & t[a++])), i--;
                  1 < i
                    ? (h[n++] = 65533)
                    : r < 65536
                    ? (h[n++] = r)
                    : ((r -= 65536),
                      (h[n++] = 55296 | ((r >> 10) & 1023)),
                      (h[n++] = 56320 | (1023 & r)));
                }
              return _(h, n);
            }),
            (a.utf8border = function (t, e) {
              var a;
              for (
                (e = e || t.length) > t.length && (e = t.length), a = e - 1;
                0 <= a && 128 == (192 & t[a]);

              )
                a--;
              return a < 0 ? e : 0 === a ? e : a + o[t[a]] > e ? a : e;
            });
        },
        { "./common": 1 },
      ],
      3: [
        function (t, e, a) {
          "use strict";
          e.exports = function (t, e, a, n) {
            for (
              var r = (65535 & t) | 0, i = ((t >>> 16) & 65535) | 0, s = 0;
              0 !== a;

            ) {
              for (
                a -= s = 2e3 < a ? 2e3 : a;
                (i = (i + (r = (r + e[n++]) | 0)) | 0), --s;

              );
              (r %= 65521), (i %= 65521);
            }
            return r | (i << 16) | 0;
          };
        },
        {},
      ],
      4: [
        function (t, e, a) {
          "use strict";
          var h = (function () {
            for (var t, e = [], a = 0; a < 256; a++) {
              t = a;
              for (var n = 0; n < 8; n++)
                t = 1 & t ? 3988292384 ^ (t >>> 1) : t >>> 1;
              e[a] = t;
            }
            return e;
          })();
          e.exports = function (t, e, a, n) {
            var r = h,
              i = n + a;
            t ^= -1;
            for (var s = n; s < i; s++) t = (t >>> 8) ^ r[255 & (t ^ e[s])];
            return -1 ^ t;
          };
        },
        {},
      ],
      5: [
        function (t, e, a) {
          "use strict";
          var l,
            u = t("../utils/common"),
            o = t("./trees"),
            f = t("./adler32"),
            c = t("./crc32"),
            n = t("./messages"),
            _ = 0,
            d = 4,
            p = 0,
            g = -2,
            m = -1,
            b = 4,
            r = 2,
            v = 8,
            w = 9,
            i = 286,
            s = 30,
            h = 19,
            y = 2 * i + 1,
            k = 15,
            z = 3,
            x = 258,
            B = x + z + 1,
            A = 42,
            C = 113,
            S = 1,
            j = 2,
            E = 3,
            U = 4;
          function D(t, e) {
            return (t.msg = n[e]), e;
          }
          function I(t) {
            return (t << 1) - (4 < t ? 9 : 0);
          }
          function O(t) {
            for (var e = t.length; 0 <= --e; ) t[e] = 0;
          }
          function q(t) {
            var e = t.state,
              a = e.pending;
            a > t.avail_out && (a = t.avail_out),
              0 !== a &&
                (u.arraySet(
                  t.output,
                  e.pending_buf,
                  e.pending_out,
                  a,
                  t.next_out
                ),
                (t.next_out += a),
                (e.pending_out += a),
                (t.total_out += a),
                (t.avail_out -= a),
                (e.pending -= a),
                0 === e.pending && (e.pending_out = 0));
          }
          function T(t, e) {
            o._tr_flush_block(
              t,
              0 <= t.block_start ? t.block_start : -1,
              t.strstart - t.block_start,
              e
            ),
              (t.block_start = t.strstart),
              q(t.strm);
          }
          function L(t, e) {
            t.pending_buf[t.pending++] = e;
          }
          function N(t, e) {
            (t.pending_buf[t.pending++] = (e >>> 8) & 255),
              (t.pending_buf[t.pending++] = 255 & e);
          }
          function R(t, e) {
            var a,
              n,
              r = t.max_chain_length,
              i = t.strstart,
              s = t.prev_length,
              h = t.nice_match,
              l = t.strstart > t.w_size - B ? t.strstart - (t.w_size - B) : 0,
              o = t.window,
              _ = t.w_mask,
              d = t.prev,
              u = t.strstart + x,
              f = o[i + s - 1],
              c = o[i + s];
            t.prev_length >= t.good_match && (r >>= 2),
              h > t.lookahead && (h = t.lookahead);
            do {
              if (
                o[(a = e) + s] === c &&
                o[a + s - 1] === f &&
                o[a] === o[i] &&
                o[++a] === o[i + 1]
              ) {
                (i += 2), a++;
                do {} while (
                  o[++i] === o[++a] &&
                  o[++i] === o[++a] &&
                  o[++i] === o[++a] &&
                  o[++i] === o[++a] &&
                  o[++i] === o[++a] &&
                  o[++i] === o[++a] &&
                  o[++i] === o[++a] &&
                  o[++i] === o[++a] &&
                  i < u
                );
                if (((n = x - (u - i)), (i = u - x), s < n)) {
                  if (((t.match_start = e), h <= (s = n))) break;
                  (f = o[i + s - 1]), (c = o[i + s]);
                }
              }
            } while ((e = d[e & _]) > l && 0 != --r);
            return s <= t.lookahead ? s : t.lookahead;
          }
          function H(t) {
            var e,
              a,
              n,
              r,
              i,
              s,
              h,
              l,
              o,
              _,
              d = t.w_size;
            do {
              if (
                ((r = t.window_size - t.lookahead - t.strstart),
                t.strstart >= d + (d - B))
              ) {
                for (
                  u.arraySet(t.window, t.window, d, d, 0),
                    t.match_start -= d,
                    t.strstart -= d,
                    t.block_start -= d,
                    e = a = t.hash_size;
                  (n = t.head[--e]), (t.head[e] = d <= n ? n - d : 0), --a;

                );
                for (
                  e = a = d;
                  (n = t.prev[--e]), (t.prev[e] = d <= n ? n - d : 0), --a;

                );
                r += d;
              }
              if (0 === t.strm.avail_in) break;
              if (
                ((s = t.strm),
                (h = t.window),
                (l = t.strstart + t.lookahead),
                (o = r),
                (_ = void 0),
                (_ = s.avail_in),
                o < _ && (_ = o),
                (a =
                  0 === _
                    ? 0
                    : ((s.avail_in -= _),
                      u.arraySet(h, s.input, s.next_in, _, l),
                      1 === s.state.wrap
                        ? (s.adler = f(s.adler, h, _, l))
                        : 2 === s.state.wrap && (s.adler = c(s.adler, h, _, l)),
                      (s.next_in += _),
                      (s.total_in += _),
                      _)),
                (t.lookahead += a),
                t.lookahead + t.insert >= z)
              )
                for (
                  i = t.strstart - t.insert,
                    t.ins_h = t.window[i],
                    t.ins_h =
                      ((t.ins_h << t.hash_shift) ^ t.window[i + 1]) &
                      t.hash_mask;
                  t.insert &&
                  ((t.ins_h =
                    ((t.ins_h << t.hash_shift) ^ t.window[i + z - 1]) &
                    t.hash_mask),
                  (t.prev[i & t.w_mask] = t.head[t.ins_h]),
                  (t.head[t.ins_h] = i),
                  i++,
                  t.insert--,
                  !(t.lookahead + t.insert < z));

                );
            } while (t.lookahead < B && 0 !== t.strm.avail_in);
          }
          function F(t, e) {
            for (var a, n; ; ) {
              if (t.lookahead < B) {
                if ((H(t), t.lookahead < B && e === _)) return S;
                if (0 === t.lookahead) break;
              }
              if (
                ((a = 0),
                t.lookahead >= z &&
                  ((t.ins_h =
                    ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + z - 1]) &
                    t.hash_mask),
                  (a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                  (t.head[t.ins_h] = t.strstart)),
                0 !== a &&
                  t.strstart - a <= t.w_size - B &&
                  (t.match_length = R(t, a)),
                t.match_length >= z)
              )
                if (
                  ((n = o._tr_tally(
                    t,
                    t.strstart - t.match_start,
                    t.match_length - z
                  )),
                  (t.lookahead -= t.match_length),
                  t.match_length <= t.max_lazy_match && t.lookahead >= z)
                ) {
                  for (
                    t.match_length--;
                    t.strstart++,
                      (t.ins_h =
                        ((t.ins_h << t.hash_shift) ^
                          t.window[t.strstart + z - 1]) &
                        t.hash_mask),
                      (a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                      (t.head[t.ins_h] = t.strstart),
                      0 != --t.match_length;

                  );
                  t.strstart++;
                } else
                  (t.strstart += t.match_length),
                    (t.match_length = 0),
                    (t.ins_h = t.window[t.strstart]),
                    (t.ins_h =
                      ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + 1]) &
                      t.hash_mask);
              else
                (n = o._tr_tally(t, 0, t.window[t.strstart])),
                  t.lookahead--,
                  t.strstart++;
              if (n && (T(t, !1), 0 === t.strm.avail_out)) return S;
            }
            return (
              (t.insert = t.strstart < z - 1 ? t.strstart : z - 1),
              e === d
                ? (T(t, !0), 0 === t.strm.avail_out ? E : U)
                : t.last_lit && (T(t, !1), 0 === t.strm.avail_out)
                ? S
                : j
            );
          }
          function K(t, e) {
            for (var a, n, r; ; ) {
              if (t.lookahead < B) {
                if ((H(t), t.lookahead < B && e === _)) return S;
                if (0 === t.lookahead) break;
              }
              if (
                ((a = 0),
                t.lookahead >= z &&
                  ((t.ins_h =
                    ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + z - 1]) &
                    t.hash_mask),
                  (a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                  (t.head[t.ins_h] = t.strstart)),
                (t.prev_length = t.match_length),
                (t.prev_match = t.match_start),
                (t.match_length = z - 1),
                0 !== a &&
                  t.prev_length < t.max_lazy_match &&
                  t.strstart - a <= t.w_size - B &&
                  ((t.match_length = R(t, a)),
                  t.match_length <= 5 &&
                    (1 === t.strategy ||
                      (t.match_length === z &&
                        4096 < t.strstart - t.match_start)) &&
                    (t.match_length = z - 1)),
                t.prev_length >= z && t.match_length <= t.prev_length)
              ) {
                for (
                  r = t.strstart + t.lookahead - z,
                    n = o._tr_tally(
                      t,
                      t.strstart - 1 - t.prev_match,
                      t.prev_length - z
                    ),
                    t.lookahead -= t.prev_length - 1,
                    t.prev_length -= 2;
                  ++t.strstart <= r &&
                    ((t.ins_h =
                      ((t.ins_h << t.hash_shift) ^
                        t.window[t.strstart + z - 1]) &
                      t.hash_mask),
                    (a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
                    (t.head[t.ins_h] = t.strstart)),
                    0 != --t.prev_length;

                );
                if (
                  ((t.match_available = 0),
                  (t.match_length = z - 1),
                  t.strstart++,
                  n && (T(t, !1), 0 === t.strm.avail_out))
                )
                  return S;
              } else if (t.match_available) {
                if (
                  ((n = o._tr_tally(t, 0, t.window[t.strstart - 1])) &&
                    T(t, !1),
                  t.strstart++,
                  t.lookahead--,
                  0 === t.strm.avail_out)
                )
                  return S;
              } else (t.match_available = 1), t.strstart++, t.lookahead--;
            }
            return (
              t.match_available &&
                ((n = o._tr_tally(t, 0, t.window[t.strstart - 1])),
                (t.match_available = 0)),
              (t.insert = t.strstart < z - 1 ? t.strstart : z - 1),
              e === d
                ? (T(t, !0), 0 === t.strm.avail_out ? E : U)
                : t.last_lit && (T(t, !1), 0 === t.strm.avail_out)
                ? S
                : j
            );
          }
          function M(t, e, a, n, r) {
            (this.good_length = t),
              (this.max_lazy = e),
              (this.nice_length = a),
              (this.max_chain = n),
              (this.func = r);
          }
          function P() {
            (this.strm = null),
              (this.status = 0),
              (this.pending_buf = null),
              (this.pending_buf_size = 0),
              (this.pending_out = 0),
              (this.pending = 0),
              (this.wrap = 0),
              (this.gzhead = null),
              (this.gzindex = 0),
              (this.method = v),
              (this.last_flush = -1),
              (this.w_size = 0),
              (this.w_bits = 0),
              (this.w_mask = 0),
              (this.window = null),
              (this.window_size = 0),
              (this.prev = null),
              (this.head = null),
              (this.ins_h = 0),
              (this.hash_size = 0),
              (this.hash_bits = 0),
              (this.hash_mask = 0),
              (this.hash_shift = 0),
              (this.block_start = 0),
              (this.match_length = 0),
              (this.prev_match = 0),
              (this.match_available = 0),
              (this.strstart = 0),
              (this.match_start = 0),
              (this.lookahead = 0),
              (this.prev_length = 0),
              (this.max_chain_length = 0),
              (this.max_lazy_match = 0),
              (this.level = 0),
              (this.strategy = 0),
              (this.good_match = 0),
              (this.nice_match = 0),
              (this.dyn_ltree = new u.Buf16(2 * y)),
              (this.dyn_dtree = new u.Buf16(2 * (2 * s + 1))),
              (this.bl_tree = new u.Buf16(2 * (2 * h + 1))),
              O(this.dyn_ltree),
              O(this.dyn_dtree),
              O(this.bl_tree),
              (this.l_desc = null),
              (this.d_desc = null),
              (this.bl_desc = null),
              (this.bl_count = new u.Buf16(k + 1)),
              (this.heap = new u.Buf16(2 * i + 1)),
              O(this.heap),
              (this.heap_len = 0),
              (this.heap_max = 0),
              (this.depth = new u.Buf16(2 * i + 1)),
              O(this.depth),
              (this.l_buf = 0),
              (this.lit_bufsize = 0),
              (this.last_lit = 0),
              (this.d_buf = 0),
              (this.opt_len = 0),
              (this.static_len = 0),
              (this.matches = 0),
              (this.insert = 0),
              (this.bi_buf = 0),
              (this.bi_valid = 0);
          }
          function G(t) {
            var e;
            return t && t.state
              ? ((t.total_in = t.total_out = 0),
                (t.data_type = r),
                ((e = t.state).pending = 0),
                (e.pending_out = 0),
                e.wrap < 0 && (e.wrap = -e.wrap),
                (e.status = e.wrap ? A : C),
                (t.adler = 2 === e.wrap ? 0 : 1),
                (e.last_flush = _),
                o._tr_init(e),
                p)
              : D(t, g);
          }
          function J(t) {
            var e,
              a = G(t);
            return (
              a === p &&
                (((e = t.state).window_size = 2 * e.w_size),
                O(e.head),
                (e.max_lazy_match = l[e.level].max_lazy),
                (e.good_match = l[e.level].good_length),
                (e.nice_match = l[e.level].nice_length),
                (e.max_chain_length = l[e.level].max_chain),
                (e.strstart = 0),
                (e.block_start = 0),
                (e.lookahead = 0),
                (e.insert = 0),
                (e.match_length = e.prev_length = z - 1),
                (e.match_available = 0),
                (e.ins_h = 0)),
              a
            );
          }
          function Q(t, e, a, n, r, i) {
            if (!t) return g;
            var s = 1;
            if (
              (e === m && (e = 6),
              n < 0 ? ((s = 0), (n = -n)) : 15 < n && ((s = 2), (n -= 16)),
              r < 1 ||
                w < r ||
                a !== v ||
                n < 8 ||
                15 < n ||
                e < 0 ||
                9 < e ||
                i < 0 ||
                b < i)
            )
              return D(t, g);
            8 === n && (n = 9);
            var h = new P();
            return (
              ((t.state = h).strm = t),
              (h.wrap = s),
              (h.gzhead = null),
              (h.w_bits = n),
              (h.w_size = 1 << h.w_bits),
              (h.w_mask = h.w_size - 1),
              (h.hash_bits = r + 7),
              (h.hash_size = 1 << h.hash_bits),
              (h.hash_mask = h.hash_size - 1),
              (h.hash_shift = ~~((h.hash_bits + z - 1) / z)),
              (h.window = new u.Buf8(2 * h.w_size)),
              (h.head = new u.Buf16(h.hash_size)),
              (h.prev = new u.Buf16(h.w_size)),
              (h.lit_bufsize = 1 << (r + 6)),
              (h.pending_buf_size = 4 * h.lit_bufsize),
              (h.pending_buf = new u.Buf8(h.pending_buf_size)),
              (h.d_buf = 1 * h.lit_bufsize),
              (h.l_buf = 3 * h.lit_bufsize),
              (h.level = e),
              (h.strategy = i),
              (h.method = a),
              J(t)
            );
          }
          (l = [
            new M(0, 0, 0, 0, function (t, e) {
              var a = 65535;
              for (
                a > t.pending_buf_size - 5 && (a = t.pending_buf_size - 5);
                ;

              ) {
                if (t.lookahead <= 1) {
                  if ((H(t), 0 === t.lookahead && e === _)) return S;
                  if (0 === t.lookahead) break;
                }
                (t.strstart += t.lookahead), (t.lookahead = 0);
                var n = t.block_start + a;
                if (
                  (0 === t.strstart || t.strstart >= n) &&
                  ((t.lookahead = t.strstart - n),
                  (t.strstart = n),
                  T(t, !1),
                  0 === t.strm.avail_out)
                )
                  return S;
                if (
                  t.strstart - t.block_start >= t.w_size - B &&
                  (T(t, !1), 0 === t.strm.avail_out)
                )
                  return S;
              }
              return (
                (t.insert = 0),
                e === d
                  ? (T(t, !0), 0 === t.strm.avail_out ? E : U)
                  : (t.strstart > t.block_start && (T(t, !1), t.strm.avail_out),
                    S)
              );
            }),
            new M(4, 4, 8, 4, F),
            new M(4, 5, 16, 8, F),
            new M(4, 6, 32, 32, F),
            new M(4, 4, 16, 16, K),
            new M(8, 16, 32, 32, K),
            new M(8, 16, 128, 128, K),
            new M(8, 32, 128, 256, K),
            new M(32, 128, 258, 1024, K),
            new M(32, 258, 258, 4096, K),
          ]),
            (a.deflateInit = function (t, e) {
              return Q(t, e, v, 15, 8, 0);
            }),
            (a.deflateInit2 = Q),
            (a.deflateReset = J),
            (a.deflateResetKeep = G),
            (a.deflateSetHeader = function (t, e) {
              return t && t.state
                ? 2 !== t.state.wrap
                  ? g
                  : ((t.state.gzhead = e), p)
                : g;
            }),
            (a.deflate = function (t, e) {
              var a, n, r, i;
              if (!t || !t.state || 5 < e || e < 0) return t ? D(t, g) : g;
              if (
                ((n = t.state),
                !t.output ||
                  (!t.input && 0 !== t.avail_in) ||
                  (666 === n.status && e !== d))
              )
                return D(t, 0 === t.avail_out ? -5 : g);
              if (
                ((n.strm = t),
                (a = n.last_flush),
                (n.last_flush = e),
                n.status === A)
              )
                if (2 === n.wrap)
                  (t.adler = 0),
                    L(n, 31),
                    L(n, 139),
                    L(n, 8),
                    n.gzhead
                      ? (L(
                          n,
                          (n.gzhead.text ? 1 : 0) +
                            (n.gzhead.hcrc ? 2 : 0) +
                            (n.gzhead.extra ? 4 : 0) +
                            (n.gzhead.name ? 8 : 0) +
                            (n.gzhead.comment ? 16 : 0)
                        ),
                        L(n, 255 & n.gzhead.time),
                        L(n, (n.gzhead.time >> 8) & 255),
                        L(n, (n.gzhead.time >> 16) & 255),
                        L(n, (n.gzhead.time >> 24) & 255),
                        L(
                          n,
                          9 === n.level
                            ? 2
                            : 2 <= n.strategy || n.level < 2
                            ? 4
                            : 0
                        ),
                        L(n, 255 & n.gzhead.os),
                        n.gzhead.extra &&
                          n.gzhead.extra.length &&
                          (L(n, 255 & n.gzhead.extra.length),
                          L(n, (n.gzhead.extra.length >> 8) & 255)),
                        n.gzhead.hcrc &&
                          (t.adler = c(t.adler, n.pending_buf, n.pending, 0)),
                        (n.gzindex = 0),
                        (n.status = 69))
                      : (L(n, 0),
                        L(n, 0),
                        L(n, 0),
                        L(n, 0),
                        L(n, 0),
                        L(
                          n,
                          9 === n.level
                            ? 2
                            : 2 <= n.strategy || n.level < 2
                            ? 4
                            : 0
                        ),
                        L(n, 3),
                        (n.status = C));
                else {
                  var s = (v + ((n.w_bits - 8) << 4)) << 8;
                  (s |=
                    (2 <= n.strategy || n.level < 2
                      ? 0
                      : n.level < 6
                      ? 1
                      : 6 === n.level
                      ? 2
                      : 3) << 6),
                    0 !== n.strstart && (s |= 32),
                    (s += 31 - (s % 31)),
                    (n.status = C),
                    N(n, s),
                    0 !== n.strstart &&
                      (N(n, t.adler >>> 16), N(n, 65535 & t.adler)),
                    (t.adler = 1);
                }
              if (69 === n.status)
                if (n.gzhead.extra) {
                  for (
                    r = n.pending;
                    n.gzindex < (65535 & n.gzhead.extra.length) &&
                    (n.pending !== n.pending_buf_size ||
                      (n.gzhead.hcrc &&
                        n.pending > r &&
                        (t.adler = c(t.adler, n.pending_buf, n.pending - r, r)),
                      q(t),
                      (r = n.pending),
                      n.pending !== n.pending_buf_size));

                  )
                    L(n, 255 & n.gzhead.extra[n.gzindex]), n.gzindex++;
                  n.gzhead.hcrc &&
                    n.pending > r &&
                    (t.adler = c(t.adler, n.pending_buf, n.pending - r, r)),
                    n.gzindex === n.gzhead.extra.length &&
                      ((n.gzindex = 0), (n.status = 73));
                } else n.status = 73;
              if (73 === n.status)
                if (n.gzhead.name) {
                  r = n.pending;
                  do {
                    if (
                      n.pending === n.pending_buf_size &&
                      (n.gzhead.hcrc &&
                        n.pending > r &&
                        (t.adler = c(t.adler, n.pending_buf, n.pending - r, r)),
                      q(t),
                      (r = n.pending),
                      n.pending === n.pending_buf_size)
                    ) {
                      i = 1;
                      break;
                    }
                    L(
                      n,
                      (i =
                        n.gzindex < n.gzhead.name.length
                          ? 255 & n.gzhead.name.charCodeAt(n.gzindex++)
                          : 0)
                    );
                  } while (0 !== i);
                  n.gzhead.hcrc &&
                    n.pending > r &&
                    (t.adler = c(t.adler, n.pending_buf, n.pending - r, r)),
                    0 === i && ((n.gzindex = 0), (n.status = 91));
                } else n.status = 91;
              if (91 === n.status)
                if (n.gzhead.comment) {
                  r = n.pending;
                  do {
                    if (
                      n.pending === n.pending_buf_size &&
                      (n.gzhead.hcrc &&
                        n.pending > r &&
                        (t.adler = c(t.adler, n.pending_buf, n.pending - r, r)),
                      q(t),
                      (r = n.pending),
                      n.pending === n.pending_buf_size)
                    ) {
                      i = 1;
                      break;
                    }
                    L(
                      n,
                      (i =
                        n.gzindex < n.gzhead.comment.length
                          ? 255 & n.gzhead.comment.charCodeAt(n.gzindex++)
                          : 0)
                    );
                  } while (0 !== i);
                  n.gzhead.hcrc &&
                    n.pending > r &&
                    (t.adler = c(t.adler, n.pending_buf, n.pending - r, r)),
                    0 === i && (n.status = 103);
                } else n.status = 103;
              if (
                (103 === n.status &&
                  (n.gzhead.hcrc
                    ? (n.pending + 2 > n.pending_buf_size && q(t),
                      n.pending + 2 <= n.pending_buf_size &&
                        (L(n, 255 & t.adler),
                        L(n, (t.adler >> 8) & 255),
                        (t.adler = 0),
                        (n.status = C)))
                    : (n.status = C)),
                0 !== n.pending)
              ) {
                if ((q(t), 0 === t.avail_out)) return (n.last_flush = -1), p;
              } else if (0 === t.avail_in && I(e) <= I(a) && e !== d)
                return D(t, -5);
              if (666 === n.status && 0 !== t.avail_in) return D(t, -5);
              if (
                0 !== t.avail_in ||
                0 !== n.lookahead ||
                (e !== _ && 666 !== n.status)
              ) {
                var h =
                  2 === n.strategy
                    ? (function (t, e) {
                        for (var a; ; ) {
                          if (0 === t.lookahead && (H(t), 0 === t.lookahead)) {
                            if (e === _) return S;
                            break;
                          }
                          if (
                            ((t.match_length = 0),
                            (a = o._tr_tally(t, 0, t.window[t.strstart])),
                            t.lookahead--,
                            t.strstart++,
                            a && (T(t, !1), 0 === t.strm.avail_out))
                          )
                            return S;
                        }
                        return (
                          (t.insert = 0),
                          e === d
                            ? (T(t, !0), 0 === t.strm.avail_out ? E : U)
                            : t.last_lit && (T(t, !1), 0 === t.strm.avail_out)
                            ? S
                            : j
                        );
                      })(n, e)
                    : 3 === n.strategy
                    ? (function (t, e) {
                        for (var a, n, r, i, s = t.window; ; ) {
                          if (t.lookahead <= x) {
                            if ((H(t), t.lookahead <= x && e === _)) return S;
                            if (0 === t.lookahead) break;
                          }
                          if (
                            ((t.match_length = 0),
                            t.lookahead >= z &&
                              0 < t.strstart &&
                              (n = s[(r = t.strstart - 1)]) === s[++r] &&
                              n === s[++r] &&
                              n === s[++r])
                          ) {
                            i = t.strstart + x;
                            do {} while (
                              n === s[++r] &&
                              n === s[++r] &&
                              n === s[++r] &&
                              n === s[++r] &&
                              n === s[++r] &&
                              n === s[++r] &&
                              n === s[++r] &&
                              n === s[++r] &&
                              r < i
                            );
                            (t.match_length = x - (i - r)),
                              t.match_length > t.lookahead &&
                                (t.match_length = t.lookahead);
                          }
                          if (
                            (t.match_length >= z
                              ? ((a = o._tr_tally(t, 1, t.match_length - z)),
                                (t.lookahead -= t.match_length),
                                (t.strstart += t.match_length),
                                (t.match_length = 0))
                              : ((a = o._tr_tally(t, 0, t.window[t.strstart])),
                                t.lookahead--,
                                t.strstart++),
                            a && (T(t, !1), 0 === t.strm.avail_out))
                          )
                            return S;
                        }
                        return (
                          (t.insert = 0),
                          e === d
                            ? (T(t, !0), 0 === t.strm.avail_out ? E : U)
                            : t.last_lit && (T(t, !1), 0 === t.strm.avail_out)
                            ? S
                            : j
                        );
                      })(n, e)
                    : l[n.level].func(n, e);
                if (
                  ((h !== E && h !== U) || (n.status = 666), h === S || h === E)
                )
                  return 0 === t.avail_out && (n.last_flush = -1), p;
                if (
                  h === j &&
                  (1 === e
                    ? o._tr_align(n)
                    : 5 !== e &&
                      (o._tr_stored_block(n, 0, 0, !1),
                      3 === e &&
                        (O(n.head),
                        0 === n.lookahead &&
                          ((n.strstart = 0),
                          (n.block_start = 0),
                          (n.insert = 0)))),
                  q(t),
                  0 === t.avail_out)
                )
                  return (n.last_flush = -1), p;
              }
              return e !== d
                ? p
                : n.wrap <= 0
                ? 1
                : (2 === n.wrap
                    ? (L(n, 255 & t.adler),
                      L(n, (t.adler >> 8) & 255),
                      L(n, (t.adler >> 16) & 255),
                      L(n, (t.adler >> 24) & 255),
                      L(n, 255 & t.total_in),
                      L(n, (t.total_in >> 8) & 255),
                      L(n, (t.total_in >> 16) & 255),
                      L(n, (t.total_in >> 24) & 255))
                    : (N(n, t.adler >>> 16), N(n, 65535 & t.adler)),
                  q(t),
                  0 < n.wrap && (n.wrap = -n.wrap),
                  0 !== n.pending ? p : 1);
            }),
            (a.deflateEnd = function (t) {
              var e;
              return t && t.state
                ? (e = t.state.status) !== A &&
                  69 !== e &&
                  73 !== e &&
                  91 !== e &&
                  103 !== e &&
                  e !== C &&
                  666 !== e
                  ? D(t, g)
                  : ((t.state = null), e === C ? D(t, -3) : p)
                : g;
            }),
            (a.deflateSetDictionary = function (t, e) {
              var a,
                n,
                r,
                i,
                s,
                h,
                l,
                o,
                _ = e.length;
              if (!t || !t.state) return g;
              if (
                2 === (i = (a = t.state).wrap) ||
                (1 === i && a.status !== A) ||
                a.lookahead
              )
                return g;
              for (
                1 === i && (t.adler = f(t.adler, e, _, 0)),
                  a.wrap = 0,
                  _ >= a.w_size &&
                    (0 === i &&
                      (O(a.head),
                      (a.strstart = 0),
                      (a.block_start = 0),
                      (a.insert = 0)),
                    (o = new u.Buf8(a.w_size)),
                    u.arraySet(o, e, _ - a.w_size, a.w_size, 0),
                    (e = o),
                    (_ = a.w_size)),
                  s = t.avail_in,
                  h = t.next_in,
                  l = t.input,
                  t.avail_in = _,
                  t.next_in = 0,
                  t.input = e,
                  H(a);
                a.lookahead >= z;

              ) {
                for (
                  n = a.strstart, r = a.lookahead - (z - 1);
                  (a.ins_h =
                    ((a.ins_h << a.hash_shift) ^ a.window[n + z - 1]) &
                    a.hash_mask),
                    (a.prev[n & a.w_mask] = a.head[a.ins_h]),
                    (a.head[a.ins_h] = n),
                    n++,
                    --r;

                );
                (a.strstart = n), (a.lookahead = z - 1), H(a);
              }
              return (
                (a.strstart += a.lookahead),
                (a.block_start = a.strstart),
                (a.insert = a.lookahead),
                (a.lookahead = 0),
                (a.match_length = a.prev_length = z - 1),
                (a.match_available = 0),
                (t.next_in = h),
                (t.input = l),
                (t.avail_in = s),
                (a.wrap = i),
                p
              );
            }),
            (a.deflateInfo = "pako deflate (from Nodeca project)");
        },
        {
          "../utils/common": 1,
          "./adler32": 3,
          "./crc32": 4,
          "./messages": 6,
          "./trees": 7,
        },
      ],
      6: [
        function (t, e, a) {
          "use strict";
          e.exports = {
            2: "need dictionary",
            1: "stream end",
            0: "",
            "-1": "file error",
            "-2": "stream error",
            "-3": "data error",
            "-4": "insufficient memory",
            "-5": "buffer error",
            "-6": "incompatible version",
          };
        },
        {},
      ],
      7: [
        function (t, e, a) {
          "use strict";
          var l = t("../utils/common"),
            h = 0,
            o = 1;
          function n(t) {
            for (var e = t.length; 0 <= --e; ) t[e] = 0;
          }
          var _ = 0,
            s = 29,
            d = 256,
            u = d + 1 + s,
            f = 30,
            c = 19,
            g = 2 * u + 1,
            m = 15,
            r = 16,
            p = 7,
            b = 256,
            v = 16,
            w = 17,
            y = 18,
            k = [
              0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4,
              4, 4, 5, 5, 5, 5, 0,
            ],
            z = [
              0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9,
              10, 10, 11, 11, 12, 12, 13, 13,
            ],
            x = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
            B = [
              16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
            ],
            A = new Array(2 * (u + 2));
          n(A);
          var C = new Array(2 * f);
          n(C);
          var S = new Array(512);
          n(S);
          var j = new Array(256);
          n(j);
          var E = new Array(s);
          n(E);
          var U,
            D,
            I,
            O = new Array(f);
          function q(t, e, a, n, r) {
            (this.static_tree = t),
              (this.extra_bits = e),
              (this.extra_base = a),
              (this.elems = n),
              (this.max_length = r),
              (this.has_stree = t && t.length);
          }
          function i(t, e) {
            (this.dyn_tree = t), (this.max_code = 0), (this.stat_desc = e);
          }
          function T(t) {
            return t < 256 ? S[t] : S[256 + (t >>> 7)];
          }
          function L(t, e) {
            (t.pending_buf[t.pending++] = 255 & e),
              (t.pending_buf[t.pending++] = (e >>> 8) & 255);
          }
          function N(t, e, a) {
            t.bi_valid > r - a
              ? ((t.bi_buf |= (e << t.bi_valid) & 65535),
                L(t, t.bi_buf),
                (t.bi_buf = e >> (r - t.bi_valid)),
                (t.bi_valid += a - r))
              : ((t.bi_buf |= (e << t.bi_valid) & 65535), (t.bi_valid += a));
          }
          function R(t, e, a) {
            N(t, a[2 * e], a[2 * e + 1]);
          }
          function H(t, e) {
            for (var a = 0; (a |= 1 & t), (t >>>= 1), (a <<= 1), 0 < --e; );
            return a >>> 1;
          }
          function F(t, e, a) {
            var n,
              r,
              i = new Array(m + 1),
              s = 0;
            for (n = 1; n <= m; n++) i[n] = s = (s + a[n - 1]) << 1;
            for (r = 0; r <= e; r++) {
              var h = t[2 * r + 1];
              0 !== h && (t[2 * r] = H(i[h]++, h));
            }
          }
          function K(t) {
            var e;
            for (e = 0; e < u; e++) t.dyn_ltree[2 * e] = 0;
            for (e = 0; e < f; e++) t.dyn_dtree[2 * e] = 0;
            for (e = 0; e < c; e++) t.bl_tree[2 * e] = 0;
            (t.dyn_ltree[2 * b] = 1),
              (t.opt_len = t.static_len = 0),
              (t.last_lit = t.matches = 0);
          }
          function M(t) {
            8 < t.bi_valid
              ? L(t, t.bi_buf)
              : 0 < t.bi_valid && (t.pending_buf[t.pending++] = t.bi_buf),
              (t.bi_buf = 0),
              (t.bi_valid = 0);
          }
          function P(t, e, a, n) {
            var r = 2 * e,
              i = 2 * a;
            return t[r] < t[i] || (t[r] === t[i] && n[e] <= n[a]);
          }
          function G(t, e, a) {
            for (
              var n = t.heap[a], r = a << 1;
              r <= t.heap_len &&
              (r < t.heap_len && P(e, t.heap[r + 1], t.heap[r], t.depth) && r++,
              !P(e, n, t.heap[r], t.depth));

            )
              (t.heap[a] = t.heap[r]), (a = r), (r <<= 1);
            t.heap[a] = n;
          }
          function J(t, e, a) {
            var n,
              r,
              i,
              s,
              h = 0;
            if (0 !== t.last_lit)
              for (
                ;
                (n =
                  (t.pending_buf[t.d_buf + 2 * h] << 8) |
                  t.pending_buf[t.d_buf + 2 * h + 1]),
                  (r = t.pending_buf[t.l_buf + h]),
                  h++,
                  0 === n
                    ? R(t, r, e)
                    : (R(t, (i = j[r]) + d + 1, e),
                      0 !== (s = k[i]) && N(t, (r -= E[i]), s),
                      R(t, (i = T(--n)), a),
                      0 !== (s = z[i]) && N(t, (n -= O[i]), s)),
                  h < t.last_lit;

              );
            R(t, b, e);
          }
          function Q(t, e) {
            var a,
              n,
              r,
              i = e.dyn_tree,
              s = e.stat_desc.static_tree,
              h = e.stat_desc.has_stree,
              l = e.stat_desc.elems,
              o = -1;
            for (t.heap_len = 0, t.heap_max = g, a = 0; a < l; a++)
              0 !== i[2 * a]
                ? ((t.heap[++t.heap_len] = o = a), (t.depth[a] = 0))
                : (i[2 * a + 1] = 0);
            for (; t.heap_len < 2; )
              (i[2 * (r = t.heap[++t.heap_len] = o < 2 ? ++o : 0)] = 1),
                (t.depth[r] = 0),
                t.opt_len--,
                h && (t.static_len -= s[2 * r + 1]);
            for (e.max_code = o, a = t.heap_len >> 1; 1 <= a; a--) G(t, i, a);
            for (
              r = l;
              (a = t.heap[1]),
                (t.heap[1] = t.heap[t.heap_len--]),
                G(t, i, 1),
                (n = t.heap[1]),
                (t.heap[--t.heap_max] = a),
                (t.heap[--t.heap_max] = n),
                (i[2 * r] = i[2 * a] + i[2 * n]),
                (t.depth[r] =
                  (t.depth[a] >= t.depth[n] ? t.depth[a] : t.depth[n]) + 1),
                (i[2 * a + 1] = i[2 * n + 1] = r),
                (t.heap[1] = r++),
                G(t, i, 1),
                2 <= t.heap_len;

            );
            (t.heap[--t.heap_max] = t.heap[1]),
              (function (t, e) {
                var a,
                  n,
                  r,
                  i,
                  s,
                  h,
                  l = e.dyn_tree,
                  o = e.max_code,
                  _ = e.stat_desc.static_tree,
                  d = e.stat_desc.has_stree,
                  u = e.stat_desc.extra_bits,
                  f = e.stat_desc.extra_base,
                  c = e.stat_desc.max_length,
                  p = 0;
                for (i = 0; i <= m; i++) t.bl_count[i] = 0;
                for (
                  l[2 * t.heap[t.heap_max] + 1] = 0, a = t.heap_max + 1;
                  a < g;
                  a++
                )
                  c < (i = l[2 * l[2 * (n = t.heap[a]) + 1] + 1] + 1) &&
                    ((i = c), p++),
                    (l[2 * n + 1] = i),
                    o < n ||
                      (t.bl_count[i]++,
                      (s = 0),
                      f <= n && (s = u[n - f]),
                      (h = l[2 * n]),
                      (t.opt_len += h * (i + s)),
                      d && (t.static_len += h * (_[2 * n + 1] + s)));
                if (0 !== p) {
                  do {
                    for (i = c - 1; 0 === t.bl_count[i]; ) i--;
                    t.bl_count[i]--,
                      (t.bl_count[i + 1] += 2),
                      t.bl_count[c]--,
                      (p -= 2);
                  } while (0 < p);
                  for (i = c; 0 !== i; i--)
                    for (n = t.bl_count[i]; 0 !== n; )
                      o < (r = t.heap[--a]) ||
                        (l[2 * r + 1] !== i &&
                          ((t.opt_len += (i - l[2 * r + 1]) * l[2 * r]),
                          (l[2 * r + 1] = i)),
                        n--);
                }
              })(t, e),
              F(i, o, t.bl_count);
          }
          function V(t, e, a) {
            var n,
              r,
              i = -1,
              s = e[1],
              h = 0,
              l = 7,
              o = 4;
            for (
              0 === s && ((l = 138), (o = 3)),
                e[2 * (a + 1) + 1] = 65535,
                n = 0;
              n <= a;
              n++
            )
              (r = s),
                (s = e[2 * (n + 1) + 1]),
                (++h < l && r === s) ||
                  (h < o
                    ? (t.bl_tree[2 * r] += h)
                    : 0 !== r
                    ? (r !== i && t.bl_tree[2 * r]++, t.bl_tree[2 * v]++)
                    : h <= 10
                    ? t.bl_tree[2 * w]++
                    : t.bl_tree[2 * y]++,
                  (i = r),
                  (h = 0) === s
                    ? ((l = 138), (o = 3))
                    : r === s
                    ? ((l = 6), (o = 3))
                    : ((l = 7), (o = 4)));
          }
          function W(t, e, a) {
            var n,
              r,
              i = -1,
              s = e[1],
              h = 0,
              l = 7,
              o = 4;
            for (0 === s && ((l = 138), (o = 3)), n = 0; n <= a; n++)
              if (((r = s), (s = e[2 * (n + 1) + 1]), !(++h < l && r === s))) {
                if (h < o) for (; R(t, r, t.bl_tree), 0 != --h; );
                else
                  0 !== r
                    ? (r !== i && (R(t, r, t.bl_tree), h--),
                      R(t, v, t.bl_tree),
                      N(t, h - 3, 2))
                    : h <= 10
                    ? (R(t, w, t.bl_tree), N(t, h - 3, 3))
                    : (R(t, y, t.bl_tree), N(t, h - 11, 7));
                (i = r),
                  (h = 0) === s
                    ? ((l = 138), (o = 3))
                    : r === s
                    ? ((l = 6), (o = 3))
                    : ((l = 7), (o = 4));
              }
          }
          n(O);
          var X = !1;
          function Y(t, e, a, n) {
            var r, i, s, h;
            N(t, (_ << 1) + (n ? 1 : 0), 3),
              (i = e),
              (s = a),
              (h = !0),
              M((r = t)),
              h && (L(r, s), L(r, ~s)),
              l.arraySet(r.pending_buf, r.window, i, s, r.pending),
              (r.pending += s);
          }
          (a._tr_init = function (t) {
            X ||
              ((function () {
                var t,
                  e,
                  a,
                  n,
                  r,
                  i = new Array(m + 1);
                for (n = a = 0; n < s - 1; n++)
                  for (E[n] = a, t = 0; t < 1 << k[n]; t++) j[a++] = n;
                for (j[a - 1] = n, n = r = 0; n < 16; n++)
                  for (O[n] = r, t = 0; t < 1 << z[n]; t++) S[r++] = n;
                for (r >>= 7; n < f; n++)
                  for (O[n] = r << 7, t = 0; t < 1 << (z[n] - 7); t++)
                    S[256 + r++] = n;
                for (e = 0; e <= m; e++) i[e] = 0;
                for (t = 0; t <= 143; ) (A[2 * t + 1] = 8), t++, i[8]++;
                for (; t <= 255; ) (A[2 * t + 1] = 9), t++, i[9]++;
                for (; t <= 279; ) (A[2 * t + 1] = 7), t++, i[7]++;
                for (; t <= 287; ) (A[2 * t + 1] = 8), t++, i[8]++;
                for (F(A, u + 1, i), t = 0; t < f; t++)
                  (C[2 * t + 1] = 5), (C[2 * t] = H(t, 5));
                (U = new q(A, k, d + 1, u, m)),
                  (D = new q(C, z, 0, f, m)),
                  (I = new q(new Array(0), x, 0, c, p));
              })(),
              (X = !0)),
              (t.l_desc = new i(t.dyn_ltree, U)),
              (t.d_desc = new i(t.dyn_dtree, D)),
              (t.bl_desc = new i(t.bl_tree, I)),
              (t.bi_buf = 0),
              (t.bi_valid = 0),
              K(t);
          }),
            (a._tr_stored_block = Y),
            (a._tr_flush_block = function (t, e, a, n) {
              var r,
                i,
                s = 0;
              0 < t.level
                ? (2 === t.strm.data_type &&
                    (t.strm.data_type = (function (t) {
                      var e,
                        a = 4093624447;
                      for (e = 0; e <= 31; e++, a >>>= 1)
                        if (1 & a && 0 !== t.dyn_ltree[2 * e]) return h;
                      if (
                        0 !== t.dyn_ltree[18] ||
                        0 !== t.dyn_ltree[20] ||
                        0 !== t.dyn_ltree[26]
                      )
                        return o;
                      for (e = 32; e < d; e++)
                        if (0 !== t.dyn_ltree[2 * e]) return o;
                      return h;
                    })(t)),
                  Q(t, t.l_desc),
                  Q(t, t.d_desc),
                  (s = (function (t) {
                    var e;
                    for (
                      V(t, t.dyn_ltree, t.l_desc.max_code),
                        V(t, t.dyn_dtree, t.d_desc.max_code),
                        Q(t, t.bl_desc),
                        e = c - 1;
                      3 <= e && 0 === t.bl_tree[2 * B[e] + 1];
                      e--
                    );
                    return (t.opt_len += 3 * (e + 1) + 5 + 5 + 4), e;
                  })(t)),
                  (r = (t.opt_len + 3 + 7) >>> 3),
                  (i = (t.static_len + 3 + 7) >>> 3) <= r && (r = i))
                : (r = i = a + 5),
                a + 4 <= r && -1 !== e
                  ? Y(t, e, a, n)
                  : 4 === t.strategy || i === r
                  ? (N(t, 2 + (n ? 1 : 0), 3), J(t, A, C))
                  : (N(t, 4 + (n ? 1 : 0), 3),
                    (function (t, e, a, n) {
                      var r;
                      for (
                        N(t, e - 257, 5), N(t, a - 1, 5), N(t, n - 4, 4), r = 0;
                        r < n;
                        r++
                      )
                        N(t, t.bl_tree[2 * B[r] + 1], 3);
                      W(t, t.dyn_ltree, e - 1), W(t, t.dyn_dtree, a - 1);
                    })(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, s + 1),
                    J(t, t.dyn_ltree, t.dyn_dtree)),
                K(t),
                n && M(t);
            }),
            (a._tr_tally = function (t, e, a) {
              return (
                (t.pending_buf[t.d_buf + 2 * t.last_lit] = (e >>> 8) & 255),
                (t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e),
                (t.pending_buf[t.l_buf + t.last_lit] = 255 & a),
                t.last_lit++,
                0 === e
                  ? t.dyn_ltree[2 * a]++
                  : (t.matches++,
                    e--,
                    t.dyn_ltree[2 * (j[a] + d + 1)]++,
                    t.dyn_dtree[2 * T(e)]++),
                t.last_lit === t.lit_bufsize - 1
              );
            }),
            (a._tr_align = function (t) {
              var e;
              N(t, 2, 3),
                R(t, b, A),
                16 === (e = t).bi_valid
                  ? (L(e, e.bi_buf), (e.bi_buf = 0), (e.bi_valid = 0))
                  : 8 <= e.bi_valid &&
                    ((e.pending_buf[e.pending++] = 255 & e.bi_buf),
                    (e.bi_buf >>= 8),
                    (e.bi_valid -= 8));
            });
        },
        { "../utils/common": 1 },
      ],
      8: [
        function (t, e, a) {
          "use strict";
          e.exports = function () {
            (this.input = null),
              (this.next_in = 0),
              (this.avail_in = 0),
              (this.total_in = 0),
              (this.output = null),
              (this.next_out = 0),
              (this.avail_out = 0),
              (this.total_out = 0),
              (this.msg = ""),
              (this.state = null),
              (this.data_type = 2),
              (this.adler = 0);
          };
        },
        {},
      ],
      "/lib/deflate.js": [
        function (t, e, a) {
          "use strict";
          var s = t("./zlib/deflate"),
            h = t("./utils/common"),
            l = t("./utils/strings"),
            r = t("./zlib/messages"),
            i = t("./zlib/zstream"),
            o = Object.prototype.toString,
            _ = 0,
            d = -1,
            u = 0,
            f = 8;
          function c(t) {
            if (!(this instanceof c)) return new c(t);
            this.options = h.assign(
              {
                level: d,
                method: f,
                chunkSize: 16384,
                windowBits: 15,
                memLevel: 8,
                strategy: u,
                to: "",
              },
              t || {}
            );
            var e = this.options;
            e.raw && 0 < e.windowBits
              ? (e.windowBits = -e.windowBits)
              : e.gzip &&
                0 < e.windowBits &&
                e.windowBits < 16 &&
                (e.windowBits += 16),
              (this.err = 0),
              (this.msg = ""),
              (this.ended = !1),
              (this.chunks = []),
              (this.strm = new i()),
              (this.strm.avail_out = 0);
            var a = s.deflateInit2(
              this.strm,
              e.level,
              e.method,
              e.windowBits,
              e.memLevel,
              e.strategy
            );
            if (a !== _) throw new Error(r[a]);
            if (
              (e.header && s.deflateSetHeader(this.strm, e.header),
              e.dictionary)
            ) {
              var n;
              if (
                ((n =
                  "string" == typeof e.dictionary
                    ? l.string2buf(e.dictionary)
                    : "[object ArrayBuffer]" === o.call(e.dictionary)
                    ? new Uint8Array(e.dictionary)
                    : e.dictionary),
                (a = s.deflateSetDictionary(this.strm, n)) !== _)
              )
                throw new Error(r[a]);
              this._dict_set = !0;
            }
          }
          function n(t, e) {
            var a = new c(e);
            if ((a.push(t, !0), a.err)) throw a.msg || r[a.err];
            return a.result;
          }
          (c.prototype.push = function (t, e) {
            var a,
              n,
              r = this.strm,
              i = this.options.chunkSize;
            if (this.ended) return !1;
            (n = e === ~~e ? e : !0 === e ? 4 : 0),
              "string" == typeof t
                ? (r.input = l.string2buf(t))
                : "[object ArrayBuffer]" === o.call(t)
                ? (r.input = new Uint8Array(t))
                : (r.input = t),
              (r.next_in = 0),
              (r.avail_in = r.input.length);
            do {
              if (
                (0 === r.avail_out &&
                  ((r.output = new h.Buf8(i)),
                  (r.next_out = 0),
                  (r.avail_out = i)),
                1 !== (a = s.deflate(r, n)) && a !== _)
              )
                return this.onEnd(a), !(this.ended = !0);
              (0 !== r.avail_out &&
                (0 !== r.avail_in || (4 !== n && 2 !== n))) ||
                ("string" === this.options.to
                  ? this.onData(
                      l.buf2binstring(h.shrinkBuf(r.output, r.next_out))
                    )
                  : this.onData(h.shrinkBuf(r.output, r.next_out)));
            } while ((0 < r.avail_in || 0 === r.avail_out) && 1 !== a);
            return 4 === n
              ? ((a = s.deflateEnd(this.strm)),
                this.onEnd(a),
                (this.ended = !0),
                a === _)
              : 2 !== n || (this.onEnd(_), !(r.avail_out = 0));
          }),
            (c.prototype.onData = function (t) {
              this.chunks.push(t);
            }),
            (c.prototype.onEnd = function (t) {
              t === _ &&
                ("string" === this.options.to
                  ? (this.result = this.chunks.join(""))
                  : (this.result = h.flattenChunks(this.chunks))),
                (this.chunks = []),
                (this.err = t),
                (this.msg = this.strm.msg);
            }),
            (a.Deflate = c),
            (a.deflate = n),
            (a.deflateRaw = function (t, e) {
              return ((e = e || {}).raw = !0), n(t, e);
            }),
            (a.gzip = function (t, e) {
              return ((e = e || {}).gzip = !0), n(t, e);
            });
        },
        {
          "./utils/common": 1,
          "./utils/strings": 2,
          "./zlib/deflate": 5,
          "./zlib/messages": 6,
          "./zlib/zstream": 8,
        },
      ],
    },
    {},
    []
  )("/lib/deflate.js");
});

/*
 *  **************************************************************************
 *  Licensed Materials - Property of HCL
 *  (c) Copyright HCL Technologies Ltd.  2020. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or disclosure
 *  restricted by GSA ADP Schedule Contract with HCL Technologies.
 *  **************************************************************************
 *
 *  @version 12.1.6
 *  @flags w3c,NDEBUG
 */

if (window.DCX) {
  throw "Attempting to recreate DCX. Library may be included more than once on the page.";
}
window.DCX = (function () {
  var w, r, A, G, o, C, e, f, D;
  function x(Q, J, K, R) {
    var O = null,
      S = null,
      M = DCX.getModule("replay"),
      P = DCX.getModule("DCCookie"),
      T = DCX.getModule("performance"),
      L = null,
      N = D.getOriginAndPath(),
      I = D.getQueryString(window.location.search);
    if (!J || typeof J !== "string") {
      return;
    }
    if (!K || typeof K !== "string") {
      K = "";
    }
    S = {
      type: 2,
      screenview: {
        type: Q,
        name: J,
        originalUrl: N.path,
        url: DCX.normalizeUrl(N.path),
        host: N.origin,
        referrer: K,
        title: document.title,
        queryString: I,
      },
    };
    if (Q === "LOAD") {
      L = { type: "screenview_load", name: J };
    } else {
      if (Q === "UNLOAD") {
        L = { type: "screenview_unload", name: J };
      }
    }
    if (L && M) {
      O = M.onevent(L);
    }
    if (O) {
      S.dcid = O;
    }
    if (Q === "LOAD" || Q === "UNLOAD") {
      C.post("", S);
    }
    if (L && P) {
      P.onevent(L);
    }
    if (L && T) {
      T.onevent(L);
    }
  }
  function y(I) {
    var J;
    if (!I || !I.coords) {
      return;
    }
    J = {
      type: 13,
      geolocation: {
        lat: I.coords.latitude,
        long: I.coords.longitude,
        accuracy: Math.ceil(I.coords.accuracy),
      },
    };
    C.post("", J);
  }
  function s() {
    var I;
    I = {
      type: 13,
      geolocation: { errorCode: 201, error: "Permission denied." },
    };
    C.post("", I);
  }
  var d = new Date().getTime(),
    k,
    E = {},
    b = {},
    h = false,
    j = null,
    u = (function () {
      var J,
        L = [];
      function K(P) {
        var M = f.framesBlacklist,
          O,
          N;
        J = J || [];
        P = P || null;
        if (typeof M !== "undefined" && M.length > 0) {
          for (N = 0; N < M.length; N += 1) {
            O = A.queryAll(M[N], P);
            if (O && O.length > 0) {
              J = J.concat(O);
            }
          }
          L = L.concat(A.queryAll("iframe", P));
        }
      }
      function I(M) {
        if (D.indexOf(L, M) < 0) {
          K(M.ownerDocument);
        }
        return D.indexOf(J, M) > -1;
      }
      I.clearCache = function () {
        J = null;
      };
      return I;
    })(),
    v = null,
    l = {
      config: [
        "getConfig",
        "updateConfig",
        "getCoreConfig",
        "updateCoreConfig",
        "getModuleConfig",
        "updateModuleConfig",
        "getServiceConfig",
        "updateServiceConfig",
      ],
      queue: ["post", "setAutoFlush", "flushAll"],
      browserBase: ["getXPathFromNode", "processDOMEvent"],
    },
    z = (function () {
      var I = {};
      return {
        normalizeModuleEvents: function (N, L, P, K) {
          var J = I[N],
            O = false,
            M = false;
          P = P || B._getLocalTop();
          K = K || P.document;
          if (J) {
            return;
          }
          I[N] = { loadFired: false, pageHideFired: false };
          D.forEach(L, function (Q) {
            switch (Q.name) {
              case "load":
                O = true;
                L.push(D.mixin(D.mixin({}, Q), { name: "pageshow" }));
                break;
              case "unload":
                M = true;
                L.push(D.mixin(D.mixin({}, Q), { name: "pagehide" }));
                L.push(D.mixin(D.mixin({}, Q), { name: "beforeunload" }));
                break;
              case "change":
                if (D.isLegacyIE && B.getFlavor() === "w3c") {
                  L.push(D.mixin(D.mixin({}, Q), { name: "propertychange" }));
                }
                break;
            }
          });
          if (!O && !M) {
            delete I[N];
            return;
          }
          I[N].silentLoad = !O;
          I[N].silentUnload = !M;
          if (!O) {
            L.push({ name: "load", target: P });
          }
          if (!M) {
            L.push({ name: "unload", target: P });
          }
        },
        canPublish: function (J, L) {
          var K;
          if (I.hasOwnProperty(J) === false) {
            return true;
          }
          K = I[J];
          switch (L.type) {
            case "load":
              K.pageHideFired = false;
              K.loadFired = true;
              return !K.silentLoad;
            case "pageshow":
              K.pageHideFired = false;
              L.type = "load";
              return !K.loadFired && !K.silentLoad;
            case "pagehide":
              L.type = "unload";
              K.loadFired = false;
              K.pageHideFired = true;
              return !K.silentUnload;
            case "unload":
            case "beforeunload":
              L.type = "unload";
              K.loadFired = false;
              return !K.pageHideFired && !K.silentUnload;
          }
          return true;
        },
        isUnload: function (J) {
          return typeof J === "object"
            ? J.type === "unload" ||
                J.type === "beforeunload" ||
                J.type === "pagehide"
            : false;
        },
      };
    })(),
    F = {},
    c = {},
    a = {},
    n = function () {},
    q = null,
    p = true,
    g = function () {},
    m = false,
    t = (function () {
      var I = window.location,
        K = I.pathname,
        J = I.hash,
        L = "";
      return function () {
        var O = I.pathname,
          M = I.hash,
          N = L;
        if (O !== K) {
          N = DCX.normalizeUrl(O + M);
        } else {
          if (M !== J) {
            N = DCX.normalizeUrl(M);
          }
        }
        if (N !== L) {
          if (L) {
            x("UNLOAD", L);
          }
          x("LOAD", N);
          L = N;
          K = O;
          J = M;
        }
      };
    })(),
    i = function (K, R) {
      var L,
        J,
        M,
        Q = false,
        I = f.blockedElements,
        O,
        P,
        N;
      if (!I || !I.length) {
        i = function () {
          return false;
        };
        return Q;
      }
      if (!K || !K.nodeType) {
        return Q;
      }
      R = R || D.getDocument(K);
      for (L = 0, M = I.length; L < M && !Q; L += 1) {
        P = A.queryAll(I[L], R);
        for (J = 0, N = P.length; J < N && !Q; J += 1) {
          O = P[J];
          Q = O.contains ? O.contains(K) : O === K;
        }
      }
      return Q;
    },
    H = function (J) {
      var I = false,
        K = ["intent:", "mailto:", "sms:", "tel:"];
      if (J && D.getTagName(J) === "a" && K.indexOf(J.protocol) !== -1) {
        I = true;
      }
      return I;
    },
    B = {
      _loadGlobalsForUnitTesting: function (I) {
        D = I.utils;
        w = I.getService("ajax");
        r = I.getService("browserBase");
        A = I.getService("browser");
        G = I.getService("config");
        o = I.getService("domCapture");
        C = I.getService("queue");
        e = I.getService("serializer");
        f = G ? G.getCoreConfig() : null;
      },
      getStartTime: function () {
        return d;
      },
      getPageId: function () {
        return k || "#";
      },
      getLibraryVersion: function () {
        return "12.1.6";
      },
      getInternalVersion: function () {
        var I = this.getCoreConfig();
        if (I.version) {
          return I.version;
        }
      },
      getCurrentWebEvent: function () {
        return F;
      },
      normalizeUrl: function (K, J) {
        if (typeof J === "undefined") {
          J = K;
        }
        var I = this.getCoreConfig();
        if (I.normalization && I.normalization.urlFunction) {
          return I.normalization.urlFunction(J);
        }
        return J;
      },
      init: function (J, K) {
        var I;
        D = this.utils;
        if (D.isLegacyIE) {
          return;
        }
        q = K;
        if (!p) {
          throw "init must only be called once!";
        }
        k = "P." + D.getRandomString(28);
        p = false;
        I = function (L) {
          L = L || window.event || {};
          if (L.type === "load" || document.readyState !== "loading") {
            if (document.removeEventListener) {
              document.removeEventListener("DOMContentLoaded", I, false);
              window.removeEventListener("load", I, false);
            } else {
              document.detachEvent("onreadystatechange", I);
              window.detachEvent("onload", I);
            }
            n(J, K);
          }
        };
        if (
          document.readyState === "complete" ||
          (document.readyState === "interactive" && !D.isIE)
        ) {
          setTimeout(I);
        } else {
          if (document.addEventListener) {
            document.addEventListener("DOMContentLoaded", I, false);
            window.addEventListener("load", I, false);
          } else {
            document.attachEvent("onreadystatechange", I);
            window.attachEvent("onload", I);
          }
        }
      },
      isInitialized: function () {
        return h;
      },
      getState: function () {
        return j;
      },
      destroy: function (K) {
        var L = "",
          J = "",
          P = null,
          M = null,
          I = null,
          N = false;
        if (p) {
          return false;
        }
        this.stopAll();
        if (!K) {
          for (L in c) {
            if (c.hasOwnProperty(L)) {
              J = L.split("|")[0];
              P = c[L].target;
              N = c[L].delegateTarget || undefined;
              A.unsubscribe(J, P, this._publishEvent, N);
            }
          }
        }
        for (M in b) {
          if (b.hasOwnProperty(M)) {
            I = b[M].instance;
            if (I && typeof I.destroy === "function") {
              I.destroy();
            }
            b[M].instance = null;
          }
        }
        u.clearCache();
        c = {};
        h = false;
        p = true;
        j = "destroyed";
        if (typeof q === "function") {
          try {
            q("destroyed");
          } catch (O) {}
        }
      },
      _updateModules: function (K) {
        var M = null,
          J = null,
          I = true;
        if (f && f.modules) {
          try {
            for (J in f.modules) {
              if (f.modules.hasOwnProperty(J)) {
                M = f.modules[J];
                if (E.hasOwnProperty(J)) {
                  if (M.enabled === false) {
                    this.stop(J);
                    continue;
                  }
                  this.start(J);
                  if (M.events) {
                    this._registerModuleEvents(J, M.events, K);
                  }
                }
              }
            }
            this._registerModuleEvents.clearCache();
          } catch (L) {
            B.destroy();
            I = false;
          }
        } else {
          I = false;
        }
        return I;
      },
      rebind: function (I) {
        B._updateModules(I);
      },
      getSessionData: function () {
        if (!B.isInitialized()) {
          return;
        }
        var L = null,
          I = null,
          J,
          K;
        if (!f || !f.sessionDataEnabled) {
          return null;
        }
        I = f.sessionData || {};
        J = I.sessionQueryName;
        if (J) {
          K = D.getQueryStringValue(J, I.sessionQueryDelim);
        } else {
          J = I.sessionCookieName || "TLTSID";
          K = D.getCookieValue(J);
        }
        if (J && K) {
          L = L || {};
          L.dcxSCN = J;
          L.dcxSCV = K;
          L.dcxSCVNeedsHashing = !!I.sessionValueNeedsHashing;
        }
        return L;
      },
      logGeolocation: function (I) {
        var M = B.getModuleConfig("replay") || {},
          L = D.getValue(M, "geolocation.options", {
            timeout: 30000,
            enableHighAccuracy: true,
            maximumAge: 0,
          }),
          K = D.getValue(M, "geolocation.enabled", false),
          J = window.navigator;
        if (!I) {
          if (!K || !J || !J.geolocation || !J.geolocation.getCurrentPosition) {
            return;
          }
          J.geolocation.getCurrentPosition(y, s, L);
        } else {
          y(I);
        }
      },
      logCustomEvent: function (K, I) {
        if (!B.isInitialized()) {
          return;
        }
        var J = null;
        if (!K || typeof K !== "string") {
          K = "CUSTOM";
        }
        I = I || {};
        J = { type: 5, customEvent: { name: K, data: I } };
        C.post("", J);
      },
      logExceptionEvent: function (L, J, I) {
        if (!B.isInitialized()) {
          return;
        }
        var K = null;
        if (!L || typeof L !== "string") {
          return;
        }
        J = J || "";
        I = I || "";
        K = { type: 6, exception: { description: L, url: J, line: I } };
        C.post("", K);
      },
      logFormCompletion: function (I, K) {
        if (!B.isInitialized()) {
          return;
        }
        var J = {
          type: 15,
          formCompletion: {
            submitted: !!I,
            valid: typeof K === "boolean" ? K : null,
          },
        };
        C.post("", J);
      },
      logScreenviewLoad: function (K, J, I) {
        if (!B.isInitialized()) {
          return;
        }
        x("LOAD", K, J, I);
      },
      logScreenviewUnload: function (I) {
        if (!B.isInitialized()) {
          return;
        }
        x("UNLOAD", I);
      },
      logDOMCapture: function (I, L) {
        var M = null,
          K,
          J,
          N;
        if (!this.isInitialized()) {
          return M;
        }
        if (D.isLegacyIE) {
          return M;
        }
        if (o) {
          I = I || window.document;
          J = this.getServiceConfig("domCapture");
          L = D.mixin({}, J.options, L);
          K = o.captureDOM(I, L);
          if (K) {
            M =
              L.dcid ||
              "dcid-" + D.getSerialNumber() + "." + new Date().getTime();
            K.dcid = M;
            K.eventOn = !!L.eventOn;
            N = { type: 12, domCapture: K };
            C.post("", N);
            if (L.qffd !== false && !m && N.domCapture.fullDOM) {
              C.flush();
              m = true;
            }
          } else {
            M = null;
          }
        }
        return M;
      },
      performDOMCapture: function (K, I, J) {
        return this.logDOMCapture(I, J);
      },
      performFormCompletion: function (J, I, K) {
        return this.logFormCompletion(I, K);
      },
      _bridgeCallback: function (J) {
        var I = a[J];
        if (I && I.enabled) {
          return I;
        }
        return null;
      },
      logScreenCapture: function () {
        if (!B.isInitialized()) {
          return;
        }
        var I = B._bridgeCallback("screenCapture");
        if (I !== null) {
          I.cbFunction();
        }
      },
      enableDiscoverFramework: function () {
        if (!B.isInitialized()) {
          return;
        }
        var I = B._bridgeCallback("enableDiscoverFramework");
        if (I !== null) {
          I.cbFunction();
        }
      },
      disableDiscoverFramework: function () {
        if (!B.isInitialized()) {
          return;
        }
        var I = B._bridgeCallback("disableDiscoverFramework");
        if (I !== null) {
          I.cbFunction();
        }
      },
      startNewTLFSession: function () {
        if (!B.isInitialized()) {
          return;
        }
        var I = B._bridgeCallback("startNewTLFSession");
        if (I !== null) {
          I.cbFunction();
        }
      },
      currentSessionId: function () {
        if (!B.isInitialized()) {
          return;
        }
        var J,
          I = B._bridgeCallback("currentSessionId");
        if (I !== null) {
          J = I.cbFunction();
        }
        return J;
      },
      defaultValueForConfigurableItem: function (I) {
        if (!B.isInitialized()) {
          return;
        }
        var K,
          J = B._bridgeCallback("defaultValueForConfigurableItem");
        if (J !== null) {
          K = J.cbFunction(I);
        }
        return K;
      },
      valueForConfigurableItem: function (I) {
        if (!B.isInitialized()) {
          return;
        }
        var K,
          J = B._bridgeCallback("valueForConfigurableItem");
        if (J !== null) {
          K = J.cbFunction(I);
        }
        return K;
      },
      setConfigurableItem: function (J, L) {
        if (!B.isInitialized()) {
          return;
        }
        var I = false,
          K = B._bridgeCallback("setConfigurableItem");
        if (K !== null) {
          I = K.cbFunction(J, L);
        }
        return I;
      },
      addAdditionalHttpHeader: function (J, L) {
        if (!B.isInitialized()) {
          return;
        }
        var I = false,
          K = B._bridgeCallback("addAdditionalHttpHeader");
        if (K !== null) {
          I = K.cbFunction(J, L);
        }
        return I;
      },
      logCustomEventBridge: function (K, L, J) {
        if (!B.isInitialized()) {
          return;
        }
        var I = false,
          M = B._bridgeCallback("logCustomEventBridge");
        if (M !== null) {
          I = M.cbFunction(K, L, J);
        }
        return I;
      },
      registerBridgeCallbacks: function (P) {
        var M,
          K,
          N,
          J = null,
          L,
          Q,
          I;
        if (!P) {
          return false;
        }
        if (P.length === 0) {
          a = {};
          return false;
        }
        try {
          for (M = 0, N = P.length; M < N; M += 1) {
            J = P[M];
            if (typeof J === "object" && J.cbType && J.cbFunction) {
              L = {
                enabled: J.enabled,
                cbFunction: J.cbFunction,
                cbOrder: J.order || 0,
              };
              if (D.isUndefOrNull(a[J.cbType])) {
                a[J.cbType] = L;
              } else {
                if (!D.isArray(a[J.cbType])) {
                  a[J.cbType] = [a[J.cbType]];
                }
                Q = a[J.cbType];
                for (K = 0, I = Q.length; K < I; K += 1) {
                  if (Q[K].cbOrder > L.cbOrder) {
                    break;
                  }
                }
                Q.splice(K, 0, L);
              }
            }
          }
        } catch (O) {
          return false;
        }
        return true;
      },
      redirectQueue: function (L) {
        var O, N, K, J, I, P, M;
        if (!L || !L.length) {
          return L;
        }
        J = a.messageRedirect;
        if (!J) {
          return L;
        }
        if (!D.isArray(J)) {
          I = [J];
        } else {
          I = J;
        }
        for (N = 0, P = I.length; N < P; N += 1) {
          J = I[N];
          if (J && J.enabled) {
            for (O = 0, K = L.length; O < K; O += 1) {
              M = J.cbFunction(e.serialize(L[O]), L[O]);
              if (M && typeof M === "object") {
                L[O] = M;
              } else {
                L.splice(O, 1);
                O -= 1;
                K = L.length;
              }
            }
          }
        }
        return L;
      },
      _hasSameOrigin: function (I) {
        try {
          return (
            I.document.location.host === document.location.host &&
            I.document.location.protocol === document.location.protocol
          );
        } catch (J) {}
        return false;
      },
      provideRequestHeaders: function () {
        var J = null,
          I = a.addRequestHeaders;
        if (I && I.enabled) {
          J = I.cbFunction();
        }
        return J;
      },
      _registerModuleEvents: (function () {
        var K,
          M = 0,
          L = function (Q, P, O) {
            if (Q === "window") {
              return P;
            }
            if (Q === "document") {
              return O;
            }
            return Q;
          };
        function N(O, U, W) {
          var V = D.getDocument(W),
            Q = B._getLocalTop(),
            P = D.isIFrameDescendant(W),
            T,
            S,
            R;
          W = W || V;
          z.normalizeModuleEvents(O, U, Q, V);
          if (P) {
            T = r.ElementData.prototype.examineID(W).id;
            if (typeof T === "string") {
              T = T.slice(0, T.length - 1);
              for (S in c) {
                if (c.hasOwnProperty(S)) {
                  for (R = 0; R < c[S].length; R += 1) {
                    if (O === c[S][R]) {
                      if (S.indexOf(T) !== -1) {
                        delete c[S];
                        break;
                      }
                    }
                  }
                }
              }
            }
          }
          D.forEach(U, function (X) {
            var aa = L(X.target, Q, V) || V,
              Z = L(X.delegateTarget, Q, V),
              Y = "";
            if (X.recurseFrames !== true && P) {
              return;
            }
            if (typeof aa === "string") {
              if (X.delegateTarget && B.getFlavor() === "jQuery") {
                Y = B._buildToken4delegateTarget(X.name, aa, X.delegateTarget);
                if (!c.hasOwnProperty(Y)) {
                  c[Y] = [O];
                  c[Y].target = aa;
                  c[Y].delegateTarget = Z;
                  A.subscribe(X.name, aa, B._publishEvent, Z, Y);
                } else {
                  c[Y].push(O);
                }
              } else {
                D.forEach(A.queryAll(aa, W), function (ab) {
                  var ac = K.get(ab);
                  if (!ac) {
                    ac = r.ElementData.prototype.examineID(ab);
                    K.set(ab, ac);
                  }
                  Y = X.name + "|" + ac.id + ac.idType;
                  if (D.indexOf(c[Y], O) !== -1) {
                    return;
                  }
                  c[Y] = c[Y] || [];
                  c[Y].push(O);
                  c[Y].target = ab;
                  A.subscribe(X.name, ab, B._publishEvent);
                });
              }
            } else {
              Y = B._buildToken4bubbleTarget(
                X.name,
                aa,
                typeof X.target === "undefined"
              );
              if (!c.hasOwnProperty(Y)) {
                c[Y] = [O];
                A.subscribe(X.name, aa, B._publishEvent);
              } else {
                if (D.indexOf(c[Y], O) === -1) {
                  c[Y].push(O);
                }
              }
            }
            if (Y !== "") {
              if (typeof aa !== "string") {
                c[Y].target = aa;
              }
            }
          });
        }
        function J(O) {
          var P = D.getIFrameWindow(O);
          return (
            P !== null &&
            B._hasSameOrigin(P) &&
            P.document !== null &&
            P.document.readyState === "complete"
          );
        }
        function I(R, P, V) {
          V = V || B._getLocalTop().document;
          K = K || new D.WeakMap();
          N(R, P, V);
          if (R !== "performance") {
            var U = null,
              Q = null,
              O = A.queryAll("iframe, frame", V),
              T,
              S;
            for (T = 0, S = O.length; T < S; T += 1) {
              U = O[T];
              if (u(U)) {
                continue;
              }
              if (J(U)) {
                Q = D.getIFrameWindow(U);
                B._registerModuleEvents(R, P, Q.document);
                o.observeWindow(Q);
                continue;
              }
              M += 1;
              (function (Y, W, Z) {
                var X = null,
                  aa = {
                    moduleName: Y,
                    moduleEvents: W,
                    hIFrame: Z,
                    _registerModuleEventsDelayed: function () {
                      var ab = null;
                      if (!u(Z)) {
                        ab = D.getIFrameWindow(Z);
                        if (B._hasSameOrigin(ab)) {
                          B._registerModuleEvents(Y, W, ab.document);
                          o.observeWindow(ab);
                        }
                      }
                      M -= 1;
                      if (!M) {
                        B._publishEvent({
                          type: "loadWithFrames",
                          custom: true,
                        });
                      }
                    },
                  };
                D.addEventListener(Z, "load", function () {
                  aa._registerModuleEventsDelayed();
                });
                if (D.isLegacyIE && J(Z)) {
                  X = D.getIFrameWindow(Z);
                  D.addEventListener(
                    X.document,
                    "readystatechange",
                    function () {
                      aa._registerModuleEventsDelayed();
                    }
                  );
                }
              })(R, P, U);
            }
          }
        }
        I.clearCache = function () {
          if (K) {
            K.clear();
            K = null;
          }
        };
        return I;
      })(),
      _buildToken4currentTarget: function (J) {
        var K = J.nativeEvent ? J.nativeEvent.currentTarget : null,
          I = K
            ? r.ElementData.prototype.examineID(K)
            : {
                id: J.target ? J.target.id : null,
                idType: J.target ? J.target.idType : -1,
              };
        return J.type + "|" + I.id + I.idType;
      },
      _buildToken4delegateTarget: function (I, K, J) {
        return I + "|" + K + "|" + J;
      },
      _buildToken4bubbleTarget: function (J, P, O, S) {
        var M = B._getLocalTop(),
          I,
          T = function (U) {
            var V = null;
            if (B._hasSameOrigin(I.parent)) {
              D.forEach(
                A.queryAll("iframe, frame", I.parent.document),
                function (W) {
                  var X = null;
                  if (!u(W)) {
                    X = D.getIFrameWindow(W);
                    if (B._hasSameOrigin(X) && X.document === U) {
                      V = W;
                    }
                  }
                }
              );
            }
            return V;
          },
          Q = D.getDocument(P),
          R = null,
          L,
          K = J,
          N;
        if (Q) {
          I = Q.defaultView || Q.parentWindow;
        }
        if (P === window || P === window.window) {
          K += "|null-2|window";
        } else {
          if (
            O &&
            I &&
            B._hasSameOrigin(I.parent) &&
            typeof Q !== "undefined" &&
            M.document !== Q
          ) {
            R = T(Q);
            if (R) {
              L = r.ElementData.prototype.examineID(R);
              K += "|" + L.xPath + "-2";
            }
          } else {
            if (S && S !== document && B.getFlavor() === "jQuery") {
              K += "|null-2|" + D.getTagName(P) + "|" + D.getTagName(S);
            } else {
              K += "|null-2|document";
            }
          }
        }
        return K;
      },
      _reinitConfig: function () {
        B._updateModules();
      },
      _publishEvent: function (I) {
        var J = null,
          L = null,
          N =
            I.delegateTarget && I.data
              ? I.data
              : B._buildToken4currentTarget(I),
          O = null,
          P,
          Q,
          R,
          K = null,
          S = false,
          T = false,
          V = I.delegateTarget || null,
          U,
          M;
        F = I;
        if (I.type.match(/^(click|change|blur|mouse|touch)/)) {
          g();
          C.resetFlushTimer();
        }
        U = D.getValue(f, "screenviewAutoDetect", true);
        if (U) {
          t();
        }
        if (
          (I.type === "load" || I.type === "pageshow") &&
          !I.nativeEvent.customLoad
        ) {
          F = {};
          return;
        }
        if (I.type === "click") {
          v = I.target.element;
        }
        if (I.type === "beforeunload") {
          S = false;
          M = D.getTagName(v) === "a" ? v : document.activeElement;
          if (M) {
            if (H(M)) {
              S = true;
            } else {
              D.forEach(f.ieExcludedLinks, function (X) {
                var Y,
                  W,
                  Z = A.queryAll(X);
                for (Y = 0, W = Z ? Z.length : 0; Y < W; Y += 1) {
                  if (typeof Z[Y] !== undefined && Z[Y] === v) {
                    S = true;
                    break;
                  }
                }
              });
            }
          }
          if (S) {
            F = {};
            return;
          }
        }
        if (z.isUnload(I)) {
          j = "unloading";
        }
        if (
          I.type === "change" &&
          D.isLegacyIE &&
          B.getFlavor() === "w3c" &&
          (I.target.element.type === "checkbox" ||
            I.target.element.type === "radio")
        ) {
          F = {};
          return;
        }
        if (I.type === "propertychange") {
          if (
            I.nativeEvent.propertyName === "checked" &&
            (I.target.element.type === "checkbox" ||
              (I.target.element.type === "radio" && I.target.element.checked))
          ) {
            I.type = "change";
            I.target.type = "INPUT";
          } else {
            F = {};
            return;
          }
        }
        if (I.target && i(I.target.element)) {
          F = {};
          return;
        }
        if (!c.hasOwnProperty(N)) {
          if (I.hasOwnProperty("nativeEvent")) {
            R = I.nativeEvent.currentTarget || I.nativeEvent.target;
          }
          N = B._buildToken4bubbleTarget(I.type, R, true, V);
        }
        if (c.hasOwnProperty(N)) {
          O = c[N];
          for (P = 0, Q = O.length; P < Q; P += 1) {
            J = O[P];
            L = B.getModule(J);
            K = D.mixin({}, I);
            if (L && B.isStarted(J) && typeof L.onevent === "function") {
              T = z.canPublish(J, K);
              if (T) {
                L.onevent(K);
              }
            }
          }
        }
        if (K && K.type === "unload" && T) {
          B.destroy();
        }
        F = {};
      },
      _getLocalTop: function () {
        return window.window;
      },
      addModule: function (I, J) {
        E[I] = { creator: J, instance: null, context: null, messages: [] };
        if (this.isInitialized()) {
          this.start(I);
        }
      },
      getModule: function (I) {
        if (E[I] && E[I].instance) {
          return E[I].instance;
        }
        return null;
      },
      removeModule: function (I) {
        this.stop(I);
        delete E[I];
      },
      isStarted: function (I) {
        return E.hasOwnProperty(I) && E[I].instance !== null;
      },
      start: function (J) {
        var K = E[J],
          I = null;
        if (K && K.instance === null) {
          K.context = new DCX.ModuleContext(J, this);
          I = K.instance = K.creator(K.context);
          if (typeof I.init === "function") {
            I.init();
          }
        }
      },
      startAll: function () {
        var I = null;
        for (I in E) {
          if (E.hasOwnProperty(I)) {
            this.start(I);
          }
        }
      },
      stop: function (J) {
        var K = E[J],
          I = null;
        if (K && K.instance !== null) {
          I = K.instance;
          if (typeof I.destroy === "function") {
            I.destroy();
          }
          K.instance = K.context = null;
        }
      },
      stopAll: function () {
        var I = null;
        for (I in E) {
          if (E.hasOwnProperty(I)) {
            this.stop(I);
          }
        }
      },
      addService: function (J, I) {
        b[J] = { creator: I, instance: null };
      },
      getService: function (I) {
        if (b.hasOwnProperty(I)) {
          if (!b[I].instance) {
            try {
              b[I].instance = b[I].creator(this);
              if (typeof b[I].instance.init === "function") {
                b[I].instance.init();
              }
            } catch (J) {
              D.clog(
                "UIC terminated due to error when instanciating the " +
                  I +
                  " service."
              );
              throw J;
            }
            if (typeof b[I].instance.getServiceName !== "function") {
              b[I].instance.getServiceName = function () {
                return I;
              };
            }
          }
          return b[I].instance;
        }
        return null;
      },
      removeService: function (I) {
        delete b[I];
      },
      broadcast: function (L) {
        var K = 0,
          I = 0,
          M = null,
          J = null;
        if (L && typeof L === "object") {
          for (M in E) {
            if (E.hasOwnProperty(M)) {
              J = E[M];
              if (D.indexOf(J.messages, L.type) > -1) {
                if (typeof J.instance.onmessage === "function") {
                  J.instance.onmessage(L);
                }
              }
            }
          }
        }
      },
      listen: function (I, K) {
        var J = null;
        if (this.isStarted(I)) {
          J = E[I];
          if (D.indexOf(J.messages, K) === -1) {
            J.messages.push(K);
          }
        }
      },
      fail: function (K, J, I) {
        K = "UIC FAILED. " + K;
        try {
          B.destroy(!!I);
        } finally {
          D.clog(K);
          throw new B.UICError(K, J);
        }
      },
      UICError: (function () {
        function I(J, K) {
          this.message = J;
          this.code = K;
        }
        I.prototype = new Error();
        I.prototype.name = "UICError";
        I.prototype.constructor = I;
        return I;
      })(),
      getFlavor: function () {
        return "w3c";
      },
    };
  g = function () {
    var K = null,
      J = D.getValue(f, "inactivityTimeout", 36000000);
    if (!J) {
      g = function () {};
      return;
    }
    function I() {
      D.clog("UIC self-terminated due to inactivity timeout.");
      try {
        if (!f.sessionKeepAlive) {
          B.destroy();
        }
      } catch (L) {
        B.destroy();
      }
    }
    g = function () {
      if (K) {
        clearTimeout(K);
        K = null;
      }
      K = setTimeout(I, J);
    };
    g();
  };
  n = function (K, V) {
    var I, N, L, T, Q, M, U, J, O, P;
    if (h) {
      D.clog("DCX.init() called more than once. Ignoring.");
      return;
    }
    if (DCX && DCX.replay) {
      return;
    }
    G = B.getService("config");
    G.updateConfig(K);
    w = B.getService("ajax");
    r = B.getService("browserBase");
    A = B.getService("browser");
    o = B.getService("domCapture");
    C = B.getService("queue");
    e = B.getService("serializer");
    f = G.getCoreConfig();
    L = G.getModuleConfig("DCCookie") || {};
    M = L.sessionizationCookieName || "TLTSID";
    U = D.getCookieValue(M);
    if (U === "DND") {
      if (j !== "destroyed") {
        B.destroy();
      }
      return;
    }
    if (!B._updateModules()) {
      if (j !== "destroyed") {
        B.destroy();
      }
      return;
    }
    if (G.subscribe) {
      G.subscribe("configupdated", B._reinitConfig);
    }
    h = true;
    j = "loaded";
    try {
      if (typeof DCExtensionNotify === "function") {
        DCExtensionNotify("Initialized");
      }
    } catch (S) {}
    I = {
      type: "load",
      target: window.window,
      srcElement: window.window,
      currentTarget: window.window,
      bubbles: true,
      cancelBubble: false,
      cancelable: true,
      timeStamp: +new Date(),
      customLoad: true,
    };
    N = new r.WebEvent(I);
    B._publishEvent(N);
    T = B.getServiceConfig("queue");
    Q = T.queues || [];
    for (P = 0; P < Q.length; P += 1) {
      if (!U && L.dcAppKey) {
        J = Q[P].endpoint;
        O =
          Q[P].killswitchURL ||
          (J.match("collectorPost")
            ? J.replace("collectorPost", "switch/" + L.dcAppKey)
            : null);
        if (O) {
          w.sendRequest({
            type: "GET",
            url: O,
            async: true,
            timeout: 5000,
            oncomplete: function (W) {
              if (W.responseText === "0") {
                B.setAutoFlush(false);
                D.setCookie(M, "DND");
                B.destroy();
              }
            },
          });
        }
      }
      if (Q[P].checkEndpoint) {
        w.sendRequest({
          oncomplete: function (W) {},
          timeout: Q[P].endpointCheckTimeout || 3000,
          url: Q[P].endpoint,
          headers: {
            "X-PageId": k,
            "X-Discover-SaaS-AppKey": L.dcAppKey,
            "X-Discover-EndpointCheck": true,
          },
          async: true,
          error: function (W) {
            if (W.success) {
              return;
            }
            B.setAutoFlush(false);
            B.destroy();
          },
        });
      }
    }
    if (typeof q === "function") {
      try {
        q("initialized");
      } catch (R) {}
    }
  };
  (function () {
    var J = null,
      K,
      I;
    for (J in l) {
      if (l.hasOwnProperty(J)) {
        for (K = 0, I = l[J].length; K < I; K += 1) {
          (function (M, L) {
            B[L] = function () {
              var N = this.getService(M);
              if (N) {
                return N[L].apply(N, arguments);
              }
            };
          })(J, l[J][K]);
        }
      }
    }
  })();
  return B;
})();
(function () {
  var a = window.navigator.userAgent.toLowerCase(),
    i = a.indexOf("msie") !== -1 || a.indexOf("trident") !== -1,
    c = (function () {
      var j = !!window.performance;
      return i && (!j || document.documentMode < 9);
    })(),
    e = a.indexOf("android") !== -1,
    f = /(ipad|iphone|ipod)/.test(a),
    d = a.indexOf("opera mini") !== -1,
    b = 1,
    h = {
      "a:": "link",
      "button:button": "button",
      "button:submit": "button",
      "input:button": "button",
      "input:checkbox": "checkBox",
      "input:color": "colorPicker",
      "input:date": "datePicker",
      "input:datetime": "datetimePicker",
      "input:datetime-local": "datetime-local",
      "input:email": "emailInput",
      "input:file": "fileInput",
      "input:image": "button",
      "input:month": "month",
      "input:number": "numberPicker",
      "input:password": "textBox",
      "input:radio": "radioButton",
      "input:range": "slider",
      "input:reset": "button",
      "input:search": "searchBox",
      "input:submit": "button",
      "input:tel": "tel",
      "input:text": "textBox",
      "input:time": "timePicker",
      "input:url": "urlBox",
      "input:week": "week",
      "select:": "selectList",
      "select:select-one": "selectList",
      "textarea:": "textBox",
      "textarea:textarea": "textBox",
    },
    g = {
      isIE: i,
      isLegacyIE: c,
      isAndroid: e,
      isLandscapeZeroDegrees: false,
      isiOS: f,
      isOperaMini: d,
      isUndefOrNull: function (j) {
        return typeof j === "undefined" || j === null;
      },
      isArray: function (j) {
        return !!(j && Object.prototype.toString.call(j) === "[object Array]");
      },
      getSerialNumber: function () {
        var j;
        j = b;
        b += 1;
        return j;
      },
      getRandomString: function (o, n) {
        var m,
          l,
          j = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789",
          k = "";
        if (!o) {
          return k;
        }
        if (typeof n !== "string") {
          n = j;
        }
        for (m = 0, l = n.length; m < o; m += 1) {
          k += n.charAt(Math.floor(Math.random() * l));
        }
        return k;
      },
      getValue: function (o, n, k) {
        var m, j, l;
        k = typeof k === "undefined" ? null : k;
        if (!o || typeof o !== "object" || typeof n !== "string") {
          return k;
        }
        l = n.split(".");
        for (m = 0, j = l.length; m < j; m += 1) {
          if (this.isUndefOrNull(o) || typeof o[l[m]] === "undefined") {
            return k;
          }
          o = o[l[m]];
        }
        return o;
      },
      indexOf: function (m, l) {
        var k, j;
        if (m && m.indexOf) {
          return m.indexOf(l);
        }
        if (m && m instanceof Array) {
          for (k = 0, j = m.length; k < j; k += 1) {
            if (m[k] === l) {
              return k;
            }
          }
        }
        return -1;
      },
      forEach: function (n, m, l) {
        var k, j;
        if (!n || !n.length || !m || !m.call) {
          return;
        }
        for (k = 0, j = n.length; k < j; k += 1) {
          m.call(l, n[k], k, n);
        }
      },
      some: function (n, m) {
        var k,
          j,
          l = false;
        for (k = 0, j = n.length; k < j; k += 1) {
          l = m(n[k], k, n);
          if (l) {
            return l;
          }
        }
        return l;
      },
      convertToArray: function (l) {
        var m = 0,
          k = l.length,
          j = [];
        while (m < k) {
          j.push(l[m]);
          m += 1;
        }
        return j;
      },
      mixin: function (n) {
        var m, l, k, j;
        for (k = 1, j = arguments.length; k < j; k += 1) {
          l = arguments[k];
          for (m in l) {
            if (Object.prototype.hasOwnProperty.call(l, m)) {
              n[m] = l[m];
            }
          }
        }
        return n;
      },
      extend: function (j, k, l) {
        var m = "";
        for (m in l) {
          if (Object.prototype.hasOwnProperty.call(l, m)) {
            if (
              j &&
              Object.prototype.toString.call(l[m]) === "[object Object]"
            ) {
              if (typeof k[m] === "undefined") {
                k[m] = {};
              }
              this.extend(j, k[m], l[m]);
            } else {
              k[m] = l[m];
            }
          }
        }
        return k;
      },
      clone: function (k) {
        var l, j;
        if (null === k || "object" !== typeof k) {
          return k;
        }
        if (k instanceof Object) {
          l = Object.prototype.toString.call(k) === "[object Array]" ? [] : {};
          for (j in k) {
            if (Object.prototype.hasOwnProperty.call(k, j)) {
              l[j] = this.clone(k[j]);
            }
          }
          return l;
        }
      },
      parseVersion: function (l) {
        var m,
          j,
          k = [];
        if (!l || !l.length) {
          return k;
        }
        k = l.split(".");
        for (m = 0, j = k.length; m < j; m += 1) {
          k[m] = /^[0-9]+$/.test(k[m]) ? parseInt(k[m], 10) : k[m];
        }
        return k;
      },
      isEqual: function (l, k) {
        var m, n, p, o, j;
        if (l === k) {
          return true;
        }
        if (typeof l !== typeof k) {
          return false;
        }
        if (l instanceof Object && k instanceof Object) {
          if (
            Object.prototype.toString.call(l) === "[object Array]" &&
            Object.prototype.toString.call(k) === "[object Array]"
          ) {
            if (l.length !== k.length) {
              return false;
            }
            for (m = 0, j = l.length; m < j; m += 1) {
              if (!this.isEqual(l[m], k[m])) {
                return false;
              }
            }
            return true;
          }
          if (
            Object.prototype.toString.call(l) === "[object Object]" &&
            Object.prototype.toString.call(k) === "[object Object]"
          ) {
            for (m = 0; m < 2; m += 1) {
              for (p in l) {
                if (l.hasOwnProperty(p)) {
                  if (!k.hasOwnProperty(p)) {
                    return false;
                  }
                  n = this.isEqual(l[p], k[p]);
                  if (!n) {
                    return false;
                  }
                }
              }
              o = l;
              l = k;
              k = o;
            }
            return true;
          }
        }
        return false;
      },
      createObject: (function () {
        var j = null,
          k = null;
        if (typeof Object.create === "function") {
          j = Object.create;
        } else {
          k = function () {};
          j = function (l) {
            if (typeof l !== "object" && typeof l !== "function") {
              throw new TypeError("Object prototype need to be an object!");
            }
            k.prototype = l;
            return new k();
          };
        }
        return j;
      })(),
      access: function (o, m) {
        var n = m || window,
          k,
          l,
          j;
        if (typeof o !== "string" || (typeof n !== "object" && n !== null)) {
          return;
        }
        k = o.split(".");
        for (l = 0, j = k.length; l < j; l += 1) {
          if (l === 0 && k[l] === "window") {
            continue;
          }
          if (!Object.prototype.hasOwnProperty.call(n, k[l])) {
            return;
          }
          n = n[k[l]];
          if (l < j - 1 && !(n instanceof Object)) {
            return;
          }
        }
        return n;
      },
      isNumeric: function (j) {
        var k = false;
        if (g.isUndefOrNull(j) || !/\S/.test(j)) {
          return k;
        }
        k = !isNaN(j * 2);
        return k;
      },
      isUpperCase: function (j) {
        return j === j.toUpperCase() && j !== j.toLowerCase();
      },
      isLowerCase: function (j) {
        return j === j.toLowerCase() && j !== j.toUpperCase();
      },
      extractResponseHeaders: function (l) {
        var n = {},
          k,
          j,
          m = null;
        if (!l || !l.length) {
          l = [];
        } else {
          l = l.split("\n");
        }
        for (k = 0, j = l.length; k < j; k += 1) {
          m = l[k].split(": ");
          if (m.length === 2) {
            n[m[0]] = m[1];
          }
        }
        return n;
      },
      getTargetState: function (q) {
        var j = {
            a: ["innerText", "href"],
            input: {
              range: ["maxValue:max", "value"],
              checkbox: ["value", "checked"],
              radio: ["value", "checked"],
              image: ["src"],
            },
            select: ["value"],
            button: ["value", "innerText"],
            textarea: ["value"],
          },
          l = this.getTagName(q),
          r = j[l] || null,
          m = null,
          k = null,
          n = 0,
          p = 0,
          o = null,
          s = "";
        if (r !== null) {
          if (Object.prototype.toString.call(r) === "[object Object]") {
            r = r[q.type] || ["value"];
          }
          k = {};
          for (s in r) {
            if (r.hasOwnProperty(s)) {
              if (r[s].indexOf(":") !== -1) {
                o = r[s].split(":");
                k[o[0]] = q[o[1]];
              } else {
                if (r[s] === "innerText") {
                  k[r[s]] = this.trim(q.innerText || q.textContent);
                } else {
                  k[r[s]] = q[r[s]];
                }
              }
            }
          }
        }
        if (l === "select" && q.options && !isNaN(q.selectedIndex)) {
          k.index = q.selectedIndex;
          if (k.index >= 0 && k.index < q.options.length) {
            m = q.options[q.selectedIndex];
            k.value =
              m.getAttribute("value") ||
              m.getAttribute("label") ||
              m.text ||
              m.innerText;
            k.text = m.text || m.innerText;
          }
        }
        return k;
      },
      getDocument: function (j) {
        var k = j;
        if (j && j.nodeType !== 9) {
          if (j.getRootNode) {
            k = j.getRootNode();
          } else {
            k = j.ownerDocument || j.document;
          }
        }
        return k;
      },
      getWindow: function (k) {
        try {
          if (k.self !== k) {
            var j = g.getDocument(k);
            return !g.isUndefOrNull(j.defaultView)
              ? j.defaultView
              : j.parentWindow;
          }
        } catch (l) {
          k = null;
        }
        return k;
      },
      getOriginAndPath: function (j) {
        var l = {},
          k;
        j = j || window.location;
        if (j.origin) {
          l.origin = j.origin;
        } else {
          l.origin = (j.protocol || "") + "//" + (j.host || "");
        }
        l.path = (j.pathname || "").split(";", 1)[0];
        if (l.origin.indexOf("file://") > -1) {
          k = l.path.match(/(.*)(\/.*app.*)/);
          if (k !== null) {
            l.path = k[2];
          }
        }
        return l;
      },
      getQueryString: function (q) {
        try {
          q = q.replace("?", "") + "";
          if (q.length) {
            var l = q.split("&");
            var m = {};
            var p, o, j;
            for (var k = 0; k < l.length; k++) {
              p = l[k].split("=");
              o = decodeURIComponent(p[0]);
              if (o.length === 0) {
                continue;
              }
              j = decodeURIComponent(p[1]);
              if (typeof m[o] === "undefined") {
                m[o] = j;
              } else {
                if (m[o] instanceof Array) {
                  m[o].push(j);
                } else {
                  m[o] = [m[o], j];
                }
              }
            }
            return m;
          }
        } catch (n) {
          return "";
        }
      },
      getIFrameWindow: function (l) {
        var j = null;
        if (!l) {
          return j;
        }
        try {
          j =
            l.contentWindow ||
            (l.contentDocument ? l.contentDocument.parentWindow : null);
        } catch (k) {}
        return j;
      },
      getTagName: function (k) {
        var j = "";
        if (g.isUndefOrNull(k)) {
          return j;
        }
        if (k === document || k.nodeType === 9) {
          j = "document";
        } else {
          if (k === window || k === window.window) {
            j = "window";
          } else {
            if (typeof k === "string") {
              j = k.toLowerCase();
            } else {
              if (k.tagName) {
                j = k.tagName.toLowerCase();
              } else {
                if (k.nodeName) {
                  j = k.nodeName.toLowerCase();
                } else {
                  j = "";
                }
              }
            }
          }
        }
        return j;
      },
      getDcType: function (m) {
        var j,
          l,
          k = "";
        if (g.isUndefOrNull(m) || !m.type) {
          return k;
        }
        j = m.type.toLowerCase();
        l = j + ":";
        if (m.subType) {
          l += m.subType.toLowerCase();
        }
        k = h[l] || j;
        return k;
      },
      isIFrameDescendant: function (k) {
        var j = g.getWindow(k);
        return j ? j != DCX._getLocalTop() : false;
      },
      getOrientationMode: function (j) {
        var k = "INVALID";
        if (typeof j !== "number") {
          return k;
        }
        switch (j) {
          case 0:
          case 180:
          case 360:
            k = "PORTRAIT";
            break;
          case 90:
          case -90:
          case 270:
            k = "LANDSCAPE";
            break;
          default:
            k = "UNKNOWN";
            break;
        }
        return k;
      },
      clog: (function (j) {
        return function () {};
      })(window),
      trim: function (j) {
        if (!j || !j.toString) {
          return j;
        }
        return j.toString().replace(/^\s+|\s+$/g, "");
      },
      ltrim: function (j) {
        if (!j || !j.toString) {
          return j;
        }
        return j.toString().replace(/^\s+/, "");
      },
      rtrim: function (j) {
        if (!j || !j.toString) {
          return j;
        }
        return j.toString().replace(/\s+$/, "");
      },
      setCookie: function (t, k, r, v, o, j) {
        var p,
          q,
          n,
          m,
          l = "",
          u,
          s = j ? ";secure" : "";
        if (!t) {
          return;
        }
        t = encodeURIComponent(t);
        k = encodeURIComponent(k);
        n = (o || location.hostname).split(".");
        u = ";path=" + (v || "/");
        if (typeof r === "number") {
          if (this.isIE) {
            m = new Date();
            m.setTime(m.getTime() + r * 1000);
            l = ";expires=" + m.toUTCString();
          } else {
            l = ";max-age=" + r;
          }
        }
        for (q = n.length, p = q === 1 ? 1 : 2; p <= q; p += 1) {
          document.cookie =
            t + "=" + k + ";domain=" + n.slice(-p).join(".") + u + l + s;
          if (this.getCookieValue(t) === k) {
            break;
          }
          if (q === 1) {
            document.cookie = t + "=" + k + u + l + s;
          }
        }
      },
      getCookieValue: function (p, r) {
        var m,
          n,
          l,
          q,
          k = null,
          j;
        try {
          r = r || document.cookie;
          if (!p || !p.toString) {
            return null;
          }
          p += "=";
          j = p.length;
          q = r.split(";");
          for (m = 0, n = q.length; m < n; m += 1) {
            l = q[m];
            l = g.ltrim(l);
            if (l.indexOf(p) === 0) {
              k = l.substring(j, l.length);
              break;
            }
          }
        } catch (o) {
          k = null;
        }
        return k;
      },
      getQueryStringValue: function (o, r, k) {
        var n,
          m,
          s,
          l = null,
          p;
        try {
          k = k || window.location.search;
          s = k.length;
          if (!o || !o.toString || !s) {
            return null;
          }
          r = r || "&";
          k = r + k.substring(1);
          o = r + o + "=";
          n = k.indexOf(o);
          if (n !== -1) {
            p = n + o.length;
            m = k.indexOf(r, p);
            if (m === -1) {
              m = s;
            }
            l = decodeURIComponent(k.substring(p, m));
          }
        } catch (q) {}
        return l;
      },
      addEventListener: (function () {
        if (window.addEventListener) {
          return function (k, j, l) {
            k.addEventListener(j, l, false);
          };
        }
        return function (k, j, l) {
          k.attachEvent("on" + j, l);
        };
      })(),
      matchTarget: function (u, q) {
        var o,
          m,
          n,
          t = -1,
          s,
          k,
          l,
          p,
          r,
          v = document;
        if (!u || !q) {
          return t;
        }
        if (!this.browserService || !this.browserBaseService) {
          this.browserService = DCX.getService("browser");
          this.browserBaseService = DCX.getService("browserBase");
        }
        if (q.idType === -2) {
          n = this.browserBaseService.getNodeFromID(q.id, q.idType);
          v = this.getDocument(n);
        }
        for (o = 0, p = u.length; o < p && t === -1; o += 1) {
          r = u[o];
          if (typeof r === "string") {
            s = this.browserService.queryAll(r, v);
            for (m = 0, k = s ? s.length : 0; m < k; m += 1) {
              if (s[m]) {
                l = this.browserBaseService.ElementData.prototype.examineID(
                  s[m]
                );
                if (l.idType === q.idType && l.id === q.id) {
                  t = o;
                  break;
                }
              }
            }
          } else {
            if (
              r &&
              r.id &&
              r.idType &&
              q.idType &&
              q.idType.toString() === r.idType.toString()
            ) {
              switch (typeof r.id) {
                case "string":
                  if (r.id === q.id) {
                    t = o;
                  }
                  break;
                case "object":
                  if (!r.cRegex) {
                    r.cRegex = new RegExp(r.id.regex, r.id.flags);
                  }
                  r.cRegex.lastIndex = 0;
                  if (r.cRegex.test(q.id)) {
                    t = o;
                  }
                  break;
              }
            }
          }
        }
        return t;
      },
      WeakMap: (function () {
        function j(n, m) {
          var l, k;
          n = n || [];
          for (l = 0, k = n.length; l < k; l += 1) {
            if (n[l][0] === m) {
              return l;
            }
          }
          return -1;
        }
        return function () {
          var k = [];
          this.set = function (m, n) {
            var l = j(k, m);
            k[l > -1 ? l : k.length] = [m, n];
          };
          this.get = function (m) {
            var l = k[j(k, m)];
            return l ? l[1] : undefined;
          };
          this.clear = function () {
            k = [];
          };
          this.has = function (l) {
            return j(k, l) >= 0;
          };
          this.remove = function (m) {
            var l = j(k, m);
            if (l >= 0) {
              k.splice(l, 1);
            }
          };
          this["delete"] = this.remove;
        };
      })(),
    };
  if (typeof DCX === "undefined" || !DCX) {
    window.DCX = {};
  }
  DCX.utils = g;
})();
(function () {
  DCX.EventTarget = function () {
    this._handlers = {};
  };
  DCX.EventTarget.prototype = {
    constructor: DCX.EventTarget,
    publish: function (c, f) {
      var d = 0,
        a = 0,
        b = this._handlers[c],
        e = { type: c, data: f };
      if (typeof b !== "undefined") {
        for (a = b.length; d < a; d += 1) {
          b[d](e);
        }
      }
    },
    subscribe: function (a, b) {
      if (!this._handlers.hasOwnProperty(a)) {
        this._handlers[a] = [];
      }
      this._handlers[a].push(b);
    },
    unsubscribe: function (c, e) {
      var d = 0,
        a = 0,
        b = this._handlers[c];
      if (b) {
        for (a = b.length; d < a; d += 1) {
          if (b[d] === e) {
            b.splice(d, 1);
            return;
          }
        }
      }
    },
  };
})();
DCX.ModuleContext = (function () {
  var a = [
    "broadcast",
    "getConfig:getModuleConfig",
    "listen",
    "post",
    "getXPathFromNode",
    "performDOMCapture",
    "performFormCompletion",
    "isInitialized",
    "getStartTime",
    "normalizeUrl",
  ];
  return function (f, d) {
    var h = {},
      g = 0,
      b = a.length,
      j = null,
      e = null,
      c = null;
    for (g = 0; g < b; g += 1) {
      j = a[g].split(":");
      if (j.length > 1) {
        c = j[0];
        e = j[1];
      } else {
        c = j[0];
        e = j[0];
      }
      h[c] = (function (i) {
        return function () {
          var k = d.utils.convertToArray(arguments);
          k.unshift(f);
          return d[i].apply(d, k);
        };
      })(e);
    }
    h.utils = d.utils;
    return h;
  };
})();
DCX.addService("config", function (a) {
  function d(f, e) {
    a.utils.extend(true, f, e);
    c.publish("configupdated", c.getConfig());
  }
  var b = { core: {}, modules: {}, services: {} },
    c = a.utils.extend(false, a.utils.createObject(new DCX.EventTarget()), {
      getConfig: function () {
        return b;
      },
      updateConfig: function (e) {
        d(b, e);
      },
      getCoreConfig: function () {
        return b.core;
      },
      updateCoreConfig: function (e) {
        d(b.core, e);
      },
      getServiceConfig: function (e) {
        return b.services[e] || {};
      },
      updateServiceConfig: function (f, e) {
        if (typeof b.services[f] === "undefined") {
          b.services[f] = {};
        }
        d(b.services[f], e);
      },
      getModuleConfig: function (e) {
        return b.modules[e] || {};
      },
      updateModuleConfig: function (f, e) {
        if (typeof b.modules[f] === "undefined") {
          b.modules[f] = {};
        }
        d(b.modules[f], e);
      },
      destroy: function () {
        b = { core: {}, modules: {}, services: {} };
      },
    });
  return c;
});
DCX.addService("queue", function (q) {
  var K = q.utils,
    k = null,
    i = {},
    F = 1500000,
    p = q.getService("ajax"),
    c = q.getService("browser"),
    e = q.getService("encoder"),
    u = q.getService("serializer"),
    D = q.getService("config"),
    r = q.getService("message"),
    z = null,
    m = {},
    H = true,
    h = true,
    y = { 5: { limit: 300, count: 0 }, 6: { limit: 400, count: 0 } },
    d = [],
    B = false,
    t = (function () {
      var Q = {};
      function T(U) {
        return typeof Q[U] !== "undefined";
      }
      function M(U, V) {
        if (!T(U)) {
          Q[U] = {
            lastOffset: 0,
            data: [],
            queueId: U,
            url: V.url,
            eventThreshold: V.eventThreshold,
            sizeThreshold: V.sizeThreshold || 0,
            timerInterval: V.timerInterval,
            size: -1,
            serializer: V.serializer,
            encoder: V.encoder,
            crossDomainEnabled: !!V.crossDomainEnabled,
            crossDomainIFrame: V.crossDomainIFrame,
          };
        }
        return Q[U];
      }
      function O(U) {
        if (T(U)) {
          delete Q[U];
        }
      }
      function R(U) {
        if (T(U)) {
          return Q[U];
        }
        return null;
      }
      function P(V) {
        var U = R(V);
        if (U !== null) {
          U.data = [];
        }
      }
      function S(U) {
        var V = null;
        if (T(U)) {
          V = R(U).data;
          P(U);
        }
        return V;
      }
      function N(W, Y) {
        var U = null,
          X = null,
          aa = window.dcBridge,
          V = window.iOSJSONShuttle;
        try {
          X = u.serialize(Y);
        } catch (Z) {
          X =
            "Serialization failed: " +
            (Z.name ? Z.name + " - " : "") +
            Z.message;
          Y = { error: X };
        }
        if (typeof aa !== "undefined" && typeof aa.addMessage === "function") {
          aa.addMessage(X);
        } else {
          if (typeof V !== "undefined" && typeof V === "function") {
            V(X);
          } else {
            if (T(W)) {
              U = R(W);
              U.data.push(Y);
              U.data = q.redirectQueue(U.data);
              if (U.sizeThreshold) {
                X = u.serialize(U.data);
                U.size = X.length;
              }
              return U.data.length;
            }
          }
        }
        return 0;
      }
      return {
        exists: T,
        add: M,
        remove: O,
        reset: function () {
          Q = {};
        },
        get: R,
        clear: P,
        flush: S,
        push: N,
      };
    })();
  function n(M) {
    if (M && M.id) {
      K.extend(true, d[M.id - 1], {
        xhrRspEnd: r.createMessage({ type: 0 }).offset,
        success: M.success,
        statusCode: M.statusCode,
        statusText: M.statusText,
      });
    }
  }
  function w() {
    return window.location.pathname;
  }
  function A(O, S, P, R) {
    var M = t.get(O),
      Q = { name: S, value: P },
      N = null;
    if (typeof S !== "string" || typeof P !== "string") {
      return;
    }
    if (!M.headers) {
      M.headers = { once: [], always: [] };
    }
    N = !!R ? M.headers.always : M.headers.once;
    N.push(Q);
  }
  function g(O, R) {
    var Q = 0,
      N = 0,
      M = t.get(O),
      S = M.headers,
      P = null;
    R = R || {};
    function T(V, X) {
      var W = 0,
        U = 0,
        Y = null;
      for (W = 0, U = V.length; W < U; W += 1) {
        Y = V[W];
        X[Y.name] = Y.value;
      }
    }
    if (S) {
      P = [S.always, S.once];
      for (Q = 0, N = P.length; Q < N; Q += 1) {
        T(P[Q], R);
      }
    }
    return R;
  }
  function o(N) {
    var M = null,
      O = null;
    if (!t.exists(N)) {
      throw new Error("Queue: " + N + " does not exist!");
    }
    M = t.get(N);
    O = M ? M.headers : null;
    if (O) {
      O.once = [];
    }
  }
  function l() {
    var N = 0,
      M,
      P,
      O = q.provideRequestHeaders();
    if (O && O.length) {
      for (N = 0, M = O.length; N < M; N += 1) {
        P = O[N];
        A("DEFAULT", P.name, P.value, P.recurring);
      }
    }
    return N;
  }
  function J(Q) {
    var P,
      M,
      O = [],
      N = "";
    if (!Q || !Q.length) {
      return N;
    }
    for (P = 0, M = Q.length; P < M; P += 1) {
      O[Q[P].type] = true;
    }
    for (P = 0, M = O.length; P < M; P += 1) {
      if (O[P]) {
        if (N) {
          N += ",";
        }
        N += P;
      }
    }
    return N;
  }
  function j(O, Z) {
    var U = t.get(O),
      T = U.url ? t.flush(O) : null,
      V = T ? T.length : 0,
      P = {
        "Content-Type": "application/json",
        "X-PageId": q.getPageId(),
        "X-Discover": "device (UIC) Lib/12.1.6",
        "X-DiscoverType": "GUI",
        "X-Discover-Page-Url": w(),
        "X-Discover-SyncXHR": (!!Z).toString(),
      },
      X = null,
      R = r.createMessage({ type: 0 }).offset,
      aa = U.serializer || "json",
      N = U.encoder,
      Q,
      S,
      M,
      ab = q.getState() === "unloading",
      Y = null;
    if (!V || !U) {
      return;
    }
    M = R - T[V - 1].offset;
    if (M > F + 60000) {
      return;
    }
    U.lastOffset = T[V - 1].offset;
    P["X-Discover-MessageTypes"] = J(T);
    T = r.wrapMessages(T);
    if (k.xhrLogging) {
      X = T.serialNumber;
      d[X - 1] = { serialNumber: X, xhrReqStart: R };
      T.log = { xhr: d };
    }
    if (aa) {
      T = u.serialize(T, aa);
    }
    if (N) {
      S = e.encode(T, N);
      if (S) {
        if (S.data && !S.error) {
          T = S.data;
          P["Content-Encoding"] = S.encoding;
        } else {
          T = S.error;
        }
      }
    }
    l();
    g(O, P);
    if (U.crossDomainEnabled) {
      Y = K.getIFrameWindow(U.crossDomainIFrame);
      if (!Y) {
        return;
      }
      Q = { request: { id: X, url: U.url, async: !Z, headers: P, data: T } };
      if (!K.isIE && typeof window.postMessage === "function") {
        Y.postMessage(Q, U.crossDomainIFrame.src);
      } else {
        try {
          Y.sendMessage(Q);
        } catch (W) {
          return;
        }
      }
    } else {
      p.sendRequest({
        id: X,
        oncomplete: n,
        url: U.url,
        async: !Z,
        isUnloading: ab,
        headers: P,
        data: T,
      });
    }
    o(O);
  }
  function I(P) {
    var M = null,
      O = k.queues,
      N = 0;
    for (N = 0; N < O.length; N += 1) {
      M = O[N];
      j(M.qid, P);
    }
    return true;
  }
  function L(P, R) {
    var N,
      S = r.createMessage(R),
      M = t.get(P),
      Q,
      T,
      O;
    N = M.data.length;
    if (N) {
      T = S.offset - M.data[N - 1].offset;
      if (T > F) {
        t.flush(P);
        q.destroy();
        return;
      }
    }
    N = t.push(P, S);
    Q = M.size;
    if (
      (N >= M.eventThreshold || Q >= M.sizeThreshold) &&
      H &&
      q.getState() !== "unloading"
    ) {
      O = q.getCurrentWebEvent();
      if (O.type === "click" && q.getState() == "unloading" && N > 0) {
        if (h) {
          h = false;
          window.setTimeout(function () {
            if (t.exists(P)) {
              j(P);
              h = true;
            }
          }, 500);
        }
      } else {
        j(P);
      }
    }
  }
  function a(O) {
    var M,
      N = false;
    if (!O || !O.type) {
      return true;
    }
    M = y[O.type];
    if (M) {
      M.count += 1;
      if (M.count > M.limit) {
        N = true;
        if (M.count === M.limit + 1) {
          L("DEFAULT", {
            type: 16,
            dataLimit: { messageType: O.type, maxCount: M.limit },
          });
        }
      }
    }
    return N;
  }
  function G(O) {
    var N = null,
      R = k.queues,
      Q = "",
      P = 0,
      M = 0;
    for (P = 0; P < R.length; P += 1) {
      N = R[P];
      if (N && N.modules) {
        for (M = 0; M < N.modules.length; M += 1) {
          Q = N.modules[M];
          if (Q === O) {
            return N.qid;
          }
        }
      }
    }
    return z.qid;
  }
  function x(O, M) {
    m[O] = window.setTimeout(function N() {
      j(O);
      m[O] = window.setTimeout(N, M);
    }, M);
  }
  function f(N) {
    var M = false;
    if (N && m[N]) {
      window.clearTimeout(m[N]);
      delete m[N];
      M = true;
    }
    return M;
  }
  function v() {
    var M = 0;
    for (M in m) {
      if (m.hasOwnProperty(M)) {
        f(M);
      }
    }
    m = {};
  }
  function b(N) {
    var M;
    if (!N) {
      return;
    }
    if (f(N)) {
      M = t.get(N);
      if (M.timerInterval) {
        x(N, M.timerInterval);
      }
    }
  }
  function E(M) {}
  function s(M) {
    k = M;
    i = q.getCoreConfig();
    F = K.getValue(i, "inactivityTimeout", 36000000);
    K.forEach(k.queues, function (N, O) {
      var P = null;
      if (N.qid === "DEFAULT") {
        z = N;
      }
      if (N.crossDomainEnabled) {
        P = c.query(N.crossDomainFrameSelector);
        if (!P) {
          q.fail("Cross domain iframe not found");
        }
      }
      t.add(N.qid, {
        url: N.endpoint,
        eventThreshold: N.maxEvents,
        sizeThreshold: N.maxSize || 0,
        serializer: N.serializer,
        encoder: N.encoder,
        timerInterval: N.timerInterval || 0,
        crossDomainEnabled: N.crossDomainEnabled || false,
        crossDomainIFrame: P,
      });
      if (typeof N.timerInterval !== "undefined" && N.timerInterval > 0) {
        x(N.qid, N.timerInterval);
      }
    });
    D.subscribe("configupdated", E);
    B = true;
  }
  function C() {
    if (H) {
      I(!k.asyncReqOnUnload);
    }
    D.unsubscribe("configupdated", E);
    v();
    t.reset();
    k = null;
    z = null;
    B = false;
  }
  return {
    init: function () {
      if (!B) {
        s(D.getServiceConfig("queue") || {});
      } else {
      }
    },
    destroy: function () {
      C();
    },
    _getQueue: function (M) {
      return t.get(M).data;
    },
    setAutoFlush: function (M) {
      if (M === true) {
        H = true;
      } else {
        H = false;
      }
    },
    flush: function (M) {
      M = M || z.qid;
      if (!t.exists(M)) {
        throw new Error("Queue: " + M + " does not exist!");
      }
      j(M);
    },
    flushAll: function (M) {
      return I(!!M);
    },
    post: function (N, O, M) {
      if (!q.isInitialized()) {
        return;
      }
      M = M || G(N);
      if (!t.exists(M)) {
        return;
      }
      if (!a(O)) {
        L(M, O);
      }
    },
    resetFlushTimer: function (M) {
      M = M || z.qid;
      if (!t.exists(M)) {
        return;
      }
      b(M);
    },
  };
});
DCX.addService("browserBase", function (r) {
  var g,
    L = r.utils,
    h = { optgroup: true, option: true, nobr: true },
    p = {},
    e,
    m = null,
    A,
    w,
    f,
    q,
    F = false;
  function s() {
    e = r.getService("config");
    m = r.getService("serializer");
    A = e ? e.getServiceConfig("browser") : {};
    w = A.hasOwnProperty("blacklist") ? A.blacklist : [];
    f = A.hasOwnProperty("customid") ? A.customid : [];
  }
  function b() {
    s();
    if (e) {
      e.subscribe("configupdated", s);
    }
    F = true;
  }
  function G() {
    if (e) {
      e.unsubscribe("configupdated", s);
    }
    F = false;
  }
  function v(P) {
    var N, M, O;
    if (!P || !P.id || typeof P.id !== "string") {
      return false;
    }
    for (N = 0, M = w.length; N < M; N += 1) {
      if (typeof w[N] === "string") {
        if (P.id === w[N]) {
          return false;
        }
      } else {
        if (typeof w[N] === "object") {
          if (!w[N].cRegex) {
            w[N].cRegex = new RegExp(w[N].regex, w[N].flags);
          }
          w[N].cRegex.lastIndex = 0;
          if (w[N].cRegex.test(P.id)) {
            return false;
          }
        }
      }
    }
    return true;
  }
  function o(O, P) {
    var M = { type: null, subType: null },
      N;
    if (!O) {
      return M;
    }
    N = O.type;
    switch (N) {
      case "focusin":
        N = "focus";
        break;
      case "focusout":
        N = "blur";
        break;
      default:
        break;
    }
    M.type = N;
    return M;
  }
  function y(N) {
    var M = { type: null, subType: null };
    if (!N) {
      return M;
    }
    M.type = L.getTagName(N);
    M.subType = N.type || null;
    return M;
  }
  function c(M, O, N) {
    var S = { HTML_ID: "-1", XPATH_ID: "-2", ATTRIBUTE_ID: "-3" },
      R,
      P = null,
      Q;
    if (!M || !O) {
      return P;
    }
    R = N || window.document;
    O = O.toString();
    if (O === S.HTML_ID) {
      if (R.getElementById) {
        P = R.getElementById(M);
      } else {
        if (R.querySelector) {
          P = R.querySelector("#" + M);
        }
      }
    } else {
      if (O === S.ATTRIBUTE_ID) {
        Q = M.split("=");
        if (R.querySelector) {
          P = R.querySelector("[" + Q[0] + '="' + Q[1] + '"]');
        }
      } else {
        if (O === S.XPATH_ID) {
          P = p.xpath(M, R);
        }
      }
    }
    return P;
  }
  q = (function () {
    var M = { nobr: true, p: true };
    return function (S, P) {
      var V,
        T,
        ac = document.documentElement,
        U = false,
        aa = null,
        R = null,
        Y = null,
        Z = [],
        N,
        X = true,
        Q = r._getLocalTop(),
        O = "",
        W = false,
        ad;
      while (X) {
        X = false;
        O = L.getTagName(S);
        if (O && !W) {
          if (M[O]) {
            S = S.parentNode;
            X = true;
            continue;
          }
        }
        for (
          U = v(S);
          S && [1, 9].indexOf(S.nodeType) > -1 && S !== document && (P || !U);
          U = v(S)
        ) {
          Y = S.parentNode;
          if (!Y) {
            R = L.getWindow(S);
            if (!R) {
              return Z;
            }
            Y = R !== Q ? R.frameElement : ac;
          }
          aa = Y.firstChild;
          if (!aa) {
            Z.push(["XPath Error(1)"]);
            S = null;
            break;
          }
          for (T = 0; aa; aa = aa.nextSibling) {
            if (aa.nodeType === 1 && L.getTagName(aa) === O) {
              if (aa === S) {
                N = [O, T];
                if (W) {
                  N.push("h");
                  W = false;
                }
                Z[Z.length] = N;
                break;
              }
              T += 1;
            }
          }
          if (Y.nodeType === 11) {
            S = Y.host;
            W = true;
          } else {
            S = Y;
          }
          O = L.getTagName(S);
        }
        if (U && !P) {
          N = [S.id];
          if (W) {
            N.push("h");
            W = false;
          }
          Z[Z.length] = N;
          if (L.isIFrameDescendant(S)) {
            X = true;
            S = L.getWindow(S).frameElement;
          } else {
            try {
              if (!ac.contains(S)) {
                X = true;
                ad = S.getRootNode();
                S = ad.host;
                W = true;
              }
            } catch (ab) {}
          }
        }
      }
      return Z.reverse();
    };
  })();
  function C(M) {
    var N = "null";
    if (!M || !M.length) {
      return N;
    }
    N = m.serialize(M, "json");
    return N;
  }
  function u(O, N, Q) {
    var P, M;
    M = q(O, !!N);
    if (Q) {
      P = M;
    } else {
      P = C(M);
    }
    return P;
  }
  function K(N) {
    var O = { left: -1, top: -1 },
      M;
    N = N || document;
    M = N.documentElement || N.body.parentNode || N.body;
    O.left = Math.round(
      typeof window.pageXOffset === "number" ? window.pageXOffset : M.scrollLeft
    );
    O.top = Math.round(
      typeof window.pageYOffset === "number" ? window.pageYOffset : M.scrollTop
    );
    return O;
  }
  function J(M) {
    return (
      M &&
      typeof M.originalEvent !== "undefined" &&
      typeof M.isDefaultPrevented !== "undefined" &&
      !M.isSimulated
    );
  }
  function j(M) {
    if (!M) {
      return null;
    }
    if (M.type && M.type.indexOf("touch") === 0) {
      if (J(M)) {
        M = M.originalEvent;
      }
      if (M.type === "touchstart") {
        M = M.touches[M.touches.length - 1];
      } else {
        if (M.type === "touchend") {
          M = M.changedTouches[0];
        }
      }
    }
    return M;
  }
  function t(P) {
    var S = P || window.event,
      R = document.documentElement,
      M = document.body,
      Q = false,
      O = null,
      N = 0;
    if (J(S)) {
      S = S.originalEvent;
    }
    if (typeof P === "undefined" || typeof S.target === "undefined") {
      S.target = S.srcElement || window.window;
      S.timeStamp = Number(new Date());
      if (S.pageX === null || typeof S.pageX === "undefined") {
        S.pageX =
          S.clientX +
          ((R && R.scrollLeft) || (M && M.scrollLeft) || 0) -
          ((R && R.clientLeft) || (M && M.clientLeft) || 0);
        S.pageY =
          S.clientY +
          ((R && R.scrollTop) || (M && M.scrollTop) || 0) -
          ((R && R.clientTop) || (M && M.clientTop) || 0);
      }
      S.preventDefault = function () {
        this.returnValue = false;
      };
      S.stopPropagation = function () {
        this.cancelBubble = true;
      };
    }
    if (window.chrome && S.path !== undefined && S.type === "click") {
      if (S.path.length === undefined) {
        return S;
      }
      for (N = 0; N < S.path.length; N++) {
        if (L.getTagName(S.path[N]) === "button") {
          Q = true;
          O = S.path[N];
          N = S.path.length;
        }
      }
      if (Q) {
        return {
          originalEvent: S,
          target: O,
          srcElement: O,
          type: S.type,
          pageX: document.body.scrollLeft + O.getBoundingClientRect().left,
          pageY: document.body.scrollTop + O.getBoundingClientRect().top,
        };
      }
    }
    return S;
  }
  function x(O) {
    var N,
      M,
      P,
      Q = null;
    if (!O || !O.type) {
      return null;
    }
    if (O.type.indexOf("touch") === 0) {
      Q = j(O).target;
    } else {
      if (typeof O.composedPath === "function") {
        P = O.composedPath();
        if (P && P.length) {
          Q = P[0];
          for (N = 0, M = P.length; N < M; N += 1) {
            if (L.getTagName(P[N]) === "a") {
              Q = P[N];
              break;
            }
          }
        } else {
          Q = O.target || window.window;
        }
      } else {
        if (O.srcElement) {
          Q = O.srcElement;
        } else {
          Q = O.target;
        }
      }
    }
    while (Q && h[L.getTagName(Q)]) {
      if (Q.parentElement) {
        Q = Q.parentElement;
      } else {
        break;
      }
    }
    return Q;
  }
  function I(N) {
    var Q = 0,
      P = 0,
      O = document.documentElement,
      M = document.body;
    N = j(N);
    if (N) {
      if (N.pageX || N.pageY) {
        Q = N.pageX;
        P = N.pageY;
      } else {
        if (N.clientX || N.clientY) {
          Q =
            N.clientX +
            (O ? O.scrollLeft : M ? M.scrollLeft : 0) -
            (O ? O.clientLeft : M ? M.clientLeft : 0);
          P =
            N.clientY +
            (O ? O.scrollTop : M ? M.scrollTop : 0) -
            (O ? O.clientTop : M ? M.clientTop : 0);
        }
      }
    }
    return { x: Q, y: P };
  }
  p.xpath = function (U, W) {
    var S = null,
      N,
      T = null,
      X = false,
      M,
      Q,
      P,
      O,
      R,
      V;
    if (!U) {
      return null;
    }
    S = m.parse(U);
    W = W || document;
    N = W;
    if (!S) {
      return null;
    }
    for (Q = 0, R = S.length; Q < R && N; Q += 1) {
      T = S[Q];
      X = T.length > 1 && T[T.length - 1] === "h";
      if (T.length === 1 || (T.length === 2 && X)) {
        if (W.getElementById) {
          N = W.getElementById(T[0]);
        } else {
          if (W.querySelector) {
            N = W.querySelector("#" + T[0]);
          } else {
            N = null;
          }
        }
      } else {
        for (P = 0, O = -1, V = N.childNodes.length; P < V; P += 1) {
          if (
            N.childNodes[P].nodeType === 1 &&
            L.getTagName(N.childNodes[P]) === T[0].toLowerCase()
          ) {
            O += 1;
            if (O === T[1]) {
              N = N.childNodes[P];
              break;
            }
          }
        }
        if (O !== T[1]) {
          return null;
        }
      }
      if (!N) {
        return null;
      }
      if (X) {
        if (Q < R - 1) {
          if (!N.shadowRoot) {
            return null;
          }
          N = N.shadowRoot;
          W = N;
        }
      }
      M = L.getTagName(N);
      if (M === "frame" || M === "iframe") {
        N = L.getIFrameWindow(N).document;
        W = N;
      }
    }
    return N === W || !N ? null : N;
  };
  function l(M, N) {
    this.x = Math.round(M || 0);
    this.y = Math.round(N || 0);
  }
  function a(N, M) {
    this.width = Math.round(N || 0);
    this.height = Math.round(M || 0);
  }
  function d(N, O) {
    var Q, M, P;
    O = x(N);
    Q = this.examineID(O);
    M = y(O);
    P = this.examinePosition(N, O);
    this.element = O;
    this.id = Q.id;
    this.idType = Q.idType;
    this.type = M.type;
    this.subType = M.subType;
    this.state = this.examineState(O);
    this.position = new l(P.x, P.y);
    this.size = new a(P.width, P.height);
    this.xPath = Q.xPath;
    this.name = Q.name;
  }
  d.HTML_ID = -1;
  d.XPATH_ID = -2;
  d.ATTRIBUTE_ID = -3;
  d.prototype.examineID = function (R) {
    var P = { id: "", idType: 0, xPath: "", name: "" },
      M = f.length,
      O,
      N = document.documentElement;
    if (!R) {
      return P;
    }
    P.xPath = u(R);
    P.name = R.name;
    try {
      if (N.contains(R) && (!L.getWindow(R) || !L.isIFrameDescendant(R))) {
        if (v(R)) {
          P.id = R.id;
          P.idType = d.HTML_ID;
        } else {
          if (f.length && R.attributes) {
            while (M) {
              M -= 1;
              O = R.attributes[f[M]];
              if (typeof O !== "undefined") {
                P.id = f[M] + "=" + (O.value || O);
                P.idType = d.ATTRIBUTE_ID;
              }
            }
          }
        }
      }
    } catch (Q) {}
    if (!P.id) {
      P.id = P.xPath;
      if (P.id !== "null") {
        P.idType = d.XPATH_ID;
      }
    }
    return P;
  };
  d.prototype.examineState = function (M) {
    return L.getTargetState(M);
  };
  function E() {
    var N = 1,
      O,
      Q,
      M;
    if (document.body.getBoundingClientRect) {
      try {
        O = document.body.getBoundingClientRect();
      } catch (P) {
        return N;
      }
      Q = O.right - O.left;
      M = document.body.offsetWidth;
      N = Math.round((Q / M) * 100) / 100;
    }
    return N;
  }
  function n(N) {
    var P, M, O, R;
    if (!N || !N.getBoundingClientRect) {
      return { x: 0, y: 0, width: 0, height: 0 };
    }
    try {
      P = N.getBoundingClientRect();
      R = K(document);
    } catch (Q) {
      return { x: 0, y: 0, width: 0, height: 0 };
    }
    M = {
      x: P.left + R.left,
      y: P.top + R.top,
      width: P.right - P.left,
      height: P.bottom - P.top,
    };
    if (L.isIE) {
      M.x -= document.documentElement.clientLeft;
      M.y -= document.documentElement.clientTop;
      O = E();
      if (O !== 1) {
        M.x = Math.round(M.x / O);
        M.y = Math.round(M.y / O);
        M.width = Math.round(M.width / O);
        M.height = Math.round(M.height / O);
      }
    }
    return M;
  }
  d.prototype.examinePosition = function (N, O) {
    var P = I(N),
      M = n(O);
    M.x = P.x || P.y ? Math.round(Math.abs(P.x - M.x)) : M.width / 2;
    M.y = P.x || P.y ? Math.round(Math.abs(P.y - M.y)) : M.height / 2;
    return M;
  };
  function H() {
    var M = typeof window.orientation === "number" ? window.orientation : 0;
    if (L.isLandscapeZeroDegrees) {
      if (Math.abs(M) === 180 || Math.abs(M) === 0) {
        M = 90;
      } else {
        if (Math.abs(M) === 90) {
          M = 0;
        }
      }
    }
    return M;
  }
  function B(S) {
    var P, M, R, Q, O, N;
    if (S) {
      return S;
    }
    R = r.getCoreConfig() || {};
    O = R.modules;
    S = {};
    for (N in O) {
      if (O.hasOwnProperty(N) && O[N].events) {
        for (P = 0, M = O[N].events.length; P < M; P += 1) {
          Q = O[N].events[P];
          if (Q.state) {
            S[Q.name] = Q.state;
          }
        }
      }
    }
    return S;
  }
  function i(M) {
    var N;
    g = B(g);
    if (g[M.type]) {
      N = L.getValue(M, g[M.type], null);
    }
    return N;
  }
  function k(N) {
    var P, M, O;
    this.data = N.data || null;
    this.delegateTarget = N.delegateTarget || null;
    if (N.gesture || (N.originalEvent && N.originalEvent.gesture)) {
      this.gesture = N.gesture || N.originalEvent.gesture;
      this.gesture.idType = new d(this.gesture, this.gesture.target).idType;
    }
    N = t(N);
    P = I(N);
    this.custom = false;
    this.nativeEvent = this.custom === true ? null : N;
    this.position = new l(P.x, P.y);
    this.target = new d(N, N.target);
    this.orientation = H();
    O = i(N);
    if (O) {
      this.target.state = O;
    }
    this.timestamp = new Date().getTime();
    M = o(N, this.target);
    this.type = M.type;
    this.subType = M.subType;
  }
  function D(M) {
    if (r.isInitialized()) {
      r._publishEvent(new k(M));
    } else {
    }
  }
  function z(R) {
    var Q = "",
      O = [],
      N,
      M = "",
      P = [];
    if (!(this instanceof z)) {
      return null;
    }
    if (typeof R !== "object" || !R.nodeType) {
      this.fullXpath = "";
      this.xpath = "";
      this.fullXpathList = [];
      this.xpathList = [];
      return;
    }
    if (R.nodeType === 3) {
      R = R.parentElement;
    }
    P = q(R, false);
    N = P[0];
    if (P.length && (N.length === 1 || (N.length === 2 && N[1] === "h"))) {
      O = q(R, true);
    } else {
      O = L.clone(P);
    }
    this.xpath = C(P);
    this.xpathList = P;
    this.fullXpath = C(O);
    this.fullXpathList = O;
    this.applyPrefix = function (U) {
      var S, T;
      if (!(U instanceof z) || !U.fullXpathList.length) {
        return;
      }
      T = U.fullXpathList[U.fullXpathList.length - 1];
      S = this.fullXpathList.shift();
      if (L.isEqual(S[0], T[0])) {
        this.fullXpathList = U.fullXpathList.concat(this.fullXpathList);
      } else {
        this.fullXpathList.unshift(S);
        return;
      }
      this.fullXpath = C(this.fullXpathList);
      S = this.xpathList.shift();
      if (S.length === 1) {
        this.xpathList.unshift(S);
        return;
      }
      this.xpathList = U.xpathList.concat(this.xpathList);
      this.xpath = C(this.xpathList);
    };
    this.compare = function (S) {
      if (!(S instanceof z)) {
        return 0;
      }
      return this.fullXpathList.length - S.fullXpathList.length;
    };
    this.isSame = function (S) {
      var T = false;
      if (!(S instanceof z)) {
        return T;
      }
      if (this.compare(S) === 0) {
        T = this.fullXpath === S.fullXpath;
      }
      return T;
    };
    this.containedIn = function (U, T) {
      var W, V, S, X;
      if (!(U instanceof z)) {
        return false;
      }
      if (U.fullXpathList.length > this.fullXpathList.length) {
        return false;
      }
      for (W = 0, S = U.fullXpathList.length; W < S; W += 1) {
        if (!L.isEqual(U.fullXpathList[W], this.fullXpathList[W])) {
          return false;
        }
      }
      if (!T) {
        for (V = W, S = this.fullXpathList.length; V < S; V += 1) {
          X = this.fullXpathList[V];
          if (X[X.length - 1] === "h") {
            return false;
          }
        }
      }
      return true;
    };
  }
  z.prototype = (function () {
    return {};
  })();
  return {
    init: function () {
      if (!F) {
        b();
      } else {
      }
    },
    destroy: function () {
      G();
    },
    WebEvent: k,
    ElementData: d,
    Xpath: z,
    processDOMEvent: D,
    getNormalizedOrientation: H,
    getXPathFromNode: function (N, O, M, P) {
      return u(O, M, P);
    },
    getNodeFromID: c,
    queryDom: p,
  };
});
DCX.addService("browser", function (d) {
  var m = d.utils,
    h = d.getService("config"),
    f = d.getService("browserBase"),
    n = d.getService("ajax"),
    g = null,
    c = null,
    k = h ? h.getServiceConfig("browser") : {},
    b = m.getValue(k, "useCapture", true),
    l = false,
    e = { NO_QUERY_SELECTOR: "NOQUERYSELECTOR" },
    p = function (q) {
      return function (s) {
        var r = new f.WebEvent(s);
        if (s.type === "resize" || s.type === "hashchange") {
          setTimeout(function () {
            q(r);
          }, 5);
        } else {
          q(r);
        }
      };
    },
    a = {
      list2Array: function (s) {
        var r = s.length,
          q = [],
          t;
        if (typeof s.length === "undefined") {
          return [s];
        }
        for (t = 0; t < r; t += 1) {
          q[t] = s[t];
        }
        return q;
      },
      find: function (s, r, q) {
        q = q || "css";
        return this.list2Array(this[q](s, r));
      },
      css: function (r, u) {
        var v = this,
          y = null,
          w = document.getElementsByTagName("body")[0],
          x = k.jQueryObject ? m.access(k.jQueryObject) : window.jQuery,
          t = k.sizzleObject ? m.access(k.sizzleObject) : window.Sizzle;
        if (typeof document.querySelectorAll === "undefined") {
          v.css = function (A, z) {
            z = z || document;
            return v.Sizzle(A, z);
          };
          if (typeof v.Sizzle === "undefined") {
            try {
              if (w === t("html > body", document)[0]) {
                v.Sizzle = t;
              }
            } catch (s) {
              try {
                if (w === x(document).find("html > body").get()[0]) {
                  v.Sizzle = function (A, z) {
                    return x(z).find(A).get();
                  };
                }
              } catch (q) {
                d.fail(
                  "Neither querySelectorAll nor Sizzle was found.",
                  e.NO_QUERY_SELECTOR
                );
              }
            }
          }
        } else {
          v.css = function (A, z) {
            z = z || document;
            return z.querySelectorAll(A);
          };
        }
        return v.css(r, u);
      },
    },
    o = (function () {
      var q = new m.WeakMap();
      return {
        add: function (r) {
          var s = q.get(r) || [p(r), 0];
          s[1] += 1;
          q.set(r, s);
          return s[0];
        },
        find: function (r) {
          var s = q.get(r);
          return s ? s[0] : null;
        },
        remove: function (r) {
          var s = q.get(r);
          if (s) {
            s[1] -= 1;
            if (s[1] <= 0) {
              q.remove(r);
            }
          }
        },
      };
    })();
  function j() {
    var r = k.jQueryObject ? m.access(k.jQueryObject) : window.jQuery,
      q = k.sizzleObject ? m.access(k.sizzleObject) : window.Sizzle;
    if (!document.querySelectorAll && !r && !q) {
      d.fail("querySelectorAll does not exist!", e.NO_QUERY_SELECTOR);
    }
  }
  function i() {
    a.xpath = f.queryDom.xpath;
    j();
    if (typeof document.addEventListener === "function") {
      g = function (s, q, r) {
        s.addEventListener(q, r, b);
      };
      c = function (s, q, r) {
        s.removeEventListener(q, r, b);
      };
    } else {
      if (typeof document.attachEvent !== "undefined") {
        g = function (s, q, r) {
          s.attachEvent("on" + q, r);
        };
        c = function (s, q, r) {
          s.detachEvent("on" + q, r);
        };
      } else {
        throw new Error("Unsupported browser");
      }
    }
    l = true;
  }
  return {
    init: function () {
      if (!l) {
        i();
      } else {
      }
    },
    destroy: function () {
      l = false;
    },
    getServiceName: function () {
      return "W3C";
    },
    query: function (t, r, q) {
      try {
        return a.find(t, r, q)[0] || null;
      } catch (s) {
        return [];
      }
    },
    queryAll: function (t, r, q) {
      try {
        return a.find(t, r, q);
      } catch (s) {
        return [];
      }
    },
    subscribe: function (q, t, r) {
      var s = o.add(r);
      g(t, q, s);
    },
    unsubscribe: function (q, u, r) {
      var s = o.find(r);
      if (s) {
        try {
          c(u, q, s);
        } catch (t) {}
        o.remove(r);
      }
    },
  };
});
DCX.addService("ajax", function (e) {
  var k = e.utils,
    i,
    m = false,
    b = false,
    j = false;
  function g(p) {
    var o = "",
      n = [];
    for (o in p) {
      if (p.hasOwnProperty(o)) {
        n.push([o, p[o]]);
      }
    }
    return n;
  }
  function h(p) {
    var o = "",
      n = "?";
    for (o in p) {
      if (p.hasOwnProperty(o)) {
        n += encodeURIComponent(o) + "=" + encodeURIComponent(p[o]) + "&";
      }
    }
    return n.slice(0, -1);
  }
  function l(n) {
    var p,
      q = false,
      o = h(n.headers);
    if (typeof n.data === "string") {
      p = n.data;
    } else {
      p = n.data ? new Uint8Array(n.data) : "";
    }
    q = navigator.sendBeacon(n.url + o, p);
    return q;
  }
  function f(o) {
    var q = o.headers || {},
      p = o.id || 0,
      n = o.oncomplete || function () {};
    q["X-Requested-With"] = "fetch";
    window
      .fetch(o.url, {
        method: o.type,
        headers: q,
        body: o.data,
        mode: "cors",
        credentials: "omit",
        keepalive: o.isUnloading,
        cache: "no-store",
      })
      .then(function (s) {
        var r = {
          success: s.ok,
          statusCode: s.status,
          statusText: s.statusText,
          id: p,
        };
        if (r.success) {
          s.json()
            .then(function (t) {
              r.data = t;
              n(r);
            })
            ["catch"](function (t) {
              r.statusCode = 1;
              r.statusText = t.message;
              n(r);
            });
          n(r);
        }
      })
      ["catch"](function (s) {
        var r = { success: false, statusCode: 2, statusText: s.message, id: p };
        n(r);
        o.headers["X-Requested-With"] = "";
        d(o);
      });
  }
  function a(o) {
    if (typeof o !== "function") {
      return;
    }
    return function n(q) {
      var s,
        p,
        r = false;
      if (!q) {
        return;
      }
      s = q.target;
      if (!s) {
        return o(q);
      }
      p = s.status;
      if (p >= 200 && p < 300) {
        r = true;
      }
      o({
        headers: k.extractResponseHeaders(s.getAllResponseHeaders()),
        responseText: s.responseText,
        statusCode: p,
        statusText: s.statusText,
        id: s.id,
        success: r,
      });
    };
  }
  function d(v) {
    var u = i(),
      o = [["X-Requested-With", "XMLHttpRequest"]],
      t = 0,
      p = typeof v.async !== "boolean" ? true : v.async,
      r = "",
      s = null,
      q,
      n;
    if (v.headers) {
      o = o.concat(g(v.headers));
    }
    if (v.contentType) {
      o.push(["Content-Type", v.contentType]);
    }
    u.open(v.type.toUpperCase(), v.url, p);
    for (q = 0, n = o.length; q < n; q += 1) {
      r = o[q];
      if (r[0] && r[1]) {
        u.setRequestHeader(r[0], r[1]);
      }
    }
    if (v.error) {
      v.error = a(v.error);
      u.addEventListener("error", v.error);
    }
    u.onreadystatechange = s = function () {
      if (u.readyState === 4) {
        u.onreadystatechange = s = function () {};
        if (v.timeout) {
          window.clearTimeout(t);
        }
        v.oncomplete({
          id: v.id,
          headers: k.extractResponseHeaders(u.getAllResponseHeaders()),
          responseText: u.responseText || null,
          statusCode: u.status,
          statusText: u.statusText,
          success: u.status >= 200 && u.status < 300,
        });
        u = null;
      }
    };
    u.send(v.data || null);
    s();
    if (v.timeout) {
      t = window.setTimeout(function () {
        if (!u) {
          return;
        }
        u.onreadystatechange = function () {};
        if (u.readyState !== 4) {
          u.abort();
          if (typeof v.error === "function") {
            v.error({
              id: v.id,
              statusCode: u.status,
              statusText: "timeout",
              success: false,
            });
          }
        }
        v.oncomplete({
          id: v.id,
          headers: k.extractResponseHeaders(u.getAllResponseHeaders()),
          responseText: u.responseText || null,
          statusCode: u.status,
          statusText: "timeout",
          success: false,
        });
        u = null;
      }, v.timeout);
    }
  }
  function c() {
    var n = e.getServiceConfig("queue");
    if (typeof window.XMLHttpRequest !== "undefined") {
      i = function () {
        return new XMLHttpRequest();
      };
    } else {
      i = function () {
        return new ActiveXObject("Microsoft.XMLHTTP");
      };
    }
    if (n) {
      m =
        k.getValue(n, "useBeacon", true) &&
        typeof navigator.sendBeacon === "function";
      b = k.getValue(n, "useFetch", true) && typeof window.fetch === "function";
    }
    j = true;
  }
  return {
    init: function () {
      if (!j) {
        c();
      }
    },
    destroy: function () {
      j = false;
    },
    sendRequest: function (n) {
      var p = true,
        o;
      n.type = n.type || "POST";
      if ((n.isUnloading || !n.async) && m) {
        p = false;
        o = l(n);
        if (!o) {
          p = true;
        }
      }
      if (p) {
        if (n.isUnloading && b) {
          f(n);
        } else {
          d(n);
        }
      }
    },
  };
});
DCX.addService("domCapture", function (B) {
  var j = B.getService("config"),
    k = B.getService("browserBase"),
    d = B.getService("browser"),
    x,
    i,
    g = {
      maxMutations: 100,
      maxLength: 1000000,
      captureShadowDOM: false,
      captureFrames: false,
      removeScripts: true,
      removeComments: true,
      captureStyle: true,
      removeBase64: 50000,
    },
    ab = {
      childList: true,
      attributes: true,
      attributeOldValue: true,
      characterData: true,
      subtree: true,
    },
    a = typeof window.MutationObserver !== "undefined",
    z,
    J = ab,
    Q = [],
    K = [],
    y = [],
    ac = [],
    w = [],
    A = 0,
    H = 100,
    c = false,
    r = false,
    R = false,
    L = 1,
    t = function () {},
    v = function () {},
    D = function () {},
    M = B._publishEvent,
    ah = B.utils;
  function I() {
    ac = [];
    w = [];
    A = 0;
    c = false;
  }
  function X(al) {
    var ak, aj, ai;
    if (!al || !al.length) {
      return;
    }
    al = al.sort(function (an, am) {
      return an.compare(am);
    });
    for (ak = 0; ak < al.length; ak += 1) {
      ai = al[ak];
      for (aj = ak + 1; aj < al.length; aj += 0) {
        if (al[aj].containedIn(ai)) {
          al.splice(aj, 1);
        } else {
          aj += 1;
        }
      }
    }
  }
  function s(ak) {
    var aj, ai;
    if (!ak) {
      return ak;
    }
    for (aj = 0, ai = ak.length; aj < ai; aj += 1) {
      delete ak[aj].oldValue;
    }
    return ak;
  }
  function T(am, ak) {
    var aj,
      ai,
      al = -1;
    if (!am || !ak) {
      return al;
    }
    for (aj = 0, ai = am.length; aj < ai; aj += 1) {
      if (am[aj].name === ak) {
        al = aj;
        break;
      }
    }
    return al;
  }
  function C(al, an) {
    var ak, aj, ai, am;
    for (ak = 0, aj = al.length, am = false; ak < aj; ak += 1) {
      ai = al[ak];
      if (ai.name === an.name) {
        if (ai.oldValue === an.value) {
          al.splice(ak, 1);
        } else {
          ai.value = an.value;
        }
        am = true;
        break;
      }
    }
    if (!am) {
      al.push(an);
    }
    return al;
  }
  function P(ao, ai) {
    var an,
      al,
      ak,
      ap,
      ar,
      aq,
      am,
      aj = 0;
    ao.removedNodes = ai.removedNodes.length;
    ao.addedNodes = ah.convertToArray(ai.addedNodes);
    for (an = 0, ap = ac.length; an < ap; an += 1) {
      aq = ac[an];
      if (ao.isSame(aq)) {
        if (ao.removedNodes) {
          for (al = 0; al < ai.removedNodes.length; al += 1) {
            ak = aq.addedNodes.indexOf(ai.removedNodes[al]);
            if (ak !== -1) {
              aq.addedNodes.splice(ak, 1);
              ao.removedNodes -= 1;
            }
          }
        }
        aq.removedNodes += ao.removedNodes;
        aq.addedNodes.concat(ao.addedNodes);
        if (!aq.removedNodes && !aq.addedNodes.length) {
          am = false;
          for (al = 0; al < ac.length; al += 1) {
            if (aq !== ac[al] && ac[al].containedIn(aq)) {
              am = true;
              break;
            }
          }
          if (!am) {
            ac.splice(an, 1);
            aj = -1;
          }
        }
        ar = true;
        break;
      }
    }
    if (!ar) {
      ac.push(ao);
      aj = 1;
    }
    return aj;
  }
  function Y(aj, an) {
    var al,
      ak,
      ai,
      ao = false,
      am,
      ap;
    for (al = 0, ai = ac.length; !ao && al < ai; al += 1) {
      ap = ac[al];
      if (aj.containedIn(ap)) {
        am = ap.addedNodes;
        for (ak = 0; ak < am.length; ak += 1) {
          if (am[ak].contains && am[ak].contains(an)) {
            ao = true;
            break;
          }
        }
      }
    }
    return ao;
  }
  function G(am, ai) {
    var ak,
      an,
      ap,
      al,
      aq,
      ao = null,
      aj = 0;
    ap = ai.attributeName;
    if (ap === "checked" || ap === "selected") {
      ao = k.ElementData.prototype.examineID(ai.target);
      if (x.isPrivacyMatched(ao)) {
        return aj;
      }
      ao = null;
    }
    if (ap === "value") {
      ao = k.ElementData.prototype.examineID(ai.target);
      ao.currState = ah.getTargetState(ai.target) || {};
      if (ao.currState.value) {
        x.applyPrivacyToTarget(ao);
      } else {
        ao = null;
      }
    }
    am.attributes = [
      {
        name: ap,
        oldValue: ai.oldValue,
        value: ao ? ao.currState.value : ai.target.getAttribute(ap),
      },
    ];
    al = am.attributes[0];
    if (al.oldValue === al.value) {
      return aj;
    }
    for (ak = 0, an = w.length, aq = false; ak < an; ak += 1) {
      ao = w[ak];
      if (am.isSame(ao)) {
        ao.attributes = C(ao.attributes, al);
        if (!ao.attributes.length) {
          w.splice(ak, 1);
          aj = -1;
        } else {
          if (Y(am, ai.target)) {
            w.splice(ak, 1);
            aj = -1;
          }
        }
        aq = true;
        break;
      }
    }
    if (!aq && !Y(am, ai.target)) {
      w.push(am);
      aj = 1;
    }
    return aj;
  }
  function o(al) {
    var an, ai, am, aj, ak;
    if (!al || !al.length) {
      return;
    }
    if (c) {
      A += al.length;
      return;
    }
    for (an = 0, ai = al.length; an < ai && A < H; an += 1) {
      aj = al[an];
      ak = new k.Xpath(aj.target);
      if (ak) {
        am = ak.fullXpathList;
        if (am.length && am[0][0] === "html") {
          switch (aj.type) {
            case "characterData":
            case "childList":
              A += P(ak, aj);
              break;
            case "attributes":
              A += G(ak, aj);
              break;
            default:
              ah.clog("Unknown mutation type: " + aj.type);
              break;
          }
        }
      }
    }
    if (A >= H) {
      c = true;
      A += ai - an;
    }
  }
  function u() {
    var ai;
    ai = new window.MutationObserver(function (aj) {
      if (aj) {
        o(aj);
        ah.clog("Processed [" + aj.length + "] mutation records.");
      }
    });
    return ai;
  }
  function l(aj) {
    var al,
      ai,
      ak,
      ao,
      an,
      am = j.getCoreConfig();
    j.subscribe("configupdated", D);
    x = B.getService("message");
    i = aj;
    i.options = ah.mixin({}, g, i.options);
    a = a && ah.getValue(i, "diffEnabled", true);
    H = ah.getValue(i.options, "maxMutations", 100);
    if (a) {
      J = ah.getValue(i, "diffObserverConfig", ab);
      z = u();
      Q.push(window);
    }
    for (ak in am.modules) {
      if (am.modules.hasOwnProperty(ak)) {
        an = am.modules[ak].events || [];
        for (al = 0, ai = an.length; al < ai; al += 1) {
          if (an[al].attachToShadows) {
            ao = an[al].name;
            if (y.indexOf(ao) === -1) {
              y.push(ao);
            }
          }
        }
      }
    }
    R = true;
  }
  function V() {
    j.unsubscribe("configupdated", D);
    if (z) {
      z.disconnect();
    }
    R = false;
  }
  function p() {
    var ai;
    ai = "tlt-" + ah.getSerialNumber();
    return ai;
  }
  function W(ak, aj, ai) {
    var am,
      ao,
      an,
      al,
      aq,
      ap = [];
    if (!ak || !ak.getElementsByTagName || !aj) {
      return ap;
    }
    if (ai && ai.length === 2) {
      ao = ai[0];
      an = ai[1];
    }
    al = ak.getElementsByTagName(aj);
    if (al && al.length) {
      for (am = al.length - 1; am >= 0; am -= 1) {
        aq = al[am];
        if (!ao) {
          ap.push(aq);
        } else {
          if (aq[ao] === an) {
            ap.push(aq);
          }
        }
      }
    }
    return ap;
  }
  function h(ao, am, an) {
    var al, ak, ap, aj, ai;
    if (!ao || !ao.getElementsByTagName || !am) {
      return;
    }
    if (an && an.length === 2) {
      ak = an[0];
      ap = an[1];
    }
    aj = ao.getElementsByTagName(am);
    if (aj && aj.length) {
      for (al = aj.length - 1; al >= 0; al -= 1) {
        ai = aj[al];
        if (!ak) {
          ai.parentNode.removeChild(ai);
        } else {
          if (ai[ak] === ap) {
            ai.parentNode.removeChild(ai);
          }
        }
      }
    }
    return ao;
  }
  function ag(am, ak) {
    var al,
      ai,
      an = W(am, "img"),
      aj = new RegExp("^data:image/(.*?);base64");
    for (al = 0; al < an.length; al++) {
      ai = an[al];
      if (aj.test(ai.src) && ai.src.length > ak) {
        ai.src = "";
        ai.setAttribute("removedByDCX", true);
      }
    }
    return am;
  }
  function O(ak, ai) {
    var aj, al;
    for (aj = 0; ak.hasChildNodes() && aj < ak.childNodes.length; aj += 1) {
      al = ak.childNodes[aj];
      if (al.nodeType === ai) {
        ak.removeChild(al);
        aj -= 1;
      } else {
        if (al.hasChildNodes()) {
          O(al, ai);
        }
      }
    }
    return ak;
  }
  function f(am, al) {
    var ak, aj, ai;
    if (!am || !am.getElementsByTagName || !al) {
      return;
    }
    aj = am.querySelectorAll(al);
    if (aj && aj.length) {
      for (ak = aj.length - 1; ak >= 0; ak -= 1) {
        ai = aj[ak];
        ai.parentNode.removeChild(ai);
      }
    }
    return am;
  }
  function aa(ak) {
    var aj,
      ai = null;
    if (!ak || !ak.doctype) {
      return null;
    }
    aj = ak.doctype;
    if (aj) {
      ai =
        "<!DOCTYPE " +
        aj.name +
        (aj.publicId ? ' PUBLIC "' + aj.publicId + '"' : "") +
        (!aj.publicId && aj.systemId ? " SYSTEM" : "") +
        (aj.systemId ? ' "' + aj.systemId + '"' : "") +
        ">";
    }
    return ai;
  }
  function Z(ao, ap) {
    var an, ak, am, al, aj, ai;
    if (!ap) {
      return;
    }
    al = ao.getElementsByTagName("input");
    aj = ap.getElementsByTagName("input");
    if (aj) {
      for (an = 0, ai = aj.length; an < ai; an += 1) {
        ak = al[an];
        am = aj[an];
        switch (am.type) {
          case "checkbox":
          case "radio":
            if (ah.isIE ? ak.checked : am.checked) {
              am.setAttribute("checked", "checked");
            } else {
              am.removeAttribute("checked");
            }
            break;
          default:
            am.setAttribute("value", am.value);
            if (!am.getAttribute("type")) {
              am.setAttribute("type", "text");
            }
            break;
        }
      }
    }
  }
  function m(ao, ap) {
    var al, ai, an, aj, ak, am;
    if (!ao || !ao.getElementsByTagName || !ap || !ap.getElementsByTagName) {
      return;
    }
    aj = ao.getElementsByTagName("textarea");
    am = ap.getElementsByTagName("textarea");
    if (aj && am) {
      for (al = 0, ai = aj.length; al < ai; al += 1) {
        an = aj[al];
        ak = am[al];
        ak.setAttribute("value", an.value);
        ak.value = ak.textContent = an.value;
      }
    }
  }
  function S(ai, an) {
    var aj, ap, ao, aq, al, ak, am;
    if (!ai || !ai.getElementsByTagName || !an || !an.getElementsByTagName) {
      return;
    }
    ap = ai.getElementsByTagName("select");
    aq = an.getElementsByTagName("select");
    if (ap) {
      for (al = 0, am = ap.length; al < am; al += 1) {
        aj = ap[al];
        ao = aq[al];
        for (ak = 0; ak < aj.options.length; ak += 1) {
          if (ak === aj.selectedIndex || aj.options[ak].selected) {
            ao.options[ak].setAttribute("selected", "selected");
          } else {
            ao.options[ak].removeAttribute("selected");
          }
        }
      }
    }
  }
  function E(aj) {
    var ai,
      ak = null;
    if (aj) {
      ai = aj.nodeType || -1;
      switch (ai) {
        case 11:
          ak = aj.innerHTML;
          break;
        case 9:
          ak = aj.documentElement ? aj.documentElement.outerHTML : "";
          break;
        case 1:
          ak = aj.outerHTML;
          break;
        default:
          ak = null;
          break;
      }
    }
    return ak;
  }
  function af(ak) {
    var ai,
      aj = false;
    if (ak && typeof ak === "object") {
      ai = ak.nodeType || -1;
      switch (ai) {
        case 9:
        case 1:
          aj = true;
          break;
        default:
          aj = false;
          break;
      }
    }
    return aj;
  }
  function b(ap, az, aj) {
    var at,
      ar,
      au,
      aA,
      aq = ["iframe", "frame"],
      ay,
      ak,
      an,
      ax,
      al,
      aw,
      am = { frames: [] },
      aB,
      ao,
      ai;
    for (ar = 0; ar < aq.length; ar += 1) {
      aA = aq[ar];
      aB = ap.getElementsByTagName(aA);
      ao = az.getElementsByTagName(aA);
      if (aB) {
        for (at = 0, au = aB.length; at < au; at += 1) {
          try {
            ay = aB[at];
            ak = ah.getIFrameWindow(ay);
            if (ak && ak.document && ak.location.href !== "about:blank") {
              an = ak.document;
              ax = v(an, an, "", aj);
              al = p();
              ao[at].setAttribute("tltid", al);
              ax.tltid = al;
              ai = ah.getOriginAndPath(an.location);
              ax.host = ai.origin;
              ax.url = ai.path;
              ax.charset = an.characterSet || an.charset;
              aw = ao[at].getAttribute("src");
              if (!aw) {
                aw = ak.location.href;
                ao[at].setAttribute("src", aw);
              }
              am.frames = am.frames.concat(ax.frames);
              delete ax.frames;
              am.frames.push(ax);
            }
          } catch (av) {}
        }
      }
    }
    return am;
  }
  function ad(aj) {
    var ak, ai, al;
    aj.DCXListeners = aj.DCXListeners || {};
    for (ak = 0, ai = y.length; ak < ai; ak += 1) {
      al = y[ak];
      if (!aj.DCXListeners[al]) {
        d.subscribe(al, aj, M);
        aj.DCXListeners[al] = true;
      }
    }
  }
  function e(aj, at, au, am) {
    var an,
      aq,
      ak,
      ao,
      ai,
      al,
      ap = { shadows: [] };
    if (!aj || (!am && !aj.children)) {
      return ap;
    }
    if (am) {
      ai = [aj];
    } else {
      ai = aj.children;
    }
    for (an = 0, aq = ai.length; an < aq; an += 1) {
      ao = ai[an];
      if (ao.shadowRoot) {
        al = new k.Xpath(ao);
        ak = v(ao.ownerDocument, ao.shadowRoot, "", au);
        ap.shadows.push({ root: ak.root, xpath: al.xpath });
        ap.shadows = ap.shadows.concat(ak.shadows);
        ad(ao.shadowRoot);
        if (a) {
          try {
            z.observe(ao.shadowRoot, J);
            ao.shadowRoot.DCXListeners.mutation = true;
            if (ah.indexOf(K, ao) === -1) {
              K.push(ao);
            }
          } catch (ar) {}
        }
      }
      ak = e(ao, null, au);
      ap.shadows = ap.shadows.concat(ak.shadows);
    }
    return ap;
  }
  function ae(ao) {
    var am,
      ak,
      ai,
      al,
      aj,
      an,
      ap = 0;
    if (!ao) {
      return ap;
    }
    if (ao.root) {
      ap += ao.root.length;
      if (ao.frames) {
        for (am = 0, ai = ao.frames.length; am < ai; am += 1) {
          if (ao.frames[am].root) {
            ap += ao.frames[am].root.length;
          }
        }
      }
    } else {
      if (ao.diffs) {
        for (am = 0, ai = ao.diffs.length; am < ai; am += 1) {
          an = ao.diffs[am];
          ap += an.xpath.length;
          if (an.root) {
            ap += an.root.length;
          } else {
            if (an.attributes) {
              for (ak = 0, al = an.attributes.length; ak < al; ak += 1) {
                aj = an.attributes[ak];
                ap += aj.name.length;
                if (aj.value) {
                  ap += aj.value.length;
                }
              }
            }
          }
        }
      }
    }
    return ap;
  }
  function U() {
    var al, ak, ai, aj;
    for (al = 0, ai = ac.length; al < ai && w.length; al += 1) {
      aj = ac[al];
      for (ak = 0; ak < w.length; ak += 1) {
        if (w[ak].containedIn(aj)) {
          w.splice(ak, 1);
          ak -= 1;
        }
      }
    }
  }
  function n(al) {
    var ak,
      ai,
      aj,
      am,
      an = [];
    if (!al || !al.children) {
      return an;
    }
    am = al.children;
    for (ak = 0, ai = am.length; ak < ai; ak += 1) {
      aj = am[ak];
      if (aj.shadowRoot) {
        if (!aj.shadowRoot.DCXListeners) {
          an.push([aj, aj.shadowRoot]);
        }
        an = an.concat(n(aj.shadowRoot));
      }
      an = an.concat(n(aj));
    }
    return an;
  }
  function F(ao, ak) {
    var al, ai, am, an, aj;
    if (!ao || !ak) {
      return;
    }
    if (!ak.captureShadowDOM) {
      return;
    }
    aj = n(ao, ak);
    for (al = 0, ai = aj.length, am = []; al < ai; al += 1) {
      an = e(aj[al][0], null, ak, true);
      am = am.concat(an.shadows);
    }
    return am;
  }
  function q(an, ak) {
    var ao, aj, am, al, ai;
    ao = v(an, an, null, ak);
    if (!ao) {
      ao = {};
    }
    ao.charset = an.characterSet || an.charset;
    aj = ah.getOriginAndPath(an.location);
    ao.host = aj.origin;
    ao.url = aj.path;
    return ao;
  }
  function N(ax) {
    var an,
      ap,
      av = { fullDOM: false, diffs: [], attributeDiffs: {} },
      au,
      aw,
      at,
      ao,
      ak,
      aq,
      aj,
      am,
      ar = new RegExp("^data:image/(.*?);base64");
    X(ac);
    U();
    ao = ax.captureShadowDOM;
    ax.captureShadowDOM = false;
    for (an = 0, ap = ac.length; an < ap; an += 1) {
      aj = ac[an];
      aq = k.getNodeFromID(aj.xpath, -2);
      if (!aq) {
        continue;
      }
      if (aj.isShadowHost) {
        aq = aq.shadowRoot;
        if (!aq.DCXListeners) {
          continue;
        }
      }
      if (
        aq === window.document.body ||
        aq === window.document.documentElement
      ) {
        ax.captureShadowDOM = ao;
        return q(window.document, ax);
      }
      au = v(window.document, aq, aj, ax);
      delete au.originalSize;
      if (au.shadows && au.shadows.length === 0) {
        delete au.shadows;
      }
      if (au.frames && au.frames.length === 0) {
        delete au.frames;
      }
      au.xpath = aj.xpath;
      av.diffs.push(au);
    }
    function al(az, ay) {
      if (!az || !az.name) {
        return;
      }
      av.attributeDiffs[au.xpath][az.name] = { value: az.value };
    }
    function ai(aB) {
      var az, ay, aA;
      for (az = 0, aA = aB.length; az < aA; az += 1) {
        ay = aB[az];
        if (
          ay.name === "src" &&
          ar.test(ay.value) &&
          ay.value.length > ax.removeBase64
        ) {
          ay.value = "";
          aB.push({ name: "removedByDCX", value: true });
          break;
        }
      }
      return aB;
    }
    for (an = 0, ap = w.length; an < ap; an += 1) {
      aj = w[an];
      aw = T(aj.attributes, "id");
      if (aw > -1) {
        aq = k.getNodeFromID(aj.xpath, -2);
        at = new k.Xpath(aq, false, aj.attributes[aw].oldValue);
        aj.xpath = at.xpath;
      }
      am = s(aj.attributes);
      if (ax.hasOwnProperty("removeBase64")) {
        aq = k.getNodeFromID(aj.xpath, -2);
        if (aq && aq.tagName.toLowerCase() === "img" && am) {
          am = ai(am);
        }
      }
      au = { xpath: aj.xpath, attributes: am };
      av.diffs.push(au);
      av.attributeDiffs[au.xpath] = {};
      ah.forEach(au.attributes, al);
    }
    ax.captureShadowDOM = ao;
    ak = F(window.document, ax);
    if (ak && ak.length) {
      av.shadows = ak;
    }
    return av;
  }
  t = function (ak) {
    var al = null;
    if (af(ak)) {
      var ai = B.getCoreConfig().doNotCaptureElements || {};
      for (var aj = ai.length - 1; aj >= 0; aj -= 1) {
        f(ak, ai[aj]);
      }
      al = ak.cloneNode(true);
      if (!al && ak.documentElement) {
        al = ak.documentElement.cloneNode(true);
      }
    }
    return al;
  };
  v = function (ar, ap, an, at) {
    var ak = true,
      ai,
      aj,
      aq,
      am = {},
      ao,
      al;
    if (!ar || !ap) {
      return am;
    }
    ai = t(ap, ar);
    if (!ai && ap.host) {
      ak = false;
    } else {
      if (!ai) {
        return am;
      }
    }
    if (ak) {
      if (!!at.removeScripts) {
        h(ai, "script");
        h(ai, "noscript");
      }
      if (!at.keepImports) {
        h(ai, "link", ["rel", "import"]);
      }
      if (!!at.removeComments) {
        O(ai, 8);
      }
      if (!at.captureStyle) {
        h(ai, "style");
      }
      if (at.hasOwnProperty("removeBase64")) {
        ag(ai, at.removeBase64);
      }
      S(ap, ai);
      Z(ap, ai);
      m(ap, ai);
      ai = x.applyPrivacyToNode(ai, an, ar);
      if (!!at.captureFrames) {
        aj = b(ap, ai, at);
      }
    }
    if (!!at.captureShadowDOM) {
      aq = e(ap, ai, at);
    }
    if (aj) {
      am = ah.mixin(am, aj);
    }
    if (aq) {
      am = ah.mixin(am, aq);
    }
    ao = (aa(ap) || "") + E(ai || ap);
    am.root = x.applyPrivacyPatterns(ao);
    return am;
  };
  D = function () {
    j = B.getService("config");
    l(j.getServiceConfig("domCapture") || {});
  };
  return {
    init: function () {
      j = B.getService("config");
      if (!R) {
        l(j.getServiceConfig("domCapture") || {});
      } else {
      }
    },
    destroy: function () {
      V();
    },
    observeWindow: function (ak) {
      var aj, ai;
      if (!ak) {
        return;
      }
      if (!ah.getValue(i, "options.captureFrames", false) && !(ak === window)) {
        return;
      }
      if (ah.indexOf(Q, ak) === -1) {
        Q.push(ak);
      }
    },
    captureDOM: function (aj, ak) {
      var al,
        ai,
        ao = null,
        am,
        ap = 0;
      if (!R || ah.isLegacyIE) {
        return ao;
      }
      ak = ah.mixin({}, i.options, ak);
      aj = aj || window.document;
      if (!r || !a || c || ak.forceFullDOM) {
        if (z) {
          z.disconnect();
        }
        ao = q(aj, ak);
        ao.fullDOM = true;
        ao.forced = !!(c || ak.forceFullDOM);
        r = true;
        if (z) {
          for (al = 0, ai = Q.length; al < ai; al += 1) {
            am = Q[al];
            try {
              z.observe(am.document, J);
            } catch (an) {
              Q.splice(al, 1);
              ai = Q.length;
              al -= 1;
            }
          }
        }
      } else {
        ao = N(ak);
        ao.fullDOM = ao.diffs || ao.shadows ? false : true;
      }
      if (a) {
        ao.mutationCount = A;
      }
      I();
      if (ak.maxLength) {
        ap = ae(ao);
        if (ap > ak.maxLength) {
          ao = {
            errorCode: 101,
            error:
              "Captured length (" +
              ap +
              ") exceeded limit (" +
              ak.maxLength +
              ").",
          };
        }
      }
      if (ao.fullDOM) {
        ao.origDOMSize = ap;
      } else {
        ao.origDiffSize = ap;
      }
      return ao;
    },
  };
});
DCX.addService("encoder", function (a) {
  var f = {},
    g = null,
    b = null,
    d = false;
  function e(j) {
    var i = null;
    if (!j) {
      return i;
    }
    i = f[j];
    if (i && typeof i.encode === "string") {
      i.encode = a.utils.access(i.encode);
    }
    return i;
  }
  function h(i) {
    f = i;
    g.subscribe("configupdated", b);
    d = true;
  }
  function c() {
    g.unsubscribe("configupdated", b);
    d = false;
  }
  b = function () {
    g = a.getService("config");
    h(g.getServiceConfig("encoder") || {});
  };
  return {
    init: function () {
      g = a.getService("config");
      if (!d) {
        h(g.getServiceConfig("encoder") || {});
      } else {
      }
    },
    destroy: function () {
      c();
    },
    encode: function (m, l) {
      var k,
        i,
        j = { data: null, encoding: null, error: null };
      if ((typeof m !== "string" && !m) || !l) {
        j.error = "Invalid " + (!m ? "data" : "type") + " parameter.";
        return j;
      }
      k = e(l);
      if (!k) {
        j.error = "Specified encoder (" + l + ") not found.";
        return j;
      }
      if (typeof k.encode !== "function") {
        j.error =
          "Configured encoder (" + l + ") encode method is not a function.";
        return j;
      }
      try {
        i = k.encode(m);
      } catch (n) {
        j.error =
          "Encoding failed: " + (n.name ? n.name + " - " : "") + n.message;
        return j;
      }
      if (!i || a.utils.getValue(i, "buffer", null) === null) {
        j.error = "Encoder (" + l + ") returned an invalid result.";
        return j;
      }
      j.data = i.buffer;
      j.encoding = k.defaultEncoding;
      return j;
    },
  };
});
DCX.addService("message", function (v) {
  var Q = v.utils,
    q = 0,
    s = 0,
    I = 0,
    j = 0,
    r = new Date(),
    i = v.getService("browserBase"),
    b = v.getService("browser"),
    h = v.getService("config"),
    A = h.getServiceConfig("message") || {},
    m = v.normalizeUrl(window.location.href),
    N = window.location.hostname,
    R = A.hasOwnProperty("privacy") ? A.privacy : [],
    c,
    E = {},
    O = { lower: "x", upper: "X", numeric: "9", symbol: "@" },
    f = parseFloat((window.devicePixelRatio || 1).toFixed(2)),
    g = window.screen || {},
    a = g.width || 0,
    y = g.height || 0,
    P = i.getNormalizedOrientation(),
    k = !Q.isiOS ? a : Math.abs(P) === 90 ? y : a,
    D = !Q.isiOS ? y : Math.abs(P) === 90 ? a : y,
    L = window.screen ? window.screen.height - window.screen.availHeight : 0,
    K = window.innerWidth || document.documentElement.clientWidth,
    n = window.innerHeight || document.documentElement.clientHeight,
    H = false,
    x = {};
  function e(T) {
    var S = "",
      U = T.timestamp || new Date().getTime();
    this.timestamp = U;
    delete T.timestamp;
    this.type = T.type;
    this.offset = U - r.getTime();
    this.screenviewOffset = 0;
    if (T.type === 2) {
      q = s;
      s = U;
      if (T.screenview.type === "UNLOAD") {
        this.screenviewOffset = U - (q || r.getTime());
      }
    } else {
      if (s) {
        this.screenviewOffset = U - s;
      }
    }
    if (!this.type) {
      return;
    }
    this.count = j += 1;
    this.fromWeb = true;
    for (S in T) {
      if (T.hasOwnProperty(S)) {
        this[S] = T[S];
      }
    }
  }
  E.PVC_MASK_EMPTY = function (S) {
    return "";
  };
  E.PVC_MASK_BASIC = function (T) {
    var S = "XXXXX";
    if (typeof T !== "string") {
      return "";
    }
    return T.length ? S : "";
  };
  E.PVC_MASK_TYPE = function (W) {
    var T,
      V = 0,
      S = 0,
      U = "";
    if (typeof W !== "string") {
      return U;
    }
    T = W.split("");
    for (V = 0, S = T.length; V < S; V += 1) {
      if (Q.isNumeric(T[V])) {
        U += O.numeric;
      } else {
        if (Q.isUpperCase(T[V])) {
          U += O.upper;
        } else {
          if (Q.isLowerCase(T[V])) {
            U += O.lower;
          } else {
            U += O.symbol;
          }
        }
      }
    }
    return U;
  };
  E.PVC_MASK_EMPTY.maskType = 1;
  E.PVC_MASK_BASIC.maskType = 2;
  E.PVC_MASK_TYPE.maskType = 3;
  E.PVC_MASK_CUSTOM = { maskType: 4 };
  function d(S, U) {
    var T = E.PVC_MASK_BASIC;
    if (typeof U !== "string") {
      return U;
    }
    if (!S) {
      T = E.PVC_MASK_BASIC;
    } else {
      if (S.maskType === E.PVC_MASK_EMPTY.maskType) {
        T = E.PVC_MASK_EMPTY;
      } else {
        if (S.maskType === E.PVC_MASK_BASIC.maskType) {
          T = E.PVC_MASK_BASIC;
        } else {
          if (S.maskType === E.PVC_MASK_TYPE.maskType) {
            T = E.PVC_MASK_TYPE;
          } else {
            if (S.maskType === E.PVC_MASK_CUSTOM.maskType) {
              if (typeof S.maskFunction === "string") {
                T = Q.access(S.maskFunction);
              } else {
                T = S.maskFunction;
              }
              if (typeof T !== "function") {
                T = E.PVC_MASK_BASIC;
              }
            }
          }
        }
      }
    }
    return T(U);
  }
  function C(S, T) {
    var U;
    if (!S || !T) {
      return;
    }
    for (U in T) {
      if (T.hasOwnProperty(U)) {
        if (U === "value") {
          T[U] = d(S, T[U]);
        } else {
          delete T[U];
        }
      }
    }
  }
  function M(S, T) {
    return Q.matchTarget(S, T) !== -1;
  }
  function G(X) {
    var T, S, U, W, V;
    if (!X) {
      return "";
    }
    for (T = 0, S = c.length; T < S; T += 1) {
      V = c[T];
      V.cRegex.lastIndex = 0;
      X = X.replace(V.cRegex, V.replacement);
    }
    return X;
  }
  function F(Z) {
    var W,
      S,
      V,
      T,
      Y = false,
      X,
      U;
    if (!Z || (!Z.currState && !Z.prevState)) {
      return Z;
    }
    X = Z.prevState;
    U = Z.currState;
    for (W = 0, S = R.length; W < S; W += 1) {
      T = R[W];
      V = Q.getValue(T, "exclude", false);
      if (M(T.targets, Z) !== V) {
        C(T, X);
        C(T, U);
        Y = true;
        break;
      }
    }
    if (!Y) {
      if (X && X.value) {
        X.value = G(X.value);
      }
      if (U && U.value) {
        U.value = G(U.value);
      }
    }
    return Z;
  }
  function o(S) {
    if (!S || !S.target) {
      return S;
    }
    F(S.target);
    return S;
  }
  function l(V, T) {
    var U, S, X, W;
    if (!T || !V) {
      return;
    }
    if (V.value) {
      X = d(T, V.value);
      V.setAttribute("value", X);
      V.value = X;
    }
    if (V.checked) {
      V.removeAttribute("checked");
    }
    if (Q.getTagName(V) === "select") {
      V.selectedIndex = -1;
      for (U = 0, S = V.options.length; U < S; U += 1) {
        W = V.options[U];
        W.removeAttribute("selected");
        W.selected = false;
      }
    } else {
      if (Q.getTagName(V) === "textarea") {
        V.textContent = V.value;
      }
    }
  }
  function u(ae, ab, af, ak, X, aa) {
    var ag,
      ad,
      ac,
      ah,
      U,
      V,
      Z = [],
      ai,
      S,
      Y,
      W,
      aj,
      T;
    if (!ae.length && !X.length && !aa) {
      return [];
    }
    T = b.queryAll("input, select, textarea", ab);
    if (!T || !T.length) {
      return [];
    }
    for (ag = 0, ah = X.length; ag < ah; ag += 1) {
      ad = T.indexOf(X[ag]);
      if (ad !== -1) {
        T.splice(ad, 1);
      }
    }
    if (ae.length) {
      for (ag = 0, ah = T.length, Z = []; ag < ah; ag += 1) {
        if (T[ag].value) {
          V = i.ElementData.prototype.examineID(T[ag]);
          if (V.idType === -2) {
            ai = new i.Xpath(T[ag]);
            ai.applyPrefix(af);
            V.id = ai.xpath;
          }
          Z.push({ id: V.id, idType: V.idType, element: T[ag] });
        }
      }
    }
    for (ag = 0, ah = ae.length; ag < ah; ag += 1) {
      W = R[ae[ag].ruleIndex];
      S = Q.getValue(W, "exclude", false);
      aj = W.targets[ae[ag].targetIndex];
      if (typeof aj.id === "string" && aj.idType === -2) {
        for (ad = 0; ad < Z.length; ad += 1) {
          if (Z[ad].idType === aj.idType && Z[ad].id === aj.id) {
            if (!S) {
              U = Z[ad].element;
              l(U, W);
            } else {
              ac = T.indexOf(U);
              T.splice(ac, 1);
            }
          }
        }
      } else {
        for (ad = 0; ad < Z.length; ad += 1) {
          aj.cRegex.lastIndex = 0;
          if (Z[ad].idType === aj.idType && aj.cRegex.test(Z[ad].id)) {
            U = Z[ad].element;
            if (!S) {
              l(U, W);
            } else {
              ac = T.indexOf(U);
              T.splice(ac, 1);
            }
          }
        }
      }
    }
    if (aa) {
      for (ag = 0, ah = T.length; ag < ah; ag += 1) {
        l(T[ag], aa);
      }
    }
  }
  function p(Z, ae, ak) {
    var af,
      ab,
      aa,
      U,
      S,
      V = [],
      Y,
      ag,
      ac,
      W,
      T,
      ah,
      ad = [],
      aj,
      ai,
      X;
    if (!Z || !ak) {
      return null;
    }
    for (af = 0, ag = R.length; af < ag; af += 1) {
      ac = R[af];
      S = Q.getValue(ac, "exclude", false);
      if (S) {
        Y = ac;
      }
      ai = ac.targets;
      for (ab = 0, X = ai.length; ab < X; ab += 1) {
        aj = ai[ab];
        if (typeof aj === "string") {
          T = b.queryAll(aj, Z);
          if (!S) {
            for (aa = 0, ah = T.length; aa < ah; aa += 1) {
              U = T[aa];
              l(U, ac);
            }
          } else {
            V = V.concat(T);
          }
        } else {
          if (typeof aj.id === "string") {
            switch (aj.idType) {
              case -1:
              case -3:
                U = i.getNodeFromID(aj.id, aj.idType, Z);
                if (!S) {
                  l(U, ac);
                } else {
                  V.push(U);
                }
                break;
              case -2:
                ad.push({ ruleIndex: af, targetIndex: ab, exclude: S });
                break;
              default:
                break;
            }
          } else {
            ad.push({ ruleIndex: af, targetIndex: ab, exclude: S });
          }
        }
      }
    }
    u(ad, Z, ae, ak, V, Y);
    return Z;
  }
  function t(W) {
    var U,
      S,
      T,
      V = false;
    if (!W) {
      return V;
    }
    for (U = 0, S = R.length; U < S; U += 1) {
      T = R[U];
      if (M(T.targets, W)) {
        V = true;
        break;
      }
    }
    return V;
  }
  function w() {
    var V, U, S, Y, Z, X, T, W;
    h = v.getService("config");
    A = h.getServiceConfig("message") || {};
    R = A.privacy || [];
    c = A.privacyPatterns || [];
    for (V = 0, Z = R.length; V < Z; V += 1) {
      Y = R[V];
      T = Y.targets;
      for (U = 0, W = T.length; U < W; U += 1) {
        X = T[U];
        if (typeof X === "object") {
          if (typeof X.idType === "string") {
            X.idType = +X.idType;
          }
          if (typeof X.id === "object") {
            X.cRegex = new RegExp(X.id.regex, X.id.flags);
          }
        }
      }
    }
    for (S = c.length, V = S - 1; V >= 0; V -= 1) {
      Y = c[V];
      if (typeof Y.pattern === "object") {
        Y.cRegex = new RegExp(Y.pattern.regex, Y.pattern.flags);
      } else {
        c.splice(V, 1);
      }
    }
  }
  function z() {
    if (h.subscribe) {
      h.subscribe("configupdated", w);
    }
    w();
    H = true;
  }
  function J() {
    h.unsubscribe("configupdated", w);
    H = false;
  }
  function B(aa) {
    var X = aa.dcid,
      U = aa.shadows || [],
      W = aa.fullDOM,
      ab = 1,
      V,
      Y,
      Z,
      T,
      S;
    if (U.length === 0 || !W) {
      return;
    }
    for (Z in x) {
      if (x.hasOwnProperty(Z)) {
        x[Z].age += 1;
      }
    }
    for (V = 0, Y = U.length; V < Y; V += 1) {
      T = U[V];
      S = x[T.xpath];
      if (S && S.root === T.root) {
        S.hitCount += 1;
        S.age -= 1;
        T.cacheDCID = S.dcid;
        delete T.root;
      } else {
        x[T.xpath] = { root: T.root, dcid: X, hitCount: 0, age: 0 };
      }
    }
    for (Z in x) {
      if (x.hasOwnProperty(Z)) {
        S = x[Z];
        if (S.age > S.hitCount + ab) {
          delete x[Z];
        }
      }
    }
  }
  return {
    init: function () {
      if (!H) {
        z();
      } else {
      }
    },
    destroy: function () {
      J();
    },
    applyPrivacyToNode: p,
    applyPrivacyToMessage: o,
    applyPrivacyToTarget: F,
    applyPrivacyPatterns: G,
    isPrivacyMatched: t,
    createMessage: function (S) {
      if (typeof S.type === "undefined") {
        throw new TypeError("Invalid queueEvent given!");
      }
      if (S.type === 12) {
        B(S.domCapture);
      }
      return o(new e(S));
    },
    wrapMessages: function (V) {
      var U = DCX.getCoreConfig();
      var S = 0;
      if (window && window.sessionStorage && window.localStorage) {
        if (!window.sessionStorage.DCXTab) {
          window.sessionStorage.setItem("DCXTab", Date.now());
        }
        S = window.sessionStorage.DCXTab;
      }
      var T = {
          messageVersion: "10.0.0.0",
          serialNumber: (I += 1),
          sessions: [
            {
              id: v.getPageId(),
              startTime: r.getTime(),
              timezoneOffset: r.getTimezoneOffset(),
              messages: V,
              clientEnvironment: {
                webEnvironment: {
                  libVersion: "12.1.6",
                  internalVersion: U.version,
                  domain: N,
                  page: m,
                  referrer: document.referrer,
                  screen: {
                    devicePixelRatio: f,
                    deviceWidth: k,
                    deviceHeight: D,
                    deviceToolbarHeight: L,
                    width: K,
                    height: n,
                    orientation: P,
                  },
                  tabID: S,
                },
              },
            },
          ],
        },
        W = T.sessions[0].clientEnvironment.webEnvironment.screen;
      W.orientationMode = Q.getOrientationMode(W.orientation);
      return T;
    },
  };
});
DCX.addService("serializer", function (core) {
  function serializeToJSON(obj) {
    var str,
      key,
      len = 0;
    if (typeof obj !== "object" || obj === null) {
      switch (typeof obj) {
        case "function":
        case "undefined":
          return "null";
        case "string":
          return '"' + obj.replace(/\"/g, '\\"') + '"';
        default:
          return String(obj);
      }
    } else {
      if (Object.prototype.toString.call(obj) === "[object Array]") {
        str = "[";
        for (key = 0, len = obj.length; key < len; key += 1) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            str += serializeToJSON(obj[key]) + ",";
          }
        }
      } else {
        str = "{";
        for (key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            str = str.concat('"', key, '":', serializeToJSON(obj[key]), ",");
            len += 1;
          }
        }
      }
    }
    if (len > 0) {
      str = str.substring(0, str.length - 1);
    }
    str += String.fromCharCode(str.charCodeAt(0) + 2);
    return str;
  }
  var configService = core.getService("config"),
    serialize = {},
    parse = {},
    defaultSerializers = {
      json: (function () {
        if (typeof window.JSON !== "undefined") {
          return { serialize: window.JSON.stringify, parse: window.JSON.parse };
        }
        return {
          serialize: serializeToJSON,
          parse: function (data) {
            return eval("(" + data + ")");
          },
        };
      })(),
    },
    updateConfig = null,
    isInitialized = false;
  function addObjectIfExist(paths, rootObj, propertyName) {
    var i, len, obj;
    paths = paths || [];
    for (i = 0, len = paths.length; i < len; i += 1) {
      obj = paths[i];
      if (typeof obj === "string") {
        obj = core.utils.access(obj);
      }
      if (typeof obj === "function") {
        rootObj[propertyName] = obj;
        break;
      }
    }
  }
  function checkParserAndSerializer() {
    var isParserAndSerializerInvalid;
    if (
      typeof serialize.json !== "function" ||
      typeof parse.json !== "function"
    ) {
      isParserAndSerializerInvalid = true;
    } else {
      if (typeof parse.json('{"foo": "bar"}') === "undefined") {
        isParserAndSerializerInvalid = true;
      } else {
        isParserAndSerializerInvalid =
          parse.json('{"foo": "bar"}').foo !== "bar";
      }
      if (typeof parse.json("[1, 2]") === "undefined") {
        isParserAndSerializerInvalid = true;
      } else {
        isParserAndSerializerInvalid =
          isParserAndSerializerInvalid || parse.json("[1, 2]")[0] !== 1;
        isParserAndSerializerInvalid =
          isParserAndSerializerInvalid || parse.json("[1,2]")[1] !== 2;
      }
      isParserAndSerializerInvalid =
        isParserAndSerializerInvalid ||
        serialize.json({ foo: "bar" }) !== '{"foo":"bar"}';
      isParserAndSerializerInvalid =
        isParserAndSerializerInvalid || serialize.json([1, 2]) !== "[1,2]";
    }
    return isParserAndSerializerInvalid;
  }
  function initSerializerService(config) {
    var format;
    for (format in config) {
      if (config.hasOwnProperty(format)) {
        addObjectIfExist(config[format].stringifiers, serialize, format);
        addObjectIfExist(config[format].parsers, parse, format);
      }
    }
    if (
      !(config.json && config.json.hasOwnProperty("defaultToBuiltin")) ||
      config.json.defaultToBuiltin === true
    ) {
      serialize.json = serialize.json || defaultSerializers.json.serialize;
      parse.json = parse.json || defaultSerializers.json.parse;
    }
    if (
      typeof serialize.json !== "function" ||
      typeof parse.json !== "function"
    ) {
      core.fail(
        "JSON parser and/or serializer not provided in the UIC config. Can't continue."
      );
    }
    if (checkParserAndSerializer()) {
      core.fail("JSON stringification and parsing are not working as expected");
    }
    if (configService) {
      configService.subscribe("configupdated", updateConfig);
    }
    isInitialized = true;
  }
  function destroy() {
    serialize = {};
    parse = {};
    if (configService) {
      configService.unsubscribe("configupdated", updateConfig);
    }
    isInitialized = false;
  }
  updateConfig = function () {
    configService = core.getService("config");
    initSerializerService(configService.getServiceConfig("serializer"));
  };
  return {
    init: function () {
      var ssConfig;
      if (!isInitialized) {
        ssConfig = configService
          ? configService.getServiceConfig("serializer")
          : {};
        initSerializerService(ssConfig);
      } else {
      }
    },
    destroy: function () {
      destroy();
    },
    parse: function (data, type) {
      type = type || "json";
      return parse[type](data);
    },
    serialize: function (data, type) {
      var serializedData;
      type = type || "json";
      serializedData = serialize[type](data);
      return serializedData;
    },
  };
});
DCX.addModule("DCCookie", function (c) {
  var i = {},
    j = 0,
    g = "WCXSID",
    h = "TLTSID",
    a = "CoreID6",
    n,
    m,
    b = null,
    r,
    o = c.utils;
  function l() {
    var t = "123456789",
      u = o.getRandomString(1, t) + o.getRandomString(31, t + "0");
    return u;
  }
  function f() {
    var v = l(),
      t = !!i.secureDCXSID,
      u;
    o.setCookie(h, v, u, u, u, t);
    return o.getCookieValue(h);
  }
  function k() {
    if (b || !window.cmRetrieveUserID) {
      return;
    }
    try {
      window.cmRetrieveUserID(function (u) {
        b = u;
      });
    } catch (t) {
      b = null;
    }
  }
  function e(x) {
    var t, u, w, v;
    if (!localStorage || !x) {
      return;
    }
    w = localStorage.getItem(x);
    if (w) {
      u = w.split("|");
      t = parseInt(u[0], 10);
      if (Date.now() > t) {
        localStorage.removeItem(x);
      } else {
        v = u[1];
      }
    }
    return v;
  }
  function s(v, u) {
    var t;
    if (!localStorage || !v) {
      return;
    }
    u = u || l();
    t = Date.now() + j;
    localStorage.setItem(v, t + "|" + u);
    return e(v);
  }
  function d(t) {
    var w = [],
      v = o.getValue(t, "sessionIDUsesCookie", true),
      u = o.getValue(t, "sessionIDUsesStorage", false);
    if (t.dcAppKey) {
      r = t.dcAppKey;
      w.push({ name: "X-Discover-SaaS-AppKey", value: r });
    }
    if (t.visitorCookieName) {
      a = t.visitorCookieName;
    }
    if (t.wcxCookieName) {
      g = t.wcxCookieName;
    }
    n = o.getCookieValue(g);
    if (n) {
      w.push({ name: "X-WCXSID", value: n });
    }
    if (t.sessionizationCookieName) {
      h = t.sessionizationCookieName;
    }
    if (u) {
      j = o.getValue(t, "sessionIDStorageDCX", 600000);
      m = e(h);
    }
    if (!m && v) {
      m = o.getCookieValue(h);
    }
    if (!m) {
      if (n) {
        m = n;
      } else {
        if (u) {
          m = s(h);
        }
        if (!m && v) {
          m = f();
        }
      }
    }
    if (!m) {
      m = "Check7UIC7Cookie7Configuration77";
    }
    w.push({ name: "X-Discover-SaaS-TLTSID", value: m });
    if (w.length) {
      DCX.registerBridgeCallbacks([
        {
          enabled: true,
          cbType: "addRequestHeaders",
          cbFunction: function () {
            return w;
          },
        },
      ]);
    }
  }
  function p(y) {
    var v,
      u,
      t = false,
      x,
      w = i.appCookieWhitelist;
    if (!w || !w.length) {
      return t;
    }
    for (v = 0, u = w.length; v < u && !t; v += 1) {
      x = w[v];
      if (x.regex) {
        if (!x.cRegex) {
          x.cRegex = new RegExp(x.regex, x.flags);
        }
        x.cRegex.lastIndex = 0;
        t = x.cRegex.test(y);
      } else {
        t = x === y;
      }
    }
    return t;
  }
  function q() {
    var x,
      w,
      y,
      z = {},
      u,
      D = document.cookie,
      v = [],
      C = "",
      t = "";
    if (!D) {
      return;
    }
    v = D.split("; ");
    for (x = 0, y = v.length; x < y; x += 1) {
      u = v[x];
      w = u.indexOf("=");
      if (w >= 0) {
        try {
          C = decodeURIComponent(u.substr(0, w));
        } catch (B) {
          C = u.substr(0, w);
        }
      }
      t = u.substr(w + 1);
      if (p(C)) {
        try {
          z[C] = decodeURIComponent(t);
        } catch (A) {
          z[C] = t;
        }
      }
    }
    if (b && !z[a]) {
      z[a] = b;
    }
    c.post({ type: 14, cookies: z });
  }
  return {
    init: function () {
      i = c.getConfig() || {};
      d(i);
      k();
    },
    destroy: function () {
      if (i.sessionIDUsesStorage) {
        s(h, m);
      }
    },
    onevent: function (t) {
      switch (t.type) {
        case "screenview_load":
          if (o.getValue(i, "appCookieWhitelist.length", 0)) {
            k();
            q();
          }
          break;
        default:
          break;
      }
    },
  };
});
if (DCX && typeof DCX.addModule === "function") {
  DCX.addModule("performance", function (a) {
    var g = {
        loadReceived: false,
        unloadReceived: false,
        perfEventSent: false,
      },
      e = 0,
      c,
      h = a.utils;
    function f(l, k) {
      if (typeof l !== "string") {
        return false;
      }
      if (!k || typeof k !== "object") {
        return false;
      }
      return k[l] === true;
    }
    function b(m, k) {
      var o = 0,
        l = {},
        p = "",
        n = 0;
      if (!m || typeof m !== "object" || !m.navigationStart) {
        return {};
      }
      o = m.navigationStart;
      for (p in m) {
        if (
          Object.prototype.hasOwnProperty.call(m, p) ||
          typeof m[p] === "number"
        ) {
          if (!f(p, k)) {
            n = m[p];
            if (typeof n === "number" && n && p !== "navigationStart") {
              l[p] = n - o;
            } else {
              l[p] = n;
            }
          }
        }
      }
      return l;
    }
    function d(m) {
      var n = 0,
        l,
        k;
      if (m) {
        l =
          m.responseEnd > 0 && m.responseEnd < m.domLoading
            ? m.responseEnd
            : m.domLoading;
        k = m.loadEventStart;
        if (h.isNumeric(l) && h.isNumeric(k) && k > l) {
          n = k - l;
        }
      }
      return n;
    }
    function i(l) {
      var k = a.getStartTime();
      if (l.timestamp > k && !e) {
        e = l.timestamp - k;
      }
    }
    function j(n) {
      var l = "UNKNOWN",
        o = { type: 7, performance: {} },
        k,
        p,
        m;
      if (!n || g.perfEventSent) {
        return;
      }
      p = n.performance || {};
      m = p.timing;
      k = p.navigation;
      if (m) {
        if (!m.loadEventStart) {
          return;
        }
        o.performance.timing = b(m, c.filter);
        o.performance.timing.renderTime = d(m);
      } else {
        if (c.calculateRenderTime) {
          o.performance.timing = { renderTime: e, calculated: true };
        } else {
          return;
        }
      }
      if (
        c.renderTimeThreshold &&
        o.performance.timing.renderTime > c.renderTimeThreshold
      ) {
        o.performance.timing.invalidRenderTime =
          o.performance.timing.renderTime;
        delete o.performance.timing.renderTime;
      }
      if (k) {
        switch (k.type) {
          case 0:
            l = "NAVIGATE";
            break;
          case 1:
            l = "RELOAD";
            break;
          case 2:
            l = "BACKFORWARD";
            break;
          default:
            l = "UNKNOWN";
            break;
        }
        o.performance.navigation = { type: l, redirectCount: k.redirectCount };
      }
      a.post(o);
      g.perfEventSent = true;
    }
    return {
      init: function () {
        c = a.getConfig();
      },
      destroy: function () {
        c = null;
      },
      onevent: function (k) {
        if (typeof k !== "object" || !k.type) {
          return;
        }
        switch (k.type) {
          case "load":
            g.loadReceived = true;
            i(k);
            setTimeout(function () {
              if (a.isInitialized()) {
                j(window);
              }
            }, h.getValue(c, "delay", 2000));
            break;
          case "screenview_load":
            if (!g.perfEventSent) {
              j(window);
            }
            break;
          case "unload":
            g.unloadReceived = true;
            if (!g.perfEventSent) {
              j(window);
            }
            break;
          default:
            break;
        }
      },
      onmessage: function (k) {},
    };
  });
} else {
}
DCX.addModule("replay", function (ai) {
  var aj = ai.utils,
    H = 0,
    ac = { scale: 0, timestamp: 0 },
    W = {},
    E = null,
    e = [],
    X = 0,
    C = true,
    Y = null,
    z = null,
    S = false,
    l = 0,
    Q = "",
    x = "",
    K = new Date().getTime(),
    k = 0,
    M = null,
    af = null,
    L = null,
    A = null,
    ad = null,
    R = null,
    U = 0,
    u = 0,
    t = { inFocus: false },
    I = null,
    Z = ai.getConfig() || {},
    w = aj.getValue(Z, "viewPortWidthHeightLimit", 10000),
    ab = 1,
    B = 1,
    N,
    aa = { cellMaxX: 10, cellMaxY: 10, cellMinWidth: 20, cellMinHeight: 20 };
  function r() {
    var ak;
    for (ak in W) {
      if (W.hasOwnProperty(ak)) {
        W[ak].visitedCount = 0;
      }
    }
  }
  function q(am) {
    var ak = false,
      al = "|button|image|submit|reset|",
      an = null;
    if (typeof am !== "object" || !am.type) {
      return ak;
    }
    switch (am.type.toLowerCase()) {
      case "input":
        an = "|" + (am.subType || "") + "|";
        if (al.indexOf(an.toLowerCase()) === -1) {
          ak = false;
        } else {
          ak = true;
        }
        break;
      case "select":
      case "textarea":
        ak = false;
        break;
      default:
        ak = true;
        break;
    }
    return ak;
  }
  function h(al) {
    var ak = [];
    al = al.parentNode;
    while (al) {
      ak.push(al);
      al = al.parentNode;
    }
    return ak;
  }
  function v(ak) {
    return aj.some(ak, function (am) {
      var al = aj.getTagName(am);
      if (al === "a" || al === "button") {
        return am;
      }
      return null;
    });
  }
  function ah(ak) {
    var am = ak.type,
      al = ak.target;
    if (typeof am === "string") {
      am = am.toLowerCase();
    } else {
      am = "unknown";
    }
    if (am === "blur") {
      am = "focusout";
    }
    if (am === "change") {
      if (al.type === "INPUT") {
        switch (al.subType) {
          case "text":
          case "date":
          case "time":
            am = al.subType + "Change";
            break;
          default:
            am = "valueChange";
            break;
        }
      } else {
        if (al.type === "TEXTAREA") {
          am = "textChange";
        } else {
          am = "valueChange";
        }
      }
    }
    return am;
  }
  function y(ak, am, al) {
    var an = null;
    if (!ak) {
      return an;
    }
    am = am || {};
    am.eventOn = C;
    C = false;
    if (al) {
      an = "dcid-" + aj.getSerialNumber() + "." + new Date().getTime() + "s";
      window.setTimeout(function () {
        am.dcid = an;
        ai.performDOMCapture(ak, am);
      }, al);
    } else {
      delete am.dcid;
      an = ai.performDOMCapture(ak, am);
    }
    return an;
  }
  function G(al, ay, am) {
    var at,
      aq,
      aA = false,
      an = {},
      az = false,
      ap,
      av,
      ax = null,
      ar = 0,
      aw,
      au,
      ak,
      ao;
    if (!al || (!ay && !am)) {
      return ax;
    }
    if (!ay && !(al === "load" || al === "unload")) {
      return ax;
    }
    Z = ai.getConfig() || {};
    az = aj.getValue(Z, "domCapture.enabled", false);
    if (!az || aj.isLegacyIE) {
      return ax;
    }
    av = aj.getValue(Z, "domCapture.triggers") || [];
    for (at = 0, aw = av.length; !aA && at < aw; at += 1) {
      ap = av[at];
      if (ap.event === al) {
        if (al === "load" || al === "unload") {
          if (ap.screenviews) {
            ak = ap.screenviews;
            for (aq = 0, ao = ak.length; !aA && aq < ao; aq += 1) {
              au = ak[aq];
              switch (typeof au) {
                case "object":
                  if (!au.cRegex) {
                    au.cRegex = new RegExp(au.regex, au.flags);
                  }
                  au.cRegex.lastIndex = 0;
                  aA = au.cRegex.test(am);
                  break;
                case "string":
                  aA = au === am;
                  break;
                default:
                  break;
              }
            }
          } else {
            aA = true;
          }
        } else {
          if (ap.targets) {
            aA = -1 !== aj.matchTarget(ap.targets, ay);
          } else {
            aA = true;
          }
        }
      }
    }
    if (aA) {
      ar = ap.delay || (ap.event === "load" ? 7 : 0);
      an.forceFullDOM = !!ap.fullDOMCapture;
      ax = y(window.document, an, ar);
    }
    return ax;
  }
  function V(av) {
    var am,
      an,
      ao = aj.getValue(av, "webEvent.target", {}),
      ak = ao.type,
      aq = ao.subType || "",
      al = aj.getDcType(ao),
      ar = h(aj.getValue(ao, "element")),
      au = null,
      ap = aj.getValue(ao, "position.relXY"),
      at = aj.getValue(av, "webEvent.subType", null);
    am = {
      timestamp: aj.getValue(av, "webEvent.timestamp", 0),
      type: 4,
      target: {
        id: ao.id || "",
        idType: ao.idType,
        name: ao.name,
        dcType: al,
        type: ak,
        position: {
          width: aj.getValue(ao, "size.width"),
          height: aj.getValue(ao, "size.height"),
        },
        currState: av.currState || null,
      },
      event: {
        dcEvent: ah(aj.getValue(av, "webEvent")),
        type: aj.getValue(av, "webEvent.type", "UNKNOWN"),
      },
    };
    if (aq) {
      am.target.subType = aq;
    }
    if (ap) {
      am.target.position.relXY = ap;
    }
    if (typeof av.dwell === "number" && av.dwell > 0) {
      am.target.dwell = av.dwell;
    }
    if (typeof av.visitedCount === "number") {
      am.target.visitedCount = av.visitedCount;
    }
    if (typeof av.prevState !== "undefined") {
      am.prevState = av.prevState;
    }
    if (at) {
      am.event.subType = at;
    }
    au = v(ar);
    am.target.isParentLink = !!au;
    if (au) {
      if (au.href) {
        am.target.currState = am.target.currState || {};
        am.target.currState.href = am.target.currState.href || au.href;
      }
      if (au.value) {
        am.target.currState = am.target.currState || {};
        am.target.currState.value = am.target.currState.value || au.value;
      }
      if (au.innerText || au.textContent) {
        am.target.currState = am.target.currState || {};
        am.target.currState.innerText = aj.trim(
          am.target.currState.innerText || au.innerText || au.textContent
        );
      }
    }
    if (aj.isUndefOrNull(am.target.currState)) {
      delete am.target.currState;
    }
    if (aj.isUndefOrNull(am.target.name)) {
      delete am.target.name;
    }
    return am;
  }
  function D(ak) {
    ai.post(ak);
  }
  function F(ao) {
    var am = 0,
      ak,
      ap = ao.length,
      ar,
      aq,
      an,
      at = { mouseout: true, mouseover: true },
      al = [];
    for (am = 0; am < ap; am += 1) {
      ar = ao[am];
      if (!ar) {
        continue;
      }
      if (at[ar.event.type]) {
        al.push(ar);
      } else {
        for (ak = am + 1; ak < ap && ao[ak]; ak += 1) {
          if (!at[ao[ak].event.type]) {
            break;
          }
        }
        if (ak < ap) {
          aq = ao[ak];
          if (
            aq &&
            ar.target.id === aq.target.id &&
            ar.event.type !== aq.event.type
          ) {
            if (ar.event.type === "click") {
              an = ar;
              ar = aq;
              aq = an;
            }
            if (aq.event.type === "click") {
              ar.target.position = aq.target.position;
              am += 1;
            } else {
              if (aq.event.type === "blur") {
                ar.target.dwell = aq.target.dwell;
                ar.target.visitedCount = aq.target.visitedCount;
                ar.focusInOffset = aq.focusInOffset;
                ar.target.position = aq.target.position;
                am += 1;
              }
            }
            ao[ak] = null;
            ao[am] = ar;
          }
        }
        al.push(ao[am]);
      }
    }
    for (ar = al.shift(); ar; ar = al.shift()) {
      ai.post(ar);
    }
    ao.splice(0, ao.length);
  }
  if (typeof window.onerror !== "function") {
    window.onerror = function (an, am, ak) {
      var al = null;
      if (typeof an !== "string") {
        return;
      }
      ak = ak || -1;
      al = { type: 6, exception: { description: an, url: am, line: ak } };
      l += 1;
      ai.post(al);
    };
    S = true;
  }
  function T(ak, al) {
    e.push(
      V({ webEvent: ak, id: al, currState: aj.getValue(ak, "target.state") })
    );
  }
  function d(ar, al) {
    var am = false,
      ao = false,
      aq,
      ak,
      ap,
      an = 0;
    if (!ar) {
      return;
    }
    if (e.length === 0) {
      return;
    }
    al = al || (W[ar] ? W[ar].webEvent : {});
    if (al.type === "blur" || al.type === "change") {
      ap = aj.getValue(al, "target.state", null);
    } else {
      if (al.target) {
        ap = aj.getTargetState(al.target.element) || {};
      } else {
        ap = {};
      }
    }
    ak = e[e.length - 1];
    if (W[ar]) {
      ak.focusInOffset = W[ar].focusInOffset;
      ak.target.visitedCount = W[ar].visitedCount;
      if (W[ar].focus) {
        W[ar].dwell = Number(new Date()) - W[ar].focus;
        ak.target.dwell = W[ar].dwell;
      }
      if (!W[ar].processedChange && W[ar].prevState) {
        if (!aj.isEqual(W[ar].prevState, ap)) {
          ao = true;
          al.type = "change";
          ak.event.type = al.type;
          ak.event.dcEvent = ah(al);
          ak.target.prevState = W[ar].prevState;
          ak.target.currState = ap;
        }
      }
    } else {
      W[ar] = {};
    }
    if (ak.event.type === "click") {
      if (!q(ak.target)) {
        ak.target.currState = ap;
        am = true;
      }
    } else {
      if (ak.event.type === "focus") {
        am = true;
      }
    }
    if (am) {
      ak.event.type = "blur";
      ak.event.dcEvent = "focusout";
    }
    if (!ak.dcid) {
      aq = G(ak.event.type, al.target);
      if (aq) {
        ak.dcid = aq;
      }
    }
    t.inFocus = false;
    F(e);
  }
  function n(al, ak) {
    if (t.inFocus && t.target.id === al) {
      return;
    }
    if (t.inFocus) {
      d(t.target.id, t);
    }
    t = ak;
    t.inFocus = true;
    if (!W[al]) {
      W[al] = {};
    }
    W[al].focus = t.dwellStart = Number(new Date());
    W[al].focusInOffset = L ? t.dwellStart - Number(L) : -1;
    if (ak.type === "focus" || ak.type === "click") {
      W[al].prevState = aj.getValue(ak, "target.state");
    }
    W[al].visitedCount = W[al].visitedCount + 1 || 1;
    W[al].webEvent = ak;
    W[al].processedChange = false;
    W[al].processedClick = false;
    T(ak, al);
  }
  function m(ap, am) {
    var al = false,
      an,
      ao = e.length,
      ak = ao ? e[ao - 1] : null;
    if (!ak) {
      return al;
    }
    an = ak.target.id;
    if (an !== ap && ak.target.dcxype !== "selectList") {
      if (am.type === "focus" || am.type === "click" || am.type === "change") {
        d(an);
        al = true;
      }
    }
    return al;
  }
  function c(am, al) {
    var ak;
    n(am, al);
    ak = e[e.length - 1];
    ak.event.type = "change";
    ak.event.dcEvent = ah(al);
    ak.target.currState = al.target.state;
    if (W[am].prevState) {
      ak.target.prevState = W[am].prevState;
    }
    W[am].webEvent = al;
    W[am].processedChange = true;
  }
  function p(ap) {
    var ao,
      at,
      al,
      ak,
      an = aj.getValue(ap, "target.element", {}),
      au = aj.getValue(ap, "target.size.width", an.offsetWidth),
      am = aj.getValue(ap, "target.size.height", an.offsetHeight),
      ar = aj.getValue(ap, "target.position.x", 0),
      aq = aj.getValue(ap, "target.position.y", 0);
    ao = au ? Math.max(au / aa.cellMaxX, aa.cellMinWidth) : aa.cellMinWidth;
    at = am ? Math.max(am / aa.cellMaxY, aa.cellMinHeight) : aa.cellMinHeight;
    al = Math.floor(ar / ao);
    ak = Math.floor(aq / at);
    if (!isFinite(al)) {
      al = 0;
    }
    if (!isFinite(ak)) {
      ak = 0;
    }
    return al + "," + ak;
  }
  function b(an, am) {
    var al, ak;
    if (am.target.type === "select" && I && I.target.id === an) {
      I = null;
      return;
    }
    n(an, am);
    al = p(am);
    am.target.position.relXY = al;
    ak = e[e.length - 1];
    ak.event.type = "click";
    ak.event.dcEvent = ah(am);
    ak.target.position.relXY = al;
    W[an].webEvent = am;
    W[an].processedClick = true;
    if (q(am.target)) {
      d(an, am);
    }
    I = am;
  }
  function a(al) {
    var ak = al.orientation,
      am = {
        type: 4,
        event: { type: "orientationchange" },
        target: {
          prevState: {
            orientation: H,
            orientationMode: aj.getOrientationMode(H),
          },
          currState: {
            orientation: ak,
            orientationMode: aj.getOrientationMode(ak),
          },
        },
      };
    D(am);
    H = ak;
  }
  function ag(al) {
    var ak = false;
    if (!al) {
      return ak;
    }
    ak =
      ac.scale === al.scale &&
      Math.abs(new Date().getTime() - ac.timestamp) < 500;
    return ak;
  }
  function j(ak) {
    ac.scale = ak.scale;
    ac.rotation = ak.rotation;
    ac.timestamp = new Date().getTime();
  }
  function J() {
    var ak, al;
    ak = ab - B;
    if (isNaN(ak)) {
      al = "INVALID";
    } else {
      if (ak < 0) {
        al = "CLOSE";
      } else {
        if (ak > 0) {
          al = "OPEN";
        } else {
          al = "NONE";
        }
      }
    }
    return al;
  }
  function g(ao) {
    var au = document.documentElement,
      aq = document.body,
      av = window.screen,
      al = av.width,
      am = av.height,
      ap = aj.getValue(ao, "orientation", 0),
      ar = !aj.isiOS ? al : Math.abs(ap) === 90 ? am : al,
      an = {
        type: 1,
        clientState: {
          pageWidth: document.width || (!au ? 0 : au.offsetWidth),
          pageHeight: Math.max(
            !document.height ? 0 : document.height,
            !au ? 0 : au.offsetHeight,
            !au ? 0 : au.scrollHeight
          ),
          viewPortWidth: window.innerWidth || au.clientWidth,
          viewPortHeight: window.innerHeight || au.clientHeight,
          viewPortX: Math.round(
            window.pageXOffset ||
              (!au ? (!aq ? 0 : aq.scrollLeft) : au.scrollLeft || 0)
          ),
          viewPortY: Math.round(
            window.pageYOffset ||
              (!au ? (!aq ? 0 : aq.scrollTop) : au.scrollTop || 0)
          ),
          deviceOrientation: ap,
          event: aj.getValue(ao, "type"),
        },
      },
      at = an.clientState,
      ak;
    z = z || an;
    if (
      at.event === "unload" &&
      at.viewPortHeight === at.pageHeight &&
      at.viewPortWidth === at.pageWidth
    ) {
      if (z.clientState.viewPortHeight < at.viewPortHeight) {
        at.viewPortHeight = z.clientState.viewPortHeight;
        at.viewPortWidth = z.clientState.viewPortWidth;
      }
    }
    if (at.viewPortY + at.viewPortHeight > at.pageHeight) {
      at.viewPortY = at.pageHeight - at.viewPortHeight;
    }
    if (at.viewPortY < 0) {
      at.viewPortY = 0;
    }
    ak = !at.viewPortWidth ? 1 : ar / at.viewPortWidth;
    at.deviceScale = ak.toFixed(3);
    at.viewTime = 0;
    if (A && ad) {
      at.viewTime = ad.getTime() - A.getTime();
    }
    if (ao.type === "scroll") {
      at.viewPortXStart = z.clientState.viewPortX;
      at.viewPortYStart = z.clientState.viewPortY;
    }
    return an;
  }
  function o() {
    var ak;
    if (Y) {
      ak = Y.clientState;
      if (
        ak.viewPortHeight > 0 &&
        ak.viewPortHeight < w &&
        ak.viewPortWidth > 0 &&
        ak.viewPortWidth < w
      ) {
        D(Y);
      }
      z = Y;
      Y = null;
      A = R || A;
      ad = null;
    }
    o.timeoutId = 0;
  }
  function O(ak) {
    var al = null;
    if (aj.isOperaMini) {
      return;
    }
    Y = g(ak);
    if (ak.type === "scroll" || ak.type === "resize") {
      if (o.timeoutId) {
        window.clearTimeout(o.timeoutId);
      }
      o.timeoutId = window.setTimeout(o, aj.getValue(Z, "scrollTimeout", 2000));
    } else {
      if (ak.type === "touchstart" || ak.type === "load") {
        if (Y) {
          B = parseFloat(Y.clientState.deviceScale);
        }
      } else {
        if (ak.type === "touchend") {
          if (Y) {
            ab = parseFloat(Y.clientState.deviceScale);
            o();
          }
        }
      }
    }
    if (ak.type === "load" || ak.type === "unload") {
      if (ak.type === "unload" && K) {
        al = aj.clone(Y);
        al.clientState.event = "attention";
        al.clientState.viewTime = new Date().getTime() - K;
      }
      o();
      if (al) {
        Y = al;
      }
    }
    return Y;
  }
  function ae(al) {
    var ak = aj.getValue(al, "nativeEvent.touches.length", 0);
    if (ak === 2) {
      O(al);
    }
  }
  function i(an) {
    var am,
      al = {},
      ao =
        aj.getValue(an, "nativeEvent.rotation", 0) ||
        aj.getValue(an, "nativeEvent.touches[0].webkitRotationAngle", 0),
      ap = aj.getValue(an, "nativeEvent.scale", 1),
      ak = null,
      aq = {
        type: 4,
        event: { type: "touchend" },
        target: {
          id: aj.getValue(an, "target.id"),
          idType: aj.getValue(an, "target.idType"),
        },
      };
    am =
      aj.getValue(an, "nativeEvent.changedTouches.length", 0) +
      aj.getValue(an, "nativeEvent.touches.length", 0);
    if (am !== 2) {
      return;
    }
    O(an);
    ak = { rotation: ao ? ao.toFixed(2) : 0, scale: ab ? ab.toFixed(2) : 1 };
    ak.pinch = J();
    al.scale = B ? B.toFixed(2) : 1;
    aq.target.prevState = al;
    aq.target.currState = ak;
    D(aq);
  }
  function f(av, an) {
    var ar = ["type", "name", "target.id"],
      am = null,
      ao,
      aq,
      ap = true,
      at = 10,
      al = 0,
      au = 0,
      ak = 0;
    if (!av || !an || typeof av !== "object" || typeof an !== "object") {
      return false;
    }
    for (ao = 0, aq = ar.length; ap && ao < aq; ao += 1) {
      am = ar[ao];
      if (aj.getValue(av, am) !== aj.getValue(an, am)) {
        ap = false;
        break;
      }
    }
    if (ap) {
      au = aj.getValue(av, "timestamp");
      ak = aj.getValue(an, "timestamp");
      if (!(isNaN(au) && isNaN(ak))) {
        al = Math.abs(
          aj.getValue(av, "timestamp") - aj.getValue(an, "timestamp")
        );
        if (isNaN(al) || al > at) {
          ap = false;
        }
      }
    }
    return ap;
  }
  function s(ak) {
    var am = {
        type: 4,
        event: { type: ak.type },
        target: {
          id: aj.getValue(ak, "target.id"),
          idType: aj.getValue(ak, "target.idType"),
          currState: aj.getValue(ak, "target.state"),
        },
      },
      al;
    al = G(ak.type, ak.target);
    if (al) {
      am.dcid = al;
    }
    D(am);
  }
  function P(al) {
    var ak = aj.getValue(Z, "geolocation"),
      am;
    if (!ak || !ak.enabled) {
      return;
    }
    am = ak.triggers || [];
    if (!am.length) {
      return;
    }
    if (am[0].event === al) {
      DCX.logGeolocation();
    }
  }
  return {
    init: function () {
      e = [];
    },
    destroy: function () {
      d(E);
      e = [];
      if (o.timeoutId) {
        window.clearTimeout(o.timeoutId);
        o.timeoutId = 0;
      }
      if (S) {
        window.onerror = null;
        S = false;
      }
    },
    onevent: function (al) {
      var ao = null,
        am = null,
        ak,
        an;
      if (typeof al !== "object" || !al.type) {
        return;
      }
      if (f(al, M)) {
        M = al;
        return;
      }
      M = al;
      ao = aj.getValue(al, "target.id");
      if (!W[ao]) {
        W[ao] = {};
      }
      m(ao, al);
      switch (al.type) {
        case "hashchange":
          break;
        case "focus":
          am = n(ao, al);
          break;
        case "blur":
          am = d(ao, al);
          break;
        case "click":
          am = b(ao, al);
          break;
        case "change":
          am = c(ao, al);
          break;
        case "orientationchange":
          am = a(al);
          break;
        case "touchstart":
          ae(al);
          break;
        case "touchend":
          am = i(al);
          break;
        case "loadWithFrames":
          DCX.logScreenviewLoad("rootWithFrames");
          break;
        case "load":
          H = al.orientation;
          A = new Date();
          if (typeof window.orientation !== "number" || aj.isAndroid) {
            an = window.screen.width > window.screen.height ? 90 : 0;
            ak = window.orientation;
            if (Math.abs(ak) !== an && !(ak === 180 && an === 0)) {
              aj.isLandscapeZeroDegrees = true;
              if (Math.abs(ak) === 180 || Math.abs(ak) === 0) {
                H = 90;
              } else {
                if (Math.abs(ak) === 90) {
                  H = 0;
                }
              }
            }
          }
          setTimeout(function () {
            if (ai.isInitialized()) {
              O(al);
            }
          }, 100);
          P(al.type);
          DCX.logScreenviewLoad("root");
          break;
        case "screenview_load":
          L = new Date();
          r();
          am = G("load", null, al.name);
          break;
        case "screenview_unload":
          am = G("unload", null, al.name);
          break;
        case "resize":
        case "scroll":
          if (!ad) {
            ad = new Date();
          }
          R = new Date();
          O(al);
          break;
        case "unload":
          if (e != null) {
            F(e);
          }
          ad = new Date();
          O(al);
          DCX.logScreenviewUnload("root");
          break;
        default:
          s(al);
          break;
      }
      E = ao;
      return am;
    },
    onmessage: function () {},
  };
});
if (DCX && typeof DCX.addModule === "function") {
  DCX.addModule("usability", function (e) {
    var A = e.utils,
      p = {},
      C = {
        updateInterval: 250,
        hoverThreshold: 1000,
        hoverThresholdMax: 2 * 60 * 1000,
        gridCellMaxX: 10,
        gridCellMaxY: 10,
        gridCellMinWidth: 20,
        gridCellMinHeight: 20,
      },
      d = 50;
    function y(I) {
      var H = e.getConfig() || {},
        J = H[I];
      return typeof J === "number" ? J : C[I];
    }
    function G(N, I) {
      var M = A.getValue(N, "webEvent.target", {}),
        J = A.getValue(M, "element.tagName") || "",
        K = J.toLowerCase() === "input" ? A.getValue(M, "element.type") : "",
        H = A.getDcType(M),
        L = {
          type: 9,
          event: {
            hoverDuration: N.hoverDuration,
            hoverToClick: A.getValue(I, "hoverToClick"),
          },
          target: {
            id: M.id || "",
            idType: M.idType || "",
            name: M.name || "",
            dcType: H,
            type: J,
            subType: K,
            position: {
              width: A.getValue(M, "element.offsetWidth", 0),
              height: A.getValue(M, "element.offsetHeight", 0),
              relXY: N.relXY,
            },
          },
        };
      if (typeof L.target.id === undefined || L.target.id === "") {
        return;
      }
      e.post(L);
    }
    function i(H) {
      if (H && !H.nodeType && H.element) {
        H = H.element;
      }
      return H;
    }
    function s(H) {
      H = i(H);
      return !H || H === document.body || H === document.html || H === document;
    }
    function j(H) {
      H = i(H);
      if (!H) {
        return null;
      }
      return H.parentNode;
    }
    function n(H) {
      H = i(H);
      if (!H) {
        return null;
      }
      return H.offsetParent || H.parentElement || j(H);
    }
    function w(I, J) {
      var H = 0;
      if (!J || J === I) {
        return false;
      }
      J = j(J);
      while (!s(J) && H++ < d) {
        if (J === I) {
          return true;
        }
        J = j(J);
      }
      if (H >= d) {
        A.clog("Usability isChildOf() hit iterations limit");
      }
      return false;
    }
    function E(H) {
      if (H.nativeEvent) {
        H = H.nativeEvent;
      }
      return H;
    }
    function z(H) {
      return E(H).target;
    }
    function h(H) {
      H = i(H);
      if (!H) {
        return -1;
      }
      return H.nodeType || -1;
    }
    function D(H) {
      H = i(H);
      if (!H) {
        return "";
      }
      return H.tagName ? H.tagName.toUpperCase() : "";
    }
    function t(H) {
      if (!H) {
        return;
      }
      if (H.nativeEvent) {
        H = H.nativeEvent;
      }
      if (H.stopPropagation) {
        H.stopPropagation();
      } else {
        if (H.cancelBubble) {
          H.cancelBubble();
        }
      }
    }
    function m(I) {
      var H = D(I);
      return h(I) !== 1 || H === "TR" || H === "TBODY" || H === "THEAD";
    }
    function g(H) {
      if (!H) {
        return "";
      }
      if (H.xPath) {
        return H.xPath;
      }
      H = i(H);
      return e.getXPathFromNode(H);
    }
    function B(I, H) {
      var J = p[I];
      if (J && J[H]) {
        return J[H]();
      }
    }
    function v(I, K, J, H) {
      this.xPath = I !== null ? g(I) : "";
      this.domNode = I;
      this.hoverDuration = 0;
      this.hoverUpdateTime = 0;
      this.gridX = Math.max(K, 0);
      this.gridY = Math.max(J, 0);
      this.parentKey = "";
      this.updateTimer = -1;
      this.disposed = false;
      this.childKeys = {};
      this.webEvent = H;
      this.getKey = function () {
        return this.xPath + ":" + this.gridX + "," + this.gridY;
      };
      this.update = function () {
        var M = new Date().getTime(),
          L = this.getKey();
        if (this.hoverUpdateTime !== 0) {
          this.hoverDuration += M - this.hoverUpdateTime;
        }
        this.hoverUpdateTime = M;
        clearTimeout(this.updateTimer);
        this.updateTimer = setTimeout(function () {
          B(L, "update");
        }, y("updateInterval"));
      };
      this.dispose = function (L) {
        clearTimeout(this.updateTimer);
        delete p[this.getKey()];
        this.disposed = true;
        if (L) {
          var M = this.clone();
          p[M.getKey()] = M;
          M.update();
        }
      };
      this.process = function (P) {
        clearTimeout(this.updateTimer);
        if (this.disposed) {
          return false;
        }
        var N = false,
          O = this,
          M = null,
          L = 0;
        if (this.hoverDuration >= y("hoverThreshold")) {
          this.hoverDuration = Math.min(
            this.hoverDuration,
            y("hoverThresholdMax")
          );
          N = true;
          G(this, { hoverToClick: !!P });
          while (typeof O !== "undefined" && L++ < d) {
            O.dispose(P);
            O = p[O.parentKey];
          }
          if (L >= d) {
            A.clog("Usability process() hit iterations limit");
          }
        } else {
          this.dispose(P);
        }
        return N;
      };
      this.clone = function () {
        var L = new v(this.domNode, this.gridX, this.gridY);
        L.parentKey = this.parentKey;
        return L;
      };
    }
    function F(J, H, K, I) {
      return new v(J, H, K, I);
    }
    function r(J) {
      if (J && J.position) {
        return { x: J.position.x, y: J.position.y };
      }
      J = i(J);
      var H = J && J.getBoundingClientRect ? J.getBoundingClientRect() : null,
        N = H ? H.left : J ? J.offsetLeft : 0,
        M = H ? H.top : J ? J.offsetHeight : 0,
        P = N,
        O = M,
        K = 0,
        I = 0,
        L = n(J),
        Q = 0;
      while (L && Q++ < d) {
        if (s(L)) {
          break;
        }
        K = L.offsetLeft - (L.scrollLeft || 0);
        I = L.offsetTop - (L.scrollTop || 0);
        if (K !== P || I !== O) {
          N += K;
          M += I;
          P = K;
          O = I;
        }
        L = n(L);
      }
      if (Q >= d) {
        A.clog("Usability calculateNodeOffset() hit iterations limit");
      }
      if (isNaN(N)) {
        N = 0;
      }
      if (isNaN(M)) {
        M = 0;
      }
      return { x: N, y: M };
    }
    function a(L, J, I) {
      L = i(L);
      var K = r(L),
        H = J - K.x,
        M = I - K.y;
      if (!isFinite(H)) {
        H = 0;
      }
      if (!isFinite(M)) {
        M = 0;
      }
      return { x: H, y: M };
    }
    function x(H, I) {
      H = Math.floor(Math.min(Math.max(H, 0), 1) * 100) / 100;
      I = Math.floor(Math.min(Math.max(I, 0), 1) * 100) / 100;
      return H + "," + I;
    }
    function f(L, O, N) {
      L = i(L);
      var J = L.getBoundingClientRect ? L.getBoundingClientRect() : null,
        T = J ? J.width : L.offsetWidth,
        K = J ? J.height : L.offsetHeight,
        M =
          T && T > 0
            ? Math.max(T / y("gridCellMaxX"), y("gridCellMinWidth"))
            : y("gridCellMinWidth"),
        Q =
          K && K > 0
            ? Math.max(K / y("gridCellMaxY"), y("gridCellMinHeight"))
            : y("gridCellMinHeight"),
        I = Math.floor(O / M),
        H = Math.floor(N / Q),
        S = T > 0 ? O / T : 0,
        P = K > 0 ? N / K : 0,
        R = "";
      if (!isFinite(I)) {
        I = 0;
      }
      if (!isFinite(H)) {
        H = 0;
      }
      R = x(S, P);
      return { x: I, y: H, relXY: R };
    }
    function c(M) {
      var N = M,
        O = M.getKey(),
        I = {},
        J = null,
        L = null,
        K = false,
        H = 0;
      I[O] = true;
      while (typeof N !== "undefined" && H++ < d) {
        I[N.parentKey] = true;
        if (N.parentKey === "" || N.parentKey === N.getKey()) {
          break;
        }
        if (H >= d) {
          A.clog("Usability cleanupHoverEvents() hit iterations limit");
        }
        N = p[N.parentKey];
      }
      for (J in p) {
        if (p.hasOwnProperty(J) && !I[J]) {
          N = p[J];
          if (N) {
            if (!K) {
              K = N.process();
            } else {
              N.dispose();
            }
          }
        }
      }
    }
    function u(I, K) {
      var L = null,
        H = null,
        J = false;
      for (H in p) {
        if (p.hasOwnProperty(H)) {
          L = p[H];
          if (L && L.domNode === I && L.getKey() !== K) {
            if (!J) {
              J = L.process();
            } else {
              L.dispose();
            }
          }
        }
      }
    }
    function b(L, J, K) {
      if (!J) {
        J = L.target;
      }
      if (s(J)) {
        return null;
      }
      if (A.isiOS || A.isAndroid) {
        return null;
      }
      var H, Q, M, P, N, O, I;
      if (!m(J)) {
        H = a(J, L.position.x, L.position.y);
        Q = f(J, H.x, H.y);
        M = new v(J, Q.x, Q.y, L);
        M.relXY = Q.relXY;
        P = M.getKey();
        if (p[P]) {
          M = p[P];
        } else {
          p[P] = M;
        }
        M.update();
        if (!K) {
          I = n(J);
          if (I) {
            O = b(L, I, true);
            if (O !== null) {
              N = O.getKey();
              P = M.getKey();
              if (P !== N) {
                M.parentKey = N;
              }
            }
          }
          c(M);
        }
      } else {
        M = b(L, n(J), K);
      }
      return M;
    }
    function q(H) {
      H = E(H);
      if (w(H.target, H.relatedTarget)) {
        return;
      }
      u(H.target);
    }
    function l(J) {
      var K = null,
        H = null,
        I = false;
      for (H in p) {
        if (p.hasOwnProperty(H)) {
          K = p[H];
          if (K) {
            if (!I) {
              I = K.process(true);
            } else {
              K.dispose();
            }
          }
        }
      }
    }
    function o(H) {
      e.performFormCompletion(true);
    }
    function k(I) {
      var H = A.getValue(I, "target.id");
      if (!H) {
        return;
      }
      switch (I.type) {
        case "mousemove":
          b(I);
          break;
        case "mouseout":
          q(I);
          break;
        case "click":
          l(I);
          break;
        case "submit":
          o(I);
          break;
        default:
          break;
      }
    }
    return {
      init: function () {},
      destroy: function () {
        var I, H;
        for (I in p) {
          if (p.hasOwnProperty(I)) {
            p[I].dispose();
            delete p[I];
          }
        }
      },
      onevent: function (H) {
        if (typeof H !== "object" || !H.type) {
          return;
        }
        k(H);
      },
      onmessage: function (H) {},
      createHoverEvent: F,
      cleanupHoverEvents: c,
      eventMap: p,
    };
  });
} else {
}

/*
 *  **************************************************************************
 *  Licensed Materials - Property of HCL
 *  (c) Copyright HCL Technologies Ltd.  2020. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or disclosure
 *  restricted by GSA ADP Schedule Contract with HCL Technologies.
 *  **************************************************************************
 */

/*
 *  **************************************************************************
 *  Additional modules:
 *      discoAjax
 *  **************************************************************************
 */

//----------------------------
// Ajax Listener (XHR & Fetch)
//----------------------------
DCX.addModule("discoAjax", function (c) {
  var l = {},
    h = false,
    j,
    p,
    z,
    k,
    t = c.utils;
  function f(C, H, B) {
    var E,
      A,
      F = {},
      G = l.filters,
      D;
    if (!G || !G.length) {
      return F;
    }
    for (E = 0, A = G.length, D = false; !D && E < A; E += 1) {
      F = G[E];
      D = true;
      if (F.url) {
        D = F.url.cRegex.test(C);
      }
      if (D && F.method) {
        D = F.method.cRegex.test(H);
      }
      if (D && F.status) {
        D = F.status.cRegex.test(B);
      }
    }
    if (!D) {
      F = null;
    }
    return F;
  }
  function o(E) {
    var G = {},
      C,
      A,
      F,
      B,
      D;
    E = E.split(/[\r\n]+/);
    for (C = 0, A = E.length; C < A; C += 1) {
      F = E[C].split(": ");
      B = F[0];
      D = t.rtrim(F[1]);
      if (B && B.length) {
        G[B] = D;
      }
    }
    return G;
  }
  function m(H, D) {
    var G = {
        type: 5,
        customEvent: { name: "discoAjax", data: { interfaceType: "XHR" } },
      },
      C,
      B = G.customEvent.data,
      A;
    if (!H) {
      return;
    }
    C = document.createElement("a");
    C.href = H.tListener.url;
    B.originalURL = C.host + (C.pathname[0] === "/" ? "" : "/") + C.pathname;
    B.requestURL = c.normalizeUrl
      ? c.normalizeUrl(B.originalURL)
      : B.originalURL;
    B.description = "XHR Monitor " + B.requestURL;
    B.method = H.tListener.method;
    B.status = H.status;
    B.statusText = H.statusText || "";
    B.async = H.tListener.async;
    B.ajaxResponseTime = H.tListener.end - H.tListener.start;
    if (D.requestHeaders) {
      B.requestHeaders = H.tListener.reqHeaders;
    }
    if (
      D.requestData &&
      typeof H.tListener.reqData === "string" &&
      !H.tListener.isSystemXHR
    ) {
      try {
        B.request = JSON.parse(H.tListener.reqData);
      } catch (F) {
        B.request = H.tListener.reqData;
      }
    }
    if (D.responseHeaders) {
      B.responseHeaders = o(H.getAllResponseHeaders());
    }
    if (D.responseData) {
      if (typeof H.responseType === "undefined") {
        A = H.responseText;
      } else {
        if (H.responseType === "" || H.responseType === "text") {
          A = H.response;
        } else {
          if (H.responseType === "json") {
            B.response = H.response;
          } else {
            B.response = typeof H.response;
          }
        }
      }
      if (A) {
        try {
          B.response = JSON.parse(A);
        } catch (E) {
          B.response = A;
        }
      }
      if (H.responseType) {
        B.responseType = H.responseType;
      }
    }
    c.post(G);
  }
  function q(C) {
    var E,
      D = {},
      B = C.entries(),
      A = B.next();
    while (!A.done) {
      E = A.value;
      D[E[0]] = E[1];
      A = B.next();
    }
    return D;
  }
  function g(A) {
    return q(A);
  }
  function b(A) {
    if (typeof A === "object" && A.toString().indexOf("FormData") !== -1) {
      return q(A);
    }
    return A;
  }
  function r(A, E, F) {
    var G = {
        type: 5,
        customEvent: { name: "discoAjax", data: { interfaceType: "fetch" } },
      },
      D,
      C = G.customEvent.data,
      B,
      H;
    D = document.createElement("a");
    D.href = A.url;
    C.originalURL = D.host + (D.pathname[0] === "/" ? "" : "/") + D.pathname;
    C.requestURL = c.normalizeUrl
      ? c.normalizeUrl(C.originalURL)
      : C.originalURL;
    C.description = "Fetch Monitor " + C.requestURL;
    C.method = A.initData.method;
    C.status = E.status;
    C.statusText = E.statusText || "";
    C.async = true;
    C.ajaxResponseTime = A.end - A.start;
    C.responseType = E.type;
    if (F.requestHeaders) {
      if (
        A.initData.headers &&
        A.initData.headers.toString().indexOf("Headers") !== -1
      ) {
        C.requestHeaders = g(A.initData.headers);
      } else {
        C.requestHeaders = A.initData.headers || "";
      }
    }
    if (F.requestData && typeof A.body !== "undefined" && !A.isSystemXHR) {
      C.request = b(A.body);
    }
    if (F.responseHeaders) {
      C.responseHeaders = g(E.headers);
    }
    if (F.responseData) {
      H = E.headers.get("content-type");
      if (H && H.indexOf("application/json") !== -1) {
        E.clone()
          .json()
          .then(function (I) {
            C.response = I;
            c.post(G);
          });
        return;
      }
      if (H && (H.indexOf("text") !== -1 || H.indexOf("xml") !== -1)) {
        E.clone()
          .text()
          .then(function (I) {
            C.response = I;
            c.post(G);
          });
        return;
      }
      C.response = "Not logging unsupported response content: " + H;
    }
    c.post(G);
  }
  function n(E) {
    var C,
      B = E.tListener.url,
      F = E.tListener.method,
      A = E.status.toString(),
      D = {
        requestHeaders: false,
        requestData: false,
        responseHeaders: false,
        responseData: false,
      };
    C = f(B, F, A);
    if (C) {
      if (C.log) {
        D = C.log;
      }
      m(E, D);
    }
  }
  function a(A, E) {
    var D,
      C = A.url,
      G = A.initData.method,
      B = E.status.toString(),
      F = {
        requestHeaders: false,
        requestData: false,
        responseHeaders: false,
        responseData: false,
      };
    D = f(C, G, B);
    if (D) {
      if (D.log) {
        F = D.log;
      }
      r(A, E, F);
    }
  }
  function w(B) {
    var C, A;
    if (!B || !B.target) {
      return;
    }
    C = B.target;
    A = C.readyState;
    if (A === 4) {
      C.removeEventListener("readystatechange", w);
      C.tListener.end = Date.now();
      n(C);
    }
  }
  function s(B) {
    var A = B.setRequestHeader;
    B.setRequestHeader = function (F, D) {
      var E = this,
        C = E.tListener;
      if (F && F.length) {
        C.reqHeaders[F] = D;
      }
      return A.apply(E, arguments);
    };
  }
  function y(A) {
    var B = A.send;
    A.send = function (D) {
      var E = this,
        C = E.tListener;
      if (D) {
        C.reqData = D;
      }
      C.start = Date.now();
      return B.apply(E, arguments);
    };
  }
  function u(B) {
    var C, A, D;
    A = DCX.getServiceConfig("queue");
    D = A.queues || [];
    for (C = 0; C < D.length; C += 1) {
      if (D[C].endpoint && B.indexOf(D[C].endpoint) !== -1) {
        return true;
      }
    }
    return false;
  }
  function v(D, A, B) {
    var C = this;
    if (h) {
      C.addEventListener("readystatechange", w);
      C.tListener = {
        method: D,
        url: A,
        async: typeof B === "undefined" ? true : !!B,
        reqHeaders: {},
        isSystemXHR: u(A),
      };
      s(C);
      y(C);
    }
    return j.apply(C, arguments);
  }
  function x() {
    if (XMLHttpRequest) {
      j = XMLHttpRequest.prototype.open;
      XMLHttpRequest.prototype.open = v;
    }
  }
  function i() {
    p = window.fetch;
    window.fetch = function (C, B) {
      var A = {},
        D;
      if (typeof C === "object") {
        A.initData = C;
        A.url = C.url;
        A.initData
          .clone()
          .text()
          .then(function (E) {
            if (E.length > 0) {
              A.body = E;
            }
          });
      } else {
        A.initData = B || {};
        A.url = C;
        if (B && B.body) {
          A.body = B.body;
        }
      }
      A.isSystemXHR = u(A.url);
      A.start = Date.now();
      D = p.apply(this, arguments);
      return D.then(function (E) {
        A.end = Date.now();
        a(A, E);
        return E;
      });
    };
  }
  function d(A) {
    if (A && A.regex) {
      A.cRegex = new RegExp(A.regex, A.flags);
    }
  }
  function e(B) {
    var C,
      A,
      D,
      E = [];
    if (B && B.filters) {
      E = B.filters;
    }
    for (C = 0, A = E.length; C < A; C += 1) {
      D = E[C];
      t.forEach([D.url, D.method, D.status], d);
    }
    z = t.getValue(B, "xhrEnabled", true);
    if (
      XMLHttpRequest &&
      (XMLHttpRequest.toString().indexOf("[native code]") === -1 ||
        XMLHttpRequest.toString().indexOf("XMLHttpRequest") === -1)
    ) {
      z = false;
    }
    k =
      t.getValue(B, "fetchEnabled", true) && typeof window.fetch === "function";
    if (k && window.fetch.toString().indexOf("[native code]") === -1) {
      k = false;
    }
  }
  return {
    init: function () {
      l = c.getConfig();
      e(l);
    },
    destroy: function () {
      h = false;
    },
    onevent: function (A) {
      switch (A.type) {
        case "load":
          if (z) {
            x();
          }
          if (k) {
            i();
          }
          h = true;
          break;
        case "unload":
          h = false;
          break;
        default:
          break;
      }
    },
    version: "1.0",
  };
});

/*
 * Customer Specific config from Solteq
 */

var browserUAControl = true;
// Switch ajax functionality depending on browser
if (navigator.userAgent.indexOf("Trident") > -1) {
  browserUAControl = false;
} else if (navigator.userAgent.indexOf("MSIE") > -1) {
  browserUAControl = false;
} else if (navigator.userAgent.indexOf("Safari/533.") > -1) {
  browserUAControl = false;
} else if (navigator.userAgent.indexOf("Safari/534.") > -1) {
  browserUAControl = false;
}

// Default configuration
(function () {
  "use strict";
  // DCX is expected to be defined in the global scope i.e. window.DCX
  var config,
    DCX = window.DCX,
    /**
     * Due to issue with lack of change event propagation on legacy IE (W3C version of UIC)
     * its mandatory to provide more specific configuration on IE6, IE7, IE8 and IE9 in legacy
     * compatibility mode. For other browsers changeTarget can remain undefined as it is
     * sufficient to listen to the change event at the document level.
     */
    changeTarget;

  if (DCX.getFlavor() === "w3c" && DCX.utils.isLegacyIE) {
    changeTarget = "input, select, textarea, button";
  }

  config =
    // *** DCX UIC CONFIGURATION BEGINS HERE ***
    {
      core: {
        // List of CSS selectors corresponding to elements for which no user interaction is to be reported.
        // WARNING: Since this list has to be evaluated for each event, specifying inefficient selectors can cause performance issues.
        blockedElements: [],

        // List of CSS selectors corresponding to elements which needs to be skipped from capturing.
        // WARNING: Since this list has to be evaluated for each event, specifying inefficient selectors can cause performance issues.
        //  e.g. ["img[id^=testImage]"] - this will skip capturing img elements where id starts with testImage.
        doNotCaptureElements: [],

        ieExcludedLinks: [
          'a[href*="javascript:void"]',
          "input[onclick*='javascript:']",
        ],
        inactivityTimeout: 1000 * 60 * 60 * 10 /* 10 hours */,

        // WARNING: For advanced users only. Modifying the modules section may lead to unexpected behavior and or performance issues.
        modules: {
          usability: {
            events: [
              { name: "click", recurseFrames: true },
              { name: "mousemove", recurseFrames: true },
              { name: "mouseout", recurseFrames: true },
              { name: "submit", recurseFrames: true },
            ],
          },
          performance: {
            events: [
              { name: "load", target: window },
              { name: "unload", target: window },
            ],
          },
          replay: {
            events: [
              {
                name: "change",
                target: changeTarget,
                recurseFrames: true,
                attachToShadows: true,
              },
              { name: "click", recurseFrames: true },
              { name: "hashchange", target: window },
              { name: "focus", target: changeTarget, recurseFrames: true },
              { name: "blur", target: changeTarget, recurseFrames: true },
              { name: "load", target: window },
              { name: "unload", target: window },
              { name: "resize", target: window },
              { name: "scroll", target: window },
              { name: "orientationchange", target: window },
              { name: "touchend" },
              { name: "touchstart" },
            ],
          },
          discoAjax: {
            enabled: true,
            events: [
              { name: "load", target: window },
              { name: "unload", target: window },
            ],
          },
          DCCookie: {
            enabled: true,
          },
        },

        normalization: {
          /**
           * User defined URL normalization function which accepts an URL or path and returns
           * the normalized URL or normalized path.
           * @param urlOrPath {String} URL or Path which needs to be normalized.
           * @returns {String} The normalized URL or Path.
           */
          urlFunction: function (urlOrPath) {
            // Normalize the input URL or path here.
            // Refer to the documentation for an example to normalize the URL path or URL query parameters.
            return urlOrPath;
          },
        },

        // Set the sessionDataEnabled flag to true only if it's OK to expose Discover session data to 3rd party scripts.
        sessionDataEnabled: false,
        sessionKeepAlive: false,
        sessionData: {
          // Set this flag if the session value needs to be hashed to derive the Discover session ID
          sessionValueNeedsHashing: true,

          // Specify sessionQueryName only if the session id is derived from a query parameter.
          sessionQueryName: "sessionID",
          sessionQueryDelim: ";",

          // sessionQueryName, if specified, takes precedence over sessionCookieName.
          sessionCookieName: "jsessionid",
        },
        version: {
          author: "HCL Discover",
          date: "2022-05-03",
        },
        // Automatically detect screenview changes by tracking URL path and hash change.
        screenviewAutoDetect: true,
        // list of ignored frames pointed by css selector (top level only)
        framesBlacklist: ["#iframe1"],
      },
      services: {
        queue: {
          // WARNING: Enabling asynchronous request on unload may result in incomplete or missing data
          asyncReqOnUnload: true,
          useBeacon: false,
          useFetch: true,
          xhrLogging: false,
          queues: [
            {
              qid: "DEFAULT",
              // endpoint:
              //   "https://dvendba1.deepvision.cloud.solteq.com/DiscoverUIPost.php",
              endpoint: "https://net.discoverstore.hclcx.com/DiscoverUIPost.php",
              maxEvents: 8,
              timerInterval: 30000,
              maxSize: 5000000,
              checkEndpoint: false,
              endpointCheckTimeout: 1500,
              encoder: "gzip", // is this required?
            },
          ],
        },
        message: {
          privacy: [
            {
              targets: [
                // CSS Selector: All password input fields
                "input[type=password]",
                { id: { regex: "password.*" }, idType: "-1" },
                { id: { regex: ".*password" }, idType: "-1" },
                { id: { regex: ".*iban" }, idType: "-1" },
                { id: { regex: ".*ssn" }, idType: "-1" },
                { id: { regex: ".*socialSecurityNumber" }, idType: "-1" },
              ],
              maskType: 3,
            },
          ],
          privacyPatterns: [
            /**
                     * Use privacy patterns to match and replace specific patterns in the HTML.
                     *
                     * WARNING: Applying regular expressions to the HTML DOM can have a
                     * performance impact on the application. Adequate testing must be performed
                     * to ensure that pattern matching is not only working as expected but also
                     * not causing performance impact.
                     *
                     * Example illustrating blocking of SSN
                    {
                        pattern: { regex: "\\d{3}-\\d{2}-\\d{4}", flags: "g" },
                        replacement: "XXX-XX-XXXX"
                    }
                     */
          ],
        },
        serializer: {
          json: {
            defaultToBuiltin: true,
            parsers: ["JSON.parse"],
            stringifiers: ["JSON.stringify"],
          },
        },
        encoder: {
          gzip: {
            /**
             * The encode function should return encoded data in an object like this:
             * {
             *     buffer: "encoded data"
             * }
             */
            encode: "window.pako.gzip",
            defaultEncoding: "gzip",
          },
        },
        domCapture: {
          diffEnabled: browserUAControl,
          // DOM Capture options
          options: {
            maxMutations: 100, // If this threshold is met or exceeded, a full DOM is captured instead of a diff.
            maxLength: 25000000, // If this threshold is exceeded, the snapshot will not be sent
            captureFrames: false, // Should child frames/iframes be captured
            removeScripts: true, // Should script tags be removed from the captured snapshot
            captureStyle: true, // Capture inline-style tags (Helpful in reducing capture size, requires Replay Rules)
            removeBase64: 0, // Remove embeded base64 images > size in bytes (0 = remove all base64 images)
          },
        },
        browser: {
          sizzleObject: "window.Sizzle",
          jQueryObject: "window.jQuery",
        },
      },
      modules: {
        usability: {
          hoverThreshold: 2000,
        },
        performance: {
          calculateRenderTime: true,
          renderTimeThreshold: 600000,
          filter: {
            navigationStart: true,
            unloadEventStart: true,
            unloadEventEnd: true,
            redirectStart: true,
            redirectEnd: true,
            fetchStart: true,
            domainLookupStart: true,
            domainLookupEnd: true,
            connectStart: true,
            connectEnd: true,
            secureConnectionStart: true,
            requestStart: false,
            responseStart: false,
            responseEnd: false,
            domLoading: true,
            domInteractive: true,
            domContentLoadedEventStart: true,
            domContentLoadedEventEnd: true,
            domComplete: false,
            loadEventStart: false,
            loadEventEnd: false,
          },
        },
        replay: {
          // Geolocation configuration
          geolocation: {
            enabled: false,
            triggers: [
              {
                event: "load",
              },
            ],
          },
          // DOM Capture configuration
          domCapture: {
            enabled: true,
            triggers: [
              {
                event: "click",
              },
              {
                event: "change",
              },
              {
                event: "load",
                delay: 3500,
              },
            ],
          },
        },
        discoAjax: {
          filters: [
            {
              url: { regex: "^((?!(DiscoverUIPost)).)*$", flags: "i" },
              log: {
                requestHeaders: true,
                requestData: true, // Filter or apply proper privacy when exposing Request Data
                responseHeaders: true,
                responseData: false, // Filter or apply proper privacy when exposing Response Data
              },
            },
          ],
        },
        DCCookie: {
          appCookieWhitelist: [{ regex: ".*" }],
          dcAppKey: "",
        },
      },
    };

  //----------------------------------------------------------------------------------------------------------
  //--------------------------------------------------------------------------------- Alternate FireFox Config
  //----------------------------------------------------------------------------------------------------------
  if (navigator.userAgent.indexOf("Firefox") !== -1) {
    //------------------------ Work around for FETCH issues
    config.services.queue.asyncReqOnUnload = false;
    config.services.queue.useFetch = false;
  }

  //----------------------------------------------------------------------------------------------------------
  //------------------------------------------------------------------------------------- Alternate IE Configs
  //----------------------------------------------------------------------------------------------------------
  if (document.documentMode === 10) {
    //-------------------------- Alternate config for IE10 (No Diff Support)
    config.services.queue.useFetch = false;
    config.services.queue.useBeacon = false;
    config.services.domCapture.diffEnabled = false;
    config.core.modules.discoAjax.fetchEnabled = false;
    config.modules.replay.domCapture.triggers = [
      { event: "click", targets: ["a", "a *", "button", "button *"] },
      { event: "change" },
      { event: "load", delay: 500 },
    ];
  }
  if (document.documentMode === 11) {
    //-------------------------------------------- Alternate Config for IE11
    config.services.queue.useFetch = false;
    config.services.queue.useBeacon = false;
    config.services.message.privacyPatterns = [];
  }

  //----------------------------------------------------------------------------------------------------------
  //------------------------------------------------------------------------- Alternate IE Configs from Solteq
  //----------------------------------------------------------------------------------------------------------
  var disableSDK = false;
  if (document.documentMode === 8) {
    //----------------------------- Disable SDK for IE8 (No DOM/CORS Support)
    disableSDK = true;
  }
  if (document.documentMode === 9) {
    //----------------------- Alternate config for IE9 (No Diff/GZIP Support)
    config.modules.replay.domCapture.enabled = false;
    config.services.domCapture.diffEnabled = false;
  }

  if (!disableSDK) {
    DCX.init(config);
  }
  //DCX.init(config);
})();
