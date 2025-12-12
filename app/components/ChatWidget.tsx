'use client';

import { useState } from 'react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{text: string, sender: 'user' | 'bot', timestamp: Date}>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState<{name: string, email: string} | null>(null);
  const [showUserForm, setShowUserForm] = useState(true);

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center w-14 h-14"
        aria-label="Open chat"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-white dark:bg-black rounded-lg shadow-2xl border border-gray-200 dark:border-gray-800 flex flex-col h-[500px] max-h-[calc(100vh-8rem)]">
          {/* Header */}
          <div className="bg-blue-600 dark:bg-blue-700 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg">Let's Chat</h3>
              <p className="text-sm text-blue-100">We'll respond as soon as possible</p>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">GP</span>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 max-w-[80%]">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Hi! 👋 How can I help you today? Feel free to ask me anything about web development or my services.
                </p>
              </div>
            </div>

            {showUserForm && (
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 space-y-3">
                <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">First, let me know who you are:</p>
                <input
                  type="text"
                  placeholder="Your Name (required)"
                  id="chat-name"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400"
                />
                <input
                  type="email"
                  placeholder="Your Email (optional)"
                  id="chat-email"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400"
                />
                <button
                  onClick={() => {
                    const nameInput = document.getElementById('chat-name') as HTMLInputElement;
                    const emailInput = document.getElementById('chat-email') as HTMLInputElement;
                    if (nameInput?.value) {
                      setUserInfo({ 
                        name: nameInput.value, 
                        email: emailInput?.value || 'no-email@example.com' 
                      });
                      setShowUserForm(false);
                    }
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 text-sm transition-colors"
                >
                  Continue
                </button>
              </div>
            )}

            {messages.map((msg, idx) => (
              <div key={idx} className={`flex items-start space-x-3 ${msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.sender === 'user' ? 'bg-blue-600' : 'bg-blue-100 dark:bg-blue-900'
                }`}>
                  <span className={`text-sm font-semibold ${
                    msg.sender === 'user' ? 'text-white' : 'text-blue-600 dark:text-blue-400'
                  }`}>
                    {msg.sender === 'user' ? 'You' : 'GP'}
                  </span>
                </div>
                <div className={`rounded-lg p-3 max-w-[80%] ${
                  msg.sender === 'user' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}>
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">GP</span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 dark:border-gray-800 p-4">
            {!showUserForm ? (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const message = formData.get('message') as string;
                  if (message.trim() && userInfo) {
                    setIsLoading(true);
                    
                    // Add user message to chat
                    setMessages(prev => [...prev, {
                      text: message,
                      sender: 'user',
                      timestamp: new Date()
                    }]);

                    try {
                      // Send to API
                      const response = await fetch('/api/chat', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                          name: userInfo.name,
                          email: userInfo.email === 'no-email@example.com' ? '' : userInfo.email,
                          message: message
                        })
                      });

                      if (response.ok) {
                        setMessages(prev => [...prev, {
                          text: 'Thank you for your message! I\'ll get back to you soon. 📧',
                          sender: 'bot',
                          timestamp: new Date()
                        }]);
                      } else {
                        setMessages(prev => [...prev, {
                          text: 'Sorry, there was an error sending your message. Please try emailing me directly.',
                          sender: 'bot',
                          timestamp: new Date()
                        }]);
                      }
                    } catch (error) {
                      setMessages(prev => [...prev, {
                        text: 'Sorry, there was an error. Please try emailing me directly.',
                        sender: 'bot',
                        timestamp: new Date()
                      }]);
                    } finally {
                      setIsLoading(false);
                      e.currentTarget.reset();
                    }
                  }
                }}
                className="flex space-x-2"
              >
                <input
                  type="text"
                  name="message"
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-foreground focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            ) : (
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                Please enter your name and email to start chatting
              </p>
            )}
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
              Or email me at{' '}
              <a href="mailto:your.email@example.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                your.email@example.com
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

