import DOM from './dom';
import Home from './home';
import Menu from './menu';
import Contact from './contact';
import nav from './button';
import '../styles/style.css';

const home = new Home();
const menu = new Menu();
const contact = new Contact();

const content = DOM.makeElement('div', 1);
DOM.setAttribute(content, 'id', 'content');

DOM.putChild(content, home.div);

const onButtonClick = (event) => {
  const active = DOM.getAttribute(event.target, 'data-name');
  if (nav.state[active] === false) {
    // remove any element if present
    if (content.childNodes.length > 0)
      DOM.removeElm(content.firstElementChild);
    // append home to content
    if (active === 'home') 
      DOM.putChild(content, home.div);
    // append menu to content
    if (active === 'menu')
      DOM.putChild(content, menu.div);
    // append contact to content
    if (active === 'contact')
      DOM.putChild(content, contact.div);
    // make key with true property not clickable
    Object.keys(nav.state).forEach(key => {
      if (key === active) nav.state[key] = true;
      else nav.state[key] = false;
    });
  }
};

DOM.addListener(nav.buttonBox, 'click', onButtonClick);
