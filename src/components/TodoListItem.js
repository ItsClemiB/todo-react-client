import React from 'react';
import { useMutation, gql } from '@apollo/client';
import { Link } from 'react-router-dom'

const UPDATE_TODO_STATUS = gql`
  mutation updateTodoStatus($id: ID!, $isDone: Boolean!) {
    updateTodoStatusById(id: $id, isDone: $isDone) {
      id
      isDone
    }
  }
`;

function TodoListItem(props) {

  const [updateTodoStatus, { data, loading, error }] = useMutation(UPDATE_TODO_STATUS, {
    variables: {
      id: props.id,
      isDone: !props.isDone,
    },
  });

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  return (
    <Link key={props.id} to ={`/todos/${props.id}`}>
      <div className="todo-list-item" key={props.id}>
        <h3>{props.title}</h3>
        <p>{props.type}</p>
        <p>{props.createdAt}</p>
        <p>{String(props.isDone)}</p>
        <button onClick={updateTodoStatus}>
          {props.isDone ? 'RÉOUVRIR' : 'TERMINER'}
        </button>
      </div>
    </Link>
  );
}

export default TodoListItem;