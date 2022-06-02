import {React,useEffect} from 'react';
import '../PaginatorAccess.css';

function NumberPage(props) {

  
  return (
      <button className={props.active?"NumberPage active":"NumberPage"} onClick={props.callback}>
        <li  >{props.page}</li>
      </button>
      
     
  );
}

export { NumberPage };