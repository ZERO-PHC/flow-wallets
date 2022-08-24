import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { ButtonStyles as Button } from "./components/buttonStyles";
import { HeadingStyles as Heading } from "./components/headingStyles";

//include custom options here
const customTheme = {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode("white", "black.200")(props),
      },
    }),
  },
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
  },
  variantTests: {
    w: "100px",
    h: "100px",
    bg: "red",
  },
  colors: {
    primary: {
      color: "#000000",
      background: "#ffffff",
    },
    secondary: "#153e75",
    accent: "#2a69ac",
    gray: {
      100: "#D9D9D9",
      200: "#B6B6B6",
      300: "#9D9D9D",
      400: "#7D7D7D",
      500: "#3E3D40",
      600: "#302F32",
    },
    black: {
      100: "#1D1D1F",
      200: "#231F20",
      300: "#1D1616",
      400: "#1F1717",
    },
    purple: {
      100: "#6345ED",
      200: "#8703EF",
    },
    green: {
      100: "#00EF8B",
      200: "#16FF99",
    },
    white: {
      100: "#FFFDFD",
      200: "#F0F2FA",
    },
  },
  fonts: {
    body: "Blinker Regular,Inter, sans-serif",
    blinkerExtraBold: "Blinker ExtraBold,Inter, sans-serif",
    blinkerBold: "Blinker Bold,Inter, sans-serif",
  },
  layerStyles: {
    bullet: {
      border: "1px solid",
    },
  },
  components: {
    Button,
    Heading,
    Checkbox: {
      baseStyle: (props) => ({
        control: {
          borderColor: mode("black", "purple.100")(props),
          bg: mode("#E6E6EA", "gray.500")(props),
          borderRadius: "md",
          boxShadow: "0 4px 4px rgba(0, 0, 0, 0.45)",
          _checked: {
            bg: mode("black.100", "purple.100")(props),
            color: mode("white", "white")(props),
            borderColor: mode("black.100", "purple.100")(props),
            _hover: {
              bg: mode("#black.300", "purple.200")(props),
            },
          },
          _hover: {
            bg: mode("#black.200", "purple.200")(props),
          },
        },
      }),
      sizes: {
        lg: {
          control: { w: 8, h: 8 },
        },
        xg: {
          control: { w: 10, h: 10 },
          label: { fontSize: "md" },
          icon: { fontSize: "0.625rem" },
        },
      },
      defaultProps: {
        size: "xg",
      },
    },
    Container: {
      baseStyle: (props) => ({
        bg: mode("white", "gray.600")(props),
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
        borderRadius: 6,
        boxShadow: "0px 10px 20px 4px rgba(0, 0, 0, 0.1)",
        maxWidth: "none",
        w: "100%",
        h: "100%",
      }),
      variants: {
        heroBg: (props) => ({
          bg: mode(
            "linear-gradient(89.64deg, rgba(167, 255, 218, 0.1) 0.31%, rgba(99, 69, 237, 0.1) 172.01%)",
            "linear-gradient(89.64deg, rgba(167, 255, 218, 0.4) 0.31%, rgba(99, 69, 237, 0.4) 172.01%)"
          )(props),
        }),
        preferenceCard: (props) => ({
          width: "480px",
          height: "270px",
          padding: "20px 40px",
        }),
        overview: (props) => ({
          bg: mode("black.200", "gray.600")(props),
          color: mode("white", "white")(props),
          fontFamily: "Blinker SemiBold",
        }),
        tableFeatures: (props) => ({
          bg: mode("white", "gray.500")(props),
          justifyContent: "flex-start",
          p: "15px 0px",
          border: "1px solid black",
          borderRadius: 0,
          boxShadow: 0,
          h: "auto",
          w: { md: "100%", lg: "35%" },
          gap: {lg: "20px"},
        }),
        guideBg: (props) => ({
          bg: "linear-gradient(89.64deg, rgba(167, 255, 218, 0.4) 0.31%, rgba(99, 69, 237, 0.4) 172.01%)",
          h: "auto",
          paddingTop: "100px",
          alignItems: "center",
          borderRadius: 0,
        }),
        guideText: (props) => ({
          bg: mode("white", "black.100")(props),
          boxShadow: 0,
        }),
        bullet: (props) => ({
          bg: mode("green.200", "purple.200")(props),
          boxShadow: 0,
          border: "1px solid",
          borderColor: mode("green.200", "purple.200")(props),
          borderRadius: "50%",
          w: "12px",
          h: "12px",
          p: 0,
        }),
        bulletWhite: (props) => ({
          bg: mode("green.200", "purple.200")(props),
          boxShadow: 0,
          border: "1px solid",
          borderColor: mode("black.100", "white.100")(props),
          borderRadius: "50%",
          w: "10px",
          h: "10px",
          p: 0,
        }),
        walletPage: (props) => ({
          bg: mode("white", "black.100")(props),
          boxShadow: 0,
          borderRadius: 0,
          p: 0,
        }),
        lilicoBg: {
          bg: "linear-gradient(180deg, #F1C7A1 -24.16%, rgba(173, 181, 184, 0) 103.6%)",
        },
      },
      Tabs: {
        baseStyle: (props) => ({
          _selected: {
            color: mode("purple.100", "purple.100")(props),
          },
          tab: {
            fontFamily: "Blinker Bold",
            _selected: {
              bg: mode("#8703EF1A", "#8703EF1A")(props),
              color: mode("white.100", "purple.100")(props),
            },
          },
        }),
      },
      Table: {
        variants: {
          walletTable: {
            th: {
              borderBottom: "1px",
              borderColor: "white",
            },
            td: {
              borderRight: "1px",
              borderColor: "white",
            },
          },
        },
      },
    },
    Modal: {
      baseStyle: (props) => ({
        dialog: {
          bg: mode("white", "gray.600")(props),
        },
        closeButton:{
          color: mode("white", "purple.100")(props),
          _hover: {
            bg: mode("black.100", "purple.100")(props),
          }
        }
      }),
    },
    Divider: {
      variants: {
        bottomDetail: (props) => ({
          bg: mode("green.100", "purple.100")(props),
        })
      }
    }
  },
};

const theme = extendTheme(customTheme);

export default theme;
