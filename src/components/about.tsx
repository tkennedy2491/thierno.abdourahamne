import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/context/language-context';

export function About() {
  const profileImage = PlaceHolderImages.find(img => img.id === 'profile-pic');
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-border">
              <Image
                src={profileImage?.imageUrl || "https://picsum.photos/seed/about/600/600"}
                alt="Thierno Abdourahmane Diallo Profile"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                data-ai-hint="developer portrait"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-background border border-border p-6 rounded-2xl hidden lg:block shadow-xl">
              <p className="text-3xl font-bold text-primary">2+</p>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-tighter">{t.about.expYears}</p>
            </div>
          </div>

          <div>
            <Badge variant="outline" className="mb-4 px-3 py-1 border-primary/50 text-primary bg-primary/5">
              {t.about.badge}
            </Badge>
            <h2 className="text-4xl font-bold font-headline mb-6 tracking-tight">
              {t.about.title} <br /><span className="text-primary">{t.about.quality}</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>{t.about.desc1}</p>
              <p>{t.about.desc2}</p>
              <p>{t.about.desc3}</p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div>
                <h4 className="font-bold text-foreground mb-1">{t.about.loc}</h4>
                <p className="text-muted-foreground">Dakar, Sénégal</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">{t.about.email}</h4>
                <p className="text-muted-foreground">thierno.241991@gmail.com</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">{t.about.specialty}</h4>
                <p className="text-muted-foreground">Full-Stack Typescript</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">{t.about.interests}</h4>
                <p className="text-muted-foreground">{t.about.interestsList}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
