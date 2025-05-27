
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/80 border-t border-gray-800/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Portfolio
            </h3>
            <p className="text-gray-400 max-w-sm">
              Cloud Infrastructure Engineer & DevOps Storyteller passionate about 
              building scalable solutions and sharing knowledge.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                Projects
              </button>
              <button
                onClick={() => document.querySelector('#writing')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                Writing
              </button>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ephraimx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800/50 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-blue-500/20 transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/oghenefejiro-esosuota/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800/50 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-blue-500/20 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:personal.ephraim@gmail.com"
                className="w-10 h-10 bg-gray-800/50 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-blue-500/20 transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center mt-4 md:mt-0">
            Built with <Heart className="mx-1 text-red-500" size={16} /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
