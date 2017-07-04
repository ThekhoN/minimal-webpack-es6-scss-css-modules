import add from './modules/add';
import renderResult from './modules/render-result';
import '../styles-global/global.css';

const arr = [1, 2, 3, 4];
const result = arr.reduce(add, 0);
console.log('result: ', result);

const mountNode = document.getElementById('root');
renderResult(mountNode, result);
