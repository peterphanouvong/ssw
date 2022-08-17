import { styled, useStyletron } from "baseui";
import { Block } from "baseui/block";
import { Button } from "baseui/button";
import { StyledLink } from "baseui/link";
import { HeadingMedium, HeadingSmall, HeadingXSmall } from "baseui/typography";
import Link from "next/link";
import { useMediaQuery } from "../hooks/useMediaQuery";

type Props = {
  items: {
    label: string;
    href: string;
  }[];
  title: string;
};

export const SSWSecondaryNav = ({ items, title }: Props) => {
  const [css, theme] = useStyletron();
  const isDesktop = useMediaQuery(theme.breakpoints.medium);

  const wrapperCss = css({
    padding: "0.5rem 1rem",
    display: "flex",
    gap: "1rem",
    position: "sticky",
    top: 0,
    backgroundColor: theme.colors.white,
  });

  const desktopWrapper = css({
    display: "flex",
    flexDirection: "column",
    padding: "2rem 4rem",
    minInlineSize: "250px",
  });

  const desktopUl = css({
    display: "flex",
    flexDirection: "column",
    listStyle: "none",
    gap: "1.2rem",
    padding: 0,
  });

  return isDesktop ? (
    <div className={desktopWrapper}>
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
    <div className={wrapperCss}>
      {items.map((item, i) => (
        <Link key={i} href={item.href}>
          <Button kind="secondary" size="compact" shape="pill">
            {item.label}
          </Button>
        </Link>
      ))}
    </div>
  );
};
