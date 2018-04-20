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
    apiKey: "AIzaSyArb8Wc3zQxkUPqrA6-GXVfADeBHrQTQsA",
    authDomain: "todolist-react123.firebaseapp.com",
    databaseURL: "https://todolist-react123.firebaseio.com",
    projectId: "todolist-react123",
    storageBucket: "",
    messagingSenderId: "593354524901"
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