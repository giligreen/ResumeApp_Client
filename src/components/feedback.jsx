import * as Yup from 'yup'
import { useFormik } from 'formik'
import Myfeedback from './myfeedback';
import{useNavigate} from 'react-router-dom'
import axios from "axios";
export default function Feedback() {

   
    
    const navigate = useNavigate();
    const mysubmit = (values) => {

        console.log(values.myfeedback)

        axios({
            method: "post",
            url: "http://127.0.0.1:5000/bbb",
            data: values
        })
            .then((response) => {
                // alert(response.data)
                navigate('/')
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
                myfeedback: " "
            }, onSubmit: mysubmit,
            validationSchema: Yup.object().shape({
                //בדיקות תקינות
            }
            )
        })
    return (
        <form onSubmit={myformik.handleSubmit} dir="rtl" style={{ marginLeft: '20%', marginRight: '20%' }}>
            <h1 style={{ paddingTop: '15%' }}> נשמח שתדרג את מענה האתר</h1>
            <h1></h1>
            <br></br>
            
            <div  className="form-group col"  style={{ marginLeft: '70%'}}>
                <label htmlFor="myfeedback">רמת  הדיוק של חיזוי הנכס</label>
                <select class="form-select custom-select" required name="myfeedback" id="myfeedback"
                    onChange={myformik.handleChange} defaultValue={myformik.initialValues.myfeedback}>
              <option value='4'>טוב מאד</option>
              <option value='3'>טוב</option>
              <option value='2'>סביר</option>
              <option value='1'>גרוע</option>
              <option value='0'>גרוע מאד</option>
              </select>
            </div>
            <h1></h1>
            <br></br>
            <button  type="submit" dir="ltr" className="form-group col" style={{ marginLeft: '50%',inlineSize:'20%'}}>שליחה  </button>
           
            <h1></h1>
            <br></br>
            <h1> תודה שהשתמשת באתר XXX</h1>
        </form>
    )

}