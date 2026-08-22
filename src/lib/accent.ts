export type Accent = 'blue' | 'green' | 'orange' | 'purple';

export const accentText: Record<Accent, string> = {
  blue: 'text-rainbow-blue',
  green: 'text-rainbow-green',
  orange: 'text-rainbow-orange',
  purple: 'text-rainbow-purple',
};

export const accentBg: Record<Accent, string> = {
  blue: 'bg-rainbow-blue',
  green: 'bg-rainbow-green',
  orange: 'bg-rainbow-orange',
  purple: 'bg-rainbow-purple',
};

export const accentSoftBg: Record<Accent, string> = {
  blue: 'bg-rainbow-blue/10',
  green: 'bg-rainbow-green/10',
  orange: 'bg-rainbow-orange/10',
  purple: 'bg-rainbow-purple/10',
};

export const accentGradient: Record<Accent, string> = {
  blue: 'from-rainbow-blue/90 to-rainbow-blue/60',
  green: 'from-rainbow-green/90 to-rainbow-green/60',
  orange: 'from-rainbow-orange/90 to-rainbow-orange/60',
  purple: 'from-rainbow-purple/90 to-rainbow-purple/60',
};

export const accentBorder: Record<Accent, string> = {
  blue: 'border-rainbow-blue/30',
  green: 'border-rainbow-green/30',
  orange: 'border-rainbow-orange/30',
  purple: 'border-rainbow-purple/30',
};
