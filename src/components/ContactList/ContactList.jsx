import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const getVisibleContacts = (contacts, filters) => {
  return contacts.filter(contact => contact.name.toLowerCase().includes(filters.toLowerCase()));
};

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filters = useSelector(state => state.filters.name);

  const visibleContacts = getVisibleContacts(contacts, filters);

  return (
    <ul className={css.list}>
      {visibleContacts.map(contacts => (
        <li key={contacts.id} className={css.item}>
          <Contact {...contacts} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
