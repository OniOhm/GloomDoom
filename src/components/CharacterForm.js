import React, { useState, useEffect, useReducer } from 'react';
import '../App.css';
import Modifier from './Modifier';
import CharacterStats from '../data/CharacterStats';

const initState = {
	maxHealth: 0,
	currenthealth: 0
}
function healthReducer(state, action) {
	switch (action.type) {
		case 'setHealth':
		case 'decrementHealth':
			let newDecState = { ...state }
			newDecState.currenthealth -= 1
			return newDecState
		case 'incrementHealth':
			let newIncState = { ...state }
			newIncState.currenthealth += 1
			return newIncState
		default:
			throw new Error();
	}
}



function CharacterForm(props) {
	// function that sets the character health based on the level of the character
	// form onChange binding
	const [level, onLevelChange] = useState(0);
	const [charClass, onClassChange] = useState(0);
	const [name, onNameChange] = useState("");
	const [state, dispatch] = useReducer(healthReducer, initState);


	return (
		<div>
			<h1>{name}</h1>
			<form onSubmit={(e) => { e.preventDefault() }}>
				<div className='level'>

					<label className='label'>Name</label>
					<input className='input' onChange={(e) => { onNameChange(e.target.value) }}></input>
					<label className>Level</label>
					<select className='select' onChange={(e) => { onLevelChange(e.target.value) }}>
						<option value='1'>1</option>
						<option value='2'>2</option>
					</select>
					<div className='field'></div>
					<div className='control'>
						<select className='select' onChange={(e) => { onClassChange(e.target.value) }}>
							<option value='Brute'>Brute</option>
							<option value='Spellweaver'>Spellweaver</option>
						</select>
					</div>
				</div>
				<label>health</label>
				<h1>{state.health}</h1>
				<button className='button is-link' onClick={() => dispatch({ type: 'decrementHealth' })}>-</button>
				<button className='button is-link' onClick={() => dispatch({ type: 'incrementHealth' })}>+</button>
			</form>
		</div >
	)
}

export default CharacterForm;