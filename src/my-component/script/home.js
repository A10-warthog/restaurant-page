import DOM from "./dom";

export default class Home {
  // private variable
  #title;

  #subTitle;

  #description;

  constructor({ title, subTitle, description }) {
    this.#title = title;
    this.#subTitle = subTitle;
    this.#description = description;
  }

  // create html elements for home page
  #Component = () => {
    // create root and parent element
    const home = DOM.makeElement("div", 1);
    DOM.addClass(home, "home");
    // all elements are inside this
    const homeBox = DOM.makeElement("div", 1);
    DOM.addClass(homeBox, "home__box");
    // create element for main title
    const title = DOM.makeElement("h2", 1);
    DOM.addClass(title, "home__title");
    // create element for sub heading
    const subTitle = DOM.makeElement("h3", 1);
    DOM.addClass(subTitle, "home__sub_Title");
    // create element for description
    const description = DOM.makeElement("p", 1);
    DOM.addClass(description, "home__description");

    return { home, homeBox, title, subTitle, description };
  };

  // add data to elements
  #AddData = () => {
    const home = this.#Component();
    DOM.addText(home.title, this.title);
    DOM.addText(home.subTitle, this.subTitle);
    DOM.addText(home.description, this.description);
    return home;
  };

  // private method to create dom structure
  #structureElm = () => {
    const myHome = this.#AddData();
    const keys = Object.keys(myHome);
    DOM.putChild(myHome.home, myHome.homeBox);
    // append child to myHome.homeBox
    for (let i = 0; i < keys.length; i += 1) {
      if (keys[i] !== "home" && keys[i] !== "homeBox")
        DOM.putChild(myHome.homeBox, myHome[keys[i]]);
    }
    return myHome.home;
  };

  // return structured dom element
  get homeComponent() {
    return this.#structureElm();
  }

  // set new description
  set descr(data) {
    this.#description = data;
  }

  // set new title
  set title(data) {
    this.#title = data;
  }

  // set new sub title
  set subTitle(data) {
    this.#subTitle = data;
  }
}
