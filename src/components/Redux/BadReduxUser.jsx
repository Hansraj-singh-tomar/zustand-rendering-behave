import { useSelector, useDispatch } from "react-redux";
import { changeName } from "../../store/userSlice";

function BadReduxUser() {
  // BAD: selecting the entire state — new reference on every dispatch
  // This will re-render even when counter.count changes
  const name = useSelector((state) => state).user.name;
  const dispatch = useDispatch();

  console.log("❌ Bad Redux User rendered");

  return (
    <div style={{ padding: "1rem", border: "2px solid red", margin: "1rem" }}>
      <h2>User (Redux - Bad)</h2>
      <p>Name: {name}</p>
      <button onClick={() => dispatch(changeName())}>
        Change Name
      </button>
    </div>
  );
}

export default BadReduxUser;
