import { GraduationCap } from "lucide-react";
import { CVData } from "../data/cv-data";

interface CVEducationProps {
  data: CVData['education'];
}

export function CVEducation({ data }: CVEducationProps) {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
          <GraduationCap className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Education</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((education, index) => (
          <EducationCard 
            key={`${education.institution}-${education.period}`}
            education={education}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

interface EducationCardProps {
  education: CVData['education'][0];
  index: number;
}

function EducationCard({ education, index }: EducationCardProps) {
  return (
    <div 
      className="bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
      style={{
        animationDelay: `${index * 100}ms`,
        animation: 'fadeInUp 0.6s ease-out forwards'
      }}
    >
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 bg-gray-50 dark:bg-gray-700 rounded-xl p-2 flex-shrink-0 border border-gray-200 dark:border-gray-600 group-hover:border-purple-300 dark:group-hover:border-purple-500 transition-colors">
          <img
            src={education.logo}
            alt={`${education.institution} logo`}
            className="w-full h-full object-contain"
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-gray-900 dark:text-white text-base">{education.institution}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{education.degree}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{education.period}</p>
        </div>
      </div>
    </div>
  );
}