import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode, Switch, IconButton } from "@chakra-ui/react";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <IconButton
      icon={isDark ? <MoonIcon color="white" /> : <SunIcon color="white" />}
      _hover={{ background: "secondary_dark" }}
      variant={"ghost"}
      aria-label={"Toggle Navigation"}
      onClick={toggleColorMode}
    />
  );
};
