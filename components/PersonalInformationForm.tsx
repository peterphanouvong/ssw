import { Button } from "baseui/button";
import { Skeleton } from "baseui/skeleton";
import { useUserContext } from "../context/userContext";
import { useUser } from "../hooks/useUser";
import { InputField } from "./InputField";

type Props = {};

export const PersonalInformationForm = (props: Props) => {
  const { oauthUser } = useUserContext();
  const { user, isLoading } = useUser(oauthUser?.id);

  if (isLoading)
    return (
      <Skeleton
        animation={true}
        rows={4}
        width="100%"
        overrides={{
          Row: {
            style: {
              height: "48px",
              marginTop: "28px",
              borderRadius: "12px",
            },
          },
        }}
      />
    );
  return (
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
          value: user?.profile.vnswId == null ? undefined : user.profile.vnswId,
        }}
        name="vnswId"
      />

      <Button>Save</Button>
    </form>
  );
};
