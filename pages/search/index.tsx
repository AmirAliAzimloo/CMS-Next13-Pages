import Courses from "@/components/templates/Search/Courses";
import coursesModel from "@/models/course";
import { CourseType } from "@/types/course";
import connectToDB from "@/utils/db"

interface IndexProps{
  courses:[CourseType]
}

const index = ({courses}:IndexProps) => {

  

  return <Courses courses={courses}  />;
};

export async function getServerSideProps(context:any){

  connectToDB()
  const {query} = context;
  if(query.q){
    const courses = await coursesModel.find({title:{$regex:query.q}});

    return{
        props:{
          courses:JSON.parse(JSON.stringify(courses))
        }
      }
  }else{
    connectToDB()
    const courses = await coursesModel.find({})

  return{
    props:{
      courses:JSON.parse(JSON.stringify(courses))
    }
  }
  }


  
}

export default index;
