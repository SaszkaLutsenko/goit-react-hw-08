import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import style from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <div className={style.container}>
      {contacts && contacts.length > 0 ? (
        <ul className={style.list}>
          {contacts.map(contact => (
            <li className={style.listItem} key={contact.id}>
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={style.emptyMessage}>No contacts found</p>
      )}
    </div>
  );
};

export default ContactList;