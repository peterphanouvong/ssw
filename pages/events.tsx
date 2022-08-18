import type { NextPage } from "next";
import { EventList } from "../components/EventList";
import { SSWAppLayout } from "../layout/SSWAppLayout";
import SSWEventPageLayout from "../layout/SSWEventPageLayout";

const Events: NextPage = () => {
  return (
    <SSWAppLayout>
      <SSWEventPageLayout pageTitle="All events">
        <EventList />
      </SSWEventPageLayout>
    </SSWAppLayout>
  );
};

export default Events;
