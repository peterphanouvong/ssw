import { Button } from "baseui/button";
import { StyledLink } from "baseui/link";
import { Spinner } from "baseui/spinner";
import type { NextPage } from "next";
import Link from "next/link";
import { InputField } from "../components/InputField";
import { useUserContext } from "../context/userContext";
import { useUser } from "../hooks/useUser";
import { SSWAppLayout } from "../layout/SSWAppLayout";
import SSWProfilePageLayout from "../layout/SSWProfilePageLayout";

const Profile: NextPage = () => {
  const { oauthUser } = useUserContext();
  const { user, isLoading } = useUser(oauthUser?.id);

  if (!oauthUser)
    return (
      <>
        you must be logged in to view this page.{" "}
        <Link href="/api/auth/login">
          <StyledLink style={{ cursor: "pointer" }}>Log in</StyledLink>
        </Link>
      </>
    );
  if (isLoading) return <Spinner />;
  return (
    <SSWAppLayout>
      <SSWProfilePageLayout pageTitle="Personal information">
        <form method="POST" action="/api/forms/profile">
          <input type="hidden" name="id" value={oauthUser?.id} />
          <InputField
            label="First name"
            initialState={{ value: user?.firstName }}
            name="firstName"
          />
          <InputField
            label="Last name"
            initialState={{
              value: user?.lastName == null ? undefined : user.lastName,
            }}
            name="lastName"
          />
          <InputField
            label="Email"
            initialState={{ value: user?.email }}
            name="email"
          />
          <InputField
            label="Volleyball Australia ID"
            initialState={{
              value:
                user?.profile.vnswId == null ? undefined : user.profile.vnswId,
            }}
            name="vnswId"
          />

          <Button>Save</Button>
        </form>
      </SSWProfilePageLayout>
    </SSWAppLayout>
  );
};

export default Profile;
