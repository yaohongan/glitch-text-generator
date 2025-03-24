export type GlitchEffectType = 'zalgo' | 'cyberpunk' | 'pixel' | 'vhs' | 'rgb';
export type GlitchDirection = 'up' | 'middle' | 'down' | 'all';

export interface GlitchEffect {
  type: GlitchEffectType;
  intensity: number; // 0-1
  direction: GlitchDirection;
  animation?: boolean;
}

export interface GlitchTemplate {
  id: string;
  name: string;
  category: 'gaming' | 'social' | 'brand' | 'seasonal';
  effects: GlitchEffect[];
  preview: string;
}

export interface GlitchConfig {
  maxIntensity: number;
  animationDuration: number;
  defaultType: GlitchEffectType;
  defaultDirection: GlitchDirection;
} 