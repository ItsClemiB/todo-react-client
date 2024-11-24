import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';
import TodoList from '../components/TodoList';
import TodoFilter from '../components/filter/TodoFilter.js';
import { GET_TODO_LIST } from '../graphql/todos';
import { FilterContext } from '../components/filter/FilterDetails.js';


export default function Todos () {
    const [filter,] = useContext(FilterContext);

    const { loading, error, data } = useQuery(GET_TODO_LIST, {
      variables: buildQueryArgs(filter)
    });
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <div>
          <TodoFilter />
          <TodoList listItems={data.getTodoList} />
        </div>
    )
  }

  function buildQueryArgs(filter) {
    let args = {};
    let filters = {};

    if (filter.types.length === 0) {
      filters['types'] = ["RH", "Tech", "Communication", "Marketing"];
    } else {
      /* add a check for business only */ 
      filters['types'] = filter.types;
    }

    if (filter.isDone) {
      filters['isDone'] = filter.isDone;
    }
    args['filters'] = filters;
    if (filter.orderBy) 
      args['orderBy'] = filter.orderBy;
    return args
}