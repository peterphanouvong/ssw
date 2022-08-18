import { useStyletron } from "baseui";
import { StyledLink } from "baseui/link";
import { HeadingXSmall } from "baseui/typography";
import Link from "next/link";
import { EventDetails } from "../@types/eventDetails";
import { AttendeeCardList } from "./AttendeeCardList";

type Props = {
  event: EventDetails;
};

export const EventAttendeesCard = ({ event }: Props) => {
  const [css, theme] = useStyletron();
  const headingWrapperCss = css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBlockStart: theme.sizing.scale1200,
    marginBlockEnd: theme.sizing.scale900,
  });

  console.log(event);

  return (
    <div>
      <div className={headingWrapperCss}>
        <HeadingXSmall
          style={{
            margin: 0,
          }}
        >
          Attendees
        </HeadingXSmall>
        <Link href={`/events/${event?.id}/attendees`}>
          <StyledLink style={{ cursor: "pointer" }}>See all</StyledLink>
        </Link>
      </div>
      <AttendeeCardList attendees={event.attendees} />
    </div>
  );
};
