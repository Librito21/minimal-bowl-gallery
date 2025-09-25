import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Products } from '@/components/Products';
import { Collections } from '@/components/Collections';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Hero />
          <Products />
          <Collections />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
