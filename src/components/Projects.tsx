import { ArrowRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Projects = () => {
    const projects = [
      {
        title: 'Glowberry Global Tax Simulator (Full Stack CI/CD Deployment)',
        description: 'Built and deployed a full-stack global tax structure simulator with Docker Compose using GitHub Actions, GitLab CI/CD, Jenkins, CircleCI, Terraform, and Pulumi. Each CI/CD and IaC tool was implemented and documented as a separate pipeline.',
        techStack: ['Docker Compose', 'GitHub Actions', 'GitLab CI/CD', 'Jenkins', 'CircleCI', 'Terraform', 'Pulumi'],
        githubUrl: 'https://github.com/EphraimX/glowberry-global-tax-structure-simulator-project-series',
        featured: true,
        metrics: { toolsIntegrated: '6', pipelinesBuilt: '12+', deployTargets: 'Koyeb, Fly.io, Vercel' }
      },
      {
        title: 'CI/CD Pipeline for Python Backend on Fly.io (GitHub Actions)',
        description: 'Set up a CI/CD workflow for a Python backend on Fly.io using GitHub Actions. Focused on automated testing, Docker-based builds, and seamless deployment to production.',
        techStack: ['Python', 'GitHub Actions', 'Fly.io', 'Docker'],
        githubUrl: 'https://github.com/EphraimX/blbjzl-ai-accountability-application-github-actions',
        metrics: { deploymentTime: 'Shortened by 70%', manualSteps: '0', toolCount: '4' }
      },
      {
        title: 'Frontend Deployment to Vercel (GitHub Actions)',
        description: 'Configured GitHub Actions to deploy a TypeScript-based frontend app to Vercel with build caching and preview deployments on PRs.',
        techStack: ['TypeScript', 'Vercel', 'GitHub Actions'],
        githubUrl: 'https://github.com/EphraimX/blbjzl-ai-accountability-application-github-actions',
        metrics: { previewDeploys: '100%', zeroDowntime: true }
      },
      {
        title: 'CI/CD Pipeline for Python Backend on Fly.io (Jenkins)',
        description: 'Built a Jenkins pipeline to deploy a Python backend app to Fly.io using Docker. The pipeline includes build, test, and deployment stages.',
        techStack: ['Python', 'Jenkins', 'Fly.io', 'Docker'],
        githubUrl: 'https://github.com/EphraimX/blbjzl-ai-accountability-application-jenkins',
        metrics: { deploymentAutomation: '100%', repeatability: 'High' }
      },
      {
        title: 'Vercel Frontend CI/CD with GitLab CI/CD',
        description: 'Set up a GitLab CI/CD pipeline for deploying a frontend app to Vercel. It includes linting, build checks, and production deploys triggered on merge.',
        techStack: ['GitLab CI/CD', 'TypeScript', 'Vercel'],
        githubUrl: 'https://gitlab.com/ephraimx/blbjzl-ai-accountability-application/-/tree/main/frontend',
        metrics: { pipelineSpeed: 'Fast', DX: 'Improved for contributors' }
      },
      {
        title: 'Deploying Python Backend to Fly.io with GitLab CI/CD',
        description: 'Implemented a CI/CD pipeline using GitLab CI/CD to build and deploy a Python backend application to Fly.io, featuring Dockerized builds and environment-specific deploy stages.',
        techStack: ['GitLab CI/CD', 'Docker', 'Fly.io', 'Python', 'CI/CD'],
        githubUrl: 'https://gitlab.com/ephraimx/blbjzl-ai-accountability-application/-/tree/main/backend',
        featured: true,
        metrics: { deploymentTime: '6 mins', stages: '3', successRate: '100%' }
      }
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
