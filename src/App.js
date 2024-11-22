import "./style.css";

// Import Route and our components
import { Route, Routes } from "react-router-dom";
import Currencies from "./Pages/Currencies";
import Main from "./Pages/Main";
import Price from "./Pages/Price";
import Nav from "./Components/Nav";


export default function App () {
  // We will use the Route component, path attribute, and element attribute to specify each route.
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/currencies" element={<Currencies/>}/>
        <Route path="/price/:symbol" element={<Price/>}/>
      </Routes>
    </div>
  );
}