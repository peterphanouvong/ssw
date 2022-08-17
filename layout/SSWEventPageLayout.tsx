import React from "react";
import SSWPageLayout from "./SSWPageLayout";

type Props = {
  children: React.ReactNode;
  pageTitle: string;
};

const SSWEventPageLayout = (props: Props) => {
  return (
    <SSWPageLayout
      pageTitle={props.pageTitle}
      secondaryNavItems={[
        {
          label: "All events",
          href: "/events",
        },
        {
          label: "My events",
          href: "/events/mine",
        },
      ]}
      secondaryNavTitle="My profile"
    >
      {props.children}
    </SSWPageLayout>
  );
};

export default SSWEventPageLayout;
