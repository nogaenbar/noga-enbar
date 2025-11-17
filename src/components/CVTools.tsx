import React from 'react';
import { Wrench, Search, Zap, Settings } from "lucide-react";
import { CVData } from "../data/cv-data";

interface CVToolsProps {
  data: CVData['tools'];
}

export function CVTools({ data }: CVToolsProps) {
  const categories = {
    design: { icon: <Wrench className="w-5 h-5" />, label: "Design", color: "purple" },
    research: { icon: <Search className="w-5 h-5" />, label: "Research", color: "blue" },
    ai: { icon: <Zap className="w-5 h-5" />, label: "AI Tools", color: "green" },
    management: { icon: <Settings className="w-5 h-5" />, label: "Management", color: "orange" }
  } as const;

  const groupedTools = data.reduce((acc, tool) => {
    if (!acc[tool.category]) acc[tool.category] = [];
    acc[tool.category].push(tool);
    return acc;
  }, {} as Record<string, CVData['tools']>);

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
          <Wrench className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Tools & Expertise</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((tool, index) => (
          <ToolCard key={`${tool.name}-${index}`} tool={tool} index={index} />
        ))}
      </div>
    </div>
  );
}

interface ToolCardProps {
  tool: CVData['tools'][0];
  index: number;
}

function ToolCard({ tool, index }: ToolCardProps) {
  const renderLogo = () => {
    try {
      // Handle string URLs (imported images)
      if (typeof tool.logo === 'string' && tool.logo) {
        return (
          <img
            src={tool.logo}
            alt={`${tool.name} logo`}
            className="w-10 h-10 object-contain"
            onError={(e) => {
              console.error(`Failed to load logo for ${tool.name}:`, tool.logo);
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        );
      } 
      // Handle React components
      else if (tool.logo && typeof tool.logo !== 'string') {
        const LogoComponent = tool.logo as React.ComponentType;
        return (
          <div className="w-10 h-10 flex items-center justify-center">
            <LogoComponent />
          </div>
        );
      }
      // Fallback for empty or missing logos
      else {
        return (
          <div className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-600 rounded">
            <span className="text-xs text-gray-500">{tool.name.charAt(0)}</span>
          </div>
        );
      }
    } catch (error) {
      console.error(`Error rendering logo for ${tool.name}:`, error);
      return (
        <div className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-600 rounded">
          <span className="text-xs text-gray-500">Logo</span>
        </div>
      );
    }
  };

  return (
    <div 
      className="group bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-default"
      style={{
        animationDelay: `${index * 100}ms`,
        animation: 'fadeInUp 0.6s ease-out forwards'
      }}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 flex items-center justify-center bg-gray-50 dark:bg-gray-700 rounded-xl group-hover:bg-gray-100 dark:group-hover:bg-gray-600 transition-colors overflow-hidden">
          {renderLogo()}
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white text-lg">{tool.name}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{tool.description}</p>
        </div>
      </div>
    </div>
  );
}