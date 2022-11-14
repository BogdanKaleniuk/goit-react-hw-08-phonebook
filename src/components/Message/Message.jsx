import { PropTypes } from 'prop-types';

import { MainTitle } from './Message.styled';

export default function Title() {
  return (
    <>
      <MainTitle>Phonebook</MainTitle>
    </>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
