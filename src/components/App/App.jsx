import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts} from '../../redux/phoneBook/phoneBook-operations';
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import LoaderComponent from "../Loader/Loader";


import "./App.css";

function App() {
  const pending = useSelector(state => state.phoneBook.isLoading);
  const { error } = useSelector(state => state.phoneBook);
  
useEffect(() => {
    dispatch(fetchContacts());
    // eslint-disable-next-line
}, []);
  
  const dispatch = useDispatch();

     return (
      <div className="App">
        <h1>PhoneBook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <div className="Contacts">
          <Filter />
          <ContactList/>
         </div>
         {pending && <LoaderComponent />}
         {error && alert(error)}     
         
      </div>
    );
  }
export default App;