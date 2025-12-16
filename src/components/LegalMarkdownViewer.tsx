import type { ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import LegalLayout from '../layouts/LegalLayout';

interface LegalMarkdownViewerProps {
  title: string;
  content: string; // The raw markdown string
  lastUpdated?: string;
  children?: ReactNode; // Optional extra content
}

const LegalMarkdownViewer = ({ title, content, lastUpdated }: LegalMarkdownViewerProps) => {
  return (
    <LegalLayout title={title} lastUpdated={lastUpdated}>
      <div className="legal-content">
        <ReactMarkdown>
          {content}
        </ReactMarkdown>
      </div>
    </LegalLayout>
  );
};

export default LegalMarkdownViewer;
