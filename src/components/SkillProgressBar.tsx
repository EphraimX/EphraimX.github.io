
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface SkillProgressBarProps {
  skill: string;
  percentage: number;
  category: string;
}

const SkillProgressBar = ({ skill, percentage, category }: SkillProgressBarProps) => {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  return (
    <div ref={elementRef} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-300">{skill}</span>
        <span className="text-xs text-blue-400">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isIntersecting ? `${percentage}%` : '0%',
            transitionDelay: '200ms'
          }}
        />
      </div>
    </div>
  );
};

export default SkillProgressBar;
