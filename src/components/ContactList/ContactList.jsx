import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

import Contact from '../Contact/Contact'

import css from './ContactList.module.css'

function ContactList() {

  const filteredContacts = useSelector(selectFilteredContacts)

  return (
    <div className={css.contactsMainBlock}>
      {filteredContacts.map( contact => {
        return (
          <div className={css.contactBlock} key={contact.id}>
            <Contact name={contact.name} number={contact.number} id={contact.id} />
          </div>        
        )
      })}
    </div>
  )
}

export default ContactList