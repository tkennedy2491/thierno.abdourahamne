"use client";

import React, { useState, useEffect } from 'react';
import { Send, Sparkles, MessageSquare, Mail, MapPin, Phone, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { aiChatSuggestion } from '@/ai/flows/ai-chat-suggestion';
import { useToast } from '@/hooks/use-toast';

export function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const portfolioContent = "Thierno Abdourahmane Diallo est un développeur Full Stack spécialisé en Node.js, Express.js, React, Next.js et React Native (Expo). Il a travaillé sur des projets d'API E-Commerce, de gestion d'université, de SaaS de vote en ligne et de billetterie. Il est passionné par les architectures modernes et les expériences utilisateur fluides.";

  const fetchSuggestions = async () => {
    setIsGenerating(true);
    try {
      const result = await aiChatSuggestion({ portfolioContent });
      if (result && result.suggestions) {
        setSuggestions(result.suggestions);
      }
    } catch (error) {
      console.error('Erreur lors de la génération des suggestions:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  useEffect(() => {
    fetchSuggestions();
  }, []);

  const handleSuggestionClick = (suggestion: string) => {
    setFormData(prev => ({ ...prev, message: suggestion }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulation d'appel API
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(false);
    toast({
      title: "Message envoyé !",
      description: "Merci de m'avoir contacté. Je vous répondrai dès que possible.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4 tracking-tight">Collaborons Ensemble</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Vous avez un projet ? Je suis prêt à vous aider à le réaliser. Utilisez le formulaire ci-dessous ou choisissez une suggestion de l'IA pour commencer.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 space-y-8">
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" /> Assistant de demande IA
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Besoin d'aide pour commencer ? Cliquez sur une suggestion basée sur mon profil :
                </p>
                <div className="space-y-3">
                  {isGenerating ? (
                    <div className="flex flex-col items-center justify-center py-8 text-primary gap-3">
                      <Loader2 className="w-6 h-6 animate-spin" />
                      <span className="text-xs font-medium animate-pulse">Génération des idées...</span>
                    </div>
                  ) : (
                    suggestions.map((suggestion, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="w-full text-left p-4 rounded-xl border border-border bg-background hover:border-primary/50 hover:bg-primary/5 transition-all text-sm leading-relaxed group"
                      >
                        <MessageSquare className="w-4 h-4 text-primary mb-2 opacity-50 group-hover:opacity-100" />
                        {suggestion}
                      </button>
                    ))
                  )}
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={fetchSuggestions} 
                  className="mt-4 text-xs text-primary font-bold hover:bg-primary/10"
                  disabled={isGenerating}
                >
                  Régénérer les suggestions
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Email Direct</p>
                  <p className="font-bold">godson@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Téléphone</p>
                  <p className="font-bold">+33 6 00 00 00 00</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Localisation</p>
                  <p className="font-bold">Paris, France / Remote</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <Card className="bg-card border-border shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Votre Nom</label>
                      <Input
                        required
                        placeholder="Jean Dupont"
                        className="bg-muted border-none focus-visible:ring-primary"
                        value={formData.name}
                        onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Votre Email</label>
                      <Input
                        required
                        type="email"
                        placeholder="jean@example.com"
                        className="bg-muted border-none focus-visible:ring-primary"
                        value={formData.email}
                        onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Sujet</label>
                    <Input
                      required
                      placeholder="Demande de projet"
                      className="bg-muted border-none focus-visible:ring-primary"
                      value={formData.subject}
                      onChange={e => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Votre Message</label>
                    <Textarea
                      required
                      placeholder="Parlez-moi de votre projet..."
                      className="min-h-[160px] bg-muted border-none focus-visible:ring-primary"
                      value={formData.message}
                      onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-14"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer le Message <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
