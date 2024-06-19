import React from 'react';
import './index.css';

function ChatInterface({ onClose }) {
  return (
    <div className="chat-interface">
      <div className="chat-header">
        <h3>Chat Interface</h3>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
      <div className="chat-body">
        <p>Chat messages go here...</p>
      </div>
    </div>
  );
}

export default ChatInterface;
