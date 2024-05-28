import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { sendChatRequest } from '../utils/api';
import './ChatScreen.css';

const ChatScreen = ({ prompt }) => {
  const [conversation, setConversation] = useState([]);

  const sendChatMessage = async () => {
    if (!prompt.trim()) return; // Do not send empty messages

    // Add user message to the conversation
    setConversation('')
    const userMessage = { role: 'user', content: prompt };
    setConversation(prevConversation => [...prevConversation, userMessage]);

    try {
      // Send the user message to ChatGPT API
      const botResponse = await sendChatRequest(prompt);
      const botMessage = { role: 'system', content: botResponse };
      setConversation(prevConversation => [...prevConversation, botMessage]);
    } catch (error) {
      // Handle error
      console.error('Error sending chat message:', error);
    }
  };

  return (
    <div className="container">
      <button className="sendButton" onClick={sendChatMessage}>Send</button>
      <div className="chatAreaWrapper">
        <div className="chatArea">
          {conversation.map((msg, index) => (
              <div className='flex'>
                {msg.role == 'user' 
                ?
                ''
                :
                <img src="/logo.png" alt="CodeCoach Logo" className="logoimg" />
                }
                <ReactMarkdown key={index} className={msg.role === 'user' ? 'userMessage' : 'botMessage'}>
                  {msg.content}
                </ReactMarkdown>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;