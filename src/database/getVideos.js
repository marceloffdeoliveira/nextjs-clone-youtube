import connectToDataBase from "src/utils/mongdb";

export async function getVideos(){
  const { db } = await connectToDataBase();

  const data = await db.collection('videos').find().toArray()

  return data;
};

export default getVideos;