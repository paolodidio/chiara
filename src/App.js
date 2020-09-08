import React, { Component } from 'react';
import './App.css';


import Footer from './components/footer.js'
import Contact from './components/contact.js'
import Credits from './components/credits.js'
import NavBar from './components/navbar.js'

import forest from './photos/forest2.png'

class App extends Component {
  render() {

  const bodyStyle={
        height: "100%",
        minHeight:"700px",
        backgroundImage: "url(" + forest + ")",
        backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        backgroundColor: "blue",
      };


    return (
      <div>
            <div style={bodyStyle}>
            <NavBar/>
            </div>
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