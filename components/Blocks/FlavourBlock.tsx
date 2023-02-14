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

export interface FlavourBlockType extends FlavourType {
  headingVarient?: "h1" | "h2";
}

const PRODUCT_DESKTOP_WIDTH = "200px";
const PRODUCT_DESKTOP_PADDING = "100px";
const PRODUCT_DESKTOP_OFFSET_1 = -15;
const PRODUCT_DESKTOP_OFFSET_2 = 15;
const PRODUCT_DESKTOP_ROTATE_1 = 20;
const PRODUCT_DESKTOP_ROTATE_2 = -20;
const PRODUCT_DESKTOP_BETWEEN_MARGIN = spacing.xl;
const PRODUCT_DESKTOP_INTRO_OFFSET_X = 20;

const PRODUCT_MOBILE_WIDTH = "150px";
const PRODUCT_MOBILE_PADDING = "75px";
const PRODUCT_MOBILE_OFFSET_1 = -15;
const PRODUCT_MOBILE_OFFSET_2 = 15;
const PRODUCT_MOBILE_ROTATE_1 = 20;
const PRODUCT_MOBILE_ROTATE_2 = -20;
const PRODUCT_MOBILE_BETWEEN_MARGIN = spacing.m;

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

export function FlavourBlock({
  id,
  title,
  detailPage: { titleDesktopPicture, titleMobilePicture, ingredients, nutrition, description },
  productPicture,
}: FlavourBlockType) {
  console.log("render:", id);
  return (
    <>
      <TitleContainerStyled as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
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
          initial={{ opacity: 0, transform: `translateX(-${PRODUCT_DESKTOP_INTRO_OFFSET_X}%)` }}
          whileInView={{ opacity: 1, transform: `translateX(0%)` }}
          viewport={{ once: true }}
        >
          <Picture {...productPicture} />
        </ProductLeftContainerStyled>
        <ProductRightContainerStyled
          transition={ANIMATION_TRANSITION}
          initial={{ opacity: 0, transform: `translateX(${PRODUCT_DESKTOP_INTRO_OFFSET_X}%)` }}
          whileInView={{ opacity: 1, transform: `translateX(0%)` }}
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
    </>
  );
}
