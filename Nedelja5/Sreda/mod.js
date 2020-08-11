//funkcija najjaci pokemon

import { pokemons } from './index.js';

function pokemonAttack() {
	let attack = pokemons.sort((a, b) => a.stats.attack - b.stats.attack);
	let bestAttack = attack.slice(-1)[0];
	return bestAttack;
}

export { pokemonAttack };
