import { EventDetails } from "../../@types/eventDetails";
import { EventAttendeesCard } from "../../components/EventAttendeesCard";
import { EventDetailsCard } from "../../components/EventDetailsCard";
import { EventDetailsFooter } from "../../components/EventDetailsFooter";
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
  return (
    <SSWAppLayout>
      <SSWEventDetailsLayout event={event} pageTitle="Event details">
        <EventDetailsCard event={event} />
        <EventAttendeesCard event={event} />
      </SSWEventDetailsLayout>
    </SSWAppLayout>
  );
}

export default Event;
