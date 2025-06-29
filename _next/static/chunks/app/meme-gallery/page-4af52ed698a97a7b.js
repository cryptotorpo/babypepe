(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [57871],
  {
    72233: function (e, r, t) {
      Promise.resolve().then(t.bind(t, 5185));
    },
    5185: function (e, r, t) {
      "use strict";
      t.r(r);
      var o = t(57437),
        a = t(2265),
        n = t(21183),
        i = t(35331),
        l = t(83378),
        s = t(76723),
        p = t(49611),
        c = t(98559),
        b = t(39295),
        d = t(49089);
      let f = [
        { src: "/memes/beach_babypepe.JPG", title: "Beach Babypepe" },
        { src: "/memes/big_babypepe.JPG", title: "Big Babypepe" },
        { src: "/memes/boysclub_babypepe.JPG", title: "Boysclub Baby" },
        { src: "/memes/crew_babypepe.JPG", title: "Babypepe & Crew" },
        { src: "/memes/godzilla_babypepe.PNG", title: "Godzilla Baby" },
        { src: "/memes/halloween_babypepe.JPG", title: "Chucky Babypepe" },
        { src: "/memes/lionkin_babypepe.JPG", title: "A King is Born" },
        { src: "/memes/mars_babypepe.JPG", title: "Martain Baby" },
        { src: "/memes/sparta_babypepe.JPG", title: "Sparta Baby" },
        { src: "/memes/starwars_babypepe.JPG", title: "Starwars Baby" },
        { src: "/memes/surf_babypepe.JPG", title: "Surfing Babypepe" },
        { src: "/memes/tech_babypepe.JPG", title: "Internet Babypepe" },
        { src: "/memes/vote_babypepe.JPG", title: "Political Babypepe" },
      ];
      r.default = () => {
        let [e] = (0, a.useState)(f),
          r = (e) => {
            let r = document.createElement("a");
            (r.href = e),
              (r.download = e.split("/").pop() || "meme.png"),
              r.click();
          };
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(b.Z, {}),
            (0, o.jsxs)(n.Box, {
              p: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minHeight: "100vh",
              bg: "#187235",
              children: [
                (0, o.jsx)(i.Heading, {
                  size: "2xl",
                  mt: "100px",
                  mb: 8,
                  color: "white",
                  fontFamily: "'PepeFont', sans-serif",
                  children: "Meme Gallery",
                }),
                (0, o.jsx)(l.Grid, {
                  templateColumns: {
                    base: "repeat(1, 1fr)",
                    sm: "repeat(2, 1fr)",
                    md: "repeat(3, 1fr)",
                    lg: "repeat(4, 1fr)",
                  },
                  gap: 6,
                  width: "100%",
                  maxWidth: "1200px",
                  children: e.map((e, t) =>
                    (0, o.jsxs)(
                      s.GridItem,
                      {
                        borderRadius: "10px",
                        overflow: "hidden",
                        boxShadow: "lg",
                        bg: "white",
                        position: "relative",
                        children: [
                          (0, o.jsx)(p.Image, {
                            src: e.src,
                            alt: e.title,
                            width: "100%",
                            height: "auto",
                            objectFit: "cover",
                          }),
                          (0, o.jsx)(n.Box, {
                            p: 2,
                            position: "absolute",
                            bottom: 0,
                            width: "100%",
                            bg: "rgba(0, 0, 0, 0.5)",
                            color: "white",
                            textAlign: "center",
                            fontFamily: "'SecondaryFont', sans-serif",
                            children: e.title,
                          }),
                          (0, o.jsx)(c.IconButton, {
                            "aria-label": "Download Meme",
                            icon: (0, o.jsx)(d.aBF, {}),
                            size: "sm",
                            backgroundColor: "#6CB947",
                            position: "absolute",
                            top: 2,
                            right: 2,
                            onClick: () => r(e.src),
                          }),
                        ],
                      },
                      t
                    )
                  ),
                }),
              ],
            }),
          ],
        });
      };
    },
    39295: function (e, r, t) {
      "use strict";
      var o = t(57437),
        a = t(2265),
        n = t(80876),
        i = t(21183),
        l = t(98314),
        s = t(49611),
        p = t(60373),
        c = t(98559),
        b = t(66602),
        d = t(51298),
        f = t(39292),
        u = t(3360),
        h = t(35012),
        m = t(30551),
        g = t(94483),
        y = t(86508),
        x = t(88089),
        w = t(7227),
        j = t(24620),
        v = t(48017),
        P = t(33459),
        C = t(27648);
      let B = (e) => {
        let { title: r, options: t } = e,
          [n, l] = (0, a.useState)(!1);
        return (0, o.jsxs)(u.Popover, {
          trigger: "hover",
          placement: "bottom-start",
          onOpen: () => l(!0),
          onClose: () => {
            l(!1);
          },
          children: [
            (0, o.jsx)(h.PopoverTrigger, {
              children: (0, o.jsxs)(i.Box, {
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                p: 2,
                fontWeight: "bold",
                borderRadius: "8px",
                bg: n ? "#A02E00" : "transparent",
                color: n ? "white" : "inherit",
                transition: "background 0.3s ease, color 0.3s ease",
                _hover: { bg: "#A02E00", color: "white" },
                children: [r, (0, o.jsx)(P.v, { ml: 2 })],
              }),
            }),
            (0, o.jsxs)(m.PopoverContent, {
              bg: "#156D30",
              borderColor: "#6CB947",
              borderRadius: "10px",
              children: [
                (0, o.jsx)(g.PopoverArrow, { bg: "#156D30" }),
                (0, o.jsx)(y.PopoverCloseButton, {}),
                (0, o.jsx)(x.PopoverBody, {
                  children: (0, o.jsx)(w.List, {
                    spacing: 2,
                    children: t.map((e, r) =>
                      (0, o.jsx)(
                        w.ListItem,
                        {
                          _hover: {
                            bg: "#6CB947",
                            color: "white",
                            borderRadius: "8px",
                          },
                          children: (0, o.jsx)(C.default, {
                            href: e.href,
                            passHref: !0,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            style: {
                              textDecoration: "none",
                              padding: "10px",
                              display: "block",
                            },
                            onClick: () => l(!1),
                            children: e.label,
                          }),
                        },
                        r
                      )
                    ),
                  }),
                }),
              ],
            }),
          ],
        });
      };
      r.Z = () => {
        let [e, r] = (0, a.useState)(!1),
          t = (0, a.useRef)(null);
        return (
          (0, n.useOutsideClick)({ ref: t, handler: () => r(!1) }),
          (0, a.useEffect)(() => {
            let e = () => r(!1);
            return (
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, []),
          (0, o.jsxs)(i.Box, {
            bg: "transparent",
            color: "white",
            px: 6,
            py: 4,
            position: "absolute",
            fontFamily: "'ThirdFont', sans-serif",
            fontSize: 12,
            top: 0,
            width: "100%",
            zIndex: 1e3,
            children: [
              (0, o.jsxs)(l.Flex, {
                align: "center",
                justify: "space-between",
                fontFamily: "'ThirdFont', sans-serif",
                children: [
                  (0, o.jsx)(C.default, {
                    href: "/",
                    passHref: !0,
                    children: (0, o.jsxs)(l.Flex, {
                      direction: "row",
                      children: [
                        (0, o.jsx)(s.Image, {
                          src: "/logos/babyPepe.JPG",
                          width: 45,
                          height: 45,
                          alt: "baby-pepe-logo",
                          borderRadius: "full",
                        }),
                        (0, o.jsx)(p.Text, {
                          marginTop: 1,
                          marginLeft: 3,
                          fontFamily: "'PepeFont', sans-serif",
                          fontSize: 30,
                          textShadow:
                            "0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black",
                          children: "Babypepe",
                        }),
                      ],
                    }),
                  }),
                  (0, o.jsx)(c.IconButton, {
                    icon: e
                      ? (0, o.jsx)(j.T, { boxSize: 8, color: "#fff" })
                      : (0, o.jsx)(v.U, { boxSize: 8, color: "#fff" }),
                    "aria-label": "Toggle Menu",
                    onClick: () => {
                      r((e) => !e);
                    },
                    display: { base: "block", md: "none" },
                    backgroundColor: "transparent",
                    _hover: { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                    _active: { backgroundColor: "rgba(255, 255, 255, 0.2)" },
                  }),
                  (0, o.jsxs)(l.Flex, {
                    display: { base: "none", md: "flex" },
                    align: "center",
                    gap: 4,
                    padding: "5px",
                    children: [
                      (0, o.jsx)(b.Link, {
                        as: C.default,
                        href: "/",
                        marginRight: "20px",
                        fontWeight: "bold",
                        _hover: { color: "#A02E00" },
                        children: "Home",
                      }),
                      (0, o.jsx)(b.Link, {
                        as: C.default,
                        href: "/flappy-baby-pepe",
                        marginRight: "20px",
                        fontWeight: "bold",
                        _hover: { color: "#A02E00" },
                        children: "Arcade",
                      }),
                      (0, o.jsx)(B, {
                        title: "Info",
                        options: [
                          { label: "About", href: "/#about" },
                          { label: "Tokenomics", href: "/#tokenomics" },
                          { label: "How to Buy", href: "/#how-to-buy" },
                          { label: "Roadmap", href: "/#roadmap" },
                          { label: "Join the Cult", href: "/#join-us" },
                          { label: "White Paper", href: "/white-paper" },
                        ],
                      }),
                      (0, o.jsx)(B, {
                        title: "Community",
                        options: [
                          {
                            label: "Twitter",
                            href: "https://x.com/babypepe_memes",
                          },
                          {
                            label: "Telegram",
                            href: "https://t.me/babypepe_oneth",
                          },
                        ],
                      }),
                      (0, o.jsx)(B, {
                        title: "Buy Now",
                        options: [
                          {
                            label: "Uniswap",
                            href: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x00000000000000000000000000000000000000",
                          }
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, o.jsx)(d.Slide, {
                direction: "left",
                in: e,
                style: { zIndex: 9 },
                children: (0, o.jsx)(i.Box, {
                  ref: t,
                  bg: "#6CB947",
                  w: "55%",
                  h: "100vh",
                  pos: "fixed",
                  fontFamily: "'ThirdFont', sans-serif",
                  border: "2px solid white",
                  fontSize: 15,
                  top: "0",
                  left: "0",
                  p: 4,
                  shadow: "lg",
                  zIndex: 2e3,
                  children: (0, o.jsxs)(f.VStack, {
                    align: "start",
                    spacing: 5,
                    padding: "10px",
                    children: [
                      (0, o.jsx)(C.default, {
                        href: "/",
                        passHref: !0,
                        children: (0, o.jsxs)(l.Flex, {
                          direction: "row",
                          children: [
                            (0, o.jsx)(s.Image, {
                              src: "/logos/babyPepe.JPG",
                              width: 70,
                              height: 70,
                              alt: "babyPepe",
                              borderRadius: "full",
                            }),
                            (0, o.jsx)(p.Text, {
                              marginTop: 2,
                              marginLeft: 5,
                              fontFamily: "'PepeFont', sans-serif",
                              fontSize: 30,
                              children: "Babypepe",
                            }),
                          ],
                        }),
                      }),
                      (0, o.jsx)(b.Link, {
                        ml: 2,
                        fontFamily: "'ThirdFont', sans-serif",
                        as: C.default,
                        href: "/",
                        marginTop: "40px",
                        fontWeight: "bold",
                        _hover: { color: "#A02E00" },
                        children: "Home",
                      }),
                      (0, o.jsx)(b.Link, {
                        ml: 2,
                        fontFamily: "'ThirdFont', sans-serif",
                        as: C.default,
                        href: "/flappy-baby-pepe",
                        fontWeight: "bold",
                        _hover: { color: "#A02E00" },
                        my: "10px",
                        children: "Arcade",
                      }),
                      (0, o.jsx)(B, {
                        title: "Info",
                        options: [
                          { label: "About", href: "/#about" },
                          { label: "Tokenomics", href: "/#tokenomics" },
                          { label: "How to Buy", href: "/#how-to-buy" },
                          { label: "Roadmap", href: "/#roadmap" },
                          { label: "Join the Cult", href: "/#join-us" },
                          { label: "White Paper", href: "/white-paper" },
                        ],
                      }),
                      (0, o.jsx)(B, {
                        title: "Community",
                        options: [
                          {
                            label: "Twitter",
                            href: "https://x.com/babypepe_memes",
                          },
                          {
                            label: "Telegram",
                            href: "https://t.me/babypepe_oneth",
                          },
                        ],
                      }),
                      (0, o.jsx)(B, {
                        title: "Buy Now",
                        options: [
                          {
                            label: "Uniswap",
                            href: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x00000000000000000000000000000000000000",
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                          {
                            label: "Buy with Fiat",
                            href: "https://flooz.xyz/0x69babepepe",
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          })
        );
      };
    },
    76723: function (e, r, t) {
      "use strict";
      t.d(r, {
        GridItem: function () {
          return p;
        },
      });
      var o = t(57437),
        a = t(80171),
        n = t(29456),
        i = t(44109),
        l = t(81284);
      function s(e) {
        return (0, a.XQ)(e, (e) =>
          "auto" === e ? "auto" : "span ".concat(e, "/span ").concat(e)
        );
      }
      let p = (0, i.forwardRef)(function (e, r) {
        let {
            area: t,
            colSpan: a,
            colStart: i,
            colEnd: p,
            rowEnd: c,
            rowSpan: b,
            rowStart: d,
            ...f
          } = e,
          u = (0, n.o)({
            gridArea: t,
            gridColumn: s(a),
            gridRow: s(b),
            gridColumnStart: i,
            gridColumnEnd: p,
            gridRowStart: d,
            gridRowEnd: c,
          });
        return (0, o.jsx)(l.chakra.div, { ref: r, __css: u, ...f });
      });
      p.displayName = "GridItem";
    },
    83378: function (e, r, t) {
      "use strict";
      t.d(r, {
        Grid: function () {
          return i;
        },
      });
      var o = t(57437),
        a = t(44109),
        n = t(81284);
      let i = (0, a.forwardRef)(function (e, r) {
        let {
          templateAreas: t,
          gap: a,
          rowGap: i,
          columnGap: l,
          column: s,
          row: p,
          autoFlow: c,
          autoRows: b,
          templateRows: d,
          autoColumns: f,
          templateColumns: u,
          ...h
        } = e;
        return (0,
        o.jsx)(n.chakra.div, { ref: r, __css: { display: "grid", gridTemplateAreas: t, gridGap: a, gridRowGap: i, gridColumnGap: l, gridAutoColumns: f, gridColumn: s, gridRow: p, gridAutoFlow: c, gridAutoRows: b, gridTemplateRows: d, gridTemplateColumns: u }, ...h });
      });
      i.displayName = "Grid";
    },
    35331: function (e, r, t) {
      "use strict";
      t.d(r, {
        Heading: function () {
          return p;
        },
      });
      var o = t(57437),
        a = t(22223),
        n = t(24377),
        i = t(44109),
        l = t(11535),
        s = t(81284);
      let p = (0, i.forwardRef)(function (e, r) {
        let t = (0, l.useStyleConfig)("Heading", e),
          { className: i, ...p } = (0, a.L)(e);
        return (0,
        o.jsx)(s.chakra.h2, { ref: r, className: (0, n.cx)("chakra-heading", e.className), ...p, __css: t });
      });
      p.displayName = "Heading";
    },
    46231: function (e, r, t) {
      "use strict";
      t.d(r, {
        w_: function () {
          return c;
        },
      });
      var o = t(2265),
        a = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        n = o.createContext && o.createContext(a),
        i = ["attr", "size", "title"];
      function l() {
        return (l = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }).apply(this, arguments);
      }
      function s(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r &&
            (o = o.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, o);
        }
        return t;
      }
      function p(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? s(Object(t), !0).forEach(function (r) {
                var o, a;
                (o = r),
                  (a = t[r]),
                  (o = (function (e) {
                    var r = (function (e, r) {
                      if ("object" != typeof e || !e) return e;
                      var t = e[Symbol.toPrimitive];
                      if (void 0 !== t) {
                        var o = t.call(e, r || "default");
                        if ("object" != typeof o) return o;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === r ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof r ? r : r + "";
                  })(o)) in e
                    ? Object.defineProperty(e, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[o] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      function c(e) {
        return (r) =>
          o.createElement(
            b,
            l({ attr: p({}, e.attr) }, r),
            (function e(r) {
              return (
                r &&
                r.map((r, t) =>
                  o.createElement(r.tag, p({ key: t }, r.attr), e(r.child))
                )
              );
            })(e.child)
          );
      }
      function b(e) {
        var r = (r) => {
          var t,
            { attr: a, size: n, title: s } = e,
            c = (function (e, r) {
              if (null == e) return {};
              var t,
                o,
                a = (function (e, r) {
                  if (null == e) return {};
                  var t = {};
                  for (var o in e)
                    if (Object.prototype.hasOwnProperty.call(e, o)) {
                      if (r.indexOf(o) >= 0) continue;
                      t[o] = e[o];
                    }
                  return t;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                for (o = 0; o < n.length; o++)
                  (t = n[o]),
                    !(r.indexOf(t) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, t) &&
                      (a[t] = e[t]);
              }
              return a;
            })(e, i),
            b = n || r.size || "1em";
          return (
            r.className && (t = r.className),
            e.className && (t = (t ? t + " " : "") + e.className),
            o.createElement(
              "svg",
              l(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                r.attr,
                a,
                c,
                {
                  className: t,
                  style: p(p({ color: e.color || r.color }, r.style), e.style),
                  height: b,
                  width: b,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              s && o.createElement("title", null, s),
              e.children
            )
          );
        };
        return void 0 !== n
          ? o.createElement(n.Consumer, null, (e) => r(e))
          : r(a);
      }
    },
  },
  function (e) {
    e.O(0, [27699, 29966, 20231, 92971, 52117, 1744], function () {
      return e((e.s = 72233));
    }),
      (_N_E = e.O());
  },
]);
