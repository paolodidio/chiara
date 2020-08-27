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



class App extends Component {
  render() {
    return (
      <div>


			<Router>
                          <div>
                            <nav>
                              <ul>
                                <li>
                                  <Link to="/home">Home</Link>
                                </li>
                                <li>
                                  <Link to="/gallery">Foto</Link>
                                </li>
                                <li>
                                  <Link to="/my-videos">Video</Link>
                                </li>
                              </ul>
                            </nav>

                            {/* A <Switch> looks through its children <Route>s and
                                renders the first one that matches the current URL. */}
                            <Switch>

                              <Route exact path="/">
                                <Redirect to="/home" />
                              </Route>
                              <Route exact path="/chiara">
                                    <Redirect to="/home" />
                              </Route>

                              <Route path="/gallery">
                                <Gallery/>
                              </Route>
                              <Route path="/my-videos">
                                <MyVideos/>
                              </Route>
                              <Route path="/home">
                                <Home></Home>
                              </Route>
                            </Switch>
                          </div>
            </Router>

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