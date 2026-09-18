import React, { useState, useRef, useEffect } from 'react';
import { chatKnowledge } from '../data/portfolioData';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hi there! I'm SP-Bot, Satya's portfolio assistant. Ask me anything about his work, projects, or skills."
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const getResponse = (query) => {
    const q = query.toLowerCase();
    if (q.includes('hi') || q.includes('hello') || q.includes('hey')) {
      return chatKnowledge.greet[Math.floor(Math.random() * chatKnowledge.greet.length)];
    }
    if (q.includes('who') || q.includes('about') || q.includes('satya') || q.includes('bio')) {
      return chatKnowledge.who[0];
    }
    if (q.includes('project') || q.includes('work') || q.includes('app') || q.includes('built')) {
      return chatKnowledge.projects[0];
    }
    if (q.includes('skill') || q.includes('tech') || q.includes('stack') || q.includes('language')) {
      return chatKnowledge.skills[0];
    }
    if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('reach')) {
      return chatKnowledge.contact[0];
    }
    return chatKnowledge.default[0];
  };

  const sendMessage = (textToSend) => {
    const text = textToSend || inputValue.trim();
    if (!text) return;

    setMessages((prev) => [...prev, { sender: 'user', text }]);
    setInputValue('');
    setShowSuggestions(false);

    setTimeout(() => {
      const botReply = getResponse(text);
      setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
    }, 350);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <>
      <button
        className="chat-trigger"
        id="chatTrigger"
        onClick={toggleChat}
        title="Chat with SP-Bot"
        aria-label="Chat with assistant"
      >
        <svg viewBox="0 0 24 24">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>

      <div className={`chat-window ${isOpen ? 'open' : ''}`} id="chatWindow">
        <div className="chat-header">
          <div className="chat-header-info">
            <div className="chat-avatar">SP</div>
            <div>
              <div className="chat-name">SP-Bot</div>
              <div className="chat-status">Online now</div>
            </div>
          </div>
          <button className="chat-close" onClick={toggleChat} aria-label="Close chat">
            ✕
          </button>
        </div>

        <div className="chat-messages" id="chatMessages">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-bubble ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {showSuggestions && (
          <div className="chat-suggestions">
            <button
              className="chat-suggest-btn"
              onClick={() => sendMessage('Who is Satya?')}
            >
              Who is Satya?
            </button>
            <button
              className="chat-suggest-btn"
              onClick={() => sendMessage('Show me projects')}
            >
              Projects
            </button>
            <button
              className="chat-suggest-btn"
              onClick={() => sendMessage('How to contact?')}
            >
              Contact
            </button>
            <button
              className="chat-suggest-btn"
              onClick={() => sendMessage('Skills & Tech')}
            >
              Skills
            </button>
          </div>
        )}

        <div className="chat-input-row">
          <input
            type="text"
            className="chat-input"
            id="chatInput"
            placeholder="Ask me anything..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className="chat-send"
            onClick={() => sendMessage()}
            aria-label="Send message"
          >
            <svg viewBox="0 0 24 24">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

