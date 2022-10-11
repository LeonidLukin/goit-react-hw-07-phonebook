import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import Contact from '../Contact';
import css from './ContactList.module.css';
import { FaTrash } from "react-icons/fa";


export default function ContactList() {
    const contacts = useSelector(state => state.root.contacts);
    const filter = useSelector(state => state.root.filter);
    const dispatch = useDispatch();

    const filteredContacts = () => {
        const normalizedFilter = filter?.toLowerCase();

        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter)
        );
    };

    const contactsList = filteredContacts();

    return (
        <ul>
            {contactsList.map(({ id, name, number }) => {
                return (
                    <li className={css.item} key={id}>
                        <Contact
                            name={name}
                            number={number}
                            contactId={id}
                        >
                            <FaTrash  onClick={() => dispatch(deleteContact(id))}/>
                        </Contact>
                    </li>

                )
            })}
        </ul>
    )
}