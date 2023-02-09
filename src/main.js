// import { example } from './data.js';
import dataHP from './data/harrypotter/data.js';

const containerCards = document.getElementById("container-cards");
const characters = dataHP.characters.slice(0,15);

characters.forEach((character) => {
    factoryCard(character);
});

function factoryCard(c) {
    const card = document.createElement('div');
    const cardInner = document.createElement('div')
    const cardFront = document.createElement('div')
    const cardBack = document.createElement('div');

    const name = document.createElement('h2');
    const nameBack = document.createElement('h3')
    const photo = document.createElement('img');
    const birth = document.createElement('p');
    const gender = document.createElement('p');
    const house = document.createElement('p');

    name.innerHTML = c.name;
    nameBack.innerHTML = c.name;
    photo.src = c.img;
    birth.innerHTML = c.birth;
    gender.innerHTML = c.gender;
    house.innerHTML = c.house;

    containerCards.appendChild(card);

    card.appendChild(cardInner);
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);

    cardFront.appendChild(name);
    cardFront.appendChild(photo);

    cardBack.appendChild(nameBack);
    cardBack.appendChild(birth);
    cardBack.appendChild(gender);
    cardBack.appendChild(house);

    card.className = "card";
    cardInner.className = "card-inner";
    cardFront.className = "card-front"
    cardBack.className = "card-back"
}
