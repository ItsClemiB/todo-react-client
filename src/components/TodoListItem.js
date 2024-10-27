import React from 'react';
import { Link } from 'react-router-dom'
import ToggleTodoStatusButton from './ToggleTodoStatusButton'

function TodoListItem(props) {

  return (
      <div className="todo-list-item" >
        <Link key={props.id} to ={`/todos/${props.id}`}>
          <h3>{props.title}</h3>
        </Link>
        <p>{props.type}</p>
        <p>{props.createdAt}</p>
        <p>{String(props.isDone)}</p>
        <ToggleTodoStatusButton id={props.id} isDone={props.isDone} />
      </div>

  );
}

export default TodoListItem;