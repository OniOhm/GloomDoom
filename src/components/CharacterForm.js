import React, { useState, useEffect, useReducer } from 'react';
import '../App.css';
import Modifier from './Modifier';
import CharacterStats from '../data/CharacterStats';


const initState = {
	maxHealth: "-",
	currenthealth: 0,
	xp: 0,
	gold: 0,
}
function healthReducer(state, action) {
	let newSetState = {...state};
	switch (action.type) {
		case 'setHealth':
			 let Character = Object.values(CharacterStats[action.class]);
			newSetState.maxHealth = Character[action.charLevel];
			return newSetState;
		case 'decrementHealth':
			if(state.currenthealth > 0){
				newSetState.currenthealth -= 1
				return newSetState
			}else{
				return state;
			}
		case 'incrementHealth':
			if(state.currenthealth < state.maxHealth){
			newSetState.currenthealth += 1;
			return newSetState
			}else{
				return state;
			}
		case 'incrementGold':
			newSetState.gold += 1;
			return newSetState;
		
		case 'decrementGold':
			if(state.gold > 0){
			newSetState.gold -= 1;
			return newSetState;
			}else{
				return state;
			}
		case 'incrementXP':
			newSetState.xp += 1;
			return newSetState;
			
		case 'decrementXP':
			if(state.xp > 0){
			newSetState.xp -= 1;
			return newSetState;
			}else{
				return state;
			}
							
		default:
			throw new Error();
	}
}




function CharacterForm(props) {
	// function that sets the character health based on the level of the character
	// form onChange binding
	const [level, onLevelChange] = useState(0);
	
	const [name, onNameChange] = useState("");

	const [state, dispatch] = useReducer(healthReducer, initState);
	const [charClass, onClassChange] = useState(" ");
	
	

	return (
		<div>
			<h1>{name}</h1>
			<form onSubmit={(e) => { e.preventDefault() }}>
				<div className='level'>
					<div className="field">
						<label className>Level</label>
						<div className="control">
							<div className='select'>
								<select onChange={(e) => { onLevelChange(e.target.value) }}>
									<option> </option>
									<option value='0'>1</option>
									<option value='1'>2</option>
								</select>
							</div>
						</div>
					</div>
					<div className="field">
						<label className>Class</label>
							<div className="control">
								<div className='select'>
									<select onChange={(e) =>{onClassChange(e.target.value);} } onBlur={()=> dispatch({type: 'setHealth', class: charClass, charLevel: level})}>
										<option> </option>
										<option value='Brute'>Brute</option>
										<option value='Spellweaver'>Spellweaver</option>
									</select>
								</div>
							</div>		
					</div>
				</div>
					<label className='label'>Name</label>
					<input className='input' onChange={(e) => { onNameChange(e.target.value) }} ></input>
					
			</form>
		<div className="level">
			<div>
			<label>health</label>
			<h1>{state.maxHealth}/{state.currenthealth}</h1>
				<button className='button is-link' onClick={() => dispatch({ type: 'decrementHealth' })}>-</button>
				<button className='button is-link' onClick={() => dispatch({ type: 'incrementHealth' })}>+</button>
			</div>
			<div>
			<label>Gold</label>
			<h1>{state.gold}</h1>
				<button className='button is-link' onClick={() => dispatch({ type: 'decrementGold' })}>-</button>
				<button className='button is-link' onClick={() => dispatch({ type: 'incrementGold' })}>+</button>
				</div>
			<div>
			<label>XP</label>
			<h1>{state.xp}</h1>
				<button className='button is-link' onClick={() => dispatch({ type: 'decrementXP' })}>-</button>
				<button className='button is-link' onClick={() => dispatch({ type: 'incrementXP' })}>+</button>
			</div>
			</div>
		</div >
	)
}

export default CharacterForm;