import { Event } from "@prisma/client";
import { useStyletron } from "baseui";
import { Card } from "baseui/card";
import dayjs from "dayjs";
import { AiOutlineClockCircle, AiOutlineEnvironment } from "react-icons/ai";

type Props = {
  event: Event;
};

export const EventDetailsCard = ({ event }: Props) => {
  const [css, theme] = useStyletron();
  const ulCss = css({
    padding: 0,
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: theme.sizing.scale600,
  });

  const liCss = css({
    display: "flex",
    alignItems: "start",
    gap: theme.sizing.scale600,
  });

  const iconCss = css({
    minWidth: theme.sizing.scale900,
  });

  return (
    <Card overrides={{}}>
      <ul className={ulCss}>
        <li className={liCss}>
          <AiOutlineClockCircle
            className={iconCss}
            fontSize={theme.sizing.scale800}
          />
          {dayjs(event.startTime).format("dddd, MMMM D, YYYY")} at{" "}
          {dayjs(event.startTime).format("hh:mm a")} to{" "}
          {dayjs(event.endTime).format("dddd, MMMM D, YYYY")} at{" "}
          {dayjs(event.endTime).format("hh:mm a")}
        </li>
        <li className={liCss}>
          <AiOutlineEnvironment
            className={iconCss}
            fontSize={theme.sizing.scale800}
          />
          {event.location}
        </li>
      </ul>
    </Card>
  );
};
