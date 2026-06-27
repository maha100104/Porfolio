'use client';

import { useState, useEffect } from 'react';

interface Project {
  title: string;
  description: string;
  githubUrl: string;
  icon: string;
}

const projects: Project[] = [
  {
    title: 'E-commerce Website',
    description: 'Full-featured e-commerce platform with shopping cart, user authentication, and payment integration',
    githubUrl: 'https://github.com/maha100104/PupCart-E-CommerceWebsite',
    icon: '🛒'
  },
  {
    title: 'Travel Website',
    description: 'Modern travel booking platform with destination search, booking management, and travel guides',
    githubUrl: 'https://github.com/maha100104/TravelWebsite',
    icon: '✈️'
  },
  {
    title: 'Digital Clock',
    description: 'Elegant digital clock application with multiple time zones, alarms, and customizable themes',
    githubUrl: 'https://github.com/maha100104/DigitalClock',
    icon: '⏰'
  }
];

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingLink, setLoadingLink] = useState<string | null>(null);

  const handleOpenModal = () => {
    setIsLoading(true);
    setIsOpen(true);
    setIsLoading(false);
  };

  const handleLinkClick = (url: string) => {
    setLoadingLink(url);
    window.open(url, '_blank');
    setLoadingLink(null);
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Modal Trigger Button - This will be used in the main page */}
      <button
        onClick={handleOpenModal}
        disabled={isLoading}
        className="group px-8 py-4 bg-slate-700/50 backdrop-blur-md text-white font-semibold rounded-lg border border-slate-600/50 hover:bg-slate-600/50 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        <span className="flex items-center justify-center gap-2">
          {isLoading ? (
            <>
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Loading...
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              View Projects
            </>
          )}
        </span>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-t-2xl p-6 sm:p-8 max-w-4xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-600/30 animate-slide-up">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-300">Projects</span>
            </h2>
            <p className="text-gray-300 mb-8">Here are some of my recent projects</p>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="group bg-slate-700/30 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
                >
                  {/* Icon */}
                  <div className="text-4xl mb-4">{project.icon}</div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* GitHub Link */}
                  <button
                    onClick={() => handleLinkClick(project.githubUrl)}
                    disabled={loadingLink === project.githubUrl}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loadingLink === project.githubUrl ? (
                      <>
                        <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Opening...
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        View on GitHub
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

<style jsx>{`
  @keyframes slide-up {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  .animate-slide-up {
    animation: slide-up 0.3s ease-out forwards;
  }
`}</style>
