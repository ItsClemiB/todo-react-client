import './App.css';
import { useQuery, gql } from '@apollo/client';


function App() {
  return (
    <div>
      <h2>TODO LIST</h2>
      <br/>
      <DisplayTodoList />
    </div>
  );
}

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

function DisplayTodoList() {
  const { loading, error, data } = useQuery(GET_TODO_LIST);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.getTodoList.map(({ id, title, createdAt, type, isDone }) => (
    <div className="todo-item" key={id}>
      <h3>{title}</h3>
      <p>{type}</p>
      <p>{createdAt}</p>
      <p>{isDone}</p>
    </div>
  ));
}

export default App;
