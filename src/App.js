import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [divColor, setDivColor] = useState("");

  useEffect(() => (document.title = count));

  const handleChange = ({ target }) => setDivColor(target.value);

  return (
    <div>
      <section>
        <input
          type="text"
          placeholder="Type in a color eg cyan"
          onChange={handleChange}
          style={{ background: divColor }}
        />
      </section>
      <section>
        <button onClick={() => setCount(count + 1)}>
          Click me
          <small>(Look at the browser tab title)</small>
        </button>
      </section>
    </div>
  );
}

export default App;
