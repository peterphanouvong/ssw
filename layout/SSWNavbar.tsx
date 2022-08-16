import { Avatar } from "baseui/avatar";
import { Button } from "baseui/button";
import { Drawer } from "baseui/drawer";
import { ALIGN, HeaderNavigation } from "baseui/header-navigation";
import { ChevronDown, Menu } from "baseui/icon";
import {
  NavigationItem,
  NavigationList,
} from "baseui/header-navigation/styled-components";
import { StyledLink } from "baseui/link";
import { Spinner } from "baseui/spinner";
import Link from "next/link";
import { useState } from "react";
import { useUserContext } from "../context/userContext";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { useUser } from "../hooks/useUser";
import { theme } from "../theme";

import { styled } from "baseui";
import { useStyletron } from "styletron-react";
import { StatefulPopover } from "baseui/popover";
import { Icon } from "baseui/icon";
import { StatefulMenu } from "baseui/menu";
import { Block } from "baseui/block";

const AvatarWrapper = styled("div", ({ $theme }) => ({
  cursor: "pointer",
}));

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

  const [css] = useStyletron();

  const [isProfileNavOpen, setIsProfileNavOpen] = useState<boolean>(false);
  const [isMainNavOpen, setIsMainNavOpen] = useState<boolean>(false);

  const isTablet = useMediaQuery(theme.breakpoints.small);

  if (isLoading) return <Spinner />;

  return !!!user ? (
    // Not authenticated
    <HeaderNavigation>
      <NavigationList $align={ALIGN.left}>
        <NavigationItem>
          <Link href="/">Sydney South West Volleyball</Link>
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
            <Button
              kind="tertiary"
              shape="round"
              overrides={{
                BaseButton: {
                  style: ({ $theme }) => ({
                    padding: "4px",
                  }),
                },
              }}
            >
              <Avatar name={`${user.firstName} ${user.lastName}`} />
            </Button>
          </StatefulPopover>
        </NavigationItem>
      </NavigationList>
    </HeaderNavigation>
  ) : (
    // Authenticated mobile
    <HeaderNavigation>
      <NavigationList $align={ALIGN.left}>
        <NavigationItem>
          <Button onClick={() => setIsMainNavOpen(true)} kind="tertiary">
            <Menu />
          </Button>
          <Drawer
            isOpen={isMainNavOpen}
            size="full"
            onClose={() => setIsMainNavOpen(false)}
            anchor="left"
            overrides={{
              DrawerContainer: {
                style: ({ $theme }) => ({
                  marginTop: "4rem",
                  borderTop: `1px solid ${$theme.colors.grey100}`,
                }),
              },
              Backdrop: {
                style: ({ $theme }) => ({
                  background: "transparent",
                }),
              },
            }}
          >
            <List>
              <ListItem>
                <StyledLink>
                  <Link href="/">Home</Link>
                </StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink>
                  <Link href="/events">Events</Link>
                </StyledLink>
              </ListItem>
            </List>
          </Drawer>
        </NavigationItem>
      </NavigationList>
      <NavigationList $align={ALIGN.center}>
        <NavigationItem>
          <Link href="/">SSWV</Link>
        </NavigationItem>
      </NavigationList>
      <NavigationList $align={ALIGN.right}>
        <NavigationItem $style={{ paddingRight: "24px" }}>
          <Button
            kind="tertiary"
            shape="round"
            overrides={{
              BaseButton: {
                style: ({ $theme }) => ({
                  padding: "4px",
                }),
              },
            }}
            onClick={() => setIsProfileNavOpen(true)}
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
                style: ({ $theme }) => ({
                  background: "transparent",
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
                  <Link href="/profile">My Profile</Link>
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
  );
};
