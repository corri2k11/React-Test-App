import React, {Component} from 'react'

export default class Eventos1 extends Component {
  constructor() {
    super()
    this.state = {mouseX:0, mouseY:0}
    //this.mouseMoveHandler = this.mouseMoveHandler.bind(this)
  }

  //Manejadores de eventos
  mouseMoveHandler = (e) => {
    //Extrae del objeto e/evento la posicion actual del raton
    const {clientX,clientY} = e
    this.setState({mouseX: clientX, mouseY: clientY})
  }
  clickHandler = (e) => {
    console.log(e);
    console.log(e.nativeEvent);
    alert('Hi there!')
  }

  render() {
    return <div>
              <h4>Eventos</h4>
              <button onClick={this.clickHandler}>Click Me</button>
              <div onMouseMove={this.mouseMoveHandler}
                   style={ {border:'1px solid #000', marginTop:10, padding:10} }>
                <p>{this.state.mouseX}, {this.state.mouseY}</p>
              </div>
           </div>
  }
}
