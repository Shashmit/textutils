import React, { useState } from "react";
// import ConvertToUpper from "../functions/ConvertToUpper";

const HeroSection = (props) => {
  const [entry, setEntry] = useState("");

  const handleUpClick = () => {
    let newText = entry.toUpperCase();
    setEntry(newText);
    props.showAlert("Upper Case", "success");
  };
  const handleLoClick = () => {
    let newText = entry.toLowerCase();
    setEntry(newText);
    props.showAlert("Lower Case", "success");
  };
  const handleCopyOnClick = () => {
    let text = document.getElementById("box");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to Clipboard", "success");
  };
  const handleExtraSpace = () => {
    let text = entry.split(/[ ]+/);
    setEntry(text.join(" "));
    props.showAlert("Removed Extra Space", "success");
  };
  return (
    <div>
      <div className="container my-3 ">
        <h3
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          Your Text Area
        </h3>
        <div class="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            class="form-control"
            id="box"
            value={entry}
            onChange={(e) => {
              setEntry(e.target.value);
            }}
            rows="8"
          ></textarea>
        </div>
        <div className="systemArea">
          {/* <ConvertToUpper  /> */}
          <button className="btn btn-primary" onClick={handleUpClick}>
            Convert to UpperCase
          </button>
          <button className="btn btn-primary mx-1" onClick={handleLoClick}>
            Convert to LowerCase
          </button>
          <button className="btn btn-primary mx-1" onClick={handleCopyOnClick}>
            Copy in Clipboard
          </button>
          <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>
            Remove Extra Space
          </button>
        </div>
        <div
          className="section3 my-3"
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <h5>Your Text Summary</h5>
          <p>
            {entry.split(" ").length} and {entry.length} Characters
          </p>
          <p>{0.008 * entry.split(" ").length} Minutes to Read</p>
          <h3>Preview</h3>
          <p>{entry}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
