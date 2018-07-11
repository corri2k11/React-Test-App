import React, { Component } from 'react'

export default class ListadoNumerosRenderizado extends Component {
  render() {
    const numeros = [1,3,6,6,6,8,20];
    return <div>
              <h4>Trabajando con listas de numeros</h4>
              {
                numeros.map((n,idx) => {
                  return <p key={idx}>Soy el numero {n}</p>
                })
              }
           </div>
  }
}
