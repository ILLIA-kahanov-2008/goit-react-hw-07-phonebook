import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useToggle } from '../../hooks/useToggle';
import { fetchContacts } from '../../redux/phoneBook/phoneBook-operations';
import { resetError } from '../../redux/phoneBook/phoneBook-actions';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import LoaderComponent from '../Loader/Loader';
import Modal from '../Modal/Modal';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import {
  getContacts,
  getLoading,
  getError,
} from '../../redux/phoneBook/selectors';

import './App.css';

function App() {
  const [showModal, setShowModal] = useToggle(false);

  const loading = useSelector(getLoading);
  const error = useSelector(getError);

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    error !== null && setShowModal();
  }, [error]);

  useEffect(() => {
    !showModal && dispatch(resetError());
  }, [showModal]);

  return (
    <div className="App">
      <h1>PhoneBook</h1>
      <ContactForm />
      <h2>Contacts: {contacts.length}</h2>
      <div className="Contacts">
        <Filter />
        <ContactList />
      </div>
      {loading && (
        <Modal closeModal={setShowModal}>
          <LoaderComponent />
        </Modal>
      )}
      {showModal && (
        <Modal closeModal={setShowModal}>
          <ErrorMessage errorText={error} onClose={setShowModal} />
        </Modal>
      )}
    </div>
  );
}
export default App;
