'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ItechLogo from './assests/Itech.jpeg';
import WorkoholLogo from './assests/workohol.png';
import MahaAvatar from './assests/maha.png';
import PupCartLogo from './assests/PupCart.png';
import DigitalClockLogo from './assests/Digital Clock.png';
import TravelLogo from './assests/travel.png';

import PortfolioImg from './assests/Portfolio.png';
import EcommerceImg from './assests/Fullstack E-commerce.png';
import TodoAppImg from './assests/Todo-App.png';
interface Project {
  title: string;
  category: 'Professional Projects' | 'Personal Projects' | 'Beginner Projects';
  description: string;
  liveUrl?: string;
  codeUrl?: string;
  demoVideoUrl?: string;
  icon: string;
  bgGradient: string;
  bullets: string[];
  image?: string;
  date?: string;
}

const projects: Project[] = [
  {
    title: 'AiPod – Dental Application',
    category: 'Professional Projects',
    description: 'Built a dental application enabling patients to securely upload photos and X-rays for doctor review and auto-generate initial diagnosis and treatment plans.',
    icon: '🦷',
    bgGradient: 'from-blue-500/20 to-indigo-500/20',
    bullets: [
      'React.js • NestJS • TypeORM',
      '✔ Built a dental application enabling patients to securely upload photos & X-rays for doctor review',
      '✔ Developed auto-generation of initial diagnosis and treatment plans from uploaded images',
      '✔ Reduced review time for patients and doctors'
    ]
  },
  {
    title: 'Aram Foundation Donation App',
    category: 'Professional Projects',
    description: 'Built a secure, user-friendly donation platform for online contributions with a custom admin dashboard for staff field management.',
    icon: '🤝',
    bgGradient: 'from-emerald-500/20 to-teal-500/20',
    bullets: [
      'React.js • NestJS • Drizzle ORM',
      '✔ Built a secure, user-friendly donation platform for online contributions',
      '✔ Created a custom admin dashboard allowing staff to manage form fields without writing code'
    ]
  },
  {
    title: 'IQAC Event Scheduling System',
    category: 'Professional Projects',
    description: 'Designed a centralized college event scheduling platform with automated student/staff notifications and conflict detection logic.',
    icon: '📅',
    bgGradient: 'from-purple-500/20 to-pink-500/20',
    bullets: [
      'React.js • Vite • NestJS • Drizzle ORM',
      '✔ Designed a centralized college event scheduling platform with automated notifications',
      '✔ Wrote custom backend logic to detect and prevent scheduling conflicts across exams and events'
    ]
  },
  {
    title: 'Full-Stack E-Commerce Platform',
    category: 'Personal Projects',
    description: 'Full-stack e-commerce platform with 10+ REST APIs, JWT access/refresh auth, RBAC, admin dashboard, containerized with Docker and deployed on AWS ECS Fargate.',
    liveUrl: 'https://e-commerce-maha100104.vercel.app/login',
    codeUrl: 'https://github.com/maha100104',
    demoVideoUrl: 'https://jumpshare.com/s/qBqxcaxUb786jBZklM32',
    icon: '🛍️',
    bgGradient: 'from-teal-500/20 to-cyan-500/20',
    bullets: [
      'React.js • Vite • TypeScript • NestJS • Drizzle ORM • MySQL • JWT • Tailwind CSS • Docker • AWS (ECS Fargate, ECR, RDS) • GitHub Actions',
      '✔ Built full-stack e-commerce platform with 10+ REST APIs for product search/filtering, cart, wishlist, orders, reviews, payment simulation, JWT auth (access/refresh), RBAC & admin dashboard',
      '✔ Containerized frontend & backend with Docker; deployed on AWS ECS Fargate (ECR, Application Load Balancers, RDS MySQL)',
      '✔ Automated builds/deployments with GitHub Actions CI/CD via AWS OIDC; secured setup with VPC, security groups, IAM roles & Systems Manager Parameter Store'
    ],
    image: EcommerceImg.src,
    date: 'May 2026 – Sep 2026'
  },
  {
    title: 'TaskFlow – Todo Application',
    category: 'Personal Projects',
    description: 'Full-stack task management app with JWT auth, RBAC, profile management, task analytics dashboard, and 10+ REST CRUD APIs.',
    liveUrl: 'https://todo-maha100104.vercel.app/',
    codeUrl: 'https://github.com/maha100104',
    icon: '✅',
    bgGradient: 'from-blue-500/20 to-cyan-500/20',
    bullets: [
      'React.js • Vite • TypeScript • NestJS • Drizzle ORM • MySQL • JWT • Tailwind CSS',
      '✔ Full-stack task management with JWT auth, RBAC, profile management, priorities, search, filtering, soft delete',
      '✔ Delivered 10+ REST CRUD APIs and a responsive dashboard with task analytics',
      '✔ Deployed via CI/CD to Vercel, Render, and TiDB Cloud'
    ],
    image: TodoAppImg.src,
    date: 'Jun 2026 – Jul 2026'
  },
  {
    title: 'PupCart – Pet E-Commerce Website',
    category: 'Personal Projects',
    description: 'Built a pet e-commerce site with 30+ product listings and full cart functionality using reusable React/Next.js components and Firebase backend.',
    liveUrl: 'https://pup-cart-e-commerce-website-maha100104.vercel.app/',
    codeUrl: 'https://github.com/maha100104/PupCart-E-CommerceWebsite',
    icon: '🐾',
    bgGradient: 'from-orange-400/20 to-yellow-400/20',
    bullets: [
      'React.js • Next.js • Firebase',
      '✔ Built pet e-commerce site with 30+ product listings and full cart functionality',
      '✔ Structured Firebase as backend for product & cart data, enabling real-time updates across desktop, tablet, and mobile without page reload'
    ],
    image: PupCartLogo.src,
    date: 'Apr 2025 – Jun 2025'
  },
  {
    title: 'Modern Developer Portfolio',
    category: 'Personal Projects',
    description: 'Interactive developer portfolio built to showcase personal projects, professional experience, and technical skills.',
    liveUrl: 'https://portfolio-maha100104.vercel.app/',
    codeUrl: 'https://github.com/maha100104',
    icon: '✨',
    bgGradient: 'from-pink-500/20 to-rose-400/20',
    bullets: [
      'Next.js • React.js • Tailwind CSS • TypeScript',
      '✔ Modern responsive UI with clean navigation and interactive resume view',
      '✔ Showcases production apps, cloud deployment experience, and technical stack'
    ],
    image: PortfolioImg.src
  },
  {
    title: 'Travel Website',
    category: 'Beginner Projects',
    description: 'A visually rich travel destination website showcasing destinations with modern UI and smooth interactions.',
    liveUrl: 'https://travel-website-maha100104.vercel.app/',
    codeUrl: 'https://github.com/maha100104/TravelWebsite',
    icon: '✈️',
    bgGradient: 'from-sky-500/20 to-cyan-400/20',
    bullets: [
      'HTML5 • CSS3',
      '✔ Elegant scroll interactions',
      '✔ Rich modern visual hierarchy'
    ],
    image: TravelLogo.src,
    date: 'Jan 2024'
  },
  {
    title: 'Digital Clock',
    category: 'Beginner Projects',
    description: 'A stylish real-time digital clock application with live time display built using JavaScript.',
    liveUrl: 'https://digital-clock-maha100104.vercel.app/',
    codeUrl: 'https://github.com/maha100104/DigitalClock',
    icon: '🕐',
    bgGradient: 'from-violet-500/20 to-fuchsia-500/20',
    bullets: [
      'HTML5 • CSS3 • JavaScript',
      '✔ Real-time Date API integration',
      '✔ Smooth dark theme digit transitions'
    ],
    image: DigitalClockLogo.src,
    date: 'Dec 2023'
  }
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

  const categories = ['All', 'Professional Projects', 'Personal Projects', 'Beginner Projects'];

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
              href="https://linkedin.com/in/maha100104"
              target="_blank"
              rel="noopener noreferrer"
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

                <div className="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    Hi, I'm <strong>Mahalakshmi P</strong>, a <strong>Full-Stack Developer & Software Engineer</strong> with <strong>1+ year of experience</strong> building and shipping production applications using <strong>React.js, Next.js, NestJS, and TypeScript</strong>. Implemented JWT/OAuth authentication and RBAC across 3 identity providers and delivered 10+ REST APIs. Hands-on with <strong>Docker, AWS (ECS Fargate, RDS), and GitHub Actions CI/CD</strong> for containerized deployments. Optimized MySQL databases, reducing query response times by up to 70% in production systems.
                  </p>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">What I Do</h3>
                    <ul className="space-y-2.5">
                      <li className="flex items-start gap-2.5">
                        <span className="text-base shrink-0 mt-0.5">💻</span>
                        <span>Build end-to-end full-stack web applications using React.js, Next.js, NestJS, and TypeScript.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-base shrink-0 mt-0.5">🔐</span>
                        <span>Develop secure REST APIs with JWT/OAuth authentication (Google, Microsoft, DigiLocker) and RBAC.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-base shrink-0 mt-0.5">🐳</span>
                        <span>Containerize applications using Docker and automate deployments via GitHub Actions CI/CD to AWS ECS Fargate, Vercel, and Render.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-base shrink-0 mt-0.5">☁️</span>
                        <span>Architect cloud infrastructure using AWS (ECS Fargate, ECR, RDS MySQL, Application Load Balancers, VPC, IAM, Parameter Store).</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-base shrink-0 mt-0.5">🗄️</span>
                        <span>Design and optimize MySQL and SQL Server database schemas using Drizzle ORM and TypeORM.</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Experience</h3>
                    <p>
                      I've built 3+ production applications across <strong>e-commerce, healthcare, education, productivity, and donation management</strong>, engineering features such as OAuth authentication, role-based access control, admin dashboards, real-time cart functionality, and containerized AWS cloud deployments.
                    </p>
                  </div>

                  <p>
                    I'm passionate about solving complex real-world problems through clean code, containerization, and cloud automation. My goal is to build software that is <strong>secure, scalable, and intuitive</strong>.
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


                </div>

                <div className="space-y-8">

                  {/* Technical Skills Groups */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-bold text-white">Technical Skills</h3>

                    {/* Legend */}
                    <div className="flex items-center gap-6 text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
                      <span className="flex items-center gap-1.5">
                        <span className="w-8 h-1.5 rounded-full bg-[#383838] inline-block overflow-hidden"><span className="block w-1/3 h-full rounded-full bg-[#ffdb70]"></span></span>
                        Beginner
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-8 h-1.5 rounded-full bg-[#383838] inline-block overflow-hidden"><span className="block w-2/3 h-full rounded-full bg-[#ffdb70]"></span></span>
                        Intermediate
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-8 h-1.5 rounded-full bg-[#ffdb70] inline-block"></span>
                        Advanced
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                      {/* Languages Group */}
                      <div className="p-5 rounded-2xl bg-[#2b2b2c] border border-[#383838] space-y-3 shadow-sm hover:border-[#ffdb70]/20 transition-all duration-300">
                        <h4 className="font-bold text-[#ffdb70] text-xs uppercase tracking-wider mb-3">Languages</h4>
                        {[
                          { name: 'Java (Core Java, OOP)', level: 'intermediate' },
                          { name: 'JavaScript', level: 'advanced' },
                          { name: 'TypeScript', level: 'intermediate' },
                          { name: 'SQL', level: 'intermediate' },
                          { name: 'HTML5', level: 'advanced' },
                          { name: 'CSS3', level: 'advanced' },
                        ].map(({ name, level }) => (
                          <div key={name} className="space-y-1">
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-gray-200">{name}</span>
                              <span className="text-[10px] text-gray-500 capitalize">{level}</span>
                            </div>
                            <div className="w-full h-1.5 bg-[#383838] rounded-full overflow-hidden">
                              <div className={`h-full rounded-full bg-[#ffdb70] transition-all duration-500 ${level === 'beginner' ? 'w-1/3' : level === 'intermediate' ? 'w-2/3' : 'w-full'}`}></div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Frontend Group */}
                      <div className="p-5 rounded-2xl bg-[#2b2b2c] border border-[#383838] space-y-3 shadow-sm hover:border-[#ffdb70]/20 transition-all duration-300">
                        <h4 className="font-bold text-[#ffdb70] text-xs uppercase tracking-wider mb-3">Frontend</h4>
                        {[
                          { name: 'React.js', level: 'advanced' },
                          { name: 'Next.js', level: 'intermediate' },
                          { name: 'Vite', level: 'intermediate' },
                          { name: 'Tailwind CSS', level: 'advanced' },
                          { name: 'Radix UI', level: 'intermediate' },
                          { name: 'Responsive Web Design', level: 'advanced' },
                        ].map(({ name, level }) => (
                          <div key={name} className="space-y-1">
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-gray-200">{name}</span>
                              <span className="text-[10px] text-gray-500 capitalize">{level}</span>
                            </div>
                            <div className="w-full h-1.5 bg-[#383838] rounded-full overflow-hidden">
                              <div className={`h-full rounded-full bg-[#ffdb70] transition-all duration-500 ${level === 'beginner' ? 'w-1/3' : level === 'intermediate' ? 'w-2/3' : 'w-full'}`}></div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Backend Group */}
                      <div className="p-5 rounded-2xl bg-[#2b2b2c] border border-[#383838] space-y-3 shadow-sm hover:border-[#ffdb70]/20 transition-all duration-300">
                        <h4 className="font-bold text-[#ffdb70] text-xs uppercase tracking-wider mb-3">Backend</h4>
                        {[
                          { name: 'NestJS', level: 'advanced' },
                          { name: 'RESTful APIs', level: 'advanced' },
                          { name: 'JWT Authentication', level: 'advanced' },
                          { name: 'OAuth', level: 'intermediate' },
                          { name: 'Role-Based Access Control (RBAC)', level: 'advanced' },
                        ].map(({ name, level }) => (
                          <div key={name} className="space-y-1">
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-gray-200">{name}</span>
                              <span className="text-[10px] text-gray-500 capitalize">{level}</span>
                            </div>
                            <div className="w-full h-1.5 bg-[#383838] rounded-full overflow-hidden">
                              <div className={`h-full rounded-full bg-[#ffdb70] transition-all duration-500 ${level === 'beginner' ? 'w-1/3' : level === 'intermediate' ? 'w-2/3' : 'w-full'}`}></div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Databases & ORM Group */}
                      <div className="p-5 rounded-2xl bg-[#2b2b2c] border border-[#383838] space-y-3 shadow-sm hover:border-[#ffdb70]/20 transition-all duration-300">
                        <h4 className="font-bold text-[#ffdb70] text-xs uppercase tracking-wider mb-3">Databases & ORM</h4>
                        {[
                          { name: 'MySQL', level: 'advanced' },
                          { name: 'SQL Server', level: 'intermediate' },
                          { name: 'Drizzle ORM', level: 'advanced' },
                          { name: 'TypeORM', level: 'intermediate' },
                          { name: 'Firebase', level: 'intermediate' },
                        ].map(({ name, level }) => (
                          <div key={name} className="space-y-1">
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-gray-200">{name}</span>
                              <span className="text-[10px] text-gray-500 capitalize">{level}</span>
                            </div>
                            <div className="w-full h-1.5 bg-[#383838] rounded-full overflow-hidden">
                              <div className={`h-full rounded-full bg-[#ffdb70] transition-all duration-500 ${level === 'beginner' ? 'w-1/3' : level === 'intermediate' ? 'w-2/3' : 'w-full'}`}></div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Tools & Platforms Group */}
                      <div className="p-5 rounded-2xl bg-[#2b2b2c] border border-[#383838] space-y-3 shadow-sm hover:border-[#ffdb70]/20 transition-all duration-300 md:col-span-2">
                        <h4 className="font-bold text-[#ffdb70] text-xs uppercase tracking-wider mb-3">Tools & Platforms</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                          {[
                            { name: 'Git', level: 'advanced' },
                            { name: 'GitHub', level: 'advanced' },
                            { name: 'Swagger', level: 'intermediate' },
                            { name: 'Postman', level: 'advanced' },
                          ].map(({ name, level }) => (
                            <div key={name} className="space-y-1">
                              <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-200">{name}</span>
                                <span className="text-[10px] text-gray-500 capitalize">{level}</span>
                              </div>
                              <div className="w-full h-1.5 bg-[#383838] rounded-full overflow-hidden">
                                <div className={`h-full rounded-full bg-[#ffdb70] transition-all duration-500 ${level === 'beginner' ? 'w-1/3' : level === 'intermediate' ? 'w-2/3' : 'w-full'}`}></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Cloud & Deployment Group */}
                      <div className="p-5 rounded-2xl bg-[#2b2b2c] border border-[#383838] space-y-3 shadow-sm hover:border-[#ffdb70]/20 transition-all duration-300 md:col-span-2">
                        <h4 className="font-bold text-[#ffdb70] text-xs uppercase tracking-wider mb-3">Cloud & Deployment</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                          {[
                            { name: 'Docker', level: 'mid' },
                            { name: 'CI/CD (GitHub Actions)', level: 'mid' },
                            { name: 'AWS (ECS Fargate, ECR, RDS, ALB, VPC, IAM)', level: 'mid' },
                            { name: 'Vercel', level: 'advanced' },
                            { name: 'Render', level: 'intermediate' },
                            { name: 'Railway', level: 'beginner' },
                            { name: 'TiDB Cloud', level: 'beginner' },
                            { name: 'Linux', level: 'intermediate' },
                          ].map(({ name, level }) => (
                            <div key={name} className="space-y-1">
                              <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-200">{name}</span>
                                <span className="text-[10px] text-gray-500 capitalize">{level === 'mid' ? 'intermediate' : level}</span>
                              </div>
                              <div className="w-full h-1.5 bg-[#383838] rounded-full overflow-hidden">
                                <div className={`h-full rounded-full bg-[#ffdb70] transition-all duration-500 ${level === 'beginner' ? 'w-1/3' : level === 'mid' ? 'w-1/2' : level === 'intermediate' ? 'w-2/3' : 'w-full'}`}></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Process & Methodology Group */}
                      <div className="p-5 rounded-2xl bg-[#2b2b2c] border border-[#383838] space-y-3 shadow-sm hover:border-[#ffdb70]/20 transition-all duration-300 md:col-span-2">
                        <h4 className="font-bold text-[#ffdb70] text-xs uppercase tracking-wider mb-3">Process & Methodology</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                          {[
                            { name: 'SDLC', level: 'intermediate' },
                            { name: 'Manual & API Testing (Postman)', level: 'intermediate' },
                            { name: 'SIT', level: 'intermediate' },
                            { name: 'UAT', level: 'intermediate' },
                            { name: 'Bug Tracking', level: 'intermediate' },
                          ].map(({ name, level }) => (
                            <div key={name} className="space-y-1">
                              <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-200">{name}</span>
                                <span className="text-[10px] text-gray-500 capitalize">{level}</span>
                              </div>
                              <div className="w-full h-1.5 bg-[#383838] rounded-full overflow-hidden">
                                <div className={`h-full rounded-full bg-[#ffdb70] transition-all duration-500 ${level === 'beginner' ? 'w-1/3' : level === 'intermediate' ? 'w-2/3' : 'w-full'}`}></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Soft Skills Group */}
                      <div className="p-5 rounded-2xl bg-[#2b2b2c] border border-[#383838] space-y-3 shadow-sm hover:border-[#ffdb70]/20 transition-all duration-300 md:col-span-2">
                        <h4 className="font-bold text-[#ffdb70] text-xs uppercase tracking-wider mb-3">Soft Skills</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                          {[
                            { name: 'Problem Solving', level: 'advanced' },
                            { name: 'Team Collaboration', level: 'advanced' },
                            { name: 'Communication', level: 'advanced' },
                            { name: 'Time Management', level: 'advanced' },
                            { name: 'Adaptability', level: 'advanced' },
                          ].map(({ name, level }) => (
                            <div key={name} className="space-y-1">
                              <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-200">{name}</span>
                                <span className="text-[10px] text-gray-500 capitalize">{level}</span>
                              </div>
                              <div className="w-full h-1.5 bg-[#383838] rounded-full overflow-hidden">
                                <div className={`h-full rounded-full bg-[#ffdb70] transition-all duration-500 ${level === 'beginner' ? 'w-1/3' : level === 'intermediate' ? 'w-2/3' : 'w-full'}`}></div>
                              </div>
                            </div>
                          ))}
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
                            Engineered PupCart — a highly responsive, real-time pet e-commerce platform with React.js, Next.js, Firebase, and customizable themes to optimize the user checkout funnel.
                          </p>

                          <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center gap-1.5 bg-[#2b2b2c] border border-[#383838] px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-300 shadow-sm"><span className="text-[14px]">✅</span> Built PupCart Pet E-commerce</span>
                            <span className="inline-flex items-center gap-1.5 bg-[#2b2b2c] border border-[#383838] px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-300 shadow-sm"><span className="text-[14px]">✅</span> React.js • Next.js • Firebase</span>
                            <span className="inline-flex items-center gap-1.5 bg-[#2b2b2c] border border-[#383838] px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-300 shadow-sm"><span className="text-[14px]">✅</span> Product Listing & Cart System</span>
                          </div>
                          <a href="https://pup-cart-e-commerce-website-maha100104.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-[#ffdb70] font-semibold hover:underline mt-1">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
                            View PupCart Live Demo
                          </a>
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
                    <div
                      key={idx}
                      className="group relative rounded-2xl bg-[#2b2b2c] border border-[#383838] overflow-hidden hover:border-[#ffdb70] transition-all duration-300 shadow-md flex flex-col min-h-[260px]"
                    >
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
                        <div className="flex flex-col gap-2 pt-4 mt-4 border-t border-[#383838]">
                          {project.date && (
                            <span className="text-[11px] text-[#ffdb70] font-medium">{project.date}</span>
                          )}
                          <div className="flex items-center gap-1.5 flex-wrap">
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#ffdb70]/10 border border-[#ffdb70]/30 text-[#ffdb70] text-[10px] font-semibold hover:bg-[#ffdb70]/20 hover:border-[#ffdb70]/50 transition-all duration-200 whitespace-nowrap"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
                                Live Demo
                              </a>
                            )}
                            {project.demoVideoUrl && (
                              <a
                                href={project.demoVideoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-300 text-[10px] font-semibold hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-200 whitespace-nowrap"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" /></svg>
                                Demo Video
                              </a>
                            )}
                            {project.codeUrl && (
                              <a
                                href={project.codeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#383838]/50 border border-[#383838] text-gray-300 text-[10px] font-semibold hover:bg-[#383838] hover:text-white transition-all duration-200 whitespace-nowrap"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                Code
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
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
