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
      <path fill="#83CD29" d="M114.325 80.749c-.29 0-.578-.076-.832-.224l-2.65-1.568c-.396-.221-.203-.3-.072-.345.528-.184.635-.227 1.198-.545.059-.033.136-.021.197.015l2.035 1.209c.074.041.179.041.246 0l7.937-4.581c.075-.042.122-.127.122-.215v-9.16c0-.09-.047-.173-.123-.219l-7.934-4.577c-.074-.042-.171-.042-.245 0l-7.933 4.578c-.076.045-.125.131-.125.218v9.16c0 .088.049.171.125.212l2.174 1.257c1.18.589 1.903-.105 1.903-.803v-9.045c0-.127.103-.228.23-.228h1.007c.125 0 .229.101.229.228v9.045c0 1.574-.857 2.477-2.35 2.477-.459 0-.82 0-1.828-.496l-2.081-1.198c-.515-.298-.832-.854-.832-1.448v-9.16c0-.595.317-1.15.832-1.446l7.937-4.587c.502-.283 1.169-.283 1.667 0l7.937 4.587c.514.297.833.852.833 1.446v9.16c0 .595-.319 1.148-.833 1.448l-7.937 4.582c-.252.147-.539.223-.834.223M116.778 74.438c-3.475 0-4.202-1.595-4.202-2.932 0-.126.103-.229.23-.229h1.026c.115 0 .21.082.228.194.154 1.045.617 1.572 2.718 1.572 1.671 0 2.383-.378 2.383-1.266 0-.512-.202-.891-2.8-1.146-2.172-.215-3.515-.694-3.515-2.433 0-1.601 1.35-2.557 3.612-2.557 2.543 0 3.801.883 3.96 2.777.006.064-.017.127-.06.176-.044.045-.104.073-.168.073h-1.031c-.107 0-.201-.075-.223-.179-.248-1.1-.848-1.451-2.479-1.451-1.825 0-2.037.637-2.037 1.112 0 .577.25.745 2.715 1.071 2.439.323 3.598.779 3.598 2.494.001 1.733-1.441 2.724-3.955 2.724"/><path fill="#404137" d="M97.982 68.43c.313-.183.506-.517.506-.88v-2.354c0-.362-.192-.696-.506-.879l-8.364-4.856c-.315-.183-.703-.184-1.019-.002l-8.416 4.859c-.314.182-.508.517-.508.88v9.716c0 .365.196.703.514.884l8.363 4.765c.308.177.686.178.997.006l5.058-2.812c.161-.09.261-.258.262-.44.001-.184-.097-.354-.256-.445l-8.468-4.86c-.159-.091-.256-.259-.256-.44v-3.046c0-.182.097-.349.254-.439l2.637-1.52c.156-.091.35-.091.507 0l2.637 1.52c.158.091.255.258.255.439v2.396c0 .183.097.351.254.441.158.091.352.091.51-.001l5.039-2.932"/><path fill="#83CD29" d="M88.984 67.974c.061-.034.135-.034.195 0l1.615.933c.06.035.097.1.097.169v1.865c0 .07-.037.134-.097.169l-1.615.932c-.06.035-.135.035-.195 0l-1.614-.932c-.061-.035-.098-.099-.098-.169v-1.865c0-.069.037-.134.098-.169l1.614-.933"/><path fill="#404137" d="M67.083 71.854c0 .09-.048.174-.127.22l-2.89 1.666c-.079.046-.176.046-.254 0l-2.89-1.666c-.079-.046-.127-.13-.127-.22v-3.338c0-.09.049-.175.127-.221l2.89-1.668c.079-.047.176-.047.255 0l2.891 1.668c.078.046.126.131.126.221v3.338zm.781-24.716c-.157-.087-.349-.085-.505.006-.155.092-.251.258-.251.438v12.915c0 .126-.068.244-.177.308-.11.063-.246.063-.356 0l-2.108-1.215c-.314-.181-.701-.181-1.015 0l-8.418 4.858c-.315.182-.509.518-.509.881v9.719c0 .363.194.698.508.881l8.418 4.861c.314.182.702.182 1.017 0l8.42-4.861c.314-.183.508-.518.508-.881v-24.227c0-.368-.2-.708-.521-.888l-5.011-2.795"/><path fill="#83CD29" d="M38.238 59.407c.314-.182.702-.182 1.016 0l8.418 4.857c.314.182.508.518.508.881v9.722c0 .363-.194.699-.508.881l-8.417 4.861c-.314.181-.702.181-1.017 0l-8.415-4.861c-.314-.182-.508-.518-.508-.881v-9.723c0-.362.194-.698.508-.88l8.415-4.857"/><path fill="#404137" d="M22.93 65.064c0-.366-.192-.702-.508-.883l-8.415-4.843c-.144-.084-.303-.127-.464-.133h-.087c-.16.006-.32.049-.464.133l-8.416 4.843c-.313.181-.509.517-.509.883l.018 13.04c0 .182.095.351.254.439.156.094.349.094.505 0l5-2.864c.316-.188.509-.519.509-.882v-6.092c0-.364.192-.699.507-.881l2.13-1.226c.158-.093.332-.137.508-.137.174 0 .352.044.507.137l2.128 1.226c.315.182.509.517.509.881v6.092c0 .363.195.696.509.882l5 2.864c.157.094.353.094.508 0 .155-.089.252-.258.252-.439l.019-13.04"/></svg>
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
  AWS: () => (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" className="w-10 h-10">
      <path fill="#252F3E" d="M4.51 7.687c0 .197.02.357.058.475.042.117.096.245.17.384a.233.233 0 01.037.123c0 .053-.032.107-.1.16l-.336.224a.255.255 0 01-.138.048c-.054 0-.107-.026-.16-.074a1.652 1.652 0 01-.192-.251 4.137 4.137 0 01-.165-.315c-.415.491-.936.737-1.564.737-.447 0-.804-.129-1.064-.385-.261-.256-.394-.598-.394-1.025 0-.454.16-.822.484-1.1.325-.278.756-.416 1.304-.416.18 0 .367.016.564.042.197.027.4.07.612.118v-.39c0-.406-.085-.689-.25-.854-.17-.166-.458-.246-.868-.246-.186 0-.377.022-.574.07a4.23 4.23 0 00-.575.181 1.525 1.525 0 01-.186.07.326.326 0 01-.085.016c-.075 0-.112-.054-.112-.166v-.262c0-.085.01-.15.037-.186a.399.399 0 01.15-.113c.185-.096.409-.176.67-.24.26-.07.537-.101.83-.101.633 0 1.096.144 1.394.432.293.288.442.726.442 1.314v1.73h.01zm-2.161.811c.175 0 .356-.032.548-.096.191-.064.362-.182.505-.342a.848.848 0 00.181-.341c.032-.129.054-.283.054-.465V7.03a4.43 4.43 0 00-.49-.09 3.996 3.996 0 00-.5-.033c-.357 0-.618.07-.793.214-.176.144-.26.347-.26.614 0 .25.063.437.196.566.128.133.314.197.559.197zm4.273.577c-.096 0-.16-.016-.202-.054-.043-.032-.08-.106-.112-.208l-1.25-4.127a.938.938 0 01-.049-.214c0-.085.043-.133.128-.133h.522c.1 0 .17.016.207.053.043.032.075.107.107.208l.894 3.535.83-3.535c.026-.106.058-.176.1-.208a.365.365 0 01.214-.053h.425c.102 0 .17.016.213.053.043.032.08.107.101.208l.841 3.578.92-3.578a.458.458 0 01.107-.208.346.346 0 01.208-.053h.495c.085 0 .133.043.133.133 0 .027-.006.054-.01.086a.76.76 0 01-.038.133l-1.283 4.127c-.032.107-.069.177-.111.209a.34.34 0 01-.203.053h-.457c-.101 0-.17-.016-.213-.053-.043-.038-.08-.107-.101-.214L8.213 5.37l-.82 3.439c-.026.107-.058.176-.1.213-.043.038-.118.054-.213.054h-.458zm6.838.144a3.51 3.51 0 01-.82-.096c-.266-.064-.473-.134-.612-.214-.085-.048-.143-.101-.165-.15a.378.378 0 01-.031-.149v-.272c0-.112.042-.166.122-.166a.3.3 0 01.096.016c.032.011.08.032.133.054.18.08.378.144.585.187.213.042.42.064.633.064.336 0 .596-.059.777-.176a.575.575 0 00.277-.508.52.52 0 00-.144-.373c-.095-.102-.276-.193-.537-.278l-.772-.24c-.388-.123-.676-.305-.851-.545a1.275 1.275 0 01-.266-.774c0-.224.048-.422.143-.593.096-.17.224-.32.384-.438.16-.122.34-.213.553-.277.213-.064.436-.091.67-.091.118 0 .24.005.357.021.122.016.234.038.346.06.106.026.208.052.303.085.096.032.17.064.224.096a.46.46 0 01.16.133.289.289 0 01.047.176v.251c0 .112-.042.171-.122.171a.552.552 0 01-.202-.064 2.427 2.427 0 00-1.022-.208c-.303 0-.543.048-.708.15-.165.1-.25.256-.25.475 0 .149.053.277.16.379.106.101.303.202.585.293l.756.24c.383.123.66.294.825.513.165.219.244.47.244.748 0 .23-.047.437-.138.619a1.436 1.436 0 01-.388.47c-.165.133-.362.23-.591.299-.24.075-.49.112-.761.112z"></path>
      <g fill="#F90" fillRule="evenodd" clipRule="evenodd">
        <path d="M14.465 11.813c-1.75 1.297-4.294 1.986-6.481 1.986-3.065 0-5.827-1.137-7.913-3.027-.165-.15-.016-.353.18-.235 2.257 1.313 5.04 2.109 7.92 2.109 1.941 0 4.075-.406 6.039-1.239.293-.133.543.192.255.406z"></path>
        <path d="M15.194 10.98c-.223-.287-1.479-.138-2.048-.069-.17.022-.197-.128-.043-.24 1-.705 2.645-.502 2.836-.267.192.24-.053 1.89-.99 2.68-.143.123-.281.06-.218-.1.213-.53.687-1.72.463-2.003z"></path>
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
  )
};

const outerOrbitItems = [
  { icon: <TechIcons.AWS />, angle: 0 },
  { icon: <TechIcons.Azure />, angle: 30 },
  { icon: <TechIcons.Docker />, angle: 60 },
  { icon: <TechIcons.Kubernetes />, angle: 90 },
  { icon: <TechIcons.Laravel />, angle: 120 },
  { icon: <TechIcons.Angular />, angle: 150 },
  { icon: <TechIcons.Java />, angle: 180 },
  { icon: <TechIcons.DotNet />, angle: 210 },
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
