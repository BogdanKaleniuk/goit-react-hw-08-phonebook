import { PropTypes } from 'prop-types';
import { FindWrapper, FindTitle, Input } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setStatusFilter } from '../../redux/filterSlice';

export default function Filter() {
  const dispatch = useDispatch();

  const onFilterChange = event => {
    dispatch(setStatusFilter(event.currentTarget.value));
  };
  return (
    <FindWrapper>
      <FindTitle>Find contacts</FindTitle>
      <Input
        type="text"
        placeholder="Enter search name"
        onChange={onFilterChange}
      />
    </FindWrapper>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
