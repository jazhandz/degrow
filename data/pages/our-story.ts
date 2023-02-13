import { PageType } from "@/types/CMS/Page";

export const OUR_STORY_PAGE_DATA: PageType = {
  items: [
    {
      type: "section",
      data: {
        id: "team",
        gradient: ["softGreen", "softBlue", "softPink"],
        items: [
          {
            type: "rich-text",
            data: {
              body: "Jaz here, reminiscing on the story of Degrow lab. Quite simply it started as a shared feeling of discontentment with our ‘day jobs’, shared between me, Ciaran Raymer, and Tom Peek.",
            },
          },
          {
            type: "center-image",
            data: {
              alt: "large illustration",
              src: "/images/flowers",
              supportedTypes: ["webp", "jpg"],
              width: 1246,
              height: 651,
            },
          },
          {
            type: "article",
            data: {
              body: `
              <p>All three of us were about a year out of our Sustainable Development masters, and the reality of the job market in our field didn’t quite match our ambitions/expectations. For myself, I spent most of the day behind a computer screen, not directly doing anything for environment, which is where my passions lie… and then the pandemic happened.</p>
              <p>On the very first day of lockdowns, I purchased a SCOBY from Le Petit Heron. I then settled into the rhythm of working from home, social isolation, and all the stir-crazy desperation that accompanied it. Brewing kombucha gave me something to do, to focus on. Bottling day gave me something to look forward to in the otherwise mundaneness of being stuck at home. Fermentation was a whole new world to explore in my kitchen, and as I continued to become further obsessed brew after brew, I felt more and more disconnected with my job as a consultant. Eventually this equilibrium was punctured. I remember the exact moment; I stayed up late furiously writing the plan for degrow lab. The next day I had a PowerPoint presentation and a powerful sense of hope.</p>`,
            },
          },
          {
            type: "rich-text",
            data: {
              body: "I took this presentation to both my friends Tom and Ciaran. I’m not exactly sure how I managed to convince them to join me but convince them I did. With renewed confidence the three of us started degrow lab together, found a café to host our fledgling operations and grew the business from seed to sprout.",
            },
          },
          {
            type: "breakpoint",
            data: {
              mobile: {
                type: "large-image",
                data: {
                  alt: "large illustration",
                  objectFit: "contain",
                  src: "/images/bee_illustration",
                  supportedTypes: ["webp", "png"],
                  marginTop: "-10vw",
                  width: 2006, // See why this is required https://www.youtube.com/watch?v=4-d_SoCHeWE and https://nextjs.org/docs/basic-features/image-optimization
                  height: 1380,
                },
              },
              desktop: {
                type: "large-image",
                data: {
                  alt: "large illustration",
                  src: "/images/bees_illustration",
                  supportedTypes: ["webp", "png"],
                  width: 748,
                  height: 334,
                  marginTop: "-8vw",
                },
              },
            },
          },
          {
            type: "article",
            data: {
              body: `
              <p>This journey has been an emotional roller coaster of extreme highs and lows. Despite lockdowns, failed batches, rejection, and losing both Ciaran and Tom to other endeavors, degrow lab’s sprout has continued to grow deeper roots. I could not have started the company without both Tom and Ciaran, and I could not have continued it without the partners that have joined since.</p>
              <p>Lilly Mengyao joined in 2021. Another friend from Uni days, Lilly and I share a passion for entrepreneurship and personal growth. Lilly also happens to be a financial wizard and has brought with her a level of professionalism and business acumen that we didn’t have before. She’s also a wonderful mix of being both critical and optimistic at the same time. “Numbers don’t lie” – Lilly.</p>
              <p>In 2022, we were sorely missing someone with a technical and scientific background. In terms of production, I was approaching the limit of what I could manage alone. Like a techno-angle answering my prayers, incomes Gabriël Bijleveld. A friend of Tom’s through climbing, we worked with Gabriël multiple times as a handy man. One day after a climbing session, Gabriël began explaining how I could improve production by designing special tanks—classic Gabriël, he sees a problem and then obsesses on engineering a solution to it. A few weeks later I called him asked him to join.</p>
              <p>And then we were three. Lilly reworked all our financial planning and charted us a path forward to succeed as a company. Gabriël revolutionized our production process, and together with his dad, Casper, built our little brewery. By the second half of 2022 we had refined our product and hit strides in producing it, but we were still lacking in the sales department. My technique was to frequent a place, become a regular, befriend the owner and then casually mention I had tasty kombucha. Not exactly scalable. I knew we needed a strong lead for sales, but we didn’t know anyone in our network that could fill this role. That was until, by chance, I met Tom Sifrin. Tom’s a fellow kombucha aficionado and was the single owner/operator of Beeyoutea kombucha. After meeting up we immediately hit it off, and I offered Tom any assistance he might need in his brewing operations (degrowth theory champions collaboration instead of the typical competition that defines capitalism). To my surprise and elation, Tom offered we join forces. His passion for marketing and sales merging with our ever-scaling operational knowhow. By the end of 22 we had an all-star team assembled.</p>`,
            },
          },
          {
            type: "rich-text",
            data: {
              body: `Here we are now, growing in our ability to make a product worthy of our ideals and our customers pallet.<br/><br/>To be continued…<br/><br/>`,
            },
          },
        ],
      },
    },
  ],
};
