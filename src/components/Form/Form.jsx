import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import './Form.css';

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
        axios.get("https://localhost:44331/api/Resumes/download/"+values.subject,values,{
    }).then((response) => {
        debugger
                alert(response.data)  
              
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
        <form className='mainDiv' onSubmit={myformik.handleSubmit} style={{ marginLeft: '10%', marginRight: '10%', paddingTop: '12%' }}>
            <div dir="rtl">
                <h1 style={{ textAlign: 'center' }}>choose the job area</h1>
               
                <br></br>
                 <div className="row" >
                   <div className="form-group col">
                     <select className="form-select custom-select"  required name="subject" id="subject" 
                             onChange={myformik.handleChange} defaultValue={myformik.initialValues.subject}>
                             {options.map((item ,i)=> {
                             return (<option key={i} value={item.value}>{item.value}</option>);
                             })}
                    </select>
                   </div>
                 </div>
            </div> 
            
            <button style={{ marginTop: '5%' }} type="submit" dir="rtl" >לחיפוש עובד מתאים</button>
        </form >
    )
}

