import React, { Component } from 'react';
import Jokes from './componentes/Jokes';

class AppJokes extends Component {
  render() {    
    return (
    <div id="root">
      <Jokes category={this.props.params.category}/>
    </div>
    );
  }
}

export default AppJokes;
