import { ObjectId } from 'mongodb';
import nc from 'next-connect';
import connectToDataBase from 'src/utils/mongdb';
import upload from 'src/utils/upload';

const handler = nc()
      .use(upload.single('file'))

      .post(async (req, res) => {
        const { title, authorId, authorName, authorAvatar, videoUrl } = req.body;
        
        const { db } = await connectToDataBase();
        const collection = db.collection('videos');

        await collection.insertOne({
          title,
          authorId: ObjectId(authorId),
          authorName,
          authorAvatar,
          views:0,
          thumb: req.file.location,
          videoUrl,
          updatedAt: new Date()
        })

        return res.status(200).json({ok: true})
      })
      .patch(async (req, res) => {
        res.end(`async/await is also supported`)
      })

export const config = {
  api: {
    bodyParser: false,
  }
}


export default handler;









// export default function handler(req, res) {
//   const { method } = req;

//   switch (method) {
//     case 'GET':
//       // Get data from your database
//       res.status(200).json({ msg: method });
//       break;
//     case 'PUT':
//       // Update or create data in your database
//       res.status(200).json({ msg: method });
//       break;
//     default:
//       res.setHeader('Allow', ['GET', 'PUT']);
//       res.status(405).end(`Method ${method} Not Allowed`);
//   }
// }
