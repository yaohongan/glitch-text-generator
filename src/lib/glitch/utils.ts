import { GlitchEffect, GlitchEffectType, GlitchDirection } from './types';

export const createGlitchEffect = (
  type: GlitchEffectType,
  intensity: number,
  direction: GlitchDirection
): GlitchEffect => ({
  type,
  intensity,
  direction
});

export const updateGlitchEffect = (
  effect: GlitchEffect,
  updates: Partial<GlitchEffect>
): GlitchEffect => ({
  ...effect,
  ...updates
}); 