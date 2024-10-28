import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList(props) {
    
    return (props.todoList.map(({ id, title, createdAt, type, isDone}) => (
        <TodoListItem key={id} id={id} title={title} type={type} isDone={isDone} createdAt={createdAt} />
    )));
  }

  export default TodoList;