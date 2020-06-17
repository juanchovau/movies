import React, {Component } from 'react';

 class Card extends Component{

    render(){
        const {url, title, year, last, description, kind} = this.props
    return <div>
        <img src={url} alt="portada"/>
        <p>{title}</p>
        <span>({year})</span>
        <p> Duración: {last}</p>
        <p> Género: {kind}</p>
        <p> Descripción: {description}</p>
        </div>
    }
 }

export default Card;