import { createTheme } from "baseui";
import { LightTheme } from "baseui";
const primitives = {
  ...LightTheme,
  white: "#ffffff",
  grey50: "#f8f8f9",
  grey100: "#d6dbe0",
  grey200: "#bcc4cd",
  grey300: "#a2adb9",
  grey400: "#8896a5",
  grey500: "#6d7e92",
  grey600: "#586574",
  grey700: "#424c57",
  grey800: "#2c333a",
  grey900: "#16191d",
  accent: "#F127E4", // hot pink
  accent50: "#FDEDFC",
  accent100: "#FCD3F9",
  accent200: "#F89FF3",
  accent300: "#F45AEA",
  accent400: "#F127E4",
  accent500: "#B71DAD",
  accent600: "#901788",
  accent700: "#600F5B",
  borderRadius: "0.5rem",
  borderRadius2: "1rem",
};
const overrides = {
  colors: {
    buttonPrimaryFill: primitives.grey900,
    buttonPrimaryText: primitives.white,
    buttonPrimaryHover: primitives.grey800,
    buttonPrimaryActive: primitives.grey600,
    buttonPrimarySelectedFill: primitives.grey700,
    buttonPrimarySelectedText: primitives.white,
    buttonPrimarySpinnerForeground: primitives.grey200,
    buttonPrimarySpinnerBackground: primitives.grey600,
    buttonSecondaryFill: primitives.accent100,
    buttonSecondaryText: primitives.accent,
    buttonSecondaryHover: primitives.accent200,
    buttonSecondaryActive: primitives.accent300,
    buttonSecondarySelectedFill: primitives.accent200,
    buttonSecondarySelectedText: primitives.accent,
    buttonSecondarySpinnerForeground: primitives.accent700,
    buttonSecondarySpinnerBackground: primitives.accent300,
    inputFill: primitives.grey50,
    inputBorder: primitives.grey50,
  },
  borderRadius: {
    small: primitives.borderRadius,
    medium: primitives.borderRadius2,
  },
  breakpoints: {
    small: 768,
    medium: 1024,
    large: 1440,
  },
  mediaQuery: {
    small: "@media screen and (min-width: 768px)",
    medium: "@media screen and (min-width: 1024px)",
    large: "@media screen and (min-width: 1440px)",
  },
};
export const theme = createTheme(primitives, overrides);
