import React, { Component } from "react";
import Dropzone from "../Dropzone/Dropzone";
import "./Upload.css";
import Progress from "../Progress/Progress";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import DocViewer from "react-doc-viewer";


export default function Upload(props) {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({});
  const [successfullUploaded, setSuccessfullUploaded] = useState(false);
  const [result , setResult]=useState([]);

  const onFilesAdded = (newFiles) => {
    setFiles(files.concat(newFiles))
  }
  const renderProgress = (file) => {

    let uploadProgres = uploadProgress[file.name];
    if (uploading || successfullUploaded) {
      return (
        <div className="ProgressWrapper">
          <Progress progress={uploadProgres ? uploadProgres.percentage : 0} />
          {
            uploadProgres && uploadProgres.state === "done" ?

              <i className="fa fa-check-circle-o " aria-hidden="true"></i>
              :
              <i className="fa fa-times-circle-o " aria-hidden="true"></i>
          }
        </div>
      );
    }
  }
  
  const uploade_file = () => {
    const formData = new FormData();
    formData.append('file', files[0]);
debugger
    axios.post( 'https://127.0.0.1:44397/api/Resumes', formData, {
   
    onUploadProgress: (progressEvent) => {
        //how much time need finish
        if (progressEvent.lengthComputable) {
          const copy = { ...uploadProgress };
          copy[files[0].name] = {
            state: "pending",
            percentage: (progressEvent.loaded / progressEvent.total) * 100
          };
          setUploadProgress(copy);
        }
      },
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        const copy = { ...uploadProgress };
        copy[files[0].name] = { state: "done", percentage: 100 };
        setUploadProgress(copy);
        setSuccessfullUploaded(true)
        debugger
        setResult(response.data)
        console.log(response.data)
        return true;
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
          const copy = { ...uploadProgress };
          copy[files[0].name] = { state: "error", percentage: 0 };
          setUploadProgress(copy)
          return false;
        }
      })
  }
  const renderActions = () => {
    if (successfullUploaded) {
      return (
        <button
          onClick={() => {
            setFiles([])
            setResult([])
            setSuccessfullUploaded(false)
          }
          }
          >
          Clear
        </button>
      );
    } else {
      return (
        <button
          disabled={files.length < 0 || uploading}
          onClick={uploade_file}>
          Upload
        </button>
      );
    }
  }
  const renderHtmlFileTag = (file) => {
    // console.log(file)
    return (

       <object
         className="pdf-file" data={URL.createObjectURL(file)} type="application/pdf" width="200%" height="200%">     
         </object>
     
   
    )
  }
  return (
    <div className="Upload">
      <span className="Title">Upload Files</span>
      <div className="Content">
        <div>
          <Dropzone
            onFilesAdded={onFilesAdded}
            disabled={uploading || successfullUploaded}
          />
        </div>
        <div className="Files">
          {files.map(file => {
            return (<>
              <div className="row">
               <div className="col"> {renderHtmlFileTag(file)}</div>
               <div className="col text" > 
               <div>
               
                <div className="result overflow-auto">
                 {result?result.map((res)=>{
                  return( <><br></br><div><p>{res}</p></div></>)
                 }):''}
               </div> 
               </div>
               </div> 
               </div>

                <div className='row' key={file.name} >
                  <span className="Filename" className="Row">{file.name}</span>
                  {renderProgress(file)}
                </div></>
            );
          })}
        </div>
      </div>
      <div className="Actions">{renderActions()}</div>
    </div>
  );

}





