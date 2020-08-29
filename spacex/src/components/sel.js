import { getPastLaunch } from './axios.js';
import { Launch } from './Launch.js';

export const select = document.createElement('select');
const app1 = document.getElementById('app1');
app1.appendChild(select);

const opt = document.createElement('option');
opt.textContent = 'select option';
select.appendChild(opt);

for (let i = 2006; i < 2021; i++) {
	const opt1 = document.createElement('option');
	opt1.value = i;
	opt1.textContent = i;
	select.appendChild(opt1);
}

const divIspis = document.createElement('div');
divIspis.className = 'launch-list';

select.addEventListener('change', (e) => {
	e.preventDefault();
	divIspis.innerHTML = '';

	getPastLaunch().then((res) => {
		res.data.forEach((element) => {
			if (select.value == element.launch_year) {
				divIspis.appendChild(Launch(element));
				document.getElementById('app1').appendChild(divIspis);
			}
		});
		return divIspis;
	});
});
