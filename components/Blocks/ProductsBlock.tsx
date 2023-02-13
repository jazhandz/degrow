import { fontSize } from "@/styles/fontSize";
import { media } from "@/styles/media";
import { spacing } from "@/styles/spacing";
import * as React from "react";
import styled from "styled-components";
import { Container } from "../Container";
import { Hr } from "../HR";
import { Picture, PictureProps } from "../Picture";
import { RichText } from "../RichText";

export interface ProductsBlockType extends PictureProps {
  products: ProductType[];
}

interface ProductType {
  picture: PictureProps;
  title: string;
  details: string;
  whereToBuy: string;
  price: number;
}

const MOBILE_FONT_SIZE = fontSize.articleMobile;
const DESKTOP_FONT_SIZE = fontSize.articleDesktop;

const IMAGE_DESKTOP_SIZE = "800px";

const IMAGE_MOBILE_SIZE = "100%";

const ProductsBlockImageStyled = styled(Container)`
  height: auto;
  display: block;
  position: relative;
  width: 100%;
`;

const ProductInfoStyled = styled.dl`
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
  return (
    <ProductsBlockImageStyled maxWidth={["1024px", "1024px"]}>
      {products.map((product, index) => (
        <React.Fragment key={product.title}>
          <ProductContainerStyled as="article">
            <Picture {...product.picture} />
            <ProductInfoRowStyled>
              <ProductInfoStyled as="h3">{product.title}</ProductInfoStyled>
              <ProductInfoStyled>
                <ProductInfoTypeStyled>Where to buy:</ProductInfoTypeStyled>
                <ProductInfoDataStyled>{product.whereToBuy}</ProductInfoDataStyled>
              </ProductInfoStyled>
            </ProductInfoRowStyled>
            <ProductInfoRowStyled>
              <ProductInfoStyled>
                <ProductInfoTypeStyled>Details:</ProductInfoTypeStyled>
                <ProductInfoDataStyled>
                  <RichText>{product.details}</RichText>
                </ProductInfoDataStyled>
              </ProductInfoStyled>
              <ProductInfoStyled>
                {product.price > 0 ? "€" : ""}
                <data value={product.price}>{product.price > 0 ? product.price : "Free"}</data>
              </ProductInfoStyled>
            </ProductInfoRowStyled>
          </ProductContainerStyled>
          {index !== products.length - 1 && <Hr />}
        </React.Fragment>
      ))}
    </ProductsBlockImageStyled>
  );
}
