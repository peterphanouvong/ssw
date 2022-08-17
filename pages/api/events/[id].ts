import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../db/index";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get data submitted in request's body.
  const { id } = req.query;

  const event = await prisma.event.findUnique({
    where: {
      id: parseInt(id as string),
    },
  });

  console.log(event);

  res.status(200).json(event);
}
