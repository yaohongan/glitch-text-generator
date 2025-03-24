/**
 * 生成 Zalgo 样式的故障文本效果
 * @param text 原始文本
 * @param intensity 强度 (1-10)
 * @returns 故障效果文本
 */
export function generateZalgoText(text: string, intensity: number = 5): string {
  // 检查参数
  if (!text) return '';
  if (intensity < 1) intensity = 1;
  if (intensity > 10) intensity = 10;
  
  // 上方符号集
  const above = [
    '\u030d', '\u030e', '\u0304', '\u0305', '\u033f', '\u0311', '\u0306', '\u0310',
    '\u0352', '\u0357', '\u0351', '\u0307', '\u0308', '\u030a', '\u0342', '\u0343',
    '\u0344', '\u034a', '\u034b', '\u034c', '\u0303', '\u0302', '\u030c', '\u0350',
    '\u0300', '\u0301', '\u030b', '\u030f', '\u0312', '\u0313', '\u0314', '\u033d',
    '\u0309', '\u0363', '\u0364', '\u0365', '\u0366', '\u0367', '\u0368', '\u0369',
    '\u036a', '\u036b', '\u036c', '\u036d', '\u036e', '\u036f', '\u033e', '\u035b',
  ];
  
  // 中间符号集
  const middle = [
    '\u0315', '\u031b', '\u0340', '\u0341', '\u0358', '\u0321', '\u0322', '\u0327',
    '\u0328', '\u0334', '\u0335', '\u0336', '\u034f', '\u035c', '\u035d', '\u035e',
    '\u035f', '\u0360', '\u0362', '\u0338', '\u0337', '\u0361', '\u0489',
  ];
  
  // 下方符号集
  const below = [
    '\u0316', '\u0317', '\u0318', '\u0319', '\u031c', '\u031d', '\u031e', '\u031f',
    '\u0320', '\u0324', '\u0325', '\u0326', '\u0329', '\u032a', '\u032b', '\u032c',
    '\u032d', '\u032e', '\u032f', '\u0330', '\u0331', '\u0332', '\u0333', '\u0339',
    '\u033a', '\u033b', '\u033c', '\u0345', '\u0347', '\u0348', '\u0349', '\u034d',
    '\u034e', '\u0353', '\u0354', '\u0355', '\u0356', '\u0359', '\u035a', '\u0323',
  ];
  
  // 确定每个位置添加多少个符号
  const aboveCount = Math.floor(intensity * 0.8);
  const middleCount = Math.floor(intensity * 0.5);
  const belowCount = Math.floor(intensity * 0.7);
  
  // 转换文本
  let result = '';
  
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    result += char;
    
    // 添加上方符号
    for (let j = 0; j < aboveCount; j++) {
      const randomIndex = Math.floor(Math.random() * above.length);
      result += above[randomIndex];
    }
    
    // 添加中间符号
    for (let j = 0; j < middleCount; j++) {
      const randomIndex = Math.floor(Math.random() * middle.length);
      result += middle[randomIndex];
    }
    
    // 添加下方符号
    for (let j = 0; j < belowCount; j++) {
      const randomIndex = Math.floor(Math.random() * below.length);
      result += below[randomIndex];
    }
  }
  
  return result;
}

/**
 * 生成交替字符大小写的故障文本效果
 * @param text 原始文本
 * @returns 故障效果文本
 */
export function generateAlternatingCaseText(text: string): string {
  if (!text) return '';
  
  let result = '';
  for (let i = 0; i < text.length; i++) {
    if (i % 2 === 0) {
      result += text[i].toUpperCase();
    } else {
      result += text[i].toLowerCase();
    }
  }
  
  return result;
}

/**
 * 生成随机字符替换的故障文本效果
 * @param text 原始文本
 * @param intensity 强度 (1-10)
 * @returns 故障效果文本
 */
export function generateRandomReplaceText(text: string, intensity: number = 3): string {
  if (!text) return '';
  if (intensity < 1) intensity = 1;
  if (intensity > 10) intensity = 10;
  
  const glitchChars = ['#', '%', '&', '!', '@', '$', '*', '?', '<', '>', '/', '\\', '|', '}', '{', '~'];
  const replacementRate = intensity / 20; // 5% - 50% 替换率
  
  let result = '';
  for (let i = 0; i < text.length; i++) {
    if (Math.random() < replacementRate) {
      const randomIndex = Math.floor(Math.random() * glitchChars.length);
      result += glitchChars[randomIndex];
    } else {
      result += text[i];
    }
  }
  
  return result;
} 