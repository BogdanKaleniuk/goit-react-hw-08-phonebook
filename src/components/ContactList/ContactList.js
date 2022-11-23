import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contsct';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { Flex } from '@chakra-ui/react';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = () => {
    // const normFilter = ;
    return contacts.filter(contact =>
      contact.name?.toLowerCase()?.includes(filter.toLowerCase())
    );
  };
  const visibleContacts = filteredContacts();

  return (
    <ul>
      <Flex
        justifyContent="center"
        gap="10px"
        wrap="wrap"
        display="block"
        backgroundColor="#F7FAFC"
      >
        {visibleContacts.map(({ id, name, number }) => (
          <li key={id}>
            <Contact id={id} name={name} number={number} />
          </li>
        ))}
      </Flex>
    </ul>
  );
}
