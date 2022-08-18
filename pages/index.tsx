import type { NextPage } from "next";
import { useUserContext } from "../context/userContext";
import { useUser } from "../hooks/useUser";
import { SSWAppLayout } from "../layout/SSWAppLayout";

const Home: NextPage = () => {
  const context = useUserContext();

  const { user } = useUser(context.oauthUser?.id);

  return (
    <SSWAppLayout>
      <div>
        <pre>{JSON.stringify(context, null, 2)}</pre>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </SSWAppLayout>
  );
};

export default Home;
