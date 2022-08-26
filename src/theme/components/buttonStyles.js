import {mode} from '@chakra-ui/theme-tools'

export const ButtonStyles = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: (props) => ({
      bg: mode("gray.100", "purple.200")(props),
      color: "white",
      padding: "0.5rem",
      border: "1px solid white",
      _hover: {
        bg: mode("gray.100", "gray.600")(props),
        transform: "scale(1.02)",
      },
    }),
    toggle: (props) => ({
        bg: "transparent",
        borderRadius: "50%",
        border: "1px solid",
        borderColor: 'gray.200',
        padding: "0.5rem",
    }),
    navbarButton: (props) => ({
        bg: "transparent",
        fontFamily: "Blinker Bold",
        fontSize: "30px",
        _hover: {
            bg: "transparent",
            transform: "scale(1.02)",
        },
    }),
    bottomLine: (props) => ({
        bg: "transparent",
        fontFamily: "Blinker Regular",
        fontSize: "14px",
        borderBottom: "1px solid",
        borderColor: "purple.100",
        width: "fit-content",
        margin: "0 auto",
        padding: 1,
        _hover: {
            transform: "scale(1.02)",
        },
    }),
    semiBold: (props) => ({
        fontFamily: "Blinker SemiBold",
        fontSize: "14px",
    }),
    device: (props) => ({
      borderColor: mode("black.100", "white.100")(props),
      border: "1px solid",
      fontSize: "12px",
      p: "5px 10px",
      mt: 2
    }),
    simpleBtn: (props) => ({
        color: mode("green.100", "purple.100")(props),
    }),
    guideBtn: (props) => ({
        bg: mode("green.100", "purple.100")(props),
        p: 2,
        borderRadius: "50%",
        h: {sm: "40px", md: "40px",lg: "50px"}
    })
  },

  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: "",
    variant: "",
    colorScheme: "",
  },
};
