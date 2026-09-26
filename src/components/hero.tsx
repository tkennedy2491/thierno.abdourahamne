
"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Download } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

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
      <path fill="#83CD29" d="M114.325 80.749c-.29 0-.578-.076-.832-.224l-2.65-1.568c-.396-.221-.203-.3-.072-.345.528-.184.635-.227 1.198-.545.059-.033.136-.021.197.015l2.035 1.209c.074.041.179.041.246 0l7.937-4.581c.075-.042.122-.127.122-.215v-9.16c0-.09-.047-.173-.123-.219l-7.934-4.577c-.074-.042-.171-.042-.245 0l-7.933 4.578c-.076.045-.125.131-.125.218v9.16c0 .088.049.171.125.212l2.174 1.257c1.18.589 1.903-.105 1.903-.803v-9.045c0-.127.103-.228.23-.228h1.007c.125 0 .229.101.229.228v9.045c0 1.574-.857 2.477-2.35 2.477-.459 0-.82 0-1.828-.496l-2.081-1.198c-.515-.298-.832-.854-.832-1.448v-9.16c0-.595.317-1.15.832-1.446l7.937-4.587c.502-.283 1.169-.283 1.667 0l7.937 4.587c.514.297.833.852.833 1.446v9.16c0 .595-.319 1.148-.833 1.448l-7.937 4.582c-.252.147-.539.223-.834.223M116.778 74.438c-3.475 0-4.202-1.595-4.202-2.932 0-.126.103-.229.23-.229h1.026c.115 0 .21.082.228.194.154 1.045.617 1.572 2.718 1.572 1.671 0 2.383-.378 2.383-1.266 0-.512-.202-.891-2.8-1.146-2.172-.215-3.515-.694-3.515-2.433 0-1.601 1.35-2.557 3.612-2.557 2.543 0 3.801.883 3.96 2.777.006.064-.017.127-.06.176-.044.045-.104.073-.168.073h-1.031c-.107 0-.201-.075-.223-.179-.248-1.1-.848-1.451-2.479-1.451-1.825 0-2.037.637-2.037 1.112 0 .577.25.745 2.715 1.071 2.439.323 3.598.779 3.598 2.494.001 1.733-1.441 2.724-3.955 2.724"/><path fill="#404137" d="M97.982 68.43c.313-.183.506-.517.506-.88v-2.354c0-.362-.192-.696-.506-.879l-8.364-4.856c-.315-.183-.703-.184-1.019-.002l-8.416 4.859c-.314.182-.508.517-.508.88v9.716c0 .365.196.703.514.884l8.363 4.765c.308.177.686.178.997.006l5.058-2.812c.161-.09.261-.258.262-.44.001-.184-.097-.354-.256-.445l-8.468-4.86c-.159-.091-.256-.259-.256-.44v-3.046c0-.182.097-.349.254-.439l2.637-1.52c.156-.091.35-.091.507 0l2.637 1.52c.158.091.255.258.255.439v2.396c0 .183.097.351.254.441.158.091.352.091.51-.001l5.039-2.932"/><path fill="#83CD29" d="M88.984 67.974c.061-.034.135-.034.195 0l1.615.933c.06.035.097.1.097.169v1.865c0 .07-.037.134-.097.169l-1.615.932c-.06.035-.135.035-.195 0l-1.614-.932c-.061-.035-.098-.099-.098-.169v-1.865c0-.069.037-.134.098-.169l1.614-.933"/><path fill="#404137" d="M67.083 71.854c0 .09-.048.174-.127.22l-2.89 1.666c-.079.046-.176.046-.254 0l-2.89-1.666c-.079-.046-.127-.13-.127-.22v-3.338c0-.09.049-.175.127-.221l2.89-1.668c.079-.047.176-.047.255 0l2.891 1.668c.078.046.126.131.126.221v3.338zm.781-24.716c-.157-.087-.349-.085-.505.006-.155.092-.251.258-.251.438v12.915c0 .126-.068.244-.177.308-.11.063-.246.063-.356 0l-2.108-1.215c-.314-.181-.701-.181-1.015 0l-8.418 4.858c-.315.182-.509.518-.509.881v9.719c0 .363.194.698.508.881v-9.719zm0 0c0 .363.194.698.508.881l8.418 4.861c.314.182.702.182 1.017 0l8.42-4.861c.314-.183.508-.518.508-.881v-24.227c0-.368-.2-.708-.521-.888l-5.011-2.795"/><path fill="#83CD29" d="M38.238 59.407c.314-.182.702-.182 1.016 0l8.418 4.857c.314.182.508.518.508.881v9.722c0 .363-.194.699-.508.881l-8.417 4.861c-.314.181-.702.181-1.017 0l-8.415-4.861c-.314-.182-.508-.518-.508-.881v-9.723c0-.362.194-.698.508-.88l8.415-4.857"/><path fill="#404137" d="M22.93 65.064c0-.366-.192-.702-.508-.883l-8.415-4.843c-.144-.084-.303-.127-.464-.133h-.087c-.16.006-.32.049-.464.133l-8.416 4.843c-.313.181-.509.517-.509.883l.018 13.04c0 .182.095.351.254.439.156.094.349.094.505 0l5-2.864c.316-.188.509-.519.509-.882v-6.092c0-.364.192-.699.507-.881l2.13-1.226c.158-.093.332-.137.508-.137.174 0 .352.044.507.137l2.128 1.226c.315.182.509.517.509.881v6.092c0 .363.195.696.509.882l5 2.864c.157.094.353.094.508 0 .155-.089.252-.258.252-.439l.019-13.04"/></svg>
  ),
  Laravel: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10 fill-[#ff2d20]">
      <path d="M23.1 12.2c-.3-.2-.6-.2-.9-.1l-1.1.4V9.3c0-.4-.2-.7-.5-.9L12.5 4c-.3-.2-.7-.2-1 0L3.4 8.4c-.3.2-.5.5-.5.9v10.4c0 .4.2.7.5.9l8.1 4.4c.1.1.3.1.5.1.2 0 .4 0 .5-.1l8.1-4.4c.3-.2.5-.5.5-.9v-6.6l1.1-.4c.3-.1.5-.4.5-.8-.1-.3-.2-.6-.5-.8zm-11.1 9.4l-6.6-3.6V10.1l6.6 3.6v7.9zm1.5-9.3l-6.6-3.6 6.6-3.6 6.6 3.6-6.6 3.6zm6.6 5.7l-6.6 3.6v-7.9l6.6-3.6v7.9z"/>
    </svg>
  ),
  Docker: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10 fill-[#2496ed]">
      <path d="M13.962 11.062h2.33V8.73h-2.33v2.332zm0-2.638h2.33V6.092h-2.33v2.332zm0-2.636h2.33V3.454h-2.33v2.332zm-2.636 5.274h2.33V8.73h-2.33v2.332zm0-2.638h2.33V6.092h-2.33v2.332zm-2.638 2.638h2.33V8.73h-2.33v2.332zm-2.636 0h2.33V8.73h-2.33v2.332zm-2.638 0h2.33V8.73H.778v2.332zm0-2.638h2.33V6.092h-2.33v2.332zm13.116-2.636h2.33V3.454h-2.33v2.332z"/>
    </svg>
  ),
  Azure: () => (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" className="w-10 h-10">
      <g fill="#0089D6">
        <path d="M7.47 12.412l3.348-.592.031-.007-1.722-2.049a291.474 291.474 0 01-1.723-2.058c0-.01 1.779-4.909 1.789-4.926a788.95 788.95 0 012.934 5.066l2.95 5.115.023.039-10.948-.001 3.317-.587zM.9 11.788c0-.003.811-1.412 1.803-3.131L4.507 5.53l2.102-1.764C7.765 2.797 8.714 2 8.717 2a.37.37 0 01-.033.085L6.4 6.981 4.16 11.789l-1.63.002c-.897.001-1.63 0-1.63-.003z" />
      </g>
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
  Java: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10 fill-[#e76f00]">
      <path d="M11.5 0a1.5 1.5 0 00-1.5 1.5c0 1.1.9 2 2 2h3a1.5 1.5 0 000-3h-3.5zm-5 4a1.5 1.5 0 00-1.5 1.5c0 1.1.9 2 2 2h9a1.5 1.5 0 000-3h-9.5zm-3 4a1.5 1.5 0 00-1.5 1.5C2 10.6 2.9 11.5 4 11.5h16a1.5 1.5 0 000-3H3.5zM2 13a1 1 0 00-1 1v7a2 2 0 002 2h18a2 2 0 002-2v-7a1 1 0 00-1-1H2z"/>
    </svg>
  ),
  Angular: () => (
    <svg viewBox="0 0 24 24" className="w-10 h-10 fill-[#dd0031]">
      <path d="M12 0L1.7 3.7l1.6 13.9 8.7 6.4 8.7-6.4 1.6-13.9L12 0zm0 3.3l7.1 2.6-1.1 9.4-6 4.4-6-4.4-1.1-9.4 7.1-2.6z"/>
    </svg>
  ),
  DotNet: () => (
    <div className="bg-[#512bd4] text-white font-bold rounded-lg w-10 h-10 flex items-center justify-center text-[10px] shadow-xl">.NET</div>
  ),
  AI: () => (
    <svg viewBox="0 0 512 512" className="w-10 h-10">
      <title>ai</title>
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="icon" fill="#6366f1" transform="translate(64.000000, 64.000000)">
          <path d="M320,64 L320,320 L64,320 L64,64 L320,64 Z M171.749388,128 L146.817842,128 L99.4840387,256 L121.976629,256 L130.913039,230.977 L187.575039,230.977 L196.319607,256 L220.167172,256 L171.749388,128 Z M260.093778,128 L237.691519,128 L237.691519,256 L260.093778,256 L260.093778,128 Z M159.094727,149.47526 L181.409039,213.333 L137.135039,213.333 L159.094727,149.47526 Z M341.333333,256 L384,256 L384,298.666667 L341.333333,298.666667 L341.333333,256 Z M85.3333333,341.333333 L128,341.333333 L128,384 L85.3333333,384 L85.3333333,341.333333 Z M170.666667,341.333333 L213.333333,341.333333 L213.333333,384 L170.666667,384 L170.666667,341.333333 Z M85.3333333,0 L128,0 L128,42.6666667 L85.3333333,42.6666667 L85.3333333,0 Z M256,341.333333 L298.666667,341.333333 L298.666667,384 L256,384 L256,341.333333 Z M170.666667,0 L213.333333,0 L213.333333,42.6666667 L170.666667,42.6666667 L170.666667,0 Z M256,0 L298.666667,0 L298.666667,42.6666667 L256,42.6666667 L256,0 Z M341.333333,170.666667 L384,170.666667 L384,213.333333 L341.333333,213.333333 L341.333333,170.666667 Z M0,256 L42.6666667,256 L42.6666667,298.666667 L0,298.666667 L0,256 Z M341.333333,85.3333333 L384,85.3333333 L384,128 L341.333333,128 L341.333333,85.3333333 Z M0,170.666667 L42.6666667,170.666667 L42.6666667,213.333333 L0,213.333333 L0,170.666667 Z M0,85.3333333 L42.6666667,85.3333333 L42.6666667,128 L0,128 L0,85.3333333 Z" id="Combined-Shape"></path>
        </g>
      </g>
    </svg>
  ),
  Data: () => (
    <svg viewBox="0 0 512 512" className="w-10 h-10">
      <g>
        <path style={{fill: '#30C9B0'}} d="M216.228,53.061c0,21.029-45.901,38.075-102.509,38.075C57.098,91.135,11.208,74.09,11.208,53.061 s45.89-38.075,102.509-38.075C170.327,14.986,216.228,32.032,216.228,53.061z"></path>
        <path style={{fill: '#30C9B0'}} d="M216.228,53.061v240.365c0,21.029-45.901,38.076-102.509,38.076 c-56.621-0.001-102.511-17.047-102.511-38.075V53.061c0,21.029,45.89,38.075,102.509,38.075 C170.327,91.135,216.228,74.09,216.228,53.061z"></path>
      </g>
      <path style={{fill: '#45CCFF'}} d="M500.779,432.63c0.711,35.528-28.708,64.383-64.243,64.383H246.878 c-23.993,0-44.074-19.036-44.416-43.026c-0.009-0.637-0.007-1.276,0.007-1.917c0.587-28.181,23.469-51.344,51.641-52.271 c10.627-0.35,20.576,2.411,29.035,7.428c-0.243-2.457-0.365-4.938-0.365-7.457c0-42.552,34.499-77.05,77.05-77.05 c32.419,0,60.166,20.035,71.54,48.403c2.08-0.207,4.184-0.316,6.314-0.316C472.104,370.807,500.093,398.372,500.779,432.63z"></path>
      <g>
        <path style={{fill: '#231F20'}} d="M227.436,293.426V53.061c0-32.355-57.208-49.284-113.718-49.284S0,20.706,0,53.061v240.365 c0,32.355,57.208,49.284,113.718,49.284S227.436,325.781,227.436,293.426z M205.02,114.566c0,2.759-4.749,9.741-22.72,16.417 c-18.144,6.74-42.501,10.451-68.581,10.451c-26.085,0-50.442-3.711-68.584-10.451c-17.97-6.675-22.718-13.656-22.718-16.417v-30.92 c21.831,12.351,56.696,18.699,91.301,18.699s69.471-6.347,91.301-18.699v30.92H205.02z M113.718,163.85 c34.607,0,69.471-6.351,91.301-18.703v30.925c0,2.759-4.749,9.741-22.72,16.417c-18.144,6.74-42.501,10.451-68.581,10.451 c-26.085,0-50.442-3.711-68.584-10.451c-17.969-6.673-22.717-13.656-22.717-16.416v-30.925 C44.248,157.499,79.111,163.85,113.718,163.85z M22.416,206.653c21.831,12.353,56.695,18.703,91.301,18.703 s69.471-6.351,91.301-18.703v30.925c0,2.759-4.749,9.741-22.72,16.417c-18.144,6.74-42.501,10.451-68.581,10.451 c-26.085,0-50.442-3.711-68.584-10.451c-17.969-6.675-22.717-13.656-22.717-16.417V206.653z M45.133,36.644 c18.143-6.74,42.499-10.451,68.584-10.451c26.08,0,50.437,3.711,68.581,10.451c17.972,6.676,22.72,13.657,22.72,16.417 c0,2.759-4.749,9.741-22.72,16.417c-18.144,6.74-42.501,10.451-68.581,10.451c-26.085,0-50.442-3.711-68.584-10.451 c-17.969-6.674-22.717-13.657-22.717-16.417C22.416,50.302,27.164,43.319,45.133,36.644z M22.416,293.426v-25.267 c21.831,12.353,56.695,18.703,91.301,18.703s69.471-6.351,91.301-18.703v25.267c0,2.759-4.749,9.741-22.72,16.417 c-18.144,6.74-42.501,10.451-68.581,10.451c-26.085,0-50.442-3.711-68.584-10.451C27.164,303.167,22.416,296.186,22.416,293.426z"></path>
      </g>
    </svg>
  ),
};

const outerOrbitItems = [
  { icon: <TechIcons.AWS />, angle: 0 },
  { icon: <TechIcons.Azure />, angle: 32.7 },
  { icon: <TechIcons.Docker />, angle: 65.4 },
  { icon: <TechIcons.Kubernetes />, angle: 98.1 },
  { icon: <TechIcons.Laravel />, angle: 130.8 },
  { icon: <TechIcons.Angular />, angle: 163.5 },
  { icon: <TechIcons.Java />, angle: 196.2 },
  { icon: <TechIcons.DotNet />, angle: 228.9 },
  { icon: <TechIcons.NodeJS />, angle: 261.6 },
  { icon: <TechIcons.AI />, angle: 294.3 },
  { icon: <TechIcons.Data />, angle: 327 },
];

const innerOrbitItems = [
  { icon: <TechIcons.React />, angle: 0 },
  { icon: <TechIcons.NodeJS />, angle: 90 },
  { icon: <TechIcons.TS />, angle: 180 },
  { icon: <div className="bg-white text-black font-bold rounded-full w-8 h-8 flex items-center justify-center text-xs">N</div>, angle: 270 },
];

const cyclingWords = [
  'Full Stack',
  'ASP.NET Core',
  'React / Angular',
  'Node.js',
  'Azure Cloud',
  'Docker & K8s',
  'Java Spring',
  'Python Data',
];

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % cyclingWords.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-12 overflow-hidden bg-[#020617]">
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start text-left">
          <div className="inline-flex flex-col items-center mb-8">
            <div className="px-5 py-2 rounded-full bg-[#1e293b]/60 border border-slate-700/50 backdrop-blur-sm shadow-xl flex items-center gap-2 mb-2">
              <span className="text-sm font-bold text-white tracking-wide">{t.hero.hi}</span>
            </div>
            <div className="flex gap-1">
               <div className="w-2 h-2 rounded-full bg-primary/40" />
               <div className="w-2 h-2 rounded-full bg-primary/60" />
               <div className="w-2 h-2 rounded-full bg-primary/80" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold font-headline mb-4 tracking-tight leading-tight">
            {t.hero.im} <br /><span className="text-white font-extrabold">Thierno Abdourahmane Diallo</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-[#f97316]">{t.hero.title1}</span> 
            <span 
              key={wordIndex} 
              className="text-white capitalize inline-block animate-in fade-in slide-in-from-bottom-2 duration-500"
            >
              {cyclingWords[wordIndex]}
            </span>
          </h2>

          <div className="space-y-6 text-slate-300 text-lg leading-relaxed max-w-2xl mb-12">
            <p>{t.hero.desc1}</p>
            <p>{t.hero.desc2}</p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="px-10 bg-[#1e293b]/80 hover:bg-[#1e293b] border border-slate-700/50 text-white font-bold rounded-full h-14 transition-all backdrop-blur-md shadow-2xl">
              <a href="/CV__Thierno Abdourahmane_Diallo.pdf" download="CV__Thierno Abdourahmane_Diallo.pdf">
                {t.hero.cvBtn} <Download className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-10 border-slate-700 hover:bg-white/5 text-white font-bold rounded-full h-14 transition-all shadow-xl bg-transparent">
              <Link href="#contact">{t.hero.contactBtn}</Link>
            </Button>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative w-[500px] h-[500px] flex items-center justify-center group">
            <div className="relative z-20">
              <h3 className="text-8xl font-black italic text-white tracking-tighter select-none drop-shadow-[0_10px_30px_rgba(255,255,255,0.15)] bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
                {t.hero.skillsCenter}
              </h3>
            </div>

            <div className="absolute inset-0 border border-slate-800/40 rounded-full scale-100" />
            <div className="absolute inset-0 border border-slate-800/40 rounded-full scale-[0.62]" />

            <div className="absolute inset-0 animate-orbit group-hover:[animation-play-state:paused]">
              {isMounted && outerOrbitItems.map((item, index) => {
                const radius = 250; 
                const x = parseFloat((Math.cos((item.angle * Math.PI) / 180) * radius).toFixed(13));
                const y = parseFloat((Math.sin((item.angle * Math.PI) / 180) * radius).toFixed(13));
                return (
                  <div key={index} className="absolute top-1/2 left-1/2" style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}>
                    <div className="animate-counter-orbit group-hover:[animation-play-state:paused]">
                      <div className="transition-all duration-300 hover:scale-125 cursor-pointer flex items-center justify-center">
                        {item.icon}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="absolute inset-0 animate-orbit group-hover:[animation-play-state:paused]">
              {isMounted && innerOrbitItems.map((item, index) => {
                const radius = 150; 
                const x = parseFloat((Math.cos((item.angle * Math.PI) / 180) * radius).toFixed(13));
                const y = parseFloat((Math.sin((item.angle * Math.PI) / 180) * radius).toFixed(13));
                return (
                  <div key={index} className="absolute top-1/2 left-1/2" style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}>
                    <div className="animate-counter-orbit group-hover:[animation-play-state:paused]">
                      <div className="transition-all duration-300 hover:scale-125 cursor-pointer flex items-center justify-center">
                        {item.icon}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-[120px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
