export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
  isNextLink?: boolean;
  shallow?: boolean;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "home",
    href: "/#",
    isNextLink: true,
    shallow: true,
  },
  {
    label: "tech",
    href: "/#tecnologias",
    isNextLink: true,
    shallow: true,
  },
  {
    label: "contact",
    href: "/#contacto",
    isNextLink: true,
    shallow: true,
  },
];
export default NAV_ITEMS;
