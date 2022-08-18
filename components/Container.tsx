import { useStyletron } from "baseui";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  const [css] = useStyletron();
  const container = css({
    maxWidth: "1100px",
    padding: "1.5rem",
    width: "100%",
  });
  return <div className={container}>{children}</div>;
};

export default Container;
