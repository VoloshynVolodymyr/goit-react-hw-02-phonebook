import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Input, Label } from './Filter.styled';

export default function Filter({ handleChange, filter }) {

  return (
    <>
      <Label>
        Find contacts by name
      </Label>
      <Input
        type="text"
        name="name"
        value={filter}
        onChange={handleChange}
      />
    </>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};