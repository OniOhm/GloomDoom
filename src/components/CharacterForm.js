import React,{useState } from 'react';
import '../App.css'

function CharacterForm(props){
// function that sets the character health based on the level of the character
// form onChange binding
 const [level,onLevelChange] = useState(1);
 const [health, onHealthChange] = useState(0);
 const [xp, onXpChange] = useState(0);
 const [gold, onGoldChange] = useState(0);
 const [name, onNameChange] = useState(' ');
 const [charClass,onClassChange] = useState(' ');
// values that are used  in hooks count as a controlled component
const [levelHp, changeLevelHp] = useState(0);
// on change get value of selected option
// function that checks value and adjust hp depending on level
// 
// function updateHealth(){
// 	let charClass = {charClass};
// 	let level = {level};
// 	switch(charClass){
// 		case 1:
// 			switch(level){
// 				case 1:
// 					onHealthChange(9);
// 				case 2:
// 					onHealthChange(10);
// 				case 3:
// 					onHealthChange(12);
// 				case 4:
// 					onHealthChange(14);
// 				case 5:
// 					onHealthChange(15);
// 				case 6:
// 					onHealthChange(16);
// 			}
// 	}
// }
	return(	
		<div className='level-item'>
		<div className='level-item title'>
	</div>
			<form className='form ' id='character-card'>
			<div className='level is-grouped'>
			<div className='is-grouped'>
				<label className='label'>Name</label>
				<div className='control'>
					<input className='input' type='text' value={name} onChange={(e) => {
						var newName = e.target.value;
						onNameChange(newName);
					}}></input>
				</div>
				</div>
			<div className='is-grouped'>
				<label className='label'>Class</label>
				<div className='control'>
					<div className='select is-1'>
						<select value={charClass} onChange={(e) => {
						let newClass = e.target.value;
						onClassChange(newClass)
					}}>
						<option value='1'>Brute</option>
						<option value='2'>Cragheart</option>
						<option value='3'>Mindthief</option>
						<option value='4'>Scoundrel</option>
						<option value='5'>Spellweaver</option>
						<option value='6'>Tinkerer</option>
						</select>
					</div>
				</div>
				</div>
				<div className='is-grouped'>
				<label className='label'>Level</label>
				<div className='select' id="charLevel">
					<select id='level_select' value={level} onChange={(e)=> {
						var newLevel = e.target.value;
						onLevelChange(newLevel);
						
					}
				}>
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
						<option value='4'>4</option>
						<option value='5'>5</option>
						<option value='6'>6</option>
						<option value='7'>7</option>
						<option value='8'>8</option>
						<option value='9'>9</option>
					</select>
				</div>
				</div>
			</div>			
				<div className='level is-grouped'>
					<div className='is-grouped'>
						<label className='label'>Health</label>
						<div className='control'>
							<input type='number' className='input' max={health} min={0}  value={health}
							 onChange={(e) => {
						var newHealth = e.target.value;
						onHealthChange(newHealth)}}>
						</input>
						</div>
					</div>
					<div className='is-grouped'>
					<label className='label'>Gold</label>
					<input type='number' className='input' min={0} value={gold} onChange={(e) => {
						var newGold = e.target.value;
						onGoldChange(newGold)}}></input>
					</div>
				<div className='is-grouped'>
					<label className='label'>XP</label>
					<div className='control'>
							<div className='control'>
						<input type='number' className='input' value={xp} onChange={(e) => {
						var newXp = e.target.value;
						onXpChange(newXp)}}></input>
					</div>
					</div>
					</div>
			</div>
			<div className='field'>
			<label className='label'> Items</label>
					<textarea className='textarea'></textarea>
			</div>
			<label className='label'>Perks</label>
			<div className='level'>
					<div className=' level-start is-grouped'>
							<input type='checkbox' ></input>
							<input type='checkbox'></input>
							<input type='checkbox'></input>
					</div>
						<div className='level-iitem is-grouped'>
							<input type='checkbox'></input>
							<input type='checkbox'></input>
							<input type='checkbox'></input>
					</div>
					<div className='level-end is-grouped'>
							<input type='checkbox'></input>
							<input type='checkbox'></input>
							<input type='checkbox'></input>
					</div>
			</div>
			<div className='level'>
					<div className=' level-start is-grouped'>
							<input type='checkbox'></input>
							<input type='checkbox'></input>
							<input type='checkbox'></input>
					</div>
						<div className='level-iitem is-grouped'>
							<input type='checkbox'></input>
							<input type='checkbox'></input>
							<input type='checkbox'></input>
					</div>
					{/* TODO: Add back bought perks*/}
						</div>
			<div className='modal'>
				<div className='modal-background'></div>
				<div className='modal-content'></div>
				<button className='modal-close'>Close</button>
			</div>
			</form>
		</div>
		);
}

export default CharacterForm;