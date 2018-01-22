import React, { Component } from 'react';

export default class JokeItem extends Component {
    render(){
        return (

            <div className="joke">
				<img src={this.props.joke.icon_url} alt="Chuck Norris"/>
				<p>{this.props.joke.value}</p>
            </div>
        );
    }
}



