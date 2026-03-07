import useProfileStore from "../../store/profileStore";

function Controls() {
  const incrementAge = useProfileStore((state) => state.incrementAge);
  const changeName = useProfileStore((state) => state.changeName);
  const addTodo = useProfileStore((state) => state.addTodo);

  return (
    <div style={{ padding: "1rem", border: "2px solid #333", margin: "1rem", background: "#f5f5f5" }}>
      <h3>Controls (click & watch console)</h3>
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <button onClick={incrementAge}>Increment Age</button>
        <button onClick={() => changeName("Alex")}>Change Name to Alex</button>
        <button onClick={() => changeName("Hansraj")}>Change Name to Hansraj</button>
        <button onClick={() => addTodo("New Todo " + Date.now())}>Add Todo</button>
      </div>
    </div>
  );
}

export default Controls;
