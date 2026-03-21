import './FloatingGradientBackground.css';

interface FloatingGradientBackgroundProps {
  color1?: string;
  color2?: string;
  cycleDuration?: number; // in seconds
  blurSigma?: number;
  bubbleOpacity?: number;
}

const FloatingGradientBackground = ({
  color1 = '#9042F0',
  color2 = '#C353A1',
  cycleDuration = 12,
  blurSigma = 80,
  bubbleOpacity = 0.45,
}: FloatingGradientBackgroundProps) => {
  return (
    <div 
      className="floating-gradient-bg" 
      style={{ 
        '--cycle-duration': `${cycleDuration}s`, 
        '--blur': `${blurSigma}px`, 
        '--opacity': bubbleOpacity 
      } as React.CSSProperties}
    >
      <div className="bubble bubble1" style={{ '--color': color1 } as React.CSSProperties}></div>
      <div className="bubble bubble2" style={{ '--color': color2 } as React.CSSProperties}></div>
    </div>
  );
};

export default FloatingGradientBackground;
