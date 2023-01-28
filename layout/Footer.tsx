import { Constants, Theme } from "@/constants";
import { FooterType } from "@/types/CMS/Footer";
import Link from "next/link";
import * as React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  border-top: 1px solid ${Theme.palette.lightGrey};
  display: flex;
  flex-direction: column;
`;
const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  min-height: 150px;
  padding: 24px 0px;
`;
const FooterNote = styled.div`
  border-top: 1px solid ${Theme.palette.lightGrey};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;
const FooterNoteText = styled.div`
  color: ${Theme.palette.text.subText};
  font-size: 12px;
  white-space: nowrap;
`;
const FooterNavigationList = styled.ul`
  min-width: 150px;
  display: inline-block;
  vertical-align: top;
  padding-bottom: 24px;
  list-style-type: none;
`;
const FooterNavigationItem = styled.li`
  text-decoration: none;
  & > a {
    height: 40px;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 18px;
    color: ${Theme.palette.text.subText};
    transition: color 0.2s ease;
  }
  a:hover {
    @media ${Constants.media.desktop} {
      color: ${Theme.palette.theme1};
    }
  }
`;

interface FooterProps {
  data: FooterType;
}

export default function FooterComponent({ data }: FooterProps) {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterNavigationList>
          {data.links.map((link) => (
            <FooterNavigationItem key={`nav_${link.path}`}>
              <Link href={link.path}>
                <a>{link.label}</a>
              </Link>
            </FooterNavigationItem>
          ))}
        </FooterNavigationList>
      </FooterContent>
      <FooterNote>
        <FooterNoteText>© 2023</FooterNoteText>
      </FooterNote>
    </FooterContainer>
  );
}
