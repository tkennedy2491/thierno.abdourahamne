
"use client";

import React from 'react';
import { ArrowUp, Github } from 'lucide-react';

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
    description: 'Next.js pour le développement frontend et backend SSR/Static.',
    icon: (
      <div className="bg-white text-black font-bold rounded-full w-16 h-16 flex items-center justify-center text-3xl border-4 border-slate-800">
        N
      </div>
    ),
    borderColor: 'border-b-white'
  },
  {
    title: 'Angular',
    description: 'Framework Angular pour des applications d\'entreprise robustes.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-16 h-16 fill-[#dd0031]">
        <path d="M12 0L1.7 3.7l1.6 13.9 8.7 6.4 8.7-6.4 1.6-13.9L12 0zm0 3.3l7.1 2.6-1.1 9.4-6 4.4-6-4.4-1.1-9.4 7.1-2.6z"/>
      </svg>
    ),
    borderColor: 'border-b-[#dd0031]'
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
    title: 'REST API',
    description: 'Conception et développement d\'API RESTful standardisées.',
    icon: (
      <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center text-white font-bold text-xs shadow-lg">
        REST
      </div>
    ),
    borderColor: 'border-b-blue-500'
  },
  {
    title: 'GraphQL',
    description: 'Query language pour les API, offrant flexibilité et performance.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-16 h-16 fill-[#e10098]">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5L19.5 8v8L12 19.5 4.5 16V8L12 4.5z"/>
      </svg>
    ),
    borderColor: 'border-b-[#e10098]'
  },
  {
    title: 'Python',
    description: 'Scripting et backend avec Python pour le traitement de données.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-16 h-16">
        <path fill="#3776ab" d="M12 2c-2.7 0-2.5 1.2-2.5 1.2h2.5v1h-3.5s-2.5 0-2.5 2.5 1.2 2.5 1.2 2.5h1.3v-1.2s0-1.3 1.2-1.3h2.5s1.3 0 1.3-1.2V3.2S14.7 2 12 2zm-2.5 1.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1z"/>
        <path fill="#ffd343" d="M12 22c2.7 0 2.5-1.2 2.5-1.2h-2.5v-1h3.5s2.5 0 2.5-2.5-1.2-2.5-1.2-2.5h-1.3v1.2s0 1.3-1.2 1.3h-2.5s-1.3 0-1.3 1.2v2.5s-2.7 1.2 0 1.2zm2.5-1.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"/>
      </svg>
    ),
    borderColor: 'border-b-[#ffd343]'
  },
  {
    title: 'React Native',
    description: 'Développement d\'applications mobiles multiplateformes natives.',
    icon: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-16 h-16 fill-[#05a5d1]">
        <circle cx="0" cy="0" r="2.05" fill="#05a5d1"/>
        <g stroke="#05a5d1" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    ),
    borderColor: 'border-b-[#05a5d1]'
  },
  {
    title: 'Postgres',
    description: 'Base de données relationnelle SQL robuste et performante.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-16 h-16 fill-[#336791]">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
      </svg>
    ),
    borderColor: 'border-b-[#336791]'
  },
  {
    title: 'MongoDB Database',
    description: 'MongoDB pour la gestion de base de données NoSQL des API Backend.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-16 h-16 fill-[#47a248]">
        <path d="M12 0c-.233 0-.466.012-.697.036L11.026.11c-2.43.682-4.42 2.872-5.424 5.92-.816 2.47-.978 5.244-.22 8.016.104.382.217.76.338 1.134l.035.105c.873 2.583 2.185 4.966 3.868 7.02l.142.17.142-.17c1.683-2.054 2.995-4.437 3.868-7.02l.035-.105c.12-.374.234-.752.338-1.134.758-2.772.596-5.546-.22-8.016-1.004-3.048-2.994-5.238-5.424-5.92L12.697.036c-.231-.024-.464-.036-.697-.036z"/>
      </svg>
    ),
    borderColor: 'border-b-[#47a248]'
  },
  {
    title: 'Redis',
    description: 'Cache en mémoire ultra-rapide pour booster les performances.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-16 h-16 fill-[#d82c20]">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm8 14.2L12 20.2l-8-4V8.8l8-4 8 4v7.4z"/>
      </svg>
    ),
    borderColor: 'border-b-[#d82c20]'
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
    title: 'TailwindCSS',
    description: 'Design moderne et responsive avec TailwindCSS utilitaire.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-16 h-16 fill-[#38bdf8]">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.2 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.537 6.182 15.176 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.712 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.537 13.382 9.176 12 6.001 12z"/>
      </svg>
    ),
    borderColor: 'border-b-[#38bdf8]'
  },
  {
    title: 'Bootstrap',
    description: 'Framework CSS classique pour un prototypage rapide.',
    icon: (
      <div className="bg-[#7952b3] text-white font-bold rounded-lg w-16 h-16 flex items-center justify-center text-4xl shadow-xl">
        B
      </div>
    ),
    borderColor: 'border-b-[#7952b3]'
  },
  {
    title: 'Docker',
    description: 'Conteneurisation d\'applications pour un déploiement fiable.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-16 h-16 fill-[#2496ed]">
        <path d="M13.962 11.062h2.33V8.73h-2.33v2.332zm0-2.638h2.33V6.092h-2.33v2.332zm0-2.636h2.33V3.454h-2.33v2.332zm-2.636 5.274h2.33V8.73h-2.33v2.332zm0-2.638h2.33V6.092h-2.33v2.332zm-2.638 2.638h2.33V8.73h-2.33v2.332zm-2.636 0h2.33V8.73h-2.33v2.332zm-2.638 0h2.33V8.73H.778v2.332zm0-2.638h2.33V6.092h-2.33v2.332zm13.116-2.636h2.33V3.454h-2.33v2.332z"/>
      </svg>
    ),
    borderColor: 'border-b-[#2496ed]'
  },
  {
    title: 'Kubernetes',
    description: 'Orchestration de conteneurs à grande échelle.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-16 h-16 fill-[#326ce5]">
        <path d="M12 0L2.3 4.1v15.8L12 24l9.7-4.1V4.1L12 0zm7.6 18.5L12 21.7l-7.6-3.2V5.5L12 2.3l7.6 3.2v13z"/>
      </svg>
    ),
    borderColor: 'border-b-[#326ce5]'
  },
  {
    title: 'Linux',
    description: 'Administration système Linux et gestion de serveurs.',
    icon: (
      <div className="bg-slate-700 rounded-full w-16 h-16 flex items-center justify-center text-white font-bold text-3xl shadow-lg border-2 border-slate-500">
        L
      </div>
    ),
    borderColor: 'border-b-slate-500'
  },
  {
    title: 'Git',
    description: 'Contrôle de version avec Git pour un travail collaboratif.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-16 h-16 fill-[#f05032]">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.187 0L8.708 2.624l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.254.438 1.898l2.756 2.757c.646-.219 1.384-.077 1.9.438.78.78.78 2.047 0 2.827-.78.781-2.048.781-2.828 0-.516-.516-.659-1.254-.44-1.898l-2.756-2.756V15.19c.219.645.077 1.384-.438 1.9-.78.78-2.047.78-2.827 0-.78-.78-.78-2.047 0-2.827.516-.516 1.25-.659 1.898-.44V9.054c-.219-.645-.077-1.384.438-1.9-.511-.511-.656-1.24-.444-1.883L8.194 2.505.452 10.246c-.603.604-.603 1.582 0 2.187l10.48 10.478c.604.603 1.582.603 2.187 0l10.427-10.477c.603-.604.603-1.582 0-2.187z"/>
      </svg>
    ),
    borderColor: 'border-b-[#f05032]'
  },
  {
    title: 'GitHub',
    description: 'Hébergement de code et workflows CI/CD GitHub Actions.',
    icon: (
      <Github className="w-16 h-16 text-white" />
    ),
    borderColor: 'border-b-slate-400'
  },
  {
    title: 'AWS',
    description: 'Services Cloud Amazon pour l\'infrastructure et l\'hébergement.',
    icon: (
      <svg viewBox="0 0 256 154" className="w-16 h-16 fill-[#FF9900]">
        <path d="M112.5 101.4c-9.1 0-16.3-2-21.7-6.1-5.4-4-8.1-10-8.1-17.8 0-7.8 2.7-13.7 8.1-17.8 5.4-4 12.6-6.1 21.7-6.1s16.3 2 21.7 6.1c5.4 4 8.1 10 8.1 17.8 0 7.8-2.7 13.8-8.1 17.8-5.4 4.1-12.6 6.1-21.7 6.1z"/>
        <path d="M256 122.3l-10.8-15.3c-2.8-4-6.2-4.1-8.5-4.1h-44.5c-4.4 0-7.7 2.2-7.7 6.3 0 2.2.9 4.2 2.6 5.8l10.8 10.3c3.4 3.2 8.1 4.7 12.8 4.7h31.1c5.7 0 10.8-3.4 12.8-8l1.4-3.7v3.7h1.4v0.3z"/>
      </svg>
    ),
    borderColor: 'border-b-[#FF9900]'
  },
  {
    title: 'SocketIO',
    description: 'Communication bidirectionnelle temps réel pour apps interactives.',
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
            Découvrez l'ensemble de mes compétences techniques et services professionnels.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <div 
              key={index} 
              className={`group bg-[#0f172a]/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:translate-y-[-8px] hover:border-slate-700 hover:shadow-2xl hover:shadow-primary/10 border-b-4 ${skill.borderColor}`}
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
