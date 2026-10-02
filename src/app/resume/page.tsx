'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ItechLogo from '../assests/Itech.jpeg';
import WorkoholLogo from '../assests/workohol.png';

export default function ResumePage() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Auto-trigger print/download if parameters are passed
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const action = params.get('action');
    if (action === 'print' || action === 'download') {
      document.title = 'MahalakshmiP_Resume';
      const timer = setTimeout(() => {
        window.print();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mahalakshmi01102004@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handlePrint = () => {
    document.title = 'MahalakshmiP_Resume';
    window.print();
  };

  const handleDownload = () => {
    // Triggers download of the PDF placed in the public folder
    const link = document.createElement('a');
    link.href = '/MahalakshmiP_Resume.pdf?v=2';
    link.download = 'MahalakshmiP_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-screen bg-[#0e0e10] py-10 md:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">

      {/* Back and Action Buttons */}
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 no-print">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-[#ffdb70] transition-colors bg-[#1e1e1f] border border-[#383838] px-4 py-2.5 rounded-xl cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Portfolio
        </Link>
        <div className="flex flex-wrap mt-6 gap-2.5 w-full sm:w-auto">
          <button
            onClick={handlePrint}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-[#ffdb70] transition-colors bg-[#1e1e1f] border border-[#383838] px-4 py-2.5 rounded-xl cursor-pointer hover:border-[#ffdb70]"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.82l.24-2.08A2 2 0 018.94 10h6.12a2 2 0 011.98 1.74L17.28 13.8m-10.56 0A2 2 0 005 15.82v1.5a2 2 0 002 2h10a2 2 0 002-2v-1.5a2 2 0 00-1.72-2m-10.28 0h10.28M8 10V7a4 4 0 018 0v3M8 14h.01M12 14h.01M16 14h.01" />
            </svg>
            Print
          </button>

          <button
            onClick={handleDownload}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#ffdb70] hover:text-[#0e0e10] hover:bg-[#ffdb70] transition-colors bg-[#1e1e1f] border border-[#ffdb70]/30 hover:border-[#ffdb70] px-4 py-2.5 rounded-xl cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download PDF
          </button>
        </div>
      </div>

      {/* Resume Card */}
      <article id="resume-content" className="bg-[#1e1e1f] border border-[#383838] rounded-[30px] p-6 sm:p-10 shadow-xl space-y-10 text-gray-300">

        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-[#383838]">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">MAHALAKSHMI P</h1>
            <p className="text-[#ffdb70] font-medium tracking-wide">Full-Stack Developer</p>
          </div>
          <div className="text-xs space-y-2 text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-[#ffdb70]">📍</span> Chennai, Tamil Nadu, India
            </div>
            <div className="flex items-center gap-2 cursor-pointer group" onClick={handleCopyEmail}>
              <span className="text-[#ffdb70]">✉️</span>
              <span className="group-hover:text-[#ffdb70] transition-colors font-medium">
                {copiedEmail ? 'Copied to Clipboard!' : 'mahalakshmi01102004@gmail.com'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#ffdb70]">📞</span> +91-9384175944
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-1 pt-1 text-[11px] text-gray-400">
              <a href="https://linkedin.com/in/maha100104" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffdb70] underline">LinkedIn</a>
              <span>|</span>
              <a href="https://github.com/maha100104" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffdb70] underline">GitHub</a>
              <span>|</span>
              <a href="https://portfolio-maha100104.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffdb70] underline">Portfolio</a>
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-3">
            <span className="w-1.5 h-6 bg-[#ffdb70] rounded-full"></span>
            Professional Summary
          </h2>
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-gray-300">
            <p>
              Full-Stack Developer with 1+ year of experience building and shipping 3+ production applications using React.js, Next.js, NestJS, and TypeScript. Implemented JWT/OAuth authentication and RBAC across 3 identity providers and delivered 10+ REST APIs. Hands-on with Docker, AWS (ECS Fargate, RDS), and GitHub Actions CI/CD for containerized deployments. Optimized MySQL databases, reducing query response times by up to 70% in production systems.
            </p>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-3">
            <span className="w-1.5 h-6 bg-[#ffdb70] rounded-full"></span>
            Technical Skills
          </h2>

          {/* Legend */}
          <div className="flex items-center gap-6 text-[10px] text-gray-400 font-semibold uppercase tracking-wider pb-1">
            <span className="flex items-center gap-1.5"><span className="w-8 h-1.5 rounded-full bg-[#383838] inline-block"><span className="block w-1/3 h-full rounded-full bg-[#ffdb70]"></span></span> Beginner</span>
            <span className="flex items-center gap-1.5"><span className="w-8 h-1.5 rounded-full bg-[#383838] inline-block relative"><span className="block w-2/3 h-full rounded-full bg-[#ffdb70]"></span></span> Intermediate</span>
            <span className="flex items-center gap-1.5"><span className="w-8 h-1.5 rounded-full bg-[#ffdb70] inline-block"></span> Advanced</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Languages Group */}
            <div className="p-5 rounded-2xl bg-[#2b2b2c] border border-[#383838] space-y-3 shadow-sm print-skill-bg">
              <h3 className="font-bold text-[#ffdb70] text-xs uppercase tracking-wider mb-3">Languages</h3>
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
                  <div className="w-full h-1.5 bg-[#383838] rounded-full overflow-hidden print-skill-bar">
                    <div className={`h-full rounded-full bg-[#ffdb70] ${level === 'beginner' ? 'w-1/3' : level === 'intermediate' ? 'w-2/3' : 'w-full'}`}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Frontend Group */}
            <div className="p-5 rounded-2xl bg-[#2b2b2c] border border-[#383838] space-y-3 shadow-sm print-skill-bg">
              <h3 className="font-bold text-[#ffdb70] text-xs uppercase tracking-wider mb-3">Frontend</h3>
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
                  <div className="w-full h-1.5 bg-[#383838] rounded-full overflow-hidden print-skill-bar">
                    <div className={`h-full rounded-full bg-[#ffdb70] ${level === 'beginner' ? 'w-1/3' : level === 'intermediate' ? 'w-2/3' : 'w-full'}`}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Backend Group */}
            <div className="p-5 rounded-2xl bg-[#2b2b2c] border border-[#383838] space-y-3 shadow-sm print-skill-bg">
              <h3 className="font-bold text-[#ffdb70] text-xs uppercase tracking-wider mb-3">Backend</h3>
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
                  <div className="w-full h-1.5 bg-[#383838] rounded-full overflow-hidden print-skill-bar">
                    <div className={`h-full rounded-full bg-[#ffdb70] ${level === 'beginner' ? 'w-1/3' : level === 'intermediate' ? 'w-2/3' : 'w-full'}`}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Databases & ORM Group */}
            <div className="p-5 rounded-2xl bg-[#2b2b2c] border border-[#383838] space-y-3 shadow-sm print-skill-bg">
              <h3 className="font-bold text-[#ffdb70] text-xs uppercase tracking-wider mb-3">Databases & ORM</h3>
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
                  <div className="w-full h-1.5 bg-[#383838] rounded-full overflow-hidden print-skill-bar">
                    <div className={`h-full rounded-full bg-[#ffdb70] ${level === 'beginner' ? 'w-1/3' : level === 'intermediate' ? 'w-2/3' : 'w-full'}`}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tools & Platforms Group */}
            <div className="p-5 rounded-2xl bg-[#2b2b2c] border border-[#383838] space-y-3 shadow-sm print-skill-bg md:col-span-2">
              <h3 className="font-bold text-[#ffdb70] text-xs uppercase tracking-wider mb-3">Tools & Platforms</h3>
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
                    <div className="w-full h-1.5 bg-[#383838] rounded-full overflow-hidden print-skill-bar">
                      <div className={`h-full rounded-full bg-[#ffdb70] ${level === 'beginner' ? 'w-1/3' : level === 'intermediate' ? 'w-2/3' : 'w-full'}`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cloud & Deployment Group */}
            <div className="p-5 rounded-2xl bg-[#2b2b2c] border border-[#383838] space-y-3 shadow-sm print-skill-bg md:col-span-2">
              <h3 className="font-bold text-[#ffdb70] text-xs uppercase tracking-wider mb-3">Cloud & Deployment</h3>
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
                    <div className="w-full h-1.5 bg-[#383838] rounded-full overflow-hidden print-skill-bar">
                      <div className={`h-full rounded-full bg-[#ffdb70] ${level === 'beginner' ? 'w-1/3' : level === 'mid' ? 'w-1/2' : level === 'intermediate' ? 'w-2/3' : 'w-full'}`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Process & Methodology Group */}
            <div className="p-5 rounded-2xl bg-[#2b2b2c] border border-[#383838] space-y-3 shadow-sm print-skill-bg md:col-span-2">
              <h3 className="font-bold text-[#ffdb70] text-xs uppercase tracking-wider mb-3">Process & Methodology</h3>
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
                    <div className="w-full h-1.5 bg-[#383838] rounded-full overflow-hidden print-skill-bar">
                      <div className={`h-full rounded-full bg-[#ffdb70] ${level === 'beginner' ? 'w-1/3' : level === 'intermediate' ? 'w-2/3' : 'w-full'}`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills Group */}
            <div className="p-5 rounded-2xl bg-[#2b2b2c] border border-[#383838] space-y-3 shadow-sm print-skill-bg md:col-span-2">
              <h3 className="font-bold text-[#ffdb70] text-xs uppercase tracking-wider mb-3">Soft Skills</h3>
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
                    <div className="w-full h-1.5 bg-[#383838] rounded-full overflow-hidden print-skill-bar">
                      <div className={`h-full rounded-full bg-[#ffdb70] ${level === 'beginner' ? 'w-1/3' : level === 'intermediate' ? 'w-2/3' : 'w-full'}`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>


        {/* Work Experience */}
        <section className="space-y-6">
          <h2 className="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-3">
            <span className="w-1.5 h-6 bg-[#ffdb70] rounded-full"></span>
            Professional Experience
          </h2>

          <div className="border-l border-[#383838] ml-3 pl-6 space-y-8 relative">

            {/* Experience Item 1 */}
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 bg-[#444] border-2 border-[#1e1e1f] rounded-full ring-4 ring-[#ffdb70]"></div>
              
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1 mb-2">
                <div className="flex items-center gap-3">
                  <img src={ItechLogo.src} alt="Itech India Logo" className="w-8 h-8 rounded bg-white object-contain" />
                  <h3 className="font-bold text-white text-base">Associate Software Developer</h3>
                </div>
                <span className="text-xs text-[#ffdb70] font-semibold bg-[#2b2b2c] border border-[#383838] px-2.5 py-1 rounded-lg">
                  Aug 2025 – Present
                </span>
              </div>
              
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3 ml-11">
                Itech India Private Limited
              </h4>
              
              <div className="mt-3 space-y-2 ml-11 text-xs sm:text-sm text-gray-400">
                <ul className="list-disc ml-4 space-y-2 leading-relaxed">
                  <li>Shipped 3+ production full-stack applications by building React.js/NestJS/TypeScript services and deploying them through Git-based CI/CD pipelines (Vercel/Render auto-deploy on push), enabling faster, repeatable releases.</li>
                  <li>Secured user onboarding across 3 authentication providers (Google OAuth, Microsoft OAuth, DigiLocker) by implementing JWT-based authentication and role-based access control (RBAC) on RESTful APIs.</li>
                  <li>Caught and resolved 20+ bugs through manual testing of features and API endpoints before formal SIT/UAT cycles, reducing post-release defects.</li>
                  <li>Optimized MySQL database schema and queries, reducing average query response time by 70% across 3 production applications.</li>
                </ul>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className="relative mt-8">
              <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 bg-[#444] border-2 border-[#1e1e1f] rounded-full ring-4 ring-[#ffdb70]/50"></div>
              
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1 mb-2">
                <div className="flex items-center gap-3">
                  <img src={WorkoholLogo.src} alt="Workohol Logo" className="w-8 h-8 rounded bg-white object-contain" />
                  <h3 className="font-bold text-white text-base">Full-Stack Developer Intern</h3>
                </div>
                <span className="text-xs text-[#ffdb70] font-semibold bg-[#2b2b2c] border border-[#383838] px-2.5 py-1 rounded-lg">
                  Apr 2025 – Jul 2025
                </span>
              </div>
              
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3 ml-11">
                Workcohol
              </h4>
              
              <div className="mt-3 space-y-2 ml-11 text-xs sm:text-sm text-gray-400">
                <ul className="list-disc ml-4 space-y-2 leading-relaxed">
                  <li>Built a real-time e-commerce application featuring 30+ products by developing shopping cart functionality and a responsive UI in React.js, improving usability across the customer journey.</li>
                  <li>Increased frontend development speed and consistency by building reusable React components and responsive layouts across desktop, tablet, and mobile.</li>
                  <li>Developed the e-commerce frontend using Next.js, implementing structured and reusable page components for product-related functionality.</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* Technical Projects */}
        <section className="space-y-6">
          <h2 className="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-3">
            <span className="w-1.5 h-6 bg-[#ffdb70] rounded-full"></span>
            Technical Projects
          </h2>

          <div className="space-y-6">

            {/* Professional / Client Projects */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Professional / Client Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* AiPod – Dental Application */}
                <div className="p-5 rounded-2xl bg-[#2b2b2c] border border-[#383838] space-y-3">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-white text-base">AiPod – Dental Application</h4>
                  </div>
                  <div className="text-[10px] text-[#ffdb70] font-semibold uppercase tracking-widest">
                    React.js, NestJS, TypeORM
                  </div>
                  <ul className="text-xs text-gray-400 list-disc ml-4 space-y-2 leading-relaxed">
                    <li>Built a dental application enabling patients to securely upload photos and X-rays for doctor review.</li>
                    <li>Developed a feature to auto-generate initial diagnosis and treatment plans from uploaded images, reducing review time for patients and doctors.</li>
                  </ul>
                </div>

                {/* Aram Foundation Donation App */}
                <div className="p-5 rounded-2xl bg-[#2b2b2c] border border-[#383838] space-y-3">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-white text-base">Aram Foundation Donation App</h4>
                  </div>
                  <div className="text-[10px] text-[#ffdb70] font-semibold uppercase tracking-widest">
                    React.js, NestJS, Drizzle ORM
                  </div>
                  <ul className="text-xs text-gray-400 list-disc ml-4 space-y-2 leading-relaxed">
                    <li>Built a secure, user-friendly donation platform for online contributions to the foundation.</li>
                    <li>Created a custom admin dashboard allowing staff to manage form fields without writing code.</li>
                  </ul>
                </div>

                {/* IQAC Event Scheduling System */}
                <div className="p-5 rounded-2xl bg-[#2b2b2c] border border-[#383838] space-y-3 md:col-span-2">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-white text-base">IQAC Event Scheduling System</h4>
                  </div>
                  <div className="text-[10px] text-[#ffdb70] font-semibold uppercase tracking-widest">
                    React.js, Vite, NestJS, Drizzle ORM
                  </div>
                  <ul className="text-xs text-gray-400 list-disc ml-4 space-y-2 leading-relaxed">
                    <li>Designed a centralized college event scheduling platform with automated student/staff notifications.</li>
                    <li>Wrote custom backend logic to detect and prevent scheduling conflicts across exams and events.</li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Internship Project */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Internship Project</h3>
              <div className="p-5 rounded-2xl bg-[#2b2b2c] border border-[#383838] space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-white text-base">PupCart – Pet E-Commerce Website</h4>
                    <span className="text-[11px] text-[#ffdb70]">Apr 2025 – Jun 2025</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <a href="https://pup-cart-e-commerce-website-maha100104.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-xs text-[#ffdb70] hover:underline font-semibold flex items-center gap-1">
                      Live Demo
                    </a>
                    <a href="https://github.com/maha100104/PupCart-E-CommerceWebsite" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400 hover:text-white underline">
                      GitHub
                    </a>
                  </div>
                </div>
                <div className="text-[10px] text-[#ffdb70] font-semibold uppercase tracking-widest">
                  React.js, Next.js, Firebase
                </div>
                <ul className="text-xs text-gray-400 list-disc ml-4 space-y-2 leading-relaxed">
                  <li>Built a pet e-commerce site with 30+ product listings and full cart functionality by developing reusable React/Next.js components, delivering a fast, mobile-friendly shopping experience.</li>
                  <li>Structured Firebase as the backend for product and cart data, enabling real-time updates across desktop, tablet, and mobile without a page reload.</li>
                </ul>
              </div>
            </div>

            {/* Self-Initiated Projects */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Self-Initiated Projects</h3>
              <div className="space-y-6">
                
                {/* Full-Stack E-Commerce Platform */}
                <div className="p-5 rounded-2xl bg-[#2b2b2c] border border-[#383838] space-y-3">
                  <div className="flex flex-col gap-2">
                    <div>
                      <h4 className="font-bold text-white text-base">Full-Stack E-Commerce Platform</h4>
                      <span className="text-[11px] text-[#ffdb70]">May 2026 – Sep 2026</span>
                    </div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <a href="https://e-commerce-maha100104.vercel.app/login" target="_blank" rel="noopener noreferrer" className="text-xs text-[#ffdb70] hover:underline font-semibold flex items-center gap-1">
                        Live Demo
                      </a>
                      <a href="https://github.com/maha100104" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400 hover:text-white underline">
                        GitHub
                      </a>
                      <a href="https://jumpshare.com/s/qBqxcaxUb786jBZklM32" target="_blank" rel="noopener noreferrer" className="text-xs text-purple-400 hover:text-purple-300 font-semibold underline flex items-center gap-1">
                        Demo Video
                      </a>
                    </div>
                  </div>
                  <div className="text-[10px] text-[#ffdb70] font-semibold uppercase tracking-widest leading-relaxed">
                    React.js, Vite, TypeScript, NestJS, Drizzle ORM, MySQL, JWT, Tailwind CSS, Docker, AWS (ECS Fargate, ECR, RDS), GitHub Actions
                  </div>
                  <ul className="text-xs text-gray-400 list-disc ml-4 space-y-2 leading-relaxed">
                    <li>Built a full-stack e-commerce platform using React, TypeScript, NestJS, and Drizzle ORM with MySQL, delivering 10+ REST APIs for product search/filtering, cart, wishlist, orders, reviews, and payment simulation, secured with JWT access/refresh authentication, RBAC, and an admin dashboard.</li>
                    <li>Containerized the frontend and backend with Docker and deployed them on AWS ECS Fargate (ECR, Application Load Balancers, RDS MySQL), automating builds and deployments with GitHub Actions CI/CD via AWS OIDC, and securing the setup with VPC, security groups, IAM roles, and Systems Manager Parameter Store.</li>
                  </ul>
                </div>

                {/* TaskFlow – Todo Application */}
                <div className="p-5 rounded-2xl bg-[#2b2b2c] border border-[#383838] space-y-3">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2">
                    <div>
                      <h4 className="font-bold text-white text-base">TaskFlow – Todo Application</h4>
                      <span className="text-[11px] text-[#ffdb70]">Jun 2026 – Jul 2026</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <a href="https://todo-maha100104.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-xs text-[#ffdb70] hover:underline font-semibold flex items-center gap-1">
                        Live Demo
                      </a>
                      <a href="https://github.com/maha100104" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400 hover:text-white underline">
                        GitHub
                      </a>
                    </div>
                  </div>
                  <div className="text-[10px] text-[#ffdb70] font-semibold uppercase tracking-widest leading-relaxed">
                    React.js, Vite, TypeScript, NestJS, Drizzle ORM, MySQL, JWT, Tailwind CSS
                  </div>
                  <ul className="text-xs text-gray-400 list-disc ml-4 space-y-2 leading-relaxed">
                    <li>Built a full-stack task management app with JWT auth, RBAC, and profile management, supporting search, filtering, priorities, and soft delete.</li>
                    <li>Delivered 10+ REST CRUD APIs and a responsive dashboard with task analytics, deployed via CI/CD to Vercel/Render/TiDB Cloud.</li>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* Education */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-3">
            <span className="w-1.5 h-6 bg-[#ffdb70] rounded-full"></span>
            Education
          </h2>
          <div className="p-5 rounded-2xl bg-[#2b2b2c] border border-[#383838] flex flex-col sm:flex-row justify-between sm:items-center gap-4">
            <div>
              <h3 className="font-bold text-white text-base">Sri Sairam Engineering College</h3>
              <p className="text-sm text-gray-400">B.Tech, Information Technology</p>
            </div>
            <div className="text-left sm:text-right text-xs sm:text-sm">
              <span className="text-[#ffdb70] font-semibold block">Graduated May 2025</span>
              <span className="text-gray-500 font-medium">CGPA: 8.29 / 10.0</span>
            </div>
          </div>
        </section>

        {/* Awards */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-3">
            <span className="w-1.5 h-6 bg-[#ffdb70] rounded-full"></span>
            Awards
          </h2>
          <ul className="text-xs sm:text-sm space-y-3 text-gray-400 list-disc ml-4">
            <li>Strategic Excellence Award — Sri Sairam Engineering College</li>
            <li>Best Project Award (2024) — Institution of Engineers (India), Hosur Local Centre</li>
          </ul>
        </section>

      </article>

      {/* CSS Styling helper for printable view */}
      <style jsx global>{`
        @media print {
          body {
            background: white !important;
            color: black !important;
          }
          main {
            padding: 0 !important;
            max-width: 100% !important;
          }
          .no-print {
            display: none !important;
          }
          article {
            background: white !important;
            border: none !important;
            box-shadow: none !important;
            color: black !important;
            padding: 0 !important;
          }
          h1, h2, h3, h4, strong {
            color: black !important;
          }
          p, span, li, ul {
            color: #333 !important;
          }
          .bg-\[\#2b2b2c\] {
            background: #f5f5f5 !important;
            border-color: #ddd !important;
          }
          .text-\[\#ffdb70\] {
            color: #b8860b !important;
          }
          .print-skill-bg {
            background: #e5e7eb !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .print-skill-bar {
            background: #b8860b !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>

    </main>
  );
}
