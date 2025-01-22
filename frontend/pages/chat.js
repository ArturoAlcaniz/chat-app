import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';
import styles from '../styles/Chat.module.scss';

const socket = io('http://localhost:3001', {
  withCredentials: true,
});

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');
  const messagesEndRef = useRef(null);

  // Cargar mensajes al iniciar
  useEffect(() => {
    fetch('http://localhost:3001/chat/messages')
      .then((response) => response.json())
      .then((data) => setMessages(data));

    socket.on('chatMessage', (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      socket.off('chatMessage');
    };
  }, []);

  // Desplazarse al final de los mensajes cuando se actualizan
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (!username) {
      alert('Debes iniciar sesión para enviar mensajes.');
      return;
    }

    if (message.trim()) {
      socket.emit('chatMessage', { username, message });
      setMessage('');
    }
  };

  return (
    <div className={styles.container}>
      <h1>Chat</h1>
      <div className={styles.chatBox}>
        {messages.map((msg, index) => (
          <div key={index} className={styles.message}>
            <strong>{msg.username}:</strong> {msg.message}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className={styles.input}
      />
      <input
        type="text"
        placeholder="Escribe un mensaje..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        className={styles.input}
      />
      <button onClick={sendMessage} className={styles.button}>
        Enviar
      </button>
    </div>
  );
}