
import { Github, ArrowRight, TrendingUp } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
  metrics?: Record<string, string>;
}

const ProjectCard = ({ title, description, techStack, githubUrl, demoUrl, featured = false, metrics }: ProjectCardProps) => {
  return (
    <div className={`group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 ${featured ? 'ring-2 ring-blue-500/30' : ''}`}>
      {featured && (
        <div className="absolute -top-3 left-6">
          <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
            Featured
          </span>
        </div>
      )}
      
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>
          <div className="flex space-x-2">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12 p-2 rounded-full hover:bg-blue-500/10"
            >
              <Github size={20} />
            </a>
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12 p-2 rounded-full hover:bg-blue-500/10"
              >
                <ArrowRight size={20} />
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-300 leading-relaxed line-clamp-3">
          {description}
        </p>

        {metrics && (
          <div className="grid grid-cols-2 gap-2 py-3 border-t border-gray-700/50">
            {Object.entries(metrics).slice(0, 2).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="flex items-center justify-center text-green-400 mb-1">
                  <TrendingUp size={14} className="mr-1" />
                  <span className="font-bold text-sm">{value}</span>
                </div>
                <div className="text-xs text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 hover:bg-blue-500/30 hover:scale-105 transition-all duration-200"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
