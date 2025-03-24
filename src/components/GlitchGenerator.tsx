'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { 
  generateZalgoText, 
  generateAlternatingCaseText, 
  generateRandomReplaceText 
} from '@/lib/glitchText';

type GlitchType = 'zalgo' | 'alternatingCase' | 'randomReplace';

export function GlitchGenerator() {
  const t = useTranslations('generator');
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [glitchType, setGlitchType] = useState<GlitchType>('zalgo');
  const [intensity, setIntensity] = useState(5);
  const [copied, setCopied] = useState(false);

  // 生成故障文本
  const generateGlitchText = () => {
    if (!inputText) return;

    let result = '';
    switch(glitchType) {
      case 'zalgo':
        result = generateZalgoText(inputText, intensity);
        break;
      case 'alternatingCase':
        result = generateAlternatingCaseText(inputText);
        break;
      case 'randomReplace':
        result = generateRandomReplaceText(inputText, intensity);
        break;
      default:
        result = inputText;
    }

    setOutputText(result);
  };

  // 复制到剪贴板
  const copyToClipboard = async () => {
    if (!outputText) return;
    
    try {
      await navigator.clipboard.writeText(outputText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  // 重置所有状态
  const resetAll = () => {
    setInputText('');
    setOutputText('');
    setGlitchType('zalgo');
    setIntensity(5);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 border rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block mb-2 font-medium">
          {t('inputLabel')}
        </label>
        <textarea
          className="w-full h-32 p-2 border rounded mb-2"
          placeholder={t('inputPlaceholder')}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-2 font-medium">{t('effectType')}</label>
          <select
            className="w-full p-2 border rounded"
            value={glitchType}
            onChange={(e) => setGlitchType(e.target.value as GlitchType)}
          >
            <option value="zalgo">{t('effects.zalgo')}</option>
            <option value="alternatingCase">{t('effects.alternatingCase')}</option>
            <option value="randomReplace">{t('effects.randomReplace')}</option>
          </select>
        </div>
        
        {glitchType !== 'alternatingCase' && (
          <div>
            <label className="block mb-2 font-medium">{t('intensity')}: {intensity}</label>
            <input
              type="range"
              min="1"
              max="10"
              value={intensity}
              onChange={(e) => setIntensity(Number(e.target.value))}
              className="w-full"
            />
          </div>
        )}
      </div>

      <div className="flex gap-2 mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          onClick={generateGlitchText}
          disabled={!inputText}
        >
          {t('generateButton')}
        </button>
        
        <button
          className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
          onClick={resetAll}
        >
          {t('resetButton')}
        </button>
      </div>

      {outputText && (
        <div className="mt-6">
          <label className="block mb-2 font-medium">{t('result')}</label>
          <div className="p-4 border rounded bg-gray-50 min-h-[100px] mb-2 break-words select-all">
            {outputText}
          </div>
          
          <button
            className={`${
              copied ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-600'
            } text-white py-2 px-4 rounded`}
            onClick={copyToClipboard}
          >
            {copied ? t('copied') : t('copyButton')}
          </button>
        </div>
      )}
    </div>
  );
} 