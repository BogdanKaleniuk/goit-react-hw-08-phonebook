import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TaskList } from 'components/ContactList/ContactList';
import { ContactEditor } from 'components/ContactEditor/ContactEditor';
import { fetchTasks } from 'redux/Contacts/operations';
import { selectLoading } from 'redux/Contacts/selectors';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <ContactEditor />
      <div>{isLoading && 'Request in progress...'}</div>
      <TaskList />
    </>
  );
}
