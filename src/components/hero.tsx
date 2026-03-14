
"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Download } from 'lucide-react';

// Icônes de technologies épurées avec contre-rotation intégrée
const TechIcons = {
  React: () => (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-10 h-10 fill-[#61dafb]">
      <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  ),
  NodeJS: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-10 h-10">
      <path fill="#83CD29" d="M114.325 80.749c-.29 0-.578-.076-.832-.224l-2.65-1.568c-.396-.221-.203-.3-.072-.345.528-.184.635-.227 1.198-.545.059-.033.136-.021.197.015l2.035 1.209c.074.041.179.041.246 0l7.937-4.581c.075-.042.122-.127.122-.215v-9.16c0-.09-.047-.173-.123-.219l-7.934-4.577c-.074-.042-.171-.042-.245 0l-7.933 4.578c-.076.045-.125.131-.125.218v9.16c0 .088.049.171.125.212l2.174 1.257c1.18.589 1.903-.105 1.903-.803v-9.045c0-.127.103-.228.23-.228h1.007c.125 0 .229.101.229.228v9.045c0 1.574-.857 2.477-2.35 2.477-.459 0-.82 0-1.828-.496l-2.081-1.198c-.515-.298-.832-.854-.832-1.448v-9.16c0-.595.317-1.15.832-1.446l7.937-4.587c.502-.283 1.169-.283 1.667 0l7.937 4.587c.514.297.833.852.833 1.446v9.16c0 .595-.319 1.148-.833 1.448l-7.937 4.582c-.252.147-.539.223-.834.223M116.778 74.438c-3.475 0-4.202-1.595-4.202-2.932 0-.126.103-.229.23-.229h1.026c.115 0 .21.082.228.194.154 1.045.617 1.572 2.718 1.572 1.671 0 2.383-.378 2.383-1.266 0-.512-.202-.891-2.8-1.146-2.172-.215-3.515-.694-3.515-2.433 0-1.601 1.35-2.557 3.612-2.557 2.543 0 3.801.883 3.96 2.777.006.064-.017.127-.06.176-.044.045-.104.073-.168.073h-1.031c-.107 0-.201-.075-.223-.179-.248-1.1-.848-1.451-2.479-1.451-1.825 0-2.037.637-2.037 1.112 0 .577.25.745 2.715 1.071 2.439.323 3.598.779 3.598 2.494.001 1.733-1.441 2.724-3.955 2.724"/><path fill="#404137" d="M97.982 68.43c.313-.183.506-.517.506-.88v-2.354c0-.362-.192-.696-.506-.879l-8.364-4.856c-.315-.183-.703-.184-1.019-.002l-8.416 4.859c-.314.182-.508.517-.508.88v9.716c0 .365.196.703.514.884l8.363 4.765c.308.177.686.178.997.006l5.058-2.812c.161-.09.261-.258.262-.44.001-.184-.097-.354-.256-.445l-8.468-4.86c-.159-.091-.256-.259-.256-.44v-3.046c0-.182.097-.349.254-.439l2.637-1.52c.156-.091.35-.091.507 0l2.637 1.52c.158.091.255.258.255.439v2.396c0 .183.097.351.254.441.158.091.352.091.51-.001l5.039-2.932"/><path fill="#83CD29" d="M88.984 67.974c.061-.034.135-.034.195 0l1.615.933c.06.035.097.1.097.169v1.865c0 .07-.037.134-.097.169l-1.615.932c-.06.035-.135.035-.195 0l-1.614-.932c-.061-.035-.098-.099-.098-.169v-1.865c0-.069.037-.134.098-.169l1.614-.933"/><path fill="#404137" d="M67.083 71.854c0 .09-.048.174-.127.22l-2.89 1.666c-.079.046-.176.046-.254 0l-2.89-1.666c-.079-.046-.127-.13-.127-.22v-3.338c0-.09.049-.175.127-.221l2.89-1.668c.079-.047.176-.047.255 0l2.891 1.668c.078.046.126.131.126.221v3.338zm.781-24.716c-.157-.087-.349-.085-.505.006-.155.092-.251.258-.251.438v12.915c0 .126-.068.244-.177.308-.11.063-.246.063-.356 0l-2.108-1.215c-.314-.181-.701-.181-1.015 0l-8.418 4.858c-.315.182-.509.518-.509.881v9.719c0 .363.194.698.508.881l8.418 4.861c.314.182.702.182 1.017 0l8.42-4.861c.314-.183.508-.518.508-.881v-24.227c0-.368-.2-.708-.521-.888l-5.011-2.795"/><path fill="#83CD29" d="M38.238 59.407c.314-.182.702-.182 1.016 0l8.418 4.857c.314.182.508.518.508.881v9.722c0 .363-.194.699-.508.881l-8.417 4.861c-.314.181-.702.181-1.017 0l-8.415-4.861c-.314-.182-.508-.518-.508-.881v-9.723c0-.362.194-.698.508-.88l8.415-4.857"/><path fill="#404137" d="M22.93 65.064c0-.366-.192-.702-.508-.883l-8.415-4.843c-.144-.084-.303-.127-.464-.133h-.087c-.16.006-.32.049-.464.133l-8.416 4.843c-.313.181-.509.517-.509.883l.018 13.04c0 .182.095.351.254.439.156.094.349.094.505 0l5-2.864c.316-.188.509-.519.509-.882v-6.092c0-.364.192-.699.507-.881l2.13-1.226c.158-.093.332-.137.508-.137.174 0 .352.044.507.137l2.128 1.226c.315.182.509.517.509.881v6.092c0 .363.195.696.509.882l5 2.864c.157.094.353.094.508 0 .155-.089.252-.258.252-.439l.019-13.04"/></svg>
  ),
  Express: () => (
    <div className="text-white font-bold italic w-10 h-10 flex items-center justify-center text-2xl drop-shadow-xl">ex</div>
  ),
  Prisma: () => (
    <svg viewBox="0 0 256 256" className="w-10 h-10 fill-white">
      <path d="M128 0l128 128-128 128L0 128 128 0z"/>
    </svg>
  ),
  SocketIO: () => (
    <div className="bg-white text-black font-bold rounded-full w-10 h-10 flex items-center justify-center text-[10px] shadow-xl">S.IO</div>
  ),
  Redis: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10 fill-[#d82c20]">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm8 14.2L12 20.2l-8-4V8.8l8-4 8 4v7.4z"/>
    </svg>
  ),
  AWS: () => (
    <svg viewBox="0 0 256 154" className="w-10 h-10 fill-[#FF9900]">
      <path d="M112.5 101.4c-9.1 0-16.3-2-21.7-6.1-5.4-4-8.1-10-8.1-17.8 0-7.8 2.7-13.7 8.1-17.8 5.4-4 12.6-6.1 21.7-6.1s16.3 2 21.7 6.1c5.4 4 8.1 10 8.1 17.8 0 7.8-2.7 13.8-8.1 17.8-5.4 4.1-12.6 6.1-21.7 6.1z"/>
      <path d="M256 122.3l-10.8-15.3c-2.8-4-6.2-4.1-8.5-4.1h-44.5c-4.4 0-7.7 2.2-7.7 6.3 0 2.2.9 4.2 2.6 5.8l10.8 10.3c3.4 3.2 8.1 4.7 12.8 4.7h31.1c5.7 0 10.8-3.4 12.8-8l1.4-3.7v3.7h1.4v0.3z"/>
    </svg>
  ),
  Azure: () => (
    <svg viewBox="0 0 256 161" className="w-10 h-10 fill-[#0078d4]">
      <path d="M11.6 160.8l56.3-80L11.6 4.7C4.1 4.7 0 10.6 0 18.2v124.4c0 10.1 5.9 18.2 11.6 18.2zM128 4.7L67.9 80.8l60.1 76.1L244.4 15.3c7.5 0 11.6-5.9 11.6-13.5v-1.8H128z"/>
    </svg>
  ),
  Docker: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10 fill-[#2496ed]">
      <path d="M13.962 11.062h2.33V8.73h-2.33v2.332zm0-2.638h2.33V6.092h-2.33v2.332zm0-2.636h2.33V3.454h-2.33v2.332zm-2.636 5.274h2.33V8.73h-2.33v2.332zm0-2.638h2.33V6.092h-2.33v2.332zm-2.638 2.638h2.33V8.73h-2.33v2.332zm-2.636 0h2.33V8.73h-2.33v2.332zm-2.638 0h2.33V8.73H.778v2.332zm0-2.638h2.33V6.092h-2.33v2.332zm13.116-2.636h2.33V3.454h-2.33v2.332z"/>
    </svg>
  ),
  MongoDB: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10 fill-[#47a248]">
      <path d="M12 0c-.233 0-.466.012-.697.036L11.026.11c-2.43.682-4.42 2.872-5.424 5.92-.816 2.47-.978 5.244-.22 8.016.104.382.217.76.338 1.134l.035.105c.873 2.583 2.185 4.966 3.868 7.02l.142.17.142-.17c1.683-2.054 2.995-4.437 3.868-7.02l.035-.105c.12-.374.234-.752.338-1.134.758-2.772.596-5.546-.22-8.016-1.004-3.048-2.994-5.238-5.424-5.92L12.697.036c-.231-.024-.464-.036-.697-.036z"/>
    </svg>
  ),
  Postgres: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10 fill-[#336791]">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
    </svg>
  ),
  TS: () => (
    <div className="bg-[#3178c6] text-white font-bold rounded-sm w-10 h-10 flex items-center justify-center text-sm shadow-xl border border-white/10">TS</div>
  ),
  Kubernetes: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10 fill-[#326ce5]">
      <path d="M12 0L2.3 4.1v15.8L12 24l9.7-4.1V4.1L12 0zm7.6 18.5L12 21.7l-7.6-3.2V5.5L12 2.3l7.6 3.2v13z"/>
    </svg>
  ),
  Firebase: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10 fill-[#ffca28]">
      <path d="M3.89 15.67L5.26 17l1.37-1.33L3.89 15.67zM20.11 15.67l-1.37 1.33 1.37-1.33L20.11 15.67zM12 2l-3.3 6.6L2 9.9l5.3 4.6-1.6 7.4 6.3-3.8 6.3 3.8-1.6-7.4 5.3-4.6-6.7-1.3L12 2z"/>
    </svg>
  ),
  JS: () => (
    <div className="bg-[#f7df1e] text-black font-bold rounded-sm w-10 h-10 flex items-center justify-center text-sm shadow-xl">JS</div>
  ),
  DotNet: () => (
    <div className="bg-[#512bd4] text-white font-bold rounded-lg w-10 h-10 flex items-center justify-center text-[10px] shadow-xl">.NET</div>
  ),
  Angular: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10 fill-[#dd0031]">
      <path d="M12 0L1.7 3.7l1.6 13.9 8.7 6.4 8.7-6.4 1.6-13.9L12 0zm0 3.3l7.1 2.6-1.1 9.4-6 4.4-6-4.4-1.1-9.4 7.1-2.6z"/>
    </svg>
  ),
  Tailwind: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10 fill-[#38bdf8]">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.2 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.537 6.182 15.176 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.712 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.537 13.382 9.176 12 6.001 12z"/>
    </svg>
  ),
  Bootstrap: () => (
    <div className="bg-[#7952b3] text-white font-bold rounded-lg w-10 h-10 flex items-center justify-center text-sm shadow-xl">B</div>
  ),
  Next: () => (
    <div className="bg-white text-black font-bold rounded-full w-10 h-10 flex items-center justify-center text-sm border border-slate-200 shadow-xl">N</div>
  ),
  Github: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10 fill-white">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  ),
  Figma: () => (
    <svg viewBox="0 0 38 57" className="w-10 h-10">
      <path fill="#F24E1E" d="M19 0H9.5a9.5 9.5 0 000 19H19V0z"/>
      <path fill="#A259FF" d="M0 28.5A9.5 9.5 0 009.5 38H19V19H9.5A9.5 9.5 0 000 28.5z"/>
      <path fill="#1ABCFE" d="M19 19h9.5a9.5 9.5 0 100-19H19v19z"/>
      <path fill="#0AC17E" d="M38 28.5A9.5 9.5 0 0128.5 38H19V19h9.5A9.5 9.5 0 0138 28.5z"/>
      <path fill="#FF7262" d="M19 57V38h-9.5a9.5 9.5 0 109.5 19z"/>
    </svg>
  ),
  Datadog: () => (
    <div className="bg-[#632ca6] p-1.5 rounded-lg w-10 h-10 flex items-center justify-center shadow-lg">
      <svg viewBox="0 0 24 24" className="w-full h-full fill-white">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
      </svg>
    </div>
  ),
  TensorFlow: () => (
    <svg viewBox="0 0 256 276" className="w-10 h-10">
      <path fill="#FF6F00" d="M128 0L32.2 55.3v220.7L128 165.4l95.8 110.6V55.3L128 0z"/>
      <path fill="#FFA000" d="M128 0v165.4l95.8 110.6V55.3z"/>
    </svg>
  ),
  Strapi: () => (
    <div className="bg-[#4945ff] p-1.5 rounded-lg w-10 h-10 flex items-center justify-center shadow-lg">
      <svg viewBox="0 0 24 24" className="w-full h-full fill-white">
         <path d="M12 2L2 7v10l10 5 10-5V7l-10-5zm0 18l-8-4V8.8l8 4v7.2z"/>
      </svg>
    </div>
  ),
  Laravel: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10 fill-[#FF2D20]">
      <path d="M21.5 4.5l-2.5-1.5-2.5 1.5v3l2.5 1.5 2.5-1.5v-3zM16.5 7.5v6l-2.5 1.5V9l2.5-1.5zM11.5 10.5v6l-2.5 1.5V12l2.5-1.5zM6.5 13.5v6l-2.5 1.5V15l2.5-1.5z"/>
    </svg>
  )
};

// Cercle Extérieur (Infrastructure, Bases de données, Outils Cloud)
const outerOrbitItems = [
  { icon: <TechIcons.AWS />, angle: 0 },
  { icon: <TechIcons.Azure />, angle: 30 },
  { icon: <TechIcons.Docker />, angle: 60 },
  { icon: <TechIcons.Kubernetes />, angle: 90 },
  { icon: <TechIcons.MongoDB />, angle: 120 },
  { icon: <TechIcons.Postgres />, angle: 150 },
  { icon: <TechIcons.Firebase />, angle: 180 },
  { icon: <TechIcons.Redis />, angle: 210 },
  { icon: <TechIcons.Datadog />, angle: 240 },
  { icon: <TechIcons.TensorFlow />, angle: 270 },
  { icon: <TechIcons.Github />, angle: 300 },
  { icon: <TechIcons.Figma />, angle: 330 },
];

// Cercle Intérieur (Core Tech, Languages, Frameworks)
const innerOrbitItems = [
  { icon: <TechIcons.React />, angle: 0 },
  { icon: <TechIcons.NodeJS />, angle: 45 },
  { icon: <TechIcons.Express />, angle: 90 },
  { icon: <TechIcons.Prisma />, angle: 135 },
  { icon: <TechIcons.Laravel />, angle: 180 },
  { icon: <TechIcons.TS />, angle: 225 },
  { icon: <TechIcons.JS />, angle: 270 },
  { icon: <TechIcons.Next />, angle: 315 },
];

const cyclingWords = [
  'backend',
  'frontend',
  'fullstack',
  'javascript',
  'nextjs',
  'angular',
  'reactjs',
  'react native',
  'asp dotnet',
  'mongo db',
  'postgres'
];

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % cyclingWords.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-12 overflow-hidden bg-[#020617]">
      {/* Éléments de fond décoratifs */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start text-left">
          {/* Badge Salut */}
          <div className="inline-flex flex-col items-center mb-8">
            <div className="px-5 py-2 rounded-full bg-[#1e293b]/60 border border-slate-700/50 backdrop-blur-sm shadow-xl flex items-center gap-2 mb-2">
              <span className="text-sm font-bold text-white tracking-wide">Salut! 😉</span>
            </div>
            <div className="flex gap-1">
               <div className="w-2 h-2 rounded-full bg-primary/40" />
               <div className="w-2 h-2 rounded-full bg-primary/60" />
               <div className="w-2 h-2 rounded-full bg-primary/80" />
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold font-headline mb-4 tracking-tight leading-tight">
            Je suis <span className="text-white font-extrabold">Godson</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            <span className="text-[#f97316]">Développeur web</span> <span className="text-[#22c55e]">& mobile</span> <span className="text-white capitalize transition-all duration-300">{cyclingWords[wordIndex]}</span>
          </h2>

          <div className="space-y-6 text-slate-300 text-lg leading-relaxed max-w-2xl mb-12">
            <p>
              Bienvenue sur mon portfolio ! J'espère que vous apprécierez votre visite. Je me spécialise dans le développement Back-End avec <span className="text-[#a78bfa] font-medium">Node.js, Express.js</span>, et le développement Front-End avec <span className="text-[#a78bfa] font-medium">React.js, React native (Expo) et Next.js</span>. J'ai travaillé sur divers projets, notamment des <span className="text-white font-bold">API E-Commerce, Management University, SaaS Vote en ligne et Billeterie</span> ainsi que la conception et le développement de sites web et applications mobiles modernes <span className="text-[#a78bfa] font-medium">React, React native (Expo) & Next</span>, et bien d'autres.
            </p>
            <p>
              Passionné par l'apprentissage de nouvelles technologies, je suis toujours en quête de solutions innovantes. Merci d'avoir visité mon portfolio ! J'espère que mon travail vous plait. <span className="text-[#f97316] font-bold">Bon code ! 👨‍💻 💻</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="px-10 bg-[#1e293b]/80 hover:bg-[#1e293b] border border-slate-700/50 text-white font-bold rounded-full h-14 transition-all backdrop-blur-md shadow-2xl">
              <Link href="#">
                Mon CV <Download className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-10 border-slate-700 hover:bg-white/5 text-white font-bold rounded-full h-14 transition-all shadow-xl bg-transparent">
              <Link href="#contact">Contactez-moi</Link>
            </Button>
          </div>
        </div>

        {/* Roue de compétences avec Double Orbite */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-[550px] h-[550px] flex items-center justify-center group">
            
            {/* Texte Central "Skills" */}
            <div className="relative z-20">
              <h3 className="text-9xl font-black italic text-white tracking-tighter select-none drop-shadow-[0_10px_30px_rgba(255,255,255,0.15)] bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
                Skills
              </h3>
            </div>

            {/* Orbites décoratives (Lignes fines) */}
            <div className="absolute inset-0 border border-slate-800/40 rounded-full scale-100" />
            <div className="absolute inset-0 border border-slate-800/40 rounded-full scale-[0.62]" />

            {/* Cercle EXTÉRIEUR (Gravitation lente) */}
            <div className="absolute inset-0 animate-orbit group-hover:[animation-play-state:paused]">
              {outerOrbitItems.map((item, index) => {
                const radius = 275; 
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
                      <div className="transition-all duration-300 hover:scale-125 cursor-pointer flex items-center justify-center">
                        {item.icon}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Cercle INTÉRIEUR (Gravitation lente) */}
            <div className="absolute inset-0 animate-orbit group-hover:[animation-play-state:paused]">
              {innerOrbitItems.map((item, index) => {
                const radius = 170; 
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
                      <div className="transition-all duration-300 hover:scale-125 cursor-pointer flex items-center justify-center">
                        {item.icon}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Effet de lueur centrale */}
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-[120px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
