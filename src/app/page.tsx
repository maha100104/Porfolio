'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ItechLogo from './assests/Itech.jpeg';
import WorkoholLogo from './assests/workohol.png';
import MahaAvatar from './assests/maha.jpg';
import DigitalClockLogo from './assests/Digital Clock.png';
import PupCartLogo from './assests/PupCart.png';
import TravelLogo from './assests/travel.png';
import PortfolioImg from './assests/Portfolio.png';
interface Project {
  title: string;
  category: 'Professional Projects' | 'Personal Projects';
  description: string;
  githubUrl: string;
  icon: string;
  bgGradient: string;
  bullets: string[];
  image?: string;
}

const projects: Project[] = [

  {
    title: 'AiPod (Dental Application)',
    category: 'Professional Projects',
    description: 'Built a dental app allowing patients to securely upload photos/X-rays of their teeth for doctor review and automatic diagnosis generation.',
    githubUrl: '#',
    icon: '🦷',
    bgGradient: 'from-blue-500/20 to-indigo-500/20',
    bullets: [
      'React • NestJS • TypeORM',
      '✔ Secure image upload',
      '✔ REST APIs',
      '✔ Patient workflow'
    ]
  },
  {
    title: 'Leo Muthu Scholarship (LMS) Portal',
    category: 'Professional Projects',
    description: 'Developed a full-stack scholarship portal where students apply online and staff verify details before releasing funds.',
    githubUrl: '#',
    icon: '🎓',
    bgGradient: 'from-amber-500/20 to-orange-500/20',
    bullets: [
      'React Native • NestJS • Drizzle ORM',
      '✔ Multi-step application workflow',
      '✔ Aadhaar & OTP verification',
      '✔ Real-time status tracking'
    ]
  },
  {
    title: 'Aram Foundation Donation App',
    category: 'Professional Projects',
    description: 'Create a secure user-friendly donation platform with a custom admin dashboard for field control without writing code.',
    githubUrl: '#',
    icon: '🤝',
    bgGradient: 'from-emerald-500/20 to-teal-500/20',
    bullets: [
      'React Native • NestJS • Drizzle ORM',
      '✔ Secure payment processing',
      '✔ Dynamic admin dashboard',
      '✔ Real-time fund tracking'
    ]
  },
  {
    title: 'IQAC Event Scheduling System',
    category: 'Professional Projects',
    description: 'Centralized exam/event scheduling system with automated conflict-prevention algorithms.',
    githubUrl: '#',
    icon: '📅',
    bgGradient: 'from-purple-500/20 to-pink-500/20',
    bullets: [
      'React • Vite • NestJS • Drizzle ORM',
      '✔ Conflict-prevention algorithms',
      '✔ Centralized exam scheduling',
      '✔ Automated notifications'
    ]
  },
  {
    title: 'Modern Developer Portfolio',
    category: 'Personal Projects',
    description: 'A highly interactive developer portfolio built to showcase personal projects, professional experience, and technical skills.',
    githubUrl: 'https://portfolio-maha100104.vercel.app/',
    icon: '✨',
    bgGradient: 'from-pink-500/20 to-rose-400/20',
    bullets: [
      'Next.js • React • Tailwind CSS • TypeScript',
      '✔ Sleek, modern UI with smooth animations',
      '✔ Fully responsive & interactive design'
    ],
    image: PortfolioImg.src
  },
  {
    title: 'PupCart — Pet E-commerce Website',
    category: 'Personal Projects',
    description: 'A fully functional e-commerce website for pet products built with HTML, CSS and JavaScript.',
    githubUrl: 'https://pup-cart-e-commerce-website-maha100104.vercel.app/',
    icon: '🐾',
    bgGradient: 'from-orange-400/20 to-yellow-400/20',
    bullets: [
      'HTML • CSS • React.js • Next.js • Firebase',
      '✔ Complete product listing & cart system',
      '✔ Seamless responsive mobile design'
    ],
    image: PupCartLogo.src
  },
  {
    title: 'Travel Website',
    category: 'Personal Projects',
    description: 'A visually rich travel destination website showcasing destinations with modern UI and smooth interactions.',
    githubUrl: 'https://travel-website-maha100104.vercel.app/',
    icon: '✈️',
    bgGradient: 'from-sky-500/20 to-cyan-400/20',
    bullets: [
      'HTML • CSS',
      '✔ Elegant scroll interactions',
      '✔ Rich modern visual hierarchy'
    ],
    image: TravelLogo.src
  },
  {
    title: 'Digital Clock',
    category: 'Personal Projects',
    description: 'A stylish real-time digital clock application with live time display built using JavaScript.',
    githubUrl: 'https://digital-clock-maha100104.vercel.app/',
    icon: '🕐',
    bgGradient: 'from-violet-500/20 to-fuchsia-500/20',
    bullets: [
      'HTML • CSS • JavaScript',
      '✔ Real-time Date API integration',
      '✔ Smooth dark theme digit transitions'
    ],
    image: DigitalClockLogo.src
  },
];


export default function Home() {
  const [activeTab, setActiveTab] = useState<'about' | 'resume' | 'portfolio'>('about');
  const [selectedCategory, setSelectedCategory] = useState<string>('Professional Projects');
  const [copiedText, setCopiedText] = useState(false);
  const [avatarError, setAvatarError] = useState(false);

  // Handle email click copy
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mahalakshmi01102004@gmail.com');
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  // Filter projects
  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const categories = ['All', 'Professional Projects', 'Personal Projects'];

  return (
    <main className="min-h-screen py-10 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex items-center justify-center animate-fade-in">
      <div className="w-full flex flex-col lg:flex-row gap-6 items-start">

        {/* SIDEBAR CARD */}
        <aside className="w-full lg:w-[280px] bg-[#1e1e1f] border border-[#383838] rounded-[30px] p-6 text-center lg:sticky lg:top-10 transition-all duration-300 shadow-xl flex flex-col items-center">

          {/* Avatar Container */}
          <div className="relative w-36 h-36 bg-[#383838] rounded-[30px] mb-5 overflow-hidden flex items-center justify-center shadow-inner group">
            {!avatarError ? (
              <img
                src={MahaAvatar.src}
                alt="Mahalakshmi Avatar"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                onError={() => setAvatarError(true)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#ffdb70] to-[#e5a93b] flex items-center justify-center">
                <span className="text-6xl select-none">👩‍💻</span>
              </div>
            )}
          </div>

          {/* Name & Title Badge */}
          <h1 className="text-xl font-semibold text-white tracking-wide mb-2 select-all">Mahalakshmi</h1>
          <div className="px-3 py-1.5 bg-[#2b2b2c] border border-[#383838] rounded-xl text-xs font-medium text-[#ffdb70]/90 mb-6 select-none">
            Full Stack Developer
          </div>

          <div className="w-full h-[1px] bg-[#383838] mb-6"></div>

          {/* Contact Details List */}
          <div className="w-full space-y-4 text-left mb-6">

            {/* Email Contact Item */}
            <div
              className="flex gap-4 items-center group cursor-pointer relative"
              onClick={handleCopyEmail}
              title="mahalakshmi01102004@gmail.com"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-[#3f3f40] to-[#2a2a2b] border border-[#383838] rounded-xl flex items-center justify-center shadow-md shrink-0 text-[#ffdb70]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <span className="block text-[10px] text-gray-400 font-semibold tracking-wider uppercase">Email</span>
                <span className="block text-xs text-gray-200 overflow-hidden text-ellipsis whitespace-nowrap group-hover:text-[#ffdb70] transition-colors">
                  {copiedText ? 'Copied!' : 'mahalakshmi01102004@gmail.com'}
                </span>
                {/* Hover tooltip showing full email */}
                <span className="pointer-events-none absolute left-0 -bottom-8 z-50 whitespace-nowrap rounded-lg bg-[#2b2b2c] border border-[#383838] px-3 py-1.5 text-[11px] text-[#ffdb70] shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  mahalakshmi01102004@gmail.com
                </span>
              </div>
            </div>

            {/* GitHub Contact Item */}
            <a href="https://github.com/maha100104" target="_blank" rel="noopener noreferrer" className="flex gap-4 items-center group">
              <div className="w-10 h-10 bg-gradient-to-br from-[#3f3f40] to-[#2a2a2b] border border-[#383838] rounded-xl flex items-center justify-center shadow-md shrink-0 text-[#ffdb70]">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <span className="block text-[10px] text-gray-400 font-semibold tracking-wider uppercase">GitHub</span>
                <span className="block text-xs text-gray-200 overflow-hidden text-ellipsis whitespace-nowrap group-hover:text-[#ffdb70] transition-colors">
                  github.com/maha100104
                </span>
              </div>
            </a>


            {/* LinkedIn Contact Item */}
            <a href="https://linkedin.com/in/maha100104" target="_blank" rel="noopener noreferrer" className="flex gap-4 items-center group">
              <div className="w-10 h-10 bg-gradient-to-br from-[#3f3f40] to-[#2a2a2b] border border-[#383838] rounded-xl flex items-center justify-center shadow-md shrink-0 text-[#ffdb70]">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <span className="block text-[10px] text-gray-400 font-semibold tracking-wider uppercase">LinkedIn</span>
                <span className="block text-xs text-gray-200 overflow-hidden text-ellipsis whitespace-nowrap group-hover:text-[#ffdb70] transition-colors">
                  linkedin.com/in/maha100104
                </span>
              </div>
            </a>

            {/* Location Contact Item */}
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-[#3f3f40] to-[#2a2a2b] border border-[#383838] rounded-xl flex items-center justify-center shadow-md shrink-0 text-[#ffdb70]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <span className="block text-[10px] text-gray-400 font-semibold tracking-wider uppercase">Location</span>
                <span className="block text-xs text-gray-200 overflow-hidden text-ellipsis whitespace-nowrap">
                  Chennai, India
                </span>
              </div>
            </div>
          </div>

          <div className="w-full h-[1px] bg-[#383838] mb-6"></div>

          {/* Social Links */}
          <div className="flex gap-3 justify-center">
            {/* GitHub */}
            <a
              href="https://github.com/maha100104"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#ffdb70] transition-colors"
              aria-label="GitHub Profile"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="#"
              className="text-gray-400 hover:text-[#ffdb70] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

          </div>
        </aside>

        {/* MAIN CONTENT CARD */}
        <div className="flex-1 bg-[#1e1e1f] border border-[#383838] rounded-[30px] shadow-xl relative min-h-[700px] flex flex-col w-full overflow-hidden">

          {/* HEADER NAVIGATION TABS - Desktop/Capsule style */}
          <nav className="absolute top-0 right-0 bg-[#2b2b2c] border-b border-l border-[#383838] rounded-bl-3xl rounded-tr-3xl hidden md:flex items-center gap-6 px-8 py-4 z-20">
            {(['about', 'resume', 'portfolio'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  if (tab === 'portfolio') setSelectedCategory('Professional Projects');
                }}
                className={`font-semibold capitalize text-xs tracking-wider transition-colors cursor-pointer ${activeTab === tab ? 'text-[#ffdb70]' : 'text-gray-300 hover:text-gray-400'
                  }`}
              >
                {tab}
              </button>
            ))}
          </nav>

          {/* MOBILE NAVIGATION BAR - Sticky/bottom or inline header */}
          <nav className="w-full bg-[#2b2b2c] border-b border-[#383838] md:hidden flex justify-around items-center py-4 px-2 z-20 sticky top-0">
            {(['about', 'resume', 'portfolio'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  if (tab === 'portfolio') setSelectedCategory('Professional Projects');
                }}
                className={`font-semibold capitalize text-[10px] sm:text-xs tracking-wider transition-colors cursor-pointer ${activeTab === tab ? 'text-[#ffdb70]' : 'text-gray-400 hover:text-gray-300'
                  }`}
              >
                {tab}
              </button>
            ))}
          </nav>

          {/* TAB CONTENT PORTAL */}
          <div className="p-6 sm:p-8 lg:p-10 flex-1 flex flex-col pt-12 md:pt-24 w-full">

            {/* ABOUT TAB */}
            {activeTab === 'about' && (
              <div className="animate-fade-in space-y-8 flex-1 md:mt-6 w-full">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">About Me</h2>
                  <div className="w-10 h-[5px] bg-[#ffdb70] rounded-full"></div>
                </div>

                <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    I'm <strong>Mahalakshmi</strong>, an Associate Software Developer with 1 year of professional experience building scalable web and mobile applications. I specialize in <strong>React Native, React, NestJS, TypeScript, and modern database technologies</strong> such as Drizzle ORM and SQL.
                  </p>
                  <p>
                    I enjoy building end-to-end applications—from designing intuitive user interfaces to developing secure, high-performance backend APIs. My experience includes developing production-ready applications in domains such as healthcare, education, and donation management, with a strong focus on clean architecture, performance, and user experience.
                  </p>
                  <p>
                    I'm passionate about continuously learning new technologies, solving real-world problems, and creating software that is reliable, scalable, and easy to use. My goal is to transform complex technical challenges into simple, elegant, and user-centric digital solutions.
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-[#2b2b2c] to-[#1e1e1f] border border-[#383838] text-center shadow-md hover:border-[#ffdb70]/30 transition-all duration-300">
                    <span className="block text-2xl sm:text-3xl font-extrabold text-[#ffdb70]">1+</span>
                    <span className="block text-[10px] text-gray-400 mt-1 uppercase tracking-wider font-semibold">Years Experience</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-[#2b2b2c] to-[#1e1e1f] border border-[#383838] text-center shadow-md hover:border-[#ffdb70]/30 transition-all duration-300">
                    <span className="block text-2xl sm:text-3xl font-extrabold text-[#ffdb70]">8+</span>
                    <span className="block text-[10px] text-gray-400 mt-1 uppercase tracking-wider font-semibold">Projects</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-[#2b2b2c] to-[#1e1e1f] border border-[#383838] text-center shadow-md hover:border-[#ffdb70]/30 transition-all duration-300">
                    <span className="block text-2xl sm:text-3xl font-extrabold text-[#ffdb70]">4+</span>
                    <span className="block text-[10px] text-gray-400 mt-1 uppercase tracking-wider font-semibold">Production Apps</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-[#2b2b2c] to-[#1e1e1f] border border-[#383838] text-center shadow-md hover:border-[#ffdb70]/30 transition-all duration-300">
                    <span className="block text-2xl sm:text-3xl font-extrabold text-[#ffdb70]">10+</span>
                    <span className="block text-[10px] text-gray-400 mt-1 uppercase tracking-wider font-semibold">Technologies</span>
                  </div>
                </div>

                {/* Currently Working Section */}
                <div className="space-y-4 pt-2">
                  <h3 className="text-xl font-semibold text-white">Currently Working</h3>
                  <div className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-[#2b2b2c] to-[#1e1e1f] border border-[#ffdb70]/20 shadow-md relative overflow-hidden group hover:border-[#ffdb70]/40 transition-all duration-300">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#ffdb70]/5 rounded-full blur-2xl group-hover:bg-[#ffdb70]/10 transition-all duration-300"></div>
                    <div className="w-12 h-12 bg-white border border-[#383838] rounded-xl flex items-center justify-center shadow-sm shrink-0 p-1">
                      <img src={ItechLogo.src} alt="Itech India Logo" className="w-full h-full object-contain rounded-lg" />
                    </div>
                    <div>
                      <span className="block text-[10px] text-gray-400 uppercase tracking-widest font-bold">Current Role</span>
                      <h4 className="font-bold text-white text-base leading-snug">Associate Software Developer</h4>
                      <span className="text-xs text-gray-400 block mt-0.5">Itech India Pvt Ltd</span>
                    </div>
                  </div>
                </div>

                {/* What I'm Doing Section */}
                <div className="space-y-6 pt-4">
                  <h3 className="text-xl font-semibold text-white">What I'm Doing</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    {/* Web Development Service */}
                    <div className="flex gap-4 p-5 rounded-2xl bg-gradient-to-br from-[#2b2b2c] to-[#1e1e1f] border border-[#383838] shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="text-3xl shrink-0 text-[#ffdb70] select-none">💻</div>
                      <div>
                        <h4 className="font-semibold text-white text-sm sm:text-base mb-1">Web Development</h4>
                        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                          Building clean, dynamic, and high-performance websites using React, Nest.js, and modern CSS.
                        </p>
                      </div>
                    </div>


                    {/* Backend Engineering Service */}
                    <div className="flex gap-4 p-5 rounded-2xl bg-gradient-to-br from-[#2b2b2c] to-[#1e1e1f] border border-[#383838] shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="text-3xl shrink-0 text-[#ffdb70] select-none">🛡️</div>
                      <div>
                        <h4 className="font-semibold text-white text-sm sm:text-base mb-1">Backend Architectures</h4>
                        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                          Designing secure, robust API endpoints, caching networks, and databases using Nest.JS.
                        </p>
                      </div>
                    </div>

                    {/* UI/UX Design Service */}
                    <div className="flex gap-4 p-5 rounded-2xl bg-gradient-to-br from-[#2b2b2c] to-[#1e1e1f] border border-[#383838] shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="text-3xl shrink-0 text-[#ffdb70] select-none">🎨</div>
                      <div>
                        <h4 className="font-semibold text-white text-sm sm:text-base mb-1">Interactive Interfaces</h4>
                        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                          Designing modular, responsive layouts that scale seamlessly across device viewports.
                        </p>
                      </div>
                    </div>

                    {/* Database Management Service */}
                    <div className="flex gap-4 p-5 rounded-2xl bg-gradient-to-br from-[#2b2b2c] to-[#1e1e1f] border border-[#383838] shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="text-3xl shrink-0 text-[#ffdb70] select-none">🗄️</div>
                      <div>
                        <h4 className="font-semibold text-white text-sm sm:text-base mb-1">Database Management</h4>
                        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                          Connecting, structuring, and managing databases using MySQL and Drizzle ORM for reliable data persistence.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>



              </div>
            )}

            {/* RESUME TAB */}
            {activeTab === 'resume' && (
              <div className="animate-fade-in space-y-8 flex-1 md:mt-6 w-full">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Resume</h2>
                    <div className="w-10 h-[5px] bg-[#ffdb70] rounded-full"></div>
                  </div>

                  {/* Link to Printable resume page */}
                  <Link
                    href="/resume"
                    target="_blank"
                    className="text-xs text-[#ffdb70] hover:underline font-semibold bg-[#2b2b2c] border border-[#383838] px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    View Printable Resume
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </Link>
                </div>

                <div className="space-y-8">

                  {/* Software Skills Groups */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-bold text-white">Software Skills</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                      {/* Frontend Group */}
                      <div className="p-5 rounded-2xl bg-[#2b2b2c] border border-[#383838] space-y-4 shadow-sm hover:border-[#ffdb70]/20 transition-all duration-300">
                        <h4 className="font-bold text-[#ffdb70] text-xs uppercase tracking-wider">Frontend</h4>
                        <div className="space-y-3.5">
                          <div className="space-y-1.5">
                            <div className="flex justify-between items-center text-xs font-semibold">
                              <span className="text-gray-200 flex items-center gap-1.5">
                                <span>⚛</span> React
                              </span>
                              <span className="text-[#ffdb70] text-[10px] font-bold uppercase tracking-wider">Advanced</span>
                            </div>
                            <div className="h-2 w-full bg-[#383838] rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-[#ffdb70] to-[#e5a93b] rounded-full" style={{ width: '95%' }}></div>
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <div className="flex justify-between items-center text-xs font-semibold">
                              <span className="text-gray-200 flex items-center gap-1.5">
                                <span>📱</span> React Native
                              </span>
                              <span className="text-[#ffdb70] text-[10px] font-bold uppercase tracking-wider">Advanced</span>
                            </div>
                            <div className="h-2 w-full bg-[#383838] rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-[#ffdb70] to-[#e5a93b] rounded-full" style={{ width: '90%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Backend Group */}
                      <div className="p-5 rounded-2xl bg-[#2b2b2c] border border-[#383838] space-y-4 shadow-sm hover:border-[#ffdb70]/20 transition-all duration-300">
                        <h4 className="font-bold text-[#ffdb70] text-xs uppercase tracking-wider">Backend</h4>
                        <div className="space-y-3.5">
                          <div className="space-y-1.5">
                            <div className="flex justify-between items-center text-xs font-semibold">
                              <span className="text-gray-200 flex items-center gap-1.5">
                                <span>🟦</span> TypeScript
                              </span>
                              <span className="text-[#ffdb70] text-[10px] font-bold uppercase tracking-wider">Advanced</span>
                            </div>
                            <div className="h-2 w-full bg-[#383838] rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-[#ffdb70] to-[#e5a93b] rounded-full" style={{ width: '95%' }}></div>
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <div className="flex justify-between items-center text-xs font-semibold">
                              <span className="text-gray-200 flex items-center gap-1.5">
                                <span>🟩</span> NestJS
                              </span>
                              <span className="text-[#ffdb70] text-[10px] font-bold uppercase tracking-wider">Advanced</span>
                            </div>
                            <div className="h-2 w-full bg-[#383838] rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-[#ffdb70] to-[#e5a93b] rounded-full" style={{ width: '90%' }}></div>
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <div className="flex justify-between items-center text-xs font-semibold">
                              <span className="text-gray-200 flex items-center gap-1.5">
                                <span>☕</span> Java
                              </span>
                              <span className="text-[#ffdb70] text-[10px] font-bold uppercase tracking-wider text-opacity-80">Intermediate</span>
                            </div>
                            <div className="h-2 w-full bg-[#383838] rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-[#ffdb70] to-[#e5a93b] rounded-full" style={{ width: '75%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Databases Group */}
                      <div className="p-5 rounded-2xl bg-[#2b2b2c] border border-[#383838] space-y-4 shadow-sm hover:border-[#ffdb70]/20 transition-all duration-300">
                        <h4 className="font-bold text-[#ffdb70] text-xs uppercase tracking-wider">Database</h4>
                        <div className="space-y-3.5">
                          <div className="space-y-1.5">
                            <div className="flex justify-between items-center text-xs font-semibold">
                              <span className="text-gray-200 flex items-center gap-1.5">
                                <span>🐬</span> MySQL
                              </span>
                              <span className="text-[#ffdb70] text-[10px] font-bold uppercase tracking-wider text-opacity-80">Intermediate</span>
                            </div>
                            <div className="h-2 w-full bg-[#383838] rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-[#ffdb70] to-[#e5a93b] rounded-full" style={{ width: '75%' }}></div>
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <div className="flex justify-between items-center text-xs font-semibold">
                              <span className="text-gray-200 flex items-center gap-1.5">
                                <span>🗄️</span> Drizzle ORM
                              </span>
                              <span className="text-[#ffdb70] text-[10px] font-bold uppercase tracking-wider text-opacity-80">Intermediate</span>
                            </div>
                            <div className="h-2 w-full bg-[#383838] rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-[#ffdb70] to-[#e5a93b] rounded-full" style={{ width: '75%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Tools Card */}
                      <div className="p-5 rounded-2xl bg-[#2b2b2c] border border-[#383838] space-y-4 shadow-sm hover:border-[#ffdb70]/20 transition-all duration-300">
                        <h4 className="font-bold text-[#ffdb70] text-xs uppercase tracking-wider">Tools</h4>
                        <div className="space-y-3.5">
                          <div className="space-y-1.5">
                            <div className="flex justify-between items-center text-xs font-semibold">
                              <span className="text-gray-200">Git / GitHub</span>
                              <span className="text-[#ffdb70] text-[10px] font-bold uppercase tracking-wider">Intermediate</span>
                            </div>
                            <div className="h-2 w-full bg-[#383838] rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-[#ffdb70] to-[#e5a93b] rounded-full" style={{ width: '75%' }}></div>
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <div className="flex justify-between items-center text-xs font-semibold">
                              <span className="text-gray-200">Beekeeper Studio / pgAdmin</span>
                              <span className="text-[#ffdb70] text-[10px] font-bold uppercase tracking-wider">Intermediate</span>
                            </div>
                            <div className="h-2 w-full bg-[#383838] rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-[#ffdb70] to-[#e5a93b] rounded-full" style={{ width: '75%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Experience Timeline */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#3f3f40] to-[#2a2a2b] border border-[#383838] rounded-xl flex items-center justify-center text-[#ffdb70] shadow-md">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-white">Experience</h3>
                    </div>

                    <div className="border-l-2 border-[#383838] ml-5 pl-8 space-y-8 relative">

                      {/* Timeline Node 1 */}
                      <div className="relative">
                        <div className="absolute -left-[39px] top-1.5 w-3.5 h-3.5 bg-[#444] border-4 border-[#1e1e1f] rounded-full ring-4 ring-[#ffdb70]"></div>
                        <div className="flex items-center gap-3 mb-2">
                          <Image src={ItechLogo} alt="Itech India Logo" className="w-9 h-9 rounded bg-white object-contain" />
                          <div>
                            <h4 className="text-base font-bold text-white">Associate Software Developer</h4>
                            <span className="text-xs text-[#ffdb70] font-medium block">Aug 2025 — Present | Itech India Private Limited</span>
                          </div>
                        </div>

                        <div className="mt-3 space-y-4">
                          <p className="text-sm text-gray-400 leading-relaxed">
                            Full-stack development of web and mobile applications. Engineered scalable REST APIs and streamlined user onboarding with government-backed secure verification systems.
                          </p>

                          <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center gap-1.5 bg-[#2b2b2c] border border-[#383838] px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-300 shadow-sm"><span className="text-[14px]">✅</span> Built 4 Production Apps</span>
                            <span className="inline-flex items-center gap-1.5 bg-[#2b2b2c] border border-[#383838] px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-300 shadow-sm"><span className="text-[14px]">✅</span> Aadhaar Integration/DigiLocker</span>
                            <span className="inline-flex items-center gap-1.5 bg-[#2b2b2c] border border-[#383838] px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-300 shadow-sm"><span className="text-[14px]">✅</span> Google Login/Microsoft Login</span>
                          </div>
                        </div>
                      </div>

                      {/* Timeline Node 2 */}
                      <div className="relative mt-8">
                        <div className="absolute -left-[39px] top-1.5 w-3.5 h-3.5 bg-[#444] border-4 border-[#1e1e1f] rounded-full ring-4 ring-[#ffdb70]/50"></div>
                        <div className="flex items-center gap-3 mb-2">
                          <Image src={WorkoholLogo} alt="Workohol Logo" className="w-9 h-9 rounded bg-white object-contain" />
                          <div>
                            <h4 className="text-base font-bold text-white">Full-Stack Developer Intern</h4>
                            <span className="text-xs text-[#ffdb70] font-medium block">April 2025 — July 2025 | Workcohol</span>
                          </div>
                        </div>

                        <div className="mt-3 space-y-4">
                          <p className="text-sm text-gray-400 leading-relaxed">
                            Engineered a highly responsive, real-time e-commerce platform with customizable themes to optimize the user checkout funnel.
                          </p>

                          <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center gap-1.5 bg-[#2b2b2c] border border-[#383838] px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-300 shadow-sm"><span className="text-[14px]">✅</span> Built Pet E-commerce</span>
                            <span className="inline-flex items-center gap-1.5 bg-[#2b2b2c] border border-[#383838] px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-300 shadow-sm"><span className="text-[14px]">✅</span> Firebase Integration</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Education Timeline */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#3f3f40] to-[#2a2a2b] border border-[#383838] rounded-xl flex items-center justify-center text-[#ffdb70] shadow-md">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-white">Education</h3>
                    </div>

                    <div className="border-l-2 border-[#383838] ml-5 pl-8 space-y-8 relative">

                      <div className="relative">
                        <div className="absolute -left-[39px] top-1.5 w-3.5 h-3.5 bg-[#444] border-4 border-[#1e1e1f] rounded-full ring-4 ring-[#ffdb70]"></div>
                        <h4 className="text-base font-bold text-white">Sri Sairam Engineering College</h4>
                        <span className="text-xs text-[#ffdb70] font-medium block my-1">B.Tech Information Technology | Graduated May 2025</span>
                        <p className="text-xs sm:text-sm text-gray-400">
                          Completed degree with CGPA: 8.29 / 10.0
                        </p>
                      </div>

                    </div>
                  </div>

                  {/* Awards & Certifications */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white">Awards & Certifications</h3>
                    <ul className="text-xs sm:text-sm text-gray-400 list-disc ml-5 space-y-2">
                      <li>Strategic Excellence Award — Sri Sairam Engineering College</li>
                      <li>Best Project Award (2024) — Institute of Engineers (India), Hosur Local Center</li>
                      <li>Diploma in Computer Application (DCA) — Guru Computers (Scored 89/100)</li>
                    </ul>
                  </div>

                </div>

              </div>
            )}

            {/* PORTFOLIO TAB */}
            {activeTab === 'portfolio' && (
              <div className="animate-fade-in space-y-8 flex-1 md:mt-6 w-full">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Portfolio</h2>
                  <div className="w-10 h-[5px] bg-[#ffdb70] rounded-full"></div>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap gap-4 text-xs font-semibold select-none">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-xl border transition-all duration-300 cursor-pointer ${selectedCategory === category
                        ? 'bg-[#2b2b2c] border-[#ffdb70] text-[#ffdb70]'
                        : 'border-[#383838] text-gray-400 hover:text-white'
                        }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  {filteredProjects.map((project, idx) => (
                    <a
                      key={idx}
                      href={project.githubUrl}
                      target={project.githubUrl !== '#' ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (project.githubUrl === '#') {
                          e.preventDefault();
                        }
                      }}
                      className={`group relative rounded-2xl bg-[#2b2b2c] border border-[#383838] overflow-hidden hover:border-[#ffdb70] transition-all duration-300 shadow-md flex flex-col min-h-[260px] ${project.githubUrl === '#' ? 'cursor-default' : 'cursor-pointer'}`}
                    >
                      {/* Tooltip on hover - only show for cards with a real URL */}
                      {project.githubUrl !== '#' && (
                        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3 pb-3">
                          <div className="bg-[#0e0e10]/90 backdrop-blur-sm border border-[#383838] rounded-xl px-3 py-2 flex items-center gap-2">
                            <svg className="w-3 h-3 text-[#ffdb70] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                            <span className="text-[10px] text-[#ffdb70] font-medium truncate">{project.githubUrl}</span>
                          </div>
                        </div>
                      )}

                      <div className="h-24 shadow-inner relative overflow-hidden shrink-0">
                        {/* Fallback layout: Gradient and Emoji */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${project.bgGradient} flex items-center justify-center text-4xl`}>
                          <span className="transform transition-transform duration-500 group-hover:scale-125 select-none">{project.icon}</span>
                        </div>
                        {/* Optional image overlay that fills the background */}
                        {project.image && (
                          <img
                            src={project.image}
                            alt={`${project.title} screenshot`}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        )}
                      </div>
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="font-bold text-white text-base transition-colors mb-2">
                            {project.title}
                          </h4>
                          <p className="text-xs text-gray-400 leading-relaxed mb-4">
                            {project.description}
                          </p>
                          <ul className="text-[10px] text-gray-500 space-y-1.5">
                            {project.bullets.map((b, i) => (
                              <li key={i} className={i === 0 ? "text-[#ffdb70] font-semibold mb-2" : ""}>{b}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex items-center justify-between text-[10px] text-gray-500 uppercase tracking-widest font-semibold pt-4 mt-4 border-t border-[#383838]">
                          <span>{project.category}</span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

              </div>
            )}




          </div>

        </div>

      </div>
    </main>
  );
}
