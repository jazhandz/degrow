import Head from "next/head";
import Content from "@/cms/content.json";

interface SEOProps {
  title?: string;
  description?: string;
  meta?: any[];
  lang?: string;
}

export function SEO({ description, lang, meta = [], title }: SEOProps) {
  const metaTitle = title || Content?.defaults?.seo?.title;
  const metaDescription = description || Content?.defaults?.seo?.description;

  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
      <meta property="description" content={metaDescription} key="description" />
      <meta property="content-language" content="en-us"></meta>
      <meta property="og:title" content={metaTitle} key="og:title" />
      <meta property="og:description" content={metaDescription} key="og:description" />
      <meta property="og:type" content="website" key="og:type" />
      <meta property="twitter:card" content="summary" key="twitter:card" />
      {/* <meta property="twitter:creator" content={Constants.metaData.author} key="twitter:creator" /> */}
      <meta property="twitter:title" content={metaTitle} key="twitter:title" />
      <meta property="twitter:description" content={metaDescription} key="twitter:description" />
    </Head>
  );
}
