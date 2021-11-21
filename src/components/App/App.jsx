// import { useEffect } from 'react';
// import fetchContacts from '../../redux/phoneBook/phoneBook-operations';
// import { connect } from "react-redux";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";


import "./App.css";

function App() { //App({fetchAllContacts}) {
  // useEffect(() => {
  //     console.log('APP DID MOUNT :>> ');
  //   fetchAllContacts();
  //   // eslint-disable-next-line
  //   }, [])
  
     return (
      <div className="App">
        <h1>PhoneBook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <div className="Contacts">
          <Filter />
          <ContactList/>
          </div>
      </div>
    );
  }

//   const mapDispatchToProps = dispatch => ({  
//   fetchAllContacts: ()=>dispatch(fetchContacts())
// });

export default App;//connect(null, mapDispatchToProps)(App)



// // ---Repeta's App.js
// import React from 'react';
// import { Switch, Route, Link } from 'react-router-dom';
// import TodosView from './views/TodosView';

// const App = () => (
//   <>
//     <ul>
//       <li>
//         <Link to="/todos">Заметки</Link>
//       </li>
//     </ul>

//     <Switch>
//       <Route path="/todos">
//         <TodosView />
//       </Route>
//     </Switch>
//   </>
// );

// export default App;


// // ---Repeta's TodosView.js
// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import Container from '../components/Container';
// import TodoList from '../components/TodoList';
// import TodoEditor from '../components/TodoEditor';
// import Filter from '../components/TodoFilter';
// import Stats from '../components/Stats';
// import Modal from '../components/Modal';
// import IconButton from '../components/IconButton';
// import { ReactComponent as AddIcon } from '../icons/add.svg';
// import todosOperations from '../redux/todos/todos-operations';

// const barStyles = {
//   display: 'flex',
//   alignItems: 'flex-end',
//   marginBottom: 20,
// };

// class TodosView extends Component {
//   state = {
//     showModal: false,
//   };

//   componentDidMount() {
//     this.props.fetchTodos();
//   }

//   toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };

//   render() {
//     const { showModal } = this.state;

//     return (
//       <Container>
//         <div style={barStyles}>
//           <Filter />
//           <Stats />
//           <IconButton onClick={this.toggleModal} aria-label="Добавить todo">
//             <AddIcon width="40" height="40" fill="#fff" />
//           </IconButton>

//           {this.props.isLoadingTodos && <h1>Загружаем...</h1>}
//         </div>

//         <TodoList />

//         {showModal && (
//           <Modal onClose={this.toggleModal}>
//             <TodoEditor onSave={this.toggleModal} />
//           </Modal>
//         )}
//       </Container>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   isLoadingTodos: state.todos.loading,
// });

// const mapDispatchToProps = dispatch => ({
//   fetchTodos: () => dispatch(todosOperations.fetchTodos()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(TodosView);
