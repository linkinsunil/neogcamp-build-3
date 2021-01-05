import React, { useState } from "react";

var angleOne = 0;
var angleTwo = 0;
var angleThree = 0;

export default function Triangle() {
  var [result, setResult] = useState("Enter angles above and check");
  // var [input, setInput] = useState(0)

  function inputClickHandler1(event) {
    angleOne = event.target.value;
    return angleOne;
  }

  function inputClickHandler2(event) {
    angleTwo = event.target.value;
    return angleTwo;
  }

  function inputClickHandler3(event) {
    angleThree = event.target.value;
    return angleThree;
  }

  function buttonClickHandler() {
    var sumOfAngles =
      parseInt(angleOne, 10) +
      parseInt(angleTwo, 10) +
      parseInt(angleThree, 10);
    if (sumOfAngles === 180) {
      setResult("This is a triangle");
    } else {
      setResult("This is NOT a triangle");
    }
  }

  // console.log(
  //   inputClickHandler1() + inputClickHandler2() + inputClickHandler3()
  // );

  return (
    <div className="App">
      <h1>Triangles</h1>
      <h2>Enter three angles below to make a triangle: </h2>
      <input onChange={inputClickHandler1} />
      <input onChange={inputClickHandler2} />
      <input onChange={inputClickHandler3} />
      <button onClick={buttonClickHandler}> Check </button>
      <h2>Result: {result} </h2>
    </div>
  );
}
