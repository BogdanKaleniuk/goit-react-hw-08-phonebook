import { Component } from 'react';
import { nanoid } from 'nanoid'
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Message from './Message/Message';
import FormEl from './Form/Form';

export default class App extends Component {


state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
}

    handlerSubmit = ({ name, number }) => {
    const nameToRegistr = name;
    if (this.findDuplicateName(nameToRegistr)) {
      alert('Такий контакт вже існує');
      return;
    } 
    this.addContact(nameToRegistr, number);
};

    addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

   filteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase)
    );
  };


    visibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.includes(normalizedFilter)
    );
  };
  
    onFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

    findDuplicateName = name => {
    const { contacts } = this.state;
    return contacts.find(item => item.name.toLowerCase() === name);
  };

    render() {
     const { contacts, filter } = this.state;

    const newVisibleContacts = this.visibleContacts();
  return (
 <div>
        <Message Message="Phonebook" />
        <FormEl onSubmit={this.handlerSubmit} />
        <Filter
          Message="Find contacts by name"
          value={filter}
          onChange={this.onFilterChange}
        />
        {contacts.length > 0 && (
          <ContactList
            Message="Contacts"
            contacts={newVisibleContacts}
            onDeleteContact={this.deleteContact}
          />
        )}
      </div>
  )
}

};


