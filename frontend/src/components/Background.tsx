import GradientBlinds from './visuals/GradientBlinds';
import FloatingLines from './visuals/FloatingLines';

export default function Background() {
  return (
    <div className="ambient-bg" aria-hidden="true">
      <div className="ambient-layer">
        <GradientBlinds
          gradientColors={['#1a1f2b', '#0b1020', '#2b1140']}
          blindCount={14}
          spotlightOpacity={0.6}
          noise={0.28}
          shineDirection="right"
        />
      </div>
      <div className="ambient-layer" style={{ mixBlendMode: 'screen', opacity: 0.6 }}>
        <FloatingLines linesGradient={['#22d3ee', '#4f7cff']} lineCount={[3, 5, 3]} />
      </div>
      <div className="ambient-overlay" />
    </div>
  );
}
