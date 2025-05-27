
import SkillProgressBar from './SkillProgressBar';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About = () => {
  const skillsWithProgress = [
    { category: 'Cloud Platforms', skills: [
      { name: 'AWS', percentage: 95 },
      { name: 'Azure', percentage: 85 },
      { name: 'GCP', percentage: 80 },
      { name: 'Digital Ocean', percentage: 90 }
    ]},
    { category: 'Infrastructure as Code', skills: [
      { name: 'Terraform', percentage: 95 },
      { name: 'CloudFormation', percentage: 90 },
      { name: 'Pulumi', percentage: 75 },
      { name: 'Ansible', percentage: 85 }
    ]},
    { category: 'Containers & Orchestration', skills: [
      { name: 'Docker', percentage: 95 },
      { name: 'Kubernetes', percentage: 90 },
      { name: 'ECS', percentage: 85 },
      { name: 'EKS', percentage: 88 }
    ]},
    { category: 'CI/CD & Automation', skills: [
      { name: 'GitHub Actions', percentage: 92 },
      { name: 'Jenkins', percentage: 85 },
      { name: 'GitLab CI', percentage: 80 },
      { name: 'CircleCI', percentage: 75 }
    ]},
    { category: 'Monitoring & Observability', skills: [
      { name: 'Prometheus', percentage: 90 },
      { name: 'Grafana', percentage: 88 },
      { name: 'ELK Stack', percentage: 85 },
      { name: 'DataDog', percentage: 80 }
    ]},
    { category: 'Programming', skills: [
      { name: 'Python', percentage: 90 },
      { name: 'Go', percentage: 80 },
      { name: 'Bash', percentage: 95 },
      { name: 'TypeScript', percentage: 85 }
    ]}
  ];

  const { elementRef, isIntersecting } = useIntersectionObserver();

  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Text with enhanced animations */}
          <div className="space-y-6">
            <div 
              className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-xl transition-all duration-700 ${
                isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a passionate Cloud Infrastructure Engineer with 5+ years of experience building 
                  and scaling cloud-native solutions. My expertise spans across modern DevOps practices, 
                  infrastructure automation, and container orchestration.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Beyond engineering, I'm deeply committed to technical writing and knowledge sharing. 
                  I believe in making complex cloud concepts accessible through clear documentation, 
                  tutorials, and thought leadership articles.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  When I'm not architecting cloud solutions or writing about them, you'll find me 
                  contributing to open-source projects, experimenting with emerging technologies, 
                  and mentoring aspiring DevOps engineers.
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Skills with Progress Bars */}
          <div ref={elementRef} className="space-y-6">
            <h3 
              className={`text-2xl font-bold text-white mb-8 transition-all duration-700 ${
                isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              Technical Expertise
            </h3>
            <div className="grid gap-6">
              {skillsWithProgress.map((skillGroup, groupIndex) => (
                <div
                  key={skillGroup.category}
                  className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 ${
                    isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}
                  style={{ 
                    transitionDelay: `${groupIndex * 100}ms`,
                    transitionProperty: 'opacity, transform'
                  }}
                >
                  <h4 className="text-blue-400 font-semibold mb-4 text-sm uppercase tracking-wide">
                    {skillGroup.category}
                  </h4>
                  <div className="space-y-4">
                    {skillGroup.skills.map((skill) => (
                      <SkillProgressBar
                        key={skill.name}
                        skill={skill.name}
                        percentage={skill.percentage}
                        category={skillGroup.category}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
