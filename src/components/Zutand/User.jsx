import useStore from "../../store/zustandStore";

function User() {
  const name = useStore((state) => state.name);
  const setName = useStore((state) => state.setName);

  console.log("✅ Good Zustand User rendered");

  return (
    <div style={{ padding: "1rem", border: "2px solid green", margin: "1rem" }}>
      <h2>User (Zustand)</h2>
      <p>Name: {name}</p>
      <button onClick={() => setName("Hansraj")}>Set Name to Hansraj</button>
      <button onClick={() => setName("Guest")}>Reset</button>
    </div>
  );
}

export default User;
