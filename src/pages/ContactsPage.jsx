import ContactForm from "../components/ContactForm/ContactForm"
import ContactList from "../components/ContactList/ContactList"
import SearchBox from "../components/SearchBox/SearchBox"

function ContactsPage() {

    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm/>
        <SearchBox />
        <ContactList/>
      </>
    )
  }
  
  export default ContactsPage