import DOM from './dom';

export default class Home {
  // private variable
  #title;

  #subTitle;
	
  #description;
	
  constructor(obj) {
    this.#title = obj.title;
    this.#subTitle = obj.subTitle;
    this.#description = obj.description;
  }

  // create html elements for home page
  #MyComponent() {
    // create root and parent element
    const div = DOM.makeElement('div', 2);
    DOM.addClass(div[0],'home');
    DOM.addClass(div[1],'home__box');
    // create element for main title
    const title = DOM.makeElement('h2', 1);
    DOM.addClass(title, 'home__title');
    // crate element for sub heading
    const subTitle = DOM.makeElement('h3', 1);
    DOM.addClass(subTitle,'home__sub_Title');
    // create element for description
    const description = DOM.makeElement('p', 1);
    DOM.addClass(description,'home__description');

    return { div, title, subTitle, description };
  };

  // add data to elements
  #AddData = () =>  {
    const home = this.#MyComponent();
    DOM.addText(home.title, this.title);
    DOM.addText(home.subTitle, this.subTitle);
    DOM.addText(home.description, this.description);
    return home;
  }

  // private method to create dom structure
  #structureElm = () => {
    const myHome = this.#AddData();
    const keys = Object.keys(myHome);
    DOM.putChild(myHome.home, myHome.homeBox);
    // append child to myHome.homeBox
    for (let i = 0; i < keys.length; i += 1) {
      if (keys[i]  !== 'home' && keys[i] !== 'homeBox') 
        DOM.putChild(myHome.homeBox, myHome[keys[i]]);
    } 
    return myHome.home;
  }

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