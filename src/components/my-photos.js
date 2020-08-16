import React, { Component } from 'react'

import Photo from './photo.js'
import Title from './title.js'

import forest from '../photos/forest-test.jpg'

export default class MyPhotos extends Component {
  render() {
    return (
    <div>

           <Title
           title="Galleria di immagini"
           />


           <Photo
                  folder=""
                  image={forest}
                  name="Test with forestaaaaa"
           />

     </div>


    );
  }
}

