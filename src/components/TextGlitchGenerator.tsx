'use client';

import { useState, useEffect } from 'react';

type EffectType = 'zalgo' | 'vaporwave' | 'matrix' | 'binary' | 'corrupt';
type Language = 'en' | 'zh' | 'es' | 'fr' | 'ja' | 'de' | 'ru' | 'pt' | 'ar';

// 添加多语言支持
const translations = {
  en: {
    title: 'Text Glitch Generator',
    inputPlaceholder: 'Enter text to transform...',
    inputLabel: 'Input Text',
    effectType: 'Effect Type',
    effectIntensity: 'Effect Intensity',
    min: 'Min',
    max: 'Max',
    result: 'Result',
    resultPlaceholder: 'Transformed text will display here...',
    copy: 'Copy'
  },
  zh: {
    title: '描述提示词',
    inputPlaceholder: '输入要转换的文本...',
    inputLabel: '输入文本',
    effectType: '效果类型',
    effectIntensity: '效果强度',
    min: 'Min',
    max: 'Max',
    result: '结果',
    resultPlaceholder: '转换后的文本将显示在这里...',
    copy: '复制'
  },
  // 可以添加其他语言翻译
  es: {
    title: 'Generador de Texto Glitch',
    inputPlaceholder: 'Ingrese texto para transformar...',
    inputLabel: 'Texto de Entrada',
    effectType: 'Tipo de Efecto',
    effectIntensity: 'Intensidad del Efecto',
    min: 'Mín',
    max: 'Máx',
    result: 'Resultado',
    resultPlaceholder: 'El texto transformado se mostrará aquí...',
    copy: 'Copiar'
  },
  fr: {
    title: 'Générateur de Texte Glitch',
    inputPlaceholder: 'Entrez du texte à transformer...',
    inputLabel: 'Texte d\'Entrée',
    effectType: 'Type d\'Effet',
    effectIntensity: 'Intensité de l\'Effet',
    min: 'Min',
    max: 'Max',
    result: 'Résultat',
    resultPlaceholder: 'Le texte transformé s\'affichera ici...',
    copy: 'Copier'
  },
  ja: {
    title: 'グリッチテキストジェネレーター',
    inputPlaceholder: '変換するテキストを入力...',
    inputLabel: '入力テキスト',
    effectType: 'エフェクトタイプ',
    effectIntensity: 'エフェクト強度',
    min: '最小',
    max: '最大',
    result: '結果',
    resultPlaceholder: '変換されたテキストがここに表示されます...',
    copy: 'コピー'
  },
  de: {
    title: 'Glitch-Text-Generator',
    inputPlaceholder: 'Text zum Transformieren eingeben...',
    inputLabel: 'Eingabetext',
    effectType: 'Effekttyp',
    effectIntensity: 'Effektintensität',
    min: 'Min',
    max: 'Max',
    result: 'Ergebnis',
    resultPlaceholder: 'Transformierter Text wird hier angezeigt...',
    copy: 'Kopieren'
  },
  ru: {
    title: 'Генератор Глитч-Текста',
    inputPlaceholder: 'Введите текст для преобразования...',
    inputLabel: 'Исходный текст',
    effectType: 'Тип эффекта',
    effectIntensity: 'Интенсивность эффекта',
    min: 'Мин',
    max: 'Макс',
    result: 'Результат',
    resultPlaceholder: 'Преобразованный текст отобразится здесь...',
    copy: 'Копировать'
  },
  pt: {
    title: 'Gerador de Texto Glitch',
    inputPlaceholder: 'Digite o texto para transformar...',
    inputLabel: 'Texto de Entrada',
    effectType: 'Tipo de Efeito',
    effectIntensity: 'Intensidade do Efeito',
    min: 'Mín',
    max: 'Máx',
    result: 'Resultado',
    resultPlaceholder: 'O texto transformado será exibido aqui...',
    copy: 'Copiar'
  },
  ar: {
    title: 'مولد نص غليتش',
    inputPlaceholder: 'أدخل النص للتحويل...',
    inputLabel: 'نص الإدخال',
    effectType: 'نوع التأثير',
    effectIntensity: 'شدة التأثير',
    min: 'الحد الأدنى',
    max: 'الحد الأقصى',
    result: 'النتيجة',
    resultPlaceholder: 'سيظهر النص المحول هنا...',
    copy: 'نسخ'
  }
};

// 扩展组件接收语言属性
export function TextGlitchGenerator({ language = 'zh' }: { language?: Language }) {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [effectType, setEffectType] = useState<EffectType>('zalgo');
  const [intensity, setIntensity] = useState(50);
  const [copied, setCopied] = useState(false);
  
  // 获取当前语言的翻译
  const t = translations[language as keyof typeof translations] || translations.zh;
  
  useEffect(() => {
    if (inputText) {
      const transformed = transformText(inputText, effectType, intensity);
      setOutputText(transformed);
    } else {
      setOutputText('');
    }
  }, [inputText, effectType, intensity]);

  const copyToClipboard = () => {
    if (outputText) {
      navigator.clipboard.writeText(outputText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-white/10 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 输入区域 - 优化为更优美的高度 */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm text-gray-300 font-medium">{t.inputLabel}</div>
            {inputText && (
              <button 
                onClick={() => setInputText('')}
                className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-gray-700/30 transition-colors"
                title="Clear text"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </div>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={t.inputPlaceholder}
            className="w-full h-36 px-4 py-3 bg-black/20 border border-white/10 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 rounded-xl text-white placeholder-gray-400 transition-all focus:outline-none resize-none"
          />
        </div>

        {/* 结果区域 - 优化为更优美的高度 */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm text-gray-300 font-medium">{t.result}</div>
            {outputText && (
              <button
                onClick={copyToClipboard}
                className={`text-xs px-2 py-1 rounded-md transition-all ${
                  copied 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                }`}
              >
                {copied ? '✓ ' + t.copy : t.copy}
              </button>
            )}
          </div>
          <div className="w-full h-36 p-4 bg-black/30 border border-white/10 rounded-xl text-white overflow-auto whitespace-pre-wrap">
            {outputText || (
              <span className="text-gray-500 italic">{t.resultPlaceholder}</span>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-sm font-medium mb-3 text-gray-300">{t.effectType}</h2>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setEffectType('zalgo')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  effectType === 'zalgo'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:transform hover:-translate-y-0.5'
                }`}
              >
                zalgo
              </button>
              <button
                onClick={() => setEffectType('vaporwave')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  effectType === 'vaporwave'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:transform hover:-translate-y-0.5'
                }`}
              >
                vaporwave
              </button>
              <button
                onClick={() => setEffectType('matrix')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  effectType === 'matrix'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:transform hover:-translate-y-0.5'
                }`}
              >
                matrix
              </button>
              <button
                onClick={() => setEffectType('binary')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  effectType === 'binary'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:transform hover:-translate-y-0.5'
                }`}
              >
                binary
              </button>
              <button
                onClick={() => setEffectType('corrupt')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  effectType === 'corrupt'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:transform hover:-translate-y-0.5'
                }`}
              >
                corrupt
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-medium mb-3 text-gray-300">{t.effectIntensity}</h2>
            <div className="flex flex-col gap-2">
              <div className="w-full">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={intensity}
                  onChange={(e) => setIntensity(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>
              <div className="flex justify-between text-xs text-gray-400 px-1">
                <span>{t.min}</span>
                <span>{t.max}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 文本转换函数
function transformText(text: string, effect: EffectType, intensity: number): string {
  switch (effect) {
    case 'zalgo':
      return applyZalgoEffect(text, intensity);
    case 'vaporwave':
      return applyVaporwaveEffect(text);
    case 'matrix':
      return applyMatrixEffect(text, intensity);
    case 'binary':
      return applyBinaryEffect(text, intensity);
    case 'corrupt':
      return applyCorruptEffect(text, intensity);
    default:
      return text;
  }
}

// Zalgo效果
function applyZalgoEffect(text: string, intensity: number): string {
  const zalgoChars = [
    '\u030d', '\u030e', '\u0304', '\u0305', '\u033f', '\u0311', '\u0306', '\u0310',
    '\u0352', '\u0357', '\u0351', '\u0307', '\u0308', '\u030a', '\u0342', '\u0343',
    '\u0344', '\u034a', '\u034b', '\u034c', '\u0303', '\u0302', '\u030c', '\u0350',
    '\u0300', '\u0301', '\u030b', '\u030f', '\u0312', '\u0313', '\u0314', '\u033d',
    '\u0309', '\u0363', '\u0364', '\u0365', '\u0366', '\u0367', '\u0368', '\u0369',
    '\u036a', '\u036b', '\u036c', '\u036d', '\u036e', '\u036f', '\u033e', '\u035b',
  ];

  let result = '';
  const maxMarks = Math.floor((intensity / 100) * 15) + 1; // 根据强度调整添加的字符数量

  for (let i = 0; i < text.length; i++) {
    result += text[i];
    
    // 添加上方组合字符
    let numMarks = Math.floor(Math.random() * maxMarks);
    for (let j = 0; j < numMarks; j++) {
      const randomZalgo = zalgoChars[Math.floor(Math.random() * zalgoChars.length)];
      result += randomZalgo;
    }
    
    // 添加下方组合字符
    numMarks = Math.floor(Math.random() * maxMarks);
    for (let j = 0; j < numMarks; j++) {
      const randomZalgo = zalgoChars[Math.floor(Math.random() * zalgoChars.length)];
      result += randomZalgo;
    }
  }
  
  return result;
}

// Vaporwave效果
function applyVaporwaveEffect(text: string): string {
  const fullWidthMap: {[key: string]: string} = {
    'a': 'ａ', 'b': 'ｂ', 'c': 'ｃ', 'd': 'ｄ', 'e': 'ｅ', 'f': 'ｆ', 'g': 'ｇ',
    'h': 'ｈ', 'i': 'ｉ', 'j': 'ｊ', 'k': 'ｋ', 'l': 'ｌ', 'm': 'ｍ', 'n': 'ｎ',
    'o': 'ｏ', 'p': 'ｐ', 'q': 'ｑ', 'r': 'ｒ', 's': 'ｓ', 't': 'ｔ', 'u': 'ｕ',
    'v': 'ｖ', 'w': 'ｗ', 'x': 'ｘ', 'y': 'ｙ', 'z': 'ｚ', 'A': 'Ａ', 'B': 'Ｂ',
    'C': 'Ｃ', 'D': 'Ｄ', 'E': 'Ｅ', 'F': 'Ｆ', 'G': 'Ｇ', 'H': 'Ｈ', 'I': 'Ｉ',
    'J': 'Ｊ', 'K': 'Ｋ', 'L': 'Ｌ', 'M': 'Ｍ', 'N': 'Ｎ', 'O': 'Ｏ', 'P': 'Ｐ',
    'Q': 'Ｑ', 'R': 'Ｒ', 'S': 'Ｓ', 'T': 'Ｔ', 'U': 'Ｕ', 'V': 'Ｖ', 'W': 'Ｗ',
    'X': 'Ｘ', 'Y': 'Ｙ', 'Z': 'Ｚ', '0': '０', '1': '１', '2': '２', '3': '３',
    '4': '４', '5': '５', '6': '６', '7': '７', '8': '８', '9': '９', ' ': '　',
    '!': '！', '@': '＠', '#': '＃', '$': '＄', '%': '％', '^': '＾', '&': '＆',
    '*': '＊', '(': '（', ')': '）', '-': '－', '_': '＿', '=': '＝', '+': '＋',
    '[': '［', ']': '］', '{': '｛', '}': '｝', ';': '；', ':': '：', "'": '＇',
    '"': '＂', ',': '，', '.': '．', '/': '／', '?': '？', '\\': '＼', '|': '｜',
    '<': '＜', '>': '＞', '`': '｀', '~': '～'
  };

  let result = '';
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    result += fullWidthMap[char] || char;
  }
  
  return result;
}

// Matrix效果
function applyMatrixEffect(text: string, intensity: number): string {
  const japaneseChars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
  const probability = intensity / 100;

  let result = '';
  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      result += ' ';
      continue;
    }

    if (Math.random() < probability) {
      // 使用日语假名替换字符
      const randIndex = Math.floor(Math.random() * japaneseChars.length);
      result += japaneseChars[randIndex];
    } else {
      result += text[i];
    }
  }
  
  return result;
}

// Binary效果
function applyBinaryEffect(text: string, intensity: number): string {
  const probability = intensity / 100;
  
  let result = '';
  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      result += ' ';
      continue;
    }

    if (Math.random() < probability) {
      // 替换为二进制数字
      result += Math.random() > 0.5 ? '1' : '0';
    } else {
      result += text[i];
    }
  }
  
  return result;
}

// Corrupt效果
function applyCorruptEffect(text: string, intensity: number): string {
  const corruptChars = '▓█▒░▒▓█▒░█▓▒░█▓▒▓█▒░';
  const probability = intensity / 200; // 降低一些概率，使效果更微妙
  
  let result = '';
  for (let i = 0; i < text.length; i++) {
    if (Math.random() < probability) {
      // 插入故障字符
      const randIndex = Math.floor(Math.random() * corruptChars.length);
      result += corruptChars[randIndex];
    }
    result += text[i];
  }
  
  return result;
} 