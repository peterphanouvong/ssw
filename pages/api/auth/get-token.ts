// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.cookies.kinde_token) {
    res.status(200).json(JSON.parse(req.cookies.kinde_token));
  } else {
    res.status(500);
  }
}
