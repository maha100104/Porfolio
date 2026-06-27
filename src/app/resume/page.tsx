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
      document.title = 'MahalakshmiP Resume';
      const timer = setTimeout(() => {
        window.print();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mahalakshmi@example.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handlePrint = () => {
    document.title = 'MahalakshmiP Resume';
    window.print();
  };

  const handleDownload = () => {
    // Triggers download of the PDF placed in the public folder
    const link = document.createElement('a');
    link.href = '/Mahalakshmi_Resume.pdf';
    link.download = 'Mahalakshmi_Resume.pdf';
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
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Mahalakshmi</h1>
            <p className="text-[#ffdb70] font-medium tracking-wide">Full Stack Developer</p>
          </div>
          <div className="text-xs space-y-2 text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-[#ffdb70]">📍</span> Chennai, India
            </div>
            <div className="flex items-center gap-2 cursor-pointer group" onClick={handleCopyEmail}>
              <span className="text-[#ffdb70]">✉️</span>
              <span className="group-hover:text-[#ffdb70] transition-colors">
                {copiedEmail ? 'Copied to Clipboard!' : 'mahalakshmi@example.com'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#ffdb70]">📞</span> +91 98765 43210
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-3">
            <span className="w-1.5 h-6 bg-[#ffdb70] rounded-full"></span>
            Executive Summary
          </h2>
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-gray-300">
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
        </section>

        {/* Software Skills */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-3">
            <span className="w-1.5 h-6 bg-[#ffdb70] rounded-full"></span>
            Software Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Frontend Group */}
            <div className="p-5 rounded-2xl bg-[#2b2b2c] border border-[#383838] space-y-4 shadow-sm print-skill-bg">
              <h3 className="font-bold text-[#ffdb70] text-xs uppercase tracking-wider">Frontend</h3>
              <div className="space-y-3.5">
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-gray-200 flex items-center gap-1.5">
                      <span>⚛</span> React
                    </span>
                    <span className="text-[#ffdb70] text-[10px] font-bold uppercase tracking-wider">Advanced</span>
                  </div>
                  <div className="h-2 w-full bg-[#383838] rounded-full overflow-hidden print-skill-bg">
                    <div className="h-full bg-gradient-to-r from-[#ffdb70] to-[#e5a93b] rounded-full print-skill-bar" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-gray-200 flex items-center gap-1.5">
                      <span>📱</span> React Native
                    </span>
                    <span className="text-[#ffdb70] text-[10px] font-bold uppercase tracking-wider">Advanced</span>
                  </div>
                  <div className="h-2 w-full bg-[#383838] rounded-full overflow-hidden print-skill-bg">
                    <div className="h-full bg-gradient-to-r from-[#ffdb70] to-[#e5a93b] rounded-full print-skill-bar" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Group */}
            <div className="p-5 rounded-2xl bg-[#2b2b2c] border border-[#383838] space-y-4 shadow-sm print-skill-bg">
              <h3 className="font-bold text-[#ffdb70] text-xs uppercase tracking-wider">Backend</h3>
              <div className="space-y-3.5">
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-gray-200 flex items-center gap-1.5">
                      <span>🟦</span> TypeScript
                    </span>
                    <span className="text-[#ffdb70] text-[10px] font-bold uppercase tracking-wider">Advanced</span>
                  </div>
                  <div className="h-2 w-full bg-[#383838] rounded-full overflow-hidden print-skill-bg">
                    <div className="h-full bg-gradient-to-r from-[#ffdb70] to-[#e5a93b] rounded-full print-skill-bar" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-gray-200 flex items-center gap-1.5">
                      <span>🟩</span> NestJS
                    </span>
                    <span className="text-[#ffdb70] text-[10px] font-bold uppercase tracking-wider">Advanced</span>
                  </div>
                  <div className="h-2 w-full bg-[#383838] rounded-full overflow-hidden print-skill-bg">
                    <div className="h-full bg-gradient-to-r from-[#ffdb70] to-[#e5a93b] rounded-full print-skill-bar" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-gray-200 flex items-center gap-1.5">
                      <span>☕</span> Java
                    </span>
                    <span className="text-[#ffdb70] text-[10px] font-bold uppercase tracking-wider text-opacity-80">Intermediate</span>
                  </div>
                  <div className="h-2 w-full bg-[#383838] rounded-full overflow-hidden print-skill-bg">
                    <div className="h-full bg-gradient-to-r from-[#ffdb70] to-[#e5a93b] rounded-full print-skill-bar" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Databases Group */}
            <div className="p-5 rounded-2xl bg-[#2b2b2c] border border-[#383838] space-y-4 shadow-sm print-skill-bg">
              <h3 className="font-bold text-[#ffdb70] text-xs uppercase tracking-wider">Database</h3>
              <div className="space-y-3.5">
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-gray-200 flex items-center gap-1.5">
                      <span>🐬</span> MySQL
                    </span>
                    <span className="text-[#ffdb70] text-[10px] font-bold uppercase tracking-wider text-opacity-80">Intermediate</span>
                  </div>
                  <div className="h-2 w-full bg-[#383838] rounded-full overflow-hidden print-skill-bg">
                    <div className="h-full bg-gradient-to-r from-[#ffdb70] to-[#e5a93b] rounded-full print-skill-bar" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-gray-200 flex items-center gap-1.5">
                      <span>🗄️</span> Drizzle ORM
                    </span>
                    <span className="text-[#ffdb70] text-[10px] font-bold uppercase tracking-wider text-opacity-80">Intermediate</span>
                  </div>
                  <div className="h-2 w-full bg-[#383838] rounded-full overflow-hidden print-skill-bg">
                    <div className="h-full bg-gradient-to-r from-[#ffdb70] to-[#e5a93b] rounded-full print-skill-bar" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools Card */}
            <div className="p-5 rounded-2xl bg-[#2b2b2c] border border-[#383838] space-y-4 shadow-sm print-skill-bg">
              <h3 className="font-bold text-[#ffdb70] text-xs uppercase tracking-wider">Tools</h3>
              <div className="space-y-3.5">
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-gray-200">Git / GitHub</span>
                    <span className="text-[#ffdb70] text-[10px] font-bold uppercase tracking-wider">Intermediate</span>
                  </div>
                  <div className="h-2 w-full bg-[#383838] rounded-full overflow-hidden print-skill-bg">
                    <div className="h-full bg-gradient-to-r from-[#ffdb70] to-[#e5a93b] rounded-full print-skill-bar" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-gray-200">Beekeeper Studio / pgAdmin</span>
                    <span className="text-[#ffdb70] text-[10px] font-bold uppercase tracking-wider">Intermediate</span>
                  </div>
                  <div className="h-2 w-full bg-[#383838] rounded-full overflow-hidden print-skill-bg">
                    <div className="h-full bg-gradient-to-r from-[#ffdb70] to-[#e5a93b] rounded-full print-skill-bar" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Work Experience */}
        <section className="space-y-6">
          <h2 className="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-3">
            <span className="w-1.5 h-6 bg-[#ffdb70] rounded-full"></span>
            Experience
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
                  Aug 2025 — Present
                </span>
              </div>
              
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3 ml-11">
                Itech India Private Limited
              </h4>
              
              <div className="mt-3 space-y-4 ml-11">
                <p className="text-xs text-gray-400 leading-relaxed">
                  Full-stack development of web and mobile applications. Engineered scalable REST APIs and streamlined user onboarding with government-backed secure verification systems.
                </p>
                
                <div className="flex flex-wrap gap-1.5">
                  <span className="inline-flex items-center gap-1.5 bg-[#2b2b2c] border border-[#383838] px-2 py-1 rounded text-[10px] font-semibold text-gray-300 print-skill-bg"><span className="text-[12px]">✅</span> Built 4 Production Apps</span>
                  <span className="inline-flex items-center gap-1.5 bg-[#2b2b2c] border border-[#383838] px-2 py-1 rounded text-[10px] font-semibold text-gray-300 print-skill-bg"><span className="text-[12px]">✅</span> Aadhaar Integration</span>
                  <span className="inline-flex items-center gap-1.5 bg-[#2b2b2c] border border-[#383838] px-2 py-1 rounded text-[10px] font-semibold text-gray-300 print-skill-bg"><span className="text-[12px]">✅</span> Google Login</span>
                  <span className="inline-flex items-center gap-1.5 bg-[#2b2b2c] border border-[#383838] px-2 py-1 rounded text-[10px] font-semibold text-gray-300 print-skill-bg"><span className="text-[12px]">⚛️</span> React Native & NestJS</span>
                </div>
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
                  April 2025 — July 2025
                </span>
              </div>
              
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3 ml-11">
                Workcohol
              </h4>
              
              <div className="mt-3 space-y-4 ml-11">
                <p className="text-xs text-gray-400 leading-relaxed">
                  Engineered a highly responsive, real-time e-commerce platform with customizable themes to optimize the user checkout funnel.
                </p>
                
                <div className="flex flex-wrap gap-1.5">
                  <span className="inline-flex items-center gap-1.5 bg-[#2b2b2c] border border-[#383838] px-2 py-1 rounded text-[10px] font-semibold text-gray-300 print-skill-bg"><span className="text-[12px]">✅</span> Built Pet E-commerce</span>
                  <span className="inline-flex items-center gap-1.5 bg-[#2b2b2c] border border-[#383838] px-2 py-1 rounded text-[10px] font-semibold text-gray-300 print-skill-bg"><span className="text-[12px]">✅</span> Firebase Integration</span>
                </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Project 1 */}
            <div className="p-5 rounded-2xl bg-[#2b2b2c] border border-[#383838] space-y-3">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-white text-base">AiPod (Dental Application)</h3>
              </div>
              <div className="text-[10px] text-[#ffdb70] font-semibold uppercase tracking-widest">
                React.JS, Nest.JS, TypeORM
              </div>
              <ul className="text-xs text-gray-400 list-disc ml-4 space-y-2 leading-relaxed">
                <li>Built a dental app allowing patients to securely upload photos and X-rays of their teeth from multiple angles for doctor review.</li>
                <li>Created a feature that automatically generates initial diagnosis and treatment plans based on uploaded images, saving doctor and patient time.</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="p-5 rounded-2xl bg-[#2b2b2c] border border-[#383838] space-y-3">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-white text-base">Leo Muthu Scholarship (LMS)</h3>
              </div>
              <div className="text-[10px] text-[#ffdb70] font-semibold uppercase tracking-widest">
                React Native, Nest.JS, Drizzle ORM
              </div>
              <ul className="text-xs text-gray-400 list-disc ml-4 space-y-2 leading-relaxed">
                <li>Developed a full-stack scholarship portal where students apply online and staff verify details before releasing funds.</li>
                <li>Built secure login systems with Aadhaar and mobile OTPs, giving students a personal dashboard to track applications.</li>
              </ul>
            </div>

            {/* Project 3 */}
            <div className="p-5 rounded-2xl bg-[#2b2b2c] border border-[#383838] space-y-3">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-white text-base">Aram Foundation Donation App</h3>
              </div>
              <div className="text-[10px] text-[#ffdb70] font-semibold uppercase tracking-widest">
                React Native, Nest.JS, Drizzle ORM
              </div>
              <ul className="text-xs text-gray-400 list-disc ml-4 space-y-2 leading-relaxed">
                <li>Created a secure, user-friendly donation platform that makes it easy for users to contribute funds to the foundation online.</li>
                <li>Built a custom admin dashboard that lets foundation staff easily hide, show, or manage specific input fields on the app without writing code.</li>
              </ul>
            </div>

            {/* Project 4 */}
            <div className="p-5 rounded-2xl bg-[#2b2b2c] border border-[#383838] space-y-3">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-white text-base">IQAC Event Scheduling System</h3>
              </div>
              <div className="text-[10px] text-[#ffdb70] font-semibold uppercase tracking-widest">
                React, Vite, Nest.JS, Drizzle ORM
              </div>
              <ul className="text-xs text-gray-400 list-disc ml-4 space-y-2 leading-relaxed">
                <li>Designed a centralized college management platform to easily schedule exams and notify students/staff of events.</li>
                <li>Wrote custom backend logic to automatically prevent scheduling conflicts, ensuring that exams and college events never overlap.</li>
              </ul>
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
              <p className="text-sm text-gray-400">B.Tech Information Technology</p>
            </div>
            <div className="text-right text-xs sm:text-sm">
              <span className="text-[#ffdb70] font-semibold block">May 2025</span>
              <span className="text-gray-500 font-medium">CGPA: 8.29 / 10.0</span>
            </div>
          </div>
        </section>

        {/* Awards and Certifications */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-3">
            <span className="w-1.5 h-6 bg-[#ffdb70] rounded-full"></span>
            Awards & Certifications
          </h2>
          <ul className="text-xs sm:text-sm space-y-3 text-gray-400 list-disc ml-4">
            <li>Strategic Excellence Award — Sri Sairam Engineering College</li>
            <li>Best Project Award (2024) — Institute of Engineers (India), Hosur Local Center</li>
            <li>Diploma in Computer Application (DCA) — Guru Computers (Scored 89/100)</li>
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
