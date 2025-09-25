import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-neutral-800 text-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-primary-light tracking-tight">
              Bowl<span className="font-light text-neutral-400">Collection</span>
            </h3>
            <p className="text-neutral-400 leading-relaxed">
              Diseños elegantes y funcionales que transforman cada comida en una experiencia especial.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-neutral-100">Navegación</h4>
            <div className="space-y-2">
              <a href="/" className="block text-neutral-400 hover:text-primary-light transition-colors duration-200">
                {t.nav.home}
              </a>
              <a href="/productos" className="block text-neutral-400 hover:text-primary-light transition-colors duration-200">
                {t.nav.products}
              </a>
              <a href="/colecciones" className="block text-neutral-400 hover:text-primary-light transition-colors duration-200">
                {t.nav.collections}
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-neutral-100">{t.footer.contact}</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-neutral-400">
                <Mail className="w-4 h-4 text-primary-light" />
                <span>{t.footer.email}</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-400">
                <Phone className="w-4 h-4 text-primary-light" />
                <span>{t.footer.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-400">
                <MapPin className="w-4 h-4 text-primary-light" />
                <span>{t.footer.address}</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-neutral-100">{t.footer.followUs}</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-neutral-700 hover:bg-primary-light rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-neutral-700 hover:bg-primary-light rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-neutral-700 hover:bg-primary-light rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-700 mt-12 pt-8 text-center">
          <p className="text-neutral-400">
            © 2024 Bowl Collection. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};