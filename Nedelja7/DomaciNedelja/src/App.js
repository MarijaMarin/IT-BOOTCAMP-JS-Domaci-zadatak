import React from 'react';

import react, { useState } from 'react';

const Forma = () => {
	const [ input, setInput ] = useState('');

	return (
    <>
    <input type="text" onChange={(e) => setInput(e.target.value)} />
    <button>{input}</button>
    <div>{input}</div>
    </>
	)
};

export default Forma;
