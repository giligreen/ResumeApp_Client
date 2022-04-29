
/**
 * 
 * @param {name:'', date:''} data 
 * @returns 
 */
export function updateSearchTask(data){
    return {type:'UPDATE_SERACH_TASK',payload:data}
}

export function updateUser(dataUser){
    return {type:'UPDATE_USER',payload:dataUser}
}



























// export const SET_SEARCH_TASK='SET_SEARCH_TASK';
// export const CLEAR_SEARCH='CLEAR_SEARCH';

// export  function setSearchTask(searchTaskObject) {
//     return { type: SET_SEARCH_TASK, data: searchTaskObject }
// }

// export function clearSearchTask(){
//     return {type:CLEAR_SEARCH}
// }