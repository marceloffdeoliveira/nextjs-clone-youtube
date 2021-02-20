import nc from 'next-connect';
import upload from 'src/utils/upload';

const handler = nc()
      .use(upload.single('file'))

      .post((req, res) => {
        const { title, authorName, authorAvatar, videoUrl } = req.body;

        res.json({hello: word});
      })
      .patch(async (req, res) => {
        res.end(`async/await is also supported`)
      })

export default handler;









export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      // Get data from your database
      res.status(200).json({ msg: method });
      break;
    case 'PUT':
      // Update or create data in your database
      res.status(200).json({ msg: method });
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
