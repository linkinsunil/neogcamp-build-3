import React from "react";

export default function Triangle() {
  function inputClickHandler() {
    console.log("hello");
  }

  return (
    <div className="App">
      <h1>Triangles</h1>
      <h2>Enter three angles below to make a triangle: </h2>
      <input onChange={inputClickHandler} />
      <input />
      <input />
      <h2>Result: </h2>
    </div>
  );
}
