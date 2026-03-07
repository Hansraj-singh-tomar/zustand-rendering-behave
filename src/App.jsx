import Counter from "./components/Zutand/Counter";
import User from "./components/Zutand/User";
import BadCounter from "./components/Zutand/BadCounter";
import BadUser from "./components/Zutand/BadUser";

import ReduxCounter from "./components/Redux/ReduxCounter";
import ReduxUser from "./components/Redux/ReduxUser";
import BadReduxCounter from "./components/Redux/BadReduxCounter";
import BadReduxUser from "./components/Redux/BadReduxUser";

import BadProfile from "./components/ObjectExample/BadProfile";
import GoodProfile from "./components/ObjectExample/GoodProfile";
import ShallowProfile from "./components/ObjectExample/ShallowProfile";
import Controls from "./components/ObjectExample/Controls";
import TodoList from "./components/ObjectExample/TodoList";

import BadReduxProfile from "./components/ReduxObjectExample/BadReduxProfile";
import GoodReduxProfile from "./components/ReduxObjectExample/GoodReduxProfile";
import ShallowReduxProfile from "./components/ReduxObjectExample/ShallowReduxProfile";
import ReduxControls from "./components/ReduxObjectExample/ReduxControls";
import ReduxTodoList from "./components/ReduxObjectExample/ReduxTodoList";

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Re-rendering Behavior: Good vs Bad</h1>
      <p style={{ color: "#666" }}>
        Open the browser console to see which components re-render.
        Green border = optimized, Red border = unnecessary re-renders.
      </p>

      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        <div>
          <h2 style={{ color: "green" }}>Zustand (With Selectors)</h2>
          <Counter />
          <User />
        </div>

        <div>
          <h2 style={{ color: "red" }}>Zustand (Without Selectors)</h2>
          <BadCounter />
          <BadUser />
        </div>
      </div>

      <hr style={{ margin: "2rem 0" }} />

      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        <div>
          <h2 style={{ color: "green" }}>Redux (Granular Selector)</h2>
          <ReduxCounter />
          <ReduxUser />
        </div>

        <div>
          <h2 style={{ color: "red" }}>Redux (Selecting Entire State)</h2>
          <BadReduxCounter />
          <BadReduxUser />
        </div>
      </div>

      <hr style={{ margin: "2rem 0" }} />

      <h2>Object / Non-Primitive State Demo</h2>
      <p style={{ color: "#666" }}>
        The store has: profile: {"{ name, age }"} and todos: []. All three
        components below only DISPLAY the name. Click "Increment Age" and watch
        which ones re-render even though name didn't change.
      </p>

      <Controls />

      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        <BadProfile />
        <GoodProfile />
        <ShallowProfile />
        <TodoList />
      </div>

      <hr style={{ margin: "2rem 0" }} />

      <h2>Redux Object / Non-Primitive State Demo</h2>
      <p style={{ color: "#666" }}>
        Same concept in Redux. The store has: info: {"{ name, age }"} and todos: [].
        Click "Increment Age" — BadReduxProfile re-renders even though it only shows name.
        GoodReduxProfile and ShallowReduxProfile do NOT re-render.
      </p>

      <ReduxControls />

      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        <BadReduxProfile />
        <GoodReduxProfile />
        <ShallowReduxProfile />
        <ReduxTodoList />
      </div>
    </div>
  );
}

export default App;
