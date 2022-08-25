import type { NextPage } from "next";
import { PersonalInformationForm } from "../components/PersonalInformationForm";
import { SSWAppLayout } from "../layout/SSWAppLayout";
import SSWProfilePageLayout from "../layout/SSWProfilePageLayout";

const Profile: NextPage = () => {
  return (
    <SSWAppLayout>
      <SSWProfilePageLayout pageTitle="Personal information">
        <PersonalInformationForm />
      </SSWProfilePageLayout>
    </SSWAppLayout>
  );
};

export default Profile;
