import { Vonage } from '@vonage/server-sdk';
import { NextResponse } from 'next/server';

const vonage = new Vonage({
  apiKey: process.env.VONAGE_API_KEY,
  apiSecret: process.env.VONAGE_SECRET_KEY,
});

async function sendSMS(to, from, text) {
  try {
    await vonage.sms.send({ to, from, text });
    console.log('SMS sent successfully');
  } catch (err) {
    console.error('Error sending SMS:', err);
    throw err;
  }
}

export async function POST(request) {
  try {
    const { name, mobile, email, message } = await request.json();

    const textMessage = `
Meddelande från: ${name || 'Inget namn'}\n
Email: ${email || 'Inget email'}\n
Mobil: ${mobile || 'Inget nummer'}\n
Meddelande: ${message}
    `;

    await sendSMS("46737025139", mobile, textMessage);
    
    return NextResponse.json(
      { success: true, message: 'Meddelande skickat!' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        error: 'Kunde inte skicka meddelande',
        details: error.message 
      },
      { status: 500 }
    );
  }
}