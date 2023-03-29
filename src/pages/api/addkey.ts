import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  key?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.send({
    name: "hello",
  });
}
