'use client';

import { useEffect, useState } from 'react';

interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
  replied?: boolean;
  replies?: Array<{
    id: string;
    message: string;
    timestamp: string;
  }>;
}

export default function AdminPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');
  const [sendingReply, setSendingReply] = useState(false);

  useEffect(() => {
    fetchMessages();
    // Refresh every 5 seconds
    const interval = setInterval(fetchMessages, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/messages');
      const data = await response.json();
      setMessages(data.messages || []);
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const markAsReplied = async (id: string) => {
    try {
      await fetch('/api/messages', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, markReplied: true })
      });
      fetchMessages();
    } catch (error) {
      console.error('Error updating message:', error);
    }
  };

  const sendReply = async (id: string) => {
    if (!replyText.trim()) return;
    
    setSendingReply(true);
    try {
      await fetch('/api/messages', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, reply: replyText })
      });
      setReplyText('');
      setReplyingTo(null);
      fetchMessages();
    } catch (error) {
      console.error('Error sending reply:', error);
      alert('Failed to send reply. Please try again.');
    } finally {
      setSendingReply(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-black rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-foreground mb-6">Chat Messages</h1>
          
          {loading ? (
            <p className="text-gray-600 dark:text-gray-400">Loading messages...</p>
          ) : messages.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-400">No messages yet. Messages will appear here when users contact you through the chat widget.</p>
          ) : (
            <div className="space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`border rounded-lg p-4 ${
                    msg.replied
                      ? 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800'
                      : 'border-blue-300 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/20'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-foreground">{msg.name}</h3>
                      {msg.email && msg.email !== 'No email provided' ? (
                        <p className="text-sm text-gray-600 dark:text-gray-400">{msg.email}</p>
                      ) : (
                        <p className="text-sm text-gray-500 dark:text-gray-500 italic">No email provided</p>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {new Date(msg.timestamp).toLocaleString()}
                      </p>
                      {msg.replied && (
                        <span className="text-xs text-green-600 dark:text-green-400">✓ Replied</span>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">{msg.message}</p>
                  
                  {/* Show replies if any */}
                  {msg.replies && msg.replies.length > 0 && (
                    <div className="mb-3 space-y-2">
                      {msg.replies.map((reply) => (
                        <div key={reply.id} className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3">
                          <div className="flex justify-between items-start mb-1">
                            <span className="text-xs font-semibold text-green-700 dark:text-green-400">Your Reply</span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {new Date(reply.timestamp).toLocaleString()}
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 dark:text-gray-300">{reply.message}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Reply section */}
                  {replyingTo === msg.id ? (
                    <div className="space-y-2">
                      <textarea
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="Type your reply..."
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 resize-none"
                        rows={3}
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={() => sendReply(msg.id)}
                          disabled={sendingReply || !replyText.trim()}
                          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg text-sm transition-colors"
                        >
                          {sendingReply ? 'Sending...' : 'Send Reply'}
                        </button>
                        <button
                          onClick={() => {
                            setReplyingTo(null);
                            setReplyText('');
                          }}
                          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-foreground rounded-lg text-sm transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <button
                        onClick={() => setReplyingTo(msg.id)}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm transition-colors"
                      >
                        Reply
                      </button>
                      {msg.email && msg.email !== 'No email provided' && (
                        <a
                          href={`mailto:${msg.email}?subject=Re: Your message&body=Hi ${msg.name},%0D%0A%0D%0A`}
                          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-foreground rounded-lg text-sm transition-colors"
                        >
                          Reply via Email
                        </a>
                      )}
                      {!msg.replied && (
                        <button
                          onClick={() => markAsReplied(msg.id)}
                          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-foreground rounded-lg text-sm transition-colors"
                        >
                          Mark as Replied
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

