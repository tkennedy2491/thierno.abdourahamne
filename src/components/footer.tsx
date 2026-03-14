
"use client";

import React from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowRight, ChevronUp, Code2, Coffee, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-background pt-12 pb-8 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Box */}
        <div className="bg-[#020617] border border-slate-800 rounded-[2.5rem] p-10 md:p-16 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Column 1: À propos */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white relative inline-block">
                À propos
                <span className="absolute -bottom-1 left-0 w-8 h-1 bg-primary rounded-full"></span>
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Développeur web passionné par la création d'applications web modernes et performantes, avec une expertise en React, Next.js et TypeScript.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://github.com" className="text-slate-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" className="text-slate-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" className="text-slate-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="mailto:thierno.241991@gmail.com" className="text-slate-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Column 2: Liens rapides */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white relative inline-block">
                Liens rapides
                <span className="absolute -bottom-1 left-0 w-8 h-1 bg-primary rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#home" className="text-slate-400 hover:text-white text-sm transition-colors">Accueil</Link>
                </li>
                <li>
                  <Link href="#projects" className="text-slate-400 hover:text-white text-sm transition-colors">Projets</Link>
                </li>
                <li>
                  <Link href="#contact" className="text-slate-400 hover:text-white text-sm transition-colors">Contact</Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors">CV</Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white relative inline-block">
                Services
                <span className="absolute -bottom-1 left-0 w-8 h-1 bg-primary rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-slate-400 text-sm">
                  <Code2 className="w-4 h-4 text-primary/50" /> Développement Front-end
                </li>
                <li className="flex items-center gap-2 text-slate-400 text-sm">
                  <Code2 className="w-4 h-4 text-primary/50" /> Développement Back-end
                </li>
                <li className="flex items-center gap-2 text-slate-400 text-sm">
                  <Code2 className="w-4 h-4 text-primary/50" /> Applications React/Next.js
                </li>
                <li className="flex items-center gap-2 text-slate-400 text-sm">
                  <Code2 className="w-4 h-4 text-primary/50" /> Intégration API
                </li>
                <li className="flex items-center gap-2 text-slate-400 text-sm">
                  <Code2 className="w-4 h-4 text-primary/50" /> Optimisation de performance
                </li>
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white relative inline-block">
                Newsletter
                <span className="absolute -bottom-1 left-0 w-8 h-1 bg-primary rounded-full"></span>
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Abonnez-vous pour recevoir mes derniers articles et actualités.
              </p>
              <div className="relative group">
                <Input 
                  type="email" 
                  placeholder="Votre email" 
                  className="bg-slate-900/50 border-slate-700 text-white rounded-full pr-12 focus:ring-primary focus:border-primary h-12"
                />
                <button className="absolute right-1 top-1 bottom-1 w-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Développé avec passion. Tous droits réservés.
            </p>
            
            <div className="flex items-center gap-1 text-slate-500 text-sm">
              Fait avec <Heart className="w-4 h-4 text-red-500 inline fill-red-500" /> et <Coffee className="w-4 h-4 text-orange-500 inline" />
            </div>
          </div>

          {/* Scroll to Top Arrow Button */}
          <button 
            onClick={scrollToTop}
            className="absolute -bottom-6 right-6 md:right-12 w-12 h-12 bg-white text-black rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-10"
            aria-label="Retour en haut"
          >
            <ChevronUp className="w-6 h-6" />
          </button>
        </div>
      </div>
    </footer>
  );
}
