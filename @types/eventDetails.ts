import { Event, User, UsersAttendingEvents } from "@prisma/client";

export type EventDetails = Event & {
  attendees: EventUser[];
};

export type EventUser = UsersAttendingEvents & {
  user: User;
};
