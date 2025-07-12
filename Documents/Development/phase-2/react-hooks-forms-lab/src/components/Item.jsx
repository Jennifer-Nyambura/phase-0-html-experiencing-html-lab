import React from "react";

function Item({ name, category }) {
  return (
    <li>
      {name} - <em>{category}</em>
    </li>
  );
}

export default Item;
