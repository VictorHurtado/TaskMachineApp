import {React, useReducer } from 'react';
import TodoReducer from './TodoReducer';
import TodoContext from './TodoContext';

const allTodos = [
    { text: 'Cortar cebolla', completed: true },
    { text: 'Tomar el cursso de intro a React', completed: false },
    { text: 'Llorar con la llorona', completed: false },
    { text: 'Cortar cebolla', completed: true },
    { text: 'Cortar cebolla', completed: true },
   



    
  ];

const TodoState = (props)=>{
    const initialState={
        todos: [],
        selectedPage: 0
    }
    const [state, dispatch] = useReducer(TodoReducer, initialState);
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

    return (
        <TodoContext.Provider value={{
            todos: state.todos,
            selectedPage: state.selectedPage,
            setSelectedPages,
            getTodosUncompleted,
            getTodos
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export default TodoState;