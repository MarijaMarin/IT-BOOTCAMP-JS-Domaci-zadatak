import { getPastLaunch } from './axios.js';
import { Launch } from './Launch.js';

export const pastLaunch1 = () => {
	const divItem = document.createElement('div');
	divItem.className = 'launch-list';

	getPastLaunch().then((res) => {
		res.data.forEach((element) => {
			divItem.appendChild(Launch(element));
		});
	});
	return divItem;
};
