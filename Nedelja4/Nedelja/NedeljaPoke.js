let pokemon1 = {
	name: 'Butterfree',
	category: 'Butterfly',
	abilities: [ 'compound eyes', 'flying' ],
	stats: {
		attack: 3,
		defence: 3,
		speed: 5
	},
	img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png'
};
let pokemon2 = {
	name: 'Seaking',
	category: 'Goldfish',
	abilities: [ 'Swift Swim', 'Water Veil' ],
	stats: {
		attack: 6,
		defence: 4,
		speed: 4
	},
	img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/119.png'
};
let pokemon3 = {
	name: 'Rattata',
	category: 'Mouse',
	abilities: [ 'Run Away', 'Guts' ],
	stats: {
		attack: 4,
		defence: 3,
		speed: 5
	},
	img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png'
};
let pokemon4 = {
	name: 'Flaaffy',
	category: 'Wool',
	abilities: [ 'Static' ],
	stats: {
		attack: 4,
		defence: 4,
		speed: 3
	},
	img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/180.png'
};
let pokemon5 = {
	name: 'Pikachu',
	category: 'Mouse',
	abilities: [ 'Static' ],
	stats: {
		attack: 4,
		defence: 3,
		speed: 6
	},
	img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png'
};

//Zadatak 4

let pokemons = [ pokemon1, pokemon2, pokemon3, pokemon4, pokemon5 ];

function pokemonAttack() {
	let attack = pokemons.sort((a, b) => a.stats.attack - b.stats.attack);
	let bestAttack = attack.slice(-1)[0];
	return bestAttack;
}
console.log(pokemonAttack());

//<div class="wrapper">
//<button id="prikaz">PRIKAZI POKEMONE</button>
//<button id="pobednik">PRIKAZI NAJJACEG POKEMONA</button>
//</div>
//<div>
//<p>Opis pokemona</p>
//<img src="slika odgovarajućeg pokemona">
//</div>

//Zadatak 5

const div1 = document.querySelector('.wrapper');
const dugmePrikaz = document.getElementById('prikaz');
dugmePrikaz.textContent = 'Prikazi Pokemone';
dugmePrikaz.style.backgroundColor = '#fff';
dugmePrikaz.style.border = 'solid black 3px';
dugmePrikaz.style.fontSize = '15px';

dugmePrikaz.addEventListener('click', function() {
	for (i = 0; i <= pokemons.length; i++) {
		const div = document.createElement('div');
		const p = document.createElement('p');
		p.textContent = `Name: ${pokemons[i].name},  
                         Category: ${pokemons[i].category}, 
                         Abilities: ${pokemons[i].abilities}
                         `;
		div.appendChild(p);
		const img = document.createElement('img');
		img.src = pokemons[i].img;
		img.style.width = '70px';
		div.appendChild(img);
		div1.appendChild(div);
	}
});

const dugmeJaki = document.getElementById('pobednik');
dugmeJaki.textContent = 'Prikazi pobednika';
dugmeJaki.style.backgroundColor = '#077';
dugmeJaki.style.border = 'solid black 3px';
dugmeJaki.style.fontSize = '15px';
dugmeJaki.addEventListener('click', function() {
	pokemonAttack();
	const div = document.createElement('div');
	const p = document.createElement('p');
	p.textContent = `Name: ${pokemons[pokemons.length - 1].name},  
                     Category: ${pokemons[pokemons.length - 1].category}, 
                     Abilities: ${pokemons[pokemons.length - 1].abilities}
                     `;
	div.appendChild(p);
	const img = document.createElement('img');
	img.src = pokemons[pokemons.length - 1].img;
	img.style.width = '120px';
	div.appendChild(img);
	div1.appendChild(div);
});
