import { allCharacters, allSpells, filterCharactersByHouses } from "./data.js";

const containerCards = document.getElementById("container-cards");
const selectForHouses = document.getElementById("selectForHouses");
const selectForSpells = document.getElementById("selectForSpells");
const containerCardsSpells = document.getElementById("container-cards-Spells");
const containerBooks = document.getElementById("container-books");
const characters = allCharacters();
const spells = allSpells();


spells.forEach((spell) => {
  factoryCardForSpells(spell);
})
selectForSpells.addEventListener("change", (event) => {
  deleteCardsForSpells()
  const sortSpells = ordenarAzZa(event.target.value, allSpells());

  sortSpells.forEach((character) => {
    factoryCard(character);
  });
});

function deleteCardsForSpells() {
  let child = containerCardsSpells.lastElementChild;

  while(child) {
    containerCardsSpells.removeChild(child);
    child = containerCardsSpells.lastElementChild;
  }
}
//--------------------------------


characters.forEach((character) => {
  factoryCard(character);
});

selectForHouses.addEventListener("change", (event) => {

  deleteCards()
  const charactersFiltered = filterCharactersByHouses(event.target.value, allCharacters());

  charactersFiltered.forEach((character) => {
    factoryCard(character);
  });
});

function deleteCards() {
  let child = containerCards.lastElementChild;

  while(child) {
    containerCards.removeChild(child);
    child = containerCards.lastElementChild;
  }
}

function factoryCard(c) {
  const card = document.createElement("div");
  const cardInner = document.createElement("div");
  const cardFront = document.createElement("div");
  const cardBack = document.createElement("div");

  const name = document.createElement("h2");
  const nameBack = document.createElement("h3");
  const photo = document.createElement("img");
  const birth = document.createElement("p");
  const gender = document.createElement("p");
  const house = document.createElement("p");

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

  cardFront.appendChild(photo);
  cardFront.appendChild(name);

  cardBack.appendChild(nameBack);
  cardBack.appendChild(birth);
  cardBack.appendChild(gender);
  cardBack.appendChild(house);

  card.className = "card";
  cardInner.className = "card-inner";
  cardFront.className = "card-front";
  cardBack.className = "card-back";
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

  // cardSpell.appendChild(cardFrontSpell);
  cardSpell.appendChild(nameSpell);
  cardSpell.appendChild(spellType);
  cardSpell.appendChild(spellDescription);

  cardSpell.className = "cardSpell";
}
