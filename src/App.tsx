import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'; // Leaving import but file is empty

// Pages
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfService from './pages/legal/TermsOfService';
import AIDisclaimer from './pages/legal/AIDisclaimer';

// Icons
const AppleIcon = () => (
  <svg className="w-7 h-7 fill-current" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z"/></svg>
);

const GooglePlayIcon = () => (
  <svg className="w-7 h-7 fill-current" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l221.7-221.7-221.7-221.7z"/></svg>
);

// Countdown Components
const formatTime = (totalSeconds: number) => {
  const days = Math.floor(totalSeconds / (24 * 3600));
  const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return {
    d: days.toString().padStart(2, '0'),
    h: hours.toString().padStart(2, '0'),
    m: minutes.toString().padStart(2, '0'),
    s: seconds.toString().padStart(2, '0')
  };
};

const AnimatedCountdownDisplay = () => {
  const [displayVal, setDisplayVal] = useState(1000);
  const [targetVal, setTargetVal] = useState(1000);
  
  // Setup the schedule
  useEffect(() => {
    // Generate initial: Random between 2 days (172800s) and 14 days (1209600s)
    const gen = () => Math.floor(Math.random() * (1209600 - 172800 + 1)) + 172800;
    const initial = gen();
    setDisplayVal(initial);
    setTargetVal(initial);
    
    // Ticking Logic
    const timer = setInterval(() => {
      setTargetVal(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);

    // Jump Logic: reset every 10 seconds
    const jumper = setInterval(() => {
      setTargetVal(gen());
    }, 10000);

    return () => {
      clearInterval(timer);
      clearInterval(jumper);
    };
  }, []);

  // Animation Logic
  useEffect(() => {
    let frameId: number;
    
    const update = () => {
      setDisplayVal(prev => {
        const diff = targetVal - prev;
        if (Math.abs(diff) < 2) return targetVal;
        return prev + diff * 0.1; 
      });
      frameId = requestAnimationFrame(update);
    };

    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, [targetVal]);

  const { d, h, m, s } = formatTime(Math.round(displayVal));

  return (
    <div className="flex items-center gap-2 md:gap-4 bg-white/10 backdrop-blur-md px-4 py-4 md:px-8 md:py-6 rounded-3xl border border-white/20 shadow-xl max-w-full">
      <div className="flex flex-col items-center min-w-[50px] md:min-w-[70px]">
        <span className="text-3xl md:text-5xl font-black leading-none tracking-tight tabular-nums">{d}</span>
        <span className="text-[0.6rem] md:text-xs font-bold mt-1 tracking-widest opacity-80">DAYS</span>
      </div>
      <span className="text-2xl md:text-4xl font-black opacity-60 mb-3">:</span>
      <div className="flex flex-col items-center min-w-[50px] md:min-w-[70px]">
        <span className="text-3xl md:text-5xl font-black leading-none tracking-tight tabular-nums">{h}</span>
        <span className="text-[0.6rem] md:text-xs font-bold mt-1 tracking-widest opacity-80">HRS</span>
      </div>
      <span className="text-2xl md:text-4xl font-black opacity-60 mb-3">:</span>
      <div className="flex flex-col items-center min-w-[50px] md:min-w-[70px]">
        <span className="text-3xl md:text-5xl font-black leading-none tracking-tight tabular-nums">{m}</span>
        <span className="text-[0.6rem] md:text-xs font-bold mt-1 tracking-widest opacity-80">MIN</span>
      </div>
      <span className="text-2xl md:text-4xl font-black opacity-60 mb-3">:</span>
      <div className="flex flex-col items-center min-w-[50px] md:min-w-[70px]">
        <span className="text-3xl md:text-5xl font-black leading-none tracking-tight tabular-nums">{s}</span>
        <span className="text-[0.6rem] md:text-xs font-bold mt-1 tracking-widest opacity-80">SEC</span>
      </div>
    </div>
  );
};

const MainContent = () => (
  <div className="w-full h-full overflow-y-auto">
    <div className="min-h-full w-full flex flex-col justify-center items-center py-16 px-6 pb-32 md:p-8 md:pb-32">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* LEFT COLUMN: Title, Subtitle, Heart */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
          <div>
            <h1 className="text-[10vh] lg:text-[15vh] leading-none font-black tracking-wider text-white drop-shadow-md">
              LUVIO
            </h1>
            <p className="text-xl lg:text-3xl font-medium opacity-95 drop-shadow-sm mt-4 max-w-xl mx-auto lg:mx-0">
              Bringing you the next-level dating experience
            </p>
          </div>

          <img 
            src="/luvio_heart.png"
            alt="Heart" 
            className="w-[20vh] lg:w-[25vh] animate-heartbeat object-contain"
          />
        </div>

        {/* RIGHT COLUMN: Coming Soon, Countdown, Buttons */}
        <div className="flex flex-col items-center lg:items-end space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-[0.2em] text-white drop-shadow-md text-center lg:text-right">
            COMING SOON
          </h2>

          <AnimatedCountdownDisplay />

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
            <a 
              href="#" 
              className="flex items-center gap-3 bg-black/40 hover:bg-black/60 border border-white/20 rounded-xl px-6 py-3 text-white transition-all hover:-translate-y-0.5 opacity-70 cursor-not-allowed"
              onClick={(e) => e.preventDefault()}
            >
              <AppleIcon />
              <div className="flex flex-col items-start leading-tight">
                <span className="text-xs font-normal opacity-80">Download on the</span>
                <span className="text-lg font-bold tracking-wide">App Store</span>
              </div>
            </a>
            
            <a 
              href="#" 
              className="flex items-center gap-3 bg-black/40 hover:bg-black/60 border border-white/20 rounded-xl px-6 py-3 text-white transition-all hover:-translate-y-0.5 opacity-70 cursor-not-allowed"
              onClick={(e) => e.preventDefault()}
            >
              <GooglePlayIcon />
              <div className="flex flex-col items-start leading-tight">
                <span className="text-xs font-normal opacity-80">GET IT ON</span>
                <span className="text-lg font-bold tracking-wide">Google Play</span>
              </div>
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
);

// Home Page
const Home = () => {
  return (
    <div 
      className="fixed inset-0 w-full h-full overflow-hidden text-white font-sans"
      style={{ 
        background: '#000000ef'
        // background: 'linear-gradient(90deg, #000000, #3a0e66, #9042F0, #C353A1, #FC5B66, #fe9544)' 
      }}
    >
      <MainContent />
      
      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 p-6 flex justify-center gap-6 md:gap-8 text-xs md:text-sm font-medium text-white/60 z-10 bg-gradient-to-t from-black/90 via-black/50 to-transparent backdrop-blur-[3px]">
        <Link to="/privacy-policy" className="hover:text-white hover:underline transition-colors">Privacy Policy</Link>
        <Link to="/terms-of-service" className="hover:text-white hover:underline transition-colors">Terms & Conditions</Link>
        <Link to="/ai-disclaimer" className="hover:text-white hover:underline transition-colors">AI Disclaimer</Link>
      </footer>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/ai-disclaimer" element={<AIDisclaimer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
