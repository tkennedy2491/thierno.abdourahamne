"use client";

import React, { useState } from 'react';
import { MessageCircle, X, ChevronRight, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/context/language-context';
import { cn } from '@/lib/utils';

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
  const { t } = useLanguage();

  const faqs = [
    { q: t.chatbot.q1, a: t.chatbot.a1 },
    { q: t.chatbot.q2, a: t.chatbot.a2 },
    { q: t.chatbot.q3, a: t.chatbot.a3 },
    { q: t.chatbot.q4, a: t.chatbot.a4 },
  ];

  return (
    <div className="fixed bottom-10 right-10 z-[100] flex flex-col items-end">
      {/* Chat Window */}
      <div 
        className={cn(
          "mb-4 transition-all duration-300 origin-bottom-right w-80 md:w-96",
          isOpen ? "scale-100 opacity-100 pointer-events-auto" : "scale-0 opacity-0 pointer-events-none"
        )}
      >
        <Card className="border-border shadow-2xl overflow-hidden bg-card/95 backdrop-blur-md">
          <CardHeader className="bg-primary p-4 text-white flex flex-row items-center justify-between">
            <CardTitle className="text-base font-bold flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              {t.chatbot.title}
            </CardTitle>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-white/20 h-8 w-8" 
              onClick={() => setIsOpen(false)}
            >
              <X className="w-4 h-4" />
            </Button>
          </CardHeader>
          <CardContent className="p-4 h-96 flex flex-col">
            <div className="flex-1 overflow-y-auto space-y-4 no-scrollbar">
              {/* Thierno Welcome Message */}
              <div className="flex items-start gap-2">
                <div className="bg-muted p-3 rounded-2xl rounded-tl-none text-sm font-medium">
                  {t.chatbot.welcome}
                </div>
              </div>

              {/* Bot Response if question selected */}
              {selectedQuestion !== null && (
                <>
                  <div className="flex items-end justify-end">
                    <div className="bg-primary text-white p-3 rounded-2xl rounded-br-none text-sm">
                      {faqs[selectedQuestion].q}
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-muted p-3 rounded-2xl rounded-tl-none text-sm whitespace-pre-wrap">
                      {faqs[selectedQuestion].a}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Questions List */}
            <div className="mt-4 pt-4 border-t border-border space-y-2">
              {selectedQuestion === null ? (
                faqs.map((faq, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedQuestion(idx)}
                    className="w-full text-left p-3 text-xs md:text-sm font-medium bg-background border border-border rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all flex items-center justify-between group"
                  >
                    {faq.q}
                    <ChevronRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))
              ) : (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full text-xs" 
                  onClick={() => setSelectedQuestion(null)}
                >
                  {t.chatbot.back}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "p-5 rounded-full shadow-[0_10px_40px_rgba(99,102,241,0.5)] cursor-pointer hover:scale-110 active:scale-95 transition-all group",
          isOpen ? "bg-white text-black" : "bg-gradient-to-br from-[#6366f1] to-[#a855f7] text-white"
        )}
      >
        {isOpen ? (
          <X className="w-8 h-8" />
        ) : (
          <MessageCircle className="w-8 h-8 group-hover:rotate-12 transition-transform" />
        )}
      </button>
    </div>
  );
}
