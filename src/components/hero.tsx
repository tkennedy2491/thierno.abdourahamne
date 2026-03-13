
"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

const titles = [
  "Full-Stack Developer",
  "UI/UX Enthusiast",
  "React & Next.js Specialist",
  "Problem Solver"
];

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = titles[titleIndex];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      } else {
        setDisplayText(
          isDeleting 
            ? currentFullText.substring(0, displayText.length - 1)
            : currentFullText.substring(0, displayText.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <h2 className="text-primary font-semibold tracking-wider mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            WELCOME TO MY WORLD
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold font-headline mb-6 tracking-tight leading-tight">
            Hi, I'm <span className="text-primary">Alex Rivera</span><br />
            <span className="typing-cursor text-secondary">{displayText}</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            I build modern, high-performance web applications that bridge the gap between aesthetics and functionality.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
            <Button asChild size="lg" className="px-8 bg-primary hover:bg-primary/90 text-white font-bold h-12 shadow-lg shadow-primary/20 transition-all hover:translate-y-[-2px]">
              <Link href="#projects">
                View Projects <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 border-border hover:bg-accent/50 h-12">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>

          <div className="flex items-center gap-6">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Connect with me:</p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-muted hover:bg-primary hover:text-white rounded-full transition-all duration-300" aria-label="Github">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-muted hover:bg-primary hover:text-white rounded-full transition-all duration-300" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-muted hover:bg-primary hover:text-white rounded-full transition-all duration-300" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
