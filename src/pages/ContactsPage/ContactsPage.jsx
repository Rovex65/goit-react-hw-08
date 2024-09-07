import { ContactForm } from "../../components/ContactForm/ContactForm";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import { ContactList } from "../../components/ContactList/ContactList";

const ContactsPage = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {/* {loading || error ? (
        <b>{error ? error : "Request in progress..."}</b>
      ) : (
        <ContactList />
      )} */}
    </div>
  );
};

export default ContactsPage;
