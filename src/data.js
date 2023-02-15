// estas funciones son de ejemplo
import dataHP from './data/harrypotter/data.js'



export const allCharacters = () => {
  return dataHP.characters.slice(0,15)
}

export const filterCharactersByHouses = (house) => {
  /**
   * Objetivo: Filtrar los personajes que pertenezcan a cierta casa(g, h, s, r)
   * 1. ir uno a uno por todos los personajes
   * 2. preguntar  si su casa es la que buscamos
   * 3. retorna en todos los personajes encontrados
   * 
   * Caso raro: si nos manda all debemos retornar todos los personajes
   */
  const characters = allCharacters();
  let characterFiltered = [];

  if(house === 'all') {
    return allCharacters();
  }

  characters.forEach((character) => {
    if(character.house === house) {
      characterFiltered.push(character)
    }
  });

  return characterFiltered;
}

// export const filterCharactersByName = (texto) => {

// }

// export const studentsByHouse = () => {

// }

// export const allPotions = ()  => {

// }

// export const filterPotionsByName = () => {

// }

// export const allSpells = () => {

// }