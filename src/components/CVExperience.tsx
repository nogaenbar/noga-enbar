import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp, ExternalLink, MapPin, Calendar } from "lucide-react";
import { CVData } from "../data/cv-data";

interface CVExperienceProps {
  data: CVData['experience'];
}

export function CVExperience({ data }: CVExperienceProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set([data[0]?.id])); // First item open by default
  const [animatingItems, setAnimatingItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setAnimatingItems(prev => new Set([...prev, id]));
    
    setTimeout(() => {
      const newOpenItems = new Set(openItems);
      if (newOpenItems.has(id)) {
        newOpenItems.delete(id);
      } else {
        newOpenItems.add(id);
      }
      setOpenItems(newOpenItems);
      
      // Remove from animating set after animation completes
      setTimeout(() => {
        setAnimatingItems(prev => {
          const newSet = new Set(prev);
          newSet.delete(id);
          return newSet;
        });
      }, 400);
    }, 50);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
          <Calendar className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Experience</h2>
      </div>

      <div className="relative space-y-6">
        {/* Timeline Line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 opacity-30" />
        
        {data.map((experience, index) => (
          <ExperienceItem 
            key={experience.id} 
            experience={experience} 
            index={index}
            isOpen={openItems.has(experience.id)}
            isAnimating={animatingItems.has(experience.id)}
            onToggle={() => toggleItem(experience.id)}
            isLast={index === data.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

interface ExperienceItemProps {
  experience: CVData['experience'][0];
  index: number;
  isOpen: boolean;
  isAnimating: boolean;
  onToggle: () => void;
  isLast: boolean;
}

function ExperienceItem({ experience, index, isOpen, isAnimating, onToggle, isLast }: ExperienceItemProps) {
  const isActive = experience.isCurrentPosition;
  const contentRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    // Add ripple effect
    if (triggerRef.current) {
      triggerRef.current.classList.add('ripple-active');
      setTimeout(() => {
        triggerRef.current?.classList.remove('ripple-active');
      }, 600);
    }
    
    onToggle();
  };

  return (
    <div className="relative pl-16 group">
      {/* Timeline Dot */}
      <div className="absolute left-0 top-0">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          isActive 
            ? 'bg-gradient-to-r from-purple-500 to-blue-500 scale-110' 
            : 'bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 hover:border-purple-300 dark:hover:border-purple-500'
        }`}>
          {isActive ? (
            <div className="w-4 h-4 bg-white rounded-full" />
          ) : (
            <div className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full transition-colors duration-300 group-hover:bg-purple-400 dark:group-hover:bg-purple-500" />
          )}
        </div>
      </div>

      {/* Experience Card */}
      <div className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl">
        {/* Header - Clickable */}
        <div 
          ref={triggerRef}
          className="accordion-trigger p-8 cursor-pointer select-none"
          onClick={handleClick}
        >
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden flex-shrink-0 border border-gray-100 dark:border-gray-600 transition-all duration-300 group-hover:border-purple-200 dark:group-hover:border-purple-600 group-hover:shadow-md">
              {typeof experience.logo === 'string' ? (
                <img
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full transition-transform duration-300 group-hover:scale-105">
                  <experience.logo />
                </div>
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    {experience.website ? (
                      <a
                        href={experience.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors group/link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {experience.company}
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-all duration-200 transform translate-y-1 group-hover/link:translate-y-0" />
                      </a>
                    ) : (
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">
                        {experience.company}
                      </h3>
                    )}
                    
                    {isActive && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 animate-pulse">
                        Current
                      </span>
                    )}
                  </div>
                  
                  <p className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    {experience.role}
                  </p>
                  
                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1 transition-colors duration-300 hover:text-purple-600 dark:hover:text-purple-400">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.period}</span>
                    </div>
                    <div className="flex items-center gap-1 transition-colors duration-300 hover:text-purple-600 dark:hover:text-purple-400">
                      <MapPin className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-gray-400 dark:text-gray-500 shrink-0 transition-all duration-300">
                  <div className={`chevron-icon ${isOpen ? 'rotated' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expandable Content */}
        <div 
          ref={contentRef}
          className={`accordion-content transition-all duration-400 ease-out ${
            isOpen 
              ? 'max-h-[1000px] opacity-100' 
              : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="px-8 pb-8 pt-0 border-t border-gray-100 dark:border-gray-700">
            <div className="space-y-4 mt-6">
              {experience.description.map((desc, idx) => (
                <div 
                  key={idx} 
                  className={`flex gap-3 ${isOpen ? 'animate-stagger-fade-in' : ''} content-stagger-${idx + 1}`}
                  style={{ 
                    animationDelay: isOpen ? `${idx * 100 + 200}ms` : '0ms',
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mt-2 flex-shrink-0 transition-all duration-300 hover:scale-125 hover:shadow-lg" />
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300 hover:text-gray-900 dark:hover:text-gray-100">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}