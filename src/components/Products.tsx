import React from 'react';
import { ProductCard } from './ProductCard';
import { useLanguage } from '@/contexts/LanguageContext';
import bowlGreen from '@/assets/bowl-green.jpg';
import bowlWhite from '@/assets/bowl-white.jpg';
import bowlOrange from '@/assets/bowl-orange.jpg';
import bowlBlue from '@/assets/bowl-blue.jpg';
import bowlWood from '@/assets/bowl-wood.jpg';

export const Products = () => {
  const { t } = useLanguage();

  const products = [
    {
      id: 1,
      name: 'Sage Green Bowl',
      price: 24.99,
      originalPrice: 29.99,
      image: bowlGreen,
      features: [t.products.features.foodGrade, t.products.features.microwaveSafe, t.products.features.dishwasherSafe],
      description: 'Bowl de cerámica en verde salvia, perfecto para ensaladas y platos principales.',
      isOnSale: true
    },
    {
      id: 2,
      name: 'Classic White Bowl',
      price: 19.99,
      image: bowlWhite,
      features: [t.products.features.foodGrade, t.products.features.microwaveSafe, t.products.features.ovenSafe],
      description: 'Bowl clásico en blanco puro, elegante y versátil para cualquier ocasión.',
      isOnSale: false
    },
    {
      id: 3,
      name: 'Sunset Orange Bowl',
      price: 22.99,
      originalPrice: 26.99,
      image: bowlOrange,
      features: [t.products.features.foodGrade, t.products.features.microwaveSafe],
      description: 'Bowl vibrante en naranja que aporta calidez y energía a tu mesa.',
      isOnSale: true
    },
    {
      id: 4,
      name: 'Ocean Blue Set',
      price: 34.99,
      image: bowlBlue,
      features: [t.products.features.foodGrade, t.products.features.dishwasherSafe],
      description: 'Set de bowls en azul océano, ideal para servir y presentar platos especiales.',
      isOnSale: false
    },
    {
      id: 5,
      name: 'Natural Wood Bowl',
      price: 29.99,
      image: bowlWood,
      features: [t.products.features.foodGrade],
      description: 'Bowl de madera natural, perfecto para una experiencia gastronómica auténtica.',
      isOnSale: false
    }
  ];

  return (
    <section className="py-20 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-800 tracking-tight mb-4">
            {t.products.title}
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
            {t.products.subtitle}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              image={product.image}
              features={product.features}
              description={product.description}
              isOnSale={product.isOnSale}
            />
          ))}
        </div>

        {/* Starting Price Banner */}
        <div className="text-center mt-12">
          <p className="text-2xl font-light text-neutral-700">
            <span className="text-neutral-500">{t.pricing.startingFrom} </span>
            <span className="font-semibold text-primary">$19.99</span>
          </p>
        </div>
      </div>
    </section>
  );
};