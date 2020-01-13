import React, { useState } from 'react';
import '../App.css';
import Minus_2 from '../assets/Minus_2.png';
import Minus_1 from '../assets/Minus_1.png';
import Neutral from '../assets/Neutral.png';
import Plus_1 from '../assets/Plus_1.png';
import Plus_2 from '../assets/Plus_2.png';
import Attack_mod_front from '../assets/Attack_mod_front.jpg';
import Miss from '../assets/Miss.png';
import Crit from '../assets/Crit.png';


// The  modifier deck can only consist of 20 cards at default
// As the method runs the type of card needs to be recorded accordingly to simulate cards being pulled
// change the range of the one off cards.
function Modifier() {
    // if perks allow for additions to the modifier deck then players an check a checkbox that simply adds a card to the deck
    const [token, onTokenChange] = useState(" ");
    const [modDeck, onCardPull] = useState(20);
    const [positives, onPositivePull] = useState(5);
    const [neutrals, onNeutralPull] = useState(6);
    const [negitives, onNegitivePull] = useState(5);
    const [miss, onMissPull] = useState(1);
    const [crit, onCritPull] = useState(1);
    const [neg2, onNeg2Pull] = useState(1);
    const [plus2, onPlus2Pull] = useState(1);

    function ResetDeck() {
        onCardPull(20);
        onPositivePull(5);
        onNeutralPull(6);
        onNegitivePull(5);
        onMissPull(1);
        onCritPull(1);
        onNeg2Pull(1);
        onPlus2Pull(1);
    }

    function randomize() {
        let element = Math.floor(Math.random() * 40);
        return element;
    }
    // Convert to a switch statement
    function pullDeck() {
        console.log("cards remaining:" + modDeck)
        let numrand = randomize();

        if (modDeck === 0) {
            ResetDeck();
            onTokenChange('');

            console.log("deck shuffled");
        } else if (modDeck === 1) {
            if (positives === 1) {
                onPositivePull(positives - 1);
                console.log("+1");
                onTokenChange(Plus_1);
                onCardPull(modDeck - 1);
            } else if (neutrals === 1) {
                onNeutralPull(neutrals - 1);
                console.log("0");
                onTokenChange(Neutral);
                onCardPull(modDeck - 1);
            } else if (negitives === 1) {
                onNegitivePull(negitives - 1);
                console.log("-1");
                onTokenChange(Minus_1);
                onCardPull(modDeck - 1);
            } else if (plus2 === 1) {
                onPlus2Pull(plus2 - 1);
                console.log("+2");
                onTokenChange(Plus_2);
                onCardPull(modDeck - 1);
            } else if (neg2 === 1) {
                onNeg2Pull(neg2 - 1);
                console.log("-2");
                onTokenChange(Minus_2);
                onCardPull(modDeck - 1);
            } else if (crit === 1) {
                onCritPull(crit - 1);
                console.log("2x");
                onTokenChange(Crit);
                onCardPull(modDeck - 1);
            } else if (miss === 1) {
                onMissPull(miss - 1);
                console.log("miss");
                onTokenChange(Miss);
                onCardPull(modDeck - 1);
            }
        } else if (numrand <= 5 && positives > 0) {
            onPositivePull(positives - 1);
            console.log("+1");
            onTokenChange(Plus_1);
            onCardPull(modDeck - 1);
        } else if (numrand >= 6 && numrand <= 10 && neutrals > 0) {
            onNeutralPull(neutrals - 1);
            console.log("0");
            onTokenChange(Neutral);
            onCardPull(modDeck - 1);
        } else if (numrand >= 11 && numrand <= 16 && negitives > 0) {
            onNegitivePull(negitives - 1);
            console.log("-1");
            onTokenChange(Minus_1);
            onCardPull(modDeck - 1);
        } else if (numrand >= 17 && numrand <= 25 && plus2 > 0) {
            onPlus2Pull(plus2 - 1);
            console.log("+2");
            onTokenChange(Plus_2);
            onCardPull(modDeck - 1);
        } else if (numrand >= 26 && numrand <= 30 && neg2 > 0) {
            onNeg2Pull(neg2 - 1);
            console.log("-2");
            onTokenChange(Minus_2);
            onCardPull(modDeck - 1);
        } else if (numrand >= 31 && numrand >= 35 && crit > 0) {
            onCritPull(crit - 1);
            console.log("2x");
            onTokenChange(Crit);
            onCardPull(modDeck - 1);
        } else if (numrand >= 36 && numrand <= 40 && miss > 0) {
            onMissPull(miss - 1);
            console.log("miss");
            onTokenChange(Miss);
            onCardPull(modDeck - 1);
        } else {
            pullDeck.call(this);
        }

    }

    return (

        <div className='mod_holder'>
            <button className='btn' onClick={() => { pullDeck() }} > draw </button>
            <img src={Attack_mod_front} alt=' ' className='img_alter'> </img>
            <img src={token} alt='' className='img_alter'> </img>
        </div>
    )
}
export default Modifier;