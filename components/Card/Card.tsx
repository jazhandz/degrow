import { Constants, Theme } from "@/constants";
import * as React from "react";
import styled from "styled-components";
import Button from "../Button";

interface BlogPostProps {
  id: string;
  categories?: string[];
  title: string;
  date: string;
  body?: string;
  image?: any;
  renderLink: (id: string) => string;
}

const BlogPostContainer = styled.article`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  padding: ${Theme.spacing.m} ${Theme.spacing.m} ${Theme.spacing.m}
    ${Theme.spacing.m};
  box-sizing: border-box;
  @media ${Constants.media.mobile} {
    width: 100%;
  }
  @media ${Constants.media.desktop} {
    width: 33.333333332%;
  }
  @media ${Constants.media.tablet} {
    width: 50%;
  }
`;
const BlogPostContent = styled.div`
  max-width: 100%;
  width: 350px;
  height: 350px;
  position: relative;
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  flex-direction: column;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
`;
const BlogPostImage = styled.img`
  position: relative;
  height: 200px;
  background-color: ${Theme.palette.lightGrey};
  object-fit: cover;
  overflow: hidden;
`;
const BlogPostBody = styled.div`
  flex: 1;
  height: 150px;
  padding: ${Theme.spacing.s} ${Theme.spacing.l} ${Theme.spacing.m}
    ${Theme.spacing.l};
  display: flex;
  flex-direction: column;
  & > h1 {
    margin: ${Theme.spacing.xs} 0px;
    font-size: 18px;
  }
  & > p {
    margin: 0px 0px 0px;
    height: 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export default function BlogPostComponent({
  id,
  title,
  date,
  categories,
  body,
  renderLink,
  image,
}: BlogPostProps) {
  return (
    <BlogPostContainer>
      <BlogPostContent>
        <BlogPostImage src={image}></BlogPostImage>
        <BlogPostBody>
          <h1>{title}</h1>
          <p>{body}</p>
          <Button as="a" href={renderLink(id)} varient="secondary">
            Read more
          </Button>
        </BlogPostBody>
      </BlogPostContent>
    </BlogPostContainer>
  );
}
