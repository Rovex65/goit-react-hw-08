import ContactForm from "../../components/ContactForm/ContactsForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

const ContactsPage = () => {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .then(() => {
        toast.success("Contacts loaded successfully🎉");
      })
      .catch(() => {
        toast.error(error);
      });
  }, [dispatch, error]);

  return (
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
  );
};

export default ContactsPage;
