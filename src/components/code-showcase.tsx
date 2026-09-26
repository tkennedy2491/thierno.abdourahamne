"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { useLanguage } from '@/context/language-context';

export function CodeShowcase() {
  const codeImage = PlaceHolderImages.find(img => img.id === 'code-snippet');
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] aspect-[21/9] flex items-center justify-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={codeImage?.imageUrl || "/typecrit.jpg"}
              alt="Background Code"
              fill
              className="object-cover blur-[1px] brightness-[0.3]"
              data-ai-hint="code background"
              sizes="(max-width: 1280px) 100vw, 1200px"
            />
          </div>

          {/* Overlay Content */}
          <div className="relative z-10 flex flex-col items-center text-center space-y-4">
            <h2 className="text-5xl md:text-7xl font-black italic text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] tracking-tight">
              Thierno Abdourahmane Diallo
            </h2>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl font-bold text-primary uppercase tracking-[0.3em] opacity-100">
              {t.codeShowcase.subtitle}
            </p>
          </div>

          {/* Border highlight */}
          <div className="absolute inset-0 border border-white/5 pointer-events-none rounded-3xl"></div>
        </div>
      </div>
    </section>
  );
}
