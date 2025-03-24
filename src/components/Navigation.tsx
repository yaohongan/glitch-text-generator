'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LanguageSwitcher, Language } from './LanguageSwitcher';
import { useState } from 'react';

// 多语言导航菜单翻译
const translations: Record<Language, {
  home: string;
  gallery: string;
  blog: string;
}> = {
  en: {
    home: 'Home',
    gallery: 'Gallery',
    blog: 'Blog'
  },
  zh: {
    home: '首页',
    gallery: '展示',
    blog: '博客'
  },
  es: {
    home: 'Inicio',
    gallery: 'Galería',
    blog: 'Blog'
  },
  fr: {
    home: 'Accueil',
    gallery: 'Galerie',
    blog: 'Blog'
  },
  ja: {
    home: 'ホーム',
    gallery: 'ギャラリー',
    blog: 'ブログ'
  },
  de: {
    home: 'Startseite',
    gallery: 'Galerie',
    blog: 'Blog'
  },
  ru: {
    home: 'Главная',
    gallery: 'Галерея',
    blog: 'Блог'
  },
  pt: {
    home: 'Início',
    gallery: 'Galeria',
    blog: 'Blog'
  },
  ar: {
    home: 'الرئيسية',
    gallery: 'المعرض',
    blog: 'المدونة'
  }
};

export function Navigation({ onLanguageChange, currentLang }: { onLanguageChange: (lang: Language) => void, currentLang: Language }) {
  const pathname = usePathname();
  const t = translations[currentLang];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="mr-8">
              <span className="text-white font-bold text-xl">GlitchText</span>
            </Link>
            
            {/* 桌面导航 */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/">
                <div className={`text-sm font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-blue-400' 
                    : 'text-gray-300 hover:text-white'
                }`}>
                  {t.home}
                </div>
              </Link>
              <Link href="/gallery">
                <div className={`text-sm font-medium transition-colors ${
                  isActive('/gallery') 
                    ? 'text-blue-400' 
                    : 'text-gray-300 hover:text-white'
                }`}>
                  {t.gallery}
                </div>
              </Link>
              <Link href="/blog">
                <div className={`text-sm font-medium transition-colors ${
                  isActive('/blog') 
                    ? 'text-blue-400' 
                    : 'text-gray-300 hover:text-white'
                }`}>
                  {t.blog}
                </div>
              </Link>
            </div>
          </div>
          
          {/* 语言切换器和移动菜单按钮 */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher onChange={onLanguageChange} currentLang={currentLang} />
            
            {/* 移动菜单按钮 */}
            <button 
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* 移动菜单 */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/5">
            <div className="flex flex-col space-y-4">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <div className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/') ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-white/5'}`}>
                  {t.home}
                </div>
              </Link>
              <Link href="/gallery" onClick={() => setIsMobileMenuOpen(false)}>
                <div className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/gallery') ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-white/5'}`}>
                  {t.gallery}
                </div>
              </Link>
              <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)}>
                <div className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/blog') ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-white/5'}`}>
                  {t.blog}
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 