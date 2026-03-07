import { useDispatch } from "react-redux";
import { incrementAge, changeProfileName, addTodo } from "../../store/profileSlice";

function ReduxControls() {
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "1rem", border: "2px solid #333", margin: "1rem", background: "#f5f5f5" }}>
      <h3>Redux Controls (click & watch console)</h3>
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <button onClick={() => dispatch(incrementAge())}>Increment Age</button>
        <button onClick={() => dispatch(changeProfileName("Alex"))}>Change Name to Alex</button>
        <button onClick={() => dispatch(changeProfileName("Hansraj"))}>Change Name to Hansraj</button>
        <button onClick={() => dispatch(addTodo("New Todo " + Date.now()))}>Add Todo</button>
      </div>
    </div>
  );
}

export default ReduxControls;
