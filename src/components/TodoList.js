import React from 'react'

function TodoList(props) {
  return (
    <li className='list-item'>
        <span className='task-name'>{props.index + 1}. {props.item} ({props.status})</span>
        <span className='del-btn' onClick={e=>{
            props.deleteItem(props.index)
        }}>-</span>
    </li>
  )
}

export default TodoList