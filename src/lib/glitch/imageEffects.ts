export interface ImageGlitchEffect {
  type: 'shift' | 'noise' | 'scan' | 'wave';
  strength: number;
  color: boolean;
  seed: number;
}

// 创建Canvas元素
const createCanvas = (width: number, height: number): HTMLCanvasElement => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  return canvas;
};

// 加载图片
const loadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

// 位移故障效果
const applyShiftEffect = (
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  strength: number,
  seed: number
) => {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const { data } = imageData;
  const amount = Math.floor(strength * 50);

  for (let i = 0; i < data.length; i += 4) {
    if (Math.random() < 0.1) {
      const shift = Math.floor(Math.random() * amount);
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      if (Math.random() < 0.5) {
        data[i + shift * 4] = r;
        data[i + shift * 4 + 1] = g;
        data[i + shift * 4 + 2] = b;
      } else {
        data[i - shift * 4] = r;
        data[i - shift * 4 + 1] = g;
        data[i - shift * 4 + 2] = b;
      }
    }
  }

  ctx.putImageData(imageData, 0, 0);
};

// 噪点故障效果
const applyNoiseEffect = (
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  strength: number,
  seed: number
) => {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const { data } = imageData;
  const amount = strength * 400;

  for (let i = 0; i < data.length; i += 4) {
    if (Math.random() < 0.15) {
      const noise = (Math.random() - 0.5) * amount;
      data[i] = Math.max(0, Math.min(255, data[i] + noise));
      data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise));
      data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise));
    }
  }

  ctx.putImageData(imageData, 0, 0);
};

// 扫描线故障效果
const applyScanEffect = (
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  strength: number,
  seed: number
) => {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const { data } = imageData;
  const scanLineHeight = Math.floor(2 + (1 - strength) * 8);

  for (let y = 0; y < canvas.height; y++) {
    if (y % scanLineHeight === 0) {
      for (let x = 0; x < canvas.width; x++) {
        const i = (y * canvas.width + x) * 4;
        const brightness = 1.8 + strength;
        data[i] = Math.min(255, data[i] * brightness);
        data[i + 1] = Math.min(255, data[i + 1] * brightness);
        data[i + 2] = Math.min(255, data[i + 2] * brightness);
      }
    }
  }

  ctx.putImageData(imageData, 0, 0);
};

// 波浪故障效果
const applyWaveEffect = (
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  strength: number,
  seed: number
) => {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const { data } = imageData;
  const amplitude = strength * 40;
  const frequency = 0.05;

  const tempCanvas = createCanvas(canvas.width, canvas.height);
  const tempCtx = tempCanvas.getContext('2d')!;
  tempCtx.putImageData(imageData, 0, 0);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let y = 0; y < canvas.height; y++) {
    const displacement = Math.sin(y * frequency + seed * 10) * amplitude;
    const verticalShift = Math.cos(y * frequency * 0.5 + seed * 5) * amplitude * 0.3;
    ctx.drawImage(
      tempCanvas,
      0, y, canvas.width, 1,
      displacement, y + verticalShift, canvas.width, 1
    );
  }
};

// 主处理函数
export const applyImageGlitchEffect = async (
  imageUrl: string,
  effect: ImageGlitchEffect
): Promise<string> => {
  try {
    const img = await loadImage(imageUrl);
    const canvas = createCanvas(img.width, img.height);
    const ctx = canvas.getContext('2d')!;

    // 绘制原始图片
    ctx.drawImage(img, 0, 0);

    // 应用故障效果
    switch (effect.type) {
      case 'shift':
        applyShiftEffect(ctx, canvas, effect.strength, effect.seed);
        break;
      case 'noise':
        applyNoiseEffect(ctx, canvas, effect.strength, effect.seed);
        break;
      case 'scan':
        applyScanEffect(ctx, canvas, effect.strength, effect.seed);
        break;
      case 'wave':
        applyWaveEffect(ctx, canvas, effect.strength, effect.seed);
        break;
    }

    // 返回处理后的图片URL
    return canvas.toDataURL('image/png');
  } catch (error) {
    console.error('Image processing error:', error);
    throw error;
  }
}; 