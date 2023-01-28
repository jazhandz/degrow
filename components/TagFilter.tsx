import React from "react";
import styled from "styled-components";
import Button from "@/components/Button";
import { Constants, Theme } from "@/constants";
import Tag from "@/types/Tag";

interface TagFilterProps {
  tags: Tag[];
  onTagChange: (id: string) => void;
}

const TagFilterContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: ${Theme.spacing.l} ${Theme.spacing.s} ${Theme.spacing.m};
  & > * {
    margin: 0px ${Theme.spacing.s};
    @media ${Constants.media.mobile} {
      display: inline-block;
      margin: ${Theme.spacing.xs} ${Theme.spacing.xs};
    }
  }
  @media ${Constants.media.mobile} {
    text-align: center;
  }
  @media ${Constants.media.desktop} {
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default function TagFilterComponent({
  tags,
  onTagChange,
}: TagFilterProps) {
  const [filter, setFilter] = React.useState("all");
  const handleTagChange = (newFilter: string) => () => {
    setFilter(newFilter);
    onTagChange(newFilter);
  };
  return (
    <TagFilterContainer>
      <Button
        onClick={handleTagChange("all")}
        varient={filter === "all" ? "primary" : "light"}
      >
        All
      </Button>
      {tags.map((tag) => (
        <Button
          varient={filter === tag.key ? "primary" : "light"}
          key={tag.key}
          onClick={handleTagChange(tag.key)}
        >
          {tag.label}
        </Button>
      ))}
    </TagFilterContainer>
  );
}
