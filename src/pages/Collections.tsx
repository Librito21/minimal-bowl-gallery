import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Collections as CollectionsSection } from '@/components/Collections';
import { Footer } from '@/components/Footer';

const Collections = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-16">
          <div className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h1 className="text-5xl md:text-6xl font-light text-neutral-800 tracking-tight mb-6">
                  Nuestras Colecciones
                </h1>
                <p className="text-xl text-neutral-500 max-w-3xl mx-auto leading-relaxed">
                  Descubre nuestras colecciones cuidadosamente curadas, cada una con su propia 
                  personalidad y diseñada para diferentes estilos de vida y ocasiones.
                </p>
              </div>
            </div>
          </div>
          <CollectionsSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Collections;