
//איתחול של פרמטרים בחנות
const _intialState = {
    user: {},
    searchTask: { name: 'טו בשבט', date: null },
}

/**
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
export default function reducer(state = _intialState, action) {
    
    switch (action.type) {
        case 'UPDATE_SERACH_TASK':
          state={...state,searchTask:action.payload}
            break;
        case 'UPDATE_USER':
            state={...state,user:action.payload}
            break;

        default:
            break;
    }
    return state;
}