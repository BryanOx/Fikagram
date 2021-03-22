import React from 'react';
import './App.css';
import BarraNav from './components/BarraNav';
import Pedidos from './components/Pedidos';
import Registro from './components/Registro';
import Perfil from './components/Perfil';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {

  return (
    <Router>
      <Switch>
        <div className="App" style={{ backgroundColor: "#fae6e6" }}>
          <BarraNav />

          <Route path='/encargar'>
            <div className="container Titulo">
              <h1 id="Titulo">Fika Uy</h1>
            </div>
            <Pedidos />
          </Route>

          <Route path='/perfil'>
            <Perfil nombre="Bryan" apellido="Oxley"/>
          </Route>

          <Route path='/registro'>
            <Registro/>
          </Route>

        <Footer />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
