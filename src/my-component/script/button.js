import DOM from "./dom";

const nav = (() => {
  // button container
  const buttonBox = DOM.makeElement("div", 1);
  DOM.addClass(buttonBox, "button");

  // buttons to switch between pages
  const buttons = DOM.makeElement("button", 3).map((elm, id) => {
    if (id === 0) {
      DOM.setAttribute(elm, "data-name", "home");
      DOM.addText(elm, "Home");
    }
    if (id === 1) {
      DOM.setAttribute(elm, "data-name", "menu");
      DOM.addText(elm, "Menu");
    }
    if (id === 2) {
      DOM.setAttribute(elm, "data-name", "contact");
      DOM.addText(elm, "Contact");
    }
    DOM.addClass(elm, "button__page");
    return elm;
  });

  // append buttons to buttonBox
  DOM.putChild(buttonBox, ...buttons);

  const state = {
    home: true,
    menu: false,
    contact: false,
  };

  return { buttonBox, state };
})();

export default nav;
