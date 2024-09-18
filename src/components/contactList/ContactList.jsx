import { useSelector } from "react-redux";
import ContactCard from "../ContactCard/ContactCard";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/filters/selectors";

function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {filteredContacts.length === 0 ? (
        <p>No Contacts</p>
      ) : (
        filteredContacts.map(({ name, number, id }) => {
          return <ContactCard name={name} number={number} key={id} id={id} />;
        })
      )}
    </ul>
  );
}

export default ContactList;
