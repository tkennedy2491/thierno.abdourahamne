
import { Code2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold font-headline tracking-tight">DevSphere</span>
          </div>

          <p className="text-muted-foreground text-sm order-3 md:order-2">
            © {new Date().getFullYear()} DevSphere Portfolio. Built with Next.js & Tailwind.
          </p>

          <div className="flex items-center gap-6 order-2 md:order-3">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
