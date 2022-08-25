import { Event } from "@prisma/client";
import React from "react";
import { EventDetails } from "../@types/eventDetails";
import { EventDetailsFooter } from "../components/EventDetailsFooter";
import SSWPageLayout from "./SSWPageLayout";

type Props = {
  children: React.ReactNode;
  pageTitle: string;
  event: Event;
};

const SSWEventDetailsLayout = (props: Props) => {
  return (
    <SSWPageLayout
      pageTitle={props.pageTitle}
      secondaryNavBackLink={{
        text: "Events",
        href: "/events",
      }}
      secondaryNavItems={[
        {
          label: "Details",
          href: `/events/${props.event.id}`,
        },
        {
          label: "Attendees",
          href: `/events/${props.event.id}/attendees`,
        },
      ]}
      secondaryNavTitle={props.event.name}
    >
      {props.children}
      <EventDetailsFooter event={props.event as EventDetails} />
    </SSWPageLayout>
  );
};

export default SSWEventDetailsLayout;
