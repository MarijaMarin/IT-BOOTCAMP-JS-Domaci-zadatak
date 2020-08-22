//procenti kalkulacija

function Procenti(incomeTotal, expenseTotal) {
	let totPer = expenseTotal / incomeTotal * 100;
	if (totPer == 0) {
		return;
	}

	wrightPer(totPer);
}

function wrightPer(totPer) {
	divPer.textContent += totPer.toFixed(2) + '%';
}

const divPer = document.getElementById('percent');

export { Procenti, wrightPer };
