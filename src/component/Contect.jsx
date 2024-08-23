// ContactUs.js
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(null);

    // Simulate a form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-24">
      <h1 className="text-3xl font-thin text-center text-gray-800 mb-8">Contact Us</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-thin text-gray-700 mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-thin text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-thin text-gray-700 mb-1">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-thin text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-pink-300 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {isSubmitting ? 'Submitting...' : 'Send Message'}
            </button>
            {submitSuccess && (
              <p className="text-green-500">Your message has been sent successfully!</p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
