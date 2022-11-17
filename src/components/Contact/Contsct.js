import { useDispatch } from 'react-redux';
import { deleteTask } from 'redux/Contacts/operations';
import css from './Contact.module.css';
import Button from '@mui/material/Button';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTask(id));

  return (
    <div className={css.wrapper}>
      <p className={css.text}>{name}</p>
      <p className={css.number}>{number}</p>
      <button type="button" className={css.button} onClick={handleDelete}>
        Delete
      </button>

      <Button
        type="button"
        variant="contained"
        color="success"
        onClick={handleDelete}
      >
        Delete
      </Button>
    </div>
  );
};
