
"use client";

import React, { useState } from 'react';
import { GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

const categories = [
  { id: 'all', name: 'Tous les projets' },
  { id: 'web', name: 'Web' },
  { id: 'mobile', name: 'Mobile' },
];

export function Projects() {
  const [activeTab, setActiveTab] = useState('all');
  const cuberfitLogo = PlaceHolderImages.find(img => img.id === 'cuberfit-logo');

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
      title: 'Atos',
      category: 'mobile',
      icon: <h3 className="text-5xl font-bold text-[#0066a1] tracking-tighter">Atos</h3>,
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
      icon: <div className="relative w-48 h-24">
              <Image 
                src={cuberfitLogo?.imageUrl || "/cuberfit.png"} 
                alt="Cuberfit Logo" 
                fill 
                className="object-contain"
                data-ai-hint="cuberfit logo"
              />
            </div>,
    }
  ];

  const filteredProjects = projects.filter(project => 
    activeTab === 'all' || project.category === activeTab
  );

  return (
    <section id="projects" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
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

        <div className="grid md:grid-cols-2 gap-x-32 gap-y-16 max-w-5xl mx-auto">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative"
            >
              <div className="aspect-[1.4/1] bg-[#dee2ff] rounded-[2.5rem] flex items-center justify-center transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-indigo-200/50 group-hover:-translate-y-2 cursor-pointer overflow-hidden">
                <div className="transition-transform duration-500 group-hover:scale-110">
                  {project.icon}
                </div>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="mt-4 px-4 opacity-0 group-hover:opacity-100 transition-opacity text-center">
                <span className="font-bold text-slate-700">{project.title}</span>
              </div>
            </div>
          ))}
        </div>

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
