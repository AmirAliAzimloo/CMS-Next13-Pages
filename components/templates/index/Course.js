import CoursesItem from "@/components/modules/coursesItem/CoursesItem";
import AddCourseModal from "./AddCourseModal";
import styles from "@/styles/Course.module.css";
import { useState } from "react";
import axios from "axios";


const Course = ({courses}) => {
  const [showAddCourseModal, setShowAddCourseModal] = useState(false);
  const [data,setData] = useState([...courses])

  const hideAddCourseModal = () => setShowAddCourseModal(false);

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
          <h2 className={styles.courses_title}>دوره ها</h2>
          <a
            href="#"
            className={styles.new_course_btn}
            onClick={() => setShowAddCourseModal(true)}
          >
            اضافه کردن دوره جدید
          </a>
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

      {showAddCourseModal && (
        <AddCourseModal getCourses={getCourses} hideAddCourseModal={hideAddCourseModal} />
      )}
    </>
  );
};

export default Course;
