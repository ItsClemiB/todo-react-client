import React from 'react';
import { useQuery, gql } from '@apollo/client';
import TodoListItem from './TodoListItem';


const GET_TODO_LIST = gql`
  query GetTodoListAll {
    getTodoList(filters: {}) {
      id
      createdAt
      type
      isDone
      title
    }
  }
`;

function TodoList() {
    const { loading, error, data } = useQuery(GET_TODO_LIST);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    
    return (data.getTodoList.map(({ id, title, createdAt, type, isDone}) => (
        <TodoListItem key={id} id={id} title={title} type={type} isDone={isDone} createdAt={createdAt} />
    )));
  }

  export default TodoList;