import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { TaskList } from 'components/ContactList/ContactList';
import { ContactEditor } from 'components/ContactEditor/ContactEditor';
import { fetchContacts } from 'redux/dfghgf/operations';
import {
  selectIsLoading,
  selectError,
  selectContacts,
} from 'redux/dfghgf/selectors';
import ContactList from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter.jsx';
import { CircularProgress } from '@chakra-ui/react';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactEditor />

      {contacts.length > 0 && (
        <>
          <Filter />
        </>
      )}
      <div>
        {isLoading && (
          <CircularProgress isIndeterminate color="green.300" size="30px" />
        )}
      </div>
      <ContactList />
      {error}
      {contacts.length > 1 && <div>У вас {contacts.length} контактів </div>}
    </>
  );
}
