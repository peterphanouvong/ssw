import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body;
  const { id, firstName, lastName, email, vnswId } = body;

  await prisma.user.update({
    where: {
      id,
    },
    data: {
      firstName,
      lastName,
      email,
    },
  });

  await prisma.profile.update({
    where: {
      id,
    },
    data: {
      vnswId,
    },
  });

  res.redirect(307, `/profile`);
}
