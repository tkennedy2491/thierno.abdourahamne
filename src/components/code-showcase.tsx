
import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

export function CodeShowcase() {
  const codeImage = PlaceHolderImages.find(img => img.id === 'code-snippet');

  return (
    <section className="py-12 bg-[#020617]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative group rounded-xl overflow-hidden border border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {/* Header de la fenêtre d'éditeur style macOS/VS Code */}
          <div className="bg-[#0f172a] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="text-[11px] text-slate-400 font-mono tracking-wider uppercase opacity-80">
              src/app/api/handler.ts — Godson
            </div>
            <div className="w-12"></div>
          </div>
          
          <div className="relative aspect-[16/10] overflow-hidden bg-[#010409]">
            <Image
              src={codeImage?.imageUrl || "https://picsum.photos/seed/code/1200/800"}
              alt="TypeScript Code Snippet"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
              data-ai-hint="typescript syntax"
            />
            {/* Overlay pour simuler l'éclat de l'écran */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
          </div>
          
          {/* Bordure de l'éditeur */}
          <div className="absolute inset-0 border border-white/5 rounded-xl pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
