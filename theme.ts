import { createTheme, Theme } from "baseui";
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
    buttonSecondaryFill: primitives.grey50,
    buttonSecondaryText: primitives.grey600,
    buttonSecondaryHover: primitives.grey100,
    buttonSecondaryActive: primitives.grey200,
    buttonSecondarySelectedFill: primitives.grey100,
    buttonSecondarySelectedText: primitives.grey600,
    buttonSecondarySpinnerForeground: primitives.grey600,
    buttonSecondarySpinnerBackground: primitives.grey200,
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
  boxShadow: {
    elevation100:
      "0px 1px 3px rgba(18, 20, 23, 0.06), 0px 1px 2px rgba(18, 20, 23, 0.12), 0px -1px 3px rgba(18, 20, 23, 0.06)",
    elevation200:
      "0px 2px 4px rgba(18, 20, 23, 0.06), 0px 3px 6px rgba(18, 20, 23, 0.07), 0px -2px 6px rgba(18, 20, 23, 0.06)",
    elevation300:
      "0px 3px 6px rgba(18, 20, 23, 0.08), 0px 10px 20px rgba(18, 20, 23, 0.08), 0px -3px 12px rgba(18, 20, 23, 0.04)",
    elevation400:
      "0px 6px 12px rgba(18, 20, 23, 0.06), 0px 15px 24px rgba(18, 20, 23, 0.07), 0px -4px 12px rgba(18, 20, 23, 0.05)",
  },
};
export const theme = createTheme(primitives, overrides);
