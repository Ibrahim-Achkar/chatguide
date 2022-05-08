import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
let socket;

export default function Home() {
  const [userInput, setUserInput] = useState('');
  const [receivedMessage, setReceivedMessage] = useState('');

  const socketInitializer = async () => {
    await fetch('/api/socket');
    socket = io();

    socket.on('connect', () => {
      console.log('Client connected 🙂');
    });

    socket.on('server', (message) => {
      setReceivedMessage(message);
    });
  };

  function userInputHandler(e) {
    setUserInput(e.target.value);
  }

  function sendChat(e) {
    e.preventDefault();
    console.log(`message sent: ${userInput}`);
    socket.emit('user', userInput);
  }

  useEffect(() => {
    socketInitializer();
  }, []);

  return (
    <>
      <h1 className='heading'>Hey 👋🏼</h1>

      <form onSubmit={sendChat}>
        <input
          placeholder="what's on your mind?"
          value={userInput}
          onChange={userInputHandler}
        />
        <button type='submit'>Send</button>
      </form>

      <h2 className='heading-2'>Received</h2>
      <p className='received-message'>{receivedMessage}</p>
    </>
  );
}
