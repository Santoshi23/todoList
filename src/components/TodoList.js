import React from 'react';

function Todolist(props) {
  return (
    <li className='list-item'>
      <div className='item-box'>
        <span className='item-text'>{props.item}</span>
        <span className='icons'>
          <i
            className="icon-delete"
            onClick={e => {
              props.deleteItem(props.index);
            }}
          >Delete</i>
        </span>
      </div>
    </li>
  );
}

export default Todolist;
