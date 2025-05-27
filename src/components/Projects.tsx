import { ArrowRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Projects = () => {
  const projects = [
    {
      title: 'Multi-Cloud Kubernetes Platform',
      description: 'Designed and implemented a multi-cloud Kubernetes platform using Terraform, enabling seamless workload deployment across AWS, Azure, and GCP with automated failover and cost optimization.',
      techStack: ['Kubernetes', 'Terraform', 'AWS', 'Azure', 'GCP', 'Helm', 'Istio'],
      githubUrl: 'https://github.com/username/k8s-multicloud',
      demoUrl: 'https://demo.example.com',
      featured: true,
      metrics: { deploymentTime: '75%', uptime: '99.9%', costSaving: '40%' }
    },
    {
      title: 'CI/CD Pipeline Automation',
      description: 'Built a comprehensive CI/CD pipeline using GitHub Actions and Jenkins, reducing deployment time by 75% and implementing automated security scanning and compliance checks.',
      techStack: ['GitHub Actions', 'Jenkins', 'Docker', 'SonarQube', 'Trivy', 'ArgoCD'],
      githubUrl: 'https://github.com/username/cicd-automation',
      metrics: { deploymentTime: '75%', securityScore: '95%', efficiency: '80%' }
    },
    {
      title: 'Infrastructure Monitoring Stack',
      description: 'Deployed a complete observability solution using Prometheus, Grafana, and ELK stack with custom dashboards and alerting rules for proactive incident management.',
      techStack: ['Prometheus', 'Grafana', 'Elasticsearch', 'Logstash', 'Kibana', 'AlertManager'],
      githubUrl: 'https://github.com/username/monitoring-stack',
      metrics: { mttr: '60%', visibility: '100%', alerts: '90%' }
    },
    {
      title: 'Serverless Data Pipeline',
      description: 'Architected a serverless data processing pipeline on AWS using Lambda, Step Functions, and EventBridge to handle millions of events daily with auto-scaling and cost efficiency.',
      techStack: ['AWS Lambda', 'Step Functions', 'EventBridge', 'DynamoDB', 'S3', 'Python'],
      githubUrl: 'https://github.com/username/serverless-pipeline',
      featured: true,
      metrics: { events: '10M/day', costSaving: '60%', latency: '50ms' }
    },
    {
      title: 'GitOps Configuration Management',
      description: 'Implemented GitOps methodology using ArgoCD and Flux for declarative configuration management across multiple environments with automated reconciliation.',
      techStack: ['ArgoCD', 'Flux', 'Kustomize', 'Git', 'Kubernetes', 'Helm'],
      githubUrl: 'https://github.com/username/gitops-config',
      metrics: { deployments: '100+', environments: '5', reliability: '99.5%' }
    },
    {
      title: 'Cloud Cost Optimization Tool',
      description: 'Developed a Python-based tool for analyzing and optimizing cloud costs across multiple accounts, resulting in 40% cost reduction through automated recommendations.',
      techStack: ['Python', 'AWS Cost Explorer', 'Boto3', 'Pandas', 'FastAPI', 'React'],
      githubUrl: 'https://github.com/username/cost-optimizer',
      metrics: { costSaving: '40%', accounts: '50+', recommendations: '200+' }
    },
  ];

  const { elementRef, isIntersecting } = useIntersectionObserver();

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of cloud infrastructure projects, DevOps implementations, and automation solutions 
            that demonstrate expertise in modern cloud-native technologies.
          </p>
        </div>

        <div ref={elementRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`transition-all duration-700 ${
                isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                transitionProperty: 'opacity, transform'
              }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 border-2 border-blue-500/50 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 backdrop-blur-sm group"
          >
            View More on GitHub
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
