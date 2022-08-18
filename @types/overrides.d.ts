import { Theme } from "baseui";
import { Override, OverrideObject, Overrides } from "baseui/helpers/overrides";
import { ColorTokens, Primitives, Sizing } from "baseui/themes";

export type ThemeOverrides = Theme & {};

type SSWPrimitives = Primitives & {
  grey50: string;
  grey100: string;
  grey200: string;
  grey300: string;
  grey400: string;
  grey500: string;
  grey600: string;
  grey700: string;
  grey800: string;
  grey900: string;
};

const test = Theme;
