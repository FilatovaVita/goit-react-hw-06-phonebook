import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import {
  PhonebookContainer,
  HeaderTitel,
  SecondTitel,
  DefoltMassege,
} from './App.styled';
import { useSelector } from 'react-redux';
import { getContact } from '../../redux/selectors';

export const App = () => {
  const contacts = useSelector(getContact);

  return (
    <PhonebookContainer>
      <HeaderTitel>Phonebook</HeaderTitel>
      <ContactForm />
      {contacts.length ? (
        <div>
          <SecondTitel>Contacts</SecondTitel>
          <Filter />
        </div>
      ) : (
        <DefoltMassege>
          You dont have contacts! Please, field this Contact Form!
        </DefoltMassege>
      )}
      <ContactList />
    </PhonebookContainer>
  );
};
