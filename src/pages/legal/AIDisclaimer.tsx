import LegalMarkdownViewer from '../../components/LegalMarkdownViewer';
import aiDisclaimerMd from '../../content/Luvio - AI Disclaimer.docx.md?raw';

const AIDisclaimer = () => {
  return (
    <LegalMarkdownViewer 
      title="AI Disclaimer" 
      lastUpdated="December 12, 2025" 
      content={aiDisclaimerMd} 
    />
  );
};

export default AIDisclaimer;
