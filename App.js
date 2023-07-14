import React from "react";

// the hardcoded expectation is that the text json file will be here.
import text from "assets/text/text.json";

export default function App() {
  return (
    <div>
      Example text content:
      <div>{text.exmapleWelcomeMessageOneParagraph}</div>
    </div>
  );
}
