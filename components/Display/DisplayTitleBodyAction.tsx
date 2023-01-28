import { Theme } from "@/constants";
import * as React from "react";
import styled from "styled-components";

interface DisplayTitleBodyActionProps {
  title: string;
  body: string;
  actionComponent?: React.ReactElement;
}

const DisplayTitleBodyActionContainer = styled.article`
  margin: ${Theme.spacing.l};
`;
const DisplayTitleBodyActionTitle = styled.h1`
  font-size: ${Theme.fontSize.title};
  margin: 0px;
`;
const DisplayTitleBodyActionBody = styled.p`
  //   margin-top: 0px;
`;
const DisplayTitleBodyAction = styled.div``;

export default function DisplayTitleBodyActionComponent({
  title,
  body,
  actionComponent,
}: DisplayTitleBodyActionProps) {
  return (
    <DisplayTitleBodyActionContainer>
      <DisplayTitleBodyActionTitle>{title}</DisplayTitleBodyActionTitle>
      <DisplayTitleBodyActionBody>{body}</DisplayTitleBodyActionBody>
      <DisplayTitleBodyAction>{actionComponent}</DisplayTitleBodyAction>
    </DisplayTitleBodyActionContainer>
  );
}
