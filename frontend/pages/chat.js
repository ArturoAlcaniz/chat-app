import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import io from 'socket.io-client';
import styles from '../styles/Chat.module.scss';

const socket = io(process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001', {
  withCredentials: true,
});

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [content, setContent] = useState('');
  const [username, setUsername] = useState(null); // Inicializa como null
  const messagesEndRef = useRef(null);
  const router = useRouter();

  // Acceder a localStorage solo en el cliente
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUsername = localStorage.getItem('username');
      setUsername(storedUsername);

      // Redirigir si no hay usuario
      if (!storedUsername) {
        router.push('/');
      }
    }
  }, [router]);

  // Cargar mensajes al iniciar (solo si hay usuario)
  useEffect(() => {
    if (!username) return; // Espera hasta tener el username

    fetch('http://localhost:3001/messages')
      .then((response) => response.json())
      .then((data) => setMessages(data));

    socket.on('chatMessage', (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      socket.off('chatMessage');
    };
  }, [username]); // Dependencia de username

  // Desplazarse al final de los mensajes cuando se actualizan
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Enviar mensaje
  const sendMessage = () => {
    if (!username) {
      alert('Debes iniciar sesión para enviar mensajes.');
      return;
    }

    if (content.trim()) {
      const newMessage = {
        username,
        content,
        timestamp: new Date().toISOString(),
      };
      socket.emit('chatMessage', newMessage);
      setContent('');
    }
  };

  return (
    <div className={styles.container}>
      <h1>Chat</h1>
      <div className={styles.chatBox}>
        {messages.map((msg, index) => (
          <div key={index} className={styles.message}>
            <strong>{msg.username}:</strong> {msg.content}{' '}
            <div className={styles.timestamp}>
              {new Date(msg.timestamp).toLocaleString()}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Escribe un mensaje..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          className={styles.input}
        />
        <button onClick={sendMessage} className={styles.button}>
          Enviar
        </button>
      </div>
    </div>
  );
}