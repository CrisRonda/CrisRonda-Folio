import { extendTheme, ThemeComponents } from "@chakra-ui/react";
import { createBreakpoints, mode } from "@chakra-ui/theme-tools";
import { colors } from "./colors";
import Button from "./components/Button";

const fonts = { mono: `'Menlo', monospace` };
const isDark = (
  colormode: string,
  light: string = "l_text",
  dark: string = "d_text"
) => (colormode === " dark" ? light : dark);

const components: Partial<ThemeComponents> = {
  Button,
  Text: {
    baseStyle: ({ colorMode }) => ({
      color: isDark(colorMode),
    }),
  },
  Code: {
    baseStyle: {},
    variants: {
      solid: ({ colorMode }) => ({
        color: isDark(colorMode),
      }),
    },
    defaultProps: {
      variant: "solid",
    },
  },
};
const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  colors,
  fonts,
  breakpoints,
  components,
  styles: {
    global: (props) => ({
      html: {
        bg: props.colorMode === "dark" ? "d_bg" : "l_bg",
        scrollBehavior: "smooth",
      },

      body: {
        fontFamily: "body",
        color: props.colorMode === "dark" ? "d_text" : "l_text",
        transition: "background-color 0.2s",
        lineHeight: "calc(8px + 2ex)",
        height: "100%",
        bg: props.colorMode === "dark" ? "d_bg" : "l_bg",
      },
      "*, *::before, &::after": {
        wordWrap: "break-word",
      },
      "#__next": {
        minHeight: "100vh",
      },
      "::-webkit-scrollbar": {
        display: "none",
      },
    }),
  },
});

export default theme;
function prismTheme(props: any) {
  throw new Error("Function not implemented.");
}
