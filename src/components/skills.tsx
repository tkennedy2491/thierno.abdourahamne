
"use client";

import React from 'react';
import { ArrowUp } from 'lucide-react';

const skillsData = [
  {
    title: 'React.js',
    description: 'React.js pour le développement frontend et interface utilisateur.',
    icon: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-16 h-16 fill-[#61dafb]">
        <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
        <g stroke="#61dafb" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    ),
    borderColor: 'border-b-[#61dafb]'
  },
  {
    title: 'Next.js',
    description: 'Next.js pour le développement frontend et backend.',
    icon: (
      <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center border-2 border-white/20">
        <svg viewBox="0 0 128 128" className="w-10 h-10 fill-white">
          <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm33.1 94.1l-31.4-40.4V94H54.3V34h11.4l31.4 40.4V34h11.4v60.1h-11.4z"/>
        </svg>
      </div>
    ),
    borderColor: 'border-b-white'
  },
  {
    title: 'Node.JS & Express.js',
    description: 'Node.JS et Express.js pour le développement d\'API backend.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-16 h-16">
        <path fill="#83CD29" d="M114.325 80.749c-.29 0-.578-.076-.832-.224l-2.65-1.568c-.396-.221-.203-.3-.072-.345.528-.184.635-.227 1.198-.545.059-.033.136-.021.197.015l2.035 1.209c.074.041.179.041.246 0l7.937-4.581c.075-.042.122-.127.122-.215v-9.16c0-.09-.047-.173-.123-.219l-7.934-4.577c-.074-.042-.171-.042-.245 0l-7.933 4.578c-.076.045-.125.131-.125.218v9.16c0 .088.049.171.125.212l2.174 1.257c1.18.589 1.903-.105 1.903-.803v-9.045c0-.127.103-.228.23-.228h1.007c.125 0 .229.101.229.228v9.045c0 1.574-.857 2.477-2.35 2.477-.459 0-.82 0-1.828-.496l-2.081-1.198c-.515-.298-.832-.854-.832-1.448v-9.16c0-.595.317-1.15.832-1.446l7.937-4.587c.502-.283 1.169-.283 1.667 0l7.937 4.587c.514.297.833.852.833 1.446v9.16c0 .595-.319 1.148-.833 1.448l-7.937 4.582c-.252.147-.539.223-.834.223M116.778 74.438c-3.475 0-4.202-1.595-4.202-2.932 0-.126.103-.229.23-.229h1.026c.115 0 .21.082.228.194.154 1.045.617 1.572 2.718 1.572 1.671 0 2.383-.378 2.383-1.266 0-.512-.202-.891-2.8-1.146-2.172-.215-3.515-.694-3.515-2.433 0-1.601 1.35-2.557 3.612-2.557 2.543 0 3.801.883 3.96 2.777.006.064-.017.127-.06.176-.044.045-.104.073-.168.073h-1.031c-.107 0-.201-.075-.223-.179-.248-1.1-.848-1.451-2.479-1.451-1.825 0-2.037.637-2.037 1.112 0 .577.25.745 2.715 1.071 2.439.323 3.598.779 3.598 2.494.001 1.733-1.441 2.724-3.955 2.724"/><path fill="#404137" d="M97.982 68.43c.313-.183.506-.517.506-.88v-2.354c0-.362-.192-.696-.506-.879l-8.364-4.856c-.315-.183-.703-.184-1.019-.002l-8.416 4.859c-.314.182-.508.517-.508.88v9.716c0 .365.196.703.514.884l8.363 4.765c.308.177.686.178.997.006l5.058-2.812c.161-.09.261-.258.262-.44.001-.184-.097-.354-.256-.445l-8.468-4.86c-.159-.091-.256-.259-.256-.44v-3.046c0-.182.097-.349.254-.439l2.637-1.52c.156-.091.35-.091.507 0l2.637 1.52c.158.091.255.258.255.439v2.396c0 .183.097.351.254.441.158.091.352.091.51-.001l5.039-2.932"/><path fill="#83CD29" d="M88.984 67.974c.061-.034.135-.034.195 0l1.615.933c.06.035.097.1.097.169v1.865c0 .07-.037.134-.097.169l-1.615.932c-.06.035-.135.035-.195 0l-1.614-.932c-.061-.035-.098-.099-.098-.169v-1.865c0-.069.037-.134.098-.169l1.614-.933"/><path fill="#404137" d="M67.083 71.854c0 .09-.048.174-.127.22l-2.89 1.666c-.079.046-.176.046-.254 0l-2.89-1.666c-.079-.046-.127-.13-.127-.22v-3.338c0-.09.049-.175.127-.221l2.89-1.668c.079-.047.176-.047.255 0l2.891 1.668c.078.046.126.131.126.221v3.338zm.781-24.716c-.157-.087-.349-.085-.505.006-.155.092-.251.258-.251.438v12.915c0 .126-.068.244-.177.308-.11.063-.246.063-.356 0l-2.108-1.215c-.314-.181-.701-.181-1.015 0l-8.418 4.858c-.315.182-.509.518-.509.881v9.719c0 .363.194.698.508.881l8.418 4.861c.314.182.702.182 1.017 0l8.42-4.861c.314-.183.508-.518.508-.881v-24.227c0-.368-.2-.708-.521-.888l-5.011-2.795"/><path fill="#83CD29" d="M38.238 59.407c.314-.182.702-.182 1.016 0l8.418 4.857c.314.182.508.518.508.881v9.722c0 .363-.194.699-.508.881l-8.417 4.861c-.314.181-.702.181-1.017 0l-8.415-4.861c-.314-.182-.508-.518-.508-.881v-9.723c0-.362.194-.698.508-.88l8.415-4.857"/><path fill="#404137" d="M22.93 65.064c0-.366-.192-.702-.508-.883l-8.415-4.843c-.144-.084-.303-.127-.464-.133h-.087c-.16.006-.32.049-.464.133l-8.416 4.843c-.313.181-.509.517-.509.883l.018 13.04c0 .182.095.351.254.439.156.094.349.094.505 0l5-2.864c.316-.188.509-.519.509-.882v-6.092c0-.364.192-.699.507-.881l2.13-1.226c.158-.093.332-.137.508-.137.174 0 .352.044.507.137l2.128 1.226c.315.182.509.517.509.881v6.092c0 .363.195.696.509.882l5 2.864c.157.094.353.094.508 0 .155-.089.252-.258.252-.439l.019-13.04"/></svg>
    ),
    borderColor: 'border-b-[#83CD29]'
  },
  {
    title: 'MongoDB Database',
    description: 'MongoDB pour la gestion de base de données des API Backend.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-16 h-16 fill-[#47a248]">
        <path d="M12 0c-.233 0-.466.012-.697.036L11.026.11c-2.43.682-4.42 2.872-5.424 5.92-.816 2.47-.978 5.244-.22 8.016.104.382.217.76.338 1.134l.035.105c.873 2.583 2.185 4.966 3.868 7.02l.142.17.142-.17c1.683-2.054 2.995-4.437 3.868-7.02l.035-.105c.12-.374.234-.752.338-1.134.758-2.772.596-5.546-.22-8.016-1.004-3.048-2.994-5.238-5.424-5.92L12.697.036c-.231-.024-.464-.036-.697-.036z"/>
      </svg>
    ),
    borderColor: 'border-b-[#47a248]'
  },
  {
    title: 'Redux Toolkit',
    description: 'Gestion d\'état globale avec Redux Toolkit pour des applications robustes.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-16 h-16 fill-[#764abc]">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
      </svg>
    ),
    borderColor: 'border-b-[#764abc]'
  },
  {
    title: 'Prisma',
    description: 'ORM Prisma pour la gestion simplifiée et typée des données en base.',
    icon: (
      <svg viewBox="0 0 256 256" className="w-16 h-16 fill-white">
        <path d="M128 0l128 128-128 128L0 128 128 0z"/>
      </svg>
    ),
    borderColor: 'border-b-white'
  },
  {
    title: 'TailwindCSS & ShadcnUI',
    description: 'Design moderne et responsive avec TailwindCSS et ShadcnUI.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-16 h-16 fill-[#38bdf8]">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.2 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.537 6.182 15.176 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.712 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.537 13.382 9.176 12 6.001 12z"/>
      </svg>
    ),
    borderColor: 'border-b-[#38bdf8]'
  },
  {
    title: 'SocketIO',
    description: 'Communication bidirectionnelle en temps réel pour applications interactives.',
    icon: (
      <div className="bg-white text-black font-black rounded-full w-16 h-16 flex items-center justify-center text-4xl shadow-xl">
        <span className="translate-y-[-2px]">⚡</span>
      </div>
    ),
    borderColor: 'border-b-[#25c2a0]'
  }
];

export function Skills() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="skills" className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(circle, #334155 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Compétences et services
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Voici mes compétences et services professionnels que j'ai réalisés.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <div 
              key={index} 
              className={`group bg-[#0f172a]/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:translate-y-[-8px] hover:border-slate-700 hover:shadow-2xl hover:shadow-primary/10 border-b-2 ${skill.borderColor}`}
            >
              <div className="mb-8 transition-transform duration-500 group-hover:scale-110">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {skill.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Floating Scroll to Top Button */}
        <button 
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-50 p-4 bg-white text-black rounded-full shadow-2xl hover:scale-110 transition-transform hidden lg:flex items-center justify-center"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
