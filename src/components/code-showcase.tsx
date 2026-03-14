
import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

export function CodeShowcase() {
  const codeImage = PlaceHolderImages.find(img => img.id === 'code-snippet');

  return (
    <section className="py-12 bg-[#020617]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative group rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
          {/* Header de la fenêtre d'éditeur */}
          <div className="bg-[#0f172a] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="text-xs text-slate-500 font-mono">App.tsx — Godson-Portfolio</div>
            <div className="w-10"></div>
          </div>
          
          <div className="relative aspect-[16/9]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10 opacity-30"></div>
            <Image
              src={codeImage?.imageUrl || "https://picsum.photos/seed/code/1200/800"}
              alt="TypeScript Code Showcase"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              data-ai-hint="typescript code"
            />
          </div>
          
          {/* Effet de brillance au survol */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
