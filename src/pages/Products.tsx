import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Products as ProductsSection } from '@/components/Products';
import { Footer } from '@/components/Footer';

const Products = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-16">
          <div className="py-20 bg-surface/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h1 className="text-5xl md:text-6xl font-light text-neutral-800 tracking-tight mb-6">
                  Nuestros Productos
                </h1>
                <p className="text-xl text-neutral-500 max-w-3xl mx-auto leading-relaxed">
                  Cada bowl está cuidadosamente diseñado para combinar funcionalidad y estética, 
                  creado con materiales de la más alta calidad para durar toda la vida.
                </p>
              </div>
            </div>
          </div>
          <ProductsSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Products;