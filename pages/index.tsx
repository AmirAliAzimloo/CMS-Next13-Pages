import Courses from "@/components/templates/index/Course";
import coursesModel from "@/models/course";
import { CourseType } from "@/types/course";
import connectToDB from "@/utils/db"

interface IndexProps{
  courses:[CourseType]
}

const index = ({courses}:IndexProps) => {
  return <Courses data={courses} />;
};

export async function getStaticProps(context:any){

  connectToDB()
  const courses = await coursesModel.find({})


  return{
    props:{
      courses:JSON.parse(JSON.stringify(courses))
    },
    revalidate:60*60*12 //! 12h
  }
}

export default index;
