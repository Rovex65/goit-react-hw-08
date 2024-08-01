import ContactForm from "../../components/contactForm/ContactForm";
import SearchBox from "../../components/searchBox/SearchBox";
import ContactList from "../../components/contactList/ContactList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectError, selectLoading } from "../../redux/contacts/selectors";

function ContactsPage() {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {loading || error ? (
          <b>{error ? error : "Request in progress..."}</b>
        ) : (
          <ContactList />
        )}
      </div>
    </>
  );
}

export default ContactsPage;
