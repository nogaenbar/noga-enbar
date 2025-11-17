import { useState, useEffect } from 'react';
import { Moon, Sun, Download, Mail, Menu } from 'lucide-react';
import { CVHeader } from './components/CVHeader';
import { CVSkills } from './components/CVSkills';
import { CVExperience } from './components/CVExperience';
import { CVTools } from './components/CVTools';
import { CVEducation } from './components/CVEducation';
import { cvData } from './data/cv-data';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Check for saved dark mode preference
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add('dark');
    }
    
    // Simulate loading for smooth entrance animations
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
    document.documentElement.classList.toggle('dark', newMode);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-900 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
            <span className="text-white text-2xl">✨</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 font-medium">Loading CV...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900' 
        : 'bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50'
    }`}>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-6 left-6 z-50 lg:hidden w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
      >
        <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
      </button>

      {/* Floating Action Buttons */}
      <div className="fixed top-6 right-6 z-50 flex flex-col gap-3">
        <button
          onClick={toggleDarkMode}
          className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-yellow-500" />
          ) : (
            <Moon className="w-5 h-5 text-gray-700" />
          )}
        </button>
        
        <button
          onClick={() => window.print()}
          className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        >
          <Download className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        </button>
        
        <a
          href={`mailto:${cvData.personal.contact.email}`}
          className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        >
          <Mail className="w-5 h-5 text-white" />
        </a>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className={`
          fixed lg:relative top-0 left-0 h-full w-80 lg:w-96
          transform transition-transform duration-300 ease-in-out z-40
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="h-full overflow-y-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-r border-gray-200 dark:border-gray-700">
            <div className="p-8 lg:p-10 space-y-8">
              <CVHeader data={cvData.personal} />
              
              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />
              
              <CVSkills data={cvData.skills} />
            </div>
          </div>
        </div>

        {/* Mobile Overlay */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 min-h-screen overflow-hidden">
          <div className="h-full overflow-y-auto">
            <div className="max-w-6xl mx-auto p-8 lg:p-12 space-y-16">
              <div className="animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                <CVExperience data={cvData.experience} />
              </div>
              
              <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                <CVTools data={cvData.tools} />
              </div>
              
              <div className="animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
                <CVEducation data={cvData.education} />
              </div>

              {/* Footer */}
              <footer className="text-center py-8 text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm">
                  © 2025 {cvData.personal.name} • Built with React & Tailwind CSS • Let's Work Together!
                </p>
                <div className="mt-4 flex justify-center gap-6">
                  <a href={cvData.personal.socials.linkedin.url} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    LinkedIn
                  </a>
                  <a href={cvData.personal.socials.instagram.url} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    Instagram
                  </a>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}