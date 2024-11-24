import React from 'react';
import { Link } from 'react-router-dom'
import ToggleTodoStatusButton from './ToggleTodoStatusButton'

export default function TodoListItem({id, title, type, createdAt, isDone}) {

  return (
      <div className="todo-list-item" >
        <Link key={id} to ={`/todos/${id}`}>
          <h3>{title}</h3>
        </Link>
        <p>{type}</p>
        <p>{createdAt}</p>
        <p>{String(isDone)}</p>
        <ToggleTodoStatusButton id={id} isDone={isDone} />
      </div>

  );
}