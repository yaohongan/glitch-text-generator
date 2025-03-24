'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { blogPosts, categoryTranslations } from './data';
import { Language } from '@/components/LanguageSwitcher';

// 本地翻译
const translations = {
  en: {
    title: 'Glitch Text Tutorials',
    description: 'Learn how to create and use various text effects',
    readTime: 'Read time:'
  },
  zh: {
    title: '故障文本教程',
    description: '学习如何创建和使用各种文本效果',
    readTime: '阅读时间：'
  },
  es: {
    title: 'Tutoriales de Texto Glitch',
    description: 'Aprende a crear y usar varios efectos de texto',
    readTime: 'Tiempo de lectura:'
  },
  fr: {
    title: 'Tutoriels de Texte Glitch',
    description: 'Apprenez à créer et à utiliser divers effets de texte',
    readTime: 'Temps de lecture:'
  },
  ja: {
    title: 'グリッチテキストチュートリアル',
    description: 'さまざまなテキストエフェクトの作成方法と使用方法を学ぶ',
    readTime: '読む時間：'
  },
  de: {
    title: 'Glitch-Text-Tutorials',
    description: 'Lernen Sie, wie man verschiedene Texteffekte erstellt und verwendet',
    readTime: 'Lesezeit:'
  },
  ru: {
    title: 'Учебники по Глитч-тексту',
    description: 'Узнайте, как создавать и использовать различные текстовые эффекты',
    readTime: 'Время чтения:'
  },
  pt: {
    title: 'Tutoriais de Texto Glitch',
    description: 'Aprenda a criar e usar vários efeitos de texto',
    readTime: 'Tempo de leitura:'
  },
  ar: {
    title: 'دروس النص المعطوب',
    description: 'تعلم كيفية إنشاء واستخدام تأثيرات النص المختلفة',
    readTime: 'وقت القراءة:'
  }
};

export default function BlogPage() {
  const [language, setLanguage] = useState<Language>('en');
  const t = translations[language as keyof typeof translations] || translations.en;

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };
  
  // 获取当前语言的文章数据
  const articlesData = blogPosts.map(post => {
    // 获取当前语言的文章信息，如果没有则使用英文作为后备
    const articleData = post.translations[language as keyof typeof post.translations] || post.translations.en;
    
    // 根据文章类别生成图片背景颜色
    let bgColor = 'from-blue-900 to-purple-900';
    const category = articleData.category;
    
    if (category === '设计' || category === 'Design') bgColor = 'from-pink-700 to-purple-800';
    if (category === '技术' || category === 'Technology') bgColor = 'from-green-800 to-blue-900';
    if (category === '艺术' || category === 'Art') bgColor = 'from-orange-700 to-red-800';
    if (category === '营销' || category === 'Marketing') bgColor = 'from-yellow-700 to-orange-800';
    if (category === '游戏' || category === 'Gaming') bgColor = 'from-indigo-800 to-violet-900';
    if (category === '可访问性' || category === 'Accessibility') bgColor = 'from-teal-700 to-cyan-800';
    
    return {
      id: post.id,
      title: articleData.title,
      description: articleData.excerpt,
      date: post.date,
      readTime: post.readTime[language as keyof typeof post.readTime] || post.readTime.en,
      slug: post.slug,
      category: articleData.category,
      bgColor
    };
  });

  return (
    <>
      <Navigation onLanguageChange={handleLanguageChange} currentLang={language} />
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-950 via-slate-900 to-black text-white">
        <div className="container mx-auto px-4 py-16 pt-24">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500">
              {t.title}
            </h1>
            <p className="text-xl text-gray-300">
              {t.description}
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articlesData.map((article) => (
              <Link href={`/blog/${article.slug}?lang=${language}`} key={article.id}>
                <article className="group h-full bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300 cursor-pointer border border-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-blue-500/10 flex flex-col">
                  <div className="h-48 bg-gray-800 relative overflow-hidden">
                    <div className={`w-full h-full bg-gradient-to-br ${article.bgColor} flex items-center justify-center p-6`}>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white mb-2 opacity-90">{article.title.split('：')[0].split(':')[0]}</div>
                        <div className="text-xs uppercase tracking-wider text-white/70 bg-white/10 rounded-full px-3 py-1 inline-block">{article.category}</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex-grow">
                      <h2 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-3 group-hover:text-gray-300 transition-colors">
                        {article.description}
                      </p>
                    </div>
                    <div className="mt-auto flex justify-between items-center">
                      <p className="text-xs text-gray-500">{article.date}</p>
                      <p className="text-xs text-gray-500">{t.readTime} {article.readTime}</p>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
} 