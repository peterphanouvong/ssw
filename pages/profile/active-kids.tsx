import { Button } from "baseui/button";
import { Spinner } from "baseui/spinner";
import React from "react";
import { InputField } from "../../components/InputField";
import { useUserContext } from "../../context/userContext";
import { useUser } from "../../hooks/useUser";
import { SSWAppLayout } from "../../layout/SSWAppLayout";
import SSWProfilePageLayout from "../../layout/SSWProfilePageLayout";

type Props = {};

export default function ActiveKids({}: Props) {
  const { oauthUser } = useUserContext();
  const { user, isLoading } = useUser(oauthUser?.id);

  if (isLoading) return <Spinner />;

  return (
    <SSWAppLayout>
      <SSWProfilePageLayout pageTitle="Active Kids Voucher">
        <form>
          <input type="hidden" name="id" value={user?.id} />
          <InputField label="Voucher number" name="voucherNumber" />
          <InputField label="Name" name="name" />
          <InputField label="Expiry date" name="date" />
          <Button>Submit</Button>
        </form>
      </SSWProfilePageLayout>
    </SSWAppLayout>
  );
}
