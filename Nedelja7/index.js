import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card.js';
import Forma from './App.js';

const App = () => {

  return (
    <>
    <Forma string = {'Klik'}/>
    <Card string = {'SpaceX'}
    url = 'https://im-media.voltron.voanews.com/Drupal/01live-166/styles/sourced/s3/2019-04/B4378357-9066-4F7A-8EFD-706EC464A684.jpg?itok=30cfdSJh'
    />
    </>
  )
}

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);


