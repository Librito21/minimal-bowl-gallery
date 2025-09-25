import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProductCardProps {
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  features: string[];
  description: string;
  isOnSale?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  originalPrice,
  image,
  features,
  description,
  isOnSale = false
}) => {
  const { t } = useLanguage();

  return (
    <div className="product-card">
      {/* Image Container */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="product-image"
        />
        
        {isOnSale && (
          <div className="absolute top-3 right-3">
            <span className="price-discount">
              15% {t.pricing.off}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-neutral-800 mb-2">{name}</h3>
          <p className="text-neutral-500 text-sm leading-relaxed">{description}</p>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {features.map((feature, index) => (
            <span key={index} className="feature-tag">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              {feature}
            </span>
          ))}
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <span className="price-original">${price.toFixed(2)}</span>
            {originalPrice && (
              <span className="price-sale">${originalPrice.toFixed(2)}</span>
            )}
          </div>
          
          <Button 
            variant="outline" 
            size="sm"
            className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
          >
            {t.products.viewDetails}
          </Button>
        </div>
      </div>
    </div>
  );
};