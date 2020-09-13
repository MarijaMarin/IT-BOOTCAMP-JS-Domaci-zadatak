import React from 'react';
import axios from 'axios';

export const getComInfo = () => {
	return axios.get('https://api.spacexdata.com/v3/info');
};

export const getAllLaunches = () => {
	return axios.get('https://api.spacexdata.com/v3/launches');
};

export const getLaunchesByYear = (year) => {
	return axios.get(`https://api.spacexdata.com/v3/launches?launches_year =${year}`);
};

export const getPastLaunch = () => {
	return axios.get('https://api.spacexdata.com/v3/launches/past');
};
