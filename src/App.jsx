import React from 'react';
import { TodoCounter } from './components/todocounter/TodoCounter';

import { TodoList } from './components/todolist/TodoList';

import { CreateTodoButton } from './components/createtodobutton/CreateTodoButton';
import { Blob, SecondBlob, ThreeBlob } from './shapes/index';
import { PaginatorAccess } from './components/paginatoraccess/PaginatorAccess';
import { MainTitle } from "./components/maintitle/MainTitle";
import {TaskModal} from "./components/taskmodal/taskmodal"

//context

import TodoState from  './context/Todo/TodoState';

import './App.css';





function App() {
  
  return (
    <TodoState>
      
      <div className="Background">
        <Blob />
        <SecondBlob />
        <ThreeBlob />
      </div>
      <main className="Container">
        <div className='Left-Container'>
          <MainTitle/>
          <img className='Main-Image' src="./src/assets/3d_Boys_1.png" alt="" />
          <div className='Main-Leyend'>
            <h5>FELICITACIONES</h5>
            <p>¡Vamos! aún tienes algunas tareas pendientes.</p>
          </div>
        </div>
      
        <div className="Card">
          <div>
            <TodoCounter />
            <TodoList/>
    
          </div>
      
          <div className=" AlignCenter JustifyContentBetween PaginatorAccess">
            <PaginatorAccess/>
            <CreateTodoButton />
          </div>
        </div>
       
      </main>
      <div>
        <TaskModal></TaskModal>
      </div>

    </TodoState>
  );
}

export default App;
