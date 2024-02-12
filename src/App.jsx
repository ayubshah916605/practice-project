import React,{ useState } from "react";
 import About from "./components/About.jsx";
import Navbar from "./components/header/Navbar";
import TextForm from "./components/TextForm.jsx";
import {Routes, Route} from "react-router-dom";
import Alert from "./components/Alert.jsx";


function App() {
  const [mode, setMode] = useState("light");
 const [alert, setAlert] = useState(null)


   const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type

      })
      setTimeout(() => {
       setAlert(null);
      },1500)
   }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been mode Enabled", "success");
    }
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert Alert={alert}/>
      <Routes>
        
      <Route path="/textForm" element={<div className="container"><TextForm showAlert={showAlert} title="Text-Changer - Word Counter  Character Counter  Copy Text" mode={mode}  /></div>} />
        
        <Route path="/about" element={<About mode={mode}/>} />
    </Routes>
    </>
  );
}

export default App;
