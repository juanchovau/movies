import React, {Component } from 'react';
import Card from "./Card"
import {movies} from "./data"

 class List extends Component{

    render(){
        return  movies.map( element =>{
            return <Card url={element.url}  title={element.title} year={element.year} last={element.last} description={element.description} kind={element.kind} />
        })
    }
 }

export default List;