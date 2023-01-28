import React from "react";
import styled from "styled-components";
import Button from "@/components/Button";
import CardPost from "./Card";
import { Constants, Theme } from "@/constants";
import Container from "../Container";

export interface CardPostCategory {
  key: string;
  label: string;
}

export interface CardPost {
  id: string;
  categories: string[];
  title: string;
  date: string;
  subtitle: string;
  images?: string[];
}

interface CardComponentProps {
  categories: CardPostCategory[];
  items: CardPost[];
  renderLink: (id: string) => string;
}

const CardFilterContainer = styled.div`
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
const CardContent = styled(Container)`
  margin-top: 0px;
  @media ${Constants.media.mobile} {
    & > * {
      width: 100%;
      margin: ${Theme.spacing.m} 0px;
    }
  }
  @media ${Constants.media.tablet} {
    & > * {
      padding: ${Theme.spacing.m} ${Theme.spacing.m};
    }
  }
  @media ${Constants.media.desktop} {
    & > * {
      padding: ${Theme.spacing.m} ${Theme.spacing.m};
    }
  }
`;

export default function CardSearchComponent({
  categories,
  items,
  renderLink,
}: CardComponentProps) {
  const [filter, setFilter] = React.useState("all");
  const handleCategoryChange = (newFilter: string) => () => {
    setFilter(newFilter);
  };
  return (
    <React.Fragment>
      <CardFilterContainer className="CardContainer__button-container">
        <Button
          onClick={handleCategoryChange("all")}
          varient={filter === "all" ? "primary" : "light"}
        >
          All
        </Button>
        {categories.map((item) => (
          <Button
            varient={filter === item.key ? "primary" : "light"}
            key={item.key}
            onClick={handleCategoryChange(item.key)}
          >
            {item.label}
          </Button>
        ))}
      </CardFilterContainer>
      <CardContent>
        {items
          .filter((item) =>
            filter === "all" ? true : item.categories.includes(filter)
          )
          .map((item) => (
            <CardPost
              key={`item_${item.id}`}
              renderLink={renderLink}
              image={item.images && item.images[0]}
              {...item}
            />
          ))}
      </CardContent>
    </React.Fragment>
  );
}
