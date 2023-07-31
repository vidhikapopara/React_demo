import React, { useState } from "react";

export default function TextForm(props) {
  const [Text, setText] = useState("");
  //wrong way to change state  Text = "Enter text";
  //setText("Enter text");

  const handleUpClick = () => {
    // console.log("UpperCase Was Clicked" + Text);
    let newText = Text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    // console.log("UpperCase Was Clicked" + Text);
    let newText = Text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    // console.log("UpperCase Was Clicked" + Text);
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          {/* <label for="myBox" class="form-lable">
          Example Text Area
        </label> */}
          <textarea
            className="form-control"
            value={Text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary mx-3 " onClick={handleLoClick}>
          Convert To LowerCase
        </button>
      </div>

      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{Text.split(" ").length} numbers words </p>
        <p>{Text.length} number of characters inculding space</p>

        <p>
          {Text.length - (Text.split(" ").length - 1)} number pf character
          without space
        </p>
        <p>{Text.split(".").length} number of sentance.</p>
        <p>{0.08 * Text.split(" ").length} Minutes To Read</p>
        <p>{(Text.match(/https/g) || []).length}https address found</p>
        <h3>Preview</h3>
        <p>{Text}</p>
      </div>
    </>
  );
}
