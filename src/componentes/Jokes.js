import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import JokesApi from '../logicas/JokesApi';
import JokeItem from '../componentes/JokeItem';
import Header from '../componentes/Header';
import {Link} from 'react-router';
import Progress from '../componentes/Progress';

export default class Jokes extends Component {

    constructor(props){
      super(props); 
      this.state = {
        category: this.props.params.category,
        jokes: [],
        progress: true
      };
    }
    
    joke() {
      this.setState({progress: true});
      this.props.routes[0].store.dispatch(JokesApi.lista(`https://api.chucknorris.io/jokes/random?category=${this.state.category}`));
    }

    componentWillMount() {
        this.props.routes[0].store.subscribe(() => {
           this.setState({jokes: this.props.routes[0].store.getState(), progress: false});
        })
      
      this.props.routes[0].store.dispatch(JokesApi.lista(`https://api.chucknorris.io/jokes/random?category=${this.state.category}`));
    } 


  
    render(){
        return (
          <div>
            <ReactCSSTransitionGroup
              transitionName="jokes"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}>
              {this.state.progress && <Progress />}
            </ReactCSSTransitionGroup>
              <Header />
              <div className="wrapper-category">
                <h4>Category: {this.state.category}</h4>

                <div className="back"><Link to='/'> back</Link></div>  
              </div>
                <JokeItem joke={this.state.jokes} />
              <button onClick={this.joke.bind(this)} className="reload"></button>
              
            </div>
        );
    }
}