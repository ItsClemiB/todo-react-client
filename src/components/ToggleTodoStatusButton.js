import React from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_TODO_STATUS, GET_TODO_DETAILS } from '../graphql/todos.js'


function ToggleTodoStatusButton(props) {

    const [ updateTodoStatus, { loading, error }] = useMutation(UPDATE_TODO_STATUS, {
      variables: {
        id: props.id,
        isDone: !props.isDone,
      }, 
      refetchQueries: [
        GET_TODO_DETAILS,
        'GetTodoById'
      ],
    });
  
    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;
  
    return (
        <button onClick={updateTodoStatus}>
            {props.isDone ? 'RÉOUVRIR' : 'TERMINER'}
        </button>
    );
}

export default ToggleTodoStatusButton;