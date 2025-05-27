
import WritingCard from './WritingCard';

const Writing = () => {
  const articles = [
    {
      title: 'Building Resilient Kubernetes Clusters: A Production Guide',
      description: 'A comprehensive guide to designing and implementing highly available Kubernetes clusters with automated disaster recovery, monitoring, and security best practices.',
      platform: 'Medium',
      publishDate: 'March 15, 2024',
      readTime: '12 min read',
      tags: ['Kubernetes', 'DevOps', 'High-Availability', 'Production'],
      url: 'https://medium.com/@example/kubernetes-resilient-clusters'
    },
    {
      title: 'Infrastructure as Code: Terraform vs CloudFormation in 2024',
      description: 'An in-depth comparison of Terraform and AWS CloudFormation, covering syntax, state management, modularity, and real-world use cases.',
      platform: 'Dev.to',
      publishDate: 'February 28, 2024',
      readTime: '8 min read',
      tags: ['IaC', 'Terraform', 'CloudFormation', 'AWS'],
      url: 'https://dev.to/example/terraform-vs-cloudformation-2024'
    },
    {
      title: 'Zero-Downtime Deployments with Blue-Green Strategy',
      description: 'Learn how to implement blue-green deployments using AWS ECS, Application Load Balancer, and CodeDeploy for seamless application updates.',
      platform: 'HashiCorp Blog',
      publishDate: 'February 10, 2024',
      readTime: '10 min read',
      tags: ['CI/CD', 'AWS', 'ECS', 'Blue-Green', 'Deployment'],
      url: 'https://hashicorp.com/blog/zero-downtime-deployments'
    },
    {
      title: 'Monitoring Microservices: Observability Patterns and Tools',
      description: 'Explore distributed tracing, metrics collection, and log aggregation patterns for microservices using Prometheus, Jaeger, and Grafana.',
      platform: 'CNCF Blog',
      publishDate: 'January 22, 2024',
      readTime: '15 min read',
      tags: ['Microservices', 'Observability', 'Prometheus', 'Grafana', 'Tracing'],
      url: 'https://cncf.io/blog/microservices-observability'
    },
    {
      title: 'Cost Optimization Strategies for Multi-Cloud Environments',
      description: 'Practical approaches to reducing cloud costs across AWS, Azure, and GCP through resource right-sizing, reserved instances, and automation.',
      platform: 'Cloud Native Computing',
      publishDate: 'January 8, 2024',
      readTime: '11 min read',
      tags: ['Cost-Optimization', 'Multi-Cloud', 'FinOps', 'Automation'],
      url: 'https://cloudnative.com/cost-optimization-strategies'
    },
    {
      title: 'Securing Container Images: Best Practices and Tools',
      description: 'A security-focused guide covering container image scanning, vulnerability management, and implementing security policies in CI/CD pipelines.',
      platform: 'Security Weekly',
      publishDate: 'December 15, 2023',
      readTime: '9 min read',
      tags: ['Security', 'Containers', 'Docker', 'Scanning', 'CI/CD'],
      url: 'https://securityweekly.com/container-image-security'
    }
  ];

  return (
    <section id="writing" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Writing
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Sharing knowledge and insights about cloud infrastructure, DevOps practices, and emerging technologies 
            through detailed tutorials and thought leadership articles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={article.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <WritingCard {...article} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://medium.com/@example"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border-2 border-blue-500/50 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 backdrop-blur-sm"
            >
              More on Medium
            </a>
            <a
              href="https://dev.to/example"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm"
            >
              More on Dev.to
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Writing;
