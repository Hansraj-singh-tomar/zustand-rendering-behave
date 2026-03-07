import { useSelector, useDispatch } from "react-redux";
import { changeName } from "../../store/userSlice";

function ReduxUser() {
  const name = useSelector((state) => state.user.name);
  const dispatch = useDispatch();

  console.log("✅ Good Redux User rendered");

  return (
    <div style={{ padding: "1rem", border: "2px solid green", margin: "1rem" }}>
      <h2>User (Redux)</h2>
      <p>Name: {name}</p>
      <button onClick={() => dispatch(changeName())}>
        Change Name
      </button>
    </div>
  );
}

export default ReduxUser;
