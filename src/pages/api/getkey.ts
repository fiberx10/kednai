import type { NextApiRequest, NextApiResponse } from "next";

import fs from "fs";

type Data = {
  message: string;
  key?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // get key from key.txt file in the same directory
  const key = fs.readFileSync("key.txt", "utf8");
  // send response
  res.send({
    message: "key retrieved",
    key: key as string,
  });
}
