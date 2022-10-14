import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOperations';
import Contact from '../Contact';
import css from './ContactList.module.css';
import { FaTrash } from "react-icons/fa";

const getFilteredContacts = (contacts, filter) => {
    const normalizedFilter = filter?.toLowerCase();

    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
    );
}
export default function ContactList() {
    const { items, error } = useSelector(state => state.root.contacts);
    const filter = useSelector(state => state.root.filter);
    const dispatch = useDispatch();
    
    

    const filteredContacts = getFilteredContacts(items,filter)
    
    return (
        <ul>
            {error && <h1>Something's wrong... Try again</h1>}
            {filteredContacts.map(({ id, name, phone }) => {
                return (
                    <li className={css.item} key={id}>
                        <Contact
                            name={name}
                            phone={phone}
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