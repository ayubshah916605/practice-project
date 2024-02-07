import About from "./components/About.jsx";
import Navbar from "./components/header/Navbar";
// import Slider from "./components/heroSection/Slider";
import TextForm from "./components/TextForm.jsx";

function App() {
  
  // let Obj = {
  //   name: "ayub",
  //   age : 27,
  //   dept: "it"
  // }
  return (
  <>
  <Navbar />
  <div className="container">
     <TextForm title="Enter your text here for analyse"/>
 </div>
 <About />
  
  {/* // i can pass here props */}
  {/* <Navbar channel="chai our code"/>  */}
  {/* <Slider /> */}
  
  </>
  )
}

export default App
