import { useRouter } from "next/router";
import Link from "next/link";
import { Button, Tooltip } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

export default function Navigation() {
  const { locale, locales, route } = useRouter();
  const otherLocale = locales?.find((cur) => cur !== locale);
  const t = useTranslations("Navigation");

  return (
    <Link href={route} locale={otherLocale}>
      <a>
        <Tooltip placement="left" hasArrow label={t("changeLang")}>
          <Button variant="ghost">{locale}</Button>
        </Tooltip>
      </a>
    </Link>
  );
}
