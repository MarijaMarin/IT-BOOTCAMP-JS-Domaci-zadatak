import { Procenti, wrightPer } from './procenti.js';

const select = document.getElementById('select');
const dugme = document.getElementById('dugme');
const des = document.getElementById('dodaj');
const value = document.getElementById('dodaj1');

const div1 = document.getElementById('li1');
const div2 = document.getElementById('li2');

const forma = document.getElementById('form');

forma.addEventListener('submit', (e) => {
	e.preventDefault();
	if (des.value.trim() !== '' && value.value > 0) {
		if (select.value == 'in') {
			addIncome(des, value);
		} else if (select.value == 'ex') {
			addExpense(des, value);
		}
	} else {
		alert('Pogresan unos');
	}
});

let income = [];
let expense = [];
let newIncome = [];
let newExpense = [];
let vrednost = 0;
let incomeTotal = 0;
let expenseTotal = 0;
let percent = 0;

const balans = document.getElementById('vrednost');
const expenseTot = document.getElementById('value2');
const incomeTot = document.getElementById('value1');

function addIncome(des, value) {
	incomeTotal += Number(value.value);
	incomeTot.textContent = incomeTotal.toFixed(2);
	vrednost += Number(value.value);
	balans.textContent = vrednost.toFixed(2);
	let newIncome = { des: des.value, value: value.value };
	income.push(newIncome);
	incIspis(income);
}

function addExpense(des, value) {
	expenseTotal += Number(value.value);
	expenseTot.textContent = expenseTotal.toFixed(2);
	vrednost -= Number(value.value);
	balans.textContent = vrednost.toFixed(2);
	let newExpense = { des: des.value, value: value.value };
	expense.push(newExpense);
	expIspis(expense);
	calPer(incomeTotal, expenseTotal, expense);
}

function incIspis(newIncome) {
	const div1 = document.getElementById('li1');
	newIncome.forEach((el) => {
		const item = document.createElement('li');
		const span1 = document.createElement('span');
		span1.className = 'span1';
		const span2 = document.createElement('span');
		span2.className = 'span2';
		span1.textContent = el.des;
		span2.textContent = el.value;
		item.append(span1, span2);
		item.id = 'item1';

		const dugmeDel = document.createElement('button');
		dugmeDel.textContent = 'X';
		dugmeDel.className = 'dugmeDel';
		item.appendChild(dugmeDel);

		dugmeDel.addEventListener('click', (e) => {
			e.target.parentElement.remove();
		});
		div1.appendChild(item);

		des.value = '';
		value.value = '';
	});
}
function expIspis(newExpense) {
	const div2 = document.getElementById('li2');
	newExpense.forEach((el1) => {
		const item1 = document.createElement('li');
		const span3 = document.createElement('span');
		const span4 = document.createElement('span');
		span3.textContent = el1.des;
		span3.className = 'span3';
		span4.className = 'span4';
		span4.textContent = el1.value;
		//const span5 = document.createElement('span');
		//span5.className = 'span5';
		//span5.textContent = itemPercent + '%';
		item1.append(span3, span4);
		item1.id = 'item2';
		const divPer = document.getElementById('percent');
		divPer.textContent = el1.percente;
		const dugmeDel1 = document.createElement('button');
		dugmeDel1.textContent = 'X';
		dugmeDel1.className = 'dugmeDel1';
		item1.appendChild(dugmeDel1);

		dugmeDel1.addEventListener('click', (e) => {
			e.target.parentElement.remove();
		});
		div2.appendChild(item1);

		des.value = '';
		value.value = '';
	});
}

//PROCENTI

function perPerExp(incomeTotal, expense) {
	expense.forEach((expense) => {
		let itemPercent = expense.value / incomeTotal * 100;
		if (itemPercent == Infinity) {
			expense.percent == 0;
		} else {
			expense.percent == itemPercent;
		}
		expIspis(itemPercent);
	});
}
function calPer(incomeTotal, expenseTotal, expense) {
	Procenti(incomeTotal, expenseTotal);
	perPerExp(incomeTotal, expense);
}

const divPer = document.getElementById('percent');
