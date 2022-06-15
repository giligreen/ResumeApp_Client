import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import './Form.css';
import React from 'react';

import { Document, Page,pdfjs } from 'react-pdf';
import { array } from 'yup';


export default function Form() {
    const [result,setResult]=useState(false)
    const [start,setStart]=useState(true)
    const [notFound,setNotFound]=useState(false)
    const [Url,setUrl]=useState()
    const [src,setSrc]=useState([])
    const [numfile,setNumfile]=useState(0)
    const [maxNumfile,setMaxNumfile]=useState()

    const options = [
        {value: 'Architecture'},
        {value: 'Software Engineer'},
        {value: 'Graphics and Design'},
        {value: 'Education'},
        {value: 'Office Management'},
        {value: 'Accounting'},
    ];
    
 
    const download=()=>{
      const link = document.createElement('a');
      link.href = src[0];
      // link.className="linkToDownLoad btn btn-primary   btn-lg  "
      link.setAttribute('download', `file.pdf`,);      
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      setResult(false)
      setStart(true) 
    } 
    const nextFile=()=>{
     
      numfile+1>=maxNumfile? setNumfile(0): setNumfile(numfile+1)
    }   
    
    const mysubmit = (values) => {
          axios.get("https://localhost:44331/api/Resumes/search/"+(values.subject),{
             headers: {
              'Content-Type': 'application/pdf',
            },
          })
            .then( (response)=> {
              setResult(true) 
              response.status===500? setNotFound(true) : 
              response.data.forEach(element => {
                src.push(element)
              });

              setSrc(response.data);    
              console.log(response.data)
             
              console.log(src)
             
              setMaxNumfile(src.length)
              setStart(false)   
            })
            .catch( (error) =>{
              console.log(error)
            
              setNotFound(true)
              setResult(true) 
              //נכשל
              return <div>faild</div>;
            });
        }
    


    // const mysubmit = (values) => {
    //     console.log(values)
       
    //     fetch("https://localhost:44331/api/Resumes/search/"+(values.subject), {
    //         method: 'GET',
    //         encoding: null,
    //         headers: {
    //           'Content-Type': 'application/pdf',
    //         },
    //     }
        
    //  ) .then((response) =>{
    //     debugger;
    //     response.status===500? setNotFound(true):
    //     response.clone().blob()
    //    console.log( response.clone().blob())
    //  })
    //  .then((blob) => {
      
    //   // Create blob link to download
    //  //   setUrl(window.URL.createObjectURL( new Blob([blob]), ));
    //  setUrl(window.URL.createObjectURL(new Blob([blob]),))
    //        // debugger;
    //   setResult(true)
    //   setStart(false)
    //  })
    //  .catch((error) => {
    //             if (error.response) {
    //                 console.log(error.response)
    //                 console.log(error.response.status)
    //                 console.log(error.response.headers)
    //             }
    //         })
    // }

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
        <form className='mainDiv' onSubmit={myformik.handleSubmit} style={{ marginLeft: '10%', marginRight: '10%', paddingTop: '10%' }}>
            <div dir="rtl">
                <h1 className="Title" style={{ textAlign: 'center' ,color: "#d7ba92"
}}>choose the job area</h1>
                
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
           { 
           result?           
           notFound?<div className="faild">Sorry...{<br></br>} there is no employee resume in our database that matches your needs.</div>:
          // <div className="resultDiv">
          //     <object className="fileToDownLoad" href={Url}  type="application/pdf" width="200%" height="200%" />
          //     <button onClick={download} id='linkToDownLoad'className="btn btn-primary btn-lg" style={{ marginTop: '5%' }}  dir="rtl" >download the file</button>
          // </div>
        <div className="resultDiv">
          {src? <iframe className="resultIframe" title="pdf" width="400px" height="500px"  src={`${src[numfile]}`}></iframe>:''} 
        {/* <embed  src={src[numfile]+"#toolbar=1" } type="application/pdf" width="400px" height="500px"></embed>:''} */}

          {/* <button onClick={download}  id='linkToDownLoad'className="btn btn-primary btn-lg" style={{ marginTop: '5%' }}  dir="rtl" >download the file</button> */}
          <button type="button" onClick={nextFile}  id='nextFile'className="btn btn-primary btn-lg"   dir="rtl" >NEXT</button>

        </div>
         :
         <div>   {   
            start?
         <button  type='submit' id='search' className='btn btn-primary   btn-lg' style={{ marginTop: '5%' }}  dir="rtl" >Find a suitable employee</button>:''
           } 
         </div>
        // onClick={mysubmit.bind(this, myformik.values)} <button  type="submit" id='search' className='btn btn-primary   btn-lg' style={{ marginTop: '5%' }}  dir="rtl" >Find a suitable employee</button>
        
           } 
           
         

        </form >
    )
}

