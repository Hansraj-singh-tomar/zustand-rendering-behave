import { useSelector } from "react-redux";

function BadReduxProfile() {
  // BAD: selecting the entire `info` object
  // Redux uses Immer — even though it mutates in the reducer,
  // Immer produces a NEW object reference whenever any field changes
  // So changing `age` gives a new `info` object → component re-renders
  const info = useSelector((state) => state.profile.info);

  console.log("❌ Bad Redux Profile rendered (selects whole object)");

  return (
    <div style={{ padding: "1rem", border: "2px solid red", margin: "1rem" }}>
      <h3>Name Display (Bad - selects whole object)</h3>
      <p>Name: {info.name}</p>
      <p style={{ fontSize: "0.8rem", color: "#999" }}>
        I only SHOW name, but I re-render when age changes too!
      </p>
    </div>
  );
}

export default BadReduxProfile;
