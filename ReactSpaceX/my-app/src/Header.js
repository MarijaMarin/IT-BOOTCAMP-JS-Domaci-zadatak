import React, { useState, useEffect } from 'react';
import { getComInfo } from './services';

const Header = () => {
	const [ comName, setComName ] = useState('');
	const [ founder, setFounder ] = useState('');
	const [ adress, setAdress ] = useState('');

	useEffect(() => {
		getComInfo().then((res) => {
			setComName(res.data.name);
		});
	});
	useEffect(() => {
		getComInfo().then((res) => {
			setFounder(res.data.founder);
		});
	});
	useEffect(() => {
		getComInfo().then((res) => {
			setAdress(res.data.headquarters.address);
		});
	});

	return (
		<div style={{ backgroundColor: '#567895' }}>
			<h1 style={{ color: 'white', fontSize: '50px' }}>{`Ime kompanije je ${comName}`}</h1>;
			<hr />
			<h1 style={{ color: 'white', fontSize: '25px' }}>{`SpaseX je osnovao ${founder}`}</h1>;
			<hr />
			<h1 style={{ color: 'white', fontSize: '25px' }}>{`Adresa kompanije je: ${adress}`}</h1>;
		</div>
	);
};

export default Header;
