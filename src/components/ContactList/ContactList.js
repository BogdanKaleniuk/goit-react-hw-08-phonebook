import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contsct';
import { selectAllTasks } from 'redux/Contacts/selectors';
import css from './TaskList.module.css';

export const TaskList = () => {
  const tasks = useSelector(selectAllTasks);

  return (
    <ul className={css.list}>
      {tasks.map(({ id, text }) => (
        <li key={id}>
          <Contact id={id} text={text} />
        </li>
      ))}
    </ul>
  );
};
