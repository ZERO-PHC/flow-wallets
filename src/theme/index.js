import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { ButtonStyles as Button } from "./components/buttonStyles";
import { InputStyles as Input } from "./components/inputStyles";
import { BoxStyles as Box } from "./components/boxStyles";
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
  components: {
    Button,
    Heading,
    Checkbox: {
        baseStyle: (props) => ({
            control: {
                borderColor: mode("black", "purple.100")(props),
                bg: mode("#E6E6EA", "gray.500")(props),
                borderRadius: "md"
            }
        }),
      sizes: {
        xg: {
          control: { w: 10, h: 10 },
          label: { fontSize: "md" },
          icon: { fontSize: "0.625rem" },
        },
      },
      defaultProps: {
        size: "xg",
      }
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
        h: "100%"
      }),
      variants: {
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
        })
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
            }
        }),
    }
  },
};

const theme = extendTheme(customTheme);

export default theme;
