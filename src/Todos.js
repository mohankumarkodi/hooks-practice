// import { type } from "@testing-library/user-event/dist/type/index.js";
import React from "react";
import { ACTIONS } from "./App.js";

function Todos({ todo, dispatch }) {
  return (
    <>
      {todo.completed ? (
        <span> {todo.name} completed</span>
      ) : (
        <span> {todo.name} </span>
      )}

      <button
        onClick={() =>
          dispatch({ type: ACTIONS.TOOGLE_TODO, payload: { id: todo.id } })
        }
      >
        toggle
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
        }
      >
        completed
      </button>
    </>
  );
}

export default Todos;
