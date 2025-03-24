'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LangSwitcherProps {
  currentLocale: string;
}

export default function LangSwitcher({ currentLocale }: LangSwitcherProps) {
  const pathname = usePathname();
  
  // 确定目标语言
  const targetLocale = currentLocale === 'zh' ? 'en' : 'zh';
  
  // 根据当前路径和目标语言构建新路径
  // 移除当前语言前缀并添加新语言前缀
  const newPath = pathname.replace(`/${currentLocale}`, `/${targetLocale}`);
  
  return (
    <Link
      href={newPath}
      className={`px-6 py-2 ${
        targetLocale === 'en' 
          ? 'bg-purple-500 hover:bg-purple-600' 
          : 'bg-blue-500 hover:bg-blue-600'
      } text-white font-medium rounded-lg transition-colors`}
    >
      {targetLocale === 'en' ? 'English' : '中文'}
    </Link>
  );
} 