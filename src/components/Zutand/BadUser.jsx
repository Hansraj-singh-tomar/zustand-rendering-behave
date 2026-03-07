import useStore from "../../store/zustandStore";

function BadUser() {
  // BAD: no selector — subscribes to the ENTIRE store
  // This will re-render even when `count` changes
  const { name, setName } = useStore();

  console.log("❌ Bad Zustand User rendered");

  return (
    <div style={{ padding: "1rem", border: "2px solid red", margin: "1rem" }}>
      <h2>User (Zustand - Bad)</h2>
      <p>Name: {name}</p>
      <button onClick={() => setName("Hansraj")}>Set Name to Hansraj</button>
      <button onClick={() => setName("Guest")}>Reset</button>
    </div>
  );
}

export default BadUser;
