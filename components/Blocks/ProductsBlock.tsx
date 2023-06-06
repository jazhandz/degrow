import { fontSize } from "@/styles/fontSize";
import { media } from "@/styles/media";
import { spacing } from "@/styles/spacing";
import { StoryBlokRichText } from "@/types/CMS/StoryBlok";
import * as React from "react";
import styled from "styled-components";
import { Container } from "../Container";
import { Hr } from "../HR";
import { Picture, PictureProps } from "../Picture";
import { RichText } from "../RichText";
import { StoryblokPicture, StoryblokPictureProps } from "../StoryblokPicture";
import { UploadCarePicture, UploadCarePictureProps } from "../UploadCarePicture";

export interface ProductsBlockType extends PictureProps {
  products: [{ content: ProductType; id: string }];
}

interface ProductType {
  uid: string;
  picture: [StoryblokPictureProps];
  title: StoryBlokRichText;
  details: StoryBlokRichText;
  whereToBuy: string;
  price: string;
}

const MOBILE_FONT_SIZE = fontSize.articleMobile;
const DESKTOP_FONT_SIZE = fontSize.articleDesktop;

const RESIZE_WIDTH = 500;
const RESIZE_HEIGHT = 500;

const IMAGE_DESKTOP_SIZE = "800px";

const IMAGE_MOBILE_SIZE = "100%";

const ProductsBlockImageStyled = styled(Container)`
  height: auto;
  display: block;
  position: relative;
  width: 100%;
  @media ${media.mobile} {
    padding-left: ${spacing.m};
    padding-right: ${spacing.m};
  }
  @media ${media.desktop} {
  }
`;

const ProductInfoStyled = styled.dl`
  font-weight: 400;
  @media ${media.mobile} {
    font-size: ${MOBILE_FONT_SIZE};
  }
  @media ${media.desktop} {
    font-size: ${DESKTOP_FONT_SIZE};
  }
`;

const ProductInfoRowStyled = styled.div`
  margin: ${spacing.m} 0;
  & > * {
    display: inline-block;
    width: 50%;
    margin: 0;
    padding: 0;
    vertical-align: top;
    & * {
      padding: 0;
      margin: 0;
    }
    @media ${media.mobile} {
      &:last-child {
        text-align: right;
      }
    }
    @media ${media.desktop} {
    }
  }
`;

const ProductInfoTypeStyled = styled.dt`
  margin-bottom: ${spacing.xs};
`;

const ProductInfoDataStyled = styled.dd``;

const ProductContainerStyled = styled(Container)`
  margin: ${spacing.xl} auto;
  @media ${media.mobile} {
    width: ${IMAGE_MOBILE_SIZE};
    padding-left: 0;
    padding-right: 0;
  }
  @media ${media.desktop} {
    width: ${IMAGE_DESKTOP_SIZE};
  }
  & picture {
    width: 100%;
    height: 100%;
  }
`;

export function ProductsBlock({ products }: ProductsBlockType) {
  console.log("products:", products);
  return (
    <ProductsBlockImageStyled maxWidth={["1024px", "1024px"]}>
      {products.map((product, index) => (
        <React.Fragment key={product.id}>
          <ProductContainerStyled as="article">
            <StoryblokPicture
              {...product.content.picture?.[0]}
              supportedTypes={["webp", "png"]}
              resizeWidth={RESIZE_WIDTH}
              resizeHeight={RESIZE_HEIGHT}
            />
            {/* <Picture {...product.content.picture} /> */}
            <ProductInfoRowStyled>
              <ProductInfoStyled as="h3">
                <RichText>{product.content.title}</RichText>
              </ProductInfoStyled>
              <ProductInfoStyled>
                <ProductInfoTypeStyled>Where to buy:</ProductInfoTypeStyled>
                <ProductInfoDataStyled>
                  <RichText>{product.content.whereToBuy}</RichText>
                </ProductInfoDataStyled>
              </ProductInfoStyled>
            </ProductInfoRowStyled>
            <ProductInfoRowStyled>
              <ProductInfoStyled>
                <ProductInfoTypeStyled>Details:</ProductInfoTypeStyled>
                <ProductInfoDataStyled>
                  <RichText>{product.content.details}</RichText>
                </ProductInfoDataStyled>
              </ProductInfoStyled>
              <ProductInfoStyled>
                {parseInt(product.content.price) > 0 ? "€" : ""}
                <data value={product.content.price}>
                  {parseInt(product.content.price) > 0 ? product.content.price : "Free"}
                </data>
              </ProductInfoStyled>
            </ProductInfoRowStyled>
          </ProductContainerStyled>
          {index !== products.length - 1 && <Hr />}
        </React.Fragment>
      ))}
    </ProductsBlockImageStyled>
  );
}
