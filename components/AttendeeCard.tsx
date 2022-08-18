import { useStyletron } from "baseui";
import { Avatar } from "baseui/avatar";
import { EventUser } from "../@types/eventDetails";
import { ClickableCard } from "./ClickableCard";

type Props = {
  attendee: EventUser;
};

export const AttendeeCard = ({ attendee }: Props) => {
  const [css, theme] = useStyletron();
  const innerDivCss = css({
    display: "flex",
    flexDirection: "column",
  });
  const avatarWrapperCss = css({
    display: "flex",
    justifyContent: "center",
  });

  const fullname = `${attendee.user.firstName} ${attendee.user.lastName}`;
  return (
    <ClickableCard href={"#"}>
      <div className={innerDivCss}>
        <div className={avatarWrapperCss}>
          <Avatar size={theme.sizing.scale1600} name={fullname} />
        </div>
        <p>{fullname}</p>
      </div>
    </ClickableCard>
  );
};
