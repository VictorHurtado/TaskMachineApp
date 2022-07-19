import React from 'react';
import { HomePage } from './views/todohome/todohome';

//context

import TodoState from './context/Todo/TodoState';



import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  return (
    <Router>
      <TodoState>
        <Routes>
          <Route path='/app/' element={<HomePage/>}>
     
          </Route>
        </Routes>
      </TodoState>
    </Router>
  );
}

export default App;
