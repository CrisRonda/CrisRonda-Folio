import Link, { LinkProps } from "next/link";
import { FC, ReactNode } from "react";

interface NextLinkTypes extends LinkProps {
  children: string | number | ReactNode;
}
const NextLink: FC<NextLinkTypes> = ({ children, ...props }) => (
  <Link {...props}>
    <a>{children}</a>
  </Link>
);
export default NextLink;
