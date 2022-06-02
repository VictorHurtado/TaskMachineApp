import React from 'react';
import './TodoItem.css';
import CarbonCheckmark from '~icons/carbon/checkmark';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.index + 1}

        {'      ' + props.text}
      </p>
      <div className="TodoRadio">
        <CarbonCheckmark className="TodoIcon" />
      </div>
    </li>
  );
}

export { TodoItem };
