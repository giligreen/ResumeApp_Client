import React from "react";
import Dropzone from "../Dropzone/Dropzone";
import "./Upload.css";
import { useState } from "react";
import axios from "axios";




export default function Upload(props) {
  const [files, setFiles] = useState([]);
  const [yes, setYes] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [firstTimeDropzone, setfirstTimeDropzone] = useState(true);

  const onFilesAdded = (newFiles) => {
    if (files === []) {
      setFiles(files.concat(newFiles))
    }
    else {
      setFiles(files[0] = newFiles)
    }
    setfirstTimeDropzone(false);

  }

  const uploade_file = () => {
    setShowResult(false)
    const formData = new FormData();
    formData.append('file', files[0]);

    axios.post('https://localhost:44331/api/Resumes/UploadResume', formData, {
    })
      .then(response => {
        console.log(response)
        //alert(response.data)
        if(response.status=200){setYes(true)}
        setShowResult(true)

      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
        }
      })
  }

  const renderActions = () => {
    if (!firstTimeDropzone) {
      return (
        <div>
          <button className="btn1" onClick={() => {
            setFiles([])
            setShowResult(false)
            setfirstTimeDropzone(true)
          }}>Clear</button>
          <button className="btn1" onClick={uploade_file}>Upload</button>
        </div>

      );
    }

  }

  const renderHtmlFileTag = (file) => {


    return (
      <div className="pdf-file">
        <object className="file" data={URL.createObjectURL(file)} type="application/pdf" width="200%" height="200%" />
        <span className="fileName">{file.name}</span>
      </div>
    )
  }

  return (
    showResult? 
      yes?<div className="result">The file was uploaded and successfully categorized!!<br></br>GOOD LUCK!!</div>:<div  className="result">An error occurred while uploading</div>
    :
    <div className="Upload mainDiv">
      <span className="Title">Upload File</span>
      {
        firstTimeDropzone ? <div className="drop"><Dropzone onFilesAdded={onFilesAdded} /></div> : null
      }
      
      {
        files.length <= 0 ? null :
          files.map((file, i) =>
            <div key={i} className='pdf'>
              {renderHtmlFileTag(file)}
            </div>
          )
      }
      <div className="Actions">{renderActions()}</div>
     
    </div>
  );
}





