import * as Yup from 'yup'
import { useFormik } from 'formik'
import{useNavigate, useLocation} from 'react-router-dom'

export default function Output() {
    const location = useLocation();
    const navigate=useNavigate();
    const mysubmit = (event) => { event.preventDefault();
        navigate('/feedback/') }
    const myformik = useFormik(
        {
            onSubmit: mysubmit,
           
        })
    return (
        <div dir="rtl" style={{ marginLeft: '20%', marginRight: '20%' }}>
            <h1 style={{ paddingTop: '15%' }}> מחיר מוערך לנכס:{location.state.data}</h1>
            <h1></h1>
            <br></br>
            <button onClick={mysubmit} type="submit" dir="ltr" className="form-group col" style={{ marginLeft: '50%',inlineSize:'20%'}}>אישור  </button>
           
            
        </div>
    )

}