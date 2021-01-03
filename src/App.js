import React from "react";
import "./styles.css";
import Triangle from "./make-triangle";
import quizTriangle from "./quiz-triangle";

export default function App() {
  return (
    <div className="App">
      <Triangle />
      <quizTriangle />
    </div>
  );
}
