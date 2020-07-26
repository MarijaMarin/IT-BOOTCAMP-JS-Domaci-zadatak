{
	let n = 5;
	let i = 1;

	while (i <= n) {
		let red = '';
		red += ' '.repeat(n - i) + '#'.repeat(i) + ' ' + '#'.repeat(i) + ' '.repeat(n - i);
		console.log(red);
		i++;
	}
}
