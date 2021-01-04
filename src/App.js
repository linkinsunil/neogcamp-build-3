import React from "react";
import "./styles.css";
import Triangle from "./make-triangle";
import QuizTriangle from "./quiz-triangle";
import ThirdAngle from "./third-angle";
import SideTriangle from "./sides-triangle";
import Hypotenuse from "./hypotenuse";
import Calculator from "./calculator";

// Ask user to input three angles and you say whether user has entered angles which could make a triangle. Hint: sum of angles in triangle is 180.
// Show three angles to the user and ask if this triangle is an obtuse triangle. Do this for right and acute triangles too.
// Show two angles to the user and ask what would be the third angle?
// Similar quiz on Isosceles, Equilateral.
// Ask them to enter two legs and you tell them the hypotenuse.
// Calculator for area of triangle

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
