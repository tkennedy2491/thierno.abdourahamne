
"use client";

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowRight, ChevronUp, Code2, Coffee, Heart, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/context/language-context';
import { subscribeNewsletter } from '@/app/actions/email-actions';

export function Footer() {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    const result = await subscribeNewsletter(email);
    setLoading(false);

    if (result.success) {
      toast({
        title: t.footer.newsletterSuccess,
        description: t.footer.newsletterSuccessDesc,
      });
      setEmail('');
    } else {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de s'inscrire pour le moment.",
      });
    }
  };

  return (
    <footer className="relative bg-background pt-12 pb-8 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Box */}
        <div className="bg-[#020617] border border-slate-800 rounded-[2.5rem] p-10 md:p-16 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Column 1: À propos */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white relative inline-block">
                {t.footer.about}
                <span className="absolute -bottom-1 left-0 w-8 h-1 bg-primary rounded-full"></span>
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t.footer.aboutDesc}
              </p>
              <div className="flex items-center gap-4">
                <a 
                  href="https://github.com/tkennedy2491" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/thierno-abdourahmane-diallo-1a1aa1158/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BBCx2wlBMQGGRHLdsmBvt9g%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://x.com/Thierno241991" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:thierno.241991@gmail.com" 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Column 2: Liens rapides */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white relative inline-block">
                {t.footer.quickLinks}
                <span className="absolute -bottom-1 left-0 w-8 h-1 bg-primary rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#home" className="text-slate-400 hover:text-white text-sm transition-colors">{t.nav.home}</Link>
                </li>
                <li>
                  <Link href="#projects" className="text-slate-400 hover:text-white text-sm transition-colors">{t.nav.projects}</Link>
                </li>
                <li>
                  <Link href="#contact" className="text-slate-400 hover:text-white text-sm transition-colors">{t.nav.contact}</Link>
                </li>
                <li>
                  <a 
                    href="/CV__Thierno Abdourahmane_Diallo.pdf" 
                    download="CV__Thierno Abdourahmane_Diallo.pdf" 
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    CV
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white relative inline-block">
                {t.footer.services}
                <span className="absolute -bottom-1 left-0 w-8 h-1 bg-primary rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-slate-400 text-sm">
                  <Code2 className="w-4 h-4 text-primary/50" /> {t.footer.serv1}
                </li>
                <li className="flex items-center gap-2 text-slate-400 text-sm">
                  <Code2 className="w-4 h-4 text-primary/50" /> {t.footer.serv2}
                </li>
                <li className="flex items-center gap-2 text-slate-400 text-sm">
                  <Code2 className="w-4 h-4 text-primary/50" /> {t.footer.serv3}
                </li>
                <li className="flex items-center gap-2 text-slate-400 text-sm">
                  <Code2 className="w-4 h-4 text-primary/50" /> {t.footer.serv4}
                </li>
                <li className="flex items-center gap-2 text-slate-400 text-sm">
                  <Code2 className="w-4 h-4 text-primary/50" /> {t.footer.serv5}
                </li>
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white relative inline-block">
                {t.footer.newsletter}
                <span className="absolute -bottom-1 left-0 w-8 h-1 bg-primary rounded-full"></span>
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t.footer.newsletterDesc}
              </p>
              <form onSubmit={handleNewsletterSubmit} className="relative group">
                <Input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.footer.newsletterPlaceholder} 
                  className="bg-slate-900/50 border-slate-700 text-white rounded-full pr-12 focus:ring-primary focus:border-primary h-12"
                />
                <button 
                  type="submit"
                  disabled={loading}
                  className="absolute right-1 top-1 bottom-1 w-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors disabled:opacity-50"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ArrowRight className="w-5 h-5" />}
                </button>
              </form>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-slate-500 text-sm">
              © {isMounted ? new Date().getFullYear() : '2025'} {t.footer.copyright}
            </p>
            
            <div className="flex items-center gap-1 text-slate-500 text-sm">
              {t.footer.madeWith} <Heart className="w-4 h-4 text-red-500 inline fill-red-500" /> {t.footer.and} <Coffee className="w-4 h-4 text-orange-500 inline" />
            </div>
          </div>

          {/* Scroll to Top Arrow Button */}
          <button 
            onClick={scrollToTop}
            className="absolute -bottom-6 right-6 md:right-12 w-12 h-12 bg-white text-black rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-10"
            aria-label={t.footer.backToTop}
          >
            <ChevronUp className="w-6 h-6" />
          </button>
        </div>
      </div>
    </footer>
  );
}
