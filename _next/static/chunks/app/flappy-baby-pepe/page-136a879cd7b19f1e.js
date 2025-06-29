(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [95470],
  {
    5600: function (e, r, t) {
      Promise.resolve().then(t.bind(t, 76366));
    },
    76366: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return s;
          },
        });
      var o = t(57437),
        n = t(21183),
        a = t(49611),
        i = t(39295),
        l = () =>
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(i.Z, {}),
              (0, o.jsx)(n.Box, {
                id: "flappy2",
                bgImage: "/images/background-game.png",
                bgSize: "cover",
                bgPosition: "center",
                bgRepeat: "no-repeat",
                width: "100vw",
                minHeight: "190vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
                children: (0, o.jsxs)(n.Box, {
                  height: "800px",
                  width: "500px",
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  children: [
                    (0, o.jsx)(n.Box, {
                      position: "absolute",
                      top: "58%",
                      left: "50%",
                      width: "400px",
                      height: "630px",
                      transform: "translate(-50%, -50%)",
                      overflow: "hidden",
                      zIndex: 1,
                      children: (0, o.jsx)("iframe", {
                        src: "https://flappybabypepe.netlify.app/",
                        style: {
                          marginTop: "-80px",
                          width: "100%",
                          height: "100%",
                          border: "none",
                          overflow: "hidden",
                          pointerEvents: "auto",
                        },
                        scrolling: "no",
                        title: "Flappy Babypepe",
                        sandbox: "allow-scripts allow-same-origin",
                      }),
                    }),
                    (0, o.jsx)(a.Image, {
                      src: "/images/game-machine.png",
                      alt: "Babypepe Arcade Machine",
                      width: "auto",
                      height: "1700px",
                      maxWidth: "600px",
                      position: "absolute",
                      top: "54%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: 2,
                      pointerEvents: "none",
                      objectFit: "contain",
                    }),
                  ],
                }),
              }),
            ],
          }),
        s = () => (0, o.jsx)(l, {});
    },
    39295: function (e, r, t) {
      "use strict";
      var o = t(57437),
        n = t(2265),
        a = t(80876),
        i = t(21183),
        l = t(98314),
        s = t(49611),
        p = t(60373),
        h = t(98559),
        d = t(66602),
        f = t(51298),
        b = t(39292),
        c = t(3360),
        x = t(35012),
        g = t(30551),
        u = t(94483),
        m = t(86508),
        y = t(88089),
        j = t(7227),
        w = t(24620),
        v = t(48017),
        C = t(33459),
        k = t(27648);
      let B = (e) => {
        let { title: r, options: t } = e,
          [a, l] = (0, n.useState)(!1);
        return (0, o.jsxs)(c.Popover, {
          trigger: "hover",
          placement: "bottom-start",
          onOpen: () => l(!0),
          onClose: () => {
            l(!1);
          },
          children: [
            (0, o.jsx)(x.PopoverTrigger, {
              children: (0, o.jsxs)(i.Box, {
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
                children: [r, (0, o.jsx)(C.v, { ml: 2 })],
              }),
            }),
            (0, o.jsxs)(g.PopoverContent, {
              bg: "#156D30",
              borderColor: "#6CB947",
              borderRadius: "10px",
              children: [
                (0, o.jsx)(u.PopoverArrow, { bg: "#156D30" }),
                (0, o.jsx)(m.PopoverCloseButton, {}),
                (0, o.jsx)(y.PopoverBody, {
                  children: (0, o.jsx)(j.List, {
                    spacing: 2,
                    children: t.map((e, r) =>
                      (0, o.jsx)(
                        j.ListItem,
                        {
                          _hover: {
                            bg: "#6CB947",
                            color: "white",
                            borderRadius: "8px",
                          },
                          children: (0, o.jsx)(k.default, {
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
        let [e, r] = (0, n.useState)(!1),
          t = (0, n.useRef)(null);
        return (
          (0, a.useOutsideClick)({ ref: t, handler: () => r(!1) }),
          (0, n.useEffect)(() => {
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
                  (0, o.jsx)(k.default, {
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
                  (0, o.jsx)(h.IconButton, {
                    icon: e
                      ? (0, o.jsx)(w.T, { boxSize: 8, color: "#fff" })
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
                      (0, o.jsx)(d.Link, {
                        as: k.default,
                        href: "/",
                        marginRight: "20px",
                        fontWeight: "bold",
                        _hover: { color: "#A02E00" },
                        children: "Home",
                      }),
                      (0, o.jsx)(d.Link, {
                        as: k.default,
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
              (0, o.jsx)(f.Slide, {
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
                  children: (0, o.jsxs)(b.VStack, {
                    align: "start",
                    spacing: 5,
                    padding: "10px",
                    children: [
                      (0, o.jsx)(k.default, {
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
                      (0, o.jsx)(d.Link, {
                        ml: 2,
                        fontFamily: "'ThirdFont', sans-serif",
                        as: k.default,
                        href: "/",
                        marginTop: "40px",
                        fontWeight: "bold",
                        _hover: { color: "#A02E00" },
                        children: "Home",
                      }),
                      (0, o.jsx)(d.Link, {
                        ml: 2,
                        fontFamily: "'ThirdFont', sans-serif",
                        as: k.default,
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
  },
  function (e) {
    e.O(0, [29966, 20231, 92971, 52117, 1744], function () {
      return e((e.s = 5600));
    }),
      (_N_E = e.O());
  },
]);
