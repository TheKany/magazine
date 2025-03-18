import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { path } = req.query;

  if (!path || typeof path !== "string") {
    return res.status(400).json({ error: "Invalid image path" });
  }

  try {
    const imageUrl = `https://sixers.s3.ap-southeast-2.amazonaws.com/${path}`;
    const response = await fetch(imageUrl);

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ error: "Failed to fetch image" });
    }

    const buffer = await response.arrayBuffer();
    res.setHeader("Content-Type", "image/png");
    res.setHeader("Cache-Control", "public, max-age=86400");
    res.send(Buffer.from(buffer));
  } catch (error) {
    res.status(500).json({ error });
  }
}
