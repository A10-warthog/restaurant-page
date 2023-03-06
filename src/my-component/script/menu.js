import DOM from './dom';

export default class Menu {
  #title;

  #subtitle;

  #list;

  constructor({title, subTitle, list}) {
    this.#title = title;
    this.#subtitle = subTitle;
    this.#list = list;
  }

  #makeElement = (() => {
    // main element which all other elements are appended to.
    const menu = DOM.makeElement('div', 1);
    // heading of the main element
    const title = DOM.makeElement('h2', 1);
    // title of courses
    const subTitle = DOM.makeElement('h3', 3);
    // container for courses
    const menuBox = DOM.makeElement('div', 1);
    // for putting course name and item box.
    const subMenuBox = DOM.makeElement('div', 3);
    // for putting items
    const courseBox = DOM.makeElement('div', 3);
    
    const appetizer = DOM.makeElement('div', 5).map(elm => {
      const item = DOM.makeElement('div', 2);
      DOM.putChild(elm, ...item);
      return elm;
    });

    const mainCourse = DOM.makeElement('div', 5).map(elm => {
      const item = DOM.makeElement('div', 2);
      DOM.putChild(elm, ...item);
      return elm;
    });

    const drink = DOM.makeElement('div', 5).map(elm => {
      const item = DOM.makeElement('div', 2);
      DOM.putChild(elm, ...item);
      return elm;
    });

    const menuDiv = (() => {
      [appetizer, mainCourse, drink].forEach((elm, ind) => {
        DOM.putChild(courseBox[ind], elm);
      });

      subMenuBox.forEach((elm, id) => {
        const arr = [subTitle[id], courseBox[id]];
        DOM.putChild(elm, ...arr);
      });

      menuBox.forEach((elm, id) => {
        DOM.putChild(elm, subMenuBox[id]);
      });

      const component = DOM.putChild(menu, title, menuBox);

      return component;
    })();

    return {title, subTitle, appetizer, mainCourse, drink, menu}
  })();

  #addText = (() => {
    DOM.addText(this.#makeElement.title, this.#title);
    
    this.#makeElement.subTitle.forEach((elm, id) => {
      DOM.addText(elm, this.#subtitle[id]);
    });

    this.#makeElement.appetizer.forEach((elm, id) => {
      DOM.addText(elm.firstElementChild, 
                  this.#list.appetizer[id][0]);
      DOM.addText(elm.firstElementChild, 
                  this.#list.appetizer[id][1]);
    });

    this.#makeElement.mainCourse.forEach((elm, id) => {
      DOM.addText(elm.firstElementChild, 
                  this.#list.mainCourse[id][0]);
      DOM.addText(elm.firstElementChild, 
                  this.#list.mainCourse[id][1]);
    });

    this.#makeElement.drink.forEach((elm, id) => {
      DOM.addText(elm.firstElementChild, 
                  this.#list.drink[id][0]);
      DOM.addText(elm.firstElementChild, 
                  this.#list.drink[id][1]);
    });
  })();
  
  get menu() {
    return this.#makeElement.mainDiv;
  }
}