
import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

export function CodeShowcase() {
  const codeImage = PlaceHolderImages.find(img => img.id === 'code-snippet');

  return (
    <section className="py-12 bg-[#020617]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative group rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10 opacity-40"></div>
          <Image
            src={codeImage?.imageUrl || "https://picsum.photos/seed/code/1200/800"}
            alt="Code Syntax"
            width={1200}
            height={800}
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            data-ai-hint="programming code"
          />
          <div className="absolute top-4 left-4 z-20 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
