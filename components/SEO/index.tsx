import Head from "next/head";
import { Constants } from "@/constants";

interface SEOProps {
  title?: string;
  description?: string;
  meta?: any[];
  lang?: string;
}

export function SEO({ description, lang, meta = [], title }: SEOProps) {
  const metaDescription = description || Constants.metaData.description;

  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
      <meta
        property="description"
        content={metaDescription}
        key="description"
      />
      <meta property="og:title" content={title} key="og:title" />
      <meta
        property="og:description"
        content={metaDescription}
        key="og:description"
      />
      <meta property="og:type" content="website" key="og:type" />
      <meta property="twitter:card" content="summary" key="twitter:card" />
      <meta
        property="twitter:creator"
        content={Constants.metaData.author}
        key="twitter:creator"
      />
      <meta property="twitter:title" content={title} key="twitter:title" />
      <meta
        property="twitter:description"
        content={metaDescription}
        key="twitter:description"
      />
    </Head>
  );
}
