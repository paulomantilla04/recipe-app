import { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Meats from "./pages/Meats";
import Seafood from "./pages/Seafood";
import Veggie from "./pages/Veggie";
import Beverages from "./pages/Beverages";
import Cocktails from "./pages/Cocktails";
import Desserts from "./pages/Desserts";
import Error from "./pages/Error";
import Recipe from "./pages/Recipe";
import carne from "./data/carne";
import marisco from './data/mariscos';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>

          {/* CARNES */}
          <Route path="carnes" element={<Meats />}></Route>
          <Route
            path="carnes/1"
            element={<Recipe info={carne.burger} />}
          ></Route>
          <Route
            path="carnes/2"
            element={<Recipe info={carne.quesadillas} />}
          ></Route>
          <Route path="carnes/3" element={<Recipe info={carne.pollo} />}></Route>
          <Route path="carnes/4" element={<Recipe info={carne.filet} />}></Route>
          <Route
            path="carnes/5"
            element={<Recipe info={carne.roastBeef} />}
          ></Route>

          {/* MARISCOS */}
          <Route path="mariscos" element={<Seafood />}></Route>
          <Route path="mariscos/1" element={<Recipe info={marisco.ensalada}/>}/>
          <Route path="mariscos/2" element={<Recipe info={marisco.aguachile}/>}/>
          <Route path="mariscos/3" element={<Recipe info={marisco.ceviche}/>}/>
          <Route path="mariscos/4" element={<Recipe info={marisco.camarones}/>}/>
          <Route path="mariscos/5" element={<Recipe info={marisco.caldo}/>}/>


          <Route path="vegetarianos" element={<Veggie />}></Route>
          <Route path="bebidas" element={<Beverages />}></Route>
          <Route path="cocteleria" element={<Cocktails />}></Route>
          <Route path="postres" element={<Desserts />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
