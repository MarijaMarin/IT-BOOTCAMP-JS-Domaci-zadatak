let cena = 300;
let R = 40;

function cenaCm(R, cena) {
	let P = (R / 2) ** 2 * Math.PI;
	return cena / P;
}
console.log(cenaCm(40, 300));
