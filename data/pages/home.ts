import { PageType } from "@/types/CMS/Page";

export const HOME_PAGE_DATA: PageType = {
  slug: "home",
  seo: {
    title: "title",
    description: "description",
  },
  blocks: [
    {
      component: "paragraph",
      body: `Degrow lab is an Utrecht- based kombucha
                Microbrewery. We are obsessed with brewing
                craft kombucha, while also determined to
                run our company according to principles
                of sustainability.`,
    },
    {
      component: "breakpoint",
      mobile: [
        {
          component: "large-image",
          data: {
            alt: "large illustration",
            objectFit: "contain",
            src: "/images/mouth_illustration",
            supportedTypes: ["webp", "png"],
            width: 367, // See why this is required https://www.youtube.com/watch?v=4-d_SoCHeWE and https://nextjs.org/docs/basic-features/image-optimization
            height: 409,
            marginTop: "-10vw",
          },
        },
      ],
      desktop: [
        {
          component: "large-image",
          data: {
            alt: "large illustration",
            src: "/images/large_illustration",
            supportedTypes: ["webp", "png"],
            marginBottom: "-30px",
            width: 703,
            height: 355,
          },
        },
      ],
    },
    {
      component: "section",
      id: "what-is-kombucha",
      color: [{ color: "softGreen" }],
      items: [
        {
          component: "chapter-heading",
          title: `What is kombucha?`,
          varient: "h2",
        },
        {
          component: "center-image",
          alt: "large illustration",
          src: "/images/tea_leaves",
          supportedTypes: ["webp", "png"],
          size: "small",
          width: 571,
          height: 437,
        },
        {
          component: "heading",
          title: `KOMBUCHA IS COMUNITY`,
          varient: "h3",
        },
        {
          component: "paragraph",
          body: `Quite literally kombucha is fermented tea created by a
                            community of yeast and bacteria cultures working
                            symbiotically together. The yeast metabolize sugar
                            creating alcohol, and the acetobacter turn that alcohol
                            into acid. The finished product is bubbly, non-alcoholic,
                            and chocked full of good stuff like B vitamins,
                            organic acids, and antioxidants.`,
        },
        {
          component: "link",
          text: "I'm sold! Where to buy?",
          href: "/shop",
        },
      ],
    },
    {
      component: "section",
      id: "community",
      items: [
        {
          component: "large-image",
          alt: "large illustration",
          src: "/images/flowers",
          supportedTypes: ["webp", "jpg"],
          width: 1246,
          height: 651,
        },
        {
          component: "heading",
          title: `KOMBUCHA FOR A MORE VIBRANT COMMUNITY`,
          varient: "h2",
        },
        {
          component: "paragraph",
          body: `Our focus is brewing a craft product with positive environmental impacts. This means sourcing locally, collaborating with other small businesses, and selecting ingredients for their impact. For instance, our Nabij kombucha is brewed with wildflowers planted in the Dutch countryside specifically to benefit pollinators and other insects. We also work with circular ingredients, such as our orange hibiscus kombucha which uses upcycled residual streams from orange peels.`,
        },
        {
          component: "link",
          text: "Read more",
          href: "/about",
        },
        {
          component: "breakpoint",
          data: {
            mobile: {
              component: "large-image",
              alt: "large illustration",
              objectFit: "contain",
              src: "/images/bee_illustration",
              supportedTypes: ["webp", "png"],
              marginTop: "-10vw",
              width: 2006, // See why this is required https://www.youtube.com/watch?v=4-d_SoCHeWE and https://nextjs.org/docs/basic-features/image-optimization
              height: 1380,
            },
            desktop: {
              component: "large-image",
              alt: "large illustration",
              src: "/images/bees_illustration",
              supportedTypes: ["webp", "png"],
              width: 748,
              height: 334,
              marginTop: "-8vw",
            },
          },
        },
      ],
    },
    {
      component: "section",
      id: "we-are-a-local-brewery",
      items: [
        {
          component: "chapter-heading",
          title: `WE ARE A LOCAL BREWERY`,
          varient: "h2",
          color: "softPink",
        },

        {
          component: "center-image",
          alt: "large illustration",
          src: "/images/working_tanks",
          supportedTypes: ["webp", "jpg"],
          width: 556,
          height: 493,
        },
        {
          component: "paragraph",
          body: `<p>We are an Utrecht-based kombucha nanobrewery. We are incredibly grateful for our community that has enabled us to grow this far. From café owners that have given us a chance, to the people drinking our kombucha, and everyone in between. We wouldn’t be here today without them.</p>`,
        },
        {
          component: "link",
          text: "Read more",
          href: "/about",
        },
        {
          component: "breakpoint",
          data: {
            mobile: {
              component: "center-image",
              size: "small",
              alt: "large illustration",
              src: "/images/rain_illustration",
              supportedTypes: ["webp", "png"],
              width: 1388,
              height: 1388,
            },
            desktop: {
              component: "large-image",
              alt: "large illustration",
              src: "/images/plant_hands_illustration",
              supportedTypes: ["webp", "png"],
              width: 723,
              height: 345,
            },
          },
        },
      ],
    },
    {
      component: "section",
      id: "core-values",
      items: [
        {
          component: "chapter-heading",
          data: {
            title: `OUR CORE VALUES`,
            varient: "h2",
            color: "softOrange",
          },
        },
        {
          component: "rich-text",
          data: {
            body: `<p>We started Degrow lab to make an awesome local product,
                            to make a name for ourselves, to meet our community and
                            form bonds within it, to experiment, and to fail but try and
                            try again. We are small, so we are taking small steps. Make
                            kombucha with ingredients we care about, share it, and
                            build up our capacity to make a positive impact.</p>
                            
                            <p>Our name derives from the degrowth movement, which
                            is about using less resources while at the same time
                            increasing wellbeing. Pursuing prosperity over profit.
                            The name is a reminder to us that we want to operate
                            differently than the norm. We grow together, while
                            respecting the limits of our planet.</p>`,
          },
        },
        {
          component: "link",
          data: {
            text: "Read more",
            href: "/about",
          },
        },
      ],
    },
    {
      component: "heading",
      title: `DISCOVER OUR FLAVOURS`,
      varient: "h2",
    },
    {
      component: "discover-flavours",
    },
    {
      component: "section",
      id: "newsletter",
      color: [{ color: "softGreen" }],
      items: [
        {
          component: "chapter-heading",
          data: {
            title: "NEWSLETTER",
          },
        },
      ],
    },
  ],
};
