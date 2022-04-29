import axios from "axios";

export function downloadFileOnOpenWindow(id) 
{
    axios
    .post(`order-results/${id}/export-pdf`, {
      data: {
        firstName: 'Fred'
      },
      responseType: 'arraybuffer'
    })
    .then(response => {
      console.log(response)

      let blob = new Blob([response.data], { type: 'application/pdf' }),
        url = window.URL.createObjectURL(blob)

      window.open(url) // Mostly the same, I was just experimenting with different approaches, tried link.click, iframe and other solutions
    })
    
}


export function downloadFile () {

  return  axios({
    url:
      "http://www.africau.edu/images/default/sample.pdf",
    method: "GET",
    responseType: "blob"
  }).then(response => {
    console.log(response);
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute(
      'download',
      `FileName.pdf`,
    );

    // Append to html link element page
    document.body.appendChild(link);

    // Start download
    link.click();

    // Clean up and remove the link
    link.parentNode.removeChild(link);
  });
};

export function openWindowFileByUrl(urlFile){
  window.open(urlFile);
}