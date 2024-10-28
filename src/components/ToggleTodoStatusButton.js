import React from 'react';
import { useMutation, gql } from '@apollo/client';

const UPDATE_TODO_STATUS = gql`
  mutation updateTodoStatus($id: ID!, $isDone: Boolean!) {
    updateTodoStatusById(id: $id, isDone: $isDone) {
      id
      isDone
    }
  }
`;

function ToggleTodoStatusButton(props) {

    const [updateTodoStatus, { loading, error }] = useMutation(UPDATE_TODO_STATUS, {
      variables: {
        id: props.id,
        isDone: !props.isDone,
      },
      refetchQueries: [
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