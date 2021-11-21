import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
// import { PersistGate } from "redux-persist/integration/react";
import App from "./components/App/App.jsx";
import store from './redux/store';

import "./index.css";

console.log('store :>> ', store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading="Loading state..." persistor={store.persister}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// // import { PersistGate } from 'redux-persist/integration/react';
// import App from './App';
// import store from './redux/store';
// import 'modern-normalize/modern-normalize.css';
// import './styles/base.scss';

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       {/* <PersistGate loading={null} persistor={store.persistor}> */}
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//       {/* </PersistGate> */}
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root'),
// );