import React, { Component } from 'react';
import './App.css';
/*import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Projects from './components/projects'
import Blog from './components/blog'
import Timeline from './components/timeline'*/
import Home from './components/home'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">

		<div id="colorlib-main">
			<Home></Home>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;