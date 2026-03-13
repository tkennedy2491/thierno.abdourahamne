
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: 'project-1',
    title: 'Nexus E-Commerce',
    category: 'Full Stack Development',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    description: 'A high-performance e-commerce platform with real-time inventory management and advanced analytics dashboard.',
  },
  {
    id: 'project-2',
    title: 'Pulse Fitness Tracker',
    category: 'Mobile Application',
    tags: ['React Native', 'Firebase', 'D3.js'],
    description: 'Comprehensive health monitoring app that integrates with wearables to provide actionable lifestyle insights.',
  },
  {
    id: 'project-3',
    title: 'Flow Task Manager',
    category: 'SaaS Platform',
    tags: ['TypeScript', 'Node.js', 'Socket.io'],
    description: 'Collaborative task management tool designed for agile teams with integrated real-time chat and document sharing.',
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4 tracking-tight">Featured Projects</h2>
            <p className="text-muted-foreground max-w-xl text-lg leading-relaxed">
              Selection of my most impactful works, showcasing technical depth and problem-solving capabilities.
            </p>
          </div>
          <Button asChild variant="outline" className="w-fit border-primary/30 hover:border-primary">
            <Link href="https://github.com" target="_blank">Explore Github</Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const projectImage = PlaceHolderImages.find(img => img.id === project.id);
            return (
              <div key={project.id} className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={projectImage?.imageUrl || "https://picsum.photos/seed/project/800/600"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    data-ai-hint="project screenshot"
                  />
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button variant="secondary" size="icon" className="rounded-full bg-white text-black hover:bg-white/90">
                      <Github className="w-5 h-5" />
                    </Button>
                    <Button variant="secondary" size="icon" className="rounded-full bg-white text-black hover:bg-white/90">
                      <ExternalLink className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground line-clamp-2 mb-6">
                    {project.description}
                  </p>
                  <Link href="#" className="inline-flex items-center text-sm font-bold text-primary group-hover:translate-x-1 transition-transform">
                    View Details <ExternalLink className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
