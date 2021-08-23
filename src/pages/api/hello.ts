// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiHandler} from "next";

const handler: NextApiHandler = (req, res) => {
  const body = {
    message: "Hello",
    mathod: req.method,
  };
  res.statusCode = 200;
  res.json(body);
};

export default handler;
