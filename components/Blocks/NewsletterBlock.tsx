import * as React from "react";
import styled from "styled-components";
import { RichText } from "@/components/RichText";
import { Container } from "../Container";
import { fontSize } from "@/styles/fontSize";
import { media } from "@/styles/media";
import { spacing } from "@/styles/spacing";
import Link from "next/link";
import { Form, Field } from "react-final-form";
import { RichTextBlock } from "./RichTextBlock";
import { SubmitInput } from "../Form/Submit";
import { TextInput } from "../Form/TextInput";
import { CheckBoxInput } from "../Form/CheckBoxInput";

const MOBILE_FONT_SIZE = fontSize.linkMobile;
const DESKTOP_FONT_SIZE = fontSize.linkDesktop;

const NewsletterContainer = styled(Container)`
  text-align: center;
  margin: ${spacing.xl} auto;
  @media ${media.mobile} {
    font-size: ${MOBILE_FONT_SIZE};
  }
  @media ${media.desktop} {
    font-size: ${DESKTOP_FONT_SIZE};
  }
`;

const BottomStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: ${spacing.xl};
`;

export function NewsletterBlock() {
  return (
    <Form
      onSubmit={(values: any) => {
        console.log("values:", values);
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <RichTextBlock body="Stay up-to-date with the latest news from Degrow Lab and other latest kombucha news." />
          <NewsletterContainer>
            <Field name="name" placeholder="Name" component={TextInput} />
            <Field name="email" placeholder="Email" component={TextInput} />
            <BottomStyled>
              <Field name="accept" component={CheckBoxInput} label="I agree to the privacy policy" />
              <SubmitInput value={"Sign me up!"}></SubmitInput>
            </BottomStyled>
          </NewsletterContainer>
        </form>
      )}
    </Form>
  );
}
