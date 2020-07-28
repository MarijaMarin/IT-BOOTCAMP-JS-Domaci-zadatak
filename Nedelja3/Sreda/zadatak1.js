let a = 15;
let b = 20;
let c = -45;

function maxBroj(a, b, c) {
	let maximum;
	if (a > b) {
		maximum = a;
	} else if (b > a) {
		maximum = b;
	}
	if (c > maximum) {
		maximum = c;
	}
	return maximum;
}
console.log(maxBroj(a, b, c));
