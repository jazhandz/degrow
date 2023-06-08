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
import { Constants } from "@/constants";
import { useMailchimp } from "@/hooks/use-mailchimp";
import jsonp from "jsonp";
import { color } from "@/styles/color";
import { FORM_ERROR } from "final-form";
import validator from "validator";
import { AnimatePresence, motion } from "framer-motion";

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
  @media ${media.mobile} {
    flex-direction: column;
    align-items: center;
    & > *:first-child {
      margin-bottom: ${spacing.m};
    }
  }
  @media ${media.desktop} {
  }
`;

const FormContainerStyled = styled.div`
  display: block;
`;

const FormCompleteMessage = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${fontSize.h3Desktop};
`;

const FormErrorStyled = styled.span`
  display: block;
  color: ${color.red};
  font-size: ${fontSize.small};
  text-align: center;
  padding: ${spacing.m} 0;
`;

function toQueryString(params: any) {
  return Object.keys(params)
    .map(key => key + "=" + params[key])
    .join("&");
}

function handleValidateForm({ name, email = "", accept }: { name: string; email: string; accept: boolean }) {
  return {
    name: typeof name === "string" && name.length > 0 ? undefined : "Required",
    email: validator.isEmail(email) ? undefined : "Not a valid email address",
    accept: accept !== true ? "Please read and accept our privacy policy" : undefined,
  };
}

export function NewsletterBlock() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  async function subscribeToMailchimp({ name, email }: { name: string; email: string }) {
    const params = toQueryString({ FNAME: name, EMAIL: email });
    const ajaxURL = Constants.mailchimp.url.replace("/post?", "/post-json?");
    const newUrl = ajaxURL + "&" + params;

    jsonp(newUrl, { param: "c" }, (err: any, data) => {
      if (err) {
        return { [FORM_ERROR]: err };
      } else if (data.result !== "success") {
        return { [FORM_ERROR]: data.msg };
      } else {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
        return true;
      }
    });
  }

  return (
    <Form onSubmit={subscribeToMailchimp} validate={handleValidateForm}>
      {({ handleSubmit, error }) => (
        <form onSubmit={handleSubmit} style={{ position: "relative" }}>
          <FormContainerStyled style={isSubmitted ? { visibility: "hidden" } : {}}>
            <RichTextBlock body="Stay up-to-date with the latest news from Degrow Lab and other latest kombucha news." />
            <NewsletterContainer>
              <Field name="name" placeholder="Name" component={TextInput} />
              <Field name="email" placeholder="Email" component={TextInput} />
              <BottomStyled>
                <Field
                  name="accept"
                  href="/privacy-policy"
                  component={CheckBoxInput}
                  label="I agree to the privacy policy"
                />
                <SubmitInput value={"Sign me up!"}></SubmitInput>
              </BottomStyled>
              {error && <FormErrorStyled>{error}</FormErrorStyled>}
            </NewsletterContainer>
          </FormContainerStyled>
          <AnimatePresence>
            {isSubmitted && (
              <FormCompleteMessage initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                Thanks for Subscribing!
              </FormCompleteMessage>
            )}
          </AnimatePresence>
        </form>
      )}
    </Form>
  );
}
