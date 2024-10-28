import { gql } from '@apollo/client';

export const GET_TODO_DETAILS = gql`
  query GetTodoById($id: ID!) {
    getTodoById(id: $id) {
        createdAt
        type
        isDone
        text
        title
    }
  }
`;

export const GET_TODO_LIST = gql`
  query GetTodoList($orderBy: Ordering) {
    getTodoList(filters: {}, orderBy: $orderBy) {
      id
      createdAt
      type
      isDone
      title
    }
  }
`;

export const UPDATE_TODO_STATUS = gql`
  mutation updateTodoStatus($id: ID!, $isDone: Boolean!) {
    updateTodoStatusById(id: $id, isDone: $isDone) {
      id
      isDone
    }
  }
`;