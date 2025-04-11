import { useDispatch } from "react-redux";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.contact}>
      <div className={css.wrapper}>
        <p className={css.name}>
          <FaUser />
          {contact.name}
        </p>
        <p className={css.number}>
          <FaPhoneAlt />
          {contact.number}
        </p>
      </div>
      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
