import { PropTypes } from 'prop-types';

import { FindWrapper, FindTitle, Input } from './Filter.styled';

export default function Filter({onChange, value }) {
  return (
    <FindWrapper>
      <FindTitle>Find contacts by name</FindTitle>
      <Input
        type="text"
        placeholder="Enter search name"
        value={value}
        onChange={onChange}
      />
    </FindWrapper>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};