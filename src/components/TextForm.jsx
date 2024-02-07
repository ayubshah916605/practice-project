import React, { useState } from "react";

const TextForm = ({title}) => {
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext)
  }
  const converLoClick = () => {
    let newtext = text.toLowerCase()
    setText(newtext)
  }
  const converClearClick = () => {
    let newtext = ""
    setText(newtext)
  }
  const handleOnChange = (event) => {
    console.log("handleOnChange");
    setText(event.target.value)
  }
 const [text, setText] = useState("")
  return (
    <>
    <div className="container border border-success m-2 rounded-2 " >
       <h1 className="mt-2">{title}</h1>
      <div className="mt-3">
        <textarea
          className="form-control" value={text} 
          onChange={handleOnChange} 
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>
      <button className="btn-primary mt-2 p-2 m-2 rounded-2 shadow-none" onClick={handleUpClick}>Convert Text UperCase</button>
      <button className="btn-primary mt-2 p-2 m-2 rounded-2 shadow-none" onClick={converLoClick}>Convert Text LowerCase</button>
      <button className="btn-primary mt-2 p-2 m-2 rounded-2 shadow-none" onClick={converClearClick}>Clear Text</button>
    </div>
    <div className="container border border-success rounded-2">
      <h1>Text summary</h1>
      <p>{text.split(" ").length} Words  and {text.length} Character</p>
      <p>{0.008 * text.split(" ").length} Minutes Read</p>
      <h3>preview</h3>
      <p>{text}</p>
    </div>
    </>
  );
};

export default TextForm;
