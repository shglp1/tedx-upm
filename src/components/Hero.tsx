import { useTranslation } from 'react-i18next';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.dir() === 'rtl';

    return (
        <section id="home" className="relative overflow-hidden bg-madinah-dark text-white min-h-[100dvh] flex items-center justify-center">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 via-black/50 to-black/90 z-10"></div>
                {/* Abstract Light Elements representing 'From Its Light' */}
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-tedx-red/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-madinah-gold/20 rounded-full blur-[100px] animate-pulse delay-700"></div>
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium tracking-wide mb-6 text-madinah-gold">
                        {t('common.date')} • {t('common.location')}
                    </span>
                    <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-tight tracking-tight">
                        <span className="inline-flex items-baseline leading-none" dir="ltr">
                            <span className="text-tedx-red">TED</span>
                            <span className="text-tedx-red text-[0.75em] px-[1px]">x</span>
                            <span className="text-gray-300 ms-2 md:ms-4">UPM</span>
                        </span>
                        <span className="block text-4xl md:text-6xl mt-2 font-arabic text-tedx-red">
                            {t('hero.theme')}
                        </span>
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                        {t('hero.subtitle')}
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('about-upm')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-10 py-4 bg-tedx-red text-white font-bold rounded-full shadow-lg shadow-tedx-red/30 hover:shadow-tedx-red/50 hover:brightness-110 transition-all flex items-center gap-2 group"
                        >
                            {t('hero.cta')}
                            {isRTL ? <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> : <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                        </motion.button>
                        <button
                            onClick={() => document.getElementById('about-tedx')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-10 py-4 bg-transparent border border-white/30 text-white font-medium rounded-full hover:bg-white hover:text-black hover:border-white transition-all backdrop-blur-sm"
                        >
                            {t('nav.about_tedx')}
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
                onClick={() => document.getElementById('about-tedx')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent mx-auto"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
