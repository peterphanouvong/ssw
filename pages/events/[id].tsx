import { Event } from "@prisma/client";
import { NextServerOptions } from "next/dist/server/next";
import React from "react";
import { SSWAppLayout } from "../../layout/SSWAppLayout";
import SSWEventPageLayout from "../../layout/SSWEventPageLayout";

type Props = {
  event: Event;
};

export async function getServerSideProps({ params }: any) {
  const res = await fetch(`http://localhost:3000/api/events/${params.id}`);
  const event = await res.json();
  console.log(event);

  return {
    props: {
      event: event,
    },
  };
}

function Event({ event }: Props) {
  console.log(event);
  return (
    <SSWAppLayout>
      <SSWEventPageLayout pageTitle={event.name}>sup</SSWEventPageLayout>
    </SSWAppLayout>
  );
}

export default Event;
