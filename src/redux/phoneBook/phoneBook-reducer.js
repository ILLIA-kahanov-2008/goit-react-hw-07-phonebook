import { combineReducers } from 'redux';
import { createReducer } from "@reduxjs/toolkit";
import filteringValue from './phoneBook-actions' 
import {
  fetchContactsFulfilled,
  fetchContactsPending,
  fetchContactsRejected,
  addNewContactFulfilled,
  addNewContactPending,
  addNewContactRejected,
  removeContactFulfilled,
  removeContactPending,
  removeContactRejected,
  // getFilteredContactsFulfilled,
  // getFilteredContactsRejected
} from './phoneBook-actions';

const items = createReducer([], {
  [fetchContactsFulfilled]: (_, {payload})=>payload,
  [addNewContactFulfilled]: (state, { payload }) => [...state, payload],
  [removeContactFulfilled]: (state, {payload}) =>
    state.filter(({ id }) => id !== payload.id),
  // [getFilteredContactsFulfilled]: (_, {payload})=>payload,
})

const isLoading = createReducer(false, {
  [fetchContactsPending]: () => true,
  [fetchContactsFulfilled]: () => false,
  [fetchContactsRejected]: () => false,
  [addNewContactPending]: () => true,
  [addNewContactFulfilled]: () => false,
  [addNewContactRejected]: () => false,
  [removeContactPending]: () => true,
  [removeContactFulfilled]: () => false,
  [removeContactRejected]:()=>false,
})

const filter = createReducer('',
  {
    [filteringValue]: (_, { payload }) => payload,
  }
)

const error = createReducer(null, {
  [fetchContactsRejected]: (_, { payload }) => payload,
  [fetchContactsPending]: () => null,
  [fetchContactsFulfilled]: ()=> null,
  [addNewContactRejected]: (_, { payload }) => payload,
  [addNewContactPending]: ()=> null,
  [addNewContactFulfilled]: ()=> null,
  [removeContactRejected]: (_, { payload }) => payload,
  [removeContactPending]: () => null,
  [removeContactFulfilled]: () => null,
  // [getFilteredContactsRejected]: (_, { payload }) => payload,
  // [getFilteredContactsFulfilled]: () => null,
});

export default combineReducers({
  items,
  filter,
  error,
  isLoading
});


