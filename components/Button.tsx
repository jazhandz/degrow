import { Theme } from "@/constants";
import styled from "styled-components";

type ButtonType = "primary" | "secondary" | "light" | "disabled";
type ButtonSize = "small" | "large";

const LARGE_BUTTON_HEIGHT = "38px";
const LARGE_BUTTON_PADDING = "15px";
const LARGE_BUTTON_FONT_SIZE = "16px";
const SMALL_BUTTON_HEIGHT = "37px";
const SMALL_BUTTON_PADDING = "10px";
const SMALL_BUTTON_FONT_SIZE = "12px";

interface ButtonProps {
  varient?: ButtonType;
  size?: ButtonSize;
  noMargins?: boolean;
}

const ButtonContainer = styled.button(
  ({ varient = "primary", size, noMargins }: ButtonProps) => {
    const themeColor =
      varient === "primary"
        ? Theme.palette.theme1
        : varient === "secondary"
        ? Theme.palette.theme2
        : varient === "light"
        ? "Transparent"
        : Theme.palette.lightGrey;
    const themeHoverColor =
      varient === "primary"
        ? Theme.palette.theme1dark
        : varient === "secondary"
        ? Theme.palette.theme2dark
        : varient === "light"
        ? "Transparent"
        : Theme.palette.lightGrey;
    const textColor =
      varient === "primary"
        ? Theme.palette.white
        : varient === "secondary"
        ? Theme.palette.white
        : varient === "light"
        ? Theme.palette.darkGrey90
        : Theme.palette.theme1;
    return `
  cursor: pointer;
  height: ${size === "small" ? SMALL_BUTTON_HEIGHT : LARGE_BUTTON_HEIGHT};
  padding: 0px ${
    size === "small" ? SMALL_BUTTON_PADDING : LARGE_BUTTON_PADDING
  };
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  text-decoration: none;
  border: ${
    varient === "light" ? `1px solid ${Theme.palette.darkGrey90}` : "none"
  };
  background-color: ${themeColor};
  color: ${textColor};
  font-size: ${
    size === "small" ? SMALL_BUTTON_FONT_SIZE : LARGE_BUTTON_FONT_SIZE
  };
  margin: ${noMargins ? "0px" : "10px"};
  border-radius: 6px;
  font-weight: 400;
  :hover{
    background-color: ${themeHoverColor};
  }
`;
  }
);

export default ButtonContainer;
