import {GET_TODOS, SET_SELECTED_PAGE,GET_TODOS_UNCOMPLETED, SET_OPEN_MODAL, SET_TODOS} from "../types";

export default (state, action)=>{
    const {payload, type}= action;
    switch(type){
        case GET_TODOS:
            return {
                ...state,
                todos: payload
            }
        case GET_TODOS_UNCOMPLETED:
            return {
                ...state,
                todos: payload
            }
        case SET_SELECTED_PAGE:
            return {
                ...state,
                selectedPage: payload
            }
        case SET_OPEN_MODAL:
            return{
                ...state,
                openModal: payload
            }
        case SET_TODOS:
            return {
                ...state,
                todos: payload
            }
        default:
            state
    }
}
