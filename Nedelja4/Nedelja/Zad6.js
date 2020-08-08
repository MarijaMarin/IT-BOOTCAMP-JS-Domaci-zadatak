const div1 = document.getElementById('div1');
const naruci = document.createElement('button');
naruci.textContent = 'NARUCI';
naruci.style.backgroundColor = '#999';

const naruciOdmah = document.createElement('button');
naruciOdmah.textContent = 'NARUCI ODMAH';
naruciOdmah.style.backgroundColor = '#999';

const naruci1 = document.createElement('button');
naruci1.textContent = 'NARUCI';
naruci1.style.backgroundColor = '#999';

const naruciOdmah1 = document.createElement('button');
naruciOdmah1.textContent = 'NARUCI ODMAH';
naruciOdmah1.style.backgroundColor = '#999';

div1.appendChild(naruci);
div1.appendChild(naruci1);
div1.appendChild(naruciOdmah);
div1.appendChild(naruciOdmah1);

const broj = document.createElement('p');
div1.appendChild(broj);

count = 0;
let date = new Date();
let dateTime =
	date.getDate() +
	'/' +
	(date.getMonth() + 1) +
	'/' +
	date.getFullYear() +
	'/' +
	date.getHours() +
	':' +
	date.getMinutes();

naruci.addEventListener('click', function() {
	count += 1;
	broj.textContent = count;
});

naruci1.addEventListener('click', function() {
	count += 1;
	broj.textContent = count;
});

naruciOdmah.addEventListener('click', function() {
	if (count > 0) {
		broj.textContent = `Uspesno ste narucili ${count} artikala. ${dateTime}`;
		count = 0;
	} else {
		broj.textContent = `Neispravan unos`;
	}
});
naruciOdmah1.addEventListener('click', function() {
	if (count > 0) {
		broj.textContent = `Uspesno ste narucili ${count} artikala. ${dateTime}`;
		count = 0;
	} else {
		broj.textContent = `Neispravan unos`;
	}
});
