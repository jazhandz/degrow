import { Theme } from "@/constants";
import * as React from "react";
import styled from "styled-components";

type ListItemVarient = "default" | "selected";

interface ListItemProps {
  leftActionComponent?: React.ReactElement;
  children?: React.ReactElement;
  rightActionComponent?: React.ReactElement;
  onClick?: () => void;
  varient?: ListItemVarient;
}

const ListItemContainer = styled.article(
  ({
    onClick,
    varient,
  }: {
    onClick?: () => void;
    varient: ListItemVarient;
  }) => `
  border-radius: 6px;
  background-color: ${Theme.palette.white};
  padding: ${Theme.spacing.s};
  margin: ${Theme.spacing.m} 0px;
  display: flex;
  align-items: center;
  ${onClick && "cursor: pointer;"}
  transition: box-shadow 0.4s ease, transform 0.4s ease;
  ${
    varient === "selected"
      ? `box-shadow: 0px 0px 15px rgba(0,0,0,0.0.6); transform: scale(1.04);`
      : ""
  }
  &:hover{
      ${
        onClick !== undefined &&
        varient !== "selected" &&
        `box-shadow: 0px 0px 15px rgba(0,0,0,0.03); transform: scale(1.01);`
      }
  }
`
);

export default function ListItemComponent({
  onClick,
  leftActionComponent,
  children,
  rightActionComponent,
  varient = "default",
}: ListItemProps) {
  return (
    <ListItemContainer varient={varient} onClick={onClick}>
      {leftActionComponent}
      {children}
      {rightActionComponent}
    </ListItemContainer>
  );
}
