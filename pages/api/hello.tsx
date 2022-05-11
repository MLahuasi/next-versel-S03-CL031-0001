// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

interface ResProps {
  name: string;
}
const handler = (req:NextApiRequest, res:NextApiResponse<ResProps>) => {
  res.status(200).json({ name: 'John Doe' })
}

export default handler;