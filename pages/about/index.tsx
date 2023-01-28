import { DisplayImageTextQuote } from "@/components/Display";
import { TextContainer } from "@/components/Text";
import ProfileDavidPNG from "@/assets/img/profile-david.png";
import {SEO} from "@/components/SEO";
import api from "@/api";
import {Blocks} from "@/components/Blocks";

export default function AboutComponent({ page }: any) {
  console.log("page", page);
  return (
    <>
      <SEO title="About" description="About David Vann" />
      <TextContainer as="article">
        <h1>{page.title}</h1>
        <Blocks data={page.blocks} />
      </TextContainer>
    </>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await api.Pages.findOne("about");
  const page = {
    ...res.data,
    blocks: res.data.blocks.map((block: any) => ({
      ...block,
      component:
        block.__component.split(".")[block.__component.split(".").length - 1],
    })),
  };

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      page,
    },
  };
}
