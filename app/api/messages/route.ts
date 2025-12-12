import { NextResponse } from 'next/server';

// In-memory storage (in production, use a database)
let messages: Array<{
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: Date;
  replied?: boolean;
  replies?: Array<{
    id: string;
    message: string;
    timestamp: Date;
  }>;
}> = [];

export async function GET() {
  return NextResponse.json({ messages });
}

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    
    if (!name || !message) {
      return NextResponse.json(
        { error: 'Name and message are required' },
        { status: 400 }
      );
    }

    const newMessage = {
      id: Date.now().toString(),
      name,
      email: email || 'No email provided',
      message,
      timestamp: new Date(),
      replied: false,
      replies: []
    };

    messages.push(newMessage);

    // Log to console for easy viewing
    console.log('\n📩 NEW MESSAGE RECEIVED:');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`👤 Name: ${name}`);
    if (email && email !== 'No email provided') {
      console.log(`📧 Email: ${email}`);
    } else {
      console.log(`📧 Email: Not provided`);
    }
    console.log(`💬 Message: ${message}`);
    console.log(`⏰ Time: ${new Date().toLocaleString()}`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    console.log(`💡 View and reply at: http://localhost:3000/admin\n`);

    return NextResponse.json(
      { success: true, message: 'Message received!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing message:', error);
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    );
  }
}

// Update message (mark as replied or add reply)
export async function PATCH(request: Request) {
  try {
    const { id, reply, markReplied } = await request.json();
    const message = messages.find(m => m.id === id);
    
    if (message) {
      if (reply) {
        // Add a reply to the message
        if (!message.replies) {
          message.replies = [];
        }
        message.replies.push({
          id: Date.now().toString(),
          message: reply,
          timestamp: new Date()
        });
        message.replied = true;
        console.log(`\n💬 Reply sent to ${message.name}: ${reply}\n`);
      } else if (markReplied) {
        // Just mark as replied
        message.replied = true;
      }
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update message' }, { status: 500 });
  }
}

