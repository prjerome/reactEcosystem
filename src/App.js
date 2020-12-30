import React, { useState } from "react";
import "./App.css";

function App() {
  const [Color, setColor] = useState("");

  const handleChange = ({ target }) => setColor(target.value);

  return (
    <div>
      <input
        type="text"
        placeholder="Type in a color eg cyan"
        onChange={handleChange}
        style={{ background: Color }}
      />
    </div>
  );
}

export default App;
