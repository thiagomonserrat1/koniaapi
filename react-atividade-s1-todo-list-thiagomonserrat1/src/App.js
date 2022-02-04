import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [List, setList] = useState([]);

  const addTodo = (todo) => {
    setList([...List, todo]);
  };

  const handleTodo = (todo) => {
    const filterTodo = List.filter((filterTodo) => filterTodo !== todo);

    setList(filterTodo);
  };

  console.log(List);

  return (
    <div className="App">
      <header className="App-header">
        <h2>To-Do list</h2>
        <Form addTodo={addTodo} />
        <TodoList List={List} handleTodo={handleTodo} />
      </header>
    </div>
  );
}

export default App;
