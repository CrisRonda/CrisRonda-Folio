import { useTranslations } from "next-intl";
import Head from "next/head";
import { properties, keywords } from "utils/constants";

const URL_SITE = process.env.NEXT_PUBLIC_URL_SITE;
const IMAGE = process.env.NEXT_PUBLIC_SEO_IMAGE;

const SEO = () => {
  const t = useTranslations("SEO");
  const title = `${t("title")}`;
  const description = `${t("description")}`;
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <meta name="robots" content="index, follow" />
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {properties({ title, description, URL_SITE, IMAGE }).map(
        (item, index) => (
          <meta key={index} property={item.property} content={item.content} />
        )
      )}
      <link rel="dns-prefetch" href={URL_SITE} />
      <link rel="preconnect" href={URL_SITE} />
      <link rel="shortcut icon" type="image/png" href="/logo.png" />
      <link rel="apple-touch-icon" href="/logo.png" />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="author" content="Cristian Ronda" />
      <meta
        http-equiv="origin-trial"
        content="ApY/LL+2fJ0CjAJUvZt8f4Vw+IZ77B4qaGrSC/zvyOZmyUCPR6AmGvVfXfAVbn2IoAbJAoMDEPsZfbol3NL8lwsAAAB7eyJvcmlnaW4iOiJodHRwczovL2NyaXN0aWFuLXJvbmRhLnRrOjQ0MyIsImZlYXR1cmUiOiJVbnJlc3RyaWN0ZWRTaGFyZWRBcnJheUJ1ZmZlciIsImV4cGlyeSI6MTYzOTUyNjM5OSwiaXNTdWJkb21haW4iOnRydWV9"
      />
      <meta name="copyright" content="Cristian Ronda. Derechos reservados." />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    </Head>
  );
};

export default SEO;
