import { Avatar } from "baseui/avatar";
import { Block } from "baseui/block";
import { Button } from "baseui/button";
import { Spinner } from "baseui/spinner";
import type { NextPage } from "next";
import { InputField } from "../components/InputField";
import { useUserContext } from "../context/userContext";
import { useUser } from "../hooks/useUser";
import { SSWAppLayout } from "../layout/SSWAppLayout";
import { HeadingLarge } from "baseui/typography";

const Profile: NextPage = () => {
  const { oauthUser } = useUserContext();
  const { user, isLoading } = useUser(oauthUser?.id);

  if (isLoading) return <Spinner />;
  return (
    <SSWAppLayout>
      <Block
        display="flex"
        alignItems="center"
        flexDirection="column"
        marginBottom="2rem"
        gridGap="1rem"
      >
        <Avatar size="96px" name={user?.firstName + " " + user?.lastName} />
        <HeadingLarge
          style={{
            marginTop: 0,
          }}
        >{`${user?.firstName} ${user?.lastName}`}</HeadingLarge>
      </Block>
      <form method="POST" action="/api/forms/profile">
        <input type="hidden" name="id" value={oauthUser?.id} />
        <InputField
          label="First name"
          initialState={{ value: user?.firstName }}
          name="firstName"
        />
        <InputField
          label="Last name"
          initialState={{ value: user!.lastName as string }}
          name="lastName"
        />
        <InputField
          label="Email"
          initialState={{ value: user?.email }}
          name="email"
        />
        <InputField
          label="Volleyball Australia ID"
          initialState={{ value: user?.profile.vnswId as string }}
          name="vnswId"
        />

        <Button>Save</Button>
      </form>
    </SSWAppLayout>
  );
};

export default Profile;
