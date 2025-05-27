
import { Star } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Senior DevOps Engineer",
      company: "TechCorp Inc.",
      content: "Exceptional cloud architecture skills and deep understanding of modern DevOps practices. Their infrastructure designs are both elegant and highly scalable.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "CloudStart",
      content: "Outstanding technical writing ability. Complex cloud concepts become crystal clear through their documentation and tutorials.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Platform Engineer",
      company: "ScaleUp Co.",
      content: "Incredible mentorship and knowledge sharing. Their guidance helped our team implement best practices that reduced our infrastructure costs by 40%.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const { elementRef, isIntersecting } = useIntersectionObserver();

  return (
    <section className="py-20 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              What People Say
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Feedback from colleagues, mentees, and industry professionals
          </p>
        </div>

        <div ref={elementRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                transitionProperty: 'opacity, transform'
              }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                  <div className="text-xs text-blue-400">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
