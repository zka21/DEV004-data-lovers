// import { example } from './data.js';
import dataHP from './data/harrypotter/data.js';

const cards = document.getElementById("cards");
const characters = dataHP.characters;


for(let i=0; i<characters.length; i++) {
    const card =  document.createElement("div");
    card.innerHTML = characters[i].name;
    card.className = 'estilo-card';
    cards.appendChild(card);
}