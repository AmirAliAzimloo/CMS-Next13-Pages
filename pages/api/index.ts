import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.json({ message: "welcome to cms apis home page" });
};

export default handler;
