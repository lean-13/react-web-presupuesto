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
// presupuesto
import Presupuesto from './components/Presupuesto/Presupuesto';
// calculadora
import Calculadora from './components/Calculadora/Calculadora';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <div className="App-header">
            <NavBar/>
          </div>
          <Routes>
            <Route path="/react-web-presupuesto" element={ <> <Menu/> </> } />
            <Route path="/presupuesto" element={ <> <Presupuesto/> </> } />
            <Route path="/calculadora" element={ <> <Calculadora/> </> } />
            {/* error 404 */}
            <Route path="*" element={ <h1>Error 404</h1> } /> 
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
