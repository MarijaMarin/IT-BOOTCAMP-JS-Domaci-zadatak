import axios from 'axios';

export const getUsers1 = () => {
	return axios.get('https://reqres.in/api/users?page=1');
};

export const getUsers2 = () => {
	return axios.get('https://reqres.in/api/users?page=2');
};
