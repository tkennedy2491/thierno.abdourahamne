
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Download, MessageCircle, Code2, Globe, Database, Smartphone } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-12 overflow-hidden bg-[#020617]">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start text-left">
          {/* Salut Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <span className="text-sm font-medium text-white">Salut! 👋</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-headline mb-4 tracking-tight leading-tight">
            Je suis <span className="text-white">Godson</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            <span className="text-[#f97316]">Développeur web</span> <span className="text-[#22c55e]">& mobile</span> <span className="text-white font-medium">Typescript</span>
          </h2>

          <div className="space-y-4 text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mb-12">
            <p>
              Bienvenue sur mon portfolio ! J'espère que vous apprécierez votre visite. Je me spécialise dans le développement Back-End avec <span className="text-[#a78bfa] font-medium">Node.js</span>, <span className="text-[#a78bfa] font-medium">Express.js</span>, et le développement Front-End avec <span className="text-[#60a5fa] font-medium">React.js</span>, <span className="text-[#60a5fa] font-medium">React native (Expo)</span> et <span className="text-[#60a5fa] font-medium">Next.js</span>.
            </p>
            <p>
              J'ai travaillé sur divers projets, notamment des <span className="text-white font-bold">API E-Commerce</span>, <span className="text-white font-bold">Management University</span>, <span className="text-white font-bold">SaaS Vote en ligne</span> et <span className="text-white font-bold">Billetterie</span> ainsi que la conception et le développement de sites web et applications mobiles modernes <span className="text-blue-400">React, React native (Expo) & Next</span>, et bien d'autres.
            </p>
            <p>
              Passionné par l'apprentissage de nouvelles technologies, je suis toujours en quête de solutions innovantes. Merci d'avoir visité mon portfolio ! J'espère que mon travail vous plaît. <span className="text-[#f97316] font-bold">Bon code ! 👨‍💻 💻</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="px-8 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-white font-medium rounded-full h-12 transition-all">
              <Link href="#">
                Mon CV <Download className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 border-slate-700 bg-transparent hover:bg-slate-800/50 text-white rounded-full h-12">
              <Link href="#contact">Contactez-moi</Link>
            </Button>
          </div>
        </div>

        {/* Visual Decoration mimicking the Skills circle */}
        <div className="relative hidden lg:flex items-center justify-center animate-in fade-in zoom-in duration-1000">
          <div className="relative w-[450px] h-[450px]">
            {/* Center "Skills" text */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="bg-[#020617] p-8 rounded-full border border-slate-800 shadow-2xl shadow-primary/20">
                <span className="text-6xl font-black text-white/90 tracking-tighter italic">Skills</span>
              </div>
            </div>

            {/* Orbiting icons */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500/10 p-4 rounded-xl border border-blue-500/20">
              <Globe className="w-8 h-8 text-blue-400" />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-green-500/10 p-4 rounded-xl border border-green-500/20">
              <Database className="w-8 h-8 text-green-400" />
            </div>
            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-500/10 p-4 rounded-xl border border-yellow-500/20">
              <span className="text-xl font-bold text-yellow-400">JS</span>
            </div>
            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-cyan-500/10 p-4 rounded-xl border border-cyan-500/20">
              <Code2 className="w-8 h-8 text-cyan-400" />
            </div>
            <div className="absolute top-1/4 right-0 translate-x-1/2 bg-indigo-500/10 p-4 rounded-xl border border-indigo-500/20">
              <span className="text-xl font-bold text-indigo-400">TS</span>
            </div>
            <div className="absolute top-1/4 left-0 -translate-x-1/2 bg-purple-500/10 p-4 rounded-xl border border-purple-500/20">
              <Smartphone className="w-8 h-8 text-purple-400" />
            </div>
            
            {/* Spinning decorative circle */}
            <div className="absolute inset-0 border-2 border-dashed border-slate-800 rounded-full animate-[spin_60s_linear_infinite]" />
          </div>
        </div>
      </div>
    </section>
  );
}
