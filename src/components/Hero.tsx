import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-bowl.jpg';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-surface to-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <h1 className="hero-title">
              {t.hero.title}
            </h1>
            
            <p className="hero-subtitle max-w-lg mx-auto lg:mx-0">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-light text-primary-foreground px-8 py-4 text-lg font-medium"
              >
                {t.hero.cta}
              </Button>
            </div>

            {/* Promotional Banner */}
            <div className="inline-flex items-center gap-2 bg-accent-warm/10 text-accent-warm px-4 py-2 rounded-full text-sm font-medium">
              <span>{t.pricing.specialWeekend}</span>
              <span className="font-semibold">15% {t.pricing.off}</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10 rounded-radius-xl overflow-hidden shadow-large">
              <img
                src={heroImage}
                alt="Bowl Collection Hero"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent-warm/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};