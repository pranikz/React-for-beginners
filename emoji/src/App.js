import React, { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance"
};

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we dont have any emoji like this in our database";
    }
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Enter a emoji and get a meaning as result</h1>

      <input onChange={emojiInputHandler}></input>

      <h2>{meaning}</h2>
    </div>
  );
}
