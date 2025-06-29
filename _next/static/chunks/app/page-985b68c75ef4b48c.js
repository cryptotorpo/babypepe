(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [41931],
  {
    82458: function (e, t, i) {
      Promise.resolve().then(i.t.bind(i, 42293, 23)),
        Promise.resolve().then(i.bind(i, 4700));
    },
    39295: function (e, t, i) {
      "use strict";
      var a = i(57437),
        o = i(2265),
        r = i(80876),
        n = i(21183),
        l = i(98314),
        s = i(49611),
        x = i(60373),
        d = i(98559),
        p = i(66602),
        c = i(51298),
        h = i(39292),
        f = i(3360),
        b = i(35012),
        m = i(30551),
        g = i(94483),
        u = i(86508),
        y = i(88089),
        w = i(7227),
        j = i(24620),
        k = i(48017),
        v = i(33459),
        S = i(27648);
      let C = (e) => {
        let { title: t, options: i } = e,
          [r, l] = (0, o.useState)(!1);
        return (0, a.jsxs)(f.Popover, {
          trigger: "hover",
          placement: "bottom-start",
          onOpen: () => l(!0),
          onClose: () => {
            l(!1);
          },
          children: [
            (0, a.jsx)(b.PopoverTrigger, {
              children: (0, a.jsxs)(n.Box, {
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                p: 2,
                fontWeight: "bold",
                borderRadius: "8px",
                bg: r ? "#A02E00" : "transparent",
                color: r ? "white" : "inherit",
                transition: "background 0.3s ease, color 0.3s ease",
                _hover: { bg: "#A02E00", color: "white" },
                children: [t, (0, a.jsx)(v.v, { ml: 2 })],
              }),
            }),
            (0, a.jsxs)(m.PopoverContent, {
              bg: "#156D30",
              borderColor: "#6CB947",
              borderRadius: "10px",
              children: [
                (0, a.jsx)(g.PopoverArrow, { bg: "#156D30" }),
                (0, a.jsx)(u.PopoverCloseButton, {}),
                (0, a.jsx)(y.PopoverBody, {
                  children: (0, a.jsx)(w.List, {
                    spacing: 2,
                    children: i.map((e, t) =>
                      (0, a.jsx)(
                        w.ListItem,
                        {
                          _hover: {
                            bg: "#6CB947",
                            color: "white",
                            borderRadius: "8px",
                          },
                          children: (0, a.jsx)(S.default, {
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
                        t
                      )
                    ),
                  }),
                }),
              ],
            }),
          ],
        });
      };
      t.Z = () => {
        let [e, t] = (0, o.useState)(!1),
          i = (0, o.useRef)(null);
        return (
          (0, r.useOutsideClick)({ ref: i, handler: () => t(!1) }),
          (0, o.useEffect)(() => {
            let e = () => t(!1);
            return (
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, []),
          (0, a.jsxs)(n.Box, {
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
              (0, a.jsxs)(l.Flex, {
                align: "center",
                justify: "space-between",
                fontFamily: "'ThirdFont', sans-serif",
                children: [
                  (0, a.jsx)(S.default, {
                    href: "/",
                    passHref: !0,
                    children: (0, a.jsxs)(l.Flex, {
                      direction: "row",
                      children: [
                        (0, a.jsx)(s.Image, {
                          src: "/logos/babyPepe.JPG",
                          width: 45,
                          height: 45,
                          alt: "baby-pepe-logo",
                          borderRadius: "full",
                        }),
                        (0, a.jsx)(x.Text, {
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
                  (0, a.jsx)(d.IconButton, {
                    icon: e
                      ? (0, a.jsx)(j.T, { boxSize: 8, color: "#fff" })
                      : (0, a.jsx)(k.U, { boxSize: 8, color: "#fff" }),
                    "aria-label": "Toggle Menu",
                    onClick: () => {
                      t((e) => !e);
                    },
                    display: { base: "block", md: "none" },
                    backgroundColor: "transparent",
                    _hover: { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                    _active: { backgroundColor: "rgba(255, 255, 255, 0.2)" },
                  }),
                  (0, a.jsxs)(l.Flex, {
                    display: { base: "none", md: "flex" },
                    align: "center",
                    gap: 4,
                    padding: "5px",
                    children: [
                      (0, a.jsx)(p.Link, {
                        as: S.default,
                        href: "/",
                        marginRight: "20px",
                        fontWeight: "bold",
                        _hover: { color: "#A02E00" },
                        children: "Home",
                      }),
                      (0, a.jsx)(p.Link, {
                        as: S.default,
                        href: "/flappy-baby-pepe",
                        marginRight: "20px",
                        fontWeight: "bold",
                        _hover: { color: "#A02E00" },
                        children: "Arcade",
                      }),
                      (0, a.jsx)(C, {
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
                      (0, a.jsx)(C, {
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
                      (0, a.jsx)(C, {
                        title: "Buy Now",
                        options: [
                          {
                            label: "Uniswap",
                            href: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x2df6456186f81c733f76cc561d07b05f785cbe05",
                          }
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(c.Slide, {
                direction: "left",
                in: e,
                style: { zIndex: 9 },
                children: (0, a.jsx)(n.Box, {
                  ref: i,
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
                  children: (0, a.jsxs)(h.VStack, {
                    align: "start",
                    spacing: 5,
                    padding: "10px",
                    children: [
                      (0, a.jsx)(S.default, {
                        href: "/",
                        passHref: !0,
                        children: (0, a.jsxs)(l.Flex, {
                          direction: "row",
                          children: [
                            (0, a.jsx)(s.Image, {
                              src: "/logos/babyPepe.JPG",
                              width: 70,
                              height: 70,
                              alt: "babyPepe",
                              borderRadius: "full",
                            }),
                            (0, a.jsx)(x.Text, {
                              marginTop: 2,
                              marginLeft: 5,
                              fontFamily: "'PepeFont', sans-serif",
                              fontSize: 30,
                              children: "Babypepe",
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)(p.Link, {
                        ml: 2,
                        fontFamily: "'ThirdFont', sans-serif",
                        as: S.default,
                        href: "/",
                        marginTop: "40px",
                        fontWeight: "bold",
                        _hover: { color: "#A02E00" },
                        children: "Home",
                      }),
                      (0, a.jsx)(p.Link, {
                        ml: 2,
                        fontFamily: "'ThirdFont', sans-serif",
                        as: S.default,
                        href: "/flappy-baby-pepe",
                        fontWeight: "bold",
                        _hover: { color: "#A02E00" },
                        my: "10px",
                        children: "Arcade",
                      }),
                      (0, a.jsx)(C, {
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
                      (0, a.jsx)(C, {
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
                      (0, a.jsx)(C, {
                        title: "Buy Now",
                        options: [
                          {
                            label: "Uniswap",
                            href: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x2df6456186f81c733f76cc561d07b05f785cbe05",
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
    4700: function (e, t, i) {
      "use strict";
      i.d(t, {
        default: function () {
          return K;
        },
      });
      var a = i(57437),
        o = i(98314),
        r = i(98559),
        n = i(39295),
        l = i(2265),
        s = i(92208),
        x = i(21183),
        d = i(7227),
        p = i(60373),
        c = i(47107),
        h = i(49089),
        f = i(33459);
      let b = [
        { id: 1, title: "The Original Baby", src: "/music/1.mp3" },
        { id: 2, title: "Babypepe & Friends", src: "/music/2.mp3" },
        { id: 6, title: "The Pepe DNA", src: "/music/6.mp3" },
        { id: 3, title: "A Brand New Vibe", src: "/music/3.mp3" },
        { id: 4, title: "Crypto Craze", src: "/music/4.mp3" },
        { id: 5, title: "There's a New King", src: "/music/5.mp3" },
      ];
      var m = () => {
          let [e, t] = (0, l.useState)(!1),
            [i, n] = (0, l.useState)(0),
            [m, g] = (0, l.useState)(50),
            [u, y] = (0, l.useState)(!1),
            [w, j] = (0, l.useState)(!1),
            [k, v] = (0, l.useState)(0),
            [S, C] = (0, l.useState)(0),
            B = (0, l.useRef)(null),
            [F] = (0, s.useMediaQuery)("(max-width: 768px)");
          (0, l.useEffect)(() => {
            B.current && (B.current.volume = m / 100);
          }, [m]),
            (0, l.useEffect)(() => {
              j(!F);
            }, [F]),
            (0, l.useEffect)(() => {
              let t = B.current,
                i = () => v((null == t ? void 0 : t.currentTime) || 0),
                a = () => C((null == t ? void 0 : t.duration) || 0);
              return (
                t &&
                  (t.addEventListener("timeupdate", i),
                  t.addEventListener("loadedmetadata", a),
                  t.load(),
                  e && t.play()),
                () => {
                  t &&
                    (t.removeEventListener("timeupdate", i),
                    t.removeEventListener("loadedmetadata", a));
                }
              );
            }, [i, e]);
          let z = () => {
              n((e) => (e + 1) % b.length);
            },
            P = (e) => {
              n(e);
            },
            I = (e) => {
              let t = Math.floor(e % 60);
              return ""
                .concat(Math.floor(e / 60), ":")
                .concat(t < 10 ? "0" : "")
                .concat(t);
            };
          return (0, a.jsxs)(x.Box, {
            position: "fixed",
            bottom: 1,
            left: 1,
            p: 2,
            bgGradient: "linear(to-b, #C0C0C0 30%, #A6A6A6 100%)",
            color: "white",
            borderRadius: "15px",
            boxShadow: "2xl",
            maxWidth: w ? "420px" : "60px",
            transition: "max-width 0.3s",
            zIndex: 1e3,
            border: "2px solid white",
            children: [
              (0, a.jsxs)(o.Flex, {
                justifyContent: "space-between",
                alignItems: "center",
                onClick: () => j((e) => !e),
                children: [
                  (0, a.jsx)(r.IconButton, {
                    icon: (0, a.jsx)(h.HcQ, { size: 20, color: "#fff" }),
                    "aria-label": "Expand Player",
                    variant: "ghost",
                    color: "white",
                  }),
                  w && (0, a.jsx)(f.v, { boxSize: 10, zIndex: -6 }),
                ],
              }),
              (0, a.jsx)("audio", {
                ref: B,
                src: b[i].src,
                onEnded: z,
                preload: "auto",
              }),
              w &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(d.List, {
                      mt: 3,
                      spacing: 2,
                      mx: 3,
                      maxHeight: "120px",
                      overflowY: "auto",
                      backgroundColor: "#fff",
                      border: "2px solid white",
                      borderRadius: "10px",
                      padding: "5px",
                      children: b.map((e, t) =>
                        (0, a.jsx)(
                          d.ListItem,
                          {
                            bg: t === i ? "#6CB947" : "#fff",
                            p: 1,
                            borderRadius: "md",
                            cursor: "pointer",
                            onClick: () => P(t),
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            fontFamily: "'ThirdFont', sans-serif",
                            fontSize: "10px",
                            fontWeight: "bold",
                            _hover: { transform: "scale(1.05)" },
                            color: t === i ? "#fff" : "#6CB947",
                            children: e.title,
                          },
                          e.id
                        )
                      ),
                    }),
                    (0, a.jsxs)(o.Flex, {
                      mt: 3,
                      alignItems: "center",
                      children: [
                        (0, a.jsx)(p.Text, {
                          fontSize: "sm",
                          color: "white",
                          mx: 2,
                          children: I(k),
                        }),
                        (0, a.jsxs)(c.Slider, {
                          value: k,
                          min: 0,
                          max: S,
                          onChange: (e) => {
                            let t = B.current;
                            t && ((t.currentTime = e), v(e));
                          },
                          width: "70%",
                          children: [
                            (0, a.jsx)(c.SliderTrack, {
                              bg: "gray.600",
                              children: (0, a.jsx)(c.SliderFilledTrack, {
                                bg: "#6CB947",
                              }),
                            }),
                            (0, a.jsx)(c.SliderThumb, {}),
                          ],
                        }),
                        (0, a.jsx)(p.Text, {
                          fontSize: "sm",
                          color: "white",
                          mx: 2,
                          children: I(S),
                        }),
                      ],
                    }),
                    (0, a.jsxs)(o.Flex, {
                      mt: 2,
                      justifyContent: "space-around",
                      children: [
                        (0, a.jsx)(r.IconButton, {
                          borderRadius: 20,
                          padding: 3,
                          border: "2px solid #6CB947",
                          _hover: {
                            transform: "scale(1.15)",
                            border: "2px solid #187235",
                          },
                          bg: "#fff",
                          mt: 3,
                          icon: (0, a.jsx)(h.xPU, { color: "6CB947" }),
                          "aria-label": "Previous Song",
                          onClick: () => {
                            n((e) => (0 === e ? b.length - 1 : e - 1));
                          },
                        }),
                        (0, a.jsx)(r.IconButton, {
                          icon: e
                            ? (0, a.jsx)(h.Wh, { size: 30, color: "6CB947" })
                            : (0, a.jsx)(h.gmG, { size: 30, color: "6CB947" }),
                          "aria-label": "Play/Pause",
                          onClick: () => {
                            let i = B.current;
                            i && (e ? i.pause() : i.play(), t(!e));
                          },
                          bg: "#fff",
                          borderRadius: "50%",
                          boxSize: "60px",
                          color: "#6CB947",
                          padding: 4,
                          border: "2px solid #6CB947",
                          _hover: {
                            transform: "scale(1.15)",
                            border: "2px solid #187235",
                          },
                        }),
                        (0, a.jsx)(r.IconButton, {
                          borderRadius: 20,
                          padding: 3,
                          bg: "#fff",
                          _hover: {
                            transform: "scale(1.15)",
                            border: "2px solid #187235",
                          },
                          border: "2px solid #6CB947",
                          mt: 3,
                          icon: (0, a.jsx)(h.C$r, { color: "6CB947" }),
                          "aria-label": "Next Song",
                          onClick: z,
                        }),
                      ],
                    }),
                    (0, a.jsxs)(o.Flex, {
                      mt: 3,
                      alignItems: "center",
                      ml: "15px",
                      children: [
                        (0, a.jsx)(r.IconButton, {
                          icon: u
                            ? (0, a.jsx)(h.xZH, { color: "#fff" })
                            : (0, a.jsx)(h.rxG, { color: "#fff" }),
                          "aria-label": "Mute/Unmute",
                          onClick: () => {
                            let e = B.current;
                            e && (e.muted = !u), y(!u);
                          },
                          bg: "#transparent",
                        }),
                        (0, a.jsxs)(c.Slider, {
                          value: m,
                          onChange: (e) => g(e),
                          max: 100,
                          colorScheme: "green",
                          ml: "10px",
                          width: "60%",
                          children: [
                            (0, a.jsx)(c.SliderTrack, {
                              bg: "gray.600",
                              children: (0, a.jsx)(c.SliderFilledTrack, {
                                bg: "#6CB947",
                              }),
                            }),
                            (0, a.jsx)(c.SliderThumb, {}),
                          ],
                        }),
                      ],
                    }),
                    w &&
                      (0, a.jsx)(p.Text, {
                        fontWeight: "bold",
                        textAlign: "center",
                        flex: 1,
                        mx: 15,
                        fontSize: "25px",
                        children: "Walkbaby Player",
                      }),
                  ],
                }),
            ],
          });
        },
        g = i(40006),
        u = i(66602),
        y = i(49611),
        w = i(61273),
        j = (e) => {
          let { size: t = 40 } = e;
          return (0, a.jsx)(o.Flex, {
            justify: "space-between",
            align: "center",
            flexDirection: { base: "column", md: "row" },
            padding: "5px",
            children: (0, a.jsxs)(g.HStack, {
              spacing: 4,
              mt: { base: 2, md: 0 },
              children: [
                (0, a.jsx)(u.Link, {
                  href: "https://t.me/babypepe_oneth",
                  isExternal: !0,
                  children: (0, a.jsx)(r.IconButton, {
                    icon: (0, a.jsx)(h.Ww5, { size: t }),
                    "aria-label": "Telegram",
                    variant: "ghost",
                    color: "white",
                    size: "lg",
                  }),
                }),
                (0, a.jsx)(u.Link, {
                  href: "https://x.com/BabyPepe_OnEth",
                  isExternal: !0,
                  children: (0, a.jsx)(r.IconButton, {
                    icon: (0, a.jsx)(w.LCd, { size: t }),
                    "aria-label": "Twitter",
                    variant: "ghost",
                    color: "white",
                    size: "lg",
                  }),
                }),
                (0, a.jsx)(u.Link, {
                  href: "https://dexscreener.com/ethereum/0x2df6456186f81c733f76cc561d07b05f785cbe05",
                  isExternal: !0,
                  children: (0, a.jsx)(r.IconButton, {
                    "aria-label": "DexScreener",
                    icon: (0, a.jsx)(y.Image, {
                      src: "/logos/dexsxcreener.png",
                      alt: "DexScreener for Babypepe",
                      width: "".concat(t + 5, "px"),
                      height: "".concat(t + 5, "px"),
                      filter: "invert(1)",
                    }),
                    variant: "ghost",
                    size: "lg",
                  }),
                }),
                (0, a.jsxs)(u.Link, {
                  href: "https://www.dextools.io/app/en/ether/pair-explorer/0x8d7976035235913d4694705455ef7ce1e16a9dc3?t=1751233418658",
                  isExternal: !0,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: [
                    "          ",
                    (0, a.jsx)(r.IconButton, {
                      "aria-label": "DexTools",
                      icon: (0, a.jsx)(y.Image, {
                        src: "/logos/dextools1.png",
                        alt: "DexTools for Babypepe",
                        boxSize: "".concat(t - 1, "px"),
                        color: "white",
                      }),
                      variant: "ghost",
                      size: "lg",
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        k = () =>
          (0, a.jsx)(x.Box, {
            as: "footer",
            bg: "#156D30",
            color: "white",
            py: 4,
            px: { base: 4, md: 8 },
            width: "100%",
            mt: "auto",
            children: (0, a.jsxs)(o.Flex, {
              justify: "space-between",
              align: "center",
              flexDirection: { base: "column", md: "row" },
              children: [
                (0, a.jsx)(j, {}),
                (0, a.jsx)(p.Text, {
                  fontSize: { base: "2.8vw", md: "1.2vw" },
                  mx: 5,
                  mt: 10,
                  textAlign: { base: "center", md: "center" },
                  style: { fontFamily: "'SecondaryFont', sans-serif" },
                  children:
                    "$BABYPEPE has no formal association with Matt Furie or his creation Pepe the Frog. This token is simply paying homage to a meme we all love and recognize. $BABYPEPE is a meme coin with no intrinsic value or expectation of financial return. The coin is run 100% by the community and is for entertainment purposes only.        ",
                }),
                (0, a.jsx)(p.Text, {
                  fontSize: "xl",
                  mt: 8,
                  textAlign: { base: "center", md: "left" },
                  minWidth: "200px",
                  children:
                    "\xa9 2025 Babypepe Community. All rights reserved.",
                }),
              ],
            }),
          }),
        v = i(97833),
        S = i(35331),
        C = i(39292),
        B = i(19653),
        F = i(3462),
        z = i(28819);
      let P = { visible: { transition: { staggerChildren: 0.2 } }, hidden: {} },
        I = {
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
          },
          hidden: { opacity: 0, y: 50 },
        };
      var E = () => {
          let e = (0, B._)(),
            { ref: t, inView: i } = (0, z.YD)({
              triggerOnce: !0,
              threshold: 0.3,
            });
          return (
            (0, l.useEffect)(() => {
              i ? e.start("visible") : e.start("hidden");
            }, [i, e]),
            (0, a.jsxs)(x.Box, {
              id: "tokenomics",
              position: "relative",
              width: "100vw",
              minHeight: "100vh",
              backgroundImage: "url('/backgrounds/pepe_surfing.JPG')",
              backgroundSize: "cover",
              backgroundPosition: "calc(50% + 35%) center",
              backgroundRepeat: "no-repeat",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              children: [
                (0, a.jsx)(x.Box, {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  bg: "rgba(0, 0, 0, 0.2)",
                  zIndex: 1,
                }),
                (0, a.jsx)(S.Heading, {
                  as: "h2",
                  fontSize: "5xl",
                  color: "#fff",
                  textAlign: "center",
                  fontFamily: "'PepeFont', sans-serif",
                  zIndex: 2,
                  textShadow:
                    "0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black",
                  children: "Babypepe Tokenomics",
                }),
                (0, a.jsx)(p.Text, {
                  mt: 4,
                  fontSize: { base: "2xl", md: "3xl" },
                  fontWeight: "bold",
                  color: "#fff",
                  textAlign: "center",
                  fontFamily: "'SecondaryFont', sans-serif",
                  zIndex: 2,
                  textShadow:
                    "0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black",
                  children: "No tax? Feels good man.",
                }),
                (0, a.jsx)(F.E.div, {
                  ref: t,
                  variants: P,
                  initial: "hidden",
                  animate: e,
                  style: { width: "90%", maxWidth: "800px", zIndex: 3 },
                  children: (0, a.jsx)(C.VStack, {
                    spacing: 5,
                    alignItems: "center",
                    mt: 8,
                    children: [
                      "Total Supply 1B",
                      "0% Sell Tax",
                      "0% Buy Tax",
                      "Liquidity pool burnt",
                      "Contract Renounced",                      
                    ].map((e, t) =>
                      (0, a.jsx)(
                        F.E.div,
                        {
                          variants: I,
                          animate: { y: [0, -10, 0] },
                          transition: {
                            duration: 3,
                            repeat: 1 / 0,
                            repeatType: "loop",
                          },
                          style: {
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                          },
                          children: (0, a.jsxs)(o.Flex, {
                            bg: "rgba(0, 0, 0, 0.5)",
                            p: 4,
                            borderRadius: "15px",
                            border: "2px solid white",
                            align: "center",
                            justify: "flex-start",
                            textAlign: "center",
                            color: "#fff",
                            fontSize: { base: "m", md: "xl" },
                            fontFamily: "'SecondaryFont', sans-serif",
                            w: "75%",
                            maxW: "450px",
                            textShadow:
                              "0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black",
                            children: [
                              (0, a.jsx)(h.l_A, {
                                style: { marginRight: "12px" },
                              }),
                              e,
                            ],
                          }),
                        },
                        t
                      )
                    ),
                  }),
                }),
              ],
            })
          );
        },
        T = i(63433),
        _ = () => {
          let [e, t] = (0, l.useState)(!1);
          (0, l.useEffect)(() => {
            let e = document.getElementById("uniswap-iframe");
            e && (e.tabIndex = -1);
          }, []);
          let i = (e) => {
            let { title: t, description: i } = e,
              o = (0, l.useRef)(null),
              r = (0, T.Y)(o, { once: !0 });
            return (0, a.jsx)(F.E.div, {
              ref: o,
              initial: { opacity: 0, y: 50 },
              animate: r ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.8 },
              style: {
                width: "90%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                border: "2px solid white",
                borderRadius: "15px",
                padding: "18px",
                marginBottom: "20px",
                zIndex: "1",
                textAlign: "center",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                position: "relative",
                overflow: "visible",
              },
              children: (0, a.jsxs)(x.Box, {
                position: "relative",
                role: "group",
                children: [
                  (0, a.jsx)(S.Heading, {
                    as: "h3",
                    fontSize: "xl",
                    color: "#fff",
                    fontFamily: "'SecondaryFont', sans-serif",
                    textShadow:
                      "0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black",
                    _hover: { cursor: "pointer" },
                    children: t,
                  }),
                  (0, a.jsx)(x.Box, {
                    position: "absolute",
                    top: "-10%",
                    right: "-60%",
                    transform: "translateX(-50%)",
                    bg: "rgba(0, 0, 0, 0.8)",
                    color: "#fff",
                    fontSize: "m",
                    fontFamily: "'SecondaryFont', sans-serif",
                    borderRadius: "10px",
                    padding: "10px",
                    opacity: 0,
                    visibility: "hidden",
                    whiteSpace: "normal",
                    textAlign: "center",
                    zIndex: 1e4,
                    transition: "opacity 0.3s, visibility 0.3s",
                    _groupHover: { opacity: 1, visibility: "visible" },
                    width: "200px",
                    minWidth: "150px",
                    maxWidth: "300px",
                    children: i,
                  }),
                ],
              }),
            });
          };
          return (0, a.jsxs)(x.Box, {
            id: "how-to-buy",
            width: "100%",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
            bgImage: "/backgrounds/pepe_pyramids.JPG",
            backgroundPosition: "calc(50% + 40%) center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            children: [
              (0, a.jsx)(o.Flex, {
                mt: "10px",
                width: "70%",
                maxW: "500px",
                justifyContent: "center",
                alignItems: "center",
                children: (0, a.jsx)(
                  (e) => {
                    let { children: t } = e,
                      i = (0, l.useRef)(null),
                      o = (0, T.Y)(i, { once: !0 });
                    return (0, a.jsx)(F.E.div, {
                      ref: i,
                      initial: { opacity: 0, y: 50 },
                      animate: o ? { opacity: 1, y: 0 } : {},
                      transition: { duration: 0.8 },
                      style: {
                        width: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        border: "2px solid white",
                        borderRadius: "15px",
                        padding: "16px",
                        margin: "10px 0",
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                        overflow: "hidden",
                      },
                      children: t,
                    });
                  },
                  {
                    children: (0, a.jsx)(S.Heading, {
                      as: "h2",
                      fontSize: "4xl",
                      color: "#fff",
                      textAlign: "center",
                      fontFamily: "'PepeFont', sans-serif",
                      zIndex: 2,
                      textShadow:
                        "0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black",
                      children: "How to Buy Babypepe",
                    }),
                  }
                ),
              }),
              (0, a.jsxs)(o.Flex, {
                width: "90%",
                maxWidth: "600px",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: 6,
                mt: 6,
                children: [
                  (0, a.jsx)(o.Flex, {
                    flex: { base: "1 1 100%", md: "0.6" },
                    maxWidth: { base: "100%", md: "65%" },
                    justifyContent: "center",
                    alignItems: "center",
                    mb: "3px",
                    children: e
                      ? (0, a.jsx)("iframe", {
                          id: "uniswap-iframe",
                          src: "https://app.uniswap.org/#/swap?outputCurrency=0x2df6456186f81c733f76cc561d07b05f785cbe05&chain=mainnet",
                          width: "300px",
                          height: "510px",
                          style: {
                            border: "0",
                            borderRadius: "10px",
                            overflow: "hidden",
                          },
                          title: "Uniswap Swap",
                        })
                      : (0, a.jsx)(y.Image, {
                          src: "/images/uniswapOpen.png",
                          alt: "Swap Babypepe",
                          width: "300px",
                          height: "510px",
                          borderRadius: "10px",
                          cursor: "pointer",
                          opacity: 0.8,
                          onClick: () => {
                            t(!0);
                          },
                          transition: "transform 0.3s",
                          _hover: { transform: "scale(1.05)" },
                          style: { border: "0", borderRadius: "10px" },
                        }),
                  }),
                  (0, a.jsxs)(o.Flex, {
                    flexDirection: "column",
                    flex: { base: "1 1 100%", md: "0.4" },
                    maxWidth: { base: "100%", md: "35%" },
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    ml: { base: "10%", md: "-10%" },
                    mr: "10px",
                    mt: "20px",
                    mb: "15px",
                    children: [
                      (0, a.jsx)(i, {
                        title: "Create a Wallet",
                        description: "Download a crypto wallet like MetaMask.",
                      }),
                      (0, a.jsx)(i, {
                        title: "Get some ETH",
                        description: "Buy ETH from an exchange.",
                      }),
                      (0, a.jsx)(i, {
                        title: "Click Uniswap Embed",
                        description:
                          "Use the Uniswap embed here and connect your wallet",
                      }),
                      (0, a.jsx)(i, {
                        title: "Swap ETH for $BABYPEPE",
                        description: "Click the swap button on Uniswap",
                      }),
                      (0, a.jsx)(i, {
                        title: "Chill and Vibe",
                        description: "The future is bright",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        A = i(33145),
        R = () => {
          let e = (0, l.useMemo)(
              () => [
                {
                  href: "https://www.dextools.io/app/en/ether/pair-explorer/0x8d7976035235913d4694705455ef7ce1e16a9dc3?t=1751233418658",
                  label: "DexTools",
                  logo: "/logos/dextools.svg",
                },
                {
                  href: "https://dexscreener.com/ethereum/0x2df6456186f81c733f76cc561d07b05f785cbe05",
                  label: "DexScreener",
                  logo: "/logos/dexsxcreener.png",
                },
                {
                  href: "https://t.me/babypepe_oneth",
                  label: "Telegram",
                  logo: (0, a.jsx)(h.Ww5, {
                    size: 40,
                    style: { color: "#6CB947" },
                  }),
                },
                {
                  href: "https://x.com/BabyPepe_OnEth",
                  label: "X",
                  logo: (0, a.jsx)(w.LCd, {
                    size: 40,
                    style: { color: "#022B0F" },
                  }),
                }
              ],
              []
            ),
            t = {
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" },
              },
            };
          return (0, a.jsx)(x.Box, {
            id: "bubble-chart",
            margin: "0 auto",
            width: "90vw",
            maxWidth: "500px",
            zIndex: 43,
            padding: 2,
            borderRadius: "15px",
            children: (0, a.jsx)(o.Flex, {
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              gap: 2,
              position: "relative",
              left: "-5%",
              children: e.map((e, i) =>
                (0, a.jsxs)(
                  F.E.div,
                  {
                    variants: t,
                    initial: "hidden",
                    animate: "visible",
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "45%",
                      maxWidth: "100px",
                      margin: "2px 2px",
                    },
                    children: [
                      (0, a.jsx)(x.Box, {
                        as: "a",
                        href: e.href,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        bg: "white",
                        boxShadow: "5px 10px 11px rgba(0, 0, 0, 0.1)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        border: "2px solid white",
                        transition: "transform 0.3s",
                        _hover: { transform: "scale(1.15)" },
                        children:
                          "string" == typeof e.logo
                            ? (0, a.jsx)(A.default, {
                                src: e.logo,
                                alt: e.label,
                                width: 80,
                                height: 80,
                                loading: "lazy",
                                style: {
                                  pointerEvents: "none",
                                  objectFit: "contain",
                                },
                              })
                            : (0, a.jsx)(x.Box, {
                                as: "span",
                                fontSize: "24px",
                                padding: 2,
                                children: e.logo,
                              }),
                      }),
                      (0, a.jsx)(x.Box, {
                        as: "span",
                        fontSize: "14px",
                        padding: 1,
                        color: "#fff",
                        textAlign: "center",
                        fontFamily: "'SecondaryFont', sans-serif",
                        textShadow:
                          "0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black",
                        children: e.label,
                      }),
                    ],
                  },
                  i
                )
              ),
            }),
          });
        };
      let W = (e) => {
        let { children: t } = e,
          i = (0, l.useRef)(null),
          o = (0, T.Y)(i, { once: !0 });
        return (0, a.jsx)(F.E.div, {
          ref: i,
          initial: { opacity: 0, y: 50 },
          animate: o ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
          transition: { duration: 0.8 },
          style: {
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            border: "2px solid white",
            borderRadius: "15px",
            padding: "12px",
            margin: "4px 0",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
            overflow: "hidden",
          },
          children: t,
        });
      };
      var D = () =>
          (0, a.jsxs)(x.Box, {
            id: "about",
            position: "relative",
            width: "100%",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: 4,
            textAlign: "center",
            backgroundImage: "url('/backgrounds/pepe_skiing.JPG')",
            backgroundSize: "cover",
            backgroundPosition: "calc(50% + 20%) center",
            backgroundRepeat: "no-repeat",
            overflow: "hidden",
            children: [
              (0, a.jsx)(x.Box, {
                width: "70%",
                maxWidth: "500px",
                mb: 4,
                children: (0, a.jsx)(W, {
                  children: (0, a.jsx)(S.Heading, {
                    as: "h2",
                    fontSize: "4xl",
                    color: "#fff",
                    fontFamily: "'PepeFont', sans-serif",
                    textShadow:
                      "0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black",
                    children: "About Babypepe",
                  }),
                }),
              }),
              (0, a.jsx)(x.Box, {
                width: "70%",
                maxWidth: "500px",
                mb: 4,
                children: (0, a.jsxs)(W, {
                  children: [
                    (0, a.jsx)(S.Heading, {
                      as: "h2",
                      fontSize: "3xl",
                      color: "#fff",
                      fontFamily: "'PepeFont', sans-serif",
                      textShadow:
                        "0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black",
                      children: "Contract Address",
                    }),
                    (0, a.jsx)(S.Heading, {
                      as: "h2",
                      fontSize: { base: "16px", md: "1.6vw" },
                      color: "#fff",
                      fontFamily: "'SecondaryFont', sans-serif",
                      textShadow:
                        "0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black",
                      children: "0x2df6456186f81c733f76cc561d07b05f785cbe05",
                    }),
                  ],
                }),
              }),
              (0, a.jsxs)(o.Flex, {
                width: "100%",
                maxWidth: "1200px",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 4,
                children: [
                  (0, a.jsx)(x.Box, {
                    flex: { base: "1 1 100%", md: "1" },
                    maxWidth: { base: "100%", md: "48%" },
                    children: (0, a.jsxs)(W, {
                      children: [
                        (0, a.jsx)(S.Heading, {
                          as: "h2",
                          fontSize: "3xl",
                          color: "#fff",
                          fontFamily: "'PepeFont', sans-serif",
                          textShadow:
                            "0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black",
                          children: "Make room for Babypepe!",
                        }),
                        (0, a.jsx)(p.Text, {
                          fontSize: { base: "2.5vh", md: "2vh" },
                          color: "#fff",
                          fontFamily: "'SecondaryFont', sans-serif",
                          textAlign: "center",
                          textShadow:
                            "0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black",
                          children:
                            "Babypepe, heir to the throne and son of  Pepe, represents the dawn of a new generation in the frog kingdom, and a passing of the baton, from one generation to the next.  Signifying the rite of passage bestowed upon a son by his father, Babypepe strives to build and improve upon his dad's legacy. Pepe, the king of memes and a viral sensation found all over the internet, has taken the world by storm, and captivated the hearts of many.  If you missed Pepe's parabolic run, Babypepe is an opportunity to be a part of something bigger than yourself, and have a hand in building a community that will surely go down in memecoin history. With Pepe being found in every corner of the globe, it's only a matter of time before Babypepe makes his mark on the world!",
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)(x.Box, {
                    flex: { base: "1 1 100%", md: "1" },
                    maxWidth: { base: "100%", md: "48%" },
                    children: (0, a.jsxs)(W, {
                      children: [
                        (0, a.jsx)(S.Heading, {
                          as: "h2",
                          fontSize: "3xl",
                          color: "#fff",
                          fontFamily: "'PepeFont', sans-serif",
                          textShadow:
                            "0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black",
                          children: "Like father, Like son",
                        }),
                        (0, a.jsx)(p.Text, {
                          fontSize: { base: "2.5vh", md: "2vh" },
                          color: "#fff",
                          fontFamily: "'SecondaryFont', sans-serif",
                          textAlign: "center",
                          textShadow:
                            "0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black",
                          children:
                            "The Babypepe narrative is simple. Son of Pepe, Babypepe has faced no shortage of obstacles along the way. A community of diamond-handed, cult-like chads has defeated two cabal launches, dethroned a serial scammer crypto influencer, and built an organic following of dedicated individuals who are committed to the growth and success of this adorable little frog. Come stop by our Telegram, check out our Twitter, and see for yourself! With a foundation of integrity, honesty, kindness, and compassion, everyone is valued and has a seat at the table in our community.",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, a.jsx)(x.Box, {
                width: "100%",
                maxWidth: "500px",
                mt: 4,
                children: (0, a.jsxs)(W, {
                  children: [
                    (0, a.jsx)(S.Heading, {
                      as: "h2",
                      fontSize: "3xl",
                      color: "#fff",
                      fontFamily: "'PepeFont', sans-serif",
                      textShadow:
                        "0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black",
                      children: "Babypepe's Useful Links",
                    }),
                    (0, a.jsx)(R, {}),
                  ],
                }),
              }),
            ],
          }),
        H = i(29),
        L = i.n(H),
        G = i(72940),
        M = () => {
          let [e, t] = (0, l.useState)(!0),
            [i, r] = (0, l.useState)(""),
            [n, s] = (0, l.useState)(""),
            [d, c] = (0, l.useState)(""),
            [h, f] = (0, l.useState)("");
          return (
            (0, l.useEffect)(() => {
              (async () => {
                try {
                  let e = await fetch(
                      "https://api.coingecko.com/api/v3/simple/price?ids=baby-pepe-3&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true"
                    ),
                    t = await fetch(
                      "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true"
                    ),
                    i = await t.json(),
                    a = (await e.json())["baby-pepe-3"],
                    o = i.ethereum;
                  f(o.usd), r(a.usd), s(a.usd_24h_vol);
                  let n = 42069e7 * parseFloat(a.usd);
                  c(n.toFixed(2));
                } catch (e) {
                  console.error("Error fetching market data:", e);
                } finally {
                  t(!1);
                }
              })();
            }, []),
            (0, a.jsxs)(x.Box, {
              p: 5,
              position: "relative",
              boxShadow: "lg",
              height: 50,
              backgroundColor: "rgba(50, 50, 50, 0.6)",
              width: "100%",
              display: "flex",
              alignItems: "center",
              border: "1px solid #fff",
              overflow: "hidden",
              mb: 10,
              mt: 5,
              borderRadius: 15,
              children: [
                e
                  ? (0, a.jsxs)(o.Flex, {
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      children: [
                        (0, a.jsx)(G.Spinner, { size: "lg", color: "white" }),
                        " ",
                      ],
                    })
                  : (0, a.jsx)(o.Flex, {
                      className: "ticker",
                      whiteSpace: "nowrap",
                      animation: "scroll 25s linear infinite",
                      fontFamily: "'SecondaryFont', sans-serif",
                      children: [void 0, void 0, void 0].map((e, t) =>
                        (0, a.jsxs)(
                          l.Fragment,
                          {
                            children: [
                              (0, a.jsxs)(o.Flex, {
                                direction: "row",
                                alignItems: "center",
                                mx: 5,
                                children: [
                                  (0, a.jsx)(y.Image, {
                                    src: "/logos/fbe8b5cf8780a6a5f6ff3678e60ed349.avif",
                                    height: 5,
                                    width: 5,
                                    alt: "Market Cap Babypepe",
                                  }),
                                  (0, a.jsxs)(p.Text, {
                                    fontSize: "2xl",
                                    fontWeight: "bold",
                                    color: "white",
                                    mx: 2,
                                    textShadow:
                                      "0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black",
                                    children: [
                                      "Market Cap: $",
                                      parseFloat(d).toLocaleString(void 0, {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsxs)(o.Flex, {
                                direction: "row",
                                alignItems: "center",
                                mx: 5,
                                children: [
                                  (0, a.jsx)(y.Image, {
                                    src: "/logos/babyPepe.JPG",
                                    width: 5,
                                    height: 5,
                                    alt: "Babypepe logo",
                                    borderRadius: "full",
                                  }),
                                  (0, a.jsxs)(p.Text, {
                                    fontSize: "2xl",
                                    fontWeight: "bold",
                                    color: "white",
                                    mx: 2,
                                    textShadow:
                                      "0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black",
                                    children: [
                                      "Token Price: $",
                                      parseFloat(i).toLocaleString(void 0, {
                                        minimumFractionDigits: 8,
                                        maximumFractionDigits: 8,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsxs)(o.Flex, {
                                direction: "row",
                                alignItems: "center",
                                mx: 5,
                                children: [
                                  (0, a.jsx)(y.Image, {
                                    src: "/logos/babyPepe.JPG",
                                    width: 5,
                                    height: 5,
                                    alt: "Babypepe logo",
                                    borderRadius: "full",
                                  }),
                                  (0, a.jsxs)(p.Text, {
                                    fontSize: "2xl",
                                    fontWeight: "bold",
                                    color: "white",
                                    mx: 2,
                                    textShadow:
                                      "0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black",
                                    children: [
                                      "24hr Volume: $",
                                      parseFloat(n).toLocaleString(void 0, {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsxs)(o.Flex, {
                                direction: "row",
                                alignItems: "center",
                                mx: 5,
                                children: [
                                  (0, a.jsx)(y.Image, {
                                    src: "/images/ethLogo.png",
                                    height: 5,
                                    width: 8,
                                    alt: "Ethereum Price Logo for Babypepe",
                                  }),
                                  (0, a.jsxs)(p.Text, {
                                    fontSize: "2xl",
                                    fontWeight: "bold",
                                    color: "white",
                                    mx: 2,
                                    textShadow:
                                      "0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black",
                                    children: [
                                      "Eth Price: $",
                                      parseFloat(h).toLocaleString(void 0, {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          t
                        )
                      ),
                    }),
                (0, a.jsx)(L(), {
                  id: "e197dd88e628caa0",
                  children:
                    "@-webkit-keyframes scroll{0%{-webkit-transform:translatex(0);transform:translatex(0)}100%{-webkit-transform:translatex(-100%);transform:translatex(-100%)}}@-moz-keyframes scroll{0%{-moz-transform:translatex(0);transform:translatex(0)}100%{-moz-transform:translatex(-100%);transform:translatex(-100%)}}@-o-keyframes scroll{0%{-o-transform:translatex(0);transform:translatex(0)}100%{-o-transform:translatex(-100%);transform:translatex(-100%)}}@keyframes scroll{0%{-webkit-transform:translatex(0);-moz-transform:translatex(0);-o-transform:translatex(0);transform:translatex(0)}100%{-webkit-transform:translatex(-100%);-moz-transform:translatex(-100%);-o-transform:translatex(-100%);transform:translatex(-100%)}}.ticker.jsx-e197dd88e628caa0{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;padding:0}",
                }),
              ],
            })
          );
        },
        U = i(26440),
        J = i(27648),
        O = () =>
          (0, a.jsxs)(o.Flex, {
            direction: "row",
            justify: "center",
            align: "center",
            width: "100%",
            mb: 12,
            children: [
              (0, a.jsx)(J.default, {
                href: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x2df6456186f81c733f76cc561d07b05f785cbe05",
                passHref: !0,
                children: (0, a.jsxs)(U.Button, {
                  backgroundColor: "rgba(50, 50, 50, 0.6)",
                  textColor: "#fff",
                  padding: "25px 35px",
                  borderRadius: "20px",
                  fontSize: "25px",
                  display: "flex",
                  alignItems: "center",
                  border: "2px solid #fff",
                  justifyContent: "center",
                  transition: "background-color 0.3s, transform 0.3s",
                  _hover: {
                    backgroundColor: "#4A9F33",
                    transform: "scale(1.05)",
                  },
                  mx: 4,
                  textShadow:
                    "0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black",
                  children: [
                    "Swap",
                    (0, a.jsx)(y.Image, {
                      src: "/logos/uniswap-white.png",
                      alt: "Swap Babypepe",
                      boxSize: "40px",
                      mt: -2,
                      mr: 1,
                    }),
                  ],
                }),
              }),
              (0, a.jsx)(J.default, {
                href: "https://www.dextools.io/app/en/ether/pair-explorer/0x8d7976035235913d4694705455ef7ce1e16a9dc3?t=1751233418658",
                passHref: !0,
                children: (0, a.jsxs)(U.Button, {
                  backgroundColor: "rgba(50, 50, 50, 0.6)",
                  textColor: "#fff",
                  padding: "25px 35px",
                  borderRadius: "20px",
                  fontSize: "25px",
                  display: "flex",
                  alignItems: "center",
                  border: "2px solid #fff",
                  justifyContent: "center",
                  transition: "background-color 0.3s, transform 0.3s",
                  _hover: {
                    backgroundColor: "#4A9F33",
                    transform: "scale(1.05)",
                  },
                  mr: 4,
                  textShadow:
                    "0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black",
                  children: [
                    "Chart",
                    (0, a.jsx)(h.Op, {
                      style: { marginLeft: "8px", marginTop: "-4" },
                    }),
                  ],
                }),
              }),
            ],
          }),
        N = () =>
          (0, a.jsxs)(x.Box, {
            position: "relative",
            width: "100vw",
            minHeight: "100vh",
            backgroundImage: "url('/backgrounds/pepe_beach.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            overflow: "hidden",
            children: [
              (0, a.jsxs)(F.E.div, {
                initial: { opacity: 0, y: -100 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, ease: "easeOut" },
                style: {
                  position: "absolute",
                  top: "18%",
                  width: "100%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 2,
                  textAlign: "center",
                },
                children: [
                  (0, a.jsx)(O, {}),
                  (0, a.jsx)(S.Heading, {
                    as: "h1",
                    fontSize: { base: "15vw", md: "150px" },
                    color: "#fff",
                    fontFamily: "'PepeFont', sans-serif",
                    textAlign: "center",
                    paddingX: 4,
                    textShadow:
                      "1px 1px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black",
                    children: "Babypepe",
                  }),
                ],
              }),
              (0, a.jsx)(o.Flex, {
                position: "absolute",
                bottom: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                direction: "column",
                alignItems: "center",
                width: "90%",
                maxWidth: "500px",
                gap: 4,
                children: (0, a.jsx)(M, {}),
              }),
            ],
          }),
        Y = () =>
          (0, a.jsxs)(x.Box, {
            id: "join-us",
            width: "100%",
            height: "110vh",
            display: "flex",
            mb: 2,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
            bgImage: "/backgrounds/pepe_campfire.JPG",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            children: [
              (0, a.jsx)(o.Flex, {
                direction: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                textAlign: "center",
                height: "70%",
                paddingTop: 2,
                children: (0, a.jsx)(p.Text, {
                  fontSize: { base: "55px", md: "80px" },
                  fontWeight: "bold",
                  color: "#fff",
                  mb: 10,
                  textAlign: "center",
                  fontFamily: "'PepeFont', sans-serif",
                  textShadow:
                    "0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black",
                  mt: { base: 10, md: 20 },
                  children: "Everyone is Welcome",
                }),
              }),
              (0, a.jsx)(o.Flex, {
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "30%",
                mt: 240,
                children: (0, a.jsxs)(U.Button, {
                  as: "a",
                  href: "https://t.me/babypepe_oneth",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  width: "90%",
                  padding: "30px 40px",
                  borderRadius: "8px",
                  justifyContent: "center",
                  fontSize: "25px",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  border: "4px solid white",
                  maxW: "300px",
                  fontFamily: "'SecondaryFont', sans-serif",
                  textShadow:
                    "0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black",
                  _hover: {
                    transform: "scale(1.1)",
                    backgroundColor: "#006821",
                  },
                  children: [
                    (0, a.jsx)(h.Ww5, {
                      size: 30,
                      style: { marginRight: "10px" },
                    }),
                    "Join Us",
                  ],
                }),
              }),
            ],
          }),
        X = i(83378);
      let $ = { visible: { transition: { staggerChildren: 0.2 } }, hidden: {} },
        V = {
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
          },
          hidden: { opacity: 0, y: 50 },
        };
      var Z = () => {
          let e = (0, B._)(),
            { ref: t, inView: i } = (0, z.YD)({
              triggerOnce: !0,
              threshold: 0.3,
            });
          return (
            (0, l.useEffect)(() => {
              i ? e.start("visible") : e.start("hidden");
            }, [i, e]),
            (0, a.jsx)(a.Fragment, {
              children: (0, a.jsxs)(x.Box, {
                id: "roadmap",
                width: "100%",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
                bgImage: "/backgrounds/pepe_hiking.JPG",
                backgroundSize: "cover",
                backgroundPosition: "calc(50% + 45%) center",
                backgroundRepeat: "no-repeat",
                children: [
                  (0, a.jsx)(x.Box, {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bg: "rgba(0, 0, 0, 0.2)",
                    borderRadius: 10,
                    zIndex: 1,
                  }),
                  (0, a.jsx)(S.Heading, {
                    as: "h2",
                    my: 4,
                    width: "90%",
                    fontSize: "5xl",
                    textAlign: "center",
                    color: "#fff",
                    fontFamily: "'PepeFont', sans-serif",
                    zIndex: 2,
                    textShadow:
                      "0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black",
                    children: "Babypepe Road Map",
                  }),
                  (0, a.jsx)(F.E.div, {
                    ref: t,
                    variants: $,
                    initial: "hidden",
                    animate: e,
                    style: { width: "95%", maxWidth: "500px", zIndex: 2 },
                    children: (0, a.jsx)(X.Grid, {
                      templateColumns: "repeat(2, 1fr)",
                      gap: 3,
                      justifyItems: "center",
                      mt: 4,
                      mb: 4,
                      zIndex: 2,
                      width: "100%",
                      children: [
                        {
                          title: "Phase 1:",
                          points: [
                            "Born ",
                            "1000+ Holders ",
                            "DEX listings ",
                            "Form Cult ",
                          ],
                        },
                        {
                          title: "Phase 2:",
                          points: [
                            "babypepe.art",
                            "CEX Listings",
                            "Tier 1 Listings",
                            "10,000+ Holders",
                          ],
                        },
                        {
                          title: "Phase 3:",
                          points: ["#1 Baby Meta", "50,000+ Holders"],
                        },
                        {
                          title: "Phase 4:",
                          points: ["100,000+ Holders", "Make Dad Proud"],
                        },
                      ].map((e, t) =>
                        (0, a.jsx)(
                          F.E.div,
                          {
                            variants: V,
                            style: {
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              width: "100%",
                            },
                            children: (0, a.jsxs)(x.Box, {
                              fontSize: { base: "18px", md: "22px" },
                              color: "white",
                              p: 2,
                              fontWeight: "bold",
                              borderRadius: "15px",
                              width: "100%",
                              maxWidth: "280px",
                              bg: "rgba(0, 0, 0, 0.5)",
                              opacity: 0.9,
                              border: "2px solid white",
                              textAlign: "left",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              fontFamily: "'SecondaryFont', sans-serif",
                              textShadow:
                                "0.5px 0.5px 0 black, -0.5px 0.5px 0 black, 0.5px -0.5px 0 black, -0.5px -0.5px 0 black",
                              children: [
                                e.title,
                                (0, a.jsx)(C.VStack, {
                                  spacing: 2,
                                  mt: 4,
                                  alignItems: "flex-start",
                                  children: e.points.map((e, i) =>
                                    (0, a.jsxs)(
                                      x.Box,
                                      {
                                        color: "white",
                                        fontSize: { base: "14px", md: "20px" },
                                        display: "flex",
                                        alignItems: "center",
                                        children: [
                                          0 === t ||
                                          "babypepe.art" === e ||
                                          "CEX Listings" === e
                                            ? (0, a.jsx)(h.l_A, {
                                                style: {
                                                  marginRight: "6px",
                                                  color: "#fff",
                                                },
                                              })
                                            : (0, a.jsx)(G.Spinner, {
                                                size: "sm",
                                                color: "white",
                                                style: { marginRight: "6px" },
                                              }),
                                          e,
                                        ],
                                      },
                                      i
                                    )
                                  ),
                                }),
                              ],
                            }),
                          },
                          t
                        )
                      ),
                    }),
                  }),
                ],
              }),
            })
          );
        },
        K = () => {
          let [e, t] = (0, l.useState)(!1);
          return (
            (0, l.useEffect)(() => {
              let e = () => {
                t(window.scrollY > 300);
              };
              return (
                window.addEventListener("scroll", e),
                () => {
                  window.removeEventListener("scroll", e);
                }
              );
            }, []),
            (0, a.jsxs)(o.Flex, {
              direction: "column",
              align: "center",
              justify: "center",
              position: "relative",
              overflow: "hidden",
              children: [
                (0, a.jsx)(n.Z, {}),
                (0, a.jsx)(N, {}),
                (0, a.jsx)(D, {}),
                (0, a.jsx)(E, {}),
                (0, a.jsx)(_, {}),
                (0, a.jsx)(Z, {}),
                (0, a.jsx)(Y, {}),
                (0, a.jsx)(k, {}),
                (0, a.jsx)(m, {}),
                e &&
                  (0, a.jsx)(r.IconButton, {
                    icon: (0, a.jsx)(v.H, { color: "#fff" }),
                    "aria-label": "Scroll to Top",
                    zIndex: 3e3,
                    onClick: () => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    },
                    position: "fixed",
                    bottom: 1,
                    right: 1,
                    size: "lg",
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    _hover: { bg: "#156D30" },
                    borderRadius: "15px",
                    boxShadow: "lg",
                    border: "2px solid white",
                    padding: "20px 10px",
                  }),
              ],
            })
          );
        };
    },
    42293: function (e) {
      e.exports = { page: "page_page__ZU32B", h1: "page_h1__fdyfB" };
    },
  },
  function (e) {
    e.O(
      0,
      [74591, 27699, 87240, 29966, 20231, 22289, 12006, 92971, 52117, 1744],
      function () {
        return e((e.s = 82458));
      }
    ),
      (_N_E = e.O());
  },
]);
