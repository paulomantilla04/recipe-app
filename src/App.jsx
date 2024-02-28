import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Recipe from "./pages/Recipe";
import Page from "./pages/Page";
import index from './data/index';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>

          {/* CARNES */}
          <Route path="carnes" element={<Page title="CARNES" data={index.carnes} />}></Route>
          <Route path="carnes/1" element={<Recipe info={index.carnes.burger}/>}/>
          <Route path="carnes/2" element={<Recipe info={index.carnes.quesadillas}/>}/>
          <Route path="carnes/3" element={<Recipe info={index.carnes.pollo}/>}/>
          <Route path="carnes/4" element={<Recipe info={index.carnes.filet}/>}/>
          <Route path="carnes/5" element={<Recipe info={index.carnes.roastBeef}/>}/>


          {/* MARISCOS */}
          <Route path="mariscos" element={<Page title="MARISCOS" data={index.mariscos} />}></Route>
          <Route path="mariscos/1" element={<Recipe info={index.mariscos.ensalada}/>}/>
          <Route path="mariscos/2" element={<Recipe info={index.mariscos.aguachile}/>}/>
          <Route path="mariscos/3" element={<Recipe info={index.mariscos.ceviche}/>}/>
          <Route path="mariscos/4" element={<Recipe info={index.mariscos.camarones}/>}/>
          <Route path="mariscos/5" element={<Recipe info={index.mariscos.caldo}/>}/>

          {/* VEGETARIANO */}
          <Route path="vegetariano" element={<Page title="VEGETARIANO" data={index.vegetariano} />}></Route>
          <Route path="vegetariano/1" element={<Recipe info={index.vegetariano.wok}/>}/>
          <Route path="vegetariano/2" element={<Recipe info={index.vegetariano.ceviche}/>}/>
          <Route path="vegetariano/3" element={<Recipe info={index.vegetariano.empanadas}/>}/>
          <Route path="vegetariano/4" element={<Recipe info={index.vegetariano.verduras}/>}/>
          <Route path="vegetariano/5" element={<Recipe info={index.vegetariano.pasta}/>}/>

          {/* BEBIDAS */}
          <Route path="bebidas" element={<Page title="BEBIDAS" data={index.bebidas} />}></Route>
          <Route path="bebidas/1" element={<Recipe info={index.bebidas.pepino}/>}/>
          <Route path="bebidas/2" element={<Recipe info={index.bebidas.horchata}/>}/>
          <Route path="bebidas/3" element={<Recipe info={index.bebidas.jamaica}/>}/>
          <Route path="bebidas/4" element={<Recipe info={index.bebidas.naranjada}/>}/>
          <Route path="bebidas/5" element={<Recipe info={index.bebidas.mango}/>}/>
          
          {/* COCTELERIA */}
          <Route path="cocteleria" element={<Page title="COCTELERIA" data={index.cocteleria} />}></Route>
          <Route path="cocteleria/1" element={<Recipe info={index.cocteleria.baileys}/>}/>
          <Route path="cocteleria/2" element={<Recipe info={index.cocteleria.mimosa}/>}/>
          <Route path="cocteleria/3" element={<Recipe info={index.cocteleria.cantarito}/>}/>
          <Route path="cocteleria/4" element={<Recipe info={index.cocteleria.tamarindo}/>}/>
          <Route path="cocteleria/5" element={<Recipe info={index.cocteleria.negra}/>}/>

          {/* POSTRES */}
          <Route path="postres" element={<Page title="POSTRES" data={index.postres} />}></Route>
          <Route path="postres/1" element={<Recipe info={index.postres.brownies}/>}/>
          <Route path="postres/2" element={<Recipe info={index.postres.carlota}/>}/>
          <Route path="postres/3" element={<Recipe info={index.postres.sandwich}/>}/>
          <Route path="postres/4" element={<Recipe info={index.postres.cheesecakeLotus}/>}/>
          <Route path="postres/5" element={<Recipe info={index.postres.muffins}/>}/>

          <Route path="*" element={<Error />}></Route>
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
