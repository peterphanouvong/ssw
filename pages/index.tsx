import { styled } from "baseui";
import type { NextPage } from "next";
import { useUserContext } from "../context/userContext";
import { useUser } from "../hooks/useUser";
import { SSWAppLayout } from "../layout/SSWAppLayout";

const PaddedDiv = styled("div", ({ $theme }) => ({
  padding: "12px",
}));

const Home: NextPage = () => {
  const context = useUserContext();

  const { user } = useUser(context.oauthUser?.id);

  return (
    <SSWAppLayout>
      <PaddedDiv>
        <pre>{JSON.stringify(context, null, 2)}</pre>

        <pre>{JSON.stringify(user, null, 2)}</pre>
      </PaddedDiv>
    </SSWAppLayout>
  );
};

export default Home;
