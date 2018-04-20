// App.js
import React, { Component } from 'react';
import Header from '../src/components/Header';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';
import firebase, { storage } from 'firebase';
class App extends Component {
  constructor(props){
  super(props);
  var config = {
    apiKey: "AIzaSyDBnS6BmXwKgI_TNdu0DmBTRKsqjBhSspI",
    authDomain: "todolist-react-2f602.firebaseapp.com",
    databaseURL: "https://todolist-react-2f602.firebaseio.com",
    projectId: "todolist-react-2f602",
    storageBucket: "todolist-react-2f602.appspot.com",
    messagingSenderId: "474645365815"
  };
  firebase.initializeApp(config);
}
render() {
  return (
    <div className="container">
      <div class="notification ">
        <strong>** To Do List **</strong>
      </div>
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <MessageList db={firebase} />
        </div>
      </div>
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <MessageBox db={firebase} />
        </div>
      </div>
    </div>
  );
 }
}
export default App;