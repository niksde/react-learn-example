import React, { useState } from "react";

// declarative

export default function NavBar(props) {
  const {
    label,
    state,
    setState,
    children,
    onChange,
    defaultValue,
    ...otherProps
  } = props;
  console.log("otherProps", otherProps);
  const [state2, setState2] = useState(defaultValue);

  let counter = 0;

  const handleClick = (event) => {
    setState((prevState) => prevState + 1);
    counter = counter + 1;
  };

  const handleChange = (event) => {
    setState2(event.target.value);
    onChange(event);
  };

  const handleLogout = () => {
    localStorage.removeItem("login");
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div>
      <h1 style={otherProps.titleStyle} {...otherProps}>
        {label}
      </h1>
      <button onClick={handleLogout}>logout</button>
      <button onClick={handleClick}>CLick</button>
      {state},{counter}
      {children}
      <input type="text" value={state2} onChange={handleChange} />
    </div>
  );
}

// React.createElement(div, [props], [
//   React.createElement(h1, [props], [...children]),
//   React.createElement(button, [props], [...children]),
// ]);
