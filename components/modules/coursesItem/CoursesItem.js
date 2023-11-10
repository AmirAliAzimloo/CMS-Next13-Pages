import DeleteModal from "@/components/templates/index/DeleteModal";
import EditModal from "@/components/templates/index/EditModal";
import { useState } from "react";
import styles from "@/styles/Course.module.css";
import axios from "axios";
import swal from "sweetalert";

const CoursesItem = ({ title , _id }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const hideEditModal = () => setShowEditModal(false);
  const hideDeleteModal = () => setShowDeleteModal(false);

  const removeCourse = async()=>{
    console.log(_id,"idddd")
    const response = await axios.delete(`${process.env.NEXT_PUBLIC_APP_API_URL}/courses/${_id}`)
    if(response.status == 200){
      setShowDeleteModal(false)
      swal({
        title:"دوره مورد نظر با موفقیت حذف شد",
        icon:"success",
        buttons:"اوکی"
      })
    }
  }

  return (
    <>
      <li className={styles.courses_item}>
        <div className={styles.courses_img_title}>
          <img
            src="/images/courses/PWA.jpg"
            alt="course-item-img"
            className={styles.courses_img}
          />
          <h5 className={styles.courses_name}>{title}</h5>
        </div>
        <div className={styles.courses_btns}>
          <a
            href="#"
            className={styles.courses_btn_edit}
            onClick={() => setShowEditModal(true)}
          >
            {" "}
            ویرایش{" "}
          </a>
          <a
            href="#"
            className={styles.courses_btn_delete}
            onClick={() => setShowDeleteModal(true)}
          >
            {" "}
            حذف{" "}
          </a>
        </div>
      </li>
      {showEditModal && <EditModal hideEditModal={hideEditModal} />}
      {showDeleteModal && <DeleteModal removeHandler={removeCourse} hideDeleteModal={hideDeleteModal} />}
    </>
  );
};

export default CoursesItem;
