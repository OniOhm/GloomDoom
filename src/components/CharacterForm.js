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
	let newSetState = { ...state };
	switch (action.type) {
		case 'setHealth':
			let Character = Object.values(CharacterStats[action.class]);
			newSetState.maxHealth = Character[action.charLevel];
			newSetState.currenthealth = newSetState.maxHealth;
			return newSetState;
		case 'decrementHealth':
			if (state.currenthealth > 0) {
				newSetState.currenthealth -= 1
				return newSetState
			} else {
				return state;
			}
		case 'incrementHealth':
			if (state.currenthealth < state.maxHealth) {
				newSetState.currenthealth += 1;
				return newSetState
			} else {
				return state;
			}
		case 'incrementGold':
			newSetState.gold += 1;
			return newSetState;

		case 'decrementGold':
			if (state.gold > 0) {
				newSetState.gold -= 1;
				return newSetState;
			} else {
				return state;
			}
		case 'incrementXP':
			newSetState.xp += 1;
			return newSetState;

		case 'decrementXP':
			if (state.xp > 0) {
				newSetState.xp -= 1;
				return newSetState;
			} else {
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

	const [name, onNameChange] = useState("[Character Name]");

	const [state, dispatch] = useReducer(healthReducer, initState);
	const [charClass, onClassChange] = useState(" ");



	return (
		<div className='container'>
			<form onSubmit={(e) => { e.preventDefault() }}>

				<div className='field'>
					<label className='title is-4'>Name</label>
					<input className='input form-style is-medium' onChange={(e) => { onNameChange(e.target.value) }} ></input>
				</div>
				<div className='level'>
					<div className="field">
						<label className='title is-4'>Level</label>
						<div className="control">
							<div className='select'>
								<select onChange={(e) => { onLevelChange(e.target.value) }}>
									<option> </option>
									<option value='0'>1</option>
									<option value='1'>2</option>
									<option value='2'>3</option>
									<option value='3'>4</option>
									<option value='4'>5</option>
									<option value='5'>6</option>
									<option value='6'>7</option>
									<option value='7'>8</option>
									<option value='8'>9</option>
								</select>
							</div>
						</div>
					</div>
					<div className="field">
						<label className='title is-4'>Class</label>
						<div className="control">
							<div className='select'>
								<select onChange={(e) => { onClassChange(e.target.value); }} onBlur={() => dispatch({ type: 'setHealth', class: charClass, charLevel: level })}>
									<option> </option>
									<option value='Brute'>Brute</option>
									<option value='Spellweaver'>Spellweaver</option>
									<option value='Craigheart'>Craigheart</option>
									<option value='Mindthief'>Mindthief</option>
									<option value='Tinkerer'>Tinkerer</option>
									<option value='Scoundral'>Scoundral</option>
								</select>
							</div>
						</div>
					</div>
				</div>
			</form>
			<div className="level">

				<div className=' badge-health is-danger'>
					<div className='level'>
						<label className='title is-4 level-item'>Health</label>
					</div>
					<h1 className='title is-3'>{state.maxHealth}/{state.currenthealth}</h1>
					<button className='button is-link' onClick={() => dispatch({ type: 'decrementHealth' })}>-</button>
					<button className='button is-link' onClick={() => dispatch({ type: 'incrementHealth' })}>+</button>
				</div>
				<div className='container badge'>
					<label className='title is-4'>Gold</label>
					<h1 className='title is-3'>{state.gold}</h1>
					<button className='button is-link' onClick={() => dispatch({ type: 'decrementGold' })}>-</button>
					<button className='button is-link' onClick={() => dispatch({ type: 'incrementGold' })}>+</button>
				</div>
				<div className='container badge'>
					<label className='title is-4'>XP</label>
					<h1 className='title is-3'>{state.xp}</h1>
					<button className='button is-link' onClick={() => dispatch({ type: 'decrementXP' })}>-</button>
					<button className='button is-link' onClick={() => dispatch({ type: 'incrementXP' })}>+</button>
				</div>
			</div>
			<div>
				<div className='container is-warning'>
					<input type='checkbox' className='checkbox'></input>
				</div>
			</div>

		</div>

	)
}

export default CharacterForm;