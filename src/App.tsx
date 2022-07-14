import React, { useState } from "react";
import image from "./assets/shaq-a11y.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <img src={image} />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">Text with not good enough color contrast</p>
      <input type="text"></input>
      <label>Demo input without associated label</label>
    </div>
  );
}

export default App;
