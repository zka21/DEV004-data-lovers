// import { example } from './data.js';
import dataHP from './data/harrypotter/data.js';

const cards = document.getElementById("cards");
const characters = dataHP.characters.slice(0,15);
console.log(characters);


for(let i=0; i<characters.length; i++) {
    const card =  document.createElement("div");
    card.innerHTML = characters[i].name;
    card.className = 'estilo-card';
    cards.appendChild(card);
}