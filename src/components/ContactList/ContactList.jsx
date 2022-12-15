import PropTypes from 'prop-types';
import { Button, Span, List } from './ContactList.styled';

export default function ContactList({ contacts, handleDelete }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <List key={id}>
          <Span>
            {name}: {number}
          </Span>
          <Button
            type="button"
            onClick={() => handleDelete(id)}
          >
            Delete
          </Button>
        </List>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  handleDelete: PropTypes.func.isRequired,
};