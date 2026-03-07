import useStore from "../../store/zustandStore";

function Counter() {
  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);
  const decrement = useStore((state) => state.decrement);

  console.log("✅ Good Zustand Counter rendered");

  return (
    <div style={{ padding: "1rem", border: "2px solid green", margin: "1rem" }}>
      <h2>Counter (Zustand)</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Counter;
