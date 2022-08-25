import { useStyletron } from "baseui";
import { EventUser } from "../@types/eventDetails";
import { AttendeeCard } from "./AttendeeCard";

type Props = {
  attendees: EventUser[];
};

export const AttendeeCardList = ({ attendees }: Props) => {
  const [css, theme] = useStyletron();
  const ulCss = css({
    listStyle: "none",
    padding: 0,
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: theme.sizing.scale600,
    alignItems: "stretch",
    width: "100%",
  });

  const liCss = css({});
  return (
    <ul className={ulCss}>
      {attendees.map((attendee) => (
        <li key={attendee.userId} className={liCss}>
          <AttendeeCard attendee={attendee} />
        </li>
      ))}
    </ul>
  );
};
