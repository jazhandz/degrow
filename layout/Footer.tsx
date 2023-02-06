import { RichText } from "@/components/RichText";
import { Constants, Theme } from "@/constants";
import { color } from "@/styles/color";
import { fontFamily } from "@/styles/fontFamily";
import { fontSize } from "@/styles/fontSize";
import { fontWeight } from "@/styles/fontWeight";
import { media } from "@/styles/media";
import { spacing } from "@/styles/spacing";
import { FooterType } from "@/types/CMS/Footer";
import Link from "next/link";
import * as React from "react";
import styled from "styled-components";

const MIN_HEIGHT = "100px";

const FooterStyled = styled.footer`
  background-color: ${color.deepBlue};
  color: ${color.white};
  position: relative;
  overflow: hidden;
  @media ${media.mobile} {
    flex-direction: column;
  }
  @media ${media.desktop} {
    flex-direction: row;
  }
  display: flex;
`;

const FooterHeadingStyled = styled.div`
  margin: ${spacing.l} ${spacing.m};
  font-size: 40px;
  @media ${media.mobile} {
    width: 100%;
  }
  @media ${media.desktop} {
    min-height: 100%;
    width: 50%;
    display: inline-block;
    flex: 1;
  }
`

const FooterContentStyled = styled.div`
  @media ${media.mobile} {
    width: 100%;
    display: grid;
  }
  @media ${media.desktop} {
    width: 100%;
    display: inline-grid;
    flex: 1;
  }
  min-height: ${MIN_HEIGHT};
  grid-template-columns: auto;
  grid-template-rows: 1fr auto;
  grid-template-areas: 
    "contact other"
    "links note";
  margin: ${spacing.l} ${spacing.m};
  grid-gap: ${spacing.l};
    & h2{
      font-size: ${fontSize.display};
      font-weight: ${fontWeight.thin};
      text-decoration: underline;
      margin: 0;
    }
    & a, *{
      line-height: 30px;
      font-size: ${fontSize.display};
      font-weight: ${fontWeight.thin};
    }
`;

const FooterGridContactStyled = styled.section`
  grid-area: contact;
`

const FooterGridOtherStyled = styled.nav`
  grid-area: other;
`

const FooterGridLinksStyled = styled.section`
  grid-area: links;
`

const FooterGridNoteStyled = styled.div`
  grid-area: note;
  display: flex;
  align-items: flex-end;
`

const LinkStyled = styled.a`
  text-decoration: none;
  :hover {
    @media ${Constants.media.desktop} {
      color: ${color.lightGreen};
    }
  }
`;

interface FooterProps {
  data: FooterType;
}

export default function FooterComponent({ data }: FooterProps) {
  return (
    <FooterStyled>
      <FooterHeadingStyled>
        {data.title}
      </FooterHeadingStyled>
      <FooterContentStyled>
        
          <FooterGridContactStyled>
            <h2>{data.contact.title}</h2>

            <RichText>{data.contact.body}</RichText>
          </FooterGridContactStyled>
          
          <FooterGridOtherStyled>
            <h2>{data.navigation.title}</h2>
            {data.navigation.links.map((link) => (
              <React.Fragment key={`nav_${link.path}`}>
              <LinkStyled href={link.path}>
                {link.label}
              </LinkStyled>
              <br/>
              </React.Fragment>
          ))}
          </FooterGridOtherStyled>
          <FooterGridLinksStyled>
          {data.links.map((link) => (
            <React.Fragment key={`nav_${link.path}`}>
              <LinkStyled target="blank"  href={link.path}>
                {link.label}
              </LinkStyled>
              <br/>
              </React.Fragment>
          ))}
          </FooterGridLinksStyled>
          <FooterGridNoteStyled>
          © 2023
          </FooterGridNoteStyled>
      </FooterContentStyled>
    </FooterStyled>
  );
}
