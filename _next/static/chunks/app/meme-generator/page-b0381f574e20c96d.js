(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [15509],
  {
    50324: function (e, r, t) {
      Promise.resolve().then(t.bind(t, 83571));
    },
    83571: function (e, r, t) {
      "use strict";
      t.r(r);
      var o = t(57437),
        a = t(2265),
        l = t(21183),
        i = t(35331),
        n = t(890),
        s = t(70857),
        d = t(49611),
        h = t(98314),
        p = t(26440),
        c = t(20376),
        f = t.n(c),
        b = t(39295),
        x = t(47107);
      r.default = () => {
        let [e, r] = (0, a.useState)(null),
          [t, c] = (0, a.useState)(null),
          [u, g] = (0, a.useState)({ width: 0, height: 0 }),
          [m, w] = (0, a.useState)({ x: 0, y: 0 }),
          y = (0, a.useRef)(null),
          [j, v] = (0, a.useState)(150),
          C = () => 400 / u.width,
          k = async () => {
            if (!y.current || !e) return;
            let r = y.current.getContext("2d");
            if (!r) return;
            let o = new window.Image();
            if (
              ((o.src = e),
              await new Promise((e) => (o.onload = e)),
              (y.current.width = u.width),
              (y.current.height = u.height),
              r.clearRect(0, 0, y.current.width, y.current.height),
              r.drawImage(o, 0, 0, u.width, u.height),
              t)
            ) {
              let e = new window.Image();
              (e.src = t), await new Promise((r) => (e.onload = r));
              let o = C(),
                a = m.x / o,
                l = m.y / o;
              r.drawImage(e, a, l, j / o, j / o);
            }
          },
          B = async () => {
            if ((await k(), y.current)) {
              let e = document.createElement("a");
              (e.href = y.current.toDataURL("image/png")),
                (e.download = "custom-meme.png"),
                e.click();
            }
          };
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(b.Z, {}),
            (0, o.jsxs)(l.Box, {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "100vh",
              bg: "#187235",
              p: 5,
              children: [
                (0, o.jsx)(i.Heading, {
                  size: "2xl",
                  mb: 4,
                  mt: 150,
                  color: "#6CB947",
                  fontFamily: "'PepeFont', sans-serif",
                  children: "Meme Generator",
                }),
                (0, o.jsx)(n.Input, {
                  type: "file",
                  accept: "image/*",
                  onChange: (e) => {
                    var t;
                    let o =
                      null === (t = e.target.files) || void 0 === t
                        ? void 0
                        : t[0];
                    if (o) {
                      let e = new FileReader();
                      (e.onload = (e) => {
                        var t;
                        let o = new window.Image();
                        (o.src =
                          null === (t = e.target) || void 0 === t
                            ? void 0
                            : t.result),
                          (o.onload = () => {
                            var t;
                            g({ width: o.width, height: o.height }),
                              r(
                                null === (t = e.target) || void 0 === t
                                  ? void 0
                                  : t.result
                              );
                          });
                      }),
                        e.readAsDataURL(o);
                    }
                  },
                  mb: 4,
                  maxW: 350,
                  color: "#fff",
                }),
                (0, o.jsx)(s.Select, {
                  placeholder: "Select Overlay",
                  onChange: (e) => c(e.target.value),
                  mb: 4,
                  maxW: 350,
                  color: "#fff",
                  children: [
                    { src: "/images/pacifier.PNG", label: "Pacifier" },
                    { src: "/images/pepep2.png", label: "Babypepe" },
                    {
                      src: "/images/flying-pepe.png",
                      label: "Flappy Babypepe",
                    },
                  ].map((e, r) =>
                    (0, o.jsx)("option", { value: e.src, children: e.label }, r)
                  ),
                }),
                e &&
                  (0, o.jsxs)(l.Box, {
                    mt: 6,
                    position: "relative",
                    width: "400px",
                    height: "".concat((u.height / u.width) * 400, "px"),
                    border: "4px solid white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    bg: "#A02E00",
                    children: [
                      (0, o.jsx)("canvas", {
                        ref: y,
                        style: { display: "none" },
                      }),
                      (0, o.jsx)(d.Image, {
                        src: e,
                        alt: "Uploaded Meme",
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }),
                      t &&
                        (0, o.jsx)(f(), {
                          position: m,
                          onStop: (e, r) => w({ x: r.x, y: r.y }),
                          children: (0, o.jsx)(l.Box, {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "".concat(j, "px"),
                            height: "".concat(j, "px"),
                            cursor: "move",
                            children: (0, o.jsx)(d.Image, {
                              src: t,
                              alt: "Overlay",
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                            }),
                          }),
                        }),
                    ],
                  }),
                t &&
                  (0, o.jsx)(l.Box, {
                    mt: 4,
                    width: "300px",
                    children: (0, o.jsxs)(x.Slider, {
                      "aria-label": "overlay-size",
                      value: j,
                      min: 50,
                      max: 300,
                      onChange: (e) => v(e),
                      children: [
                        (0, o.jsx)(x.SliderTrack, {
                          children: (0, o.jsx)(x.SliderFilledTrack, {
                            bg: "green.500",
                          }),
                        }),
                        (0, o.jsx)(x.SliderThumb, {}),
                      ],
                    }),
                  }),
                (0, o.jsx)(h.Flex, {
                  direction: "row",
                  padding: 2,
                  children: (0, o.jsx)(p.Button, {
                    backgroundColor: "#6CB947",
                    onClick: B,
                    size: "lg",
                    children: "Download Meme",
                  }),
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
        l = t(80876),
        i = t(21183),
        n = t(98314),
        s = t(49611),
        d = t(60373),
        h = t(98559),
        p = t(66602),
        c = t(51298),
        f = t(39292),
        b = t(3360),
        x = t(35012),
        u = t(30551),
        g = t(94483),
        m = t(86508),
        w = t(88089),
        y = t(7227),
        j = t(24620),
        v = t(48017),
        C = t(33459),
        k = t(27648);
      let B = (e) => {
        let { title: r, options: t } = e,
          [l, n] = (0, a.useState)(!1);
        return (0, o.jsxs)(b.Popover, {
          trigger: "hover",
          placement: "bottom-start",
          onOpen: () => n(!0),
          onClose: () => {
            n(!1);
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
                bg: l ? "#A02E00" : "transparent",
                color: l ? "white" : "inherit",
                transition: "background 0.3s ease, color 0.3s ease",
                _hover: { bg: "#A02E00", color: "white" },
                children: [r, (0, o.jsx)(C.v, { ml: 2 })],
              }),
            }),
            (0, o.jsxs)(u.PopoverContent, {
              bg: "#156D30",
              borderColor: "#6CB947",
              borderRadius: "10px",
              children: [
                (0, o.jsx)(g.PopoverArrow, { bg: "#156D30" }),
                (0, o.jsx)(m.PopoverCloseButton, {}),
                (0, o.jsx)(w.PopoverBody, {
                  children: (0, o.jsx)(y.List, {
                    spacing: 2,
                    children: t.map((e, r) =>
                      (0, o.jsx)(
                        y.ListItem,
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
                            onClick: () => n(!1),
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
          (0, l.useOutsideClick)({ ref: t, handler: () => r(!1) }),
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
              (0, o.jsxs)(n.Flex, {
                align: "center",
                justify: "space-between",
                fontFamily: "'ThirdFont', sans-serif",
                children: [
                  (0, o.jsx)(k.default, {
                    href: "/",
                    passHref: !0,
                    children: (0, o.jsxs)(n.Flex, {
                      direction: "row",
                      children: [
                        (0, o.jsx)(s.Image, {
                          src: "/logos/babyPepe.JPG",
                          width: 45,
                          height: 45,
                          alt: "baby-pepe-logo",
                          borderRadius: "full",
                        }),
                        (0, o.jsx)(d.Text, {
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
                  (0, o.jsxs)(n.Flex, {
                    display: { base: "none", md: "flex" },
                    align: "center",
                    gap: 4,
                    padding: "5px",
                    children: [
                      (0, o.jsx)(p.Link, {
                        as: k.default,
                        href: "/",
                        marginRight: "20px",
                        fontWeight: "bold",
                        _hover: { color: "#A02E00" },
                        children: "Home",
                      }),
                      (0, o.jsx)(p.Link, {
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
                            href: "https://x.com",
                          },
                          {
                            label: "Telegram",
                            href: "https://t.me/babypepe_eth_channel",
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
              (0, o.jsx)(c.Slide, {
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
                      (0, o.jsx)(k.default, {
                        href: "/",
                        passHref: !0,
                        children: (0, o.jsxs)(n.Flex, {
                          direction: "row",
                          children: [
                            (0, o.jsx)(s.Image, {
                              src: "/logos/babyPepe.JPG",
                              width: 70,
                              height: 70,
                              alt: "babyPepe",
                              borderRadius: "full",
                            }),
                            (0, o.jsx)(d.Text, {
                              marginTop: 2,
                              marginLeft: 5,
                              fontFamily: "'PepeFont', sans-serif",
                              fontSize: 30,
                              children: "Babypepe",
                            }),
                          ],
                        }),
                      }),
                      (0, o.jsx)(p.Link, {
                        ml: 2,
                        fontFamily: "'ThirdFont', sans-serif",
                        as: k.default,
                        href: "/",
                        marginTop: "40px",
                        fontWeight: "bold",
                        _hover: { color: "#A02E00" },
                        children: "Home",
                      }),
                      (0, o.jsx)(p.Link, {
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
                            href: "https://x.com",
                          },
                          {
                            label: "Telegram",
                            href: "https://t.me/babypepe_eth_channel",
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
    e.O(0, [29966, 20231, 22289, 1415, 92971, 52117, 1744], function () {
      return e((e.s = 50324));
    }),
      (_N_E = e.O());
  },
]);
