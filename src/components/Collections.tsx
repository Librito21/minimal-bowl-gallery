import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import collectionMinimalist from '@/assets/collection-minimalist.jpg';
import collectionColorful from '@/assets/collection-colorful.jpg';
import bowlWood from '@/assets/bowl-wood.jpg';

export const Collections = () => {
  const { t } = useLanguage();

  const collections = [
    {
      id: 1,
      title: t.collections.minimalist.title,
      description: t.collections.minimalist.description,
      image: collectionMinimalist,
      itemCount: 8
    },
    {
      id: 2,
      title: t.collections.colorful.title,
      description: t.collections.colorful.description,
      image: collectionColorful,
      itemCount: 12
    },
    {
      id: 3,
      title: t.collections.classic.title,
      description: t.collections.classic.description,
      image: bowlWood,
      itemCount: 6
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-800 tracking-tight mb-4">
            {t.collections.title}
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
            {t.collections.subtitle}
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div key={collection.id} className="collection-card group">
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Item Count Badge */}
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-neutral-700">
                  {collection.itemCount} items
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-neutral-800 mb-3">
                  {collection.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed mb-6">
                  {collection.description}
                </p>
                
                <Button 
                  variant="outline"
                  className="w-full border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Explorar Colección
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};