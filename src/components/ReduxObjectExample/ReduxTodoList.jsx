import { useSelector } from "react-redux";

function ReduxTodoList() {
  const todos = useSelector((state) => state.profile.todos);

  console.log("📋 Redux TodoList rendered");

  return (
    <div style={{ padding: "1rem", border: "2px solid orange", margin: "1rem" }}>
      <h3>Redux Todo List (selects array)</h3>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
      <p style={{ fontSize: "0.8rem", color: "#999" }}>
        Re-renders on addTodo (new array via Immer).
        Does NOT re-render on Increment Age — Immer only creates
        a new reference for the parts that changed.
      </p>
    </div>
  );
}

export default ReduxTodoList;
