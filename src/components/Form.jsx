import * as Yup from 'yup'
import { useFormik } from 'formik'
import Neighborhoods from "./Neighborhoods"
import PropertyType from "./PropertyType"
import My_status from "./My_status"
import { IoIosCellular } from "react-icons/io"
import { RiDoorClosedLine } from "react-icons/ri";
import { GiHomeGarage } from "react-icons/gi";
import { AiOutlineSafety } from "react-icons/ai";
import { MdElevator } from "react-icons/md";
import { IoIosBed } from "react-icons/io";
import { MdOutlineBalcony } from "react-icons/md";
import { MdHouseSiding } from "react-icons/md";
import { RiTable2 } from "react-icons/ri";
import { IoSnowOutline } from "react-icons/io5";
import { RiWheelchairLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom'
import axios from "axios";




export default function Form() {
    const options = [
        {value: 'Architecture'},
        {value: 'CompPrograming'},
        {value: 'GraphicsAndDesign'},
        {value: 'Education'},
        {value: 'OfficeManagement'},
        {value: 'Accounting'},
    ];
    let navigate = useNavigate();
    
    const mysubmit = (values) => {

        console.log(values)
        debugger
        axios.get("https://localhost:44331/api/Resumes/"+values.subject,values,{
    }).then((response) => {
        debugger
                alert(response.data)
                navigate('/Output/', { state: { data: response.data } })
            }).catch((error) => {
                if (error.response) {
                    console.log(error.response)
                    console.log(error.response.status)
                    console.log(error.response.headers)
                }
            })
    }
    const myformik = useFormik(
        {
            initialValues:
            {
                subject: "default"  
            }, 
            onSubmit: mysubmit,
            validationSchema: Yup.object().shape({
                //בדיקות תקינות
            }
            )
        })
    //החזרת התגית

    return (
        <form onSubmit={myformik.handleSubmit} style={{ marginLeft: '10%', marginRight: '10%', paddingTop: '12%' }}>
            <div dir="rtl">
                <h1 style={{ textAlign: 'center' }}>Enter the job details</h1>
               
                <br></br>
                <div className="row" >
            
                   <div className="form-group col">
                        <label htmlFor="subject">תחום </label>
                     <select className="form-select custom-select"  required name="subject" id="subject" 
                             onChange={myformik.handleChange} defaultValue={myformik.initialValues.subject}>
                             {options.map(item => {
                             return (<option value={item.value}>{item.value}</option>);
                             })}
                    </select>
                   </div>
                 </div>
            </div> 
            
            <button style={{ marginTop: '5%' }} type="submit" dir="ltr" >לחיפוש עובד מתאים</button>
        </form >
    )
}

