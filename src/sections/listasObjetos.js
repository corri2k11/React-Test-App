import React, { Component } from 'react'
import cars from './data/cars.json'

class CarItem extends Component {
  render() {
    const { carpProp, myId } = this.props
    return <li key={carpProp.id}>
              <p><strong>Id:</strong>{myId}</p>
              <p><strong>Id:</strong>{carpProp.id}</p>
              <p><strong>Nombre:</strong>{carpProp.name}</p>
              <p><strong>Marca:</strong>{carpProp.company}</p>
           </li>
  }
}

export default class ListadoObjetosRenderizado extends Component {
  render() {
    return <div>
              <h4>Trabajando con listas de objetos (Cars)</h4>
              <ul>
                {
                  cars.map(c => {
                    return <CarItem key={c.id} myId={c.id} carpProp={c} />
                  })
                }
              </ul>
           </div>
  }
}
