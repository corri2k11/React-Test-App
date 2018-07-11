import React, {Component} from 'react'
import PropTypes from 'prop-types'

//Muy util para crear componentes de UI reutilizables, layouts o pequenas plantillas
export default class PropChildren extends Component {
  render() {
    return <div>
            <h4>Children Props</h4>
            <Article
              author="Carlos"
              title="Articulo 1"
              date={new Date().toLocaleDateString()}>
              <p>El contenido que envolvemos dentro del componente Article sera enviado al componente como this.props.children
              <strong>y mantiene las etiquetas y componentes que hayais anadido dentro </strong></p>
            </Article>
            <Article
              author="Sonia"
              title="Articulo 2"
              date={new Date().toLocaleDateString()}>
              <p>El contenido que envolvemos dentro del componente Article sera enviado al componente como this.props.children
              <strong>y mantiene las etiquetas y componentes que hayais anadido dentro </strong></p>
            </Article>
            <Article
              author="Daniel"
              title="Articulo 3"
              date={new Date().toLocaleDateString()}>
              <p>El contenido que envolvemos dentro del componente Article sera enviado al componente como this.props.children
              <strong>y mantiene las etiquetas y componentes que hayais anadido dentro </strong></p>
            </Article>
           </div>
  }
}

class Article extends Component {
  static propTypes = { author: PropTypes.string.isRequired }
  /*constructor(props) {
    super(props)
    if(typeof props.author === 'undefined') {
      console.warn('Author prop is required.');
      throw new Error('Author prop  is required. App will halt.')
    }
  }*/
  render() {
    let {title, author, date, children} = this.props;

    return <section>
              <h2>{title}</h2>
              {author && <p><em>Escrito por {author}</em></p> }
              <Box>{date}</Box>
              <article>
                {children}
              </article>
           </section>
  }
}
//Agregar propiedad a la className (asi o via una propiedad statica del mismo nombre, siempre se ponen antes del constructor)
/*Article.propTypes = {
  author: PropTypes.string
}*/
class Box extends Component {
  render() {
    return <div style={{ border: '1px solid #09f', margin: 5, padding: 5 }}>
             {this.props.children}
           </div>
  }
}
