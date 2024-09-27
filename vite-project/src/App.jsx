import About from "./componenets/About"
import JDM from "./componenets/JDM"
import AmericanMuscle from "./componenets/AmericanMuscle"
import German from "./componenets/German"
import Homepage from "./componenets/Homepage"
import { Routes, Route } from "react-router-dom"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/AmericanMuscle" element={<AmericanMuscle/>}/>
      <Route path="/German" element={<German/>}/>
      <Route path="/JDM" element={<JDM/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
  )  
}


export default App
