import { GlitchEffect, GlitchEffectType, GlitchDirection } from './types';

// Zalgo文本字符集
const ZALGO_CHARS = {
  up: [
    '\u030d', '\u030e', '\u0304', '\u0305',
    '\u033f', '\u0311', '\u0306', '\u0310',
    '\u0352', '\u0357', '\u0351', '\u0307',
    '\u0308', '\u030a', '\u0342', '\u0343',
    '\u0344', '\u034a', '\u034b', '\u034c',
    '\u0303', '\u0302', '\u030c', '\u0350',
    '\u0300', '\u0301', '\u030b', '\u030f',
    '\u0312', '\u0313', '\u0314', '\u033d',
    '\u0309', '\u0363', '\u0364', '\u0365',
    '\u0366', '\u0367', '\u0368', '\u0369',
    '\u036a', '\u036b', '\u036c', '\u036d',
    '\u036e', '\u036f', '\u033e', '\u035b',
  ],
  middle: [
    '\u0315', '\u031b', '\u0340', '\u0341',
    '\u0358', '\u0321', '\u0322', '\u0327',
    '\u0328', '\u0334', '\u0335', '\u0336',
    '\u034f', '\u035c', '\u035d', '\u035e',
    '\u035f', '\u0360', '\u0362', '\u0338',
    '\u0337', '\u0361', '\u0489',
  ],
  down: [
    '\u0316', '\u0317', '\u0318', '\u0319',
    '\u031c', '\u031d', '\u031e', '\u031f',
    '\u0320', '\u0324', '\u0325', '\u0326',
    '\u0329', '\u032a', '\u032b', '\u032c',
    '\u032d', '\u032e', '\u032f', '\u0330',
    '\u0331', '\u0332', '\u0333', '\u0339',
    '\u033a', '\u033b', '\u033c', '\u0345',
    '\u0347', '\u0348', '\u0349', '\u034d',
    '\u034e', '\u0353', '\u0354', '\u0355',
    '\u0356', '\u0359', '\u035a', '\u0323',
  ],
};

// 生成Zalgo效果
const zalgoEffect = (text: string, intensity: number, direction: GlitchDirection): string => {
  const chars = text.split('');
  
  return chars.map(char => {
    let result = char;
    const count = Math.floor(intensity * 15); // 最多15个装饰字符
    
    const directions = direction === 'all' 
      ? ['up', 'middle', 'down'] 
      : [direction];
      
    directions.forEach(dir => {
      const zalgoChars = ZALGO_CHARS[dir as keyof typeof ZALGO_CHARS];
      for (let i = 0; i < count; i++) {
        const randChar = zalgoChars[Math.floor(Math.random() * zalgoChars.length)];
        result += randChar;
      }
    });
    
    return result;
  }).join('');
};

// 生成赛博朋克效果
const cyberpunkEffect = (text: string): string => {
  const cyberpunkChars = {
    'a': '4', 'e': '3', 'i': '1', 'o': '0',
    's': '5', 't': '7', 'b': '8', 'g': '9'
  };
  
  return text.split('').map(char => {
    const lowerChar = char.toLowerCase();
    return cyberpunkChars[lowerChar as keyof typeof cyberpunkChars] || char;
  }).join('');
};

// 生成像素效果
const pixelEffect = (text: string): string => {
  return text.split('').map(char => {
    return char + '\u0337'; // 添加删除线效果模拟像素
  }).join('');
};

// 生成VHS效果
const vhsEffect = (text: string): string => {
  return text.split('').map(char => {
    return Math.random() > 0.1 ? char : char + '\u0336'; // 随机添加横线模拟VHS效果
  }).join('');
};

// 生成RGB分离效果
const rgbEffect = (text: string): string => {
  const redText = '\u001b[31m' + text;
  const blueText = '\u001b[34m' + text;
  const greenText = '\u001b[32m' + text;
  return redText + blueText + greenText + '\u001b[0m';
};

// 主处理函数
export const applyGlitchEffect = (text: string, effect: GlitchEffect): string => {
  switch (effect.type) {
    case 'zalgo':
      return zalgoEffect(text, effect.intensity, effect.direction);
    case 'cyberpunk':
      return cyberpunkEffect(text);
    case 'pixel':
      return pixelEffect(text);
    case 'vhs':
      return vhsEffect(text);
    case 'rgb':
      return rgbEffect(text);
    default:
      return text;
  }
};

// 预设模板
export const defaultTemplates = [
  {
    id: 'gaming_intense',
    name: '游戏玩家',
    category: 'gaming',
    effects: [
      { type: 'zalgo', intensity: 0.7, direction: 'all' },
      { type: 'cyberpunk', intensity: 1, direction: 'all' }
    ],
    preview: 'Pro Gamer'
  },
  {
    id: 'social_subtle',
    name: '社交媒体',
    category: 'social',
    effects: [
      { type: 'vhs', intensity: 0.3, direction: 'middle' },
      { type: 'rgb', intensity: 0.5, direction: 'all' }
    ],
    preview: 'Social Media'
  },
  {
    id: 'brand_modern',
    name: '现代品牌',
    category: 'brand',
    effects: [
      { type: 'pixel', intensity: 0.4, direction: 'all' },
      { type: 'rgb', intensity: 0.3, direction: 'middle' }
    ],
    preview: 'Brand Name'
  }
]; 