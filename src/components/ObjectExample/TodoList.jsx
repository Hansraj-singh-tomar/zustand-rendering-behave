import useProfileStore from "../../store/profileStore";

function TodoList() {
  const todos = useProfileStore((state) => state.todos);

  console.log("📋 TodoList rendered");

  return (
    <div style={{ padding: "1rem", border: "2px solid orange", margin: "1rem" }}>
      <h3>Todo List (selects array)</h3>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
      <p style={{ fontSize: "0.8rem", color: "#999" }}>
        Re-renders on every addTodo because [...todos] creates a new array reference.
        Also check: does it re-render when you click "Increment Age"?
      </p>
    </div>
  );
}

export default TodoList;
