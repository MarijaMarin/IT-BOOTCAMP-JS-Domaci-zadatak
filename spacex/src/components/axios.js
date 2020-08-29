import axios from 'axios';

export const getPastLaunch = () => {
	return axios.get('https://api.spacexdata.com/v3/launches/past');
};

export const getComInfo = () => {
	return axios.get('https://api.spacexdata.com/v3/info');
};
