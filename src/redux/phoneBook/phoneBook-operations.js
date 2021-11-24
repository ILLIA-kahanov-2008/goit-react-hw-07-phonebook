import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from '../../services/contacts-mocAPI'

export const fetchContacts = createAsyncThunk('contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
      try {
        const contacts = await contactsAPI.fetchAllContacts();
        // console.log("response is", contacts);
        return contacts;
  } catch (error) {
        return rejectWithValue(error.message);
  }
  }
)

export const addNewContact = createAsyncThunk('contacts/addContact',
  async (addingContact, {getState, rejectWithValue}) => {  
    const { phoneBook: { contacts } } = getState();
    const { name } = addingContact;
  const isExist = contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase())
    try {
      if (isExist) throw new Error(`${name} is already in contacts`)
      const contacts = await contactsAPI.addContact(addingContact);
            //  console.log("response is", contacts);
        return contacts;
  
  } catch (error) {
    return rejectWithValue(error.message);
  }  
})

export const removeContact = createAsyncThunk('contacts/removeContact',
  async (id, { rejectWithValue }) => {
    try {
      const contacts = await contactsAPI.deleteContact(id);
            //  console.log("response is", contacts);
        return contacts;
  } catch (error) {
    return rejectWithValue(error.message);
  }  
}
)

































// ----without createAsyncThunk----
// import axios from 'axios';
// import shortid from 'shortid';

// import {
//   fetchContactsFulfilled,
//   fetchContactsPending,
//   fetchContactsRejected,
//   addNewContactFulfilled,
//   addNewContactPending,
//   addNewContactRejected,
//   removeContactFulfilled,
//   removeContactPending,
//   removeContactRejected,
//   // getFilteredContactsFulfilled,
//   // getFilteredContactsPending,
//   // getFilteredContactsRejected
// } from './phoneBook-actions';

// axios.defaults.baseURL = 'https://61956d5874c1bd00176c6d57.mockapi.io/contacts'

// export const fetchContacts = (filterValue) => async dispatch => {
//   dispatch(fetchContactsPending());

//   try {
//     const { data } = await axios.get(`/contacts?name=${filterValue}`);
//     console.log("response is", data);
//     dispatch(fetchContactsFulfilled(data));
//   } catch (error) {
//     dispatch(fetchContactsRejected(error));
//   }
// };

// export const addNewContact = (name, number) => async dispatch => {

//   const newContact = {
//     name,
//     number,
//     createdAt: new Date(),
//     id: shortid.generate(),
//   }

//   dispatch(addNewContactPending());
//   try {
//     // const { data } = await axios.get('/contacts');
//     // data
//     //   .some((contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()) ? new Error(`${newContact.name} is already in contacts`) :
//     await  axios.post('/contacts', newContact).then(({data})=>dispatch(addNewContactFulfilled(data)))
//   } catch (error) {
//     dispatch(addNewContactRejected(error))
//   }  
// }

// export const removeContact = id => async dispatch => {
//   dispatch(removeContactPending());
//   await axios
//     .delete(`/contacts/${id}`)
//     .then(({ data }) => dispatch(removeContactFulfilled(data)))
//     .catch(error => removeContactRejected(error.message))
// }

// // export const getFilteredContacts = (filterValue) => async dispatch =>{
// //   await axios
// //     .get(`/contacts?name=cool%20${filterValue}`)
// //     .then(({ data }) => {
// //       dispatch(getFilteredContactsFulfilled(data));
// //       console.log("getFilteredContacts response is", data);
// //     })
// //   .catch((error)=>dispatch(getFilteredContactsRejected(error)))
// // }

// // export default { fetchContacts, addNewContact }
