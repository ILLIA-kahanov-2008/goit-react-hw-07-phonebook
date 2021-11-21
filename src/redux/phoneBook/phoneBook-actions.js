import { createAction } from '@reduxjs/toolkit';
// import shortid from 'shortid';


export const fetchContactsFulfilled = createAction('contacts/fetchFulfilled');
export const fetchContactsPending = createAction('contacts/fetchPending');
export const fetchContactsRejected = createAction('contacts/fetchRejected');

export const addNewContactFulfilled = createAction('contacts/addContactFulfilled');
export const addNewContactPending = createAction('contacts/addContactPending');
export const addNewContactRejected = createAction('contacts/addContactRejected');

export const removeContactFulfilled = createAction('contacts/removeContactFulfilled');
export const removeContactPending = createAction('contacts/removeContactPending');
export const removeContactRejected = createAction('contacts/removeContactRejected');

// export const getFilteredContactsFulfilled = createAction('contacts/getFilteredContactsFulfilled');
// export const getFilteredContactsPending = createAction('contacts/getFilteredContactsPending');
// export const getFilteredContactsRejected = createAction('contacts/getFilteredContactsRejected');


const filteringValue = createAction('contacts/changeFilter');

// eslint-disable-next-line
export default filteringValue;

