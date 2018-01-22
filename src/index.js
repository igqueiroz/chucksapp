import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import './css/main.css';
import Jokes from './componentes/Jokes';
import {Wrapper, Oooppsss404} from './componentes/Wrapper';
import Category from './componentes/Category';
import {Router,Route,browserHistory} from 'react-router';

import {createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'; // na execução do redux, permite retornar funções no dispatch
import {jokes} from './reducers/jokes';

const jokestore = createStore(jokes,applyMiddleware(thunkMiddleware));


ReactDOM.render( 
  (
    <Router history={browserHistory}>
    	<Route component={Wrapper} store={jokestore}>
			<Route path="/" component={Category} />
			<Route path="/jokes(/:category)" component={Jokes}/>
		</Route>
		<Route path="*" component={Oooppsss404} />
    </Router>
  ),
  document.querySelector('#root')
);