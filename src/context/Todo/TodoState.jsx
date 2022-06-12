import {React, useReducer } from 'react';
import TodoReducer from './TodoReducer';
import TodoContext from './TodoContext';

import {getAllTodosRepository,addNewTodoRepository} from '../../services/todorepository/todosrepository'

var allTodos =  await getAllTodosRepository();

const TodoState = (props)=>{
    const initialState={
        todos: allTodos,
        selectedPage: 0,
        openModal: false
    }
    const [state, dispatch] = useReducer(TodoReducer, initialState);
    const setOpenModal = (openModalValue)=>{
        dispatch({
            type: 'SET_OPEN_MODAL',
            payload: openModalValue
        })
    }

    const setSelectedPages = (newSelectedPage)=>{
        dispatch({
            type: 'SET_SELECTED_PAGE',
            payload: newSelectedPage
        })
    }

    const getTodosUncompleted = async()=>{
        allTodos = await getAllTodosRepository();

        var todosFilter= allTodos.filter(todo=> todo.completed==false);
        
        dispatch({
            type: 'GET_TODOS_UNCOMPLETED',
            payload: todosFilter
        })
    
    }

    const getTodos = async()=>{
        allTodos = await getAllTodosRepository();
        dispatch({
            type: 'GET_TODOS',
            payload: allTodos
        })
    
    }
    const setTodos=async(newTodo)=>{
    
        var response = await addNewTodoRepository(newTodo);
        allTodos = await getAllTodosRepository();
   
        console.log(response);
        dispatch({
            type: 'SET_TODOS',
            payload: allTodos
        })
    

    }

    return (
        <TodoContext.Provider value={{
            todos: state.todos,
            selectedPage: state.selectedPage,
            openModal: state.openModal,
            setTodos,
            setSelectedPages,
            setOpenModal,
            getTodosUncompleted,
            getTodos
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export default TodoState;