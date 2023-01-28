import { Theme } from "@/constants";
import * as React from "react";
import styled from "styled-components";

interface ListActionIconProps {}

const ACTIONICON_SIZE = "50px";

const ListActionIconContainer = styled.div`
  width: ${ACTIONICON_SIZE};
  height: ${ACTIONICON_SIZE};
  border-radius: 100%;
  background-color: ${Theme.palette.theme3};
`;

export default function ListActionIconComponent({}: ListActionIconProps) {
  return <ListActionIconContainer></ListActionIconContainer>;
}
