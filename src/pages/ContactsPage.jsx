import { useDispatch } from "react-redux";
import ContactForm from "../components/ContactForm/ContactForm"
import ContactList from "../components/ContactList/ContactList"
import SearchBox from "../components/SearchBox/SearchBox"
import { fetchContacts } from "../redux/contacts/operations";
import { useEffect } from "react";

function ContactsPage() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

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