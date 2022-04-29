import axios from 'axios'
class ItemService{
    getCategoriesArr(){
        //  http://127.0.0.1:5000/
        return   axios.get('154545').then((res)=>{
            return res.data
        })
    }
}

export default new ItemService