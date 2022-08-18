import { useStyletron } from "baseui";
import { Button } from "baseui/button";
import { ChevronLeft } from "baseui/icon";
import { StyledLink } from "baseui/link";
import { HeadingXSmall, LabelMedium } from "baseui/typography";
import Link from "next/link";
import { useMediaQuery } from "../hooks/useMediaQuery";

type Props = {
  items: {
    label: string;
    href: string;
  }[];
  title: string;
  backLink?: {
    text: string;
    href: string;
  };
};

export const SSWSecondaryNav = ({ items, title, backLink }: Props) => {
  const [css, theme] = useStyletron();
  const isDesktop = useMediaQuery(theme.breakpoints.medium);

  const wrapperCss = css({
    padding: "0.75rem 1rem",
    display: "flex",
    gap: "1rem",
    position: "sticky",
    top: 0,
    backgroundColor: theme.colors.white,
  });

  const desktopWrapper = css({
    display: "flex",
    flexDirection: "column",
    padding: "2rem 2rem 2rem 2rem",
    minInlineSize: "250px",
  });

  const desktopUl = css({
    display: "flex",
    flexDirection: "column",
    listStyle: "none",
    gap: "1.2rem",
    padding: 0,
  });

  const backLinkWrapperCss = css({
    display: "flex",
    alignItems: "center",
    gap: theme.sizing.scale400,
    marginLeft: "-1.75rem",
    color: theme.colors.contentSecondary,
  });

  return isDesktop ? (
    <div className={desktopWrapper}>
      {backLink ? (
        <div className={backLinkWrapperCss}>
          <ChevronLeft />
          <Link href={backLink.href}>{backLink.text}</Link>
        </div>
      ) : null}

      <HeadingXSmall style={{ marginTop: "4.5rem", marginBottom: "2rem" }}>
        {title}
      </HeadingXSmall>
      <ul className={desktopUl}>
        {items.map((item, i) => (
          <li key={i}>
            <Link href={item.href}>
              <StyledLink style={{ cursor: "pointer" }}>
                {item.label}
              </StyledLink>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <>
      <div className={wrapperCss}>
        {items.map((item, i) => (
          <Link key={i} href={item.href}>
            <Button kind="secondary" size="compact" shape="pill">
              {item.label}
            </Button>
          </Link>
        ))}
      </div>
      <LabelMedium
        style={{
          margin: "0 0 0 1.5rem",
        }}
      >
        {title}
      </LabelMedium>
    </>
  );
};
