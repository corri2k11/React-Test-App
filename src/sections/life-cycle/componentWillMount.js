import React, {Component} from 'react'

const ParaElRender = (props) => <div>
                                 <h4>Ciclo de montaje: ComponentWillMount (HOLA)</h4>
                                </div>
class ComponentWillMount extends Component {
  constructor(props) {
    console.log('constructor 2');
    super(props)
    //Inicializa el state del componente con un mensaje Inicializa
    this.state = {mensaje: 'mensaje inicial 2'}
  }

  componentWillMount() {
    console.log('componentWillMount 2');
    this.setState({mensaje: 'mensaje modificado 2'})
  }

  render() {
    console.log('render 2');
    return this.state.mensaje === 'mensaje modificado 2' ?
           <div style={{ border:'1px solid #000', margin:5, padding:5 }}>
             <h3>Elemento DOM aqui</h3>
             <ParaElRender />
             <ParaElRender />
             <ParaElRender />
             <p>Justo debajo de un componente de React</p>
           </div> : null
  }
}

export default ComponentWillMount
