import React from "react";

// declarative

export default function NavBar(props) {
  const { label, state, setState, children, ...otherProps } = props;
  console.log("otherProps", otherProps);

  let counter = 0;

  const handleClick = (event) => {
    setState((prevState) => prevState + 1);
    counter = counter + 1;
  };

  return (
    <div>
      <h1 style={otherProps.titleStyle} {...otherProps}>
        {label}
      </h1>
      <button onClick={handleClick}>CLick</button>
      {state},{counter}
      {children}
    </div>
  );
}

// React.createElement(div, [props], [
//   React.createElement(h1, [props], [...children]),
//   React.createElement(button, [props], [...children]),
// ]);
