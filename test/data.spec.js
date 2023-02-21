import { filterCharactersByHouses } from '../src/data.js';

const characterofhouse = [
  {
    "house": "Gryffindor",
  },
  {
    "house": "Slytherin",
  },
  {
    "house": "Hufflepuff",
  },
  {
    "house": "Ravenclaw",
  }
]

//const spells = [
//{
//  "descripcion":"este hechizo sirve para esto y esto"
//}
//]

describe('filterCharactersByHouses', () => {
  it('is a function', () => {
    expect(typeof filterCharactersByHouses).toBe('function');
  });

  it('deberia retornar un array vacio `[ ]`', () => {
    expect(filterCharactersByHouses(" ", characterofhouse)).toEqual([]);
  });

  it('deberia retornar un array con personajes filtrados por casa  `[Gryffindor, Gryffindor]`', () => {
    expect(filterCharactersByHouses("Gryffindor", characterofhouse)).toEqual([{ "house": "Gryffindor"}]);
  });

  it('deberia retornar un array con personajes filtrados por casa  `[Slytherin, Slytherin]`', () => {
    expect(filterCharactersByHouses("Slytherin", characterofhouse)).toEqual([{ "house": "Slytherin"}]);
  });

  it('deberia retornar un array con personajes filtrados por casa  `[Hufflepuff, Hufflepuff]`', () => {
    expect(filterCharactersByHouses("Hufflepuff", characterofhouse)).toEqual([{ "house": "Hufflepuff"}]);
  });

  it('deberia retornar un array con personajes filtrados por casa  `[Ravenclaw, Ravenclaw]`', () => {
    expect(filterCharactersByHouses("Ravenclaw", characterofhouse)).toEqual([{ "house": "Ravenclaw"}]);
  });
});

