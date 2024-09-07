import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { deleteContact } from "../../redux/contactsOps";

function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };
  return (
    <li className={css.contact}>
      <ul>
        <li>
          <FaUser size={16} /> <p>{name}</p>
        </li>
        <li>
          <FaPhoneAlt size={16} /> <p>{number}</p>
        </li>
      </ul>
      <button
        type="button"
        onClick={() => {
          handleDeleteContact(id);
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default Contact;
