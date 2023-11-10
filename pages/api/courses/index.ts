import coursesModel from "@/models/course";
import connectToDB from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  connectToDB();

  if (req.method == "POST") {
    try {
      const { title } = req.body;

      if (!title.trim() || title.length < 8) {
        return res.status(422).json({ message: "title is not valid" });
      }

      await coursesModel.create({ title });
      
      return res.status(201).json({ message: "Course created successfully" });

      
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Unkonown Internal Server Error" });
    }
  }else if (req.method == "GET") {
    try {


      if(!!req.query.q){
        const { q } = req.query;
        const courses = await coursesModel.find({title:{$regex:q}});
        return res.status(200).json(courses);

      }else{
        const courses = await coursesModel.find({});
        return res.status(200).json(courses);
      }
      
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Unkonown Internal Server Error" });
    }
  }
};

export default handler;
