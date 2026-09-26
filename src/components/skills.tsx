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
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-12 h-12">
          <path fill="#83CD29" d="M114.325 80.749c-.29 0-.578-.076-.832-.224l-2.65-1.568c-.396-.221-.203-.3-.072-.345.528-.184.635-.227 1.198-.545.059-.033.136-.021.197.015l2.035 1.209c.074.041.179.041.246 0l7.937-4.581c.075-.042.122-.127.122-.215v-9.16c0-.09-.047-.173-.123-.219l-7.934-4.577c-.074-.042-.171-.042-.245 0l-7.933 4.578c-.076.045-.125.131-.125.218v9.16c0 .088.049.171.125.212l2.174 1.257c1.18.589 1.903-.105 1.903-.803v-9.045c0-.127.103-.228.23-.228h1.007c.125 0 .229.101.229.228v9.045c0 1.574-.857 2.477-2.35 2.477-.459 0-.82 0-1.828-.496l-2.081-1.198c-.515-.298-.832-.854-.832-1.448v-9.16c0-.595.317-1.15.832-1.446l7.937-4.587c.502-.283 1.169-.283 1.667 0l7.937 4.587c.514.297.833.852.833 1.446v9.16c0 .595-.319 1.148-.833 1.448l-7.937 4.582c-.252.147-.539.223-.834.223M116.778 74.438c-3.475 0-4.202-1.595-4.202-2.932 0-.126.103-.229.23-.229h1.026c.115 0 .21.082.228.194.154 1.045.617 1.572 2.718 1.572 1.671 0 2.383-.378 2.383-1.266 0-.512-.202-.891-2.8-1.146-2.172-.215-3.515-.694-3.515-2.433 0-1.601 1.35-2.557 3.612-2.557 2.543 0 3.801.883 3.96 2.777.006.064-.017.127-.06.176-.044.045-.104.073-.168.073h-1.031c-.107 0-.201-.075-.223-.179-.248-1.1-.848-1.451-2.479-1.451-1.825 0-2.037.637-2.037 1.112 0 .577.25.745 2.715 1.071 2.439.323 3.598.779 3.598 2.494.001 1.733-1.441 2.724-3.955 2.724"/><path fill="#404137" d="M97.982 68.43c.313-.183.506-.517.506-.88v-2.354c0-.362-.192-.696-.506-.879l-8.364-4.856c-.315-.183-.703-.184-1.019-.002l-8.416 4.859c-.314.182-.508.517-.508.88v9.716c0 .365.196.703.514.884l8.363 4.765c.308.177.686.178.997.006l5.058-2.812c.161-.09.261-.258.262-.44.001-.184-.097-.354-.256-.445l-8.468-4.86c-.159-.091-.256-.259-.256-.44v-3.046c0-.182.097-.349.254-.439l2.637-1.52c.156-.091.35-.091.507 0l2.637 1.52c.158.091.255.258.255.439v2.396c0 .183.097.351.254.441.158.091.352.091.51-.001l5.039-2.932"/><path fill="#83CD29" d="M88.984 67.974c.061-.034.135-.034.195 0l1.615.933c.06.035.097.1.097.169v1.865c0 .07-.037.134-.097.169l-1.615.932c-.06.035-.135.035-.195 0l-1.614-.932c-.061-.035-.098-.099-.098-.169v-1.865c0-.069.037-.134.098-.169l1.614-.933"/><path fill="#404137" d="M67.083 71.854c0 .09-.048.174-.127.22l-2.89 1.666c-.079.046-.176.046-.254 0l-2.89-1.666c-.079-.046-.127-.13-.127-.22v-3.338c0-.09.049-.175.127-.221l2.89-1.668c.079-.047.176-.047.255 0l2.891 1.668c.078.046.126.131.126.221v3.338zm.781-24.716c-.157-.087-.349-.085-.505.006-.155.092-.251.258-.251.438v12.915c0 .126-.068.244-.177.308-.11.063-.246.063-.356 0l-2.108-1.215c-.314-.181-.701-.181-1.015 0l-8.418 4.858c-.315.182-.509.518-.509.881v9.719c0 .363.194.698.508.881v-9.719zm0 0c0 .363.194.698.508.881l8.418 4.861c.314.182.702.182 1.017 0l8.42-4.861c.314-.183.508-.518.508-.881v-24.227c0-.368-.2-.708-.521-.888l-5.011-2.795"/><path fill="#83CD29" d="M38.238 59.407c.314-.182.702-.182 1.016 0l8.418 4.857c.314.182.508.518.508.881v9.722c0 .363-.194.699-.508.881l-8.417 4.861c-.314.181-.702.181-1.017 0l-8.415-4.861c-.314-.182-.508-.518-.508-.881v-9.723c0-.362.194-.698.508-.88l8.415-4.857"/><path fill="#404137" d="M22.93 65.064c0-.366-.192-.702-.508-.883l-8.415-4.843c-.144-.084-.303-.127-.464-.133h-.087c-.16.006-.32.049-.464.133l-8.416 4.843c-.313.181-.509.517-.509.883l.018 13.04c0 .182.095.351.254.439.156.094.349.094.505 0l5-2.864c.316-.188.509-.519.509-.882v-6.092c0-.364.192-.699.507-.881l2.13-1.226c.158-.093.332-.137.508-.137.174 0 .352.044.507.137l2.128 1.226c.315.182.509.517.509.881v6.092c0 .363.195.696.509.882l5 2.864c.157.094.353.094.508 0 .155-.089.252-.258.252-.439l.019-13.04"/></svg>
      ),
      borderColor: 'border-b-green-500',
      skills: ["ASP.NET Core", "Node.js", "NestJS", "Spring Boot", "Python", "Java"]
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
