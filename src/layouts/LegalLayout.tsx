import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './LegalLayout.css';

interface LegalLayoutProps {
  children: ReactNode;
  title: string;
  lastUpdated?: string;
}

const LegalLayout = ({ children, title, lastUpdated }: LegalLayoutProps) => {
  return (
    <div style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'white',
      color: '#333',
      overflow: 'hidden' // Container is fixed, inner content scrolls
    }}>
      {/* Header */}
      <header style={{
        padding: '1.5rem 2rem',
        borderBottom: '1px solid #eee',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        zIndex: 10
      }}>
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
             <img src="/luvio_heart.png" alt="Luvio Logo" style={{ height: '26px' }} />
             <span style={{ fontWeight: 900, fontSize: '1.2rem', color: '#000' }}>Luvio</span>
        </Link>
        <Link to="/" style={{
          padding: '0.5rem 1rem',
          borderRadius: '20px',
          backgroundColor: '#f5f5f5',
          color: '#333',
          textDecoration: 'none',
          fontSize: '0.9rem',
          fontWeight: 600,
          transition: 'background-color 0.2s'
        }}>
          Close
        </Link>
      </header>

      {/* Scrollable Content Area */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        position: 'relative',
        scrollBehavior: 'smooth'
      }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '4rem 2rem',
          }}
        >
          <h1 style={{ 
            fontSize: '3rem', 
            marginBottom: '1rem',
            background: '-webkit-linear-gradient(45deg, #9042F0, #FC5B66)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.02em',
            lineHeight: 1.1
          }}>
            {title}
          </h1>
          
          {lastUpdated && (
            <p style={{ color: '#666', marginBottom: '3rem', fontSize: '0.95rem' }}>
              Last Updated: {lastUpdated}
            </p>
          )}

          <div className="legal-content">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LegalLayout;
