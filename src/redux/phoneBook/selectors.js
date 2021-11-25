import { createSelector } from '@reduxjs/toolkit';

export const getFilter = state => state.phoneBook.filter;
export const getContacts = state => state.phoneBook.contacts;
export const getLoading = state => state.phoneBook.isLoading;
export const getError = state => state.phoneBook.error;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (allContacts, filterValue) => {
    return allContacts.filter(({ name }) =>
      name.toLowerCase().includes(filterValue.toLowerCase()),
    );
  },
);
