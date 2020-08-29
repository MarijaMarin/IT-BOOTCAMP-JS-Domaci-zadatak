import { getComInfo } from './axios.js';

const heading = document.createElement('div');

export const head = () => {
	getComInfo().then((res) => {
		const ime = document.createElement('p');
		ime.textContent = `Ìme kompanije: ${res.data.name}`;
		heading.appendChild(ime);
		heading.style.color = '#678900';

		const founder = document.createElement('p');
		founder.textContent = `Founder: ${res.data.founder}`;
		heading.appendChild(founder);

		const address = document.createElement('p');
		address.textContent = `Adresa: ${res.data.headquarters.address}`;
		heading.appendChild(address);
	});
	return heading;
};
