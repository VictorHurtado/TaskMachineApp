import { React, useContext, useEffect, useState } from 'react';
import { TodoItem } from "./../todoitem/TodoItem";

import TodoContext from "../../context/Todo/TodoContext";


import { SeparateArrayByChuncks } from "../../utils/ArrayUtils";
import './TodoList.css';

const qtTodosPage = 5;


function TodoList() {
  const { todos, selectedPage, getTodos } = useContext(TodoContext);
  const [isLoading, setIsLoading] = useState(true);
  var FilterTodos =todos.length>qtTodosPage? SeparateArrayByChuncks(todos, qtTodosPage):[todos];
   

  useEffect(() => {


    FilterTodos.isEmpty ? setIsLoading(true) : setIsLoading(false);


  }, [selectedPage,todos])

  
    return (
      <section>
        <ul className="TodoList">
          {
            
          
          isLoading ? (<div>Loading ...</div>) : (FilterTodos[selectedPage].map((todo, index) => {
            
            return <TodoItem
              index={index}
              key={index}
              text={todo.text}
              completed={todo.completed}
            />
          
          }))
          
          
          }
  
        </ul>
      </section>
    );


 
}

export { TodoList };
