import { toaster } from "baseui/toast";
import { EventDetails } from "../../@types/eventDetails";
import { EventAttendeesCard } from "../../components/EventAttendeesCard";
import { EventDetailsCard } from "../../components/EventDetailsCard";
import { EventDetailsFooter } from "../../components/EventDetailsFooter";
import { useUserContext } from "../../context/userContext";
import { SSWAppLayout } from "../../layout/SSWAppLayout";
import SSWEventDetailsLayout from "../../layout/SSWEventDetailsPageLayout";

type Props = {
  event: EventDetails;
};

export async function getServerSideProps({ params }: any) {
  const res = await fetch(`http://localhost:3000/api/events/${params.id}`);
  const event = await res.json();

  return {
    props: {
      event: event,
    },
  };
}

function Event({ event }: Props) {
  const { oauthUser } = useUserContext();

  const handleButton = async () => {
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

  return (
    <SSWAppLayout>
      <SSWEventDetailsLayout event={event} pageTitle="Event details">
        <EventDetailsCard event={event} />
        <EventAttendeesCard event={event} />
        <EventDetailsFooter event={event} />
      </SSWEventDetailsLayout>
    </SSWAppLayout>
  );
}

export default Event;
