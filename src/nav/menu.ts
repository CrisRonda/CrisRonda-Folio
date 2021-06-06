export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
  isNextLink?: boolean;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "/#",
    isNextLink: true,
  },
  {
    label: "Portfolio",
    href: "#",
  },
  {
    label: "About me",
    href: "/about",
    isNextLink: true,
    children: [
      {
        label: "History",
        subLabel: "About me since I born",
        href: "#",
      },
      {
        label: "Carrer",
        subLabel: "Data in my develop",
        href: "#",
      },
    ],
  },
  {
    label: "Contact",
    href: "/#contact",
    isNextLink: true,
  },
];
export default NAV_ITEMS;
