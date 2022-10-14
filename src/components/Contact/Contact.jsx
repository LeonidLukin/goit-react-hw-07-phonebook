import PropTypes from "prop-types";
import {useDispatch} from 'react-redux';
import { deleteContact  } from '../../redux/contactsOperations';

import { FaTrash, FaUserAlt } from "react-icons/fa";
import css from "./Contact.module.css";

export default function Contact({ name, phone, contactId }) {
    const dispatch = useDispatch()

    return (
        <>
            <div className={css.wrapper}>
                <span className={css.icon}>
                    <FaUserAlt />
                </span>
                <p>{name}</p>
            </div>
            <div className={css.wrapper}>
                <p className={css.number}>{phone}</p>
                <button
                    className={css.button}
                    type="button"
                    onClick={() => dispatch(deleteContact(contactId))}
                >
                    <FaTrash />
                </button>
            </div>
        </>
    )
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
};