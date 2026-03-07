import useStore from "../../store/zustandStore";

function BadCounter() {
  // BAD: no selector — subscribes to the ENTIRE store
  // This will re-render even when `name` changes
  const { count, increment, decrement } = useStore();

  console.log("❌ Bad Zustand Counter rendered");

  return (
    <div style={{ padding: "1rem", border: "2px solid red", margin: "1rem" }}>
      <h2>Counter (Zustand - Bad)</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default BadCounter;
