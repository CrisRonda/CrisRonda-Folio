import { useRouter } from "next/dist/client/router";
import Link, { LinkProps } from "next/link";
import { FC, ReactNode } from "react";

interface NextLinkTypes extends LinkProps {
  children: string | number | ReactNode;
}
const NextLink: FC<NextLinkTypes> = ({ children, ...props }) => {
  const { locale } = useRouter();
  return (
    <Link {...props} locale={locale}>
      <a>{children}</a>
    </Link>
  );
};
export default NextLink;
