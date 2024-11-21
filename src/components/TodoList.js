import React from 'react';
import TodoListItem from './TodoListItem';

export default function TodoList({ listItems }) {
    return (listItems.map(({id, title, type, createdAt, isDone }) => 
        <TodoListItem key={id} id={id} title={title} type={type} isDone={isDone} createdAt={createdAt} />
    ));
}