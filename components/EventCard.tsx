import { Event } from "@prisma/client";
import { useStyletron } from "baseui";
import { HeadingXSmall } from "baseui/typography";
import dayjs from "dayjs";
import { ClickableCard } from "./ClickableCard";

type Props = {
  event: Event;
};

export const EventCard = ({ event }: Props) => {
  const [css] = useStyletron();

  return (
    <ClickableCard href={`events/${event.id}`}>
      <HeadingXSmall
        className={css({
          margin: 0,
        })}
      >
        {event.name}
      </HeadingXSmall>
      <p
        className={css({
          margin: 0,
        })}
      >
        {dayjs(event.startTime).format("DD MMM YYYY")} •{" "}
        {dayjs(event.startTime).format("h:mm A")}
      </p>
      <p>{event.location}</p>
    </ClickableCard>
  );
};
