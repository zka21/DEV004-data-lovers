import { allCharacters, allSpells, filterCharactersByHouses } from "./data.js";

const charactersDiv = document.getElementById("characters");
const spellsDiv = document.getElementById("spells");
const booksDiv = document.getElementById("books");

const containerCardsCharacters = document.getElementById("container-cards-characters");
const containerCardsSpells = document.getElementById("container-cards-spells");
const containerCardsBooks = document.getElementById("container-cards-books");

const selectForHouses = document.getElementById("selectForHouses");

const botonCharacters = document.getElementById("botonCharacters");
const botonSpells = document.getElementById("botonSpells");
const botonBooks = document.getElementById("botonBooks");

const characters = allCharacters();
const spells = allSpells();

characters.forEach((character) => {
  factoryCardForCharacters(character);
});

spells.forEach((spell) => {
  factoryCardForSpells(spell);
})


botonCharacters.addEventListener('click', () => { manejarContainers('c') });
botonSpells.addEventListener('click', () => { manejarContainers('s') });
botonBooks.addEventListener('click', () => { manejarContainers('b') });

selectForHouses.addEventListener("change", (event) => {
  deleteCards()
  const charactersFiltered = filterCharactersByHouses(event.target.value, allCharacters());

  charactersFiltered.forEach((character) => {
    factoryCardForCharacters(character);
  });
});

function deleteCards() {
  let child = containerCardsCharacters.lastElementChild;

  while(child) {
    containerCardsCharacters.removeChild(child);
    child = containerCardsCharacters.lastElementChild;
  }
}

function factoryCardForCharacters(c) {
  const card = document.createElement('div');
  const cardInner = document.createElement('div');
  const cardFront = document.createElement('div');
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

  containerCardsCharacters.appendChild(card);

  card.appendChild(cardInner);
  cardInner.appendChild(cardFront);
  cardInner.appendChild(cardBack);

  cardFront.appendChild(photo);
  cardFront.appendChild(name);

  cardBack.appendChild(nameBack);
  cardBack.appendChild(birth);
  cardBack.appendChild(gender);
  cardBack.appendChild(house);

  card.className = "card";
  cardInner.className = "card-inner";
  cardFront.className = "card-front"
  cardBack.className = "card-back"
}

function factoryCardForSpells(s) {
  const cardSpell = document.createElement('div');
  // const cardFrontSpell = document.createElement('div');

  const nameSpell = document.createElement('h2');
  const spellType = document.createElement('h5');
  const spellDescription = document.createElement('h5');

  nameSpell.innerHTML  = s.name;
  spellType.innerHTML = s.spell_type;
  spellDescription.innerHTML = s.description;

  containerCardsSpells.appendChild(cardSpell);

  cardSpell.appendChild(nameSpell);
  cardSpell.appendChild(spellType);
  cardSpell.appendChild(spellDescription);

  cardSpell.className = "cardSpell";
}

function manejarContainers(container) {
  console.log(container)
  if(container === 'c') {
    charactersDiv.className = 'mostrar-dad-div'
    spellsDiv.className = "ocultar-dad-div"
    booksDiv.className = "ocultar-dad-div"
  }

  if(container === 's') {
    charactersDiv.className = 'ocultar-dad-div'
    spellsDiv.className = "mostrar-dad-div"
    booksDiv.className = "ocultar-dad-div"

  }

  if(container === 'b') {
    charactersDiv.className = 'ocultar-dad-div'
    spellsDiv.className = "ocultar-dad-div"
    booksDiv.className = "mostrar-dad-div"
  }
}