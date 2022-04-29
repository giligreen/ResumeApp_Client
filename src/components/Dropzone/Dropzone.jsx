import React, { Component } from 'react'
import { useRef } from 'react';
import { useState } from 'react'
import './Dropzone.css'

export default function Dropzone(props){
 const [hightlight,setHightlight]=useState(false);
 const fileInputRef=useRef();

  const openFileDialog=()=> {
    if (props.disabled) return
    fileInputRef.current.click()
  }

  // event on the input change and get file
  const onFilesAdded=(evt)=> {
    
    if (props.disabled) return
   
    const files = evt.target.files
    if (props.onFilesAdded) {
      const array = fileListToArray(files)
      props.onFilesAdded(array)
    }
  }

  const onDragOver=(evt) =>{
    evt.preventDefault()
    if (props.disabled) return
    setHightlight(true);
  }

  const onDragLeave=()=> {
    setHightlight(false);
  }

  const onDrop=(event) =>{
    event.preventDefault()

    if (props.disabled) return

    const files = event.dataTransfer.files
    if (props.onFilesAdded) {
      const array = fileListToArray(files)
      props.onFilesAdded(array)
    }
    setHightlight(false);
  }

  const fileListToArray=(list) =>{
    const array = []
    for (var i = 0; i < list.length; i++) {
      array.push(list.item(i))
    }
    return array
  }

 
    return (
      <div
        className={`Dropzone ${hightlight ? 'Highlight' : ''}`}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        onClick={openFileDialog}
        style={{ cursor: props.disabled ? 'default' : 'pointer' }}
      >
        <input
          ref={fileInputRef}
          multiple
          className="FileInput"
          type="file" 
          accept=".pdf,.txt,.doc,.docx"
          onChange={onFilesAdded}
        />
        <img
          alt="upload"
          className="Icon"
          src="baseline-cloud_upload-24px.svg"
        />
        <span>Upload Files</span>
      </div>
    )
  
}

