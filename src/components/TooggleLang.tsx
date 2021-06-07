import { useRouter } from "next/router";
import Link from "next/link";
import { Button } from "@chakra-ui/react";

export default function Navigation() {
  const { locale, locales, route } = useRouter();
  const otherLocale = locales?.find((cur) => cur !== locale);

  return (
    <Link href={route} locale={otherLocale}>
      <a>
        <Button variant="ghost">{locale}</Button>
      </a>
    </Link>
  );
}
