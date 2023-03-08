import DOM from "./dom";

export default class Menu {
  #title;

  #subtitle;

  #list;

  constructor({ title, subTitle, list }) {
    this.#title = title;
    this.#subtitle = subTitle;
    this.#list = list;
  }

  #makeElement = (() => {
    // main element which all other elements are appended to.
    const menu = DOM.makeElement("div", 1);
    DOM.addClass(menu, "menu");
    // heading of the main element
    const title = DOM.makeElement("h2", 1);
    DOM.addClass(title, "menu__title");
    // container for courses
    const menuBox = DOM.makeElement("div", 1);
    DOM.addClass(menuBox, "menu__menu_box");
    // title of courses
    const subTitle = DOM.makeElement("h3", 3).map((elm, id) => {
      DOM.addClass(elm, `menu__sub_title`);
      DOM.setAttribute(elm, "data-id", `${id}`);
      return elm;
    });
    // for putting course name and item box
    const subMenuBox = DOM.makeElement("div", 3).map((elm) => {
      DOM.addClass(elm, "menu__sub_menu_box");
      return elm;
    });
    // for putting items
    const courseBox = DOM.makeElement("div", 3).map((elm) => {
      DOM.addClass(elm, "menu__course_box");
      return elm;
    });
    // use map to add two div to each element of appetizer
    const appetizer = DOM.makeElement("div", 5).map((elm) => {
      const item = DOM.makeElement("div", 2);
      DOM.putChild(elm, ...item);
      return elm;
    });

    const mainCourse = DOM.makeElement("div", 5).map((elm) => {
      const item = DOM.makeElement("div", 2);
      DOM.putChild(elm, ...item);
      return elm;
    });

    const drink = DOM.makeElement("div", 5).map((elm) => {
      const item = DOM.makeElement("div", 2);
      DOM.putChild(elm, ...item);
      return elm;
    });
    // anonymous function to append every element to menu div
    (() => {
      [appetizer, mainCourse, drink].forEach((elm, ind) => {
        // set class of every child of elm
        elm.forEach((div) => {
          DOM.addClass(div, "menu__dish");
          const [...dish] = div.children;
          dish.forEach((fullDish, id) => {
            if (id === 0) DOM.addClass(fullDish, "menu__dish_name");
            if (id === 1) DOM.addClass(fullDish, "menu__dish_price");
          });
        });
        // append elm to courseBox
        DOM.putChild(courseBox[ind], ...elm);
      });

      subMenuBox.forEach((elm, id) => {
        const arr = [subTitle[id], courseBox[id]];
        DOM.putChild(elm, ...arr);
      });

      DOM.putChild(menuBox, ...subMenuBox);

      const component = DOM.putChild(menu, title, menuBox);

      return component;
    })();

    return { title, subTitle, appetizer, mainCourse, drink, menu };
  })();

  // put text inside div
  #addText = () => {
    DOM.addText(this.#makeElement.title, this.#title);

    this.#makeElement.subTitle.forEach((elm, id) => {
      DOM.addText(elm, this.#subtitle[id]);
    });

    this.#makeElement.appetizer.forEach((elm, id) => {
      DOM.addText(elm.firstElementChild, this.#list.appetizer[id][0]);
      DOM.addText(elm.lastElementChild, this.#list.appetizer[id][1]);
    });

    this.#makeElement.mainCourse.forEach((elm, id) => {
      DOM.addText(elm.firstElementChild, this.#list.mainCourse[id][0]);
      DOM.addText(elm.lastElementChild, this.#list.mainCourse[id][1]);
    });

    this.#makeElement.drink.forEach((elm, id) => {
      DOM.addText(elm.firstElementChild, this.#list.drink[id][0]);
      DOM.addText(elm.lastElementChild, this.#list.drink[id][1]);
    });
  };

  // return root element
  get div() {
    this.#addText();
    return this.#makeElement.menu;
  }
}
