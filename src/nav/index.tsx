import { Box, Flex, Text, Stack, Icon, Link } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import TooggleLang from "src/components/TooggleLang";
import NAV_ITEMS, { NavItem } from "./menu";
import NextLink from "src/components/NextLink";
import { useTranslations } from "next-intl";

export default function CustomNav() {
  return (
    <Flex
      position="fixed"
      width={12}
      bottom={0}
      right={0}
      height="100vh"
      direction="column"
      zIndex="popover"
    >
      <DarkModeSwitch />
      <TooggleLang />

      <Flex
        flex={1}
        direction="column"
        justifyContent="space-around"
        overflow="scroll"
      >
        <DesktopNav />
      </Flex>
    </Flex>
  );
}

const DesktopNav = () => {
  const t = useTranslations("Navigation");
  return (
    <>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} position="relative">
          <Link
            position="absolute"
            as={Flex}
            justifyContent="center"
            alignItems="center"
            fontSize={"lg"}
            fontWeight={500}
            color="js_primary"
            _hover={{
              textDecoration: "none",
              transform:
                "translateX(calc(50% - calc(80vh / 4) + 24px))  rotate(-90deg) scale(1.1) !important",
            }}
            transform="translateX(calc(50% - calc(80vh / 4) + 24px))  rotate(-90deg)"
            height="48px"
            width="calc(80vh / 4)"
          >
            {navItem.isNextLink ? (
              <NextLink href={navItem.href} shallow={navItem.shallow}>
                {t(navItem.label)}
              </NextLink>
            ) : (
              navItem.label
            )}
          </Link>
        </Box>
      ))}
    </>
  );
};
