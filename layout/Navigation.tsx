import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { NavigationType } from "@/types/CMS/Navigation";
import { media } from "@/styles/media";
import { color } from "@/styles/color";
import { fontSize } from "@/styles/fontSize";
import { fontWeight } from "@/styles/fontWeight";
import { spacing } from "@/styles/spacing";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { ColorVarientType } from "@/types/CMS/Generic";

const NAV_DESKTOP_HEADER_HEIGHT = "53px";

const NAV_DESKTOP_MAX_WIDTH = "1024px";
const NAV_DESKTOP_MARGIN = spacing.m;
const NAV_DESKTOP_SUB_ITEM_HEIGHT = "30px";
const NAV_DESKTOP_SUB_MENU_PADDING = spacing.s;

const NAV_DESKTOP_MAIN_LINK_PADDING = spacing.m;

const BORDER_COLOR = color.black;

const NAV_MOBILE_HEADER_HEIGHT = "53px";
const NAV_MOBILE_PADDING = spacing.m;
const NAV_MOBILE_SUB_MENU_ITEM_HEIGHT = "24px";
const NAV_MOBILE_TOP_OFFSET = spacing.m;

const NAV_DESKTOP_LINK_HIGHLIGHT_COLOR = color.black;
const NAV_DESKTOP_LINK_HOVER_WEIGHT = fontWeight.light;
const NAV_DESKTOP_LINK_HOVER_TEXT_DECORATION = "underline";

const NavWrapper = styled.div`
  z-index: 100;
  width: 100%;
  background-color: ${({ $backgroundColor }: { $backgroundColor: string }) => $backgroundColor};
  @media ${media.mobile} {
    background-color: ${color.white};
    position: fixed;
  }
  @media ${media.desktop} {
    display: flex;
    justify-content: center;
  }
`;

const NavContainer = styled.nav`
  background-color: ${({ $backgroundColor }: { $backgroundColor: string }) => $backgroundColor};
  width: 100%;
  box-sizing: border-box;
  display: flex;
  z-index: 100;
  @media ${media.mobile} {
    height: calc(${NAV_MOBILE_HEADER_HEIGHT} + ${NAV_MOBILE_TOP_OFFSET});
    flex-direction: column;
    position: fixed;
  }

  @media ${media.desktop} {
    margin: 0 ${NAV_DESKTOP_MARGIN};
    flex-direction: column;
    padding: 0px 0px;
    max-width: ${NAV_DESKTOP_MAX_WIDTH};
    left: calc(50vw - (${NAV_DESKTOP_MAX_WIDTH} / 2));
    box-sizing: border-box;
    border-radius: 6px;
  }
`;

/**
 * Nav Header Bar
 */

const NavHeaderBar = styled.div`
  width: 100%;
  @media ${media.mobile} {
    height: ${NAV_MOBILE_HEADER_HEIGHT};
    box-sizing: border-box;
    padding: 0 ${NAV_MOBILE_PADDING};
    justify-content: space-between;
    align-items: center;
    display: flex;
    justify-content: center;
    z-index: 10;
    margin-top: ${NAV_MOBILE_TOP_OFFSET};
  }

  @media ${media.desktop} {
    text-align: center;
    height: ${NAV_DESKTOP_HEADER_HEIGHT};
  }
`;

const NavHamburger = styled.button`
  @media ${media.mobile} {
    width: ${NAV_MOBILE_HEADER_HEIGHT};
    height: ${NAV_MOBILE_HEADER_HEIGHT};
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

/**
 * Nav Main List
 */

const NavMainListContainer = styled.div`
  flex: 1;
  padding: 0px 0px;
  margin: 0px;
  position: relative;
  z-index: 100;
  /* overflow: hidden; */
  @media ${media.mobile} {
    /* overflow: hidden; */
    &::after {
      content: "";
      width: calc(100% - ${NAV_MOBILE_PADDING} * 2);
      margin: 0 ${NAV_MOBILE_PADDING};
      border-bottom: 1px ${color.black} solid;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
  @media ${media.desktop} {
    border-top: 1px ${color.black} solid;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-height: ${NAV_DESKTOP_HEADER_HEIGHT};
    max-height: ${NAV_DESKTOP_HEADER_HEIGHT};
  }
`;

const NavMainList = styled(motion.ul)`
  padding: 0; // Reset list style
  margin: 0; // Reset list style
  list-style-type: none; // Reset list style
  z-index: 100;
  background-color: ${({ $backgroundColor }: { $backgroundColor: string }) => $backgroundColor};
  @media ${media.mobile} {
    height: 0px;
    overflow-y: scroll;
  }
  @media ${media.desktop} {
    height: ${NAV_DESKTOP_HEADER_HEIGHT};
    border-bottom: 1px ${color.black} solid;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
  }
`;

const NavMainItem = styled.li`
  @media ${media.mobile} {
    width: 100%;
    display: flex;
    padding: ${NAV_DESKTOP_SUB_MENU_PADDING} ${NAV_MOBILE_PADDING};
    position: relative;
    & > a {
      display: block;
      height: 100%;
      width: 100%;
      flex: 1;
      line-height: ${NAV_MOBILE_SUB_MENU_ITEM_HEIGHT};
    }
    &:not(:last-child)&::after {
      content: "";
      width: calc(100% - ${NAV_MOBILE_PADDING} * 2);
      margin: 0 ${NAV_MOBILE_PADDING};
      border-bottom: 1px ${color.black} solid;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
  @media ${media.desktop} {
    flex: 1;
    position: relative;
    min-height: ${NAV_DESKTOP_HEADER_HEIGHT};
  }
  & > a {
    &.active {
      color: ${NAV_DESKTOP_LINK_HIGHLIGHT_COLOR};
    }
    @media ${media.desktop} {
      display: block;
      height: ${NAV_DESKTOP_HEADER_HEIGHT};
      line-height: ${NAV_DESKTOP_HEADER_HEIGHT};
      width: 100%;
      padding: 0 ${NAV_DESKTOP_MAIN_LINK_PADDING};
      margin: 0;
      border-bottom: solid 1px ${BORDER_COLOR};
      transition: color 0.2s ease; // check
    }
  }
  & a {
    color: ${color.black};
    text-decoration: none;
    font-size: ${fontSize.input};
    font-weight: ${fontWeight.light};
    text-align: left;
    @media ${media.desktop} {
      width: 100%;
      padding: 0 ${NAV_DESKTOP_MAIN_LINK_PADDING};
    }
  }
  a:hover {
    @media ${media.desktop} {
      color: ${NAV_DESKTOP_LINK_HIGHLIGHT_COLOR};
      font-weight: ${NAV_DESKTOP_LINK_HOVER_WEIGHT};
      text-decoration: ${NAV_DESKTOP_LINK_HOVER_TEXT_DECORATION};
    }
  }
  &:first-child {
    @media ${media.desktop} {
      & a {
        padding-left: 0;
      }
    }
  }
  &:last-child {
    @media ${media.desktop} {
      & a {
        text-align: right;
        padding-right: 0;
      }
      flex: none;
    }
  }
`;

const NavSubListStyled = styled.ul`
  list-style-type: none;
  position: relative;
  padding: 0;
  @media ${media.mobile} {
    flex: 1;
    line-height: ${NAV_MOBILE_SUB_MENU_ITEM_HEIGHT};
  }

  @media ${media.desktop} {
    width: 100%;
    text-align: left;
    line-height: ${NAV_DESKTOP_SUB_ITEM_HEIGHT};
    padding: ${NAV_DESKTOP_SUB_MENU_PADDING} 0;
  }
`;
const NavSubItemStyled = styled.li`
  & > a {
    display: flex;
    text-decoration: none;
    font-size: ${fontSize.input};
    font-weight: ${fontWeight.light};
    color: ${color.black};
    &.active {
      color: ${NAV_DESKTOP_LINK_HIGHLIGHT_COLOR};
    }
    @media ${media.desktop} {
      transition: color 0.2s ease;
    }
  }
`;

const NavPadding = styled.div`
  @media ${media.mobile} {
    height: calc(${NAV_MOBILE_HEADER_HEIGHT} + ${NAV_MOBILE_TOP_OFFSET});
    width: 100%;
  }
`;

const NavTitleLinkStyled = styled(Link)`
  width: 100%;
  text-align: center;
  font-size: ${fontSize.h2};
  margin: ${spacing.xs} 0;
  font-weight: ${fontWeight.light};
  text-decoration: none;
  color: ${color.black};
  font-variant-numeric: slashed-zero;

  @media ${media.mobile} {
    line-height: ${NAV_MOBILE_HEADER_HEIGHT};
    text-align: left;
  }

  @media ${media.desktop} {
    text-align: center;
    line-height: ${NAV_DESKTOP_HEADER_HEIGHT};
  }
`;

const NavMobileBorderStyled = styled.div`
  @media ${media.mobile} {
    border-bottom: 1px ${BORDER_COLOR} solid;
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 0 ${NAV_MOBILE_PADDING};
    width: calc(100% - ${NAV_MOBILE_PADDING} * 2);
  }

  @media ${media.desktop} {
    text-align: center;
    line-height: ${NAV_DESKTOP_HEADER_HEIGHT};
  }
`;

interface NavigationProps {
  data: NavigationType;
  backgroundColor?: ColorVarientType;
}

export default function NavigationComponent({ data, backgroundColor }: NavigationProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const isMobile = useIsMobile();

  const MENU_BACKGROUND_COLOR = backgroundColor ? color[backgroundColor] : color.grey1;

  const DESKTOP_SUB_MENU_MAX_LENGTH = React.useMemo(
    () => data.options.map(option => (option.items ? option.items.length : 0)).sort()[data.options.length - 1],
    [data.options]
  );
  const MOBILE_MENU_MAX_LENGTH = React.useMemo(
    () =>
      `calc((${data.options
        .map(option => (option.items ? option.items.length : 0))
        .reduce((a, b) => a + b, 0)} * ${NAV_MOBILE_SUB_MENU_ITEM_HEIGHT}) + (${
        data.options.length * 2
      } * ${NAV_DESKTOP_SUB_MENU_PADDING}))`,
    [data.options]
  );

  React.useEffect(() => {
    if (!isMobile && isOpen) {
      setIsOpen(false);
    }
  }, [isMobile, isOpen]);

  const handleOnToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavWrapper $backgroundColor={MENU_BACKGROUND_COLOR}>
        <NavContainer $backgroundColor={MENU_BACKGROUND_COLOR}>
          <NavHeaderBar>
            <NavTitleLinkStyled href={data.homePath} onClick={isOpen ? handleOnToggleMenu : undefined}>
              {data.title}
            </NavTitleLinkStyled>
            <NavHamburger className={`nav__menu-burger ${isOpen ? "-open" : ""}`} onClick={handleOnToggleMenu}>
              <img alt={isOpen ? "close icon" : "menu icon"} src={`icons/${isOpen ? "close" : "menu"}.svg`} />
            </NavHamburger>
            <NavMobileBorderStyled />
          </NavHeaderBar>
          <NavMainListContainer>
            <NavMainList
              $backgroundColor={MENU_BACKGROUND_COLOR}
              transition={{ type: "tween", duration: 0.2 }}
              animate={isMobile ? { height: isOpen ? MOBILE_MENU_MAX_LENGTH : "0px" } : undefined}
              // initial={{height: isMobile ? "0px" : NAV_DESKTOP_HEADER_HEIGHT}}
              whileHover={
                isMobile
                  ? undefined
                  : {
                      height: `calc(${DESKTOP_SUB_MENU_MAX_LENGTH} * ${NAV_DESKTOP_SUB_ITEM_HEIGHT} + (${NAV_DESKTOP_SUB_MENU_PADDING} * 2) + ${NAV_DESKTOP_HEADER_HEIGHT})`,
                    }
              }
            >
              {data.options.map(option => (
                <NavMainItem key={`nav_${option.path}`}>
                  <Link href={option.path} target={option.target} onClick={isOpen ? handleOnToggleMenu : undefined}>
                    {option.label}
                  </Link>
                  {option.items && (
                    <NavSubListStyled>
                      {option.items.map(subOption => (
                        <NavSubItemStyled key={`subNav_${option.label}_${subOption.label}`}>
                          <Link
                            target={subOption.target}
                            href={subOption.path}
                            onClick={isOpen ? handleOnToggleMenu : undefined}
                          >
                            {subOption.label}
                          </Link>
                        </NavSubItemStyled>
                      ))}
                    </NavSubListStyled>
                  )}
                </NavMainItem>
              ))}
            </NavMainList>
          </NavMainListContainer>
        </NavContainer>
      </NavWrapper>
      <NavPadding />
    </>
  );
}
