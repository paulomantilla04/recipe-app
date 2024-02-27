import { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";


import Error from "./pages/Error";
import Recipe from "./pages/Recipe";
import carne from "./data/carne";
import marisco from './data/mariscos';
import bebidas from './data/bebidas';
import cocteleria from "./data/cocteleria";
import Page from "./pages/Page";
import mariscos from "./data/mariscos";
import postres from "./data/postres";
import veggie from "./data/veggie";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>

          {/* CARNES */}
          <Route path="carnes" element={<Page title="CARNES" data={carne} />}></Route>
          <Route path="carnes/1" element={<Recipe info={carne.burger}/>}/>
          <Route path="carnes/2" element={<Recipe info={carne.quesadillas}/>}/>
          <Route path="carnes/3" element={<Recipe info={carne.pollo}/>}/>
          <Route path="carnes/4" element={<Recipe info={carne.filet}/>}/>
          <Route path="carnes/5" element={<Recipe info={carne.roastBeef}/>}/>


          {/* MARISCOS */}
          <Route path="mariscos" element={<Page title="MARISCOS" data={mariscos} />}></Route>
          <Route path="mariscos/1" element={<Recipe info={marisco.ensalada}/>}/>
          <Route path="mariscos/2" element={<Recipe info={marisco.aguachile}/>}/>
          <Route path="mariscos/3" element={<Recipe info={marisco.ceviche}/>}/>
          <Route path="mariscos/4" element={<Recipe info={marisco.camarones}/>}/>
          <Route path="mariscos/5" element={<Recipe info={marisco.caldo}/>}/>

          {/* POSTRES */}
          <Route path="vegetariano" element={<Page title="VEGETARIANO" data={veggie} />}></Route>
          <Route path="vegetariano/1" element={<Recipe info={veggie.wok}/>}/>
          <Route path="vegetariano/2" element={<Recipe info={veggie.ceviche}/>}/>
          <Route path="vegetariano/3" element={<Recipe info={veggie.empanadas}/>}/>
          <Route path="vegetariano/4" element={<Recipe info={veggie.verduras}/>}/>
          <Route path="vegetariano/5" element={<Recipe info={veggie.pasta}/>}/>

          {/* BEBIDAS */}
          <Route path="bebidas" element={<Page title="BEBIDAS" data={bebidas} />}></Route>
          <Route path="bebidas/1" element={<Recipe info={bebidas.pepino}/>}/>
          <Route path="bebidas/2" element={<Recipe info={bebidas.horchata}/>}/>
          <Route path="bebidas/3" element={<Recipe info={bebidas.jamaica}/>}/>
          <Route path="bebidas/4" element={<Recipe info={bebidas.naranjada}/>}/>
          <Route path="bebidas/5" element={<Recipe info={bebidas.mango}/>}/>
          
          {/* COCTELERIA */}
          <Route path="cocteleria" element={<Page title="COCTELERIA" data={cocteleria} />}></Route>
          <Route path="cocteleria/1" element={<Recipe info={cocteleria.baileys}/>}/>
          <Route path="cocteleria/2" element={<Recipe info={cocteleria.mimosa}/>}/>
          <Route path="cocteleria/3" element={<Recipe info={cocteleria.cantarito}/>}/>
          <Route path="cocteleria/4" element={<Recipe info={cocteleria.tamarindo}/>}/>
          <Route path="cocteleria/5" element={<Recipe info={cocteleria.negra}/>}/>

          {/* POSTRES */}
          <Route path="postres" element={<Page title="POSTRES" data={postres} />}></Route>
          <Route path="postres/1" element={<Recipe info={postres.brownies}/>}/>
          <Route path="postres/2" element={<Recipe info={postres.carlota}/>}/>
          <Route path="postres/3" element={<Recipe info={postres.sandwich}/>}/>
          <Route path="postres/4" element={<Recipe info={postres.cheesecakeLotus}/>}/>
          <Route path="postres/5" element={<Recipe info={postres.muffins}/>}/>

          <Route path="*" element={<Error />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
