// Dom abstraction to make code readable a bit more.

const putChild = (parent, ...child) => {
  if (child.length === 1) parent.appendChild(child[0]);
  else child.forEach(elm => { parent.appendChild(elm); });
}

const addClass = (elm, className) => (elm.classList.add(className)); 

const removeClass = (elm, className) => (elm.classList.remove(className));

const removeElm = (elm) => (elm.remove());

const addListener = (elm, event, func) => (elm.addEventListener(event, func));

const removeListener = (elm, event, func) => (elm.removeEventListener(event, func));

const getAttribute = (elm, attr) => elm.getAttribute(attr);

const setAttribute = (elm, attr, val) => (elm.setAttribute(attr, val));

const addText = (elm, text) => { elm.textContent = text };

//  create elements 
const makeElement = (elm, val) => {
  const arr = [];
  if (val === 1) return document.createElement(elm);
  for (let i = 0; i < val; i++) arr.push(document.createElement(elm));
  return arr;
}

const DOM = (() => ({
  addClass,
  addText,
  removeClass,
  putChild,
  removeElm,
  getAttribute,
  setAttribute,
  addListener,
  removeListener,
  makeElement,
}))();

// export DOM object
export default DOM;