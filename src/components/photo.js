import React, { Component } from 'react'

export default class Photo extends Component {


  render() {
    return(
            <img src={this.props.folder + this.props.image} alt={this.props.name} />
        );
   }
}