import { mode } from "@chakra-ui/theme-tools";

export const HeadingStyles = {
  // style object for base or default style
  baseStyle: {
    fontFamily: "Blinker ExtraBold",
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    lg: {
      fontSize: "2.8rem",
    }
  },
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: (props) => ({
      fontSize: 26,
      fontFamily: "blinkerExtraBold",
      textAlign: "center",
      marginLeft: "auto",
    }),
    secondary: (props) => ({
      fontSize: 16,
      fontFamily: "blinkerBold",
      textAlign: "center",
      marginLeft: "auto",
    }),
  },

  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: "lg",
    variant: "",
    colorScheme: "",
  },
};