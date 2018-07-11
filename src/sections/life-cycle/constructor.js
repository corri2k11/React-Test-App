import React, {Component} from 'react'

class ComponentMount extends Component {
  /*constructor() {
    super()
  }*/
  constructor(props) {
    console.log('constructor 1');
    super(props)
    //Inicializa el state del componente con un mensaje Inicializa
    this.state = {mensaje: 'mensaje inicial 1'}
    //bindeamos/enlazamos el contexto al metodo
    this.clickHandler = this.clickHandler.bind(this)  //alternativa usar las arrow functions en la funcion clickHandler, forma mas facil y limpia
  }

  clickHandler() {
    this.setState({mensaje: 'mensaje cambiado 1'})
  }

  render() {
    console.log('render 1');
    return <div style={{ border:'1px solid #000', margin:5, padding:5 }}>
             <h4>Ciclo de montaje: Constructor</h4>
             {this.state.mensaje}
             <br/>
             <button onClick={this.clickHandler}>Cambiar Mensaje</button>
           </div>
  }
}

export default ComponentMount
