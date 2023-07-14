// App.js
import React from "react";

// a
import text from "./text.json";

export default function App() {
  return (
    <div>
      Example text content:
      <div>{text.welcomeMessageOneParagraph}</div>
    </div>
  );
}
