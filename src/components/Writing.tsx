
import WritingCard from './WritingCard';

const Writing = () => {
  const articles = [
    {
      title: 'How to Build Transactional Password Reset Email Workflows',
      description: 'A step-by-step developer guide to designing reliable and secure password reset email flows with Mailgun’s APIs.',
      platform: 'Mailgun Blog',
      publishDate: 'April 25, 2025',
      readTime: '9 min read',
      tags: ['Email', 'Workflow', 'APIs', 'Security', 'Dev Life'],
      url: 'https://www.mailgun.com/blog/dev-life/how-to-build-transactional-password-reset-email-workflows/'
    },
    {
      title: 'The Importance of Model Versioning in Machine Learning',
      description: 'A practical look at why and how to implement version control for machine learning models in modern AI workflows.',
      platform: 'Openlayer Blog',
      publishDate: 'March 14, 2023',
      readTime: '7 min read',
      tags: ['Machine Learning', 'MLOps', 'Versioning', 'AI'],
      url: 'https://www.openlayer.com/blog/post/the-importance-of-model-versioning-in-machine-learning'
    },
    {
      title: 'Finscope 2023 Interactive Report Launch',
      description: 'Developed the frontend and backend for the interactive data platform powering Finscope’s financial access survey insights.',
      platform: 'DataProducts',
      publishDate: 'November 14, 2023',
      readTime: '6 min read',
      tags: ['Data Visualization', 'Django', 'React', 'Research'],
      url: 'https://dataproducts.io/finscope-report/'
    },
    {
      title: 'How to Deploy a Python Backend to Fly.io Using GitHub Actions',
      description: 'A complete walkthrough on containerizing and deploying a Python app to Fly.io with GitHub Actions for automated CI/CD.',
      platform: 'Dev.to',
      publishDate: 'May 2025',
      readTime: '10 min read',
      tags: ['CI/CD', 'GitHub Actions', 'Fly.io', 'Python'],
      url: 'https://dev.to/ephraimx/how-to-set-up-cicd-for-a-python-backend-application-on-flyio-using-github-actions-1f09'
    },
    {
      title: 'How to Deploy a Frontend App to Vercel Using GitHub Actions',
      description: 'Learn how to set up a Jenkins pipeline to automate the deployment of a frontend TypeScript app to Vercel.',
      platform: 'Dev.to',
      publishDate: 'May 2025',
      readTime: '9 min read',
      tags: ['CI/CD', 'Jenkins', 'Vercel', 'Frontend', 'TypeScript'],
      url: 'https://dev.to/ephraimx/a-practical-guide-to-deploying-frontend-apps-on-vercel-using-github-actions-3pf4'
    },
    {
      title: 'How to Deploy a Python Backend to Fly.io Using GitLab CI/CD',
      description: 'Step-by-step guide on using GitLab CI/CD to build and deploy a Dockerized Python backend application to Fly.io.',
      platform: 'Dev.to',
      publishDate: 'May 2025',
      readTime: '9 min read',
      tags: ['CI/CD', 'GitLab', 'Python', 'Fly.io', 'DevOps'],
      url: 'https://dev.to/ephraimx/how-to-automate-python-backend-deployments-to-flyio-with-gitlab-cicd-3ekf'
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
            {/* <a
              href="https://medium.com/@example"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border-2 border-blue-500/50 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 backdrop-blur-sm"
            >
              More on Medium
            </a> */}
            <a
              href="https://dev.to/ephraimx"
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
