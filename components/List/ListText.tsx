import { Theme } from "@/constants";
import * as React from "react";
import styled from "styled-components";

interface ListTextProps {
  title: string;
  body: string;
}

const ListTextContainer = styled.div`
  padding: ${Theme.spacing.s} ${Theme.spacing.s};
  flex: 1;
`;
const ListTextTitle = styled.h1`
  font-size: ${Theme.fontSize.regular};
  margin: 0px;
  //   margin: 0px 0px ${Theme.spacing.s} 0px;
`;
const ListTextBody = styled.p`
  margin: ${Theme.spacing.s} 0px 0px 0px;
`;

export default function ListTextComponent({ title, body }: ListTextProps) {
  return (
    <ListTextContainer>
      <ListTextTitle>{title}</ListTextTitle>
      <ListTextBody>{body}</ListTextBody>
    </ListTextContainer>
  );
}
