import { LaunchList } from './components/LaunchList.js';
import { getLaunchesByYear } from './service';
import { head } from './components/head.js';
import { pastLaunch1 } from './components/pastLaunch.js';
import { select } from './components/sel.js';

const header = document.getElementById('header');
header.appendChild(head());

const app = document.querySelector('#app');

const app1 = document.getElementById('app1');
app1.appendChild(select);

const app2 = document.getElementById('app2');
app2.appendChild(pastLaunch1());

// getAllLaunches().then(res => {
//     app.appendChild(LaunchList(res.data.filter(launch => launch.launch_year == 2019)))
// })

if (confirm('Да ли сте сигурни?')) {
	getLaunchesByYear(2019).then((res) => {
		app.appendChild(LaunchList(res.data));
	});
} else {
	console.log('Није потврђено');
}

// Уместо свих лансирања, приказати само она из 2019. године
