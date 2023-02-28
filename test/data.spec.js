import { filterCharactersByHouses, ordenarAzZa, calculateCharactersByMonth} from '../src/data.js';

const nameOfSpellAz = [{
  "name": "Cantis",
},
]
const nameOfSpellZa = [{
  "name": "Teleportation Spell",
}]

describe('ordenarAzZa', () => {
  it('is a function', () => {
    expect(typeof ordenarAzZa).toBe('function');
  });
  it('deberia retornar un array con los nameSpells ordenados de la A-Z `[Accio, Age Line, Aranja Exumai]`', () => {
    expect(ordenarAzZa("A-Z", nameOfSpellAz)).toEqual([{"name": "Cantis",}])
  });
  it('deberia retornar un array con los nameSpells ordenados de la A-Z `[Accio, Age Line, Aranja Exumai]`', () => {
    expect(ordenarAzZa("Z-A", nameOfSpellZa)).toEqual([{"name": "Teleportation Spell",}])
  });

})

const characterofbirth =[{
  "birth": "9 January, 1960",
},
{
  "birth": "13 February, 1981",
},
{
  "birth": "1 March, 1980",
},
{
  "birth": "1 April, 1978",
},
{
  "birth": "2 May, 1951",
},
{
  "birth": "5 June, 1980",
},
{
  "birth": "31 July, 1980",
},
{
  "birth": "11 August, 1981",
},
{
  "birth": "19 September, 1979",
},
{
  "birth": "30 October, 1977",
},
{
  "birth": "3 November, 1959",
},
{
  "birth": "31 December, 1926",
},
]
describe('calculateCharactersByMonth', () => {
  it('is a function', () => {
    expect(typeof calculateCharactersByMonth).toBe('function');
  });
  it('deberia retornar un array del mes de `[January]`', () => {
    expect(calculateCharactersByMonth("January", characterofbirth)).toEqual([{"birth": "9 January, 1960"}]);
  });
  it('deberia retornar un array del mes de `[February, February]`', () => {
    expect(calculateCharactersByMonth("February", characterofbirth)).toEqual([{"birth": "13 February, 1981"}]);
  });
  it('deberia retornar un array del mes de `[March, March]`', () => {
    expect(calculateCharactersByMonth("March", characterofbirth)).toEqual([{"birth": "1 March, 1980"}]);
  });
  it('deberia retornar un array del mes de `[April, April]`', () => {
    expect(calculateCharactersByMonth("April", characterofbirth)).toEqual([{"birth": "1 April, 1978"}]);
  });
  it('deberia retornar un array del mes de `[May, May]`', () => {
    expect(calculateCharactersByMonth("May", characterofbirth)).toEqual([{"birth": "2 May, 1951"}]);
  });
  it('deberia retornar un array del mes de `[June, June]`', () => {
    expect(calculateCharactersByMonth("June", characterofbirth)).toEqual([{"birth": "5 June, 1980"}]);
  });
  it('deberia retornar un array  `[July, July]`', () => {
    expect(calculateCharactersByMonth("July", characterofbirth)).toEqual([{"birth": "31 July, 1980"}]);
  });
  it('deberia retornar un array  `[August, August]`', () => {
    expect(calculateCharactersByMonth("August", characterofbirth)).toEqual([{"birth": "11 August, 1981"}]);
  });
  it('deberia retornar un array  `[September, September]`', () => {
    expect(calculateCharactersByMonth("September", characterofbirth)).toEqual([{"birth": "19 September, 1979"}]);
  });
  it('deberia retornar un array  `[October, October]`', () => {
    expect(calculateCharactersByMonth("October", characterofbirth)).toEqual([{"birth": "30 October, 1977"}]);
  });
  it('deberia retornar un array  `[November, November]`', () => {
    expect(calculateCharactersByMonth("November", characterofbirth)).toEqual([{"birth": "3 November, 1959"}]);
  });
  it('deberia retornar un array  `[December, December]`', () => {
    expect(calculateCharactersByMonth("December", characterofbirth)).toEqual([{"birth": "31 December, 1926"}]);
  });
});

const characterofhouse = [{
  "house": "Gryffindor",
},
{
  "house": "Slytherin",
},
{
  "house": "Hufflepuff"
},
{
  "house": "Ravenclaw"
}
]

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

