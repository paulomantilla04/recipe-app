import { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Meats from "./pages/Meats";
import Seafood from './pages/Seafood';
import Veggie from './pages/Veggie';
import Beverages from "./pages/Beverages";
import Cocktails from "./pages/Cocktails";
import Desserts from "./pages/Desserts";
import Error from "./pages/Error";
import Recipe from "./pages/Recipe";
import data from "./data";

function App() {
  return (
    <>
      <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>

            <Route path="carnes" element={<Meats />}></Route>
            <Route path="carnes/1" element={<Recipe info={data.burger}/>}></Route>
            <Route path="carnes/2" element={<Recipe info={data.quesadillas}/>}></Route>
            <Route path="carnes/3" element={<Recipe info={data.pollo}/>}></Route>
            <Route path="carnes/4" element={<Recipe info={data.filet}/>}></Route>
            <Route path="carnes/5" element={<Recipe info={data.roastBeef}/>}></Route>

            <Route path="mariscos" element={<Seafood/>}></Route>
            <Route path="vegetarianos" element={<Veggie/>}></Route>
            <Route path="bebidas" element={<Beverages/>}></Route>
            <Route path="cocteleria" element={<Cocktails/>}></Route>
            <Route path="postres" element={<Desserts/>}></Route>
            <Route path="*" element={<Error/>}></Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;
