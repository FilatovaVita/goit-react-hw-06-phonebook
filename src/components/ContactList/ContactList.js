import { useSelector } from "react-redux";
import {getContact, getFilter} from '../../redux/selectors';
import { ContactItem } from '../ContactItem/ContactItem';
import { ContactListStyled } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContact);
  const filter = useSelector(getFilter);
  const filterContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  return (
    <ContactListStyled>
      {filterContacts.map(({ name, number, id }) => (
        <ContactItem
          key={id}
          name={name}
          id={id}
          number={number}
        />
      ))}
    </ContactListStyled>
  );
};

