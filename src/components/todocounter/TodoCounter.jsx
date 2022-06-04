import { React, useEffect, useState, useContext } from 'react';
import './TodoCounter.css';
import CarbonViewFilled from '~icons/carbon/view-filled';
import CarbonViewOffFilled from '~icons/carbon/view-off-filled'
import TodoContext from "../../context/Todo/TodoContext";
import { SeparateArrayByChuncks } from "../../utils/ArrayUtils";
const qtTodosPage = 5;
function TodoCounter() {
  const { todos, selectedPage, getTodosUncompleted, getTodos } = useContext(TodoContext);
  const [state, setState] = useState({ TodosLength: 0, TodosPages: 0, HiddeUncompleted: true });
  var FilterTodos = SeparateArrayByChuncks(todos, qtTodosPage);

  useEffect(() => {

    FilterTodos.length != 0 ? setState({ TodosLength: todos.length, TodosPages: FilterTodos[selectedPage].length, HiddeUncompleted: state.HiddeUncompleted }) : console.log("no data");

  }, [todos, selectedPage])
  function _setState({ TodosLength, TodosPages, HiddeUncompleted }) {

    setState({ TodosLength: TodosLength, TodosPages: TodosPages, HiddeUncompleted: HiddeUncompleted });

  }

  function _hiddeUncompletedTodos() {
    
    state.HiddeUncompleted ? getTodosUncompleted(): getTodos() ;
    _setState({ TodosLength: todos.length, TodosPages: FilterTodos[selectedPage].length, HiddeUncompleted: !state.HiddeUncompleted });
  }
  var _visibleIcon = () =>
     state.HiddeUncompleted? <CarbonViewFilled className="ViewIcon" onClick={() => _hiddeUncompletedTodos()} />:<CarbonViewOffFilled className="ViewIcon" onClick={() => _hiddeUncompletedTodos()} />
  
  return (
    <div className="RowCounter TodoCounter">
      <h4>
        <span> {state.TodosPages} </span>
        de
        <span> {state.TodosLength} </span>
      </h4>

      <div>
          {_visibleIcon()}
      </div>
    </div>
  );
}

export { TodoCounter };
