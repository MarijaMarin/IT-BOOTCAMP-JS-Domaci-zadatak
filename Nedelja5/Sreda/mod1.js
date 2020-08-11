//dugmici funkcija

import { pokemons } from './index.js';

import { pokemonAttack } from './mod.js';

const div1 = document.querySelector('.wrapper');

import { dugmePrikaz } from './mod2.js';

dugmePrikaz.addEventListener('click', function() {
	let i = 0;
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
import { dugmeJaki } from './mod2.js';
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
