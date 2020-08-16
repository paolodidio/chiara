import React, { Component } from 'react'

import Photo from './photo.js'
import Title from './title.js'

import test from '../photos/armstrong-test.jpg'

export default class Home extends Component {
  render() {
    return (
    <div>

         <Title
         title ="Chiara Franchina"
         subtitle="Fotografa e videomaker"
         />

         <Photo
         folder=""
         image={test}
         name="Test with forest"
         />



     </div>
    )
  }
}

