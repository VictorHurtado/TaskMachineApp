import { React, useEffect, useState, useContext } from 'react';
import './TodoCounter.css';
import CarbonViewFilled from '~icons/carbon/view-filled';

import TodoContext from "../../context/Todo/TodoContext";
import { SeparateArrayByChuncks } from "../../utils/ArrayUtils";
const qtTodosPage = 5;
function TodoCounter() {
  const { todos, selectedPage, getTodosUncompleted, getTodos } = useContext(TodoContext);
  const [state, setState] = useState({ TodosLength: 0, TodosPages: 0, HiddeUncompleted: false });
  var FilterTodos = SeparateArrayByChuncks(todos, qtTodosPage);

  useEffect(() => {

    FilterTodos.length != 0 ? setState({ TodosLength: todos.length, TodosPages: FilterTodos[selectedPage].length, HiddeUncompleted: false }) : console.log("oe no tenemos data");

  }, [todos, selectedPage])
  function _setState({ TodosLength, TodosPages, HiddeUncompleted }) {
    setState({ TodosLength: TodosLength, TodosPages: TodosPages, HiddeUncompleted: HiddeUncompleted });
  }

  function _hiddeUncompletedTodos() {
    console.log(state.HiddeUncompleted)

    console.log("Todos completadas");
    state.HiddeUncompleted ? getTodos() : getTodosUncompleted();
    _setState({ TodosLength: todos.length, TodosPages: FilterTodos[selectedPage].length, HiddeUncompleted: !state.HiddeUncompleted });



  }
  return (
    <div className="RowCounter TodoCounter">
      <h4>
        <span> {state.TodosPages} </span>
        de
        <span> {state.TodosLength} </span>
      </h4>

      <div>
        <CarbonViewFilled className="ViewIcon" onClick={() => _hiddeUncompletedTodos()} />
      </div>
    </div>
  );
}

export { TodoCounter };
