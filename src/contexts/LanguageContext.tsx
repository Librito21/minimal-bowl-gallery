import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'es' | 'en';

interface Translations {
  es: {
    nav: {
      home: string;
      products: string;
      collections: string;
      cta: string;
    };
    hero: {
      title: string;
      subtitle: string;
      cta: string;
    };
    products: {
      title: string;
      subtitle: string;
      viewDetails: string;
      features: {
        foodGrade: string;
        microwaveSafe: string;
        ovenSafe: string;
        dishwasherSafe: string;
      };
    };
    collections: {
      title: string;
      subtitle: string;
      minimalist: {
        title: string;
        description: string;
      };
      colorful: {
        title: string;
        description: string;
      };
      classic: {
        title: string;
        description: string;
      };
    };
    footer: {
      contact: string;
      email: string;
      phone: string;
      address: string;
      followUs: string;
    };
    pricing: {
      specialWeekend: string;
      off: string;
      startingFrom: string;
    };
  };
  en: {
    nav: {
      home: string;
      products: string;
      collections: string;
      cta: string;
    };
    hero: {
      title: string;
      subtitle: string;
      cta: string;
    };
    products: {
      title: string;
      subtitle: string;
      viewDetails: string;
      features: {
        foodGrade: string;
        microwaveSafe: string;
        ovenSafe: string;
        dishwasherSafe: string;
      };
    };
    collections: {
      title: string;
      subtitle: string;
      minimalist: {
        title: string;
        description: string;
      };
      colorful: {
        title: string;
        description: string;
      };
      classic: {
        title: string;
        description: string;
      };
    };
    footer: {
      contact: string;
      email: string;
      phone: string;
      address: string;
      followUs: string;
    };
    pricing: {
      specialWeekend: string;
      off: string;
      startingFrom: string;
    };
  };
}

const translations: Translations = {
  es: {
    nav: {
      home: 'Home',
      products: 'Productos',
      collections: 'Colecciones',
      cta: 'Comprar ahora'
    },
    hero: {
      title: 'Bowl Collection',
      subtitle: 'Explora nuestra colección de bowls que combina estilo y practicidad, perfectos para cualquier mesa.',
      cta: 'Explorar Colección'
    },
    products: {
      title: 'Productos',
      subtitle: 'Descubre nuestra selección cuidadosamente curada de bowls elegantes',
      viewDetails: 'Ver detalles',
      features: {
        foodGrade: 'Food grade',
        microwaveSafe: 'Microwave safe',
        ovenSafe: 'Oven safe',
        dishwasherSafe: 'Lavavajillas'
      }
    },
    collections: {
      title: 'Colecciones',
      subtitle: 'Bowls agrupados por estilo para cada ocasión',
      minimalist: {
        title: 'Minimalistas',
        description: 'Diseño limpio y elegante para los amantes de la simplicidad'
      },
      colorful: {
        title: 'Coloridos',
        description: 'Vibrantes y alegres, perfectos para darle vida a tu mesa'
      },
      classic: {
        title: 'Clásicos',
        description: 'Diseños atemporales que nunca pasan de moda'
      }
    },
    footer: {
      contact: 'Contacto',
      email: 'hello@bowlcollection.com',
      phone: '+34 123 456 789',
      address: 'Madrid, España',
      followUs: 'Síguenos'
    },
    pricing: {
      specialWeekend: 'Especial fin de semana:',
      off: 'de descuento',
      startingFrom: 'Desde'
    }
  },
  en: {
    nav: {
      home: 'Home',
      products: 'Products',
      collections: 'Collections',
      cta: 'Get in touch'
    },
    hero: {
      title: 'Bowl Collection',
      subtitle: 'Explore our bowl collection that combines style and practicality, perfect for any table.',
      cta: 'Explore Collection'
    },
    products: {
      title: 'Products',
      subtitle: 'Discover our carefully curated selection of elegant bowls',
      viewDetails: 'View details',
      features: {
        foodGrade: 'Food grade',
        microwaveSafe: 'Microwave safe',
        ovenSafe: 'Oven safe',
        dishwasherSafe: 'Dishwasher safe'
      }
    },
    collections: {
      title: 'Collections',
      subtitle: 'Bowls grouped by style for every occasion',
      minimalist: {
        title: 'Minimalist',
        description: 'Clean and elegant design for lovers of simplicity'
      },
      colorful: {
        title: 'Colorful',
        description: 'Vibrant and cheerful, perfect for bringing life to your table'
      },
      classic: {
        title: 'Classic',
        description: 'Timeless designs that never go out of style'
      }
    },
    footer: {
      contact: 'Contact',
      email: 'hello@bowlcollection.com',
      phone: '+1 (555) 123-4567',
      address: 'New York, USA',
      followUs: 'Follow us'
    },
    pricing: {
      specialWeekend: 'Special weekend:',
      off: 'off',
      startingFrom: 'Starting from'
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations[Language];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const value = {
    language,
    setLanguage,
    t: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};