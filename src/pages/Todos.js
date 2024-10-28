import React from 'react';
import { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import TodoList from '../components/TodoList';

const GET_TODO_LIST = gql`
  query GetTodoList() {
    getTodoList(filters: {}) {
      id
      createdAt
      type
      isDone
      title
    }
  }
`;

function Todos () {

    const { loading, error, data } = useQuery(GET_TODO_LIST);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <div>
          <TodoList todoList={ data.getTodoList } />
        </div>
    )
}

export default Todos;