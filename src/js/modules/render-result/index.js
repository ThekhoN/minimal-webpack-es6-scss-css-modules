import styles from './style.css';

const addAllArgs = (...args) => [...args].reduce((a, b) => a + b, 0);
console.log('result of addAllArgs: ', addAllArgs(1, 2, 3, 4, 5));

const renderResult = (node, content) => {
  node.innerHTML = `<h2 class=${styles.main}>Result: <span class=${styles.special}>${content}<span></h2>`;
};

export default renderResult;
