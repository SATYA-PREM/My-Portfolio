import React, { useState, useRef, useEffect } from 'react';
import { chatKnowledge } from '../data/portfolioData';

const SUGGESTIONS = [
  'Who is Satya?',
  'Projects',
  'Skills',
  'Experience',
  'GATE 2026',
  'Contact'
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hi there! I'm SP-Bot, Satya's portfolio assistant 👋\n\nAsk me anything about his backend engineering, AI projects, skills, or experience!"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [messages, isOpen, isTyping]);

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClearChat = () => {
    setMessages([
      {
        sender: 'bot',
        text: "Conversation cleared! How can I help you today?"
      }
    ]);
  };

  const getResponse = (query) => {
    const q = query.toLowerCase();

    if (q.includes('hi') || q.includes('hello') || q.includes('hey') || q.includes('greetings')) {
      return chatKnowledge.greet[Math.floor(Math.random() * chatKnowledge.greet.length)];
    }
    if (q.includes('who') || q.includes('about') || q.includes('satya') || q.includes('bio')) {
      return chatKnowledge.who[0];
    }
    if (q.includes('gate') || q.includes('exam') || q.includes('rank') || q.includes('qualif')) {
      return chatKnowledge.gate[0];
    }
    if (q.includes('intern') || q.includes('experience') || q.includes('job') || q.includes('work history') || q.includes('role')) {
      return chatKnowledge.experience[0];
    }
    if (q.includes('project') || q.includes('work') || q.includes('app') || q.includes('built') || q.includes('portfolio')) {
      return chatKnowledge.projects[0];
    }
    if (q.includes('skill') || q.includes('tech') || q.includes('stack') || q.includes('language') || q.includes('java') || q.includes('spring') || q.includes('python')) {
      return chatKnowledge.skills[0];
    }
    if (q.includes('education') || q.includes('college') || q.includes('degree') || q.includes('university') || q.includes('srit')) {
      return chatKnowledge.education[0];
    }
    if (q.includes('resume') || q.includes('cv')) {
      return chatKnowledge.resume[0];
    }
    if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('reach') || q.includes('phone') || q.includes('linkedin')) {
      return chatKnowledge.contact[0];
    }
    return chatKnowledge.default[0];
  };

  const sendMessage = (textToSend) => {
    const text = textToSend || inputValue.trim();
    if (!text) return;

    setMessages((prev) => [...prev, { sender: 'user', text }]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botReply = getResponse(text);
      setIsTyping(false);
      setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
    }, 450);
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
        <span className="chat-trigger-badge" title="Online" />
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
          <div className="chat-header-actions">
            <button
              className="chat-action-btn"
              onClick={handleClearChat}
              title="Clear conversation"
              aria-label="Clear chat"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 6h18m-2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              </svg>
            </button>
            <button
              className="chat-action-btn"
              onClick={toggleChat}
              title="Close chat"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="chat-messages" id="chatMessages">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-bubble ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          {isTyping && (
            <div className="chat-typing">
              <span />
              <span />
              <span />
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="chat-suggestions-container">
          <div className="chat-suggestions-label">Quick Inquiries:</div>
          <div className="chat-suggestions">
            {SUGGESTIONS.map((item, idx) => (
              <button
                key={idx}
                className="chat-suggest-btn"
                onClick={() => sendMessage(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="chat-input-row">
          <input
            ref={inputRef}
            type="text"
            className="chat-input"
            id="chatInput"
            placeholder="Ask about projects, skills, experience..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className="chat-send"
            onClick={() => sendMessage()}
            aria-label="Send message"
            title="Send"
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
