import "./style.css";
import { useState } from "react";

const Form = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  return (
    <div>
      <input
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button onClick={() => addTodo(todo)}>Enviar</button>
    </div>
  );
};

export default Form;
