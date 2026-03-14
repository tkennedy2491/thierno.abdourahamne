
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { CodeShowcase } from '@/components/code-showcase';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <div className="relative min-h-screen font-body selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <CodeShowcase />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
