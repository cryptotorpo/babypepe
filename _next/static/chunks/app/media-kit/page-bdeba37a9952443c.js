(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [95844],
  {
    51533: function (e, r, t) {
      Promise.resolve().then(t.bind(t, 49055));
    },
    49055: function (e, r, t) {
      "use strict";
      t.r(r);
      var n = t(57437),
        o = t(39295),
        a = t(21183),
        i = t(35331),
        l = t(39292),
        s = t(83378),
        c = t(76723),
        d = t(49611),
        p = t(60373),
        f = t(26440),
        u = t(49089);
      let b = [
        {
          src: "/logos/babyPepe_logoname.PNG",
          name: "Name Logo",
          download: "/images/pepeicon.png",
        },
        {
          src: "/logos/babyPepe.JPG",
          name: "Main Icon",
          download: "/images/pepeicon.png",
        },
      ];
      r.default = () =>
        (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(o.Z, {}),
            (0, n.jsxs)(a.Box, {
              minHeight: "100vh",
              bg: "#6CB947",
              p: { base: 4, md: 10 },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              children: [
                (0, n.jsx)(i.Heading, {
                  mt: 100,
                  as: "h2",
                  size: { base: "xl", md: "2xl" },
                  textAlign: "center",
                  fontFamily: "'PepeFont', sans-serif",
                  children: "Media Kit",
                }),
                (0, n.jsx)(l.VStack, {
                  spacing: 2,
                  mb: 8,
                  children: (0, n.jsx)(i.Heading, {
                    as: "h2",
                    size: { base: "md", md: "lg" },
                    color: "#fff",
                    fontFamily: "'SecondaryFont', sans-serif",
                    children: "Download Brand Assets",
                  }),
                }),
                (0, n.jsx)(s.Grid, {
                  templateColumns: {
                    base: "repeat(2, 1fr)",
                    md: "repeat(3, 1fr)",
                  },
                  gap: 4,
                  width: { base: "90%", md: "80%" },
                  children: b.map((e, r) =>
                    (0, n.jsxs)(
                      c.GridItem,
                      {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        bg: "white",
                        borderRadius: "15px",
                        boxShadow: "lg",
                        p: 4,
                        _hover: {
                          transform: "scale(1.05)",
                          transition: "0.3s",
                        },
                        children: [
                          (0, n.jsx)(d.Image, {
                            src: e.src,
                            alt: e.name,
                            maxWidth: { base: "100px", md: "150px" },
                            mb: 3,
                          }),
                          " ",
                          (0, n.jsx)(p.Text, {
                            fontSize: { base: "sm", md: "lg" },
                            fontWeight: "bold",
                            fontFamily: "'PepeFont', sans-serif",
                            mb: 2,
                            children: e.name,
                          }),
                          (0, n.jsx)(f.Button, {
                            as: "a",
                            href: e.download,
                            download: !0,
                            leftIcon: (0, n.jsx)(u.aBF, {}),
                            colorScheme: "green",
                            size: "sm",
                            variant: "outline",
                            children: "Download",
                          }),
                        ],
                      },
                      r
                    )
                  ),
                }),
              ],
            }),
          ],
        });
    },
    39295: function (e, r, t) {
      "use strict";
      var n = t(57437),
        o = t(2265),
        a = t(80876),
        i = t(21183),
        l = t(98314),
        s = t(49611),
        c = t(60373),
        d = t(98559),
        p = t(66602),
        f = t(51298),
        u = t(39292),
        b = t(3360),
        h = t(35012),
        m = t(30551),
        g = t(94483),
        x = t(86508),
        y = t(88089),
        j = t(7227),
        w = t(24620),
        v = t(48017),
        C = t(33459),
        P = t(27648);
      let k = (e) => {
        let { title: r, options: t } = e,
          [a, l] = (0, o.useState)(!1);
        return (0, n.jsxs)(b.Popover, {
          trigger: "hover",
          placement: "bottom-start",
          onOpen: () => l(!0),
          onClose: () => {
            l(!1);
          },
          children: [
            (0, n.jsx)(h.PopoverTrigger, {
              children: (0, n.jsxs)(i.Box, {
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                p: 2,
                fontWeight: "bold",
                borderRadius: "8px",
                bg: a ? "#A02E00" : "transparent",
                color: a ? "white" : "inherit",
                transition: "background 0.3s ease, color 0.3s ease",
                _hover: { bg: "#A02E00", color: "white" },
                children: [r, (0, n.jsx)(C.v, { ml: 2 })],
              }),
            }),
            (0, n.jsxs)(m.PopoverContent, {
              bg: "#156D30",
              borderColor: "#6CB947",
              borderRadius: "10px",
              children: [
                (0, n.jsx)(g.PopoverArrow, { bg: "#156D30" }),
                (0, n.jsx)(x.PopoverCloseButton, {}),
                (0, n.jsx)(y.PopoverBody, {
                  children: (0, n.jsx)(j.List, {
                    spacing: 2,
                    children: t.map((e, r) =>
                      (0, n.jsx)(
                        j.ListItem,
                        {
                          _hover: {
                            bg: "#6CB947",
                            color: "white",
                            borderRadius: "8px",
                          },
                          children: (0, n.jsx)(P.default, {
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
        let [e, r] = (0, o.useState)(!1),
          t = (0, o.useRef)(null);
        return (
          (0, a.useOutsideClick)({ ref: t, handler: () => r(!1) }),
          (0, o.useEffect)(() => {
            let e = () => r(!1);
            return (
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, []),
          (0, n.jsxs)(i.Box, {
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
              (0, n.jsxs)(l.Flex, {
                align: "center",
                justify: "space-between",
                fontFamily: "'ThirdFont', sans-serif",
                children: [
                  (0, n.jsx)(P.default, {
                    href: "/",
                    passHref: !0,
                    children: (0, n.jsxs)(l.Flex, {
                      direction: "row",
                      children: [
                        (0, n.jsx)(s.Image, {
                          src: "/logos/babyPepe.JPG",
                          width: 45,
                          height: 45,
                          alt: "baby-pepe-logo",
                          borderRadius: "full",
                        }),
                        (0, n.jsx)(c.Text, {
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
                  (0, n.jsx)(d.IconButton, {
                    icon: e
                      ? (0, n.jsx)(w.T, { boxSize: 8, color: "#fff" })
                      : (0, n.jsx)(v.U, { boxSize: 8, color: "#fff" }),
                    "aria-label": "Toggle Menu",
                    onClick: () => {
                      r((e) => !e);
                    },
                    display: { base: "block", md: "none" },
                    backgroundColor: "transparent",
                    _hover: { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                    _active: { backgroundColor: "rgba(255, 255, 255, 0.2)" },
                  }),
                  (0, n.jsxs)(l.Flex, {
                    display: { base: "none", md: "flex" },
                    align: "center",
                    gap: 4,
                    padding: "5px",
                    children: [
                      (0, n.jsx)(p.Link, {
                        as: P.default,
                        href: "/",
                        marginRight: "20px",
                        fontWeight: "bold",
                        _hover: { color: "#A02E00" },
                        children: "Home",
                      }),
                      (0, n.jsx)(p.Link, {
                        as: P.default,
                        href: "/flappy-baby-pepe",
                        marginRight: "20px",
                        fontWeight: "bold",
                        _hover: { color: "#A02E00" },
                        children: "Arcade",
                      }),
                      (0, n.jsx)(k, {
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
                      (0, n.jsx)(k, {
                        title: "Community",
                        options: [
                          {
                            label: "Twitter",
                            href: "https://x.com/BabyPepe_OnEth",
                          },
                          {
                            label: "Telegram",
                            href: "https://t.me/babypepe_oneth",
                          },
                        ],
                      }),
                      (0, n.jsx)(k, {
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
              (0, n.jsx)(f.Slide, {
                direction: "left",
                in: e,
                style: { zIndex: 9 },
                children: (0, n.jsx)(i.Box, {
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
                  children: (0, n.jsxs)(u.VStack, {
                    align: "start",
                    spacing: 5,
                    padding: "10px",
                    children: [
                      (0, n.jsx)(P.default, {
                        href: "/",
                        passHref: !0,
                        children: (0, n.jsxs)(l.Flex, {
                          direction: "row",
                          children: [
                            (0, n.jsx)(s.Image, {
                              src: "/logos/babyPepe.JPG",
                              width: 70,
                              height: 70,
                              alt: "babyPepe",
                              borderRadius: "full",
                            }),
                            (0, n.jsx)(c.Text, {
                              marginTop: 2,
                              marginLeft: 5,
                              fontFamily: "'PepeFont', sans-serif",
                              fontSize: 30,
                              children: "Babypepe",
                            }),
                          ],
                        }),
                      }),
                      (0, n.jsx)(p.Link, {
                        ml: 2,
                        fontFamily: "'ThirdFont', sans-serif",
                        as: P.default,
                        href: "/",
                        marginTop: "40px",
                        fontWeight: "bold",
                        _hover: { color: "#A02E00" },
                        children: "Home",
                      }),
                      (0, n.jsx)(p.Link, {
                        ml: 2,
                        fontFamily: "'ThirdFont', sans-serif",
                        as: P.default,
                        href: "/flappy-baby-pepe",
                        fontWeight: "bold",
                        _hover: { color: "#A02E00" },
                        my: "10px",
                        children: "Arcade",
                      }),
                      (0, n.jsx)(k, {
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
                      (0, n.jsx)(k, {
                        title: "Community",
                        options: [
                          {
                            label: "Twitter",
                            href: "https://x.com/BabyPepe_OnEth",
                          },
                          {
                            label: "Telegram",
                            href: "https://t.me/babypepe_oneth",
                          },
                        ],
                      }),
                      (0, n.jsx)(k, {
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
          return c;
        },
      });
      var n = t(57437),
        o = t(80171),
        a = t(29456),
        i = t(44109),
        l = t(81284);
      function s(e) {
        return (0, o.XQ)(e, (e) =>
          "auto" === e ? "auto" : "span ".concat(e, "/span ").concat(e)
        );
      }
      let c = (0, i.forwardRef)(function (e, r) {
        let {
            area: t,
            colSpan: o,
            colStart: i,
            colEnd: c,
            rowEnd: d,
            rowSpan: p,
            rowStart: f,
            ...u
          } = e,
          b = (0, a.o)({
            gridArea: t,
            gridColumn: s(o),
            gridRow: s(p),
            gridColumnStart: i,
            gridColumnEnd: c,
            gridRowStart: f,
            gridRowEnd: d,
          });
        return (0, n.jsx)(l.chakra.div, { ref: r, __css: b, ...u });
      });
      c.displayName = "GridItem";
    },
    83378: function (e, r, t) {
      "use strict";
      t.d(r, {
        Grid: function () {
          return i;
        },
      });
      var n = t(57437),
        o = t(44109),
        a = t(81284);
      let i = (0, o.forwardRef)(function (e, r) {
        let {
          templateAreas: t,
          gap: o,
          rowGap: i,
          columnGap: l,
          column: s,
          row: c,
          autoFlow: d,
          autoRows: p,
          templateRows: f,
          autoColumns: u,
          templateColumns: b,
          ...h
        } = e;
        return (0,
        n.jsx)(a.chakra.div, { ref: r, __css: { display: "grid", gridTemplateAreas: t, gridGap: o, gridRowGap: i, gridColumnGap: l, gridAutoColumns: u, gridColumn: s, gridRow: c, gridAutoFlow: d, gridAutoRows: p, gridTemplateRows: f, gridTemplateColumns: b }, ...h });
      });
      i.displayName = "Grid";
    },
    35331: function (e, r, t) {
      "use strict";
      t.d(r, {
        Heading: function () {
          return c;
        },
      });
      var n = t(57437),
        o = t(22223),
        a = t(24377),
        i = t(44109),
        l = t(11535),
        s = t(81284);
      let c = (0, i.forwardRef)(function (e, r) {
        let t = (0, l.useStyleConfig)("Heading", e),
          { className: i, ...c } = (0, o.L)(e);
        return (0,
        n.jsx)(s.chakra.h2, { ref: r, className: (0, a.cx)("chakra-heading", e.className), ...c, __css: t });
      });
      c.displayName = "Heading";
    },
    46231: function (e, r, t) {
      "use strict";
      t.d(r, {
        w_: function () {
          return d;
        },
      });
      var n = t(2265),
        o = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        a = n.createContext && n.createContext(o),
        i = ["attr", "size", "title"];
      function l() {
        return (l = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      function s(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function c(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? s(Object(t), !0).forEach(function (r) {
                var n, o;
                (n = r),
                  (o = t[r]),
                  (n = (function (e) {
                    var r = (function (e, r) {
                      if ("object" != typeof e || !e) return e;
                      var t = e[Symbol.toPrimitive];
                      if (void 0 !== t) {
                        var n = t.call(e, r || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === r ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof r ? r : r + "";
                  })(n)) in e
                    ? Object.defineProperty(e, n, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[n] = o);
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
      function d(e) {
        return (r) =>
          n.createElement(
            p,
            l({ attr: c({}, e.attr) }, r),
            (function e(r) {
              return (
                r &&
                r.map((r, t) =>
                  n.createElement(r.tag, c({ key: t }, r.attr), e(r.child))
                )
              );
            })(e.child)
          );
      }
      function p(e) {
        var r = (r) => {
          var t,
            { attr: o, size: a, title: s } = e,
            d = (function (e, r) {
              if (null == e) return {};
              var t,
                n,
                o = (function (e, r) {
                  if (null == e) return {};
                  var t = {};
                  for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                      if (r.indexOf(n) >= 0) continue;
                      t[n] = e[n];
                    }
                  return t;
                })(e, r);
              if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++)
                  (t = a[n]),
                    !(r.indexOf(t) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, t) &&
                      (o[t] = e[t]);
              }
              return o;
            })(e, i),
            p = a || r.size || "1em";
          return (
            r.className && (t = r.className),
            e.className && (t = (t ? t + " " : "") + e.className),
            n.createElement(
              "svg",
              l(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                r.attr,
                o,
                d,
                {
                  className: t,
                  style: c(c({ color: e.color || r.color }, r.style), e.style),
                  height: p,
                  width: p,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              s && n.createElement("title", null, s),
              e.children
            )
          );
        };
        return void 0 !== a
          ? n.createElement(a.Consumer, null, (e) => r(e))
          : r(o);
      }
    },
  },
  function (e) {
    e.O(0, [27699, 29966, 20231, 92971, 52117, 1744], function () {
      return e((e.s = 51533));
    }),
      (_N_E = e.O());
  },
]);
