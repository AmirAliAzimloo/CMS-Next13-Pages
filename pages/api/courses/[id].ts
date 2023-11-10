import coursesModel from "@/models/course";
import connectToDB from "@/utils/db";
import  { isValidObjectId } from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  connectToDB();

  if (req.method == "DELETE") {
    try {
      const { id } = req.query;

      if(isValidObjectId(id)){
        await coursesModel.findOneAndDelete({_id:id})
      
        return res.status(200).json({ message: "Course created successfully" });
      }else{
        return res.status(422).json({ message: "Course ID is not valid" });
      }

      
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Unkonown Internal Server Error" });
    }
  }else  if (req.method == "PUT") {
    try {
      const { id } = req.query;
      const { title } = req.body;

      if(isValidObjectId(id)){
        await coursesModel.findOneAndUpdate({ _id:id },{
          title
        })
      
        return res.status(200).json({ message: "Course Updated successfully" });
      }else{
        return res.status(422).json({ message: "Course ID is not valid" });
      }

      
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Unkonown Internal Server Error" });
    }
  }
};

export default handler;
