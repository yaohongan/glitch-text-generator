'use client';

import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Language } from '@/components/LanguageSwitcher';
import { blogPosts, categoryTranslations } from '../data';

// 博客文章翻译内容类型定义
type ArticleTranslation = {
  title: string;
  content: string;
};

type TranslationType = {
  notFound: string;
  notFoundDesc: string;
  backToList: string;
  readTime: string;
  [key: string]: any; // 允许动态文章键
};

type BlogTranslationsType = {
  en: TranslationType;
  zh: TranslationType;
  [key: string]: TranslationType; // 允许其他语言
};

// 页面翻译
const pageTranslations: BlogTranslationsType = {
  en: {
    notFound: 'Article not found',
    notFoundDesc: 'Sorry, the article you requested does not exist.',
    backToList: 'Back to articles',
    readTime: 'min read',
    category: 'Category',
    publishedOn: 'Published on'
  },
  zh: {
    notFound: '文章未找到',
    notFoundDesc: '抱歉，您请求的文章不存在。',
    backToList: '返回文章列表',
    readTime: '分钟阅读',
    category: '分类',
    publishedOn: '发布于'
  },
  es: {
    notFound: 'Artículo no encontrado',
    notFoundDesc: 'Lo sentimos, el artículo que solicitó no existe.',
    backToList: 'Volver a los artículos',
    readTime: 'min de lectura',
    category: 'Categoría',
    publishedOn: 'Publicado el'
  },
  fr: {
    notFound: 'Article non trouvé',
    notFoundDesc: 'Désolé, l\'article que vous avez demandé n\'existe pas.',
    backToList: 'Retour aux articles',
    readTime: 'min de lecture',
    category: 'Catégorie',
    publishedOn: 'Publié le'
  },
  ja: {
    notFound: '記事が見つかりません',
    notFoundDesc: '申し訳ありませんが、リクエストされた記事は存在しません。',
    backToList: '記事一覧に戻る',
    readTime: '分の読書',
    category: 'カテゴリー',
    publishedOn: '公開日'
  },
  de: {
    notFound: 'Artikel nicht gefunden',
    notFoundDesc: 'Entschuldigung, der von Ihnen angeforderte Artikel existiert nicht.',
    backToList: 'Zurück zu den Artikeln',
    readTime: 'min Lesezeit',
    category: 'Kategorie',
    publishedOn: 'Veröffentlicht am'
  },
  ru: {
    notFound: 'Статья не найдена',
    notFoundDesc: 'Извините, запрошенная статья не существует.',
    backToList: 'Вернуться к статьям',
    readTime: 'мин чтения',
    category: 'Категория',
    publishedOn: 'Опубликовано'
  },
  pt: {
    notFound: 'Artigo não encontrado',
    notFoundDesc: 'Desculpe, o artigo solicitado não existe.',
    backToList: 'Voltar para os artigos',
    readTime: 'min de leitura',
    category: 'Categoria',
    publishedOn: 'Publicado em'
  },
  ar: {
    notFound: 'المقال غير موجود',
    notFoundDesc: 'عذرًا، المقال الذي طلبته غير موجود.',
    backToList: 'العودة إلى المقالات',
    readTime: 'دقيقة قراءة',
    category: 'التصنيف',
    publishedOn: 'نشر في'
  }
};

export default function BlogPost() {
  const { slug } = useParams();
  const searchParams = useSearchParams();
  const urlLang = searchParams.get('lang') as Language || 'en';
  const [language, setLanguage] = useState<Language>(urlLang);
  const t = pageTranslations[language as keyof typeof pageTranslations] || pageTranslations.en;
  
  // 查找当前文章
  const article = blogPosts.find(post => post.slug === slug);
  
  // 获取当前语言的文章内容
  const getLocalizedContent = () => {
    if (!article) return null;
    
    // 尝试获取当前语言的文章内容，如果不存在则使用英文
    const articleData = article.translations[language as keyof typeof article.translations] 
      || article.translations.en;
    
    return {
      title: articleData.title,
      content: articleData.content,
      date: article.date,
      readTime: article.readTime[language as keyof typeof article.readTime] || article.readTime.en,
      category: articleData.category
    };
  };
  
  const localizedContent = getLocalizedContent();
  
  // 根据文章类别获取样式
  const getArticleStyle = (category: string): string => {
    let bgGradient = 'from-blue-600 to-purple-600';
    
    if (category === '设计' || category === 'Design') bgGradient = 'from-pink-600 to-purple-600';
    if (category === '技术' || category === 'Technology') bgGradient = 'from-green-600 to-blue-600';
    if (category === '艺术' || category === 'Art') bgGradient = 'from-orange-600 to-red-600';
    if (category === '营销' || category === 'Marketing') bgGradient = 'from-yellow-600 to-orange-600';
    if (category === '游戏' || category === 'Gaming') bgGradient = 'from-indigo-600 to-violet-600';
    if (category === '可访问性' || category === 'Accessibility') bgGradient = 'from-teal-600 to-cyan-600';
    
    return bgGradient;
  };
  
  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };
  
  if (!article || !localizedContent) {
    return (
      <>
        <Navigation onLanguageChange={handleLanguageChange} currentLang={language} />
        <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-950 via-slate-900 to-black text-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">{t.notFound}</h1>
            <p className="text-xl text-gray-400 mb-8">{t.notFoundDesc}</p>
            <Link href="/blog" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
              {t.backToList}
            </Link>
          </div>
        </div>
      </>
    );
  }
  
  const articleStyle = getArticleStyle(localizedContent.category);
  
  return (
    <>
      <Navigation onLanguageChange={handleLanguageChange} currentLang={language} />
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-950 via-slate-900 to-black text-white">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* 文章头部 */}
          <header className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <Link href={`/blog?lang=${language}`} className="text-gray-400 hover:text-white transition-colors flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                {t.backToList}
              </Link>
              <div className="flex items-center">
                <span className="text-sm text-gray-400 mr-3">{t.publishedOn} {localizedContent.date}</span>
                <span className="text-sm bg-white/10 px-3 py-1 rounded-full text-gray-300">
                  {localizedContent.readTime}
                </span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {localizedContent.title}
            </h1>
            <div className="flex items-center">
              <span className="text-sm text-gray-400 mr-2">{t.category}:</span>
              <span className={`text-sm bg-gradient-to-r ${articleStyle} px-3 py-1 rounded-full text-white`}>
                {localizedContent.category}
              </span>
            </div>
          </header>
          
          {/* 文章内容 */}
          <div className="prose prose-invert prose-lg max-w-3xl mx-auto">
            {localizedContent.content.split('\n').map((line: string, index: number) => {
              // 检查是否是标题行
              if (line.trim().startsWith('## ')) {
                const title = line.trim().replace('## ', '');
                return (
                  <h2 key={index} className="text-2xl font-bold mt-8 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    {title}
                  </h2>
                );
              }
              
              // 检查是否是列表项
              if (line.trim().startsWith('- ')) {
                const item = line.trim().replace('- ', '');
                return (
                  <div key={index} className="flex items-start my-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2.5 mr-3"></div>
                    <p className="text-gray-300">{item}</p>
                  </div>
                );
              }
              
              // 检查是否是有序列表项
              if (/^\d+\.\s/.test(line.trim())) {
                const item = line.trim().replace(/^\d+\.\s/, '');
                const number = line.trim().match(/^\d+/)?.[0] || '1';
                return (
                  <div key={index} className="flex items-start my-1">
                    <div className="w-5 h-5 flex items-center justify-center rounded-full bg-blue-900/50 mr-3 text-xs text-blue-300">{number}</div>
                    <p className="text-gray-300">{item}</p>
                  </div>
                );
              }
              
              // 普通段落
              return line.trim() ? (
                <p key={index} className="my-4 text-gray-300 leading-relaxed">{line}</p>
              ) : <div key={index} className="h-4"></div>;
            })}
          </div>
          
          {/* 文章底部导航 */}
          <div className="max-w-3xl mx-auto mt-16 pt-8 border-t border-gray-800">
            <Link href={`/blog?lang=${language}`} className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg transition-all hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-900/20">
              {t.backToList}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
} 