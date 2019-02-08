import './index.css'
import numeral from 'numeral';

/* eslint-disable no-console */

// console.log('Beginning the index.js');

const courseValue = numeral(1000).format('$0,0.00');
console.log(`I would pay ${courseValue} for this awesome course!`);

// console.log('Leaving the index.js');
