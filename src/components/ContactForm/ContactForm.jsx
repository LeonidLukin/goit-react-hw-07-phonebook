import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';

import { addContact } from '../../redux/contactsOperations';
import css from './ContactForm.module.css';

export default function ContactForm({ onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { items } = useSelector(state => state.root.contacts);

  const newContact = {
    name,
    phone,
  };

  const onChangeName = e => setName(e.currentTarget.value);
  const onChangeNumber = e => setPhone(e.currentTarget.value);

  const dispatch = useDispatch();

  const onSubmitForm  = e => {
    e.preventDefault();

    const findName = items.find(
      e => e.name.toLowerCase() === name.toLowerCase()
    );

    if (findName) {
      alert(`${name} is already in contacts`);
      setName('');
      setPhone('');
      return;
    }

    dispatch(addContact(newContact));

    reset();
    onClose();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
  <form onSubmit={onSubmitForm}>
    <label className={css.label}>
      <h2 className={css.title}>Name</h2>
      <input className={css.input}
        onChange={onChangeName}
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>
    <label className={css.label}>
      <h2 className={css.title}>Number</h2>
      <input className={css.input}
        onChange={onChangeNumber}
        type="tel"
        name="number"
        value={phone}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </label>
    <button className={css.button} type="submit">Add contact</button>
  </form>
  );
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func
};





// class ContactForm extends Component {
//     static propTypes = {
//         onSubmit: PropTypes.func
//     };

//     state = {
//         name: '',
//         number: '',
//     };


//     handleChange = e => {
//         const { name, value } = e.currentTarget;
//         this.setState({ [name]: value });
//     };

//     handleSubmit = e => {
//         e.preventDefault();
//         const { onSubmit } = this.props;
//         onSubmit(this.state);
//         this.reset();
//     };

//     reset = () => {
//         this.setState({ name: '', number: '' });
//     };

//     render() {
//         const { name, number } = this.state;
//         const notify = () => toast(`${name} added to your contacts`, {
//             position: "bottom-right",
//             autoClose: 2000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: 'light',
//         })
//         return (
//             <form className={css.form} onSubmit={this.handleSubmit}>
//                 <label className={css.label}>
//                     <span className={css.title}>Name</span>
//                     <input
//                         className={css.input}
//                         onChange={this.handleChange}
//                         type="text"
//                         name="name"
//                         value={name}
//                         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                         required
//                     />
//                 </label>
//                 <label className={css.label}>
//                     <span className={css.title}>Number</span>
//                     <input
//                         className={css.input}
//                         onChange={this.handleChange}
//                         type="tel"
//                         name="number"
//                         value={number}
//                         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                         required
//                     />
//                 </label>
//                 <button className={css.button} type="submit" onClick={notify}>
//                     Add contact
//                 </button>
//                 <ToastContainer />
//             </form>
//         );
//     }
// }

// export default ContactForm;