
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
                alt="Alex Rivera Profile"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                data-ai-hint="developer portrait"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-background border border-border p-6 rounded-2xl hidden lg:block shadow-xl">
              <p className="text-3xl font-bold text-primary">5+</p>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-tighter">Years Experience</p>
            </div>
          </div>

          <div>
            <Badge variant="outline" className="mb-4 px-3 py-1 border-primary/50 text-primary bg-primary/5">
              About Me
            </Badge>
            <h2 className="text-4xl font-bold font-headline mb-6 tracking-tight">
              Passionate Developer <br />Dedicated to <span className="text-primary">Craftsmanship</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I am a software engineer based in the heart of digital innovation. My journey started with a curiosity for how things work on the internet, which blossomed into a full-scale passion for building robust applications.
              </p>
              <p>
                With a background in computer science and years of hands-on experience, I specialize in creating scalable frontend architectures and seamless user experiences. I believe that good code is not just functional, but expressive and maintainable.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, or sharing my knowledge through technical blogging and mentorship.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div>
                <h4 className="font-bold text-foreground mb-1">Location</h4>
                <p className="text-muted-foreground">San Francisco, CA</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Email</h4>
                <p className="text-muted-foreground">hello@devsphere.com</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Degree</h4>
                <p className="text-muted-foreground">M.Sc. Computer Science</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Interests</h4>
                <p className="text-muted-foreground">AI, IoT, Gaming</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
