import React, {Component} from 'react'

class ComponentDidMount extends Component {
  constructor(props) {
    console.log('constructor 3');
    super(props)
    this.state = {scroll:0}
    //debugger
  }

  componentWillMount() {
    console.log('componentWillMount 3');
    //debugger
  }

  componentDidMount() {
    console.log('ComponentDidMount 3');
    //debugger
    //this.setState({otroState: ''})
    document.addEventListener('scroll', () => {
      //console.log(window.scrollY);
      this.setState({scroll: window.scrollY})
    })
  }

  render() {
    console.log('render 3');
    //debugger
    return <div style={{ border:'1px solid #000', margin:5, padding:5 }}>
            <h4>Ciclo de montaje: ComponentDidMount</h4>
            <p>El scroll es <strong>{this.state.scroll}</strong></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt est id mollis viverra. Duis condimentum eleifend felis, id efficitur erat tempus eu. Duis tristique facilisis orci, at convallis nisl luctus et. Nam tempor libero id odio convallis porta. Morbi at odio eleifend, imperdiet mauris aliquet, rutrum nunc. Mauris eleifend erat at erat tempor congue. Morbi tincidunt convallis rutrum. Quisque sit amet consequat erat, ut efficitur elit. Ut tristique ipsum non ipsum interdum egestas. In hac habitasse platea dictumst. Aenean vel efficitur lectus. Morbi quis felis ac tortor dignissim luctus eget non nunc. Quisque ut faucibus est. Maecenas a luctus arcu.</p>
            <p>Suspendisse quis sapien sit amet mi consequat porta ut ut mi. Duis rutrum at magna a tempor. Praesent bibendum lorem nec libero rhoncus rhoncus. Fusce dapibus arcu lacinia, posuere dui vitae, dictum metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit fermentum justo, vitae posuere sem maximus non. Duis egestas lobortis sem, eget dictum nisi pulvinar a. Donec eu metus scelerisque, euismod massa non, fringilla purus.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat, elit a auctor facilisis, felis purus gravida libero, dapibus accumsan justo erat sit amet odio. Proin vitae odio tortor. Praesent at iaculis diam, ut condimentum nibh. Nam ut felis ac erat condimentum porttitor. Cras blandit nibh quis orci tempus, nec interdum elit viverra. Integer accumsan nibh ac fringilla convallis. Sed ut velit efficitur, lobortis tortor nec, egestas odio. Cras vehicula ipsum felis, nec volutpat felis pulvinar ac. Sed mattis rhoncus feugiat. Sed cursus posuere odio. Vestibulum faucibus consequat ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque vel porta lacus. Sed tristique libero et vestibulum vestibulum.</p>
            <p>Vivamus maximus, nunc sed fermentum rutrum, dolor purus convallis ligula, quis fringilla ligula eros sed lorem. Phasellus at mauris pretium, scelerisque orci at, aliquam ligula. Nam sit amet accumsan odio. Phasellus ut egestas sem, vel aliquam ipsum. Duis lobortis orci a vulputate cursus. Integer non venenatis ligula. Vestibulum non varius augue. Pellentesque eu justo eu ligula aliquet posuere. Vivamus sagittis lectus luctus erat sagittis posuere.</p>
           </div>
  }
}

export default ComponentDidMount
