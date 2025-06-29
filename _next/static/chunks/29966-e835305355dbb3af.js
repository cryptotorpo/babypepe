(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [29966],
  {
    78242: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return U;
        },
      });
      var n = (function () {
          function t(t) {
            var e = this;
            (this._insertTag = function (t) {
              var r;
              (r =
                0 === e.tags.length
                  ? e.insertionPoint
                    ? e.insertionPoint.nextSibling
                    : e.prepend
                    ? e.container.firstChild
                    : e.before
                  : e.tags[e.tags.length - 1].nextSibling),
                e.container.insertBefore(t, r),
                e.tags.push(t);
            }),
              (this.isSpeedy = void 0 === t.speedy || t.speedy),
              (this.tags = []),
              (this.ctr = 0),
              (this.nonce = t.nonce),
              (this.key = t.key),
              (this.container = t.container),
              (this.prepend = t.prepend),
              (this.insertionPoint = t.insertionPoint),
              (this.before = null);
          }
          var e = t.prototype;
          return (
            (e.hydrate = function (t) {
              t.forEach(this._insertTag);
            }),
            (e.insert = function (t) {
              if (this.ctr % (this.isSpeedy ? 65e3 : 1) == 0) {
                var e;
                this._insertTag(
                  ((e = document.createElement("style")).setAttribute(
                    "data-emotion",
                    this.key
                  ),
                  void 0 !== this.nonce && e.setAttribute("nonce", this.nonce),
                  e.appendChild(document.createTextNode("")),
                  e.setAttribute("data-s", ""),
                  e)
                );
              }
              var r = this.tags[this.tags.length - 1];
              if (this.isSpeedy) {
                var n = (function (t) {
                  if (t.sheet) return t.sheet;
                  for (var e = 0; e < document.styleSheets.length; e++)
                    if (document.styleSheets[e].ownerNode === t)
                      return document.styleSheets[e];
                })(r);
                try {
                  n.insertRule(t, n.cssRules.length);
                } catch (t) {}
              } else r.appendChild(document.createTextNode(t));
              this.ctr++;
            }),
            (e.flush = function () {
              this.tags.forEach(function (t) {
                var e;
                return null == (e = t.parentNode) ? void 0 : e.removeChild(t);
              }),
                (this.tags = []),
                (this.ctr = 0);
            }),
            t
          );
        })(),
        i = Math.abs,
        o = String.fromCharCode,
        a = Object.assign;
      function s(t, e, r) {
        return t.replace(e, r);
      }
      function l(t, e) {
        return t.indexOf(e);
      }
      function u(t, e) {
        return 0 | t.charCodeAt(e);
      }
      function c(t, e, r) {
        return t.slice(e, r);
      }
      function d(t) {
        return t.length;
      }
      function h(t, e) {
        return e.push(t), t;
      }
      var f = 1,
        p = 1,
        m = 0,
        v = 0,
        g = 0,
        y = "";
      function b(t, e, r, n, i, o, a) {
        return {
          value: t,
          root: e,
          parent: r,
          type: n,
          props: i,
          children: o,
          line: f,
          column: p,
          length: a,
          return: "",
        };
      }
      function x(t, e) {
        return a(
          b("", null, null, "", null, null, 0),
          t,
          { length: -t.length },
          e
        );
      }
      function w() {
        return (g = v < m ? u(y, v++) : 0), p++, 10 === g && ((p = 1), f++), g;
      }
      function k() {
        return u(y, v);
      }
      function S(t) {
        switch (t) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function P(t) {
        return (f = p = 1), (m = d((y = t))), (v = 0), [];
      }
      function T(t) {
        var e, r;
        return ((e = v - 1),
        (r = (function t(e) {
          for (; w(); )
            switch (g) {
              case e:
                return v;
              case 34:
              case 39:
                34 !== e && 39 !== e && t(g);
                break;
              case 40:
                41 === e && t(e);
                break;
              case 92:
                w();
            }
          return v;
        })(91 === t ? t + 2 : 40 === t ? t + 1 : t)),
        c(y, e, r)).trim();
      }
      var C = "-ms-",
        E = "-moz-",
        R = "-webkit-",
        A = "comm",
        j = "rule",
        _ = "decl",
        O = "@keyframes";
      function M(t, e) {
        for (var r = "", n = t.length, i = 0; i < n; i++)
          r += e(t[i], i, t, e) || "";
        return r;
      }
      function D(t, e, r, n) {
        switch (t.type) {
          case "@layer":
            if (t.children.length) break;
          case "@import":
          case _:
            return (t.return = t.return || t.value);
          case A:
            return "";
          case O:
            return (t.return = t.value + "{" + M(t.children, n) + "}");
          case j:
            t.value = t.props.join(",");
        }
        return d((r = M(t.children, n)))
          ? (t.return = t.value + "{" + r + "}")
          : "";
      }
      function B(t, e, r, n, o, a, l, u, d, h, f) {
        for (
          var p = o - 1,
            m = 0 === o ? a : [""],
            v = m.length,
            g = 0,
            y = 0,
            x = 0;
          g < n;
          ++g
        )
          for (
            var w = 0, k = c(t, p + 1, (p = i((y = l[g])))), S = t;
            w < v;
            ++w
          )
            (S = (y > 0 ? m[w] + " " + k : s(k, /&\f/g, m[w])).trim()) &&
              (d[x++] = S);
        return b(t, e, r, 0 === o ? j : u, d, h, f);
      }
      function L(t, e, r, n) {
        return b(t, e, r, _, c(t, 0, n), c(t, n + 1, -1), n);
      }
      var V = function (t, e, r) {
          for (
            var n = 0, i = 0;
            (n = i), (i = k()), 38 === n && 12 === i && (e[r] = 1), !S(i);

          )
            w();
          return c(y, t, v);
        },
        I = function (t, e) {
          var r = -1,
            n = 44;
          do
            switch (S(n)) {
              case 0:
                38 === n && 12 === k() && (e[r] = 1), (t[r] += V(v - 1, e, r));
                break;
              case 2:
                t[r] += T(n);
                break;
              case 4:
                if (44 === n) {
                  (t[++r] = 58 === k() ? "&\f" : ""), (e[r] = t[r].length);
                  break;
                }
              default:
                t[r] += o(n);
            }
          while ((n = w()));
          return t;
        },
        F = function (t, e) {
          var r;
          return (r = I(P(t), e)), (y = ""), r;
        },
        $ = new WeakMap(),
        W = function (t) {
          if ("rule" === t.type && t.parent && !(t.length < 1)) {
            for (
              var e = t.value,
                r = t.parent,
                n = t.column === r.column && t.line === r.line;
              "rule" !== r.type;

            )
              if (!(r = r.parent)) return;
            if (
              (1 !== t.props.length || 58 === e.charCodeAt(0) || $.get(r)) &&
              !n
            ) {
              $.set(t, !0);
              for (
                var i = [], o = F(e, i), a = r.props, s = 0, l = 0;
                s < o.length;
                s++
              )
                for (var u = 0; u < a.length; u++, l++)
                  t.props[l] = i[s]
                    ? o[s].replace(/&\f/g, a[u])
                    : a[u] + " " + o[s];
            }
          }
        },
        N = function (t) {
          if ("decl" === t.type) {
            var e = t.value;
            108 === e.charCodeAt(0) &&
              98 === e.charCodeAt(2) &&
              ((t.return = ""), (t.value = ""));
          }
        },
        z = [
          function (t, e, r, n) {
            if (t.length > -1 && !t.return)
              switch (t.type) {
                case _:
                  t.return = (function t(e, r) {
                    switch (
                      45 ^ u(e, 0)
                        ? (((((((r << 2) ^ u(e, 0)) << 2) ^ u(e, 1)) << 2) ^
                            u(e, 2)) <<
                            2) ^
                          u(e, 3)
                        : 0
                    ) {
                      case 5103:
                        return R + "print-" + e + e;
                      case 5737:
                      case 4201:
                      case 3177:
                      case 3433:
                      case 1641:
                      case 4457:
                      case 2921:
                      case 5572:
                      case 6356:
                      case 5844:
                      case 3191:
                      case 6645:
                      case 3005:
                      case 6391:
                      case 5879:
                      case 5623:
                      case 6135:
                      case 4599:
                      case 4855:
                      case 4215:
                      case 6389:
                      case 5109:
                      case 5365:
                      case 5621:
                      case 3829:
                        return R + e + e;
                      case 5349:
                      case 4246:
                      case 4810:
                      case 6968:
                      case 2756:
                        return R + e + E + e + C + e + e;
                      case 6828:
                      case 4268:
                        return R + e + C + e + e;
                      case 6165:
                        return R + e + C + "flex-" + e + e;
                      case 5187:
                        return (
                          R +
                          e +
                          s(
                            e,
                            /(\w+).+(:[^]+)/,
                            R + "box-$1$2" + C + "flex-$1$2"
                          ) +
                          e
                        );
                      case 5443:
                        return (
                          R + e + C + "flex-item-" + s(e, /flex-|-self/, "") + e
                        );
                      case 4675:
                        return (
                          R +
                          e +
                          C +
                          "flex-line-pack" +
                          s(e, /align-content|flex-|-self/, "") +
                          e
                        );
                      case 5548:
                        return R + e + C + s(e, "shrink", "negative") + e;
                      case 5292:
                        return R + e + C + s(e, "basis", "preferred-size") + e;
                      case 6060:
                        return (
                          R +
                          "box-" +
                          s(e, "-grow", "") +
                          R +
                          e +
                          C +
                          s(e, "grow", "positive") +
                          e
                        );
                      case 4554:
                        return (
                          R + s(e, /([^-])(transform)/g, "$1" + R + "$2") + e
                        );
                      case 6187:
                        return (
                          s(
                            s(
                              s(e, /(zoom-|grab)/, R + "$1"),
                              /(image-set)/,
                              R + "$1"
                            ),
                            e,
                            ""
                          ) + e
                        );
                      case 5495:
                      case 3959:
                        return s(e, /(image-set\([^]*)/, R + "$1$`$1");
                      case 4968:
                        return (
                          s(
                            s(
                              e,
                              /(.+:)(flex-)?(.*)/,
                              R + "box-pack:$3" + C + "flex-pack:$3"
                            ),
                            /s.+-b[^;]+/,
                            "justify"
                          ) +
                          R +
                          e +
                          e
                        );
                      case 4095:
                      case 3583:
                      case 4068:
                      case 2532:
                        return s(e, /(.+)-inline(.+)/, R + "$1$2") + e;
                      case 8116:
                      case 7059:
                      case 5753:
                      case 5535:
                      case 5445:
                      case 5701:
                      case 4933:
                      case 4677:
                      case 5533:
                      case 5789:
                      case 5021:
                      case 4765:
                        if (d(e) - 1 - r > 6)
                          switch (u(e, r + 1)) {
                            case 109:
                              if (45 !== u(e, r + 4)) break;
                            case 102:
                              return (
                                s(
                                  e,
                                  /(.+:)(.+)-([^]+)/,
                                  "$1" +
                                    R +
                                    "$2-$3$1" +
                                    E +
                                    (108 == u(e, r + 3) ? "$3" : "$2-$3")
                                ) + e
                              );
                            case 115:
                              return ~l(e, "stretch")
                                ? t(s(e, "stretch", "fill-available"), r) + e
                                : e;
                          }
                        break;
                      case 4949:
                        if (115 !== u(e, r + 1)) break;
                      case 6444:
                        switch (u(e, d(e) - 3 - (~l(e, "!important") && 10))) {
                          case 107:
                            return s(e, ":", ":" + R) + e;
                          case 101:
                            return (
                              s(
                                e,
                                /(.+:)([^;!]+)(;|!.+)?/,
                                "$1" +
                                  R +
                                  (45 === u(e, 14) ? "inline-" : "") +
                                  "box$3$1" +
                                  R +
                                  "$2$3$1" +
                                  C +
                                  "$2box$3"
                              ) + e
                            );
                        }
                        break;
                      case 5936:
                        switch (u(e, r + 11)) {
                          case 114:
                            return (
                              R + e + C + s(e, /[svh]\w+-[tblr]{2}/, "tb") + e
                            );
                          case 108:
                            return (
                              R +
                              e +
                              C +
                              s(e, /[svh]\w+-[tblr]{2}/, "tb-rl") +
                              e
                            );
                          case 45:
                            return (
                              R + e + C + s(e, /[svh]\w+-[tblr]{2}/, "lr") + e
                            );
                        }
                        return R + e + C + e + e;
                    }
                    return e;
                  })(t.value, t.length);
                  break;
                case O:
                  return M([x(t, { value: s(t.value, "@", "@" + R) })], n);
                case j:
                  if (t.length) {
                    var i, o;
                    return (
                      (i = t.props),
                      (o = function (e) {
                        var r;
                        switch (
                          ((r = e),
                          (r = /(::plac\w+|:read-\w+)/.exec(r)) ? r[0] : r)
                        ) {
                          case ":read-only":
                          case ":read-write":
                            return M(
                              [
                                x(t, {
                                  props: [s(e, /:(read-\w+)/, ":" + E + "$1")],
                                }),
                              ],
                              n
                            );
                          case "::placeholder":
                            return M(
                              [
                                x(t, {
                                  props: [
                                    s(e, /:(plac\w+)/, ":" + R + "input-$1"),
                                  ],
                                }),
                                x(t, {
                                  props: [s(e, /:(plac\w+)/, ":" + E + "$1")],
                                }),
                                x(t, {
                                  props: [s(e, /:(plac\w+)/, C + "input-$1")],
                                }),
                              ],
                              n
                            );
                        }
                        return "";
                      }),
                      i.map(o).join("")
                    );
                  }
              }
          },
        ],
        U = function (t) {
          var e,
            r,
            i,
            a,
            m,
            x,
            C = t.key;
          if ("css" === C) {
            var E = document.querySelectorAll(
              "style[data-emotion]:not([data-s])"
            );
            Array.prototype.forEach.call(E, function (t) {
              -1 !== t.getAttribute("data-emotion").indexOf(" ") &&
                (document.head.appendChild(t), t.setAttribute("data-s", ""));
            });
          }
          var R = t.stylisPlugins || z,
            j = {},
            _ = [];
          (a = t.container || document.head),
            Array.prototype.forEach.call(
              document.querySelectorAll('style[data-emotion^="' + C + ' "]'),
              function (t) {
                for (
                  var e = t.getAttribute("data-emotion").split(" "), r = 1;
                  r < e.length;
                  r++
                )
                  j[e[r]] = !0;
                _.push(t);
              }
            );
          var O =
              ((r = (e = [W, N].concat(R, [
                D,
                ((i = function (t) {
                  x.insert(t);
                }),
                function (t) {
                  !t.root && (t = t.return) && i(t);
                }),
              ])).length),
              function (t, n, i, o) {
                for (var a = "", s = 0; s < r; s++) a += e[s](t, n, i, o) || "";
                return a;
              }),
            V = function (t) {
              var e, r;
              return M(
                ((r = (function t(e, r, n, i, a, m, x, P, C) {
                  for (
                    var E,
                      R = 0,
                      j = 0,
                      _ = x,
                      O = 0,
                      M = 0,
                      D = 0,
                      V = 1,
                      I = 1,
                      F = 1,
                      $ = 0,
                      W = "",
                      N = a,
                      z = m,
                      U = i,
                      X = W;
                    I;

                  )
                    switch (((D = $), ($ = w()))) {
                      case 40:
                        if (108 != D && 58 == u(X, _ - 1)) {
                          -1 != l((X += s(T($), "&", "&\f")), "&\f") &&
                            (F = -1);
                          break;
                        }
                      case 34:
                      case 39:
                      case 91:
                        X += T($);
                        break;
                      case 9:
                      case 10:
                      case 13:
                      case 32:
                        X += (function (t) {
                          for (; (g = k()); )
                            if (g < 33) w();
                            else break;
                          return S(t) > 2 || S(g) > 3 ? "" : " ";
                        })(D);
                        break;
                      case 92:
                        X += (function (t, e) {
                          for (
                            var r;
                            --e &&
                            w() &&
                            !(g < 48) &&
                            !(g > 102) &&
                            (!(g > 57) || !(g < 65)) &&
                            (!(g > 70) || !(g < 97));

                          );
                          return (
                            (r = v + (e < 6 && 32 == k() && 32 == w())),
                            c(y, t, r)
                          );
                        })(v - 1, 7);
                        continue;
                      case 47:
                        switch (k()) {
                          case 42:
                          case 47:
                            h(
                              b(
                                (E = (function (t, e) {
                                  for (; w(); )
                                    if (t + g === 57) break;
                                    else if (t + g === 84 && 47 === k()) break;
                                  return (
                                    "/*" +
                                    c(y, e, v - 1) +
                                    "*" +
                                    o(47 === t ? t : w())
                                  );
                                })(w(), v)),
                                r,
                                n,
                                A,
                                o(g),
                                c(E, 2, -2),
                                0
                              ),
                              C
                            );
                            break;
                          default:
                            X += "/";
                        }
                        break;
                      case 123 * V:
                        P[R++] = d(X) * F;
                      case 125 * V:
                      case 59:
                      case 0:
                        switch ($) {
                          case 0:
                          case 125:
                            I = 0;
                          case 59 + j:
                            -1 == F && (X = s(X, /\f/g, "")),
                              M > 0 &&
                                d(X) - _ &&
                                h(
                                  M > 32
                                    ? L(X + ";", i, n, _ - 1)
                                    : L(s(X, " ", "") + ";", i, n, _ - 2),
                                  C
                                );
                            break;
                          case 59:
                            X += ";";
                          default:
                            if (
                              (h(
                                (U = B(
                                  X,
                                  r,
                                  n,
                                  R,
                                  j,
                                  a,
                                  P,
                                  W,
                                  (N = []),
                                  (z = []),
                                  _
                                )),
                                m
                              ),
                              123 === $)
                            ) {
                              if (0 === j) t(X, r, U, U, N, m, _, P, z);
                              else
                                switch (99 === O && 110 === u(X, 3) ? 100 : O) {
                                  case 100:
                                  case 108:
                                  case 109:
                                  case 115:
                                    t(
                                      e,
                                      U,
                                      U,
                                      i &&
                                        h(
                                          B(
                                            e,
                                            U,
                                            U,
                                            0,
                                            0,
                                            a,
                                            P,
                                            W,
                                            a,
                                            (N = []),
                                            _
                                          ),
                                          z
                                        ),
                                      a,
                                      z,
                                      _,
                                      P,
                                      i ? N : z
                                    );
                                    break;
                                  default:
                                    t(X, U, U, U, [""], z, 0, P, z);
                                }
                            }
                        }
                        (R = j = M = 0), (V = F = 1), (W = X = ""), (_ = x);
                        break;
                      case 58:
                        (_ = 1 + d(X)), (M = D);
                      default:
                        if (V < 1) {
                          if (123 == $) --V;
                          else if (
                            125 == $ &&
                            0 == V++ &&
                            125 ==
                              ((g = v > 0 ? u(y, --v) : 0),
                              p--,
                              10 === g && ((p = 1), f--),
                              g)
                          )
                            continue;
                        }
                        switch (((X += o($)), $ * V)) {
                          case 38:
                            F = j > 0 ? 1 : ((X += "\f"), -1);
                            break;
                          case 44:
                            (P[R++] = (d(X) - 1) * F), (F = 1);
                            break;
                          case 64:
                            45 === k() && (X += T(w())),
                              (O = k()),
                              (j = _ =
                                d(
                                  (W = X +=
                                    (function (t) {
                                      for (; !S(k()); ) w();
                                      return c(y, t, v);
                                    })(v))
                                )),
                              $++;
                            break;
                          case 45:
                            45 === D && 2 == d(X) && (V = 0);
                        }
                    }
                  return m;
                })("", null, null, null, [""], (e = P((e = t))), 0, [0], e)),
                (y = ""),
                r),
                O
              );
            };
          m = function (t, e, r, n) {
            (x = r),
              V(t ? t + "{" + e.styles + "}" : e.styles),
              n && (I.inserted[e.name] = !0);
          };
          var I = {
            key: C,
            sheet: new n({
              key: C,
              container: a,
              nonce: t.nonce,
              speedy: t.speedy,
              prepend: t.prepend,
              insertionPoint: t.insertionPoint,
            }),
            nonce: t.nonce,
            inserted: j,
            registered: {},
            insert: m,
          };
          return I.sheet.hydrate(_), I;
        };
    },
    5772: function (t, e, r) {
      "use strict";
      function n(t) {
        var e = Object.create(null);
        return function (r) {
          return void 0 === e[r] && (e[r] = t(r)), e[r];
        };
      }
      r.d(e, {
        Z: function () {
          return n;
        },
      });
    },
    2775: function (t, e, r) {
      "use strict";
      r.d(e, {
        E: function () {
          return b;
        },
        T: function () {
          return h;
        },
        a: function () {
          return p;
        },
        c: function () {
          return g;
        },
        h: function () {
          return m;
        },
        w: function () {
          return d;
        },
      });
      var n = r(2265),
        i = r(78242),
        o = r(1119),
        a = function (t) {
          var e = new WeakMap();
          return function (r) {
            if (e.has(r)) return e.get(r);
            var n = t(r);
            return e.set(r, n), n;
          };
        },
        s = r(32820),
        l = r(29896),
        u = r(24006),
        c = n.createContext(
          "undefined" != typeof HTMLElement ? (0, i.Z)({ key: "css" }) : null
        );
      c.Provider;
      var d = function (t) {
          return (0, n.forwardRef)(function (e, r) {
            return t(e, (0, n.useContext)(c), r);
          });
        },
        h = n.createContext({}),
        f = a(function (t) {
          return a(function (e) {
            return "function" == typeof e ? e(t) : (0, o.Z)({}, t, e);
          });
        }),
        p = function (t) {
          var e = n.useContext(h);
          return (
            t.theme !== e && (e = f(e)(t.theme)),
            n.createElement(h.Provider, { value: e }, t.children)
          );
        },
        m = {}.hasOwnProperty,
        v = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
        g = function (t, e) {
          var r = {};
          for (var n in e) m.call(e, n) && (r[n] = e[n]);
          return (r[v] = t), r;
        },
        y = function (t) {
          var e = t.cache,
            r = t.serialized,
            n = t.isStringTag;
          return (
            (0, s.hC)(e, r, n),
            (0, u.L)(function () {
              return (0, s.My)(e, r, n);
            }),
            null
          );
        },
        b = d(function (t, e, r) {
          var i = t.css;
          "string" == typeof i &&
            void 0 !== e.registered[i] &&
            (i = e.registered[i]);
          var o = t[v],
            a = [i],
            u = "";
          "string" == typeof t.className
            ? (u = (0, s.fp)(e.registered, a, t.className))
            : null != t.className && (u = t.className + " ");
          var c = (0, l.O)(a, void 0, n.useContext(h));
          u += e.key + "-" + c.name;
          var d = {};
          for (var f in t)
            m.call(t, f) && "css" !== f && f !== v && (d[f] = t[f]);
          return (
            (d.className = u),
            r && (d.ref = r),
            n.createElement(
              n.Fragment,
              null,
              n.createElement(y, {
                cache: e,
                serialized: c,
                isStringTag: "string" == typeof o,
              }),
              n.createElement(o, d)
            )
          );
        });
    },
    3146: function (t, e, r) {
      "use strict";
      r.d(e, {
        F4: function () {
          return f;
        },
        xB: function () {
          return d;
        },
      });
      var n,
        i,
        o = r(2775),
        a = r(2265),
        s = r(32820),
        l = r(24006),
        u = r(29896);
      r(78242), r(63285);
      var c = function (t, e) {
        var r = arguments;
        if (null == e || !o.h.call(e, "css"))
          return a.createElement.apply(void 0, r);
        var n = r.length,
          i = Array(n);
        (i[0] = o.E), (i[1] = (0, o.c)(t, e));
        for (var s = 2; s < n; s++) i[s] = r[s];
        return a.createElement.apply(null, i);
      };
      (n = c || (c = {})), i || (i = n.JSX || (n.JSX = {}));
      var d = (0, o.w)(function (t, e) {
        var r = t.styles,
          n = (0, u.O)([r], void 0, a.useContext(o.T)),
          i = a.useRef();
        return (
          (0, l.j)(
            function () {
              var t = e.key + "-global",
                r = new e.sheet.constructor({
                  key: t,
                  nonce: e.sheet.nonce,
                  container: e.sheet.container,
                  speedy: e.sheet.isSpeedy,
                }),
                o = !1,
                a = document.querySelector(
                  'style[data-emotion="' + t + " " + n.name + '"]'
                );
              return (
                e.sheet.tags.length && (r.before = e.sheet.tags[0]),
                null !== a &&
                  ((o = !0), a.setAttribute("data-emotion", t), r.hydrate([a])),
                (i.current = [r, o]),
                function () {
                  r.flush();
                }
              );
            },
            [e]
          ),
          (0, l.j)(
            function () {
              var t = i.current,
                r = t[0];
              if (t[1]) {
                t[1] = !1;
                return;
              }
              if (
                (void 0 !== n.next && (0, s.My)(e, n.next, !0), r.tags.length)
              ) {
                var o = r.tags[r.tags.length - 1].nextElementSibling;
                (r.before = o), r.flush();
              }
              e.insert("", n, r, !1);
            },
            [e, n.name]
          ),
          null
        );
      });
      function h() {
        for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        return (0, u.O)(e);
      }
      function f() {
        var t = h.apply(void 0, arguments),
          e = "animation-" + t.name;
        return {
          name: e,
          styles: "@keyframes " + e + "{" + t.styles + "}",
          anim: 1,
          toString: function () {
            return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
          },
        };
      }
    },
    29896: function (t, e, r) {
      "use strict";
      r.d(e, {
        O: function () {
          return p;
        },
      });
      var n,
        i = {
          animationIterationCount: 1,
          aspectRatio: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          scale: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        },
        o = r(5772),
        a = /[A-Z]|^ms/g,
        s = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
        l = function (t) {
          return 45 === t.charCodeAt(1);
        },
        u = function (t) {
          return null != t && "boolean" != typeof t;
        },
        c = (0, o.Z)(function (t) {
          return l(t) ? t : t.replace(a, "-$&").toLowerCase();
        }),
        d = function (t, e) {
          switch (t) {
            case "animation":
            case "animationName":
              if ("string" == typeof e)
                return e.replace(s, function (t, e, r) {
                  return (n = { name: e, styles: r, next: n }), e;
                });
          }
          return 1 === i[t] || l(t) || "number" != typeof e || 0 === e
            ? e
            : e + "px";
        };
      function h(t, e, r) {
        if (null == r) return "";
        if (void 0 !== r.__emotion_styles) return r;
        switch (typeof r) {
          case "boolean":
            return "";
          case "object":
            if (1 === r.anim)
              return (n = { name: r.name, styles: r.styles, next: n }), r.name;
            if (void 0 !== r.styles) {
              var i = r.next;
              if (void 0 !== i)
                for (; void 0 !== i; )
                  (n = { name: i.name, styles: i.styles, next: n }),
                    (i = i.next);
              return r.styles + ";";
            }
            return (function (t, e, r) {
              var n = "";
              if (Array.isArray(r))
                for (var i = 0; i < r.length; i++) n += h(t, e, r[i]) + ";";
              else
                for (var o in r) {
                  var a = r[o];
                  if ("object" != typeof a)
                    null != e && void 0 !== e[a]
                      ? (n += o + "{" + e[a] + "}")
                      : u(a) && (n += c(o) + ":" + d(o, a) + ";");
                  else if (
                    Array.isArray(a) &&
                    "string" == typeof a[0] &&
                    (null == e || void 0 === e[a[0]])
                  )
                    for (var s = 0; s < a.length; s++)
                      u(a[s]) && (n += c(o) + ":" + d(o, a[s]) + ";");
                  else {
                    var l = h(t, e, a);
                    switch (o) {
                      case "animation":
                      case "animationName":
                        n += c(o) + ":" + l + ";";
                        break;
                      default:
                        n += o + "{" + l + "}";
                    }
                  }
                }
              return n;
            })(t, e, r);
          case "function":
            if (void 0 !== t) {
              var o = n,
                a = r(t);
              return (n = o), h(t, e, a);
            }
        }
        if (null == e) return r;
        var s = e[r];
        return void 0 !== s ? s : r;
      }
      var f = /label:\s*([^\s;{]+)\s*(;|$)/g;
      function p(t, e, r) {
        if (
          1 === t.length &&
          "object" == typeof t[0] &&
          null !== t[0] &&
          void 0 !== t[0].styles
        )
          return t[0];
        var i,
          o = !0,
          a = "";
        n = void 0;
        var s = t[0];
        null == s || void 0 === s.raw
          ? ((o = !1), (a += h(r, e, s)))
          : (a += s[0]);
        for (var l = 1; l < t.length; l++)
          (a += h(r, e, t[l])), o && (a += s[l]);
        f.lastIndex = 0;
        for (var u = ""; null !== (i = f.exec(a)); ) u += "-" + i[1];
        return {
          name:
            (function (t) {
              for (var e, r = 0, n = 0, i = t.length; i >= 4; ++n, i -= 4)
                (e =
                  (65535 &
                    (e =
                      (255 & t.charCodeAt(n)) |
                      ((255 & t.charCodeAt(++n)) << 8) |
                      ((255 & t.charCodeAt(++n)) << 16) |
                      ((255 & t.charCodeAt(++n)) << 24))) *
                    1540483477 +
                  (((e >>> 16) * 59797) << 16)),
                  (e ^= e >>> 24),
                  (r =
                    ((65535 & e) * 1540483477 + (((e >>> 16) * 59797) << 16)) ^
                    ((65535 & r) * 1540483477 + (((r >>> 16) * 59797) << 16)));
              switch (i) {
                case 3:
                  r ^= (255 & t.charCodeAt(n + 2)) << 16;
                case 2:
                  r ^= (255 & t.charCodeAt(n + 1)) << 8;
                case 1:
                  (r ^= 255 & t.charCodeAt(n)),
                    (r =
                      (65535 & r) * 1540483477 + (((r >>> 16) * 59797) << 16));
              }
              return (
                (r ^= r >>> 13),
                (
                  ((r =
                    (65535 & r) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
                    (r >>> 15)) >>>
                  0
                ).toString(36)
              );
            })(a) + u,
          styles: a,
          next: n,
        };
      }
    },
    85968: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return v;
        },
      });
      var n = r(1119),
        i = r(2775),
        o = r(29896),
        a = r(24006),
        s = r(32820),
        l = r(2265),
        u = r(5772),
        c =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        d = (0, u.Z)(function (t) {
          return (
            c.test(t) ||
            (111 === t.charCodeAt(0) &&
              110 === t.charCodeAt(1) &&
              91 > t.charCodeAt(2))
          );
        }),
        h = function (t) {
          return "theme" !== t;
        },
        f = function (t) {
          return "string" == typeof t && t.charCodeAt(0) > 96 ? d : h;
        },
        p = function (t, e, r) {
          var n;
          if (e) {
            var i = e.shouldForwardProp;
            n =
              t.__emotion_forwardProp && i
                ? function (e) {
                    return t.__emotion_forwardProp(e) && i(e);
                  }
                : i;
          }
          return (
            "function" != typeof n && r && (n = t.__emotion_forwardProp), n
          );
        },
        m = function (t) {
          var e = t.cache,
            r = t.serialized,
            n = t.isStringTag;
          return (
            (0, s.hC)(e, r, n),
            (0, a.L)(function () {
              return (0, s.My)(e, r, n);
            }),
            null
          );
        },
        v = function t(e, r) {
          var a,
            u,
            c = e.__emotion_real === e,
            d = (c && e.__emotion_base) || e;
          void 0 !== r && ((a = r.label), (u = r.target));
          var h = p(e, r, c),
            v = h || f(d),
            g = !v("as");
          return function () {
            var y = arguments,
              b =
                c && void 0 !== e.__emotion_styles
                  ? e.__emotion_styles.slice(0)
                  : [];
            if (
              (void 0 !== a && b.push("label:" + a + ";"),
              null == y[0] || void 0 === y[0].raw)
            )
              b.push.apply(b, y);
            else {
              var x = y[0];
              b.push(x[0]);
              for (var w = y.length, k = 1; k < w; k++) b.push(y[k], x[k]);
            }
            var S = (0, i.w)(function (t, e, r) {
              var n = (g && t.as) || d,
                a = "",
                c = [],
                p = t;
              if (null == t.theme) {
                for (var y in ((p = {}), t)) p[y] = t[y];
                p.theme = l.useContext(i.T);
              }
              "string" == typeof t.className
                ? (a = (0, s.fp)(e.registered, c, t.className))
                : null != t.className && (a = t.className + " ");
              var x = (0, o.O)(b.concat(c), e.registered, p);
              (a += e.key + "-" + x.name), void 0 !== u && (a += " " + u);
              var w = g && void 0 === h ? f(n) : v,
                k = {};
              for (var S in t) (!g || "as" !== S) && w(S) && (k[S] = t[S]);
              return (
                (k.className = a),
                r && (k.ref = r),
                l.createElement(
                  l.Fragment,
                  null,
                  l.createElement(m, {
                    cache: e,
                    serialized: x,
                    isStringTag: "string" == typeof n,
                  }),
                  l.createElement(n, k)
                )
              );
            });
            return (
              (S.displayName =
                void 0 !== a
                  ? a
                  : "Styled(" +
                    ("string" == typeof d
                      ? d
                      : d.displayName || d.name || "Component") +
                    ")"),
              (S.defaultProps = e.defaultProps),
              (S.__emotion_real = S),
              (S.__emotion_base = d),
              (S.__emotion_styles = b),
              (S.__emotion_forwardProp = h),
              Object.defineProperty(S, "toString", {
                value: function () {
                  return "." + u;
                },
              }),
              (S.withComponent = function (e, i) {
                return t(
                  e,
                  (0, n.Z)({}, r, i, { shouldForwardProp: p(S, i, !0) })
                ).apply(void 0, b);
              }),
              S
            );
          };
        }.bind(null);
      [
        "a",
        "abbr",
        "address",
        "area",
        "article",
        "aside",
        "audio",
        "b",
        "base",
        "bdi",
        "bdo",
        "big",
        "blockquote",
        "body",
        "br",
        "button",
        "canvas",
        "caption",
        "cite",
        "code",
        "col",
        "colgroup",
        "data",
        "datalist",
        "dd",
        "del",
        "details",
        "dfn",
        "dialog",
        "div",
        "dl",
        "dt",
        "em",
        "embed",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hgroup",
        "hr",
        "html",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "keygen",
        "label",
        "legend",
        "li",
        "link",
        "main",
        "map",
        "mark",
        "marquee",
        "menu",
        "menuitem",
        "meta",
        "meter",
        "nav",
        "noscript",
        "object",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "param",
        "picture",
        "pre",
        "progress",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "script",
        "section",
        "select",
        "small",
        "source",
        "span",
        "strong",
        "style",
        "sub",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "title",
        "tr",
        "track",
        "u",
        "ul",
        "var",
        "video",
        "wbr",
        "circle",
        "clipPath",
        "defs",
        "ellipse",
        "foreignObject",
        "g",
        "image",
        "line",
        "linearGradient",
        "mask",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "radialGradient",
        "rect",
        "stop",
        "svg",
        "text",
        "tspan",
      ].forEach(function (t) {
        v[t] = v(t);
      });
    },
    24006: function (t, e, r) {
      "use strict";
      r.d(e, {
        L: function () {
          return a;
        },
        j: function () {
          return s;
        },
      });
      var n,
        i = r(2265),
        o =
          !!(n || (n = r.t(i, 2))).useInsertionEffect &&
          (n || (n = r.t(i, 2))).useInsertionEffect,
        a =
          o ||
          function (t) {
            return t();
          },
        s = o || i.useLayoutEffect;
    },
    32820: function (t, e, r) {
      "use strict";
      function n(t, e, r) {
        var n = "";
        return (
          r.split(" ").forEach(function (r) {
            void 0 !== t[r] ? e.push(t[r] + ";") : r && (n += r + " ");
          }),
          n
        );
      }
      r.d(e, {
        My: function () {
          return o;
        },
        fp: function () {
          return n;
        },
        hC: function () {
          return i;
        },
      });
      var i = function (t, e, r) {
          var n = t.key + "-" + e.name;
          !1 === r &&
            void 0 === t.registered[n] &&
            (t.registered[n] = e.styles);
        },
        o = function (t, e, r) {
          i(t, e, r);
          var n = t.key + "-" + e.name;
          if (void 0 === t.inserted[e.name]) {
            var o = e;
            do t.insert(e === o ? "." + n : "", o, t.sheet, !0), (o = o.next);
            while (void 0 !== o);
          }
        };
    },
    63285: function (t, e, r) {
      "use strict";
      var n = r(82558),
        i = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        o = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        a = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        s = {};
      function l(t) {
        return n.isMemo(t) ? a : s[t.$$typeof] || i;
      }
      (s[n.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (s[n.Memo] = a);
      var u = Object.defineProperty,
        c = Object.getOwnPropertyNames,
        d = Object.getOwnPropertySymbols,
        h = Object.getOwnPropertyDescriptor,
        f = Object.getPrototypeOf,
        p = Object.prototype;
      t.exports = function t(e, r, n) {
        if ("string" != typeof r) {
          if (p) {
            var i = f(r);
            i && i !== p && t(e, i, n);
          }
          var a = c(r);
          d && (a = a.concat(d(r)));
          for (var s = l(e), m = l(r), v = 0; v < a.length; ++v) {
            var g = a[v];
            if (!o[g] && !(n && n[g]) && !(m && m[g]) && !(s && s[g])) {
              var y = h(r, g);
              try {
                u(e, g, y);
              } catch (t) {}
            }
          }
        }
        return e;
      };
    },
    1314: function (t, e, r) {
      t = r.nmd(t);
      var n,
        i,
        o,
        a,
        s,
        l,
        u,
        c,
        d,
        h,
        f,
        p = "__lodash_hash_undefined__",
        m = "[object Arguments]",
        v = "[object Function]",
        g = "[object Object]",
        y = /^\[object .+?Constructor\]$/,
        b = /^(?:0|[1-9]\d*)$/,
        x = {};
      (x["[object Float32Array]"] =
        x["[object Float64Array]"] =
        x["[object Int8Array]"] =
        x["[object Int16Array]"] =
        x["[object Int32Array]"] =
        x["[object Uint8Array]"] =
        x["[object Uint8ClampedArray]"] =
        x["[object Uint16Array]"] =
        x["[object Uint32Array]"] =
          !0),
        (x[m] =
          x["[object Array]"] =
          x["[object ArrayBuffer]"] =
          x["[object Boolean]"] =
          x["[object DataView]"] =
          x["[object Date]"] =
          x["[object Error]"] =
          x[v] =
          x["[object Map]"] =
          x["[object Number]"] =
          x[g] =
          x["[object RegExp]"] =
          x["[object Set]"] =
          x["[object String]"] =
          x["[object WeakMap]"] =
            !1);
      var w = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
        k = "object" == typeof self && self && self.Object === Object && self,
        S = w || k || Function("return this")(),
        P = e && !e.nodeType && e,
        T = P && t && !t.nodeType && t,
        C = T && T.exports === P,
        E = C && w.process,
        R = (function () {
          try {
            var t = T && T.require && T.require("util").types;
            if (t) return t;
            return E && E.binding && E.binding("util");
          } catch (t) {}
        })(),
        A = R && R.isTypedArray,
        j = Array.prototype,
        _ = Function.prototype,
        O = Object.prototype,
        M = S["__core-js_shared__"],
        D = _.toString,
        B = O.hasOwnProperty,
        L = (u = /[^.]+$/.exec((M && M.keys && M.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + u
          : "",
        V = O.toString,
        I = D.call(Object),
        F = RegExp(
          "^" +
            D.call(B)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        ),
        $ = C ? S.Buffer : void 0,
        W = S.Symbol,
        N = S.Uint8Array,
        z = $ ? $.allocUnsafe : void 0,
        U =
          ((c = Object.getPrototypeOf),
          (d = Object),
          function (t) {
            return c(d(t));
          }),
        X = Object.create,
        H = O.propertyIsEnumerable,
        Y = j.splice,
        q = W ? W.toStringTag : void 0,
        K = (function () {
          try {
            var t = tf(Object, "defineProperty");
            return t({}, "", {}), t;
          } catch (t) {}
        })(),
        G = $ ? $.isBuffer : void 0,
        Z = Math.max,
        J = Date.now,
        Q = tf(S, "Map"),
        tt = tf(Object, "create"),
        te = (function () {
          function t() {}
          return function (e) {
            if (!tT(e)) return {};
            if (X) return X(e);
            t.prototype = e;
            var r = new t();
            return (t.prototype = void 0), r;
          };
        })();
      function tr(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r; ) {
          var n = t[e];
          this.set(n[0], n[1]);
        }
      }
      function tn(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r; ) {
          var n = t[e];
          this.set(n[0], n[1]);
        }
      }
      function ti(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r; ) {
          var n = t[e];
          this.set(n[0], n[1]);
        }
      }
      function to(t) {
        var e = (this.__data__ = new tn(t));
        this.size = e.size;
      }
      function ta(t, e, r) {
        ((void 0 === r || ty(t[e], r)) && (void 0 !== r || e in t)) ||
          tl(t, e, r);
      }
      function ts(t, e) {
        for (var r = t.length; r--; ) if (ty(t[r][0], e)) return r;
        return -1;
      }
      function tl(t, e, r) {
        "__proto__" == e && K
          ? K(t, e, {
              configurable: !0,
              enumerable: !0,
              value: r,
              writable: !0,
            })
          : (t[e] = r);
      }
      (tr.prototype.clear = function () {
        (this.__data__ = tt ? tt(null) : {}), (this.size = 0);
      }),
        (tr.prototype.delete = function (t) {
          var e = this.has(t) && delete this.__data__[t];
          return (this.size -= e ? 1 : 0), e;
        }),
        (tr.prototype.get = function (t) {
          var e = this.__data__;
          if (tt) {
            var r = e[t];
            return r === p ? void 0 : r;
          }
          return B.call(e, t) ? e[t] : void 0;
        }),
        (tr.prototype.has = function (t) {
          var e = this.__data__;
          return tt ? void 0 !== e[t] : B.call(e, t);
        }),
        (tr.prototype.set = function (t, e) {
          var r = this.__data__;
          return (
            (this.size += this.has(t) ? 0 : 1),
            (r[t] = tt && void 0 === e ? p : e),
            this
          );
        }),
        (tn.prototype.clear = function () {
          (this.__data__ = []), (this.size = 0);
        }),
        (tn.prototype.delete = function (t) {
          var e = this.__data__,
            r = ts(e, t);
          return (
            !(r < 0) &&
            (r == e.length - 1 ? e.pop() : Y.call(e, r, 1), --this.size, !0)
          );
        }),
        (tn.prototype.get = function (t) {
          var e = this.__data__,
            r = ts(e, t);
          return r < 0 ? void 0 : e[r][1];
        }),
        (tn.prototype.has = function (t) {
          return ts(this.__data__, t) > -1;
        }),
        (tn.prototype.set = function (t, e) {
          var r = this.__data__,
            n = ts(r, t);
          return n < 0 ? (++this.size, r.push([t, e])) : (r[n][1] = e), this;
        }),
        (ti.prototype.clear = function () {
          (this.size = 0),
            (this.__data__ = {
              hash: new tr(),
              map: new (Q || tn)(),
              string: new tr(),
            });
        }),
        (ti.prototype.delete = function (t) {
          var e = th(this, t).delete(t);
          return (this.size -= e ? 1 : 0), e;
        }),
        (ti.prototype.get = function (t) {
          return th(this, t).get(t);
        }),
        (ti.prototype.has = function (t) {
          return th(this, t).has(t);
        }),
        (ti.prototype.set = function (t, e) {
          var r = th(this, t),
            n = r.size;
          return r.set(t, e), (this.size += r.size == n ? 0 : 1), this;
        }),
        (to.prototype.clear = function () {
          (this.__data__ = new tn()), (this.size = 0);
        }),
        (to.prototype.delete = function (t) {
          var e = this.__data__,
            r = e.delete(t);
          return (this.size = e.size), r;
        }),
        (to.prototype.get = function (t) {
          return this.__data__.get(t);
        }),
        (to.prototype.has = function (t) {
          return this.__data__.has(t);
        }),
        (to.prototype.set = function (t, e) {
          var r = this.__data__;
          if (r instanceof tn) {
            var n = r.__data__;
            if (!Q || n.length < 199)
              return n.push([t, e]), (this.size = ++r.size), this;
            r = this.__data__ = new ti(n);
          }
          return r.set(t, e), (this.size = r.size), this;
        });
      var tu = function (t, e, r) {
        for (var n = -1, i = Object(t), o = r(t), a = o.length; a--; ) {
          var s = o[++n];
          if (!1 === e(i[s], s, i)) break;
        }
        return t;
      };
      function tc(t) {
        return null == t
          ? void 0 === t
            ? "[object Undefined]"
            : "[object Null]"
          : q && q in Object(t)
          ? (function (t) {
              var e = B.call(t, q),
                r = t[q];
              try {
                t[q] = void 0;
                var n = !0;
              } catch (t) {}
              var i = V.call(t);
              return n && (e ? (t[q] = r) : delete t[q]), i;
            })(t)
          : V.call(t);
      }
      function td(t) {
        return tC(t) && tc(t) == m;
      }
      function th(t, e) {
        var r,
          n = t.__data__;
        return (
          "string" == (r = typeof e) ||
          "number" == r ||
          "symbol" == r ||
          "boolean" == r
            ? "__proto__" !== e
            : null === e
        )
          ? n["string" == typeof e ? "string" : "hash"]
          : n.map;
      }
      function tf(t, e) {
        var r = null == t ? void 0 : t[e];
        return !(!tT(r) || (L && L in r)) &&
          (tS(r) ? F : y).test(
            (function (t) {
              if (null != t) {
                try {
                  return D.call(t);
                } catch (t) {}
                try {
                  return t + "";
                } catch (t) {}
              }
              return "";
            })(r)
          )
          ? r
          : void 0;
      }
      function tp(t, e) {
        var r = typeof t;
        return (
          !!(e = null == e ? 9007199254740991 : e) &&
          ("number" == r || ("symbol" != r && b.test(t))) &&
          t > -1 &&
          t % 1 == 0 &&
          t < e
        );
      }
      function tm(t) {
        var e = t && t.constructor;
        return t === (("function" == typeof e && e.prototype) || O);
      }
      function tv(t, e) {
        if (
          ("constructor" !== e || "function" != typeof t[e]) &&
          "__proto__" != e
        )
          return t[e];
      }
      var tg =
        ((n = K
          ? function (t, e) {
              return K(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: function () {
                  return e;
                },
                writable: !0,
              });
            }
          : tj),
        (i = 0),
        (o = 0),
        function () {
          var t = J(),
            e = 16 - (t - o);
          if (((o = t), e > 0)) {
            if (++i >= 800) return arguments[0];
          } else i = 0;
          return n.apply(void 0, arguments);
        });
      function ty(t, e) {
        return t === e || (t != t && e != e);
      }
      var tb = td(
          (function () {
            return arguments;
          })()
        )
          ? td
          : function (t) {
              return tC(t) && B.call(t, "callee") && !H.call(t, "callee");
            },
        tx = Array.isArray;
      function tw(t) {
        return null != t && tP(t.length) && !tS(t);
      }
      var tk =
        G ||
        function () {
          return !1;
        };
      function tS(t) {
        if (!tT(t)) return !1;
        var e = tc(t);
        return (
          e == v ||
          "[object GeneratorFunction]" == e ||
          "[object AsyncFunction]" == e ||
          "[object Proxy]" == e
        );
      }
      function tP(t) {
        return (
          "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
        );
      }
      function tT(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e);
      }
      function tC(t) {
        return null != t && "object" == typeof t;
      }
      var tE = A
        ? function (t) {
            return A(t);
          }
        : function (t) {
            return tC(t) && tP(t.length) && !!x[tc(t)];
          };
      function tR(t) {
        return tw(t)
          ? (function (t, e) {
              var r = tx(t),
                n = !r && tb(t),
                i = !r && !n && tk(t),
                o = !r && !n && !i && tE(t),
                a = r || n || i || o,
                s = a
                  ? (function (t, e) {
                      for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r);
                      return n;
                    })(t.length, String)
                  : [],
                l = s.length;
              for (var u in t)
                (e || B.call(t, u)) &&
                  !(
                    a &&
                    ("length" == u ||
                      (i && ("offset" == u || "parent" == u)) ||
                      (o &&
                        ("buffer" == u ||
                          "byteLength" == u ||
                          "byteOffset" == u)) ||
                      tp(u, l))
                  ) &&
                  s.push(u);
              return s;
            })(t, !0)
          : (function (t) {
              if (!tT(t))
                return (function (t) {
                  var e = [];
                  if (null != t) for (var r in Object(t)) e.push(r);
                  return e;
                })(t);
              var e = tm(t),
                r = [];
              for (var n in t)
                ("constructor" == n && (e || !B.call(t, n))) || r.push(n);
              return r;
            })(t);
      }
      var tA =
        ((h = function (t, e, r, n) {
          !(function t(e, r, n, i, o) {
            e !== r &&
              tu(
                r,
                function (a, s) {
                  if ((o || (o = new to()), tT(a)))
                    (function (t, e, r, n, i, o, a) {
                      var s = tv(t, r),
                        l = tv(e, r),
                        u = a.get(l);
                      if (u) {
                        ta(t, r, u);
                        return;
                      }
                      var c = o ? o(s, l, r + "", t, e, a) : void 0,
                        d = void 0 === c;
                      if (d) {
                        var h,
                          f,
                          p,
                          m = tx(l),
                          v = !m && tk(l),
                          y = !m && !v && tE(l);
                        (c = l),
                          m || v || y
                            ? tx(s)
                              ? (c = s)
                              : tC(s) && tw(s)
                              ? (c = (function (t, e) {
                                  var r = -1,
                                    n = t.length;
                                  for (e || (e = Array(n)); ++r < n; )
                                    e[r] = t[r];
                                  return e;
                                })(s))
                              : v
                              ? ((d = !1),
                                (c = (function (t, e) {
                                  if (e) return t.slice();
                                  var r = t.length,
                                    n = z ? z(r) : new t.constructor(r);
                                  return t.copy(n), n;
                                })(l, !0)))
                              : y
                              ? ((d = !1),
                                new N(
                                  (f = new (h = l.buffer).constructor(
                                    h.byteLength
                                  ))
                                ).set(new N(h)),
                                (p = f),
                                (c = new l.constructor(
                                  p,
                                  l.byteOffset,
                                  l.length
                                )))
                              : (c = [])
                            : (function (t) {
                                if (!tC(t) || tc(t) != g) return !1;
                                var e = U(t);
                                if (null === e) return !0;
                                var r =
                                  B.call(e, "constructor") && e.constructor;
                                return (
                                  "function" == typeof r &&
                                  r instanceof r &&
                                  D.call(r) == I
                                );
                              })(l) || tb(l)
                            ? ((c = s),
                              tb(s)
                                ? (c = (function (t, e, r, n) {
                                    var i = !r;
                                    r || (r = {});
                                    for (var o = -1, a = e.length; ++o < a; ) {
                                      var s = e[o],
                                        l = void 0;
                                      void 0 === l && (l = t[s]),
                                        i
                                          ? tl(r, s, l)
                                          : (function (t, e, r) {
                                              var n = t[e];
                                              (B.call(t, e) &&
                                                ty(n, r) &&
                                                (void 0 !== r || e in t)) ||
                                                tl(t, e, r);
                                            })(r, s, l);
                                    }
                                    return r;
                                  })(s, tR(s)))
                                : (!tT(s) || tS(s)) &&
                                  (c =
                                    "function" != typeof l.constructor || tm(l)
                                      ? {}
                                      : te(U(l))))
                            : (d = !1);
                      }
                      d && (a.set(l, c), i(c, l, n, o, a), a.delete(l)),
                        ta(t, r, c);
                    })(e, r, s, n, t, i, o);
                  else {
                    var l = i ? i(tv(e, s), a, s + "", e, r, o) : void 0;
                    void 0 === l && (l = a), ta(e, s, l);
                  }
                },
                tR
              );
          })(t, e, r, n);
        }),
        tg(
          ((a = f =
            function (t, e) {
              var r = -1,
                n = e.length,
                i = n > 1 ? e[n - 1] : void 0,
                o = n > 2 ? e[2] : void 0;
              for (
                i = h.length > 3 && "function" == typeof i ? (n--, i) : void 0,
                  o &&
                    (function (t, e, r) {
                      if (!tT(r)) return !1;
                      var n = typeof e;
                      return (
                        ("number" == n
                          ? !!(tw(r) && tp(e, r.length))
                          : "string" == n && (e in r)) && ty(r[e], t)
                      );
                    })(e[0], e[1], o) &&
                    ((i = n < 3 ? void 0 : i), (n = 1)),
                  t = Object(t);
                ++r < n;

              ) {
                var a = e[r];
                a && h(t, a, r, i);
              }
              return t;
            }),
          (s = void 0),
          (l = tj),
          (s = Z(void 0 === s ? a.length - 1 : s, 0)),
          function () {
            for (
              var t = arguments, e = -1, r = Z(t.length - s, 0), n = Array(r);
              ++e < r;

            )
              n[e] = t[s + e];
            e = -1;
            for (var i = Array(s + 1); ++e < s; ) i[e] = t[e];
            return (
              (i[s] = l(n)),
              (function (t, e, r) {
                switch (r.length) {
                  case 0:
                    return t.call(e);
                  case 1:
                    return t.call(e, r[0]);
                  case 2:
                    return t.call(e, r[0], r[1]);
                  case 3:
                    return t.call(e, r[0], r[1], r[2]);
                }
                return t.apply(e, r);
              })(a, this, i)
            );
          }),
          f + ""
        ));
      function tj(t) {
        return t;
      }
      t.exports = tA;
    },
    8727: function (t) {
      var e = "undefined" != typeof Element,
        r = "function" == typeof Map,
        n = "function" == typeof Set,
        i = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
      t.exports = function (t, o) {
        try {
          return (function t(o, a) {
            if (o === a) return !0;
            if (o && a && "object" == typeof o && "object" == typeof a) {
              var s, l, u, c;
              if (o.constructor !== a.constructor) return !1;
              if (Array.isArray(o)) {
                if ((s = o.length) != a.length) return !1;
                for (l = s; 0 != l--; ) if (!t(o[l], a[l])) return !1;
                return !0;
              }
              if (r && o instanceof Map && a instanceof Map) {
                if (o.size !== a.size) return !1;
                for (c = o.entries(); !(l = c.next()).done; )
                  if (!a.has(l.value[0])) return !1;
                for (c = o.entries(); !(l = c.next()).done; )
                  if (!t(l.value[1], a.get(l.value[0]))) return !1;
                return !0;
              }
              if (n && o instanceof Set && a instanceof Set) {
                if (o.size !== a.size) return !1;
                for (c = o.entries(); !(l = c.next()).done; )
                  if (!a.has(l.value[0])) return !1;
                return !0;
              }
              if (i && ArrayBuffer.isView(o) && ArrayBuffer.isView(a)) {
                if ((s = o.length) != a.length) return !1;
                for (l = s; 0 != l--; ) if (o[l] !== a[l]) return !1;
                return !0;
              }
              if (o.constructor === RegExp)
                return o.source === a.source && o.flags === a.flags;
              if (
                o.valueOf !== Object.prototype.valueOf &&
                "function" == typeof o.valueOf &&
                "function" == typeof a.valueOf
              )
                return o.valueOf() === a.valueOf();
              if (
                o.toString !== Object.prototype.toString &&
                "function" == typeof o.toString &&
                "function" == typeof a.toString
              )
                return o.toString() === a.toString();
              if ((s = (u = Object.keys(o)).length) !== Object.keys(a).length)
                return !1;
              for (l = s; 0 != l--; )
                if (!Object.prototype.hasOwnProperty.call(a, u[l])) return !1;
              if (e && o instanceof Element) return !1;
              for (l = s; 0 != l--; )
                if (
                  (("_owner" !== u[l] && "__v" !== u[l] && "__o" !== u[l]) ||
                    !o.$$typeof) &&
                  !t(o[u[l]], a[u[l]])
                )
                  return !1;
              return !0;
            }
            return o != o && a != a;
          })(t, o);
        } catch (t) {
          if ((t.message || "").match(/stack|recursion/i))
            return (
              console.warn("react-fast-compare cannot handle circular refs"), !1
            );
          throw t;
        }
      };
    },
    13126: function (t, e) {
      "use strict";
      var r = "function" == typeof Symbol && Symbol.for,
        n = r ? Symbol.for("react.element") : 60103,
        i = r ? Symbol.for("react.portal") : 60106,
        o = r ? Symbol.for("react.fragment") : 60107,
        a = r ? Symbol.for("react.strict_mode") : 60108,
        s = r ? Symbol.for("react.profiler") : 60114,
        l = r ? Symbol.for("react.provider") : 60109,
        u = r ? Symbol.for("react.context") : 60110,
        c = r ? Symbol.for("react.async_mode") : 60111,
        d = r ? Symbol.for("react.concurrent_mode") : 60111,
        h = r ? Symbol.for("react.forward_ref") : 60112,
        f = r ? Symbol.for("react.suspense") : 60113,
        p = r ? Symbol.for("react.suspense_list") : 60120,
        m = r ? Symbol.for("react.memo") : 60115,
        v = r ? Symbol.for("react.lazy") : 60116,
        g = r ? Symbol.for("react.block") : 60121,
        y = r ? Symbol.for("react.fundamental") : 60117,
        b = r ? Symbol.for("react.responder") : 60118,
        x = r ? Symbol.for("react.scope") : 60119;
      function w(t) {
        if ("object" == typeof t && null !== t) {
          var e = t.$$typeof;
          switch (e) {
            case n:
              switch ((t = t.type)) {
                case c:
                case d:
                case o:
                case s:
                case a:
                case f:
                  return t;
                default:
                  switch ((t = t && t.$$typeof)) {
                    case u:
                    case h:
                    case v:
                    case m:
                    case l:
                      return t;
                    default:
                      return e;
                  }
              }
            case i:
              return e;
          }
        }
      }
      function k(t) {
        return w(t) === d;
      }
      (e.AsyncMode = c),
        (e.ConcurrentMode = d),
        (e.ContextConsumer = u),
        (e.ContextProvider = l),
        (e.Element = n),
        (e.ForwardRef = h),
        (e.Fragment = o),
        (e.Lazy = v),
        (e.Memo = m),
        (e.Portal = i),
        (e.Profiler = s),
        (e.StrictMode = a),
        (e.Suspense = f),
        (e.isAsyncMode = function (t) {
          return k(t) || w(t) === c;
        }),
        (e.isConcurrentMode = k),
        (e.isContextConsumer = function (t) {
          return w(t) === u;
        }),
        (e.isContextProvider = function (t) {
          return w(t) === l;
        }),
        (e.isElement = function (t) {
          return "object" == typeof t && null !== t && t.$$typeof === n;
        }),
        (e.isForwardRef = function (t) {
          return w(t) === h;
        }),
        (e.isFragment = function (t) {
          return w(t) === o;
        }),
        (e.isLazy = function (t) {
          return w(t) === v;
        }),
        (e.isMemo = function (t) {
          return w(t) === m;
        }),
        (e.isPortal = function (t) {
          return w(t) === i;
        }),
        (e.isProfiler = function (t) {
          return w(t) === s;
        }),
        (e.isStrictMode = function (t) {
          return w(t) === a;
        }),
        (e.isSuspense = function (t) {
          return w(t) === f;
        }),
        (e.isValidElementType = function (t) {
          return (
            "string" == typeof t ||
            "function" == typeof t ||
            t === o ||
            t === d ||
            t === s ||
            t === a ||
            t === f ||
            t === p ||
            ("object" == typeof t &&
              null !== t &&
              (t.$$typeof === v ||
                t.$$typeof === m ||
                t.$$typeof === l ||
                t.$$typeof === u ||
                t.$$typeof === h ||
                t.$$typeof === y ||
                t.$$typeof === b ||
                t.$$typeof === x ||
                t.$$typeof === g))
          );
        }),
        (e.typeOf = w);
    },
    82558: function (t, e, r) {
      "use strict";
      t.exports = r(13126);
    },
    1119: function (t, e, r) {
      "use strict";
      function n() {
        return (n = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  ({}.hasOwnProperty.call(r, n) && (t[n] = r[n]));
              }
              return t;
            }).apply(null, arguments);
      }
      r.d(e, {
        Z: function () {
          return n;
        },
      });
    },
    50096: function (t, e, r) {
      "use strict";
      r.d(e, {
        useAnimationState: function () {
          return a;
        },
      });
      var n = r(64687),
        i = r(2265),
        o = r(50591);
      function a(t) {
        let { isOpen: e, ref: r } = t,
          [a, s] = (0, i.useState)(e),
          [l, u] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            l || (s(e), u(!0));
          }, [e, l, a]),
          (0, o.useEventListener)(
            () => r.current,
            "animationend",
            () => {
              s(e);
            }
          ),
          {
            present: !(!e && !a),
            onComplete() {
              var t;
              let e = new ((0, n.kR)(r.current).CustomEvent)("animationend", {
                bubbles: !0,
              });
              null === (t = r.current) || void 0 === t || t.dispatchEvent(e);
            },
          }
        );
      }
    },
    55996: function (t, e, r) {
      "use strict";
      r.d(e, {
        useCallbackRef: function () {
          return i;
        },
      });
      var n = r(2265);
      function i(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          r = (0, n.useRef)(t);
        return (
          (0, n.useEffect)(() => {
            r.current = t;
          }),
          (0, n.useCallback)(function () {
            for (var t, e = arguments.length, n = Array(e), i = 0; i < e; i++)
              n[i] = arguments[i];
            return null === (t = r.current) || void 0 === t
              ? void 0
              : t.call(r, ...n);
          }, e)
        );
      }
    },
    31718: function (t, e, r) {
      "use strict";
      r.d(e, {
        useDisclosure: function () {
          return o;
        },
      });
      var n = r(55996),
        i = r(2265);
      function o() {
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { onClose: e, onOpen: r, isOpen: o, id: a } = t,
          s = (0, n.useCallbackRef)(r),
          l = (0, n.useCallbackRef)(e),
          [u, c] = (0, i.useState)(t.defaultIsOpen || !1),
          d = void 0 !== o ? o : u,
          h = void 0 !== o,
          f = (0, i.useId)(),
          p = null != a ? a : "disclosure-".concat(f),
          m = (0, i.useCallback)(() => {
            h || c(!1), null == l || l();
          }, [h, l]),
          v = (0, i.useCallback)(() => {
            h || c(!0), null == s || s();
          }, [h, s]),
          g = (0, i.useCallback)(() => {
            d ? m() : v();
          }, [d, v, m]);
        return {
          isOpen: d,
          onOpen: v,
          onClose: m,
          onToggle: g,
          isControlled: h,
          getButtonProps: function () {
            let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            return {
              ...t,
              "aria-expanded": d,
              "aria-controls": p,
              onClick(e) {
                var r;
                null === (r = t.onClick) || void 0 === r || r.call(t, e), g();
              },
            };
          },
          getDisclosureProps: function () {
            let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            return { ...t, hidden: !d, id: p };
          },
        };
      }
    },
    50591: function (t, e, r) {
      "use strict";
      r.d(e, {
        useEventListener: function () {
          return o;
        },
      });
      var n = r(2265),
        i = r(55996);
      function o(t, e, r, o) {
        let a = (0, i.useCallbackRef)(r);
        return (
          (0, n.useEffect)(() => {
            let n = "function" == typeof t ? t() : null != t ? t : document;
            if (r && n)
              return (
                n.addEventListener(e, a, o),
                () => {
                  n.removeEventListener(e, a, o);
                }
              );
          }, [e, t, o, a, r]),
          () => {
            let r = "function" == typeof t ? t() : null != t ? t : document;
            null == r || r.removeEventListener(e, a, o);
          }
        );
      }
    },
    62068: function (t, e, r) {
      "use strict";
      r.d(e, {
        useFocusOnHide: function () {
          return c;
        },
        useFocusOnShow: function () {
          return h;
        },
      });
      var n = r(64687),
        i = r(99322),
        o = r(79795),
        a = r(2265),
        s = r(50591),
        l = r(1879),
        u = r(66890);
      function c(t, e) {
        let { shouldFocus: r, visible: o, focusRef: a } = e,
          s = r && !o;
        (0, u.useUpdateEffect)(() => {
          let e;
          if (
            !s ||
            (function (t) {
              let e = t.current;
              if (!e) return !1;
              let r = (0, n.vY)(e);
              return !(!r || e.contains(r)) && !!(0, i.Wq)(r);
            })(t)
          )
            return;
          let r = (null == a ? void 0 : a.current) || t.current;
          if (r)
            return (
              (e = requestAnimationFrame(() => {
                r.focus({ preventScroll: !0 });
              })),
              () => {
                cancelAnimationFrame(e);
              }
            );
        }, [s, t, a]);
      }
      let d = { preventScroll: !0, shouldFocus: !1 };
      function h(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d,
          { focusRef: r, preventScroll: n, shouldFocus: i, visible: c } = e,
          h = "current" in t ? t.current : t,
          f = i && c,
          p = (0, a.useRef)(f),
          m = (0, a.useRef)(c);
        (0, l.useSafeLayoutEffect)(() => {
          !m.current && c && (p.current = f), (m.current = c);
        }, [c, f]);
        let v = (0, a.useCallback)(() => {
          if (
            c &&
            h &&
            p.current &&
            ((p.current = !1), !h.contains(document.activeElement))
          ) {
            if (null == r ? void 0 : r.current)
              requestAnimationFrame(() => {
                var t;
                null === (t = r.current) ||
                  void 0 === t ||
                  t.focus({ preventScroll: n });
              });
            else {
              let t = (0, o.t5)(h);
              t.length > 0 &&
                requestAnimationFrame(() => {
                  t[0].focus({ preventScroll: n });
                });
            }
          }
        }, [c, n, h, r]);
        (0, u.useUpdateEffect)(() => {
          v();
        }, [v]),
          (0, s.useEventListener)(h, "transitionend", v);
      }
    },
    59747: function (t, e, r) {
      "use strict";
      r.d(e, {
        useFocusOnPointerDown: function () {
          return u;
        },
      });
      var n = r(50591);
      let i = () => "undefined" != typeof window,
        o = (t) => i() && t.test(navigator.vendor),
        a = (t) =>
          i() &&
          t.test(
            (function () {
              var t;
              let e = navigator.userAgentData;
              return null !== (t = null == e ? void 0 : e.platform) &&
                void 0 !== t
                ? t
                : navigator.platform;
            })()
          ),
        s = () => a(/mac|iphone|ipad|ipod/i),
        l = () => s() && o(/apple/i);
      function u(t) {
        let { ref: e, elements: r, enabled: i } = t,
          o = () => {
            var t, r;
            return null !==
              (r =
                null === (t = e.current) || void 0 === t
                  ? void 0
                  : t.ownerDocument) && void 0 !== r
              ? r
              : document;
          };
        (0, n.useEventListener)(o, "pointerdown", (t) => {
          var n, a, s;
          if (!l() || !i) return;
          let u =
              null !==
                (s =
                  null === (a = t.composedPath) || void 0 === a
                    ? void 0
                    : null === (n = a.call(t)) || void 0 === n
                    ? void 0
                    : n[0]) && void 0 !== s
                ? s
                : t.target,
            c = (null != r ? r : [e]).some((t) => {
              let e = "current" in t ? t.current : t;
              return (null == e ? void 0 : e.contains(u)) || e === u;
            });
          o().activeElement !== u && c && (t.preventDefault(), u.focus());
        });
      }
    },
    47400: function (t, e, r) {
      "use strict";
      r.d(e, {
        mergeRefs: function () {
          return i;
        },
        useMergeRefs: function () {
          return o;
        },
      });
      var n = r(2265);
      function i() {
        for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        return (t) => {
          e.forEach((e) => {
            !(function (t, e) {
              if (null != t) {
                if ("function" == typeof t) {
                  t(e);
                  return;
                }
                try {
                  t.current = e;
                } catch (r) {
                  throw Error(
                    "Cannot assign value '"
                      .concat(e, "' to ref '")
                      .concat(t, "'")
                  );
                }
              }
            })(e, t);
          });
        };
      }
      function o() {
        for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        return (0, n.useMemo)(() => i(...e), e);
      }
    },
    80876: function (t, e, r) {
      "use strict";
      r.d(e, {
        useOutsideClick: function () {
          return o;
        },
      });
      var n = r(2265),
        i = r(55996);
      function o(t) {
        let { ref: e, handler: r, enabled: o = !0 } = t,
          l = (0, i.useCallbackRef)(r),
          u = (0, n.useRef)({
            isPointerDown: !1,
            ignoreEmulatedMouseEvents: !1,
          }).current;
        (0, n.useEffect)(() => {
          if (!o) return;
          let t = (t) => {
              a(t, e) && (u.isPointerDown = !0);
            },
            n = (t) => {
              if (u.ignoreEmulatedMouseEvents) {
                u.ignoreEmulatedMouseEvents = !1;
                return;
              }
              u.isPointerDown && r && a(t, e) && ((u.isPointerDown = !1), l(t));
            },
            i = (t) => {
              (u.ignoreEmulatedMouseEvents = !0),
                r &&
                  u.isPointerDown &&
                  a(t, e) &&
                  ((u.isPointerDown = !1), l(t));
            },
            c = s(e.current);
          return (
            c.addEventListener("mousedown", t, !0),
            c.addEventListener("mouseup", n, !0),
            c.addEventListener("touchstart", t, !0),
            c.addEventListener("touchend", i, !0),
            () => {
              c.removeEventListener("mousedown", t, !0),
                c.removeEventListener("mouseup", n, !0),
                c.removeEventListener("touchstart", t, !0),
                c.removeEventListener("touchend", i, !0);
            }
          );
        }, [r, e, l, u, o]);
      }
      function a(t, e) {
        var r, n, i;
        let o =
          null !==
            (i =
              null === (r = t.composedPath) || void 0 === r
                ? void 0
                : r.call(t)[0]) && void 0 !== i
            ? i
            : t.target;
        return (
          (!o || !!s(o).contains(o)) &&
          !(null === (n = e.current) || void 0 === n ? void 0 : n.contains(o))
        );
      }
      function s(t) {
        var e;
        return null !== (e = null == t ? void 0 : t.ownerDocument) &&
          void 0 !== e
          ? e
          : document;
      }
    },
    1879: function (t, e, r) {
      "use strict";
      r.d(e, {
        useSafeLayoutEffect: function () {
          return o;
        },
      });
      var n,
        i = r(2265);
      let o = (null === (n = globalThis) || void 0 === n ? void 0 : n.document)
        ? i.useLayoutEffect
        : i.useEffect;
    },
    66890: function (t, e, r) {
      "use strict";
      r.d(e, {
        useUpdateEffect: function () {
          return i;
        },
      });
      var n = r(2265);
      let i = (t, e) => {
        let r = (0, n.useRef)(!1),
          i = (0, n.useRef)(!1);
        (0, n.useEffect)(() => {
          if (r.current && i.current) return t();
          i.current = !0;
        }, e),
          (0, n.useEffect)(
            () => (
              (r.current = !0),
              () => {
                r.current = !1;
              }
            ),
            []
          );
      };
    },
    21183: function (t, e, r) {
      "use strict";
      r.d(e, {
        Box: function () {
          return n;
        },
      });
      let n = (0, r(81284).chakra)("div");
      n.displayName = "Box";
    },
    45796: function (t, e, r) {
      "use strict";
      r.d(e, {
        D: function () {
          return n;
        },
        useButtonGroup: function () {
          return i;
        },
      });
      let [n, i] = (0, r(34008).createContext)({
        strict: !1,
        name: "ButtonGroupContext",
      });
    },
    57833: function (t, e, r) {
      "use strict";
      r.d(e, {
        ButtonSpinner: function () {
          return u;
        },
      });
      var n = r(57437),
        i = r(39572),
        o = r(24377),
        a = r(2265),
        s = r(72940),
        l = r(81284);
      function u(t) {
        let {
            label: e,
            placement: r,
            spacing: u = "0.5rem",
            children: c = (0, n.jsx)(s.Spinner, {
              color: "currentColor",
              width: "1em",
              height: "1em",
            }),
            className: d,
            __css: h,
            ...f
          } = t,
          p = (0, o.cx)("chakra-button__spinner", d),
          m = "start" === r ? "marginEnd" : "marginStart",
          v = (0, a.useMemo)(
            () =>
              (0, i.k0)({
                display: "flex",
                alignItems: "center",
                position: e ? "relative" : "absolute",
                [m]: e ? u : 0,
                fontSize: "1em",
                lineHeight: "normal",
                ...h,
              }),
            [h, e, m, u]
          );
        return (0, n.jsx)(l.chakra.div, {
          className: p,
          ...f,
          __css: v,
          children: c,
        });
      }
      u.displayName = "ButtonSpinner";
    },
    26440: function (t, e, r) {
      "use strict";
      r.d(e, {
        Button: function () {
          return m;
        },
      });
      var n = r(57437),
        i = r(47400),
        o = r(22223),
        a = r(97291),
        s = r(24377),
        l = r(2265),
        u = r(45796),
        c = r(81284);
      function d(t) {
        let { children: e, className: r, ...i } = t,
          o = (0, l.isValidElement)(e)
            ? (0, l.cloneElement)(e, { "aria-hidden": !0, focusable: !1 })
            : e,
          a = (0, s.cx)("chakra-button__icon", r);
        return (0, n.jsx)(c.chakra.span, {
          display: "inline-flex",
          alignSelf: "center",
          flexShrink: 0,
          ...i,
          className: a,
          children: o,
        });
      }
      d.displayName = "ButtonIcon";
      var h = r(57833),
        f = r(44109),
        p = r(11535);
      let m = (0, f.forwardRef)((t, e) => {
        let r = (0, u.useButtonGroup)(),
          d = (0, p.useStyleConfig)("Button", { ...r, ...t }),
          {
            isDisabled: f = null == r ? void 0 : r.isDisabled,
            isLoading: m,
            isActive: g,
            children: y,
            leftIcon: b,
            rightIcon: x,
            loadingText: w,
            iconSpacing: k = "0.5rem",
            type: S,
            spinner: P,
            spinnerPlacement: T = "start",
            className: C,
            as: E,
            shouldWrapChildren: R,
            ...A
          } = (0, o.L)(t),
          j = (0, l.useMemo)(() => {
            let t = { ...(null == d ? void 0 : d._focus), zIndex: 1 };
            return {
              display: "inline-flex",
              appearance: "none",
              alignItems: "center",
              justifyContent: "center",
              userSelect: "none",
              position: "relative",
              whiteSpace: "nowrap",
              verticalAlign: "middle",
              outline: "none",
              ...d,
              ...(!!r && { _focus: t }),
            };
          }, [d, r]),
          { ref: _, type: O } = (function (t) {
            let [e, r] = (0, l.useState)(!t);
            return {
              ref: (0, l.useCallback)((t) => {
                t && r("BUTTON" === t.tagName);
              }, []),
              type: e ? "button" : void 0,
            };
          })(E),
          M = {
            rightIcon: x,
            leftIcon: b,
            iconSpacing: k,
            children: y,
            shouldWrapChildren: R,
          };
        return (0, n.jsxs)(c.chakra.button, {
          disabled: f || m,
          ref: (0, i.useMergeRefs)(e, _),
          as: E,
          type: null != S ? S : O,
          "data-active": (0, a.P)(g),
          "data-loading": (0, a.P)(m),
          __css: j,
          className: (0, s.cx)("chakra-button", C),
          ...A,
          children: [
            m &&
              "start" === T &&
              (0, n.jsx)(h.ButtonSpinner, {
                className: "chakra-button__spinner--start",
                label: w,
                placement: "start",
                spacing: k,
                children: P,
              }),
            m
              ? w ||
                (0, n.jsx)(c.chakra.span, {
                  opacity: 0,
                  children: (0, n.jsx)(v, { ...M }),
                })
              : (0, n.jsx)(v, { ...M }),
            m &&
              "end" === T &&
              (0, n.jsx)(h.ButtonSpinner, {
                className: "chakra-button__spinner--end",
                label: w,
                placement: "end",
                spacing: k,
                children: P,
              }),
          ],
        });
      });
      function v(t) {
        let {
          leftIcon: e,
          rightIcon: r,
          children: i,
          iconSpacing: o,
          shouldWrapChildren: a,
        } = t;
        return a
          ? (0, n.jsxs)("span", {
              style: { display: "contents" },
              children: [
                e && (0, n.jsx)(d, { marginEnd: o, children: e }),
                i,
                r && (0, n.jsx)(d, { marginStart: o, children: r }),
              ],
            })
          : (0, n.jsxs)(n.Fragment, {
              children: [
                e && (0, n.jsx)(d, { marginEnd: o, children: e }),
                i,
                r && (0, n.jsx)(d, { marginStart: o, children: r }),
              ],
            });
      }
      m.displayName = "Button";
    },
    98559: function (t, e, r) {
      "use strict";
      r.d(e, {
        IconButton: function () {
          return a;
        },
      });
      var n = r(57437),
        i = r(2265),
        o = r(26440);
      let a = (0, r(44109).forwardRef)((t, e) => {
        let { icon: r, children: a, isRound: s, "aria-label": l, ...u } = t,
          c = r || a,
          d = (0, i.isValidElement)(c)
            ? (0, i.cloneElement)(c, { "aria-hidden": !0, focusable: !1 })
            : null;
        return (0, n.jsx)(o.Button, {
          px: "0",
          py: "0",
          borderRadius: s ? "full" : void 0,
          ref: e,
          "aria-label": l,
          ...u,
          children: d,
        });
      });
      a.displayName = "IconButton";
    },
    88530: function (t, e, r) {
      "use strict";
      r.d(e, {
        CloseButton: function () {
          return c;
        },
      });
      var n = r(57437),
        i = r(22223),
        o = r(25112),
        a = r(44109),
        s = r(11535),
        l = r(81284);
      function u(t) {
        return (0, n.jsx)(o.Icon, {
          focusable: "false",
          "aria-hidden": !0,
          ...t,
          children: (0, n.jsx)("path", {
            fill: "currentColor",
            d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z",
          }),
        });
      }
      let c = (0, a.forwardRef)(function (t, e) {
        let r = (0, s.useStyleConfig)("CloseButton", t),
          { children: o, isDisabled: a, __css: c, ...d } = (0, i.L)(t);
        return (0,
        n.jsx)(l.chakra.button, { type: "button", "aria-label": "Close", ref: e, disabled: a, __css: { outline: 0, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, ...r, ...c }, ...d, children: o || (0, n.jsx)(u, { width: "1em", height: "1em" }) });
      });
      c.displayName = "CloseButton";
    },
    7161: function (t, e, r) {
      "use strict";
      r.d(e, {
        ColorModeContext: function () {
          return i;
        },
        useColorMode: function () {
          return o;
        },
        useColorModeValue: function () {
          return a;
        },
      });
      var n = r(2265);
      let i = (0, n.createContext)({});
      function o() {
        let t = (0, n.useContext)(i);
        if (void 0 === t)
          throw Error("useColorMode must be used within a ColorModeProvider");
        return t;
      }
      function a(t, e) {
        let { colorMode: r } = o();
        return "dark" === r ? e : t;
      }
      i.displayName = "ColorModeContext";
    },
    98314: function (t, e, r) {
      "use strict";
      r.d(e, {
        Flex: function () {
          return a;
        },
      });
      var n = r(57437),
        i = r(44109),
        o = r(81284);
      let a = (0, i.forwardRef)(function (t, e) {
        let {
          direction: r,
          align: i,
          justify: a,
          wrap: s,
          basis: l,
          grow: u,
          shrink: c,
          ...d
        } = t;
        return (0,
        n.jsx)(o.chakra.div, { ref: e, __css: { display: "flex", flexDirection: r, alignItems: i, justifyContent: a, flexWrap: s, flexBasis: l, flexGrow: u, flexShrink: c }, ...d });
      });
      a.displayName = "Flex";
    },
    92422: function (t, e, r) {
      "use strict";
      r.d(e, {
        createIcon: function () {
          return s;
        },
      });
      var n = r(57437),
        i = r(2265),
        o = r(25112),
        a = r(44109);
      function s(t) {
        let {
            viewBox: e = "0 0 24 24",
            d: r,
            displayName: s,
            defaultProps: l = {},
          } = t,
          u = i.Children.toArray(t.path),
          c = (0, a.forwardRef)((t, i) =>
            (0, n.jsx)(o.Icon, {
              ref: i,
              viewBox: e,
              ...l,
              ...t,
              children: u.length
                ? u
                : (0, n.jsx)("path", { fill: "currentColor", d: r }),
            })
          );
        return (c.displayName = s), c;
      }
    },
    25112: function (t, e, r) {
      "use strict";
      r.d(e, {
        Icon: function () {
          return u;
        },
      });
      var n = r(57437),
        i = r(24377),
        o = r(44109),
        a = r(11535),
        s = r(81284);
      let l = {
          path: (0, n.jsxs)("g", {
            stroke: "currentColor",
            strokeWidth: "1.5",
            children: [
              (0, n.jsx)("path", {
                strokeLinecap: "round",
                fill: "none",
                d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25",
              }),
              (0, n.jsx)("path", {
                fill: "currentColor",
                strokeLinecap: "round",
                d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0",
              }),
              (0, n.jsx)("circle", {
                fill: "none",
                strokeMiterlimit: "10",
                cx: "12",
                cy: "12",
                r: "11.25",
              }),
            ],
          }),
          viewBox: "0 0 24 24",
        },
        u = (0, o.forwardRef)((t, e) => {
          let {
              as: r,
              viewBox: o,
              color: u = "currentColor",
              focusable: c = !1,
              children: d,
              className: h,
              __css: f,
              ...p
            } = t,
            m = (0, i.cx)("chakra-icon", h),
            v = (0, a.useStyleConfig)("Icon", t),
            g = {
              ref: e,
              focusable: c,
              className: m,
              __css: {
                w: "1em",
                h: "1em",
                display: "inline-block",
                lineHeight: "1em",
                flexShrink: 0,
                color: u,
                ...f,
                ...v,
              },
            },
            y = null != o ? o : l.viewBox;
          if (r && "string" != typeof r)
            return (0, n.jsx)(s.chakra.svg, { as: r, ...g, ...p });
          let b = null != d ? d : l.path;
          return (0, n.jsx)(s.chakra.svg, {
            verticalAlign: "middle",
            viewBox: y,
            ...g,
            ...p,
            children: b,
          });
        });
      u.displayName = "Icon";
    },
    49611: function (t, e, r) {
      "use strict";
      r.d(e, {
        Image: function () {
          return u;
        },
      });
      var n = r(57437),
        i = r(10635),
        o = r(58230),
        a = r(52925),
        s = r(44109),
        l = r(81284);
      let u = (0, s.forwardRef)(function (t, e) {
        let {
            fallbackSrc: r,
            fallback: s,
            src: u,
            srcSet: c,
            align: d,
            fit: h,
            loading: f,
            ignoreFallback: p,
            crossOrigin: m,
            fallbackStrategy: v = "beforeLoadOrError",
            referrerPolicy: g,
            ...y
          } = t,
          b = void 0 !== r || void 0 !== s,
          x = null != f || p || !b,
          w = (0, a.useImage)({ ...t, crossOrigin: m, ignoreFallback: x }),
          k = (0, a.z)(w, v),
          S = {
            ref: e,
            objectFit: h,
            objectPosition: d,
            ...(x ? y : (0, i.C)(y, ["onError", "onLoad"])),
          };
        return k
          ? s ||
              (0, n.jsx)(l.chakra.img, {
                as: o.Z,
                className: "chakra-image__placeholder",
                src: r,
                ...S,
              })
          : (0, n.jsx)(l.chakra.img, {
              as: o.Z,
              src: u,
              srcSet: c,
              crossOrigin: m,
              loading: f,
              referrerPolicy: g,
              className: "chakra-image",
              ...S,
            });
      });
      u.displayName = "Image";
    },
    58230: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return i;
        },
      });
      var n = r(57437);
      let i = (0, r(44109).forwardRef)(function (t, e) {
        let { htmlWidth: r, htmlHeight: i, alt: o, ...a } = t;
        return (0, n.jsx)("img", { width: r, height: i, ref: e, alt: o, ...a });
      });
      i.displayName = "NativeImage";
    },
    52925: function (t, e, r) {
      "use strict";
      r.d(e, {
        useImage: function () {
          return o;
        },
        z: function () {
          return a;
        },
      });
      var n = r(1879),
        i = r(2265);
      function o(t) {
        let {
            loading: e,
            src: r,
            srcSet: o,
            onLoad: a,
            onError: s,
            crossOrigin: l,
            sizes: u,
            ignoreFallback: c,
          } = t,
          [d, h] = (0, i.useState)("pending");
        (0, i.useEffect)(() => {
          h(r ? "loading" : "pending");
        }, [r]);
        let f = (0, i.useRef)(),
          p = (0, i.useCallback)(() => {
            if (!r) return;
            m();
            let t = new Image();
            (t.src = r),
              l && (t.crossOrigin = l),
              o && (t.srcset = o),
              u && (t.sizes = u),
              e && (t.loading = e),
              (t.onload = (t) => {
                m(), h("loaded"), null == a || a(t);
              }),
              (t.onerror = (t) => {
                m(), h("failed"), null == s || s(t);
              }),
              (f.current = t);
          }, [r, l, o, u, a, s, e]),
          m = () => {
            f.current &&
              ((f.current.onload = null),
              (f.current.onerror = null),
              (f.current = null));
          };
        return (
          (0, n.useSafeLayoutEffect)(() => {
            if (!c)
              return (
                "loading" === d && p(),
                () => {
                  m();
                }
              );
          }, [d, p, c]),
          c ? "loaded" : d
        );
      }
      let a = (t, e) =>
        ("loaded" !== t && "beforeLoadOrError" === e) ||
        ("failed" === t && "onError" === e);
    },
    66602: function (t, e, r) {
      "use strict";
      r.d(e, {
        Link: function () {
          return u;
        },
      });
      var n = r(57437),
        i = r(22223),
        o = r(24377),
        a = r(44109),
        s = r(11535),
        l = r(81284);
      let u = (0, a.forwardRef)(function (t, e) {
        let r = (0, s.useStyleConfig)("Link", t),
          { className: a, isExternal: u, ...c } = (0, i.L)(t);
        return (0,
        n.jsx)(l.chakra.a, { target: u ? "_blank" : void 0, rel: u ? "noopener" : void 0, ref: e, className: (0, o.cx)("chakra-link", a), ...c, __css: r });
      });
      u.displayName = "Link";
    },
    7227: function (t, e, r) {
      "use strict";
      r.d(e, {
        List: function () {
          return f;
        },
        ListIcon: function () {
          return g;
        },
        ListItem: function () {
          return v;
        },
        OrderedList: function () {
          return p;
        },
        UnorderedList: function () {
          return m;
        },
        useListStyles: function () {
          return h;
        },
      });
      var n = r(57437),
        i = r(22223),
        o = r(34008),
        a = r(97124),
        s = r(25112),
        l = r(44109),
        u = r(11535),
        c = r(81284);
      let [d, h] = (0, o.createContext)({
          name: "ListStylesContext",
          errorMessage:
            "useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" ",
        }),
        f = (0, l.forwardRef)(function (t, e) {
          let r = (0, u.useMultiStyleConfig)("List", t),
            {
              children: o,
              styleType: s = "none",
              stylePosition: l,
              spacing: h,
              ...f
            } = (0, i.L)(t),
            p = (0, a.W)(o);
          return (0,
          n.jsx)(d, { value: r, children: (0, n.jsx)(c.chakra.ul, { ref: e, listStyleType: s, listStylePosition: l, role: "list", __css: { ...r.container, ...(h ? { "& > *:not(style) ~ *:not(style)": { mt: h } } : {}) }, ...f, children: p }) });
        });
      f.displayName = "List";
      let p = (0, l.forwardRef)((t, e) => {
        let { as: r, ...i } = t;
        return (0, n.jsx)(f, {
          ref: e,
          as: "ol",
          styleType: "decimal",
          marginStart: "1em",
          ...i,
        });
      });
      p.displayName = "OrderedList";
      let m = (0, l.forwardRef)(function (t, e) {
        let { as: r, ...i } = t;
        return (0,
        n.jsx)(f, { ref: e, as: "ul", styleType: "initial", marginStart: "1em", ...i });
      });
      m.displayName = "UnorderedList";
      let v = (0, l.forwardRef)(function (t, e) {
        let r = h();
        return (0, n.jsx)(c.chakra.li, { ref: e, ...t, __css: r.item });
      });
      v.displayName = "ListItem";
      let g = (0, l.forwardRef)(function (t, e) {
        let r = h();
        return (0,
        n.jsx)(s.Icon, { ref: e, role: "presentation", ...t, __css: r.icon });
      });
      g.displayName = "ListIcon";
    },
    94483: function (t, e, r) {
      "use strict";
      r.d(e, {
        PopoverArrow: function () {
          return l;
        },
      });
      var n = r(57437),
        i = r(24377),
        o = r(18926),
        a = r(81284);
      let s = (t, e) =>
        e ? "".concat(t, ".").concat(e, ", ").concat(e) : void 0;
      function l(t) {
        var e;
        let {
            bg: r,
            bgColor: l,
            backgroundColor: u,
            shadow: c,
            boxShadow: d,
            shadowColor: h,
            ...f
          } = t,
          { getArrowProps: p, getArrowInnerProps: m } = (0,
          o.usePopoverContext)(),
          v = (0, o.usePopoverStyles)(),
          g = null !== (e = null != r ? r : l) && void 0 !== e ? e : u;
        return (0, n.jsx)(a.chakra.div, {
          ...p(),
          className: "chakra-popover__arrow-positioner",
          children: (0, n.jsx)(a.chakra.div, {
            className: (0, i.cx)("chakra-popover__arrow", t.className),
            ...m(f),
            __css: {
              "--popper-arrow-shadow-color": s("colors", h),
              "--popper-arrow-bg": s("colors", g),
              "--popper-arrow-shadow": s("shadows", null != c ? c : d),
              ...v.arrow,
            },
          }),
        });
      }
      l.displayName = "PopoverArrow";
    },
    88089: function (t, e, r) {
      "use strict";
      r.d(e, {
        PopoverBody: function () {
          return l;
        },
      });
      var n = r(57437),
        i = r(24377),
        o = r(18926),
        a = r(44109),
        s = r(81284);
      let l = (0, a.forwardRef)(function (t, e) {
        let { getBodyProps: r } = (0, o.usePopoverContext)(),
          a = (0, o.usePopoverStyles)();
        return (0,
        n.jsx)(s.chakra.div, { ...r(t, e), className: (0, i.cx)("chakra-popover__body", t.className), __css: a.body });
      });
      l.displayName = "PopoverBody";
    },
    86508: function (t, e, r) {
      "use strict";
      r.d(e, {
        PopoverCloseButton: function () {
          return s;
        },
      });
      var n = r(57437),
        i = r(24377),
        o = r(18926),
        a = r(88530);
      let s = (0, r(44109).forwardRef)(function (t, e) {
        let { onClose: r } = (0, o.usePopoverContext)(),
          s = (0, o.usePopoverStyles)();
        return (0,
        n.jsx)(a.CloseButton, { size: "sm", onClick: r, className: (0, i.cx)("chakra-popover__close-btn", t.className), __css: s.closeButton, ref: e, ...t });
      });
      s.displayName = "PopoverCloseButton";
    },
    30551: function (t, e, r) {
      "use strict";
      r.d(e, {
        PopoverContent: function () {
          return p;
        },
      });
      var n = r(57437),
        i = r(39572),
        o = r(25316),
        a = r(24377),
        s = r(18926),
        l = r(3462),
        u = r(81284),
        c = r(44109);
      let d = {
          exit: {
            opacity: 0,
            scale: 0.95,
            transition: { duration: 0.1, ease: [0.4, 0, 1, 1] },
          },
          enter: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.15, ease: [0, 0, 0.2, 1] },
          },
        },
        h = (0, u.chakra)(l.E.section),
        f = (0, c.forwardRef)(function (t, e) {
          let { variants: r = d, ...i } = t,
            { isOpen: o } = (0, s.usePopoverContext)();
          return (0, n.jsx)(h, {
            ref: e,
            variants: (function (t) {
              if (t)
                return {
                  enter: { ...t.enter, visibility: "visible" },
                  exit: { ...t.exit, transitionEnd: { visibility: "hidden" } },
                };
            })(r),
            initial: !1,
            animate: o ? "enter" : "exit",
            ...i,
          });
        });
      f.displayName = "PopoverTransition";
      let p = (0, c.forwardRef)(function (t, e) {
        let { rootProps: r, motionProps: l, ...c } = t,
          {
            getPopoverProps: d,
            getPopoverPositionerProps: h,
            onAnimationComplete: p,
          } = (0, s.usePopoverContext)(),
          m = (0, s.usePopoverStyles)(),
          v = (0, i.k0)({
            position: "relative",
            display: "flex",
            flexDirection: "column",
            ...m.content,
          });
        return (0,
        n.jsx)(u.chakra.div, { ...h(r), __css: m.popper, className: "chakra-popover__popper", children: (0, n.jsx)(f, { ...l, ...d(c, e), onAnimationComplete: (0, o.P)(p, c.onAnimationComplete), className: (0, a.cx)("chakra-popover__content", t.className), __css: v }) });
      });
      p.displayName = "PopoverContent";
    },
    18926: function (t, e, r) {
      "use strict";
      r.d(e, {
        H: function () {
          return i;
        },
        W: function () {
          return a;
        },
        usePopoverContext: function () {
          return o;
        },
        usePopoverStyles: function () {
          return s;
        },
      });
      var n = r(34008);
      let [i, o] = (0, n.createContext)({
          name: "PopoverContext",
          errorMessage:
            "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`",
        }),
        [a, s] = (0, n.createContext)({
          name: "PopoverStylesContext",
          errorMessage:
            "usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Popover />\" ",
        });
    },
    35012: function (t, e, r) {
      "use strict";
      r.d(e, {
        PopoverTrigger: function () {
          return a;
        },
      });
      var n = r(57437),
        i = r(2265),
        o = r(18926);
      function a(t) {
        let e = i.Children.only(t.children),
          { getTriggerProps: r } = (0, o.usePopoverContext)();
        return (0, n.jsx)(n.Fragment, {
          children: (0, i.cloneElement)(e, r(e.props, e.ref)),
        });
      }
      a.displayName = "PopoverTrigger";
    },
    3360: function (t, e, r) {
      "use strict";
      r.d(e, {
        Popover: function () {
          return c;
        },
      });
      var n = r(57437),
        i = r(22223),
        o = r(19323),
        a = r(18926),
        s = r(36495),
        l = r(78183),
        u = r(11535);
      function c(t) {
        let e = (0, u.useMultiStyleConfig)("Popover", t),
          { children: r, ...c } = (0, i.L)(t),
          d = (0, l.useTheme)(),
          h = (0, s.usePopover)({ ...c, direction: d.direction });
        return (0, n.jsx)(a.H, {
          value: h,
          children: (0, n.jsx)(a.W, {
            value: e,
            children: (0, o.P)(r, {
              isOpen: h.isOpen,
              onClose: h.onClose,
              forceUpdate: h.forceUpdate,
            }),
          }),
        });
      }
      c.displayName = "Popover";
    },
    36495: function (t, e, r) {
      "use strict";
      r.d(e, {
        usePopover: function () {
          return v;
        },
      });
      var n = r(31718),
        i = r(50096),
        o = r(59747),
        a = r(62068),
        s = r(80876),
        l = r(47400),
        u = r(99322),
        c = r(8022),
        d = r(25316),
        h = r(2265),
        f = r(45624),
        p = r(27080);
      let m = { click: "click", hover: "hover" };
      function v() {
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          {
            closeOnBlur: e = !0,
            closeOnEsc: r = !0,
            initialFocusRef: v,
            id: b,
            returnFocusOnClose: x = !0,
            autoFocus: w = !0,
            arrowSize: k,
            arrowShadowColor: S,
            trigger: P = m.click,
            openDelay: T = 200,
            closeDelay: C = 200,
            isLazy: E,
            lazyBehavior: R = "unmount",
            computePositionOnMount: A,
            ...j
          } = t,
          {
            isOpen: _,
            onClose: O,
            onOpen: M,
            onToggle: D,
          } = (0, n.useDisclosure)(t),
          [B, L] = (0, h.useState)(x);
        (0, h.useEffect)(() => L(x), [x]);
        let V = (0, h.useRef)(null),
          I = (0, h.useRef)(null),
          F = (0, h.useRef)(null),
          $ = (0, h.useRef)(!1),
          W = (0, h.useRef)(!1);
        _ && (W.current = !0);
        let [N, z] = (0, h.useState)(!1),
          [U, X] = (0, h.useState)(!1),
          H = (0, h.useId)(),
          Y = null != b ? b : H,
          [q, K, G, Z] = [
            "popover-trigger",
            "popover-content",
            "popover-header",
            "popover-body",
          ].map((t) => "".concat(t, "-").concat(Y)),
          {
            referenceRef: J,
            getArrowProps: Q,
            getPopperProps: tt,
            getArrowInnerProps: te,
            forceUpdate: tr,
          } = (0, f.usePopper)({ ...j, enabled: _ || !!A }),
          tn = (0, i.useAnimationState)({ isOpen: _, ref: F });
        (0, o.useFocusOnPointerDown)({ enabled: _, ref: I }),
          (0, a.useFocusOnHide)(F, {
            focusRef: I,
            visible: _,
            shouldFocus: B && P === m.click,
          }),
          (0, a.useFocusOnShow)(F, {
            focusRef: v,
            visible: _,
            shouldFocus: w && P === m.click,
          }),
          (0, s.useOutsideClick)({
            enabled: _ && e,
            ref: F,
            handler(t) {
              var e, r;
              let n =
                null !==
                  (r =
                    null === (e = t.composedPath) || void 0 === e
                      ? void 0
                      : e.call(t)[0]) && void 0 !== r
                  ? r
                  : [t.target];
              g(I.current, n) || (n && L(!(0, u.EB)(n)), O());
            },
          });
        let ti = (0, c.k)({
            wasSelected: W.current,
            enabled: E,
            mode: R,
            isSelected: tn.present,
          }),
          to = (0, h.useCallback)(
            function () {
              let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null,
                i = {
                  ...t,
                  style: {
                    ...t.style,
                    transformOrigin: p.cssVars.transformOrigin.varRef,
                    [p.cssVars.arrowSize.var]: k ? "".concat(k, "px") : void 0,
                    [p.cssVars.arrowShadowColor.var]: S,
                  },
                  ref: (0, l.mergeRefs)(F, n),
                  children: ti ? t.children : null,
                  id: K,
                  tabIndex: -1,
                  role: "dialog",
                  onKeyDown: (0, d.v)(t.onKeyDown, (t) => {
                    !t.nativeEvent.isComposing &&
                      r &&
                      "Escape" === t.key &&
                      (t.preventDefault(), t.stopPropagation(), O());
                  }),
                  onBlur: (0, d.v)(t.onBlur, (t) => {
                    let r = y(t),
                      n = g(F.current, r),
                      i = g(I.current, r);
                    r && L(!(0, u.EB)(r)), _ && e && !n && !i && O();
                  }),
                  "aria-labelledby": N ? G : void 0,
                  "aria-describedby": U ? Z : void 0,
                };
              return (
                P === m.hover &&
                  ((i.role = "tooltip"),
                  (i.onMouseEnter = (0, d.v)(t.onMouseEnter, () => {
                    $.current = !0;
                  })),
                  (i.onMouseLeave = (0, d.v)(t.onMouseLeave, (t) => {
                    null !== t.nativeEvent.relatedTarget &&
                      (($.current = !1), setTimeout(() => O(), C));
                  }))),
                i
              );
            },
            [ti, K, N, G, U, Z, P, r, O, _, e, C, S, k]
          ),
          ta = (0, h.useCallback)(
            function () {
              let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
              return tt(
                {
                  ...t,
                  style: { visibility: _ ? "visible" : "hidden", ...t.style },
                },
                e
              );
            },
            [_, tt]
          ),
          ts = (0, h.useCallback)(
            function (t) {
              let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null;
              return { ...t, ref: (0, l.mergeRefs)(e, V, J) };
            },
            [V, J]
          ),
          tl = (0, h.useRef)(),
          tu = (0, h.useRef)(),
          tc = (0, h.useCallback)(
            (t) => {
              null == V.current && J(t);
            },
            [J]
          ),
          td = (0, h.useCallback)(
            function () {
              let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null,
                n = {
                  ...t,
                  ref: (0, l.mergeRefs)(I, r, tc),
                  id: q,
                  "aria-haspopup": "dialog",
                  "aria-expanded": _,
                  "aria-controls": K,
                };
              return (
                P === m.click && (n.onClick = (0, d.v)(t.onClick, D)),
                P === m.hover &&
                  ((n.onFocus = (0, d.v)(t.onFocus, () => {
                    void 0 === tl.current && M();
                  })),
                  (n.onBlur = (0, d.v)(t.onBlur, (t) => {
                    let r = y(t),
                      n = !g(F.current, r);
                    _ && e && n && O();
                  })),
                  (n.onKeyDown = (0, d.v)(t.onKeyDown, (t) => {
                    "Escape" === t.key && O();
                  })),
                  (n.onMouseEnter = (0, d.v)(t.onMouseEnter, () => {
                    ($.current = !0),
                      (tl.current = window.setTimeout(() => M(), T));
                  })),
                  (n.onMouseLeave = (0, d.v)(t.onMouseLeave, () => {
                    ($.current = !1),
                      tl.current &&
                        (clearTimeout(tl.current), (tl.current = void 0)),
                      (tu.current = window.setTimeout(() => {
                        !1 === $.current && O();
                      }, C));
                  }))),
                n
              );
            },
            [q, _, K, P, tc, D, M, e, O, T, C]
          );
        (0, h.useEffect)(
          () => () => {
            tl.current && clearTimeout(tl.current),
              tu.current && clearTimeout(tu.current);
          },
          []
        );
        let th = (0, h.useCallback)(
            function () {
              let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
              return {
                ...t,
                id: G,
                ref: (0, l.mergeRefs)(e, (t) => {
                  z(!!t);
                }),
              };
            },
            [G]
          ),
          tf = (0, h.useCallback)(
            function () {
              let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
              return {
                ...t,
                id: Z,
                ref: (0, l.mergeRefs)(e, (t) => {
                  X(!!t);
                }),
              };
            },
            [Z]
          );
        return {
          forceUpdate: tr,
          isOpen: _,
          onAnimationComplete: tn.onComplete,
          onClose: O,
          getAnchorProps: ts,
          getArrowProps: Q,
          getArrowInnerProps: te,
          getPopoverPositionerProps: ta,
          getPopoverProps: to,
          getTriggerProps: td,
          getHeaderProps: th,
          getBodyProps: tf,
        };
      }
      function g(t, e) {
        return t === e || (null == t ? void 0 : t.contains(e));
      }
      function y(t) {
        var e;
        let r = t.currentTarget.ownerDocument.activeElement;
        return null !== (e = t.relatedTarget) && void 0 !== e ? e : r;
      }
    },
    45624: function (t, e, r) {
      "use strict";
      r.d(e, {
        usePopper: function () {
          return tS;
        },
      });
      var n,
        i,
        o,
        a,
        s,
        l = r(47400);
      function u(t) {
        if (null == t) return window;
        if ("[object Window]" !== t.toString()) {
          var e = t.ownerDocument;
          return (e && e.defaultView) || window;
        }
        return t;
      }
      function c(t) {
        var e = u(t).Element;
        return t instanceof e || t instanceof Element;
      }
      function d(t) {
        var e = u(t).HTMLElement;
        return t instanceof e || t instanceof HTMLElement;
      }
      function h(t) {
        if ("undefined" == typeof ShadowRoot) return !1;
        var e = u(t).ShadowRoot;
        return t instanceof e || t instanceof ShadowRoot;
      }
      var f = Math.max,
        p = Math.min,
        m = Math.round;
      function v() {
        var t = navigator.userAgentData;
        return null != t && t.brands && Array.isArray(t.brands)
          ? t.brands
              .map(function (t) {
                return t.brand + "/" + t.version;
              })
              .join(" ")
          : navigator.userAgent;
      }
      function g() {
        return !/^((?!chrome|android).)*safari/i.test(v());
      }
      function y(t, e, r) {
        void 0 === e && (e = !1), void 0 === r && (r = !1);
        var n = t.getBoundingClientRect(),
          i = 1,
          o = 1;
        e &&
          d(t) &&
          ((i = (t.offsetWidth > 0 && m(n.width) / t.offsetWidth) || 1),
          (o = (t.offsetHeight > 0 && m(n.height) / t.offsetHeight) || 1));
        var a = (c(t) ? u(t) : window).visualViewport,
          s = !g() && r,
          l = (n.left + (s && a ? a.offsetLeft : 0)) / i,
          h = (n.top + (s && a ? a.offsetTop : 0)) / o,
          f = n.width / i,
          p = n.height / o;
        return {
          width: f,
          height: p,
          top: h,
          right: l + f,
          bottom: h + p,
          left: l,
          x: l,
          y: h,
        };
      }
      function b(t) {
        var e = u(t);
        return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
      }
      function x(t) {
        return t ? (t.nodeName || "").toLowerCase() : null;
      }
      function w(t) {
        return ((c(t) ? t.ownerDocument : t.document) || window.document)
          .documentElement;
      }
      function k(t) {
        return y(w(t)).left + b(t).scrollLeft;
      }
      function S(t) {
        return u(t).getComputedStyle(t);
      }
      function P(t) {
        var e = S(t),
          r = e.overflow,
          n = e.overflowX,
          i = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(r + i + n);
      }
      function T(t) {
        var e = y(t),
          r = t.offsetWidth,
          n = t.offsetHeight;
        return (
          1 >= Math.abs(e.width - r) && (r = e.width),
          1 >= Math.abs(e.height - n) && (n = e.height),
          { x: t.offsetLeft, y: t.offsetTop, width: r, height: n }
        );
      }
      function C(t) {
        return "html" === x(t)
          ? t
          : t.assignedSlot || t.parentNode || (h(t) ? t.host : null) || w(t);
      }
      function E(t, e) {
        void 0 === e && (e = []);
        var r,
          n = (function t(e) {
            return ["html", "body", "#document"].indexOf(x(e)) >= 0
              ? e.ownerDocument.body
              : d(e) && P(e)
              ? e
              : t(C(e));
          })(t),
          i = n === (null == (r = t.ownerDocument) ? void 0 : r.body),
          o = u(n),
          a = i ? [o].concat(o.visualViewport || [], P(n) ? n : []) : n,
          s = e.concat(a);
        return i ? s : s.concat(E(C(a)));
      }
      function R(t) {
        return d(t) && "fixed" !== S(t).position ? t.offsetParent : null;
      }
      function A(t) {
        for (
          var e = u(t), r = R(t);
          r &&
          ["table", "td", "th"].indexOf(x(r)) >= 0 &&
          "static" === S(r).position;

        )
          r = R(r);
        return r &&
          ("html" === x(r) || ("body" === x(r) && "static" === S(r).position))
          ? e
          : r ||
              (function (t) {
                var e = /firefox/i.test(v());
                if (/Trident/i.test(v()) && d(t) && "fixed" === S(t).position)
                  return null;
                var r = C(t);
                for (
                  h(r) && (r = r.host);
                  d(r) && 0 > ["html", "body"].indexOf(x(r));

                ) {
                  var n = S(r);
                  if (
                    "none" !== n.transform ||
                    "none" !== n.perspective ||
                    "paint" === n.contain ||
                    -1 !== ["transform", "perspective"].indexOf(n.willChange) ||
                    (e && "filter" === n.willChange) ||
                    (e && n.filter && "none" !== n.filter)
                  )
                    return r;
                  r = r.parentNode;
                }
                return null;
              })(t) ||
              e;
      }
      var j = "bottom",
        _ = "right",
        O = "left",
        M = "auto",
        D = ["top", j, _, O],
        B = "start",
        L = "viewport",
        V = "popper",
        I = D.reduce(function (t, e) {
          return t.concat([e + "-" + B, e + "-end"]);
        }, []),
        F = [].concat(D, [M]).reduce(function (t, e) {
          return t.concat([e, e + "-" + B, e + "-end"]);
        }, []),
        $ = [
          "beforeRead",
          "read",
          "afterRead",
          "beforeMain",
          "main",
          "afterMain",
          "beforeWrite",
          "write",
          "afterWrite",
        ],
        W = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function N() {
        for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        return !e.some(function (t) {
          return !(t && "function" == typeof t.getBoundingClientRect);
        });
      }
      var z = { passive: !0 };
      function U(t) {
        return t.split("-")[0];
      }
      function X(t) {
        return t.split("-")[1];
      }
      function H(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
      }
      function Y(t) {
        var e,
          r = t.reference,
          n = t.element,
          i = t.placement,
          o = i ? U(i) : null,
          a = i ? X(i) : null,
          s = r.x + r.width / 2 - n.width / 2,
          l = r.y + r.height / 2 - n.height / 2;
        switch (o) {
          case "top":
            e = { x: s, y: r.y - n.height };
            break;
          case j:
            e = { x: s, y: r.y + r.height };
            break;
          case _:
            e = { x: r.x + r.width, y: l };
            break;
          case O:
            e = { x: r.x - n.width, y: l };
            break;
          default:
            e = { x: r.x, y: r.y };
        }
        var u = o ? H(o) : null;
        if (null != u) {
          var c = "y" === u ? "height" : "width";
          switch (a) {
            case B:
              e[u] = e[u] - (r[c] / 2 - n[c] / 2);
              break;
            case "end":
              e[u] = e[u] + (r[c] / 2 - n[c] / 2);
          }
        }
        return e;
      }
      var q = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function K(t) {
        var e,
          r,
          n,
          i,
          o,
          a,
          s,
          l = t.popper,
          c = t.popperRect,
          d = t.placement,
          h = t.variation,
          f = t.offsets,
          p = t.position,
          v = t.gpuAcceleration,
          g = t.adaptive,
          y = t.roundOffsets,
          b = t.isFixed,
          x = f.x,
          k = void 0 === x ? 0 : x,
          P = f.y,
          T = void 0 === P ? 0 : P,
          C = "function" == typeof y ? y({ x: k, y: T }) : { x: k, y: T };
        (k = C.x), (T = C.y);
        var E = f.hasOwnProperty("x"),
          R = f.hasOwnProperty("y"),
          M = O,
          D = "top",
          B = window;
        if (g) {
          var L = A(l),
            V = "clientHeight",
            I = "clientWidth";
          L === u(l) &&
            "static" !== S((L = w(l))).position &&
            "absolute" === p &&
            ((V = "scrollHeight"), (I = "scrollWidth")),
            ("top" === d || ((d === O || d === _) && "end" === h)) &&
              ((D = j),
              (T -=
                (b && L === B && B.visualViewport
                  ? B.visualViewport.height
                  : L[V]) - c.height),
              (T *= v ? 1 : -1)),
            (d === O || (("top" === d || d === j) && "end" === h)) &&
              ((M = _),
              (k -=
                (b && L === B && B.visualViewport
                  ? B.visualViewport.width
                  : L[I]) - c.width),
              (k *= v ? 1 : -1));
        }
        var F = Object.assign({ position: p }, g && q),
          $ =
            !0 === y
              ? ((e = { x: k, y: T }),
                (r = u(l)),
                (n = e.x),
                (i = e.y),
                {
                  x: m(n * (o = r.devicePixelRatio || 1)) / o || 0,
                  y: m(i * o) / o || 0,
                })
              : { x: k, y: T };
        return ((k = $.x), (T = $.y), v)
          ? Object.assign(
              {},
              F,
              (((s = {})[D] = R ? "0" : ""),
              (s[M] = E ? "0" : ""),
              (s.transform =
                1 >= (B.devicePixelRatio || 1)
                  ? "translate(" + k + "px, " + T + "px)"
                  : "translate3d(" + k + "px, " + T + "px, 0)"),
              s)
            )
          : Object.assign(
              {},
              F,
              (((a = {})[D] = R ? T + "px" : ""),
              (a[M] = E ? k + "px" : ""),
              (a.transform = ""),
              a)
            );
      }
      var G = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function Z(t) {
        return t.replace(/left|right|bottom|top/g, function (t) {
          return G[t];
        });
      }
      var J = { start: "end", end: "start" };
      function Q(t) {
        return t.replace(/start|end/g, function (t) {
          return J[t];
        });
      }
      function tt(t, e) {
        var r = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (r && h(r)) {
          var n = e;
          do {
            if (n && t.isSameNode(n)) return !0;
            n = n.parentNode || n.host;
          } while (n);
        }
        return !1;
      }
      function te(t) {
        return Object.assign({}, t, {
          left: t.x,
          top: t.y,
          right: t.x + t.width,
          bottom: t.y + t.height,
        });
      }
      function tr(t, e, r) {
        var n, i, o, a, s, l, d, h, p, m;
        return e === L
          ? te(
              (function (t, e) {
                var r = u(t),
                  n = w(t),
                  i = r.visualViewport,
                  o = n.clientWidth,
                  a = n.clientHeight,
                  s = 0,
                  l = 0;
                if (i) {
                  (o = i.width), (a = i.height);
                  var c = g();
                  (c || (!c && "fixed" === e)) &&
                    ((s = i.offsetLeft), (l = i.offsetTop));
                }
                return { width: o, height: a, x: s + k(t), y: l };
              })(t, r)
            )
          : c(e)
          ? (((n = y(e, !1, "fixed" === r)).top = n.top + e.clientTop),
            (n.left = n.left + e.clientLeft),
            (n.bottom = n.top + e.clientHeight),
            (n.right = n.left + e.clientWidth),
            (n.width = e.clientWidth),
            (n.height = e.clientHeight),
            (n.x = n.left),
            (n.y = n.top),
            n)
          : te(
              ((i = w(t)),
              (a = w(i)),
              (s = b(i)),
              (l = null == (o = i.ownerDocument) ? void 0 : o.body),
              (d = f(
                a.scrollWidth,
                a.clientWidth,
                l ? l.scrollWidth : 0,
                l ? l.clientWidth : 0
              )),
              (h = f(
                a.scrollHeight,
                a.clientHeight,
                l ? l.scrollHeight : 0,
                l ? l.clientHeight : 0
              )),
              (p = -s.scrollLeft + k(i)),
              (m = -s.scrollTop),
              "rtl" === S(l || a).direction &&
                (p += f(a.clientWidth, l ? l.clientWidth : 0) - d),
              { width: d, height: h, x: p, y: m })
            );
      }
      function tn() {
        return { top: 0, right: 0, bottom: 0, left: 0 };
      }
      function ti(t) {
        return Object.assign({}, tn(), t);
      }
      function to(t, e) {
        return e.reduce(function (e, r) {
          return (e[r] = t), e;
        }, {});
      }
      function ta(t, e) {
        void 0 === e && (e = {});
        var r,
          n,
          i,
          o,
          a,
          s,
          l,
          u,
          h = e,
          m = h.placement,
          v = void 0 === m ? t.placement : m,
          g = h.strategy,
          b = void 0 === g ? t.strategy : g,
          k = h.boundary,
          P = h.rootBoundary,
          T = h.elementContext,
          R = void 0 === T ? V : T,
          O = h.altBoundary,
          M = h.padding,
          B = void 0 === M ? 0 : M,
          I = ti("number" != typeof B ? B : to(B, D)),
          F = t.rects.popper,
          $ = t.elements[void 0 !== O && O ? (R === V ? "reference" : V) : R],
          W =
            ((r = c($) ? $ : $.contextElement || w(t.elements.popper)),
            (n = void 0 === k ? "clippingParents" : k),
            (i = void 0 === P ? L : P),
            (l = (s = [].concat(
              "clippingParents" === n
                ? ((o = E(C(r))),
                  c(
                    (a =
                      ["absolute", "fixed"].indexOf(S(r).position) >= 0 && d(r)
                        ? A(r)
                        : r)
                  )
                    ? o.filter(function (t) {
                        return c(t) && tt(t, a) && "body" !== x(t);
                      })
                    : [])
                : [].concat(n),
              [i]
            ))[0]),
            ((u = s.reduce(function (t, e) {
              var n = tr(r, e, b);
              return (
                (t.top = f(n.top, t.top)),
                (t.right = p(n.right, t.right)),
                (t.bottom = p(n.bottom, t.bottom)),
                (t.left = f(n.left, t.left)),
                t
              );
            }, tr(r, l, b))).width = u.right - u.left),
            (u.height = u.bottom - u.top),
            (u.x = u.left),
            (u.y = u.top),
            u),
          N = y(t.elements.reference),
          z = Y({
            reference: N,
            element: F,
            strategy: "absolute",
            placement: v,
          }),
          U = te(Object.assign({}, F, z)),
          X = R === V ? U : N,
          H = {
            top: W.top - X.top + I.top,
            bottom: X.bottom - W.bottom + I.bottom,
            left: W.left - X.left + I.left,
            right: X.right - W.right + I.right,
          },
          q = t.modifiersData.offset;
        if (R === V && q) {
          var K = q[v];
          Object.keys(H).forEach(function (t) {
            var e = [_, j].indexOf(t) >= 0 ? 1 : -1,
              r = ["top", j].indexOf(t) >= 0 ? "y" : "x";
            H[t] += K[r] * e;
          });
        }
        return H;
      }
      function ts(t, e, r) {
        return f(t, p(e, r));
      }
      function tl(t, e, r) {
        return (
          void 0 === r && (r = { x: 0, y: 0 }),
          {
            top: t.top - e.height - r.y,
            right: t.right - e.width + r.x,
            bottom: t.bottom - e.height + r.y,
            left: t.left - e.width - r.x,
          }
        );
      }
      function tu(t) {
        return ["top", _, j, O].some(function (e) {
          return t[e] >= 0;
        });
      }
      var tc =
          ((o =
            void 0 ===
            (i = (n = {
              defaultModifiers: [
                {
                  name: "eventListeners",
                  enabled: !0,
                  phase: "write",
                  fn: function () {},
                  effect: function (t) {
                    var e = t.state,
                      r = t.instance,
                      n = t.options,
                      i = n.scroll,
                      o = void 0 === i || i,
                      a = n.resize,
                      s = void 0 === a || a,
                      l = u(e.elements.popper),
                      c = [].concat(
                        e.scrollParents.reference,
                        e.scrollParents.popper
                      );
                    return (
                      o &&
                        c.forEach(function (t) {
                          t.addEventListener("scroll", r.update, z);
                        }),
                      s && l.addEventListener("resize", r.update, z),
                      function () {
                        o &&
                          c.forEach(function (t) {
                            t.removeEventListener("scroll", r.update, z);
                          }),
                          s && l.removeEventListener("resize", r.update, z);
                      }
                    );
                  },
                  data: {},
                },
                {
                  name: "popperOffsets",
                  enabled: !0,
                  phase: "read",
                  fn: function (t) {
                    var e = t.state,
                      r = t.name;
                    e.modifiersData[r] = Y({
                      reference: e.rects.reference,
                      element: e.rects.popper,
                      strategy: "absolute",
                      placement: e.placement,
                    });
                  },
                  data: {},
                },
                {
                  name: "computeStyles",
                  enabled: !0,
                  phase: "beforeWrite",
                  fn: function (t) {
                    var e = t.state,
                      r = t.options,
                      n = r.gpuAcceleration,
                      i = r.adaptive,
                      o = r.roundOffsets,
                      a = void 0 === o || o,
                      s = {
                        placement: U(e.placement),
                        variation: X(e.placement),
                        popper: e.elements.popper,
                        popperRect: e.rects.popper,
                        gpuAcceleration: void 0 === n || n,
                        isFixed: "fixed" === e.options.strategy,
                      };
                    null != e.modifiersData.popperOffsets &&
                      (e.styles.popper = Object.assign(
                        {},
                        e.styles.popper,
                        K(
                          Object.assign({}, s, {
                            offsets: e.modifiersData.popperOffsets,
                            position: e.options.strategy,
                            adaptive: void 0 === i || i,
                            roundOffsets: a,
                          })
                        )
                      )),
                      null != e.modifiersData.arrow &&
                        (e.styles.arrow = Object.assign(
                          {},
                          e.styles.arrow,
                          K(
                            Object.assign({}, s, {
                              offsets: e.modifiersData.arrow,
                              position: "absolute",
                              adaptive: !1,
                              roundOffsets: a,
                            })
                          )
                        )),
                      (e.attributes.popper = Object.assign(
                        {},
                        e.attributes.popper,
                        { "data-popper-placement": e.placement }
                      ));
                  },
                  data: {},
                },
                {
                  name: "applyStyles",
                  enabled: !0,
                  phase: "write",
                  fn: function (t) {
                    var e = t.state;
                    Object.keys(e.elements).forEach(function (t) {
                      var r = e.styles[t] || {},
                        n = e.attributes[t] || {},
                        i = e.elements[t];
                      d(i) &&
                        x(i) &&
                        (Object.assign(i.style, r),
                        Object.keys(n).forEach(function (t) {
                          var e = n[t];
                          !1 === e
                            ? i.removeAttribute(t)
                            : i.setAttribute(t, !0 === e ? "" : e);
                        }));
                    });
                  },
                  effect: function (t) {
                    var e = t.state,
                      r = {
                        popper: {
                          position: e.options.strategy,
                          left: "0",
                          top: "0",
                          margin: "0",
                        },
                        arrow: { position: "absolute" },
                        reference: {},
                      };
                    return (
                      Object.assign(e.elements.popper.style, r.popper),
                      (e.styles = r),
                      e.elements.arrow &&
                        Object.assign(e.elements.arrow.style, r.arrow),
                      function () {
                        Object.keys(e.elements).forEach(function (t) {
                          var n = e.elements[t],
                            i = e.attributes[t] || {},
                            o = Object.keys(
                              e.styles.hasOwnProperty(t) ? e.styles[t] : r[t]
                            ).reduce(function (t, e) {
                              return (t[e] = ""), t;
                            }, {});
                          d(n) &&
                            x(n) &&
                            (Object.assign(n.style, o),
                            Object.keys(i).forEach(function (t) {
                              n.removeAttribute(t);
                            }));
                        });
                      }
                    );
                  },
                  requires: ["computeStyles"],
                },
                {
                  name: "offset",
                  enabled: !0,
                  phase: "main",
                  requires: ["popperOffsets"],
                  fn: function (t) {
                    var e = t.state,
                      r = t.options,
                      n = t.name,
                      i = r.offset,
                      o = void 0 === i ? [0, 0] : i,
                      a = F.reduce(function (t, r) {
                        var n, i, a, s, l, u;
                        return (
                          (t[r] =
                            ((n = e.rects),
                            (a = [O, "top"].indexOf((i = U(r))) >= 0 ? -1 : 1),
                            (l = (s =
                              "function" == typeof o
                                ? o(Object.assign({}, n, { placement: r }))
                                : o)[0]),
                            (u = s[1]),
                            (l = l || 0),
                            (u = (u || 0) * a),
                            [O, _].indexOf(i) >= 0
                              ? { x: u, y: l }
                              : { x: l, y: u })),
                          t
                        );
                      }, {}),
                      s = a[e.placement],
                      l = s.x,
                      u = s.y;
                    null != e.modifiersData.popperOffsets &&
                      ((e.modifiersData.popperOffsets.x += l),
                      (e.modifiersData.popperOffsets.y += u)),
                      (e.modifiersData[n] = a);
                  },
                },
                {
                  name: "flip",
                  enabled: !0,
                  phase: "main",
                  fn: function (t) {
                    var e = t.state,
                      r = t.options,
                      n = t.name;
                    if (!e.modifiersData[n]._skip) {
                      for (
                        var i = r.mainAxis,
                          o = void 0 === i || i,
                          a = r.altAxis,
                          s = void 0 === a || a,
                          l = r.fallbackPlacements,
                          u = r.padding,
                          c = r.boundary,
                          d = r.rootBoundary,
                          h = r.altBoundary,
                          f = r.flipVariations,
                          p = void 0 === f || f,
                          m = r.allowedAutoPlacements,
                          v = e.options.placement,
                          g = U(v) === v,
                          y =
                            l ||
                            (g || !p
                              ? [Z(v)]
                              : (function (t) {
                                  if (U(t) === M) return [];
                                  var e = Z(t);
                                  return [Q(t), e, Q(e)];
                                })(v)),
                          b = [v].concat(y).reduce(function (t, r) {
                            var n, i, o, a, s, l, h, f, v, g, y, b;
                            return t.concat(
                              U(r) === M
                                ? ((i = (n = {
                                    placement: r,
                                    boundary: c,
                                    rootBoundary: d,
                                    padding: u,
                                    flipVariations: p,
                                    allowedAutoPlacements: m,
                                  }).placement),
                                  (o = n.boundary),
                                  (a = n.rootBoundary),
                                  (s = n.padding),
                                  (l = n.flipVariations),
                                  (f =
                                    void 0 === (h = n.allowedAutoPlacements)
                                      ? F
                                      : h),
                                  0 ===
                                    (y = (g = (v = X(i))
                                      ? l
                                        ? I
                                        : I.filter(function (t) {
                                            return X(t) === v;
                                          })
                                      : D).filter(function (t) {
                                      return f.indexOf(t) >= 0;
                                    })).length && (y = g),
                                  Object.keys(
                                    (b = y.reduce(function (t, r) {
                                      return (
                                        (t[r] = ta(e, {
                                          placement: r,
                                          boundary: o,
                                          rootBoundary: a,
                                          padding: s,
                                        })[U(r)]),
                                        t
                                      );
                                    }, {}))
                                  ).sort(function (t, e) {
                                    return b[t] - b[e];
                                  }))
                                : r
                            );
                          }, []),
                          x = e.rects.reference,
                          w = e.rects.popper,
                          k = new Map(),
                          S = !0,
                          P = b[0],
                          T = 0;
                        T < b.length;
                        T++
                      ) {
                        var C = b[T],
                          E = U(C),
                          R = X(C) === B,
                          A = ["top", j].indexOf(E) >= 0,
                          L = A ? "width" : "height",
                          V = ta(e, {
                            placement: C,
                            boundary: c,
                            rootBoundary: d,
                            altBoundary: h,
                            padding: u,
                          }),
                          $ = A ? (R ? _ : O) : R ? j : "top";
                        x[L] > w[L] && ($ = Z($));
                        var W = Z($),
                          N = [];
                        if (
                          (o && N.push(V[E] <= 0),
                          s && N.push(V[$] <= 0, V[W] <= 0),
                          N.every(function (t) {
                            return t;
                          }))
                        ) {
                          (P = C), (S = !1);
                          break;
                        }
                        k.set(C, N);
                      }
                      if (S)
                        for (
                          var z = p ? 3 : 1,
                            H = function (t) {
                              var e = b.find(function (e) {
                                var r = k.get(e);
                                if (r)
                                  return r.slice(0, t).every(function (t) {
                                    return t;
                                  });
                              });
                              if (e) return (P = e), "break";
                            },
                            Y = z;
                          Y > 0 && "break" !== H(Y);
                          Y--
                        );
                      e.placement !== P &&
                        ((e.modifiersData[n]._skip = !0),
                        (e.placement = P),
                        (e.reset = !0));
                    }
                  },
                  requiresIfExists: ["offset"],
                  data: { _skip: !1 },
                },
                {
                  name: "preventOverflow",
                  enabled: !0,
                  phase: "main",
                  fn: function (t) {
                    var e = t.state,
                      r = t.options,
                      n = t.name,
                      i = r.mainAxis,
                      o = r.altAxis,
                      a = r.boundary,
                      s = r.rootBoundary,
                      l = r.altBoundary,
                      u = r.padding,
                      c = r.tether,
                      d = void 0 === c || c,
                      h = r.tetherOffset,
                      m = void 0 === h ? 0 : h,
                      v = ta(e, {
                        boundary: a,
                        rootBoundary: s,
                        padding: u,
                        altBoundary: l,
                      }),
                      g = U(e.placement),
                      y = X(e.placement),
                      b = !y,
                      x = H(g),
                      w = "x" === x ? "y" : "x",
                      k = e.modifiersData.popperOffsets,
                      S = e.rects.reference,
                      P = e.rects.popper,
                      C =
                        "function" == typeof m
                          ? m(
                              Object.assign({}, e.rects, {
                                placement: e.placement,
                              })
                            )
                          : m,
                      E =
                        "number" == typeof C
                          ? { mainAxis: C, altAxis: C }
                          : Object.assign({ mainAxis: 0, altAxis: 0 }, C),
                      R = e.modifiersData.offset
                        ? e.modifiersData.offset[e.placement]
                        : null,
                      M = { x: 0, y: 0 };
                    if (k) {
                      if (void 0 === i || i) {
                        var D,
                          L = "y" === x ? "top" : O,
                          V = "y" === x ? j : _,
                          I = "y" === x ? "height" : "width",
                          F = k[x],
                          $ = F + v[L],
                          W = F - v[V],
                          N = d ? -P[I] / 2 : 0,
                          z = y === B ? S[I] : P[I],
                          Y = y === B ? -P[I] : -S[I],
                          q = e.elements.arrow,
                          K = d && q ? T(q) : { width: 0, height: 0 },
                          G = e.modifiersData["arrow#persistent"]
                            ? e.modifiersData["arrow#persistent"].padding
                            : tn(),
                          Z = G[L],
                          J = G[V],
                          Q = ts(0, S[I], K[I]),
                          tt = b
                            ? S[I] / 2 - N - Q - Z - E.mainAxis
                            : z - Q - Z - E.mainAxis,
                          te = b
                            ? -S[I] / 2 + N + Q + J + E.mainAxis
                            : Y + Q + J + E.mainAxis,
                          tr = e.elements.arrow && A(e.elements.arrow),
                          ti = tr
                            ? "y" === x
                              ? tr.clientTop || 0
                              : tr.clientLeft || 0
                            : 0,
                          to = null != (D = null == R ? void 0 : R[x]) ? D : 0,
                          tl = ts(
                            d ? p($, F + tt - to - ti) : $,
                            F,
                            d ? f(W, F + te - to) : W
                          );
                        (k[x] = tl), (M[x] = tl - F);
                      }
                      if (void 0 !== o && o) {
                        var tu,
                          tc,
                          td = "x" === x ? "top" : O,
                          th = "x" === x ? j : _,
                          tf = k[w],
                          tp = "y" === w ? "height" : "width",
                          tm = tf + v[td],
                          tv = tf - v[th],
                          tg = -1 !== ["top", O].indexOf(g),
                          ty =
                            null != (tc = null == R ? void 0 : R[w]) ? tc : 0,
                          tb = tg ? tm : tf - S[tp] - P[tp] - ty + E.altAxis,
                          tx = tg ? tf + S[tp] + P[tp] - ty - E.altAxis : tv,
                          tw =
                            d && tg
                              ? (tu = ts(tb, tf, tx)) > tx
                                ? tx
                                : tu
                              : ts(d ? tb : tm, tf, d ? tx : tv);
                        (k[w] = tw), (M[w] = tw - tf);
                      }
                      e.modifiersData[n] = M;
                    }
                  },
                  requiresIfExists: ["offset"],
                },
                {
                  name: "arrow",
                  enabled: !0,
                  phase: "main",
                  fn: function (t) {
                    var e,
                      r,
                      n = t.state,
                      i = t.name,
                      o = t.options,
                      a = n.elements.arrow,
                      s = n.modifiersData.popperOffsets,
                      l = U(n.placement),
                      u = H(l),
                      c = [O, _].indexOf(l) >= 0 ? "height" : "width";
                    if (a && s) {
                      var d = ti(
                          "number" !=
                            typeof (e =
                              "function" == typeof (e = o.padding)
                                ? e(
                                    Object.assign({}, n.rects, {
                                      placement: n.placement,
                                    })
                                  )
                                : e)
                            ? e
                            : to(e, D)
                        ),
                        h = T(a),
                        f = "y" === u ? "top" : O,
                        p = "y" === u ? j : _,
                        m =
                          n.rects.reference[c] +
                          n.rects.reference[u] -
                          s[u] -
                          n.rects.popper[c],
                        v = s[u] - n.rects.reference[u],
                        g = A(a),
                        y = g
                          ? "y" === u
                            ? g.clientHeight || 0
                            : g.clientWidth || 0
                          : 0,
                        b = d[f],
                        x = y - h[c] - d[p],
                        w = y / 2 - h[c] / 2 + (m / 2 - v / 2),
                        k = ts(b, w, x);
                      n.modifiersData[i] =
                        (((r = {})[u] = k), (r.centerOffset = k - w), r);
                    }
                  },
                  effect: function (t) {
                    var e = t.state,
                      r = t.options.element,
                      n = void 0 === r ? "[data-popper-arrow]" : r;
                    null != n &&
                      ("string" != typeof n ||
                        (n = e.elements.popper.querySelector(n))) &&
                      tt(e.elements.popper, n) &&
                      (e.elements.arrow = n);
                  },
                  requires: ["popperOffsets"],
                  requiresIfExists: ["preventOverflow"],
                },
                {
                  name: "hide",
                  enabled: !0,
                  phase: "main",
                  requiresIfExists: ["preventOverflow"],
                  fn: function (t) {
                    var e = t.state,
                      r = t.name,
                      n = e.rects.reference,
                      i = e.rects.popper,
                      o = e.modifiersData.preventOverflow,
                      a = ta(e, { elementContext: "reference" }),
                      s = ta(e, { altBoundary: !0 }),
                      l = tl(a, n),
                      u = tl(s, i, o),
                      c = tu(l),
                      d = tu(u);
                    (e.modifiersData[r] = {
                      referenceClippingOffsets: l,
                      popperEscapeOffsets: u,
                      isReferenceHidden: c,
                      hasPopperEscaped: d,
                    }),
                      (e.attributes.popper = Object.assign(
                        {},
                        e.attributes.popper,
                        {
                          "data-popper-reference-hidden": c,
                          "data-popper-escaped": d,
                        }
                      ));
                  },
                },
              ],
            }).defaultModifiers)
              ? []
              : i),
          (s = void 0 === (a = n.defaultOptions) ? W : a),
          function (t, e, r) {
            void 0 === r && (r = s);
            var n,
              i,
              a = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, W, s),
                modifiersData: {},
                elements: { reference: t, popper: e },
                attributes: {},
                styles: {},
              },
              l = [],
              h = !1,
              f = {
                state: a,
                setOptions: function (r) {
                  var n,
                    i,
                    u,
                    d,
                    h,
                    m = "function" == typeof r ? r(a.options) : r;
                  p(),
                    (a.options = Object.assign({}, s, a.options, m)),
                    (a.scrollParents = {
                      reference: c(t)
                        ? E(t)
                        : t.contextElement
                        ? E(t.contextElement)
                        : [],
                      popper: E(e),
                    });
                  var v =
                    ((i = Object.keys(
                      (n = []
                        .concat(o, a.options.modifiers)
                        .reduce(function (t, e) {
                          var r = t[e.name];
                          return (
                            (t[e.name] = r
                              ? Object.assign({}, r, e, {
                                  options: Object.assign(
                                    {},
                                    r.options,
                                    e.options
                                  ),
                                  data: Object.assign({}, r.data, e.data),
                                })
                              : e),
                            t
                          );
                        }, {}))
                    ).map(function (t) {
                      return n[t];
                    })),
                    (u = new Map()),
                    (d = new Set()),
                    (h = []),
                    i.forEach(function (t) {
                      u.set(t.name, t);
                    }),
                    i.forEach(function (t) {
                      d.has(t.name) ||
                        (function t(e) {
                          d.add(e.name),
                            []
                              .concat(
                                e.requires || [],
                                e.requiresIfExists || []
                              )
                              .forEach(function (e) {
                                if (!d.has(e)) {
                                  var r = u.get(e);
                                  r && t(r);
                                }
                              }),
                            h.push(e);
                        })(t);
                    }),
                    $.reduce(function (t, e) {
                      return t.concat(
                        h.filter(function (t) {
                          return t.phase === e;
                        })
                      );
                    }, []));
                  return (
                    (a.orderedModifiers = v.filter(function (t) {
                      return t.enabled;
                    })),
                    a.orderedModifiers.forEach(function (t) {
                      var e = t.name,
                        r = t.options,
                        n = t.effect;
                      if ("function" == typeof n) {
                        var i = n({
                          state: a,
                          name: e,
                          instance: f,
                          options: void 0 === r ? {} : r,
                        });
                        l.push(i || function () {});
                      }
                    }),
                    f.update()
                  );
                },
                forceUpdate: function () {
                  if (!h) {
                    var t,
                      e,
                      r,
                      n,
                      i,
                      o,
                      s,
                      l,
                      c,
                      p,
                      v,
                      g,
                      S = a.elements,
                      C = S.reference,
                      E = S.popper;
                    if (N(C, E)) {
                      (a.rects = {
                        reference:
                          ((e = A(E)),
                          (r = "fixed" === a.options.strategy),
                          (n = d(e)),
                          (l =
                            d(e) &&
                            ((o =
                              m((i = e.getBoundingClientRect()).width) /
                                e.offsetWidth || 1),
                            (s = m(i.height) / e.offsetHeight || 1),
                            1 !== o || 1 !== s)),
                          (c = w(e)),
                          (p = y(C, l, r)),
                          (v = { scrollLeft: 0, scrollTop: 0 }),
                          (g = { x: 0, y: 0 }),
                          (n || (!n && !r)) &&
                            (("body" !== x(e) || P(c)) &&
                              (v =
                                (t = e) !== u(t) && d(t)
                                  ? {
                                      scrollLeft: t.scrollLeft,
                                      scrollTop: t.scrollTop,
                                    }
                                  : b(t)),
                            d(e)
                              ? ((g = y(e, !0)),
                                (g.x += e.clientLeft),
                                (g.y += e.clientTop))
                              : c && (g.x = k(c))),
                          {
                            x: p.left + v.scrollLeft - g.x,
                            y: p.top + v.scrollTop - g.y,
                            width: p.width,
                            height: p.height,
                          }),
                        popper: T(E),
                      }),
                        (a.reset = !1),
                        (a.placement = a.options.placement),
                        a.orderedModifiers.forEach(function (t) {
                          return (a.modifiersData[t.name] = Object.assign(
                            {},
                            t.data
                          ));
                        });
                      for (var R = 0; R < a.orderedModifiers.length; R++) {
                        if (!0 === a.reset) {
                          (a.reset = !1), (R = -1);
                          continue;
                        }
                        var j = a.orderedModifiers[R],
                          _ = j.fn,
                          O = j.options,
                          M = void 0 === O ? {} : O,
                          D = j.name;
                        "function" == typeof _ &&
                          (a =
                            _({ state: a, options: M, name: D, instance: f }) ||
                            a);
                      }
                    }
                  }
                },
                update:
                  ((n = function () {
                    return new Promise(function (t) {
                      f.forceUpdate(), t(a);
                    });
                  }),
                  function () {
                    return (
                      i ||
                        (i = new Promise(function (t) {
                          Promise.resolve().then(function () {
                            (i = void 0), t(n());
                          });
                        })),
                      i
                    );
                  }),
                destroy: function () {
                  p(), (h = !0);
                },
              };
            if (!N(t, e)) return f;
            function p() {
              l.forEach(function (t) {
                return t();
              }),
                (l = []);
            }
            return (
              f.setOptions(r).then(function (t) {
                !h && r.onFirstUpdate && r.onFirstUpdate(t);
              }),
              f
            );
          }),
        td = r(2265),
        th = r(27080);
      let tf = {
          name: "matchWidth",
          enabled: !0,
          phase: "beforeWrite",
          requires: ["computeStyles"],
          fn: (t) => {
            let { state: e } = t;
            e.styles.popper.width = "".concat(e.rects.reference.width, "px");
          },
          effect: (t) => {
            let { state: e } = t;
            return () => {
              let t = e.elements.reference;
              e.elements.popper.style.width = "".concat(t.offsetWidth, "px");
            };
          },
        },
        tp = {
          name: "transformOrigin",
          enabled: !0,
          phase: "write",
          fn: (t) => {
            let { state: e } = t;
            tm(e);
          },
          effect: (t) => {
            let { state: e } = t;
            return () => {
              tm(e);
            };
          },
        },
        tm = (t) => {
          t.elements.popper.style.setProperty(
            th.cssVars.transformOrigin.var,
            (0, th.mv)(t.placement)
          );
        },
        tv = {
          name: "positionArrow",
          enabled: !0,
          phase: "afterWrite",
          fn: (t) => {
            let { state: e } = t;
            tg(e);
          },
        },
        tg = (t) => {
          var e;
          if (!t.placement) return;
          let r = ty(t.placement);
          if (
            (null === (e = t.elements) || void 0 === e ? void 0 : e.arrow) &&
            r
          ) {
            Object.assign(t.elements.arrow.style, {
              [r.property]: r.value,
              width: th.cssVars.arrowSize.varRef,
              height: th.cssVars.arrowSize.varRef,
              zIndex: -1,
            });
            let e = {
              [th.cssVars.arrowSizeHalf.var]: "calc(".concat(
                th.cssVars.arrowSize.varRef,
                " / 2 - 1px)"
              ),
              [th.cssVars.arrowOffset.var]: "calc(".concat(
                th.cssVars.arrowSizeHalf.varRef,
                " * -1)"
              ),
            };
            for (let r in e) t.elements.arrow.style.setProperty(r, e[r]);
          }
        },
        ty = (t) =>
          t.startsWith("top")
            ? { property: "bottom", value: th.cssVars.arrowOffset.varRef }
            : t.startsWith("bottom")
            ? { property: "top", value: th.cssVars.arrowOffset.varRef }
            : t.startsWith("left")
            ? { property: "right", value: th.cssVars.arrowOffset.varRef }
            : t.startsWith("right")
            ? { property: "left", value: th.cssVars.arrowOffset.varRef }
            : void 0,
        tb = {
          name: "innerArrow",
          enabled: !0,
          phase: "main",
          requires: ["arrow"],
          fn: (t) => {
            let { state: e } = t;
            tx(e);
          },
          effect: (t) => {
            let { state: e } = t;
            return () => {
              tx(e);
            };
          },
        },
        tx = (t) => {
          if (!t.elements.arrow) return;
          let e = t.elements.arrow.querySelector("[data-popper-arrow-inner]");
          if (!e) return;
          let r = (0, th.Ke)(t.placement);
          r && e.style.setProperty("--popper-arrow-default-shadow", r),
            Object.assign(e.style, {
              transform: "rotate(45deg)",
              background: th.cssVars.arrowBg.varRef,
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              position: "absolute",
              zIndex: "inherit",
              boxShadow:
                "var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))",
            });
        },
        tw = {
          "start-start": { ltr: "left-start", rtl: "right-start" },
          "start-end": { ltr: "left-end", rtl: "right-end" },
          "end-start": { ltr: "right-start", rtl: "left-start" },
          "end-end": { ltr: "right-end", rtl: "left-end" },
          start: { ltr: "left", rtl: "right" },
          end: { ltr: "right", rtl: "left" },
        },
        tk = {
          "auto-start": "auto-end",
          "auto-end": "auto-start",
          "top-start": "top-end",
          "top-end": "top-start",
          "bottom-start": "bottom-end",
          "bottom-end": "bottom-start",
        };
      function tS() {
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          {
            enabled: e = !0,
            modifiers: r,
            placement: n = "bottom",
            strategy: i = "absolute",
            arrowPadding: o = 8,
            eventListeners: a = !0,
            offset: s,
            gutter: u = 8,
            flip: c = !0,
            boundary: d = "clippingParents",
            preventOverflow: h = !0,
            matchWidth: f,
            direction: p = "ltr",
          } = t,
          m = (0, td.useRef)(null),
          v = (0, td.useRef)(null),
          g = (0, td.useRef)(null),
          y = (function (t) {
            var e, r;
            let n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "ltr",
              i = (null === (e = tw[t]) || void 0 === e ? void 0 : e[n]) || t;
            return "ltr" === n
              ? i
              : null !== (r = tk[t]) && void 0 !== r
              ? r
              : i;
          })(n, p),
          b = (0, td.useRef)(() => {}),
          x = (0, td.useCallback)(() => {
            var t;
            e &&
              m.current &&
              v.current &&
              (null === (t = b.current) || void 0 === t || t.call(b),
              (g.current = tc(m.current, v.current, {
                placement: y,
                modifiers: [
                  tb,
                  tv,
                  tp,
                  { ...tf, enabled: !!f },
                  { name: "eventListeners", ...(0, th.$B)(a) },
                  { name: "arrow", options: { padding: o } },
                  {
                    name: "offset",
                    options: { offset: null != s ? s : [0, u] },
                  },
                  { name: "flip", enabled: !!c, options: { padding: 8 } },
                  {
                    name: "preventOverflow",
                    enabled: !!h,
                    options: { boundary: d },
                  },
                  ...(null != r ? r : []),
                ],
                strategy: i,
              })),
              g.current.forceUpdate(),
              (b.current = g.current.destroy));
          }, [y, e, r, f, a, o, s, u, c, h, d, i]);
        (0, td.useEffect)(
          () => () => {
            if (!m.current && !v.current) {
              var t;
              null === (t = g.current) || void 0 === t || t.destroy(),
                (g.current = null);
            }
          },
          []
        );
        let w = (0, td.useCallback)(
            (t) => {
              (m.current = t), x();
            },
            [x]
          ),
          k = (0, td.useCallback)(
            function () {
              let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
              return { ...t, ref: (0, l.mergeRefs)(w, e) };
            },
            [w]
          ),
          S = (0, td.useCallback)(
            (t) => {
              (v.current = t), x();
            },
            [x]
          ),
          P = (0, td.useCallback)(
            function () {
              let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
              return {
                ...t,
                ref: (0, l.mergeRefs)(S, e),
                style: {
                  ...t.style,
                  position: i,
                  minWidth: f ? void 0 : "max-content",
                  inset: "0 auto auto 0",
                },
              };
            },
            [i, S, f]
          ),
          T = (0, td.useCallback)(function () {
            let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null,
              { size: r, shadowColor: n, bg: i, style: o, ...a } = t;
            return {
              ...a,
              ref: e,
              "data-popper-arrow": "",
              style: (function (t) {
                let { size: e, shadowColor: r, bg: n, style: i } = t,
                  o = { ...i, position: "absolute" };
                return (
                  e && (o["--popper-arrow-size"] = e),
                  r && (o["--popper-arrow-shadow-color"] = r),
                  n && (o["--popper-arrow-bg"] = n),
                  o
                );
              })(t),
            };
          }, []),
          C = (0, td.useCallback)(function () {
            let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null;
            return { ...t, ref: e, "data-popper-arrow-inner": "" };
          }, []);
        return {
          update() {
            var t;
            null === (t = g.current) || void 0 === t || t.update();
          },
          forceUpdate() {
            var t;
            null === (t = g.current) || void 0 === t || t.forceUpdate();
          },
          transformOrigin: th.cssVars.transformOrigin.varRef,
          referenceRef: w,
          popperRef: S,
          getPopperProps: P,
          getArrowProps: T,
          getArrowInnerProps: C,
          getReferenceProps: k,
        };
      }
    },
    27080: function (t, e, r) {
      "use strict";
      r.d(e, {
        $B: function () {
          return u;
        },
        Ke: function () {
          return o;
        },
        cssVars: function () {
          return i;
        },
        mv: function () {
          return s;
        },
      });
      let n = (t, e) => ({
          var: t,
          varRef: e
            ? "var(".concat(t, ", ").concat(e, ")")
            : "var(".concat(t, ")"),
        }),
        i = {
          arrowShadowColor: n("--popper-arrow-shadow-color"),
          arrowSize: n("--popper-arrow-size", "8px"),
          arrowSizeHalf: n("--popper-arrow-size-half"),
          arrowBg: n("--popper-arrow-bg"),
          transformOrigin: n("--popper-transform-origin"),
          arrowOffset: n("--popper-arrow-offset"),
        };
      function o(t) {
        return t.includes("top")
          ? "1px 1px 0px 0 var(--popper-arrow-shadow-color)"
          : t.includes("bottom")
          ? "-1px -1px 0px 0 var(--popper-arrow-shadow-color)"
          : t.includes("right")
          ? "-1px 1px 0px 0 var(--popper-arrow-shadow-color)"
          : t.includes("left")
          ? "1px -1px 0px 0 var(--popper-arrow-shadow-color)"
          : void 0;
      }
      let a = {
          top: "bottom center",
          "top-start": "bottom left",
          "top-end": "bottom right",
          bottom: "top center",
          "bottom-start": "top left",
          "bottom-end": "top right",
          left: "right center",
          "left-start": "right top",
          "left-end": "right bottom",
          right: "left center",
          "right-start": "left top",
          "right-end": "left bottom",
        },
        s = (t) => a[t],
        l = { scroll: !0, resize: !0 };
      function u(t) {
        return "object" == typeof t
          ? { enabled: !0, options: { ...l, ...t } }
          : { enabled: t, options: l };
      }
    },
    72940: function (t, e, r) {
      "use strict";
      r.d(e, {
        Spinner: function () {
          return d;
        },
      });
      var n = r(57437),
        i = r(22223),
        o = r(24377),
        a = r(3146),
        s = r(44109),
        l = r(11535),
        u = r(81284);
      let c = (0, a.F4)({
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        }),
        d = (0, s.forwardRef)((t, e) => {
          let r = (0, l.useStyleConfig)("Spinner", t),
            {
              label: a = "Loading...",
              thickness: s = "2px",
              speed: d = "0.45s",
              emptyColor: h = "transparent",
              className: f,
              ...p
            } = (0, i.L)(t),
            m = (0, o.cx)("chakra-spinner", f),
            v = {
              display: "inline-block",
              borderColor: "currentColor",
              borderStyle: "solid",
              borderRadius: "99999px",
              borderWidth: s,
              borderBottomColor: h,
              borderLeftColor: h,
              animation: "".concat(c, " ").concat(d, " linear infinite"),
              ...r,
            };
          return (0, n.jsx)(u.chakra.div, {
            ref: e,
            __css: v,
            className: m,
            ...p,
            children:
              a && (0, n.jsx)(u.chakra.span, { srOnly: !0, children: a }),
          });
        });
      d.displayName = "Spinner";
    },
    62587: function (t, e, r) {
      "use strict";
      r.d(e, {
        Stack: function () {
          return c;
        },
      });
      var n = r(57437),
        i = r(97124),
        o = r(24377),
        a = r(2265),
        s = r(81284);
      let l = (t) =>
        (0, n.jsx)(s.chakra.div, {
          className: "chakra-stack__item",
          ...t,
          __css: {
            display: "inline-block",
            flex: "0 0 auto",
            minWidth: 0,
            ...t.__css,
          },
        });
      l.displayName = "StackItem";
      var u = r(80171);
      let c = (0, r(44109).forwardRef)((t, e) => {
        let {
            isInline: r,
            direction: c,
            align: d,
            justify: h,
            spacing: f = "0.5rem",
            wrap: p,
            children: m,
            divider: v,
            className: g,
            shouldWrapChildren: y,
            ...b
          } = t,
          x = r ? "row" : null != c ? c : "column",
          w = (0, a.useMemo)(
            () =>
              (function (t) {
                let { spacing: e, direction: r } = t,
                  n = {
                    column: {
                      my: e,
                      mx: 0,
                      borderLeftWidth: 0,
                      borderBottomWidth: "1px",
                    },
                    "column-reverse": {
                      my: e,
                      mx: 0,
                      borderLeftWidth: 0,
                      borderBottomWidth: "1px",
                    },
                    row: {
                      mx: e,
                      my: 0,
                      borderLeftWidth: "1px",
                      borderBottomWidth: 0,
                    },
                    "row-reverse": {
                      mx: e,
                      my: 0,
                      borderLeftWidth: "1px",
                      borderBottomWidth: 0,
                    },
                  };
                return { "&": (0, u.XQ)(r, (t) => n[t]) };
              })({ spacing: f, direction: x }),
            [f, x]
          ),
          k = !!v,
          S = !y && !k,
          P = (0, a.useMemo)(() => {
            let t = (0, i.W)(m);
            return S
              ? t
              : t.map((e, r) => {
                  let i = void 0 !== e.key ? e.key : r,
                    o = r + 1 === t.length,
                    s = (0, n.jsx)(l, { children: e }, i),
                    u = y ? s : e;
                  if (!k) return u;
                  let c = (0, a.cloneElement)(v, { __css: w });
                  return (0, n.jsxs)(
                    a.Fragment,
                    { children: [u, o ? null : c] },
                    i
                  );
                });
          }, [v, w, k, S, y, m]),
          T = (0, o.cx)("chakra-stack", g);
        return (0, n.jsx)(s.chakra.div, {
          ref: e,
          display: "flex",
          alignItems: d,
          justifyContent: h,
          flexDirection: x,
          flexWrap: p,
          gap: k ? void 0 : f,
          className: T,
          ...b,
          children: P,
        });
      });
      c.displayName = "Stack";
    },
    39292: function (t, e, r) {
      "use strict";
      r.d(e, {
        VStack: function () {
          return o;
        },
      });
      var n = r(57437),
        i = r(62587);
      let o = (0, r(44109).forwardRef)((t, e) =>
        (0, n.jsx)(i.Stack, {
          align: "center",
          ...t,
          direction: "column",
          ref: e,
        })
      );
      o.displayName = "VStack";
    },
    81284: function (t, e, r) {
      "use strict";
      r.d(e, {
        chakra: function () {
          return i;
        },
      });
      var n = r(30849);
      let i = (function () {
        let t = new Map();
        return new Proxy(n.styled, {
          apply: (t, e, r) => (0, n.styled)(...r),
          get: (e, r) => (t.has(r) || t.set(r, (0, n.styled)(r)), t.get(r)),
        });
      })();
    },
    44109: function (t, e, r) {
      "use strict";
      r.d(e, {
        forwardRef: function () {
          return i;
        },
      });
      var n = r(2265);
      function i(t) {
        return (0, n.forwardRef)(t);
      }
    },
    65948: function (t, e, r) {
      "use strict";
      r.d(e, {
        getToken: function () {
          return s;
        },
        useChakra: function () {
          return o;
        },
        useToken: function () {
          return a;
        },
      });
      var n = r(78183),
        i = r(7161);
      function o() {
        let t = (0, i.useColorMode)(),
          e = (0, n.useTheme)();
        return { ...t, theme: e };
      }
      function a(t, e, r) {
        let i = (0, n.useTheme)();
        return s(t, e, r)(i);
      }
      function s(t, e, r) {
        let n = Array.isArray(e) ? e : [e],
          i = Array.isArray(r) ? r : [r];
        return (r) => {
          let o = i.filter(Boolean),
            a = n.map((e, n) => {
              var i, a;
              return "breakpoints" === t
                ? (function (t, e, r) {
                    var n, i;
                    if (null == e) return e;
                    let o = (e) => {
                      var r, n;
                      return null === (n = t.__breakpoints) || void 0 === n
                        ? void 0
                        : null === (r = n.asArray) || void 0 === r
                        ? void 0
                        : r[e];
                    };
                    return null !==
                      (i = null !== (n = o(e)) && void 0 !== n ? n : o(r)) &&
                      void 0 !== i
                      ? i
                      : r;
                  })(r, e, null !== (i = o[n]) && void 0 !== i ? i : e)
                : (function (t, e, r) {
                    var n, i;
                    if (null == e) return e;
                    let o = (e) => {
                      var r, n;
                      return null === (n = t.__cssMap) || void 0 === n
                        ? void 0
                        : null === (r = n[e]) || void 0 === r
                        ? void 0
                        : r.value;
                    };
                    return null !==
                      (i = null !== (n = o(e)) && void 0 !== n ? n : o(r)) &&
                      void 0 !== i
                      ? i
                      : r;
                  })(
                    r,
                    "".concat(t, ".").concat(e),
                    null !== (a = o[n]) && void 0 !== a ? a : e
                  );
            });
          return Array.isArray(e) ? a : a[0];
        };
      }
    },
    86114: function (t, e, r) {
      "use strict";
      r.d(e, {
        shouldForwardProp: function () {
          return o;
        },
      });
      let n = new Set([
          ...r(83614).cC,
          "textStyle",
          "layerStyle",
          "apply",
          "noOfLines",
          "focusBorderColor",
          "errorBorderColor",
          "as",
          "__css",
          "css",
          "sx",
        ]),
        i = new Set(["htmlWidth", "htmlHeight", "htmlSize", "htmlTranslate"]);
      function o(t) {
        return (i.has(t) || !n.has(t)) && "_" !== t[0];
      }
    },
    30849: function (t, e, r) {
      "use strict";
      let n;
      r.d(e, {
        styled: function () {
          return p;
        },
        toCSSObject: function () {
          return f;
        },
      });
      var i = r(83614),
        o = r(92444),
        a = r(19323),
        s = r(29456),
        l = r(85968),
        u = r(2265),
        c = r(86114),
        d = r(7161);
      let h = (n = l.Z).default || n,
        f = (t) => {
          let { baseStyle: e } = t;
          return (t) => {
            let { theme: r, css: n, __css: l, sx: u, ...c } = t,
              [d] = (function (t, ...e) {
                let r = Object.getOwnPropertyDescriptors(t),
                  n = Object.keys(r),
                  i = (t) => {
                    let e = {};
                    for (let n = 0; n < t.length; n++) {
                      let i = t[n];
                      r[i] && (Object.defineProperty(e, i, r[i]), delete r[i]);
                    }
                    return e;
                  };
                return e
                  .map((t) => i(Array.isArray(t) ? t : n.filter(t)))
                  .concat(i(n));
              })(c, i.ZR),
              h = (function (t, ...e) {
                if (null == t)
                  throw TypeError("Cannot convert undefined or null to object");
                let r = { ...t };
                for (let t of e)
                  if (null != t)
                    for (let e in t)
                      Object.prototype.hasOwnProperty.call(t, e) &&
                        (e in r && delete r[e], (r[e] = t[e]));
                return r;
              })({}, l, (0, a.P)(e, t), (0, s.o)(d), u),
              f = (0, o.i)(h)(t.theme);
            return n ? [f, n] : f;
          };
        };
      function p(t, e) {
        let { baseStyle: r, ...n } = null != e ? e : {};
        n.shouldForwardProp || (n.shouldForwardProp = c.shouldForwardProp);
        let i = f({ baseStyle: r }),
          o = h(t, n)(i);
        return (0, u.forwardRef)(function (t, e) {
          let { children: r, ...n } = t,
            { colorMode: i, forced: a } = (0, d.useColorMode)();
          return (0,
          u.createElement)(o, { ref: e, "data-theme": a ? i : void 0, ...n }, r);
        });
      }
    },
    11535: function (t, e, r) {
      "use strict";
      r.d(e, {
        useMultiStyleConfig: function () {
          return m;
        },
        useStyleConfig: function () {
          return p;
        },
      });
      var n = r(46099),
        i = r(31463),
        o = r(19323),
        a = r(1314),
        s = r(52865),
        l = r(29456),
        u = r(10635),
        c = r(2265),
        d = r(8727),
        h = r(65948);
      function f(t) {
        var e;
        let r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { styleConfig: f, ...p } = r,
          { theme: m, colorMode: v } = (0, h.useChakra)(),
          g = t ? (0, s.W)(m, "components.".concat(t)) : void 0,
          y = f || g,
          b = a(
            { theme: m, colorMode: v },
            null !== (e = null == y ? void 0 : y.defaultProps) && void 0 !== e
              ? e
              : {},
            (0, l.o)((0, u.C)(p, ["children"])),
            (t, e) => (t ? void 0 : e)
          ),
          x = (0, c.useRef)({});
        if (y) {
          let t = ((t) => {
            let { variant: e, size: r, theme: s } = t,
              l = (function (t) {
                let e = t.__breakpoints;
                return function (t, r, s, l) {
                  var u;
                  if (!e) return;
                  let c = {},
                    d =
                      ((u = e.toArrayValue),
                      Array.isArray(s)
                        ? s
                        : (0, n.Kn)(s)
                        ? u(s)
                        : null != s
                        ? [s]
                        : void 0);
                  if (!d) return c;
                  let h = d.length,
                    f = 1 === h,
                    p = !!t.parts;
                  for (let n = 0; n < h; n++) {
                    let s = e.details[n],
                      u =
                        e.details[
                          (function (t, e) {
                            for (let r = e + 1; r < t.length; r++)
                              if (null != t[r]) return r;
                            return -1;
                          })(d, n)
                        ],
                      h = (0, i.Y)(s.minW, u?._minW),
                      m = (0, o.P)(t[r]?.[d[n]], l);
                    if (m) {
                      if (p) {
                        t.parts?.forEach((t) => {
                          a(c, { [t]: f ? m[t] : { [h]: m[t] } });
                        });
                        continue;
                      }
                      if (!p) {
                        f ? a(c, m) : (c[h] = m);
                        continue;
                      }
                      c[h] = m;
                    }
                  }
                  return c;
                };
              })(s);
            return a(
              {},
              (0, o.P)(y.baseStyle ?? {}, t),
              l(y, "sizes", r, t),
              l(y, "variants", e, t)
            );
          })(b);
          d(x.current, t) || (x.current = t);
        }
        return x.current;
      }
      function p(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return f(t, e);
      }
      function m(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return f(t, e);
      }
    },
    78183: function (t, e, r) {
      "use strict";
      r.d(e, {
        useTheme: function () {
          return o;
        },
      });
      var n = r(2775),
        i = r(2265);
      function o() {
        let t = (0, i.useContext)(n.T);
        if (!t)
          throw Error(
            "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
          );
        return t;
      }
    },
    51298: function (t, e, r) {
      "use strict";
      r.d(e, {
        Slide: function () {
          return d;
        },
      });
      var n = r(57437),
        i = r(24377),
        o = r(48614),
        a = r(3462),
        s = r(2265),
        l = r(10632);
      let u = {
          exit: { duration: 0.15, ease: l.TRANSITION_EASINGS.easeInOut },
          enter: { type: "spring", damping: 25, stiffness: 180 },
        },
        c = {
          exit: (t) => {
            var e;
            let { direction: r, transition: n, transitionEnd: i, delay: o } = t,
              { exit: a } = (0, l.getSlideTransition)({ direction: r });
            return {
              ...a,
              transition:
                null !== (e = null == n ? void 0 : n.exit) && void 0 !== e
                  ? e
                  : l.withDelay.exit(u.exit, o),
              transitionEnd: null == i ? void 0 : i.exit,
            };
          },
          enter: (t) => {
            var e;
            let { direction: r, transitionEnd: n, transition: i, delay: o } = t,
              { enter: a } = (0, l.getSlideTransition)({ direction: r });
            return {
              ...a,
              transition:
                null !== (e = null == i ? void 0 : i.enter) && void 0 !== e
                  ? e
                  : l.withDelay.enter(u.enter, o),
              transitionEnd: null == n ? void 0 : n.enter,
            };
          },
        },
        d = (0, s.forwardRef)(function (t, e) {
          let {
              direction: r = "right",
              style: s,
              unmountOnExit: u,
              in: d,
              className: h,
              transition: f,
              transitionEnd: p,
              delay: m,
              motionProps: v,
              animatePresenceProps: g,
              ...y
            } = t,
            b = Object.assign(
              { position: "fixed" },
              (0, l.getSlideTransition)({ direction: r }).position,
              s
            ),
            x = !u || (d && u),
            w = d || u ? "enter" : "exit",
            k = { transitionEnd: p, transition: f, direction: r, delay: m };
          return (0,
          n.jsx)(o.M, { ...g, custom: k, children: x && (0, n.jsx)(a.E.div, { ...y, ref: e, initial: "exit", className: (0, i.cx)("chakra-slide", h), animate: w, exit: "exit", custom: k, variants: c, style: b, ...v }) });
        });
      d.displayName = "Slide";
    },
    10632: function (t, e, r) {
      "use strict";
      r.d(e, {
        S: function () {
          return a;
        },
        TRANSITION_EASINGS: function () {
          return n;
        },
        getSlideTransition: function () {
          return o;
        },
        withDelay: function () {
          return s;
        },
      });
      let n = {
          ease: [0.25, 0.1, 0.25, 1],
          easeIn: [0.4, 0, 1, 1],
          easeOut: [0, 0, 0.2, 1],
          easeInOut: [0.4, 0, 0.2, 1],
        },
        i = {
          slideLeft: {
            position: { left: 0, top: 0, bottom: 0, width: "100%" },
            enter: { x: 0, y: 0 },
            exit: { x: "-100%", y: 0 },
          },
          slideRight: {
            position: { right: 0, top: 0, bottom: 0, width: "100%" },
            enter: { x: 0, y: 0 },
            exit: { x: "100%", y: 0 },
          },
          slideUp: {
            position: { top: 0, left: 0, right: 0, maxWidth: "100vw" },
            enter: { x: 0, y: 0 },
            exit: { x: 0, y: "-100%" },
          },
          slideDown: {
            position: { bottom: 0, left: 0, right: 0, maxWidth: "100vw" },
            enter: { x: 0, y: 0 },
            exit: { x: 0, y: "100%" },
          },
        };
      function o(t) {
        var e;
        switch (
          null !== (e = null == t ? void 0 : t.direction) && void 0 !== e
            ? e
            : "right"
        ) {
          case "right":
          default:
            return i.slideRight;
          case "left":
            return i.slideLeft;
          case "bottom":
            return i.slideDown;
          case "top":
            return i.slideUp;
        }
      }
      let a = {
          enter: { duration: 0.2, ease: n.easeOut },
          exit: { duration: 0.1, ease: n.easeIn },
        },
        s = {
          enter: (t, e) => ({
            ...t,
            delay: "number" == typeof e ? e : null == e ? void 0 : e.enter,
          }),
          exit: (t, e) => ({
            ...t,
            delay: "number" == typeof e ? e : null == e ? void 0 : e.exit,
          }),
        };
    },
    60373: function (t, e, r) {
      "use strict";
      r.d(e, {
        Text: function () {
          return c;
        },
      });
      var n = r(57437),
        i = r(22223),
        o = r(29456),
        a = r(24377),
        s = r(44109),
        l = r(11535),
        u = r(81284);
      let c = (0, s.forwardRef)(function (t, e) {
        let r = (0, l.useStyleConfig)("Text", t),
          {
            className: s,
            align: c,
            decoration: d,
            casing: h,
            ...f
          } = (0, i.L)(t),
          p = (0, o.o)({
            textAlign: t.align,
            textDecoration: t.decoration,
            textTransform: t.casing,
          });
        return (0,
        n.jsx)(u.chakra.p, { ref: e, className: (0, a.cx)("chakra-text", t.className), ...p, ...f, __css: r });
      });
      c.displayName = "Text";
    },
    92444: function (t, e, r) {
      "use strict";
      r.d(e, {
        i: function () {
          return d;
        },
      });
      var n = r(19323),
        i = r(46099),
        o = r(1314),
        a = r(67402),
        s = r(83614);
      let l = (t) => (e) => {
          if (!e.__breakpoints) return t;
          let { isResponsive: r, toArrayValue: o, media: a } = e.__breakpoints,
            s = {};
          for (let l in t) {
            let u = (0, n.P)(t[l], e);
            if (null == u) continue;
            if (!Array.isArray((u = (0, i.Kn)(u) && r(u) ? o(u) : u))) {
              s[l] = u;
              continue;
            }
            let c = u.slice(0, a.length).length;
            for (let t = 0; t < c; t += 1) {
              let e = a?.[t];
              if (!e) {
                s[l] = u[t];
                continue;
              }
              (s[e] = s[e] || {}), null != u[t] && (s[e][l] = u[t]);
            }
          }
          return s;
        },
        u = (t, e) =>
          t.startsWith("--") &&
          "string" == typeof e &&
          !/^var\(--.+\)$/.test(e),
        c = (t, e) => {
          if (null == e) return e;
          let r = (e) => t.__cssMap?.[e]?.varRef,
            n = (t) => r(t) ?? t,
            [i, o] = (function (t) {
              let e = [],
                r = "",
                n = !1;
              for (let i = 0; i < t.length; i++) {
                let o = t[i];
                "(" === o
                  ? ((n = !0), (r += o))
                  : ")" === o
                  ? ((n = !1), (r += o))
                  : "," !== o || n
                  ? (r += o)
                  : (e.push(r), (r = ""));
              }
              return (r = r.trim()) && e.push(r), e;
            })(e);
          return (e = r(i) ?? n(o) ?? n(e));
        },
        d = (t) => (e) =>
          (function (t) {
            let { configs: e = {}, pseudos: r = {}, theme: a } = t,
              s = (t, d = !1) => {
                let h = (0, n.P)(t, a),
                  f = l(h)(a),
                  p = {};
                for (let t in f) {
                  let l = f[t],
                    m = (0, n.P)(l, a);
                  t in r && (t = r[t]), u(t, m) && (m = c(a, m));
                  let v = e[t];
                  if ((!0 === v && (v = { property: t }), (0, i.Kn)(m))) {
                    (p[t] = p[t] ?? {}), (p[t] = o({}, p[t], s(m, !0)));
                    continue;
                  }
                  let g = v?.transform?.(m, a, h) ?? m;
                  g = v?.processResult ? s(g, !0) : g;
                  let y = (0, n.P)(v?.property, a);
                  if (
                    (!d && v?.static && (p = o({}, p, (0, n.P)(v.static, a))),
                    y && Array.isArray(y))
                  ) {
                    for (let t of y) p[t] = g;
                    continue;
                  }
                  if (y) {
                    "&" === y && (0, i.Kn)(g) ? (p = o({}, p, g)) : (p[y] = g);
                    continue;
                  }
                  if ((0, i.Kn)(g)) {
                    p = o({}, p, g);
                    continue;
                  }
                  p[t] = g;
                }
                return p;
              };
            return s;
          })({ theme: e, pseudos: a.v, configs: s.Ul })(t);
    },
    39572: function (t, e, r) {
      "use strict";
      function n(t) {
        return t;
      }
      function i(t) {
        return t;
      }
      function o(t) {
        return {
          definePartsStyle: (t) => t,
          defineMultiStyleConfig: (e) => ({ parts: t, ...e }),
        };
      }
      r.d(e, {
        D: function () {
          return o;
        },
        fj: function () {
          return i;
        },
        k0: function () {
          return n;
        },
      });
    },
    67402: function (t, e, r) {
      "use strict";
      r.d(e, {
        _: function () {
          return m;
        },
        v: function () {
          return p;
        },
      });
      let n = (t, e) => `${t}:hover ${e}, ${t}[data-hover] ${e}`,
        i = (t, e) => `${t}:focus ${e}, ${t}[data-focus] ${e}`,
        o = (t, e) => `${t}:focus-visible ${e}`,
        a = (t, e) => `${t}:focus-within ${e}`,
        s = (t, e) => `${t}:active ${e}, ${t}[data-active] ${e}`,
        l = (t, e) => `${t}:disabled ${e}, ${t}[data-disabled] ${e}`,
        u = (t, e) => `${t}:invalid ${e}, ${t}[data-invalid] ${e}`,
        c = (t, e) => `${t}:checked ${e}, ${t}[data-checked] ${e}`,
        d = (t) =>
          f((e) => t(e, "&"), "[role=group]", "[data-group]", ".group"),
        h = (t) => f((e) => t(e, "~ &"), "[data-peer]", ".peer"),
        f = (t, ...e) => e.map(t).join(", "),
        p = {
          _hover: "&:hover, &[data-hover]",
          _active: "&:active, &[data-active]",
          _focus: "&:focus, &[data-focus]",
          _highlighted: "&[data-highlighted]",
          _focusWithin: "&:focus-within, &[data-focus-within]",
          _focusVisible: "&:focus-visible, &[data-focus-visible]",
          _disabled:
            "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
          _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
          _before: "&::before",
          _after: "&::after",
          _empty: "&:empty, &[data-empty]",
          _expanded:
            "&[aria-expanded=true], &[data-expanded], &[data-state=expanded]",
          _checked:
            "&[aria-checked=true], &[data-checked], &[data-state=checked]",
          _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
          _pressed: "&[aria-pressed=true], &[data-pressed]",
          _invalid: "&[aria-invalid=true], &[data-invalid]",
          _valid: "&[data-valid], &[data-state=valid]",
          _loading: "&[data-loading], &[aria-busy=true]",
          _selected: "&[aria-selected=true], &[data-selected]",
          _hidden: "&[hidden], &[data-hidden]",
          _autofill: "&:-webkit-autofill",
          _even: "&:nth-of-type(even)",
          _odd: "&:nth-of-type(odd)",
          _first: "&:first-of-type",
          _firstLetter: "&::first-letter",
          _last: "&:last-of-type",
          _notFirst: "&:not(:first-of-type)",
          _notLast: "&:not(:last-of-type)",
          _visited: "&:visited",
          _activeLink: "&[aria-current=page]",
          _activeStep: "&[aria-current=step]",
          _indeterminate:
            "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate], &[data-state=indeterminate]",
          _groupOpen: d(
            (t, e) => `${t}[data-open], ${t}[open], ${t}[data-state=open] ${e}`
          ),
          _groupClosed: d(
            (t, e) => `${t}[data-closed], ${t}[data-state=closed] ${e}`
          ),
          _groupHover: d(n),
          _peerHover: h(n),
          _groupFocus: d(i),
          _peerFocus: h(i),
          _groupFocusVisible: d(o),
          _peerFocusVisible: h(o),
          _groupActive: d(s),
          _peerActive: h(s),
          _groupDisabled: d(l),
          _peerDisabled: h(l),
          _groupInvalid: d(u),
          _peerInvalid: h(u),
          _groupChecked: d(c),
          _peerChecked: h(c),
          _groupFocusWithin: d(a),
          _peerFocusWithin: h(a),
          _peerPlaceholderShown: h((t, e) => `${t}:placeholder-shown ${e}`),
          _placeholder: "&::placeholder, &[data-placeholder]",
          _placeholderShown: "&:placeholder-shown, &[data-placeholder-shown]",
          _fullScreen: "&:fullscreen, &[data-fullscreen]",
          _selection: "&::selection",
          _rtl: "[dir=rtl] &, &[dir=rtl]",
          _ltr: "[dir=ltr] &, &[dir=ltr]",
          _mediaDark: "@media (prefers-color-scheme: dark)",
          _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
          _dark:
            ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
          _light:
            ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",
          _horizontal: "&[data-orientation=horizontal]",
          _vertical: "&[data-orientation=vertical]",
          _open: "&[data-open], &[open], &[data-state=open]",
          _closed: "&[data-closed], &[data-state=closed]",
          _complete: "&[data-complete]",
          _incomplete: "&[data-incomplete]",
          _current: "&[data-current]",
        },
        m = Object.keys(p);
    },
    83614: function (t, e, r) {
      "use strict";
      r.d(e, {
        ZR: function () {
          return G;
        },
        oE: function () {
          return Y;
        },
        cC: function () {
          return q;
        },
        Ul: function () {
          return H;
        },
      });
      var n = r(1314),
        i = r(67402),
        o = r(46099);
      let a = (t) => /!(important)?$/.test(t),
        s = (t) =>
          "string" == typeof t ? t.replace(/!(important)?$/, "").trim() : t,
        l = (t, e) => (r) => {
          let n = String(e),
            i = a(n),
            l = s(n),
            u = t ? `${t}.${l}` : l,
            c =
              (0, o.Kn)(r.__cssMap) && u in r.__cssMap
                ? r.__cssMap[u].varRef
                : e;
          return (c = s(c)), i ? `${c} !important` : c;
        };
      function u(t) {
        let { scale: e, transform: r, compose: n } = t;
        return (t, i) => {
          let o = l(e, t)(i),
            a = r?.(o, i) ?? o;
          return n && (a = n(a, i)), a;
        };
      }
      let c =
        (...t) =>
        (e) =>
          t.reduce((t, e) => e(t), e);
      function d(t, e) {
        return (r) => {
          let n = { property: r, scale: t };
          return (n.transform = u({ scale: t, transform: e })), n;
        };
      }
      let h =
          ({ rtl: t, ltr: e }) =>
          (r) =>
            "rtl" === r.direction ? t : e,
        f = [
          "rotate(var(--chakra-rotate, 0))",
          "scaleX(var(--chakra-scale-x, 1))",
          "scaleY(var(--chakra-scale-y, 1))",
          "skewX(var(--chakra-skew-x, 0))",
          "skewY(var(--chakra-skew-y, 0))",
        ],
        p = {
          "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
          filter:
            "var(--chakra-blur) var(--chakra-brightness) var(--chakra-contrast) var(--chakra-grayscale) var(--chakra-hue-rotate) var(--chakra-invert) var(--chakra-saturate) var(--chakra-sepia) var(--chakra-drop-shadow)",
        },
        m = {
          backdropFilter:
            "var(--chakra-backdrop-blur) var(--chakra-backdrop-brightness) var(--chakra-backdrop-contrast) var(--chakra-backdrop-grayscale) var(--chakra-backdrop-hue-rotate) var(--chakra-backdrop-invert) var(--chakra-backdrop-opacity) var(--chakra-backdrop-saturate) var(--chakra-backdrop-sepia)",
          "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
        },
        v = {
          "row-reverse": {
            space: "--chakra-space-x-reverse",
            divide: "--chakra-divide-x-reverse",
          },
          "column-reverse": {
            space: "--chakra-space-y-reverse",
            divide: "--chakra-divide-y-reverse",
          },
        },
        g = {
          "to-t": "to top",
          "to-tr": "to top right",
          "to-r": "to right",
          "to-br": "to bottom right",
          "to-b": "to bottom",
          "to-bl": "to bottom left",
          "to-l": "to left",
          "to-tl": "to top left",
        },
        y = new Set(Object.values(g)),
        b = new Set([
          "none",
          "-moz-initial",
          "inherit",
          "initial",
          "revert",
          "unset",
        ]),
        x = (t) => t.trim(),
        w = (t) => "string" == typeof t && t.includes("(") && t.includes(")"),
        k = (t) => {
          let e = parseFloat(t.toString()),
            r = t.toString().replace(String(e), "");
          return { unitless: !r, value: e, unit: r };
        },
        S = (t) => (e) => `${t}(${e})`,
        P = {
          filter: (t) => ("auto" !== t ? t : p),
          backdropFilter: (t) => ("auto" !== t ? t : m),
          ring: (t) => ({
            "--chakra-ring-offset-shadow":
              "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
            "--chakra-ring-shadow":
              "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
            "--chakra-ring-width": P.px(t),
            boxShadow:
              "var(--chakra-ring-offset-shadow), var(--chakra-ring-shadow), var(--chakra-shadow, 0 0 #0000)",
          }),
          bgClip: (t) =>
            "text" === t
              ? { color: "transparent", backgroundClip: "text" }
              : { backgroundClip: t },
          transform: (t) =>
            "auto" === t
              ? [
                  "translateX(var(--chakra-translate-x, 0))",
                  "translateY(var(--chakra-translate-y, 0))",
                  ...f,
                ].join(" ")
              : "auto-gpu" === t
              ? [
                  "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
                  ...f,
                ].join(" ")
              : t,
          vh: (t) => ("$100vh" === t ? "var(--chakra-vh)" : t),
          px(t) {
            if (null == t) return t;
            let { unitless: e } = k(t);
            return e || "number" == typeof t ? `${t}px` : t;
          },
          fraction: (t) => ("number" != typeof t || t > 1 ? t : `${100 * t}%`),
          float: (t, e) =>
            "rtl" === e.direction ? { left: "right", right: "left" }[t] : t,
          degree(t) {
            if (/^var\(--.+\)$/.test(t) || null == t) return t;
            let e = "string" == typeof t && !t.endsWith("deg");
            return "number" == typeof t || e ? `${t}deg` : t;
          },
          gradient: (t, e) =>
            (function (t, e) {
              if (null == t || b.has(t)) return t;
              if (!(w(t) || b.has(t))) return `url('${t}')`;
              let r = /(^[a-z-A-Z]+)\((.*)\)/g.exec(t),
                n = r?.[1],
                i = r?.[2];
              if (!n || !i) return t;
              let o = n.includes("-gradient") ? n : `${n}-gradient`,
                [a, ...s] = i.split(",").map(x).filter(Boolean);
              if (s?.length === 0) return t;
              let l = a in g ? g[a] : a;
              s.unshift(l);
              let u = s.map((t) => {
                if (y.has(t)) return t;
                let r = t.indexOf(" "),
                  [n, i] = -1 !== r ? [t.substr(0, r), t.substr(r + 1)] : [t],
                  o = w(i) ? i : i && i.split(" "),
                  a = `colors.${n}`,
                  s = a in e.__cssMap ? e.__cssMap[a].varRef : n;
                return o ? [s, ...(Array.isArray(o) ? o : [o])].join(" ") : s;
              });
              return `${o}(${u.join(", ")})`;
            })(t, e ?? {}),
          blur: S("blur"),
          opacity: S("opacity"),
          brightness: S("brightness"),
          contrast: S("contrast"),
          dropShadow: S("drop-shadow"),
          grayscale: S("grayscale"),
          hueRotate: (t) => S("hue-rotate")(P.degree(t)),
          invert: S("invert"),
          saturate: S("saturate"),
          sepia: S("sepia"),
          bgImage: (t) => (null == t ? t : w(t) || b.has(t) ? t : `url(${t})`),
          outline(t) {
            let e = "0" === String(t) || "none" === String(t);
            return null !== t && e
              ? { outline: "2px solid transparent", outlineOffset: "2px" }
              : { outline: t };
          },
          flexDirection(t) {
            let { space: e, divide: r } = v[t] ?? {},
              n = { flexDirection: t };
            return e && (n[e] = 1), r && (n[r] = 1), n;
          },
        },
        T = {
          borderWidths: d("borderWidths"),
          borderStyles: d("borderStyles"),
          colors: d("colors"),
          borders: d("borders"),
          gradients: d("gradients", P.gradient),
          radii: d("radii", P.px),
          space: d("space", c(P.vh, P.px)),
          spaceT: d("space", c(P.vh, P.px)),
          degreeT: (t) => ({ property: t, transform: P.degree }),
          prop: (t, e, r) => ({
            property: t,
            scale: e,
            ...(e && { transform: u({ scale: e, transform: r }) }),
          }),
          propT: (t, e) => ({ property: t, transform: e }),
          sizes: d("sizes", c(P.vh, P.px)),
          sizesT: d("sizes", c(P.vh, P.fraction)),
          shadows: d("shadows"),
          logical: function (t) {
            let { property: e, scale: r, transform: n } = t;
            return {
              scale: r,
              property: h(e),
              transform: r ? u({ scale: r, compose: n }) : n,
            };
          },
          blur: d("blur", P.blur),
        },
        C = {
          background: T.colors("background"),
          backgroundColor: T.colors("backgroundColor"),
          backgroundImage: T.gradients("backgroundImage"),
          backgroundSize: !0,
          backgroundPosition: !0,
          backgroundRepeat: !0,
          backgroundAttachment: !0,
          backgroundClip: { transform: P.bgClip },
          bgSize: T.prop("backgroundSize"),
          bgPosition: T.prop("backgroundPosition"),
          bg: T.colors("background"),
          bgColor: T.colors("backgroundColor"),
          bgPos: T.prop("backgroundPosition"),
          bgRepeat: T.prop("backgroundRepeat"),
          bgAttachment: T.prop("backgroundAttachment"),
          bgGradient: T.gradients("backgroundImage"),
          bgClip: { transform: P.bgClip },
        };
      Object.assign(C, {
        bgImage: C.backgroundImage,
        bgImg: C.backgroundImage,
      });
      let E = {
        border: T.borders("border"),
        borderWidth: T.borderWidths("borderWidth"),
        borderStyle: T.borderStyles("borderStyle"),
        borderColor: T.colors("borderColor"),
        borderRadius: T.radii("borderRadius"),
        borderTop: T.borders("borderTop"),
        borderBlockStart: T.borders("borderBlockStart"),
        borderTopLeftRadius: T.radii("borderTopLeftRadius"),
        borderStartStartRadius: T.logical({
          scale: "radii",
          property: { ltr: "borderTopLeftRadius", rtl: "borderTopRightRadius" },
        }),
        borderEndStartRadius: T.logical({
          scale: "radii",
          property: {
            ltr: "borderBottomLeftRadius",
            rtl: "borderBottomRightRadius",
          },
        }),
        borderTopRightRadius: T.radii("borderTopRightRadius"),
        borderStartEndRadius: T.logical({
          scale: "radii",
          property: { ltr: "borderTopRightRadius", rtl: "borderTopLeftRadius" },
        }),
        borderEndEndRadius: T.logical({
          scale: "radii",
          property: {
            ltr: "borderBottomRightRadius",
            rtl: "borderBottomLeftRadius",
          },
        }),
        borderRight: T.borders("borderRight"),
        borderInlineEnd: T.borders("borderInlineEnd"),
        borderBottom: T.borders("borderBottom"),
        borderBlockEnd: T.borders("borderBlockEnd"),
        borderBottomLeftRadius: T.radii("borderBottomLeftRadius"),
        borderBottomRightRadius: T.radii("borderBottomRightRadius"),
        borderLeft: T.borders("borderLeft"),
        borderInlineStart: { property: "borderInlineStart", scale: "borders" },
        borderInlineStartRadius: T.logical({
          scale: "radii",
          property: {
            ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
            rtl: ["borderTopRightRadius", "borderBottomRightRadius"],
          },
        }),
        borderInlineEndRadius: T.logical({
          scale: "radii",
          property: {
            ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
            rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"],
          },
        }),
        borderX: T.borders(["borderLeft", "borderRight"]),
        borderInline: T.borders("borderInline"),
        borderY: T.borders(["borderTop", "borderBottom"]),
        borderBlock: T.borders("borderBlock"),
        borderTopWidth: T.borderWidths("borderTopWidth"),
        borderBlockStartWidth: T.borderWidths("borderBlockStartWidth"),
        borderTopColor: T.colors("borderTopColor"),
        borderBlockStartColor: T.colors("borderBlockStartColor"),
        borderTopStyle: T.borderStyles("borderTopStyle"),
        borderBlockStartStyle: T.borderStyles("borderBlockStartStyle"),
        borderBottomWidth: T.borderWidths("borderBottomWidth"),
        borderBlockEndWidth: T.borderWidths("borderBlockEndWidth"),
        borderBottomColor: T.colors("borderBottomColor"),
        borderBlockEndColor: T.colors("borderBlockEndColor"),
        borderBottomStyle: T.borderStyles("borderBottomStyle"),
        borderBlockEndStyle: T.borderStyles("borderBlockEndStyle"),
        borderLeftWidth: T.borderWidths("borderLeftWidth"),
        borderInlineStartWidth: T.borderWidths("borderInlineStartWidth"),
        borderLeftColor: T.colors("borderLeftColor"),
        borderInlineStartColor: T.colors("borderInlineStartColor"),
        borderLeftStyle: T.borderStyles("borderLeftStyle"),
        borderInlineStartStyle: T.borderStyles("borderInlineStartStyle"),
        borderRightWidth: T.borderWidths("borderRightWidth"),
        borderInlineEndWidth: T.borderWidths("borderInlineEndWidth"),
        borderRightColor: T.colors("borderRightColor"),
        borderInlineEndColor: T.colors("borderInlineEndColor"),
        borderRightStyle: T.borderStyles("borderRightStyle"),
        borderInlineEndStyle: T.borderStyles("borderInlineEndStyle"),
        borderTopRadius: T.radii([
          "borderTopLeftRadius",
          "borderTopRightRadius",
        ]),
        borderBottomRadius: T.radii([
          "borderBottomLeftRadius",
          "borderBottomRightRadius",
        ]),
        borderLeftRadius: T.radii([
          "borderTopLeftRadius",
          "borderBottomLeftRadius",
        ]),
        borderRightRadius: T.radii([
          "borderTopRightRadius",
          "borderBottomRightRadius",
        ]),
      };
      Object.assign(E, {
        rounded: E.borderRadius,
        roundedTop: E.borderTopRadius,
        roundedTopLeft: E.borderTopLeftRadius,
        roundedTopRight: E.borderTopRightRadius,
        roundedTopStart: E.borderStartStartRadius,
        roundedTopEnd: E.borderStartEndRadius,
        roundedBottom: E.borderBottomRadius,
        roundedBottomLeft: E.borderBottomLeftRadius,
        roundedBottomRight: E.borderBottomRightRadius,
        roundedBottomStart: E.borderEndStartRadius,
        roundedBottomEnd: E.borderEndEndRadius,
        roundedLeft: E.borderLeftRadius,
        roundedRight: E.borderRightRadius,
        roundedStart: E.borderInlineStartRadius,
        roundedEnd: E.borderInlineEndRadius,
        borderStart: E.borderInlineStart,
        borderEnd: E.borderInlineEnd,
        borderTopStartRadius: E.borderStartStartRadius,
        borderTopEndRadius: E.borderStartEndRadius,
        borderBottomStartRadius: E.borderEndStartRadius,
        borderBottomEndRadius: E.borderEndEndRadius,
        borderStartRadius: E.borderInlineStartRadius,
        borderEndRadius: E.borderInlineEndRadius,
        borderStartWidth: E.borderInlineStartWidth,
        borderEndWidth: E.borderInlineEndWidth,
        borderStartColor: E.borderInlineStartColor,
        borderEndColor: E.borderInlineEndColor,
        borderStartStyle: E.borderInlineStartStyle,
        borderEndStyle: E.borderInlineEndStyle,
      });
      let R = {
          color: T.colors("color"),
          textColor: T.colors("color"),
          fill: T.colors("fill"),
          stroke: T.colors("stroke"),
          accentColor: T.colors("accentColor"),
          textFillColor: T.colors("textFillColor"),
        },
        A = {
          alignItems: !0,
          alignContent: !0,
          justifyItems: !0,
          justifyContent: !0,
          flexWrap: !0,
          flexDirection: { transform: P.flexDirection },
          flex: !0,
          flexFlow: !0,
          flexGrow: !0,
          flexShrink: !0,
          flexBasis: T.sizes("flexBasis"),
          justifySelf: !0,
          alignSelf: !0,
          order: !0,
          placeItems: !0,
          placeContent: !0,
          placeSelf: !0,
          gap: T.space("gap"),
          rowGap: T.space("rowGap"),
          columnGap: T.space("columnGap"),
        };
      Object.assign(A, { flexDir: A.flexDirection });
      let j = {
        width: T.sizesT("width"),
        inlineSize: T.sizesT("inlineSize"),
        height: T.sizes("height"),
        blockSize: T.sizes("blockSize"),
        boxSize: T.sizes(["width", "height"]),
        minWidth: T.sizes("minWidth"),
        minInlineSize: T.sizes("minInlineSize"),
        minHeight: T.sizes("minHeight"),
        minBlockSize: T.sizes("minBlockSize"),
        maxWidth: T.sizes("maxWidth"),
        maxInlineSize: T.sizes("maxInlineSize"),
        maxHeight: T.sizes("maxHeight"),
        maxBlockSize: T.sizes("maxBlockSize"),
        overflow: !0,
        overflowX: !0,
        overflowY: !0,
        overscrollBehavior: !0,
        overscrollBehaviorX: !0,
        overscrollBehaviorY: !0,
        display: !0,
        aspectRatio: !0,
        hideFrom: {
          scale: "breakpoints",
          transform: (t, e) => {
            let r = e.__breakpoints?.get(t)?.minW ?? t;
            return {
              [`@media screen and (min-width: ${r})`]: { display: "none" },
            };
          },
        },
        hideBelow: {
          scale: "breakpoints",
          transform: (t, e) => {
            let r = e.__breakpoints?.get(t)?._minW ?? t;
            return {
              [`@media screen and (max-width: ${r})`]: { display: "none" },
            };
          },
        },
        verticalAlign: !0,
        boxSizing: !0,
        boxDecorationBreak: !0,
        float: T.propT("float", P.float),
        objectFit: !0,
        objectPosition: !0,
        visibility: !0,
        isolation: !0,
      };
      Object.assign(j, {
        w: j.width,
        h: j.height,
        minW: j.minWidth,
        maxW: j.maxWidth,
        minH: j.minHeight,
        maxH: j.maxHeight,
        overscroll: j.overscrollBehavior,
        overscrollX: j.overscrollBehaviorX,
        overscrollY: j.overscrollBehaviorY,
      });
      let _ = {
          filter: { transform: P.filter },
          blur: T.blur("--chakra-blur"),
          brightness: T.propT("--chakra-brightness", P.brightness),
          contrast: T.propT("--chakra-contrast", P.contrast),
          hueRotate: T.propT("--chakra-hue-rotate", P.hueRotate),
          invert: T.propT("--chakra-invert", P.invert),
          saturate: T.propT("--chakra-saturate", P.saturate),
          dropShadow: T.propT("--chakra-drop-shadow", P.dropShadow),
          backdropFilter: { transform: P.backdropFilter },
          backdropBlur: T.blur("--chakra-backdrop-blur"),
          backdropBrightness: T.propT(
            "--chakra-backdrop-brightness",
            P.brightness
          ),
          backdropContrast: T.propT("--chakra-backdrop-contrast", P.contrast),
          backdropHueRotate: T.propT(
            "--chakra-backdrop-hue-rotate",
            P.hueRotate
          ),
          backdropInvert: T.propT("--chakra-backdrop-invert", P.invert),
          backdropSaturate: T.propT("--chakra-backdrop-saturate", P.saturate),
        },
        O = {
          ring: { transform: P.ring },
          ringColor: T.colors("--chakra-ring-color"),
          ringOffset: T.prop("--chakra-ring-offset-width"),
          ringOffsetColor: T.colors("--chakra-ring-offset-color"),
          ringInset: T.prop("--chakra-ring-inset"),
        },
        M = {
          appearance: !0,
          cursor: !0,
          resize: !0,
          userSelect: !0,
          pointerEvents: !0,
          outline: { transform: P.outline },
          outlineOffset: !0,
          outlineColor: T.colors("outlineColor"),
        },
        D = {
          gridGap: T.space("gridGap"),
          gridColumnGap: T.space("gridColumnGap"),
          gridRowGap: T.space("gridRowGap"),
          gridColumn: !0,
          gridRow: !0,
          gridAutoFlow: !0,
          gridAutoColumns: !0,
          gridColumnStart: !0,
          gridColumnEnd: !0,
          gridRowStart: !0,
          gridRowEnd: !0,
          gridAutoRows: !0,
          gridTemplate: !0,
          gridTemplateColumns: !0,
          gridTemplateRows: !0,
          gridTemplateAreas: !0,
          gridArea: !0,
        },
        B = ((t) => {
          let e = new WeakMap();
          return (r, n, i, o) => {
            if (void 0 === r) return t(r, n, i);
            e.has(r) || e.set(r, new Map());
            let a = e.get(r);
            if (a.has(n)) return a.get(n);
            let s = t(r, n, i, o);
            return a.set(n, s), s;
          };
        })(function (t, e, r, n) {
          let i = "string" == typeof e ? e.split(".") : [e];
          for (n = 0; n < i.length && t; n += 1) t = t[i[n]];
          return void 0 === t ? r : t;
        }),
        L = {
          border: "0px",
          clip: "rect(0, 0, 0, 0)",
          width: "1px",
          height: "1px",
          margin: "-1px",
          padding: "0px",
          overflow: "hidden",
          whiteSpace: "nowrap",
          position: "absolute",
        },
        V = {
          position: "static",
          width: "auto",
          height: "auto",
          clip: "auto",
          padding: "0",
          margin: "0",
          overflow: "visible",
          whiteSpace: "normal",
        },
        I = (t, e, r) => {
          let n = {},
            i = B(t, e, {});
          for (let t in i) (t in r && null != r[t]) || (n[t] = i[t]);
          return n;
        },
        F = {
          position: !0,
          pos: T.prop("position"),
          zIndex: T.prop("zIndex", "zIndices"),
          inset: T.spaceT("inset"),
          insetX: T.spaceT(["left", "right"]),
          insetInline: T.spaceT("insetInline"),
          insetY: T.spaceT(["top", "bottom"]),
          insetBlock: T.spaceT("insetBlock"),
          top: T.spaceT("top"),
          insetBlockStart: T.spaceT("insetBlockStart"),
          bottom: T.spaceT("bottom"),
          insetBlockEnd: T.spaceT("insetBlockEnd"),
          left: T.spaceT("left"),
          insetInlineStart: T.logical({
            scale: "space",
            property: { ltr: "left", rtl: "right" },
          }),
          right: T.spaceT("right"),
          insetInlineEnd: T.logical({
            scale: "space",
            property: { ltr: "right", rtl: "left" },
          }),
        };
      Object.assign(F, {
        insetStart: F.insetInlineStart,
        insetEnd: F.insetInlineEnd,
      });
      let $ = {
        boxShadow: T.shadows("boxShadow"),
        mixBlendMode: !0,
        blendMode: T.prop("mixBlendMode"),
        backgroundBlendMode: !0,
        bgBlendMode: T.prop("backgroundBlendMode"),
        opacity: !0,
      };
      Object.assign($, { shadow: $.boxShadow });
      let W = {
        margin: T.spaceT("margin"),
        marginTop: T.spaceT("marginTop"),
        marginBlockStart: T.spaceT("marginBlockStart"),
        marginRight: T.spaceT("marginRight"),
        marginInlineEnd: T.spaceT("marginInlineEnd"),
        marginBottom: T.spaceT("marginBottom"),
        marginBlockEnd: T.spaceT("marginBlockEnd"),
        marginLeft: T.spaceT("marginLeft"),
        marginInlineStart: T.spaceT("marginInlineStart"),
        marginX: T.spaceT(["marginInlineStart", "marginInlineEnd"]),
        marginInline: T.spaceT("marginInline"),
        marginY: T.spaceT(["marginTop", "marginBottom"]),
        marginBlock: T.spaceT("marginBlock"),
        padding: T.space("padding"),
        paddingTop: T.space("paddingTop"),
        paddingBlockStart: T.space("paddingBlockStart"),
        paddingRight: T.space("paddingRight"),
        paddingBottom: T.space("paddingBottom"),
        paddingBlockEnd: T.space("paddingBlockEnd"),
        paddingLeft: T.space("paddingLeft"),
        paddingInlineStart: T.space("paddingInlineStart"),
        paddingInlineEnd: T.space("paddingInlineEnd"),
        paddingX: T.space(["paddingInlineStart", "paddingInlineEnd"]),
        paddingInline: T.space("paddingInline"),
        paddingY: T.space(["paddingTop", "paddingBottom"]),
        paddingBlock: T.space("paddingBlock"),
      };
      Object.assign(W, {
        m: W.margin,
        mt: W.marginTop,
        mr: W.marginRight,
        me: W.marginInlineEnd,
        marginEnd: W.marginInlineEnd,
        mb: W.marginBottom,
        ml: W.marginLeft,
        ms: W.marginInlineStart,
        marginStart: W.marginInlineStart,
        mx: W.marginX,
        my: W.marginY,
        p: W.padding,
        pt: W.paddingTop,
        py: W.paddingY,
        px: W.paddingX,
        pb: W.paddingBottom,
        pl: W.paddingLeft,
        ps: W.paddingInlineStart,
        paddingStart: W.paddingInlineStart,
        pr: W.paddingRight,
        pe: W.paddingInlineEnd,
        paddingEnd: W.paddingInlineEnd,
      });
      let N = {
          scrollBehavior: !0,
          scrollSnapAlign: !0,
          scrollSnapStop: !0,
          scrollSnapType: !0,
          scrollMargin: T.spaceT("scrollMargin"),
          scrollMarginTop: T.spaceT("scrollMarginTop"),
          scrollMarginBottom: T.spaceT("scrollMarginBottom"),
          scrollMarginLeft: T.spaceT("scrollMarginLeft"),
          scrollMarginRight: T.spaceT("scrollMarginRight"),
          scrollMarginX: T.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
          scrollMarginY: T.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
          scrollPadding: T.spaceT("scrollPadding"),
          scrollPaddingTop: T.spaceT("scrollPaddingTop"),
          scrollPaddingBottom: T.spaceT("scrollPaddingBottom"),
          scrollPaddingLeft: T.spaceT("scrollPaddingLeft"),
          scrollPaddingRight: T.spaceT("scrollPaddingRight"),
          scrollPaddingX: T.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
          scrollPaddingY: T.spaceT(["scrollPaddingTop", "scrollPaddingBottom"]),
        },
        z = {
          fontFamily: T.prop("fontFamily", "fonts"),
          fontSize: T.prop("fontSize", "fontSizes", P.px),
          fontWeight: T.prop("fontWeight", "fontWeights"),
          lineHeight: T.prop("lineHeight", "lineHeights"),
          letterSpacing: T.prop("letterSpacing", "letterSpacings"),
          textAlign: !0,
          fontStyle: !0,
          textIndent: !0,
          wordBreak: !0,
          overflowWrap: !0,
          textOverflow: !0,
          textTransform: !0,
          whiteSpace: !0,
          isTruncated: {
            transform(t) {
              if (!0 === t)
                return {
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                };
            },
          },
          noOfLines: {
            static: {
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: "var(--chakra-line-clamp)",
            },
            property: "--chakra-line-clamp",
          },
        },
        U = {
          textDecorationColor: T.colors("textDecorationColor"),
          textDecoration: !0,
          textDecor: { property: "textDecoration" },
          textDecorationLine: !0,
          textDecorationStyle: !0,
          textDecorationThickness: !0,
          textUnderlineOffset: !0,
          textShadow: T.shadows("textShadow"),
        },
        X = {
          clipPath: !0,
          transform: T.propT("transform", P.transform),
          transformOrigin: !0,
          translateX: T.spaceT("--chakra-translate-x"),
          translateY: T.spaceT("--chakra-translate-y"),
          skewX: T.degreeT("--chakra-skew-x"),
          skewY: T.degreeT("--chakra-skew-y"),
          scaleX: T.prop("--chakra-scale-x"),
          scaleY: T.prop("--chakra-scale-y"),
          scale: T.prop(["--chakra-scale-x", "--chakra-scale-y"]),
          rotate: T.degreeT("--chakra-rotate"),
        },
        H = n(
          {},
          C,
          E,
          R,
          A,
          j,
          _,
          O,
          M,
          D,
          {
            srOnly: {
              transform: (t) => (!0 === t ? L : "focusable" === t ? V : {}),
            },
            layerStyle: {
              processResult: !0,
              transform: (t, e, r) => I(e, `layerStyles.${t}`, r),
            },
            textStyle: {
              processResult: !0,
              transform: (t, e, r) => I(e, `textStyles.${t}`, r),
            },
            apply: { processResult: !0, transform: (t, e, r) => I(e, t, r) },
          },
          F,
          $,
          W,
          N,
          z,
          U,
          X,
          {
            listStyleType: !0,
            listStylePosition: !0,
            listStylePos: T.prop("listStylePosition"),
            listStyleImage: !0,
            listStyleImg: T.prop("listStyleImage"),
          },
          {
            transition: !0,
            transitionDelay: !0,
            animation: !0,
            willChange: !0,
            transitionDuration: T.prop(
              "transitionDuration",
              "transition.duration"
            ),
            transitionProperty: T.prop(
              "transitionProperty",
              "transition.property"
            ),
            transitionTimingFunction: T.prop(
              "transitionTimingFunction",
              "transition.easing"
            ),
          }
        ),
        Y = Object.keys(Object.assign({}, W, j, A, D, F)),
        q = [...Object.keys(H), ...i._],
        K = { ...H, ...i.v },
        G = (t) => t in K;
    },
    22223: function (t, e, r) {
      "use strict";
      r.d(e, {
        L: function () {
          return i;
        },
      });
      var n = r(10635);
      function i(t) {
        return (0, n.C)(t, ["styleConfig", "size", "variant", "colorScheme"]);
      }
    },
    97291: function (t, e, r) {
      "use strict";
      r.d(e, {
        P: function () {
          return n;
        },
        Q: function () {
          return i;
        },
      });
      let n = (t) => (t ? "" : void 0),
        i = (t) => !!t || void 0;
    },
    31463: function (t, e, r) {
      "use strict";
      r.d(e, {
        Y: function () {
          return u;
        },
        y: function () {
          return c;
        },
      });
      var n = r(46099);
      function i(t) {
        if (null == t) return t;
        let { unitless: e } = (function (t) {
          let e = parseFloat(t.toString()),
            r = t.toString().replace(String(e), "");
          return { unitless: !r, value: e, unit: r };
        })(t);
        return e || "number" == typeof t ? `${t}px` : t;
      }
      let o = (t, e) => (parseInt(t[1], 10) > parseInt(e[1], 10) ? 1 : -1),
        a = (t) => Object.fromEntries(Object.entries(t).sort(o));
      function s(t) {
        let e = a(t);
        return Object.assign(Object.values(e), e);
      }
      function l(t) {
        return t
          ? "number" == typeof (t = i(t) ?? t)
            ? `${t + -0.02}`
            : t.replace(/(\d+\.?\d*)/u, (t) => `${parseFloat(t) + -0.02}`)
          : t;
      }
      function u(t, e) {
        let r = ["@media screen"];
        return (
          t && r.push("and", `(min-width: ${i(t)})`),
          e && r.push("and", `(max-width: ${i(e)})`),
          r.join(" ")
        );
      }
      function c(t) {
        if (!t) return null;
        t.base = t.base ?? "0px";
        let e = s(t),
          r = Object.entries(t)
            .sort(o)
            .map(([t, e], r, n) => {
              let [, i] = n[r + 1] ?? [];
              return (
                (i = parseFloat(i) > 0 ? l(i) : void 0),
                {
                  _minW: l(e),
                  breakpoint: t,
                  minW: e,
                  maxW: i,
                  maxWQuery: u(null, i),
                  minWQuery: u(e),
                  minMaxQuery: u(e, i),
                }
              );
            }),
          i = new Set(Object.keys(a(t))),
          c = Array.from(i.values());
        return {
          keys: i,
          normalized: e,
          isResponsive(t) {
            let e = Object.keys(t);
            return e.length > 0 && e.every((t) => i.has(t));
          },
          asObject: a(t),
          asArray: s(t),
          details: r,
          get: (t) => r.find((e) => e.breakpoint === t),
          media: [null, ...e.map((t) => u(t)).slice(1)],
          toArrayValue(t) {
            if (!(0, n.Kn)(t))
              throw Error("toArrayValue: value must be an object");
            let e = c.map((e) => t[e] ?? null);
            for (
              ;
              null ===
              (function (t) {
                let e = null == t ? 0 : t.length;
                return e ? t[e - 1] : void 0;
              })(e);

            )
              e.pop();
            return e;
          },
          toObjectValue(t) {
            if (!Array.isArray(t))
              throw Error("toObjectValue: value must be an array");
            return t.reduce((t, e, r) => {
              let n = c[r];
              return null != n && null != e && (t[n] = e), t;
            }, {});
          },
        };
      }
    },
    25316: function (t, e, r) {
      "use strict";
      function n(...t) {
        return function (...e) {
          t.forEach((t) => t?.(...e));
        };
      }
      function i(...t) {
        return function (e) {
          t.some((t) => (t?.(e), e?.defaultPrevented));
        };
      }
      r.d(e, {
        P: function () {
          return n;
        },
        v: function () {
          return i;
        },
      });
    },
    97124: function (t, e, r) {
      "use strict";
      r.d(e, {
        W: function () {
          return i;
        },
      });
      var n = r(2265);
      function i(t) {
        return n.Children.toArray(t).filter((t) => (0, n.isValidElement)(t));
      }
    },
    29456: function (t, e, r) {
      "use strict";
      function n(t) {
        let e = Object.assign({}, t);
        for (let t in e) void 0 === e[t] && delete e[t];
        return e;
      }
      r.d(e, {
        o: function () {
          return n;
        },
      });
    },
    34008: function (t, e, r) {
      "use strict";
      r.d(e, {
        createContext: function () {
          return i;
        },
      });
      var n = r(2265);
      function i() {
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          {
            name: e,
            strict: r = !0,
            hookName: i = "useContext",
            providerName: o = "Provider",
            errorMessage: a,
            defaultValue: s,
          } = t,
          l = (0, n.createContext)(s);
        return (
          (l.displayName = e),
          [
            l.Provider,
            function t() {
              let e = (0, n.useContext)(l);
              if (!e && r) {
                var s, u;
                let e = Error(
                  null != a
                    ? a
                    : ""
                        .concat(
                          i,
                          " returned `undefined`. Seems you forgot to wrap component within "
                        )
                        .concat(o)
                );
                throw (
                  ((e.name = "ContextError"),
                  null === (s = (u = Error).captureStackTrace) ||
                    void 0 === s ||
                    s.call(u, e, t),
                  e)
                );
              }
              return e;
            },
            l,
          ]
        );
      }
    },
    24377: function (t, e, r) {
      "use strict";
      r.d(e, {
        cx: function () {
          return n;
        },
      });
      let n = (...t) => t.filter(Boolean).join(" ");
    },
    79795: function (t, e, r) {
      "use strict";
      r.d(e, {
        t5: function () {
          return o;
        },
      });
      var n = r(99322);
      let i = (t) => t.offsetWidth > 0 && t.offsetHeight > 0;
      function o(t) {
        let e = Array.from(
          t.querySelectorAll(
            "input:not(:disabled):not([disabled]),select:not(:disabled):not([disabled]),textarea:not(:disabled):not([disabled]),embed,iframe,object,a[href],area[href],button:not(:disabled):not([disabled]),[tabindex],audio[controls],video[controls],*[tabindex]:not([aria-disabled]),*[contenteditable]"
          )
        );
        return e.unshift(t), e.filter((t) => (0, n.EB)(t) && i(t));
      }
    },
    52865: function (t, e, r) {
      "use strict";
      r.d(e, {
        W: function () {
          return n;
        },
      });
      let n = ((t) => {
        let e = new WeakMap();
        return (r, n, i, o) => {
          if (void 0 === r) return t(r, n, i);
          e.has(r) || e.set(r, new Map());
          let a = e.get(r);
          if (a.has(n)) return a.get(n);
          let s = t(r, n, i, o);
          return a.set(n, s), s;
        };
      })(function (t, e, r, n) {
        let i = "string" == typeof e ? e.split(".") : [e];
        for (n = 0; n < i.length && t; n += 1) t = t[i[n]];
        return void 0 === t ? r : t;
      });
    },
    42924: function (t, e, r) {
      "use strict";
      function n(t) {
        return (
          null != t &&
          "object" == typeof t &&
          "nodeType" in t &&
          t.nodeType === Node.ELEMENT_NODE
        );
      }
      function i() {
        return !!globalThis?.document;
      }
      function o(t) {
        let e = t.getAttribute("contenteditable");
        return "false" !== e && null != e;
      }
      function a(t) {
        return (
          !0 == !!t.getAttribute("disabled") ||
          !0 == !!t.getAttribute("aria-disabled")
        );
      }
      r.d(e, {
        Re: function () {
          return n;
        },
        iU: function () {
          return o;
        },
        jU: function () {
          return i;
        },
        nV: function () {
          return a;
        },
        oI: function () {
          return function t(e) {
            return !!(e.parentElement && t(e.parentElement)) || e.hidden;
          };
        },
      });
    },
    46099: function (t, e, r) {
      "use strict";
      function n(t) {
        return Array.isArray(t);
      }
      function i(t) {
        let e = typeof t;
        return null != t && ("object" === e || "function" === e) && !n(t);
      }
      r.d(e, {
        Kn: function () {
          return i;
        },
        kJ: function () {
          return n;
        },
      });
    },
    8022: function (t, e, r) {
      "use strict";
      function n(t) {
        let {
          wasSelected: e,
          enabled: r,
          isSelected: n,
          mode: i = "unmount",
        } = t;
        return !r || !!n || ("keepMounted" === i && !!e);
      }
      r.d(e, {
        k: function () {
          return n;
        },
      });
    },
    10635: function (t, e, r) {
      "use strict";
      function n(t, e = []) {
        let r = Object.assign({}, t);
        for (let t of e) t in r && delete r[t];
        return r;
      }
      r.d(e, {
        C: function () {
          return n;
        },
      });
    },
    64687: function (t, e, r) {
      "use strict";
      r.d(e, {
        dh: function () {
          return a;
        },
        kR: function () {
          return i;
        },
        vY: function () {
          return s;
        },
      });
      var n = r(42924);
      function i(t) {
        return o(t)?.defaultView ?? window;
      }
      function o(t) {
        return (0, n.Re)(t) ? t.ownerDocument : document;
      }
      function a(t) {
        return t.view ?? window;
      }
      function s(t) {
        return o(t).activeElement;
      }
    },
    80171: function (t, e, r) {
      "use strict";
      r.d(e, {
        AV: function () {
          return i;
        },
        XQ: function () {
          return o;
        },
        Yq: function () {
          return a;
        },
      });
      var n = r(46099);
      let i = Object.freeze(["base", "sm", "md", "lg", "xl", "2xl"]);
      function o(t, e) {
        return Array.isArray(t)
          ? t.map((t) => (null === t ? null : e(t)))
          : (0, n.Kn)(t)
          ? Object.keys(t).reduce((r, n) => ((r[n] = e(t[n])), r), {})
          : null != t
          ? e(t)
          : null;
      }
      function a(t, e = i) {
        let r = {};
        return (
          t.forEach((t, n) => {
            let i = e[n];
            null != t && (r[i] = t);
          }),
          r
        );
      }
    },
    19323: function (t, e, r) {
      "use strict";
      r.d(e, {
        P: function () {
          return i;
        },
      });
      let n = (t) => "function" == typeof t;
      function i(t, ...e) {
        return n(t) ? t(...e) : t;
      }
    },
    99322: function (t, e, r) {
      "use strict";
      r.d(e, {
        EB: function () {
          return a;
        },
        Wq: function () {
          return s;
        },
      });
      var n = r(42924);
      let i = (t) => t.hasAttribute("tabindex"),
        o = (t) => i(t) && -1 === t.tabIndex;
      function a(t) {
        if (!(0, n.Re)(t) || (0, n.oI)(t) || (0, n.nV)(t)) return !1;
        let { localName: e } = t;
        if (["input", "select", "textarea", "button"].indexOf(e) >= 0)
          return !0;
        let r = {
          a: () => t.hasAttribute("href"),
          audio: () => t.hasAttribute("controls"),
          video: () => t.hasAttribute("controls"),
        };
        return e in r ? r[e]() : !!(0, n.iU)(t) || i(t);
      }
      function s(t) {
        return !!t && (0, n.Re)(t) && a(t) && !o(t);
      }
    },
    60821: function (t, e, r) {
      "use strict";
      r.d(e, {
        v: function () {
          return tC;
        },
      });
      var n = r(45699),
        i = r(29711),
        o = r(45414),
        a = r(24118);
      let s = { current: !1 };
      var l = r(56277);
      let u = (t, e, r) =>
        (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t;
      function c(t, e, r, n) {
        if (t === e && r === n) return l.Z;
        let i = (e) =>
          (function (t, e, r, n, i) {
            let o, a;
            let s = 0;
            do (o = u((a = e + (r - e) / 2), n, i) - t) > 0 ? (r = a) : (e = a);
            while (Math.abs(o) > 1e-7 && ++s < 12);
            return a;
          })(e, 0, 1, t, r);
        return (t) => (0 === t || 1 === t ? t : u(i(t), e, n));
      }
      var d = r(87457),
        h = r(63627);
      let f = c(0.33, 1.53, 0.69, 0.99),
        p = (0, h.M)(f),
        m = (0, d.o)(p),
        v = (t) =>
          (t *= 2) < 1 ? 0.5 * p(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
      var g = r(26378),
        y = r(94238),
        b = r(40504),
        x = r(39545),
        w = r(62035),
        k = r(83206);
      let S = (t, e) =>
          "zIndex" !== e &&
          !!(
            "number" == typeof t ||
            Array.isArray(t) ||
            ("string" == typeof t &&
              (k.P.test(t) || "0" === t) &&
              !t.startsWith("url("))
          ),
        P = (t) => null !== t;
      function T(t, { repeat: e, repeatType: r = "loop" }, n) {
        let i = t.filter(P),
          o = e && "loop" !== r && e % 2 == 1 ? 0 : i.length - 1;
        return o && void 0 !== n ? n : i[o];
      }
      class C {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: r = "keyframes",
          repeat: n = 0,
          repeatDelay: i = 0,
          repeatType: o = "loop",
          ...a
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = b.X.now()),
            (this.options = {
              autoplay: t,
              delay: e,
              type: r,
              repeat: n,
              repeatDelay: i,
              repeatType: o,
              ...a,
            }),
            this.updateFinishedPromise();
        }
        calcStartTime() {
          return this.resolvedAt && this.resolvedAt - this.createdAt > 40
            ? this.resolvedAt
            : this.createdAt;
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (0, x.m)(),
            this._resolved
          );
        }
        onKeyframesResolved(t, e) {
          (this.resolvedAt = b.X.now()), (this.hasAttemptedResolve = !0);
          let {
            name: r,
            type: i,
            velocity: o,
            delay: a,
            onComplete: l,
            onUpdate: u,
            isGenerator: c,
          } = this.options;
          if (
            !c &&
            !(function (t, e, r, i) {
              let o = t[0];
              if (null === o) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let a = t[t.length - 1],
                s = S(o, e),
                l = S(a, e);
              return (
                (0, w.K)(
                  s === l,
                  `You are trying to animate ${e} from "${o}" to "${a}". ${o} is not an animatable value - to enable this animation set ${o} to a value animatable to ${a} via the \`style\` property.`
                ),
                !!s &&
                  !!l &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let r = 0; r < t.length; r++)
                      if (t[r] !== e) return !0;
                  })(t) ||
                    (("spring" === r || (0, n.xD)(r)) && i))
              );
            })(t, r, i, o)
          ) {
            if (s.current || !a) {
              null == u || u(T(t, this.options, e)),
                null == l || l(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let d = this.initPlayback(t, e);
          !1 !== d &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...d }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        flatten() {
          (this.options.type = "keyframes"), (this.options.ease = "linear");
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = t;
          });
        }
      }
      var E = r(59111),
        R = r(96781);
      function A(t, e, r) {
        return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6)
          ? t + (e - t) * 6 * r
          : r < 0.5
          ? e
          : r < 2 / 3
          ? t + (e - t) * (2 / 3 - r) * 6
          : t;
      }
      var j = r(87325),
        _ = r(18859),
        O = r(92943);
      function M(t, e) {
        return (r) => (r > 0 ? e : t);
      }
      let D = (t, e, r) => {
          let n = t * t,
            i = r * (e * e - n) + n;
          return i < 0 ? 0 : Math.sqrt(i);
        },
        B = [j.$, _.m, O.J],
        L = (t) => B.find((e) => e.test(t));
      function V(t) {
        let e = L(t);
        if (
          ((0, w.K)(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`
          ),
          !e)
        )
          return !1;
        let r = e.parse(t);
        return (
          e === O.J &&
            (r = (function ({ hue: t, saturation: e, lightness: r, alpha: n }) {
              (t /= 360), (r /= 100);
              let i = 0,
                o = 0,
                a = 0;
              if ((e /= 100)) {
                let n = r < 0.5 ? r * (1 + e) : r + e - r * e,
                  s = 2 * r - n;
                (i = A(s, n, t + 1 / 3)),
                  (o = A(s, n, t)),
                  (a = A(s, n, t - 1 / 3));
              } else i = o = a = r;
              return {
                red: Math.round(255 * i),
                green: Math.round(255 * o),
                blue: Math.round(255 * a),
                alpha: n,
              };
            })(r)),
          r
        );
      }
      let I = (t, e) => {
        let r = V(t),
          n = V(e);
        if (!r || !n) return M(t, e);
        let i = { ...r };
        return (t) => (
          (i.red = D(r.red, n.red, t)),
          (i.green = D(r.green, n.green, t)),
          (i.blue = D(r.blue, n.blue, t)),
          (i.alpha = (0, R.t)(r.alpha, n.alpha, t)),
          _.m.transform(i)
        );
      };
      var F = r(56920),
        $ = r(33964),
        W = r(37249);
      let N = new Set(["none", "hidden"]);
      function z(t, e) {
        return (r) => (0, R.t)(t, e, r);
      }
      function U(t) {
        return "number" == typeof t
          ? z
          : "string" == typeof t
          ? (0, W.t)(t)
            ? M
            : $.$.test(t)
            ? I
            : Y
          : Array.isArray(t)
          ? X
          : "object" == typeof t
          ? $.$.test(t)
            ? I
            : H
          : M;
      }
      function X(t, e) {
        let r = [...t],
          n = r.length,
          i = t.map((t, r) => U(t)(t, e[r]));
        return (t) => {
          for (let e = 0; e < n; e++) r[e] = i[e](t);
          return r;
        };
      }
      function H(t, e) {
        let r = { ...t, ...e },
          n = {};
        for (let i in r)
          void 0 !== t[i] && void 0 !== e[i] && (n[i] = U(t[i])(t[i], e[i]));
        return (t) => {
          for (let e in n) r[e] = n[e](t);
          return r;
        };
      }
      let Y = (t, e) => {
        let r = k.P.createTransformer(e),
          n = (0, k.V)(t),
          i = (0, k.V)(e);
        return n.indexes.var.length === i.indexes.var.length &&
          n.indexes.color.length === i.indexes.color.length &&
          n.indexes.number.length >= i.indexes.number.length
          ? (N.has(t) && !i.values.length) || (N.has(e) && !n.values.length)
            ? N.has(t)
              ? (r) => (r <= 0 ? t : e)
              : (r) => (r >= 1 ? e : t)
            : (0, F.z)(
                X(
                  (function (t, e) {
                    var r;
                    let n = [],
                      i = { color: 0, var: 0, number: 0 };
                    for (let o = 0; o < e.values.length; o++) {
                      let a = e.types[o],
                        s = t.indexes[a][i[a]],
                        l = null !== (r = t.values[s]) && void 0 !== r ? r : 0;
                      (n[o] = l), i[a]++;
                    }
                    return n;
                  })(n, i),
                  i.values
                ),
                r
              )
          : ((0, w.K)(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            M(t, e));
      };
      function q(t, e, r) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof r
          ? (0, R.t)(t, e, r)
          : U(t)(t, e);
      }
      var K = r(14438);
      function G(t, e, r) {
        let n = Math.max(e - 5, 0);
        return (0, K.R)(r - t(n), e - n);
      }
      let Z = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: 0.3,
        visualDuration: 0.3,
        restSpeed: { granular: 0.01, default: 2 },
        restDelta: { granular: 0.005, default: 0.5 },
        minDuration: 0.01,
        maxDuration: 10,
        minDamping: 0.05,
        maxDamping: 1,
      };
      function J(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let Q = ["duration", "bounce"],
        tt = ["stiffness", "damping", "mass"];
      function te(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function tr(t = Z.visualDuration, e = Z.bounce) {
        let r;
        let o =
            "object" != typeof t
              ? { visualDuration: t, keyframes: [0, 1], bounce: e }
              : t,
          { restSpeed: a, restDelta: s } = o,
          l = o.keyframes[0],
          u = o.keyframes[o.keyframes.length - 1],
          c = { done: !1, value: l },
          {
            stiffness: d,
            damping: h,
            mass: f,
            duration: p,
            velocity: m,
            isResolvedFromDuration: v,
          } = (function (t) {
            let e = {
              velocity: Z.velocity,
              stiffness: Z.stiffness,
              damping: Z.damping,
              mass: Z.mass,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!te(t, tt) && te(t, Q)) {
              if (t.visualDuration) {
                let r = (2 * Math.PI) / (1.2 * t.visualDuration),
                  n = r * r,
                  i = 2 * (0, E.u)(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(n);
                e = { ...e, mass: Z.mass, stiffness: n, damping: i };
              } else {
                let r = (function ({
                  duration: t = Z.duration,
                  bounce: e = Z.bounce,
                  velocity: r = Z.velocity,
                  mass: n = Z.mass,
                }) {
                  let o, a;
                  (0, w.K)(
                    t <= (0, i.w)(Z.maxDuration),
                    "Spring duration must be 10 seconds or less"
                  );
                  let s = 1 - e;
                  (s = (0, E.u)(Z.minDamping, Z.maxDamping, s)),
                    (t = (0, E.u)(Z.minDuration, Z.maxDuration, (0, i.X)(t))),
                    s < 1
                      ? ((o = (e) => {
                          let n = e * s,
                            i = n * t;
                          return 0.001 - ((n - r) / J(e, s)) * Math.exp(-i);
                        }),
                        (a = (e) => {
                          let n = e * s * t,
                            i = Math.pow(s, 2) * Math.pow(e, 2) * t,
                            a = J(Math.pow(e, 2), s);
                          return (
                            ((n * r + r - i) *
                              Math.exp(-n) *
                              (-o(e) + 0.001 > 0 ? -1 : 1)) /
                            a
                          );
                        }))
                      : ((o = (e) =>
                          -0.001 + Math.exp(-e * t) * ((e - r) * t + 1)),
                        (a = (e) => t * t * (r - e) * Math.exp(-e * t)));
                  let l = (function (t, e, r) {
                    let n = r;
                    for (let r = 1; r < 12; r++) n -= t(n) / e(n);
                    return n;
                  })(o, a, 5 / t);
                  if (((t = (0, i.w)(t)), isNaN(l)))
                    return {
                      stiffness: Z.stiffness,
                      damping: Z.damping,
                      duration: t,
                    };
                  {
                    let e = Math.pow(l, 2) * n;
                    return {
                      stiffness: e,
                      damping: 2 * s * Math.sqrt(n * e),
                      duration: t,
                    };
                  }
                })(t);
                (e = { ...e, ...r, mass: Z.mass }).isResolvedFromDuration = !0;
              }
            }
            return e;
          })({ ...o, velocity: -(0, i.X)(o.velocity || 0) }),
          g = m || 0,
          y = h / (2 * Math.sqrt(d * f)),
          b = u - l,
          x = (0, i.X)(Math.sqrt(d / f)),
          k = 5 > Math.abs(b);
        if (
          (a || (a = k ? Z.restSpeed.granular : Z.restSpeed.default),
          s || (s = k ? Z.restDelta.granular : Z.restDelta.default),
          y < 1)
        ) {
          let t = J(x, y);
          r = (e) =>
            u -
            Math.exp(-y * x * e) *
              (((g + y * x * b) / t) * Math.sin(t * e) + b * Math.cos(t * e));
        } else if (1 === y)
          r = (t) => u - Math.exp(-x * t) * (b + (g + x * b) * t);
        else {
          let t = x * Math.sqrt(y * y - 1);
          r = (e) => {
            let r = Math.exp(-y * x * e),
              n = Math.min(t * e, 300);
            return (
              u -
              (r * ((g + y * x * b) * Math.sinh(n) + t * b * Math.cosh(n))) / t
            );
          };
        }
        let S = {
          calculatedDuration: (v && p) || null,
          next: (t) => {
            let e = r(t);
            if (v) c.done = t >= p;
            else {
              let n = 0;
              y < 1 && (n = 0 === t ? (0, i.w)(g) : G(r, t, e));
              let o = Math.abs(n) <= a,
                l = Math.abs(u - e) <= s;
              c.done = o && l;
            }
            return (c.value = c.done ? u : e), c;
          },
          toString: () => {
            let t = Math.min((0, n.iI)(S), n.EO),
              e = (0, n.wk)((e) => S.next(t * e).value, t, 30);
            return t + "ms " + e;
          },
        };
        return S;
      }
      function tn({
        keyframes: t,
        velocity: e = 0,
        power: r = 0.8,
        timeConstant: n = 325,
        bounceDamping: i = 10,
        bounceStiffness: o = 500,
        modifyTarget: a,
        min: s,
        max: l,
        restDelta: u = 0.5,
        restSpeed: c,
      }) {
        let d, h;
        let f = t[0],
          p = { done: !1, value: f },
          m = (t) => (void 0 !== s && t < s) || (void 0 !== l && t > l),
          v = (t) =>
            void 0 === s
              ? l
              : void 0 === l
              ? s
              : Math.abs(s - t) < Math.abs(l - t)
              ? s
              : l,
          g = r * e,
          y = f + g,
          b = void 0 === a ? y : a(y);
        b !== y && (g = b - f);
        let x = (t) => -g * Math.exp(-t / n),
          w = (t) => b + x(t),
          k = (t) => {
            let e = x(t),
              r = w(t);
            (p.done = Math.abs(e) <= u), (p.value = p.done ? b : r);
          },
          S = (t) => {
            m(p.value) &&
              ((d = t),
              (h = tr({
                keyframes: [p.value, v(p.value)],
                velocity: G(w, t, p.value),
                damping: i,
                stiffness: o,
                restDelta: u,
                restSpeed: c,
              })));
          };
        return (
          S(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (h || void 0 !== d || ((e = !0), k(t), S(t)),
              void 0 !== d && t >= d)
                ? h.next(t - d)
                : (e || k(t), p);
            },
          }
        );
      }
      let ti = c(0.42, 0, 1, 1),
        to = c(0, 0, 0.58, 1),
        ta = c(0.42, 0, 0.58, 1),
        ts = (t) => Array.isArray(t) && "number" != typeof t[0],
        tl = {
          linear: l.Z,
          easeIn: ti,
          easeInOut: ta,
          easeOut: to,
          circIn: g.Z7,
          circInOut: g.X7,
          circOut: g.Bn,
          backIn: p,
          backInOut: m,
          backOut: f,
          anticipate: v,
        },
        tu = (t) => {
          if ((0, n.qE)(t)) {
            (0, w.k)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, r, n, i] = t;
            return c(e, r, n, i);
          }
          return "string" == typeof t
            ? ((0, w.k)(void 0 !== tl[t], `Invalid easing type '${t}'`), tl[t])
            : t;
        };
      var tc = r(81645);
      function td({
        duration: t = 300,
        keyframes: e,
        times: r,
        ease: n = "easeInOut",
      }) {
        let i = ts(n) ? n.map(tu) : tu(n),
          o = { done: !1, value: e[0] },
          a = (function (t, e, { clamp: r = !0, ease: n, mixer: i } = {}) {
            let o = t.length;
            if (
              ((0, w.k)(
                o === e.length,
                "Both input and output ranges must be the same length"
              ),
              1 === o)
            )
              return () => e[0];
            if (2 === o && e[0] === e[1]) return () => e[1];
            let a = t[0] === t[1];
            t[0] > t[o - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
            let s = (function (t, e, r) {
                let n = [],
                  i = r || q,
                  o = t.length - 1;
                for (let r = 0; r < o; r++) {
                  let o = i(t[r], t[r + 1]);
                  if (e) {
                    let t = Array.isArray(e) ? e[r] || l.Z : e;
                    o = (0, F.z)(t, o);
                  }
                  n.push(o);
                }
                return n;
              })(e, n, i),
              u = s.length,
              c = (r) => {
                if (a && r < t[0]) return e[0];
                let n = 0;
                if (u > 1) for (; n < t.length - 2 && !(r < t[n + 1]); n++);
                let i = (0, tc.Y)(t[n], t[n + 1], r);
                return s[n](i);
              };
            return r ? (e) => c((0, E.u)(t[0], t[o - 1], e)) : c;
          })(
            (r && r.length === e.length
              ? r
              : (function (t) {
                  let e = [0];
                  return (
                    (function (t, e) {
                      let r = t[t.length - 1];
                      for (let n = 1; n <= e; n++) {
                        let i = (0, tc.Y)(0, e, n);
                        t.push((0, R.t)(r, 1, i));
                      }
                    })(e, t.length - 1),
                    e
                  );
                })(e)
            ).map((e) => e * t),
            e,
            {
              ease: Array.isArray(i)
                ? i
                : e.map(() => i || ta).splice(0, e.length - 1),
            }
          );
        return {
          calculatedDuration: t,
          next: (e) => ((o.value = a(e)), (o.done = e >= t), o),
        };
      }
      let th = (t) => {
          let e = ({ timestamp: e }) => t(e);
          return {
            start: () => o.Wi.update(e, !0),
            stop: () => (0, o.Pn)(e),
            now: () =>
              o.frameData.isProcessing ? o.frameData.timestamp : b.X.now(),
          };
        },
        tf = { decay: tn, inertia: tn, tween: td, keyframes: td, spring: tr },
        tp = (t) => t / 100;
      class tm extends C {
        constructor(t) {
          super(t),
            (this.holdTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.startTime = null),
            (this.state = "idle"),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: t } = this.options;
              t && t();
            });
          let {
              name: e,
              motionValue: r,
              element: n,
              keyframes: i,
            } = this.options,
            o = (null == n ? void 0 : n.KeyframeResolver) || x.e;
          (this.resolver = new o(
            i,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            r,
            n
          )),
            this.resolver.scheduleResolve();
        }
        flatten() {
          super.flatten(),
            this._resolved &&
              Object.assign(
                this._resolved,
                this.initPlayback(this._resolved.keyframes)
              );
        }
        initPlayback(t) {
          let e, r;
          let {
              type: i = "keyframes",
              repeat: o = 0,
              repeatDelay: a = 0,
              repeatType: s,
              velocity: l = 0,
            } = this.options,
            u = (0, n.xD)(i) ? i : tf[i] || td;
          u !== td &&
            "number" != typeof t[0] &&
            ((e = (0, F.z)(tp, q(t[0], t[1]))), (t = [0, 100]));
          let c = u({ ...this.options, keyframes: t });
          "mirror" === s &&
            (r = u({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -l,
            })),
            null === c.calculatedDuration &&
              (c.calculatedDuration = (0, n.iI)(c));
          let { calculatedDuration: d } = c,
            h = d + a;
          return {
            generator: c,
            mirroredGenerator: r,
            mapPercentToKeyframes: e,
            calculatedDuration: d,
            resolvedDuration: h,
            totalDuration: h * (o + 1) - a,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(t, e = !1) {
          let { resolved: r } = this;
          if (!r) {
            let { keyframes: t } = this.options;
            return { done: !0, value: t[t.length - 1] };
          }
          let {
            finalKeyframe: n,
            generator: i,
            mirroredGenerator: o,
            mapPercentToKeyframes: a,
            keyframes: s,
            calculatedDuration: l,
            totalDuration: u,
            resolvedDuration: c,
          } = r;
          if (null === this.startTime) return i.next(0);
          let {
            delay: d,
            repeat: h,
            repeatType: f,
            repeatDelay: p,
            onUpdate: m,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - u / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(t - this.startTime) * this.speed);
          let v = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
            g = this.speed >= 0 ? v < 0 : v > u;
          (this.currentTime = Math.max(v, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = u);
          let y = this.currentTime,
            b = i;
          if (h) {
            let t = Math.min(this.currentTime, u) / c,
              e = Math.floor(t),
              r = t % 1;
            !r && t >= 1 && (r = 1),
              1 === r && e--,
              (e = Math.min(e, h + 1)) % 2 &&
                ("reverse" === f
                  ? ((r = 1 - r), p && (r -= p / c))
                  : "mirror" === f && (b = o)),
              (y = (0, E.u)(0, 1, r) * c);
          }
          let x = g ? { done: !1, value: s[0] } : b.next(y);
          a && (x.value = a(x.value));
          let { done: w } = x;
          g ||
            null === l ||
            (w =
              this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let k =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && w));
          return (
            k && void 0 !== n && (x.value = T(s, this.options, n)),
            m && m(x.value),
            k && this.finish(),
            x
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? (0, i.X)(t.calculatedDuration) : 0;
        }
        get time() {
          return (0, i.X)(this.currentTime);
        }
        set time(t) {
          (t = (0, i.w)(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t),
            e && (this.time = (0, i.X)(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: t = th, onPlay: e, startTime: r } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let n = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = n - this.holdTime)
            : this.startTime
            ? "finished" === this.state && (this.startTime = n)
            : (this.startTime = null != r ? r : this.calcStartTime()),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var t;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (t = this.currentTime) && void 0 !== t ? t : 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
      }
      let tv = new Set(["opacity", "clipPath", "filter", "transform"]),
        tg = (0, r(90107).X)(() =>
          Object.hasOwnProperty.call(Element.prototype, "animate")
        ),
        ty = { anticipate: v, backInOut: m, circInOut: g.X7 };
      class tb extends C {
        constructor(t) {
          super(t);
          let {
            name: e,
            motionValue: r,
            element: n,
            keyframes: i,
          } = this.options;
          (this.resolver = new y.s(
            i,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            r,
            n
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t, e) {
          var r, i;
          let {
            duration: o = 300,
            times: a,
            ease: s,
            type: l,
            motionValue: u,
            name: c,
            startTime: d,
          } = this.options;
          if (!(null === (r = u.owner) || void 0 === r ? void 0 : r.current))
            return !1;
          if (
            ("string" == typeof s && (0, n.Vc)() && s in ty && (s = ty[s]),
            (i = this.options),
            (0, n.xD)(i.type) || "spring" === i.type || !(0, n.hR)(i.ease))
          ) {
            let {
                onComplete: e,
                onUpdate: r,
                motionValue: n,
                element: i,
                ...u
              } = this.options,
              c = (function (t, e) {
                let r = new tm({
                    ...e,
                    keyframes: t,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  n = { done: !1, value: t[0] },
                  i = [],
                  o = 0;
                for (; !n.done && o < 2e4; )
                  i.push((n = r.sample(o)).value), (o += 10);
                return {
                  times: void 0,
                  keyframes: i,
                  duration: o - 10,
                  ease: "linear",
                };
              })(t, u);
            1 === (t = c.keyframes).length && (t[1] = t[0]),
              (o = c.duration),
              (a = c.times),
              (s = c.ease),
              (l = "keyframes");
          }
          let h = (function (
            t,
            e,
            r,
            {
              delay: i = 0,
              duration: o = 300,
              repeat: a = 0,
              repeatType: s = "loop",
              ease: l = "easeInOut",
              times: u,
            } = {}
          ) {
            let c = { [e]: r };
            u && (c.offset = u);
            let d = (0, n.eB)(l, o);
            return (
              Array.isArray(d) && (c.easing = d),
              t.animate(c, {
                delay: i,
                duration: o,
                easing: Array.isArray(d) ? "linear" : d,
                fill: "both",
                iterations: a + 1,
                direction: "reverse" === s ? "alternate" : "normal",
              })
            );
          })(u.owner.current, c, t, {
            ...this.options,
            duration: o,
            times: a,
            ease: s,
          });
          return (
            (h.startTime = null != d ? d : this.calcStartTime()),
            this.pendingTimeline
              ? ((0, n._F)(h, this.pendingTimeline),
                (this.pendingTimeline = void 0))
              : (h.onfinish = () => {
                  let { onComplete: r } = this.options;
                  u.set(T(t, this.options, e)),
                    r && r(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: h,
              duration: o,
              times: a,
              type: l,
              ease: s,
              keyframes: t,
            }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return (0, i.X)(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return (0, i.X)(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: r } = e;
          r.currentTime = (0, i.w)(t);
        }
        get speed() {
          let { resolved: t } = this;
          if (!t) return 1;
          let { animation: e } = t;
          return e.playbackRate;
        }
        set speed(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: r } = e;
          r.playbackRate = t;
        }
        get state() {
          let { resolved: t } = this;
          if (!t) return "idle";
          let { animation: e } = t;
          return e.playState;
        }
        get startTime() {
          let { resolved: t } = this;
          if (!t) return null;
          let { animation: e } = t;
          return e.startTime;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { resolved: e } = this;
            if (!e) return l.Z;
            let { animation: r } = e;
            (0, n._F)(r, t);
          } else this.pendingTimeline = t;
          return l.Z;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          "finished" === e.playState && this.updateFinishedPromise(), e.play();
        }
        pause() {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          this.resolveFinishedPromise(), this.updateFinishedPromise();
          let { resolved: t } = this;
          if (!t) return;
          let {
            animation: e,
            keyframes: r,
            duration: n,
            type: o,
            ease: a,
            times: s,
          } = t;
          if ("idle" === e.playState || "finished" === e.playState) return;
          if (this.time) {
            let {
                motionValue: t,
                onUpdate: e,
                onComplete: l,
                element: u,
                ...c
              } = this.options,
              d = new tm({
                ...c,
                keyframes: r,
                duration: n,
                type: o,
                ease: a,
                times: s,
                isGenerator: !0,
              }),
              h = (0, i.w)(this.time);
            t.setWithVelocity(d.sample(h - 10).value, d.sample(h).value, 10);
          }
          let { onStop: l } = this.options;
          l && l(), this.cancel();
        }
        complete() {
          let { resolved: t } = this;
          t && t.animation.finish();
        }
        cancel() {
          let { resolved: t } = this;
          t && t.animation.cancel();
        }
        static supports(t) {
          let {
            motionValue: e,
            name: r,
            repeatDelay: n,
            repeatType: i,
            damping: o,
            type: a,
          } = t;
          return (
            tg() &&
            r &&
            tv.has(r) &&
            e &&
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate &&
            !n &&
            "mirror" !== i &&
            0 !== o &&
            "inertia" !== a
          );
        }
      }
      var tx = r(87487);
      let tw = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        tk = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        tS = { type: "keyframes", duration: 0.8 },
        tP = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        tT = (t, { keyframes: e }) =>
          e.length > 2
            ? tS
            : tx.G.has(t)
            ? t.startsWith("scale")
              ? tk(e[1])
              : tw
            : tP,
        tC =
          (t, e, r, l = {}, u, c) =>
          (d) => {
            let h = (0, n.ev)(l, t) || {},
              f = h.delay || l.delay || 0,
              { elapsed: p = 0 } = l;
            p -= (0, i.w)(f);
            let m = {
              keyframes: Array.isArray(r) ? r : [null, r],
              ease: "easeOut",
              velocity: e.getVelocity(),
              ...h,
              delay: -p,
              onUpdate: (t) => {
                e.set(t), h.onUpdate && h.onUpdate(t);
              },
              onComplete: () => {
                d(), h.onComplete && h.onComplete();
              },
              name: t,
              motionValue: e,
              element: c ? void 0 : u,
            };
            !(function ({
              when: t,
              delay: e,
              delayChildren: r,
              staggerChildren: n,
              staggerDirection: i,
              repeat: o,
              repeatType: a,
              repeatDelay: s,
              from: l,
              elapsed: u,
              ...c
            }) {
              return !!Object.keys(c).length;
            })(h) && (m = { ...m, ...tT(t, m) }),
              m.duration && (m.duration = (0, i.w)(m.duration)),
              m.repeatDelay && (m.repeatDelay = (0, i.w)(m.repeatDelay)),
              void 0 !== m.from && (m.keyframes[0] = m.from);
            let v = !1;
            if (
              ((!1 !== m.type && (0 !== m.duration || m.repeatDelay)) ||
                ((m.duration = 0), 0 !== m.delay || (v = !0)),
              (s.current || a.c.skipAnimations) &&
                ((v = !0), (m.duration = 0), (m.delay = 0)),
              v && !c && void 0 !== e.get())
            ) {
              let t = T(m.keyframes, h);
              if (void 0 !== t)
                return (
                  o.Wi.update(() => {
                    m.onUpdate(t), m.onComplete();
                  }),
                  new n.sP([])
                );
            }
            return !c && tb.supports(m) ? new tb(m) : new tm(m);
          };
    },
    45647: function (t, e, r) {
      "use strict";
      r.d(e, {
        d: function () {
          return p;
        },
      });
      var n = r(67043),
        i = r(45699),
        o = r(56596),
        a = r(48771),
        s = r(1327),
        l = r(34005),
        u = r(60821),
        c = r(45414);
      function d(t, e, { delay: r = 0, transitionOverride: n, type: d } = {}) {
        var h;
        let {
          transition: f = t.getDefaultTransition(),
          transitionEnd: p,
          ...m
        } = e;
        n && (f = n);
        let v = [],
          g = d && t.animationState && t.animationState.getState()[d];
        for (let e in m) {
          let n = t.getValue(
              e,
              null !== (h = t.latestValues[e]) && void 0 !== h ? h : null
            ),
            a = m[e];
          if (
            void 0 === a ||
            (g &&
              (function ({ protectedKeys: t, needsAnimating: e }, r) {
                let n = t.hasOwnProperty(r) && !0 !== e[r];
                return (e[r] = !1), n;
              })(g, e))
          )
            continue;
          let d = { delay: r, ...(0, i.ev)(f || {}, e) },
            p = !1;
          if (window.MotionHandoffAnimation) {
            let r = (0, l.s)(t);
            if (r) {
              let t = window.MotionHandoffAnimation(r, e, c.Wi);
              null !== t && ((d.startTime = t), (p = !0));
            }
          }
          (0, s.K)(t, e),
            n.start(
              (0, u.v)(
                e,
                n,
                a,
                t.shouldReduceMotion && o.z.has(e) ? { type: !1 } : d,
                t,
                p
              )
            );
          let y = n.animation;
          y && v.push(y);
        }
        return (
          p &&
            Promise.all(v).then(() => {
              c.Wi.update(() => {
                p && (0, a.C)(t, p);
              });
            }),
          v
        );
      }
      function h(t, e, r = {}) {
        var i;
        let o = (0, n.x)(
            t,
            e,
            "exit" === r.type
              ? null === (i = t.presenceContext) || void 0 === i
                ? void 0
                : i.custom
              : void 0
          ),
          { transition: a = t.getDefaultTransition() || {} } = o || {};
        r.transitionOverride && (a = r.transitionOverride);
        let s = o ? () => Promise.all(d(t, o, r)) : () => Promise.resolve(),
          l =
            t.variantChildren && t.variantChildren.size
              ? (n = 0) => {
                  let {
                    delayChildren: i = 0,
                    staggerChildren: o,
                    staggerDirection: s,
                  } = a;
                  return (function (t, e, r = 0, n = 0, i = 1, o) {
                    let a = [],
                      s = (t.variantChildren.size - 1) * n,
                      l = 1 === i ? (t = 0) => t * n : (t = 0) => s - t * n;
                    return (
                      Array.from(t.variantChildren)
                        .sort(f)
                        .forEach((t, n) => {
                          t.notify("AnimationStart", e),
                            a.push(
                              h(t, e, { ...o, delay: r + l(n) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(a)
                    );
                  })(t, e, i + n, o, s, r);
                }
              : () => Promise.resolve(),
          { when: u } = a;
        if (!u) return Promise.all([s(), l(r.delay)]);
        {
          let [t, e] = "beforeChildren" === u ? [s, l] : [l, s];
          return t().then(() => e());
        }
      }
      function f(t, e) {
        return t.sortNodePosition(e);
      }
      function p(t, e, r = {}) {
        let i;
        if ((t.notify("AnimationStart", e), Array.isArray(e)))
          i = Promise.all(e.map((e) => h(t, e, r)));
        else if ("string" == typeof e) i = h(t, e, r);
        else {
          let o = "function" == typeof e ? (0, n.x)(t, e, r.custom) : e;
          i = Promise.all(d(t, o, r));
        }
        return i.then(() => {
          t.notify("AnimationComplete", e);
        });
      }
    },
    61750: function (t, e, r) {
      "use strict";
      r.d(e, {
        M: function () {
          return n;
        },
      });
      let n = "data-" + (0, r(17444).D)("framerAppearId");
    },
    34005: function (t, e, r) {
      "use strict";
      r.d(e, {
        s: function () {
          return i;
        },
      });
      var n = r(61750);
      function i(t) {
        return t.props[n.M];
      }
    },
    44944: function (t, e, r) {
      "use strict";
      r.d(e, {
        C: function () {
          return n;
        },
      });
      let n = (t) => Array.isArray(t);
    },
    48614: function (t, e, r) {
      "use strict";
      r.d(e, {
        M: function () {
          return g;
        },
      });
      var n = r(57437),
        i = r(2265),
        o = r(58881),
        a = r(53576),
        s = r(64252),
        l = r(45750);
      class u extends i.Component {
        getSnapshotBeforeUpdate(t) {
          let e = this.props.childRef.current;
          if (e && t.isPresent && !this.props.isPresent) {
            let t = this.props.sizeRef.current;
            (t.height = e.offsetHeight || 0),
              (t.width = e.offsetWidth || 0),
              (t.top = e.offsetTop),
              (t.left = e.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function c(t) {
        let { children: e, isPresent: r } = t,
          o = (0, i.useId)(),
          a = (0, i.useRef)(null),
          s = (0, i.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
          { nonce: c } = (0, i.useContext)(l._);
        return (
          (0, i.useInsertionEffect)(() => {
            let { width: t, height: e, top: n, left: i } = s.current;
            if (r || !a.current || !t || !e) return;
            a.current.dataset.motionPopId = o;
            let l = document.createElement("style");
            return (
              c && (l.nonce = c),
              document.head.appendChild(l),
              l.sheet &&
                l.sheet.insertRule(
                  '\n          [data-motion-pop-id="'
                    .concat(
                      o,
                      '"] {\n            position: absolute !important;\n            width: '
                    )
                    .concat(t, "px !important;\n            height: ")
                    .concat(e, "px !important;\n            top: ")
                    .concat(n, "px !important;\n            left: ")
                    .concat(i, "px !important;\n          }\n        ")
                ),
              () => {
                document.head.removeChild(l);
              }
            );
          }, [r]),
          (0, n.jsx)(u, {
            isPresent: r,
            childRef: a,
            sizeRef: s,
            children: i.cloneElement(e, { ref: a }),
          })
        );
      }
      let d = (t) => {
        let {
            children: e,
            initial: r,
            isPresent: o,
            onExitComplete: l,
            custom: u,
            presenceAffectsLayout: d,
            mode: f,
          } = t,
          p = (0, a.h)(h),
          m = (0, i.useId)(),
          v = (0, i.useCallback)(
            (t) => {
              for (let e of (p.set(t, !0), p.values())) if (!e) return;
              l && l();
            },
            [p, l]
          ),
          g = (0, i.useMemo)(
            () => ({
              id: m,
              initial: r,
              isPresent: o,
              custom: u,
              onExitComplete: v,
              register: (t) => (p.set(t, !1), () => p.delete(t)),
            }),
            d ? [Math.random(), v] : [o, v]
          );
        return (
          (0, i.useMemo)(() => {
            p.forEach((t, e) => p.set(e, !1));
          }, [o]),
          i.useEffect(() => {
            o || p.size || !l || l();
          }, [o]),
          "popLayout" === f &&
            (e = (0, n.jsx)(c, { isPresent: o, children: e })),
          (0, n.jsx)(s.O.Provider, { value: g, children: e })
        );
      };
      function h() {
        return new Map();
      }
      var f = r(49637);
      let p = (t) => t.key || "";
      function m(t) {
        let e = [];
        return (
          i.Children.forEach(t, (t) => {
            (0, i.isValidElement)(t) && e.push(t);
          }),
          e
        );
      }
      var v = r(11534);
      let g = (t) => {
        let {
            children: e,
            custom: r,
            initial: s = !0,
            onExitComplete: l,
            presenceAffectsLayout: u = !0,
            mode: c = "sync",
            propagate: h = !1,
          } = t,
          [g, y] = (0, f.oO)(h),
          b = (0, i.useMemo)(() => m(e), [e]),
          x = h && !g ? [] : b.map(p),
          w = (0, i.useRef)(!0),
          k = (0, i.useRef)(b),
          S = (0, a.h)(() => new Map()),
          [P, T] = (0, i.useState)(b),
          [C, E] = (0, i.useState)(b);
        (0, v.L)(() => {
          (w.current = !1), (k.current = b);
          for (let t = 0; t < C.length; t++) {
            let e = p(C[t]);
            x.includes(e) ? S.delete(e) : !0 !== S.get(e) && S.set(e, !1);
          }
        }, [C, x.length, x.join("-")]);
        let R = [];
        if (b !== P) {
          let t = [...b];
          for (let e = 0; e < C.length; e++) {
            let r = C[e],
              n = p(r);
            x.includes(n) || (t.splice(e, 0, r), R.push(r));
          }
          "wait" === c && R.length && (t = R), E(m(t)), T(b);
          return;
        }
        let { forceRender: A } = (0, i.useContext)(o.p);
        return (0, n.jsx)(n.Fragment, {
          children: C.map((t) => {
            let e = p(t),
              i = (!h || !!g) && (b === C || x.includes(e));
            return (0, n.jsx)(
              d,
              {
                isPresent: i,
                initial: (!w.current || !!s) && void 0,
                custom: i ? void 0 : r,
                presenceAffectsLayout: u,
                mode: c,
                onExitComplete: i
                  ? void 0
                  : () => {
                      if (!S.has(e)) return;
                      S.set(e, !0);
                      let t = !0;
                      S.forEach((e) => {
                        e || (t = !1);
                      }),
                        t &&
                          (null == A || A(),
                          E(k.current),
                          h && (null == y || y()),
                          l && l());
                    },
                children: t,
              },
              e
            );
          }),
        });
      };
    },
    49637: function (t, e, r) {
      "use strict";
      r.d(e, {
        hO: function () {
          return a;
        },
        oO: function () {
          return o;
        },
      });
      var n = r(2265),
        i = r(64252);
      function o(t = !0) {
        let e = (0, n.useContext)(i.O);
        if (null === e) return [!0, null];
        let { isPresent: r, onExitComplete: o, register: a } = e,
          s = (0, n.useId)();
        (0, n.useEffect)(() => {
          t && a(s);
        }, [t]);
        let l = (0, n.useCallback)(() => t && o && o(s), [s, o, t]);
        return !r && o ? [!1, l] : [!0];
      }
      function a() {
        var t;
        return null === (t = (0, n.useContext)(i.O)) || t.isPresent;
      }
    },
    58881: function (t, e, r) {
      "use strict";
      r.d(e, {
        p: function () {
          return n;
        },
      });
      let n = (0, r(2265).createContext)({});
    },
    45750: function (t, e, r) {
      "use strict";
      r.d(e, {
        _: function () {
          return n;
        },
      });
      let n = (0, r(2265).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    64252: function (t, e, r) {
      "use strict";
      r.d(e, {
        O: function () {
          return n;
        },
      });
      let n = (0, r(2265).createContext)(null);
    },
    26378: function (t, e, r) {
      "use strict";
      r.d(e, {
        Bn: function () {
          return a;
        },
        X7: function () {
          return s;
        },
        Z7: function () {
          return o;
        },
      });
      var n = r(87457),
        i = r(63627);
      let o = (t) => 1 - Math.sin(Math.acos(t)),
        a = (0, i.M)(o),
        s = (0, n.o)(o);
    },
    87457: function (t, e, r) {
      "use strict";
      r.d(e, {
        o: function () {
          return n;
        },
      });
      let n = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
    },
    63627: function (t, e, r) {
      "use strict";
      r.d(e, {
        M: function () {
          return n;
        },
      });
      let n = (t) => (e) => 1 - t(1 - e);
    },
    85005: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return o;
        },
      });
      var n = r(24118);
      let i = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      function o(t, e) {
        let r = !1,
          o = !0,
          a = { delta: 0, timestamp: 0, isProcessing: !1 },
          s = () => (r = !0),
          l = i.reduce(
            (t, e) => (
              (t[e] = (function (t) {
                let e = new Set(),
                  r = new Set(),
                  n = !1,
                  i = !1,
                  o = new WeakSet(),
                  a = { delta: 0, timestamp: 0, isProcessing: !1 };
                function s(e) {
                  o.has(e) && (l.schedule(e), t()), e(a);
                }
                let l = {
                  schedule: (t, i = !1, a = !1) => {
                    let s = a && n ? e : r;
                    return i && o.add(t), s.has(t) || s.add(t), t;
                  },
                  cancel: (t) => {
                    r.delete(t), o.delete(t);
                  },
                  process: (t) => {
                    if (((a = t), n)) {
                      i = !0;
                      return;
                    }
                    (n = !0),
                      ([e, r] = [r, e]),
                      e.forEach(s),
                      e.clear(),
                      (n = !1),
                      i && ((i = !1), l.process(t));
                  },
                };
                return l;
              })(s)),
              t
            ),
            {}
          ),
          {
            read: u,
            resolveKeyframes: c,
            update: d,
            preRender: h,
            render: f,
            postRender: p,
          } = l,
          m = () => {
            let i = n.c.useManualTiming ? a.timestamp : performance.now();
            (r = !1),
              (a.delta = o
                ? 1e3 / 60
                : Math.max(Math.min(i - a.timestamp, 40), 1)),
              (a.timestamp = i),
              (a.isProcessing = !0),
              u.process(a),
              c.process(a),
              d.process(a),
              h.process(a),
              f.process(a),
              p.process(a),
              (a.isProcessing = !1),
              r && e && ((o = !1), t(m));
          },
          v = () => {
            (r = !0), (o = !0), a.isProcessing || t(m);
          };
        return {
          schedule: i.reduce((t, e) => {
            let n = l[e];
            return (
              (t[e] = (t, e = !1, i = !1) => (r || v(), n.schedule(t, e, i))), t
            );
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < i.length; e++) l[i[e]].cancel(t);
          },
          state: a,
          steps: l,
        };
      }
    },
    45414: function (t, e, r) {
      "use strict";
      r.d(e, {
        Pn: function () {
          return o;
        },
        Wi: function () {
          return i;
        },
        frameData: function () {
          return a;
        },
        yL: function () {
          return s;
        },
      });
      var n = r(56277);
      let {
        schedule: i,
        cancel: o,
        state: a,
        steps: s,
      } = (0, r(85005).Z)(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : n.Z,
        !0
      );
    },
    40504: function (t, e, r) {
      "use strict";
      let n;
      r.d(e, {
        X: function () {
          return s;
        },
      });
      var i = r(24118),
        o = r(45414);
      function a() {
        n = void 0;
      }
      let s = {
        now: () => (
          void 0 === n &&
            s.set(
              o.frameData.isProcessing || i.c.useManualTiming
                ? o.frameData.timestamp
                : performance.now()
            ),
          n
        ),
        set: (t) => {
          (n = t), queueMicrotask(a);
        },
      };
    },
    3462: function (t, e, r) {
      "use strict";
      function n(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      r.d(e, {
        E: function () {
          return r2;
        },
      });
      var i,
        o,
        a,
        s = r(44944);
      function l(t, e) {
        if (!Array.isArray(e)) return !1;
        let r = e.length;
        if (r !== t.length) return !1;
        for (let n = 0; n < r; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      function u(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      var c = r(67043);
      let d = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        h = ["initial", ...d];
      var f = r(45647);
      let p = h.length,
        m = [...d].reverse(),
        v = d.length;
      function g(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function y() {
        return {
          animate: g(!0),
          whileInView: g(),
          whileHover: g(),
          whileTap: g(),
          whileDrag: g(),
          whileFocus: g(),
          exit: g(),
        };
      }
      class b {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      class x extends b {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: r }) => (0, f.d)(t, e, r))
                    ),
                  r = y(),
                  i = !0,
                  o = (e) => (r, n) => {
                    var i;
                    let o = (0, c.x)(
                      t,
                      n,
                      "exit" === e
                        ? null === (i = t.presenceContext) || void 0 === i
                          ? void 0
                          : i.custom
                        : void 0
                    );
                    if (o) {
                      let { transition: t, transitionEnd: e, ...n } = o;
                      r = { ...r, ...n, ...e };
                    }
                    return r;
                  };
                function a(a) {
                  let { props: c } = t,
                    d =
                      (function t(e) {
                        if (!e) return;
                        if (!e.isControllingVariants) {
                          let r = (e.parent && t(e.parent)) || {};
                          return (
                            void 0 !== e.props.initial &&
                              (r.initial = e.props.initial),
                            r
                          );
                        }
                        let r = {};
                        for (let t = 0; t < p; t++) {
                          let n = h[t],
                            i = e.props[n];
                          (u(i) || !1 === i) && (r[n] = i);
                        }
                        return r;
                      })(t.parent) || {},
                    f = [],
                    g = new Set(),
                    y = {},
                    b = 1 / 0;
                  for (let e = 0; e < v; e++) {
                    var x;
                    let h = m[e],
                      p = r[h],
                      v = void 0 !== c[h] ? c[h] : d[h],
                      w = u(v),
                      k = h === a ? p.isActive : null;
                    !1 === k && (b = e);
                    let S = v === d[h] && v !== c[h] && w;
                    if (
                      (S && i && t.manuallyAnimateOnMount && (S = !1),
                      (p.protectedKeys = { ...y }),
                      (!p.isActive && null === k) ||
                        (!v && !p.prevProp) ||
                        n(v) ||
                        "boolean" == typeof v)
                    )
                      continue;
                    let P =
                        ((x = p.prevProp),
                        "string" == typeof v
                          ? v !== x
                          : !!Array.isArray(v) && !l(v, x)),
                      T =
                        P || (h === a && p.isActive && !S && w) || (e > b && w),
                      C = !1,
                      E = Array.isArray(v) ? v : [v],
                      R = E.reduce(o(h), {});
                    !1 === k && (R = {});
                    let { prevResolvedValues: A = {} } = p,
                      j = { ...A, ...R },
                      _ = (e) => {
                        (T = !0),
                          g.has(e) && ((C = !0), g.delete(e)),
                          (p.needsAnimating[e] = !0);
                        let r = t.getValue(e);
                        r && (r.liveStyle = !1);
                      };
                    for (let t in j) {
                      let e = R[t],
                        r = A[t];
                      if (!y.hasOwnProperty(t))
                        ((0, s.C)(e) && (0, s.C)(r) ? l(e, r) : e === r)
                          ? void 0 !== e && g.has(t)
                            ? _(t)
                            : (p.protectedKeys[t] = !0)
                          : null != e
                          ? _(t)
                          : g.add(t);
                    }
                    (p.prevProp = v),
                      (p.prevResolvedValues = R),
                      p.isActive && (y = { ...y, ...R }),
                      i && t.blockInitialAnimation && (T = !1);
                    let O = !(S && P) || C;
                    T &&
                      O &&
                      f.push(
                        ...E.map((t) => ({
                          animation: t,
                          options: { type: h },
                        }))
                      );
                  }
                  if (g.size) {
                    let e = {};
                    g.forEach((r) => {
                      let n = t.getBaseTarget(r),
                        i = t.getValue(r);
                      i && (i.liveStyle = !0), (e[r] = null != n ? n : null);
                    }),
                      f.push({ animation: e });
                  }
                  let w = !!f.length;
                  return (
                    i &&
                      (!1 === c.initial || c.initial === c.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (w = !1),
                    (i = !1),
                    w ? e(f) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: a,
                  setActive: function (e, n) {
                    var i;
                    if (r[e].isActive === n) return Promise.resolve();
                    null === (i = t.variantChildren) ||
                      void 0 === i ||
                      i.forEach((t) => {
                        var r;
                        return null === (r = t.animationState) || void 0 === r
                          ? void 0
                          : r.setActive(e, n);
                      }),
                      (r[e].isActive = n);
                    let o = a(e);
                    for (let t in r) r[t].protectedKeys = {};
                    return o;
                  },
                  setAnimateFunction: function (r) {
                    e = r(t);
                  },
                  getState: () => r,
                  reset: () => {
                    (r = y()), (i = !0);
                  },
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          n(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var t;
          this.node.animationState.reset(),
            null === (t = this.unmountControls) || void 0 === t || t.call(this);
        }
      }
      let w = 0;
      class k extends b {
        constructor() {
          super(...arguments), (this.id = w++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: r } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === r) return;
          let n = this.node.animationState.setActive("exit", !t);
          e && !t && n.then(() => e(this.id));
        }
        mount() {
          let { register: t } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      var S = r(56277),
        P = r(62035),
        T = r(45699),
        C = r(29711);
      function E(t, e, r, n = { passive: !0 }) {
        return t.addEventListener(e, r, n), () => t.removeEventListener(e, r);
      }
      function R(t) {
        return { point: { x: t.pageX, y: t.pageY } };
      }
      let A = (t) => (e) => (0, T.DJ)(e) && t(e, R(e));
      function j(t, e, r, n) {
        return E(t, e, A(r), n);
      }
      let _ = (t, e) => Math.abs(t - e);
      var O = r(56920),
        M = r(45414);
      class D {
        constructor(
          t,
          e,
          {
            transformPagePoint: r,
            contextWindow: n,
            dragSnapToOrigin: i = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              var t, e;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let r = V(this.lastMoveEventInfo, this.history),
                n = null !== this.startEvent,
                i =
                  ((t = r.offset),
                  (e = { x: 0, y: 0 }),
                  Math.sqrt(_(t.x, e.x) ** 2 + _(t.y, e.y) ** 2) >= 3);
              if (!n && !i) return;
              let { point: o } = r,
                { timestamp: a } = M.frameData;
              this.history.push({ ...o, timestamp: a });
              let { onStart: s, onMove: l } = this.handlers;
              n ||
                (s && s(this.lastMoveEvent, r),
                (this.startEvent = this.lastMoveEvent)),
                l && l(this.lastMoveEvent, r);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = B(e, this.transformPagePoint)),
                M.Wi.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: r,
                onSessionEnd: n,
                resumeAnimation: i,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && i && i(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let o = V(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : B(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && r && r(t, o), n && n(t, o);
            }),
            !(0, T.DJ)(t))
          )
            return;
          (this.dragSnapToOrigin = i),
            (this.handlers = e),
            (this.transformPagePoint = r),
            (this.contextWindow = n || window);
          let o = B(R(t), this.transformPagePoint),
            { point: a } = o,
            { timestamp: s } = M.frameData;
          this.history = [{ ...a, timestamp: s }];
          let { onSessionStart: l } = e;
          l && l(t, V(o, this.history)),
            (this.removeListeners = (0, O.z)(
              j(this.contextWindow, "pointermove", this.handlePointerMove),
              j(this.contextWindow, "pointerup", this.handlePointerUp),
              j(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, M.Pn)(this.updatePoint);
        }
      }
      function B(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function L(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function V({ point: t }, e) {
        return {
          point: t,
          delta: L(t, I(e)),
          offset: L(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let r = t.length - 1,
              n = null,
              i = I(t);
            for (
              ;
              r >= 0 &&
              ((n = t[r]), !(i.timestamp - n.timestamp > (0, C.w)(0.1)));

            )
              r--;
            if (!n) return { x: 0, y: 0 };
            let o = (0, C.X)(i.timestamp - n.timestamp);
            if (0 === o) return { x: 0, y: 0 };
            let a = { x: (i.x - n.x) / o, y: (i.y - n.y) / o };
            return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
          })(e, 0),
        };
      }
      function I(t) {
        return t[t.length - 1];
      }
      function F(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      var $ = r(81645),
        W = r(96781);
      function N(t) {
        return t.max - t.min;
      }
      function z(t, e, r, n = 0.5) {
        (t.origin = n),
          (t.originPoint = (0, W.t)(e.min, e.max, t.origin)),
          (t.scale = N(r) / N(e)),
          (t.translate = (0, W.t)(r.min, r.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0);
      }
      function U(t, e, r, n) {
        z(t.x, e.x, r.x, n ? n.originX : void 0),
          z(t.y, e.y, r.y, n ? n.originY : void 0);
      }
      function X(t, e, r) {
        (t.min = r.min + e.min), (t.max = t.min + N(e));
      }
      function H(t, e, r) {
        (t.min = e.min - r.min), (t.max = t.min + N(e));
      }
      function Y(t, e, r) {
        H(t.x, e.x, r.x), H(t.y, e.y, r.y);
      }
      var q = r(59111);
      function K(t, e, r) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== r ? t.max + r - (t.max - t.min) : void 0,
        };
      }
      function G(t, e) {
        let r = e.min - t.min,
          n = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([r, n] = [n, r]), { min: r, max: n }
        );
      }
      function Z(t, e, r) {
        return { min: J(t, e), max: J(t, r) };
      }
      function J(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let Q = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        tt = () => ({ x: Q(), y: Q() }),
        te = () => ({ min: 0, max: 0 }),
        tr = () => ({ x: te(), y: te() });
      function tn(t) {
        return [t("x"), t("y")];
      }
      function ti({ top: t, left: e, right: r, bottom: n }) {
        return { x: { min: e, max: r }, y: { min: t, max: n } };
      }
      function to(t) {
        return void 0 === t || 1 === t;
      }
      function ta({ scale: t, scaleX: e, scaleY: r }) {
        return !to(t) || !to(e) || !to(r);
      }
      function ts(t) {
        return (
          ta(t) ||
          tl(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function tl(t) {
        var e, r;
        return ((e = t.x) && "0%" !== e) || ((r = t.y) && "0%" !== r);
      }
      function tu(t, e, r, n, i) {
        return void 0 !== i && (t = n + i * (t - n)), n + r * (t - n) + e;
      }
      function tc(t, e = 0, r = 1, n, i) {
        (t.min = tu(t.min, e, r, n, i)), (t.max = tu(t.max, e, r, n, i));
      }
      function td(t, { x: e, y: r }) {
        tc(t.x, e.translate, e.scale, e.originPoint),
          tc(t.y, r.translate, r.scale, r.originPoint);
      }
      function th(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function tf(t, e, r, n, i = 0.5) {
        let o = (0, W.t)(t.min, t.max, i);
        tc(t, e, r, o, n);
      }
      function tp(t, e) {
        tf(t.x, e.x, e.scaleX, e.scale, e.originX),
          tf(t.y, e.y, e.scaleY, e.scale, e.originY);
      }
      function tm(t, e) {
        return ti(
          (function (t, e) {
            if (!e) return t;
            let r = e({ x: t.left, y: t.top }),
              n = e({ x: t.right, y: t.bottom });
            return { top: r.y, left: r.x, bottom: n.y, right: n.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      var tv = r(27492),
        tg = r(60821);
      let ty = ({ current: t }) => (t ? t.ownerDocument.defaultView : null);
      var tb = r(1327);
      let tx = new WeakMap();
      class tw {
        constructor(t) {
          (this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = tr()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: r } = this.visualElement;
          if (r && !1 === r.isPresent) return;
          let { dragSnapToOrigin: n } = this.getProps();
          this.panSession = new D(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: r } = this.getProps();
                r ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(R(t).point);
              },
              onStart: (t, e) => {
                let {
                  drag: r,
                  dragPropagation: n,
                  onDragStart: i,
                } = this.getProps();
                if (
                  r &&
                  !n &&
                  (this.openDragLock && this.openDragLock(),
                  (this.openDragLock = (0, T.KV)(r)),
                  !this.openDragLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  tn((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (tv.aQ.test(e)) {
                      let { projection: r } = this.visualElement;
                      if (r && r.layout) {
                        let n = r.layout.layoutBox[t];
                        if (n) {
                          let t = N(n);
                          e = (parseFloat(e) / 100) * t;
                        }
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  i && M.Wi.postRender(() => i(t, e)),
                  (0, tb.K)(this.visualElement, "transform");
                let { animationState: o } = this.visualElement;
                o && o.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: r,
                  dragDirectionLock: n,
                  onDirectionLock: i,
                  onDrag: o,
                } = this.getProps();
                if (!r && !this.openDragLock) return;
                let { offset: a } = e;
                if (n && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let r = null;
                    return (
                      Math.abs(t.y) > e
                        ? (r = "y")
                        : Math.abs(t.x) > e && (r = "x"),
                      r
                    );
                  })(a)),
                    null !== this.currentDirection &&
                      i &&
                      i(this.currentDirection);
                  return;
                }
                this.updateAxis("x", e.point, a),
                  this.updateAxis("y", e.point, a),
                  this.visualElement.render(),
                  o && o(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                tn((t) => {
                  var e;
                  return (
                    "paused" === this.getAnimationState(t) &&
                    (null === (e = this.getAxisMotionValue(t).animation) ||
                    void 0 === e
                      ? void 0
                      : e.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: n,
              contextWindow: ty(this.visualElement),
            }
          );
        }
        stop(t, e) {
          let r = this.isDragging;
          if ((this.cancel(), !r)) return;
          let { velocity: n } = e;
          this.startAnimation(n);
          let { onDragEnd: i } = this.getProps();
          i && M.Wi.postRender(() => i(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: r } = this.getProps();
          !r &&
            this.openDragLock &&
            (this.openDragLock(), (this.openDragLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, r) {
          let { drag: n } = this.getProps();
          if (!r || !tk(t, n, this.currentDirection)) return;
          let i = this.getAxisMotionValue(t),
            o = this.originPoint[t] + r[t];
          this.constraints &&
            this.constraints[t] &&
            (o = (function (t, { min: e, max: r }, n) {
              return (
                void 0 !== e && t < e
                  ? (t = n ? (0, W.t)(e, t, n.min) : Math.max(t, e))
                  : void 0 !== r &&
                    t > r &&
                    (t = n ? (0, W.t)(r, t, n.max) : Math.min(t, r)),
                t
              );
            })(o, this.constraints[t], this.elastic[t])),
            i.set(o);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: r } = this.getProps(),
            n =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                ? void 0
                : t.layout,
            i = this.constraints;
          e && F(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && n
            ? (this.constraints = (function (
                t,
                { top: e, left: r, bottom: n, right: i }
              ) {
                return { x: K(t.x, r, i), y: K(t.y, e, n) };
              })(n.layoutBox, e))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: Z(t, "left", "right"), y: Z(t, "top", "bottom") }
              );
            })(r)),
            i !== this.constraints &&
              n &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              tn((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let r = {};
                    return (
                      void 0 !== e.min && (r.min = e.min - t.min),
                      void 0 !== e.max && (r.max = e.max - t.min),
                      r
                    );
                  })(n.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: r } =
            this.getProps();
          if (!e || !F(e)) return !1;
          let n = e.current;
          (0, P.k)(
            null !== n,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: i } = this.visualElement;
          if (!i || !i.layout) return !1;
          let o = (function (t, e, r) {
              let n = tm(t, r),
                { scroll: i } = e;
              return i && (th(n.x, i.offset.x), th(n.y, i.offset.y)), n;
            })(n, i.root, this.visualElement.getTransformPagePoint()),
            a = { x: G((t = i.layout.layoutBox).x, o.x), y: G(t.y, o.y) };
          if (r) {
            let t = r(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(a)
            );
            (this.hasMutatedConstraints = !!t), t && (a = ti(t));
          }
          return a;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: r,
              dragElastic: n,
              dragTransition: i,
              dragSnapToOrigin: o,
              onDragTransitionEnd: a,
            } = this.getProps(),
            s = this.constraints || {};
          return Promise.all(
            tn((a) => {
              if (!tk(a, e, this.currentDirection)) return;
              let l = (s && s[a]) || {};
              o && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: r ? t[a] : 0,
                bounceStiffness: n ? 200 : 1e6,
                bounceDamping: n ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...i,
                ...l,
              };
              return this.startAxisValueAnimation(a, u);
            })
          ).then(a);
        }
        startAxisValueAnimation(t, e) {
          let r = this.getAxisMotionValue(t);
          return (
            (0, tb.K)(this.visualElement, t),
            r.start((0, tg.v)(t, r, 0, e, this.visualElement, !1))
          );
        }
        stopAnimation() {
          tn((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          tn((t) => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) ||
              void 0 === e
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) ||
            void 0 === e
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            r = this.visualElement.getProps();
          return (
            r[e] ||
            this.visualElement.getValue(
              t,
              (r.initial ? r.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          tn((e) => {
            let { drag: r } = this.getProps();
            if (!tk(e, r, this.currentDirection)) return;
            let { projection: n } = this.visualElement,
              i = this.getAxisMotionValue(e);
            if (n && n.layout) {
              let { min: r, max: o } = n.layout.layoutBox[e];
              i.set(t[e] - (0, W.t)(r, o, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: r } = this.visualElement;
          if (!F(e) || !r || !this.constraints) return;
          this.stopAnimation();
          let n = { x: 0, y: 0 };
          tn((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let r = e.get();
              n[t] = (function (t, e) {
                let r = 0.5,
                  n = N(t),
                  i = N(e);
                return (
                  i > n
                    ? (r = (0, $.Y)(e.min, e.max - n, t.min))
                    : n > i && (r = (0, $.Y)(t.min, t.max - i, e.min)),
                  (0, q.u)(0, 1, r)
                );
              })({ min: r, max: r }, this.constraints[t]);
            }
          });
          let { transformTemplate: i } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
            r.root && r.root.updateScroll(),
            r.updateLayout(),
            this.resolveConstraints(),
            tn((e) => {
              if (!tk(e, t, null)) return;
              let r = this.getAxisMotionValue(e),
                { min: i, max: o } = this.constraints[e];
              r.set((0, W.t)(i, o, n[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          tx.set(this.visualElement, this);
          let t = j(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: r = !0 } = this.getProps();
              e && r && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              F(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: r } = this.visualElement,
            n = r.addEventListener("measure", e);
          r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()),
            M.Wi.read(e);
          let i = E(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            o = r.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (tn((e) => {
                    let r = this.getAxisMotionValue(e);
                    r &&
                      ((this.originPoint[e] += t[e].translate),
                      r.set(r.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            i(), t(), n(), o && o();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: r = !1,
              dragPropagation: n = !1,
              dragConstraints: i = !1,
              dragElastic: o = 0.35,
              dragMomentum: a = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: r,
            dragPropagation: n,
            dragConstraints: i,
            dragElastic: o,
            dragMomentum: a,
          };
        }
      }
      function tk(t, e, r) {
        return (!0 === e || e === t) && (null === r || r === t);
      }
      class tS extends b {
        constructor(t) {
          super(t),
            (this.removeGroupControls = S.Z),
            (this.removeListeners = S.Z),
            (this.controls = new tw(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || S.Z);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let tP = (t) => (e, r) => {
        t && M.Wi.postRender(() => t(e, r));
      };
      class tT extends b {
        constructor() {
          super(...arguments), (this.removePointerDownListener = S.Z);
        }
        onPointerDown(t) {
          this.session = new D(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: ty(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: r,
            onPanEnd: n,
          } = this.node.getProps();
          return {
            onSessionStart: tP(t),
            onStart: tP(e),
            onMove: r,
            onEnd: (t, e) => {
              delete this.session, n && M.Wi.postRender(() => n(t, e));
            },
          };
        }
        mount() {
          this.removePointerDownListener = j(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      var tC = r(57437),
        tE = r(2265),
        tR = r(49637),
        tA = r(58881);
      let tj = (0, tE.createContext)({}),
        t_ = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function tO(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let tM = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t) {
            if (!tv.px.test(t)) return t;
            t = parseFloat(t);
          }
          let r = tO(t, e.target.x),
            n = tO(t, e.target.y);
          return `${r}% ${n}%`;
        },
      };
      var tD = r(83206);
      let tB = {},
        { schedule: tL, cancel: tV } = (0, r(85005).Z)(queueMicrotask, !1);
      class tI extends tE.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: r,
              layoutId: n,
            } = this.props,
            { projection: i } = t;
          Object.assign(tB, t$),
            i &&
              (e.group && e.group.add(i),
              r && r.register && n && r.register(i),
              i.root.didUpdate(),
              i.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              i.setOptions({
                ...i.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (t_.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: r,
              drag: n,
              isPresent: i,
            } = this.props,
            o = r.projection;
          return (
            o &&
              ((o.isPresent = i),
              n || t.layoutDependency !== e || void 0 === e
                ? o.willUpdate()
                : this.safeToRemove(),
              t.isPresent === i ||
                (i
                  ? o.promote()
                  : o.relegate() ||
                    M.Wi.postRender(() => {
                      let t = o.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            tL.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: r,
            } = this.props,
            { projection: n } = t;
          n &&
            (n.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(n),
            r && r.deregister && r.deregister(n));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function tF(t) {
        let [e, r] = (0, tR.oO)(),
          n = (0, tE.useContext)(tA.p);
        return (0, tC.jsx)(tI, {
          ...t,
          layoutGroup: n,
          switchLayoutGroup: (0, tE.useContext)(tj),
          isPresent: e,
          safeToRemove: r,
        });
      }
      let t$ = {
        borderRadius: {
          ...tM,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: tM,
        borderTopRightRadius: tM,
        borderBottomLeftRadius: tM,
        borderBottomRightRadius: tM,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: r }) => {
            let n = tD.P.parse(t);
            if (n.length > 5) return t;
            let i = tD.P.createTransformer(t),
              o = "number" != typeof n[0] ? 1 : 0,
              a = r.x.scale * e.x,
              s = r.y.scale * e.y;
            (n[0 + o] /= a), (n[1 + o] /= s);
            let l = (0, W.t)(a, s, 0.5);
            return (
              "number" == typeof n[2 + o] && (n[2 + o] /= l),
              "number" == typeof n[3 + o] && (n[3 + o] /= l),
              i(n)
            );
          },
        },
      };
      var tW = r(3078),
        tN = r(23999),
        tz = r(34005),
        tU = r(40504),
        tX = r(69013);
      let tH = (t, e) => t.depth - e.depth;
      class tY {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          (0, tX.y4)(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          (0, tX.cl)(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(tH),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      var tq = r(34081),
        tK = r(4581);
      function tG(t) {
        let e = (0, tN.i)(t) ? t.get() : t;
        return (0, tK.p)(e) ? e.toValue() : e;
      }
      var tZ = r(26378);
      let tJ = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        tQ = tJ.length,
        t0 = (t) => ("string" == typeof t ? parseFloat(t) : t),
        t1 = (t) => "number" == typeof t || tv.px.test(t);
      function t2(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let t5 = t3(0, 0.5, tZ.Bn),
        t4 = t3(0.5, 0.95, S.Z);
      function t3(t, e, r) {
        return (n) => (n < t ? 0 : n > e ? 1 : r((0, $.Y)(t, e, n)));
      }
      function t6(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function t9(t, e) {
        t6(t.x, e.x), t6(t.y, e.y);
      }
      function t7(t, e) {
        (t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin);
      }
      function t8(t, e, r, n, i) {
        return (
          (t -= e),
          (t = n + (1 / r) * (t - n)),
          void 0 !== i && (t = n + (1 / i) * (t - n)),
          t
        );
      }
      function et(t, e, [r, n, i], o, a) {
        !(function (t, e = 0, r = 1, n = 0.5, i, o = t, a = t) {
          if (
            (tv.aQ.test(e) &&
              ((e = parseFloat(e)),
              (e = (0, W.t)(a.min, a.max, e / 100) - a.min)),
            "number" != typeof e)
          )
            return;
          let s = (0, W.t)(o.min, o.max, n);
          t === o && (s -= e),
            (t.min = t8(t.min, e, r, s, i)),
            (t.max = t8(t.max, e, r, s, i));
        })(t, e[r], e[n], e[i], e.scale, o, a);
      }
      let ee = ["x", "scaleX", "originX"],
        er = ["y", "scaleY", "originY"];
      function en(t, e, r, n) {
        et(t.x, e, ee, r ? r.x : void 0, n ? n.x : void 0),
          et(t.y, e, er, r ? r.y : void 0, n ? n.y : void 0);
      }
      function ei(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function eo(t) {
        return ei(t.x) && ei(t.y);
      }
      function ea(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function es(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function el(t, e) {
        return es(t.x, e.x) && es(t.y, e.y);
      }
      function eu(t) {
        return N(t.x) / N(t.y);
      }
      function ec(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      class ed {
        constructor() {
          this.members = [];
        }
        add(t) {
          (0, tX.y4)(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            ((0, tX.cl)(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let r = this.members.findIndex((e) => t === e);
          if (0 === r) return !1;
          for (let t = r; t >= 0; t--) {
            let r = this.members[t];
            if (!1 !== r.isPresent) {
              e = r;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let r = this.lead;
          if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
            r.instance && r.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = r),
              e && (t.resumeFrom.preserveOpacity = !0),
              r.snapshot &&
                ((t.snapshot = r.snapshot),
                (t.snapshot.latestValues =
                  r.animationValues || r.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: n } = t.options;
            !1 === n && r.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: r } = t;
            e.onExitComplete && e.onExitComplete(),
              r && r.options.onExitComplete && r.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      let eh = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        },
        ef = "undefined" != typeof window && void 0 !== window.MotionDebug,
        ep = ["", "X", "Y", "Z"],
        em = { visibility: "hidden" },
        ev = 0;
      function eg(t, e, r, n) {
        let { latestValues: i } = e;
        i[t] && ((r[t] = i[t]), e.setStaticValue(t, 0), n && (n[t] = 0));
      }
      function ey({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: r,
        checkIsScrollRoot: n,
        resetTransform: i,
      }) {
        return class {
          constructor(t = {}, r = null == e ? void 0 : e()) {
            (this.id = ev++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  ef &&
                    (eh.totalNodes =
                      eh.resolvedTargetDeltas =
                      eh.recalculatedProjection =
                        0),
                  this.nodes.forEach(ew),
                  this.nodes.forEach(eR),
                  this.nodes.forEach(eA),
                  this.nodes.forEach(ek),
                  ef && window.MotionDebug.record(eh);
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = r ? r.root || r : this),
              (this.path = r ? [...r.path, r] : []),
              (this.parent = r),
              (this.depth = r ? r.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new tY());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) ||
                this.eventHandlers.set(t, new tq.L()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let r = this.eventHandlers.get(t);
            r && r.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, r = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: n, layout: i, visualElement: o } = this.options;
            if (
              (o && !o.current && o.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              r && (i || n) && (this.isLayoutDirty = !0),
              t)
            ) {
              let r;
              let n = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  r && r(),
                  (r = (function (t, e) {
                    let r = tU.X.now(),
                      n = ({ timestamp: e }) => {
                        let i = e - r;
                        i >= 250 && ((0, M.Pn)(n), t(i - 250));
                      };
                    return M.Wi.read(n, !0), () => (0, M.Pn)(n);
                  })(n, 0)),
                  t_.hasAnimatedSinceResize &&
                    ((t_.hasAnimatedSinceResize = !1), this.nodes.forEach(eE));
              });
            }
            n && this.root.registerSharedNode(n, this),
              !1 !== this.options.animate &&
                o &&
                (n || i) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: r,
                    layout: n,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let i =
                        this.options.transition ||
                        o.getDefaultTransition() ||
                        eB,
                      {
                        onLayoutAnimationStart: a,
                        onLayoutAnimationComplete: s,
                      } = o.getProps(),
                      l = !this.targetLayout || !el(this.targetLayout, n) || r,
                      u = !e && r;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u);
                      let e = {
                        ...(0, T.ev)(i, "layout"),
                        onPlay: a,
                        onComplete: s,
                      };
                      (o.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || eE(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = n;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, M.Pn)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(ej),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                    return;
                  let { visualElement: r } = e.options;
                  if (!r) return;
                  let n = (0, tz.s)(r);
                  if (window.MotionHasOptimisedAnimation(n, "transform")) {
                    let { layout: t, layoutId: r } = e.options;
                    window.MotionCancelOptimisedAnimation(
                      n,
                      "transform",
                      M.Wi,
                      !(t || r)
                    );
                  }
                  let { parent: i } = e;
                  i && !i.hasCheckedOptimisedAppear && t(i);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: r } = this.options;
            if (void 0 === e && !r) return;
            let n = this.getTransformTemplate();
            (this.prevTransformTemplateValue = n
              ? n(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(eP);
              return;
            }
            this.isUpdating || this.nodes.forEach(eT),
              (this.isUpdating = !1),
              this.nodes.forEach(eC),
              this.nodes.forEach(eb),
              this.nodes.forEach(ex),
              this.clearAllSnapshots();
            let t = tU.X.now();
            (M.frameData.delta = (0, q.u)(
              0,
              1e3 / 60,
              t - M.frameData.timestamp
            )),
              (M.frameData.timestamp = t),
              (M.frameData.isProcessing = !0),
              M.yL.update.process(M.frameData),
              M.yL.preRender.process(M.frameData),
              M.yL.render.process(M.frameData),
              (M.frameData.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), tL.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(eS), this.sharedNodes.forEach(e_);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              M.Wi.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            M.Wi.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = tr()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === t &&
                (e = !1),
              e)
            ) {
              let e = n(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: r(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e,
              };
            }
          }
          resetTransform() {
            if (!i) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !eo(this.projectionDelta),
              r = this.getTransformTemplate(),
              n = r ? r(this.latestValues, "") : void 0,
              o = n !== this.prevTransformTemplateValue;
            t &&
              (e || ts(this.latestValues) || o) &&
              (i(this.instance, n),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let r = this.measurePageBox(),
              n = this.removeElementScroll(r);
            return (
              t && (n = this.removeTransform(n)),
              eI((e = n).x),
              eI(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: r,
                layoutBox: n,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            var t;
            let { visualElement: e } = this.options;
            if (!e) return tr();
            let r = e.measureViewportBox();
            if (
              !(
                (null === (t = this.scroll) || void 0 === t
                  ? void 0
                  : t.wasRoot) || this.path.some(e$)
              )
            ) {
              let { scroll: t } = this.root;
              t && (th(r.x, t.offset.x), th(r.y, t.offset.y));
            }
            return r;
          }
          removeElementScroll(t) {
            var e;
            let r = tr();
            if (
              (t9(r, t),
              null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot)
            )
              return r;
            for (let e = 0; e < this.path.length; e++) {
              let n = this.path[e],
                { scroll: i, options: o } = n;
              n !== this.root &&
                i &&
                o.layoutScroll &&
                (i.wasRoot && t9(r, t),
                th(r.x, i.offset.x),
                th(r.y, i.offset.y));
            }
            return r;
          }
          applyTransform(t, e = !1) {
            let r = tr();
            t9(r, t);
            for (let t = 0; t < this.path.length; t++) {
              let n = this.path[t];
              !e &&
                n.options.layoutScroll &&
                n.scroll &&
                n !== n.root &&
                tp(r, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                ts(n.latestValues) && tp(r, n.latestValues);
            }
            return ts(this.latestValues) && tp(r, this.latestValues), r;
          }
          removeTransform(t) {
            let e = tr();
            t9(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let r = this.path[t];
              if (!r.instance || !ts(r.latestValues)) continue;
              ta(r.latestValues) && r.updateSnapshot();
              let n = tr();
              t9(n, r.measurePageBox()),
                en(
                  e,
                  r.latestValues,
                  r.snapshot ? r.snapshot.layoutBox : void 0,
                  n
                );
            }
            return ts(this.latestValues) && en(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !==
                M.frameData.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, r, n, i;
            let o = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = o.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = o.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = o.isSharedProjectionDirty);
            let a = !!this.resumingFrom || this !== o;
            if (
              !(
                t ||
                (a && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: s, layoutId: l } = this.options;
            if (this.layout && (s || l)) {
              if (
                ((this.resolvedRelativeTargetAt = M.frameData.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = tr()),
                    (this.relativeTargetOrigin = tr()),
                    Y(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    t9(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = tr()), (this.targetWithTransforms = tr())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (r = this.target),
                      (n = this.relativeTarget),
                      (i = this.relativeParent.target),
                      X(r.x, n.x, i.x),
                      X(r.y, n.y, i.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : t9(this.target, this.layout.layoutBox),
                      td(this.target, this.targetDelta))
                    : t9(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = tr()),
                      (this.relativeTargetOrigin = tr()),
                      Y(this.relativeTargetOrigin, this.target, t.target),
                      t9(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                ef && eh.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              ta(this.parent.latestValues) ||
              tl(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              r = !!this.resumingFrom || this !== e,
              n = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (n = !1),
              r &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (n = !1),
              this.resolvedRelativeTargetAt === M.frameData.timestamp &&
                (n = !1),
              n)
            )
              return;
            let { layout: i, layoutId: o } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(i || o))
            )
              return;
            t9(this.layoutCorrected, this.layout.layoutBox);
            let a = this.treeScale.x,
              s = this.treeScale.y;
            !(function (t, e, r, n = !1) {
              let i, o;
              let a = r.length;
              if (a) {
                e.x = e.y = 1;
                for (let s = 0; s < a; s++) {
                  o = (i = r[s]).projectionDelta;
                  let { visualElement: a } = i.options;
                  (!a ||
                    !a.props.style ||
                    "contents" !== a.props.style.display) &&
                    (n &&
                      i.options.layoutScroll &&
                      i.scroll &&
                      i !== i.root &&
                      tp(t, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
                    o && ((e.x *= o.x.scale), (e.y *= o.y.scale), td(t, o)),
                    n && ts(i.latestValues) && tp(t, i.latestValues));
                }
                e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
                  e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1);
              }
            })(this.layoutCorrected, this.treeScale, this.path, r),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = tr()));
            let { target: l } = e;
            if (!l) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            this.projectionDelta && this.prevProjectionDelta
              ? (t7(this.prevProjectionDelta.x, this.projectionDelta.x),
                t7(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              U(
                this.projectionDelta,
                this.layoutCorrected,
                l,
                this.latestValues
              ),
              (this.treeScale.x === a &&
                this.treeScale.y === s &&
                ec(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                ec(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              ef && eh.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            var e;
            if (
              (null === (e = this.options.visualElement) ||
                void 0 === e ||
                e.scheduleRender(),
              t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            (this.prevProjectionDelta = tt()),
              (this.projectionDelta = tt()),
              (this.projectionDeltaWithTransform = tt());
          }
          setAnimationOrigin(t, e = !1) {
            let r;
            let n = this.snapshot,
              i = n ? n.latestValues : {},
              o = { ...this.latestValues },
              a = tt();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let s = tr(),
              l =
                (n ? n.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              c = !u || u.members.length <= 1,
              d = !!(
                l &&
                !c &&
                !0 === this.options.crossfade &&
                !this.path.some(eD)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let n = e / 1e3;
                if (
                  (eO(a.x, t.x, n),
                  eO(a.y, t.y, n),
                  this.setTargetDelta(a),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, h, f, p;
                  Y(
                    s,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (f = this.relativeTarget),
                    (p = this.relativeTargetOrigin),
                    eM(f.x, p.x, s.x, n),
                    eM(f.y, p.y, s.y, n),
                    r &&
                      ((u = this.relativeTarget),
                      (h = r),
                      ea(u.x, h.x) && ea(u.y, h.y)) &&
                      (this.isProjectionDirty = !1),
                    r || (r = tr()),
                    t9(r, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = o),
                  (function (t, e, r, n, i, o) {
                    i
                      ? ((t.opacity = (0, W.t)(
                          0,
                          void 0 !== r.opacity ? r.opacity : 1,
                          t5(n)
                        )),
                        (t.opacityExit = (0, W.t)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          t4(n)
                        )))
                      : o &&
                        (t.opacity = (0, W.t)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== r.opacity ? r.opacity : 1,
                          n
                        ));
                    for (let i = 0; i < tQ; i++) {
                      let o = `border${tJ[i]}Radius`,
                        a = t2(e, o),
                        s = t2(r, o);
                      (void 0 !== a || void 0 !== s) &&
                        (a || (a = 0),
                        s || (s = 0),
                        0 === a || 0 === s || t1(a) === t1(s)
                          ? ((t[o] = Math.max((0, W.t)(t0(a), t0(s), n), 0)),
                            (tv.aQ.test(s) || tv.aQ.test(a)) && (t[o] += "%"))
                          : (t[o] = s));
                    }
                    (e.rotate || r.rotate) &&
                      (t.rotate = (0, W.t)(e.rotate || 0, r.rotate || 0, n));
                  })(o, i, this.latestValues, n, d, c)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = n);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, M.Pn)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = M.Wi.update(() => {
                (t_.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, r) {
                    let n = (0, tN.i)(0) ? 0 : (0, tW.BX)(0);
                    return n.start((0, tg.v)("", n, 1e3, r)), n.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: r,
                layout: n,
                latestValues: i,
              } = t;
            if (e && r && n) {
              if (
                this !== t &&
                this.layout &&
                n &&
                eF(
                  this.options.animationType,
                  this.layout.layoutBox,
                  n.layoutBox
                )
              ) {
                r = this.target || tr();
                let e = N(this.layout.layoutBox.x);
                (r.x.min = t.target.x.min), (r.x.max = r.x.min + e);
                let n = N(this.layout.layoutBox.y);
                (r.y.min = t.target.y.min), (r.y.max = r.y.min + n);
              }
              t9(e, r),
                tp(e, i),
                U(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  i
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new ed()),
              this.sharedNodes.get(t).add(e);
            let r = e.options.initialPromotionConfig;
            e.promote({
              transition: r ? r.transition : void 0,
              preserveFollowOpacity:
                r && r.shouldPreserveFollowOpacity
                  ? r.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: r,
          } = {}) {
            let n = this.getStack();
            n && n.promote(this, r),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: r } = t;
            if (
              ((r.z ||
                r.rotate ||
                r.rotateX ||
                r.rotateY ||
                r.rotateZ ||
                r.skewX ||
                r.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let n = {};
            r.z && eg("z", t, n, this.animationValues);
            for (let e = 0; e < ep.length; e++)
              eg(`rotate${ep[e]}`, t, n, this.animationValues),
                eg(`skew${ep[e]}`, t, n, this.animationValues);
            for (let e in (t.render(), n))
              t.setStaticValue(e, n[e]),
                this.animationValues && (this.animationValues[e] = n[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, r;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return em;
            let n = { visibility: "" },
              i = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (n.opacity = ""),
                (n.pointerEvents =
                  tG(null == t ? void 0 : t.pointerEvents) || ""),
                (n.transform = i ? i(this.latestValues, "") : "none"),
                n
              );
            let o = this.getLead();
            if (!this.projectionDelta || !this.layout || !o.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    tG(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !ts(this.latestValues) &&
                  ((e.transform = i ? i({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let a = o.animationValues || o.latestValues;
            this.applyTransformsToTarget(),
              (n.transform = (function (t, e, r) {
                let n = "",
                  i = t.x.translate / e.x,
                  o = t.y.translate / e.y,
                  a = (null == r ? void 0 : r.z) || 0;
                if (
                  ((i || o || a) &&
                    (n = `translate3d(${i}px, ${o}px, ${a}px) `),
                  (1 !== e.x || 1 !== e.y) &&
                    (n += `scale(${1 / e.x}, ${1 / e.y}) `),
                  r)
                ) {
                  let {
                    transformPerspective: t,
                    rotate: e,
                    rotateX: i,
                    rotateY: o,
                    skewX: a,
                    skewY: s,
                  } = r;
                  t && (n = `perspective(${t}px) ${n}`),
                    e && (n += `rotate(${e}deg) `),
                    i && (n += `rotateX(${i}deg) `),
                    o && (n += `rotateY(${o}deg) `),
                    a && (n += `skewX(${a}deg) `),
                    s && (n += `skewY(${s}deg) `);
                }
                let s = t.x.scale * e.x,
                  l = t.y.scale * e.y;
                return (
                  (1 !== s || 1 !== l) && (n += `scale(${s}, ${l})`),
                  n || "none"
                );
              })(this.projectionDeltaWithTransform, this.treeScale, a)),
              i && (n.transform = i(a, n.transform));
            let { x: s, y: l } = this.projectionDelta;
            for (let t in ((n.transformOrigin = `${100 * s.origin}% ${
              100 * l.origin
            }% 0`),
            o.animationValues
              ? (n.opacity =
                  o === this
                    ? null !==
                        (r =
                          null !== (e = a.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== r
                      ? r
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : a.opacityExit)
              : (n.opacity =
                  o === this
                    ? void 0 !== a.opacity
                      ? a.opacity
                      : ""
                    : void 0 !== a.opacityExit
                    ? a.opacityExit
                    : 0),
            tB)) {
              if (void 0 === a[t]) continue;
              let { correct: e, applyTo: r } = tB[t],
                i = "none" === n.transform ? a[t] : e(a[t], o);
              if (r) {
                let t = r.length;
                for (let e = 0; e < t; e++) n[r[e]] = i;
              } else n[t] = i;
            }
            return (
              this.options.layoutId &&
                (n.pointerEvents =
                  o === this
                    ? tG(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              n
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(eP),
              this.root.sharedNodes.clear();
          }
        };
      }
      function eb(t) {
        t.updateLayout();
      }
      function ex(t) {
        var e;
        let r =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && r && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: n } = t.layout,
            { animationType: i } = t.options,
            o = r.source !== t.layout.source;
          "size" === i
            ? tn((t) => {
                let n = o ? r.measuredBox[t] : r.layoutBox[t],
                  i = N(n);
                (n.min = e[t].min), (n.max = n.min + i);
              })
            : eF(i, r.layoutBox, e) &&
              tn((n) => {
                let i = o ? r.measuredBox[n] : r.layoutBox[n],
                  a = N(e[n]);
                (i.max = i.min + a),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[n].max = t.relativeTarget[n].min + a));
              });
          let a = tt();
          U(a, e, r.layoutBox);
          let s = tt();
          o
            ? U(s, t.applyTransform(n, !0), r.measuredBox)
            : U(s, e, r.layoutBox);
          let l = !eo(a),
            u = !1;
          if (!t.resumeFrom) {
            let n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              let { snapshot: i, layout: o } = n;
              if (i && o) {
                let a = tr();
                Y(a, r.layoutBox, i.layoutBox);
                let s = tr();
                Y(s, e, o.layoutBox),
                  el(a, s) || (u = !0),
                  n.options.layoutRoot &&
                    ((t.relativeTarget = s),
                    (t.relativeTargetOrigin = a),
                    (t.relativeParent = n));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: r,
            delta: s,
            layoutDelta: a,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function ew(t) {
        ef && eh.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function ek(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function eS(t) {
        t.clearSnapshot();
      }
      function eP(t) {
        t.clearMeasurements();
      }
      function eT(t) {
        t.isLayoutDirty = !1;
      }
      function eC(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function eE(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function eR(t) {
        t.resolveTargetDelta();
      }
      function eA(t) {
        t.calcProjection();
      }
      function ej(t) {
        t.resetSkewAndRotation();
      }
      function e_(t) {
        t.removeLeadSnapshot();
      }
      function eO(t, e, r) {
        (t.translate = (0, W.t)(e.translate, 0, r)),
          (t.scale = (0, W.t)(e.scale, 1, r)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function eM(t, e, r, n) {
        (t.min = (0, W.t)(e.min, r.min, n)),
          (t.max = (0, W.t)(e.max, r.max, n));
      }
      function eD(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let eB = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        eL = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        eV = eL("applewebkit/") && !eL("chrome/") ? Math.round : S.Z;
      function eI(t) {
        (t.min = eV(t.min)), (t.max = eV(t.max));
      }
      function eF(t, e, r) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !(0.2 >= Math.abs(eu(e) - eu(r))))
        );
      }
      function e$(t) {
        var e;
        return (
          t !== t.root &&
          (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
        );
      }
      let eW = ey({
          attachResizeListener: (t, e) => E(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        eN = { current: void 0 },
        ez = ey({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!eN.current) {
              let t = new eW({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (eN.current = t);
            }
            return eN.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
      function eU(t, e, r) {
        let { props: n } = t;
        t.animationState &&
          n.whileHover &&
          t.animationState.setActive("whileHover", "Start" === r);
        let i = n["onHover" + r];
        i && M.Wi.postRender(() => i(e, R(e)));
      }
      class eX extends b {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (0, T.Mr)(
              t,
              (t) => (eU(this.node, t, "Start"), (t) => eU(this.node, t, "End"))
            ));
        }
        unmount() {}
      }
      class eH extends b {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = (0, O.z)(
            E(this.node.current, "focus", () => this.onFocus()),
            E(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      function eY(t, e, r) {
        let { props: n } = t;
        t.animationState &&
          n.whileTap &&
          t.animationState.setActive("whileTap", "Start" === r);
        let i = n["onTap" + ("End" === r ? "" : r)];
        i && M.Wi.postRender(() => i(e, R(e)));
      }
      class eq extends b {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (0, T.OD)(
              t,
              (t) => (
                eY(this.node, t, "Start"),
                (t, { success: e }) => eY(this.node, t, e ? "End" : "Cancel")
              ),
              { useGlobalTarget: this.node.props.globalTapTarget }
            ));
        }
        unmount() {}
      }
      let eK = new WeakMap(),
        eG = new WeakMap(),
        eZ = (t) => {
          let e = eK.get(t.target);
          e && e(t);
        },
        eJ = (t) => {
          t.forEach(eZ);
        },
        eQ = { some: 0, all: 1 };
      class e0 extends b {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: r, amount: n = "some", once: i } = t,
            o = {
              root: e ? e.current : void 0,
              rootMargin: r,
              threshold: "number" == typeof n ? n : eQ[n],
            };
          return (function (t, e, r) {
            let n = (function ({ root: t, ...e }) {
              let r = t || document;
              eG.has(r) || eG.set(r, {});
              let n = eG.get(r),
                i = JSON.stringify(e);
              return (
                n[i] ||
                  (n[i] = new IntersectionObserver(eJ, { root: t, ...e })),
                n[i]
              );
            })(e);
            return (
              eK.set(t, r),
              n.observe(t),
              () => {
                eK.delete(t), n.unobserve(t);
              }
            );
          })(this.node.current, o, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), i && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: r, onViewportLeave: n } =
                this.node.getProps(),
              o = e ? r : n;
            o && o(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (r) => t[r] !== e[r];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      let e1 = (0, tE.createContext)({ strict: !1 });
      var e2 = r(45750);
      let e5 = (0, tE.createContext)({});
      function e4(t) {
        return n(t.animate) || h.some((e) => u(t[e]));
      }
      function e3(t) {
        return !!(e4(t) || t.variants);
      }
      function e6(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      var e9 = r(44563);
      let e7 = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        e8 = {};
      for (let t in e7) e8[t] = { isEnabled: (e) => e7[t].some((t) => !!e[t]) };
      let rt = Symbol.for("motionComponentSymbol");
      var re = r(64252),
        rr = r(11534),
        rn = r(61750);
      let ri = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function ro(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (ri.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      var ra = r(31297),
        rs = r(53576);
      let rl = (t) => (e, r) => {
        let i = (0, tE.useContext)(e5),
          o = (0, tE.useContext)(re.O),
          a = () =>
            (function (
              {
                scrapeMotionValuesFromProps: t,
                createRenderState: e,
                onUpdate: r,
              },
              i,
              o,
              a
            ) {
              let s = {
                latestValues: (function (t, e, r, i) {
                  let o = {},
                    a = i(t, {});
                  for (let t in a) o[t] = tG(a[t]);
                  let { initial: s, animate: l } = t,
                    u = e4(t),
                    c = e3(t);
                  e &&
                    c &&
                    !u &&
                    !1 !== t.inherit &&
                    (void 0 === s && (s = e.initial),
                    void 0 === l && (l = e.animate));
                  let d = !!r && !1 === r.initial,
                    h = (d = d || !1 === s) ? l : s;
                  if (h && "boolean" != typeof h && !n(h)) {
                    let e = Array.isArray(h) ? h : [h];
                    for (let r = 0; r < e.length; r++) {
                      let n = (0, ra.o)(t, e[r]);
                      if (n) {
                        let { transitionEnd: t, transition: e, ...r } = n;
                        for (let t in r) {
                          let e = r[t];
                          if (Array.isArray(e)) {
                            let t = d ? e.length - 1 : 0;
                            e = e[t];
                          }
                          null !== e && (o[t] = e);
                        }
                        for (let e in t) o[e] = t[e];
                      }
                    }
                  }
                  return o;
                })(i, o, a, t),
                renderState: e(),
              };
              return (
                r &&
                  ((s.onMount = (t) => r({ props: i, current: t, ...s })),
                  (s.onUpdate = (t) => r(t))),
                s
              );
            })(t, e, i, o);
        return r ? a() : (0, rs.h)(a);
      };
      var ru = r(87487),
        rc = r(37249);
      let rd = (t, e) => (e && "number" == typeof t ? e.transform(t) : t);
      var rh = r(66204);
      let rf = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        rp = ru._.length;
      function rm(t, e, r) {
        let { style: n, vars: i, transformOrigin: o } = t,
          a = !1,
          s = !1;
        for (let t in e) {
          let r = e[t];
          if (ru.G.has(t)) {
            a = !0;
            continue;
          }
          if ((0, rc.f)(t)) {
            i[t] = r;
            continue;
          }
          {
            let e = rd(r, rh.j[t]);
            t.startsWith("origin") ? ((s = !0), (o[t] = e)) : (n[t] = e);
          }
        }
        if (
          (!e.transform &&
            (a || r
              ? (n.transform = (function (t, e, r) {
                  let n = "",
                    i = !0;
                  for (let o = 0; o < rp; o++) {
                    let a = ru._[o],
                      s = t[a];
                    if (void 0 === s) continue;
                    let l = !0;
                    if (
                      !(l =
                        "number" == typeof s
                          ? s === (a.startsWith("scale") ? 1 : 0)
                          : 0 === parseFloat(s)) ||
                      r
                    ) {
                      let t = rd(s, rh.j[a]);
                      if (!l) {
                        i = !1;
                        let e = rf[a] || a;
                        n += `${e}(${t}) `;
                      }
                      r && (e[a] = t);
                    }
                  }
                  return (
                    (n = n.trim()),
                    r ? (n = r(e, i ? "" : n)) : i && (n = "none"),
                    n
                  );
                })(e, t.transform, r))
              : n.transform && (n.transform = "none")),
          s)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: r = 0 } = o;
          n.transformOrigin = `${t} ${e} ${r}`;
        }
      }
      function rv(t, e, r) {
        return "string" == typeof t ? t : tv.px.transform(e + r * t);
      }
      let rg = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        ry = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function rb(
        t,
        {
          attrX: e,
          attrY: r,
          attrScale: n,
          originX: i,
          originY: o,
          pathLength: a,
          pathSpacing: s = 1,
          pathOffset: l = 0,
          ...u
        },
        c,
        d
      ) {
        if ((rm(t, u, d), c)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: h, style: f, dimensions: p } = t;
        h.transform && (p && (f.transform = h.transform), delete h.transform),
          p &&
            (void 0 !== i || void 0 !== o || f.transform) &&
            (f.transformOrigin = (function (t, e, r) {
              let n = rv(e, t.x, t.width),
                i = rv(r, t.y, t.height);
              return `${n} ${i}`;
            })(p, void 0 !== i ? i : 0.5, void 0 !== o ? o : 0.5)),
          void 0 !== e && (h.x = e),
          void 0 !== r && (h.y = r),
          void 0 !== n && (h.scale = n),
          void 0 !== a &&
            (function (t, e, r = 1, n = 0, i = !0) {
              t.pathLength = 1;
              let o = i ? rg : ry;
              t[o.offset] = tv.px.transform(-n);
              let a = tv.px.transform(e),
                s = tv.px.transform(r);
              t[o.array] = `${a} ${s}`;
            })(h, a, s, l, !1);
      }
      let rx = () => ({
          style: {},
          transform: {},
          transformOrigin: {},
          vars: {},
        }),
        rw = () => ({ ...rx(), attrs: {} }),
        rk = (t) => "string" == typeof t && "svg" === t.toLowerCase();
      var rS = r(17444);
      function rP(t, { style: e, vars: r }, n, i) {
        for (let o in (Object.assign(t.style, e, i && i.getProjectionStyles(n)),
        r))
          t.style.setProperty(o, r[o]);
      }
      let rT = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function rC(t, e, r, n) {
        for (let r in (rP(t, e, void 0, n), e.attrs))
          t.setAttribute(rT.has(r) ? r : (0, rS.D)(r), e.attrs[r]);
      }
      function rE(t, { layout: e, layoutId: r }) {
        return (
          ru.G.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== r) && (!!tB[t] || "opacity" === t))
        );
      }
      function rR(t, e, r) {
        var n;
        let { style: i } = t,
          o = {};
        for (let a in i)
          ((0, tN.i)(i[a]) ||
            (e.style && (0, tN.i)(e.style[a])) ||
            rE(a, t) ||
            (null === (n = null == r ? void 0 : r.getValue(a)) || void 0 === n
              ? void 0
              : n.liveStyle) !== void 0) &&
            (o[a] = i[a]);
        return o;
      }
      function rA(t, e, r) {
        let n = rR(t, e, r);
        for (let r in t)
          ((0, tN.i)(t[r]) || (0, tN.i)(e[r])) &&
            (n[
              -1 !== ru._.indexOf(r)
                ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
                : r
            ] = t[r]);
        return n;
      }
      let rj = ["x", "y", "width", "height", "cx", "cy", "r"],
        r_ = {
          useVisualState: rl({
            scrapeMotionValuesFromProps: rA,
            createRenderState: rw,
            onUpdate: ({
              props: t,
              prevProps: e,
              current: r,
              renderState: n,
              latestValues: i,
            }) => {
              if (!r) return;
              let o = !!t.drag;
              if (!o) {
                for (let t in i)
                  if (ru.G.has(t)) {
                    o = !0;
                    break;
                  }
              }
              if (!o) return;
              let a = !e;
              if (e)
                for (let r = 0; r < rj.length; r++) {
                  let n = rj[r];
                  t[n] !== e[n] && (a = !0);
                }
              a &&
                (M.Wi.read(() =>
                  (function (t, e) {
                    try {
                      e.dimensions =
                        "function" == typeof t.getBBox
                          ? t.getBBox()
                          : t.getBoundingClientRect();
                    } catch (t) {
                      e.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                    }
                  })(r, n)
                ),
                M.Wi.render(() => {
                  rb(n, i, rk(r.tagName), t.transformTemplate), rC(r, n);
                }));
            },
          }),
        },
        rO = {
          useVisualState: rl({
            scrapeMotionValuesFromProps: rR,
            createRenderState: rx,
          }),
        };
      function rM(t, e, r) {
        for (let n in e) (0, tN.i)(e[n]) || rE(n, r) || (t[n] = e[n]);
      }
      let rD = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function rB(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          rD.has(t)
        );
      }
      let rL = (t) => !rB(t);
      try {
        (i = require("@emotion/is-prop-valid").default) &&
          (rL = (t) => (t.startsWith("on") ? !rB(t) : i(t)));
      } catch (t) {}
      var rV = r(4946),
        rI = r(13697);
      let rF = { current: null },
        r$ = { current: !1 };
      var rW = r(25861),
        rN = r(33964),
        rz = r(38580),
        rU = r(55113);
      let rX = [...rz.$, rN.$, tD.P],
        rH = (t) => rX.find((0, rU.l)(t)),
        rY = new WeakMap();
      var rq = r(39545);
      let rK = [
        "AnimationStart",
        "AnimationComplete",
        "Update",
        "BeforeLayoutMeasure",
        "LayoutMeasure",
        "LayoutAnimationStart",
        "LayoutAnimationComplete",
      ];
      class rG {
        scrapeMotionValuesFromProps(t, e, r) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: r,
            reducedMotionConfig: n,
            blockInitialAnimation: i,
            visualState: o,
          },
          a = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = rq.e),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let t = tU.X.now();
              this.renderScheduledAt < t &&
                ((this.renderScheduledAt = t),
                M.Wi.render(this.render, !1, !0));
            });
          let { latestValues: s, renderState: l, onUpdate: u } = o;
          (this.onUpdate = u),
            (this.latestValues = s),
            (this.baseTarget = { ...s }),
            (this.initialValues = e.initial ? { ...s } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = r),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = a),
            (this.blockInitialAnimation = !!i),
            (this.isControllingVariants = e4(e)),
            (this.isVariantNode = e3(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: c, ...d } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this
          );
          for (let t in d) {
            let e = d[t];
            void 0 !== s[t] && (0, tN.i)(e) && e.set(s[t], !1);
          }
        }
        mount(t) {
          (this.current = t),
            rY.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            r$.current ||
              (function () {
                if (((r$.current = !0), e9.j)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (rF.current = t.matches);
                    t.addListener(e), e();
                  } else rF.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || rF.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (rY.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, M.Pn)(this.notifyUpdate),
          (0, M.Pn)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let r;
          this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
          let n = ru.G.has(t),
            i = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && M.Wi.preRender(this.notifyUpdate),
                n && this.projection && (this.projection.isTransformDirty = !0);
            }),
            o = e.on("renderRequest", this.scheduleRender);
          window.MotionCheckAppearSync &&
            (r = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              i(), o(), r && r(), e.owner && e.stop();
            });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in e8) {
            let e = e8[t];
            if (!e) continue;
            let { isEnabled: r, Feature: n } = e;
            if (
              (!this.features[t] &&
                n &&
                r(this.props) &&
                (this.features[t] = new n(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : tr();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < rK.length; e++) {
            let r = rK[e];
            this.propEventSubscriptions[r] &&
              (this.propEventSubscriptions[r](),
              delete this.propEventSubscriptions[r]);
            let n = t["on" + r];
            n && (this.propEventSubscriptions[r] = this.on(r, n));
          }
          (this.prevMotionValues = (function (t, e, r) {
            for (let n in e) {
              let i = e[n],
                o = r[n];
              if ((0, tN.i)(i)) t.addValue(n, i);
              else if ((0, tN.i)(o)) t.addValue(n, (0, tW.BX)(i, { owner: t }));
              else if (o !== i) {
                if (t.hasValue(n)) {
                  let e = t.getValue(n);
                  !0 === e.liveStyle ? e.jump(i) : e.hasAnimated || e.set(i);
                } else {
                  let e = t.getStaticValue(n);
                  t.addValue(n, (0, tW.BX)(void 0 !== e ? e : i, { owner: t }));
                }
              }
            }
            for (let n in r) void 0 === e[n] && t.removeValue(n);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue(),
            this.onUpdate && this.onUpdate(this);
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let r = this.values.get(t);
          e !== r &&
            (r && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let r = this.values.get(t);
          return (
            void 0 === r &&
              void 0 !== e &&
              ((r = (0, tW.BX)(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, r)),
            r
          );
        }
        readValue(t, e) {
          var r;
          let n =
            void 0 === this.latestValues[t] && this.current
              ? null !== (r = this.getBaseTargetFromProps(this.props, t)) &&
                void 0 !== r
                ? r
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != n &&
              ("string" == typeof n && ((0, rV.P)(n) || (0, rI.W)(n))
                ? (n = parseFloat(n))
                : !rH(n) && tD.P.test(e) && (n = (0, rW.T)(t, e)),
              this.setBaseTarget(t, (0, tN.i)(n) ? n.get() : n)),
            (0, tN.i)(n) ? n.get() : n
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let r;
          let { initial: n } = this.props;
          if ("string" == typeof n || "object" == typeof n) {
            let i = (0, ra.o)(
              this.props,
              n,
              null === (e = this.presenceContext) || void 0 === e
                ? void 0
                : e.custom
            );
            i && (r = i[t]);
          }
          if (n && void 0 !== r) return r;
          let i = this.getBaseTargetFromProps(this.props, t);
          return void 0 === i || (0, tN.i)(i)
            ? void 0 !== this.initialValues[t] && void 0 === r
              ? void 0
              : this.baseTarget[t]
            : i;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new tq.L()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      var rZ = r(94238);
      class rJ extends rG {
        constructor() {
          super(...arguments), (this.KeyframeResolver = rZ.s);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: r }) {
          delete e[t], delete r[t];
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          (0, tN.i)(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      var rQ = r(22005);
      class r0 extends rJ {
        constructor() {
          super(...arguments), (this.type = "html"), (this.renderInstance = rP);
        }
        readValueFromInstance(t, e) {
          if (ru.G.has(e)) {
            let t = (0, rQ.A)(e);
            return (t && t.default) || 0;
          }
          {
            let r = window.getComputedStyle(t),
              n = ((0, rc.f)(e) ? r.getPropertyValue(e) : r[e]) || 0;
            return "string" == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return tm(t, e);
        }
        build(t, e, r) {
          rm(t, e, r.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, r) {
          return rR(t, e, r);
        }
      }
      class r1 extends rJ {
        constructor() {
          super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = tr);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (ru.G.has(e)) {
            let t = (0, rQ.A)(e);
            return (t && t.default) || 0;
          }
          return (e = rT.has(e) ? e : (0, rS.D)(e)), t.getAttribute(e);
        }
        scrapeMotionValuesFromProps(t, e, r) {
          return rA(t, e, r);
        }
        build(t, e, r) {
          rb(t, e, this.isSVGTag, r.transformTemplate);
        }
        renderInstance(t, e, r, n) {
          rC(t, e, r, n);
        }
        mount(t) {
          (this.isSVGTag = rk(t.tagName)), super.mount(t);
        }
      }
      let r2 = (function (t) {
        if ("undefined" == typeof Proxy) return t;
        let e = new Map();
        return new Proxy((...e) => t(...e), {
          get: (r, n) =>
            "create" === n ? t : (e.has(n) || e.set(n, t(n)), e.get(n)),
        });
      })(
        ((o = {
          animation: { Feature: x },
          exit: { Feature: k },
          inView: { Feature: e0 },
          tap: { Feature: eq },
          focus: { Feature: eH },
          hover: { Feature: eX },
          pan: { Feature: tT },
          drag: { Feature: tS, ProjectionNode: ez, MeasureLayout: tF },
          layout: { ProjectionNode: ez, MeasureLayout: tF },
        }),
        (a = (t, e) =>
          ro(t)
            ? new r1(e)
            : new r0(e, { allowProjection: t !== tE.Fragment })),
        function (t, { forwardMotionProps: e } = { forwardMotionProps: !1 }) {
          return (function (t) {
            var e, r;
            let {
              preloadedFeatures: n,
              createVisualElement: i,
              useRender: o,
              useVisualState: a,
              Component: s,
            } = t;
            function l(t, e) {
              var r;
              let n;
              let l = {
                  ...(0, tE.useContext)(e2._),
                  ...t,
                  layoutId: (function (t) {
                    let { layoutId: e } = t,
                      r = (0, tE.useContext)(tA.p).id;
                    return r && void 0 !== e ? r + "-" + e : e;
                  })(t),
                },
                { isStatic: c } = l,
                d = (function (t) {
                  let { initial: e, animate: r } = (function (t, e) {
                    if (e4(t)) {
                      let { initial: e, animate: r } = t;
                      return {
                        initial: !1 === e || u(e) ? e : void 0,
                        animate: u(r) ? r : void 0,
                      };
                    }
                    return !1 !== t.inherit ? e : {};
                  })(t, (0, tE.useContext)(e5));
                  return (0, tE.useMemo)(
                    () => ({ initial: e, animate: r }),
                    [e6(e), e6(r)]
                  );
                })(t),
                h = a(t, c);
              if (!c && e9.j) {
                (0, tE.useContext)(e1).strict;
                let t = (function (t) {
                  let { drag: e, layout: r } = e8;
                  if (!e && !r) return {};
                  let n = { ...e, ...r };
                  return {
                    MeasureLayout:
                      (null == e ? void 0 : e.isEnabled(t)) ||
                      (null == r ? void 0 : r.isEnabled(t))
                        ? n.MeasureLayout
                        : void 0,
                    ProjectionNode: n.ProjectionNode,
                  };
                })(l);
                (n = t.MeasureLayout),
                  (d.visualElement = (function (t, e, r, n, i) {
                    var o, a;
                    let { visualElement: s } = (0, tE.useContext)(e5),
                      l = (0, tE.useContext)(e1),
                      u = (0, tE.useContext)(re.O),
                      c = (0, tE.useContext)(e2._).reducedMotion,
                      d = (0, tE.useRef)(null);
                    (n = n || l.renderer),
                      !d.current &&
                        n &&
                        (d.current = n(t, {
                          visualState: e,
                          parent: s,
                          props: r,
                          presenceContext: u,
                          blockInitialAnimation: !!u && !1 === u.initial,
                          reducedMotionConfig: c,
                        }));
                    let h = d.current,
                      f = (0, tE.useContext)(tj);
                    h &&
                      !h.projection &&
                      i &&
                      ("html" === h.type || "svg" === h.type) &&
                      (function (t, e, r, n) {
                        let {
                          layoutId: i,
                          layout: o,
                          drag: a,
                          dragConstraints: s,
                          layoutScroll: l,
                          layoutRoot: u,
                        } = e;
                        (t.projection = new r(
                          t.latestValues,
                          e["data-framer-portal-id"]
                            ? void 0
                            : (function t(e) {
                                if (e)
                                  return !1 !== e.options.allowProjection
                                    ? e.projection
                                    : t(e.parent);
                              })(t.parent)
                        )),
                          t.projection.setOptions({
                            layoutId: i,
                            layout: o,
                            alwaysMeasureLayout: !!a || (s && F(s)),
                            visualElement: t,
                            animationType: "string" == typeof o ? o : "both",
                            initialPromotionConfig: n,
                            layoutScroll: l,
                            layoutRoot: u,
                          });
                      })(d.current, r, i, f);
                    let p = (0, tE.useRef)(!1);
                    (0, tE.useInsertionEffect)(() => {
                      h && p.current && h.update(r, u);
                    });
                    let m = r[rn.M],
                      v = (0, tE.useRef)(
                        !!m &&
                          !(null === (o = window.MotionHandoffIsComplete) ||
                          void 0 === o
                            ? void 0
                            : o.call(window, m)) &&
                          (null === (a = window.MotionHasOptimisedAnimation) ||
                          void 0 === a
                            ? void 0
                            : a.call(window, m))
                      );
                    return (
                      (0, rr.L)(() => {
                        h &&
                          ((p.current = !0),
                          (window.MotionIsMounted = !0),
                          h.updateFeatures(),
                          tL.render(h.render),
                          v.current &&
                            h.animationState &&
                            h.animationState.animateChanges());
                      }),
                      (0, tE.useEffect)(() => {
                        h &&
                          (!v.current &&
                            h.animationState &&
                            h.animationState.animateChanges(),
                          v.current &&
                            (queueMicrotask(() => {
                              var t;
                              null ===
                                (t = window.MotionHandoffMarkAsComplete) ||
                                void 0 === t ||
                                t.call(window, m);
                            }),
                            (v.current = !1)));
                      }),
                      h
                    );
                  })(s, h, l, i, t.ProjectionNode));
              }
              return (0, tC.jsxs)(e5.Provider, {
                value: d,
                children: [
                  n && d.visualElement
                    ? (0, tC.jsx)(n, { visualElement: d.visualElement, ...l })
                    : null,
                  o(
                    s,
                    t,
                    ((r = d.visualElement),
                    (0, tE.useCallback)(
                      (t) => {
                        t && h.onMount && h.onMount(t),
                          r && (t ? r.mount(t) : r.unmount()),
                          e &&
                            ("function" == typeof e
                              ? e(t)
                              : F(e) && (e.current = t));
                      },
                      [r]
                    )),
                    h,
                    c,
                    d.visualElement
                  ),
                ],
              });
            }
            n &&
              (function (t) {
                for (let e in t) e8[e] = { ...e8[e], ...t[e] };
              })(n),
              (l.displayName = "motion.".concat(
                "string" == typeof s
                  ? s
                  : "create(".concat(
                      null !==
                        (r =
                          null !== (e = s.displayName) && void 0 !== e
                            ? e
                            : s.name) && void 0 !== r
                        ? r
                        : "",
                      ")"
                    )
              ));
            let c = (0, tE.forwardRef)(l);
            return (c[rt] = s), c;
          })({
            ...(ro(t) ? r_ : rO),
            preloadedFeatures: o,
            useRender: (function (t = !1) {
              return (e, r, n, { latestValues: i }, o) => {
                let a = (
                    ro(e)
                      ? function (t, e, r, n) {
                          let i = (0, tE.useMemo)(() => {
                            let r = rw();
                            return (
                              rb(r, e, rk(n), t.transformTemplate),
                              { ...r.attrs, style: { ...r.style } }
                            );
                          }, [e]);
                          if (t.style) {
                            let e = {};
                            rM(e, t.style, t), (i.style = { ...e, ...i.style });
                          }
                          return i;
                        }
                      : function (t, e) {
                          let r = {},
                            n = (function (t, e) {
                              let r = t.style || {},
                                n = {};
                              return (
                                rM(n, r, t),
                                Object.assign(
                                  n,
                                  (function ({ transformTemplate: t }, e) {
                                    return (0, tE.useMemo)(() => {
                                      let r = rx();
                                      return (
                                        rm(r, e, t),
                                        Object.assign({}, r.vars, r.style)
                                      );
                                    }, [e]);
                                  })(t, e)
                                ),
                                n
                              );
                            })(t, e);
                          return (
                            t.drag &&
                              !1 !== t.dragListener &&
                              ((r.draggable = !1),
                              (n.userSelect =
                                n.WebkitUserSelect =
                                n.WebkitTouchCallout =
                                  "none"),
                              (n.touchAction =
                                !0 === t.drag
                                  ? "none"
                                  : `pan-${"x" === t.drag ? "y" : "x"}`)),
                            void 0 === t.tabIndex &&
                              (t.onTap || t.onTapStart || t.whileTap) &&
                              (r.tabIndex = 0),
                            (r.style = n),
                            r
                          );
                        }
                  )(r, i, o, e),
                  s = (function (t, e, r) {
                    let n = {};
                    for (let i in t)
                      ("values" !== i || "object" != typeof t.values) &&
                        (rL(i) ||
                          (!0 === r && rB(i)) ||
                          (!e && !rB(i)) ||
                          (t.draggable && i.startsWith("onDrag"))) &&
                        (n[i] = t[i]);
                    return n;
                  })(r, "string" == typeof e, t),
                  l = e !== tE.Fragment ? { ...s, ...a, ref: n } : {},
                  { children: u } = r,
                  c = (0, tE.useMemo)(() => ((0, tN.i)(u) ? u.get() : u), [u]);
                return (0, tE.createElement)(e, { ...l, children: c });
              };
            })(e),
            createVisualElement: a,
            Component: t,
          });
        })
      );
    },
    94238: function (t, e, r) {
      "use strict";
      r.d(e, {
        s: function () {
          return m;
        },
      });
      var n = r(13697),
        i = r(56596),
        o = r(83206),
        a = r(25861);
      let s = new Set(["auto", "none", "0"]);
      var l = r(39545),
        u = r(62035),
        c = r(4946),
        d = r(37249);
      let h = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
      var f = r(90401),
        p = r(38580);
      class m extends l.e {
        constructor(t, e, r, n, i) {
          super(t, e, r, n, i, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: r } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let r = 0; r < t.length; r++) {
            let n = t[r];
            if ("string" == typeof n && ((n = n.trim()), (0, d.t)(n))) {
              let i = (function t(e, r, n = 1) {
                (0, u.k)(
                  n <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
                );
                let [i, o] = (function (t) {
                  let e = h.exec(t);
                  if (!e) return [,];
                  let [, r, n, i] = e;
                  return [`--${null != r ? r : n}`, i];
                })(e);
                if (!i) return;
                let a = window.getComputedStyle(r).getPropertyValue(i);
                if (a) {
                  let t = a.trim();
                  return (0, c.P)(t) ? parseFloat(t) : t;
                }
                return (0, d.t)(o) ? t(o, r, n + 1) : o;
              })(n, e.current);
              void 0 !== i && (t[r] = i),
                r === t.length - 1 && (this.finalKeyframe = n);
            }
          }
          if ((this.resolveNoneKeyframes(), !i.z.has(r) || 2 !== t.length))
            return;
          let [n, o] = t,
            a = (0, p.C)(n),
            s = (0, p.C)(o);
          if (a !== s) {
            if ((0, f.mP)(a) && (0, f.mP)(s))
              for (let e = 0; e < t.length; e++) {
                let r = t[e];
                "string" == typeof r && (t[e] = parseFloat(r));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            r = [];
          for (let e = 0; e < t.length; e++) {
            var i;
            ("number" == typeof (i = t[e])
              ? 0 === i
              : null === i || "none" === i || "0" === i || (0, n.W)(i)) &&
              r.push(e);
          }
          r.length &&
            (function (t, e, r) {
              let n,
                i = 0;
              for (; i < t.length && !n; ) {
                let e = t[i];
                "string" == typeof e &&
                  !s.has(e) &&
                  (0, o.V)(e).values.length &&
                  (n = t[i]),
                  i++;
              }
              if (n && r) for (let i of e) t[i] = (0, a.T)(r, n);
            })(t, r, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: r } = this;
          if (!t || !t.current) return;
          "height" === r && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = f.lw[r](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin);
          let n = e[e.length - 1];
          void 0 !== n && t.getValue(r, n).jump(n, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: r, unresolvedKeyframes: n } = this;
          if (!e || !e.current) return;
          let i = e.getValue(r);
          i && i.jump(this.measuredOrigin, !1);
          let o = n.length - 1,
            a = n[o];
          (n[o] = f.lw[r](
            e.measureViewportBox(),
            window.getComputedStyle(e.current)
          )),
            null !== a &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = a),
            (null === (t = this.removedTransforms) || void 0 === t
              ? void 0
              : t.length) &&
              this.removedTransforms.forEach(([t, r]) => {
                e.getValue(t).set(r);
              }),
            this.resolveNoneKeyframes();
        }
      }
    },
    17444: function (t, e, r) {
      "use strict";
      r.d(e, {
        D: function () {
          return n;
        },
      });
      let n = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();
    },
    37249: function (t, e, r) {
      "use strict";
      r.d(e, {
        f: function () {
          return i;
        },
        t: function () {
          return a;
        },
      });
      let n = (t) => (e) => "string" == typeof e && e.startsWith(t),
        i = n("--"),
        o = n("var(--"),
        a = (t) => !!o(t) && s.test(t.split("/*")[0].trim()),
        s =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    },
    90401: function (t, e, r) {
      "use strict";
      r.d(e, {
        Ei: function () {
          return d;
        },
        lw: function () {
          return h;
        },
        mP: function () {
          return a;
        },
      });
      var n = r(74305),
        i = r(27492),
        o = r(87487);
      let a = (t) => t === n.Rx || t === i.px,
        s = (t, e) => parseFloat(t.split(", ")[e]),
        l =
          (t, e) =>
          (r, { transform: n }) => {
            if ("none" === n || !n) return 0;
            let i = n.match(/^matrix3d\((.+)\)$/u);
            if (i) return s(i[1], e);
            {
              let e = n.match(/^matrix\((.+)\)$/u);
              return e ? s(e[1], t) : 0;
            }
          },
        u = new Set(["x", "y", "z"]),
        c = o._.filter((t) => !u.has(t));
      function d(t) {
        let e = [];
        return (
          c.forEach((r) => {
            let n = t.getValue(r);
            void 0 !== n &&
              (e.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0));
          }),
          e
        );
      }
      let h = {
        width: ({ x: t }, { paddingLeft: e = "0", paddingRight: r = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(r),
        height: ({ y: t }, { paddingTop: e = "0", paddingBottom: r = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(r),
        top: (t, { top: e }) => parseFloat(e),
        left: (t, { left: e }) => parseFloat(e),
        bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
        right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
        x: l(4, 13),
        y: l(5, 14),
      };
      (h.translateX = h.x), (h.translateY = h.y);
    },
    25861: function (t, e, r) {
      "use strict";
      r.d(e, {
        T: function () {
          return a;
        },
      });
      var n = r(83206),
        i = r(22779),
        o = r(22005);
      function a(t, e) {
        let r = (0, o.A)(t);
        return (
          r !== i.h && (r = n.P),
          r.getAnimatableNone ? r.getAnimatableNone(e) : void 0
        );
      }
    },
    22005: function (t, e, r) {
      "use strict";
      r.d(e, {
        A: function () {
          return a;
        },
      });
      var n = r(33964),
        i = r(22779);
      let o = {
          ...r(66204).j,
          color: n.$,
          backgroundColor: n.$,
          outlineColor: n.$,
          fill: n.$,
          stroke: n.$,
          borderColor: n.$,
          borderTopColor: n.$,
          borderRightColor: n.$,
          borderBottomColor: n.$,
          borderLeftColor: n.$,
          filter: i.h,
          WebkitFilter: i.h,
        },
        a = (t) => o[t];
    },
    38580: function (t, e, r) {
      "use strict";
      r.d(e, {
        $: function () {
          return a;
        },
        C: function () {
          return s;
        },
      });
      var n = r(74305),
        i = r(27492),
        o = r(55113);
      let a = [
          n.Rx,
          i.px,
          i.aQ,
          i.RW,
          i.vw,
          i.vh,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        s = (t) => a.find((0, o.l)(t));
    },
    66204: function (t, e, r) {
      "use strict";
      r.d(e, {
        j: function () {
          return l;
        },
      });
      var n = r(74305),
        i = r(27492);
      let o = {
          borderWidth: i.px,
          borderTopWidth: i.px,
          borderRightWidth: i.px,
          borderBottomWidth: i.px,
          borderLeftWidth: i.px,
          borderRadius: i.px,
          radius: i.px,
          borderTopLeftRadius: i.px,
          borderTopRightRadius: i.px,
          borderBottomRightRadius: i.px,
          borderBottomLeftRadius: i.px,
          width: i.px,
          maxWidth: i.px,
          height: i.px,
          maxHeight: i.px,
          top: i.px,
          right: i.px,
          bottom: i.px,
          left: i.px,
          padding: i.px,
          paddingTop: i.px,
          paddingRight: i.px,
          paddingBottom: i.px,
          paddingLeft: i.px,
          margin: i.px,
          marginTop: i.px,
          marginRight: i.px,
          marginBottom: i.px,
          marginLeft: i.px,
          backgroundPositionX: i.px,
          backgroundPositionY: i.px,
        },
        a = {
          rotate: i.RW,
          rotateX: i.RW,
          rotateY: i.RW,
          rotateZ: i.RW,
          scale: n.bA,
          scaleX: n.bA,
          scaleY: n.bA,
          scaleZ: n.bA,
          skew: i.RW,
          skewX: i.RW,
          skewY: i.RW,
          distance: i.px,
          translateX: i.px,
          translateY: i.px,
          translateZ: i.px,
          x: i.px,
          y: i.px,
          z: i.px,
          perspective: i.px,
          transformPerspective: i.px,
          opacity: n.Fq,
          originX: i.$C,
          originY: i.$C,
          originZ: i.px,
        },
        s = { ...n.Rx, transform: Math.round },
        l = {
          ...o,
          ...a,
          zIndex: s,
          size: i.px,
          fillOpacity: n.Fq,
          strokeOpacity: n.Fq,
          numOctaves: s,
        };
    },
    55113: function (t, e, r) {
      "use strict";
      r.d(e, {
        l: function () {
          return n;
        },
      });
      let n = (t) => (e) => e.test(t);
    },
    56596: function (t, e, r) {
      "use strict";
      r.d(e, {
        z: function () {
          return n;
        },
      });
      let n = new Set([
        "width",
        "height",
        "top",
        "left",
        "right",
        "bottom",
        ...r(87487)._,
      ]);
    },
    87487: function (t, e, r) {
      "use strict";
      r.d(e, {
        G: function () {
          return i;
        },
        _: function () {
          return n;
        },
      });
      let n = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        i = new Set(n);
    },
    39545: function (t, e, r) {
      "use strict";
      r.d(e, {
        e: function () {
          return d;
        },
        m: function () {
          return c;
        },
      });
      var n = r(90401),
        i = r(45414);
      let o = new Set(),
        a = !1,
        s = !1;
      function l() {
        if (s) {
          let t = Array.from(o).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            r = new Map();
          e.forEach((t) => {
            let e = (0, n.Ei)(t);
            e.length && (r.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = r.get(t);
              e &&
                e.forEach(([e, r]) => {
                  var n;
                  null === (n = t.getValue(e)) || void 0 === n || n.set(r);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (s = !1), (a = !1), o.forEach((t) => t.complete()), o.clear();
      }
      function u() {
        o.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (s = !0);
        });
      }
      function c() {
        u(), l();
      }
      class d {
        constructor(t, e, r, n, i, o = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = r),
            (this.motionValue = n),
            (this.element = i),
            (this.isAsync = o);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (o.add(this),
                a || ((a = !0), i.Wi.read(u), i.Wi.resolveKeyframes(l)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: r,
            motionValue: n,
          } = this;
          for (let i = 0; i < t.length; i++)
            if (null === t[i]) {
              if (0 === i) {
                let i = null == n ? void 0 : n.get(),
                  o = t[t.length - 1];
                if (void 0 !== i) t[0] = i;
                else if (r && e) {
                  let n = r.readValue(e, o);
                  null != n && (t[0] = n);
                }
                void 0 === t[0] && (t[0] = o), n && void 0 === i && n.set(t[0]);
              } else t[i] = t[i - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            o.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), o.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
    },
    67043: function (t, e, r) {
      "use strict";
      r.d(e, {
        x: function () {
          return i;
        },
      });
      var n = r(31297);
      function i(t, e, r) {
        let i = t.getProps();
        return (0, n.o)(i, e, void 0 !== r ? r : i.custom, t);
      }
    },
    31297: function (t, e, r) {
      "use strict";
      function n(t) {
        let e = [{}, {}];
        return (
          null == t ||
            t.values.forEach((t, r) => {
              (e[0][r] = t.get()), (e[1][r] = t.getVelocity());
            }),
          e
        );
      }
      function i(t, e, r, i) {
        if ("function" == typeof e) {
          let [o, a] = n(i);
          e = e(void 0 !== r ? r : t.custom, o, a);
        }
        if (
          ("string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e)
        ) {
          let [o, a] = n(i);
          e = e(void 0 !== r ? r : t.custom, o, a);
        }
        return e;
      }
      r.d(e, {
        o: function () {
          return i;
        },
      });
    },
    48771: function (t, e, r) {
      "use strict";
      r.d(e, {
        C: function () {
          return a;
        },
      });
      var n = r(4581),
        i = r(3078),
        o = r(67043);
      function a(t, e) {
        let {
          transitionEnd: r = {},
          transition: a = {},
          ...s
        } = (0, o.x)(t, e) || {};
        for (let e in (s = { ...s, ...r })) {
          let r = (0, n.Y)(s[e]);
          t.hasValue(e) ? t.getValue(e).set(r) : t.addValue(e, (0, i.BX)(r));
        }
      }
    },
    24118: function (t, e, r) {
      "use strict";
      r.d(e, {
        c: function () {
          return n;
        },
      });
      let n = { skipAnimations: !1, useManualTiming: !1 };
    },
    69013: function (t, e, r) {
      "use strict";
      function n(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function i(t, e) {
        let r = t.indexOf(e);
        r > -1 && t.splice(r, 1);
      }
      r.d(e, {
        cl: function () {
          return i;
        },
        y4: function () {
          return n;
        },
      });
    },
    59111: function (t, e, r) {
      "use strict";
      r.d(e, {
        u: function () {
          return n;
        },
      });
      let n = (t, e, r) => (r > e ? e : r < t ? t : r);
    },
    44563: function (t, e, r) {
      "use strict";
      r.d(e, {
        j: function () {
          return n;
        },
      });
      let n = "undefined" != typeof window;
    },
    4946: function (t, e, r) {
      "use strict";
      r.d(e, {
        P: function () {
          return n;
        },
      });
      let n = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
    },
    13697: function (t, e, r) {
      "use strict";
      r.d(e, {
        W: function () {
          return n;
        },
      });
      let n = (t) => /^0[^.\s]+$/u.test(t);
    },
    96781: function (t, e, r) {
      "use strict";
      r.d(e, {
        t: function () {
          return n;
        },
      });
      let n = (t, e, r) => t + (e - t) * r;
    },
    56920: function (t, e, r) {
      "use strict";
      r.d(e, {
        z: function () {
          return i;
        },
      });
      let n = (t, e) => (r) => e(t(r)),
        i = (...t) => t.reduce(n);
    },
    4581: function (t, e, r) {
      "use strict";
      r.d(e, {
        Y: function () {
          return o;
        },
        p: function () {
          return i;
        },
      });
      var n = r(44944);
      let i = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        o = (t) => ((0, n.C)(t) ? t[t.length - 1] || 0 : t);
    },
    34081: function (t, e, r) {
      "use strict";
      r.d(e, {
        L: function () {
          return i;
        },
      });
      var n = r(69013);
      class i {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (
            (0, n.y4)(this.subscriptions, t),
            () => (0, n.cl)(this.subscriptions, t)
          );
        }
        notify(t, e, r) {
          let n = this.subscriptions.length;
          if (n) {
            if (1 === n) this.subscriptions[0](t, e, r);
            else
              for (let i = 0; i < n; i++) {
                let n = this.subscriptions[i];
                n && n(t, e, r);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    53576: function (t, e, r) {
      "use strict";
      r.d(e, {
        h: function () {
          return i;
        },
      });
      var n = r(2265);
      function i(t) {
        let e = (0, n.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    11534: function (t, e, r) {
      "use strict";
      r.d(e, {
        L: function () {
          return i;
        },
      });
      var n = r(2265);
      let i = r(44563).j ? n.useLayoutEffect : n.useEffect;
    },
    14438: function (t, e, r) {
      "use strict";
      function n(t, e) {
        return e ? (1e3 / e) * t : 0;
      }
      r.d(e, {
        R: function () {
          return n;
        },
      });
    },
    3078: function (t, e, r) {
      "use strict";
      r.d(e, {
        BX: function () {
          return c;
        },
      });
      var n = r(40504),
        i = r(34081),
        o = r(14438),
        a = r(45414);
      let s = (t) => !isNaN(parseFloat(t)),
        l = { current: void 0 };
      class u {
        constructor(t, e = {}) {
          (this.version = "11.18.0"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let r = n.X.now();
              this.updatedAt !== r && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t),
            (this.updatedAt = n.X.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = s(this.current));
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new i.L());
          let r = this.events[t].add(e);
          return "change" === t
            ? () => {
                r(),
                  a.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : r;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, r) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - r);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return l.current && l.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let t = n.X.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            t - this.updatedAt > 30
          )
            return 0;
          let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, o.R)(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            e
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function c(t, e) {
        return new u(t, e);
      }
    },
    87325: function (t, e, r) {
      "use strict";
      r.d(e, {
        $: function () {
          return i;
        },
      });
      var n = r(18859);
      let i = {
        test: (0, r(65516).i)("#"),
        parse: function (t) {
          let e = "",
            r = "",
            n = "",
            i = "";
          return (
            t.length > 5
              ? ((e = t.substring(1, 3)),
                (r = t.substring(3, 5)),
                (n = t.substring(5, 7)),
                (i = t.substring(7, 9)))
              : ((e = t.substring(1, 2)),
                (r = t.substring(2, 3)),
                (n = t.substring(3, 4)),
                (i = t.substring(4, 5)),
                (e += e),
                (r += r),
                (n += n),
                (i += i)),
            {
              red: parseInt(e, 16),
              green: parseInt(r, 16),
              blue: parseInt(n, 16),
              alpha: i ? parseInt(i, 16) / 255 : 1,
            }
          );
        },
        transform: n.m.transform,
      };
    },
    92943: function (t, e, r) {
      "use strict";
      r.d(e, {
        J: function () {
          return s;
        },
      });
      var n = r(74305),
        i = r(27492),
        o = r(15472),
        a = r(65516);
      let s = {
        test: (0, a.i)("hsl", "hue"),
        parse: (0, a.d)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: r, alpha: a = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          i.aQ.transform((0, o.N)(e)) +
          ", " +
          i.aQ.transform((0, o.N)(r)) +
          ", " +
          (0, o.N)(n.Fq.transform(a)) +
          ")",
      };
    },
    33964: function (t, e, r) {
      "use strict";
      r.d(e, {
        $: function () {
          return a;
        },
      });
      var n = r(87325),
        i = r(92943),
        o = r(18859);
      let a = {
        test: (t) => o.m.test(t) || n.$.test(t) || i.J.test(t),
        parse: (t) =>
          o.m.test(t)
            ? o.m.parse(t)
            : i.J.test(t)
            ? i.J.parse(t)
            : n.$.parse(t),
        transform: (t) =>
          "string" == typeof t
            ? t
            : t.hasOwnProperty("red")
            ? o.m.transform(t)
            : i.J.transform(t),
      };
    },
    18859: function (t, e, r) {
      "use strict";
      r.d(e, {
        m: function () {
          return u;
        },
      });
      var n = r(59111),
        i = r(74305),
        o = r(15472),
        a = r(65516);
      let s = (t) => (0, n.u)(0, 255, t),
        l = { ...i.Rx, transform: (t) => Math.round(s(t)) },
        u = {
          test: (0, a.i)("rgb", "red"),
          parse: (0, a.d)("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: r, alpha: n = 1 }) =>
            "rgba(" +
            l.transform(t) +
            ", " +
            l.transform(e) +
            ", " +
            l.transform(r) +
            ", " +
            (0, o.N)(i.Fq.transform(n)) +
            ")",
        };
    },
    65516: function (t, e, r) {
      "use strict";
      r.d(e, {
        i: function () {
          return o;
        },
        d: function () {
          return a;
        },
      });
      var n = r(66941);
      let i =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        o = (t, e) => (r) =>
          !!(
            ("string" == typeof r && i.test(r) && r.startsWith(t)) ||
            (e && null != r && Object.prototype.hasOwnProperty.call(r, e))
          ),
        a = (t, e, r) => (i) => {
          if ("string" != typeof i) return i;
          let [o, a, s, l] = i.match(n.K);
          return {
            [t]: parseFloat(o),
            [e]: parseFloat(a),
            [r]: parseFloat(s),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    22779: function (t, e, r) {
      "use strict";
      r.d(e, {
        h: function () {
          return l;
        },
      });
      var n = r(83206),
        i = r(66941);
      let o = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function a(t) {
        let [e, r] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [n] = r.match(i.K) || [];
        if (!n) return t;
        let a = r.replace(n, ""),
          s = o.has(e) ? 1 : 0;
        return n !== r && (s *= 100), e + "(" + s + a + ")";
      }
      let s = /\b([a-z-]*)\(.*?\)/gu,
        l = {
          ...n.P,
          getAnimatableNone: (t) => {
            let e = t.match(s);
            return e ? e.map(a).join(" ") : t;
          },
        };
    },
    83206: function (t, e, r) {
      "use strict";
      r.d(e, {
        V: function () {
          return c;
        },
        P: function () {
          return p;
        },
      });
      var n = r(33964);
      let i =
        /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
      var o = r(66941),
        a = r(15472);
      let s = "number",
        l = "color",
        u =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function c(t) {
        let e = t.toString(),
          r = [],
          i = { color: [], number: [], var: [] },
          o = [],
          a = 0,
          c = e
            .replace(
              u,
              (t) => (
                n.$.test(t)
                  ? (i.color.push(a), o.push(l), r.push(n.$.parse(t)))
                  : t.startsWith("var(")
                  ? (i.var.push(a), o.push("var"), r.push(t))
                  : (i.number.push(a), o.push(s), r.push(parseFloat(t))),
                ++a,
                "${}"
              )
            )
            .split("${}");
        return { values: r, split: c, indexes: i, types: o };
      }
      function d(t) {
        return c(t).values;
      }
      function h(t) {
        let { split: e, types: r } = c(t),
          i = e.length;
        return (t) => {
          let o = "";
          for (let u = 0; u < i; u++)
            if (((o += e[u]), void 0 !== t[u])) {
              let e = r[u];
              e === s
                ? (o += (0, a.N)(t[u]))
                : e === l
                ? (o += n.$.transform(t[u]))
                : (o += t[u]);
            }
          return o;
        };
      }
      let f = (t) => ("number" == typeof t ? 0 : t),
        p = {
          test: function (t) {
            var e, r;
            return (
              isNaN(t) &&
              "string" == typeof t &&
              ((null === (e = t.match(o.K)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (r = t.match(i)) || void 0 === r
                  ? void 0
                  : r.length) || 0) >
                0
            );
          },
          parse: d,
          createTransformer: h,
          getAnimatableNone: function (t) {
            let e = d(t);
            return h(t)(e.map(f));
          },
        };
    },
    74305: function (t, e, r) {
      "use strict";
      r.d(e, {
        Fq: function () {
          return o;
        },
        Rx: function () {
          return i;
        },
        bA: function () {
          return a;
        },
      });
      var n = r(59111);
      let i = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        o = { ...i, transform: (t) => (0, n.u)(0, 1, t) },
        a = { ...i, default: 1 };
    },
    27492: function (t, e, r) {
      "use strict";
      r.d(e, {
        $C: function () {
          return u;
        },
        RW: function () {
          return i;
        },
        aQ: function () {
          return o;
        },
        px: function () {
          return a;
        },
        vh: function () {
          return s;
        },
        vw: function () {
          return l;
        },
      });
      let n = (t) => ({
          test: (e) =>
            "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        i = n("deg"),
        o = n("%"),
        a = n("px"),
        s = n("vh"),
        l = n("vw"),
        u = {
          ...o,
          parse: (t) => o.parse(t) / 100,
          transform: (t) => o.transform(100 * t),
        };
    },
    66941: function (t, e, r) {
      "use strict";
      r.d(e, {
        K: function () {
          return n;
        },
      });
      let n = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
    },
    15472: function (t, e, r) {
      "use strict";
      r.d(e, {
        N: function () {
          return n;
        },
      });
      let n = (t) => Math.round(1e5 * t) / 1e5;
    },
    1327: function (t, e, r) {
      "use strict";
      r.d(e, {
        K: function () {
          return i;
        },
      });
      var n = r(23999);
      function i(t, e) {
        let r = t.getValue("willChange");
        if ((0, n.i)(r) && r.add) return r.add(e);
      }
    },
    23999: function (t, e, r) {
      "use strict";
      r.d(e, {
        i: function () {
          return n;
        },
      });
      let n = (t) => !!(t && t.getVelocity);
    },
    45699: function (t, e, r) {
      "use strict";
      r.d(e, {
        sP: function () {
          return a;
        },
        _F: function () {
          return d;
        },
        iI: function () {
          return u;
        },
        wk: function () {
          return v;
        },
        ev: function () {
          return s;
        },
        Mr: function () {
          return P;
        },
        qE: function () {
          return h;
        },
        xD: function () {
          return c;
        },
        DJ: function () {
          return C;
        },
        hR: function () {
          return g;
        },
        eB: function () {
          return function t(e, r) {
            if (e)
              return "function" == typeof e && p()
                ? v(e, r)
                : h(e)
                ? y(e)
                : Array.isArray(e)
                ? e.map((e) => t(e, r) || b.easeOut)
                : b[e];
          };
        },
        EO: function () {
          return l;
        },
        OD: function () {
          return M;
        },
        IG: function () {
          return w;
        },
        KV: function () {
          return D;
        },
        Vc: function () {
          return p;
        },
      });
      var n = r(90107);
      let i = (0, n.X)(() => void 0 !== window.ScrollTimeline);
      class o {
        constructor(t) {
          (this.stop = () => this.runAll("stop")),
            (this.animations = t.filter(Boolean));
        }
        get finished() {
          return Promise.all(
            this.animations.map((t) => ("finished" in t ? t.finished : t))
          );
        }
        getAll(t) {
          return this.animations[0][t];
        }
        setAll(t, e) {
          for (let r = 0; r < this.animations.length; r++)
            this.animations[r][t] = e;
        }
        attachTimeline(t, e) {
          let r = this.animations.map((r) =>
            i() && r.attachTimeline
              ? r.attachTimeline(t)
              : "function" == typeof e
              ? e(r)
              : void 0
          );
          return () => {
            r.forEach((t, e) => {
              t && t(), this.animations[e].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(t) {
          this.setAll("time", t);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(t) {
          this.setAll("speed", t);
        }
        get startTime() {
          return this.getAll("startTime");
        }
        get duration() {
          let t = 0;
          for (let e = 0; e < this.animations.length; e++)
            t = Math.max(t, this.animations[e].duration);
          return t;
        }
        runAll(t) {
          this.animations.forEach((e) => e[t]());
        }
        flatten() {
          this.runAll("flatten");
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
      class a extends o {
        then(t, e) {
          return Promise.all(this.animations).then(t).catch(e);
        }
      }
      function s(t, e) {
        return t ? t[e] || t.default || t : void 0;
      }
      let l = 2e4;
      function u(t) {
        let e = 0,
          r = t.next(e);
        for (; !r.done && e < l; ) (e += 50), (r = t.next(e));
        return e >= l ? 1 / 0 : e;
      }
      function c(t) {
        return "function" == typeof t;
      }
      function d(t, e) {
        (t.timeline = e), (t.onfinish = null);
      }
      let h = (t) => Array.isArray(t) && "number" == typeof t[0],
        f = { linearEasing: void 0 },
        p = (function (t, e) {
          let r = (0, n.X)(t);
          return () => {
            var t;
            return null !== (t = f[e]) && void 0 !== t ? t : r();
          };
        })(() => {
          try {
            document
              .createElement("div")
              .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
          } catch (t) {
            return !1;
          }
          return !0;
        }, "linearEasing");
      var m = r(81645);
      let v = (t, e, r = 10) => {
        let n = "",
          i = Math.max(Math.round(e / r), 2);
        for (let e = 0; e < i; e++) n += t((0, m.Y)(0, i - 1, e)) + ", ";
        return `linear(${n.substring(0, n.length - 2)})`;
      };
      function g(t) {
        return !!(
          ("function" == typeof t && p()) ||
          !t ||
          ("string" == typeof t && (t in b || p())) ||
          h(t) ||
          (Array.isArray(t) && t.every(g))
        );
      }
      let y = ([t, e, r, n]) => `cubic-bezier(${t}, ${e}, ${r}, ${n})`,
        b = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: y([0, 0.65, 0.55, 1]),
          circOut: y([0.55, 0, 1, 0.45]),
          backIn: y([0.31, 0.01, 0.66, -0.59]),
          backOut: y([0.33, 1.53, 0.69, 0.99]),
        },
        x = { x: !1, y: !1 };
      function w(t, e, r) {
        var n;
        if (t instanceof Element) return [t];
        if ("string" == typeof t) {
          let i = document;
          e && (i = e.current);
          let o =
            null !== (n = null == r ? void 0 : r[t]) && void 0 !== n
              ? n
              : i.querySelectorAll(t);
          return o ? Array.from(o) : [];
        }
        return Array.from(t);
      }
      function k(t, e) {
        let r = w(t),
          n = new AbortController();
        return [r, { passive: !0, ...e, signal: n.signal }, () => n.abort()];
      }
      function S(t) {
        return (e) => {
          "touch" === e.pointerType || x.x || x.y || t(e);
        };
      }
      function P(t, e, r = {}) {
        let [n, i, o] = k(t, r),
          a = S((t) => {
            let { target: r } = t,
              n = e(t);
            if ("function" != typeof n || !r) return;
            let o = S((t) => {
              n(t), r.removeEventListener("pointerleave", o);
            });
            r.addEventListener("pointerleave", o, i);
          });
        return (
          n.forEach((t) => {
            t.addEventListener("pointerenter", a, i);
          }),
          o
        );
      }
      let T = (t, e) => !!e && (t === e || T(t, e.parentElement)),
        C = (t) =>
          "mouse" === t.pointerType
            ? "number" != typeof t.button || t.button <= 0
            : !1 !== t.isPrimary,
        E = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
        R = new WeakSet();
      function A(t) {
        return (e) => {
          "Enter" === e.key && t(e);
        };
      }
      function j(t, e) {
        t.dispatchEvent(
          new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 })
        );
      }
      let _ = (t, e) => {
        let r = t.currentTarget;
        if (!r) return;
        let n = A(() => {
          if (R.has(r)) return;
          j(r, "down");
          let t = A(() => {
            j(r, "up");
          });
          r.addEventListener("keyup", t, e),
            r.addEventListener("blur", () => j(r, "cancel"), e);
        });
        r.addEventListener("keydown", n, e),
          r.addEventListener(
            "blur",
            () => r.removeEventListener("keydown", n),
            e
          );
      };
      function O(t) {
        return C(t) && !(x.x || x.y);
      }
      function M(t, e, r = {}) {
        let [n, i, o] = k(t, r),
          a = (t) => {
            let n = t.currentTarget;
            if (!O(t) || R.has(n)) return;
            R.add(n);
            let o = e(t),
              a = (t, e) => {
                window.removeEventListener("pointerup", s),
                  window.removeEventListener("pointercancel", l),
                  O(t) &&
                    R.has(n) &&
                    (R.delete(n),
                    "function" == typeof o && o(t, { success: e }));
              },
              s = (t) => {
                a(t, r.useGlobalTarget || T(n, t.target));
              },
              l = (t) => {
                a(t, !1);
              };
            window.addEventListener("pointerup", s, i),
              window.addEventListener("pointercancel", l, i);
          };
        return (
          n.forEach((t) => {
            E.has(t.tagName) ||
              -1 !== t.tabIndex ||
              null !== t.getAttribute("tabindex") ||
              (t.tabIndex = 0),
              (r.useGlobalTarget ? window : t).addEventListener(
                "pointerdown",
                a,
                i
              ),
              t.addEventListener("focus", (t) => _(t, i), i);
          }),
          o
        );
      }
      function D(t) {
        return "x" === t || "y" === t
          ? x[t]
            ? null
            : ((x[t] = !0),
              () => {
                x[t] = !1;
              })
          : x.x || x.y
          ? null
          : ((x.x = x.y = !0),
            () => {
              x.x = x.y = !1;
            });
      }
      r(29711), r(56277);
    },
    62035: function (t, e, r) {
      "use strict";
      r.d(e, {
        K: function () {
          return i;
        },
        k: function () {
          return o;
        },
      });
      var n = r(56277);
      let i = n.Z,
        o = n.Z;
    },
    90107: function (t, e, r) {
      "use strict";
      function n(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      r.d(e, {
        X: function () {
          return n;
        },
      });
    },
    56277: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return n;
        },
      });
      let n = (t) => t;
    },
    81645: function (t, e, r) {
      "use strict";
      r.d(e, {
        Y: function () {
          return n;
        },
      });
      let n = (t, e, r) => {
        let n = e - t;
        return 0 === n ? 1 : (r - t) / n;
      };
    },
    29711: function (t, e, r) {
      "use strict";
      r.d(e, {
        X: function () {
          return i;
        },
        w: function () {
          return n;
        },
      });
      let n = (t) => 1e3 * t,
        i = (t) => t / 1e3;
    },
  },
]);
