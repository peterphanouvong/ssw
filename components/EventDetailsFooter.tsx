import { useStyletron } from "baseui";
import { Button } from "baseui/button";
import { toaster } from "baseui/toast";
import dayjs from "dayjs";
import { EventDetails } from "../@types/eventDetails";
import { useUserContext } from "../context/userContext";

type Props = {
  event: EventDetails;
};

export const EventDetailsFooter = ({ event }: Props) => {
  const { oauthUser } = useUserContext();
  const [css, theme] = useStyletron();

  const handleJoinEvent = async () => {
    const data = await fetch("/api/events/join", {
      method: "POST",
      body: JSON.stringify({
        userId: oauthUser?.id,
        eventId: event.id,
      }),
    });
    if (data.status === 200) {
      const res = await data.json();
      console.log(res);
      toaster.positive(<>Successfully joined {event.name}!</>);
    } else {
      const res = await data.json();
      toaster.negative(<>{res.error.message}</>);
    }
  };

  const footerCss = css({
    position: "fixed",
    bottom: theme.sizing.scale1600,
    left: 0,
    width: "100%",
    alignItems: "center",
    paddingBlock: theme.sizing.scale600,
    paddingInline: theme.sizing.scale900,
    background: theme.colors.backgroundAccent,

    [theme.mediaQuery.small]: {
      bottom: 0,
    },
  });

  const footerInnerCss = css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxInlineSize: "1150px",
    margin: "auto",
  });

  const footerButtonGroupCss = css({
    display: "flex",
    gap: theme.sizing.scale600,
  });

  const footerPriceAndButtonsCss = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    [theme.mediaQuery.small]: {
      width: "auto",
      gap: theme.sizing.scale600,
    },
  });

  const footerNameAndTimeCss = css({
    display: "none",

    [theme.mediaQuery.small]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "start",
      gap: theme.sizing.scale300,
    },
  });

  return (
    <div className={footerCss}>
      <div className={footerInnerCss}>
        <div className={footerNameAndTimeCss}>
          <p>
            {dayjs(event.startTime).format("ddd, MMM DD")} ·{" "}
            {dayjs(event.startTime).format("h:mm a")}
          </p>
          <p>
            <strong>{event.name}</strong>
          </p>
        </div>
        <div className={footerPriceAndButtonsCss}>
          <div>
            <span>{`$${event.price}`}</span>
          </div>
          <div className={footerButtonGroupCss}>
            <Button kind="secondary">Share</Button>
            <Button onClick={handleJoinEvent}>Join Event</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
