import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../store/counterSlice";

function ReduxCounter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  console.log("✅ Good Redux Counter rendered");

  return (
    <div style={{ padding: "1rem", border: "2px solid green", margin: "1rem" }}>
      <h2>Counter (Redux)</h2>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}

export default ReduxCounter;
