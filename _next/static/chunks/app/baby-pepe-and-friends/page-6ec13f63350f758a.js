(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [15013],
  {
    56343: function (e, o, t) {
      Promise.resolve().then(t.bind(t, 16944));
    },
    16944: function (e, o, t) {
      "use strict";
      t.r(o);
      var r = t(57437),
        i = t(39295),
        n = t(2265),
        l = t(21183),
        a = t(35331),
        s = t(60373),
        d = t(49611);
      o.default = () => {
        let [e, o] = (0, n.useState)(null),
          t = (e) => {
            o(e);
          };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(i.Z, {}),
            (0, r.jsxs)(l.Box, {
              display: "flex",
              flexDirection: "column",
              height: "100vh",
              width: "100vw",
              children: [
                (0, r.jsxs)(l.Box, {
                  flex: "1",
                  backgroundImage:
                    "/images/blue-sky-clouds-anime-style-600nw-2157978867.webp",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "40px",
                  fontFamily: "'PepeFont', sans-serif",
                  children: [
                    (0, r.jsx)(a.Heading, {
                      as: "h1",
                      size: "4xl",
                      color: "#6CB947",
                      textAlign: "center",
                      textShadow:
                        "2px 2px 0 white, -2px 2px 0 white, 2px -2px 0 white, -2px -2px 0 white",
                      mb: 2,
                      fontFamily: "'PepeFont', sans-serif",
                      mt: 100,
                      children: "Babypepe & Friends",
                    }),
                    (0, r.jsx)(s.Text, {
                      fontSize: "3xl",
                      color: "#fff",
                      textAlign: "center",
                      mb: 8,
                      fontFamily: "'SecondaryFont', sans-serif",
                      children:
                        "Watch the latest episodes and discover the adventures of Babypepe!",
                    }),
                    (0, r.jsx)(l.Box, {
                      display: "flex",
                      justifyContent: "center",
                      gap: "20px",
                      flexWrap: "wrap",
                      marginBottom: "30px",
                      children: [
                        {
                          thumbnail: "/videos/1.png",
                          title: "Episode 1: Breaking!",
                          embedUrl:
                            "https://www.youtube-nocookie.com/embed/RJozyBRMTb8?rel=0&showinfo=0&modestbranding=1&enablejsapi=1",
                        },
                        {
                          thumbnail: "/videos/2.png",
                          title: "Episode 2: Hit the Road",
                          embedUrl:
                            "https://www.youtube-nocookie.com/embed/yRVM9_-vVSM?rel=0&showinfo=0&modestbranding=1&enablejsapi=1",
                        },
                        {
                          thumbnail: "/videos/3.png",
                          title: "Episode 3: The Chase",
                          embedUrl:
                            "https://www.youtube-nocookie.com/embed/5JJlgFrGKCA?rel=0&showinfo=0&modestbranding=1&enablejsapi=1",
                        },
                        {
                          thumbnail: "/videos/4.png",
                          title: "Episode 4: Beefy Intel",
                          embedUrl:
                            "https://www.youtube-nocookie.com/embed/pOmgky5QYKI?rel=0&showinfo=0&modestbranding=1&enablejsapi=1",
                        },
                        {
                          thumbnail: "/videos/5.png",
                          title: "Episode 5: Blue Bird",
                          embedUrl:
                            "https://www.youtube-nocookie.com/embed/IswxDs9Rb2c?rel=0&showinfo=0&modestbranding=1&enablejsapi=1",
                        },
                        {
                          thumbnail: "/videos/6.png",
                          title: "Episode 6: Drop a Baby",
                          embedUrl:
                            "https://www.youtube-nocookie.com/embed/Zfl7oCxORg4?rel=0&showinfo=0&modestbranding=1&enablejsapi=1",
                        },
                        {
                          thumbnail: "/videos/7.png",
                          title: "Episode 7: To the Moon",
                          embedUrl:
                            "https://www.youtube-nocookie.com/embed/Mi6FXTCQLQE?rel=0&showinfo=0&modestbranding=1&enablejsapi=1",
                        },
                        {
                          thumbnail: "/videos/8.png",
                          title: "Episode 8: The Catch",
                          embedUrl:
                            "https://www.youtube-nocookie.com/embed/52GQXbIczBE?rel=0&showinfo=0&modestbranding=1&enablejsapi=1",
                        },
                      ].map((e, o) =>
                        (0, r.jsxs)(
                          l.Box,
                          {
                            onClick: () => t(e),
                            cursor: "pointer",
                            textAlign: "center",
                            _hover: { transform: "scale(1.4)" },
                            children: [
                              (0, r.jsx)(d.Image, {
                                src: e.thumbnail,
                                alt: "Thumbnail for ".concat(e.title),
                                width: "150px",
                                height: "100px",
                                objectFit: "cover",
                                borderRadius: "8px",
                                mb: 2,
                              }),
                              (0, r.jsx)(s.Text, {
                                fontWeight: "bold",
                                color: "#fff",
                                fontFamily: "'SecondaryFont', sans-serif",
                                fontSize: "14px",
                                children: e.title,
                              }),
                            ],
                          },
                          o
                        )
                      ),
                    }),
                  ],
                }),
                (0, r.jsx)(l.Box, {
                  flex: "1",
                  backgroundColor: "black",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "20px",
                  children:
                    e &&
                    (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)(s.Text, {
                          mt: 10,
                          fontSize: "2xl",
                          fontWeight: "bold",
                          color: "white",
                          marginBottom: "10px",
                          children: e.title,
                        }),
                        (0, r.jsx)(l.Box, {
                          position: "relative",
                          width: "100%",
                          height: "0",
                          paddingBottom: "56.25%",
                          mb: 100,
                          children: (0, r.jsx)("iframe", {
                            src: e.embedUrl,
                            frameBorder: "0",
                            allow: "autoplay; encrypted-media",
                            allowFullScreen: !0,
                            onError: () =>
                              alert(
                                "An error occurred while loading the video."
                              ),
                            style: {
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%",
                              borderRadius: "10px",
                              boxShadow: "0px 4px 8px rgba(255, 255, 255, 0.2)",
                              marginBottom: "25px",
                            },
                          }),
                        }),
                      ],
                    }),
                }),
              ],
            }),
          ],
        });
      };
    },
    39295: function (e, o, t) {
      "use strict";
      var r = t(57437),
        i = t(2265),
        n = t(80876),
        l = t(21183),
        a = t(98314),
        s = t(49611),
        d = t(60373),
        p = t(98559),
        h = t(66602),
        b = t(51298),
        c = t(39292),
        f = t(3360),
        x = t(35012),
        m = t(30551),
        u = t(94483),
        g = t(86508),
        w = t(88089),
        y = t(7227),
        j = t(24620),
        k = t(48017),
        B = t(33459),
        C = t(27648);
      let v = (e) => {
        let { title: o, options: t } = e,
          [n, a] = (0, i.useState)(!1);
        return (0, r.jsxs)(f.Popover, {
          trigger: "hover",
          placement: "bottom-start",
          onOpen: () => a(!0),
          onClose: () => {
            a(!1);
          },
          children: [
            (0, r.jsx)(x.PopoverTrigger, {
              children: (0, r.jsxs)(l.Box, {
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
                children: [o, (0, r.jsx)(B.v, { ml: 2 })],
              }),
            }),
            (0, r.jsxs)(m.PopoverContent, {
              bg: "#156D30",
              borderColor: "#6CB947",
              borderRadius: "10px",
              children: [
                (0, r.jsx)(u.PopoverArrow, { bg: "#156D30" }),
                (0, r.jsx)(g.PopoverCloseButton, {}),
                (0, r.jsx)(w.PopoverBody, {
                  children: (0, r.jsx)(y.List, {
                    spacing: 2,
                    children: t.map((e, o) =>
                      (0, r.jsx)(
                        y.ListItem,
                        {
                          _hover: {
                            bg: "#6CB947",
                            color: "white",
                            borderRadius: "8px",
                          },
                          children: (0, r.jsx)(C.default, {
                            href: e.href,
                            passHref: !0,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            style: {
                              textDecoration: "none",
                              padding: "10px",
                              display: "block",
                            },
                            onClick: () => a(!1),
                            children: e.label,
                          }),
                        },
                        o
                      )
                    ),
                  }),
                }),
              ],
            }),
          ],
        });
      };
      o.Z = () => {
        let [e, o] = (0, i.useState)(!1),
          t = (0, i.useRef)(null);
        return (
          (0, n.useOutsideClick)({ ref: t, handler: () => o(!1) }),
          (0, i.useEffect)(() => {
            let e = () => o(!1);
            return (
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, []),
          (0, r.jsxs)(l.Box, {
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
              (0, r.jsxs)(a.Flex, {
                align: "center",
                justify: "space-between",
                fontFamily: "'ThirdFont', sans-serif",
                children: [
                  (0, r.jsx)(C.default, {
                    href: "/",
                    passHref: !0,
                    children: (0, r.jsxs)(a.Flex, {
                      direction: "row",
                      children: [
                        (0, r.jsx)(s.Image, {
                          src: "/logos/babyPepe.JPG",
                          width: 45,
                          height: 45,
                          alt: "baby-pepe-logo",
                          borderRadius: "full",
                        }),
                        (0, r.jsx)(d.Text, {
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
                  (0, r.jsx)(p.IconButton, {
                    icon: e
                      ? (0, r.jsx)(j.T, { boxSize: 8, color: "#fff" })
                      : (0, r.jsx)(k.U, { boxSize: 8, color: "#fff" }),
                    "aria-label": "Toggle Menu",
                    onClick: () => {
                      o((e) => !e);
                    },
                    display: { base: "block", md: "none" },
                    backgroundColor: "transparent",
                    _hover: { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                    _active: { backgroundColor: "rgba(255, 255, 255, 0.2)" },
                  }),
                  (0, r.jsxs)(a.Flex, {
                    display: { base: "none", md: "flex" },
                    align: "center",
                    gap: 4,
                    padding: "5px",
                    children: [
                      (0, r.jsx)(h.Link, {
                        as: C.default,
                        href: "/",
                        marginRight: "20px",
                        fontWeight: "bold",
                        _hover: { color: "#A02E00" },
                        children: "Home",
                      }),
                      (0, r.jsx)(h.Link, {
                        as: C.default,
                        href: "/flappy-baby-pepe",
                        marginRight: "20px",
                        fontWeight: "bold",
                        _hover: { color: "#A02E00" },
                        children: "Arcade",
                      }),
                      (0, r.jsx)(v, {
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
                      (0, r.jsx)(v, {
                        title: "Community",
                        options: [
                          {
                            label: "Twitter",
                            href: "https://x.com/BabyPepe_OnEth",
                          },
                          {
                            label: "Telegram",
                            href: "https://t.me/babypepe_eth_channel",
                          },
                        ],
                      }),
                      (0, r.jsx)(v, {
                        title: "Buy Now",
                        options: [
                          {
                            label: "Uniswap",
                            href: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x1534d182e57389217c3168746fba76a2f8e7f299",
                          }
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)(b.Slide, {
                direction: "left",
                in: e,
                style: { zIndex: 9 },
                children: (0, r.jsx)(l.Box, {
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
                  children: (0, r.jsxs)(c.VStack, {
                    align: "start",
                    spacing: 5,
                    padding: "10px",
                    children: [
                      (0, r.jsx)(C.default, {
                        href: "/",
                        passHref: !0,
                        children: (0, r.jsxs)(a.Flex, {
                          direction: "row",
                          children: [
                            (0, r.jsx)(s.Image, {
                              src: "/logos/babyPepe.JPG",
                              width: 70,
                              height: 70,
                              alt: "babyPepe",
                              borderRadius: "full",
                            }),
                            (0, r.jsx)(d.Text, {
                              marginTop: 2,
                              marginLeft: 5,
                              fontFamily: "'PepeFont', sans-serif",
                              fontSize: 30,
                              children: "Babypepe",
                            }),
                          ],
                        }),
                      }),
                      (0, r.jsx)(h.Link, {
                        ml: 2,
                        fontFamily: "'ThirdFont', sans-serif",
                        as: C.default,
                        href: "/",
                        marginTop: "40px",
                        fontWeight: "bold",
                        _hover: { color: "#A02E00" },
                        children: "Home",
                      }),
                      (0, r.jsx)(h.Link, {
                        ml: 2,
                        fontFamily: "'ThirdFont', sans-serif",
                        as: C.default,
                        href: "/flappy-baby-pepe",
                        fontWeight: "bold",
                        _hover: { color: "#A02E00" },
                        my: "10px",
                        children: "Arcade",
                      }),
                      (0, r.jsx)(v, {
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
                      (0, r.jsx)(v, {
                        title: "Community",
                        options: [
                          {
                            label: "Twitter",
                            href: "https://x.com/BabyPepe_OnEth",
                          },
                          {
                            label: "Telegram",
                            href: "https://t.me/babypepe_eth_channel",
                          },
                        ],
                      }),
                      (0, r.jsx)(v, {
                        title: "Buy Now",
                        options: [
                          {
                            label: "Uniswap",
                            href: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x1534d182e57389217c3168746fba76a2f8e7f299",
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
    35331: function (e, o, t) {
      "use strict";
      t.d(o, {
        Heading: function () {
          return d;
        },
      });
      var r = t(57437),
        i = t(22223),
        n = t(24377),
        l = t(44109),
        a = t(11535),
        s = t(81284);
      let d = (0, l.forwardRef)(function (e, o) {
        let t = (0, a.useStyleConfig)("Heading", e),
          { className: l, ...d } = (0, i.L)(e);
        return (0,
        r.jsx)(s.chakra.h2, { ref: o, className: (0, n.cx)("chakra-heading", e.className), ...d, __css: t });
      });
      d.displayName = "Heading";
    },
  },
  function (e) {
    e.O(0, [29966, 20231, 92971, 52117, 1744], function () {
      return e((e.s = 56343));
    }),
      (_N_E = e.O());
  },
]);
