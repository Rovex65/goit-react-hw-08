import { useDispatch, useSelector } from "react-redux";
import css from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { deleteContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";
import { selectError } from "../../redux/contacts/selectors";

function ContactCard({ id, name, number }) {
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success("Contact deleted successfully🎉");
      })
      .catch(() => {
        toast.error(error);
      });
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

export default ContactCard;
