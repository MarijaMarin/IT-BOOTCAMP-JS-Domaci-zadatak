import React, { useEffect, useState } from 'react';
import { getLaunchesByYear } from './services';

const Select = ({ setlaunchList }) => {
	const [ value, setValue ] = useState(0);

	const populateArray = () => {
		let years = [];

		for (let i = 2006; i <= 2021; i++) {
			years.push(i);
		}
		return years;
	};

	useEffect(
		() => {
			getLaunchesByYear(value).then((res) => {
				setlaunchList(res.data);
			});
		},
		[ value ]
	);

	return (
		<select
			value={value}
			onChange={(e) => {
				setValue(e.target.value);
			}}
		>
			<option>Godina</option>
			{populateArray().map((year) => (
				<option key={year} value={year + ''}>
					{year}{' '}
				</option>
			))}
		</select>
	);
};
export default Select;
