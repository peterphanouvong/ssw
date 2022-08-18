import { Event } from "@prisma/client";
import { useStyletron } from "baseui";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { EventCard } from "./EventCard";

type Props = {};

export const EventList = (props: Props) => {
  const [css] = useStyletron();
  const wrapper = css({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  });

  const { data: events = [] } = useSWR("/api/events/all", fetcher);
  return (
    <div className={wrapper}>
      {events.map((event: Event) => (
        <EventCard event={event} key={event.id} />
      ))}
    </div>
  );
};
