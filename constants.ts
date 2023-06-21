export const SCREEN_SIZES = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  tabletL: "968px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

const themeColors = {
  theme1: "#EF5358", // Red
  theme1dark: "#D43A3F", // Red Dark
  theme2: "#5559D6", // Blue
  theme2dark: "#2126D6", // Blue Dark
  theme3: "#FBDE6B", // Yellow
  theme3dark: "#E3B600", // Yellow Dark
  white: "#ffffff",
  lightGrey: "#E4EDF0", // Hint Darker than white
  darkGrey60: "#363D4D",
  darkGrey90: "#1A181C",
};

export const Theme = {
  palette: {
    ...themeColors,
    text: {
      accent: themeColors.theme1,
      default: themeColors.darkGrey90, // Theme 1
      subText: themeColors.darkGrey60,
    },
    background: {
      primary: "#06013E",
      secondary: "#F3F5F7",
    },
    backgroundImage: {
      // primary: `linear-gradient(95deg, ${themeColors.blue},${themeColors.pink},${themeColors.yellow})`,
      // secondary: `radial-gradient(${themeColors.whiteShade},${themeColors.white})`,
      // tirtiary: `radial-gradient(${themeColors.darkBlue},${themeColors.veryDarkBlue})`,
    },
  },
  spacing: {
    xxs: "4px",
    xs: "8px",
    s: "12px",
    m: "20px",
    l: "32px",
    xl: "52px",
    xxl: "84px",
  },
  fontSize: {
    regular: "16px",
    title: "32px",
  },
  font: {
    default: "Source Sans Pro', sans-serif",
  },
};

export const Constants = {
  media: {
    small: `(min-width: ${SCREEN_SIZES.tablet})`,
    medium: `(min-width: ${SCREEN_SIZES.laptop})`,
    large: `(min-width: ${SCREEN_SIZES.desktop})`,
    theme: Theme,
    mobile: `(max-width: ${SCREEN_SIZES.tablet})`,
    tablet: `(min-width: ${SCREEN_SIZES.tablet}) and (max-width: ${SCREEN_SIZES.laptop})`,
    desktop: `(min-width: ${SCREEN_SIZES.tablet})`,
  },
  mailchimp: {
    url: "https://degrowlab.us21.list-manage.com/subscribe/post?u=eefb7133bae66bdab17068d9f&amp;id=020119e48d&amp;f_id=00a658e1f0",
  },
  language: "en-us",
  style: {
    htmlBackgroundColor: `#F3F5F7`,
    htmlBodyColor: Theme.palette.white,
  },
};
