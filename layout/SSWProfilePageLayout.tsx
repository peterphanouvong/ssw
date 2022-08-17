import React from "react";
import SSWPageLayout from "./SSWPageLayout";

type Props = {
  children: React.ReactNode;
  pageTitle: string;
};

const SSWProfilePageLayout = (props: Props) => {
  return (
    <SSWPageLayout
      pageTitle={props.pageTitle}
      secondaryNavItems={[
        {
          label: "Personal information",
          href: "/profile/",
        },
        {
          label: "Active Kids Voucher",
          href: "/profile/active-kids",
        },
      ]}
      secondaryNavTitle="My profile"
    >
      {props.children}
    </SSWPageLayout>
  );
};

export default SSWProfilePageLayout;
