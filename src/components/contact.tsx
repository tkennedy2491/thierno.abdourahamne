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

  const portfolioContent = "Alex Rivera is a Full Stack Developer specializing in React, Next.js, and Node.js. He has over 5 years of experience building e-commerce platforms, fitness trackers, and task management systems. He is interested in AI, IoT, and high-performance web applications.";

  const fetchSuggestions = async () => {
    setIsGenerating(true);
    try {
      const result = await aiChatSuggestion({ portfolioContent });
      setSuggestions(result.suggestions);
    } catch (error) {
      console.error('Error generating suggestions:', error);
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
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(false);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4 tracking-tight">Let's Collaborate</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have a vision? I'm ready to help you build it. Use the form below or pick an AI suggestion to get started.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 space-y-8">
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" /> AI Inquiry Assistant
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Need help starting? Click a suggestion based on my portfolio:
                </p>
                <div className="space-y-3">
                  {isGenerating ? (
                    <div className="flex items-center justify-center py-8 text-primary">
                      <Loader2 className="w-6 h-6 animate-spin" />
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
                >
                  Regenerate Suggestions
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Direct Email</p>
                  <p className="font-bold">hello@devsphere.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Phone Number</p>
                  <p className="font-bold">+1 (415) 555-0198</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Office Location</p>
                  <p className="font-bold">San Francisco, CA</p>
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
                      <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Your Name</label>
                      <Input
                        required
                        placeholder="John Doe"
                        className="bg-muted border-none focus-visible:ring-primary"
                        value={formData.name}
                        onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Your Email</label>
                      <Input
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="bg-muted border-none focus-visible:ring-primary"
                        value={formData.email}
                        onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Subject</label>
                    <Input
                      required
                      placeholder="Project Inquiry"
                      className="bg-muted border-none focus-visible:ring-primary"
                      value={formData.subject}
                      onChange={e => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Your Message</label>
                    <Textarea
                      required
                      placeholder="Tell me about your project..."
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
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="ml-2 w-4 h-4" />
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
