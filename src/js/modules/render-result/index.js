import './style.css';

const renderResult = (node, content) => {
  node.innerHTML = `<h2 class={style.main}>Result: <span class='special'>${content}<span></h2>`;
};

export default renderResult;