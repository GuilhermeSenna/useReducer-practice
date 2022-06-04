import { ACTIONS } from "./App.js";

const Todo = ({ todo, dispatch }) => {
  return (
    <>
      <span style={{ color: todo.complete ? "#aaa" : "#000" }}>
        {todo.name}
      </span>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.TOOGLE_TODO, payload: { id: todo.id } });
        }}
      >
        Toggle
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } });
        }}
      >
        Delete
      </button>
    </>
  );
};

export default Todo;
