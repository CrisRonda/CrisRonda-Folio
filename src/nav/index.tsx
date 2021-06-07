import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import NAV_ITEMS, { NavItem } from "./menu";
import NextLink from "src/components/NextLink";

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

      <Flex flex={1} direction="column" justifyContent="space-around">
        <DesktopNav />
      </Flex>
    </Flex>
  );
}

const DesktopNav = () => (
  <>
    {NAV_ITEMS.map((navItem) => (
      <Box key={navItem.label} position="relative">
        <Popover trigger={"hover"} placement="left">
          <PopoverTrigger>
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
                <NextLink href={navItem.href}>{navItem.label}</NextLink>
              ) : (
                navItem.label
              )}
            </Link>
          </PopoverTrigger>

          {navItem.children && (
            <PopoverContent
              border={0}
              boxShadow={"xl"}
              rounded={"xl"}
              minW={"sm"}
              bg="primary"
              p={2}
            >
              <Stack>
                {navItem.children.map((child) => (
                  <DesktopSubNav key={child.label} {...child} />
                ))}
              </Stack>
            </PopoverContent>
          )}
        </Popover>
      </Box>
    ))}
  </>
);
const DesktopSubNav = ({ label, href, subLabel, isNextLink }: NavItem) => (
  <Link
    as={isNextLink && NextLink}
    href={href}
    role={"group"}
    display={"block"}
    p={2}
    rounded={"md"}
    _hover={{ bg: "secondary_dark" }}
  >
    <Stack direction={"row"} align={"center"}>
      <Box>
        <Text
          transition={"all .3s ease"}
          _groupHover={{ color: "secondary" }}
          fontWeight={500}
        >
          {label}
        </Text>
        <Text fontSize={"sm"}>{subLabel}</Text>
      </Box>
      <Flex
        transition={"all .3s ease"}
        transform={"translateX(-10px)"}
        opacity={0}
        _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
        justify={"flex-end"}
        align={"center"}
        flex={1}
      >
        <Icon color={"white"} w={5} h={5} as={ChevronRightIcon} />
      </Flex>
    </Stack>
  </Link>
);
