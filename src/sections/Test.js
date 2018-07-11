import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//let Saludo = (props) => <h2>{props.title}</h2>
class Saludo extends Component {
  render() {
    return <h2>{this.props.title}</h2>
  }
}
class Texto extends Component {
  render() {
    const {
      text,
      number,
      arrayOfNumbers,
      arrayOfObjects,
      multiply,
      IsActivated,
      TitleAsProp
    } = this.props;

    const IsActivatedFlag = IsActivated ? "Activated" : "Inactive";
    //tratar/procesar elems del array antes de mostrarlos
    const numerosTransformados = arrayOfNumbers.map(multiply);
    return <div>
      <p>{text}</p>
      <p>{number}</p>
      <p>{IsActivatedFlag}</p>
      <p>{numerosTransformados.join(', ')}</p>
      <p>{arrayOfObjects.key}</p>
      {TitleAsProp}
      </div>
  }
}
class Test extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Saludo title="Bienvenido a React!" />
        </header>
        <Texto text="Texto en string"
               number={2}
               arrayOfNumbers={[1,2,4,5,10]}
               arrayOfObjects={{ key: 'valor', key2: 'otro valor' }}
               multiply={(n)=>n*5}
               IsActivated={false}
               TitleAsProp={<h3>Este es un titulo h3</h3>} />
      </div>
    );
  }
}

export default App;
