import { Palette, Code2 } from "lucide-react";
import { CVData } from "../data/cv-data";

interface CVSkillsProps {
  data: CVData['skills'];
}

export function CVSkills({ data }: CVSkillsProps) {
  return (
    <div className="space-y-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-white text-xl">🎯</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Skills</h2>
      </div>
      
      <div className="space-y-8">
        {/* Design Skills */}
        <SkillCategory
          icon={<Palette className="w-5 h-5 text-purple-500" />}
          title="Design"
          skills={data.design}
          color="purple"
        />
        
        {/* Development Skills */}
        <SkillCategory
          icon={<Code2 className="w-5 h-5 text-blue-500" />}
          title="Development"
          skills={data.development}
          color="blue"
        />
      </div>
    </div>
  );
}

interface SkillCategoryProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  color: 'purple' | 'blue';
}

function SkillCategory({ icon, title, skills, color }: SkillCategoryProps) {
  const colorClasses = {
    purple: {
      bg: 'bg-purple-50 dark:bg-purple-900/20',
      text: 'text-purple-600 dark:text-purple-400',
      badge: 'bg-purple-100 dark:bg-purple-800/50 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800/70',
      border: 'border-purple-200 dark:border-purple-700'
    },
    blue: {
      bg: 'bg-blue-50 dark:bg-blue-900/20', 
      text: 'text-blue-600 dark:text-blue-400',
      badge: 'bg-blue-100 dark:bg-blue-800/50 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800/70',
      border: 'border-blue-200 dark:border-blue-700'
    }
  };

  const colors = colorClasses[color];

  return (
    <div className={`p-6 ${colors.bg} rounded-xl border ${colors.border} transition-all duration-300`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center shadow-sm">
          {icon}
        </div>
        <h3 className={`text-lg font-semibold ${colors.text}`}>{title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <SkillBadge 
            key={index} 
            skill={skill} 
            className={colors.badge}
            delay={index * 50}
          />
        ))}
      </div>
    </div>
  );
}

interface SkillBadgeProps {
  skill: string;
  className: string;
  delay: number;
}

function SkillBadge({ skill, className, delay }: SkillBadgeProps) {
  return (
    <span 
      className={`inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-default hover:scale-105 ${className}`}
      style={{
        animationDelay: `${delay}ms`,
        animation: 'fadeInUp 0.6s ease-out forwards'
      }}
    >
      {skill}
    </span>
  );
}