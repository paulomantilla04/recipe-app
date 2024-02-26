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

function App() {
  return (
    <>
      <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="meats" element={<Meats />}></Route>
            <Route path="seafood" element={<Seafood/>}></Route>
            <Route path="veggie" element={<Veggie/>}></Route>
            <Route path="beverages" element={<Beverages/>}></Route>
            <Route path="cocktails" element={<Cocktails/>}></Route>
            <Route path="desserts" element={<Desserts/>}></Route>
            <Route path="*" element={<Error/>}></Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;
