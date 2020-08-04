//Zadatak1

let pokemon1 = {
	name: 'Butterfree',
	category: 'Butterfly',
	abilities: [ 'compound eyes', 'flying' ],
	stats: {
		attack: 3,
		defence: 3,
		speed: 5
	}
};
let pokemon2 = {
	name: 'Seaking',
	category: 'Goldfish',
	abilities: [ 'Swift Swim', 'Water Veil' ],
	stats: {
		attack: 6,
		defence: 4,
		speed: 4
	}
};
let pokemon3 = {
	name: 'Rattata',
	category: 'Mouse',
	abilities: [ 'Run Away', 'Guts' ],
	stats: {
		attack: 4,
		defence: 3,
		speed: 5
	}
};
let pokemon4 = {
	name: 'Flaaffy',
	category: 'Wool',
	abilities: [ 'Static' ],
	stats: {
		attack: 4,
		defence: 4,
		speed: 3
	}
};
let pokemon5 = {
	name: 'Pikachu',
	category: 'Mouse',
	abilities: [ 'Static' ],
	stats: {
		attack: 4,
		defence: 3,
		speed: 6
	}
};
//Zadatak2
let pokemons = [ pokemon1, pokemon2, pokemon3, pokemon4, pokemon5 ];

function abilitiesPoke(pokemons) {
	return pokemons.map((el) => el.abilities).flat();
}

console.log(abilitiesPoke(pokemons));

//Zadatak3

let speed = [];

for (let i = 0; i < pokemons.length; i++) {
	speed.push(pokemons[i].stats.speed);
}

speed.sort((a, b) => a - b);

console.log(speed);
