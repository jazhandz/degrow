import { Constants, SCREEN_SIZES, Theme } from "@/constants";
import styled from "styled-components";

interface ContainerProps {
  padding?: string;
  maxWidth?: string | [string, string];
  margin?: string;
}

export const Container = styled.div(
  ({
    padding = Theme.spacing.l,
    maxWidth = [SCREEN_SIZES.tablet, SCREEN_SIZES.laptop],
    margin = Theme.spacing.m,
  }: ContainerProps) => `
  padding: 0px ${padding};
  margin: ${margin} auto;
  @media ${Constants.media.mobile}{
    max-width: ${maxWidth[0] ?? maxWidth};
  }
  @media ${Constants.media.desktop}{
    max-width: ${maxWidth[1] ?? maxWidth};
  }
  @media ${Constants.media.tablet}{
    max-width: ${maxWidth[0] ?? maxWidth};
  }
`
);

