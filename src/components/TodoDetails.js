import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import ToggleTodoStatusButton from './ToggleTodoStatusButton';
import { GET_TODO_DETAILS } from '../graphql/todos.js';

function TodoDetails() {
    const params = useParams();
    const { loading, error, data } = useQuery(GET_TODO_DETAILS, {
        variables: {
            id: params.todoId
        },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <div>
            <h3>{ data.getTodoById.title }</h3>
            <h2>{ data.getTodoById.type }</h2>
            
            <p>Terminé : { String(data.getTodoById.isDone) }</p>
            <p>{ data.getTodoById.text }</p>
            <p>{ data.getTodoById.createdAt }</p>
            <ToggleTodoStatusButton id={params.todoId} isDone={data.getTodoById.isDone} />
        </div>
    );
}

export default TodoDetails;