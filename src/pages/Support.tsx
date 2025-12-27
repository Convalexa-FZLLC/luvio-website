import { useState } from 'react';
import LegalLayout from '../layouts/LegalLayout';

const Support = () => {
  const [copied, setCopied] = useState(false);
  const email = 'support@luvio.ca';

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <LegalLayout 
      title="Need help with Luvio?" 
      subtitle="We're here to help"
    >
      <div style={{ lineHeight: '1.6', fontSize: '1.1rem', color: '#444' }}>
        <p style={{ marginBottom: '2rem' }}>
          If you need help with your account, subscriptions, privacy, or how Luvio works, our team is here for you. 
          Reach out anytime and we'll get back to you as soon as possible.
        </p>

        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          gap: '1rem',
          padding: '2rem',
          backgroundColor: '#f9f9f9',
          borderRadius: '16px',
          border: '1px solid #eee'
        }}>
          <span style={{ fontWeight: 600, color: '#666', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Email Us
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a 
              href={`mailto:${email}`}
              style={{ 
                fontSize: '1.5rem', 
                fontWeight: 700, 
                color: '#9042F0',
                textDecoration: 'none',
                transition: 'opacity 0.2s'
              }}
              onMouseOver={(e) => (e.currentTarget.style.opacity = '0.8')}
              onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
            >
              {email}
            </a>
            
            <button
              onClick={handleCopy}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                border: '1px solid #ddd',
                backgroundColor: 'white',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: 600,
                color: '#555',
                transition: 'all 0.2s',
                position: 'relative'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#f5f5f5';
                e.currentTarget.style.borderColor = '#ccc';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.borderColor = '#ddd';
              }}
            >
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>

        <div style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: '#222' }}>Account & Security</h3>
            <p style={{ fontSize: '0.95rem', color: '#666' }}>Questions about login, password resets, or account deletion.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: '#222' }}>Subscriptions</h3>
            <p style={{ fontSize: '0.95rem', color: '#666' }}>Contact us about your premium features, billing, and cancellations.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: '#222' }}>How it Works</h3>
            <p style={{ fontSize: '0.95rem', color: '#666' }}>Learn how to use Luvio's unique features to help you find your match.</p>
          </div>
        </div>
      </div>
    </LegalLayout>
  );
};

export default Support;
