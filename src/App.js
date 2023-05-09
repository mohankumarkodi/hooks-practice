import React, { useReducer, useState } from "react";
import Todos from "./Todos";

export const ACTIONS = {
  ADD_TODO: "add_todo",
  TOOGLE_TODO: "toogle_todo",
  DELETE_TODO : "delete_todo"
};
function reducer(todos, action) {
  console.log(action);
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newtodo(action.payload.name)];
    case ACTIONS.TOOGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id)
    default:
      return todos;
  }
}
function newtodo(name) {
  return { id: Date.now(), name: name, completed: false };
}

const App = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  };

  // console.log();

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        
      </form>
      {todos.map((todo) => {
          //console.log(todo.name);
          return (
            <>
              <Todos key={todo.id} todo={todo} dispatch={dispatch} />
              <br />
            </>
          );
        })}
    </div>
  );
};

export default App;
