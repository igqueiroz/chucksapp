import React, { Component } from 'react';
import CategoryItem from './CategoryItem';
import Header from '../componentes/Header';
import Progress from '../componentes/Progress';
import JokesApi from '../logicas/JokesApi';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

export default class Category extends Component {

    constructor(props){
      super(props); 
      this.state = {
        categories:[],
        progress: true
      };  
    }
    componentDidMount(){
        this.props.routes[0].store.subscribe(() => {
            if (this.refs.refcategory) {
                this.setState({categories:this.props.routes[0].store.getState(), progress: false}, () =>
                document.querySelectorAll('#wrapper-box li a').forEach (item => {
                    setTimeout(() => { item.style.opacity = "1"}, 100);
                })
            );
            }
        })
        this.props.routes[0].store.dispatch(JokesApi.listaCategorias(`https://api.chucknorris.io/jokes/categories`));
    }

    render(){
        return (
            <div ref="refcategory">  
                <ReactCSSTransitionGroup
                  transitionName="jokes"
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={300}>
                {this.state.progress && <Progress />}
                </ReactCSSTransitionGroup>
                <Header />
                <h4>Choose the Chuck Norris Category's Jokes:</h4>
                <ul>
                {
                    this.state.categories.map(categories => <CategoryItem key={categories} categories={categories} />)
                }
                </ul>
            </div>
        );
    }
}
