import "./App.css";
import Home from './components/home/index';
import DrugChecker from "./components/drugChecker";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carboplatin from "./components/carboplatin/Carboplatin";
import Remedesivir from "./components/remedesivir/Remedesivir";
import Gemitabine from "./components/gemitabine/Gemitabine";
import Atomocetine from "./components/atomoxetine/Atomocetine";
import Ciprofloxacin from "./components/ciprofloxacin/Ciprofloxacin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/drug-checker" element={<DrugChecker/>} />
        <Route path="/drug/carboplatin" element={<Carboplatin/>} />
        <Route path="/drug/remedesivir" element={<Remedesivir/>} />
        <Route path="/drug/gemitabine" element={<Gemitabine/>} />
        <Route path="/drug/atomoxetine" element={<Atomocetine/>} />
        <Route path="/drug/ciprofloxacin" element={<Ciprofloxacin/>} />

      </Routes>
   </BrowserRouter>
  );
}

export default App;
