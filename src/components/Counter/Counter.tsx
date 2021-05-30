import { useReducer } from "react";

type counterState = {
  count: number;
};

function init(initialCount: number) {
  return { count: initialCount };
}

type ACTIONTYPE = { type: "increment" } | { type: "decrement" };

const reducer = (state: counterState, action: ACTIONTYPE): counterState => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      if (state.count - 1 < 0) return state;
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

type CounterProps = {
  handleChange?(count: number): void;
  initialCount?: number;
};

const Counter = ({
  handleChange,
  initialCount = 1,
}: CounterProps): JSX.Element => {
  const [counterState, dispatch] = useReducer(reducer, initialCount, init);

  const handleCounterChange = (actionType: "increment" | "decrement") => {
    dispatch({ type: actionType });
    if (handleChange) {
      handleChange(
        actionType === "increment"
          ? counterState.count + 1
          : counterState.count - 1
      );
    }
  };

  return (
    <div className="mt-2">
      <label className="text-gray-700 text-sm" htmlFor="count">
        Count:
      </label>
      <div className="flex items-center mt-1">
        <button
          onClick={() => handleCounterChange("decrement")}
          className="text-gray-500 focus:outline-none focus:text-gray-600"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </button>
        <span className="text-gray-700 text-lg mx-2">{counterState.count}</span>
        <button
          onClick={() => handleCounterChange("increment")}
          className="text-gray-500 focus:outline-none focus:text-gray-600"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Counter;
