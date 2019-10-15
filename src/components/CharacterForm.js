import React,{useState,useEffect,useReducer } from 'react';
import '../App.css';
import initState from '../initialstate';


function rootReducer(state,action){
	let newState={...state};
	switch(action.type){
		case 'GetHealth':
			newState.health= 12;
			newState.maxHealth = 12;
			return newState;
		case 'INCREMENT_HEALTH':
		if(state.health == state.maxHealth){
			return newState;
		}else{
			newState.health = newState.health +1;
			return newState;
		}
		case 'DECREMENT_HEALTH':
		if(state.health == 0){
			return newState;
		}else{
			newState.health = newState.health - 1;
			return newState;
		}
		case 'RESET_XP':
			newState.xp = 0;
			return newState;
		case 'INCREMENT_XP':
			newState.xp = newState.xp + 1;
			return newState;
		case 'DECEMENT_XP':
			newState.xp = newState.xp - 1;
			return newState.xp
		default:
			break;
			console.log('No actions sent check Reducer');
	}
}



function CharacterForm(props){
// function that sets the character health based on the level of the character
// form onChange binding



  	
	return(	
	 <h1>Is working</h1>
		)
}

export default CharacterForm;