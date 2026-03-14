
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
    title: 'Nexus E-Commerce',
    category: 'web',
    icon: <div className="w-16 h-16 rounded-full bg-orange-400 flex items-center justify-center border-4 border-white shadow-lg">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-1 h-4 bg-orange-400 rotate-12 rounded-full" />
            </div>
          </div>,
  },
  {
    id: 'project-2',
    title: 'University Manager',
    category: 'web',
    icon: <div className="flex flex-col items-center">
            <GraduationCap className="w-16 h-16 text-slate-700" strokeWidth={1.5} />
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
    title: 'Parto AI',
    category: 'web',
    icon: <div className="border-2 border-black p-1 flex items-center gap-1 font-bold text-xs">
            <span>PARTO</span>
            <span className="bg-black text-white px-1">AI</span>
          </div>,
  },
  {
    id: 'project-5',
    title: 'Texsoro',
    category: 'mobile',
    icon: <div className="flex items-center gap-1 text-[#7c3aed]">
            <div className="flex gap-0.5">
              <div className="w-1 h-4 bg-current rounded-full" />
              <div className="w-1 h-6 bg-current rounded-full" />
              <div className="w-1 h-3 bg-current rounded-full" />
            </div>
            <span className="text-2xl font-black tracking-tighter">Texsoro</span>
          </div>,
  },
  {
    id: 'project-6',
    title: 'SHAP',
    category: 'mobile',
    icon: <div className="relative">
            <span className="text-4xl font-black italic text-indigo-900 tracking-tighter">SHAP</span>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col gap-0.5">
              <div className="w-3 h-0.5 bg-indigo-400" />
              <div className="w-4 h-0.5 bg-indigo-400" />
              <div className="w-2 h-0.5 bg-indigo-400" />
            </div>
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
