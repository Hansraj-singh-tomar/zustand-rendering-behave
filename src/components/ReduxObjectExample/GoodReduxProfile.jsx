import { useSelector } from "react-redux";

function GoodReduxProfile() {
  // GOOD: selecting the primitive value directly
  // `state.profile.info.name` is a string → === works correctly
  // Only re-renders when name actually changes
  const name = useSelector((state) => state.profile.info.name);

  console.log("✅ Good Redux Profile rendered (selects primitive)");

  return (
    <div style={{ padding: "1rem", border: "2px solid green", margin: "1rem" }}>
      <h3>Name Display (Good - selects primitive)</h3>
      <p>Name: {name}</p>
      <p style={{ fontSize: "0.8rem", color: "#999" }}>
        I only re-render when name actually changes!
      </p>
    </div>
  );
}

export default GoodReduxProfile;
