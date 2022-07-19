import{ React, useContext }from 'react';
import TodoContext from "../../context/Todo/TodoContext";
import '../../public/css/CreateTodoButton.css';

function CreateTodoButton(props) {
  const {setOpenModal} = useContext(TodoContext);
  function _handleOnClick(){  

    setOpenModal(true);
  }
  return <button className="CreateTodoButton" onClick={()=> _handleOnClick()}>Agregar</button>;
}

export { CreateTodoButton };
