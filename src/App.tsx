import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const currentLang = i18n.language;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
  }, [i18n.language]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>{i18n.language === 'ar' ? 'TEDx UPM - من نورها | جامعة الأمير مقرن' : 'TEDx UPM - From Its Light | Prince Muqrin University'}</title>
        <meta name="description" content={i18n.language === 'ar' ? "فعالية TEDx UPM 2026 في المدينة المنورة - نور الفكرة بنور المكان." : "TEDx UPM 2026 in Madinah - The Light of Ideas with the Light of Place."} />
        <meta name="keywords" content="TEDx, TEDx UPM, Madinah, Prince Muqrin University, Vision 2030, Tourism, Hospitality" />
      </Helmet>
      <Layout>
        <Home />
      </Layout>
    </HelmetProvider>
  );
}

export default App;
