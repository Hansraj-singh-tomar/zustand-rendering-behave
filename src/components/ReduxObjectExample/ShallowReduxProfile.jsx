import { useSelector, shallowEqual } from "react-redux";

function ShallowReduxProfile() {
  // GOOD: shallowEqual compares each key of the returned object
  // instead of comparing the object reference
  // Re-renders only when name or age values actually change
  const { name, age } = useSelector(
    (state) => ({ name: state.profile.info.name, age: state.profile.info.age }),
    shallowEqual
  );

  console.log("✅ Shallow Redux Profile rendered (uses shallowEqual)");

  return (
    <div style={{ padding: "1rem", border: "2px solid blue", margin: "1rem" }}>
      <h3>Full Profile (shallowEqual)</h3>
      <p>Name: {name}, Age: {age}</p>
      <p style={{ fontSize: "0.8rem", color: "#999" }}>
        I need both name & age, but shallowEqual prevents extra re-renders
      </p>
    </div>
  );
}

export default ShallowReduxProfile;
