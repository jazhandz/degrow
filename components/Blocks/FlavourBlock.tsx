import { media } from "@/styles/media";
import { spacing } from "@/styles/spacing";
import * as React from "react";
import styled from "styled-components";
import { IsDesktop } from "../Breakpoints/IsDesktop";
import { IsMobile } from "../Breakpoints/IsMobile";
import { Container } from "../Container";
import { Hr } from "../HR";
import { HeadingBlock } from "./HeadingBlock";
import { LinkBlock } from "./LinkBlock";
import { RichTextBlock } from "./RichTextBlock";
import { easeInOut, motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { fontSize } from "@/styles/fontSize";
import { RichText } from "../RichText";
import { ColorDataType } from "@/types/CMS/Generic";
import { color as colors } from "@/styles/color";
import { StoryBlokRichText } from "@/types/CMS/StoryBlok";
import { StoryblokPicture, StoryblokPictureProps } from "../StoryblokPicture";
import { useIsMobile } from "@/hooks/use-is-mobile";

export interface FlavourBlockType {
  headingVarient?: "h1" | "h2";
  color?: [ColorDataType];
  gradient?: [ColorDataType, ColorDataType, ColorDataType];
  listItem?: boolean;
  title: string;
  description: string;
  ingredients: StoryBlokRichText;
  nutrition: StoryBlokRichText;
  isCollaboration: boolean;
  picture: [StoryblokPictureProps];
  headerMobilePicture: [] | [StoryblokPictureProps];
  headerDesktopPicture: [] | [StoryblokPictureProps];
}

const CONTAINER_DESKTOP_OVERFLOW = "-80px";
const CONTAINER_MOBILE_OVERFLOW = "-60px";

const PRODUCT_DESKTOP_PRODUCT_1_WIDTH = "210px";
const PRODUCT_DESKTOP_PRODUCT_2_WIDTH = "250px";
const PRODUCT_DESKTOP_PADDING = "120px";
const PRODUCT_DESKTOP_OFFSET_1 = -7.5;
const PRODUCT_DESKTOP_OFFSET_2 = 7.5;
const PRODUCT_DESKTOP_ROTATE_1 = 24;
const PRODUCT_DESKTOP_ROTATE_2 = -24;
const PRODUCT_DESKTOP_BETWEEN_MARGIN = spacing.xl;

const PRODUCT_INTRO_OFFSET_X = 50;
const PRODUCT_1_OFFSET_X = 5;
const PRODUCT_2_OFFSET_X = -5;
const PRODUCT_1_SCALE = 0.8;
const PRODUCT_2_SCALE = 1;

const PRODUCT_MOBILE_PRODUCT_1_WIDTH = "150px";
const PRODUCT_MOBILE_PRODUCT_2_WIDTH = "200px";
const PRODUCT_MOBILE_PADDING = "80px";
const PRODUCT_MOBILE_OFFSET_1 = -24;
const PRODUCT_MOBILE_OFFSET_2 = 24;
const PRODUCT_MOBILE_ROTATE_1 = 6;
const PRODUCT_MOBILE_ROTATE_2 = -6;
const PRODUCT_MOBILE_BETWEEN_MARGIN = spacing.s;

const MOBILE_FONT_SIZE = fontSize.articleMobile;
const DESKTOP_FONT_SIZE = fontSize.articleDesktop;

const DETAILS_MAX_WIDTH = "275px";

const ANIMATION_TRANSITION = { duration: 1.5, type: "spring" };

const TitleContainerStyled = styled(Container)`
  max-height: 300px;
`;

const FlavourProductContainerStyled = styled(Container)`
  overflow: hidden;
  display: flex;
  justify-content: center;
  margin-left: 0;
  margin-right: 0;
  max-width: 100%;
  @media ${media.mobile} {
    padding: ${PRODUCT_MOBILE_PADDING} 0;
    margin-top: ${CONTAINER_MOBILE_OVERFLOW};
    margin-bottom: calc(${CONTAINER_MOBILE_OVERFLOW});
    & div {
      &:first-child img {
        /* transform: translateY(${PRODUCT_MOBILE_OFFSET_1}%); */
        width: ${PRODUCT_MOBILE_PRODUCT_1_WIDTH};
      }
      &:last-child img {
        /* transform: translateY(${PRODUCT_MOBILE_OFFSET_2}%); */
        width: ${PRODUCT_MOBILE_PRODUCT_2_WIDTH};
      }
      & img {
        margin: 0 ${PRODUCT_MOBILE_BETWEEN_MARGIN};
      }
    }
  }
  @media ${media.desktop} {
    padding: ${PRODUCT_DESKTOP_PADDING} 0;
    margin-top: ${CONTAINER_DESKTOP_OVERFLOW};
    margin-bottom: calc(${CONTAINER_DESKTOP_OVERFLOW});
    & div {
      &:first-child img {
        width: ${PRODUCT_DESKTOP_PRODUCT_1_WIDTH};
      }
      &:last-child img {
        width: ${PRODUCT_DESKTOP_PRODUCT_2_WIDTH};
      }
      & img {
        margin: 0 ${PRODUCT_DESKTOP_BETWEEN_MARGIN};
      }
    }
  }
`;

const ProductLeftContainerStyled = styled(motion.div)``;

const ProductRightContainerStyled = styled(motion.div)``;

const ProductDetailsStyled = styled(Container)`
  @media ${media.mobile} {
    margin: ${spacing.xl} auto;
  }
  @media ${media.desktop} {
    margin-top: ${spacing.xl};
    margin-bottom: ${spacing.xl};
    display: flex;
    justify-content: space-around;
  }
`;

const ProductDataLabelStyled = styled.dl`
  @media ${media.mobile} {
    margin: ${spacing.xl} auto;
  }
  text-align: center;
  max-width: ${DETAILS_MAX_WIDTH};
`;

const ProductDetailTypeStyled = styled.dt`
  width: 100%;
  margin-bottom: ${spacing.m};
  @media ${media.mobile} {
    font-size: ${fontSize.displayMobile};
  }
  @media ${media.desktop} {
    font-size: ${fontSize.displayDesktop};
  }
`;

const ProductDetailDataStyled = styled.dd`
  width: 100%;
  margin: 0;
  @media ${media.mobile} {
    font-size: ${MOBILE_FONT_SIZE};
  }
  @media ${media.desktop} {
    font-size: ${DESKTOP_FONT_SIZE};
  }
`;

const FlavourStyled = styled.div`
  ${({ $color, $gradient }: { $color?: string; $gradient?: [string, string, string] }) =>
    $gradient !== undefined
      ? `background-image: linear-gradient(180deg, ${$gradient[0]} 0%, ${$gradient[1]} 49%, ${$gradient[2]} 100%);`
      : $color !== undefined
      ? `background-color: ${$color};`
      : ""}
  display: inline-block;
  width: 100%;
  hr {
    margin: 0 ${spacing.m};
  }
`;

export function FlavourBlock({
  title,
  description,
  ingredients,
  nutrition,
  picture,
  color,
  gradient,
  listItem,
  headerMobilePicture,
  headerDesktopPicture,
}: FlavourBlockType) {
  const isMobile = useIsMobile();
  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [-40, 40], { ease: easeInOut });
  const y2 = useTransform(scrollYProgress, [0, 1], [-70, 80], { ease: easeInOut });

  const r1 = useTransform(scrollYProgress, [0, 1], [-5, 5], { ease: easeInOut });
  const r2 = useTransform(scrollYProgress, [0, 1], [7, -7], { ease: easeInOut });

  return (
    <FlavourStyled
      ref={ref}
      $gradient={
        gradient !== undefined && gradient.length > 0
          ? [colors[gradient[0].color], colors[gradient[1].color], colors[gradient[2].color]]
          : undefined
      }
      $color={color !== undefined && color.length > 0 ? colors[color[0].color] : undefined}
    >
      <TitleContainerStyled
        as={motion.div}
        transition={ANIMATION_TRANSITION}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {headerMobilePicture[0] && headerDesktopPicture[0] ? (
          <>
            {isMobile ? (
              <StoryblokPicture
                {...headerMobilePicture[0]}
                resizeWidth={600}
                resizeHeight={0}
                objectFit="contain"
                supportedTypes={["webp", "png"]}
              />
            ) : (
              <>
                <StoryblokPicture
                  {...headerDesktopPicture[0]}
                  resizeWidth={600}
                  resizeHeight={0}
                  objectFit="contain"
                  supportedTypes={["webp", "png"]}
                />
              </>
            )}
          </>
        ) : (
          <HeadingBlock title={title} varient="h1" />
        )}
      </TitleContainerStyled>

      <FlavourProductContainerStyled>
        <ProductLeftContainerStyled style={{ y: y1, x: 0, rotate: r1 }}>
          <motion.div
            transition={{ ...ANIMATION_TRANSITION, delay: 0 }}
            viewport={{ once: true }}
            initial={{
              opacity: 0,
              transform: `scale(${PRODUCT_1_SCALE}) translateX(-${PRODUCT_INTRO_OFFSET_X}%) rotate(0deg)`,
            }}
            whileInView={{
              opacity: 0.8,
              transform: `scale(${PRODUCT_1_SCALE}) translateX(${PRODUCT_1_OFFSET_X}%) rotate(${PRODUCT_DESKTOP_ROTATE_1}deg)`,
            }}
          >
            <StoryblokPicture
              {...picture[0]}
              resizeWidth={250}
              resizeHeight={500}
              objectFit={"contain"}
              supportedTypes={["webp", "png"]}
            />
          </motion.div>
        </ProductLeftContainerStyled>
        <ProductRightContainerStyled style={{ y: y2, x: 0, rotate: r2 }}>
          <motion.div
            transition={{ ...ANIMATION_TRANSITION, delay: 0.1 }}
            initial={{
              opacity: 0,
              transform: `scale(${PRODUCT_2_SCALE}) translateX(${PRODUCT_INTRO_OFFSET_X}%) rotate(0deg)`,
            }}
            whileInView={{
              opacity: 1,
              transform: `scale(${PRODUCT_2_SCALE}) translateX(${PRODUCT_2_OFFSET_X}%) rotate(${PRODUCT_DESKTOP_ROTATE_2}deg)`,
            }}
            viewport={{ once: true }}
          >
            <StoryblokPicture
              {...picture[0]}
              resizeWidth={250}
              resizeHeight={500}
              objectFit={"contain"}
              supportedTypes={["webp", "png"]}
            />
          </motion.div>
        </ProductRightContainerStyled>
      </FlavourProductContainerStyled>
      <RichTextBlock body={description} />
      <LinkBlock href={`/find-us`} text="Where to buy?" />
      <Hr />
      <ProductDetailsStyled>
        <ProductDataLabelStyled>
          <ProductDetailTypeStyled>Ingrediënten</ProductDetailTypeStyled>
          <ProductDetailDataStyled>
            <RichText>{ingredients}</RichText>
          </ProductDetailDataStyled>
        </ProductDataLabelStyled>
        <ProductDataLabelStyled>
          <ProductDetailTypeStyled>Voedingswaarde*</ProductDetailTypeStyled>
          <ProductDetailDataStyled>
            <RichText>{nutrition}</RichText>
          </ProductDetailDataStyled>
        </ProductDataLabelStyled>
      </ProductDetailsStyled>
      {!listItem && <Hr />}
    </FlavourStyled>
  );
}
