import Head from "next/head";
import Content from "@/cms/content.json";
import { Constants } from "@/constants";

interface SEOProps {
  title?: string;
  description?: string;
}

export function SEO({ description, title }: SEOProps) {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
      <meta property="description" content={description} key="description" />
      <meta property="content-language" content={Constants.language}></meta>
      <meta property="og:title" content={title} key="og:title" />
      <meta property="og:description" content={description} key="og:description" />
      <meta property="og:type" content="website" key="og:type" />
      <meta property="twitter:card" content="summary" key="twitter:card" />
      {/* <meta property="twitter:creator" content={Constants.metaData.author} key="twitter:creator" /> */}
      <meta property="twitter:title" content={title} key="twitter:title" />
      <meta property="twitter:description" content={description} key="twitter:description" />
    </Head>
  );
}
