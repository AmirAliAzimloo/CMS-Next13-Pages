import CoursesItem from "@/components/modules/coursesItem/CoursesItem";
import AddCourseModal from "../index/AddCourseModal";
import styles from "@/styles/Course.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { CourseType } from "@/types/course";


interface CourseProps{
    courses:[CourseType]
}

const Course = ({courses}:CourseProps) => {
  const [data,setData] = useState([...courses])

  useEffect(()=>{
    setData([...courses])
  },[courses])


  const getCourses = async()=>{
    const response = await axios.get(`${process.env.NEXT_PUBLIC_APP_API_URL}/courses`)
    const {data:coursesData} = response;

    if(response.status == 200){
      setData(coursesData)
    }


  }

  return (
    <>
      <section className={styles.courses}>
        <div className={styles.courses_top}>
          <h2 className={styles.courses_title}>نتیجه جست و جو</h2>
        </div>
        <ul className={styles.courses_list}>
          {
            data.map(course=>(
              <>
                <CoursesItem getCourses={getCourses} {...course} />
              </>
            ))
          }
         
        </ul>
      </section>

    </>
  );
};

export default Course;
