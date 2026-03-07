import useProfileStore from "../../store/profileStore";
import { useShallow } from "zustand/shallow";

function ShallowProfile() {
  // GOOD: useShallow compares each key of the returned object
  // instead of comparing the object reference
  // Re-renders only when `name` or `age` values actually change
  const { name, age } = useProfileStore(
    useShallow((state) => ({ name: state.profile.name, age: state.profile.age }))
  );

  console.log("✅ ShallowProfile rendered (uses useShallow)");

  return (
    <div style={{ padding: "1rem", border: "2px solid blue", margin: "1rem" }}>
      <h3>Full Profile (useShallow)</h3>
      <p>Name: {name}, Age: {age}</p>
      <p style={{ fontSize: "0.8rem", color: "#999" }}>
        I need both name & age, but useShallow prevents extra re-renders
      </p>
    </div>
  );
}

export default ShallowProfile;
