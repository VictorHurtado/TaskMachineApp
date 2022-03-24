import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { Blob, SecondBlob, ThreeBlob } from './shapes/index';

import './App.css';

const todos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'LALALALAA', completed: false },
];

function App() {
  return (
    <React.Fragment>
      <div className="Background">
        <Blob />

        <SecondBlob />
        <ThreeBlob />
      </div>
      <main className="Container">
        <div></div>
        <div className="Card">
          <TodoCounter />
          <TodoSearch />

          <TodoList>
            {todos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
              />
            ))}
          </TodoList>

          <CreateTodoButton />
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
