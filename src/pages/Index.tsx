
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Stats from '../components/Stats';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Writing from '../components/Writing';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <Hero />
      <About />
      <Stats />
      <Projects />
      {/* <Testimonials /> */}
      <Writing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
