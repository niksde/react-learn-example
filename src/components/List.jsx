import React from "react";

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => (
  <li key={number.toString()}>{number} item</li>
));

export default function List({ state }) {
  return (
    <div>
      <ul>{listItems}</ul>
      {state}
    </div>
  );
}
