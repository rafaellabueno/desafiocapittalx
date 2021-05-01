require('./bootstrap');

import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/Index';

if(document.getElementById('index')){
	ReactDOM.render(<Index />, document.getElementById('index'));
}
