// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../db";

type Data = User | null;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | { error: string }>
) {
  const { id } = req.query;

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: id as string,
      },
      include: {
        profile: {
          include: {
            activeKidsVoucher: true,
          },
        },
      },
    });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).send({ error: "failed to load data" });
  }
}
