import type { NextApiRequest, NextApiResponse } from "next";

import fs from "fs";

type Data = {
  name: string;
  key?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // get key from request query
  const key = req.query.key;
  // write the key to key.txt file in the same directory
  fs.writeFileSync("key.txt", key as string);
  // send response
  res.send({
    name: "key added successfully !",
  });
}
