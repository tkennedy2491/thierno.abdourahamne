
"use client";

import React from 'react';
import { Lightbulb, Code2, Smartphone, MessageCircle, Cloud, Zap, ShieldCheck, Megaphone, Search, Wrench } from 'lucide-react';

export function Services() {
  return (
    <section id="services" className="py-24 bg-white text-slate-900 relative overflow-hidden">
      {/* Petit motif de points en haut à gauche */}
      <div className="absolute top-10 left-10 opacity-20 pointer-events-none">
        <div className="grid grid-cols-4 gap-2">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.2 rounded-full bg-slate-400" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-slate-800 tracking-tight">
            Services et Expertise
          </h2>
          
          <div className="inline-block relative mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-[#6366f1] px-4">
              Des Solutions Complètes pour les Entreprises Modernes
            </h3>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-[#6366f1] rounded-full" />
          </div>
          
          <p className="text-slate-500 max-w-3xl mx-auto text-xl leading-relaxed mt-10 font-medium">
            De la conception au déploiement, je propose des services de développement complets 
            alliant excellence technique et valeur ajoutée pour votre entreprise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {/* Card 1: Consulting (Indigo) */}
          <div className="bg-[#7c3aed] text-white p-12 rounded-[40px] shadow-2xl flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-indigo-200">
            <div className="mb-10 w-24 h-24 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
                <circle cx="50" cy="50" r="45" fill="rgba(255,255,255,0.1)" />
                <path d="M30 70 L70 70 L50 30 Z" fill="#ff4d4d" />
                <circle cx="35" cy="40" r="8" fill="#4ade80" />
                <circle cx="65" cy="45" r="10" fill="#60a5fa" />
                <rect x="40" y="60" width="20" height="5" fill="white" rx="2" />
              </svg>
            </div>
            <h4 className="text-2xl font-black mb-8 leading-tight px-2">
              Conseil Technique et Stratégie
            </h4>
            <p className="text-white/90 text-base leading-relaxed font-medium">
              Conseil technologique stratégique pour startups et entreprises. Accompagnement expert sur le choix de stack technique, la conception d'architecture et les solutions évolutives.
            </p>
          </div>

          {/* Card 2: Web Dev (Yellow) */}
          <div className="bg-[#facc15] text-slate-900 p-12 rounded-[40px] shadow-2xl flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-yellow-100">
            <div className="mb-10 w-24 h-24 flex items-center justify-center">
              <div className="bg-white/40 p-4 rounded-3xl backdrop-blur-sm">
                <Code2 className="w-16 h-16 text-slate-800" strokeWidth={2.5} />
              </div>
            </div>
            <h4 className="text-2xl font-black mb-8 leading-tight px-2">
              Développement Web Full-Stack
            </h4>
            <p className="text-slate-800 text-base leading-relaxed font-medium">
              Développement d'applications web de bout en bout avec React, Next.js, TypeScript et Node.js. Création de plateformes réactives, rapides et sécurisées avec les frameworks modernes.
            </p>
          </div>

          {/* Card 3: Mobile Dev (Teal) */}
          <div className="bg-[#1e7a85] text-white p-12 rounded-[40px] shadow-2xl flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-teal-900/20">
            <div className="mb-10 w-24 h-24 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-50" />
                <Smartphone className="w-20 h-20 text-white relative z-10" strokeWidth={1.5} />
              </div>
            </div>
            <h4 className="text-2xl font-black mb-8 leading-tight px-2">
              Développement d'Apps Mobiles
            </h4>
            <p className="text-white/90 text-base leading-relaxed font-medium">
              Solutions mobiles multiplateformes avec React Native pour iOS et Android. Livraison d'applications de qualité native avec capacités hors ligne et expérience utilisateur fluide.
            </p>
          </div>

          {/* Card 4: Cloud Architecture & DevOps (Orange) */}
          <div className="bg-[#ff7e4d] text-white p-12 rounded-[40px] shadow-2xl flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-orange-200">
            <div className="mb-10 w-24 h-24 flex items-center justify-center">
              <div className="relative">
                <Megaphone className="w-16 h-16 text-white rotate-[-12deg]" />
                <div className="absolute -bottom-2 -right-2 bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
            <h4 className="text-2xl font-black mb-8 leading-tight px-2">
              Architecture Cloud et DevOps
            </h4>
            <p className="text-white/90 text-base leading-relaxed font-medium">
              Infrastructure cloud évolutive sur AWS, Azure ou GCP. Conteneurisation avec Docker/Kubernetes, déploiements automatisés, surveillance et infrastructure-as-code.
            </p>
          </div>

          {/* Card 5: Performance & SEO Optimization (Pink) */}
          <div className="bg-[#ff8090] text-white p-12 rounded-[40px] shadow-2xl flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-pink-200">
            <div className="mb-10 w-24 h-24 flex items-center justify-center">
              <div className="relative bg-white/20 p-6 rounded-2xl backdrop-blur-md border border-white/30">
                <Search className="w-12 h-12 text-white" />
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-yellow-400 text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  SEO
                </div>
              </div>
            </div>
            <h4 className="text-2xl font-black mb-8 leading-tight px-2">
              Optimisation Performance et SEO
            </h4>
            <p className="text-white/90 text-base leading-relaxed font-medium">
              Audits de performance web, optimisation des Core Web Vitals et SEO technique. Amélioration de la vitesse de page et de l'accessibilité pour maximiser l'engagement utilisateur.
            </p>
          </div>

          {/* Card 6: Code Review & Team Leadership (Olive) */}
          <div className="bg-[#7a9455] text-white p-12 rounded-[40px] shadow-2xl flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-green-900/20">
            <div className="mb-10 w-24 h-24 flex items-center justify-center">
              <div className="bg-black/10 p-5 rounded-full border-2 border-white/20">
                <Wrench className="w-14 h-14 text-yellow-400 rotate-45" />
              </div>
            </div>
            <h4 className="text-2xl font-black mb-8 leading-tight px-2">
              Revue de Code et Leadership
            </h4>
            <p className="text-white/90 text-base leading-relaxed font-medium">
              Leadership technique, revues de qualité de code, audits de sécurité et mentorat. Refactorisation de systèmes existants et mise en place de bonnes pratiques de développement.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <div className="fixed bottom-10 right-10 z-[60]">
        <button className="bg-gradient-to-br from-[#6366f1] to-[#a855f7] p-5 rounded-full shadow-[0_10px_40px_rgba(99,102,241,0.5)] cursor-pointer hover:scale-110 active:scale-95 transition-all group">
          <MessageCircle className="w-8 h-8 text-white group-hover:rotate-12 transition-transform" />
        </button>
      </div>
    </section>
  );
}
