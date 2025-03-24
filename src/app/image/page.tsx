'use client';

import { useState, useCallback } from 'react';
import { ImageGlitchEffect, applyImageGlitchEffect } from '@/lib/glitch/imageEffects';

const EFFECT_TYPES = ['shift', 'noise', 'scan', 'wave'] as const;

export default function ImageGlitch() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [currentEffect, setCurrentEffect] = useState<ImageGlitchEffect>({
    type: 'shift',
    strength: 0.5,
    color: true,
    seed: Math.random()
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEffectChange = useCallback(async (type: typeof EFFECT_TYPES[number]) => {
    setCurrentEffect(prev => ({ ...prev, type }));
    
    // 实时应用效果
    if (selectedImage) {
      try {
        const result = await applyImageGlitchEffect(selectedImage, {
          ...currentEffect,
          type
        });
        setProcessedImage(result);
      } catch (error) {
        console.error('Error processing image:', error);
      }
    }
  }, [selectedImage, currentEffect]);

  const handleStrengthChange = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStrength = parseFloat(e.target.value);
    setCurrentEffect(prev => ({ ...prev, strength: newStrength }));
    
    // 实时应用效果
    if (selectedImage) {
      try {
        const result = await applyImageGlitchEffect(selectedImage, {
          ...currentEffect,
          strength: newStrength
        });
        setProcessedImage(result);
      } catch (error) {
        console.error('Error processing image:', error);
      }
    }
  }, [selectedImage, currentEffect]);

  const handleColorToggle = useCallback(async () => {
    const newColorValue = !currentEffect.color;
    setCurrentEffect(prev => ({ ...prev, color: newColorValue }));
    
    // 实时应用效果
    if (selectedImage) {
      try {
        const result = await applyImageGlitchEffect(selectedImage, {
          ...currentEffect,
          color: newColorValue
        });
        setProcessedImage(result);
      } catch (error) {
        console.error('Error processing image:', error);
      }
    }
  }, [selectedImage, currentEffect]);

  const regenerateEffect = useCallback(async () => {
    if (selectedImage) {
      try {
        const newSeed = Math.random();
        setCurrentEffect(prev => ({ ...prev, seed: newSeed }));
        const result = await applyImageGlitchEffect(selectedImage, {
          ...currentEffect,
          seed: newSeed
        });
        setProcessedImage(result);
      } catch (error) {
        console.error('Error processing image:', error);
      }
    }
  }, [selectedImage, currentEffect]);

  const handleApplyEffect = useCallback(async () => {
    if (selectedImage) {
      try {
        const result = await applyImageGlitchEffect(selectedImage, currentEffect);
        setProcessedImage(result);
      } catch (error) {
        console.error('Error processing image:', error);
      }
    }
  }, [selectedImage, currentEffect]);

  const handleDownload = () => {
    if (processedImage) {
      const link = document.createElement('a');
      link.href = processedImage;
      link.download = 'glitch-effect.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          图片故障效果生成器
        </h1>

        {/* 图片上传区域 */}
        <div className="mb-8">
          <div className="flex justify-center">
            <label className="cursor-pointer bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-lg">
              选择图片
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </label>
          </div>
        </div>

        {selectedImage && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 控制面板 */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">效果设置</h2>
                
                {/* 效果类型选择 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {EFFECT_TYPES.map((type) => (
                    <button
                      key={type}
                      className={`px-4 py-2 rounded ${
                        currentEffect.type === type
                          ? 'bg-purple-600'
                          : 'bg-gray-700 hover:bg-gray-600'
                      }`}
                      onClick={() => handleEffectChange(type)}
                    >
                      {type}
                    </button>
                  ))}
                </div>

                {/* 强度滑块 */}
                <div className="mb-4">
                  <label className="block mb-2">强度</label>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={currentEffect.strength}
                    onChange={handleStrengthChange}
                    className="w-full"
                  />
                </div>

                {/* 颜色开关 */}
                <div className="mb-4">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={currentEffect.color}
                      onChange={handleColorToggle}
                      className="sr-only peer"
                    />
                    <div className="relative w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-purple-600">
                      <div className="absolute left-[2px] top-[2px] w-5 h-5 bg-white rounded-full transition-all peer-checked:translate-x-full"></div>
                    </div>
                    <span className="ml-3">保持颜色</span>
                  </label>
                </div>

                {/* 操作按钮 */}
                <div className="flex gap-4">
                  <button
                    onClick={handleApplyEffect}
                    className="flex-1 px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg"
                  >
                    应用效果
                  </button>
                  <button
                    onClick={regenerateEffect}
                    className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg"
                  >
                    重新生成
                  </button>
                </div>
              </div>
            </div>

            {/* 预览区域 */}
            <div>
              <div className="relative aspect-square bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src={processedImage || selectedImage}
                  alt="Preview"
                  className="w-full h-full object-contain"
                />
              </div>
              {processedImage && (
                <button
                  onClick={handleDownload}
                  className="mt-4 w-full px-6 py-3 bg-green-600 hover:bg-green-500 rounded-lg"
                >
                  下载图片
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
} 