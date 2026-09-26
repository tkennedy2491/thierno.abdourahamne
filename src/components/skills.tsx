"use client";

import React, { useState, useEffect } from 'react';
import { ArrowUp, Code2, Database, Cloud, Terminal, Award, CheckCircle2, Smartphone } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

export function Skills() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const skillGroups = [
    {
      title: t.skills.frontend,
      description: t.skills.s_react,
      icon: <Smartphone className="w-12 h-12 text-primary" />,
      borderColor: 'border-b-primary',
      skills: ["React Native", "Flutter", "Angular", "TypeScript", "Next.js", "React"]
    },
    {
      title: t.skills.backend,
      description: t.skills.s_node,
      icon: <Terminal className="w-12 h-12 text-green-500" />,
      borderColor: 'border-b-green-500',
      skills: ["ASP.NET Core", "Node.js", "Spring Boot", "Python", "Java", "Express"]
    },
    {
      title: t.skills.cloud,
      description: t.skills.s_cloud,
      icon: <Cloud className="w-12 h-12 text-blue-500" />,
      borderColor: 'border-b-blue-500',
      skills: ["AWS", "Azure", "Databricks", "Spark", "Scala", "Elasticsearch"]
    },
    {
      title: t.skills.devops,
      description: t.skills.s_devops,
      icon: <Database className="w-12 h-12 text-orange-500" />,
      borderColor: 'border-b-orange-500',
      skills: ["PostgreSQL", "MongoDB", "Redis", "Docker", "Kubernetes", "CI/CD"]
    }
  ];

  const certifications = [
    "AWS Cloud Practitioner (CLF-C02)",
    "Azure Administrator (AZ-104)",
    "Azure Fundamentals (AZ-900)",
    "Azure Data Fundamentals (DP-900)",
    "Apache Airflow Fundamentals"
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!mounted) return null;

  return (
    <section id="skills" className="py-24 bg-[#020617] relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(circle, #334155 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              {t.skills.title}
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            {t.skills.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {skillGroups.map((group, index) => (
            <div 
              key={index} 
              className={`group bg-[#0f172a]/80 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:translate-y-[-8px] hover:border-slate-700 hover:shadow-2xl hover:shadow-primary/10 border-b-4 ${group.borderColor}`}
            >
              <div className="mb-6 transition-transform duration-500 group-hover:scale-110">
                {group.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {group.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {group.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-auto">
                {group.skills.map((s, i) => (
                  <span key={i} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-white/5 rounded-md text-white/60">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="bg-[#0f172a]/40 border border-slate-800 rounded-[2.5rem] p-10 md:p-16">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="bg-primary/20 p-6 rounded-3xl">
              <Award className="w-16 h-16 text-primary" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-black text-white mb-2">{t.skills.certsTitle}</h3>
              <p className="text-slate-400">Reconnaissance de l'expertise technique et cloud.</p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors group">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{cert}</span>
              </div>
            ))}
          </div>
        </div>

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