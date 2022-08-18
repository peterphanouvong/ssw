import { Prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../db/index";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body;
  const { userId, eventId } = JSON.parse(body);
  console.log(body);
  console.log("USER ID EVENT ID", userId, eventId);

  try {
    const data = await prisma.usersAttendingEvents.create({
      data: {
        userId,
        eventId: parseInt(eventId),
      },
    });
    res.status(200).json(data);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // res.status(500).json({error: ""});
    }
    res.status(500).json({
      error: {
        message: "Could not join event.",
      },
    });
  }
}
