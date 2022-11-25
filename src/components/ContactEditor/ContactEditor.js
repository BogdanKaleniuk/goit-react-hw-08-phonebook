import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
// import css from './ContactEditor.module.css';
import { Formik } from 'formik';
import { selectContacts } from 'redux/contacts/selectors';
import { FormBook, Input, Label, Btn, Error } from './ContactEditor.styled';
import * as yup from 'yup';
// import { useState } from 'react';

let schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Please, enter name'),
  number: yup
    .string()
    .min(6)
    .max(16)
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Please, enter correct number'),
});

export const ContactEditor = () => {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');
  // const onChangeName = e => setName(e.currentTarget.value);
  // const onChangeNumber = e => setNumber(e.currentTarget.value);
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const handleSubmit = values => {
    const findDuplicateName = (contact, newName) => {
      return contacts.find(({ name }) => name.toLowerCase() === newName);
    };

    const { name } = values;
    const nameToRegistr = name.toLowerCase();
    if (findDuplicateName(contacts.items, nameToRegistr)) {
      alert(`${name} is already in your contacts`);
      return;
    }

    dispatch(addContact(values));
    // resetForm();
    // alert(`${name} has been added to your contacts`);
  };

  // const resetForm = () => {
  //   setName('');
  //   setNumber('');
  // };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
      // initialValues={initialValues}
      // validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormBook autoComplete="off">
        <Label>
          Name
          <Input
            // onChange={onChangeName}
            type="text"
            placeholder="Enter name"
            name="name"
            title="Name may contain only letters"
          />
          <Error name="name" component="div" />
        </Label>
        <Label>
          Number
          <Input
            // onChange={onChangeNumber}
            type="tel"
            placeholder="+380"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <Error name="number" component="div" />
        </Label>

        <Btn type="submit">Add contact</Btn>
      </FormBook>
    </Formik>
  );
};

// return (
//   <form className={css.form} onSubmit={handleSubmit}>
//     <input name="name" className={css.input} />
//     <input name="number" className={css.input} />
//     <button type="submit" className={css.button}>
//       Add contact
//     </button>
//   </form>
// );
