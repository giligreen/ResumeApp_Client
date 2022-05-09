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
import axios from "axios";
import { useNavigate } from 'react-router-dom'



export default function Form() {
    const options = [
        {value: 'אבו טור'},
        {value: 'אבו תור'},
        {value: 'ארמון הנציב'},
        {value: 'ארנונה (תלפיות)'},
        {value: 'בית הכרם'},
        {value: 'בית וגן'},
        {value:'בית ישראל'},
        {value:'בית צפאפא'},
        {value:'בקעה'},
        {value: 'גאולה'},
        {value: 'גבעת המבתר'},
        {value: 'גבעת מרדכי'},
        {value:'גבעת משואה'},
        {value: 'גבעת רם'},
        {value: 'גבעת שאול'},
        {value:'גילה'},
        {value:'הבוכרים'},
        {value: 'הגבעה הצרפתית'},
        {value: 'המושבה הגרמנית'},
        {value:'הר חוצבים'},
        {value:'הר נוף'},
        {value:'הרובע היהודי'},
        {value:'זכרון משה'},
        {value:'טלביה'},
        {value:'ימין משה'},
        {value:'כרם אברהם'},
        {value:'מאה שערים'},
        {value:'מוסררה'},
        {value:'ממילא'},
        {value:'מלחה'},
        {value:'מעלת דפנה'},
        {value:'מקור ברוך'},
        {value:'מקור חיים'},
        {value:'מרכז העיר'},
        {value:'מתחם הולילנד'},
        {value:'נוה יעקב'},
        {value:'נוף הציון'},
        {value:'נחלאות'},
        {value:'ניות'},
        {value:'סנהדריה'},
        {value:'עין כרם'},
        {value:'עיר גנים'},
        {value:'פסגת זאב'},
        {value:'פת'},
        {value:'קטמון א-ו'},
        {value:'קטמון הישנה'},
        {value:'קטמון ח-ט'},
        {value:'קרית היובל'},
        {value:'קרית הלאום'},
        {value:'קרית מנחם'},
        {value:'קרית משה'},
        {value:'רוממה'},
        {value:'רחביה'},
        {value:'רמות'},  
        {value:'רמת אשכול'},
        {value:'רמת בית הכרם'},
        {value:'רמת דניה'},
        {value:'רמת רחל'},
        {value:'רמת שלמה'},
        {value:'רמת שרת'},
        {value:'רסקו (גבעת הורדים)'},
        {value:'שיכוני תלפיות'},
        {value:'שמואל הנביא'},
        {value:'שערי חסד'},
        {value:'תלפיות'}  
    ];
    const navigate = useNavigate();
    const mysubmit = (values) => {

        console.log(values)

        axios({
            method: "POST",
            url: "http://127.0.0.1:5000/aaa",
            data: values
        })
            .then((response) => {
                // alert(response.data)
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
                neighborhoods: "אבו טור",
                rooms: " ",
                area: " ",
                floor: " ",
                floors: " ",
                year: " ",
                propertyType: "3",
                my_status: "0",
                balcony_b: " ",
                furniture_b: " ",
                elevators_b: " ",
                storageroom_b: " ",
                parking_b: " ",
                saferoom_b: " ",
                airconditioning_b: " ",
                accessible_b: " ",
                bars_b: " ",
                wifi_b: " ",
                pandordoors_b: " "
            }, onSubmit: mysubmit,
            validationSchema: Yup.object().shape({
                //בדיקות תקינות
            }
            )
        })
    //החזרת התגית

    return (
        <form onSubmit={myformik.handleSubmit} style={{ marginLeft: '10%', marginRight: '10%', paddingTop: '12%' }}>
            <div dir="rtl">
                <h1 style={{ textAlign: 'center' }}> הכנס את פרטי הנכס</h1>
                <h1> </h1>
                <br></br>
                <div className="row" >
                    {/* <div className="form-group col">
                        <label htmlFor="neighborhoods">שכונה </label>
                        <Neighborhoods className="custom-select" required name="neighborhoods" id="neighborhoods"
                            onChange={myformik.handleChange} defaultValue={myformik.initialValues.neighborhoods}>
                        </Neighborhoods>
                    </div> */}
                    <div className="form-group col">
                    <label htmlFor="neighborhoods">שכונה </label>
                    <select className="form-select custom-select"  required name="neighborhoods" id="neighborhoods" 
                     onChange={myformik.handleChange} defaultValue={myformik.initialValues.neighborhoods}>
                    {options.map(item => {
                    return (<option value={item.value}>{item.value}</option>);
                   })}
                    </select>
                    </div>
                    <div className="form-group col">
                        <label htmlFor="propertyType">סוג הנכס</label>
                        {/* <PropertyType className="custom-select" required name="propertyType" id="propertyType"
                            onChange={myformik.handleChange} defaultValue={myformik.initialValues.propertyType}>
                        </PropertyType> */}
                        <select class="form-select custom-select"  required name="propertyType" id="propertyType"
                            onChange={myformik.handleChange} defaultValue={myformik.initialValues.propertyType}>
              <option value='3'>דירה</option>
              <option value='0'>בית פרטי</option>
              <option value='5'>דירת גן</option>
              <option value='9'>' קוטג</option>
              <option value='1'>דו-משפחתי</option>
              <option value='2'>דופלקס</option>
              <option value='8'>פנטהאוז</option>
              <option value='4'>דירת גג</option>
              <option value='6'>דירת מרתף</option>
              <option value='7'>יחידת דיור</option>
             
              </select>
                    </div>
                    <div className="form-group col">
                        <label htmlFor="my_status">מצב הנכס </label>
                        {/* <My_status className="custom-select" required name="my_status" id="my_status"
                            onChange={myformik.handleChange} defaultValue={myformik.initialValues.my_status}>
                        </My_status> */}
                        <select class="form-select custom-select" required name="my_status" id="my_status"
                            onChange={myformik.handleChange} defaultValue={myformik.initialValues.my_status}>
                            <option value='0'>חדש</option>
                            <option value='1'>חדש מקבלן</option>
                            <option value='2'>ישן</option>
                            <option value='3'>משופץ</option>
                            <option value='4'>שמור</option>
                        </select>
                    </div>
                </div>
                <br></br>
                <h1></h1>
                <div className="row">

                    <div className="form-group col">
                        <label htmlFor="area" style={{ marginLeft: '4%' }}>שטח הדירה </label>
                        <input type="number" min="20" max="300" name="area" className="col-md-4 mb-3" id="area" placeholder=" " required
                            onChange={myformik.handleChange} defaultValue={myformik.initialValues.area} />
                    </div>
                    <div className="form-group col">
                        <label htmlFor="rooms" style={{ marginLeft: '4%' }}>חדרים </label>
                        <input type="number" min="1" max="13" step="0.5" name="rooms" className="col-md-4 mb-3" id="rooms" placeholder=" " required
                            onChange={myformik.handleChange} defaultValue={myformik.initialValues.rooms} />
                    </div>
                    <div className="form-group col">
                        <label htmlFor="floor" style={{ marginLeft: '4%' }}> קומה </label>
                        <input type="number" min="-10" max="40" name="floor" className="col-md-4 mb-3" id="floor" placeholder=" " required
                            onChange={myformik.handleChange} defaultValue={myformik.initialValues.floor} />
                    </div>
                    <div className="form-group col">
                        <label htmlFor="floors" style={{ marginLeft: '4%' }}> קומות בבנין </label>
                        <input type="number" min="0" max="40" name="floors" className="col-md-4 mb-3" id="floors" placeholder=" " required
                            onChange={myformik.handleChange} defaultValue={myformik.initialValues.floors} />
                    </div>
                    <div className="form-group col">
                        <label htmlFor="year" style={{ marginLeft: '4%' }}>שנת בניית הנכס </label>
                        <input type="number" min="1900" max={new Date().getFullYear()} name="year" className="col-md-4 mb-3" id="year" placeholder=" " required
                            onChange={myformik.handleChange} defaultValue={myformik.initialValues.year} />
                    </div>


                </div>
                <div className="row">


                </div>
                <h1>  </h1>
                <div className="row" dir="ltr">
                    <div className="form-check form-switch col">
                        <label htmlFor="furniture_b">ריהוט <IoIosBed></IoIosBed></label>
                        <input type="checkbox" name="furniture_b" role="switch" className="form-check-input" id="furniture_b"
                            onChange={myformik.handleChange} defaultValue={myformik.initialValues.furniture_b} />
                    </div>
                    <div className="form-check form-switch col" >
                        <label htmlFor="balcony_b" dir="ltr">מרפסת <MdOutlineBalcony></MdOutlineBalcony></label>
                        <input type="checkbox" name="balcony_b" role="switch" className="form-check-input" id="balcony_b"
                            onChange={myformik.handleChange} defaultValue={myformik.initialValues.balcony_b} />

                    </div>

                    <div className="form-check form-switch col">
                        <label htmlFor="airconditioning_b">מיזוג אויר <IoSnowOutline></IoSnowOutline></label>
                        <input type="checkbox" name="airconditioning_b" role="switch" className="form-check-input" id="airconditioning_b"
                            onChange={myformik.handleChange} defaultValue={myformik.initialValues.airconditioning_b} />
                    </div>
                    <div className="form-check form-switch col">
                        <label htmlFor="bars_b">סורגים <RiTable2></RiTable2></label>
                        <input type="checkbox" name="bars_b" role="switch" className="form-check-input" id="bars_b"
                            onChange={myformik.handleChange} defaultValue={myformik.initialValues.bars_b} />
                    </div>

                    <div className="form-check form-switch col">
                        <label htmlFor="elevators_b">מעלית <MdElevator></MdElevator></label>
                        <input type="checkbox" name="elevators_b" role="switch" className="form-check-input" id="elevators_b"
                            onChange={myformik.handleChange} defaultValue={myformik.initialValues.elevators_b} />
                    </div>


                </div>
                <h1></h1>
                <div className="row" dir="ltr">
                    <div className="form-check form-switch col">
                        <label htmlFor="saferoom_b">ממד <AiOutlineSafety></AiOutlineSafety></label>
                        <input type="checkbox" name="saferoom_b" role="switch" className="form-check-input" id="saferoom_b"
                            onChange={myformik.handleChange} defaultValue={myformik.initialValues.saferoom_b} />
                    </div>
                    <div className="form-check form-switch col">
                        <label htmlFor="storageroom_b">מחסן <MdHouseSiding></MdHouseSiding></label>
                        <input type="checkbox" name="storageroom_b" role="switch" className="form-check-input" id="storageroom_b"
                            onChange={myformik.handleChange} defaultValue={myformik.initialValues.storageroom_b} />
                    </div>
                    <div className="form-check form-switch col">
                        <label htmlFor="parking_b">חניה <GiHomeGarage></GiHomeGarage></label>
                        <input type="checkbox" name="parking_b" role="switch" className="form-check-input" id="parking_b"
                            onChange={myformik.handleChange} defaultValue={myformik.initialValues.parking_b} />
                    </div>

                    <div className="form-check form-switch col">
                        <label htmlFor="accessible_b"> נגיש לנכים <RiWheelchairLine></RiWheelchairLine></label>
                        <input type="checkbox" name="accessible_b" role="switch" className="form-check-input" id="accessible_b"
                            onChange={myformik.handleChange} defaultValue={myformik.initialValues.accessible_b} />
                    </div>
                    <div className="form-check form-switch col">
                        <label htmlFor="pandordoors_b">דלתות פנדור <RiDoorClosedLine></RiDoorClosedLine></label>
                        <input type="checkbox" name="pandordoors_b" role="switch" className="form-check-input" id="pandordoors_b"
                            onChange={myformik.handleChange} defaultValue={myformik.initialValues.pandordoors_b} />
                    </div>

                </div>
                <h1>  </h1>
                <div className="row" dir="ltr">
                    <div className="form-check form-switch col" style={{ marginLeft: '35%' }}>
                        <label htmlFor="wifi_b">Partner Private Fiberהבנין מחובר ל <IoIosCellular></IoIosCellular></label>
                        <input type="checkbox" name="wifi_b" role="switch" className="form-check-input" id="wifi_b"
                            onChange={myformik.handleChange} defaultValue={myformik.initialValues.wifi_b} />
                    </div>

                </div>
                <br></br>
            </div>
            <button style={{ marginTop: '5%' }} type="submit" dir="ltr" >לחישוב ערך הדירה  </button>
        </form >
    )
}

