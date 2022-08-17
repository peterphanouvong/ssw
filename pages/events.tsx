import { Event } from "@prisma/client";
import { TableBuilder, TableBuilderColumn } from "baseui/table-semantic";
import dayjs from "dayjs";
import type { NextPage } from "next";
import Link from "next/link";
import useSWR from "swr";
import { EventList } from "../components/EventList";
import { SSWAppLayout } from "../layout/SSWAppLayout";
import SSWEventPageLayout from "../layout/SSWEventPageLayout";
import { fetcher } from "../utils/fetcher";

const Events: NextPage = () => {
  const { data: events = [] } = useSWR("/api/events/all", fetcher);

  console.log(events);
  return (
    <SSWAppLayout>
      <SSWEventPageLayout pageTitle="All events">
        <EventList />
      </SSWEventPageLayout>
    </SSWAppLayout>
  );
};

export default Events;
