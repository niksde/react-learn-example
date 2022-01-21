import "./App.css";
import NavBar from "./components/NavBar";
import List from "./components/List";
import withAuth from "./withAuth";
import { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState(0);
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (state === 5) {
      setState(0);
    }
  }, [state]);

  // useEffect(() => {
  //   if (value.length === 5) {
  //     setState("");
  //   }
  // }, [value]);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="App">
      <NavBar
        label="React App 1"
        state={state}
        setState={setState}
        titleStyle={{ background: "red" }}
        defaultValue={value}
        onChange={handleChange}
      >
        <h2>Test</h2>
        <h2>Test2</h2>
      </NavBar>
      <List state={state} />
      value - {value}
    </div>
  );
}

export default withAuth(App);
