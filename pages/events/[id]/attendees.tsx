import { TableBuilder, TableBuilderColumn } from "baseui/table-semantic";
import { EventDetails, EventUser } from "../../../@types/eventDetails";
import { SSWAppLayout } from "../../../layout/SSWAppLayout";
import SSWEventDetailsLayout from "../../../layout/SSWEventDetailsPageLayout";

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

function EventAttendees({ event }: Props) {
  return (
    <SSWAppLayout>
      <SSWEventDetailsLayout pageTitle="Event attendees" event={event}>
        {/* <pre>{JSON.stringify(event, null, 2)}</pre> */}
        <TableBuilder data={event.attendees}>
          <TableBuilderColumn header="Name">
            {(attendee: EventUser) => (
              <>
                {attendee.user.firstName} {attendee.user.lastName}
              </>
            )}
          </TableBuilderColumn>
        </TableBuilder>
      </SSWEventDetailsLayout>
    </SSWAppLayout>
  );
}

export default EventAttendees;
