import { useStyletron } from "baseui";
import { HeadingLarge } from "baseui/typography";
import React from "react";
import Container from "../components/Container";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { SSWSecondaryNav } from "./SSWSecondaryNav";

type Props = {
  children: React.ReactNode;
  secondaryNavItems: {
    label: string;
    href: string;
  }[];
  secondaryNavTitle: string;
  secondaryNavBackLink?: {
    text: string;
    href: string;
  };
  pageTitle: string;
};

const SSWPageLayout = ({
  children,
  secondaryNavItems,
  secondaryNavTitle,
  secondaryNavBackLink,
  pageTitle,
}: Props) => {
  const [css, theme] = useStyletron();
  const isDesktop = useMediaQuery(theme.breakpoints.medium);

  const container = css({
    maxWidth: "1280px",
    margin: "auto",
    padding: "2rem",
  });
  return (
    <div className={isDesktop ? container : ""}>
      <div
        className={css({
          display: "flex",
          flexDirection: isDesktop ? "row" : "column",
          alignItems: "stretch",
          justifyContent: "stretch",
        })}
      >
        {secondaryNavItems ? (
          <SSWSecondaryNav
            items={secondaryNavItems}
            title={secondaryNavTitle}
            backLink={secondaryNavBackLink}
          />
        ) : null}

        <Container>
          <HeadingLarge style={{ marginTop: 0 }}>{pageTitle}</HeadingLarge>
          {children}
        </Container>
      </div>
    </div>
  );
};

export default SSWPageLayout;
