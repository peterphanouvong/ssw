import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../db/index";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body;
  const { userId, eventId } = body;

  await prisma.usersAttendingEvents.create({
    data: {
      userId,
      eventId: parseInt(eventId),
    },
  });

  res.redirect(307, `/events/${eventId}`);
}
