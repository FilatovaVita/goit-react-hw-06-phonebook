import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { DelButton, ListItem } from './ContactItem.styled';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteContact(id));
  return (
    <ListItem>
      <span>{name}: </span>
      <span>{number}</span>
      <DelButton type="button" onClick={onDelete}>
        Delete
      </DelButton>
    </ListItem>
  );
};

ContactItem.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
};
