import * as React from "react";
import styled from "styled-components";
// @ts-ignore
import Fade from "react-reveal/Fade";
import { Theme, Constants, SCREEN_SIZES } from "@/constants";
import { TransitionGroup } from "react-transition-group";
import Button from "../Button";
import Lottie from "react-lottie";
import animationData from "../../assets/lottie/profile.json";

const MAX_DESKTOP_WIDTH = `calc(${SCREEN_SIZES.laptop} + ${Theme.spacing.xxl})`;
const CONTENT_PADDING = Theme.spacing.xxl;

interface DisplayIntroductionProps {}

// const DisplayIntroductionContainer = styled.div`
//   width: 100%;
//   height: 100vh;
//   margin-top: -53px;

//   position: relative;
// `;

const DisplayIntroductionContainer = styled.div`
  width: 100%;
  background-color: ${Theme.palette.background.secondary};
  & h1 {
    font-size: 70px;
    font-weight: 600;
    margin: 0px;
  }
  & p:first-of-type {
    margin-top: 0px;
    // background-color: green;
  }
  & p {
    // text-align: justify;
    // margin: 0px;
    font-size: 20px;
    color: ${Theme.palette.text.subText};
  }
  @media ${Constants.media.mobile} {
    text-align: center;
  }
  @media ${Constants.media.desktop} {
    margin-top: -54px;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    padding: 0px calc((100vw - ${MAX_DESKTOP_WIDTH}) / 2);
    & p {
      padding-left: 6px;
    }
  }
`;

const DisplayIntroductionLeft = styled.div`
  @media ${Constants.media.mobile} {
    padding: 0px ${Theme.spacing.l};
    padding-top: ${Theme.spacing.l};
    width: 100%;
  }

  @media ${Constants.media.desktop} {
    flex: 1;
    padding: 0px ${CONTENT_PADDING};
  }
`;

const DisplayIntroductionRight = styled.div`
  @media ${Constants.media.mobile} {
    width: 100%;
  }

  @media ${Constants.media.desktop} {
    width: calc(400px + ${CONTENT_PADDING});
    height: 100%;
    padding-right: ${CONTENT_PADDING};
  }
`;

const DisplayIntroductionContent = styled.div`
  width: 100%;
  position: relative;
  padding: 10px 0px;
  box-sizing: border-box;

  & * {
    display: inline-block;
  }

  @media ${Constants.media.mobile} {
    text-align: center;
  }

  @media ${Constants.media.desktop} {
    // text-align: left;
    margin-left: -6px;
  }
`;

export default function DisplayIntroductionComponent({}: DisplayIntroductionProps) {
  return (
    <DisplayIntroductionContainer>
      <DisplayIntroductionLeft>
        <Fade top exit>
          <TransitionGroup enter exit>
            <div>
              <h1>DAVID VANN</h1>
              <Fade top>
                <p>
                  Hey, im <b>David</b>, web and app developer.
                </p>
                <p>
                  Hire me for anything tech related. You can press below to read
                  more about my lifestyle as a techprenuer.
                </p>
              </Fade>
            </div>
          </TransitionGroup>
        </Fade>

        <DisplayIntroductionContent>
          <Fade bottom>
            <Button varient="light">Websites</Button>
          </Fade>
          <Fade delay={100} bottom>
            <Button varient="light">Apps</Button>
          </Fade>
          <Fade delay={200} bottom>
            <Button varient="light">3D</Button>
          </Fade>
        </DisplayIntroductionContent>
      </DisplayIntroductionLeft>
      <Fade delay={0}>
        <DisplayIntroductionRight>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: animationData,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            height={500}
            width={400}
          />
        </DisplayIntroductionRight>
      </Fade>
    </DisplayIntroductionContainer>
  );
}
