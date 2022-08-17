import { Event } from "@prisma/client";
import { useStyletron } from "baseui";
import { HeadingXSmall } from "baseui/typography";
import dayjs from "dayjs";
import Link from "next/link";

type Props = {
  event: Event;
};

export const EventCard = ({ event }: Props) => {
  const [css, theme] = useStyletron();

  console.log(theme.animation);
  const cardCss = css({
    padding: theme.sizing.scale600,
    boxShadow: theme.boxShadow.elevation100,
    borderRadius: "1rem",
    transition: `${theme.animation.timing200} ${theme.animation.easeInCurve}`,
    ":hover": {
      boxShadow: theme.boxShadow.elevation200,
      cursor: "pointer",
      backgroundColor: theme.colors.grey50,
    },
  });

  return (
    <Link href={`events/${event.id}`}>
      <div className={cardCss}>
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
      </div>
    </Link>
  );
};
