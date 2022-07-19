import { React, useEffect, useState, useContext } from 'react';
import TodoContext from "../../context/Todo/TodoContext";
import '../../public/css/PaginatorAccess.css';
import { NumberPage } from './widgets/NumberAccess';


const qtTodosPage = 5;

function PaginatorAccess() {

  const [currentPage, setCurrentPage] = useState(1);
  const { todos,setSelectedPages,getTodos } = useContext(TodoContext);


  
  var  qtPages = Math.ceil(todos <= qtTodosPage ? 1 : todos.length / qtTodosPage);
  var qtPagesArray = [...Array(qtPages).keys()].map(i => i + 1);
  var  nextPage=currentPage;
  var middleValues = false;

  

  useEffect(() => {}, [todos, currentPage])
  function _setCurrentPage(newPage){
    setCurrentPage(newPage);
    setSelectedPages(newPage-1);
  }

  return (
    <div>
      <ul className=" NumberPageList">
        <NumberPage active={true} callback={() => _setCurrentPage(nextPage > 1 ? nextPage - 1 : 1)} page="<" />
        {qtPagesArray.map(function (index) {

          if (index == qtPagesArray[0] || currentPage == index || index == qtPagesArray[qtPages - 1]) {
            return <NumberPage active={currentPage == index ? true : false} callback={() => _setCurrentPage(index)} key={index} page={index} />
          } else if (middleValues != true) {
            middleValues = true
            return <NumberPage active={false} key="..." page="..." />
          }
        })}
        <NumberPage active={true} callback={() => _setCurrentPage(nextPage < qtPages ? nextPage + 1 : 1)} page=">" />
      </ul>
    </div>
  );
}

export { PaginatorAccess };
