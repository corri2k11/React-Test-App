import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ConditionalRendering from './sections/conditional'
import ListadoNumerosRenderizado from './sections/listasNumeros'
import ListadoObjetosRenderizado from './sections/listasObjetos'
import Eventos1 from './sections/eventos'
import Formulario from './sections/formulario'
import PropChildren from './sections/propChildren'
import ComponentMount from './sections/life-cycle/constructor'
import ComponentWillMount from './sections/life-cycle/componentWillMount'
import ComponentDidMount from './sections/life-cycle/componentDidMount'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ConditionalRendering />
        <ListadoNumerosRenderizado />
        <ListadoObjetosRenderizado />
        <Eventos1 />
        <Formulario />
        <PropChildren />
        <ComponentMount />
        <ComponentWillMount />
        <ComponentDidMount />
      </div>
    );
  }
}

export default App;
