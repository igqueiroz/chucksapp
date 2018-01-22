import React, { Component } from 'react';
import {Link} from 'react-router';

export default class CategoryItem extends Component {
    render(){
        return (
                <li><Link to={`/jokes/${this.props.categories}`}>{this.props.categories}</Link></li>
        );
    }
}



