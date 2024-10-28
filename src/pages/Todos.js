import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useState } from 'react';
import TodoList from '../components/TodoList';
import { GET_TODO_LIST } from '../graphql/todos';


function Todos () {
    const [orderBy, setOrderBy] = useState(null);

    const { loading, error, data } = useQuery(GET_TODO_LIST, {
      variables: {
        orderBy: orderBy
      }
    });
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    function handleChange(event) {
      setOrderBy(event.target.value); 
    }

    return (
        <div>
          <form>
            <label>Trier par date :
              <select name="selectedOrderByOption" onChange={ handleChange }>
                <option value="DATE_ASC">Du plus ancien au plus récent</option>
                <option value="DATE_DESC">Du plus récent au plus ancien</option>
              </select>
            </label>
          </form>
          <TodoList todoList={ data.getTodoList } />
        </div>
    )
  }

export default Todos;