import "./App.css";
import NavBar from "./components/NavBar";
import List from "./components/List";
import withAuth from "./withAuth";
import { useState } from "react";

function App() {
  const [state, setState] = useState(0);
  return (
    <div className="App">
      <NavBar
        label="React App 1"
        state={state}
        setState={setState}
        titleStyle={{ background: "red" }}
      >
        <h2>Test</h2>
        <h2>Test2</h2>
      </NavBar>
      <List state={state} />
    </div>
  );
}

export default withAuth(App);
