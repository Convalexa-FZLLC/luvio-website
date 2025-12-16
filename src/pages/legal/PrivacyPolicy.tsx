import LegalMarkdownViewer from '../../components/LegalMarkdownViewer';
import privacyMd from '../../content/Luvio - Privacy Policy.docx.md?raw';

const PrivacyPolicy = () => {
  return (
    <LegalMarkdownViewer 
      title="Privacy Policy" 
      lastUpdated="December 12, 2025" 
      content={privacyMd} 
    />
  );
};

export default PrivacyPolicy;
