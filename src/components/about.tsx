
import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';

export function About() {
  const profileImage = PlaceHolderImages.find(img => img.id === 'profile-pic');

  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-border">
              <Image
                src={profileImage?.imageUrl || "https://picsum.photos/seed/about/600/600"}
                alt="Godson Profile"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                data-ai-hint="developer portrait"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-background border border-border p-6 rounded-2xl hidden lg:block shadow-xl">
              <p className="text-3xl font-bold text-primary">2+</p>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-tighter">Années d'expérience</p>
            </div>
          </div>

          <div>
            <Badge variant="outline" className="mb-4 px-3 py-1 border-primary/50 text-primary bg-primary/5">
              À propos de moi
            </Badge>
            <h2 className="text-4xl font-bold font-headline mb-6 tracking-tight">
              Développeur Passionné <br />dédié à la <span className="text-primary">Qualité</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Je suis un ingénieur logiciel basé sur l'innovation numérique. Mon parcours a commencé par une curiosité pour le fonctionnement d'Internet, qui s'est transformée en une passion pour la création d'applications robustes.
              </p>
              <p>
                Spécialisé en Typescript, React et Node.js, je me concentre sur la création d'architectures frontend évolutives et d'expériences utilisateur fluides. Je crois qu'un bon code n'est pas seulement fonctionnel, mais aussi expressif et maintenable.
              </p>
              <p>
                Je suis constamment à la recherche de nouveaux défis et j'aime explorer les dernières tendances technologiques pour proposer des solutions toujours plus performantes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div>
                <h4 className="font-bold text-foreground mb-1">Localisation</h4>
                <p className="text-muted-foreground">France / Remote</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Email</h4>
                <p className="text-muted-foreground">godson@example.com</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Spécialité</h4>
                <p className="text-muted-foreground">Full-Stack Typescript</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Intérêts</h4>
                <p className="text-muted-foreground">SaaS, Mobile Apps, API</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
