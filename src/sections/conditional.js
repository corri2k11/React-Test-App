import React, {Component} from 'react';

export default class ConditionalRendering extends Component {
  constructor() {
    super()
    this.state = {isUserLogger: false}
  }
  render() {
    return <div>
        <h4>Conditional Rendering</h4>
        {this.state.isUserLogger ? <LogoutButton /> : <LoginButton /> }
      </div>
  }
}

class LoginButton extends Component {
  render() {
    return <button>Iniciar Sesion</button>
  }
}
class LogoutButton extends Component {
  render() {
    return <div>
            <p>Bienvenido, usuario</p>
            <button>Cerrar Sesion</button>
           </div>
  }
}
