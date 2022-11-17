import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/Contacts/operations';
import css from './ContactEditor.module.css';

export const ContactEditor = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    if (name !== '' && number !== '') {
      dispatch(addTask({ name, number }));
      form.reset();
      return;
    }
    alert('Task cannot be empty. Enter some text!');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input name="name" className={css.input} />
      <input name="number" className={css.input} />
      <button type="submit" className={css.button}>
        Add task
      </button>
    </form>
  );
};
