import { media } from "@/styles/media";
import * as React from "react";
import styled from "styled-components";

export const IsMobile = styled.div`
  @media ${media.mobile} {
  }
  @media ${media.desktop} {
    display: none;
  }
`;
