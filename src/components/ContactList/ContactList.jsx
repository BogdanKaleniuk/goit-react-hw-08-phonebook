import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Div, ContactTitle, ContactWrapper } from './ContactList.styled';
import { getContacts, getFilter } from 'redux/selectors';
import ContactItem from '../Contact/Contact';

export default function ContactList({ title }) {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.items.filter(({ name }) =>
    name?.toLowerCase()?.includes(filter.value.toLowerCase())
  );

  return (
    <Div>
      {contacts.items.length > 0 && (
        <>
          <ContactTitle>{title}</ContactTitle>
          <ContactWrapper>
            {filteredContacts.map(({ id, name, phone }) => (
              <ContactItem key={id} id={id} name={name} phone={phone} />
            ))}
          </ContactWrapper>
        </>
      )}
    </Div>
  );
}

ContactList.propTypes = {
  title: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
  // onDeleteContact: PropTypes.func.isRequired,
};
