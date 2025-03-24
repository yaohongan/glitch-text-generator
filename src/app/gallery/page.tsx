'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Language } from '@/components/LanguageSwitcher';

// 定义翻译内容的类型
type TranslationType = {
  title: string;
  description: string;
  categories: {
    all: string;
    social: string;
    creative: string;
    gaming: string;
    business: string;
  };
  items: Array<{
    id: number;
    title: string;
    preview: string;
    description: string;
    category: string;
    effect: string;
  }>;
  modalActions: {
    copy: string;
    close: string;
    tryIt: string;
  };
};

type TranslationsType = {
  en: TranslationType;
  zh: TranslationType;
  // 其他语言将使用默认值
};

const translations: TranslationsType = {
  en: {
    title: 'Effect Gallery',
    description: 'Explore examples of text effects created with our generator',
    categories: {
      all: 'All',
      social: 'Social Media',
      creative: 'Creative Design',
      gaming: 'Gaming',
      business: 'Business'
    },
    items: [
      {
        id: 1,
        title: 'Cyberpunk Style',
        preview: "C̷̛͓̱͈̮̘̲͚̹͎̦̥͍͉̓̈́͌͋͆͘͜y̶̢̛̲͚̝̗̺̰̩̭̝̣̓̈́̈́̈́̈́̈́̈́̈́ę̶̛̲͚̝̗̺̰̩̭̝̣̓̈́̈́̈́̈́̈́̈́̈́r̶̢̛̲͚̝̗̺̰̩̭̝̣̓̈́̈́̈́̈́̈́̈́̈́p̶̢̛̲͚̝̗̺̰̩̭̝̣̓̈́̈́̈́̈́̈́̈́̈́ư̶̢̲͚̝̗̺̰̩̭̝̣̓̈́̈́̈́̈́̈́̈́̈́n̶̢̛̲͚̝̗̺̰̩̭̝̣̓̈́̈́̈́̈́̈́̈́̈́k̶̢̛̲͚̝̗̺̰̩̭̝̣̓̈́̈́̈́̈́̈́̈́̈́",
        description: "Perfect for sci-fi themed designs and futuristic content",
        category: "creative",
        effect: "zalgo"
      },
      {
        id: 2,
        title: 'Vaporwave Aesthetic',
        preview: "ＶＡＰＯＲＷＡＶＥ　ＳＴＹＬＥ",
        description: "Retro 80s/90s vaporwave aesthetic text for nostalgic designs",
        category: "creative",
        effect: "vaporwave"
      },
      {
        id: 3,
        title: 'Matrix Code',
        preview: "Mアtリiクs コード",
        description: "Inspired by the Matrix movie - perfect for tech themes",
        category: "creative",
        effect: "matrix"
      },
      {
        id: 4,
        title: 'Binary Glitch',
        preview: "D1g1t4l Gl1tch",
        description: "Digital glitch effect with binary elements for tech content",
        category: "creative",
        effect: "binary"
      },
      {
        id: 5,
        title: 'Horror Game Title',
        preview: "D̶̮̪̖̙̻͎̲̓̊̿̿̔͠Ạ̸̞̲̙͚̟̗̈́̔̔́̊̀̚ͅR̵̛̼̪͓̺̯̩̺̀̊̆̂̀K̴̡̩̹̻̤̏̒̆ ̶̱̠̗̳͖͑̽̏͜H̷̻̪̮͙̀͒̔̈́̂̑Ô̴̹͊̐̉̒U̵̧̫̦̯̔̑͒͝R̴̥̠̘̠̙̼̿̇̃̀̎͘̚",
        description: "Perfect for horror-themed game titles and promotional materials",
        category: "gaming",
        effect: "zalgo"
      },
      {
        id: 6,
        title: 'Social Media Bio',
        preview: "✧ ᴄʀᴇᴀᴛɪᴠᴇ ᴍɪɴᴅ ✧ ᴅɪɢɪᴛᴀʟ ɴᴏᴍᴀᴅ",
        description: "Stand out with a stylish social media profile or bio text",
        category: "social",
        effect: "vaporwave"
      },
      {
        id: 7,
        title: 'Hacker Username',
        preview: "ハ4Ckケr_3l1Tテ",
        description: "Create unique gaming or forum usernames with a tech edge",
        category: "gaming",
        effect: "matrix"
      },
      {
        id: 8,
        title: 'Tech Business Name',
        preview: "ＮＥＸＴ　ＬＥＶＥＬ　ＳＯＬＵＴＩＯＮＳ",
        description: "Make your tech business name stand out in full-width style",
        category: "business",
        effect: "vaporwave"
      },
      {
        id: 9,
        title: 'Corrupted Error Message',
        preview: "Syst▓em▒ ░Er█ror▓ - ▒Da▓ta Corru▒pt█ed",
        description: "Perfect for simulating error messages in creative projects",
        category: "creative",
        effect: "corrupt"
      },
      {
        id: 10,
        title: 'Gaming Clan Tag',
        preview: "【G̷̢̟̣̮̘̭͂̆̌͑̃L̴̨̬̖̰̀͑͋͆̋͑̄I̶̞̱̮̩̩̓͐T̶̢̹̤̉̿͌͛̎̑̌C̵̖̰̪̣̓̊Ḩ̶̟̠̼̜̓̋̉̐̋͆͜】",
        description: "Create a standout gaming clan tag or team name",
        category: "gaming",
        effect: "zalgo"
      },
      {
        id: 11,
        title: 'Event Announcement',
        preview: "★彡 ＳＵＭＭＥＲ　ＦＥＳＴ　２０２４ 彡★",
        description: "Make your event announcements catch attention on social media",
        category: "social",
        effect: "vaporwave"
      },
      {
        id: 12,
        title: 'Digital Product Name',
        preview: "Qu4ntum Eng1ne",
        description: "Create tech-inspired product names for digital goods",
        category: "business",
        effect: "binary"
      }
    ],
    modalActions: {
      copy: 'Copy Text',
      close: 'Close',
      tryIt: 'Try This Effect'
    }
  },
  zh: {
    title: '效果展示',
    description: '探索使用我们的生成器创建的文本效果示例',
    categories: {
      all: '全部',
      social: '社交媒体',
      creative: '创意设计',
      gaming: '游戏',
      business: '商业'
    },
    items: [
      {
        id: 1,
        title: '赛博朋克风格',
        preview: "C̷̛͓̱͈̮̘̲͚̹͎̦̥͍͉̓̈́͌͋͆͘͜y̶̢̛̲͚̝̗̺̰̩̭̝̣̓̈́̈́̈́̈́̈́̈́̈́ę̶̛̲͚̝̗̺̰̩̭̝̣̓̈́̈́̈́̈́̈́̈́̈́r̶̢̛̲͚̝̗̺̰̩̭̝̣̓̈́̈́̈́̈́̈́̈́̈́p̶̢̛̲͚̝̗̺̰̩̭̝̣̓̈́̈́̈́̈́̈́̈́̈́ư̶̢̲͚̝̗̺̰̩̭̝̣̓̈́̈́̈́̈́̈́̈́̈́n̶̢̛̲͚̝̗̺̰̩̭̝̣̓̈́̈́̈́̈́̈́̈́̈́k̶̢̛̲͚̝̗̺̰̩̭̝̣̓̈́̈́̈́̈́̈́̈́̈́",
        description: "适合科幻主题设计和未来感内容",
        category: "creative",
        effect: "zalgo"
      },
      {
        id: 2,
        title: '蒸汽波美学',
        preview: "ＶＡＰＯＲＷＡＶＥ　ＳＴＹＬＥ",
        description: "复古80/90年代蒸汽波风格文本，适合怀旧设计",
        category: "creative",
        effect: "vaporwave"
      },
      {
        id: 3,
        title: '黑客帝国代码',
        preview: "Mアtリiクs コード",
        description: "灵感来自黑客帝国电影 - 完美适合科技主题",
        category: "creative",
        effect: "matrix"
      },
      {
        id: 4,
        title: '二进制故障',
        preview: "D1g1t4l Gl1tch",
        description: "带有二进制元素的数字故障效果，适合科技内容",
        category: "creative",
        effect: "binary"
      },
      {
        id: 5,
        title: '恐怖游戏标题',
        preview: "D̶̮̪̖̙̻͎̲̓̊̿̿̔͠Ạ̸̞̲̙͚̟̗̈́̔̔́̊̀̚ͅR̵̛̼̪͓̺̯̩̺̀̊̆̂̀K̴̡̩̹̻̤̏̒̆ ̶̱̠̗̳͖͑̽̏͜H̷̻̪̮͙̀͒̔̈́̂̑Ô̴̹͊̐̉̒U̵̧̫̦̯̔̑͒͝R̴̥̠̘̠̙̼̿̇̃̀̎͘̚",
        description: "适合恐怖主题的游戏标题和宣传材料",
        category: "gaming",
        effect: "zalgo"
      },
      {
        id: 6,
        title: '社交媒体简介',
        preview: "✧ ᴄʀᴇᴀᴛɪᴠᴇ ᴍɪɴᴅ ✧ ᴅɪɢɪᴛᴀʟ ɴᴏᴍᴀᴅ",
        description: "让你的社交媒体个人资料或简介文字脱颖而出",
        category: "social",
        effect: "vaporwave"
      },
      {
        id: 7,
        title: '黑客用户名',
        preview: "ハ4Ckケr_3l1Tテ",
        description: "创建具有科技感的独特游戏或论坛用户名",
        category: "gaming",
        effect: "matrix"
      },
      {
        id: 8,
        title: '科技公司名称',
        preview: "ＮＥＸＴ　ＬＥＶＥＬ　ＳＯＬＵＴＩＯＮＳ",
        description: "让你的科技公司名称以全角风格脱颖而出",
        category: "business",
        effect: "vaporwave"
      },
      {
        id: 9,
        title: '损坏的错误信息',
        preview: "Syst▓em▒ ░Er█ror▓ - ▒Da▓ta Corru▒pt█ed",
        description: "完美模拟创意项目中的错误信息",
        category: "creative",
        effect: "corrupt"
      },
      {
        id: 10,
        title: '游戏战队标签',
        preview: "【G̷̢̟̣̮̘̭͂̆̌͑̃L̴̨̬̖̰̀͑͋͆̋͑̄I̶̞̱̮̩̩̓͐T̶̢̹̤̉̿͌͛̎̑̌C̵̖̰̪̣̓̊Ḩ̶̟̠̼̜̓̋̉̐̋͆͜】",
        description: "创建突出的游戏战队标签或团队名称",
        category: "gaming",
        effect: "zalgo"
      },
      {
        id: 11,
        title: '活动公告',
        preview: "★彡 ＳＵＭＭＥＲ　ＦＥＳＴ　２０２４ 彡★",
        description: "让你的活动公告在社交媒体上吸引注意力",
        category: "social",
        effect: "vaporwave"
      },
      {
        id: 12,
        title: '数字产品名称',
        preview: "Qu4ntum Eng1ne",
        description: "为数字产品创建具有科技感的产品名称",
        category: "business",
        effect: "binary"
      }
    ],
    modalActions: {
      copy: '复制文本',
      close: '关闭',
      tryIt: '尝试此效果'
    }
  }
};

export default function GalleryPage() {
  const [language, setLanguage] = useState<Language>('en');
  // 添加类型安全的访问
  const t = (language === 'en' || language === 'zh') 
    ? translations[language] 
    : translations.en; // 默认回退到英文
    
  const [selectedItem, setSelectedItem] = useState<typeof t.items[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const filteredItems: typeof t.items = t.items.filter(item => activeCategory === 'all' || item.category === activeCategory);

  return (
    <>
      <Navigation onLanguageChange={handleLanguageChange} currentLang={language} />
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-950 via-slate-900 to-black text-white">
        <div className="container mx-auto px-4 py-16 pt-24">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500">{t.title}</h1>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              {t.description}
            </p>
            
            {/* 分类筛选 */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {Object.entries(t.categories).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === key
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item: typeof t.items[0]) => (
              <article
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group h-full bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300 cursor-pointer border border-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-blue-500/10 flex flex-col"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="mb-auto">
                    <h2 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h2>
                    <div className="h-16 flex items-center justify-center bg-black/20 rounded mb-4 px-4 overflow-x-auto group-hover:bg-black/30 transition-colors">
                      <p className="text-lg whitespace-nowrap">{item.preview}</p>
                    </div>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <span className="inline-block px-2 py-1 text-xs bg-white/10 rounded-full text-blue-300">
                      {item.effect}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {selectedItem && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
              <div className="bg-gray-900 border border-gray-700 rounded-xl max-w-lg w-full p-6 m-4 shadow-2xl">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">{selectedItem.title}</h3>
                  <button 
                    onClick={() => setSelectedItem(null)} 
                    className="text-gray-400 hover:text-white"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="border border-gray-700 bg-black/30 p-4 rounded-lg mb-4">
                  <p className="text-2xl text-center my-2">{selectedItem.preview}</p>
                </div>
                <p className="text-gray-300 mb-4">{selectedItem.description}</p>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => copyText(selectedItem.preview)}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors flex-grow"
                  >
                    {t.modalActions.copy}
                  </button>
                  <Link 
                    href={`/?effect=${selectedItem.effect}`} 
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded transition-colors flex-grow text-center"
                  >
                    {t.modalActions.tryIt}
                  </Link>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded transition-colors flex-grow md:flex-grow-0"
                  >
                    {t.modalActions.close}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
} 