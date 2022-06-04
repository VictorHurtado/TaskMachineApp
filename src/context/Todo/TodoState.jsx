import {React, useReducer } from 'react';
import TodoReducer from './TodoReducer';
import TodoContext from './TodoContext';

const allTodos = [
    { text: 'Cortar cebolla', completed: true },
    { text: 'Tomar el cursso de intro a React', completed: false },
    { text: 'Llorar con la llorona', completed: false },
 
    { text: 'Cortar cebolla', completed: true },
    { text: 'Tomar el cursso de intro a React', completed: false },

    { text: 'Cortar cebolla', completed: true },
    
  ];

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

    const getTodosUncompleted = ()=>{
        var todosFilter= allTodos.filter(todo=> todo.completed==false);
        
        dispatch({
            type: 'GET_TODOS_UNCOMPLETED',
            payload: todosFilter
        })
    
    }

    const getTodos = ()=>{
        
        dispatch({
            type: 'GET_TODOS',
            payload: allTodos
        })
    
    }
    const setTodos=(newTodo)=>{
        var newArray= state.todos.concat([newTodo]);
 
        dispatch({
            type: 'SET_TODOS',
            payload: newArray
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