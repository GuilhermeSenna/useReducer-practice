import "./styles.css";
import { useState, useReducer } from "react";
import Todo from "./Todo";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOOGLE_TODO: "toogle-todo",
  DELETE_TODO: "delete-todo"
};

export default function App() {
  const reducer = (todos, action) => {
    switch (action.type) {
      case ACTIONS.ADD_TODO:
        return [...todos, newTodo(action.payload.name)];
      case ACTIONS.TOOGLE_TODO:
        return todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, complete: !todo.complete };
          }

          return todo;
        });
      case ACTIONS.DELETE_TODO:
        // Return all items except the one with the ID (remove it)
        return todos.filter((todo) => todo.id !== action.payload.id);
      default:
        return todos;
    }

    // return { count: state.count + 1 };
  };

  const newTodo = (name) => {
    return { id: Date.now(), name, complete: false };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name } });
    setName("");
  };

  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </>
  );
}
