import PropTypes from 'prop-types';

import {
  Div,
  ContactTitle,
  ContactWrapper,
} from './ContactList.styled';

import Item from '../Contact/Contact';

export default function ContactList({ title, contacts, onDeleteContact }) {
  return (
    <Div>
      <ContactTitle>{title}</ContactTitle>
      <ContactWrapper>
        {contacts.map(({ id, name, number }) => (
          <Item
            key={id}
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ContactWrapper>
    </Div>
  );
}

ContactList.propTypes = {
  title: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};