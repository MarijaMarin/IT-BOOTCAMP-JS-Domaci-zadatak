//covek...ime, prezime, godina rodjenja

class covek {
	constructor(ime, prezime, godinaRodj) {
		this.ime = ime;
		this.prezime = prezime;
		this.godinaRodj = godinaRodj;
	}
}

// student ime, prezime, god rodj, godina studija, prosek

class student extends covek {
	constructor(ime, prezime, godinaRodj, godinaStudija, prosek) {
		super(ime, prezime, godinaRodj);
		this.godinaStudija = godinaStudija;
		this.prosek = prosek;
	}
}

class studentOsn extends student {
	constructor(ime, prezime, godinaRodj, godinaStudija, prosek, smerOsn) {
		super(ime, prezime, godinaRodj, godinaStudija, prosek);
		this.smerOsn = smerOsn;
	}
}

class studentMA extends studentOsn {
	constructor(ime, prezime, godinaRodj, godinaStudija, prosek, smerOsn, smerMA) {
		super(ime, prezime, godinaRodj, godinaStudija, prosek, smerOsn);
		this.smerMA = smerMA;
	}
}

//zaposleni, godina zaposlenja i plata

class zaposleni extends covek {
	constructor(ime, prezime, godinaRodj, godinaZap, plata) {
		super(ime, prezime, godinaRodj);
		this.godinaZap = godinaZap;
		this.plata = plata;
	}
}
class nastavnik extends zaposleni {
	constructor(ime, prezime, godinaRodj, godinaZap, plata, omiljeniPred, predmeti) {
		super(ime, prezime, godinaRodj, godinaZap, plata);
		this.omiljeniPred = omiljeniPred;
		this.predmeti = predmeti;
	}
}

class profesor extends nastavnik {
	constructor(ime, prezime, godinaRodj, godinaZap, plata, omiljeniPred, predmeti, titula) {
		super(ime, prezime, godinaRodj, godinaZap, plata, omiljeniPred, predmeti);
		this.titula = titula;
	}
}
class asistent extends nastavnik {
	constructor(ime, prezime, godinaRodj, godinaZap, plata, omiljeniPred, predmeti, smerPhd) {
		super(ime, prezime, godinaRodj, godinaZap, plata, omiljeniPred, predmeti);
		this.smerPhd = smerPhd;
	}
}

class sluzbenik extends zaposleni {
	constructor(ime, prezime, godinaRodj, godinaZap, plata, odsek) {
		super(ime, prezime, godinaRodj, godinaZap, plata);
		this.odsek = odsek;
	}
}
let p1 = new covek('mara', 'maric', 1987);
console.log(p1);

let p2 = new student('mara', 'maric', 1987, 4, 9.06);
console.log(p2);

let p3 = new studentOsn('mara', 'maric', 1987, 4, 9.06, 'antropologija');
console.log(p3);

let p4 = new studentMA('mara', 'maric', 1987, 4, 9.06, 'antropologija', 'arheologija');
console.log(p4);

let p5 = new zaposleni('mica', 'micic', 1990, 2018, 100);
console.log(p5);

let p6 = new nastavnik(
	'mica',
	'micic',
	1990,
	2018,
	100,
	'biblijska arheologija',
	'kult i ikonografija, biblijska arheologija'
);
console.log(p6);

let p7 = new profesor(
	'mica',
	'micic',
	1990,
	2018,
	100,
	'biblijska arheologija',
	'kult i ikonografija, biblijska arheologija',
	'redovni profesor'
);

console.log(p7);

let p8 = new asistent(
	'mica',
	'micic',
	1990,
	2018,
	100,
	'biblijska arheologija',
	'kult i ikonografija, biblijska arheologija',
	'arheologija'
);
console.log(p8);

let p9 = new sluzbenik('mica', 'micic', 1990, 2018, 100, 'studentski poslovi');
console.log(p9);
