import React, {Component} from 'react'

export default class Formulario extends Component {
  //FOrmulario COntrolado
  constructor() {
    super()
    this.state = {
      inputName: '',
      inputTwitter: '@',
      inputTerms: true
    }
  }

  //Manejadores eventos
  recogerDatosHandler = (e) => {
    e.preventDefault() //evitar que el boton haga submit para recuperar 1ero los datos, despues hacer submit
    //Forma rudicmentaria de recuperar lo datos del formulario
    //const name = document.getElementById('name').value
    //const email = document.getElementById('twitter').value

    //usando ref  (una forma mas limpia y comoda de recuperar el valor del elemento input )

    //ya no es necesario esto cuando guardamos los valores del formulario en el state de la clase y lo controlamos todo desde ahi y eventos onChange de los elementos input
    /*const name = this.inputName.value;
    const email = this.twitterAccount.value;
    console.log({name, email})*/

    console.log(this.state)
  }
  onChkChangedHandler = (e) => {
    console.log("onChanged")
    console.log(e.target.checked)
    this.setState({inputTerms: e.target.checked})
  }

  render() {
    return <div style={ {border:'1px solid #000', marginTop:10, padding:10} }>
             <h4>Formularios</h4>
             <form onSubmit={this.recogerDatosHandler}>
              <p>
                <label htmlFor="name">Nombre: </label>
                <input id='name'
                       name='userName'
                       placeholder='Introduce el nombre'
                       ref={ inpElem => this.inputName = inpElem }
                       value={this.state.inputName}
                       onChange={(e) => this.setState({inputName: e.target.value})} />
              </p>
              <p>
                <label htmlFor="twitter">Twitter: </label>
                <input id='twitter'
                       name='twitterAccount'
                       placeholder='Introduce tu Twitter'
                       ref={ inpElem => this.twitterAccount = inpElem }
                       value={this.state.inputTwitter}
                       onChange={(e) => this.setState({inputTwitter: e.target.value})} />
              </p>
              <p>
                <label>
                  <input type='checkbox'
                         onChange={this.onChkChangedHandler}
                         checked={this.state.inputTerms} />Accepted terms
                </label>
              </p>
              <button>Enviar</button>
             </form>
           </div>
  }
}
