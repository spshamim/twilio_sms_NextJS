"use client"
import axios from 'axios';
import { useState } from 'react';

export default function SendSms() {
  const [to, setTo] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSendSms = async () => {
    try {
      const Rresponse = await axios.post('/api/sendSms', {
        to: to,
        body: message,
      });
      setStatus(`Message sent with SID: ${Rresponse.data.sid}`);
    } catch (error:any) {
      setStatus(`Error: ${error.Rresponse.data.error}`);
    }
  };

  return (
    <div className='flex flex-col items-center'>
      <input
        type="text"
        placeholder="Recipient Phone Number"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        className='mt-10 rounded-sm shadow-sm border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-100 dark:border-gray-700 dark:focus:ring-blue-800 dark:focus:ring-opacity-50 dark:text-black w-96 h-10 p-4'
      /> <br />
      <textarea
        placeholder="Message Body"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className='rounded-sm shadow-sm border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-100 dark:border-gray-700 dark:focus:ring-blue-800 dark:focus:ring-opacity-50 dark:text-black w-96 h-32 p-4'
      /> <br />
      <button onClick={handleSendSms}
      className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
      >Send SMS</button>
      <p>{status}</p>
    </div>
  );
}
