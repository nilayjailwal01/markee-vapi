import React, { useState } from 'react';
import { TextField, Button, Text } from '@adobe/react-spectrum';
import { BellIcon, ChatBubbleIcon, Cross1Icon, SewingPinFilledIcon } from '@radix-ui/react-icons';
import { Heading, IconButton } from '@radix-ui/themes';

const ChatBox: React.FC = () => {
  const [isChatOpen, setChatOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<{ text: string, type: 'user' | 'system' }[]>([
  ]);

  const toggleChat = () => {
    setChatOpen(!isChatOpen);
  };

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, type: 'user' }]);
      setMessage('');
    }
  };

  const handleChange = (value: string) => {
    setMessage(value);
  };

  return (
    <div className="chat-app-container">
      {/* Floating Button */}
      <button className="floating-button" onClick={toggleChat}>
        <ChatBubbleIcon scale={2} />
      </button>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <Heading size="5">Markee Chat</Heading>
            <button className="close-button" onClick={toggleChat}> 
                <Cross1Icon />
            </button>
          </div>
          {/* <div className="chat-options">
            <button className="option-button"> <Text>Notifications</Text></button>
            <button className="option-button"> Pin</button>
            <button className="option-button"> Support</button>
          </div> */}
          <div className="chat-content">
            <div className="messages">
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.type}`}>
                  <p>{msg.text || 'No content'}</p>
                </div>
              ))}
            </div>
            <div className="chat-footer">
              <TextField
                value={message}
                onChange={handleChange}
                placeholder="Type your message..."
                width="calc(100% - 20px)"
                isQuiet
              />
              <Button
                variant='accent'
                onPress={handleSend}
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
