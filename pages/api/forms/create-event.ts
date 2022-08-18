import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../db/index";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body;
  const { name, location, price, startTime, endTime } = body;

  await prisma.event.create({
    data: {
      name,
      location,
      price,
      startTime: new Date(startTime),
      endTime: new Date(endTime),
    },
  });

  res.redirect(307, "/events/create");
}
