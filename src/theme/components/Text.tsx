import { ComponentStyleConfig } from "@chakra-ui/theme";

const Text: ComponentStyleConfig = {
  baseStyle: {},
  sizes: {
    sm: {
      fontSize: "sm",
      px: 2,
      py: 2,
    },
    md: {
      fontSize: "md",
      px: 3,
      py: 2,
    },
  },
  variants: {
    outline: ({ colorMode }) => ({
      border: "2px solid",
      borderColor: colorMode === "dark" ? "primary_light" : "secondary_dark",
      color: colorMode === "dark" ? "l_button_text" : "d_button_text",
    }),
    solid: ({ colorMode }) => ({
      bg: colorMode === "dark" ? "primary_light" : "secondary_dark",
      color: colorMode === "dark" ? "l_button_text" : "d_button_text",
    }),
  },
  defaultProps: {
    size: "sm",
    variant: "solid",
  },
};

export default Text;
