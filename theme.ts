import { createTheme, LightTheme, lightThemePrimitives, Theme } from "baseui";
import { SSWPrimitives } from "./@types/overrides";

const primitives: SSWPrimitives = {
  ...lightThemePrimitives,
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
};

const overrides: Theme = {
  ...LightTheme,
  colors: {
    ...LightTheme.colors,
    buttonPrimaryFill: primitives.grey900,
    buttonPrimaryText: primitives.white,
    buttonPrimaryHover: primitives.grey800,
    buttonPrimaryActive: primitives.grey600,
    buttonPrimarySelectedFill: primitives.grey700,
    buttonPrimarySelectedText: primitives.white,
    buttonPrimarySpinnerForeground: primitives.grey200,
    buttonPrimarySpinnerBackground: primitives.grey600,
    inputFill: primitives.grey50,
    inputBorder: primitives.grey50,
    backgroundAccent: primitives.grey50,
    borderAccent: primitives.grey100,
    contentSecondary: primitives.grey500,
  },
  borders: {
    ...LightTheme.borders,
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
