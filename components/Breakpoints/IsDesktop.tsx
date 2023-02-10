import { media } from "@/styles/media";
import * as React from "react";
import styled from "styled-components";

export const IsDesktop = styled.div`
@media ${media.mobile} {
    display: none;
}
@media ${media.desktop} {
    display: visible;
}
`;