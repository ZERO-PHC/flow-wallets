import {mode} from '@chakra-ui/theme-tools'

export const BoxStyles = {
  parts: ['Box'],
  // style object for base or default style
  baseStyle: {
    bg: "green",
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    sm: {
      bg: "red",
    }
  },
  // styles for different visual variants ("outline", "solid")
  variants: {
    outline: (props) => ({
        bg: mode("green", "gray.600")(props),
    })
  },

  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: (props) => ({
    size: "",
    variant: "",
    colorScheme: "",
  }),
};
