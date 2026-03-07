import useProfileStore from "../../store/profileStore";

function BadProfile() {
  // BAD: selecting the entire `profile` object
  // Even if only `age` changes, this returns a NEW object reference
  // so === check fails and component re-renders EVERY TIME
  const profile = useProfileStore((state) => state.profile);

  console.log("❌ BadProfile rendered (selects whole object)");

  return (
    <div style={{ padding: "1rem", border: "2px solid red", margin: "1rem" }}>
      <h3>Name Display (Bad - selects whole object)</h3>
      <p>Name: {profile.name}</p>
      <p style={{ fontSize: "0.8rem", color: "#999" }}>
        I only SHOW name, but I re-render when age changes too!
      </p>
    </div>
  );
}

export default BadProfile;
