import styles from './style.css';

const renderResult = (node, content) => {
  node.innerHTML = `<h2 class=${styles.main}>Result: <span class=${styles.special}>${content}<span></h2>`;
};

export default renderResult;
