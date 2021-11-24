import axios from 'axios';

axios.defaults.baseURL = 'https://61956d5874c1bd00176c6d57.mockapi.io/contacts'

export async function fetchAllContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContact(newContact) {
  const contactsData = await axios.post('/contacts', newContact).then(({ data }) => data);
  // console.log('addContact func :>> ', contactsData);
  return contactsData;
}

export async function deleteContact(id) {
  const restContacts = await axios.delete(`/contacts/${id}`).then(({ data }) => data);
  // console.log('deleteContact func :>> ', restContacts);
  return restContacts;
}