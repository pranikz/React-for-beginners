import React, { useState } from "react";
import "./styles.css";

var headingText = "Like counterS";

export default function App() {
  
  const [likeCounter, setLikeCounter] = useState(0);

  function likeClickHandler() {
    var newLikeCounter = likeCounter+1;
    setLikeCounter(newLikeCounter); // processing or output
  }

  return (
    <div className="App">
      <h1>{headingText}</h1>
      <button onClick={likeClickHandler}>Like me</button> {likeCounter}
    </div>
  );
}
