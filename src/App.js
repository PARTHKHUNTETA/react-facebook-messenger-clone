import React, { useState, useEffect } from 'react';
import { FormControl, Input } from '@material-ui/core';
import FlipMove from 'react-flip-move';
import './App.css';
import Message from './Message';
import firebase from 'firebase';
import db from './firebase';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');


  useEffect(() => {
    db.collection('messages').orderBy('timeStamp', 'desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })
      ))
    })
  }, [])

  useEffect(() => {
    setUsername(prompt('Please Enter Your Name'))
  }, [])

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput('');
  }
  return (
    <div className="App">
      <img alt="Messenger_Image" src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" />
      <h1>Happy Chatting</h1>
      <h2>Welcome {username}</h2>

      <form className="app__form">
        <FormControl className="app__formControl">
          <Input className="app__input" placeholder='Enter a message ...' value={input} onChange={(event) => setInput(event.target.value)} />
          <IconButton
            className="app__iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type='submit'
            onClick={sendMessage}>
            <SendIcon />
          </IconButton>

        </FormControl>
      </form>


      <FlipMove>
        {
          messages.map(({ id, message }) =>
            <Message key={id} username={username} message={message} />)
        }
      </FlipMove>
    </div>
  );
}

export default App;
