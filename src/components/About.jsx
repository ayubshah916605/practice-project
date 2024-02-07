import React, { useState } from "react";

export default function About() {
    const [myStyle, setmyStyle] =useState({
         
        color: "black",
        backgroundColor: "white",
       
    });
   const [btntext, setBtnText] = useState("Enable dark Mode")
     
    const togglesStyle = () => {
        // console.log("toggleStle function called");
        // console.log("Current myStyle", myStyle)

if (myStyle.color === "black") {
    //  console.log("Setting to Light mode")
    setmyStyle({color: "white",
    backgroundColor: "black",
});
setBtnText("Enable Light Mode")
         
}

else {
    // console.log("Setting to dark mode")
    setmyStyle({color: "black",
    backgroundColor: "white",
});
setBtnText("Enable Dark Mode")
}
    }
    // console.log("Current btnText",btntext);
  return (
    
    <div className="container py-3 mt-3 mb-3 rounded" style={myStyle}>
        <h1 className="headig py-3  ">About Our Application</h1>
    <div className="accordion" id="accordionExample">
      <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"  style={myStyle}
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
           Text Transformation: 
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" style={myStyle}>
            Easily switch between uppercase and lowercase text with just a click of a button. Our intuitive interface ensures smooth and efficient text editing.
          </div>
        </div>
      </div>
      <div className="accordion-item"style={myStyle}>
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed" style={myStyle}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Word and Character Count: 
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" style={myStyle}>
             Stay informed about the length of your text with our word and character count feature. Perfect for meeting word count requirements in documents.
          </div>
        </div>
      </div>
      <div className="accordion-item"style={myStyle}>
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"style={myStyle}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Clear Text: 
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" style={myStyle}>
          Want to start over? Click the "Clear" button to remove all text from the text box instantly.
          </div>
        </div>
      </div>
    </div>
    <div className="container">
    <button className="btn-success mt-2 py-1 rounded-2" onClick={togglesStyle}>{btntext}</button>
    </div>
    
    </div>
    
  );
}
