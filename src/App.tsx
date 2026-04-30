import { useTranslation } from 'react-i18next';
import { Plane, Globe, Camera, MapPin, Calendar, Gift, Ticket, Star } from 'lucide-react';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans pb-12">
      {/* Language Switcher */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-md mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-ifriend-blue">
            <Plane className="w-6 h-6 rotate-45" />
            <span>I-FRIEND</span>
          </div>
          <div className="flex gap-2">
            {[
              { code: 'en', label: 'EN' },
              { code: 'ja', label: 'JP' },
              { code: 'zh', label: 'CN' }
            ].map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`px-3 py-1 text-sm font-medium rounded-full transition-colors ${
                  i18n.language === lang.code
                    ? 'bg-ifriend-blue text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto">
        {/* Hero Section */}
        <section className="bg-ifriend-blue text-white px-6 py-12 text-center rounded-b-[3rem] shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-ifriend-red/20 rounded-full blur-2xl"></div>
          
          <Globe className="w-16 h-16 mx-auto mb-6 text-ifriend-red animate-pulse" />
          <h1 className="text-3xl font-extrabold mb-2 tracking-tight">
            {t('welcome')}
          </h1>
          <p className="text-blue-100 text-lg opacity-90">
            {t('subtitle')}
          </p>
        </section>

        {/* Steps Section */}
        <section className="px-6 py-8 space-y-6 -mt-8">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 transform transition-transform hover:scale-[1.02]">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
              <Ticket className="w-6 h-6 text-ifriend-blue" />
            </div>
            <h2 className="text-xl font-bold mb-2 text-ifriend-blue">{t('step1_title')}</h2>
            <p className="text-gray-600 leading-relaxed">{t('step1_desc')}</p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 transform transition-transform hover:scale-[1.02]">
            <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-ifriend-red" />
            </div>
            <h2 className="text-xl font-bold mb-2 text-ifriend-blue">{t('step2_title')}</h2>
            <p className="text-gray-600 leading-relaxed">{t('step2_desc')}</p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 transform transition-transform hover:scale-[1.02]">
            <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center mb-4">
              <Gift className="w-6 h-6 text-yellow-600" />
            </div>
            <h2 className="text-xl font-bold mb-2 text-ifriend-blue">{t('step3_title')}</h2>
            <p className="text-gray-600 leading-relaxed">{t('step3_desc')}</p>
            <div className="mt-4 p-3 bg-gray-50 rounded-xl text-sm italic text-gray-500 border-l-4 border-yellow-400">
              {t('prizes')}
            </div>
          </div>
        </section>

        {/* SNS Event Section */}
        <section className="px-6 py-4">
          <div className="bg-gradient-to-br from-purple-600 to-pink-500 p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden">
            <Camera className="absolute top-4 right-4 w-12 h-12 opacity-20 rotate-12" />
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Camera className="w-6 h-6" />
              {t('sns_title')}
            </h2>
            <div className="space-y-3 opacity-95">
              {t('sns_desc').split('\n').map((line, i) => (
                <p key={i} className="flex gap-2">
                  <span className="font-bold">{line.split('.')[0]}.</span>
                  <span>{line.split('.').slice(1).join('.')}</span>
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="px-6 py-8 space-y-4">
          <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
            <MapPin className="w-6 h-6 text-ifriend-red shrink-0" />
            <p className="font-medium text-gray-700">{t('location')}</p>
          </div>
          <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
            <Calendar className="w-6 h-6 text-ifriend-blue shrink-0" />
            <p className="font-medium text-gray-700">{t('date')}</p>
          </div>
        </section>
      </main>

      <footer className="text-center mt-8 px-6">
        <p className="text-gray-400 text-sm">© 2026 I-Friend Planning Team. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
