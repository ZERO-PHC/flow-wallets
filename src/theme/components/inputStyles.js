import { mode } from "@chakra-ui/theme-tools";

export const InputStyles = {
  variants: {
    search: (props) => ({
      bg: mode("green", "purple")(props),
    }),
  },
};
