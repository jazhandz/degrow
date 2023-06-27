import { media } from "@/styles/media";
import { spacing } from "@/styles/spacing";
import * as React from "react";
import styled from "styled-components";
import { IsDesktop } from "../Breakpoints/IsDesktop";
import { IsMobile } from "../Breakpoints/IsMobile";
import { Container } from "../Container";
import { Hr } from "../HR";
import { HeadingBlock } from "./HeadingBlock";
import { LinkBlock } from "./LinkBlock";
import { RichTextBlock } from "./RichTextBlock";
import { easeInOut, motion, MotionValue, useScroll, useSpring, useTransform, useVelocity } from "framer-motion";
import { fontSize } from "@/styles/fontSize";
import { RichText } from "../RichText";
import { ColorDataType } from "@/types/CMS/Generic";
import { color as colors } from "@/styles/color";
import { StoryBlokRichText } from "@/types/CMS/StoryBlok";
import { StoryblokPicture, StoryblokPictureProps } from "../StoryblokPicture";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { Picture } from "../Picture";

export interface FlavourBlockType {
  headingVarient?: "h1" | "h2";
  color?: [ColorDataType];
  gradient?: [ColorDataType, ColorDataType, ColorDataType];
  listItem?: boolean;
  title: string;
  description: string;
  ingredients: StoryBlokRichText;
  nutrition: StoryBlokRichText;
  isCollaboration: boolean;
  picture: [StoryblokPictureProps];
  headerMobilePicture: [] | [StoryblokPictureProps];
  headerDesktopPicture: [] | [StoryblokPictureProps];
}

const DESKTOP_HEIGHT = "max(80vh, 600px)";

const FOCUS_DISTANCE = 40;
const MAX_BLUR = 3;
const DISTANCE_MAX_DEVIATION = 50;
const BLUR_FORGIVENESS = 0;

// Images
const BLOOD_1_HEIGHT = 112;
const BLOOD_1_WIDTH = 128;
const BLOOD_1_OFFSET_X = 10;
const BLOOD_1_OFFSET_Y = 10;
const BLOOD_1_DISTANCE_Y = 50;

const IMAGE_LIST = [
  {
    src: "circle_5",
    width: 300,
    height: 300,
    offsetRight: 20,
    offsetY: 40,
    distanceY: 20,
    blurStart: 13,
    blurEnd: 0,
    scale: 0.8,
    rotateStart: -10,
    rotateEnd: 0,
  },
  {
    src: "circle_4",
    width: 300,
    height: 300,
    offsetRight: 1,
    translateX: 30,
    offsetY: -5,
    distanceY: 20,
    blurStart: 13,
    blurEnd: 0,
    scale: 0.9,
    rotateStart: -10,
    rotateEnd: 0,
  },
  {
    src: "circle_1",
    width: 300,
    height: 300,
    offsetLeft: 1,
    translateX: -30,
    offsetY: 0,
    distanceY: 30,
    blurStart: 13,
    blurEnd: 0,
    scale: 0.6,
    rotateStart: 10,
    rotateEnd: 20,
  },
  {
    src: "blood_1",
    width: 128,
    height: 112,
    offsetLeft: 10,
    offsetY: -5,
    distanceY: 50,
    blurStart: 10,
    blurEnd: 1,
    scale: 0.8,
    rotateStart: 60,
    rotateEnd: 70,
  },
  {
    src: "splodge_2",
    width: 128,
    height: 112,
    offsetLeft: 10,
    offsetY: 50,
    distanceY: 30,
    blurStart: 13,
    blurEnd: 0,
    scale: 1.3,
    rotateStart: -50,
    rotateEnd: -60,
  },
  {
    src: "circle_3",
    width: 300,
    height: 500,
    offsetLeft: 20,
    offsetY: 20,
    distanceY: 30,
    blurStart: 13,
    blurEnd: 0,
    scale: 0.8,
    rotateStart: -10,
    rotateEnd: 0,
  },
  {
    src: "blood_3",
    width: 128,
    height: 112,
    offsetLeft: 40,
    offsetY: 50,
    distanceY: 50,
    blurStart: 13,
    blurEnd: 0,
    scale: 0.5,
    rotateStart: 10,
    rotateEnd: 20,
  },
  {
    src: "splodge_3",
    width: 128,
    height: 112,
    offsetRight: 10,
    offsetY: 40,
    distanceY: 30,
    blurStart: 13,
    blurEnd: 0,
    scale: 0.8,
    rotateStart: 10,
    rotateEnd: 20,
  },
  {
    src: "circle_2",
    width: 300,
    height: 300,
    offsetRight: 14,
    offsetY: 0,
    distanceY: 50,
    blurStart: 13,
    blurEnd: 0,
    scale: 0.8,
    rotateStart: -50,
    rotateEnd: -60,
  },
  {
    src: "blood_4",
    width: 128,
    height: 112,
    offsetLeft: 20,
    offsetY: 30,
    distanceY: 60,
    blurStart: 16,
    blurEnd: 4,
    scale: 1,
    rotateStart: 10,
    rotateEnd: 20,
  },
  {
    src: "blood_5",
    width: 128,
    height: 112,
    offsetRight: 10,
    offsetY: 50,
    distanceY: 30,
    blurStart: 13,
    blurEnd: 0,
    scale: 0.4,
    rotateStart: 10,
    rotateEnd: 20,
  },
  {
    src: "blood_2",
    width: 128,
    height: 112,
    offsetRight: 7,
    offsetY: -10,
    distanceY: 90,
    blurStart: 13,
    blurEnd: 3,
    scale: 1,
    rotateStart: 10,
    rotateEnd: 20,
  },
];

const ANIMATION_TRANSITION = { duration: 3, type: "spring" };

const BiologyContainerStyled = styled.div`
  height: ${DESKTOP_HEIGHT};
  position: relative;
  margin-top: -50px;
  margin-bottom: ${spacing.l};
  /* overflow-x: hidden;
  overflow-y: visible; */
`;

const MotionContainerStyled = styled(motion.div)`
  position: absolute;
`;

export function BiologyBlock() {
  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 40,
  });

  return (
    <BiologyContainerStyled ref={ref}>
      {IMAGE_LIST.map(image => (
        <AnimatedImage key={image.src} image={image} progress={smoothProgress} />
      ))}
    </BiologyContainerStyled>
  );
}

type AnimatedImageType = {
  src: string;
  width: number;
  height: number;
  translateX?: number;
  offsetLeft?: number;
  offsetRight?: number;
  offsetY: number;
  distanceY: number;
  blurStart: number;
  blurEnd: number;
  scale: number;
  rotateStart: number;
  rotateEnd: number;
};

function AnimatedImage({ image, progress }: { image: AnimatedImageType; progress: any }) {
  const animateY = useTransform(progress, [0.2, 1], [`${image.offsetY}%`, `${image.offsetY + image.distanceY}%`], {
    ease: easeInOut,
  });

  const blurAmount =
    ((image.distanceY < FOCUS_DISTANCE ? FOCUS_DISTANCE - image.distanceY : image.distanceY - FOCUS_DISTANCE) /
      DISTANCE_MAX_DEVIATION) *
    MAX_BLUR;

  return (
    <MotionContainerStyled
      style={{
        top: animateY,
        ...(image.offsetLeft ? { left: `${image.offsetLeft}%` } : {}),
        ...(image.offsetRight ? { right: `${image.offsetRight}%` } : {}),
        width: `${image.width}px`,
        scale: image.scale,
        x: `${image.translateX}%`,
      }}
    >
      <motion.div
        transition={{ ...ANIMATION_TRANSITION, delay: 0 }}
        initial={{
          opacity: 0,
          filter: `blur(${blurAmount + 5}px)`,
          transform: `rotate(${image.rotateStart}deg)`,
        }}
        whileInView={{
          opacity: 1,
          filter: `blur(${blurAmount < BLUR_FORGIVENESS ? 0 : blurAmount}px)`,
          transform: `rotate(${image.rotateEnd}deg)`,
        }}
        viewport={{ once: true }}
      >
        <Picture
          src={`/images/organic/${image.src}`}
          objectFit={"contain"}
          supportedTypes={["png"]}
          id={`${image.src}`}
          width={image.width}
          height={image.height}
          alt={`${image.src}`}
        />
      </motion.div>
    </MotionContainerStyled>
  );
}
