import Course from "@/components/templates/index/Course";
import coursesModel from "@/models/course";
import connectToDB from "@/utils/db"

const index = () => {
  return <Course />;
};

export async function getStaticProps(context:any){

  connectToDB()
  const courses = await coursesModel.find({})


  return{
    props:{}
  }
}

export default index;
