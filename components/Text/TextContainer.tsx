import { Constants } from "@/constants";
import { SCREEN_SIZES } from "@/constants";
import { Theme } from "@/constants";
import * as React from "react";
import styled from "styled-components";

interface TextContainerProps {
  children: React.ReactElement | React.ReactElement[];
  as?: "article";
}

const TextContainerContainer = styled.div`
  padding: 0px ${Theme.spacing.xl};
  max-width: ${SCREEN_SIZES.tablet};
  margin: ${Theme.spacing.xl} auto;
  & > h1 {
    font-size: 30px;
  }
`;

export default function TextContainerComponent({
  children,
  as,
}: TextContainerProps) {
  return <TextContainerContainer as={as}>{children}</TextContainerContainer>;
}
