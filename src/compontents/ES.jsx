import React, { useEffect } from "react";
export default function LearnES6() {
  const colors = ["green", "red", "yellow"];
  const item = colors.map((color) => `<li>${color}</li>`);
  const newItem = colors.map((color) => "<li>" + color + "</li>");
  console.log(item);
  return (
    <React.Fragment>
      <div>
        <h1>{colors.length}</h1>
      </div>
    </React.Fragment>
  );
}
