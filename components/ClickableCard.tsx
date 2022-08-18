import { useStyletron } from "baseui";
import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
};

export const ClickableCard = ({ href, children }: Props) => {
  const [css, theme] = useStyletron();

  const cardCss = css({
    padding: theme.sizing.scale600,
    boxShadow: theme.lighting.shadow400,
    borderRadius: "1rem",
    height: "100%",
    ":hover": {
      boxShadow: theme.lighting.shadow500,
      cursor: "pointer",
    },
    ":active": {
      boxShadow: theme.lighting.overlay100,
    },
  });
  return (
    <Link href={href}>
      <div className={cardCss}>{children}</div>
    </Link>
  );
};
