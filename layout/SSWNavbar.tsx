import { styled, useStyletron } from "baseui";
import { Avatar } from "baseui/avatar";
import { Button } from "baseui/button";
import { Drawer } from "baseui/drawer";
import { ALIGN, HeaderNavigation } from "baseui/header-navigation";
import {
  NavigationItem,
  NavigationList,
} from "baseui/header-navigation/styled-components";
import { StyledLink } from "baseui/link";
import { StatefulMenu } from "baseui/menu";
import { StatefulPopover } from "baseui/popover";
import { Spinner } from "baseui/spinner";
import Link from "next/link";
import { useState } from "react";
import { useUserContext } from "../context/userContext";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { useUser } from "../hooks/useUser";

const List = styled("ul", () => ({
  padding: 0,
}));

const ListItem = styled("li", ({ $theme }) => ({
  paddingTop: "1rem",
  listStyle: "none",
}));

type Props = {};

export const SSWNavbar = (props: Props) => {
  const { oauthUser, isLoading } = useUserContext();
  const { user } = useUser(oauthUser?.id);

  const [css, theme] = useStyletron();

  const bottomCss = css({
    position: "fixed",
    zIndex: 9999,
    bottom: 0,
    blockSize: theme.sizing.scale1600,
    background: theme.colors.white,
    padding: "0.5rem",
    borderTop: "1px solid " + theme.colors.borderAccent,
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
  });

  const [isProfileNavOpen, setIsProfileNavOpen] = useState<boolean>(false);

  const isTablet = useMediaQuery(theme.breakpoints.small);

  if (isLoading) return <Spinner />;

  return !!!user ? (
    // Not authenticated
    <HeaderNavigation>
      <NavigationList $align={ALIGN.left}>
        <NavigationItem>
          <Link href="/">
            {isTablet ? "Sydney South West Volleyball" : "SSWV"}
          </Link>
        </NavigationItem>
      </NavigationList>
      <NavigationList $align={ALIGN.center} />
      <NavigationList $align={ALIGN.right}>
        <NavigationItem>
          <StyledLink href="/api/auth/login">Sign in</StyledLink>
        </NavigationItem>
        <NavigationItem $style={{ paddingRight: "24px" }}>
          <Link href="/api/auth/register">
            <Button>Sign up</Button>
          </Link>
        </NavigationItem>
      </NavigationList>
    </HeaderNavigation>
  ) : isTablet ? (
    // Authenticated tablet
    <HeaderNavigation>
      <NavigationList $align={ALIGN.left}>
        <NavigationItem>
          <Link href="/">Sydney South West Volleyball</Link>
        </NavigationItem>
      </NavigationList>
      <NavigationList $align={ALIGN.center} />
      <NavigationList $align={ALIGN.right}>
        <NavigationItem>
          <StyledLink>
            <Link href="/events">Events</Link>
          </StyledLink>
        </NavigationItem>

        <NavigationItem $style={{ paddingRight: "24px" }}>
          <StatefulPopover
            placement="bottomRight"
            content={() => (
              <StatefulMenu
                overrides={{
                  List: {
                    style: {
                      width: "200px",
                    },
                  },
                }}
                items={[
                  {
                    label: "My profile",
                    href: "/profile",
                  },
                  {
                    label: "Sign out",
                    href: "/api/auth/logout",
                  },
                ]}
              />
            )}
          >
            <Button kind="tertiary" shape="round" style={{ padding: "4px" }}>
              <Avatar name={`${user.firstName} ${user.lastName}`} />
            </Button>
          </StatefulPopover>
        </NavigationItem>
      </NavigationList>
    </HeaderNavigation>
  ) : (
    // Authenticated mobile
    <>
      <HeaderNavigation>
        <NavigationList $align={ALIGN.left}>
          <NavigationItem>
            <Link href="/">SSWV</Link>
          </NavigationItem>
        </NavigationList>
        <NavigationList $align={ALIGN.center} />

        <NavigationList $align={ALIGN.right}>
          <NavigationItem $style={{ paddingRight: "24px" }}>
            <Button
              kind="tertiary"
              shape="round"
              onClick={() => setIsProfileNavOpen(true)}
              style={{ padding: "4px" }}
            >
              <Avatar name={`${user.firstName} ${user.lastName}`} />
            </Button>
            <Drawer
              isOpen={isProfileNavOpen}
              size="full"
              onClose={() => setIsProfileNavOpen(false)}
              overrides={{
                DrawerContainer: {
                  style: ({ $theme }) => ({
                    marginTop: "4rem",
                    borderTop: `1px solid ${$theme.colors.grey100}`,
                  }),
                },
                Backdrop: {
                  style: ({}) => ({
                    backgroundColor: "transparent",
                  }),
                },
              }}
            >
              <div
                className={css({
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                })}
              >
                <Avatar name={`${user.firstName} ${user.lastName}`} />
                <div
                  className={css({
                    display: "flex",
                    flexDirection: "column",
                  })}
                >
                  <span>{`${user.firstName} ${user.lastName}`}</span>
                  <span>{user.email}</span>
                </div>
              </div>

              <List>
                <ListItem>
                  <StyledLink>
                    <Link href="/profile">My profile</Link>
                  </StyledLink>
                </ListItem>
                <ListItem>
                  <StyledLink>
                    <Link href="/api/auth/logout">Sign out</Link>
                  </StyledLink>
                </ListItem>
              </List>
            </Drawer>
          </NavigationItem>
        </NavigationList>
      </HeaderNavigation>
      <div className={bottomCss}>
        <Link href="/">
          <Button kind="tertiary">Home</Button>
        </Link>
        <Link href="/events">
          <Button kind="tertiary">Events</Button>
        </Link>
      </div>
    </>
  );
};
