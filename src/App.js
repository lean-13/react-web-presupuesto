// react
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
// scss
import './App.scss';
// navbar
import NavBar from './components/Navegacion/Navbar/NavBar';
// menu
import Menu from './components/Navegacion/Menu/Menu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <div className="App-header">
            <NavBar/>
          </div>
          <Routes>
            <Route path="/" element={ <> <Menu/> </> } />
            {/* <Route path="/" element={ <> </> } /> 
            <Route path="/categoria/:categoriaId" element={ <></> } />
            <Route path="/allProductos" element={ <></> } /> 
            <Route path="/detail/:itemId" element={ "l" } /> */}
            {/* error 404 */}
            <Route path="*" element={ <h1>Error 404</h1> } /> 
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
