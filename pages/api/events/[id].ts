import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../db/index";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  const event = await prisma.event.findUnique({
    where: {
      id: parseInt(id as string),
    },
    include: {
      attendees: {
        include: {
          user: true,
        },
      },
    },
  });

  res.status(200).json(event);
}
