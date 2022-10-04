import { PropTypes } from 'prop-types';

import { MainTitle } from './Message.styled';

export default function Title({ title }) {
  return (
    <>
      <MainTitle>{title}</MainTitle>
    </>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};