import React, { useState } from "react";

const TextForm = ({title,mode,showAlert}) => {
     
    //  console.log("title",title)
    //  console.log("mode",mode)
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext)
    showAlert("Your Text has been Converted to UperCase","success")
  }
  const converLoClick = () => {
    let newtext = text.toLowerCase()
    setText(newtext)
    showAlert("Your Text has been Converted to LowerCase","success")
   
  }

   const handleCopy = () => {
    // console.log("i am copy");
    let text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    showAlert("Text has been Coped from ClipBoard", "success")
   }
  const converClearClick = () => {
    let newtext = ""
    setText(newtext)
    showAlert("Text has been Cleared","success")
  }
  const handleOnChange = (event) => {
    // console.log("handleOnChange");
    setText(event.target.value)
  }
 const [text, setText] = useState("")
  return (
    <>
    <div className="container m-2" style={{color: mode===`dark`?`white`:`black`}}>
       <h1 className="mt-2">{title}</h1>
      <div className="mt-3">
        <textarea
          className="form-control shadow-none" value={text} 
          onChange={handleOnChange} style={{backgroundColor: mode===`dark`?`rgb(36 74 104 )`:`white`,color: mode===`dark`?`white`:`black`}}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn-primary mt-2 p-2 m-2 rounded-2 shadow-none" onClick={handleUpClick}>Convert Text UperCase</button>
      <button disabled={text.length===0} className="btn-primary mt-2 p-2 m-2 rounded-2 shadow-none" onClick={converLoClick}>Convert Text LowerCase</button>
      <button disabled={text.length===0} className="btn-primary mt-2 p-2 m-2 rounded" onClick={handleCopy}>Copy To ClipBoard</button>
      <button disabled={text.length===0} className="btn-primary mt-2 p-2 m-2 rounded-2 shadow-none" onClick={converClearClick}>Clear Text</button>
    </div>
    <div className="container"style={{color: mode===`dark`?`white`:`black`}}>
      <h1>Text summary</h1> 
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words  and {text.length} Character</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read To The Text</p>
      <h3>preview</h3>
      <p>{text.length>0?text:"Nothing to Preview"}</p>
    </div>
    </>
  );
};

export default TextForm;
