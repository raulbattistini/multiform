import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Step1 from "./pages/FormStep1";
import Step2 from "./pages/FormStep2";
import Step3 from "./pages/FormStep3";
export default function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route path="/" exact element={<Step1/>}></Route>
            
            <Route path="/step2" exact element={<Step2/>}></Route>
            
            <Route path="/step3" exact element={<Step3/>}></Route>
        </Routes>
    </Router>
  )
}
