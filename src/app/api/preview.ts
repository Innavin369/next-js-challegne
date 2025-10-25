import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.secret !== process.env.NEXT_PREVIEW_SECRET) {
    return res.status(401).json({ message: "Invalid token" });
  }

  const redirect = (req.query.redirect as string) || "/";

  // Enable preview mode by setting the cookies
  res.setPreviewData({});

  // Redirect to the target page
  res.writeHead(307, { Location: redirect });
  res.end();
}
