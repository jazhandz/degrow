import { Theme } from "@/constants";
import * as React from "react";
import styled from "styled-components";
import { ListActionIcon } from ".";
import ListItem from "./ListItem";
import ListText from "./ListText";

interface ListItemOption {
  id: string;
  title: string;
  body: string;
  image: any; // TODO
}

interface ListItemOptionsProps {
  items: ListItemOption[];
  selected: string;
  onChange: (id: string) => void;
}

const ListItemOptionsContainer = styled.div`
  background-color: ${Theme.palette.background.secondary};
  border-radius: 6px;
  padding: ${Theme.spacing.s} ${Theme.spacing.l};
  margin: ${Theme.spacing.l};
`;

export default function ListItemOptionsComponent({
  items,
  selected,
  onChange,
}: ListItemOptionsProps) {
  return (
    <ListItemOptionsContainer>
      {items.map((item) => (
        <ListItem
          leftActionComponent={<ListActionIcon />}
          varient={selected === item.id ? "selected" : "default"}
          onClick={() => onChange(item.id)}
          key={item.id}
        >
          <ListText title={item.title} body={item.body} />
        </ListItem>
      ))}
    </ListItemOptionsContainer>
  );
}
