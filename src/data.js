import dataHP from './data/harrypotter/data.js'



export const allCharacters = () => {
  return dataHP.characters.slice(0,20)
}

export const allSpells  = () => {
  return dataHP.spells.slice(0,30)
}


export const filterCharactersByHouses = (house, arraycharacters) => {
  /**
   * Objetivo: Filtrar los personajes que pertenezcan a cierta casa(g, h, s, r)
   * 1. ir uno a uno por todos los personajes
   * 2. preguntar  si su casa es la que buscamos
   * 3. retorna en todos los personajes encontrados
   * 
   * Caso raro: si nos manda all debemos retornar todos los personajes
   */
  const characters = arraycharacters;
  const characterFiltered = [];

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

export const ordenarAzZa = ( spell, arrayspells) => {
  const spells =  arrayspells.sort((a,b) => {
    const nameA = a.name;
    const nameB = b.name;
    if (nameA < nameB) {
      return -1;
    } else {
      return 1;
    }
  })

  if (spell === "A-Z") {
      return spells;
    } else if (spell === "Z-A"){
      return spells.reverse()
    } else {
      return allSpells();
    }


  // if (spell === "A-Z") {
  //   return spells;
  // } else {
  //   return spells.reverse();
  // }
 
}
