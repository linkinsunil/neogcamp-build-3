import React from "react";
import "./styles.css";
import Triangle from "./make-triangle";
import QuizTriangle from "./quiz-triangle";
import ThirdAngle from "./third-angle";
import SideTriangle from "./sides-triangle";
import Hypotenuse from "./hypotenuse";
import Calculator from "./calculator";

export default function App() {
  return (
    <div className="App">
      <Triangle />
      <hr />
      <QuizTriangle />
      <hr />
      <ThirdAngle />
      <hr />
      <SideTriangle />
      <hr />
      <Hypotenuse />
      <hr />
      <Calculator />
    </div>
  );
}
