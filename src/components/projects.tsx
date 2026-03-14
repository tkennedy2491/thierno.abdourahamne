
"use client";

import React, { useState } from 'react';
import { GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const categories = [
  { id: 'all', name: 'Tous les projets' },
  { id: 'web', name: 'Web' },
  { id: 'mobile', name: 'Mobile' },
];

const projects = [
  {
    id: 'project-1',
    title: 'OkoolTrip',
    category: 'web',
    icon: <div className="flex items-center gap-1 scale-90">
            <div className="flex items-center font-black text-5xl tracking-tighter">
              <span className="text-slate-900">Ok</span>
              <div className="flex items-center -mx-1.5 translate-y-[2px]">
                <svg viewBox="0 0 100 60" className="w-16 h-10 fill-none stroke-slate-900 stroke-[12]" style={{ strokeLinecap: 'round' }}>
                  <path d="M30,30 A18,18 0 1,0 66,30 A18,18 0 1,0 30,30 M54,30 A18,18 0 1,1 90,30 A18,18 0 1,1 54,30" />
                </svg>
              </div>
              <span className="text-slate-900">l</span>
              <div className="flex items-baseline">
                <span className="text-[#f97316]">Tr</span>
                <div className="relative inline-flex flex-col items-center">
                  <div className="w-2.5 h-2.5 bg-slate-900 rounded-full absolute -top-3" />
                  <span className="text-[#f97316]">i</span>
                </div>
                <span className="text-[#f97316]">p</span>
              </div>
            </div>
            <div className="ml-4 w-14 h-16 bg-[#f97316] rounded-2xl relative flex items-center justify-center shadow-lg">
              <div className="absolute -top-2 w-6 h-4 border-t-4 border-x-4 border-[#f97316] rounded-t-md" />
              <div className="w-8 h-4 border-b-4 border-white rounded-full mt-2" />
            </div>
          </div>,
  },
  {
    id: 'project-2',
    title: 'University Manager',
    category: 'web',
    icon: <div className="flex flex-col items-center">
            < GraduationCap className="w-16 h-16 text-slate-700" strokeWidth={1.5} />
            <div className="h-1.5 w-12 bg-orange-400 rounded-full mt-[-8px]" />
          </div>,
  },
  {
    id: 'project-3',
    title: 'FegnSEO',
    category: 'web',
    icon: <h3 className="text-2xl font-black text-blue-600 tracking-tighter">Fegn<span className="text-blue-400 italic">SEO</span></h3>,
  },
  {
    id: 'project-4',
    title: 'Assuraf',
    category: 'web',
    icon: <div className="flex items-center gap-1">
            <div className="relative w-14 h-14">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path 
                  d="M50,85 C25,85 10,65 10,45 C10,25 30,10 50,10 C70,10 90,25 90,45 L90,85" 
                  fill="none" 
                  stroke="#f97316" 
                  strokeWidth="8" 
                  strokeDasharray="2,4"
                />
                <path 
                  d="M50,70 C35,70 25,58 25,45 C25,32 35,20 50,20 C65,20 75,32 75,45 L75,70" 
                  fill="none" 
                  stroke="#f97316" 
                  strokeWidth="4" 
                  strokeDasharray="1,2"
                />
                <path 
                  d="M42,40 L48,38 L55,42 L52,55 L45,58 L40,50 Z" 
                  fill="#f97316" 
                />
              </svg>
            </div>
            <span className="text-6xl font-black text-[#f97316] -ml-2 -mb-1">f</span>
          </div>,
  },
  {
    id: 'project-5',
    title: 'Cuberfit',
    category: 'mobile',
    icon: <div className="bg-[#2b3de2] px-8 py-5 rounded-2xl flex items-center gap-4 shadow-2xl scale-90">
            <div className="w-14 h-14 relative">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* White base of C */}
                <path 
                  d="M85,55 A35,35 0 1,1 35,25" 
                  fill="none" 
                  stroke="white" 
                  strokeWidth="20"
                  strokeLinecap="butt"
                />
                {/* Light blue wing */}
                <path 
                  d="M12,25 L80,25 L95,45 L40,45 Z" 
                  fill="#5ea3e1"
                />
              </svg>
            </div>
            <span className="text-4xl font-black text-white tracking-tighter">CUBERFIT</span>
          </div>,
  },
  {
    id: 'project-6',
    title: 'Atos',
    category: 'mobile',
    icon: <div className="flex items-center">
            <span className="text-5xl font-bold text-[#0066a1] tracking-tighter">At</span>
            <div className="w-10 h-10 mx-[-2px] relative translate-y-1">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-[#0066a1]">
                <path d="M50,5 C25,5 5,25 5,50 C5,75 25,95 50,95 C55,95 60,94 65,92 C55,85 50,70 50,50 C50,30 55,15 65,8 C60,6 55,5 50,5 Z" />
                <path d="M50,5 C75,5 95,25 95,50 C95,75 75,95 50,95 C45,95 40,94 35,92 C45,85 50,70 50,50 C50,30 45,15 35,8 C40,6 45,5 50,5 Z" />
              </svg>
            </div>
            <span className="text-5xl font-bold text-[#0066a1] tracking-tighter uppercase">s</span>
          </div>,
  }
];

export function Projects() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProjects = projects.filter(project => 
    activeTab === 'all' || project.category === activeTab
  );

  return (
    <section id="projects" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Navigation / Filtres */}
        <div className="flex items-center gap-8 mb-16 overflow-x-auto pb-4 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={cn(
                "text-sm md:text-base font-bold transition-all whitespace-nowrap",
                activeTab === cat.id 
                  ? "text-[#ff5a60] scale-110" 
                  : "text-slate-500 hover:text-slate-700"
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grille de Projets */}
        <div className="grid md:grid-cols-2 gap-x-32 gap-y-16 max-w-5xl mx-auto">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative"
            >
              <div className="aspect-[1.4/1] bg-[#dee2ff] rounded-[2.5rem] flex items-center justify-center transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-indigo-200/50 group-hover:-translate-y-2 cursor-pointer overflow-hidden">
                {/* Contenu de la carte (Logo) */}
                <div className="transition-transform duration-500 group-hover:scale-110">
                  {project.icon}
                </div>

                {/* Overlay au survol */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              {/* Titre discret visible au survol pour garder le contexte */}
              <div className="mt-4 px-4 opacity-0 group-hover:opacity-100 transition-opacity text-center">
                <span className="font-bold text-slate-700">{project.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton Charger Plus */}
        <div className="mt-20 flex justify-center">
          <Button 
            className="bg-[#ff5a60] hover:bg-[#ff454b] text-white font-bold rounded-full px-12 h-14 text-lg shadow-lg shadow-red-200 transition-all hover:scale-105 active:scale-95"
          >
            Charger plus de projets
          </Button>
        </div>
      </div>
    </section>
  );
}
