import { useRef } from "react";
import { useEffect, useState } from "react"
import { Item } from "../../Models/Item";
import itemService from "../../services/item.service";

export default function AddItems() {
    //add state prop in comp
    const [arrCategory, setArrCategory] = useState([]);
    const [items,setItems]= useState([]);

    const refItemName= useRef();
    const refCaterogory=useRef();

    useEffect(() => {
        //קריאת שרת
        // itemService.getCategoriesArr().then((data)=>{
        //     setArrCategory(data)
        // })
        setArrCategory([
            { id: 1, name: 'כלי בית' },
            { id: 2, name: 'בגדים' }
        ])
    }, [])

    const addItem=()=>{
        let name=refItemName.current.value;
        let catroryId=refCaterogory.current.value;
        let newItem=new Item();
        newItem.Name=name;
        newItem.CategoryId=catroryId;

        console.log(newItem);
    }

    return (
        <div style={{marginTop:'10%'}} className="container" dir="rtl">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="form-group">
                            <label>שם פריט</label>
                            <input ref={refItemName} className="form-control"></input>
                        </div>

                        <label>קטגוריה</label>
                        <select ref={refCaterogory} className="form-select">
                            {
                                arrCategory.map(cat => {
                                    return <option value={cat.id}>{cat.name}</option>
                                })
                            }
                        </select>

                         <div style={{position:'relative',marginTop:'15px'}}>
                        <button onClick={addItem} style={{float:'left'}} className="btn btn-primary">add item</button>
                        </div>
                      
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <ul className="list-group">
                            <li className="list-group-item active">רשימת פריטים</li>
                           {
                                items.map(item=>{
                                    return <li className="list-group-item">{item.name}</li>
                                })
                           }
            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}