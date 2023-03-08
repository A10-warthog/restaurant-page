import DOM from './dom';

export default class Contact {
  #title;  
  
  #phone;  

  #email;
  
  constructor({ title, phone, email }) {
    this.#title = title;
    this.#phone = phone;
    this.#email = email;
  }

  #makeComponent = (() =>  {
    // create root element 
    const contact = DOM.makeElement('div', 1);
    DOM.addClass(contact, 'contact');
    // element where all other element will reside
    const contactBox = DOM.makeElement('div', 1);
    DOM.addClass(contactBox, 'contact__box');
    // element for heading
    const title = DOM.makeElement('h2', 1);
    DOM.addClass(title, 'contact__title');
    // element for phone key
    const phone = DOM.makeElement('p', 1);
    DOM.addClass(phone, 'contact__phone');
    // element for phone number
    const phoneNo = DOM.makeElement('span', 1);
    DOM.addClass(phoneNo, 'contact__phone_no');
    // element for email key
    const email = DOM.makeElement('p', 1);
    DOM.addClass(email, 'contact__email');
    // element for email id
    const emailId = DOM.makeElement('span', 1);
    DOM.addClass(emailId, 'contact__email_id');

    return { contact, contactBox, title, phone, phoneNo, email, emailId };
  })();

  #addData() {
    DOM.addText( this.#makeComponent.title, this.#title);
    DOM.addText(this.#makeComponent.phoneNo, this.#phone);
    DOM.addText(this.#makeComponent.emailId, this.#email);
    DOM.addText(this.#makeComponent.phone, 'Phone Number :');
    DOM.addText(this.#makeComponent.email, 'Email :');
  }

  #combineElement() {
    this.#addData();
    const { contact, contactBox, title, phone, email, phoneNo, emailId } = this.#makeComponent;
    DOM.putChild(phone, phoneNo);
    DOM.putChild(email, emailId);
    DOM.putChild(contact, contactBox);
    DOM.putChild(contactBox, title);
    DOM.putChild(contactBox, phone);
    DOM.putChild(contactBox, email);
    return contact;
  }

  get div() {
    return this.#combineElement();
  }

}