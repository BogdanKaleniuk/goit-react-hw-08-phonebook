import { PropTypes } from 'prop-types';

import { FindWrapper, FindTitle, Input } from './Filter.styled';

export default function Filter({onChange, filter }) {
  return (
    <FindWrapper>
      <FindTitle>Find contacts by name</FindTitle>
      <Input
        type="text"
        placeholder="Enter search name"
        value={filter}
        onChange={onChange}
      />
    </FindWrapper>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};