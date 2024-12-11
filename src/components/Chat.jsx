import { useState } from 'react';
import './Chat.css';

function Chat({ trackingNumber }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'system',
      content: `I'm tracking package ${trackingNumber}. Can you provide your area or address? I can check the nearest branches and their activities for you.`
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage
    };

    const systemResponse = {
      id: Date.now() + 1,
      type: 'system',
      content: `The nearest branch is located at 108 Allenby St, Tel Aviv.

Operating hours:
Sunday-Thursday: 08:00-19:00
Friday: 08:00-13:00

The branch is about 10 minutes walking distance from you. Would you like to receive arrival instructions or parking information in the area?`
    };

    setMessages(prev => [...prev, userMessage, systemResponse]);
    setInputMessage('');
  };

  const handleBack = () => {
    // Reload the page to return to tracking form
    window.location.reload();
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <button className="back-button" onClick={handleBack}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"/>
          </svg>
        </button>
        <h1>Package Tracking Chat Demo</h1>
        <button className="menu-button">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
        </button>
      </div>

      <div className="messages-container">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.type}`}>
            {message.type === 'system' && (
              <div className="system-icon">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 013 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9" fill="#4a90e2"/>
                </svg>
              </div>
            )}
            <div className="message-content">{message.content}</div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="message-input-container">
        <div className="attachment-buttons">
          <button type="button">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
            </svg>
          </button>
          <button type="button">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
            </svg>
          </button>
          <button type="button">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
            </svg>
          </button>
        </div>
        <input
          type="text"
          placeholder="How can I help you?"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button type="submit" className="send-button">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
          </svg>
        </button>
      </form>
    </div>
  );
}

export default Chat;
