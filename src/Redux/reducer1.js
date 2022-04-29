import { SET_SEARCH_TASK ,CLEAR_SEARCH} from "./actions"; 

const initialState = {
    searchTask: {
        name: '',
        taskDate: null
    }
}

export default function reducer(state=initialState,action){

    switch (action.type) {
        case SET_SEARCH_TASK:
            //state['searchTask']=action.data
            return {...state,searchTask:action.data}
            break;
            case CLEAR_SEARCH:
            debugger
            return {...state,searchTask:{
                name: '',
                taskDate: null
            }}
            break;   
    
        default:
            return state
    }

}