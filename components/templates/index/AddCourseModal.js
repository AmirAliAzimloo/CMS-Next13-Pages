import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCashRegister, faFile, faTag, faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/Modal.module.css";
import {useState} from 'react'
import axios from "axios";

const AddCourseModal = ({ hideAddCourseModal }) => {
    const [title,setTiltle] = useState();

    const addNewCourse = async(e)=>{
        e.preventDefault();

        const response = await axios.post(`${process.env.NEXT_PUBLIC_APP_API_URL}/courses`,{title})

       if(response.status == 201){
        setTiltle("")
        hideAddCourseModal()
        alert("new course created")
       }
    }

    return (
        <div className={styles.modal_container} id="add-new-course-modal">
            <div className={styles.modal_bg} onClick={hideAddCourseModal}></div>
            <div className={styles.modal_content}>

                <h1 className={styles.modal_title}>اضافه کردن دوره جدید</h1>
                <form onSubmit={addNewCourse} action="#" className={styles.edit_user_form}>
                    <div className={styles.input_field}>
                        <span><FontAwesomeIcon icon={faTag} /></span>
                        <input
                        onChange={e=>setTiltle(e.target.value)}
                            type="text"
                            placeholder="عنوان دوره"
                            spellcheck="false"
                        />
                    </div>
                    {/* <div className={styles.input_field}>
                        <span><FontAwesomeIcon icon={faCashRegister} /> </span>
                        <input
                            type="text"
                            placeholder="قیمت دوره"
                            spellcheck="false"
                        />
                    </div>
                    <div className={styles.input_field}>
                        <span><FontAwesomeIcon icon={faUser} /></span>
                        <input
                            type="text"
                            placeholder="مدرس دوره"
                            spellcheck="false"
                        />
                    </div>
                    <div className={styles.input_field}>
                        <span><FontAwesomeIcon icon={faFile} /></span>
                        <input type="file" name="" id="" />
                    </div> */}

                    <button type="submit" className={styles.update_btn}>
                        اپدیت دوره
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddCourseModal
