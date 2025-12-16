import LegalMarkdownViewer from '../../components/LegalMarkdownViewer';
import termsMd from '../../content/Luvio - Terms & Conditions.docx.md?raw';

const TermsOfService = () => {
  return (
    <LegalMarkdownViewer 
      title="Terms & Conditions" 
      lastUpdated="December 12, 2025" 
      content={termsMd}
    />
  );
};

export default TermsOfService;
