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

  if (state.home === true)
    DOM.addClass(
      buttons.find(
        (button) => DOM.getAttribute(button, "data-name") === "home"
      ),
      "button__page--active"
    );
  const changeState = (active) => {
    Object.keys(state).forEach((key) => {
      if (key === active) state[key] = true;
      else state[key] = false;
    });

    buttons.forEach((button) => {
      const data = DOM.getAttribute(button, "data-name");
      if (data === active) DOM.addClass(button, "button__page--active");
      else DOM.removeClass(button, "button__page--active");
    });
  };

  return { buttonBox, changeState, state };
})();

export default nav;
