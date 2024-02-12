import React from "react";

const Alert = (props) => {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    
    // console.log("props" ,props)
  return (
    <div className="mt-2" style={{height: "50px"}}>
   {props.Alert && <div className={`alert alert-${props.Alert.type} alert-dismissible fade show`} role="alert">
      {capitalize (props.Alert.type)}: {props.Alert.msg}
    </div>}
    </div>
  );
};

export default Alert;
