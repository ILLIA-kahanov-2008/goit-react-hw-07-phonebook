// import { createSlice } from "@reduxjs/toolkit";
// import { fetchContacts, addNewContact, removeContact } from './phoneBook-operations'


// // const getFilteredContacts = (allContacts, filterValue) => {
// //   // const normalizeFilter = filterValue.toLowerCase();
// //   return allContacts.filter(({ name }) =>
// //     name.toLowerCase().includes(filterValue.toLowerCase()),
// //   );
// // };

// const phoneBookSlice = createSlice({
//   name: "phoneBook",
//   initialState: {
//     contacts: [],
//     isLoading: false,
//     filter: '',
//     status:null,
//     error:null,
//   },
//   // reducers: {
//   //   getFiltredContacts(_, { payload }) {payload}
//   // },
//   extraReducers: {
//     [fetchContacts.pending](state,action) {
//       ...
//     },
//     [fetchContacts.fulfilled]() {
    
//   },
//     [fetchContacts.rejected]() {
    
//   },
//   [addNewContact.pending](){},
//   [addNewContact.fulfilled](){},
//   [addNewContact.rejected](){},
//   [removeContact.pending](){},
//   [removeContact.fulfilled](){},
//   [removeContact.rejected](){},
//   }
// })
