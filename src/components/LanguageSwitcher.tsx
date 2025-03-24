'use client';

import { useState, useRef, useEffect } from 'react';

// 支持的语言类型
export type Language = 'en' | 'zh' | 'es' | 'fr' | 'ja' | 'de' | 'ru' | 'pt' | 'ar';

// 语言选项配置
const languageOptions: Record<Language, { name: string, nativeName: string, flag: string }> = {
  en: { name: 'English', nativeName: 'English', flag: '🇬🇧' },
  zh: { name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
  es: { name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  fr: { name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  ja: { name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  de: { name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  ru: { name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
  pt: { name: 'Portuguese', nativeName: 'Português', flag: '🇵🇹' },
  ar: { name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦' }
};

interface LanguageSwitcherProps {
  onChange: (lang: Language) => void;
  currentLang: Language;
}

export function LanguageSwitcher({ onChange, currentLang }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 点击外部关闭下拉菜单
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // 处理语言变更
  const handleLanguageChange = (lang: Language) => {
    onChange(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-sm font-medium"
      >
        <span className="text-base">{languageOptions[currentLang].flag}</span>
        <span>{languageOptions[currentLang].nativeName}</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-white/10 rounded-lg shadow-lg z-10 py-1 overflow-hidden">
          {(Object.keys(languageOptions) as Language[]).map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              className={`flex items-center gap-3 w-full text-left px-4 py-2 text-sm ${
                currentLang === lang 
                  ? 'bg-blue-600 text-white' 
                  : 'hover:bg-white/5 text-gray-200'
              }`}
            >
              <span className="text-base">{languageOptions[lang].flag}</span>
              <span>{languageOptions[lang].nativeName}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 