import logo from "../images/logo.PNG"
import React from 'react'
// import "./RetFille.css"

export default function RetFile(props) {
  const dwonloadFile = () => {
    fetch("https://localhost:44331/api/Resumes/download/d", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/pdf',
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        debugger
        // Create blob link to download
        const url = window.URL.createObjectURL(

          new Blob([blob]),
        );
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute(
          'download',
          `file.pdf`,
        );
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      });
  }
  return (
    <div className="Ret">
          <div className="bg">
      <div className="imge">
      <img src={logo} />
      <div className="d-grid gap-2">
  <button variant="primary" size="lg" onClick={dwonloadFile}>
    Dwonload the file
  </button>
</div>  </div>  </div> </div> 
  );
 }