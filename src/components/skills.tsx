
import { 
  Code2, 
  Cpu, 
  Database, 
  Globe, 
  Layers, 
  Layout, 
  Server, 
  Terminal 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const skills = [
  { name: 'Frontend', icon: <Layout className="w-6 h-6" />, items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'] },
  { name: 'Backend', icon: <Server className="w-6 h-6" />, items: ['Node.js', 'Express', 'Python', 'Go', 'GraphQL'] },
  { name: 'Database', icon: <Database className="w-6 h-6" />, items: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase'] },
  { name: 'DevOps', icon: <Terminal className="w-6 h-6" />, items: ['Docker', 'AWS', 'Vercel', 'CI/CD Pipelines'] },
];

const technologies = [
  { name: 'React', icon: <Code2 className="w-5 h-5" /> },
  { name: 'NextJS', icon: <Globe className="w-5 h-5" /> },
  { name: 'TypeScript', icon: <Cpu className="w-5 h-5" /> },
  { name: 'NodeJS', icon: <Layers className="w-5 h-5" /> },
];

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4 tracking-tight">Technical Proficiency</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive set of tools and technologies I've mastered to bring complex ideas to life.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <Card key={skill.name} className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors group">
              <CardContent className="p-8">
                <div className="mb-6 p-3 bg-muted rounded-xl w-fit group-hover:bg-primary/20 transition-colors">
                  <span className="text-primary group-hover:scale-110 transition-transform block">
                    {skill.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
                <ul className="space-y-3">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center text-muted-foreground text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-3xl bg-primary/5 border border-primary/10 flex flex-wrap justify-center items-center gap-12 opacity-80">
          {technologies.map((tech) => (
            <div key={tech.name} className="flex items-center gap-3 text-lg font-medium text-foreground/70">
              <span className="text-primary">{tech.icon}</span>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
