import { fontSize } from "@/styles/fontSize";
import { media } from "@/styles/media";
import * as React from "react";
import styled from "styled-components";

type SubmitProps = React.InputHTMLAttributes<HTMLInputElement>;

const MOBILE_FONT_SIZE = fontSize.p;
const DESKTOP_FONT_SIZE = fontSize.p;

const SubmitStyled = styled.input`
  -webkit-appearance: none;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  text-decoration: underline;
  cursor: pointer;
  @media ${media.mobile} {
    font-size: ${MOBILE_FONT_SIZE};
  }
  @media ${media.desktop} {
    font-size: ${DESKTOP_FONT_SIZE};
  }
`;

export function SubmitInput({ ...props }: SubmitProps) {
  return <SubmitStyled type="submit" {...props}></SubmitStyled>;
}
