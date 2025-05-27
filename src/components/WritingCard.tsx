
import { Calendar, ArrowRight } from 'lucide-react';

interface WritingCardProps {
  title: string;
  description: string;
  platform: string;
  publishDate: string;
  tags: string[];
  url: string;
  readTime?: string;
}

const WritingCard = ({ title, description, platform, publishDate, tags, url, readTime }: WritingCardProps) => {
  return (
    <article className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Calendar size={16} />
            <span>{publishDate}</span>
            {readTime && (
              <>
                <span>•</span>
                <span>{readTime}</span>
              </>
            )}
          </div>
          <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 rounded-full text-xs font-semibold border border-blue-500/30">
            {platform}
          </span>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-300 leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-md text-xs hover:bg-gray-600/50 transition-colors duration-200"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="pt-4">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group-hover:underline transition-colors duration-200"
          >
            Read Article
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={16} />
          </a>
        </div>
      </div>
    </article>
  );
};

export default WritingCard;
