import { useState } from 'react';
import { useSelector } from 'react-redux';

import { BsFillPersonPlusFill } from 'react-icons/bs';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter/Filter';
import Message from './Message';
import Modal from './Modal'
import css from './App.module.css';

export default function App() {
  const [showModal, setShowModal] = useState(false)
  const contacts = useSelector(state => state.root.contacts)

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Phone<span className={css.title__color}>book</span>
      </h1>
      <button className={css.button} type="button" onClick={toggleModal}>
        <span className={css.button__text}>Add new contact</span>{' '}
        <BsFillPersonPlusFill size={20} />
      </button>
      {showModal && (
        <Modal onClose={toggleModal} title="add contact">
          <ContactForm onClose={toggleModal}/>
        </Modal>
      )}

      <h2 className={css.subtitle}>Contacts</h2>
      <Filter />
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <Message text="So sad, you have no any contacts yet." />
      )}
    </div>
  );
}
