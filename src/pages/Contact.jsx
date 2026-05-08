import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I&apos;d love to hear from you! Whether you have a question, feedback, or want to collaborate, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✉</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Send a Message</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                >
                  {submitted ? 'Message Sent!' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white">✉</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600">imanshuaibu1@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white">📱</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Phone</p>
                    <p className="text-gray-600">+2349036674477</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Location</p>
                    <p className="text-gray-600">Abuja, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Connect With Me</h2>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Resume Download */}
            <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
              <h3 className="text-xl font-bold mb-4">Download My Resume</h3>
              <p className="mb-6 opacity-90">
                Get a detailed overview of my experience and skills
              </p>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;