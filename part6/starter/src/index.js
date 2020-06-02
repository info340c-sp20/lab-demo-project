import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBNsrlV82JVelHAaHKGqEJSnYpu-bsnTb0",
    authDomain: "lab-demo-1a476.firebaseapp.com",
    databaseURL: "https://lab-demo-1a476.firebaseio.com",
    projectId: "lab-demo-1a476",
    storageBucket: "lab-demo-1a476.appspot.com",
    messagingSenderId: "1094517096864",
    appId: "1:1094517096864:web:ccb4f8aa9bba4256df64c5"
};

firebase.initializeApp(firebaseConfig);


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
