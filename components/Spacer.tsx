import { useStyletron } from "baseui";
import React from "react";

type Props = {
  children?: React.ReactNode;
};

export const Spacer = ({ children }: Props) => {
  const [css, theme] = useStyletron();
  const spacerCss = css({
    marginBottom: theme.sizing.scale600,
  });
  return <div className={spacerCss}>{children}</div>;
};
