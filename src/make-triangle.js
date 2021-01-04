import React, {useState} from "react";

export default function Triangle() {

  var [result, setResult]= useState("The result will appear here")

  function inputClickHandler1(event) {
    var angleOne = event.target.value;
    return (angleOne);
  }

  function inputClickHandler2(event) {
    var angleTwo = event.target.value;
    return (angleTwo);
  }

  function inputClickHandler3(event) {
    var angleThree = event.target.value;
    return (angleThree);
  }


   function finalResult() {
    var sumOfAngles = inputClickHandler1() + inputClickHandler2() + inputClickHandler3())
  }

  // console.log(
  //   inputClickHandler1() + inputClickHandler2() + inputClickHandler3()
  // );

  return (
    <div className="App">
      <h1>Triangles</h1>
      <h2>Enter three angles below to make a triangle: </h2>
      <input value={"input1"} onChange={inputClickHandler1} />
      <input value={"input2"} onChange={inputClickHandler2} />
      <input value={"input3"} onChange={inputClickHandler3} /> 
      <h2>Result: </h2>
    </div>
  );
}
