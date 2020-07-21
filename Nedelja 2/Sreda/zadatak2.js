let cena = 890;
let stanje = 1340;
if (stanje < cena) {
	console.log(`Nemate dovoljno novca. Trenutno stanje je ${stanje}`);
} else if (stanje >= cena) {
	console.log(`Uspesno ste kupili proizvod. Trenutno stanje je ${stanje - cena}`);
}
