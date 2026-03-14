"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { useLanguage } from '@/context/language-context';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from '@/components/ui/badge';
import { Calendar, ChevronRight, CheckCircle2 } from 'lucide-react';

const categories = [
  { id: 'all', name: 'Tous les projets' },
  { id: 'web', name: 'Web' },
  { id: 'mobile', name: 'Mobile' },
];

export function Projects() {
  const [activeTab, setActiveTab] = useState('all');
  const { t } = useLanguage();
  const cuberfitLogo = PlaceHolderImages.find(img => img.id === 'cuberfit-logo');

  const projects = [
    {
      id: 'okooltrip',
      title: 'OkoolTrip',
      category: 'web',
      date: t.projects.items.okooltrip.date,
      desc: t.projects.items.okooltrip.desc,
      tasks: t.projects.items.okooltrip.tasks,
      tech: ['Next.js', 'Node.js', 'Prisma', 'PostgreSQL'],
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
      id: 'atos',
      title: 'Atos',
      category: 'mobile',
      date: t.projects.items.atos.date,
      desc: t.projects.items.atos.desc,
      tasks: t.projects.items.atos.tasks,
      tech: ['React Native', 'TypeScript', 'REST API'],
      icon: <h3 className="text-5xl font-bold text-[#0066a1] tracking-tighter">Atos</h3>,
    },
    {
      id: 'fegnseo',
      title: 'FegnSEO',
      category: 'web',
      date: t.projects.items.fegnseo.date,
      desc: t.projects.items.fegnseo.desc,
      tasks: t.projects.items.fegnseo.tasks,
      tech: ['React', 'Python', 'Recharts', 'Node.js'],
      icon: <h3 className="text-2xl font-black text-blue-600 tracking-tighter">Fegn<span className="text-blue-400 italic">SEO</span></h3>,
    },
    {
      id: 'assuraf',
      title: 'Assuraf',
      category: 'web',
      date: t.projects.items.assuraf.date,
      desc: t.projects.items.assuraf.desc,
      tasks: t.projects.items.assuraf.tasks,
      tech: ['Express.js', 'React', 'MongoDB', 'Cloud Storage'],
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
      id: 'cuberfit',
      title: 'Cuberfit',
      category: 'mobile',
      date: t.projects.items.cuberfit.date,
      desc: t.projects.items.cuberfit.desc,
      tasks: t.projects.items.cuberfit.tasks,
      tech: ['React Native', 'Expo', 'Socket.io', 'Node.js'],
      icon: <div className="relative w-48 h-24">
              <Image 
                src={cuberfitLogo?.imageUrl || "/cuberfit.png"} 
                alt="Cuberfit Logo" 
                fill 
                className="object-contain"
                data-ai-hint="cuberfit logo"
                sizes="(max-width: 768px) 100vw, 200px"
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
              {cat.id === 'all' ? t.projects.categories.all : (cat.id === 'web' ? t.projects.categories.web : t.projects.categories.mobile)}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-x-32 gap-y-16 max-w-5xl mx-auto">
          {filteredProjects.map((project) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <div className="group relative">
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
              </DialogTrigger>
              <DialogContent className="max-w-2xl bg-card border-border sm:rounded-[2rem]">
                <DialogHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase text-[10px] tracking-widest">{project.category}</Badge>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground ml-auto">
                      <Calendar className="w-3 h-3" />
                      {project.date}
                    </div>
                  </div>
                  <DialogTitle className="text-3xl font-black tracking-tight">{project.title}</DialogTitle>
                </DialogHeader>
                
                <div className="mt-6 space-y-8">
                  <div>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.desc}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold text-lg flex items-center gap-2">
                      <ChevronRight className="w-5 h-5 text-primary" /> {t.projects.realizations}
                    </h4>
                    <ul className="grid gap-3">
                      {project.tasks.map((task, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 bg-muted/30 p-3 rounded-xl border border-border/50">
                          <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold text-lg flex items-center gap-2">
                      <ChevronRight className="w-5 h-5 text-primary" /> {t.projects.tech}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((skill) => (
                        <Badge key={skill} variant="secondary" className="px-3 py-1 rounded-lg bg-primary/10 text-primary border-none font-medium">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <Button 
            className="bg-[#ff5a60] hover:bg-[#ff454b] text-white font-bold rounded-full px-12 h-14 text-lg shadow-lg shadow-red-200 transition-all hover:scale-105 active:scale-95"
          >
            {t.projects.loadMore}
          </Button>
        </div>
      </div>
    </section>
  );
}
