function lifeSupply(numPerMonth, age) {
	let PerYear = numPerMonth * 12;
	let age1 = 100 - age;
	return PerYear * age1;
}

lifeSupply(10, 26);
console.log(lifeSupply(10, 26));
