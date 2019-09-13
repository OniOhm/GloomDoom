import React from 'react';
import './App.css';
import '../node_modules/bulma';
import initState from './initialstate.js';
import Navbar from './components/navabar.js';
import CharacterForm from './components/CharacterForm.js';
class App extends React.Component{

	constructor(props){
		super(props);
		const appState = {...initState};
	};

      render(){
      	return(
        <div>
        <Navbar></Navbar>
          <div className='level'>
            <CharacterForm
             health={ initState.health }
             currrentGold={0}>
              </CharacterForm>
          </div>
        </div>  
        )  
        }
}

export default App;
