import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

export const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h2 className="text-2xl font-semibold text-primary tracking-tight">
              Bowl<span className="font-light text-neutral-600">Collection</span>
            </h2>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="nav-link">
              {t.nav.home}
            </a>
            <a href="/productos" className="nav-link">
              {t.nav.products}
            </a>
            <a href="/colecciones" className="nav-link">
              {t.nav.collections}
            </a>
          </div>

          {/* Right Section - Language Toggle & CTA */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 text-sm text-neutral-600 hover:text-primary transition-colors duration-200"
            >
              <Globe className="w-4 h-4" />
              {language.toUpperCase()}
            </button>
            
            <Button variant="default" className="bg-primary hover:bg-primary-light text-primary-foreground">
              {t.nav.cta}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation - Simple version */}
      <div className="md:hidden px-4 pb-4">
        <div className="flex items-center justify-center space-x-6">
          <a href="/" className="nav-link text-sm">
            {t.nav.home}
          </a>
          <a href="/productos" className="nav-link text-sm">
            {t.nav.products}
          </a>
          <a href="/colecciones" className="nav-link text-sm">
            {t.nav.collections}
          </a>
        </div>
      </div>
    </nav>
  );
};