import DOM from "./dom";
import Home from "./home";
import Menu from "./menu";
import Contact from "./contact";
import nav from "./button";
import * as data from "./data";
import "../styles/style.css";

const home = new Home(data.homeData);
const menu = new Menu(data.menuData);
const contact = new Contact(data.contactData);

const content = DOM.makeElement("div", 1);

DOM.setAttribute(content, "id", "content");
DOM.putChild(content, nav.buttonBox, home.div);
DOM.putChild(document.body, content);


const onButtonClick = (event) => {
  const active = DOM.getAttribute(event.target, "data-name");
  if (nav.state[active] === false) {
    // remove any element if present
    if (content.childNodes.length > 0) DOM.removeElm(content.lastElementChild);
    // append home to content
    if (active === "home") DOM.putChild(content, home.div);
    // append menu to content
    if (active === "menu") DOM.putChild(content, menu.div);
    // append contact to content
    if (active === "contact") DOM.putChild(content, contact.div);
    // make key with true property not clickable
    Object.keys(nav.state).forEach((key) => {
      if (key === active) nav.state[key] = true;
      else nav.state[key] = false;
    });
  }
};

DOM.addListener(nav.buttonBox, "click", onButtonClick);
