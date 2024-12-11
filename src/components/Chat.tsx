import { useState } from 'react';
import { BoxIcon } from './BoxIcon';
import { BotIcon } from './BotIcon';

interface Message {
  id: number;
  type: 'system' | 'user';
  content: string;
}

interface ChatProps {
  trackingNumber: string;
}

function Chat({ trackingNumber }: ChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'system',
      content: `I'm tracking package ${trackingNumber}. Can you provide your area or address? I can check the nearest branches and their activities for you.`
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      type: 'user',
      content: inputMessage
    };

    const systemResponse: Message = {
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
    window.location.reload();
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 max-w-[100vw] overflow-hidden">
      <div className="flex items-center justify-between p-2 sm:p-4 bg-white shadow">
        <button 
          className="p-1 sm:p-2 hover:bg-gray-100 rounded-full transition-colors"
          onClick={handleBack}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" className="fill-gray-600">
            <path d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"/>
          </svg>
        </button>
        <h1 className="text-lg sm:text-xl font-semibold text-gray-800">Package Tracking Chat Demo</h1>
        <button className="p-1 sm:p-2 hover:bg-gray-100 rounded-full transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" className="fill-gray-600">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-2 sm:p-4 space-y-3">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex max-w-[85%] sm:max-w-[75%] ${
              message.type === 'user' 
                ? 'bg-blue-500 text-white rounded-l-lg rounded-tr-lg' 
                : 'bg-white text-gray-800 rounded-r-lg rounded-tl-lg'
            } p-3 shadow-md`}>
              {message.type === 'system' && (
                <div className="mr-2 flex-shrink-0">
                  <BotIcon width={20} height={20} className="text-blue-500" />
                </div>
              )}
              <div className="whitespace-pre-wrap text-sm sm:text-base">{message.content}</div>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="p-2 sm:p-4 bg-white shadow-lg">
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="flex gap-1 sm:gap-2">
            <button type="button" className="p-1 sm:p-2 hover:bg-gray-100 rounded-full transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" className="fill-gray-600">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
              </svg>
            </button>
            <button type="button" className="p-1 sm:p-2 hover:bg-gray-100 rounded-full transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" className="fill-gray-600">
                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
              </svg>
            </button>
            <button type="button" className="p-1 sm:p-2 hover:bg-gray-100 rounded-full transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" className="fill-gray-600">
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
              </svg>
            </button>
          </div>
          <input
            type="text"
            placeholder="How can I help you?"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            className="flex-1 p-2 text-sm sm:text-base border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
          />
          <button 
            type="submit" 
            className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" className="fill-current">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Chat;
