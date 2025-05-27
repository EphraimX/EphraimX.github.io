
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useParallax } from '../hooks/useParallax';

const Hero = () => {
  const parallaxY = useParallax(0.3);
  
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Animated Background with Parallax */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900"
        style={{ transform: `translateY(${parallaxY}px)` }}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23%233B82F6%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Main Heading with enhanced animations */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span 
                className="bg-gradient-to-r from-white via-blue-100 to-cyan-400 bg-clip-text text-transparent animate-fade-in block"
                style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
              >
                Cloud Infrastructure
              </span>
              <span 
                className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in block"
                style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
              >
                Engineer
              </span>
            </h1>
            <p 
              className="text-xl md:text-2xl text-gray-300 font-light animate-fade-in"
              style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
            >
              & DevOps Storyteller
            </p>
          </div>

          {/* Tagline */}
          <div 
            className="max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
          >
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Building scalable cloud infrastructure and translating complex technical concepts 
              into clear, actionable insights through code and words.
            </p>
          </div>

          {/* CTA Buttons with enhanced hover effects */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in"
            style={{ animationDelay: '1.0s', animationFillMode: 'both' }}
          >
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 relative overflow-hidden"
            >
              <span className="relative z-10">View Projects</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200 inline-block relative z-10">→</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={() => document.querySelector('#writing')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 border-2 border-blue-500/50 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
            >
              <span className="relative z-10">Read Writing</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200 inline-block relative z-10">→</span>
            </button>
          </div>

          {/* Social Links with staggered animations */}
          <div 
            className="flex justify-center space-x-6 pt-8 animate-fade-in"
            style={{ animationDelay: '1.2s', animationFillMode: 'both' }}
          >
            {[
              { icon: Github, href: "https://github.com", delay: '0ms' },
              { icon: Linkedin, href: "https://linkedin.com", delay: '100ms' },
              { icon: Mail, href: "mailto:contact@example.com", delay: '200ms' }
            ].map(({ icon: Icon, href, delay }, index) => (
              <a
                key={index}
                href={href}
                target={href.startsWith('mailto:') ? undefined : "_blank"}
                rel={href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12 p-2 rounded-full hover:bg-blue-500/10"
                style={{ transitionDelay: delay }}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-blue-400 transition-colors duration-300 animate-bounce hover:animate-pulse"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
