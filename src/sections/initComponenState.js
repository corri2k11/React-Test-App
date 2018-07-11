import React, { Component } from 'react';

class Contador extends Component {
  constructor(props) {
    super(props)
    //console.log(this.props.contadorInicial)
    this.state = {contador: this.props.contadorInicial}
    setInterval(() => {
      //this.state.contador = this.state.contador + 1  //No es valido actualizar el state directamente, se hace por medio de funcion setState...
      //function setState acepta un param, que es el nuevo estado que queremos en nuestro componente
      this.setState({contador: this.state.contador+1})
    }, 1000)
  }
  render() {
    return <ContadorHijo1 numero={this.state.contador} />
  }
}
Contador.defaultProps = {
  contadorInicial: 0
}

class ContadorHijo1 extends Component {
  render() {
    //console.log("Contador hijo render()");
    return <span>{this.props.numero}</span>
  }
}
