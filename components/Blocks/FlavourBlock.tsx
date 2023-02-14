import { media } from "@/styles/media";
import { spacing } from "@/styles/spacing";
import { FlavourType } from "@/types/CMS/Flavours";
import * as React from "react";
import styled from "styled-components";
import { IsDesktop } from "../Breakpoints/IsDesktop";
import { IsMobile } from "../Breakpoints/IsMobile";
import { Container } from "../Container";
import { Hr } from "../HR";
import { Picture } from "../Picture";
import { HeadingBlock } from "./HeadingBlock";
import { LinkBlock } from "./LinkBlock";
import { RichTextBlock } from "./RichTextBlock";
import { motion } from "framer-motion";
import { fontSize } from "@/styles/fontSize";
import { RichText } from "../RichText";

export interface FlavourBlockType extends FlavourType {
  headingVarient?: "h1" | "h2";
}

const PRODUCT_DESKTOP_WIDTH = "200px";
const PRODUCT_DESKTOP_PADDING = "100px";
const PRODUCT_DESKTOP_OFFSET_1 = -15;
const PRODUCT_DESKTOP_OFFSET_2 = 15;
const PRODUCT_DESKTOP_ROTATE_1 = 15;
const PRODUCT_DESKTOP_ROTATE_2 = -15;
const PRODUCT_DESKTOP_BETWEEN_MARGIN = spacing.xl;
const PRODUCT_DESKTOP_INTRO_OFFSET_X = 20;

const PRODUCT_MOBILE_WIDTH = "150px";
const PRODUCT_MOBILE_PADDING = "75px";
const PRODUCT_MOBILE_OFFSET_1 = -15;
const PRODUCT_MOBILE_OFFSET_2 = 15;
const PRODUCT_MOBILE_ROTATE_1 = 20;
const PRODUCT_MOBILE_ROTATE_2 = -20;
const PRODUCT_MOBILE_BETWEEN_MARGIN = spacing.m;

const MOBILE_FONT_SIZE = fontSize.articleMobile;
const DESKTOP_FONT_SIZE = fontSize.articleDesktop;

const DETAILS_MAX_WIDTH = "275px";

const ANIMATION_TRANSITION = { duration: 1, type: "tween" };

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
        transform: translateY(${PRODUCT_MOBILE_OFFSET_1}%) rotate(${PRODUCT_MOBILE_ROTATE_1}deg);
      }
      &:last-child img {
        transform: translateY(${PRODUCT_MOBILE_OFFSET_2}%) rotate(${PRODUCT_MOBILE_ROTATE_2}deg);
      }
      & img {
        width: ${PRODUCT_MOBILE_WIDTH};
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
      }
      &:last-child img {
        transform: translateY(${PRODUCT_DESKTOP_OFFSET_2}%) rotate(${PRODUCT_DESKTOP_ROTATE_2}deg);
      }
      & img {
        width: ${PRODUCT_DESKTOP_WIDTH};
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

export function FlavourBlock({
  title,
  detailPage: { titleDesktopPicture, titleMobilePicture, ingredients, nutrition, description },
  productPicture,
}: FlavourBlockType) {
  return (
    <>
      <TitleContainerStyled
        as={motion.div}
        transition={ANIMATION_TRANSITION}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {titleMobilePicture && titleDesktopPicture ? (
          <>
            <IsMobile>
              <Picture {...titleMobilePicture} />
            </IsMobile>
            <IsDesktop>
              <Picture {...titleDesktopPicture} />
            </IsDesktop>
          </>
        ) : (
          <HeadingBlock title={title} varient="h1" />
        )}
      </TitleContainerStyled>

      <FlavourProductContainerStyled>
        <ProductLeftContainerStyled
          transition={ANIMATION_TRANSITION}
          initial={{ opacity: 0, transform: `translateX(-${PRODUCT_DESKTOP_INTRO_OFFSET_X}%) rotate(0deg)` }}
          whileInView={{ opacity: 1, transform: `translateX(0%) rotate(${PRODUCT_DESKTOP_ROTATE_1}deg)` }}
          viewport={{ once: true }}
        >
          <Picture {...productPicture} />
        </ProductLeftContainerStyled>
        <ProductRightContainerStyled
          transition={ANIMATION_TRANSITION}
          initial={{ opacity: 0, transform: `translateX(${PRODUCT_DESKTOP_INTRO_OFFSET_X}%) rotate(0deg)` }}
          whileInView={{ opacity: 1, transform: `translateX(0%) rotate(${PRODUCT_DESKTOP_ROTATE_2}deg)` }}
          viewport={{ once: true }}
        >
          <Picture {...productPicture} />
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
      <Container>
        <Hr />
      </Container>
    </>
  );
}
