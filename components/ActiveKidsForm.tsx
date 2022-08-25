import { Button } from "baseui/button";
import { Skeleton } from "baseui/skeleton";
import { useUserContext } from "../context/userContext";
import { useUser } from "../hooks/useUser";
import { InputField } from "./InputField";

type Props = {};

export const ActiveKidsForm = (props: Props) => {
  const { oauthUser } = useUserContext();
  const { user, isLoading } = useUser(oauthUser?.id);

  if (isLoading)
    return (
      <Skeleton
        animation={true}
        rows={3}
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
    <form>
      <input type="hidden" name="id" value={user?.id} />
      <InputField label="Voucher number" name="voucherNumber" />
      <InputField label="Name" name="name" />
      <InputField label="Expiry date" name="date" />
      <Button>Submit</Button>
    </form>
  );
};
