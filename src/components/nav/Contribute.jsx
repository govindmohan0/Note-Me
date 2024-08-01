// Contribute.js
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useLoading } from '../Loading/LoadingContext'; // Correct import
import Study from '../../assets/Contact.json';
import Example from '../Example';
import HashLoader from 'react-spinners/HashLoader';

const Contribute = ({ title }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const { loading, setLoading } = useLoading(); // Correct usage

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = 'service_cqs4c0o';
    const templateId = 'template_uexj8wh';
    const publicKey = 'Ajcc9kYr73ReTCeSr';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Web Wizard',
      message: message,
    };

    try {
      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log('Email sent successfully!', response);
      setStatus('Success! Your message has been sent.');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('Error! There was a problem sending your message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contribute-container flex justify-center items-center min-h-screen bg-gray-100">
      <div className="form-container bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
        {loading && (
          <div className="absolute inset-0 bg-white bg-opacity-75 flex justify-center items-center">
            <HashLoader color="#4A90E2" />
          </div>
        )}
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="message">Message</label>
            <textarea
              id="message"
              cols="30"
              rows="5"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
            >
              Send Email
            </button>
          </div>
          {status && (
            <div className={`mt-4 p-2 rounded-lg ${status.startsWith('Success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {status}
            </div>
          )}
        </form>
      </div>
      <div className="animation-container">
        <Example animationData={Study} />
      </div>
    </div>
  );
};

export default Contribute;
