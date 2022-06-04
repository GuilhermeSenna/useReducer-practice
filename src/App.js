import "./styles.css";
import { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset"
};

export default function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.INCREMENT:
        return { count: state.count + 1 };
      case ACTIONS.DECREMENT:
        return { count: state.count - 1 };
      case ACTIONS.RESET:
        return { count: 0 };
      default:
        return state;
    }

    // return { count: state.count + 1 };
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const buttonIncrement = () => {
    dispatch({ type: ACTIONS.INCREMENT });
    // setCounter((prev) => prev + 1);
  };

  const buttonDecrement = () => {
    dispatch({ type: ACTIONS.DECREMENT });
    // setCounter((prev) => prev - 1);
  };

  const buttonReset = () => {
    dispatch({ type: ACTIONS.RESET });
    // setCounter(0);
  };

  return (
    <>
      <button onClick={buttonIncrement}>-</button>
      <span>{state.count}</span>
      <button onClick={buttonDecrement}>+</button>
    </>
  );
}
