export const SCREEN_SIZES = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  tabletL: "968px",
  laptop: "1124px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const media = {
  mobile: `(max-width: ${SCREEN_SIZES.tablet})`,
  // tablet: `(min-width: ${SCREEN_SIZES.tablet}) and (max-width: ${SCREEN_SIZES.laptop})`,
  desktop: `(min-width: ${SCREEN_SIZES.tablet})`,
};
