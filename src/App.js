import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'

import Home from './components/home'
import MyVideos from './components/my-videos.js'
import MyPhotos from './components/my-photos.js'
import Footer from './components/footer.js'
import Contact from './components/contact.js'
import Credits from './components/credits.js'
import Gallery from './components/gallery.js'
import NavBar from './components/navbar.js'


class App extends Component {
  render() {
    return (
      <div>

            <NavBar/>

            <Footer>
                           <Contact
                                   fullName="Chiara Franchina"
                                   address="Non lo so"
                                   email="non@ricordo.più"
                                   instagram="chiarafranchina"
                                   youtube="nonricordoilyoutubbbo"
                            />
                           <Credits
                               developer="PaoLo Di Dio"
                               email="pdidio@live.it"
                           />
            </Footer>

      </div>
    );
  }
}

export default App;