
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Download } from 'lucide-react';

// Icônes de technologies épurées
const TechIcons = {
  React: () => (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-9 h-9 fill-[#61dafb]">
      <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  ),
  NodeJS: () => (
    <svg viewBox="0 0 256 256" className="w-9 h-9">
      <path fill="#339933" d="M128 0L20.8 61.8v132.4L128 256l107.2-61.8V61.8L128 0zm-13.8 213.6c-20.4-3.5-36.8-19.1-41.5-39.6l-1.3-5.7h23.8l1 3.4c2.6 9 8.8 15.3 17.1 17.5 10.4 2.8 20.5-2.2 24.1-11.9 1.4-3.7 1.5-4.8 1.5-29.2v-25.1l-5.6 5.2c-5.5 5.2-13.2 8-20.9 7.7-18.7-.7-34.4-14.2-39.3-33.7-2-7.9-2-21.7 0-29.6 4.6-18.1 18.2-31.5 35.5-35 8.1-1.6 18.2-.8 25.1 2.1l6.2 2.6v-2.3c0-2 0-2.3 1.7-4.1l1.7-1.8h21.9v88.2c0 62.4-.2 73.1-1.3 78.4-4.8 23.3-24.8 40.2-48.4 41zm21.6-121.2c0-11.7-.3-13.3-2.6-18.1-4.9-10.4-14.8-15.6-26.1-13.8-10 1.6-17.7 8.9-20.8 19.8-1.5 5.2-1.5 15.6 0 20.8 2.8 9.6 9.4 16.5 18.3 19.3 5.4 1.6 13.9 1.3 19-.8 8.1-3.3 12.2-9 12.2-17.1v-10.1zm59.6 33.6c-11.3-4.2-17.3-8.8-19.1-14.4-.8-2.6-.8-8.1 0-10.7 1.7-5.1 6.8-9.4 12.6-10.6 3.6-.8 9.4-.5 12.9.7 7.1 2.3 12 7.7 13.2 14.5l.6 3.1h23.4l-.8-5.7c-2.3-15.6-12.7-27.7-27.4-31.9-8.4-2.4-20.8-2.2-28.9.5-16.7 5.6-27 20.2-27 38.3 0 11.2 3.3 19.7 10.6 27.5 7 7.5 15.6 11.8 30.6 15.3 12.1 2.8 17.5 5.2 20.5 9.1 3.5 4.5 3.9 11.2 1 15.5-2.9 4.3-8.5 6.6-15.1 6.3-8.4-.4-14.6-4.6-16.9-11.4l-.9-2.7h-24.1l.9 5.5c2.4 14.2 11.9 25.1 25.5 29.3 8.3 2.6 20.8 2.6 29 0 14.5-4.5 24.3-15.3 26.3-29 1.1-7.7.3-17.7-2.1-23.7-3-7.5-10.1-13.7-23.9-19z"/>
    </svg>
  ),
  Express: () => (
    <div className="text-white font-bold italic w-9 h-9 flex items-center justify-center text-xl drop-shadow-xl">ex</div>
  ),
  Prisma: () => (
    <svg viewBox="0 0 256 256" className="w-9 h-9 fill-white">
      <path d="M128 0l128 128-128 128L0 128 128 0z"/>
    </svg>
  ),
  SocketIO: () => (
    <div className="bg-white text-black font-bold rounded-full w-9 h-9 flex items-center justify-center text-[10px] shadow-xl">S.IO</div>
  ),
  Redis: () => (
    <svg viewBox="0 0 24 24" className="w-9 h-9 fill-[#d82c20]">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm8 14.2L12 20.2l-8-4V8.8l8-4 8 4v7.4z"/>
    </svg>
  ),
  AWS: () => (
    <svg viewBox="0 0 256 154" className="w-9 h-9 fill-[#FF9900]">
      <path d="M112.5 101.4c-9.1 0-16.3-2-21.7-6.1-5.4-4-8.1-10-8.1-17.8 0-7.8 2.7-13.7 8.1-17.8 5.4-4 12.6-6.1 21.7-6.1s16.3 2 21.7 6.1c5.4 4 8.1 10 8.1 17.8 0 7.8-2.7 13.8-8.1 17.8-5.4 4.1-12.6 6.1-21.7 6.1z"/>
      <path d="M256 122.3l-10.8-15.3c-2.8-4-6.2-4.1-8.5-4.1h-44.5c-4.4 0-7.7 2.2-7.7 6.3 0 2.2.9 4.2 2.6 5.8l10.8 10.3c3.4 3.2 8.1 4.7 12.8 4.7h31.1c5.7 0 10.8-3.4 12.8-8l1.4-3.7v3.7h1.4v0.3z"/>
    </svg>
  ),
  Azure: () => (
    <svg viewBox="0 0 256 161" className="w-9 h-9 fill-[#0078d4]">
      <path d="M11.6 160.8l56.3-80L11.6 4.7C4.1 4.7 0 10.6 0 18.2v124.4c0 10.1 5.9 18.2 11.6 18.2zM128 4.7L67.9 80.8l60.1 76.1L244.4 15.3c7.5 0 11.6-5.9 11.6-13.5v-1.8H128z"/>
    </svg>
  ),
  Docker: () => (
    <svg viewBox="0 0 24 24" className="w-9 h-9 fill-[#2496ed]">
      <path d="M13.962 11.062h2.33V8.73h-2.33v2.332zm0-2.638h2.33V6.092h-2.33v2.332zm0-2.636h2.33V3.454h-2.33v2.332zm-2.636 5.274h2.33V8.73h-2.33v2.332zm0-2.638h2.33V6.092h-2.33v2.332zm-2.638 2.638h2.33V8.73h-2.33v2.332zm-2.636 0h2.33V8.73h-2.33v2.332zm-2.638 0h2.33V8.73H.778v2.332zm0-2.638h2.33V6.092h-2.33v2.332zm13.116-2.636h2.33V3.454h-2.33v2.332z"/>
    </svg>
  ),
  MongoDB: () => (
    <svg viewBox="0 0 24 24" className="w-9 h-9 fill-[#47a248]">
      <path d="M12 0c-.233 0-.466.012-.697.036L11.026.11c-2.43.682-4.42 2.872-5.424 5.92-.816 2.47-.978 5.244-.22 8.016.104.382.217.76.338 1.134l.035.105c.873 2.583 2.185 4.966 3.868 7.02l.142.17.142-.17c1.683-2.054 2.995-4.437 3.868-7.02l.035-.105c.12-.374.234-.752.338-1.134.758-2.772.596-5.546-.22-8.016-1.004-3.048-2.994-5.238-5.424-5.92L12.697.036c-.231-.024-.464-.036-.697-.036z"/>
    </svg>
  ),
  Postgres: () => (
    <svg viewBox="0 0 24 24" className="w-9 h-9 fill-[#336791]">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
    </svg>
  ),
  TS: () => (
    <div className="bg-[#3178c6] text-white font-bold rounded-sm w-9 h-9 flex items-center justify-center text-xs shadow-xl">TS</div>
  ),
  Kubernetes: () => (
    <svg viewBox="0 0 24 24" className="w-9 h-9 fill-[#326ce5]">
      <path d="M12 0L2.3 4.1v15.8L12 24l9.7-4.1V4.1L12 0zm7.6 18.5L12 21.7l-7.6-3.2V5.5L12 2.3l7.6 3.2v13z"/>
    </svg>
  ),
  Firebase: () => (
    <svg viewBox="0 0 24 24" className="w-9 h-9 fill-[#ffca28]">
      <path d="M3.89 15.67L5.26 17l1.37-1.33L3.89 15.67zM20.11 15.67l-1.37 1.33 1.37-1.33L20.11 15.67zM12 2l-3.3 6.6L2 9.9l5.3 4.6-1.6 7.4 6.3-3.8 6.3 3.8-1.6-7.4 5.3-4.6-6.7-1.3L12 2z"/>
    </svg>
  ),
  JS: () => (
    <div className="bg-[#f7df1e] text-black font-bold rounded-sm w-9 h-9 flex items-center justify-center text-xs shadow-xl">JS</div>
  ),
  DotNet: () => (
    <div className="bg-[#512bd4] text-white font-bold rounded-lg w-9 h-9 flex items-center justify-center text-[10px] shadow-xl">.NET</div>
  ),
  Angular: () => (
    <svg viewBox="0 0 24 24" className="w-9 h-9 fill-[#dd0031]">
      <path d="M12 0L1.7 3.7l1.6 13.9 8.7 6.4 8.7-6.4 1.6-13.9L12 0zm0 3.3l7.1 2.6-1.1 9.4-6 4.4-6-4.4-1.1-9.4 7.1-2.6z"/>
    </svg>
  ),
  Tailwind: () => (
    <svg viewBox="0 0 24 24" className="w-9 h-9 fill-[#38bdf8]">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.2 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.537 6.182 15.176 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.712 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.537 13.382 9.176 12 6.001 12z"/>
    </svg>
  ),
  Bootstrap: () => (
    <div className="bg-[#7952b3] text-white font-bold rounded-lg w-9 h-9 flex items-center justify-center text-sm shadow-xl">B</div>
  ),
  Next: () => (
    <div className="bg-white text-black font-bold rounded-full w-9 h-9 flex items-center justify-center text-xs border border-slate-200 shadow-xl">N</div>
  ),
  Github: () => (
    <svg viewBox="0 0 24 24" className="w-9 h-9 fill-white">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  ),
  Figma: () => (
    <svg viewBox="0 0 38 57" className="w-9 h-9">
      <path fill="#F24E1E" d="M19 0H9.5a9.5 9.5 0 000 19H19V0z"/>
      <path fill="#A259FF" d="M0 28.5A9.5 9.5 0 009.5 38H19V19H9.5A9.5 9.5 0 000 28.5z"/>
      <path fill="#1ABCFE" d="M19 19h9.5a9.5 9.5 0 100-19H19v19z"/>
      <path fill="#0AC17E" d="M38 28.5A9.5 9.5 0 0128.5 38H19V19h9.5A9.5 9.5 0 0138 28.5z"/>
      <path fill="#FF7262" d="M19 57V38h-9.5a9.5 9.5 0 109.5 19z"/>
    </svg>
  ),
  Datadog: () => (
    <div className="bg-[#632ca6] p-1.5 rounded-lg w-9 h-9 flex items-center justify-center shadow-lg">
      <svg viewBox="0 0 24 24" className="w-full h-full fill-white">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
      </svg>
    </div>
  ),
  TensorFlow: () => (
    <svg viewBox="0 0 256 276" className="w-9 h-9">
      <path fill="#FF6F00" d="M128 0L32.2 55.3v220.7L128 165.4l95.8 110.6V55.3L128 0z"/>
      <path fill="#FFA000" d="M128 0v165.4l95.8 110.6V55.3z"/>
    </svg>
  ),
  Strapi: () => (
    <div className="bg-[#4945ff] p-1.5 rounded-lg w-9 h-9 flex items-center justify-center shadow-lg">
      <svg viewBox="0 0 24 24" className="w-full h-full fill-white">
         <path d="M12 2L2 7v10l10 5 10-5V7l-10-5zm0 18l-8-4V8.8l8 4v7.2z"/>
      </svg>
    </div>
  )
};

// Cercle Extérieur (Infrastructure, Bases de données, Outils Cloud)
const outerOrbitItems = [
  { icon: <TechIcons.AWS />, angle: 0 },
  { icon: <TechIcons.Azure />, angle: 24 },
  { icon: <TechIcons.Docker />, angle: 48 },
  { icon: <TechIcons.Kubernetes />, angle: 72 },
  { icon: <TechIcons.MongoDB />, angle: 96 },
  { icon: <TechIcons.Postgres />, angle: 120 },
  { icon: <TechIcons.Firebase />, angle: 144 },
  { icon: <TechIcons.Redis />, angle: 168 },
  { icon: <TechIcons.Datadog />, angle: 192 },
  { icon: <TechIcons.TensorFlow />, angle: 216 },
  { icon: <TechIcons.Github />, angle: 240 },
  { icon: <TechIcons.Figma />, angle: 264 },
  { icon: <TechIcons.Angular />, angle: 288 },
  { icon: <TechIcons.Tailwind />, angle: 312 },
  { icon: <TechIcons.Bootstrap />, angle: 336 },
];

// Cercle Intérieur (Core Tech, Languages, Frameworks)
const innerOrbitItems = [
  { icon: <TechIcons.React />, angle: 0 },
  { icon: <TechIcons.NodeJS />, angle: 40 },
  { icon: <TechIcons.Express />, angle: 80 },
  { icon: <TechIcons.Prisma />, angle: 120 },
  { icon: <TechIcons.SocketIO />, angle: 160 },
  { icon: <TechIcons.TS />, angle: 200 },
  { icon: <TechIcons.JS />, angle: 240 },
  { icon: <TechIcons.Next />, angle: 280 },
  { icon: <TechIcons.Strapi />, angle: 320 },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-12 overflow-hidden bg-[#020617]">
      {/* Éléments de fond décoratifs */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start text-left">
          {/* Badge Salut */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#1e293b]/40 border border-slate-700/50 mb-8 backdrop-blur-sm shadow-inner">
            <span className="text-sm font-bold text-white tracking-wide">Salut! 👋</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold font-headline mb-4 tracking-tight leading-tight">
            Je suis <span className="text-white">Godson</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            <span className="text-[#f97316]">Développeur web</span> <span className="text-[#22c55e]">& mobile</span> <span className="text-white font-medium">Typescript</span>
          </h2>

          <div className="space-y-5 text-slate-300 text-lg leading-relaxed max-w-2xl mb-12">
            <p>
              Bienvenue sur mon portfolio ! J'espère que vous apprécierez votre visite. Je me spécialise dans le développement Back-End avec <span className="text-[#a78bfa] font-medium">Node.js</span>, <span className="text-[#a78bfa] font-medium">Express.js</span>, et le développement Front-End avec <span className="text-[#60a5fa] font-medium">React.js</span>, <span className="text-[#60a5fa] font-medium">React native (Expo)</span> et <span className="text-[#60a5fa] font-medium">Next.js</span>. J'ai travaillé sur divers projets, notamment des <span className="text-white font-bold">API E-Commerce, Management University, SaaS Vote en ligne et Billetterie</span> ainsi que la conception et le développement de sites web et applications mobiles modernes <span className="text-[#60a5fa] font-medium">React, React native (Expo) & Next</span>.
            </p>
            <p>
              Passionné par l'apprentissage de nouvelles technologies, je suis toujours en quête de solutions innovantes. <span className="text-[#f97316] font-bold">Bon code ! 👨‍💻 💻</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="px-8 bg-[#1e293b]/60 hover:bg-slate-700/80 border border-slate-700 text-white font-medium rounded-full h-14 transition-all backdrop-blur-sm shadow-xl">
              <Link href="#">
                Mon CV <Download className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 border-slate-700 bg-transparent hover:bg-white/5 text-white font-medium rounded-full h-14 transition-all shadow-lg">
              <Link href="#contact">Contactez-moi</Link>
            </Button>
          </div>
        </div>

        {/* Roue de compétences avec Double Orbite */}
        <div className="relative flex items-center justify-center animate-in fade-in zoom-in duration-1000">
          <div className="relative w-[500px] h-[500px] flex items-center justify-center group">
            
            {/* Texte Central "Skills" */}
            <div className="relative z-20 pointer-events-none">
              <h3 className="text-8xl font-black italic text-white/90 drop-shadow-[0_0_25px_rgba(255,255,255,0.2)] tracking-tighter select-none">
                Skills
              </h3>
            </div>

            {/* Orbites décoratives (Lignes en pointillés) */}
            <div className="absolute inset-0 border border-dashed border-slate-800/30 rounded-full scale-100" />
            <div className="absolute inset-0 border border-dashed border-slate-800/30 rounded-full scale-[0.62]" />

            {/* Cercle EXTÉRIEUR (Gravitation) */}
            <div className="absolute inset-0 animate-orbit group-hover:[animation-play-state:paused]">
              {outerOrbitItems.map((item, index) => {
                const radius = 245; 
                const x = Math.cos((item.angle * Math.PI) / 180) * radius;
                const y = Math.sin((item.angle * Math.PI) / 180) * radius;

                return (
                  <div
                    key={index}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    <div className="animate-counter-orbit group-hover:[animation-play-state:paused]">
                      <div className="transition-transform duration-300 hover:scale-125 cursor-pointer flex items-center justify-center">
                        {item.icon}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Cercle INTÉRIEUR (Gravitation) */}
            <div className="absolute inset-0 animate-orbit group-hover:[animation-play-state:paused]">
              {innerOrbitItems.map((item, index) => {
                const radius = 150; 
                const x = Math.cos((item.angle * Math.PI) / 180) * radius;
                const y = Math.sin((item.angle * Math.PI) / 180) * radius;

                return (
                  <div
                    key={index}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    <div className="animate-counter-orbit group-hover:[animation-play-state:paused]">
                      <div className="transition-transform duration-300 hover:scale-125 cursor-pointer flex items-center justify-center">
                        {item.icon}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Effet de lueur centrale */}
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-[100px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
