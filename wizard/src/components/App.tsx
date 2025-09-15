import { BrowserRouter , Route , Routes } from "react-router-dom"
import Home from "./layout/home"
import FormLayout from "../routes/formLayout"



export default function App() {

  return (

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/form" element={<FormLayout/>}/>
     </Routes>
  </BrowserRouter>
  )
}


