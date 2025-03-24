export interface GlitchPreset {
  id: string;
  name: string;
  description: string;
  settings: {
    intensity: number;
    rgbSplit: number;
    scanlines: number;
    noise: number;
    pixelate: number;
    distortion: number;
  };
}

export const presets: GlitchPreset[] = [
  {
    id: 'cyberpunk',
    name: '赛博朋克',
    description: '强烈的RGB分离和扫描线效果，营造未来感',
    settings: {
      intensity: 0.8,
      rgbSplit: 0.7,
      scanlines: 0.6,
      noise: 0.3,
      pixelate: 0.1,
      distortion: 0.4
    }
  },
  {
    id: 'vhs',
    name: 'VHS录像带',
    description: '模拟老式录像带的画面失真效果',
    settings: {
      intensity: 0.6,
      rgbSplit: 0.4,
      scanlines: 0.8,
      noise: 0.5,
      pixelate: 0.3,
      distortion: 0.2
    }
  },
  {
    id: 'digital-decay',
    name: '数字衰减',
    description: '像素化和噪点效果，展现数据损坏的美感',
    settings: {
      intensity: 0.7,
      rgbSplit: 0.3,
      scanlines: 0.2,
      noise: 0.8,
      pixelate: 0.6,
      distortion: 0.5
    }
  },
  {
    id: 'minimal',
    name: '简约故障',
    description: '轻微的RGB分离，呈现微妙的故障感',
    settings: {
      intensity: 0.3,
      rgbSplit: 0.2,
      scanlines: 0.1,
      noise: 0.1,
      pixelate: 0.0,
      distortion: 0.1
    }
  },
  {
    id: 'extreme',
    name: '极限故障',
    description: '强烈的视觉冲击，完全破坏性的故障效果',
    settings: {
      intensity: 1.0,
      rgbSplit: 0.9,
      scanlines: 0.7,
      noise: 0.9,
      pixelate: 0.8,
      distortion: 0.9
    }
  }
]; 