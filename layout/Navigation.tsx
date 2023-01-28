import React from "react";
import CloseSVG from "@/assets/icons/close.svg";
import MenuSVG from "@/assets/icons/menu.svg";
import styled from "styled-components";
import { Constants, SCREEN_SIZES, Theme } from "@/constants";
import Link from "next/link";
import Button from "@/components/Button";
import { NavigationType } from "@/types/CMS/Navigation";
import { media } from "@/styles/media";
import { color } from "@/styles/color";
import { fontSize } from "@/styles/fontSize";
import { fontWeight } from "@/styles/fontWeight";
import { spacing } from "@/styles/spacing";

const MOBILE_NAV_HEIGHT = "53px";
const DESKTOP_NAV_HEIGHT = "53px";

const NAV_DESKTOP_WIDTH = SCREEN_SIZES.laptop;
const NAV_DESKTOP_PADDING = "10px";

const NavWrapper = styled.div`
  z-index: 1;
  width: 100%;
  @media ${media.mobile} {
    background-color: ${color.white};
    position: fixed;
  }
  @media ${media.desktop} {
    /* padding: ${NAV_DESKTOP_PADDING}; */
    display: flex;
    justify-content: center;
  }
`;

const NavContainer = styled.nav(
  ({ isOpen }: { isOpen: boolean }) => `
  background-color: ${color.grey1};
  width: 100%;
  box-sizing: border-box;
  display: flex;

  @media ${media.mobile} {
    height: ${MOBILE_NAV_HEIGHT};
    overflow: hidden;
    flex-direction: column;
    position: fixed;
    ${isOpen && "height: 100vh;"}
  }

  @media ${media.desktop} {
    flex-direction: column;
    padding: 0px 0px;
    max-width: ${NAV_DESKTOP_WIDTH};
    left: calc(50vw - (${NAV_DESKTOP_WIDTH} / 2));
    box-sizing: border;
    border-radius: 6px;
  }
`
);

const NavMobileBar = styled.nav`
  @media ${media.mobile} {
    background-color: ${color.grey1};
    width: 100%;
    height: ${MOBILE_NAV_HEIGHT};
    box-sizing: border-box;
    padding: 0px 10px;
    justify-content: space-between;
    align-items: center;
    display: flex;
    justify-content: center;
    z-index: 10;
  }

  @media ${media.desktop} {
    display: none;
  }
`;

const NavHamburger = styled.button`
  @media ${media.mobile} {
    width: ${MOBILE_NAV_HEIGHT};
    height: ${MOBILE_NAV_HEIGHT};
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: Transparent;
  }
  @media ${media.desktop} {
    display: none;
  }
`;

const NavMainList = styled.ul`
  border-top: 1px ${color.black} solid;
  border-bottom: 1px ${color.black} solid;
  flex: 1;
  padding: 0px 0px;
  margin: 0px;
  @media ${media.mobile} {
    overflow-y: scroll;
  }
  @media ${media.desktop} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-height: ${DESKTOP_NAV_HEIGHT};
  }
`;

const NavMainItem = styled.li`
  @media ${media.mobile} {
    border-bottom: solid 1px ${color.grey3};
    height: ${MOBILE_NAV_HEIGHT};
    padding: 0px;
    & > a {
      display: flex;
      align-items: center;
      width: 100%;
    }
  }
  @media ${media.desktop} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  & > a {
    display: flex;
    text-decoration: none;
    font-size: ${fontSize.input};
    font-weight: ${fontWeight.light};
    color: ${color.black};
    &.active {
      color: ${color.primary};
    }
    @media ${media.mobile} {
      align-items: center;
      justify-content: center;
      height: ${MOBILE_NAV_HEIGHT};
    }
    @media ${media.desktop} {
      flex-direction: row;
      align-items: center;
      padding: 0px 10px;
      /* height: ${DESKTOP_NAV_HEIGHT}; */
      box-sizing: border-box;
      margin-left: 10px;
      transition: color 0.2s ease;
    }
  }
  a:hover {
    @media ${media.desktop} {
      color: ${Theme.palette.theme1};
    }
  }
`;

const NavPadding = styled.div`
  @media ${media.mobile} {
    height: ${Theme.spacing.xl};
    width: 100%;
  }
`;

const NavTitleStyled = styled.span`
  width: 100%;
  text-align: center;
  font-size:${fontSize.h2};
  margin: ${spacing.xs} 0;
  font-weight: ${fontWeight.light};
  & a {
   text-decoration : none;
   color: ${color.black};
  }
`

interface NavigationProps {
  data: NavigationType;
}

export default function NavigationComponent({ data }: NavigationProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOnToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavWrapper>
        <NavContainer
          isOpen={isOpen}
          className={`nav ${isOpen ? "-open" : ""}`}
        >
          <NavMobileBar>
            <NavHamburger
              className={`nav__menu-burger ${isOpen ? "-open" : ""}`}
              onClick={handleOnToggleMenu}
            >
              <img src={`/icons/${isOpen ? "close" : "menu"}.svg`} />
            </NavHamburger>
          </NavMobileBar>
    <NavTitleStyled>
    <Link href={data.homePath}>{data.title}</Link>
    </NavTitleStyled>
          <NavMainList className="nav__main">
            {data.options.map((option) => (
              <NavMainItem key={`nav_${option.path}`}>
                <Link href={option.path}>
                  <a onClick={isOpen ? handleOnToggleMenu : undefined}>
                    {option.label}
                  </a>
                </Link>
              </NavMainItem>
            ))}
          </NavMainList>
        </NavContainer>
      </NavWrapper>
      <NavPadding />
    </>
  );
}
