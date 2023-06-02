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
import { motion } from "framer-motion";
import { fontSize } from "@/styles/fontSize";
import { RichText } from "../RichText";
import { ColorVarientType } from "@/types/CMS/Generic";
import { color as colors } from "@/styles/color";
import { StoryBlokRichText } from "@/types/CMS/StoryBlok";
import { StoryblokPicture, StoryblokPictureProps } from "../StoryblokPicture";

export interface FlavourBlockType {
  headingVarient?: "h1" | "h2";
  color?: ColorVarientType;
  gradient?: [ColorVarientType, ColorVarientType, ColorVarientType];
  listItem?: boolean;
  title: string;
  description: string;
  ingredients: StoryBlokRichText;
  nutrition: StoryBlokRichText;
  isCollaboration: boolean;
  picture: [StoryblokPictureProps];
}

const PRODUCT_DESKTOP_PRODUCT_1_WIDTH = "210px";
const PRODUCT_DESKTOP_PRODUCT_2_WIDTH = "250px";
const PRODUCT_DESKTOP_PADDING = "70px";
const PRODUCT_DESKTOP_OFFSET_1 = -7.5;
const PRODUCT_DESKTOP_OFFSET_2 = 7.5;
const PRODUCT_DESKTOP_ROTATE_1 = 12;
const PRODUCT_DESKTOP_ROTATE_2 = -12;
const PRODUCT_DESKTOP_BETWEEN_MARGIN = spacing.xl;

const PRODUCT_INTRO_OFFSET_X = 50;

const PRODUCT_MOBILE_PRODUCT_1_WIDTH = "150px";
const PRODUCT_MOBILE_PRODUCT_2_WIDTH = "200px";
const PRODUCT_MOBILE_PADDING = "50px";
const PRODUCT_MOBILE_OFFSET_1 = -12;
const PRODUCT_MOBILE_OFFSET_2 = 12;
const PRODUCT_MOBILE_ROTATE_1 = 6;
const PRODUCT_MOBILE_ROTATE_2 = -6;
const PRODUCT_MOBILE_BETWEEN_MARGIN = spacing.s;

const MOBILE_FONT_SIZE = fontSize.articleMobile;
const DESKTOP_FONT_SIZE = fontSize.articleDesktop;

const DETAILS_MAX_WIDTH = "275px";

const ANIMATION_TRANSITION = { duration: 1.5, type: "spring" };

const TitleContainerStyled = styled(Container)``;

const FlavourProductContainerStyled = styled(Container)`
  overflow: hidden;
  display: flex;
  justify-content: center;
  @media ${media.mobile} {
    padding: ${PRODUCT_MOBILE_PADDING} 0;
    margin-bottom: ${spacing.m};
    & div {
      &:first-child img {
        /* transform: translateY(${PRODUCT_MOBILE_OFFSET_1}%) rotate(${PRODUCT_MOBILE_ROTATE_1}deg); */
        width: ${PRODUCT_MOBILE_PRODUCT_1_WIDTH};
      }
      &:last-child img {
        /* transform: translateY(${PRODUCT_MOBILE_OFFSET_2}%) rotate(${PRODUCT_MOBILE_ROTATE_2}deg); */
        width: ${PRODUCT_MOBILE_PRODUCT_2_WIDTH};
      }
      & img {
        margin: 0 ${PRODUCT_MOBILE_BETWEEN_MARGIN};
      }
    }
  }
  @media ${media.desktop} {
    padding: ${PRODUCT_DESKTOP_PADDING} 0;
    margin-bottom: ${spacing.l};
    & div {
      &:first-child img {
        transform: translateY(${PRODUCT_DESKTOP_OFFSET_1}%) rotate(${PRODUCT_DESKTOP_ROTATE_1}deg);
        width: ${PRODUCT_DESKTOP_PRODUCT_1_WIDTH};
      }
      &:last-child img {
        transform: translateY(${PRODUCT_DESKTOP_OFFSET_2}%) rotate(${PRODUCT_DESKTOP_ROTATE_2}deg);
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
}: FlavourBlockType) {
  return (
    <FlavourStyled
      $gradient={gradient !== undefined ? [colors[gradient[0]], colors[gradient[1]], colors[gradient[2]]] : undefined}
      $color={color !== undefined ? colors[color] : undefined}
    >
      <TitleContainerStyled
        as={motion.div}
        transition={ANIMATION_TRANSITION}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {false ? (
          <>
            {/* <IsMobile>
              <StoryblokPicture {...picture} resizeWidth={250} resizeHeight={600} supportedTypes={["webp", "png"]} />
            </IsMobile>
            <IsDesktop>
              <StoryblokPicture {...picture} resizeWidth={250} resizeHeight={600} supportedTypes={["webp", "png"]} />
            </IsDesktop> */}
          </>
        ) : (
          <HeadingBlock title={title} varient="h1" />
        )}
      </TitleContainerStyled>

      <FlavourProductContainerStyled>
        <ProductLeftContainerStyled
          transition={{ ...ANIMATION_TRANSITION, delay: 0 }}
          initial={{ opacity: 0, transform: `translateX(-${PRODUCT_INTRO_OFFSET_X}%) rotate(0deg)` }}
          whileInView={{ opacity: 0.9, transform: `translateX(0%) rotate(${PRODUCT_DESKTOP_ROTATE_1}deg)` }}
          viewport={{ once: true }}
        >
          <StoryblokPicture
            {...picture[0]}
            resizeWidth={250}
            resizeHeight={500}
            objectFit={"contain"}
            supportedTypes={["webp", "png"]}
          />
        </ProductLeftContainerStyled>
        <ProductRightContainerStyled
          transition={{ ...ANIMATION_TRANSITION, delay: 0.1 }}
          initial={{ opacity: 0, transform: `translateX(${PRODUCT_INTRO_OFFSET_X}%) rotate(0deg)` }}
          whileInView={{ opacity: 1, transform: `translateX(0%) rotate(${PRODUCT_DESKTOP_ROTATE_2}deg)` }}
          viewport={{ once: true }}
        >
          <StoryblokPicture
            {...picture[0]}
            resizeWidth={250}
            resizeHeight={500}
            objectFit={"contain"}
            supportedTypes={["webp", "png"]}
          />
        </ProductRightContainerStyled>
      </FlavourProductContainerStyled>
      <RichTextBlock body={description} />
      <LinkBlock href={`/find-us`} text="Where to buy?" />
      <Container>
        <Hr />
      </Container>
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
      {!listItem && (
        <Container>
          <Hr />
        </Container>
      )}
    </FlavourStyled>
  );
}
