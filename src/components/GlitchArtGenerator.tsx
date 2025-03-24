'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Slider } from './ui/slider';
import { Button } from './ui/button';
import { presets, type GlitchPreset } from '@/lib/presets';

interface GlitchEffect {
  intensity: number;
  rgbSplit: number;
  scanlines: number;
  noise: number;
  pixelate: number;
  distortion: number;
}

export const GlitchArtGenerator: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [effects, setEffects] = useState<GlitchEffect>({
    intensity: 0.5,
    rgbSplit: 0.3,
    scanlines: 0.2,
    noise: 0.1,
    pixelate: 0.0,
    distortion: 0.2
  });
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setSelectedImage(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const applyPreset = (preset: GlitchPreset) => {
    setEffects(preset.settings);
  };

  const applyGlitchEffect = () => {
    if (!canvasRef.current || !selectedImage) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      
      // Base image
      ctx.drawImage(img, 0, 0);
      
      // Apply pixelation
      if (effects.pixelate > 0) {
        const size = Math.ceil(effects.pixelate * 20);
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');
        if (tempCtx) {
          tempCanvas.width = canvas.width / size;
          tempCanvas.height = canvas.height / size;
          tempCtx.drawImage(canvas, 0, 0, tempCanvas.width, tempCanvas.height);
          ctx.drawImage(
            tempCanvas, 
            0, 0, tempCanvas.width, tempCanvas.height,
            0, 0, canvas.width, canvas.height
          );
        }
      }
      
      // RGB Split and Noise
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const { data } = imageData;
      
      for (let i = 0; i < data.length; i += 4) {
        // RGB Split
        const offset = Math.floor(effects.rgbSplit * 20);
        if (i + offset * 4 < data.length) {
          data[i] = data[i + offset * 4]; // Red channel shift
        }
        
        // Add noise
        if (Math.random() < effects.noise) {
          data[i] = data[i + 1] = data[i + 2] = Math.random() * 255;
        }

        // Apply distortion
        if (effects.distortion > 0 && Math.random() < effects.distortion) {
          const shift = Math.floor(Math.random() * 20) * 4;
          if (i + shift < data.length) {
            data[i] = data[i + shift];
            data[i + 1] = data[i + shift + 1];
            data[i + 2] = data[i + shift + 2];
          }
        }
      }
      
      ctx.putImageData(imageData, 0, 0);
      
      // Scanlines
      if (effects.scanlines > 0) {
        for (let y = 0; y < canvas.height; y += 2) {
          ctx.fillStyle = `rgba(0, 0, 0, ${effects.scanlines})`;
          ctx.fillRect(0, y, canvas.width, 1);
        }
      }
    };
    img.src = selectedImage;
  };

  useEffect(() => {
    if (selectedImage) {
      applyGlitchEffect();
    }
  }, [selectedImage, effects]);

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      <div className="w-full md:w-2/3 bg-gray-900 rounded-lg p-6">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="mb-4"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="text-sm text-gray-300 mb-2 block">强度</label>
            <Slider
              value={[effects.intensity]}
              onValueChange={([value]) => setEffects(prev => ({ ...prev, intensity: value }))}
              max={1}
              step={0.1}
            />
          </div>
          
          <div>
            <label className="text-sm text-gray-300 mb-2 block">RGB分离</label>
            <Slider
              value={[effects.rgbSplit]}
              onValueChange={([value]) => setEffects(prev => ({ ...prev, rgbSplit: value }))}
              max={1}
              step={0.1}
            />
          </div>
          
          <div>
            <label className="text-sm text-gray-300 mb-2 block">扫描线</label>
            <Slider
              value={[effects.scanlines]}
              onValueChange={([value]) => setEffects(prev => ({ ...prev, scanlines: value }))}
              max={1}
              step={0.1}
            />
          </div>
          
          <div>
            <label className="text-sm text-gray-300 mb-2 block">噪点</label>
            <Slider
              value={[effects.noise]}
              onValueChange={([value]) => setEffects(prev => ({ ...prev, noise: value }))}
              max={1}
              step={0.1}
            />
          </div>

          <div>
            <label className="text-sm text-gray-300 mb-2 block">像素化</label>
            <Slider
              value={[effects.pixelate]}
              onValueChange={([value]) => setEffects(prev => ({ ...prev, pixelate: value }))}
              max={1}
              step={0.1}
            />
          </div>

          <div>
            <label className="text-sm text-gray-300 mb-2 block">失真</label>
            <Slider
              value={[effects.distortion]}
              onValueChange={([value]) => setEffects(prev => ({ ...prev, distortion: value }))}
              max={1}
              step={0.1}
            />
          </div>
        </div>
        
        <canvas
          ref={canvasRef}
          className="w-full border border-gray-700 rounded"
        />
        
        <Button
          onClick={() => {
            const link = document.createElement('a');
            link.download = 'glitch-art.png';
            link.href = canvasRef.current?.toDataURL() || '';
            link.click();
          }}
          className="mt-4"
        >
          下载作品
        </Button>
      </div>

      <div className="w-full md:w-1/3 bg-gray-900 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">预设效果</h3>
        <div className="space-y-4">
          {presets.map((preset) => (
            <button
              key={preset.id}
              onClick={() => applyPreset(preset)}
              className="w-full p-4 text-left bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <h4 className="font-medium mb-1">{preset.name}</h4>
              <p className="text-sm text-gray-400">{preset.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}; 