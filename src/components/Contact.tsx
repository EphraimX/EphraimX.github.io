
import { Mail, Github, Linkedin, Download, MapPin, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Button } from 'react-day-picker';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const { elementRef, isIntersecting } = useIntersectionObserver();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a conversation about cloud infrastructure and DevOps.
          </p>
        </div>

        <div ref={elementRef} className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div 
            className={`space-y-6 transition-all duration-700 ${
              isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              
              <div className="space-y-4">
                {[
                  { icon: Mail, label: 'Email', value: 'personal.ephraim[at]gmail.com', href: 'mailto:personal.ephraim@gmail.com' },
                  { icon: Github, label: 'GitHub', value: 'github.com/ephraimx', href: 'https://github.com/ephraimx' },
                  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/oghenefejiro-esosuota', href: 'https://linkedin.com/in/oghenefejiro-esosuota' },
                  // { icon: MapPin, label: 'Location', value: 'San Francisco, CA', href: null }
                ].map((item, index) => (
                  <div 
                    key={item.label}
                    className="flex items-center space-x-4 group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                      <item.icon className="text-blue-400" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{item.label}</p>
                      {item.href ? (
                        <a 
                          href={item.href}
                          target={item.href.startsWith('mailto:') ? undefined : "_blank"}
                          rel={item.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                          className="text-white hover:text-blue-400 transition-colors duration-200"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-700/50 flex justify-center">
                <a
                  href="https://docs.google.com/document/d/1R0jixsNOhF2NPbUjErwYOUmpx8hUAyu9Ejy_-uPCfgg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="mr-2" size={20} />
                  View Resume
                </a>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          {/* <div 
            className={`transition-all duration-700 ${
              isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center">
                  <CheckCircle className="text-green-400 mr-3" size={20} />
                  <span className="text-green-300">Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
                      errors.name ? 'border-red-500' : 'border-gray-600/50'
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
                      errors.email ? 'border-red-500' : 'border-gray-600/50'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
                      errors.subject ? 'border-red-500' : 'border-gray-600/50'
                    }`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && <p className="mt-1 text-sm text-red-400">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-600/50'
                    }`}
                    placeholder="Your message..."
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
