import { ComponentStyleConfig } from "@chakra-ui/theme";

const Button: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: "bold",
    textTransform: "uppercase",
    borderRadius: "base",
    textDecoration: "none",
    _hover: {
      transform: "translateY(-3px) scale(1.03)",
    },
  },
  sizes: {
    sm: {
      fontSize: "sm",
      px: 2,
      py: 2,
      mx: 1,
      my: 1,
    },
    md: {
      fontSize: "md",
      px: 3,
      py: 2,
      mx: 2,
      my: 2,
    },
  },
  variants: {
    outline: ({ colorMode }) => ({
      border: "1px solid",
      borderColor: colorMode === "dark" ? "primary_light" : "secondary_dark",
      color: "l_button_text",
      _hover: {
        bg: colorMode === "dark" ? "primary_light" : "secondary_dark",
      },
      _action: {
        bg: colorMode === "dark" ? "primary_light" : "secondary_dark",
      },
      _focus: {
        bg: colorMode === "dark" ? "primary_light" : "secondary_dark",
      },
    }),
    solid: ({ colorMode }) => ({
      bg: colorMode === "dark" ? "primary_light" : "secondary_dark",
      color: "l_button_text",
      _hover: {
        bg: colorMode === "dark" ? "primary_light" : "secondary_dark",
      },
      _action: {
        bg: colorMode === "dark" ? "primary_light" : "secondary_dark",
      },
      _focus: {
        bg: colorMode === "dark" ? "primary_light" : "secondary_dark",
      },
    }),
    ghost: ({ colorMode }) => ({
      bg: "transparent",
      color: "l_button_text",
      _hover: {
        bg: colorMode === "dark" ? "primary_light" : "secondary_dark",
      },
      _action: {
        bg: colorMode === "dark" ? "primary_light" : "secondary_dark",
      },
      _focus: {
        bg: colorMode === "dark" ? "primary_light" : "secondary_dark",
      },
    }),
  },
  defaultProps: {
    size: "sm",
    variant: "solid",
  },
};

export default Button;
