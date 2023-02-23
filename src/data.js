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
//funcion de la A -Z 
export const orderSpellAZ = (spells) => {
  const nuevoOrden = spells.sort(function (a,b){

    return a.name.localeCompare(b.name);
  });

  console.log(nuevoOrden);

  return nuevoOrden;
}

export const orderSpellZA = (spells) => {
  const nuevoOrden1 = spells.sort(function (a,b){

    return b.name.localeCompare(a.name);
  });

  console.log(nuevoOrden1);

  return nuevoOrden1;
}





// }

// export const studentsByHouse = () => {

// }

// export const allPotions = ()  => {

// }

// export const filterPotionsByName = () => {

// }

// export const allSpells = () => {

// }