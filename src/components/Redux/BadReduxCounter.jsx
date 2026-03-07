import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../store/counterSlice";

function BadReduxCounter() {
  // BAD: selecting the entire state — new reference on every dispatch
  // This will re-render even when user.name changes
  const count = useSelector((state) => state).counter.count;
  const dispatch = useDispatch();

  console.log("❌ Bad Redux Counter rendered");

  return (
    <div style={{ padding: "1rem", border: "2px solid red", margin: "1rem" }}>
      <h2>Counter (Redux - Bad)</h2>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}

export default BadReduxCounter;
