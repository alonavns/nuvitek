import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, compose } from "redux";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import firebase from "firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore"; // <- needed if using firestore
import "firebase/firestore"; // <- needed if using firestore
// import 'firebase/functions' // <- needed if using httpsCallable

const firebaseConfig = {
  apiKey: "AIzaSyAP2Wd0eXZZTBhtUwGB3wsSBJ1RAiBgX-I",
  authDomain: "nuvitek-584fa.firebaseapp.com",
  databaseURL: "https://nuvitek-584fa.firebaseio.com",
  projectId: "nuvitek-584fa",
  storageBucket: "nuvitek-584fa.appspot.com",
  messagingSenderId: "875274488397"
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Initialize other services on firebase instance
firebase.firestore(); // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase) // <- needed if using firestore
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer // <- needed if using firestore
});

// Create store with reducers and initial state
const initialState = {};
const store = createStoreWithFirebase(rootReducer, initialState);

import App from "./App";

import "normalize.css/normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route
        path="/"
        render={() => (
          <Provider store={store}>
            <App />
          </Provider>
        )}
      />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
