import React from "react";
import "./styles.css";

var shoppingList = [
  "milk",
  "eggs",
  "flowers",
  "curd",
  "paneer",
  "buttermilk",
  "agarbatti",
  "biscuits"
];

export default function App() {
  function getBg(index) {
    if (index % 2 === 0) {
      return "white";
    }
    return "grey";
  }

  return (
    <div className="App">
      <h1>My shopping list</h1>
      <ul>
        {shoppingList.map((item, index) => {
          return (
            <li
              key={item}
              style={{ backgroundColor: getBg(index), padding: "1rem" }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
