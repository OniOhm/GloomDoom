import React from 'react';
import {BrowserRouter as Router,Route,Link } from 'react-router-dom';
import './App.css';
import '../node_modules/bulma';
// import initState from './initialstate.js';
import CharacterForm from './components/CharacterForm.js';

class App extends React.Component{

	constructor(props){
		super(props);
	};

      render(){
      	return(
        <div>
              <Router>

    <div className='navbar is-danger'>
      <div className='navbar-start'>
        <p className='navbar-item'>G&Doom</p>
        <Link to="/Character" className='navbar-item'>Character</Link>
        <a className='navbar-item'>Store</a>
        <a className='navbar-item'>Encounter</a>
      </div>
    </div>
          <Route path="/Character" component={CharacterForm} />
    </Router>
    </div>
        )  
        }
}

export default App;
